// Builds tailwind.css from the classes used in the site's HTML files.
// Rebuild after adding new Tailwind classes to any page:
//   npx tailwindcss@3.4.17 -i tailwind.input.css -o tailwind.css --minify
// then bump the ?v= number on the <link href="tailwind.css?v=..."> in every page.
module.exports = {
  content: ['./*.html'],
  theme: { extend: {} },
  plugins: [],
};
