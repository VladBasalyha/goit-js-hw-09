!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,n){o[e]=n},n.parcelRequired7c6=i);var u=i("iU1Pc"),r={inputDelay:document.querySelector('input[name="delay"]'),inputStep:document.querySelector('input[name="step"]'),inputAmount:document.querySelector('input[name="amount"]'),submitBtn:document.querySelector('button[type="submit"]')},l=r.inputDelay,a=r.inputAmount,c=r.inputStep;function p(e,n){var t=Math.random()>.5;return new Promise((function(o,i){t?o(e,n):i(e,n)}))}r.submitBtn.addEventListener("click",(function(n){var t=Number(l.value),o=Number(c.value),i=Number(a.value);for(console.log(t,o,i),n.preventDefault(),position=1;position<=i;position+=1){var r=position,f=t;setTimeout((function(){return p(position,t).then((function(n){n.position,n.delayValue;e(u).Notify.info("✅ Fulfilled promise ".concat(r," in ").concat(f," ms"))})).catch((function(n){n.position,n.delayValue;e(u).Notify.failure("✅ Fulfilled promise ".concat(r," in ").concat(f," ms"))}))}),t),t+=o}}))}();
//# sourceMappingURL=03-promises.274fbcb6.js.map
