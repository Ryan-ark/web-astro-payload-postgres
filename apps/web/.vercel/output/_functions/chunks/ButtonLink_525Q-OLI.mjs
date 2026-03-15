import { e as createComponent, m as maybeRenderHead, g as addAttribute, l as renderSlot, r as renderTemplate, h as createAstro } from './astro/server_BahSWGGF.mjs';
import 'piccolore';
import 'clsx';

const $$Astro = createAstro();
const $$ButtonLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ButtonLink;
  const { href, variant = "primary" } = Astro2.props;
  const variantClass = variant === "primary" ? "bg-amber-400 text-slate-950 shadow-[0_18px_45px_rgba(245,158,11,0.32)] hover:bg-amber-300" : "border border-white/20 bg-white/10 text-white backdrop-blur hover:border-white/40 hover:bg-white/16";
  return renderTemplate`${maybeRenderHead()}<a${addAttribute([
    "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition",
    variantClass
  ], "class:list")}${addAttribute(href, "href")}> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "C:/Users/LEGION/Documents/Template making/Web/Astro + TypeScript + Tailwind + headless CMS + PostgreSQL/apps/web/src/components/common/ButtonLink.astro", void 0);

export { $$ButtonLink as $ };
