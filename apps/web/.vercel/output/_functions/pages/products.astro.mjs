import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BahSWGGF.mjs';
import 'piccolore';
import { $ as $$BaseLayout, a as $$Container } from '../chunks/BaseLayout_C8c35dbz.mjs';
import { $ as $$ProductCard } from '../chunks/ProductCard_fhPkQ96X.mjs';
import { b as getPublishedProducts } from '../chunks/product.service_k3D27VUR.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const products = await getPublishedProducts();
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Products" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="pb-16 pt-16 sm:pt-20"> ${renderComponent($$result2, "Container", $$Container, { "class": "space-y-8" }, { "default": async ($$result3) => renderTemplate` <div class="space-y-3"> <p class="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Catalog</p> <h1 class="text-4xl font-semibold text-slate-950">Products</h1> <p class="max-w-2xl text-slate-600">
Public products are fetched from Payload at request time so content updates appear immediately.
</p> </div> ${products.length > 0 ? renderTemplate`<div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3"> ${products.map((product) => renderTemplate`${renderComponent($$result3, "ProductCard", $$ProductCard, { "product": product })}`)} </div>` : renderTemplate`<div class="rounded-[1.5rem] border border-dashed border-slate-300 bg-white p-8 text-slate-600">
No published products are available.
</div>`}` })} </section> ` })}`;
}, "C:/Users/LEGION/Documents/Template making/Web/Astro + TypeScript + Tailwind + headless CMS + PostgreSQL/apps/web/src/pages/products/index.astro", void 0);

const $$file = "C:/Users/LEGION/Documents/Template making/Web/Astro + TypeScript + Tailwind + headless CMS + PostgreSQL/apps/web/src/pages/products/index.astro";
const $$url = "/products";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
