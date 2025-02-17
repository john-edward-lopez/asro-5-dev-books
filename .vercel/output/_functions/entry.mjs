import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_6jfqFKRY.mjs';
import { manifest } from './manifest_hCA7r4Vx.mjs';

const serverIslandMap = new Map([
	['BookScore', () => import('./chunks/BookScore_BRDxKXYb.mjs')],
	['BuyButton', () => import('./chunks/BuyButton_Dw_nj3--.mjs')],
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
    "middlewareSecret": "fe1f4cbe-08f8-4da9-8bc9-0507e41c07a4",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
