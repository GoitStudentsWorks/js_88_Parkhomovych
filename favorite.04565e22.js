var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},i={},n=e.parcelRequire060c;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in i){var n=i[e];delete i[e];var a={id:e,exports:{}};return t[e]=a,n.call(a.exports,a,a.exports),a.exports}var l=Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){i[e]=t},e.parcelRequire060c=n),n("bUb57"),n("brr8Z");var a=n("fb9GJ"),l=n("5HMam"),s=n("5uEKZ"),r=n("fAYBR");//зберігаємо та відновлюємо кількість сторінок пагінації (totalItems) у об'єкті options
//використовуємо Notiflix для відображення сповіщень у разі помилок при роботі з localStorage.
// const showFavorite = document.querySelector(".favorite-show");
const o=(0,r.default)();let d=(0,s.dataArray).filter(e=>e.favorit).map(e=>e);const c=document.querySelector(".no-recipe-content"),u=document.querySelector(".box-list"),f=document.querySelector(".favorite-cards"),v=document.querySelector("#tui-pagination-container"),y=document.getElementById("tui-pagination-container");// налаштування початкових значень в залежносты від ширини вьюпорту
let h=window.innerWidth<768?9:12,g=1,p=window.innerWidth<768?2:3;// обєкт налаштувань пагінації
const m={totalItems:s.dataArray.length,itemsPerPage:h,visiblePages:p,page:g,centerAlign:!0};// Функція створення фільтра
(function(){let e=d.reduce((e,t)=>(e.push(t.category),e),[]).filter((e,t,i)=>i.indexOf(e)===t).map(e=>`<li class="favorite-filter-item">${e}</li>`).join("");o.filterFavorite.insertAdjacentHTML("beforeend",e);// console.log(markupFilter);
})(),o.filterFavorite.addEventListener("click",//накладання фільтру в залежності від обраної категорії
function(e){(0,s.resizeFavorit)(),// console.log(filterFavoriteCards);
// createFilterFavorite();
w((d="All categories"===e.target.textContent?(0,s.dataArray).filter(e=>e.favorit).map(e=>e):(0,s.dataArray).filter(t=>t.favorit&&t.category===e.target.textContent).map(e=>e)).length)});const L=new(a&&a.__esModule?a.default:a)(y,m),b=(0,s.resizeFavorit)();// запуск пагінації з новими значеннями
// встановлення слухача пагінації, відображення її,
//в аргументах кількість відібраних фаворитів
function w(e){g=1,L.off("afterMove",x),L.reset(e),//візуалізація строки пагінації
function(e){if(e>h){v.classList.contains("visually-hidden")&&v.classList.remove("visually-hidden");return}v.classList.contains("visually-hidden")||v.classList.add("visually-hidden")}(e),e>h&&L.on("afterMove",x),A(g),M(s.dataArray.length)}// перемальовка фаворитів при події на пагінації
function x(){A(g=L.getCurrentPage())}// розрахунок першої і останньої картки на цій сторінці
function A(e){let t=(e-1)*h,i=e*h-1;i>=d.length&&(i=d.length-1);let n=d.filter((e,n)=>n>=t&&n<=i);(0,l.renderMarkup)(n)}// прибирання-додавання элементів, коли нема, або є фаворити
function M(e){// console.log(favorits);
e>0?(c.classList.contains("visually-hidden")||c.classList.add("visually-hidden"),u.classList.contains("visually-hidden")&&u.classList.remove("visually-hidden"),f.classList.contains("visually-hidden")&&f.classList.remove("visually-hidden")):(c.classList.contains("visually-hidden")&&c.classList.remove("visually-hidden"),u.classList.contains("visually-hidden")||u.classList.add("visually-hidden"),f.classList.contains("visually-hidden")||f.classList.add("visually-hidden"))}M(b),w(d.length),A(g);//# sourceMappingURL=favorite.04565e22.js.map

//# sourceMappingURL=favorite.04565e22.js.map
