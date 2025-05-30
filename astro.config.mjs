// import { defineConfig } from "astro/config";
// // import tailwindcss from '@tailwindcss/vite';

// import alpinejs from "@astrojs/alpinejs";

// // https://astro.build/config
// export default defineConfig({
//   // vite: {
//   //   plugins: [tailwindcss()],
//   // },
//   integrations: [alpinejs()],
// });

import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import alpinejs from "@astrojs/alpinejs";

export default defineConfig({
  integrations: [tailwind(), alpinejs()],
});
