(()=>{"use strict";var e="http://192.168.60.10/pstat.xml",t="http://192.168.60.10/rb",r="http://192.168.60.11/rb",n=document.querySelector(".content"),o=n.querySelector(".hall"),c=n.querySelector(".radio-room"),a=n.querySelector(".nav-btn_hall"),l=n.querySelector(".nav-btn_room"),i=n.querySelector(".header-buttons__btn_all-on"),s=n.querySelector(".header-buttons__btn_all-off"),u=[n.querySelectorAll(".one"),n.querySelectorAll(".two"),n.querySelectorAll(".third"),n.querySelectorAll(".four"),n.querySelectorAll(".five"),n.querySelectorAll(".six"),n.querySelectorAll(".seven"),n.querySelectorAll(".eight"),n.querySelectorAll(".nine"),n.querySelectorAll(".ten")],f=[n.querySelector(".room-btn-one"),n.querySelector(".room-btn-two"),n.querySelector(".room-btn-three"),n.querySelector(".room-btn-four")];function h(e){fetch(e).then((function(e){return e.text()})).then((function(e){var t=(new DOMParser).parseFromString(e,"text/xml");return Array.from(t.all)})).then((function(e){for(var t=0;t<e.length;t++)0===t||("0"===e[t].textContent?f[t-1].classList.remove("radio-room__btn_active"):f[t-1].classList.add("radio-room__btn_active"))})).catch((function(e){return console.log(e)}))}function b(t,r){if(r.classList.contains("radio-room__btn")){var n="";switch(r.classList.toString().split(" ")[2]){case"room-btn-one":n="0";break;case"room-btn-two":n="1";break;case"room-btn-three":n="2";break;case"room-btn-four":n="3"}r.classList.contains("radio-room__btn_active")?fetch("".concat(t).concat(n,"f.cgi")).then((function(t){return h(e),t})).catch((function(e){return console.log(e)})):fetch("".concat(t).concat(n,"n.cgi")).then((function(t){return h(e),t})).catch((function(e){return console.log(e)}))}else{var o="";switch(r.classList.toString().split(" ")[2]){case"one":o="0";break;case"two":o="1";break;case"third":o="2";break;case"four":o="3";break;case"five":o="4";break;case"six":o="5";break;case"seven":o="6";break;case"eight":o="7";break;case"nine":o="8";break;case"ten":o="9"}fetch("".concat(t).concat(o,"s.cgi")).then((function(e){return console.log("323"),e})).catch((function(e){return console.log(e)}))}}function v(e){var t=e.target.className.split(" ");Array.from(n.querySelectorAll(".".concat(t[2]))).forEach((function(e){return e.style.backgroundColor="rgba(244, 255, 42, 0.7)"}))}function d(e){var t=e.target.className.split(" ");Array.from(n.querySelectorAll(".".concat(t[2]))).forEach((function(e){return e.style.backgroundColor="rgba(175, 185, 255, 0.7)"}))}function g(e){e.target.classList.contains("nav-btn_hall")?(c.classList.remove("active-page"),o.classList.add("active-page")):(o.classList.remove("active-page"),c.classList.add("active-page"))}function m(t,r,n){for(var o=0;o<r.length;o++)fetch("".concat(t).concat(String(o)).concat(n,".cgi")).then((function(t){return h(e),t}))}a.addEventListener("click",g),l.addEventListener("click",g),i.addEventListener("click",(function(){o.classList.contains("active-page")?m(r,u,"s"):m(t,f,"n")})),s.addEventListener("click",(function(){o.classList.contains("active-page")?m(r,u,"s"):m(t,f,"f")})),u.forEach((function(e){Array.from(e).forEach((function(e){return e.addEventListener("mouseout",d)})),Array.from(e).forEach((function(e){return e.addEventListener("mouseover",v)}))})),f.forEach((function(e){return e.addEventListener("click",(function(e){b(t,e.target)}))})),u.forEach((function(e){Array.from(e).forEach((function(e){return e.addEventListener("click",(function(e){b(r,e.target)}))}))})),h(e)})();