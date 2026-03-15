import { e as createComponent, k as renderComponent, r as renderTemplate, h as createAstro, m as maybeRenderHead } from '../../chunks/astro/server_D9j1HrlC.mjs';
import { $ as $$BaseLayout, a as $$Container } from '../../chunks/BaseLayout_Ck2omhya.mjs';
import { $ as $$ProductCard } from '../../chunks/ProductCard_B9Pv_5IL.mjs';
import { g as getPublishedProductsByCategory } from '../../chunks/product.service_ChcCuGvR.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const slug = Astro2.params.slug;
  if (!slug) {
    return Astro2.redirect("/products");
  }
  const products = await getPublishedProductsByCategory(slug);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": `Category: ${slug}` }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="pb-16 pt-16 sm:pt-20"> ${renderComponent($$result2, "Container", $$Container, { "class": "space-y-8" }, { "default": async ($$result3) => renderTemplate` <div class="space-y-3"> <p class="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Category view</p> <h1 class="text-4xl font-semibold capitalize text-slate-950">${slug.replace(/-/g, " ")}</h1> <p class="max-w-2xl text-slate-600">
Products filtered by category from the Payload relationship field.
</p> </div> ${products.length > 0 ? renderTemplate`<div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3"> ${products.map((product) => renderTemplate`${renderComponent($$result3, "ProductCard", $$ProductCard, { "product": product })}`)} </div>` : renderTemplate`<div class="rounded-[1.5rem] border border-dashed border-slate-300 bg-white p-8 text-slate-600">
No published products were found for this category.
</div>`}` })} </section> ` })}`;
}, "C:/Users/LEGION/Documents/Template making/Web/Astro + TypeScript + Tailwind + headless CMS + PostgreSQL/apps/web/src/pages/categories/[slug].astro", void 0);

const $$file = "C:/Users/LEGION/Documents/Template making/Web/Astro + TypeScript + Tailwind + headless CMS + PostgreSQL/apps/web/src/pages/categories/[slug].astro";
const $$url = "/categories/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
