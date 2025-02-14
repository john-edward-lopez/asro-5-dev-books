import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_0v42O9uX.mjs';
import { manifest } from './manifest_JVv_fO8x.mjs';

const serverIslandMap = new Map([
	['BookScore', () => import('./chunks/BookScore_Z6v3eZDN.mjs')],
	['BuyButton', () => import('./chunks/BuyButton_DeTpmWS3.mjs')],
]);;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/booksdev.astro.mjs');
const _page3 = () => import('./pages/faq.astro.mjs');
const _page4 = () => import('./pages/libro/_id_.astro.mjs');
const _page5 = () => import('./pages/products.astro.mjs');
const _page6 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about/index.astro", _page1],
    ["src/pages/booksdev/index.astro", _page2],
    ["src/pages/faq/index.astro", _page3],
    ["src/pages/libro/[id].astro", _page4],
    ["src/pages/products/index.astro", _page5],
    ["src/pages/index.astro", _page6]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "7e0bd296-a94b-46a7-a539-6a71f794d774",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
