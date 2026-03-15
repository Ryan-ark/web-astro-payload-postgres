import { e as createComponent, m as maybeRenderHead, g as addAttribute, l as renderSlot, r as renderTemplate, h as createAstro, k as renderComponent, n as renderHead } from './astro/server_D9j1HrlC.mjs';
/* empty css                          */

const $$Astro$2 = createAstro();
const $$Container = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Container;
  const { class: className = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`, "class")}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "C:/Users/LEGION/Documents/Template making/Web/Astro + TypeScript + Tailwind + headless CMS + PostgreSQL/apps/web/src/components/layout/Container.astro", void 0);

const $$Astro$1 = createAstro();
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer class="border-t border-slate-200 bg-white"> ${renderComponent($$result, "Container", $$Container, { "class": "flex flex-col gap-2 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between" }, { "default": ($$result2) => renderTemplate` <p>Astro frontend with Payload CMS and PostgreSQL.</p> <p>Designed for local development and Vercel deployment.</p> ` })} </footer>`;
}, "C:/Users/LEGION/Documents/Template making/Web/Astro + TypeScript + Tailwind + headless CMS + PostgreSQL/apps/web/src/components/layout/Footer.astro", void 0);

const routes = {
  home: "/",
  products: "/products"
};

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="border-b border-white/10 bg-slate-950 text-white"> ${renderComponent($$result, "Container", $$Container, { "class": "flex items-center justify-between py-5" }, { "default": ($$result2) => renderTemplate` <a class="text-lg font-semibold uppercase tracking-[0.2em]"${addAttribute(routes.home, "href")}>Acme Stack</a> <nav class="flex items-center gap-6 text-sm text-slate-300"> <a class="transition hover:text-white"${addAttribute(routes.products, "href")}>Products</a> <a class="transition hover:text-white"${addAttribute(`${"http://localhost:3001"}/admin`, "href")}>CMS</a> </nav> ` })} </header>`;
}, "C:/Users/LEGION/Documents/Template making/Web/Astro + TypeScript + Tailwind + headless CMS + PostgreSQL/apps/web/src/components/layout/Header.astro", void 0);

const $$Astro = createAstro();
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title, description = "Sample CRUD app built with Astro, Payload, Tailwind, and PostgreSQL." } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${title}</title><meta name="description"${addAttribute(description, "content")}>${renderHead()}</head> <body class="min-h-screen bg-stone-100 text-slate-950"> <div class="relative isolate overflow-hidden"> <div class="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[28rem] bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.22),transparent_45%),linear-gradient(180deg,rgba(15,23,42,0.96),rgba(15,23,42,0.84)_34%,transparent_75%)]"></div> ${renderComponent($$result, "Header", $$Header, {})} <main> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </div> </body></html>`;
}, "C:/Users/LEGION/Documents/Template making/Web/Astro + TypeScript + Tailwind + headless CMS + PostgreSQL/apps/web/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $, $$Container as a };
