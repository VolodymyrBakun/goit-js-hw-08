function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,i=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=f||l||Function("return this")(),s=Object.prototype.toString,m=Math.max,g=Math.min,d=function(){return c.Date.now()};function v(e,t,n){var r,o,a,i,u,f,l=0,c=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=r,a=o;return r=o=void 0,l=t,i=e.apply(a,n)}function S(e){return l=e,u=setTimeout(j,t),c?y(e):i}function T(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-l>=a}function j(){var e=d();if(T(e))return h(e);u=setTimeout(j,function(e){var n=t-(e-f);return s?g(n,a-(e-l)):n}(e))}function h(e){return u=void 0,v&&r?y(e):(r=o=void 0,i)}function w(){var e=d(),n=T(e);if(r=arguments,o=this,f=e,n){if(void 0===u)return S(f);if(s)return u=setTimeout(j,t),y(f)}return void 0===u&&(u=setTimeout(j,t)),i}return t=b(t)||0,p(n)&&(c=!!n.leading,a=(s="maxWait"in n)?m(b(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),w.cancel=function(){void 0!==u&&clearTimeout(u),l=0,r=f=o=u=void 0},w.flush=function(){return void 0===u?i:h(d())},w}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=a.test(e);return n||i.test(e)?u(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),v(e,t,{leading:r,maxWait:t,trailing:o})};const y=document.querySelector('[name="email"]'),S=document.querySelector('[name="message"]'),T=(document.querySelector("button"),document.querySelector(".feedback-form")),j={email:"",message:""};if(null!==localStorage.getItem("feedback-form-state")){const e=localStorage.getItem("feedback-form-state"),t=JSON.parse(e);y.value=t.email,S.textContent=t.message,j.email=`${t.email}`,j.message=`${t.message}`}T.addEventListener("input",e(t)((function(e){"INPUT"===e.target.tagName&&(j.email=e.target.value);"TEXTAREA"===e.target.tagName&&(j.message=e.target.value);localStorage.setItem("feedback-form-state",JSON.stringify(j))}),500)),T.addEventListener("submit",(e=>{result={},j.email&&(result.email=j.email),j.message&&(result.message=j.message),null!==localStorage.getItem("feedback-form-state")&&console.log(result),e.preventDefault(),T.reset(),S.textContent="",localStorage.clear(),j.email="",j.message=""}));
//# sourceMappingURL=03-feedback.3c19dcaa.js.map
