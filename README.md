# Zara & Alec — Wedding Website

A single page wedding website for Zara and Alec, who are getting married at Sheen Falls Lodge, Kenmare, Co. Kerry on 09 April 2027. The design follows the save the date stationery, with a cream background, an engraved style illustration of the lodge, calligraphy names and letter spaced serif details.

## Running locally

No build step is required. Serve the folder with any static file server, for example

```sh
python3 -m http.server 4173
```

then open http://localhost:4173.

## Structure

- `index.html` — home page with the save the date artwork and countdown
- `our-day.html` — ceremony, celebration, day after and the adults only note (no timings until invites go out)
- `travel.html` — getting there and where to stay
- `contact.html` — contact details

Photos live in `assets/photos/` and are placed beside text in alternating
left/right `media-row` sections across the pages (add class `flip` to put the
photo on the right).
- `css/styles.css` — all styling and the colour palette (defined as CSS variables in `:root`)
- `js/main.js` — the countdown on the home page
- `assets/` — the save the date artwork and, in time, photographs

## To do before launch

- Confirm the €570 and €290 wedding rates with Sheen Falls Lodge
- Add more photos of Zara and Alec to `assets/photos/` and weave them into the pages
- Add timings back to `our-day.html` once the invitations have gone out
- Add an RSVP page once invitations go out
