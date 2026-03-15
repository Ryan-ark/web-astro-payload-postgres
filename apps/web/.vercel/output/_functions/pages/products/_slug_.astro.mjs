import { e as createComponent, k as renderComponent, r as renderTemplate, h as createAstro, m as maybeRenderHead, g as addAttribute } from '../../chunks/astro/server_D9j1HrlC.mjs';
import { $ as $$BaseLayout, a as $$Container } from '../../chunks/BaseLayout_Ck2omhya.mjs';
import { a as getPublishedProductBySlug } from '../../chunks/product.service_ChcCuGvR.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const slug = Astro2.params.slug;
  if (!slug) {
    return Astro2.redirect("/products");
  }
  const product = await getPublishedProductBySlug(slug);
  if (!product) {
    return Astro2.redirect("/404");
  }
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": `${product.title} | Products`, "description": product.summary }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="pb-16 pt-16 sm:pt-20"> ${renderComponent($$result2, "Container", $$Container, { "class": "grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start" }, { "default": async ($$result3) => renderTemplate` <img${addAttribute(product.imageUrl, "src")}${addAttribute(product.title, "alt")} class="h-full max-h-[36rem] w-full rounded-[2rem] object-cover shadow-xl"> <div class="space-y-6"> <a class="inline-flex rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-slate-500"${addAttribute(`/categories/${product.categorySlug}`, "href")}> ${product.categoryName} </a> <div class="space-y-4"> <h1 class="text-4xl font-semibold text-slate-950">${product.title}</h1> <p class="text-lg leading-8 text-slate-600">${product.summary}</p> </div> <div class="inline-flex rounded-full bg-slate-950 px-4 py-2 text-lg font-semibold text-white">
$${product.price} </div> <div class="rounded-[1.5rem] bg-white p-8 shadow-sm"> <h2 class="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">Description</h2> <p class="mt-4 whitespace-pre-line text-base leading-8 text-slate-700">${product.description}</p> </div> </div> ` })} </section> ` })}`;
}, "C:/Users/LEGION/Documents/Template making/Web/Astro + TypeScript + Tailwind + headless CMS + PostgreSQL/apps/web/src/pages/products/[slug].astro", void 0);

const $$file = "C:/Users/LEGION/Documents/Template making/Web/Astro + TypeScript + Tailwind + headless CMS + PostgreSQL/apps/web/src/pages/products/[slug].astro";
const $$url = "/products/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
