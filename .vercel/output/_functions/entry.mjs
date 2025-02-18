import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_DhyWOdRe.mjs';
import { manifest } from './manifest_BoF3C5_M.mjs';

const serverIslandMap = new Map([
	['BookScore', () => import('./chunks/BookScore_ABW866q-.mjs')],
	['BuyButton', () => import('./chunks/BuyButton__v8vWqJV.mjs')],
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
    "middlewareSecret": "969336c1-ccae-4352-8c7e-1323020a3775",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
