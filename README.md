# laurawinslow.com

Portfolio, children's books and wholesale site for Laura Winslow (Watercolor Tales).
Built with [Eleventy](https://www.11ty.dev/) and edited through [Decap CMS](https://decapcms.org/) at `/admin`.

## Run it locally

```bash
npm install
npm start          # site at http://localhost:8080
npm run cms        # in a second terminal: editor at http://localhost:8080/admin/ without logging in
```

`npm run build` writes the finished site to `public/`.

## Where things live

| What | File |
| --- | --- |
| Paintings (one file each) | `src/content/paintings/*.md` |
| Painting photos | `src/assets/uploads/paintings/` |
| Children's books | `src/content/books/*.md` (`published: false` hides a book) |
| Contact details, links, Faire Direct link, galleries | `src/_data/site.json` |
| Home page text and top painting | `src/_data/home.json` |
| Wholesale page | `src/_data/wholesale.json` |
| About page | `src/pages/about.md` |
| Subjects (categories) | `src/_data/categories.json` (also update the options in `src/admin/config.yml`) |
| Styles | `src/assets/css/site.css` |

Anything still empty shows on the site as a yellow dashed `[placeholder]` box. Fill the field and it disappears.

Images are resized at build time (480, 960 and 1600 px, WebP and JPEG), so full-size scans can be uploaded.

## Turning on the editor for Laura (one time, in Netlify)

1. Site configuration → Identity → **Enable Identity**.
2. Identity → Registration → set to **Invite only**.
3. Identity → Services → **Enable Git Gateway**.
4. Identity → **Invite users** → Laura's email. The invite link opens the editor so she can set a password.
5. Forms: the contact, wholesale and newsletter forms use Netlify Forms. Turn on form detection under Forms, and add an email notification so messages reach watercolortalesart@gmail.com.

## How Laura adds a painting

1. Go to laurawinslow.com/admin and log in.
2. Paintings → **New Painting**.
3. Upload the photo, type the title, pick a subject, fill in medium and size.
4. Paste the Etsy link if prints or cards are for sale. Tick "Show on the home page" if you want it featured.
5. **Publish**. The site updates in about a minute.

## Notes

- The 69 paintings were loaded from Laura's page at Sylvan Gallery (titles, medium, size and whether the original was available, as of October 2026). Replace the photos with her own scans when she has them.
- Three books (Rudder and the Great Blue Heron, The Penguin Who Thought He Was a Gull, I Know Who Loves Me) matched her name on Amazon but aren't confirmed, so they're hidden until she confirms them.
