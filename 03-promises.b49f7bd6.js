!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},u={},o=n.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in u){var n=u[e];delete u[e];var o={id:e,exports:{}};return t[e]=o,n.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){u[e]=n},n.parcelRequired7c6=o);var i=o("iU1Pc"),r={inputDelay:document.querySelector('input[name="delay"]'),inputStep:document.querySelector('input[name="step"]'),inputAmount:document.querySelector('input[name="amount"]'),submitBtn:document.querySelector('button[type="submit"]')},l=r.inputDelay,c=r.inputAmount,a=r.inputStep;r.submitBtn.addEventListener("click",(function(n){var t=function(n){var t=n,r=u;setTimeout((function(){return function(e,n){var t=Math.random()>.5;return new Promise((function(u,o){t?u(e,n):o(e,n)}))}(n,u).then((function(n,u){e(i).Notify.info("✅ Fulfilled promise ".concat(t," in ").concat(r," ms"))})).catch((function(n,u){e(i).Notify.failure("✅ Fulfilled promise ".concat(t," in ").concat(r," ms"))}))}),u),u+=o},u=Number(l.value),o=Number(a.value),r=Number(c.value);console.log(u,o,r),n.preventDefault();for(var f=1;f<=r;f+=1)t(f)}))}();
//# sourceMappingURL=03-promises.b49f7bd6.js.map