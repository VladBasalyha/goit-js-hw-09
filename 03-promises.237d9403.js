function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){o[e]=t},t.parcelRequired7c6=i);var u=i("eWCmQ");const r={inputDelay:document.querySelector('input[name="delay"]'),inputStep:document.querySelector('input[name="step"]'),inputAmount:document.querySelector('input[name="amount"]'),submitBtn:document.querySelector('button[type="submit"]')},{inputDelay:l,inputAmount:p,inputStep:a,submitBtn:s}=r;function d(e,t){const n=Math.random()>.5;return new Promise(((o,i)=>{n?o(e,t):i(e,t)}))}s.addEventListener("click",(function(t){let n=Number(l.value),o=Number(a.value),i=Number(p.value);for(console.log(n,o,i),t.preventDefault(),position=1;position<=i;position+=1){let t=position,i=n;setTimeout((()=>d(position,n).then(((n,o)=>{e(u).Notify.info(`✅ Fulfilled promise ${t} in ${i} ms`)})).catch(((n,o)=>{e(u).Notify.failure(`✅ Fulfilled promise ${t} in ${i} ms`)}))),n),n+=o}}));
//# sourceMappingURL=03-promises.237d9403.js.map
