import { e as createComponent, k as renderComponent, r as renderTemplate, h as createAstro, m as maybeRenderHead } from '../chunks/astro/server_BahSWGGF.mjs';
import 'piccolore';
import { $ as $$ButtonLink } from '../chunks/ButtonLink_525Q-OLI.mjs';
import { $ as $$BaseLayout, a as $$Container } from '../chunks/BaseLayout_C8c35dbz.mjs';
import { $ as $$ProductCard } from '../chunks/ProductCard_fhPkQ96X.mjs';
import { b as getPublishedProducts, c as getCategories } from '../chunks/product.service_k3D27VUR.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const [products, categories] = await Promise.all([getPublishedProducts(), getCategories()]);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Acme Stack | Astro + Payload CRUD" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="pb-16 pt-16 sm:pb-24 sm:pt-24"> ${renderComponent($$result2, "Container", $$Container, {}, { "default": async ($$result3) => renderTemplate` <div class="overflow-hidden rounded-[2.25rem] border border-white/10 bg-slate-950/78 px-6 py-10 text-white shadow-[0_40px_120px_rgba(15,23,42,0.34)] backdrop-blur md:px-10 md:py-12"> <div class="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end"> <div class="space-y-8"> <p class="text-sm font-semibold uppercase tracking-[0.35em] text-amber-300">Sample CRUD foundation</p> <div class="space-y-5"> <h1 class="max-w-4xl text-5xl font-semibold leading-none text-balance text-white sm:text-6xl">
Astro frontend. Payload CMS. PostgreSQL. Built to scale cleanly.
</h1> <p class="max-w-2xl text-lg leading-8 text-slate-200">
This starter shows a code-first CMS backend, an Astro storefront, and a structure optimized for AI-readable implementation.
</p> </div> <div class="flex flex-wrap gap-4"> ${renderComponent($$result3, "ButtonLink", $$ButtonLink, { "href": "/products" }, { "default": async ($$result4) => renderTemplate`Browse products` })} ${renderComponent($$result3, "ButtonLink", $$ButtonLink, { "href": `${"http://127.0.0.1:3001"}/admin`, "variant": "secondary" }, { "default": async ($$result4) => renderTemplate`Open CMS` })} </div> </div> <div class="rounded-[2rem] border border-white/12 bg-white/8 p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur"> <p class="text-sm uppercase tracking-[0.25em] text-slate-300">Live content model</p> <dl class="mt-6 grid gap-5"> <div> <dt class="text-slate-300">Categories</dt> <dd class="mt-1 text-3xl font-semibold text-white">${categories.length}</dd> </div> <div> <dt class="text-slate-300">Published products</dt> <dd class="mt-1 text-3xl font-semibold text-white">${products.length}</dd> </div> <div> <dt class="text-slate-300">Delivery model</dt> <dd class="mt-1 text-lg text-slate-100">Astro on Vercel, Payload on Vercel, Neon Postgres</dd> </div> </dl> </div> </div> </div> ` })} </section> <section class="pb-16"> ${renderComponent($$result2, "Container", $$Container, { "class": "space-y-8" }, { "default": async ($$result3) => renderTemplate` <div class="flex items-end justify-between gap-6"> <div class="space-y-2"> <p class="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">Featured content</p> <h2 class="text-3xl font-semibold text-slate-950">Published products</h2> </div> <a class="text-sm font-semibold text-slate-600 transition hover:text-slate-950" href="/products">
View all
</a> </div> ${products.length > 0 ? renderTemplate`<div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3"> ${products.slice(0, 3).map((product) => renderTemplate`${renderComponent($$result3, "ProductCard", $$ProductCard, { "product": product })}`)} </div>` : renderTemplate`<div class="rounded-[1.5rem] border border-dashed border-slate-300 bg-white p-8 text-slate-600">
No published products yet. Seed the CMS or create one in the admin panel.
</div>`}` })} </section> ` })}`;
}, "C:/Users/LEGION/Documents/Template making/Web/Astro + TypeScript + Tailwind + headless CMS + PostgreSQL/apps/web/src/pages/index.astro", void 0);
const $$file = "C:/Users/LEGION/Documents/Template making/Web/Astro + TypeScript + Tailwind + headless CMS + PostgreSQL/apps/web/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
