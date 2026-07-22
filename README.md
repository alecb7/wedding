# Zara & Alec — Wedding Website

A single page wedding website for Zara and Alec, who are getting married at Sheen Falls Lodge, Kenmare, Co. Kerry on 09 April 2027. The design follows the save the date stationery, with a cream background, an engraved style illustration of the lodge, calligraphy names and letter spaced serif details.

## Running locally

No build step is required. Serve the folder with any static file server, for example

```sh
python3 -m http.server 4173
```

then open http://localhost:4173.

## Structure

- `index.html` — the whole site, including the inline SVG illustration
- `css/styles.css` — all styling and the colour palette (defined as CSS variables in `:root`)
- `js/main.js` — the countdown in the hero
- `assets/` — drop the original save the date artwork or photographs here when ready

## To do before launch

- Fill in the church name in the ceremony line of `index.html` (marked with a TODO comment)
- Confirm the €570 and €290 wedding rates with Sheen Falls Lodge
- Restore the commented out RSVP section, and its nav link, once invitations go out
