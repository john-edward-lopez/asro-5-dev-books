import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_fmD5Rmow.mjs';
import { manifest } from './manifest_DWQCQfPU.mjs';

const serverIslandMap = new Map([
	['BookScore', () => import('./chunks/BookScore_DEBK8u6_.mjs')],
	['BuyButton', () => import('./chunks/BuyButton_Bx-f5duL.mjs')],
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
    "middlewareSecret": "0c700bcb-479b-416c-92da-a92b61c26737",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
