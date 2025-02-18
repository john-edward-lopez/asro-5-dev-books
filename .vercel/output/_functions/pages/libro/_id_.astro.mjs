import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute, e as renderTransition } from '../../chunks/astro/server_fH9AuEq-.mjs';
import 'kleur/colors';
import { r as renderEntry, $ as $$LayoutBooks, g as getCollection } from '../../chunks/LayoutBooks_B5WLRko3.mjs';
import $$BookScore from '../../chunks/BookScore_DEBK8u6_.mjs';
import $$BuyButton from '../../chunks/BuyButton_Bx-f5duL.mjs';
/* empty css                                    */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  const books = await getCollection("books");
  return books.map((book) => ({
    params: { id: book.slug },
    props: { book }
  }));
}
const prerender = false;
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { book } = Astro2.props;
  const { data, slug } = book;
  const { title, author, img, readtime, description, buy } = data;
  const { Content } = await renderEntry(book);
  return renderTemplate`${renderComponent($$result, "Layout", $$LayoutBooks, { "title": `${title} - Dev Books` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex gap-12"> <aside class="flex flex-col items-center gap-4"> <a href="/" class="hover:underline opacity-70">⬅ Volver Atras</a> <img${addAttribute(`/${img}`, "src")}${addAttribute(title, "alt")} class="rounded w-72 h-auto"${addAttribute(renderTransition($$result2, "sjcdew3a", "", `img-${slug}`), "data-astro-transition-scope")}> ${renderComponent($$result2, "BookScore", $$BookScore, { "server:defer": true, "id": slug, "server:component-directive": "defer", "server:component-path": "C:/Users/john lopez/Desktop/aprendiendo-astro/src/components/BookScore.astro", "server:component-export": "default" }, { "fallback": ($$result3) => renderTemplate`<div class="text-xs opacity-70"> <p>Cargando puntuacion...</p> </div>` })} ${renderTemplate`${renderComponent($$result2, "BuyButton", $$BuyButton, { "server:defer": true, "buy": buy, "server:component-directive": "defer", "server:component-path": "C:/Users/john lopez/Desktop/aprendiendo-astro/src/components/BuyButton.astro", "server:component-export": "default" })}`} </aside> <main class="max-w-3xl"> <h1 class="text-4xl font-bold mb-4"${addAttribute(renderTransition($$result2, "egmbvru3", "", `title-${slug}`), "data-astro-transition-scope")}> ${title} </h1> <div class="prose-neutral"> ${renderComponent($$result2, "Content", Content, {})} </div> </main> </div> ` })}`;
}, "C:/Users/john lopez/Desktop/aprendiendo-astro/src/pages/libro/[id].astro", "self");

const $$file = "C:/Users/john lopez/Desktop/aprendiendo-astro/src/pages/libro/[id].astro";
const $$url = "/libro/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  getStaticPaths,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
