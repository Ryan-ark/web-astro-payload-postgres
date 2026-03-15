import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_D9j1HrlC.mjs';
import { $ as $$ButtonLink } from '../chunks/ButtonLink_Cd7ngAoQ.mjs';
import { $ as $$BaseLayout, a as $$Container } from '../chunks/BaseLayout_Ck2omhya.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Page not found" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="pb-20 pt-20"> ${renderComponent($$result2, "Container", $$Container, { "class": "max-w-2xl space-y-6 text-center" }, { "default": ($$result3) => renderTemplate` <p class="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">404</p> <h1 class="text-5xl font-semibold text-slate-950">Page not found</h1> <p class="text-lg text-slate-600">The page you requested does not exist or is not publicly available.</p> <div class="flex justify-center"> ${renderComponent($$result3, "ButtonLink", $$ButtonLink, { "href": "/products" }, { "default": ($$result4) => renderTemplate`Back to products` })} </div> ` })} </section> ` })}`;
}, "C:/Users/LEGION/Documents/Template making/Web/Astro + TypeScript + Tailwind + headless CMS + PostgreSQL/apps/web/src/pages/404.astro", void 0);

const $$file = "C:/Users/LEGION/Documents/Template making/Web/Astro + TypeScript + Tailwind + headless CMS + PostgreSQL/apps/web/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
