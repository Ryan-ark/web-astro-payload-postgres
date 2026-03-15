import { e as createComponent, m as maybeRenderHead, g as addAttribute, r as renderTemplate, h as createAstro } from './astro/server_BahSWGGF.mjs';
import 'piccolore';
import 'clsx';

const $$Astro = createAstro();
const $$ProductCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProductCard;
  const { product } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="group overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"> <a${addAttribute(`/products/${product.slug}`, "href")} class="block"> <img${addAttribute(product.imageUrl, "src")}${addAttribute(product.title, "alt")} class="h-56 w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy"> </a> <div class="space-y-4 p-6"> <div class="flex items-center justify-between gap-4"> <a${addAttribute(`/categories/${product.categorySlug}`, "href")} class="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500"> ${product.categoryName} </a> <span class="rounded-full bg-slate-950 px-3 py-1 text-sm font-semibold text-white">
$${product.price} </span> </div> <div class="space-y-2"> <h3 class="text-xl font-semibold text-slate-950"> <a${addAttribute(`/products/${product.slug}`, "href")}>${product.title}</a> </h3> <p class="text-sm leading-6 text-slate-600">${product.summary}</p> </div> </div> </article>`;
}, "C:/Users/LEGION/Documents/Template making/Web/Astro + TypeScript + Tailwind + headless CMS + PostgreSQL/apps/web/src/features/products/components/ProductCard.astro", void 0);

export { $$ProductCard as $ };
