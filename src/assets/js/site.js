
// Mobile menu
const toggle = document.querySelector(".nav-toggle");
const nav = document.getElementById("site-nav");
if (toggle && nav) {
	toggle.addEventListener("click", () => {
		const open = nav.classList.toggle("is-open");
		toggle.setAttribute("aria-expanded", String(open));
		toggle.textContent = open ? "Close" : "Menu";
	});
}

// "Ask about this painting" fills in the painting's title on the contact form
const field = document.getElementById("painting-field");
if (field) {
	const title = new URLSearchParams(location.search).get("painting");
	if (title) field.value = title;
}
