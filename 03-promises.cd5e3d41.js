function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},u=t.parcelRequired7c6;null==u&&((u=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var u={id:e,exports:{}};return n[e]=u,t.call(u.exports,u,u.exports),u.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequired7c6=u);var i=u("eWCmQ");const l={inputDelay:document.querySelector('input[name="delay"]'),inputStep:document.querySelector('input[name="step"]'),inputAmount:document.querySelector('input[name="amount"]'),submitBtn:document.querySelector('button[type="submit"]')},{inputDelay:r,inputAmount:a,inputStep:d,submitBtn:p}=l;function f(e,t){const n=Math.random()>.3;return new Promise(((o,u)=>{n?o(e,t):u(e,t)}))}p.addEventListener("click",(function(t){let n=Number(r.value),o=Number(d.value),u=Number(a.value);console.log(n,o,u),t.preventDefault();for(let t=1;t<=u;t+=1){let u=t,l=n;setTimeout((()=>f(t,n).then((({position:t,delayValue:n})=>{e(i).Notify.info(`✅ Fulfilled promise ${u} in ${l} ms`)})).catch((({position:t,delayValue:n})=>{e(i).Notify.failure(`✅ Fulfilled promise ${u} in ${l} ms`)}))),n),n+=o}}));
//# sourceMappingURL=03-promises.cd5e3d41.js.map