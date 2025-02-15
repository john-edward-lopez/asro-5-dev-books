import { c as createComponent, r as renderTemplate, m as maybeRenderHead } from './astro/server_Cu9eT8yJ.mjs';
import 'kleur/colors';
import 'clsx';
import { s as setOnSetGetEnv } from './runtime_BaX0UJyD.mjs';

// @ts-check

setOnSetGetEnv(() => {
	
});
const SCORE_API_ENDPOINT = "https://www.random.org/integers/?num=1&min=1&max=5&col=1&base=10&format=plain&rnd=new";

const $$BookScore = createComponent(async ($$result, $$props, $$slots) => {
  const res = await fetch(SCORE_API_ENDPOINT);
  const scoreValue = await res.text();
  return renderTemplate`${console.log(scoreValue)}${maybeRenderHead()}<span class="text-xs" id="score">
⭐ Puntuacion: ${scoreValue.trim()}/5
</span>`;
}, "C:/Users/john lopez/Desktop/aprendiendo-astro/src/components/BookScore.astro", undefined);

const $$file = "C:/Users/john lopez/Desktop/aprendiendo-astro/src/components/BookScore.astro";
const $$url = undefined;

export { $$BookScore as default, $$file as file, $$url as url };
