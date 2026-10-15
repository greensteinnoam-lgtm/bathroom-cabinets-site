# Static Site Generation

Edit product data in `catalog-products.json` and product markup in `product-page.html`.
The shared navigation lives in `header.html` and `footer.html`.

Run `node build/generate.cjs` from the site root after these edits.
This regenerates product HTML, the browser catalog data, shared navigation on the other pages, and `sitemap.xml`.
No framework, server-side runtime, or hosting build command is required to serve the generated files.

Keep price backups outside this repository. Do not add offers or prices to public product data.
