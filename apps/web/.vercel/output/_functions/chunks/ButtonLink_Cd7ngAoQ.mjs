import { e as createComponent, m as maybeRenderHead, g as addAttribute, l as renderSlot, r as renderTemplate, h as createAstro } from './astro/server_D9j1HrlC.mjs';

const $$Astro = createAstro();
const $$ButtonLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ButtonLink;
  const { href, variant = "primary" } = Astro2.props;
  const variantClass = variant === "primary" ? "bg-amber-400 text-slate-950 hover:bg-amber-300" : "border border-slate-300 bg-white text-slate-900 hover:border-slate-950";
  return renderTemplate`${maybeRenderHead()}<a${addAttribute([
    "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition",
    variantClass
  ], "class:list")}${addAttribute(href, "href")}> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "C:/Users/LEGION/Documents/Template making/Web/Astro + TypeScript + Tailwind + headless CMS + PostgreSQL/apps/web/src/components/common/ButtonLink.astro", void 0);

export { $$ButtonLink as $ };
