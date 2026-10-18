import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";

export default function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy("src/assets");
	eleventyConfig.addPassthroughCopy("src/admin");
	eleventyConfig.addPassthroughCopy({ "src/_redirects": "_redirects" });
	eleventyConfig.addPassthroughCopy({ "src/robots.txt": "robots.txt" });

	// Every <img> pointing at an uploaded painting is resized at build time into
	// several widths (WebP + JPEG), so Laura can upload a large scan through the
	// editor and visitors still get small, fast files.
	eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
		formats: ["webp", "jpeg"],
		widths: [480, 960, 1600],
		outputDir: "public/img/",
		urlPath: "/img/",
		htmlOptions: { imgAttributes: { loading: "lazy", decoding: "async" } },
	});

	eleventyConfig.addCollection("paintings", (api) =>
		api
			.getFilteredByGlob("src/content/paintings/*.md")
			.sort((a, b) => (a.data.order ?? 999) - (b.data.order ?? 999) || a.data.title.localeCompare(b.data.title))
	);

	eleventyConfig.addCollection("books", (api) =>
		api
			.getFilteredByGlob("src/content/books/*.md")
			.filter((b) => b.data.published !== false)
			.sort((a, b) => (a.data.order ?? 999) - (b.data.order ?? 999))
	);

	eleventyConfig.addFilter("inCategory", (items, key) => items.filter((i) => i.data.category === key));
	eleventyConfig.addFilter("featured", (items) => items.filter((i) => i.data.featured));
	eleventyConfig.addFilter("findBySlug", (items, slug) => items.find((i) => i.page.fileSlug === slug));
	eleventyConfig.addFilter("paintingsForBook", (items, slug) => items.filter((i) => i.data.book === slug));
	eleventyConfig.addFilter("categoryLabel", (key, categories) => (categories.find((c) => c.key === key) || {}).label || key);
	eleventyConfig.addFilter("neighbors", (items, url) => {
		const i = items.findIndex((p) => p.url === url);
		return { prev: items[i - 1], next: items[i + 1] };
	});
	eleventyConfig.addFilter("withValue", (items = []) => items.filter((i) => i && i.value));
	eleventyConfig.addFilter("year", () => new Date().getFullYear());
	eleventyConfig.addFilter("absUrl", (url, base) => new URL(url, base).href);

	return {
		dir: { input: "src", output: "public", includes: "_includes", data: "_data" },
		markdownTemplateEngine: "njk",
		htmlTemplateEngine: "njk",
	};
}
