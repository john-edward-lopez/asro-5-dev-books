import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_C5AVfHYp.mjs';
import { manifest } from './manifest_D-WFtfCc.mjs';

const serverIslandMap = new Map([
	['BookScore', () => import('./chunks/BookScore_CKYne1A3.mjs')],
	['BuyButton', () => import('./chunks/BuyButton_C1NNL6t1.mjs')],
]);;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/libro/_id_.astro.mjs');
const _page2 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/libro/[id].astro", _page1],
    ["src/pages/index.astro", _page2]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "74d0c2cf-e15d-4b21-9d44-2a7b87443568",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
