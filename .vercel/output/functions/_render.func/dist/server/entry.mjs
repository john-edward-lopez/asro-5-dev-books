import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_CRrFFdeB.mjs';
import { manifest } from './manifest_nzEzOVMM.mjs';

const serverIslandMap = new Map([
	['BookScore', () => import('./chunks/BookScore_CzxSmCaw.mjs')],
	['BuyButton', () => import('./chunks/BuyButton_CWqV6U8-.mjs')],
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
    "middlewareSecret": "4da90340-c3fb-4fef-9f05-d420d4c1ea34",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
