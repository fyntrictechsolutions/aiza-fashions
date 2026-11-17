# Aiza Fashions – COD shop

Single-page, frontend-only shop for Aiza Fashions jhumka sets. Cash on Delivery only.

- Edit products, prices and the owner's WhatsApp number in the `SHOP` / `PRODUCTS` block at the top of the script in `index.html`.
- On "Place order" the site opens WhatsApp (wa.me) with the order ID, items, total and address filled in; the customer taps Send.
- No build step. Host on GitHub Pages (Settings → Pages → deploy from branch `main`, root).
- After changing files, bump `VERSION` in `sw.js` so returning visitors get the update.
