function e(e,t,n,i){Object.defineProperty(e,t,{get:n,set:i,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};var i={},r={},o=n.parcelRequired7c6;null==o&&((o=function(e){if(e in i)return i[e].exports;if(e in r){var t=r[e];delete r[e];var n={id:e,exports:{}};return i[e]=n,t.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},n.parcelRequired7c6=o),o.register("kyEFX",(function(t,n){var i,r;e(t.exports,"register",(function(){return i}),(function(e){return i=e})),e(t.exports,"resolve",(function(){return r}),(function(e){return r=e}));var o={};i=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)o[t[n]]=e[t[n]]},r=function(e){var t=o[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),o.register("2Fivl",(function(n,i){e(n.exports,"onBtnClose",(function(){return w})),e(n.exports,"removeAllListeners",(function(){return E})),e(n.exports,"onEcsClose",(function(){return x})),e(n.exports,"onBackdropClose",(function(){return _}));var r=o("fosiX"),s=o("cm5V2"),a=o("bGr86"),u=o("iQIUW"),c=o("lTgDY"),l=o("9ZdO4"),d=o("cm8lW"),h=o("aCOBv"),f=o("fb9GJ");o("6Xe1w");var p=o("4FNlN");o("fJSXA");new(0,h.default);const m=(0,c.initializeFirebase)({funcSignIn:async function(e){v()&&g.preload.call(g)},funcSignOut:function(e){v()&&(location.href="./index.html")}});r.moviesApiService.apiFirebase=m;const g=function(){if(v()){return(0,p.itializeWatchQueue)(m)}return null}();function v(){return document.documentURI.includes("my-library.html")}function y(e){a.filmsMainContainer.innerHTML=e}function b(){a.modal.classList.add("visually-hidden"),a.modalStudents.classList.add("visually-hidden"),a.backdrop.classList.toggle("modal-open"),a.modal.innerHTML="",document.querySelector("body.my-lib-event")&&g.closeModal()}function w(){b(),E()}function x(e){"Escape"===e.key&&(b(),E())}function _(e){(e.target.classList.contains("modal")||e.target.classList.contains("backdrop"))&&(b(),E())}function E(){a.backdrop.removeEventListener("click",_),document.body.removeEventListener("keyup",x),document.querySelector(".modal-cross").removeEventListener("click",w)}v()||((0,l.ModalTeamInit)(),a.search.addEventListener("submit",(async function(e){e.preventDefault();const n=e.currentTarget.elements.searchQuery.value.trim();if(!t(d).isAlphanumeric(n))return u.Notify.failure("Search result not successful. Enter the correct movie name and try again.");r.moviesApiService.query=n,a.filmsMainContainer.innerHTML="",r.moviesApiService.resetPage();try{const e=await r.moviesApiService.fetchMovies();y((0,s.renderMovies)(e)),document.querySelector("h1").innerHTML=`Here's what we found by searching for "${r.moviesApiService.query[0].toUpperCase()+r.moviesApiService.query.slice(1)}". You on page - <span>${r.moviesApiService.page}</span>`,document.querySelector(".header__form").reset();const n=new(t(f))("tui-pagination-container",r.moviesApiService.PaginationOptions);n.on("beforeMove",(async e=>{try{r.moviesApiService.page=e.page;const t=await r.moviesApiService.fetchMovies();y((0,s.renderMovies)(t)),document.querySelector("h1").innerHTML=`Here's what we found by searching for "${r.moviesApiService.query[0].toUpperCase()+r.moviesApiService.query.slice(1)}". You on page - <span>${r.moviesApiService.page}</span>`}catch(e){}})),n.on("afterMove",(()=>{window.scrollTo({top:0,behavior:"smooth"})}))}catch(e){u.Notify.failure("Oups! Something went wrong")}})),a.filmsMainContainer.addEventListener("click",(function(e){e.preventDefault();const t=e.target.closest("li").getAttribute("data-id");r.moviesApiService.filmId=t,r.moviesApiService.getFullInfo(t),a.modal.classList.remove("visually-hidden"),a.backdrop.classList.toggle("modal-open")})),r.moviesApiService.getGenres(),(async()=>{await r.moviesApiService.getTrendMovies(),u.Notify.success(`Cool, we found more than ${r.moviesApiService.totalItems} films!`)})(),function(){const e=JSON.parse(localStorage.getItem("genres")),t=[];e.map((e=>t.push(`<option value="${e.id}">${e.name}</option>`))),a.sortForm.elements.genreSelect.insertAdjacentHTML("beforeend",t.join(""))}(),function(){const e=[];for(let t=2022;t-1>1999;t--)e.push(`<option value="${t}">${t}</option>`);a.sortForm.elements.yearSelect.insertAdjacentHTML("beforeend",e.join(""))}(),a.sortForm.addEventListener("submit",(async function(e){e.preventDefault(),r.moviesApiService.resetPage(),r.moviesApiService.sortBy=e.currentTarget.elements.sortBy.value,r.moviesApiService.year=e.currentTarget.elements.yearSelect.value,r.moviesApiService.choosedGenres=e.currentTarget.elements.genreSelect.value;e.currentTarget.elements.resetBtn.addEventListener("click",(()=>{r.moviesApiService.getTrendMovies()}));const n=!!r.moviesApiService.choosedGenres&&e.currentTarget.elements.genreSelect.options[e.currentTarget.elements.genreSelect.selectedIndex].text,i=await r.moviesApiService.getSortedMovies();y((0,s.renderMovies)(i)),u.Notify.success(`Cool, we found more than ${r.moviesApiService.totalItems} films!`);const o=new(t(f))("tui-pagination-container",r.moviesApiService.PaginationOptions);o.on("beforeMove",(async e=>{try{r.moviesApiService.page=e.page;const t=await r.moviesApiService.getSortedMovies();y((0,s.renderMovies)(t)),document.querySelector("h1").innerHTML=`Here's what we found by searching ${r.moviesApiService.choosedGenres?n+", ":""}${r.moviesApiService.year?r.moviesApiService.year+" year, ":""}you on page - <span>${r.moviesApiService.page}</span>`}catch(e){}})),o.on("afterMove",(()=>{window.scrollTo({top:0,behavior:"smooth"})})),document.querySelector("h1").innerHTML=`Here's what we found by searching ${r.moviesApiService.choosedGenres?n:""} ${r.moviesApiService.year?""+(r.moviesApiService.choosedGenres?", ":"")+r.moviesApiService.year+" year":""}, you on page - <span>${r.moviesApiService.page}</span>`})))})),o.register("fosiX",(function(n,i){e(n.exports,"moviesApiService",(function(){return p})),o("2shzp");var r=o("bRlFp"),s=o("cm5V2"),a=(s=o("cm5V2"),o("bGr86")),u=(a=o("bGr86"),o("dSs1Y")),c=o("iQIUW"),l=o("2Fivl"),d=o("fb9GJ"),h=o("lTgDY");o("ftYLF"),o("ffjl9");const f="48efdd88d1650cc055b0f5a157a41228";const p=new class{get PaginationOptions(){return{totalItems:this.totalItems,itemsPerPage:20,visiblePages:5,page:this.page,currentThemeNumbers:"dark"===localStorage.getItem("user-theme")?"tui-page-btn--change-color":"",currentThemeArrows:"dark"===localStorage.getItem("user-theme")?"tui-el-change":"",centerAlign:!0,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn a {{currentThemeNumbers}}">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip {{currentThemeArrows}}"><span class="tui-ico-ellip">...</span></a>'}}}async fetchMovies(){u.Loading.circle({svgColor:"red"});try{const e="https://api.themoviedb.org/3/search/movie?",t=await r.default.get(e,{params:{api_key:f,query:this.searchQuery,page:this.page,include_adult:!1}});if(this.totalItems=t.data.total_results,0===this.totalItems)return;return t.data.results}catch(e){c.Notify.failure("Oups! Something went wrong")}finally{u.Loading.remove()}}async getGenres(){try{const e=(await r.default.get("https://api.themoviedb.org/3/genre/movie/list",{params:{api_key:f}})).data.genres;localStorage.setItem("genres",JSON.stringify(e))}catch(e){c.Notify.failure("Oups! Something went wrong")}}async getTrendMovies(){u.Loading.circle({svgColor:"red"});try{const e=await r.default.get("https://api.themoviedb.org/3/trending/movie/day",{params:{api_key:f,page:this.page}}),n=localStorage.getItem("user-theme");this.totalItems=e.data.total_results,a.filmsMainContainer.innerHTML=(0,s.renderMovies)(e.data.results,n),document.querySelector("h1").innerHTML=`Trending movies, you on page - <span>${this.page}</span>`,document.querySelector("h1").classList.remove("visually-hidden");const i=new(t(d))("tui-pagination-container",this.PaginationOptions);i.on("beforeMove",(e=>{this.page=e.page,this.getTrendMovies(),document.querySelector("h1").innerHTML=`Trending movies, you on page - <span>${this.page}</span>`,document.querySelector("h1").classList.remove("visually-hidden")})),i.on("afterMove",(()=>{window.scrollTo({top:0,behavior:"smooth"})})),i.on("afterMove",(()=>{}))}catch(e){c.Notify.failure("Oups! Something went wrong"),console.log(e)}finally{u.Loading.remove()}}async getFullInfo(e){const t=await r.default.get(`https://api.themoviedb.org/3/movie/${e}`,{params:{api_key:f}}),n=await this.getFilmTrailer(),i=await this.apiFirebase.isUserSignedIn(),o=await this.apiFirebase.isSavedFromWatched(e),u=await this.apiFirebase.isSavedFromQueue(e);a.modal.innerHTML=(0,s.renderFullInfo)(t.data,e,o,u,i,n),i||(document.querySelector(".buttons-flex").style.flexDirection="column",document.querySelector(".buttons-flex").style.alignItems="center"),document.querySelector(".modal-window .modal-cross").addEventListener("click",l.onBtnClose),a.backdrop.addEventListener("click",l.onBackdropClose),document.body.addEventListener("keyup",l.onEcsClose),i&&(document.querySelector(".button-modal-watch").addEventListener("click",(async t=>{const n=await this.apiFirebase.isSavedFromWatched(e),i=t.target.closest(".buttons-flex").getAttribute("data-id"),r=document.querySelector(".modal-h2").textContent;return document.querySelector(".button-modal-watch").textContent=n?"ADD TO WATCHED":"DELETE FROM WATCHED",n?await this.apiFirebase.deleteFromWatched(i,r):await this.apiFirebase.addToWatched(i,r)})),document.querySelector(".button-modal-queue").addEventListener("click",(async t=>{const n=await this.apiFirebase.isSavedFromQueue(e),i=t.target.closest(".buttons-flex").getAttribute("data-id"),r=document.querySelector(".modal-h2").textContent;return document.querySelector(".button-modal-queue").textContent=n?"ADD TO QUEUE":"DELETE FROM QUEUE",n?await this.apiFirebase.deleteFromQueue(i,r):await this.apiFirebase.addToQueue(i,r)}))),i||document.querySelector(".button-modal-signIn").addEventListener("click",(()=>{(0,h.openMenuSignIn)()}))}async getFilmTrailer(){const e=(await r.default.get(`https://api.themoviedb.org/3/movie/${this.filmId}/videos`,{params:{api_key:f}})).data.results.filter((e=>e.name=!0===e.official&&"Trailer"===e.type)).sort(((e,t)=>new Date(e.published_at).getTime()+new Date(t.published_at).getTime()));return 0!==e.length&&e[0].key}async getSortedMovies(){u.Loading.circle({svgColor:"red"});try{const e="48efdd88d1650cc055b0f5a157a41228",t=await r.default.get("https://api.themoviedb.org/3/discover/movie",{params:{api_key:e,page:this.page,sort_by:this.sortBy?this.sortBy:void 0,with_genres:this.choosedGenres?this.choosedGenres:void 0,primary_release_year:this.year?this.year:void 0,include_adult:!1}});if(this.totalItems=t.data.total_results,0===this.totalItems)return;return t.data.results}catch(e){c.Notify.failure("Oups! Something went wrong")}finally{u.Loading.remove()}}get query(){return this.searchQuery}set query(e){this.searchQuery=e}get currentPage(){return this.page}set currentPage(e){this.page=e}incrementPage(){this.page+=1}resetPage(){this.page=1}set setTotalItems(e){this.totalItems=e}constructor(){this.searchQuery="",this.page=1,this.totalItems,this.apiFirebase,this.sortBy=void 0,this.choosedGenres=void 0,this.year=void 0,this.filmId}}})),o.register("2shzp",(function(t,n){e(t.exports,"default",(function(){return o("bRlFp").default}));var i=o("bRlFp");const{Axios:r,AxiosError:s,CanceledError:a,isCancel:u,CancelToken:c,VERSION:l,all:d,Cancel:h,isAxiosError:f,spread:p,toFormData:m,AxiosHeaders:g,HttpStatusCode:v,formToJSON:y,mergeConfig:b}=i.default})),o.register("bRlFp",(function(t,n){e(t.exports,"default",(function(){return x}));var i=o("2bBga"),r=o("djt5d"),s=o("6zSb1"),a=o("d0EKm"),u=o("hqlPG"),c=o("4bmvb"),l=o("83xK9"),d=o("2sjhC"),h=o("ksuZT"),f=o("50GW0"),p=o("aewVa"),m=o("121rJ"),g=o("av9gA"),v=o("gNhGc"),y=o("gbTL1"),b=o("jd7iQ");const w=function e(t){const n=new(0,s.default)(t),o=(0,r.default)(s.default.prototype.request,n);return i.default.extend(o,s.default.prototype,n,{allOwnKeys:!0}),i.default.extend(o,n,null,{allOwnKeys:!0}),o.create=function(n){return e((0,a.default)(t,n))},o}(u.default);w.Axios=s.default,w.CanceledError=l.default,w.CancelToken=d.default,w.isCancel=h.default,w.VERSION=f.VERSION,w.toFormData=p.default,w.AxiosError=m.default,w.Cancel=w.CanceledError,w.all=function(e){return Promise.all(e)},w.spread=g.default,w.isAxiosError=v.default,w.mergeConfig=a.default,w.AxiosHeaders=y.default,w.formToJSON=e=>(0,c.default)(i.default.isHTMLForm(e)?new FormData(e):e),w.HttpStatusCode=b.default,w.default=w;var x=w})),o.register("2bBga",(function(t,i){e(t.exports,"default",(function(){return D}));var r=o("djt5d");const{toString:s}=Object.prototype,{getPrototypeOf:a}=Object,u=(c=Object.create(null),e=>{const t=s.call(e);return c[t]||(c[t]=t.slice(8,-1).toLowerCase())});var c;const l=e=>(e=e.toLowerCase(),t=>u(t)===e),d=e=>t=>typeof t===e,{isArray:h}=Array,f=d("undefined");const p=l("ArrayBuffer");const m=d("string"),g=d("function"),v=d("number"),y=e=>null!==e&&"object"==typeof e,b=e=>{if("object"!==u(e))return!1;const t=a(e);return!(null!==t&&t!==Object.prototype&&null!==Object.getPrototypeOf(t)||Symbol.toStringTag in e||Symbol.iterator in e)},w=l("Date"),x=l("File"),_=l("Blob"),E=l("FileList"),I=l("URLSearchParams");function S(e,t,{allOwnKeys:n=!1}={}){if(null==e)return;let i,r;if("object"!=typeof e&&(e=[e]),h(e))for(i=0,r=e.length;i<r;i++)t.call(null,e[i],i,e);else{const r=n?Object.getOwnPropertyNames(e):Object.keys(e),o=r.length;let s;for(i=0;i<o;i++)s=r[i],t.call(null,e[s],s,e)}}function A(e,t){t=t.toLowerCase();const n=Object.keys(e);let i,r=n.length;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}const k="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:n,T=e=>!f(e)&&e!==k;const C=(N="undefined"!=typeof Uint8Array&&a(Uint8Array),e=>N&&e instanceof N);var N;const R=l("HTMLFormElement"),L=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),M=l("RegExp"),O=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),i={};S(n,((n,r)=>{!1!==t(n,r,e)&&(i[r]=n)})),Object.defineProperties(e,i)};var D={isArray:h,isArrayBuffer:p,isBuffer:function(e){return null!==e&&!f(e)&&null!==e.constructor&&!f(e.constructor)&&g(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{const t="[object FormData]";return e&&("function"==typeof FormData&&e instanceof FormData||s.call(e)===t||g(e.toString)&&e.toString()===t)},isArrayBufferView:function(e){let t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&p(e.buffer),t},isString:m,isNumber:v,isBoolean:e=>!0===e||!1===e,isObject:y,isPlainObject:b,isUndefined:f,isDate:w,isFile:x,isBlob:_,isRegExp:M,isFunction:g,isStream:e=>y(e)&&g(e.pipe),isURLSearchParams:I,isTypedArray:C,isFileList:E,forEach:S,merge:function e(){const{caseless:t}=T(this)&&this||{},n={},i=(i,r)=>{const o=t&&A(n,r)||r;b(n[o])&&b(i)?n[o]=e(n[o],i):b(i)?n[o]=e({},i):h(i)?n[o]=i.slice():n[o]=i};for(let e=0,t=arguments.length;e<t;e++)arguments[e]&&S(arguments[e],i);return n},extend:(e,t,n,{allOwnKeys:i}={})=>(S(t,((t,i)=>{n&&g(t)?e[i]=(0,r.default)(t,n):e[i]=t}),{allOwnKeys:i}),e),trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,n,i)=>{e.prototype=Object.create(t.prototype,i),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},toFlatObject:(e,t,n,i)=>{let r,o,s;const u={};if(t=t||{},null==e)return t;do{for(r=Object.getOwnPropertyNames(e),o=r.length;o-- >0;)s=r[o],i&&!i(s,e,t)||u[s]||(t[s]=e[s],u[s]=!0);e=!1!==n&&a(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:u,kindOfTest:l,endsWith:(e,t,n)=>{e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;const i=e.indexOf(t,n);return-1!==i&&i===n},toArray:e=>{if(!e)return null;if(h(e))return e;let t=e.length;if(!v(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},forEachEntry:(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let i;for(;(i=n.next())&&!i.done;){const n=i.value;t.call(e,n[0],n[1])}},matchAll:(e,t)=>{let n;const i=[];for(;null!==(n=e.exec(t));)i.push(n);return i},isHTMLForm:R,hasOwnProperty:L,hasOwnProp:L,reduceDescriptors:O,freezeMethods:e=>{O(e,((t,n)=>{if(g(e)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const i=e[n];g(i)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},toObjectSet:(e,t)=>{const n={},i=e=>{e.forEach((e=>{n[e]=!0}))};return h(e)?i(e):i(String(e).split(t)),n},toCamelCase:e=>e.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g,(function(e,t,n){return t.toUpperCase()+n})),noop:()=>{},toFiniteNumber:(e,t)=>(e=+e,Number.isFinite(e)?e:t),findKey:A,global:k,isContextDefined:T,toJSONObject:e=>{const t=new Array(10),n=(e,i)=>{if(y(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[i]=e;const r=h(e)?[]:{};return S(e,((e,t)=>{const o=n(e,i+1);!f(o)&&(r[t]=o)})),t[i]=void 0,r}}return e};return n(e,0)}}})),o.register("djt5d",(function(t,n){function i(e,t){return function(){return e.apply(t,arguments)}}e(t.exports,"default",(function(){return i}))})),o.register("6zSb1",(function(t,n){e(t.exports,"default",(function(){return p}));var i=o("2bBga"),r=o("2RNjJ"),s=o("5Dm7L"),a=o("eQ5d8"),u=o("d0EKm"),c=o("1ZTQa"),l=o("6zj0X"),d=o("gbTL1");const h=l.default.validators;class f{request(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},t=(0,u.default)(this.defaults,t);const{transitional:n,paramsSerializer:r,headers:o}=t;let s;void 0!==n&&l.default.assertOptions(n,{silentJSONParsing:h.transitional(h.boolean),forcedJSONParsing:h.transitional(h.boolean),clarifyTimeoutError:h.transitional(h.boolean)},!1),void 0!==r&&l.default.assertOptions(r,{encode:h.function,serialize:h.function},!0),t.method=(t.method||this.defaults.method||"get").toLowerCase(),s=o&&i.default.merge(o.common,o[t.method]),s&&i.default.forEach(["delete","get","head","post","put","patch","common"],(e=>{delete o[e]})),t.headers=d.default.concat(s,o);const c=[];let f=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(f=f&&e.synchronous,c.unshift(e.fulfilled,e.rejected))}));const p=[];let m;this.interceptors.response.forEach((function(e){p.push(e.fulfilled,e.rejected)}));let g,v=0;if(!f){const e=[a.default.bind(this),void 0];for(e.unshift.apply(e,c),e.push.apply(e,p),g=e.length,m=Promise.resolve(t);v<g;)m=m.then(e[v++],e[v++]);return m}g=c.length;let y=t;for(v=0;v<g;){const e=c[v++],t=c[v++];try{y=e(y)}catch(e){t.call(this,e);break}}try{m=a.default.call(this,y)}catch(e){return Promise.reject(e)}for(v=0,g=p.length;v<g;)m=m.then(p[v++],p[v++]);return m}getUri(e){e=(0,u.default)(this.defaults,e);const t=(0,c.default)(e.baseURL,e.url);return(0,r.default)(t,e.params,e.paramsSerializer)}constructor(e){this.defaults=e,this.interceptors={request:new(0,s.default),response:new(0,s.default)}}}i.default.forEach(["delete","get","head","options"],(function(e){f.prototype[e]=function(t,n){return this.request((0,u.default)(n||{},{method:e,url:t,data:(n||{}).data}))}})),i.default.forEach(["post","put","patch"],(function(e){function t(t){return function(n,i,r){return this.request((0,u.default)(r||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:i}))}}f.prototype[e]=t(),f.prototype[e+"Form"]=t(!0)}));var p=f})),o.register("2RNjJ",(function(t,n){e(t.exports,"default",(function(){return a}));var i=o("2bBga"),r=o("hz3Ym");function s(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function a(e,t,n){if(!t)return e;const o=n&&n.encode||s,a=n&&n.serialize;let u;if(u=a?a(t,n):i.default.isURLSearchParams(t)?t.toString():new(0,r.default)(t,n).toString(o),u){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+u}return e}})),o.register("hz3Ym",(function(t,n){e(t.exports,"default",(function(){return u}));var i=o("aewVa");function r(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function s(e,t){this._pairs=[],e&&(0,i.default)(e,this,t)}const a=s.prototype;a.append=function(e,t){this._pairs.push([e,t])},a.toString=function(e){const t=e?function(t){return e.call(this,t,r)}:r;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};var u=s})),o.register("aewVa",(function(t,n){e(t.exports,"default",(function(){return h}));var i=o("2bBga"),r=o("121rJ"),s=o("cHBTa"),a=o("ihoyg").Buffer;function u(e){return i.default.isPlainObject(e)||i.default.isArray(e)}function c(e){return i.default.endsWith(e,"[]")?e.slice(0,-2):e}function l(e,t,n){return e?e.concat(t).map((function(e,t){return e=c(e),!n&&t?"["+e+"]":e})).join(n?".":""):t}const d=i.default.toFlatObject(i.default,{},null,(function(e){return/^is[A-Z]/.test(e)}));var h=function(e,t,n){if(!i.default.isObject(e))throw new TypeError("target must be an object");t=t||new(s.default||FormData);const o=(n=i.default.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!i.default.isUndefined(t[e])}))).metaTokens,h=n.visitor||y,f=n.dots,p=n.indexes,m=(n.Blob||"undefined"!=typeof Blob&&Blob)&&((g=t)&&i.default.isFunction(g.append)&&"FormData"===g[Symbol.toStringTag]&&g[Symbol.iterator]);var g;if(!i.default.isFunction(h))throw new TypeError("visitor must be a function");function v(e){if(null===e)return"";if(i.default.isDate(e))return e.toISOString();if(!m&&i.default.isBlob(e))throw new(0,r.default)("Blob is not supported. Use a Buffer instead.");return i.default.isArrayBuffer(e)||i.default.isTypedArray(e)?m&&"function"==typeof Blob?new Blob([e]):a.from(e):e}function y(e,n,r){let s=e;if(e&&!r&&"object"==typeof e)if(i.default.endsWith(n,"{}"))n=o?n:n.slice(0,-2),e=JSON.stringify(e);else if(i.default.isArray(e)&&function(e){return i.default.isArray(e)&&!e.some(u)}(e)||i.default.isFileList(e)||i.default.endsWith(n,"[]")&&(s=i.default.toArray(e)))return n=c(n),s.forEach((function(e,r){!i.default.isUndefined(e)&&null!==e&&t.append(!0===p?l([n],r,f):null===p?n:n+"[]",v(e))})),!1;return!!u(e)||(t.append(l(r,n,f),v(e)),!1)}const b=[],w=Object.assign(d,{defaultVisitor:y,convertValue:v,isVisitable:u});if(!i.default.isObject(e))throw new TypeError("data must be an object");return function e(n,r){if(!i.default.isUndefined(n)){if(-1!==b.indexOf(n))throw Error("Circular reference detected in "+r.join("."));b.push(n),i.default.forEach(n,(function(n,o){!0===(!(i.default.isUndefined(n)||null===n)&&h.call(t,n,i.default.isString(o)?o.trim():o,r,w))&&e(n,r?r.concat(o):[o])})),b.pop()}}(e),t}})),o.register("121rJ",(function(t,n){e(t.exports,"default",(function(){return u}));var i=o("2bBga");function r(e,t,n,i,r){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),i&&(this.request=i),r&&(this.response=r)}i.default.inherits(r,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:i.default.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const s=r.prototype,a={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{a[e]={value:e}})),Object.defineProperties(r,a),Object.defineProperty(s,"isAxiosError",{value:!0}),r.from=(e,t,n,o,a,u)=>{const c=Object.create(s);return i.default.toFlatObject(e,c,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),r.call(c,e.message,t,n,o,a),c.cause=e,c.name=e.name,u&&Object.assign(c,u),c};var u=r})),o.register("cHBTa",(function(n,i){e(n.exports,"default",(function(){return r}));var r=t(o("FHeSn"))})),o.register("FHeSn",(function(e,t){e.exports="object"==typeof self?self.FormData:window.FormData})),o.register("ihoyg",(function(t,n){var i,r;e(t.exports,"Buffer",(function(){return i}),(function(e){return i=e})),e(t.exports,"INSPECT_MAX_BYTES",(function(){return r}),(function(e){return r=e}));var s=o("hqZtu"),a=o("5WQj6");const u="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;i=d,r=50;const c=2147483647;function l(e){if(e>c)throw new RangeError('The value "'+e+'" is invalid for option "size"');const t=new Uint8Array(e);return Object.setPrototypeOf(t,d.prototype),t}function d(e,t,n){if("number"==typeof e){if("string"==typeof t)throw new TypeError('The "string" argument must be of type string. Received type number');return p(e)}return h(e,t,n)}function h(e,t,n){if("string"==typeof e)return function(e,t){"string"==typeof t&&""!==t||(t="utf8");if(!d.isEncoding(t))throw new TypeError("Unknown encoding: "+t);const n=0|y(e,t);let i=l(n);const r=i.write(e,t);r!==n&&(i=i.slice(0,r));return i}(e,t);if(ArrayBuffer.isView(e))return function(e){if(J(e,Uint8Array)){const t=new Uint8Array(e);return g(t.buffer,t.byteOffset,t.byteLength)}return m(e)}(e);if(null==e)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(J(e,ArrayBuffer)||e&&J(e.buffer,ArrayBuffer))return g(e,t,n);if("undefined"!=typeof SharedArrayBuffer&&(J(e,SharedArrayBuffer)||e&&J(e.buffer,SharedArrayBuffer)))return g(e,t,n);if("number"==typeof e)throw new TypeError('The "value" argument must not be of type number. Received type number');const i=e.valueOf&&e.valueOf();if(null!=i&&i!==e)return d.from(i,t,n);const r=function(e){if(d.isBuffer(e)){const t=0|v(e.length),n=l(t);return 0===n.length||e.copy(n,0,0,t),n}if(void 0!==e.length)return"number"!=typeof e.length||Q(e.length)?l(0):m(e);if("Buffer"===e.type&&Array.isArray(e.data))return m(e.data)}(e);if(r)return r;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return d.from(e[Symbol.toPrimitive]("string"),t,n);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function f(e){if("number"!=typeof e)throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function p(e){return f(e),l(e<0?0:0|v(e))}function m(e){const t=e.length<0?0:0|v(e.length),n=l(t);for(let i=0;i<t;i+=1)n[i]=255&e[i];return n}function g(e,t,n){if(t<0||e.byteLength<t)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(n||0))throw new RangeError('"length" is outside of buffer bounds');let i;return i=void 0===t&&void 0===n?new Uint8Array(e):void 0===n?new Uint8Array(e,t):new Uint8Array(e,t,n),Object.setPrototypeOf(i,d.prototype),i}function v(e){if(e>=c)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+c.toString(16)+" bytes");return 0|e}function y(e,t){if(d.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||J(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);const n=e.length,i=arguments.length>2&&!0===arguments[2];if(!i&&0===n)return 0;let r=!1;for(;;)switch(t){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return Y(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return Z(e).length;default:if(r)return i?-1:Y(e).length;t=(""+t).toLowerCase(),r=!0}}function b(e,t,n){let i=!1;if((void 0===t||t<0)&&(t=0),t>this.length)return"";if((void 0===n||n>this.length)&&(n=this.length),n<=0)return"";if((n>>>=0)<=(t>>>=0))return"";for(e||(e="utf8");;)switch(e){case"hex":return M(this,t,n);case"utf8":case"utf-8":return C(this,t,n);case"ascii":return R(this,t,n);case"latin1":case"binary":return L(this,t,n);case"base64":return T(this,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return O(this,t,n);default:if(i)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),i=!0}}function w(e,t,n){const i=e[t];e[t]=e[n],e[n]=i}function x(e,t,n,i,r){if(0===e.length)return-1;if("string"==typeof n?(i=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),Q(n=+n)&&(n=r?0:e.length-1),n<0&&(n=e.length+n),n>=e.length){if(r)return-1;n=e.length-1}else if(n<0){if(!r)return-1;n=0}if("string"==typeof t&&(t=d.from(t,i)),d.isBuffer(t))return 0===t.length?-1:_(e,t,n,i,r);if("number"==typeof t)return t&=255,"function"==typeof Uint8Array.prototype.indexOf?r?Uint8Array.prototype.indexOf.call(e,t,n):Uint8Array.prototype.lastIndexOf.call(e,t,n):_(e,[t],n,i,r);throw new TypeError("val must be string, number or Buffer")}function _(e,t,n,i,r){let o,s=1,a=e.length,u=t.length;if(void 0!==i&&("ucs2"===(i=String(i).toLowerCase())||"ucs-2"===i||"utf16le"===i||"utf-16le"===i)){if(e.length<2||t.length<2)return-1;s=2,a/=2,u/=2,n/=2}function c(e,t){return 1===s?e[t]:e.readUInt16BE(t*s)}if(r){let i=-1;for(o=n;o<a;o++)if(c(e,o)===c(t,-1===i?0:o-i)){if(-1===i&&(i=o),o-i+1===u)return i*s}else-1!==i&&(o-=o-i),i=-1}else for(n+u>a&&(n=a-u),o=n;o>=0;o--){let n=!0;for(let i=0;i<u;i++)if(c(e,o+i)!==c(t,i)){n=!1;break}if(n)return o}return-1}function E(e,t,n,i){n=Number(n)||0;const r=e.length-n;i?(i=Number(i))>r&&(i=r):i=r;const o=t.length;let s;for(i>o/2&&(i=o/2),s=0;s<i;++s){const i=parseInt(t.substr(2*s,2),16);if(Q(i))return s;e[n+s]=i}return s}function I(e,t,n,i){return X(Y(t,e.length-n),e,n,i)}function S(e,t,n,i){return X(function(e){const t=[];for(let n=0;n<e.length;++n)t.push(255&e.charCodeAt(n));return t}(t),e,n,i)}function A(e,t,n,i){return X(Z(t),e,n,i)}function k(e,t,n,i){return X(function(e,t){let n,i,r;const o=[];for(let s=0;s<e.length&&!((t-=2)<0);++s)n=e.charCodeAt(s),i=n>>8,r=n%256,o.push(r),o.push(i);return o}(t,e.length-n),e,n,i)}function T(e,t,n){return 0===t&&n===e.length?s.fromByteArray(e):s.fromByteArray(e.slice(t,n))}function C(e,t,n){n=Math.min(e.length,n);const i=[];let r=t;for(;r<n;){const t=e[r];let o=null,s=t>239?4:t>223?3:t>191?2:1;if(r+s<=n){let n,i,a,u;switch(s){case 1:t<128&&(o=t);break;case 2:n=e[r+1],128==(192&n)&&(u=(31&t)<<6|63&n,u>127&&(o=u));break;case 3:n=e[r+1],i=e[r+2],128==(192&n)&&128==(192&i)&&(u=(15&t)<<12|(63&n)<<6|63&i,u>2047&&(u<55296||u>57343)&&(o=u));break;case 4:n=e[r+1],i=e[r+2],a=e[r+3],128==(192&n)&&128==(192&i)&&128==(192&a)&&(u=(15&t)<<18|(63&n)<<12|(63&i)<<6|63&a,u>65535&&u<1114112&&(o=u))}}null===o?(o=65533,s=1):o>65535&&(o-=65536,i.push(o>>>10&1023|55296),o=56320|1023&o),i.push(o),r+=s}return function(e){const t=e.length;if(t<=N)return String.fromCharCode.apply(String,e);let n="",i=0;for(;i<t;)n+=String.fromCharCode.apply(String,e.slice(i,i+=N));return n}(i)}d.TYPED_ARRAY_SUPPORT=function(){try{const e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),d.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(d.prototype,"parent",{enumerable:!0,get:function(){if(d.isBuffer(this))return this.buffer}}),Object.defineProperty(d.prototype,"offset",{enumerable:!0,get:function(){if(d.isBuffer(this))return this.byteOffset}}),d.poolSize=8192,d.from=function(e,t,n){return h(e,t,n)},Object.setPrototypeOf(d.prototype,Uint8Array.prototype),Object.setPrototypeOf(d,Uint8Array),d.alloc=function(e,t,n){return function(e,t,n){return f(e),e<=0?l(e):void 0!==t?"string"==typeof n?l(e).fill(t,n):l(e).fill(t):l(e)}(e,t,n)},d.allocUnsafe=function(e){return p(e)},d.allocUnsafeSlow=function(e){return p(e)},d.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==d.prototype},d.compare=function(e,t){if(J(e,Uint8Array)&&(e=d.from(e,e.offset,e.byteLength)),J(t,Uint8Array)&&(t=d.from(t,t.offset,t.byteLength)),!d.isBuffer(e)||!d.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let n=e.length,i=t.length;for(let r=0,o=Math.min(n,i);r<o;++r)if(e[r]!==t[r]){n=e[r],i=t[r];break}return n<i?-1:i<n?1:0},d.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},d.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return d.alloc(0);let n;if(void 0===t)for(t=0,n=0;n<e.length;++n)t+=e[n].length;const i=d.allocUnsafe(t);let r=0;for(n=0;n<e.length;++n){let t=e[n];if(J(t,Uint8Array))r+t.length>i.length?(d.isBuffer(t)||(t=d.from(t)),t.copy(i,r)):Uint8Array.prototype.set.call(i,t,r);else{if(!d.isBuffer(t))throw new TypeError('"list" argument must be an Array of Buffers');t.copy(i,r)}r+=t.length}return i},d.byteLength=y,d.prototype._isBuffer=!0,d.prototype.swap16=function(){const e=this.length;if(e%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)w(this,t,t+1);return this},d.prototype.swap32=function(){const e=this.length;if(e%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)w(this,t,t+3),w(this,t+1,t+2);return this},d.prototype.swap64=function(){const e=this.length;if(e%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)w(this,t,t+7),w(this,t+1,t+6),w(this,t+2,t+5),w(this,t+3,t+4);return this},d.prototype.toString=function(){const e=this.length;return 0===e?"":0===arguments.length?C(this,0,e):b.apply(this,arguments)},d.prototype.toLocaleString=d.prototype.toString,d.prototype.equals=function(e){if(!d.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e||0===d.compare(this,e)},d.prototype.inspect=function(){let e="";const t=r;return e=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+e+">"},u&&(d.prototype[u]=d.prototype.inspect),d.prototype.compare=function(e,t,n,i,r){if(J(e,Uint8Array)&&(e=d.from(e,e.offset,e.byteLength)),!d.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===t&&(t=0),void 0===n&&(n=e?e.length:0),void 0===i&&(i=0),void 0===r&&(r=this.length),t<0||n>e.length||i<0||r>this.length)throw new RangeError("out of range index");if(i>=r&&t>=n)return 0;if(i>=r)return-1;if(t>=n)return 1;if(this===e)return 0;let o=(r>>>=0)-(i>>>=0),s=(n>>>=0)-(t>>>=0);const a=Math.min(o,s),u=this.slice(i,r),c=e.slice(t,n);for(let e=0;e<a;++e)if(u[e]!==c[e]){o=u[e],s=c[e];break}return o<s?-1:s<o?1:0},d.prototype.includes=function(e,t,n){return-1!==this.indexOf(e,t,n)},d.prototype.indexOf=function(e,t,n){return x(this,e,t,n,!0)},d.prototype.lastIndexOf=function(e,t,n){return x(this,e,t,n,!1)},d.prototype.write=function(e,t,n,i){if(void 0===t)i="utf8",n=this.length,t=0;else if(void 0===n&&"string"==typeof t)i=t,n=this.length,t=0;else{if(!isFinite(t))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");t>>>=0,isFinite(n)?(n>>>=0,void 0===i&&(i="utf8")):(i=n,n=void 0)}const r=this.length-t;if((void 0===n||n>r)&&(n=r),e.length>0&&(n<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");i||(i="utf8");let o=!1;for(;;)switch(i){case"hex":return E(this,e,t,n);case"utf8":case"utf-8":return I(this,e,t,n);case"ascii":case"latin1":case"binary":return S(this,e,t,n);case"base64":return A(this,e,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return k(this,e,t,n);default:if(o)throw new TypeError("Unknown encoding: "+i);i=(""+i).toLowerCase(),o=!0}},d.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};const N=4096;function R(e,t,n){let i="";n=Math.min(e.length,n);for(let r=t;r<n;++r)i+=String.fromCharCode(127&e[r]);return i}function L(e,t,n){let i="";n=Math.min(e.length,n);for(let r=t;r<n;++r)i+=String.fromCharCode(e[r]);return i}function M(e,t,n){const i=e.length;(!t||t<0)&&(t=0),(!n||n<0||n>i)&&(n=i);let r="";for(let i=t;i<n;++i)r+=ee[e[i]];return r}function O(e,t,n){const i=e.slice(t,n);let r="";for(let e=0;e<i.length-1;e+=2)r+=String.fromCharCode(i[e]+256*i[e+1]);return r}function D(e,t,n){if(e%1!=0||e<0)throw new RangeError("offset is not uint");if(e+t>n)throw new RangeError("Trying to access beyond buffer length")}function P(e,t,n,i,r,o){if(!d.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>r||t<o)throw new RangeError('"value" argument is out of bounds');if(n+i>e.length)throw new RangeError("Index out of range")}function F(e,t,n,i,r){G(t,i,r,e,n,7);let o=Number(t&BigInt(4294967295));e[n++]=o,o>>=8,e[n++]=o,o>>=8,e[n++]=o,o>>=8,e[n++]=o;let s=Number(t>>BigInt(32)&BigInt(4294967295));return e[n++]=s,s>>=8,e[n++]=s,s>>=8,e[n++]=s,s>>=8,e[n++]=s,n}function B(e,t,n,i,r){G(t,i,r,e,n,7);let o=Number(t&BigInt(4294967295));e[n+7]=o,o>>=8,e[n+6]=o,o>>=8,e[n+5]=o,o>>=8,e[n+4]=o;let s=Number(t>>BigInt(32)&BigInt(4294967295));return e[n+3]=s,s>>=8,e[n+2]=s,s>>=8,e[n+1]=s,s>>=8,e[n]=s,n+8}function U(e,t,n,i,r,o){if(n+i>e.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function j(e,t,n,i,r){return t=+t,n>>>=0,r||U(e,0,n,4),a.write(e,t,n,i,23,4),n+4}function $(e,t,n,i,r){return t=+t,n>>>=0,r||U(e,0,n,8),a.write(e,t,n,i,52,8),n+8}d.prototype.slice=function(e,t){const n=this.length;(e=~~e)<0?(e+=n)<0&&(e=0):e>n&&(e=n),(t=void 0===t?n:~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),t<e&&(t=e);const i=this.subarray(e,t);return Object.setPrototypeOf(i,d.prototype),i},d.prototype.readUintLE=d.prototype.readUIntLE=function(e,t,n){e>>>=0,t>>>=0,n||D(e,t,this.length);let i=this[e],r=1,o=0;for(;++o<t&&(r*=256);)i+=this[e+o]*r;return i},d.prototype.readUintBE=d.prototype.readUIntBE=function(e,t,n){e>>>=0,t>>>=0,n||D(e,t,this.length);let i=this[e+--t],r=1;for(;t>0&&(r*=256);)i+=this[e+--t]*r;return i},d.prototype.readUint8=d.prototype.readUInt8=function(e,t){return e>>>=0,t||D(e,1,this.length),this[e]},d.prototype.readUint16LE=d.prototype.readUInt16LE=function(e,t){return e>>>=0,t||D(e,2,this.length),this[e]|this[e+1]<<8},d.prototype.readUint16BE=d.prototype.readUInt16BE=function(e,t){return e>>>=0,t||D(e,2,this.length),this[e]<<8|this[e+1]},d.prototype.readUint32LE=d.prototype.readUInt32LE=function(e,t){return e>>>=0,t||D(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},d.prototype.readUint32BE=d.prototype.readUInt32BE=function(e,t){return e>>>=0,t||D(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},d.prototype.readBigUInt64LE=te((function(e){z(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||K(e,this.length-8);const i=t+256*this[++e]+65536*this[++e]+this[++e]*2**24,r=this[++e]+256*this[++e]+65536*this[++e]+n*2**24;return BigInt(i)+(BigInt(r)<<BigInt(32))})),d.prototype.readBigUInt64BE=te((function(e){z(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||K(e,this.length-8);const i=t*2**24+65536*this[++e]+256*this[++e]+this[++e],r=this[++e]*2**24+65536*this[++e]+256*this[++e]+n;return(BigInt(i)<<BigInt(32))+BigInt(r)})),d.prototype.readIntLE=function(e,t,n){e>>>=0,t>>>=0,n||D(e,t,this.length);let i=this[e],r=1,o=0;for(;++o<t&&(r*=256);)i+=this[e+o]*r;return r*=128,i>=r&&(i-=Math.pow(2,8*t)),i},d.prototype.readIntBE=function(e,t,n){e>>>=0,t>>>=0,n||D(e,t,this.length);let i=t,r=1,o=this[e+--i];for(;i>0&&(r*=256);)o+=this[e+--i]*r;return r*=128,o>=r&&(o-=Math.pow(2,8*t)),o},d.prototype.readInt8=function(e,t){return e>>>=0,t||D(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e]},d.prototype.readInt16LE=function(e,t){e>>>=0,t||D(e,2,this.length);const n=this[e]|this[e+1]<<8;return 32768&n?4294901760|n:n},d.prototype.readInt16BE=function(e,t){e>>>=0,t||D(e,2,this.length);const n=this[e+1]|this[e]<<8;return 32768&n?4294901760|n:n},d.prototype.readInt32LE=function(e,t){return e>>>=0,t||D(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},d.prototype.readInt32BE=function(e,t){return e>>>=0,t||D(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},d.prototype.readBigInt64LE=te((function(e){z(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||K(e,this.length-8);const i=this[e+4]+256*this[e+5]+65536*this[e+6]+(n<<24);return(BigInt(i)<<BigInt(32))+BigInt(t+256*this[++e]+65536*this[++e]+this[++e]*2**24)})),d.prototype.readBigInt64BE=te((function(e){z(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||K(e,this.length-8);const i=(t<<24)+65536*this[++e]+256*this[++e]+this[++e];return(BigInt(i)<<BigInt(32))+BigInt(this[++e]*2**24+65536*this[++e]+256*this[++e]+n)})),d.prototype.readFloatLE=function(e,t){return e>>>=0,t||D(e,4,this.length),a.read(this,e,!0,23,4)},d.prototype.readFloatBE=function(e,t){return e>>>=0,t||D(e,4,this.length),a.read(this,e,!1,23,4)},d.prototype.readDoubleLE=function(e,t){return e>>>=0,t||D(e,8,this.length),a.read(this,e,!0,52,8)},d.prototype.readDoubleBE=function(e,t){return e>>>=0,t||D(e,8,this.length),a.read(this,e,!1,52,8)},d.prototype.writeUintLE=d.prototype.writeUIntLE=function(e,t,n,i){if(e=+e,t>>>=0,n>>>=0,!i){P(this,e,t,n,Math.pow(2,8*n)-1,0)}let r=1,o=0;for(this[t]=255&e;++o<n&&(r*=256);)this[t+o]=e/r&255;return t+n},d.prototype.writeUintBE=d.prototype.writeUIntBE=function(e,t,n,i){if(e=+e,t>>>=0,n>>>=0,!i){P(this,e,t,n,Math.pow(2,8*n)-1,0)}let r=n-1,o=1;for(this[t+r]=255&e;--r>=0&&(o*=256);)this[t+r]=e/o&255;return t+n},d.prototype.writeUint8=d.prototype.writeUInt8=function(e,t,n){return e=+e,t>>>=0,n||P(this,e,t,1,255,0),this[t]=255&e,t+1},d.prototype.writeUint16LE=d.prototype.writeUInt16LE=function(e,t,n){return e=+e,t>>>=0,n||P(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},d.prototype.writeUint16BE=d.prototype.writeUInt16BE=function(e,t,n){return e=+e,t>>>=0,n||P(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},d.prototype.writeUint32LE=d.prototype.writeUInt32LE=function(e,t,n){return e=+e,t>>>=0,n||P(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},d.prototype.writeUint32BE=d.prototype.writeUInt32BE=function(e,t,n){return e=+e,t>>>=0,n||P(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},d.prototype.writeBigUInt64LE=te((function(e,t=0){return F(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),d.prototype.writeBigUInt64BE=te((function(e,t=0){return B(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),d.prototype.writeIntLE=function(e,t,n,i){if(e=+e,t>>>=0,!i){const i=Math.pow(2,8*n-1);P(this,e,t,n,i-1,-i)}let r=0,o=1,s=0;for(this[t]=255&e;++r<n&&(o*=256);)e<0&&0===s&&0!==this[t+r-1]&&(s=1),this[t+r]=(e/o>>0)-s&255;return t+n},d.prototype.writeIntBE=function(e,t,n,i){if(e=+e,t>>>=0,!i){const i=Math.pow(2,8*n-1);P(this,e,t,n,i-1,-i)}let r=n-1,o=1,s=0;for(this[t+r]=255&e;--r>=0&&(o*=256);)e<0&&0===s&&0!==this[t+r+1]&&(s=1),this[t+r]=(e/o>>0)-s&255;return t+n},d.prototype.writeInt8=function(e,t,n){return e=+e,t>>>=0,n||P(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},d.prototype.writeInt16LE=function(e,t,n){return e=+e,t>>>=0,n||P(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},d.prototype.writeInt16BE=function(e,t,n){return e=+e,t>>>=0,n||P(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},d.prototype.writeInt32LE=function(e,t,n){return e=+e,t>>>=0,n||P(this,e,t,4,2147483647,-2147483648),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},d.prototype.writeInt32BE=function(e,t,n){return e=+e,t>>>=0,n||P(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},d.prototype.writeBigInt64LE=te((function(e,t=0){return F(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),d.prototype.writeBigInt64BE=te((function(e,t=0){return B(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),d.prototype.writeFloatLE=function(e,t,n){return j(this,e,t,!0,n)},d.prototype.writeFloatBE=function(e,t,n){return j(this,e,t,!1,n)},d.prototype.writeDoubleLE=function(e,t,n){return $(this,e,t,!0,n)},d.prototype.writeDoubleBE=function(e,t,n){return $(this,e,t,!1,n)},d.prototype.copy=function(e,t,n,i){if(!d.isBuffer(e))throw new TypeError("argument should be a Buffer");if(n||(n=0),i||0===i||(i=this.length),t>=e.length&&(t=e.length),t||(t=0),i>0&&i<n&&(i=n),i===n)return 0;if(0===e.length||0===this.length)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("Index out of range");if(i<0)throw new RangeError("sourceEnd out of bounds");i>this.length&&(i=this.length),e.length-t<i-n&&(i=e.length-t+n);const r=i-n;return this===e&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(t,n,i):Uint8Array.prototype.set.call(e,this.subarray(n,i),t),r},d.prototype.fill=function(e,t,n,i){if("string"==typeof e){if("string"==typeof t?(i=t,t=0,n=this.length):"string"==typeof n&&(i=n,n=this.length),void 0!==i&&"string"!=typeof i)throw new TypeError("encoding must be a string");if("string"==typeof i&&!d.isEncoding(i))throw new TypeError("Unknown encoding: "+i);if(1===e.length){const t=e.charCodeAt(0);("utf8"===i&&t<128||"latin1"===i)&&(e=t)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));if(t<0||this.length<t||this.length<n)throw new RangeError("Out of range index");if(n<=t)return this;let r;if(t>>>=0,n=void 0===n?this.length:n>>>0,e||(e=0),"number"==typeof e)for(r=t;r<n;++r)this[r]=e;else{const o=d.isBuffer(e)?e:d.from(e,i),s=o.length;if(0===s)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(r=0;r<n-t;++r)this[r+t]=o[r%s]}return this};const V={};function H(e,t,n){V[e]=class extends n{get code(){return e}set code(e){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:e,writable:!0})}toString(){return`${this.name} [${e}]: ${this.message}`}constructor(){super(),Object.defineProperty(this,"message",{value:t.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${e}]`,this.stack,delete this.name}}}function W(e){let t="",n=e.length;const i="-"===e[0]?1:0;for(;n>=i+4;n-=3)t=`_${e.slice(n-3,n)}${t}`;return`${e.slice(0,n)}${t}`}function G(e,t,n,i,r,o){if(e>n||e<t){const i="bigint"==typeof t?"n":"";let r;throw r=o>3?0===t||t===BigInt(0)?`>= 0${i} and < 2${i} ** ${8*(o+1)}${i}`:`>= -(2${i} ** ${8*(o+1)-1}${i}) and < 2 ** ${8*(o+1)-1}${i}`:`>= ${t}${i} and <= ${n}${i}`,new V.ERR_OUT_OF_RANGE("value",r,e)}!function(e,t,n){z(t,"offset"),void 0!==e[t]&&void 0!==e[t+n]||K(t,e.length-(n+1))}(i,r,o)}function z(e,t){if("number"!=typeof e)throw new V.ERR_INVALID_ARG_TYPE(t,"number",e)}function K(e,t,n){if(Math.floor(e)!==e)throw z(e,n),new V.ERR_OUT_OF_RANGE(n||"offset","an integer",e);if(t<0)throw new V.ERR_BUFFER_OUT_OF_BOUNDS;throw new V.ERR_OUT_OF_RANGE(n||"offset",`>= ${n?1:0} and <= ${t}`,e)}H("ERR_BUFFER_OUT_OF_BOUNDS",(function(e){return e?`${e} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"}),RangeError),H("ERR_INVALID_ARG_TYPE",(function(e,t){return`The "${e}" argument must be of type number. Received type ${typeof t}`}),TypeError),H("ERR_OUT_OF_RANGE",(function(e,t,n){let i=`The value of "${e}" is out of range.`,r=n;return Number.isInteger(n)&&Math.abs(n)>2**32?r=W(String(n)):"bigint"==typeof n&&(r=String(n),(n>BigInt(2)**BigInt(32)||n<-(BigInt(2)**BigInt(32)))&&(r=W(r)),r+="n"),i+=` It must be ${t}. Received ${r}`,i}),RangeError);const q=/[^+/0-9A-Za-z-_]/g;function Y(e,t){let n;t=t||1/0;const i=e.length;let r=null;const o=[];for(let s=0;s<i;++s){if(n=e.charCodeAt(s),n>55295&&n<57344){if(!r){if(n>56319){(t-=3)>-1&&o.push(239,191,189);continue}if(s+1===i){(t-=3)>-1&&o.push(239,191,189);continue}r=n;continue}if(n<56320){(t-=3)>-1&&o.push(239,191,189),r=n;continue}n=65536+(r-55296<<10|n-56320)}else r&&(t-=3)>-1&&o.push(239,191,189);if(r=null,n<128){if((t-=1)<0)break;o.push(n)}else if(n<2048){if((t-=2)<0)break;o.push(n>>6|192,63&n|128)}else if(n<65536){if((t-=3)<0)break;o.push(n>>12|224,n>>6&63|128,63&n|128)}else{if(!(n<1114112))throw new Error("Invalid code point");if((t-=4)<0)break;o.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}}return o}function Z(e){return s.toByteArray(function(e){if((e=(e=e.split("=")[0]).trim().replace(q,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function X(e,t,n,i){let r;for(r=0;r<i&&!(r+n>=t.length||r>=e.length);++r)t[r+n]=e[r];return r}function J(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}function Q(e){return e!=e}const ee=function(){const e="0123456789abcdef",t=new Array(256);for(let n=0;n<16;++n){const i=16*n;for(let r=0;r<16;++r)t[i+r]=e[n]+e[r]}return t}();function te(e){return"undefined"==typeof BigInt?ne:e}function ne(){throw new Error("BigInt not supported")}})),o.register("hqZtu",(function(t,n){var i,r;e(t.exports,"toByteArray",(function(){return i}),(function(e){return i=e})),e(t.exports,"fromByteArray",(function(){return r}),(function(e){return r=e})),i=function(e){var t,n,i=d(e),r=i[0],o=i[1],u=new a(function(e,t,n){return 3*(t+n)/4-n}(0,r,o)),c=0,l=o>0?r-4:r;for(n=0;n<l;n+=4)t=s[e.charCodeAt(n)]<<18|s[e.charCodeAt(n+1)]<<12|s[e.charCodeAt(n+2)]<<6|s[e.charCodeAt(n+3)],u[c++]=t>>16&255,u[c++]=t>>8&255,u[c++]=255&t;2===o&&(t=s[e.charCodeAt(n)]<<2|s[e.charCodeAt(n+1)]>>4,u[c++]=255&t);1===o&&(t=s[e.charCodeAt(n)]<<10|s[e.charCodeAt(n+1)]<<4|s[e.charCodeAt(n+2)]>>2,u[c++]=t>>8&255,u[c++]=255&t);return u},r=function(e){for(var t,n=e.length,i=n%3,r=[],s=16383,a=0,u=n-i;a<u;a+=s)r.push(h(e,a,a+s>u?u:a+s));1===i?(t=e[n-1],r.push(o[t>>2]+o[t<<4&63]+"==")):2===i&&(t=(e[n-2]<<8)+e[n-1],r.push(o[t>>10]+o[t>>4&63]+o[t<<2&63]+"="));return r.join("")};for(var o=[],s=[],a="undefined"!=typeof Uint8Array?Uint8Array:Array,u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",c=0,l=u.length;c<l;++c)o[c]=u[c],s[u.charCodeAt(c)]=c;function d(e){var t=e.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=e.indexOf("=");return-1===n&&(n=t),[n,n===t?0:4-n%4]}function h(e,t,n){for(var i,r,s=[],a=t;a<n;a+=3)i=(e[a]<<16&16711680)+(e[a+1]<<8&65280)+(255&e[a+2]),s.push(o[(r=i)>>18&63]+o[r>>12&63]+o[r>>6&63]+o[63&r]);return s.join("")}s["-".charCodeAt(0)]=62,s["_".charCodeAt(0)]=63})),o.register("5WQj6",(function(t,n){
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */var i,r;e(t.exports,"read",(function(){return i}),(function(e){return i=e})),e(t.exports,"write",(function(){return r}),(function(e){return r=e})),i=function(e,t,n,i,r){var o,s,a=8*r-i-1,u=(1<<a)-1,c=u>>1,l=-7,d=n?r-1:0,h=n?-1:1,f=e[t+d];for(d+=h,o=f&(1<<-l)-1,f>>=-l,l+=a;l>0;o=256*o+e[t+d],d+=h,l-=8);for(s=o&(1<<-l)-1,o>>=-l,l+=i;l>0;s=256*s+e[t+d],d+=h,l-=8);if(0===o)o=1-c;else{if(o===u)return s?NaN:1/0*(f?-1:1);s+=Math.pow(2,i),o-=c}return(f?-1:1)*s*Math.pow(2,o-i)},r=function(e,t,n,i,r,o){var s,a,u,c=8*o-r-1,l=(1<<c)-1,d=l>>1,h=23===r?Math.pow(2,-24)-Math.pow(2,-77):0,f=i?0:o-1,p=i?1:-1,m=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(a=isNaN(t)?1:0,s=l):(s=Math.floor(Math.log(t)/Math.LN2),t*(u=Math.pow(2,-s))<1&&(s--,u*=2),(t+=s+d>=1?h/u:h*Math.pow(2,1-d))*u>=2&&(s++,u/=2),s+d>=l?(a=0,s=l):s+d>=1?(a=(t*u-1)*Math.pow(2,r),s+=d):(a=t*Math.pow(2,d-1)*Math.pow(2,r),s=0));r>=8;e[n+f]=255&a,f+=p,a/=256,r-=8);for(s=s<<r|a,c+=r;c>0;e[n+f]=255&s,f+=p,s/=256,c-=8);e[n+f-p]|=128*m}})),o.register("5Dm7L",(function(t,n){e(t.exports,"default",(function(){return r}));var i=o("2bBga");var r=class{use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){i.default.forEach(this.handlers,(function(t){null!==t&&e(t)}))}constructor(){this.handlers=[]}}})),o.register("eQ5d8",(function(t,n){e(t.exports,"default",(function(){return d}));var i=o("bhEpd"),r=o("ksuZT"),s=o("hqlPG"),a=o("83xK9"),u=o("gbTL1"),c=o("enpjQ");function l(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new(0,a.default)(null,e)}function d(e){l(e),e.headers=u.default.from(e.headers),e.data=i.default.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1);return c.default.getAdapter(e.adapter||s.default.adapter)(e).then((function(t){return l(e),t.data=i.default.call(e,e.transformResponse,t),t.headers=u.default.from(t.headers),t}),(function(t){return(0,r.default)(t)||(l(e),t&&t.response&&(t.response.data=i.default.call(e,e.transformResponse,t.response),t.response.headers=u.default.from(t.response.headers))),Promise.reject(t)}))}})),o.register("bhEpd",(function(t,n){e(t.exports,"default",(function(){return a}));var i=o("2bBga"),r=o("hqlPG"),s=o("gbTL1");function a(e,t){const n=this||r.default,o=t||n,a=s.default.from(o.headers);let u=o.data;return i.default.forEach(e,(function(e){u=e.call(n,u,a.normalize(),t?t.status:void 0)})),a.normalize(),u}})),o.register("hqlPG",(function(t,n){e(t.exports,"default",(function(){return f}));var i=o("2bBga"),r=o("121rJ"),s=o("2wfLM"),a=o("aewVa"),u=o("5tcKT"),c=o("hdo0R"),l=o("4bmvb");const d={"Content-Type":void 0};const h={transitional:s.default,adapter:["xhr","http"],transformRequest:[function(e,t){const n=t.getContentType()||"",r=n.indexOf("application/json")>-1,o=i.default.isObject(e);o&&i.default.isHTMLForm(e)&&(e=new FormData(e));if(i.default.isFormData(e))return r&&r?JSON.stringify((0,l.default)(e)):e;if(i.default.isArrayBuffer(e)||i.default.isBuffer(e)||i.default.isStream(e)||i.default.isFile(e)||i.default.isBlob(e))return e;if(i.default.isArrayBufferView(e))return e.buffer;if(i.default.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let s;if(o){if(n.indexOf("application/x-www-form-urlencoded")>-1)return(0,u.default)(e,this.formSerializer).toString();if((s=i.default.isFileList(e))||n.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return(0,a.default)(s?{"files[]":e}:e,t&&new t,this.formSerializer)}}return o||r?(t.setContentType("application/json",!1),function(e,t,n){if(i.default.isString(e))try{return(t||JSON.parse)(e),i.default.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(n||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){const t=this.transitional||h.transitional,n=t&&t.forcedJSONParsing,o="json"===this.responseType;if(e&&i.default.isString(e)&&(n&&!this.responseType||o)){const n=!(t&&t.silentJSONParsing)&&o;try{return JSON.parse(e)}catch(e){if(n){if("SyntaxError"===e.name)throw r.default.from(e,r.default.ERR_BAD_RESPONSE,this,null,this.response);throw e}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:c.default.classes.FormData,Blob:c.default.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};i.default.forEach(["delete","get","head"],(function(e){h.headers[e]={}})),i.default.forEach(["post","put","patch"],(function(e){h.headers[e]=i.default.merge(d)}));var f=h})),o.register("2wfLM",(function(t,n){e(t.exports,"default",(function(){return i}));var i={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1}})),o.register("5tcKT",(function(t,n){e(t.exports,"default",(function(){return a}));var i=o("2bBga"),r=o("aewVa"),s=o("hdo0R");function a(e,t){return(0,r.default)(e,new s.default.classes.URLSearchParams,Object.assign({visitor:function(e,t,n,r){return s.default.isNode&&i.default.isBuffer(e)?(this.append(t,e.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)}},t))}})),o.register("hdo0R",(function(t,n){e(t.exports,"default",(function(){return u}));var i=o("9matH"),r=o("eN04z");const s=(()=>{let e;return("undefined"==typeof navigator||"ReactNative"!==(e=navigator.product)&&"NativeScript"!==e&&"NS"!==e)&&("undefined"!=typeof window&&"undefined"!=typeof document)})(),a="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts;var u={isBrowser:!0,classes:{URLSearchParams:i.default,FormData:r.default,Blob:Blob},isStandardBrowserEnv:s,isStandardBrowserWebWorkerEnv:a,protocols:["http","https","file","blob","url","data"]}})),o.register("9matH",(function(t,n){e(t.exports,"default",(function(){return r}));var i=o("hz3Ym"),r="undefined"!=typeof URLSearchParams?URLSearchParams:i.default})),o.register("eN04z",(function(t,n){e(t.exports,"default",(function(){return i}));var i=FormData})),o.register("4bmvb",(function(t,n){e(t.exports,"default",(function(){return r}));var i=o("2bBga");var r=function(e){function t(e,n,r,o){let s=e[o++];const a=Number.isFinite(+s),u=o>=e.length;if(s=!s&&i.default.isArray(r)?r.length:s,u)return i.default.hasOwnProp(r,s)?r[s]=[r[s],n]:r[s]=n,!a;r[s]&&i.default.isObject(r[s])||(r[s]=[]);return t(e,n,r[s],o)&&i.default.isArray(r[s])&&(r[s]=function(e){const t={},n=Object.keys(e);let i;const r=n.length;let o;for(i=0;i<r;i++)o=n[i],t[o]=e[o];return t}(r[s])),!a}if(i.default.isFormData(e)&&i.default.isFunction(e.entries)){const n={};return i.default.forEachEntry(e,((e,r)=>{t(function(e){return i.default.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}(e),r,n,0)})),n}return null}})),o.register("gbTL1",(function(t,n){e(t.exports,"default",(function(){return f}));var i=o("2bBga"),r=o("9cPEm");const s=Symbol("internals");function a(e){return e&&String(e).trim().toLowerCase()}function u(e){return!1===e||null==e?e:i.default.isArray(e)?e.map(u):String(e)}function c(e,t,n,r){return i.default.isFunction(r)?r.call(this,t,n):i.default.isString(t)?i.default.isString(r)?-1!==t.indexOf(r):i.default.isRegExp(r)?r.test(t):void 0:void 0}let l=Symbol.iterator,d=Symbol.toStringTag;class h{set(e,t,n){const o=this;function s(e,t,n){const r=a(t);if(!r)throw new Error("header name must be a non-empty string");const s=i.default.findKey(o,r);(!s||void 0===o[s]||!0===n||void 0===n&&!1!==o[s])&&(o[s||t]=u(e))}const c=(e,t)=>i.default.forEach(e,((e,n)=>s(e,n,t)));return i.default.isPlainObject(e)||e instanceof this.constructor?c(e,t):i.default.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z]+$/.test(e.trim())?c((0,r.default)(e),t):null!=e&&s(t,e,n),this}get(e,t){if(e=a(e)){const n=i.default.findKey(this,e);if(n){const e=this[n];if(!t)return e;if(!0===t)return function(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=n.exec(e);)t[i[1]]=i[2];return t}(e);if(i.default.isFunction(t))return t.call(this,e,n);if(i.default.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=a(e)){const n=i.default.findKey(this,e);return!(!n||t&&!c(0,this[n],n,t))}return!1}delete(e,t){const n=this;let r=!1;function o(e){if(e=a(e)){const o=i.default.findKey(n,e);!o||t&&!c(0,n[o],o,t)||(delete n[o],r=!0)}}return i.default.isArray(e)?e.forEach(o):o(e),r}clear(){return Object.keys(this).forEach(this.delete.bind(this))}normalize(e){const t=this,n={};return i.default.forEach(this,((r,o)=>{const s=i.default.findKey(n,o);if(s)return t[s]=u(r),void delete t[o];const a=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,n)=>t.toUpperCase()+n))}(o):String(o).trim();a!==o&&delete t[o],t[a]=u(r),n[a]=!0})),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return i.default.forEach(this,((n,r)=>{null!=n&&!1!==n&&(t[r]=e&&i.default.isArray(n)?n.join(", "):n)})),t}[l](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([e,t])=>e+": "+t)).join("\n")}get[d](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const n=new this(e);return t.forEach((e=>n.set(e))),n}static accessor(e){const t=(this[s]=this[s]={accessors:{}}).accessors,n=this.prototype;function r(e){const r=a(e);t[r]||(!function(e,t){const n=i.default.toCamelCase(" "+t);["get","set","has"].forEach((i=>{Object.defineProperty(e,i+n,{value:function(e,n,r){return this[i].call(this,t,e,n,r)},configurable:!0})}))}(n,e),t[r]=!0)}return i.default.isArray(e)?e.forEach(r):r(e),this}constructor(e){e&&this.set(e)}}h.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent"]),i.default.freezeMethods(h.prototype),i.default.freezeMethods(h);var f=h})),o.register("9cPEm",(function(t,n){e(t.exports,"default",(function(){return r}));const i=o("2bBga").default.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var r=e=>{const t={};let n,r,o;return e&&e.split("\n").forEach((function(e){o=e.indexOf(":"),n=e.substring(0,o).trim().toLowerCase(),r=e.substring(o+1).trim(),!n||t[n]&&i[n]||("set-cookie"===n?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)})),t}})),o.register("ksuZT",(function(t,n){function i(e){return!(!e||!e.__CANCEL__)}e(t.exports,"default",(function(){return i}))})),o.register("83xK9",(function(t,n){e(t.exports,"default",(function(){return s}));var i=o("121rJ");function r(e,t,n){i.default.call(this,null==e?"canceled":e,i.default.ERR_CANCELED,t,n),this.name="CanceledError"}o("2bBga").default.inherits(r,i.default,{__CANCEL__:!0});var s=r})),o.register("enpjQ",(function(t,n){e(t.exports,"default",(function(){return c}));var i=o("2bBga"),r=o("1gvAv"),s=o("9VVcb"),a=o("121rJ");const u={http:r.default,xhr:s.default};i.default.forEach(u,((e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(e){}Object.defineProperty(e,"adapterName",{value:t})}}));var c={getAdapter:e=>{e=i.default.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let o=0;o<t&&(n=e[o],!(r=i.default.isString(n)?u[n.toLowerCase()]:n));o++);if(!r){if(!1===r)throw new(0,a.default)(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT");throw new Error(i.default.hasOwnProp(u,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`)}if(!i.default.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:u}})),o.register("1gvAv",(function(t,n){e(t.exports,"default",(function(){return i}));var i=null})),o.register("9VVcb",(function(t,n){e(t.exports,"default",(function(){return y}));var i=o("2bBga"),r=o("1TQad"),s=o("kTwUV"),a=o("2RNjJ"),u=o("1ZTQa"),c=o("g3yOT"),l=o("2wfLM"),d=o("121rJ"),h=o("83xK9"),f=o("8wMQb"),p=o("hdo0R"),m=o("gbTL1"),g=o("5OiBb");function v(e,t){let n=0;const i=(0,g.default)(50,250);return r=>{const o=r.loaded,s=r.lengthComputable?r.total:void 0,a=o-n,u=i(a);n=o;const c={loaded:o,total:s,progress:s?o/s:void 0,bytes:a,rate:u||void 0,estimated:u&&s&&o<=s?(s-o)/u:void 0,event:r};c[t?"download":"upload"]=!0,e(c)}}var y="undefined"!=typeof XMLHttpRequest&&function(e){return new Promise((function(t,n){let o=e.data;const g=m.default.from(e.headers).normalize(),y=e.responseType;let b;function w(){e.cancelToken&&e.cancelToken.unsubscribe(b),e.signal&&e.signal.removeEventListener("abort",b)}i.default.isFormData(o)&&(p.default.isStandardBrowserEnv||p.default.isStandardBrowserWebWorkerEnv)&&g.setContentType(!1);let x=new XMLHttpRequest;if(e.auth){const t=e.auth.username||"",n=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";g.set("Authorization","Basic "+btoa(t+":"+n))}const _=(0,u.default)(e.baseURL,e.url);function E(){if(!x)return;const i=m.default.from("getAllResponseHeaders"in x&&x.getAllResponseHeaders()),o={data:y&&"text"!==y&&"json"!==y?x.response:x.responseText,status:x.status,statusText:x.statusText,headers:i,config:e,request:x};(0,r.default)((function(e){t(e),w()}),(function(e){n(e),w()}),o),x=null}if(x.open(e.method.toUpperCase(),(0,a.default)(_,e.params,e.paramsSerializer),!0),x.timeout=e.timeout,"onloadend"in x?x.onloadend=E:x.onreadystatechange=function(){x&&4===x.readyState&&(0!==x.status||x.responseURL&&0===x.responseURL.indexOf("file:"))&&setTimeout(E)},x.onabort=function(){x&&(n(new(0,d.default)("Request aborted",d.default.ECONNABORTED,e,x)),x=null)},x.onerror=function(){n(new(0,d.default)("Network Error",d.default.ERR_NETWORK,e,x)),x=null},x.ontimeout=function(){let t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const i=e.transitional||l.default;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(new(0,d.default)(t,i.clarifyTimeoutError?d.default.ETIMEDOUT:d.default.ECONNABORTED,e,x)),x=null},p.default.isStandardBrowserEnv){const t=(e.withCredentials||(0,c.default)(_))&&e.xsrfCookieName&&s.default.read(e.xsrfCookieName);t&&g.set(e.xsrfHeaderName,t)}void 0===o&&g.setContentType(null),"setRequestHeader"in x&&i.default.forEach(g.toJSON(),(function(e,t){x.setRequestHeader(t,e)})),i.default.isUndefined(e.withCredentials)||(x.withCredentials=!!e.withCredentials),y&&"json"!==y&&(x.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&x.addEventListener("progress",v(e.onDownloadProgress,!0)),"function"==typeof e.onUploadProgress&&x.upload&&x.upload.addEventListener("progress",v(e.onUploadProgress)),(e.cancelToken||e.signal)&&(b=t=>{x&&(n(!t||t.type?new(0,h.default)(null,e,x):t),x.abort(),x=null)},e.cancelToken&&e.cancelToken.subscribe(b),e.signal&&(e.signal.aborted?b():e.signal.addEventListener("abort",b)));const I=(0,f.default)(_);I&&-1===p.default.protocols.indexOf(I)?n(new(0,d.default)("Unsupported protocol "+I+":",d.default.ERR_BAD_REQUEST,e)):x.send(o||null)}))}})),o.register("1TQad",(function(t,n){e(t.exports,"default",(function(){return r}));var i=o("121rJ");function r(e,t,n){const r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(new(0,i.default)("Request failed with status code "+n.status,[i.default.ERR_BAD_REQUEST,i.default.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}})),o.register("kTwUV",(function(t,n){e(t.exports,"default",(function(){return r}));var i=o("2bBga"),r=o("hdo0R").default.isStandardBrowserEnv?{write:function(e,t,n,r,o,s){const a=[];a.push(e+"="+encodeURIComponent(t)),i.default.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),i.default.isString(r)&&a.push("path="+r),i.default.isString(o)&&a.push("domain="+o),!0===s&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}})),o.register("1ZTQa",(function(t,n){e(t.exports,"default",(function(){return s}));var i=o("iUwU6"),r=o("91vFE");function s(e,t){return e&&!(0,i.default)(t)?(0,r.default)(e,t):t}})),o.register("iUwU6",(function(t,n){function i(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}e(t.exports,"default",(function(){return i}))})),o.register("91vFE",(function(t,n){function i(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}e(t.exports,"default",(function(){return i}))})),o.register("g3yOT",(function(t,n){e(t.exports,"default",(function(){return r}));var i=o("2bBga"),r=o("hdo0R").default.isStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");let n;function r(n){let i=n;return e&&(t.setAttribute("href",i),i=t.href),t.setAttribute("href",i),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:"/"===t.pathname.charAt(0)?t.pathname:"/"+t.pathname}}return n=r(window.location.href),function(e){const t=i.default.isString(e)?r(e):e;return t.protocol===n.protocol&&t.host===n.host}}():function(){return!0}})),o.register("8wMQb",(function(t,n){function i(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}e(t.exports,"default",(function(){return i}))})),o.register("5OiBb",(function(t,n){e(t.exports,"default",(function(){return i}));var i=function(e,t){e=e||10;const n=new Array(e),i=new Array(e);let r,o=0,s=0;return t=void 0!==t?t:1e3,function(a){const u=Date.now(),c=i[s];r||(r=u),n[o]=a,i[o]=u;let l=s,d=0;for(;l!==o;)d+=n[l++],l%=e;if(o=(o+1)%e,o===s&&(s=(s+1)%e),u-r<t)return;const h=c&&u-c;return h?Math.round(1e3*d/h):void 0}}})),o.register("d0EKm",(function(t,n){e(t.exports,"default",(function(){return a}));var i=o("2bBga"),r=o("gbTL1");const s=e=>e instanceof r.default?e.toJSON():e;function a(e,t){t=t||{};const n={};function r(e,t,n){return i.default.isPlainObject(e)&&i.default.isPlainObject(t)?i.default.merge.call({caseless:n},e,t):i.default.isPlainObject(t)?i.default.merge({},t):i.default.isArray(t)?t.slice():t}function o(e,t,n){return i.default.isUndefined(t)?i.default.isUndefined(e)?void 0:r(void 0,e,n):r(e,t,n)}function a(e,t){if(!i.default.isUndefined(t))return r(void 0,t)}function u(e,t){return i.default.isUndefined(t)?i.default.isUndefined(e)?void 0:r(void 0,e):r(void 0,t)}function c(n,i,o){return o in t?r(n,i):o in e?r(void 0,n):void 0}const l={url:a,method:a,data:a,baseURL:u,transformRequest:u,transformResponse:u,paramsSerializer:u,timeout:u,timeoutMessage:u,withCredentials:u,adapter:u,responseType:u,xsrfCookieName:u,xsrfHeaderName:u,onUploadProgress:u,onDownloadProgress:u,decompress:u,maxContentLength:u,maxBodyLength:u,beforeRedirect:u,transport:u,httpAgent:u,httpsAgent:u,cancelToken:u,socketPath:u,responseEncoding:u,validateStatus:c,headers:(e,t)=>o(s(e),s(t),!0)};return i.default.forEach(Object.keys(e).concat(Object.keys(t)),(function(r){const s=l[r]||o,a=s(e[r],t[r],r);i.default.isUndefined(a)&&s!==c||(n[r]=a)})),n}})),o.register("6zj0X",(function(t,n){e(t.exports,"default",(function(){return u}));var i=o("50GW0"),r=o("121rJ");const s={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{s[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));const a={};s.transitional=function(e,t,n){function o(e,t){return"[Axios v"+i.VERSION+"] Transitional option '"+e+"'"+t+(n?". "+n:"")}return(n,i,s)=>{if(!1===e)throw new(0,r.default)(o(i," has been removed"+(t?" in "+t:"")),r.default.ERR_DEPRECATED);return t&&!a[i]&&(a[i]=!0,console.warn(o(i," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,i,s)}};var u={assertOptions:function(e,t,n){if("object"!=typeof e)throw new(0,r.default)("options must be an object",r.default.ERR_BAD_OPTION_VALUE);const i=Object.keys(e);let o=i.length;for(;o-- >0;){const s=i[o],a=t[s];if(a){const t=e[s],n=void 0===t||a(t,s,e);if(!0!==n)throw new(0,r.default)("option "+s+" must be "+n,r.default.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new(0,r.default)("Unknown option "+s,r.default.ERR_BAD_OPTION)}},validators:s}})),o.register("50GW0",(function(t,n){e(t.exports,"VERSION",(function(){return i}));const i="1.2.2"})),o.register("2sjhC",(function(t,n){e(t.exports,"default",(function(){return s}));var i=o("83xK9");class r{throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}static source(){let e;return{token:new r((function(t){e=t})),cancel:e}}constructor(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const n=this;this.promise.then((e=>{if(!n._listeners)return;let t=n._listeners.length;for(;t-- >0;)n._listeners[t](e);n._listeners=null})),this.promise.then=e=>{let t;const i=new Promise((e=>{n.subscribe(e),t=e})).then(e);return i.cancel=function(){n.unsubscribe(t)},i},e((function(e,r,o){n.reason||(n.reason=new(0,i.default)(e,r,o),t(n.reason))}))}}var s=r})),o.register("av9gA",(function(t,n){function i(e){return function(t){return e.apply(null,t)}}e(t.exports,"default",(function(){return i}))})),o.register("gNhGc",(function(t,n){e(t.exports,"default",(function(){return r}));var i=o("2bBga");function r(e){return i.default.isObject(e)&&!0===e.isAxiosError}})),o.register("jd7iQ",(function(t,n){e(t.exports,"default",(function(){return r}));const i={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(i).forEach((([e,t])=>{i[t]=e}));var r=i})),o.register("cm5V2",(function(t,n){function i(e,t){return e.map((e=>`<li class="films__item" data-id="${e.id}">\n  <a href="" class="films__wrapper">\n    <div class="films__img-wrapper">\n\n    ${e.poster_path?`<picture class="films__img">\n    <source media="(max-width: 480px)" srcset="https://image.tmdb.org/t/p/w342${e.poster_path}">\n    <source media="(max-width: 768px)" srcset="https://image.tmdb.org/t/p/w500${e.poster_path}">\n    <source media="(max-width: 1280px)" srcset="https://image.tmdb.org/t/p/w780${e.poster_path}">\n    <img class="films__img" src="https://image.tmdb.org/t/p/original${e.poster_path}" alt="${e.title}"  width='395px' height='574px' loading="lazy">\n  </picture>`:`<img     class="films__img"   src="${o("7kyXO")}" alt="${e.title}"  width='395px' height='574px' loading="lazy"  width='395px' height='574px' />`}\n       \n    </div>\n\n    <div class="img__row">\n            <p>${e.vote_average}</p>\n      <p>${""!==e.release_date?Number.parseInt(e.release_date):" "}</p>\n    </div>\n\n    <div class="films__info">\n            <p class="films__name ${"dark"===t?"films__name--color":""}">${e.title}</p>\n\n      <p class="films__description">${function(e){JSON.parse(localStorage.getItem("genres")).map((t=>{e.includes(t.id)&&e.push(t.name)})),e.splice(0,e.length/2),e.length>3&&e.splice(2,e.length,"Other");return e.join(", ")}(e.genre_ids)}</p>\n    </div>\n  </a>\n</li>`)).join("")}function r(e){return e?`${e}`:`src=${o("7kyXO")}`}function s(e,t,n=!1,i=!1,o,s=!1,a=localStorage.getItem("user-theme")){return`<div class="modal-window ${"dark"===a?"background-black":""}" id="${t}">\n    <div class="modal-img-flex">\n    <picture class="modal-img">\n          <source media="(max-width: 480px)" srcset="https://image.tmdb.org/t/p/w342${r(e.poster_path)}">\n          <source media="(max-width: 768px)" srcset="https://image.tmdb.org/t/p/w500${r(e.poster_path)}">\n          <source media="(max-width: 1280px)" srcset="https://image.tmdb.org/t/p/w780${r(e.poster_path)}">\n          <img src="https://image.tmdb.org/t/p/original${r(e.poster_path)}" alt="${e.title}">\n        </picture>\n    </div>\n    <div class="modal-flex ">\n      <h2 class="modal-h2 ${"dark"===a?"text-white":""}">${e.title}</h2>\n      <ul class="lists-flex ${"dark"===a?"modal-text":""}">\n        \n            <li class="parametr-flex">\n              <p>Vote / Votes</p>\n            </li>\n            <li class="description-flex vote-style">\n              <p class="description-font modal-votes orng-back">\n                ${e.vote_average}\n              </p>\n              <p>/</p>\n              <p>\n                ${e.vote_count}\n              </p>\n            </li>\n            <li class="parametr-flex">\n              <p>Popularity</p>\n            </li>\n            <li class="description-flex">\n              <p class="description-font">${e.popularity}</p>\n            </li>\n            <li class="parametr-flex">\n              <p>Original Title</p>\n            </li>\n            <li class="description-flex">\n              <p class="description-font">${e.original_title}</p>\n            </li>\n            <li class="parametr-flex">\n              <p>Genre</p>\n            </li>\n            <li class="description-flex">\n              <p class="description-font">${u=e.genres,u.map((e=>e.name)).join(", ")}</p>\n            </li>\n      </ul>\n\n      <h5 class="description-font ${"dark"===a?"text-white":""}">ABOUT</h5>\n      <div class="overview-container">\n        <p class="about-font ${"dark"===a?"text-white":""}">\n          ${e.overview}\n        </p>\n      </div>\n      <div class="buttons-flex ${"dark"===a?"buttons-flex-white":""}" data-id="${t}"> ${o?`\n        <button class="button-modal button-modal-watch">${n?"DELETE FROM WATCHED":"ADD TO WATCHED"}</button>\n        <button class="button-modal button-modal-queue">\n        ${i?"DELETE FROM QUEUE":"ADD TO QUEUE"}\n        </button>\n        `:'<button class="button-modal button-modal-signIn">PLEASE LOGIN\n      </button>'}\n        ${s?`<iframe src="https://www.youtube.com/embed/${s}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`:""}\n        \n      </div>\n    </div> \n    <button class="modal-cross"> \n    <svg  width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">\n      <path d="M8 8L22 22" stroke="black" stroke-width="2"/>\n      <path d="M8 22L22 8" stroke="black" stroke-width="2"/>\n    </svg>\n    </button>   \n  </div>`;var u}e(t.exports,"renderMovies",(function(){return i})),e(t.exports,"renderFullInfo",(function(){return s}))})),o.register("7kyXO",(function(e,t){e.exports=new URL(o("kyEFX").resolve("f86Pi"),import.meta.url).toString()})),o.register("bGr86",(function(t,n){e(t.exports,"search",(function(){return r})),e(t.exports,"filmsMainContainer",(function(){return o})),e(t.exports,"backdrop",(function(){return s})),e(t.exports,"modal",(function(){return a})),e(t.exports,"openModalBtn",(function(){return u})),e(t.exports,"closeModalBtn",(function(){return c})),e(t.exports,"modalStudents",(function(){return l})),e(t.exports,"sortForm",(function(){return d}));const i={search:document.querySelector("#searchForm"),filmsMainContainer:document.querySelector(".films__list"),backdrop:document.querySelector(".backdrop"),modal:document.querySelector(".modal"),openModalBtn:document.querySelector(".footer__btn"),closeModalBtn:document.querySelector("[data-modal-close]"),modalStudents:document.querySelector(".modal__students"),sortForm:document.querySelector("#sortForm")},{search:r,filmsMainContainer:o,backdrop:s,modal:a,openModalBtn:u,closeModalBtn:c,modalStudents:l,sortForm:d}=i})),o.register("dSs1Y",(function(e,t){var i,r;i=void 0!==n?n:"undefined"!=typeof window?window:e.exports,r=function(e){if(void 0===e&&void 0===e.document)return!1;var t,n="Standard",i="Hourglass",r="Circle",o="Arrows",s="Dots",a="Pulse",u="Custom",c="Notiflix",l={ID:"NotiflixLoadingWrap",className:"notiflix-loading",zindex:4e3,backgroundColor:"rgba(0,0,0,0.8)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:400,clickToClose:!1,customSvgUrl:null,customSvgCode:null,svgSize:"80px",svgColor:"#32c682",messageID:"NotiflixLoadingMessage",messageFontSize:"15px",messageMaxLength:34,messageColor:"#dcdcdc"},d=function(e){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+e+"\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation")},h=function(t){return t||(t="head"),null!==e.document[t]||(d('\nNotiflix needs to be appended to the "<'+t+'>" element, but you called it before the "<'+t+'>" element has been created.'),!1)},f=function(){var e={},t=!1,n=0;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(t=arguments[0],n++);for(var i=function(n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t&&"[object Object]"===Object.prototype.toString.call(n[i])?e[i]=f(e[i],n[i]):e[i]=n[i])};n<arguments.length;n++)i(arguments[n]);return e},p=function(t){var n=e.document.createElement("div");return n.innerHTML=t,n.textContent||n.innerText||""},m=function(){return'[id^=NotiflixLoadingWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:fixed;z-index:4000;width:100%;height:100%;left:0;top:0;right:0;bottom:0;margin:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;background:rgba(0,0,0,.8);font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif}[id^=NotiflixLoadingWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixLoadingWrap].nx-loading-click-to-close{cursor:pointer}[id^=NotiflixLoadingWrap]>div[class*="-icon"]{width:60px;height:60px;position:relative;-webkit-transition:top .2s ease-in-out;-o-transition:top .2s ease-in-out;transition:top .2s ease-in-out;margin:0 auto}[id^=NotiflixLoadingWrap]>div[class*="-icon"] img,[id^=NotiflixLoadingWrap]>div[class*="-icon"] svg{max-width:unset;max-height:unset;width:100%;height:auto;position:absolute;left:0;top:0}[id^=NotiflixLoadingWrap]>p{position:relative;margin:10px auto 0;font-family:inherit!important;font-weight:normal;font-size:15px;line-height:1.4;padding:0 10px;width:100%;text-align:center}[id^=NotiflixLoadingWrap].nx-with-animation{-webkit-animation:loading-animation-fade .3s ease-in-out 0s normal;animation:loading-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixLoadingWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:loading-animation-fade-remove .3s ease-in-out 0s normal;animation:loading-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixLoadingWrap]>p.nx-loading-message-new{-webkit-animation:loading-new-message-fade .3s ease-in-out 0s normal;animation:loading-new-message-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}'},g=function(c,m,g,y,b){if(!h("body"))return!1;t||v.Loading.init({});var w=f(!0,t,{});if("object"==typeof m&&!Array.isArray(m)||"object"==typeof g&&!Array.isArray(g)){var x={};"object"==typeof m?x=m:"object"==typeof g&&(x=g),t=f(!0,t,x)}var _,E,I="";if("string"==typeof m&&m.length>0&&(I=m),y){var S="";(I=I.length>t.messageMaxLength?p(I).toString().substring(0,t.messageMaxLength)+"...":p(I).toString()).length>0&&(S='<p id="'+t.messageID+'" class="nx-loading-message" style="color:'+t.messageColor+";font-size:"+t.messageFontSize+';">'+I+"</p>"),t.cssAnimation||(t.cssAnimationDuration=0);var A="";if(c===n)_=t.svgSize,E=t.svgColor,_||(_="60px"),E||(E="#32c682"),A='<svg xmlns="http://www.w3.org/2000/svg" stroke="'+E+'" width="'+_+'" height="'+_+'" transform="scale(.8)" viewBox="0 0 38 38"><g fill="none" fill-rule="evenodd" stroke-width="2" transform="translate(1 1)"><circle cx="18" cy="18" r="18" stroke-opacity=".25"/><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" dur="1s" from="0 18 18" repeatCount="indefinite" to="360 18 18" type="rotate"/></path></g></svg>';else if(c===i)A=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingHourglass" fill="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 200 200"><style>@-webkit-keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@-webkit-keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@-webkit-keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}@keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}#NXLoadingHourglass *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g data-animator-group="true" data-animator-type="1" style="-webkit-animation-name:NXhourglass1-animation;animation-name:NXhourglass1-animation;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;transform-box:fill-box"><g id="NXhourglass2" fill="inherit"><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass3-animation;animation-name:NXhourglass3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass4" d="M100 100l-34.38 32.08v31.14h68.76v-31.14z"/></g><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass5-animation;animation-name:NXhourglass5-animation;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass6" d="M100 100L65.62 67.92V36.78h68.76v31.14z"/></g><path d="M51.14 38.89h8.33v14.93c0 15.1 8.29 28.99 23.34 39.1 1.88 1.25 3.04 3.97 3.04 7.08s-1.16 5.83-3.04 7.09c-15.05 10.1-23.34 23.99-23.34 39.09v14.93h-8.33a4.859 4.859 0 1 0 0 9.72h97.72a4.859 4.859 0 1 0 0-9.72h-8.33v-14.93c0-15.1-8.29-28.99-23.34-39.09-1.88-1.26-3.04-3.98-3.04-7.09s1.16-5.83 3.04-7.08c15.05-10.11 23.34-24 23.34-39.1V38.89h8.33a4.859 4.859 0 1 0 0-9.72H51.14a4.859 4.859 0 1 0 0 9.72zm79.67 14.93c0 15.87-11.93 26.25-19.04 31.03-4.6 3.08-7.34 8.75-7.34 15.15 0 6.41 2.74 12.07 7.34 15.15 7.11 4.78 19.04 15.16 19.04 31.03v14.93H69.19v-14.93c0-15.87 11.93-26.25 19.04-31.02 4.6-3.09 7.34-8.75 7.34-15.16 0-6.4-2.74-12.07-7.34-15.15-7.11-4.78-19.04-15.16-19.04-31.03V38.89h61.62v14.93z"/></g></g></svg>'}(t.svgSize,t.svgColor);else if(c===r)A=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" width="'+e+'" height="'+e+'" viewBox="25 25 50 50" style="-webkit-animation:rotate 2s linear infinite;animation:rotate 2s linear infinite;height:'+e+";-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;width:"+e+';position:absolute;top:0;left:0;margin:auto"><style>@-webkit-keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}@keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}</style><circle cx="50" cy="50" r="20" fill="none" stroke="'+t+'" stroke-width="2" style="-webkit-animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite;animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite" stroke-dasharray="150 200" stroke-dashoffset="-10" stroke-linecap="round"/></svg>'}(t.svgSize,t.svgColor);else if(c===o)A=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" fill="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 128 128"><g><path fill="inherit" d="M109.25 55.5h-36l12-12a29.54 29.54 0 0 0-49.53 12H18.75A46.04 46.04 0 0 1 96.9 31.84l12.35-12.34v36zm-90.5 17h36l-12 12a29.54 29.54 0 0 0 49.53-12h16.97A46.04 46.04 0 0 1 31.1 96.16L18.74 108.5v-36z"/><animateTransform attributeName="transform" dur="1.5s" from="0 64 64" repeatCount="indefinite" to="360 64 64" type="rotate"/></g></svg>'}(t.svgSize,t.svgColor);else if(c===s)A=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" fill="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 100 100"><g transform="translate(25 50)"><circle r="9" fill="inherit" transform="scale(.239)"><animateTransform attributeName="transform" begin="-0.266s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(50 50)"><circle r="9" fill="inherit" transform="scale(.00152)"><animateTransform attributeName="transform" begin="-0.133s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(75 50)"><circle r="9" fill="inherit" transform="scale(.299)"><animateTransform attributeName="transform" begin="0s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g></svg>'}(t.svgSize,t.svgColor);else if(c===a)A=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" stroke="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 44 44"><g fill="none" fill-rule="evenodd" stroke-width="2"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle></g></svg>'}(t.svgSize,t.svgColor);else if(c===u&&null!==t.customSvgCode&&null===t.customSvgUrl)A=t.customSvgCode||"";else if(c===u&&null!==t.customSvgUrl&&null===t.customSvgCode)A='<img class="nx-custom-loading-icon" width="'+t.svgSize+'" height="'+t.svgSize+'" src="'+t.customSvgUrl+'" alt="Notiflix">';else{if(c===u&&(null===t.customSvgUrl||null===t.customSvgCode))return d('You have to set a static SVG url to "customSvgUrl" option to use Loading Custom.'),!1;A=function(e,t,n){return e||(e="60px"),t||(t="#f8f8f8"),n||(n="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingNotiflixLib" width="'+e+'" height="'+e+'" viewBox="0 0 200 200"><defs><style>@keyframes notiflix-n{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-x{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-dot{0%,to{stroke-width:0}50%{stroke-width:12}}.nx-icon-line{stroke:'+t+';stroke-width:12;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:22;fill:none}</style></defs><path d="M47.97 135.05a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13z" style="animation-name:notiflix-dot;animation-timing-function:ease-in-out;animation-duration:1.25s;animation-iteration-count:infinite;animation-direction:normal" fill="'+n+'" stroke="'+n+'" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="22" stroke-width="12"/><path class="nx-icon-line" d="M10.14 144.76V87.55c0-5.68-4.54-41.36 37.83-41.36 42.36 0 37.82 35.68 37.82 41.36v57.21" style="animation-name:notiflix-n;animation-timing-function:linear;animation-duration:2.5s;animation-delay:0s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/><path class="nx-icon-line" d="M115.06 144.49c24.98-32.68 49.96-65.35 74.94-98.03M114.89 46.6c25.09 32.58 50.19 65.17 75.29 97.75" style="animation-name:notiflix-x;animation-timing-function:linear;animation-duration:2.5s;animation-delay:.2s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/></svg>'}(t.svgSize,"#f8f8f8","#32c682")}var k=parseInt((t.svgSize||"").replace(/[^0-9]/g,"")),T=e.innerWidth,C=k>=T?T-40+"px":k+"px",N='<div style="width:'+C+"; height:"+C+';" class="'+t.className+"-icon"+(I.length>0?" nx-with-message":"")+'">'+A+"</div>",R=e.document.createElement("div");R.id=l.ID,R.className=t.className+(t.cssAnimation?" nx-with-animation":"")+(t.clickToClose?" nx-loading-click-to-close":""),R.style.zIndex=t.zindex,R.style.background=t.backgroundColor,R.style.animationDuration=t.cssAnimationDuration+"ms",R.style.fontFamily='"'+t.fontFamily+'", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',R.style.display="flex",R.style.flexWrap="wrap",R.style.flexDirection="column",R.style.alignItems="center",R.style.justifyContent="center",t.rtl&&(R.setAttribute("dir","rtl"),R.classList.add("nx-rtl-on")),R.innerHTML=N+S,e.document.getElementById(R.id)||(e.document.body.appendChild(R),t.clickToClose&&e.document.getElementById(R.id).addEventListener("click",(function(){R.classList.add("nx-remove");var e=setTimeout((function(){null!==R.parentNode&&(R.parentNode.removeChild(R),clearTimeout(e))}),t.cssAnimationDuration)})))}else if(e.document.getElementById(l.ID))var L=e.document.getElementById(l.ID),M=setTimeout((function(){L.classList.add("nx-remove");var e=setTimeout((function(){null!==L.parentNode&&(L.parentNode.removeChild(L),clearTimeout(e))}),t.cssAnimationDuration);clearTimeout(M)}),b);t=f(!0,t,w)},v={Loading:{init:function(n){t=f(!0,l,n),function(t,n){if(!h("head"))return!1;if(null!==t()&&!e.document.getElementById(n)){var i=e.document.createElement("style");i.id=n,i.innerHTML=t(),e.document.head.appendChild(i)}}(m,"NotiflixLoadingInternalCSS")},merge:function(e){if(!t)return d("You have to initialize the Loading module before call Merge function."),!1;t=f(!0,t,e)},standard:function(e,t){g(n,e,t,!0,0)},hourglass:function(e,t){g(i,e,t,!0,0)},circle:function(e,t){g(r,e,t,!0,0)},arrows:function(e,t){g(o,e,t,!0,0)},dots:function(e,t){g(s,e,t,!0,0)},pulse:function(e,t){g(a,e,t,!0,0)},custom:function(e,t){g(u,e,t,!0,0)},notiflix:function(e,t){g(c,e,t,!0,0)},remove:function(e){"number"!=typeof e&&(e=0),g(null,null,null,!1,e)},change:function(n){!function(n){"string"!=typeof n&&(n="");var i=e.document.getElementById(l.ID);if(i)if(n.length>0){n=n.length>t.messageMaxLength?p(n).substring(0,t.messageMaxLength)+"...":p(n);var r=i.getElementsByTagName("p")[0];if(r)r.innerHTML=n;else{var o=e.document.createElement("p");o.id=t.messageID,o.className="nx-loading-message nx-loading-message-new",o.style.color=t.messageColor,o.style.fontSize=t.messageFontSize,o.innerHTML=n,i.appendChild(o)}}else d("Where is the new message?")}(n)}}};return"object"==typeof e.Notiflix?f(!0,e.Notiflix,{Loading:v.Loading}):{Loading:v.Loading}},"function"==typeof define&&define.amd?define([],(function(){return r(i)})):"object"==typeof e.exports?e.exports=r(i):i.Notiflix=r(i)})),o.register("iQIUW",(function(e,t){var i,r;i=void 0!==n?n:"undefined"!=typeof window?window:e.exports,r=function(e){if(void 0===e&&void 0===e.document)return!1;var t,n="Success",i="Failure",r="Warning",o="Info",s={wrapID:"NotiflixNotifyWrap",overlayID:"NotiflixNotifyOverlay",width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:3e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",success:{background:"#32c682",textColor:"#fff",childClassName:"notiflix-notify-success",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{background:"#ff5549",textColor:"#fff",childClassName:"notiflix-notify-failure",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{background:"#eebf31",textColor:"#fff",childClassName:"notiflix-notify-warning",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-exclamation-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(238,191,49,0.2)"},info:{background:"#26c0d3",textColor:"#fff",childClassName:"notiflix-notify-info",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-info-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(38,192,211,0.2)"}},a=function(e){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+e+"\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation")},u=function(t){return t||(t="head"),null!==e.document[t]||(a('\nNotiflix needs to be appended to the "<'+t+'>" element, but you called it before the "<'+t+'>" element has been created.'),!1)},c=function(){var e={},t=!1,n=0;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(t=arguments[0],n++);for(var i=function(n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t&&"[object Object]"===Object.prototype.toString.call(n[i])?e[i]=c(e[i],n[i]):e[i]=n[i])};n<arguments.length;n++)i(arguments[n]);return e},l=function(){return'[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}'},d=0,h=function(a,l,h,p){if(!u("body"))return!1;t||f.Notify.init({});var m=c(!0,t,{});if("object"==typeof h&&!Array.isArray(h)||"object"==typeof p&&!Array.isArray(p)){var g={};"object"==typeof h?g=h:"object"==typeof p&&(g=p),t=c(!0,t,g)}var v,y,b=t[a.toLocaleLowerCase("en")];d++,"string"!=typeof l&&(l="Notiflix "+a),t.plainText&&(v=l,(y=e.document.createElement("div")).innerHTML=v,l=y.textContent||y.innerText||""),!t.plainText&&l.length>t.messageMaxLength&&(t=c(!0,t,{closeButton:!0,messageMaxLength:150}),l='Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'),l.length>t.messageMaxLength&&(l=l.substring(0,t.messageMaxLength)+"..."),"shadow"===t.fontAwesomeIconStyle&&(b.fontAwesomeIconColor=b.background),t.cssAnimation||(t.cssAnimationDuration=0);var w=e.document.getElementById(s.wrapID)||e.document.createElement("div");if(w.id=s.wrapID,w.style.width=t.width,w.style.zIndex=t.zindex,w.style.opacity=t.opacity,"center-center"===t.position?(w.style.left=t.distance,w.style.top=t.distance,w.style.right=t.distance,w.style.bottom=t.distance,w.style.margin="auto",w.classList.add("nx-flex-center-center"),w.style.maxHeight="calc((100vh - "+t.distance+") - "+t.distance+")",w.style.display="flex",w.style.flexWrap="wrap",w.style.flexDirection="column",w.style.justifyContent="center",w.style.alignItems="center",w.style.pointerEvents="none"):"center-top"===t.position?(w.style.left=t.distance,w.style.right=t.distance,w.style.top=t.distance,w.style.bottom="auto",w.style.margin="auto"):"center-bottom"===t.position?(w.style.left=t.distance,w.style.right=t.distance,w.style.bottom=t.distance,w.style.top="auto",w.style.margin="auto"):"right-bottom"===t.position?(w.style.right=t.distance,w.style.bottom=t.distance,w.style.top="auto",w.style.left="auto"):"left-top"===t.position?(w.style.left=t.distance,w.style.top=t.distance,w.style.right="auto",w.style.bottom="auto"):"left-bottom"===t.position?(w.style.left=t.distance,w.style.bottom=t.distance,w.style.top="auto",w.style.right="auto"):(w.style.right=t.distance,w.style.top=t.distance,w.style.left="auto",w.style.bottom="auto"),t.backOverlay){var x=e.document.getElementById(s.overlayID)||e.document.createElement("div");x.id=s.overlayID,x.style.width="100%",x.style.height="100%",x.style.position="fixed",x.style.zIndex=t.zindex-1,x.style.left=0,x.style.top=0,x.style.right=0,x.style.bottom=0,x.style.background=b.backOverlayColor||t.backOverlayColor,x.className=t.cssAnimation?"nx-with-animation":"",x.style.animationDuration=t.cssAnimation?t.cssAnimationDuration+"ms":"",e.document.getElementById(s.overlayID)||e.document.body.appendChild(x)}e.document.getElementById(s.wrapID)||e.document.body.appendChild(w);var _=e.document.createElement("div");_.id=t.ID+"-"+d,_.className=t.className+" "+b.childClassName+" "+(t.cssAnimation?"nx-with-animation":"")+" "+(t.useIcon?"nx-with-icon":"")+" nx-"+t.cssAnimationStyle+" "+(t.closeButton&&"function"!=typeof h?"nx-with-close-button":"")+" "+("function"==typeof h?"nx-with-callback":"")+" "+(t.clickToClose?"nx-notify-click-to-close":""),_.style.fontSize=t.fontSize,_.style.color=b.textColor,_.style.background=b.background,_.style.borderRadius=t.borderRadius,_.style.pointerEvents="all",t.rtl&&(_.setAttribute("dir","rtl"),_.classList.add("nx-rtl-on")),_.style.fontFamily='"'+t.fontFamily+'", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',t.cssAnimation&&(_.style.animationDuration=t.cssAnimationDuration+"ms");var E="";if(t.closeButton&&"function"!=typeof h&&(E='<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="'+b.notiflixIconColor+'" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),t.useIcon)if(t.useFontAwesome)_.innerHTML='<i style="color:'+b.fontAwesomeIconColor+"; font-size:"+t.fontAwesomeIconSize+';" class="nx-message-icon nx-message-icon-fa '+b.fontAwesomeClassName+" "+("shadow"===t.fontAwesomeIconStyle?"nx-message-icon-fa-shadow":"nx-message-icon-fa-basic")+'"></i><span class="nx-message nx-with-icon">'+l+"</span>"+(t.closeButton?E:"");else{var I="";a===n?I='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+b.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>':a===i?I='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+b.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>':a===r?I='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+b.notiflixIconColor+'" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>':a===o&&(I='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+b.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),_.innerHTML=I+'<span class="nx-message nx-with-icon">'+l+"</span>"+(t.closeButton?E:"")}else _.innerHTML='<span class="nx-message">'+l+"</span>"+(t.closeButton?E:"");if("left-bottom"===t.position||"right-bottom"===t.position){var S=e.document.getElementById(s.wrapID);S.insertBefore(_,S.firstChild)}else e.document.getElementById(s.wrapID).appendChild(_);var A=e.document.getElementById(_.id);if(A){var k,T,C=function(){A.classList.add("nx-remove");var t=e.document.getElementById(s.overlayID);t&&w.childElementCount<=0&&t.classList.add("nx-remove"),clearTimeout(k)},N=function(){if(A&&null!==A.parentNode&&A.parentNode.removeChild(A),w.childElementCount<=0&&null!==w.parentNode){w.parentNode.removeChild(w);var t=e.document.getElementById(s.overlayID);t&&null!==t.parentNode&&t.parentNode.removeChild(t)}clearTimeout(T)};if(t.closeButton&&"function"!=typeof h&&e.document.getElementById(_.id).querySelector("span.nx-close-button").addEventListener("click",(function(){C();var e=setTimeout((function(){N(),clearTimeout(e)}),t.cssAnimationDuration)})),("function"==typeof h||t.clickToClose)&&A.addEventListener("click",(function(){"function"==typeof h&&h(),C();var e=setTimeout((function(){N(),clearTimeout(e)}),t.cssAnimationDuration)})),!t.closeButton&&"function"!=typeof h){var R=function(){k=setTimeout((function(){C()}),t.timeout),T=setTimeout((function(){N()}),t.timeout+t.cssAnimationDuration)};R(),t.pauseOnHover&&(A.addEventListener("mouseenter",(function(){A.classList.add("nx-paused"),clearTimeout(k),clearTimeout(T)})),A.addEventListener("mouseleave",(function(){A.classList.remove("nx-paused"),R()})))}}if(t.showOnlyTheLastOne&&d>0)for(var L=e.document.querySelectorAll("[id^="+t.ID+"-]:not([id="+t.ID+"-"+d+"])"),M=0;M<L.length;M++){var O=L[M];null!==O.parentNode&&O.parentNode.removeChild(O)}t=c(!0,t,m)},f={Notify:{init:function(n){t=c(!0,s,n),function(t,n){if(!u("head"))return!1;if(null!==t()&&!e.document.getElementById(n)){var i=e.document.createElement("style");i.id=n,i.innerHTML=t(),e.document.head.appendChild(i)}}(l,"NotiflixNotifyInternalCSS")},merge:function(e){if(!t)return a("You have to initialize the Notify module before call Merge function."),!1;t=c(!0,t,e)},success:function(e,t,i){h(n,e,t,i)},failure:function(e,t,n){h(i,e,t,n)},warning:function(e,t,n){h(r,e,t,n)},info:function(e,t,n){h(o,e,t,n)}}};return"object"==typeof e.Notiflix?c(!0,e.Notiflix,{Notify:f.Notify}):{Notify:f.Notify}},"function"==typeof define&&define.amd?define([],(function(){return r(i)})):"object"==typeof e.exports?e.exports=r(i):i.Notiflix=r(i)})),o.register("fb9GJ",(function(e,t){
/*!
 * TOAST UI Pagination
 * @version 3.4.1
 * @author NHN FE Development Team <dl_javascript@nhn.com>
 * @license MIT
 */
var n;window,n=function(){return function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="dist",n(n.s=10)}([function(e,t,n){e.exports=function(e,t){var n,i,r,o,s=Object.prototype.hasOwnProperty;for(r=1,o=arguments.length;r<o;r+=1)for(i in n=arguments[r])s.call(n,i)&&(e[i]=n[i]);return e}},function(e,t,n){e.exports=function(e){return void 0===e}},function(e,t,n){e.exports=function(e){return e instanceof Array}},function(e,t,n){var i=n(2),r=n(17),o=n(6);e.exports=function(e,t,n){i(e)?r(e,t,n):o(e,t,n)}},function(e,t,n){e.exports=function(e){return"string"==typeof e||e instanceof String}},function(e,t,n){e.exports=function(e){return e instanceof Function}},function(e,t,n){e.exports=function(e,t,n){var i;for(i in n=n||null,e)if(e.hasOwnProperty(i)&&!1===t.call(n,e[i],i,e))break}},function(e,t,n){var i=n(18),r=n(0);e.exports=function(e,t){var n;return t||(t=e,e=null),n=t.init||function(){},e&&i(n,e),t.hasOwnProperty("static")&&(r(n,t.static),delete t.static),r(n.prototype,t),n}},function(e,t,n){var i=n(2);e.exports=function(e,t,n){var r,o;if(n=n||0,!i(t))return-1;if(Array.prototype.indexOf)return Array.prototype.indexOf.call(t,e,n);for(o=t.length,r=n;n>=0&&r<o;r+=1)if(t[r]===e)return r;return-1}},function(e,t,n){var i=n(29),r=n(30),o=n(5),s={capitalizeFirstLetter:function(e){return e.substring(0,1).toUpperCase()+e.substring(1,e.length)},isContained:function(e,t){return!!t&&(e===t||t.contains(e))},createElementByTemplate:function(e,t){var n=document.createElement("div"),r=o(e)?e(t):i(e,t);return n.innerHTML=r,n.firstChild},bind:function(e,t){var n,i=Array.prototype.slice;return e.bind?e.bind.apply(e,i.call(arguments,1)):(n=i.call(arguments,2),function(){return e.apply(t,n.length?n.concat(i.call(arguments)):arguments)})},sendHostName:function(){r("pagination","UA-129987462-1")}};e.exports=s},function(e,t,n){n(11),e.exports=n(12)},function(e,t,n){},function(e,t,n){var i=n(13),r=n(7),o=n(0),s=n(1),a=n(20),u=n(9),c={totalItems:10,itemsPerPage:10,visiblePages:10,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",usageStatistics:!0},l=r({init:function(e,t){this._options=o({},c,t),this._currentPage=0,this._view=new a(e,this._options,u.bind(this._onClickHandler,this)),this._paginate(),this._options.usageStatistics&&u.sendHostName()},_setCurrentPage:function(e){this._currentPage=e||this._options.page},_getLastPage:function(){var e=Math.ceil(this._options.totalItems/this._options.itemsPerPage);return e||1},_getPageIndex:function(e){var t;return this._options.centerAlign?(t=e-Math.floor(this._options.visiblePages/2),t=Math.max(t,1),t=Math.min(t,this._getLastPage()-this._options.visiblePages+1)):Math.ceil(e/this._options.visiblePages)},_getRelativePage:function(e){var t="prev"===e,n=this.getCurrentPage();return t?n-1:n+1},_getMorePageIndex:function(e){var t=this._getPageIndex(this.getCurrentPage()),n=this._options.visiblePages,i="prev"===e;return this._options.centerAlign?i?t-1:t+n:i?(t-1)*n:t*n+1},_convertToValidPage:function(e){var t=this._getLastPage();return e=Math.max(e,1),e=Math.min(e,t)},_paginate:function(e){var t=this._makeViewData(e||this._options.page);this._setCurrentPage(e),this._view.update(t)},_makeViewData:function(e){var t={},n=this._getLastPage(),i=this._getPageIndex(e),r=this._getPageIndex(n),o=this._getEdge(e);return t.leftPageNumber=o.left,t.rightPageNumber=o.right,t.prevMore=i>1,t.nextMore=i<r,t.page=e,t.currentPageIndex=e,t.lastPage=n,t.lastPageListIndex=n,t},_getEdge:function(e){var t,n,i,r=this._getLastPage(),o=this._options.visiblePages,s=this._getPageIndex(e);return this._options.centerAlign?(i=Math.floor(o/2),(n=(t=Math.max(e-i,1))+o-1)>r&&(t=Math.max(r-o+1,1),n=r)):(t=(s-1)*o+1,n=s*o,n=Math.min(n,r)),{left:t,right:n}},_onClickHandler:function(e,t){switch(e){case"first":t=1;break;case"prev":t=this._getRelativePage("prev");break;case"next":t=this._getRelativePage("next");break;case"prevMore":t=this._getMorePageIndex("prev");break;case"nextMore":t=this._getMorePageIndex("next");break;case"last":t=this._getLastPage();break;default:if(!t)return}this.movePageTo(t)},reset:function(e){s(e)&&(e=this._options.totalItems),this._options.totalItems=e,this._paginate(1)},movePageTo:function(e){e=this._convertToValidPage(e),this.invoke("beforeMove",{page:e})&&(this._paginate(e),this.fire("afterMove",{page:e}))},setTotalItems:function(e){this._options.totalItems=e},setItemsPerPage:function(e){this._options.itemsPerPage=e},getCurrentPage:function(){return this._currentPage||this._options.page}});i.mixin(l),e.exports=l},function(e,t,n){var i=n(0),r=n(14),o=n(4),s=n(16),a=n(2),u=n(5),c=n(3),l=/\s+/g;function d(){this.events=null,this.contexts=null}d.mixin=function(e){i(e.prototype,d.prototype)},d.prototype._getHandlerItem=function(e,t){var n={handler:e};return t&&(n.context=t),n},d.prototype._safeEvent=function(e){var t,n=this.events;return n||(n=this.events={}),e&&((t=n[e])||(t=[],n[e]=t),n=t),n},d.prototype._safeContext=function(){var e=this.contexts;return e||(e=this.contexts=[]),e},d.prototype._indexOfContext=function(e){for(var t=this._safeContext(),n=0;t[n];){if(e===t[n][0])return n;n+=1}return-1},d.prototype._memorizeContext=function(e){var t,n;r(e)&&(t=this._safeContext(),(n=this._indexOfContext(e))>-1?t[n][1]+=1:t.push([e,1]))},d.prototype._forgetContext=function(e){var t,n;r(e)&&(t=this._safeContext(),(n=this._indexOfContext(e))>-1&&(t[n][1]-=1,t[n][1]<=0&&t.splice(n,1)))},d.prototype._bindEvent=function(e,t,n){var i=this._safeEvent(e);this._memorizeContext(n),i.push(this._getHandlerItem(t,n))},d.prototype.on=function(e,t,n){var i=this;o(e)?(e=e.split(l),c(e,(function(e){i._bindEvent(e,t,n)}))):s(e)&&(n=t,c(e,(function(e,t){i.on(t,e,n)})))},d.prototype.once=function(e,t,n){var i=this;if(s(e))return n=t,void c(e,(function(e,t){i.once(t,e,n)}));this.on(e,(function r(){t.apply(n,arguments),i.off(e,r,n)}),n)},d.prototype._spliceMatches=function(e,t){var n,i=0;if(a(e))for(n=e.length;i<n;i+=1)!0===t(e[i])&&(e.splice(i,1),n-=1,i-=1)},d.prototype._matchHandler=function(e){var t=this;return function(n){var i=e===n.handler;return i&&t._forgetContext(n.context),i}},d.prototype._matchContext=function(e){var t=this;return function(n){var i=e===n.context;return i&&t._forgetContext(n.context),i}},d.prototype._matchHandlerAndContext=function(e,t){var n=this;return function(i){var r=e===i.handler,o=t===i.context,s=r&&o;return s&&n._forgetContext(i.context),s}},d.prototype._offByEventName=function(e,t){var n=this,i=u(t),r=n._matchHandler(t);e=e.split(l),c(e,(function(e){var t=n._safeEvent(e);i?n._spliceMatches(t,r):(c(t,(function(e){n._forgetContext(e.context)})),n.events[e]=[])}))},d.prototype._offByHandler=function(e){var t=this,n=this._matchHandler(e);c(this._safeEvent(),(function(e){t._spliceMatches(e,n)}))},d.prototype._offByObject=function(e,t){var n,i=this;this._indexOfContext(e)<0?c(e,(function(e,t){i.off(t,e)})):o(t)?(n=this._matchContext(e),i._spliceMatches(this._safeEvent(t),n)):u(t)?(n=this._matchHandlerAndContext(t,e),c(this._safeEvent(),(function(e){i._spliceMatches(e,n)}))):(n=this._matchContext(e),c(this._safeEvent(),(function(e){i._spliceMatches(e,n)})))},d.prototype.off=function(e,t){o(e)?this._offByEventName(e,t):arguments.length?u(e)?this._offByHandler(e):s(e)&&this._offByObject(e,t):(this.events={},this.contexts=[])},d.prototype.fire=function(e){this.invoke.apply(this,arguments)},d.prototype.invoke=function(e){var t,n,i,r;if(!this.hasListener(e))return!0;for(t=this._safeEvent(e),n=Array.prototype.slice.call(arguments,1),i=0;t[i];){if(!1===(r=t[i]).handler.apply(r.context,n))return!1;i+=1}return!0},d.prototype.hasListener=function(e){return this.getListenerLength(e)>0},d.prototype.getListenerLength=function(e){return this._safeEvent(e).length},e.exports=d},function(e,t,n){var i=n(1),r=n(15);e.exports=function(e){return!i(e)&&!r(e)}},function(e,t,n){e.exports=function(e){return null===e}},function(e,t,n){e.exports=function(e){return e===Object(e)}},function(e,t,n){e.exports=function(e,t,n){var i=0,r=e.length;for(n=n||null;i<r&&!1!==t.call(n,e[i],i,e);i+=1);}},function(e,t,n){var i=n(19);e.exports=function(e,t){var n=i(t.prototype);n.constructor=e,e.prototype=n}},function(e,t,n){e.exports=function(e){function t(){}return t.prototype=e,new t}},function(e,t,n){var i=n(3),r=n(7),o=n(21),s=n(22),a=n(24),u=n(25),c=n(0),l=n(4),d=n(28),h=n(9),f={page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'},p=["first","prev","next","last"],m=["prev","next"],g=r({init:function(e,t,n){this._containerElement=null,this._firstItemClassName=t.firstItemClassName,this._lastItemClassName=t.lastItemClassName,this._template=c({},f,t.template),this._buttons={},this._enabledPageElements=[],this._setRootElement(e),this._setMoveButtons(),this._setDisabledMoveButtons(),this._setMoreButtons(),this._attachClickEvent(n)},_setRootElement:function(e){if(l(e)?e=document.getElementById(e)||document.querySelector(e):e.jquery&&(e=e[0]),!d(e))throw new Error("The container element is invalid.");this._containerElement=e},_setMoveButtons:function(){i(p,(function(e){this._buttons[e]=h.createElementByTemplate(this._template.moveButton,{type:e})}),this)},_setDisabledMoveButtons:function(){i(p,(function(e){var t="disabled"+h.capitalizeFirstLetter(e);this._buttons[t]=h.createElementByTemplate(this._template.disabledMoveButton,{type:e})}),this)},_setMoreButtons:function(){i(m,(function(e){var t=e+"More";this._buttons[t]=h.createElementByTemplate(this._template.moreButton,{type:e})}),this)},_getContainerElement:function(){return this._containerElement},_appendFirstButton:function(e){var t;t=e.page>1?this._buttons.first:this._buttons.disabledFirst,this._getContainerElement().appendChild(t)},_appendPrevButton:function(e){var t;t=e.currentPageIndex>1?this._buttons.prev:this._buttons.disabledPrev,this._getContainerElement().appendChild(t)},_appendNextButton:function(e){var t;t=e.currentPageIndex<e.lastPageListIndex?this._buttons.next:this._buttons.disabledNext,this._getContainerElement().appendChild(t)},_appendLastButton:function(e){var t;t=e.page<e.lastPage?this._buttons.last:this._buttons.disabledLast,this._getContainerElement().appendChild(t)},_appendPrevMoreButton:function(e){var t;e.prevMore&&(t=this._buttons.prevMore,u(t,this._firstItemClassName),this._getContainerElement().appendChild(t))},_appendNextMoreButton:function(e){var t;e.nextMore&&(t=this._buttons.nextMore,u(t,this._lastItemClassName),this._getContainerElement().appendChild(t))},_appendPages:function(e){var t,n,i=e.leftPageNumber,r=e.rightPageNumber;for(n=i;n<=r;n+=1)n===e.page?t=h.createElementByTemplate(this._template.currentPage,{page:n}):(t=h.createElementByTemplate(this._template.page,{page:n}),this._enabledPageElements.push(t)),n!==i||e.prevMore||u(t,this._firstItemClassName),n!==r||e.nextMore||u(t,this._lastItemClassName),this._getContainerElement().appendChild(t)},_attachClickEvent:function(e){var t=this._getContainerElement();s(t,"click",(function(t){var n,i,r=o(t);a(t),(i=this._getButtonType(r))||(n=this._getPageNumber(r)),e(i,n)}),this)},_getButtonType:function(e){var t,n=this._buttons;return i(n,(function(n,i){return!h.isContained(e,n)||(t=i,!1)}),this),t},_getPageNumber:function(e){var t,n=this._findPageElement(e);return n&&(t=parseInt(n.innerText,10)),t},_findPageElement:function(e){for(var t,n=0,i=this._enabledPageElements.length;n<i;n+=1)if(t=this._enabledPageElements[n],h.isContained(e,t))return t;return null},_empty:function(){this._enabledPageElements=[],i(this._buttons,(function(e,t){this._buttons[t]=e.cloneNode(!0)}),this),this._getContainerElement().innerHTML=""},update:function(e){this._empty(),this._appendFirstButton(e),this._appendPrevButton(e),this._appendPrevMoreButton(e),this._appendPages(e),this._appendNextMoreButton(e),this._appendNextButton(e),this._appendLastButton(e)}});e.exports=g},function(e,t,n){e.exports=function(e){return e.target||e.srcElement}},function(e,t,n){var i=n(4),r=n(3),o=n(23);function s(e,t,n,i){function s(t){n.call(i||e,t||window.event)}"addEventListener"in e?e.addEventListener(t,s):"attachEvent"in e&&e.attachEvent("on"+t,s),function(e,t,n,i){var s=o(e,t),a=!1;r(s,(function(e){return e.handler!==n||(a=!0,!1)})),a||s.push({handler:n,wrappedHandler:i})}(e,t,n,s)}e.exports=function(e,t,n,o){i(t)?r(t.split(/\s+/g),(function(t){s(e,t,n,o)})):r(t,(function(t,i){s(e,i,t,n)}))}},function(e,t,n){var i="_feEventKey";e.exports=function(e,t){var n,r=e[i];return r||(r=e[i]={}),(n=r[t])||(n=r[t]=[]),n}},function(e,t,n){e.exports=function(e){e.preventDefault?e.preventDefault():e.returnValue=!1}},function(e,t,n){var i=n(3),r=n(8),o=n(26),s=n(27);e.exports=function(e){var t,n=Array.prototype.slice.call(arguments,1),a=e.classList,u=[];a?i(n,(function(t){e.classList.add(t)})):((t=o(e))&&(n=[].concat(t.split(/\s+/),n)),i(n,(function(e){r(e,u)<0&&u.push(e)})),s(e,u))}},function(e,t,n){var i=n(1);e.exports=function(e){return e&&e.className?i(e.className.baseVal)?e.className:e.className.baseVal:""}},function(e,t,n){var i=n(2),r=n(1);e.exports=function(e,t){t=(t=i(t)?t.join(" "):t).replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),r(e.className.baseVal)?e.className=t:e.className.baseVal=t}},function(e,t,n){e.exports=function(e){return"object"==typeof HTMLElement?e&&(e instanceof HTMLElement||!!e.nodeType):!(!e||!e.nodeType)}},function(e,t,n){var i=n(8),r=n(3),o=n(2),s=n(4),a=n(0),u=/{{\s?|\s?}}/g,c=/^[a-zA-Z0-9_@]+\[[a-zA-Z0-9_@"']+\]$/,l=/\[\s?|\s?\]/,d=/^[a-zA-Z_]+\.[a-zA-Z_]+$/,h=/\./,f=/^["']\w+["']$/,p=/"|'/g,m=/^-?\d+\.?\d*$/,g={if:function(e,t,n){var i=function(e,t){var n=[e],i=[],o=0,s=0;return r(t,(function(e,r){0===e.indexOf("if")?o+=1:"/if"===e?o-=1:o||0!==e.indexOf("elseif")&&"else"!==e||(n.push("else"===e?["true"]:e.split(" ").slice(1)),i.push(t.slice(s,r)),s=r+1)})),i.push(t.slice(s)),{exps:n,sourcesInsideIf:i}}(e,t),o=!1,s="";return r(i.exps,(function(e,t){return(o=w(e,n))&&(s=x(i.sourcesInsideIf[t],n)),!o})),s},each:function(e,t,n){var i=w(e,n),s=o(i)?"@index":"@key",u={},c="";return r(i,(function(e,i){u[s]=i,u["@this"]=e,a(n,u),c+=x(t.slice(),n)})),c},with:function(e,t,n){var r=i("as",e),o=e[r+1],s=w(e.slice(0,r),n),u={};return u[o]=s,x(t,a(n,u))||""}},v=3==="a".split(/a/).length?function(e,t){return e.split(t)}:function(e,t){var n,i,r=[],o=0;for(t.global||(t=new RegExp(t,"g")),n=t.exec(e);null!==n;)i=n.index,r.push(e.slice(o,i)),o=i+n[0].length,n=t.exec(e);return r.push(e.slice(o)),r};function y(e,t){var n,i=t[e];return"true"===e?i=!0:"false"===e?i=!1:f.test(e)?i=e.replace(p,""):c.test(e)?i=y((n=e.split(l))[0],t)[y(n[1],t)]:d.test(e)?i=y((n=e.split(h))[0],t)[n[1]]:m.test(e)&&(i=parseFloat(e)),i}function b(e,t,n){for(var i,r,o,a,u=g[e],c=1,l=2,d=t[l];c&&s(d);)0===d.indexOf(e)?c+=1:0===d.indexOf("/"+e)&&(c-=1,i=l),d=t[l+=2];if(c)throw Error(e+" needs {{/"+e+"}} expression.");return t[0]=u(t[0].split(" ").slice(1),(r=0,o=i,(a=t.splice(r+1,o-r)).pop(),a),n),t}function w(e,t){var n=y(e[0],t);return n instanceof Function?function(e,t,n){var i=[];return r(t,(function(e){i.push(y(e,n))})),e.apply(null,i)}(n,e.slice(1),t):n}function x(e,t){for(var n,i,r,o=1,a=e[o];s(a);)i=(n=a.split(" "))[0],g[i]?(r=b(i,e.splice(o,e.length-o),t),e=e.concat(r)):e[o]=w(n,t),a=e[o+=2];return e.join("")}e.exports=function(e,t){return x(v(e,u),t)}},function(e,t,n){var i=n(1),r=n(31);e.exports=function(e,t){var n=location.hostname,o="TOAST UI "+e+" for "+n+": Statistics",s=window.localStorage.getItem(o);(i(window.tui)||!1!==window.tui.usageStatistics)&&(s&&!function(e){return(new Date).getTime()-e>6048e5}(s)||(window.localStorage.setItem(o,(new Date).getTime()),setTimeout((function(){"interactive"!==document.readyState&&"complete"!==document.readyState||r("https://www.google-analytics.com/collect",{v:1,t:"event",tid:t,cid:n,dp:n,dh:e,el:e,ec:"use"})}),1e3)))}},function(e,t,n){var i=n(6);e.exports=function(e,t){var n=document.createElement("img"),r="";return i(t,(function(e,t){r+="&"+t+"="+e})),r=r.substring(1),n.src=e+"?"+r,n.style.display="none",document.body.appendChild(n),document.body.removeChild(n),n}}])},e.exports=n()})),o.register("lTgDY",(function(t,n){e(t.exports,"initializeFirebase",(function(){return h})),e(t.exports,"openMenuSignIn",(function(){return f}));var i=o("7KeNu");o("iQIUW");var r=o("i37YJ");const s="no-scroll-body",a="visually-hidden";let u,c,l,d;function h(e={}){const{funcSignIn:t,funcSignOut:n}={funcSignIn:null,funcSignOut:null,...e};return l=t,d=n,u=new(0,i.default)(w),u.closeMenuSignIn=y,c={signInButtonElement:document.getElementById("signInButton"),signOutButtonElement:document.getElementById("signOutButton"),signInMenu:document.getElementById("menu_sign_in_new"),signInBackdrop:document.getElementById("backdrop_menu_sign_in"),btnCloseMenuSignIn:document.querySelector(".close_menu_sign_in"),linkToLibrary:document.querySelector(".site-nav__to_library")},c.signInButtonElement.addEventListener("click",f),c.signInMenu.addEventListener("click",m),c.linkToLibrary.addEventListener("click",v),c.linkToLibrary.addEventListener("mousedown",b),c.signOutButtonElement.addEventListener("click",u.signOutUser.bind(u)),u}function f(){document.addEventListener("keydown",p),c.signInBackdrop.addEventListener("click",g),c.btnCloseMenuSignIn.addEventListener("mousedown",y),document.body.classList.add(s),u.ui.start("#firebaseui-auth-container",u.getUiConfig()),c.signInMenu.classList.remove(a),c.signInBackdrop.classList.remove(a)}function p(e){"Escape"===e.key&&y(e)}function m(e){e.preventDefault()}function g(e){e.currentTarget===e.target&&y(e)}async function v(e){u.isUserSignedIn()||e.preventDefault();const t=await u.readWatched(),n=await u.readQueue();localStorage.setItem("filmotekaToLibrary",JSON.stringify({dataWatched:t,dataQueue:n}))}function y(e){document.removeEventListener("keydown",p),c.signInBackdrop.removeEventListener("click",g),c.btnCloseMenuSignIn.removeEventListener("click",y),document.body.classList.remove(s),c.signInMenu.classList.add(a),c.signInBackdrop.classList.add(a)}function v(e){u.isUserSignedIn()||(r.Report.warning("Please sign in to your account","","Okay"),e.preventDefault())}function b(){!async function(){const e=await u.readWatched(),t=await u.readQueue();localStorage.setItem("filmotekaToLibrary",JSON.stringify({dataWatched:e,dataQueue:t}))}()}function w(e){e?(c.signOutButtonElement.classList.remove(a),c.signInButtonElement.classList.add(a),x(l,e)):(c.signOutButtonElement.classList.add(a),c.signInButtonElement.classList.remove(a),x(d,e))}function x(e,t){"function"==typeof e&&e.call(t)}})),o.register("7KeNu",(function(n,i){e(n.exports,"default",(function(){return f}));var r=o("iJYdK"),s=o("7iEdO");o("km4J4");var a=o("5FegL");o("gKkQl");var u=o("ix4Jr");o("eyjy7");var c=o("2YDLC");o("ftYLF");var l=o("3PjDZ"),d=o("iQIUW"),h=o("23RrO");class f{async signInGoogle(){const e=new(0,c.Q);await(0,c.c)((0,c.n)(),e)}async signInFacebook(){const e=new(0,c.N);await(0,c.c)((0,c.n)(),e)}signOutUser(){(0,c.y)((0,c.n)())}initFirebaseAuth(){this.authStateObserver||(this.authStateObserver=this.authStateObserver_),(0,c.v)((0,c.n)(),this.authStateObserver.bind(this))}authStateObserver_(){}getProfilePicUrl(){return(0,c.n)().currentUser.photoURL||"/images/profile_placeholder.png"}getUserName(){return(0,c.n)().currentUser.displayName}isUserSignedIn(){return!!(0,c.n)().currentUser}addSizeToGoogleProfilePic(e){return-1!==e.indexOf("googleusercontent.com")&&-1===e.indexOf("?")?e+"?sz=150":e}getUiConfig(){return{callbacks:{signInSuccessWithAuthResult:function(e,t){return!0},uiShown:function(){document.getElementById("loader").style.display="none"}},signInFlow:"popup",signInSuccessUrl:"./index.html",signInOptions:[c.Q.PROVIDER_ID,c.M.PROVIDER_ID]}}async addToWatched(e,t){return d.Notify.success(`${t} was successfully added to watched list!`),await this.addToStorage(e,this.NAME_KEY_STORAGE_WATCHED)}async addToQueue(e,t){return d.Notify.success(`${t} was successfully added to queue list!`),await this.addToStorage(e,this.NAME_KEY_STORAGE_QUEUE)}async deleteFromWatched(e,t){return d.Notify.info(`${t} was successfully removed from watched list!`),await this.deleteFromStorage(e,this.NAME_KEY_STORAGE_WATCHED)}async deleteFromQueue(e,t){return d.Notify.info(`${t} was successfully removed from queue list!`),await this.deleteFromStorage(e,this.NAME_KEY_STORAGE_QUEUE)}readWatched(){return this.readStorage(this.NAME_KEY_STORAGE_WATCHED)}readQueue(){return this.readStorage(this.NAME_KEY_STORAGE_QUEUE)}isSavedFromWatched(e){return this.isSavedFromStarage(e,this.NAME_KEY_STORAGE_WATCHED)}isSavedFromQueue(e){return this.isSavedFromStarage(e,this.NAME_KEY_STORAGE_QUEUE)}async addToStorage(e,t){const n=await this.readData(t);if(n.includes(e))return!0;n.push(e);try{await this.saveObjectSet(n,t)}catch{return!1}return!0}async deleteFromStorage(e,t){const n=await this.readData(t),i=n.indexOf(e);if(-1===i)return!0;n.splice(i,1);try{await this.saveObjectSet(n,t)}catch{return!1}return!0}async readStorage(e){if(this.isUserSignedIn()){return await this.readData(e)}return[]}async isSavedFromStarage(e,t){return(await this.readData(t)).includes(e)}async saveObjectSet(e,t){if(!this.isUserSignedIn())throw"No autenteficate";const n=(0,c.n)().currentUser.uid,i=(0,l.getFirestore)(),r=(0,l.doc)(i,this.NAME_COLLECTION_FILESTORAGE,t+n),o={name:this.getUserName(),timestamp:(0,l.serverTimestamp)(),arrFilms:e};try{await(0,l.setDoc)(r,o)}catch(e){throw e}}async readData(e){if(!this.isUserSignedIn())return[];const t=(0,c.n)().currentUser.uid,n=(0,l.getFirestore)(),i=(0,l.doc)(n,this.NAME_COLLECTION_FILESTORAGE,e+t),r=await(0,l.getDoc)(i);return r.exists()?r.data().arrFilms:[]}constructor(e){t(r)(this,"NAME_KEY_STORAGE_WATCHED","Filmoteka_Watched_"),t(r)(this,"NAME_KEY_STORAGE_QUEUE","Filmoteka_Queue"),t(r)(this,"NAME_COLLECTION_FILESTORAGE","Storage_Filmoteka"),this.authStateObserver=e;(0,u.initializeApp)((0,s.getFirebaseConfig)());(0,a.getPerformance)(),this.initFirebaseAuth(),e&&(this.ui=new h.auth.AuthUI((0,c.n)()))}}})),o.register("iJYdK",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}})),o.register("7iEdO",(function(t,n){e(t.exports,"getFirebaseConfig",(function(){return r}));const i={apiKey:"AIzaSyDLECkBiM_zJdUtuEN2mdKPTBBYEj_ZLaA",authDomain:"filmoteka-a4d37.firebaseapp.com",projectId:"filmoteka-a4d37",storageBucket:"filmoteka-a4d37.appspot.com",messagingSenderId:"925416976763",appId:"1:925416976763:web:829d5454b8848bbcec8dde"};function r(){if(i&&i.apiKey)return i;throw new Error("No Firebase configuration object provided.\nAdd your web app's configuration object to firebase-config.js")}})),o.register("km4J4",(function(t,n){e(t.exports,"getPerformance",(function(){return o("5FegL").getPerformance})),o("5FegL")})),o.register("5FegL",(function(t,n){e(t.exports,"getPerformance",(function(){return de}));var i=o("ffjl9"),r=o("7vF8m"),s=o("ix4Jr"),a=o("4a6xH");o("keeEs");const u="@firebase/performance",c="0.6.0",l=c,d="FB-PERF-TRACE-MEASURE",h="_wt_",f="_fcp",p="_fid",m="@firebase/performance/config",g="@firebase/performance/configexpire",v="Performance",y={"trace started":"Trace {$traceName} was started before.","trace stopped":"Trace {$traceName} is not running.","nonpositive trace startTime":"Trace {$traceName} startTime should be positive.","nonpositive trace duration":"Trace {$traceName} duration should be positive.","no window":"Window is not available.","no app id":"App id is not available.","no project id":"Project id is not available.","no api key":"Api key is not available.","invalid cc log":"Attempted to queue invalid cc event","FB not default":"Performance can only start when Firebase app instance is the default one.","RC response not ok":"RC response is not ok","invalid attribute name":"Attribute name {$attributeName} is invalid.","invalid attribute value":"Attribute value {$attributeValue} is invalid.","invalid custom metric name":"Custom metric name {$customMetricName} is invalid","invalid String merger input":"Input for String merger is invalid, contact support team to resolve.","already initialized":"initializePerformance() has already been called with different options. To avoid this error, call initializePerformance() with the same options as when it was originally called, or call getPerformance() to return the already initialized instance."},b=new(0,i.ErrorFactory)("performance",v,y),w=new(0,r.Logger)(v);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let x,_,E,I;w.logLevel=r.LogLevel.INFO;class S{getUrl(){return this.windowLocation.href.split("?")[0]}mark(e){this.performance&&this.performance.mark&&this.performance.mark(e)}measure(e,t,n){this.performance&&this.performance.measure&&this.performance.measure(e,t,n)}getEntriesByType(e){return this.performance&&this.performance.getEntriesByType?this.performance.getEntriesByType(e):[]}getEntriesByName(e){return this.performance&&this.performance.getEntriesByName?this.performance.getEntriesByName(e):[]}getTimeOrigin(){return this.performance&&(this.performance.timeOrigin||this.performance.timing.navigationStart)}requiredApisAvailable(){return fetch&&Promise&&(0,i.areCookiesEnabled)()?!!(0,i.isIndexedDBAvailable)()||(w.info("IndexedDB is not supported by current browswer"),!1):(w.info("Firebase Performance cannot start if browser does not support fetch and Promise or cookie is disabled."),!1)}setupObserver(e,t){if(!this.PerformanceObserver)return;new this.PerformanceObserver((e=>{for(const n of e.getEntries())t(n)})).observe({entryTypes:[e]})}static getInstance(){return void 0===x&&(x=new S(_)),x}constructor(e){if(this.window=e,!e)throw b.create("no window");this.performance=e.performance,this.PerformanceObserver=e.PerformanceObserver,this.windowLocation=e.location,this.navigator=e.navigator,this.document=e.document,this.navigator&&this.navigator.cookieEnabled&&(this.localStorage=e.localStorage),e.perfMetrics&&e.perfMetrics.onFirstInputDelay&&(this.onFirstInputDelay=e.perfMetrics.onFirstInputDelay)}}function A(){return E}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function k(e,t){const n=e.length-t.length;if(n<0||n>1)throw b.create("invalid String merger input");const i=[];for(let n=0;n<e.length;n++)i.push(e.charAt(n)),t.length>n&&i.push(t.charAt(n));return i.join("")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{getFlTransportFullUrl(){return this.flTransportEndpointUrl.concat("?key=",this.transportKey)}static getInstance(){return void 0===I&&(I=new T),I}constructor(){this.instrumentationEnabled=!0,this.dataCollectionEnabled=!0,this.loggingEnabled=!1,this.tracesSamplingRate=1,this.networkRequestsSamplingRate=1,this.logEndPointUrl="https://firebaselogging.googleapis.com/v0cc/log?format=json_proto",this.flTransportEndpointUrl=k("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o"),this.transportKey=k("AzSC8r6ReiGqFMyfvgow","Iayx0u-XT3vksVM-pIV"),this.logSource=462,this.logTraceAfterSampling=!1,this.logNetworkAfterSampling=!1,this.configTimeToLive=12}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var C,N;(N=C||(C={}))[N.UNKNOWN=0]="UNKNOWN",N[N.VISIBLE=1]="VISIBLE",N[N.HIDDEN=2]="HIDDEN";const R=["firebase_","google_","ga_"],L=new RegExp("^[a-zA-Z]\\w*$");function M(){const e=S.getInstance().navigator;return(null==e?void 0:e.serviceWorker)?e.serviceWorker.controller?2:3:1}function O(){switch(S.getInstance().document.visibilityState){case"visible":return C.VISIBLE;case"hidden":return C.HIDDEN;default:return C.UNKNOWN}}function D(){const e=S.getInstance().navigator.connection;switch(e&&e.effectiveType){case"slow-2g":return 1;case"2g":return 2;case"3g":return 3;case"4g":return 4;default:return 0}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function P(e){var t;const n=null===(t=e.options)||void 0===t?void 0:t.appId;if(!n)throw b.create("no app id");return n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const F="0.0.1",B={loggingEnabled:!0};function U(e,t){const n=function(){const e=S.getInstance().localStorage;if(!e)return;const t=e.getItem(g);if(!(t&&(n=t,Number(n)>Date.now())))return;var n;const i=e.getItem(m);if(!i)return;try{return JSON.parse(i)}catch(e){return}}();return n?($(n),Promise.resolve()):function(e,t){return function(e){const t=e.getToken();return t.then((e=>{})),t}(e.installations).then((n=>{const i=function(e){var t;const n=null===(t=e.options)||void 0===t?void 0:t.projectId;if(!n)throw b.create("no project id");return n}(e.app),r=function(e){var t;const n=null===(t=e.options)||void 0===t?void 0:t.apiKey;if(!n)throw b.create("no api key");return n}(e.app),o=new Request(`https://firebaseremoteconfig.googleapis.com/v1/projects/${i}/namespaces/fireperf:fetch?key=${r}`,{method:"POST",headers:{Authorization:`FIREBASE_INSTALLATIONS_AUTH ${n}`},body:JSON.stringify({app_instance_id:t,app_instance_id_token:n,app_id:P(e.app),app_version:l,sdk_version:F})});return fetch(o).then((e=>{if(e.ok)return e.json();throw b.create("RC response not ok")}))})).catch((()=>{w.info(j)}))}(e,t).then($).then((e=>function(e){const t=S.getInstance().localStorage;if(!e||!t)return;t.setItem(m,JSON.stringify(e)),t.setItem(g,String(Date.now()+36e5*T.getInstance().configTimeToLive))}(e)),(()=>{}))}const j="Could not fetch config, will use default configs";function $(e){if(!e)return e;const t=T.getInstance(),n=e.entries||{};return void 0!==n.fpr_enabled?t.loggingEnabled="true"===String(n.fpr_enabled):t.loggingEnabled=B.loggingEnabled,n.fpr_log_source?t.logSource=Number(n.fpr_log_source):B.logSource&&(t.logSource=B.logSource),n.fpr_log_endpoint_url?t.logEndPointUrl=n.fpr_log_endpoint_url:B.logEndPointUrl&&(t.logEndPointUrl=B.logEndPointUrl),n.fpr_log_transport_key?t.transportKey=n.fpr_log_transport_key:B.transportKey&&(t.transportKey=B.transportKey),void 0!==n.fpr_vc_network_request_sampling_rate?t.networkRequestsSamplingRate=Number(n.fpr_vc_network_request_sampling_rate):void 0!==B.networkRequestsSamplingRate&&(t.networkRequestsSamplingRate=B.networkRequestsSamplingRate),void 0!==n.fpr_vc_trace_sampling_rate?t.tracesSamplingRate=Number(n.fpr_vc_trace_sampling_rate):void 0!==B.tracesSamplingRate&&(t.tracesSamplingRate=B.tracesSamplingRate),t.logTraceAfterSampling=V(t.tracesSamplingRate),t.logNetworkAfterSampling=V(t.networkRequestsSamplingRate),e}function V(e){return Math.random()<=e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let H,W=1;function G(e){return W=2,H=H||function(e){return function(){const e=S.getInstance().document;return new Promise((t=>{if(e&&"complete"!==e.readyState){const n=()=>{"complete"===e.readyState&&(e.removeEventListener("readystatechange",n),t())};e.addEventListener("readystatechange",n)}else t()}))}().then((()=>function(e){const t=e.getId();return t.then((e=>{E=e})),t}(e.installations))).then((t=>U(e,t))).then((()=>z()),(()=>z()))}(e),H}function z(){W=3}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K=1e4;let q,Y=3,Z=[],X=!1;function J(e){setTimeout((()=>{if(0!==Y)return Z.length?void function(){const e=Z.splice(0,1e3),t=e.map((e=>({source_extension_json_proto3:e.message,event_time_ms:String(e.eventTime)})));(function(e,t){return function(e){const t=T.getInstance().getFlTransportFullUrl();return fetch(t,{method:"POST",body:JSON.stringify(e)})}(e).then((e=>(e.ok||w.info("Call to Firebase backend failed."),e.json()))).then((e=>{const n=Number(e.nextRequestWaitMillis);let i=K;isNaN(n)||(i=Math.max(n,i));const r=e.logResponseDetails;Array.isArray(r)&&r.length>0&&"RETRY_REQUEST_LATER"===r[0].responseAction&&(Z=[...t,...Z],w.info("Retry transport request later.")),Y=3,J(i)}))})({request_time_ms:String(Date.now()),client_info:{client_type:1,js_client_info:{}},log_source:T.getInstance().logSource,log_event:t},e).catch((()=>{Z=[...e,...Z],Y--,w.info(`Tries left: ${Y}.`),J(K)}))}():J(K)}),e)}function Q(e){return(...t)=>{!function(e){if(!e.eventTime||!e.message)throw b.create("invalid cc log");Z=[...Z,e]}({message:e(...t),eventTime:Date.now()})}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ee(e,t){q||(q=Q(ie)),q(e,t)}function te(e){const t=T.getInstance();!t.instrumentationEnabled&&e.isAuto||(t.dataCollectionEnabled||e.isAuto)&&S.getInstance().requiredApisAvailable()&&(e.isAuto&&O()!==C.VISIBLE||(3===W?ne(e):G(e.performanceController).then((()=>ne(e)),(()=>ne(e)))))}function ne(e){if(!A())return;const t=T.getInstance();t.loggingEnabled&&t.logTraceAfterSampling&&setTimeout((()=>ee(e,1)),0)}function ie(e,t){return 0===t?function(e){const t={url:e.url,http_method:e.httpMethod||0,http_response_code:200,response_payload_bytes:e.responsePayloadBytes,client_start_time_us:e.startTimeUs,time_to_response_initiated_us:e.timeToResponseInitiatedUs,time_to_response_completed_us:e.timeToResponseCompletedUs},n={application_info:re(e.performanceController.app),network_request_metric:t};return JSON.stringify(n)}(e):function(e){const t={name:e.name,is_auto:e.isAuto,client_start_time_us:e.startTimeUs,duration_us:e.durationUs};0!==Object.keys(e.counters).length&&(t.counters=e.counters);const n=e.getAttributes();0!==Object.keys(n).length&&(t.custom_attributes=n);const i={application_info:re(e.performanceController.app),trace_metric:t};return JSON.stringify(i)}(e)}function re(e){return{google_app_id:P(e),app_instance_id:A(),web_app_info:{sdk_version:l,page_url:S.getInstance().getUrl(),service_worker_status:M(),visibility_state:O(),effective_connection_type:D()},application_process_state:0}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oe=["_fp",f,p];
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class se{start(){if(1!==this.state)throw b.create("trace started",{traceName:this.name});this.api.mark(this.traceStartMark),this.state=2}stop(){if(2!==this.state)throw b.create("trace stopped",{traceName:this.name});this.state=3,this.api.mark(this.traceStopMark),this.api.measure(this.traceMeasure,this.traceStartMark,this.traceStopMark),this.calculateTraceMetrics(),te(this)}record(e,t,n){if(e<=0)throw b.create("nonpositive trace startTime",{traceName:this.name});if(t<=0)throw b.create("nonpositive trace duration",{traceName:this.name});if(this.durationUs=Math.floor(1e3*t),this.startTimeUs=Math.floor(1e3*e),n&&n.attributes&&(this.customAttributes=Object.assign({},n.attributes)),n&&n.metrics)for(const e of Object.keys(n.metrics))isNaN(Number(n.metrics[e]))||(this.counters[e]=Math.floor(Number(n.metrics[e])));te(this)}incrementMetric(e,t=1){void 0===this.counters[e]?this.putMetric(e,t):this.putMetric(e,this.counters[e]+t)}putMetric(e,t){if(n=e,i=this.name,0===n.length||n.length>100||!(i&&i.startsWith(h)&&oe.indexOf(n)>-1)&&n.startsWith("_"))throw b.create("invalid custom metric name",{customMetricName:e});var n,i;this.counters[e]=function(e){const t=Math.floor(e);return t<e&&w.info(`Metric value should be an Integer, setting the value as : ${t}.`),t}(null!=t?t:0)}getMetric(e){return this.counters[e]||0}putAttribute(e,t){const n=!(0===(i=e).length||i.length>40||R.some((e=>i.startsWith(e)))||!i.match(L));var i;const r=function(e){return 0!==e.length&&e.length<=100}(t);if(n&&r)this.customAttributes[e]=t;else{if(!n)throw b.create("invalid attribute name",{attributeName:e});if(!r)throw b.create("invalid attribute value",{attributeValue:t})}}getAttribute(e){return this.customAttributes[e]}removeAttribute(e){void 0!==this.customAttributes[e]&&delete this.customAttributes[e]}getAttributes(){return Object.assign({},this.customAttributes)}setStartTime(e){this.startTimeUs=e}setDuration(e){this.durationUs=e}calculateTraceMetrics(){const e=this.api.getEntriesByName(this.traceMeasure),t=e&&e[0];t&&(this.durationUs=Math.floor(1e3*t.duration),this.startTimeUs=Math.floor(1e3*(t.startTime+this.api.getTimeOrigin())))}static createOobTrace(e,t,n,i){const r=S.getInstance().getUrl();if(!r)return;const o=new se(e,h+r,!0),s=Math.floor(1e3*S.getInstance().getTimeOrigin());o.setStartTime(s),t&&t[0]&&(o.setDuration(Math.floor(1e3*t[0].duration)),o.putMetric("domInteractive",Math.floor(1e3*t[0].domInteractive)),o.putMetric("domContentLoadedEventEnd",Math.floor(1e3*t[0].domContentLoadedEventEnd)),o.putMetric("loadEventEnd",Math.floor(1e3*t[0].loadEventEnd)));if(n){const e=n.find((e=>"first-paint"===e.name));e&&e.startTime&&o.putMetric("_fp",Math.floor(1e3*e.startTime));const t=n.find((e=>"first-contentful-paint"===e.name));t&&t.startTime&&o.putMetric(f,Math.floor(1e3*t.startTime)),i&&o.putMetric(p,Math.floor(1e3*i))}te(o)}static createUserTimingTrace(e,t){te(new se(e,t,!1,t))}constructor(e,t,n=!1,i){this.performanceController=e,this.name=t,this.isAuto=n,this.state=1,this.customAttributes={},this.counters={},this.api=S.getInstance(),this.randomId=Math.floor(1e6*Math.random()),this.isAuto||(this.traceStartMark=`FB-PERF-TRACE-START-${this.randomId}-${this.name}`,this.traceStopMark=`FB-PERF-TRACE-STOP-${this.randomId}-${this.name}`,this.traceMeasure=i||`FB-PERF-TRACE-MEASURE-${this.randomId}-${this.name}`,i&&this.calculateTraceMetrics())}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ae(e,t){const n=t;if(!n||void 0===n.responseStart)return;const i=S.getInstance().getTimeOrigin(),r=Math.floor(1e3*(n.startTime+i)),o=n.responseStart?Math.floor(1e3*(n.responseStart-n.startTime)):void 0,s=Math.floor(1e3*(n.responseEnd-n.startTime));!function(e){const t=T.getInstance();if(!t.instrumentationEnabled)return;const n=e.url,i=t.logEndPointUrl.split("?")[0],r=t.flTransportEndpointUrl.split("?")[0];n!==i&&n!==r&&t.loggingEnabled&&t.logNetworkAfterSampling&&setTimeout((()=>ee(e,0)),0)}({performanceController:e,url:n.name&&n.name.split("?")[0],responsePayloadBytes:n.transferSize,startTimeUs:r,timeToResponseInitiatedUs:o,timeToResponseCompletedUs:s})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ue(e){A()&&(setTimeout((()=>function(e){const t=S.getInstance(),n=t.getEntriesByType("navigation"),i=t.getEntriesByType("paint");if(t.onFirstInputDelay){let r=setTimeout((()=>{se.createOobTrace(e,n,i),r=void 0}),5e3);t.onFirstInputDelay((t=>{r&&(clearTimeout(r),se.createOobTrace(e,n,i,t))}))}else se.createOobTrace(e,n,i)}(e)),0),setTimeout((()=>function(e){const t=S.getInstance(),n=t.getEntriesByType("resource");for(const t of n)ae(e,t);t.setupObserver("resource",(t=>ae(e,t)))}(e)),0),setTimeout((()=>function(e){const t=S.getInstance(),n=t.getEntriesByType("measure");for(const t of n)ce(e,t);t.setupObserver("measure",(t=>ce(e,t)))}(e)),0))}function ce(e,t){const n=t.name;n.substring(0,d.length)!==d&&se.createUserTimingTrace(e,n)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{_init(e){this.initialized||(void 0!==(null==e?void 0:e.dataCollectionEnabled)&&(this.dataCollectionEnabled=e.dataCollectionEnabled),void 0!==(null==e?void 0:e.instrumentationEnabled)&&(this.instrumentationEnabled=e.instrumentationEnabled),S.getInstance().requiredApisAvailable()?(0,i.validateIndexedDBOpenable)().then((e=>{e&&(X||(J(5500),X=!0),G(this).then((()=>ue(this)),(()=>ue(this))),this.initialized=!0)})).catch((e=>{w.info(`Environment doesn't support IndexedDB: ${e}`)})):w.info('Firebase Performance cannot start if the browser does not support "Fetch" and "Promise", or cookies are disabled.'))}set instrumentationEnabled(e){T.getInstance().instrumentationEnabled=e}get instrumentationEnabled(){return T.getInstance().instrumentationEnabled}set dataCollectionEnabled(e){T.getInstance().dataCollectionEnabled=e}get dataCollectionEnabled(){return T.getInstance().dataCollectionEnabled}constructor(e,t){this.app=e,this.installations=t,this.initialized=!1}}function de(e=(0,s.getApp)()){e=(0,i.getModularInstance)(e);return(0,s._getProvider)(e,"performance").getImmediate()}const he=(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();if("[DEFAULT]"!==n.name)throw b.create("FB not default");if("undefined"==typeof window)throw b.create("no window");!function(e){_=e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(window);const r=new le(n,i);return r._init(t),r};(0,s._registerComponent)(new(0,a.Component)("performance",he,"PUBLIC")),(0,s.registerVersion)(u,c),(0,s.registerVersion)(u,c,"esm2017")})),o.register("ffjl9",(function(t,i){e(t.exports,"base64urlEncodeWithoutPadding",(function(){return u})),e(t.exports,"base64Decode",(function(){return c})),e(t.exports,"deepExtend",(function(){return l})),e(t.exports,"getUA",(function(){return d})),e(t.exports,"isMobileCordova",(function(){return h})),e(t.exports,"isNode",(function(){return f})),e(t.exports,"isBrowser",(function(){return p})),e(t.exports,"isBrowserExtension",(function(){return m})),e(t.exports,"isReactNative",(function(){return g})),e(t.exports,"isIE",(function(){return v})),e(t.exports,"isSafari",(function(){return y})),e(t.exports,"isIndexedDBAvailable",(function(){return b})),e(t.exports,"validateIndexedDBOpenable",(function(){return w})),e(t.exports,"areCookiesEnabled",(function(){return x})),e(t.exports,"getDefaultEmulatorHost",(function(){return I})),e(t.exports,"getDefaultEmulatorHostnameAndPort",(function(){return S})),e(t.exports,"getDefaultAppConfig",(function(){return A})),e(t.exports,"getExperimentalSetting",(function(){return k})),e(t.exports,"Deferred",(function(){return T})),e(t.exports,"createMockUserToken",(function(){return C})),e(t.exports,"FirebaseError",(function(){return N})),e(t.exports,"ErrorFactory",(function(){return R})),e(t.exports,"contains",(function(){return M})),e(t.exports,"isEmpty",(function(){return O})),e(t.exports,"deepEqual",(function(){return D})),e(t.exports,"querystring",(function(){return F})),e(t.exports,"querystringDecode",(function(){return B})),e(t.exports,"extractQuerystring",(function(){return U})),e(t.exports,"createSubscribe",(function(){return j})),e(t.exports,"getModularInstance",(function(){return H}));var r=o("4TNnu");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=63&r|128):55296==(64512&r)&&i+1<e.length&&56320==(64512&e.charCodeAt(i+1))?(r=65536+((1023&r)<<10)+(1023&e.charCodeAt(++i)),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=63&r|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=63&r|128)}return t},a={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let t=0;t<e.length;t+=3){const r=e[t],o=t+1<e.length,s=o?e[t+1]:0,a=t+2<e.length,u=a?e[t+2]:0,c=r>>2,l=(3&r)<<4|s>>4;let d=(15&s)<<2|u>>6,h=63&u;a||(h=64,o||(d=64)),i.push(n[c],n[l],n[d],n[h])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(s(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,i=0;for(;n<e.length;){const r=e[n++];if(r<128)t[i++]=String.fromCharCode(r);else if(r>191&&r<224){const o=e[n++];t[i++]=String.fromCharCode((31&r)<<6|63&o)}else if(r>239&&r<365){const o=((7&r)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[i++]=String.fromCharCode(55296+(o>>10)),t[i++]=String.fromCharCode(56320+(1023&o))}else{const o=e[n++],s=e[n++];t[i++]=String.fromCharCode((15&r)<<12|(63&o)<<6|63&s)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let t=0;t<e.length;){const r=n[e.charAt(t++)],o=t<e.length?n[e.charAt(t)]:0;++t;const s=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==r||null==o||null==s||null==a)throw Error();const u=r<<2|o>>4;if(i.push(u),64!==s){const e=o<<4&240|s>>2;if(i.push(e),64!==a){const e=s<<6&192|a;i.push(e)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},u=function(e){return function(e){const t=s(e);return a.encodeByteArray(t,!0)}(e).replace(/\./g,"")},c=function(e){try{return a.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&"__proto__"!==n&&(e[n]=l(e[n],t[n]));return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function d(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function h(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(d())}function f(){try{return"[object process]"===Object.prototype.toString.call(n.process)}catch(e){return!1}}function p(){return"object"==typeof self&&self.self===self}function m(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function g(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function v(){const e=d();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function y(){return!f()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function b(){try{return"object"==typeof indexedDB}catch(e){return!1}}function w(){return new Promise(((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var e;t((null===(e=r.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}))}function x(){return!("undefined"==typeof navigator||!navigator.cookieEnabled)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const _=()=>function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==n)return n;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,E=()=>{try{return _()||(()=>{if(void 0===r||void 0===r.env)return})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&c(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},I=e=>{var t,n;return null===(n=null===(t=E())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},S=e=>{const t=I(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),i]:[t.substring(0,n),i]},A=()=>{var e;return null===(e=E())||void 0===e?void 0:e.config},k=e=>{var t;return null===(t=E())||void 0===t?void 0:t[`_${e}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class T{wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",i=e.iat||0,r=e.sub||e.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},e);return[u(JSON.stringify({alg:"none",type:"JWT"})),u(JSON.stringify(o)),""].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,N.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,R.prototype.create)}}class R{create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?function(e,t){return e.replace(L,((e,n)=>{const i=t[n];return null!=i?String(i):`<${n}?>`}))}(r,n):"Error",s=`${this.serviceName}: ${o} (${i}).`;return new N(i,s,n)}constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}}const L=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function M(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function O(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function D(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const r of n){if(!i.includes(r))return!1;const n=e[r],o=t[r];if(P(n)&&P(o)){if(!D(n,o))return!1}else if(n!==o)return!1}for(const e of i)if(!n.includes(e))return!1;return!0}function P(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function F(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}function B(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,i]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(i)}})),t}function U(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(e,t){const n=new $(e,t);return n.subscribe.bind(n)}class ${next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let i;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");i=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===i.next&&(i.next=V),void 0===i.error&&(i.error=V),void 0===i.complete&&(i.complete=V);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(e){}})),this.observers.push(i),r}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}}function V(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function H(e){return e&&e._delegate?e._delegate:e}})),o.register("4TNnu",(function(e,t){var n,i,r=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function a(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(e){n=o}try{i="function"==typeof clearTimeout?clearTimeout:s}catch(e){i=s}}();var u,c=[],l=!1,d=-1;function h(){l&&u&&(l=!1,u.length?c=u.concat(c):d=-1,c.length&&f())}function f(){if(!l){var e=a(h);l=!0;for(var t=c.length;t;){for(u=c,c=[];++d<t;)u&&u[d].run();d=-1,t=c.length}u=null,l=!1,function(e){if(i===clearTimeout)return clearTimeout(e);if((i===s||!i)&&clearTimeout)return i=clearTimeout,clearTimeout(e);try{i(e)}catch(t){try{return i.call(null,e)}catch(t){return i.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function m(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new p(e,t)),1!==c.length||l||a(f)},p.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=m,r.addListener=m,r.once=m,r.off=m,r.removeListener=m,r.removeAllListeners=m,r.emit=m,r.prependListener=m,r.prependOnceListener=m,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}})),o.register("7vF8m",(function(t,n){e(t.exports,"LogLevel",(function(){return r})),e(t.exports,"Logger",(function(){return l})),e(t.exports,"setLogLevel",(function(){return d})),e(t.exports,"setUserLogHandler",(function(){return h}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const i=[];var r,o;(o=r||(r={}))[o.DEBUG=0]="DEBUG",o[o.VERBOSE=1]="VERBOSE",o[o.INFO=2]="INFO",o[o.WARN=3]="WARN",o[o.ERROR=4]="ERROR",o[o.SILENT=5]="SILENT";const s={debug:r.DEBUG,verbose:r.VERBOSE,info:r.INFO,warn:r.WARN,error:r.ERROR,silent:r.SILENT},a=r.INFO,u={[r.DEBUG]:"log",[r.VERBOSE]:"log",[r.INFO]:"info",[r.WARN]:"warn",[r.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;const i=(new Date).toISOString(),r=u[t];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[r](`[${i}]  ${e.name}:`,...n)};class l{get logLevel(){return this._logLevel}set logLevel(e){if(!(e in r))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?s[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,r.DEBUG,...e),this._logHandler(this,r.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,r.VERBOSE,...e),this._logHandler(this,r.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,r.INFO,...e),this._logHandler(this,r.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,r.WARN,...e),this._logHandler(this,r.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,r.ERROR,...e),this._logHandler(this,r.ERROR,...e)}constructor(e){this.name=e,this._logLevel=a,this._logHandler=c,this._userLogHandler=null,i.push(this)}}function d(e){i.forEach((t=>{t.setLogLevel(e)}))}function h(e,t){for(const n of i){let i=null;t&&t.level&&(i=s[t.level]),n.userLogHandler=null===e?null:(t,n,...o)=>{const s=o.map((e=>{if(null==e)return null;if("string"==typeof e)return e;if("number"==typeof e||"boolean"==typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(e){return null}})).filter((e=>e)).join(" ");n>=(null!=i?i:t.logLevel)&&e({level:r[n].toLowerCase(),message:s,args:o,type:t.name})}}}})),o.register("ix4Jr",(function(t,n){e(t.exports,"_DEFAULT_ENTRY_NAME",(function(){return h})),e(t.exports,"_apps",(function(){return p})),e(t.exports,"_components",(function(){return m})),e(t.exports,"_addComponent",(function(){return g})),e(t.exports,"_addOrOverwriteComponent",(function(){return v})),e(t.exports,"_registerComponent",(function(){return y})),e(t.exports,"_getProvider",(function(){return b})),e(t.exports,"_removeServiceInstance",(function(){return w})),e(t.exports,"_clearComponents",(function(){return x})),e(t.exports,"SDK_VERSION",(function(){return S})),e(t.exports,"initializeApp",(function(){return A})),e(t.exports,"getApp",(function(){return k})),e(t.exports,"getApps",(function(){return T})),e(t.exports,"deleteApp",(function(){return C})),e(t.exports,"registerVersion",(function(){return N})),e(t.exports,"onLog",(function(){return R})),e(t.exports,"setLogLevel",(function(){return L})),e(t.exports,"FirebaseError",(function(){return o("ffjl9").FirebaseError}));var i=o("4a6xH"),r=o("7vF8m"),s=o("ffjl9"),a=o("cCiiD");s=o("ffjl9");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class u{getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}constructor(e){this.container=e}}const c="@firebase/app",l="0.9.0",d=new(0,r.Logger)("@firebase/app"),h="[DEFAULT]",f={[c]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},p=new Map,m=new Map;function g(e,t){try{e.container.addComponent(t)}catch(n){d.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function v(e,t){e.container.addOrOverwriteComponent(t)}function y(e){const t=e.name;if(m.has(t))return d.debug(`There were multiple attempts to register component ${t}.`),!1;m.set(t,e);for(const t of p.values())g(t,e);return!0}function b(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function w(e,t,n=h){b(e,t).clearInstance(n)}function x(){m.clear()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},E=new(0,s.ErrorFactory)("app","Firebase",_);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class I{get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw E.create("app-deleted",{appName:this._name})}constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new(0,i.Component)("app",(()=>this),"PUBLIC"))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S="9.15.0";function A(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const r=Object.assign({name:h,automaticDataCollectionEnabled:!1},t),o=r.name;if("string"!=typeof o||!o)throw E.create("bad-app-name",{appName:String(o)});if(n||(n=(0,s.getDefaultAppConfig)()),!n)throw E.create("no-options");const a=p.get(o);if(a){if((0,s.deepEqual)(n,a.options)&&(0,s.deepEqual)(r,a.config))return a;throw E.create("duplicate-app",{appName:o})}const u=new(0,i.ComponentContainer)(o);for(const e of m.values())u.addComponent(e);const c=new I(n,r,u);return p.set(o,c),c}function k(e=h){const t=p.get(e);if(!t&&e===h)return A();if(!t)throw E.create("no-app",{appName:e});return t}function T(){return Array.from(p.values())}async function C(e){const t=e.name;p.has(t)&&(p.delete(t),await Promise.all(e.container.getProviders().map((e=>e.delete()))),e.isDeleted=!0)}function N(e,t,n){var r;let o=null!==(r=f[e])&&void 0!==r?r:e;n&&(o+=`-${n}`);const s=o.match(/\s|\//),a=t.match(/\s|\//);if(s||a){const e=[`Unable to register library "${o}" with version "${t}":`];return s&&e.push(`library name "${o}" contains illegal characters (whitespace or "/")`),s&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void d.warn(e.join(" "))}y(new(0,i.Component)(`${o}-version`,(()=>({library:o,version:t})),"VERSION"))}function R(e,t){if(null!==e&&"function"!=typeof e)throw E.create("invalid-log-argument");(0,r.setUserLogHandler)(e,t)}function L(e){(0,r.setLogLevel)(e)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M="firebase-heartbeat-store";let O=null;function D(){return O||(O=(0,a.openDB)("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore(M)}}).catch((e=>{throw E.create("idb-open",{originalErrorMessage:e.message})}))),O}async function P(e,t){try{const n=(await D()).transaction(M,"readwrite"),i=n.objectStore(M);return await i.put(t,F(e)),n.done}catch(e){if(e instanceof s.FirebaseError)d.warn(e.message);else{const t=E.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});d.warn(t.message)}}}function F(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=U();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=U(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let i=e.slice();for(const r of e){const e=n.find((e=>e.agent===r.agent));if(e){if(e.dates.push(r.date),$(n)>t){e.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),$(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}(this._heartbeatsCache.heartbeats),i=(0,s.base64urlEncodeWithoutPadding)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new j(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}}function U(){return(new Date).toISOString().substring(0,10)}class j{async runIndexedDBEnvironmentCheck(){return!!(0,s.isIndexedDBAvailable)()&&(0,s.validateIndexedDBOpenable)().then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(e){try{return(await D()).transaction(M).objectStore(M).get(F(e))}catch(e){if(e instanceof s.FirebaseError)d.warn(e.message);else{const t=E.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});d.warn(t.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return P(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return P(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}}function $(e){return(0,s.base64urlEncodeWithoutPadding)(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var V;V="",y(new(0,i.Component)("platform-logger",(e=>new u(e)),"PRIVATE")),y(new(0,i.Component)("heartbeat",(e=>new B(e)),"PRIVATE")),N(c,l,V),N(c,l,"esm2017"),N("fire-js","")})),o.register("4a6xH",(function(t,n){e(t.exports,"Component",(function(){return r})),e(t.exports,"ComponentContainer",(function(){return u}));var i=o("ffjl9");class r{setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a{get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new(0,i.Deferred);if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),i=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(i)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:s})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(i=e,i===s?void 0:i),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var i;return n||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:s:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}}class u{addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new a(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}constructor(e){this.name=e,this.providers=new Map}}})),o.register("cCiiD",(function(t,n){e(t.exports,"openDB",(function(){return r}));var i=o("ekHjI");i=o("ekHjI");function r(e,t,{blocked:n,upgrade:r,blocking:o,terminated:s}={}){const a=indexedDB.open(e,t),u=(0,i.w)(a);return r&&a.addEventListener("upgradeneeded",(e=>{r((0,i.w)(a.result),e.oldVersion,e.newVersion,(0,i.w)(a.transaction))})),n&&a.addEventListener("blocked",(()=>n())),u.then((e=>{s&&e.addEventListener("close",(()=>s())),o&&e.addEventListener("versionchange",(()=>o()))})).catch((()=>{})),u}const s=["get","getKey","getAll","getAllKeys","count"],a=["put","add","delete","clear"],u=new Map;function c(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(u.get(t))return u.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,r=a.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!r&&!s.includes(n))return;const o=async function(e,...t){const o=this.transaction(e,r?"readwrite":"readonly");let s=o.store;return i&&(s=s.index(t.shift())),(await Promise.all([s[n](...t),r&&o.done]))[0]};return u.set(t,o),o}(0,i.r)((e=>({...e,get:(t,n,i)=>c(t,n)||e.get(t,n,i),has:(t,n)=>!!c(t,n)||e.has(t,n)})))})),o.register("ekHjI",(function(t,n){e(t.exports,"w",(function(){return p})),e(t.exports,"r",(function(){return d}));let i,r;const o=new WeakMap,s=new WeakMap,a=new WeakMap,u=new WeakMap,c=new WeakMap;let l={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return s.get(e);if("objectStoreNames"===t)return e.objectStoreNames||a.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return p(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function d(e){l=e(l)}function h(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(r||(r=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(m(this),t),p(o.get(this))}:function(...t){return p(e.apply(m(this),t))}:function(t,...n){const i=e.call(m(this),t,...n);return a.set(i,t.sort?t.sort():[t]),p(i)}}function f(e){return"function"==typeof e?h(e):(e instanceof IDBTransaction&&function(e){if(s.has(e))return;const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",o),e.removeEventListener("abort",o)},r=()=>{t(),i()},o=()=>{n(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",r),e.addEventListener("error",o),e.addEventListener("abort",o)}));s.set(e,t)}(e),t=e,(i||(i=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,l):e);var t}function p(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("success",r),e.removeEventListener("error",o)},r=()=>{t(p(e.result)),i()},o=()=>{n(e.error),i()};e.addEventListener("success",r),e.addEventListener("error",o)}));return t.then((t=>{t instanceof IDBCursor&&o.set(t,e)})).catch((()=>{})),c.set(t,e),t}(e);if(u.has(e))return u.get(e);const t=f(e);return t!==e&&(u.set(e,t),c.set(t,e)),t}const m=e=>c.get(e)})),o.register("keeEs",(function(e,t){var n=o("ix4Jr"),i=o("4a6xH"),r=o("ffjl9"),s=o("cCiiD");const a="@firebase/installations",u="0.6.0",c=1e4,l="w:0.6.0",d="FIS_v2",h=36e5,f={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},p=new(0,r.ErrorFactory)("installations","Installations",f);function m(e){return e instanceof r.FirebaseError&&e.code.includes("request-failed")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g({projectId:e}){return`https://firebaseinstallations.googleapis.com/v1/projects/${e}/installations`}function v(e){return{token:e.token,requestStatus:2,expiresIn:(t=e.expiresIn,Number(t.replace("s","000"))),creationTime:Date.now()};var t}async function y(e,t){const n=(await t.json()).error;return p.create("request-failed",{requestName:e,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function b({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function w(e,{refreshToken:t}){const n=b(e);return n.append("Authorization",function(e){return`FIS_v2 ${e}`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)),n}async function x(e){const t=await e();return t.status>=500&&t.status<600?e():t}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _(e){return new Promise((t=>{setTimeout(t,e)}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const E=/^[cdef][\w-]{21}$/;function I(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const t=function(e){return(t=e,btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")).substr(0,22);var t}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e);return E.test(t)?t:""}catch(e){return""}}function S(e){return`${e.appName}!${e.appId}`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A=new Map;function k(e,t){const n=S(e);T(n,t),function(e,t){const n=N();n&&n.postMessage({key:e,fid:t});R()}(n,t)}function T(e,t){const n=A.get(e);if(n)for(const e of n)e(t)}let C=null;function N(){return!C&&"BroadcastChannel"in self&&(C=new BroadcastChannel("[Firebase] FID Change"),C.onmessage=e=>{T(e.data.key,e.data.fid)}),C}function R(){0===A.size&&C&&(C.close(),C=null)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L="firebase-installations-store";let M=null;function O(){return M||(M=(0,s.openDB)("firebase-installations-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore(L)}})),M}async function D(e,t){const n=S(e),i=(await O()).transaction(L,"readwrite"),r=i.objectStore(L),o=await r.get(n);return await r.put(t,n),await i.done,o&&o.fid===t.fid||k(e,t.fid),t}async function P(e){const t=S(e),n=(await O()).transaction(L,"readwrite");await n.objectStore(L).delete(t),await n.done}async function F(e,t){const n=S(e),i=(await O()).transaction(L,"readwrite"),r=i.objectStore(L),o=await r.get(n),s=t(o);return void 0===s?await r.delete(n):await r.put(s,n),await i.done,!s||o&&o.fid===s.fid||k(e,s.fid),s}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B(e){let t;const n=await F(e.appConfig,(n=>{const i=function(e){return $(e||{fid:I(),registrationStatus:0})}(n),r=function(e,t){if(0===t.registrationStatus){if(!navigator.onLine){return{installationEntry:t,registrationPromise:Promise.reject(p.create("app-offline"))}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},i=async function(e,t){try{const n=await async function({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const i=g(e),r=b(e),o=t.getImmediate({optional:!0});if(o){const e=await o.getHeartbeatsHeader();e&&r.append("x-firebase-client",e)}const s={fid:n,authVersion:d,appId:e.appId,sdkVersion:l},a={method:"POST",headers:r,body:JSON.stringify(s)},u=await x((()=>fetch(i,a)));if(u.ok){const e=await u.json();return{fid:e.fid||n,registrationStatus:2,refreshToken:e.refreshToken,authToken:v(e.authToken)}}throw await y("Create Installation",u)}(e,t);return D(e.appConfig,n)}catch(n){throw m(n)&&409===n.customData.serverCode?await P(e.appConfig):await D(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}(e,n);return{installationEntry:n,registrationPromise:i}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:U(e)}:{installationEntry:t}}(e,i);return t=r.registrationPromise,r.installationEntry}));return""===n.fid?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}async function U(e){let t=await j(e.appConfig);for(;1===t.registrationStatus;)await _(100),t=await j(e.appConfig);if(0===t.registrationStatus){const{installationEntry:t,registrationPromise:n}=await B(e);return n||t}return t}function j(e){return F(e,(e=>{if(!e)throw p.create("installation-not-found");return $(e)}))}function $(e){return 1===(t=e).registrationStatus&&t.registrationTime+c<Date.now()?{fid:e.fid,registrationStatus:0}:e;var t;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}async function V({appConfig:e,heartbeatServiceProvider:t},n){const i=function(e,{fid:t}){return`${g(e)}/${t}/authTokens:generate`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,n),r=w(e,n),o=t.getImmediate({optional:!0});if(o){const e=await o.getHeartbeatsHeader();e&&r.append("x-firebase-client",e)}const s={installation:{sdkVersion:l,appId:e.appId}},a={method:"POST",headers:r,body:JSON.stringify(s)},u=await x((()=>fetch(i,a)));if(u.ok){return v(await u.json())}throw await y("Generate Auth Token",u)}async function H(e,t=!1){let n;const i=await F(e.appConfig,(i=>{if(!G(i))throw p.create("not-registered");const r=i.authToken;if(!t&&function(e){return 2===e.requestStatus&&!function(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+h}(e)}(r))return i;if(1===r.requestStatus)return n=async function(e,t){let n=await W(e.appConfig);for(;1===n.authToken.requestStatus;)await _(100),n=await W(e.appConfig);const i=n.authToken;return 0===i.requestStatus?H(e,t):i}(e,t),i;{if(!navigator.onLine)throw p.create("app-offline");const t=function(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}(i);return n=async function(e,t){try{const n=await V(e,t),i=Object.assign(Object.assign({},t),{authToken:n});return await D(e.appConfig,i),n}catch(n){if(!m(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await D(e.appConfig,n)}else await P(e.appConfig);throw n}}(e,t),t}}));return n?await n:i.authToken}function W(e){return F(e,(e=>{if(!G(e))throw p.create("not-registered");const t=e.authToken;return 1===(n=t).requestStatus&&n.requestTime+c<Date.now()?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e;var n;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}))}function G(e){return void 0!==e&&2===e.registrationStatus}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function z(e,t=!1){const n=e;await async function(e){const{registrationPromise:t}=await B(e);t&&await t}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(n);return(await H(n,t)).token}function K(e){return p.create("missing-app-config-values",{valueName:e})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q="installations",Y=e=>{const t=e.getProvider("app").getImmediate(),i=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){if(!e||!e.options)throw K("App Configuration");if(!e.name)throw K("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw K(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t);return{app:t,appConfig:i,heartbeatServiceProvider:(0,n._getProvider)(t,"heartbeat"),_delete:()=>Promise.resolve()}},Z=e=>{const t=e.getProvider("app").getImmediate(),i=(0,n._getProvider)(t,q).getImmediate();return{getId:()=>async function(e){const t=e,{installationEntry:n,registrationPromise:i}=await B(t);return i?i.catch(console.error):H(t).catch(console.error),n.fid}(i),getToken:e=>z(i,e)}};(0,n._registerComponent)(new(0,i.Component)(q,Y,"PUBLIC")),(0,n._registerComponent)(new(0,i.Component)("installations-internal",Z,"PRIVATE")),(0,n.registerVersion)(a,u),(0,n.registerVersion)(a,u,"esm2017")})),o.register("gKkQl",(function(e,t){var n,i,r=o("ix4Jr");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,(r=o("ix4Jr")).registerVersion)("firebase","9.15.0","app"),n=e.exports,i=r,Object.keys(i).forEach((function(e){"default"===e||"__esModule"===e||n.hasOwnProperty(e)||Object.defineProperty(n,e,{enumerable:!0,get:function(){return i[e]}})}))})),o.register("eyjy7",(function(t,n){e(t.exports,"GoogleAuthProvider",(function(){return o("2YDLC").Q})),e(t.exports,"signInWithPopup",(function(){return o("2YDLC").c})),e(t.exports,"getAuth",(function(){return o("2YDLC").n})),e(t.exports,"FacebookAuthProvider",(function(){return o("2YDLC").N})),e(t.exports,"signOut",(function(){return o("2YDLC").y})),e(t.exports,"onAuthStateChanged",(function(){return o("2YDLC").v})),e(t.exports,"EmailAuthProvider",(function(){return o("2YDLC").M})),o("1iO0g")})),o.register("1iO0g",(function(t,n){e(t.exports,"EmailAuthProvider",(function(){return o("2YDLC").M})),e(t.exports,"FacebookAuthProvider",(function(){return o("2YDLC").N})),e(t.exports,"GoogleAuthProvider",(function(){return o("2YDLC").Q})),e(t.exports,"getAuth",(function(){return o("2YDLC").n})),e(t.exports,"onAuthStateChanged",(function(){return o("2YDLC").v})),e(t.exports,"signInWithPopup",(function(){return o("2YDLC").c})),e(t.exports,"signOut",(function(){return o("2YDLC").y})),o("ffjl9"),o("ix4Jr"),o("7vF8m"),o("4a6xH");o("2YDLC")})),o.register("2YDLC",(function(t,n){e(t.exports,"o",(function(){return c})),e(t.exports,"A",(function(){return l})),e(t.exports,"B",(function(){return h})),e(t.exports,"as",(function(){return v})),e(t.exports,"aw",(function(){return y})),e(t.exports,"ax",(function(){return _})),e(t.exports,"ap",(function(){return I})),e(t.exports,"az",(function(){return A})),e(t.exports,"L",(function(){return Q})),e(t.exports,"aA",(function(){return ee})),e(t.exports,"ar",(function(){return ae})),e(t.exports,"aq",(function(){return le})),e(t.exports,"av",(function(){return de})),e(t.exports,"aE",(function(){return ge})),e(t.exports,"G",(function(){return ye})),e(t.exports,"H",(function(){return xe})),e(t.exports,"J",(function(){return ke})),e(t.exports,"M",(function(){return Re})),e(t.exports,"U",(function(){return Oe})),e(t.exports,"N",(function(){return De})),e(t.exports,"Q",(function(){return Pe})),e(t.exports,"T",(function(){return Fe})),e(t.exports,"aL",(function(){return Be})),e(t.exports,"V",(function(){return Ue})),e(t.exports,"W",(function(){return je})),e(t.exports,"X",(function(){return We})),e(t.exports,"ak",(function(){return qe})),e(t.exports,"Y",(function(){return Qe})),e(t.exports,"Z",(function(){return et})),e(t.exports,"_",(function(){return tt})),e(t.exports,"$",(function(){return nt})),e(t.exports,"a0",(function(){return st})),e(t.exports,"a1",(function(){return at})),e(t.exports,"a2",(function(){return ut})),e(t.exports,"a3",(function(){return ct})),e(t.exports,"a4",(function(){return lt})),e(t.exports,"a5",(function(){return dt})),e(t.exports,"a6",(function(){return ht})),e(t.exports,"a7",(function(){return ft})),e(t.exports,"a8",(function(){return pt})),e(t.exports,"a9",(function(){return mt})),e(t.exports,"aa",(function(){return gt})),e(t.exports,"ab",(function(){return vt})),e(t.exports,"ac",(function(){return yt})),e(t.exports,"af",(function(){return bt})),e(t.exports,"ag",(function(){return wt})),e(t.exports,"ah",(function(){return xt})),e(t.exports,"al",(function(){return Ct})),e(t.exports,"v",(function(){return Nt})),e(t.exports,"y",(function(){return Rt})),e(t.exports,"an",(function(){return Ot})),e(t.exports,"ao",(function(){return Ft})),e(t.exports,"b",(function(){return $t})),e(t.exports,"a",(function(){return Ht})),e(t.exports,"aI",(function(){return Gt})),e(t.exports,"i",(function(){return on})),e(t.exports,"R",(function(){return vn})),e(t.exports,"s",(function(){return bn})),e(t.exports,"l",(function(){return wn})),e(t.exports,"r",(function(){return xn})),e(t.exports,"u",(function(){return En})),e(t.exports,"P",(function(){return In})),e(t.exports,"c",(function(){return Ln})),e(t.exports,"e",(function(){return Mn})),e(t.exports,"d",(function(){return On})),e(t.exports,"aD",(function(){return Un})),e(t.exports,"aC",(function(){return jn})),e(t.exports,"f",(function(){return Hn})),e(t.exports,"h",(function(){return Wn})),e(t.exports,"g",(function(){return Gn})),e(t.exports,"j",(function(){return zn})),e(t.exports,"aB",(function(){return Kn})),e(t.exports,"ay",(function(){return Yn})),e(t.exports,"au",(function(){return Jn})),e(t.exports,"at",(function(){return pi})),e(t.exports,"k",(function(){return gi})),e(t.exports,"m",(function(){return yi})),e(t.exports,"n",(function(){return Ii}));var i=o("ffjl9"),r=o("ix4Jr"),s=o("7vF8m"),a=o("l73V3"),u=o("4a6xH");
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const c={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},l={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};function d(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const h=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registed for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance."}},f=d,p=new(0,i.ErrorFactory)("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),m=new(0,s.Logger)("@firebase/auth");function g(e,...t){m.logLevel<=s.LogLevel.ERROR&&m.error(`Auth (${r.SDK_VERSION}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v(e,...t){throw x(e,...t)}function y(e,...t){return x(e,...t)}function b(e,t,n){const r=Object.assign(Object.assign({},f()),{[t]:n});return new(0,i.ErrorFactory)("auth","Firebase",r).create(t,{appName:e.name})}function w(e,t,n){if(!(t instanceof n))throw n.name!==t.constructor.name&&v(e,"argument-error"),b(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function x(e,...t){if("string"!=typeof e){const n=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=e.name),e._errorFactory.create(n,...i)}return p.create(e,...t)}function _(e,t,...n){if(!e)throw x(t,...n)}function E(e){const t="INTERNAL ASSERTION FAILED: "+e;throw g(t),new Error(t)}function I(e,t){e||E(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S=new Map;function A(e){I(e instanceof Function,"Expected a class definition");let t=S.get(e);return t?(I(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,S.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function k(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function T(){return"http:"===C()||"https:"===C()}function C(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class N{get(){return"undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(T()||(0,i.isBrowserExtension)()||"connection"in navigator)&&!navigator.onLine?Math.min(5e3,this.shortDelay):this.isMobile?this.longDelay:this.shortDelay}constructor(e,t){this.shortDelay=e,this.longDelay=t,I(t>e,"Short delay should be less than long delay!"),this.isMobile=(0,i.isMobileCordova)()||(0,i.isReactNative)()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R(e,t){I(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void E("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void E("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void E("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},O=new N(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function P(e,t,n,r,o={}){return F(e,o,(async()=>{let o={},s={};r&&("GET"===t?s=r:o={body:JSON.stringify(r)});const a=(0,i.querystring)(Object.assign({key:e.config.apiKey},s)).slice(1),u=await e._getAdditionalHeaders();return u["Content-Type"]="application/json",e.languageCode&&(u["X-Firebase-Locale"]=e.languageCode),L.fetch()(U(e,e.config.apiHost,n,a),Object.assign({method:t,headers:u,referrerPolicy:"no-referrer"},o))}))}async function F(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},M),t);try{const t=new j(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw $(e,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const t=i.ok?o.errorMessage:o.error.message,[n,s]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw $(e,"credential-already-in-use",o);if("EMAIL_EXISTS"===n)throw $(e,"email-already-in-use",o);if("USER_DISABLED"===n)throw $(e,"user-disabled",o);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(s)throw b(e,a,s);v(e,a)}}catch(t){if(t instanceof i.FirebaseError)throw t;v(e,"network-request-failed")}}async function B(e,t,n,i,r={}){const o=await P(e,t,n,i,r);return"mfaPendingCredential"in o&&v(e,"multi-factor-auth-required",{_serverResponse:o}),o}function U(e,t,n,i){const r=`${t}${n}?${i}`;return e.config.emulator?R(e.config,r):`${e.config.apiScheme}://${r}`}class j{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(y(this.auth,"network-request-failed"))),O.get())}))}}function $(e,t,n){const i={appName:e.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=y(e,t,i);return r.customData._tokenResponse=n,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function V(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H(e){return 1e3*Number(e)}function W(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return g("JWT malformed, contained fewer than 3 sections"),null;try{const e=(0,i.base64Decode)(n);return e?JSON.parse(e):(g("Failed to decode base64 JWT payload"),null)}catch(e){return g("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function G(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof i.FirebaseError&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class z{_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null==e?void 0:e.code)&&this.schedule(!0))}this.schedule()}constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{_initializeTime(){this.lastSignInTime=V(this.lastLoginAt),this.creationTime=V(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function q(e){var t;const n=e.auth,i=await e.getIdToken(),r=await G(e,async function(e,t){return P(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:i}));_(null==r?void 0:r.users.length,n,"internal-error");const o=r.users[0];e._notifyReloadListener(o);const s=(null===(t=o.providerUserInfo)||void 0===t?void 0:t.length)?o.providerUserInfo.map((e=>{var{providerId:t}=e,n=(0,a.__rest)(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const u=(c=e.providerData,l=s,[...c.filter((e=>!l.some((t=>t.providerId===e.providerId)))),...l]);var c,l;const d=e.isAnonymous,h=!(e.email&&o.passwordHash||(null==u?void 0:u.length)),f=!!d&&h,p={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new K(o.createdAt,o.lastLoginAt),isAnonymous:f};Object.assign(e,p)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Y{get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){_(e.idToken,"internal-error"),_(void 0!==e.idToken,"internal-error"),_(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=W(e);return _(t,"internal-error"),_(void 0!==t.exp,"internal-error"),_(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return _(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:o}=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t){const n=await F(e,{},(async()=>{const n=(0,i.querystring)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:o}=e.config,s=U(e,r,"/v1/token",`key=${o}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",L.fetch()(s,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,r,Number(o))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:i,expirationTime:r}=t,o=new Y;return n&&(_("string"==typeof n,"internal-error",{appName:e}),o.refreshToken=n),i&&(_("string"==typeof i,"internal-error",{appName:e}),o.accessToken=i),r&&(_("number"==typeof r,"internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Y,this.toJSON())}_performRefresh(){return E("not implemented")}constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z(e,t){_("string"==typeof e||void 0===e,"internal-error",{appName:t})}class X{async getIdToken(e){const t=await G(this,this.stsTokenManager.getToken(this.auth,e));return _(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=(0,i.getModularInstance)(e),r=await n.getIdToken(t),o=W(r);_(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const s="object"==typeof o.firebase?o.firebase:void 0,a=null==s?void 0:s.sign_in_provider;return{claims:o,token:r,authTime:V(H(o.auth_time)),issuedAtTime:V(H(o.iat)),expirationTime:V(H(o.exp)),signInProvider:a||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=(0,i.getModularInstance)(e);await q(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(_(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new X(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){_(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await q(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await G(this,async function(e,t){return P(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,i,r,o,s,a,u,c;const l=null!==(n=t.displayName)&&void 0!==n?n:void 0,d=null!==(i=t.email)&&void 0!==i?i:void 0,h=null!==(r=t.phoneNumber)&&void 0!==r?r:void 0,f=null!==(o=t.photoURL)&&void 0!==o?o:void 0,p=null!==(s=t.tenantId)&&void 0!==s?s:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(u=t.createdAt)&&void 0!==u?u:void 0,v=null!==(c=t.lastLoginAt)&&void 0!==c?c:void 0,{uid:y,emailVerified:b,isAnonymous:w,providerData:x,stsTokenManager:E}=t;_(y&&E,e,"internal-error");const I=Y.fromJSON(this.name,E);_("string"==typeof y,e,"internal-error"),Z(l,e.name),Z(d,e.name),_("boolean"==typeof b,e,"internal-error"),_("boolean"==typeof w,e,"internal-error"),Z(h,e.name),Z(f,e.name),Z(p,e.name),Z(m,e.name),Z(g,e.name),Z(v,e.name);const S=new X({uid:y,auth:e,email:d,emailVerified:b,displayName:l,isAnonymous:w,photoURL:f,phoneNumber:h,tenantId:p,stsTokenManager:I,createdAt:g,lastLoginAt:v});return x&&Array.isArray(x)&&(S.providerData=x.map((e=>Object.assign({},e)))),m&&(S._redirectEventId=m),S}static async _fromIdTokenResponse(e,t,n=!1){const i=new Y;i.updateFromServerResponse(t);const r=new X({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await q(r),r}constructor(e){var{uid:t,auth:n,stsTokenManager:i}=e,r=(0,a.__rest)(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new z(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new K(r.createdAt||void 0,r.lastLoginAt||void 0)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}constructor(){this.type="NONE",this.storage={}}}J.type="NONE";const Q=J;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ee(e,t,n){return`firebase:${e}:${t}:${n}`}class te{setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?X._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new te(A(Q),e,n);const i=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let r=i[0]||A(Q);const o=ee(n,e.config.apiKey,e.name);let s=null;for(const n of t)try{const t=await n._get(o);if(t){const i=X._fromJSON(e,t);n!==r&&(s=i),r=n;break}}catch(e){}const a=i.filter((e=>e._shouldAllowMigration));return r._shouldAllowMigration&&a.length?(r=a[0],s&&await r._set(o,s.toJSON()),await Promise.all(t.map((async e=>{if(e!==r)try{await e._remove(o)}catch(e){}}))),new te(r,e,n)):new te(r,e,n)}constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:i,name:r}=this.auth;this.fullUserKey=ee(this.userKey,i.apiKey,r),this.fullPersistenceKey=ee("persistence",i.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ne(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(se(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(ie(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(ue(t))return"Blackberry";if(ce(t))return"Webos";if(re(t))return"Safari";if((t.includes("chrome/")||oe(t))&&!t.includes("edge/"))return"Chrome";if(ae(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function ie(e=(0,i.getUA)()){return/firefox\//i.test(e)}function re(e=(0,i.getUA)()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function oe(e=(0,i.getUA)()){return/crios\//i.test(e)}function se(e=(0,i.getUA)()){return/iemobile/i.test(e)}function ae(e=(0,i.getUA)()){return/android/i.test(e)}function ue(e=(0,i.getUA)()){return/blackberry/i.test(e)}function ce(e=(0,i.getUA)()){return/webos/i.test(e)}function le(e=(0,i.getUA)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function de(e=(0,i.getUA)()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(e)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(e)}function he(e=(0,i.getUA)()){return le(e)||ae(e)||ce(e)||ue(e)||/windows phone/i.test(e)||se(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function fe(e,t=[]){let n;switch(e){case"Browser":n=ne((0,i.getUA)());break;case"Worker":n=`${ne((0,i.getUA)())}-${e}`;break;default:n=e}const o=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${r.SDK_VERSION}/${o}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{pushCallback(e,t){const n=t=>new Promise(((n,i)=>{try{n(e(t))}catch(e){i(e)}}));n.onAbort=t,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(e){t.reverse();for(const e of t)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==e?void 0:e.message})}}constructor(e){this.auth=e,this.queue=[]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=A(t)),this._initializationPromise=this.queue((async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await te.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let i=n,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,o=null==i?void 0:i._redirectEventId,s=await this.tryRedirectSignIn(e);n&&n!==o||!(null==s?void 0:s.user)||(i=s.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(e){i=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(e)))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return _(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await q(e)}catch(e){if("auth/network-request-failed"!==(null==e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?(0,i.getModularInstance)(e):null;return t&&_(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&_(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(A(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new(0,i.ErrorFactory)("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&A(e)||this._popupRedirectResolver;_(t,this,"argument-error"),this.redirectPersistenceManager=await te.create(this,[A(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,i){if(this._deleted)return()=>{};const r="function"==typeof t?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return _(o,this,"internal-error"),o.then((()=>r(this.currentUser))),"function"==typeof t?e.addObserver(t,n,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return _(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=fe(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ve(this),this.idTokenSubscription=new ve(this),this.beforeStateQueue=new pe(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=p,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}}function ge(e){return(0,i.getModularInstance)(e)}class ve{get next(){return _(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,i.createSubscribe)((e=>this.observer=e))}}function ye(e,t,n){const i=ge(e);_(i._canInitEmulator,i,"emulator-config-failed"),_(/^https?:\/\//.test(t),i,"invalid-emulator-scheme");const r=!!(null==n?void 0:n.disableWarnings),o=be(t),{host:s,port:a}=function(e){const t=be(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const e=r[1];return{host:e,port:we(i.substr(e.length+1))}}{const[e,t]=i.split(":");return{host:e,port:we(t)}}}(t),u=null===a?"":`:${a}`;i.config.emulator={url:`${o}//${s}${u}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */()}function be(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function we(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class xe{toJSON(){return E("not implemented")}_getIdTokenResponse(e){return E("not implemented")}_linkToIdToken(e,t){return E("not implemented")}_getReauthenticationResolver(e){return E("not implemented")}constructor(e,t){this.providerId=e,this.signInMethod=t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _e(e,t){return P(e,"POST","/v1/accounts:resetPassword",D(e,t))}async function Ee(e,t){return P(e,"POST","/v1/accounts:update",t)}async function Ie(e,t){return P(e,"POST","/v1/accounts:sendOobCode",D(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Se extends xe{static _fromEmailAndPassword(e,t){return new Se(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Se(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return B(e,"POST","/v1/accounts:signInWithPassword",D(e,t))}(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return B(e,"POST","/v1/accounts:signInWithEmailLink",D(e,t))}(e,{email:this._email,oobCode:this._password});default:v(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Ee(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return B(e,"POST","/v1/accounts:signInWithEmailLink",D(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:v(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}constructor(e,t,n,i=null){super("password",n),this._email=e,this._password=t,this._tenantId=i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ae(e,t){return B(e,"POST","/v1/accounts:signInWithIdp",D(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke extends xe{static _fromParams(e){const t=new ke(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):v("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:i}=t,r=(0,a.__rest)(t,["providerId","signInMethod"]);if(!n||!i)return null;const o=new ke(n,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){return Ae(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Ae(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ae(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=(0,i.querystring)(t)}return e}constructor(){super(...arguments),this.pendingToken=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Te={USER_NOT_FOUND:"user-not-found"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ce extends xe{static _fromVerification(e,t){return new Ce({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Ce({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return B(e,"POST","/v1/accounts:signInWithPhoneNumber",D(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const n=await B(e,"POST","/v1/accounts:signInWithPhoneNumber",D(e,t));if(n.temporaryProof)throw $(e,"account-exists-with-different-credential",n);return n}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return B(e,"POST","/v1/accounts:signInWithPhoneNumber",D(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),Te)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:r}=e;return n||t||i||r?new Ce({verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:r}):null}constructor(e){super("phone","phone"),this.params=e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{static parseLink(e){const t=function(e){const t=(0,i.querystringDecode)((0,i.extractQuerystring)(e)).link,n=t?(0,i.querystringDecode)((0,i.extractQuerystring)(t)).deep_link_id:null,r=(0,i.querystringDecode)((0,i.extractQuerystring)(e)).deep_link_id;return(r?(0,i.querystringDecode)((0,i.extractQuerystring)(r)).link:null)||r||n||t||e}(e);try{return new Ne(t)}catch(e){return null}}constructor(e){var t,n,r,o,s,a;const u=(0,i.querystringDecode)((0,i.extractQuerystring)(e)),c=null!==(t=u.apiKey)&&void 0!==t?t:null,l=null!==(n=u.oobCode)&&void 0!==n?n:null,d=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(r=u.mode)&&void 0!==r?r:null);_(c&&l&&d,"argument-error"),this.apiKey=c,this.operation=d,this.code=l,this.continueUrl=null!==(o=u.continueUrl)&&void 0!==o?o:null,this.languageCode=null!==(s=u.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(a=u.tenantId)&&void 0!==a?a:null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Re{static credential(e,t){return Se._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Ne.parseLink(t);return _(n,"argument-error"),Se._fromEmailAndCode(e,n.code,n.tenantId)}constructor(){this.providerId=Re.PROVIDER_ID}}Re.PROVIDER_ID="password",Re.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Re.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Le{setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me extends Le{addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}constructor(){super(...arguments),this.scopes=[]}}class Oe extends Me{static credentialFromJSON(e){const t="string"==typeof e?JSON.parse(e):e;return _("providerId"in t&&"signInMethod"in t,"argument-error"),ke._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return _(e.idToken||e.accessToken,"argument-error"),ke._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Oe.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Oe.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n,oauthTokenSecret:i,pendingToken:r,nonce:o,providerId:s}=e;if(!(n||i||t||r))return null;if(!s)return null;try{return new Oe(s)._credential({idToken:t,accessToken:n,nonce:o,pendingToken:r})}catch(e){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De extends Me{static credential(e){return ke._fromParams({providerId:De.PROVIDER_ID,signInMethod:De.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return De.credentialFromTaggedObject(e)}static credentialFromError(e){return De.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return De.credential(e.oauthAccessToken)}catch(e){return null}}constructor(){super("facebook.com")}}De.FACEBOOK_SIGN_IN_METHOD="facebook.com",De.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Pe extends Me{static credential(e,t){return ke._fromParams({providerId:Pe.PROVIDER_ID,signInMethod:Pe.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Pe.credentialFromTaggedObject(e)}static credentialFromError(e){return Pe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Pe.credential(t,n)}catch(e){return null}}constructor(){super("google.com"),this.addScope("profile")}}Pe.GOOGLE_SIGN_IN_METHOD="google.com",Pe.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fe extends Me{static credential(e){return ke._fromParams({providerId:Fe.PROVIDER_ID,signInMethod:Fe.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Fe.credentialFromTaggedObject(e)}static credentialFromError(e){return Fe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Fe.credential(e.oauthAccessToken)}catch(e){return null}}constructor(){super("github.com")}}Fe.GITHUB_SIGN_IN_METHOD="github.com",Fe.PROVIDER_ID="github.com";class Be extends xe{_getIdTokenResponse(e){return Ae(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Ae(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ae(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:i,pendingToken:r}=t;return n&&i&&r&&n===i?new Be(n,r):null}static _create(e,t){return new Be(e,t)}buildRequest(){return{requestUri:"http://localhost",returnSecureToken:!0,pendingToken:this.pendingToken}}constructor(e,t){super(e,e),this.pendingToken=t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue extends Le{static credentialFromResult(e){return Ue.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Ue.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=Be.fromJSON(e);return _(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:n}=e;if(!t||!n)return null;try{return Be._create(n,t)}catch(e){return null}}constructor(e){_(e.startsWith("saml."),"argument-error"),super(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je extends Me{static credential(e,t){return ke._fromParams({providerId:je.PROVIDER_ID,signInMethod:je.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return je.credentialFromTaggedObject(e)}static credentialFromError(e){return je.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return je.credential(t,n)}catch(e){return null}}constructor(){super("twitter.com")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function $e(e,t){return B(e,"POST","/v1/accounts:signUp",D(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */je.TWITTER_SIGN_IN_METHOD="twitter.com",je.PROVIDER_ID="twitter.com";class Ve{static async _fromIdTokenResponse(e,t,n,i=!1){const r=await X._fromIdTokenResponse(e,n,i),o=He(n);return new Ve({user:r,providerId:o,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const i=He(n);return new Ve({user:e,providerId:i,_tokenResponse:n,operationType:t})}constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}}function He(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function We(e){var t;const n=ge(e);if(await n._initializationPromise,null===(t=n.currentUser)||void 0===t?void 0:t.isAnonymous)return new Ve({user:n.currentUser,providerId:null,operationType:"signIn"});const i=await $e(n,{returnSecureToken:!0}),r=await Ve._fromIdTokenResponse(n,"signIn",i,!0);return await n._updateCurrentUser(r.user),r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge extends i.FirebaseError{static _fromErrorAndOperation(e,t,n,i){return new Ge(e,t,n,i)}constructor(e,t,n,i){var r;super(t.code,t.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,Ge.prototype),this.customData={appName:e.name,tenantId:null!==(r=e.tenantId)&&void 0!==r?r:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}}function ze(e,t,n,i){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Ge._fromErrorAndOperation(e,n,t,i);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ke(e){return new Set(e.map((({providerId:e})=>e)).filter((e=>!!e)))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qe(e,t){const n=(0,i.getModularInstance)(e);await Ze(!0,n,t);const{providerUserInfo:r}=await async function(e,t){return P(e,"POST","/v1/accounts:update",t)}(n.auth,{idToken:await n.getIdToken(),deleteProvider:[t]}),o=Ke(r||[]);return n.providerData=n.providerData.filter((e=>o.has(e.providerId))),o.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function Ye(e,t,n=!1){const i=await G(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Ve._forOperation(e,"link",i)}async function Ze(e,t,n){await q(t);const i=!1===e?"provider-already-linked":"no-such-provider";_(Ke(t.providerData).has(n)===e,t.auth,i)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xe(e,t,n=!1){const{auth:i}=e,r="reauthenticate";try{const o=await G(e,ze(i,r,t,e),n);_(o.idToken,i,"internal-error");const s=W(o.idToken);_(s,i,"internal-error");const{sub:a}=s;return _(e.uid===a,i,"user-mismatch"),Ve._forOperation(e,r,o)}catch(e){throw"auth/user-not-found"===(null==e?void 0:e.code)&&v(i,"user-mismatch"),e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Je(e,t,n=!1){const i="signIn",r=await ze(e,i,t),o=await Ve._fromIdTokenResponse(e,i,r);return n||await e._updateCurrentUser(o.user),o}async function Qe(e,t){return Je(ge(e),t)}async function et(e,t){const n=(0,i.getModularInstance)(e);return await Ze(!1,n,t.providerId),Ye(n,t)}async function tt(e,t){return Xe((0,i.getModularInstance)(e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function nt(e,t){const n=ge(e),i=await async function(e,t){return B(e,"POST","/v1/accounts:signInWithCustomToken",D(e,t))}(n,{token:t,returnSecureToken:!0}),r=await Ve._fromIdTokenResponse(n,"signIn",i);return await n._updateCurrentUser(r.user),r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{static _fromServerResponse(e,t){return"phoneInfo"in t?rt._fromServerResponse(e,t):v(e,"internal-error")}constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}}class rt extends it{static _fromServerResponse(e,t){return new rt(t)}constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ot(e,t,n){var i;_((null===(i=n.url)||void 0===i?void 0:i.length)>0,e,"invalid-continue-uri"),_(void 0===n.dynamicLinkDomain||n.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),t.continueUrl=n.url,t.dynamicLinkDomain=n.dynamicLinkDomain,t.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(_(n.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iOSBundleId=n.iOS.bundleId),n.android&&(_(n.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=n.android.installApp,t.androidMinimumVersionCode=n.android.minimumVersion,t.androidPackageName=n.android.packageName)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function st(e,t,n){const r=(0,i.getModularInstance)(e),o={requestType:"PASSWORD_RESET",email:t};n&&ot(r,o,n),await async function(e,t){return Ie(e,t)}(r,o)}async function at(e,t,n){await _e((0,i.getModularInstance)(e),{oobCode:t,newPassword:n})}async function ut(e,t){await async function(e,t){return P(e,"POST","/v1/accounts:update",D(e,t))}((0,i.getModularInstance)(e),{oobCode:t})}async function ct(e,t){const n=(0,i.getModularInstance)(e),r=await _e(n,{oobCode:t}),o=r.requestType;switch(_(o,n,"internal-error"),o){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":_(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":_(r.mfaInfo,n,"internal-error");default:_(r.email,n,"internal-error")}let s=null;return r.mfaInfo&&(s=it._fromServerResponse(ge(n),r.mfaInfo)),{data:{email:("VERIFY_AND_CHANGE_EMAIL"===r.requestType?r.newEmail:r.email)||null,previousEmail:("VERIFY_AND_CHANGE_EMAIL"===r.requestType?r.email:r.newEmail)||null,multiFactorInfo:s},operation:o}}async function lt(e,t){const{data:n}=await ct((0,i.getModularInstance)(e),t);return n.email}async function dt(e,t,n){const i=ge(e),r=await $e(i,{returnSecureToken:!0,email:t,password:n}),o=await Ve._fromIdTokenResponse(i,"signIn",r);return await i._updateCurrentUser(o.user),o}function ht(e,t,n){return Qe((0,i.getModularInstance)(e),Re.credential(t,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ft(e,t,n){const r=(0,i.getModularInstance)(e),o={requestType:"EMAIL_SIGNIN",email:t};_(n.handleCodeInApp,r,"argument-error"),n&&ot(r,o,n),await async function(e,t){return Ie(e,t)}(r,o)}function pt(e,t){const n=Ne.parseLink(t);return"EMAIL_SIGNIN"===(null==n?void 0:n.operation)}async function mt(e,t,n){const r=(0,i.getModularInstance)(e),o=Re.credentialWithLink(t,n||k());return _(o._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Qe(r,o)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function gt(e,t){const n={identifier:t,continueUri:T()?k():"http://localhost"},{signinMethods:r}=await async function(e,t){return P(e,"POST","/v1/accounts:createAuthUri",D(e,t))}((0,i.getModularInstance)(e),n);return r||[]}async function vt(e,t){const n=(0,i.getModularInstance)(e),r={requestType:"VERIFY_EMAIL",idToken:await e.getIdToken()};t&&ot(n.auth,r,t);const{email:o}=await async function(e,t){return Ie(e,t)}(n.auth,r);o!==e.email&&await e.reload()}async function yt(e,t,n){const r=(0,i.getModularInstance)(e),o={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await e.getIdToken(),newEmail:t};n&&ot(r.auth,o,n);const{email:s}=await async function(e,t){return Ie(e,t)}(r.auth,o);s!==e.email&&await e.reload()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function bt(e,{displayName:t,photoURL:n}){if(void 0===t&&void 0===n)return;const r=(0,i.getModularInstance)(e),o={idToken:await r.getIdToken(),displayName:t,photoUrl:n,returnSecureToken:!0},s=await G(r,async function(e,t){return P(e,"POST","/v1/accounts:update",t)}(r.auth,o));r.displayName=s.displayName||null,r.photoURL=s.photoUrl||null;const a=r.providerData.find((({providerId:e})=>"password"===e));a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(s)}function wt(e,t){return _t((0,i.getModularInstance)(e),t,null)}function xt(e,t){return _t((0,i.getModularInstance)(e),null,t)}async function _t(e,t,n){const{auth:i}=e,r={idToken:await e.getIdToken(),returnSecureToken:!0};t&&(r.email=t),n&&(r.password=n);const o=await G(e,Ee(i,r));await e._updateTokensIfNecessary(o,!0)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e,t,n={}){this.isNewUser=e,this.providerId=t,this.profile=n}}class It extends Et{constructor(e,t,n,i){super(e,t,n),this.username=i}}class St extends Et{constructor(e,t){super(e,"facebook.com",t)}}class At extends It{constructor(e,t){super(e,"github.com",t,"string"==typeof(null==t?void 0:t.login)?null==t?void 0:t.login:null)}}class kt extends Et{constructor(e,t){super(e,"google.com",t)}}class Tt extends It{constructor(e,t,n){super(e,"twitter.com",t,n)}}function Ct(e){const{user:t,_tokenResponse:n}=e;return t.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:function(e){var t,n;if(!e)return null;const{providerId:i}=e,r=e.rawUserInfo?JSON.parse(e.rawUserInfo):{},o=e.isNewUser||"identitytoolkit#SignupNewUserResponse"===e.kind;if(!i&&(null==e?void 0:e.idToken)){const i=null===(n=null===(t=W(e.idToken))||void 0===t?void 0:t.firebase)||void 0===n?void 0:n.sign_in_provider;if(i)return new Et(o,"anonymous"!==i&&"custom"!==i?i:null)}if(!i)return null;switch(i){case"facebook.com":return new St(o,r);case"github.com":return new At(o,r);case"google.com":return new kt(o,r);case"twitter.com":return new Tt(o,r,e.screenName||null);case"custom":case"anonymous":return new Et(o,null);default:return new Et(o,i,r)}}(n)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nt(e,t,n,r){return(0,i.getModularInstance)(e).onAuthStateChanged(t,n,r)}function Rt(e){return(0,i.getModularInstance)(e).signOut()}class Lt{static _fromIdtoken(e,t){return new Lt("enroll",e,t)}static _fromMfaPendingCredential(e){return new Lt("signin",e)}toJSON(){return{multiFactorSession:{["enroll"===this.type?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var t,n;if(null==e?void 0:e.multiFactorSession){if(null===(t=e.multiFactorSession)||void 0===t?void 0:t.pendingCredential)return Lt._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(null===(n=e.multiFactorSession)||void 0===n?void 0:n.idToken)return Lt._fromIdtoken(e.multiFactorSession.idToken)}return null}constructor(e,t,n){this.type=e,this.credential=t,this.auth=n}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{static _fromError(e,t){const n=ge(e),i=t.customData._serverResponse,r=(i.mfaInfo||[]).map((e=>it._fromServerResponse(n,e)));_(i.mfaPendingCredential,n,"internal-error");const o=Lt._fromMfaPendingCredential(i.mfaPendingCredential);return new Mt(o,r,(async e=>{const r=await e._process(n,o);delete i.mfaInfo,delete i.mfaPendingCredential;const s=Object.assign(Object.assign({},i),{idToken:r.idToken,refreshToken:r.refreshToken});switch(t.operationType){case"signIn":const e=await Ve._fromIdTokenResponse(n,t.operationType,s);return await n._updateCurrentUser(e.user),e;case"reauthenticate":return _(t.user,n,"internal-error"),Ve._forOperation(t.user,t.operationType,s);default:v(n,"internal-error")}}))}async resolveSignIn(e){const t=e;return this.signInResolver(t)}constructor(e,t,n){this.session=e,this.hints=t,this.signInResolver=n}}function Ot(e,t){var n;const r=(0,i.getModularInstance)(e),o=t;return _(t.customData.operationType,r,"argument-error"),_(null===(n=o.customData._serverResponse)||void 0===n?void 0:n.mfaPendingCredential,r,"argument-error"),Mt._fromError(r,o)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{static _fromUser(e){return new Dt(e)}async getSession(){return Lt._fromIdtoken(await this.user.getIdToken(),this.user.auth)}async enroll(e,t){const n=e,i=await this.getSession(),r=await G(this.user,n._process(this.user.auth,i,t));return await this.user._updateTokensIfNecessary(r),this.user.reload()}async unenroll(e){const t="string"==typeof e?e:e.uid,n=await this.user.getIdToken(),i=await G(this.user,(r=this.user.auth,o={idToken:n,mfaEnrollmentId:t},P(r,"POST","/v2/accounts/mfaEnrollment:withdraw",D(r,o))));var r,o;this.enrolledFactors=this.enrolledFactors.filter((({uid:e})=>e!==t)),await this.user._updateTokensIfNecessary(i);try{await this.user.reload()}catch(e){if("auth/user-token-expired"!==(null==e?void 0:e.code))throw e}}constructor(e){this.user=e,this.enrolledFactors=[],e._onReload((t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map((t=>it._fromServerResponse(e.auth,t))))}))}}const Pt=new WeakMap;function Ft(e){const t=(0,i.getModularInstance)(e);return Pt.has(t)||Pt.set(t,Dt._fromUser(t)),Pt.get(t)}const Bt="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{_isAvailable(){try{return this.storage?(this.storage.setItem(Bt,"1"),this.storage.removeItem(Bt),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}constructor(e,t){this.storageRetriever=e,this.type=t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt extends Ut{forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),i=this.localCache[t];n!==i&&e(t,i,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const i=this.storage.getItem(n);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},o=this.storage.getItem(n);(0,i.isIE)()&&10===document.documentMode&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,10):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=(0,i.getUA)();return re(e)||le(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=he(),this._shouldAllowMigration=!0}}jt.type="LOCAL";const $t=jt;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt extends Ut{_addListener(e,t){}_removeListener(e,t){}constructor(){super((()=>window.sessionStorage),"SESSION")}}Vt.type="SESSION";const Ht=Vt;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Wt{static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new Wt(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:i,data:r}=t.data,o=this.handlersMap[i];if(!(null==o?void 0:o.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const s=Array.from(o).map((async e=>e(t.origin,r))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(s);t.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Gt(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Wt.receivers=[];class zt{removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const i="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise(((s,a)=>{const u=Gt("",20);i.port1.start();const c=setTimeout((()=>{a(new Error("unsupported_event"))}),n);o={messageChannel:i,onMessage(e){const t=e;if(t.data.eventId===u)switch(t.data.status){case"ack":clearTimeout(c),r=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(r),s(t.data.response);break;default:clearTimeout(c),clearTimeout(r),a(new Error("invalid_response"))}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[i.port2])})).finally((()=>{o&&this.removeMessageHandler(o)}))}constructor(e){this.target=e,this.handlers=new Set}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kt(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function qt(){return void 0!==Kt().WorkerGlobalScope&&"function"==typeof Kt().importScripts}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Yt="firebaseLocalStorageDb",Zt="firebaseLocalStorage",Xt="fbase_key";class Jt{toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}constructor(e){this.request=e}}function Qt(e,t){return e.transaction([Zt],t?"readwrite":"readonly").objectStore(Zt)}function en(){const e=indexedDB.open(Yt,1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(Zt,{keyPath:Xt})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(Zt)?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(Yt);return new Jt(e).toPromise()}(),t(await en()))}))}))}async function tn(e,t,n){const i=Qt(e,!0).put({[Xt]:t,value:n});return new Jt(i).toPromise()}function nn(e,t){const n=Qt(e,!0).delete(t);return new Jt(n).toPromise()}class rn{async _openDb(){return this.db||(this.db=await en()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return qt()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Wt._getInstance(qt()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new zt(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await en();return await tn(e,Bt,"1"),await nn(e,Bt),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>tn(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=Qt(e,!1).get(t),i=await new Jt(n).toPromise();return void 0===i?null:i.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>nn(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=Qt(e,!1).getAll();return new Jt(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:i,value:r}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),t.push(i));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}}rn.type="LOCAL";const on=rn;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sn(e){return new Promise(((t,n)=>{const i=document.createElement("script");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var r,o;i.setAttribute("src",e),i.onload=t,i.onerror=e=>{const t=y("internal-error");t.customData=e,n(t)},i.type="text/javascript",i.charset="UTF-8",(null!==(o=null===(r=document.getElementsByTagName("head"))||void 0===r?void 0:r[0])&&void 0!==o?o:document).appendChild(i)}))}function an(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const un=1e12;class cn{render(e,t){const n=this.counter;return this._widgets.set(n,new ln(e,this.auth.name,t||{})),this.counter++,n}reset(e){var t;const n=e||un;null===(t=this._widgets.get(n))||void 0===t||t.delete(),this._widgets.delete(n)}getResponse(e){var t;const n=e||un;return(null===(t=this._widgets.get(n))||void 0===t?void 0:t.getResponse())||""}async execute(e){var t;const n=e||un;return null===(t=this._widgets.get(n))||void 0===t||t.execute(),""}constructor(e){this.auth=e,this.counter=un,this._widgets=new Map}}class ln{getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),this.timerId||(this.timerId=window.setTimeout((()=>{this.responseToken=function(e){const t=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let i=0;i<e;i++)t.push(n.charAt(Math.floor(Math.random()*n.length)));return t.join("")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch(e){}this.timerId=window.setTimeout((()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch(e){}this.isVisible&&this.execute()}),6e4)}),500))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}constructor(e,t,n){this.params=n,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i="string"==typeof e?document.getElementById(e):e;_(i,"argument-error",{appName:t}),this.container=i,this.isVisible="invisible"!==this.params.size,this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}}const dn=an("rcb"),hn=new N(3e4,6e4);class fn{load(e,t=""){return _(function(e){return e.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(e)}(t),e,"argument-error"),this.shouldResolveImmediately(t)?Promise.resolve(Kt().grecaptcha):new Promise(((n,r)=>{const o=Kt().setTimeout((()=>{r(y(e,"network-request-failed"))}),hn.get());Kt()[dn]=()=>{Kt().clearTimeout(o),delete Kt()[dn];const i=Kt().grecaptcha;if(!i)return void r(y(e,"internal-error"));const s=i.render;i.render=(e,t)=>{const n=s(e,t);return this.counter++,n},this.hostLanguage=t,n(i)};sn(`https://www.google.com/recaptcha/api.js??${(0,i.querystring)({onload:dn,render:"explicit",hl:t})}`).catch((()=>{clearTimeout(o),r(y(e,"internal-error"))}))}))}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!(null===(t=Kt().grecaptcha)||void 0===t?void 0:t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(null===(e=Kt().grecaptcha)||void 0===e?void 0:e.render)}}class pn{async load(e){return new cn(e)}clearedOneInstance(){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mn="recaptcha",gn={theme:"light",type:"image"};class vn{async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),n=t.getResponse(e);return n||new Promise((n=>{const i=e=>{e&&(this.tokenChangeListeners.delete(i),n(e))};this.tokenChangeListeners.add(i),this.isInvisible&&t.execute(e)}))}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise||(this.renderPromise=this.makeRenderPromise().catch((e=>{throw this.renderPromise=null,e}))),this.renderPromise}_reset(){this.assertNotDestroyed(),null!==this.widgetId&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach((e=>{this.container.removeChild(e)}))}validateStartingState(){_(!this.parameters.sitekey,this.auth,"argument-error"),_(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),_("undefined"!=typeof document,this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach((e=>e(t))),"function"==typeof e)e(t);else if("string"==typeof e){const n=Kt()[e];"function"==typeof n&&n(t)}}}assertNotDestroyed(){_(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){_(T()&&!qt(),this.auth,"internal-error"),await function(){let e=null;return new Promise((t=>{"complete"!==document.readyState?(e=()=>t(),window.addEventListener("load",e)):t()})).catch((t=>{throw e&&window.removeEventListener("load",e),t}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e){return(await P(e,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}(this.auth);_(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return _(this.recaptcha,this.auth,"internal-error"),this.recaptcha}constructor(e,t=Object.assign({},gn),n){this.parameters=t,this.type=mn,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=ge(n),this.isInvisible="invisible"===this.parameters.size,_("undefined"!=typeof document,this.auth,"operation-not-supported-in-this-environment");const i="string"==typeof e?document.getElementById(e):e;_(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new pn:new fn,this.validateStartingState()}}class yn{confirm(e){const t=Ce._fromVerification(this.verificationId,e);return this.onConfirmation(t)}constructor(e,t){this.verificationId=e,this.onConfirmation=t}}async function bn(e,t,n){const r=ge(e),o=await _n(r,t,(0,i.getModularInstance)(n));return new yn(o,(e=>Qe(r,e)))}async function wn(e,t,n){const r=(0,i.getModularInstance)(e);await Ze(!1,r,"phone");const o=await _n(r.auth,t,(0,i.getModularInstance)(n));return new yn(o,(e=>et(r,e)))}async function xn(e,t,n){const r=(0,i.getModularInstance)(e),o=await _n(r.auth,t,(0,i.getModularInstance)(n));return new yn(o,(e=>tt(r,e)))}async function _n(e,t,n){var i;const r=await n.verify();try{let o;if(_("string"==typeof r,e,"argument-error"),_(n.type===mn,e,"argument-error"),o="string"==typeof t?{phoneNumber:t}:t,"session"in o){const t=o.session;if("phoneNumber"in o){_("enroll"===t.type,e,"internal-error");const n=await function(e,t){return P(e,"POST","/v2/accounts/mfaEnrollment:start",D(e,t))}(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,recaptchaToken:r}});return n.phoneSessionInfo.sessionInfo}{_("signin"===t.type,e,"internal-error");const n=(null===(i=o.multiFactorHint)||void 0===i?void 0:i.uid)||o.multiFactorUid;_(n,e,"missing-multi-factor-info");const s=await function(e,t){return P(e,"POST","/v2/accounts/mfaSignIn:start",D(e,t))}(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:r}});return s.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await async function(e,t){return P(e,"POST","/v1/accounts:sendVerificationCode",D(e,t))}(e,{phoneNumber:o.phoneNumber,recaptchaToken:r});return t}}finally{n._reset()}}async function En(e,t){await Ye((0,i.getModularInstance)(e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{verifyPhoneNumber(e,t){return _n(this.auth,e,(0,i.getModularInstance)(t))}static credential(e,t){return Ce._fromVerification(e,t)}static credentialFromResult(e){const t=e;return In.credentialFromTaggedObject(t)}static credentialFromError(e){return In.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?Ce._fromTokenResponse(t,n):null}constructor(e){this.providerId=In.PROVIDER_ID,this.auth=ge(e)}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Sn(e,t){return t?A(t):(_(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */In.PROVIDER_ID="phone",In.PHONE_SIGN_IN_METHOD="phone";class An extends xe{_getIdTokenResponse(e){return Ae(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ae(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ae(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}constructor(e){super("custom","custom"),this.params=e}}function kn(e){return Je(e.auth,new An(e),e.bypassAuthState)}function Tn(e){const{auth:t,user:n}=e;return _(n,t,"internal-error"),Xe(n,new An(e),e.bypassAuthState)}async function Cn(e){const{auth:t,user:n}=e;return _(n,t,"internal-error"),Ye(n,new An(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:i,tenantId:r,error:o,type:s}=e;if(o)return void this.reject(o);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return kn;case"linkViaPopup":case"linkViaRedirect":return Cn;case"reauthViaPopup":case"reauthViaRedirect":return Tn;default:v(this.auth,"internal-error")}}resolve(e){I(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){I(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}constructor(e,t,n,i,r=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rn=new N(2e3,1e4);async function Ln(e,t,n){const i=ge(e);w(e,t,Le);const r=Sn(i,n);return new Dn(i,"signInViaPopup",t,r).executeNotNull()}async function Mn(e,t,n){const r=(0,i.getModularInstance)(e);w(r.auth,t,Le);const o=Sn(r.auth,n);return new Dn(r.auth,"reauthViaPopup",t,o,r).executeNotNull()}async function On(e,t,n){const r=(0,i.getModularInstance)(e);w(r.auth,t,Le);const o=Sn(r.auth,n);return new Dn(r.auth,"linkViaPopup",t,o,r).executeNotNull()}class Dn extends Nn{async executeNotNull(){const e=await this.execute();return _(e,this.auth,"internal-error"),e}async onExecution(){I(1===this.filter.length,"Popup operations only handle one event");const e=Gt();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(y(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(y(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Dn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(y(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,Rn.get())};e()}constructor(e,t,n,i,r){super(e,t,i,r),this.provider=n,this.authWindow=null,this.pollId=null,Dn.currentPopupAction&&Dn.currentPopupAction.cancel(),Dn.currentPopupAction=this}}Dn.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Pn=new Map;class Fn extends Nn{async execute(){let e=Pn.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=Vn(t),i=$n(e);if(!await i._isAvailable())return!1;const r="true"===await i._get(n);return await i._remove(n),r}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}Pn.set(this.auth._key(),e)}return this.bypassAuthState||Pn.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}}async function Bn(e,t){return $n(e)._set(Vn(t),"true")}function Un(){Pn.clear()}function jn(e,t){Pn.set(e._key(),t)}function $n(e){return A(e._redirectPersistence)}function Vn(e){return ee("pendingRedirect",e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hn(e,t,n){return async function(e,t,n){const i=ge(e);w(e,t,Le);const r=Sn(i,n);return await Bn(r,i),r._openRedirect(i,t,"signInViaRedirect")}(e,t,n)}function Wn(e,t,n){return async function(e,t,n){const r=(0,i.getModularInstance)(e);w(r.auth,t,Le);const o=Sn(r.auth,n);await Bn(o,r.auth);const s=await qn(r);return o._openRedirect(r.auth,t,"reauthViaRedirect",s)}(e,t,n)}function Gn(e,t,n){return async function(e,t,n){const r=(0,i.getModularInstance)(e);w(r.auth,t,Le);const o=Sn(r.auth,n);await Ze(!1,r,t.providerId),await Bn(o,r.auth);const s=await qn(r);return o._openRedirect(r.auth,t,"linkViaRedirect",s)}(e,t,n)}async function zn(e,t){return await ge(e)._initializationPromise,Kn(e,t,!1)}async function Kn(e,t,n=!1){const i=ge(e),r=Sn(i,t),o=new Fn(i,r,n),s=await o.execute();return s&&!n&&(delete s.user._redirectEventId,await i._persistUserIfCurrent(s.user),await i._setRedirectUser(null,t)),s}async function qn(e){const t=Gt(`${e.uid}:::`);return e._redirectEventId=t,await e.auth._setRedirectUser(e),await e.auth._persistUserIfCurrent(e),t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Xn(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Xn(e)){const i=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(y(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Zn(e))}saveEventToCache(e){this.cachedEventUids.add(Zn(e)),this.lastProcessedEventTime=Date.now()}constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}}function Zn(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Xn({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}async function Jn(e,t={}){return P(e,"GET","/v1/projects",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qn=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ei=/^https?/;function ti(e){const t=k(),{protocol:n,hostname:i}=new URL(t);if(e.startsWith("chrome-extension://")){const r=new URL(e);return""===r.hostname&&""===i?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&r.hostname===i}if(!ei.test(n))return!1;if(Qn.test(e))return i===e;const r=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ni=new N(3e4,6e4);function ii(){const e=Kt().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}let ri=null;function oi(e){return ri=ri||function(e){return new Promise(((t,n)=>{var i,r,o;function s(){ii(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{ii(),n(y(e,"network-request-failed"))},timeout:ni.get()})}if(null===(r=null===(i=Kt().gapi)||void 0===i?void 0:i.iframes)||void 0===r?void 0:r.Iframe)t(gapi.iframes.getContext());else{if(!(null===(o=Kt().gapi)||void 0===o?void 0:o.load)){const t=an("iframefcb");return Kt()[t]=()=>{gapi.load?s():n(y(e,"network-request-failed"))},sn(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}s()}})).catch((e=>{throw ri=null,e}))}(e),ri}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const si=new N(5e3,15e3),ai={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ui=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ci(e){const t=e.config;_(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?R(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,o={apiKey:t.apiKey,appName:e.name,v:r.SDK_VERSION},s=ui.get(e.config.apiHost);s&&(o.eid=s);const a=e._getFrameworks();return a.length&&(o.fw=a.join(",")),`${n}?${(0,i.querystring)(o).slice(1)}`}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const li={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class di{close(){if(this.window)try{this.window.close()}catch(e){}}constructor(e){this.window=e,this.associatedEvent=null}}function hi(e,t,n,r=500,o=600){const s=Math.max((window.screen.availHeight-o)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let u="";const c=Object.assign(Object.assign({},li),{width:r.toString(),height:o.toString(),top:s,left:a}),l=(0,i.getUA)().toLowerCase();n&&(u=oe(l)?"_blank":n),ie(l)&&(t=t||"http://localhost",c.scrollbars="yes");const d=Object.entries(c).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=(0,i.getUA)()){var t;return le(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(l)&&"_self"!==u)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t||"",u),new di(null);const h=window.open(t||"",u,d);_(h,e,"popup-blocked");try{h.focus()}catch(e){}return new di(h)}const fi="emulator/auth/handler";function pi(e,t,n,o,s,a){_(e.config.authDomain,e,"auth-domain-config-required"),_(e.config.apiKey,e,"invalid-api-key");const u={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:o,v:r.SDK_VERSION,eventId:s};if(t instanceof Le){t.setDefaultLanguage(e.languageCode),u.providerId=t.providerId||"",(0,i.isEmpty)(t.getCustomParameters())||(u.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))u[e]=t}if(t instanceof Me){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(u.scopes=e.join(","))}e.tenantId&&(u.tid=e.tenantId);const c=u;for(const e of Object.keys(c))void 0===c[e]&&delete c[e];return`${function({config:e}){return e.emulator?R(e,fi):`https://${e.authDomain}/__/auth/handler`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)}?${(0,i.querystring)(c).slice(1)}`}const mi="webStorageSupport";const gi=class{async _openPopup(e,t,n,i){var r;I(null===(r=this.eventManagers[e._key()])||void 0===r?void 0:r.manager,"_initialize() not called before _openPopup()");return hi(e,pi(e,t,n,k(),i),Gt())}async _openRedirect(e,t,n,i){var r;return await this._originValidation(e),r=pi(e,t,n,k(),i),Kt().location.href=r,new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(I(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await async function(e){const t=await oi(e),n=Kt().gapi;return _(n,e,"internal-error"),t.open({where:document.body,url:ci(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ai,dontclear:!0},(t=>new Promise((async(n,i)=>{await t.restyle({setHideOnLeave:!1});const r=y(e,"network-request-failed"),o=Kt().setTimeout((()=>{i(r)}),si.get());function s(){Kt().clearTimeout(o),n(t)}t.ping(s).then(s,(()=>{i(r)}))}))))}(e),n=new Yn(e);return t.register("authEvent",(t=>{_(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(mi,{type:mi},(n=>{var i;const r=null===(i=null==n?void 0:n[0])||void 0===i?void 0:i.webStorageSupport;void 0!==r&&t(!!r),v(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=async function(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Jn(e);for(const e of t)try{if(ti(e))return}catch(e){}v(e,"unauthorized-domain")}(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return he()||re()||le()}constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ht,this._completeRedirectFn=Kn,this._overrideRedirectResult=jn}};class vi extends class{_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return E("unexpected MultiFactorSessionType")}}constructor(e){this.factorId=e}}{static _fromCredential(e){return new vi(e)}_finalizeEnroll(e,t,n){return function(e,t){return P(e,"POST","/v2/accounts/mfaEnrollment:finalize",D(e,t))}(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return function(e,t){return P(e,"POST","/v2/accounts/mfaSignIn:finalize",D(e,t))}(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}constructor(e){super("phone"),this.credential=e}}class yi{static assertion(e){return vi._fromCredential(e)}constructor(){}}yi.FACTOR_ID="phone";var bi="@firebase/auth",wi="0.21.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xi{getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){_(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}constructor(e){this.auth=e,this.internalListeners=new Map}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const _i=(0,i.getExperimentalSetting)("authIdTokenMaxAge")||300;let Ei=null;function Ii(e=(0,r.getApp)()){const t=(0,r._getProvider)(e,"auth");if(t.isInitialized())return t.getImmediate();const n=function(e,t){const n=(0,r._getProvider)(e,"auth");if(n.isInitialized()){const e=n.getImmediate(),r=n.getOptions();if((0,i.deepEqual)(r,null!=t?t:{}))return e;v(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:gi,persistence:[on,$t,Ht]}),o=(0,i.getExperimentalSetting)("authTokenSyncURL");if(o){const e=(s=o,async e=>{const t=e&&await e.getIdTokenResult(),n=t&&((new Date).getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>_i)return;const i=null==t?void 0:t.token;Ei!==i&&(Ei=i,await fetch(s,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))});!function(e,t,n){(0,i.getModularInstance)(e).beforeAuthStateChanged(t,n)}(n,e,(()=>e(n.currentUser))),function(e,t,n,r){(0,i.getModularInstance)(e).onIdTokenChanged(t,n,r)}(n,(t=>e(t)))}var s;const a=(0,i.getDefaultEmulatorHost)("auth");return a&&ye(n,`http://${a}`),n}var Si;Si="Browser",(0,r._registerComponent)(new(0,u.Component)("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:r,authDomain:o}=n.options;return((e,n)=>{_(r&&!r.includes(":"),"invalid-api-key",{appName:e.name}),_(!(null==o?void 0:o.includes(":")),"argument-error",{appName:e.name});const i={apiKey:r,authDomain:o,clientPlatform:Si,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:fe(Si)},s=new me(e,n,i);return function(e,t){const n=(null==t?void 0:t.persistence)||[],i=(Array.isArray(n)?n:[n]).map(A);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(i,null==t?void 0:t.popupRedirectResolver)}(s,t),s})(n,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),(0,r._registerComponent)(new(0,u.Component)("auth-internal",(e=>{const t=ge(e.getProvider("auth").getImmediate());return new xi(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,r.registerVersion)(bi,wi,function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(Si)),(0,r.registerVersion)(bi,wi,"esm2017")})),o.register("l73V3",(function(t,n){e(t.exports,"__rest",(function(){return i}));function i(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n}Object.create;Object.create})),o.register("ftYLF",(function(t,n){e(t.exports,"getFirestore",(function(){return o("3PjDZ").getFirestore})),e(t.exports,"doc",(function(){return o("3PjDZ").doc})),e(t.exports,"serverTimestamp",(function(){return o("3PjDZ").serverTimestamp})),e(t.exports,"setDoc",(function(){return o("3PjDZ").setDoc})),e(t.exports,"getDoc",(function(){return o("3PjDZ").getDoc})),o("3PjDZ")})),o.register("3PjDZ",(function(t,n){e(t.exports,"doc",(function(){return jo})),e(t.exports,"getFirestore",(function(){return Jo})),e(t.exports,"getDoc",(function(){return Ns})),e(t.exports,"setDoc",(function(){return Ls})),e(t.exports,"serverTimestamp",(function(){return Ds}));var i=o("ix4Jr"),r=o("4a6xH"),s=o("7vF8m"),a=o("ffjl9"),u=o("lW9Fu");o("4TNnu");const c="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l{isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}constructor(e){this.uid=e}}l.UNAUTHENTICATED=new l(null),l.GOOGLE_CREDENTIALS=new l("google-credentials-uid"),l.FIRST_PARTY=new l("first-party-uid"),l.MOCK_USER=new l("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let d="9.15.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h=new(0,s.Logger)("@firebase/firestore");function f(){return h.logLevel}function p(e,...t){if(h.logLevel<=s.LogLevel.DEBUG){const n=t.map(v);h.debug(`Firestore (${d}): ${e}`,...n)}}function m(e,...t){if(h.logLevel<=s.LogLevel.ERROR){const n=t.map(v);h.error(`Firestore (${d}): ${e}`,...n)}}function g(e,...t){if(h.logLevel<=s.LogLevel.WARN){const n=t.map(v);h.warn(`Firestore (${d}): ${e}`,...n)}}function v(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y(e="Unexpected state"){const t=`FIRESTORE (${d}) INTERNAL ASSERTION FAILED: `+e;throw m(t),new Error(t)}function b(e,t){e||y()}function w(e,t){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class _ extends a.FirebaseError{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class S{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(l.UNAUTHENTICATED)))}shutdown(){}}class A{getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}constructor(e){this.token=e,this.changeListener=null}}class k{start(e,t){let n=this.i;const i=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let r=new E;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new E,e.enqueueRetryable((()=>i(this.currentUser)))};const o=()=>{const t=r;e.enqueueRetryable((async()=>{await t.promise,await i(this.currentUser)}))},s=e=>{p("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit((e=>s(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?s(e):(p("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new E)}}),0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(p("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(b("string"==typeof t.accessToken),new I(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return b(null===e||"string"==typeof e),new l(e)}constructor(e){this.t=e,this.currentUser=l.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}}class T{I(){return this.g?this.g():(b(!("object"!=typeof this.h||null===this.h||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}constructor(e,t,n,i){this.h=e,this.l=t,this.m=n,this.g=i,this.type="FirstParty",this.user=l.FIRST_PARTY,this.p=new Map}}class C{getToken(){return Promise.resolve(new T(this.h,this.l,this.m,this.g))}start(e,t){e.enqueueRetryable((()=>t(l.FIRST_PARTY)))}shutdown(){}invalidateToken(){}constructor(e,t,n,i){this.h=e,this.l=t,this.m=n,this.g=i}}class N{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class R{start(e,t){const n=e=>{null!=e.error&&p("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.A;return this.A=e.token,p("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable((()=>n(t)))};const i=e=>{p("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.T.onInit((e=>i(e))),setTimeout((()=>{if(!this.appCheck){const e=this.T.getImmediate({optional:!0});e?i(e):p("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(b("string"==typeof e.token),this.A=e.token,new N(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function L(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let t=0;t<e;t++)n[t]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const i=L(40);for(let r=0;r<i.length;++r)n.length<20&&i[r]<t&&(n+=e.charAt(i[r]%e.length))}return n}}function O(e,t){return e<t?-1:e>t?1:0}function D(e,t,n){return e.length===t.length&&e.every(((e,i)=>n(e,t[i])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class P{static now(){return P.fromMillis(Date.now())}static fromDate(e){return P.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new P(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?O(this.nanoseconds,e.nanoseconds):O(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new _(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new _(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new _(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new _(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{static fromTimestamp(e){return new F(e)}static min(){return new F(new P(0,0))}static max(){return new F(new P(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}constructor(e){this.timestamp=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{get length(){return this.len}isEqual(e){return 0===B.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof B?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let i=0;i<n;i++){const n=e.get(i),r=t.get(i);if(n<r)return-1;if(n>r)return 1}return e.length<t.length?-1:e.length>t.length?1:0}constructor(e,t,n){void 0===t?t=0:t>e.length&&y(),void 0===n?n=e.length-t:n>e.length-t&&y(),this.segments=e,this.offset=t,this.len=n}}class U extends B{construct(e,t,n){return new U(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new _(x.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new U(t)}static emptyPath(){return new U([])}}const j=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class $ extends B{construct(e,t,n){return new $(e,t,n)}static isValidIdentifier(e){return j.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),$.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new $(["__name__"])}static fromServerFormat(e){const t=[];let n="",i=0;const r=()=>{if(0===n.length)throw new _(x.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let o=!1;for(;i<e.length;){const t=e[i];if("\\"===t){if(i+1===e.length)throw new _(x.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[i+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new _(x.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,i+=2}else"`"===t?(o=!o,i++):"."!==t||o?(n+=t,i++):(r(),i++)}if(r(),o)throw new _(x.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new $(t)}static emptyPath(){return new $([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{static fromPath(e){return new V(U.fromString(e))}static fromName(e){return new V(U.fromString(e).popFirst(5))}static empty(){return new V(U.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===U.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return U.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new V(new U(e.slice()))}constructor(e){this.path=e}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e,t,n,i){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=i}}H.UNKNOWN_ID=-1;function W(e,t){const n=e.toTimestamp().seconds,i=e.toTimestamp().nanoseconds+1,r=F.fromTimestamp(1e9===i?new P(n+1,0):new P(n,i));return new z(r,V.empty(),t)}function G(e){return new z(e.readTime,e.key,-1)}class z{static min(){return new z(F.min(),V.empty(),-1)}static max(){return new z(F.max(),V.empty(),-1)}constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}}function K(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=V.comparator(e.documentKey,t.documentKey),0!==n?n:O(e.largestBatchId,t.largestBatchId))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Y{addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}constructor(){this.onCommittedListeners=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Z(e){if(e.code!==x.FAILED_PRECONDITION||e.message!==q)throw e;p("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&y(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new X(((n,i)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,i)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,i)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof X?t:X.resolve(t)}catch(e){return X.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):X.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):X.reject(t)}static resolve(e){return new X(((t,n)=>{t(e)}))}static reject(e){return new X(((t,n)=>{n(e)}))}static waitFor(e){return new X(((t,n)=>{let i=0,r=0,o=!1;e.forEach((e=>{++i,e.next((()=>{++r,o&&r===i&&t()}),(e=>n(e)))})),o=!0,r===i&&t()}))}static or(e){let t=X.resolve(!1);for(const n of e)t=t.next((e=>e?X.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,i)=>{n.push(t.call(this,e,i))})),this.waitFor(n)}static mapArray(e,t){return new X(((n,i)=>{const r=e.length,o=new Array(r);let s=0;for(let a=0;a<r;a++){const u=a;t(e[u]).next((e=>{o[u]=e,++s,s===r&&n(o)}),(e=>i(e)))}}))}static doWhile(e,t){return new X(((n,i)=>{const r=()=>{!0===e()?t().next((()=>{r()}),i):n()};r()}))}constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(e){return"IndexedDbTransactionError"===e.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Q{ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ut(e),this.ct=e=>t.writeSequenceNumber(e))}}Q.at=-1;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ee{constructor(e,t,n,i,r,o,s,a){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=s,this.useFetchStreams=a}}class te{static empty(){return new te("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof te&&e.projectId===this.projectId&&e.database===this.database}constructor(e,t){this.projectId=e,this.database=t||"(default)"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ne(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function ie(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function re(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oe(e){return null==e}function se(e){return 0===e&&1/e==-1/0}function ae(e){return"number"==typeof e&&Number.isInteger(e)&&!se(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ue=Symbol.iterator;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{static fromBase64String(e){const t=atob(e);return new ce(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new ce(t)}[ue](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){var e;return e=this.binaryString,btoa(e)}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return O(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}constructor(e){this.binaryString=e}}ce.EMPTY_BYTE_STRING=new ce("");const le=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function de(e){if(b(!!e),"string"==typeof e){let t=0;const n=le.exec(e);if(b(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const i=new Date(e);return{seconds:Math.floor(i.getTime()/1e3),nanos:t}}return{seconds:he(e.seconds),nanos:he(e.nanos)}}function he(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function fe(e){return"string"==typeof e?ce.fromBase64String(e):ce.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pe(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function me(e){const t=e.mapValue.fields.__previous_value__;return pe(t)?me(t):t}function ge(e){const t=de(e.mapValue.fields.__local_write_time__.timestampValue);return new P(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ve={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ye(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?pe(e)?4:Re(e)?9007199254740991:10:y()}function be(e,t){if(e===t)return!0;const n=ye(e);if(n!==ye(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return ge(e).isEqual(ge(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=de(e.timestampValue),i=de(t.timestampValue);return n.seconds===i.seconds&&n.nanos===i.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return i=t,fe(e.bytesValue).isEqual(fe(i.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return he(e.geoPointValue.latitude)===he(t.geoPointValue.latitude)&&he(e.geoPointValue.longitude)===he(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return he(e.integerValue)===he(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=he(e.doubleValue),i=he(t.doubleValue);return n===i?se(n)===se(i):isNaN(n)&&isNaN(i)}return!1}(e,t);case 9:return D(e.arrayValue.values||[],t.arrayValue.values||[],be);case 10:return function(e,t){const n=e.mapValue.fields||{},i=t.mapValue.fields||{};if(ne(n)!==ne(i))return!1;for(const e in n)if(n.hasOwnProperty(e)&&(void 0===i[e]||!be(n[e],i[e])))return!1;return!0}(e,t);default:return y()}var i}function we(e,t){return void 0!==(e.values||[]).find((e=>be(e,t)))}function xe(e,t){if(e===t)return 0;const n=ye(e),i=ye(t);if(n!==i)return O(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return O(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=he(e.integerValue||e.doubleValue),i=he(t.integerValue||t.doubleValue);return n<i?-1:n>i?1:n===i?0:isNaN(n)?isNaN(i)?0:-1:1}(e,t);case 3:return _e(e.timestampValue,t.timestampValue);case 4:return _e(ge(e),ge(t));case 5:return O(e.stringValue,t.stringValue);case 6:return function(e,t){const n=fe(e),i=fe(t);return n.compareTo(i)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),i=t.split("/");for(let e=0;e<n.length&&e<i.length;e++){const t=O(n[e],i[e]);if(0!==t)return t}return O(n.length,i.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=O(he(e.latitude),he(t.latitude));return 0!==n?n:O(he(e.longitude),he(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],i=t.values||[];for(let e=0;e<n.length&&e<i.length;++e){const t=xe(n[e],i[e]);if(t)return t}return O(n.length,i.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===ve.mapValue&&t===ve.mapValue)return 0;if(e===ve.mapValue)return 1;if(t===ve.mapValue)return-1;const n=e.fields||{},i=Object.keys(n),r=t.fields||{},o=Object.keys(r);i.sort(),o.sort();for(let e=0;e<i.length&&e<o.length;++e){const t=O(i[e],o[e]);if(0!==t)return t;const s=xe(n[i[e]],r[o[e]]);if(0!==s)return s}return O(i.length,o.length)}(e.mapValue,t.mapValue);default:throw y()}}function _e(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return O(e,t);const n=de(e),i=de(t),r=O(n.seconds,i.seconds);return 0!==r?r:O(n.nanos,i.nanos)}function Ee(e){return Ie(e)}function Ie(e){var t,n;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=de(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?fe(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,V.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(const i of e.values||[])n?n=!1:t+=",",t+=Ie(i);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",i=!0;for(const r of t)i?i=!1:n+=",",n+=`${r}:${Ie(e.fields[r])}`;return n+"}"}(e.mapValue):y()}function Se(e){return!!e&&"integerValue"in e}function Ae(e){return!!e&&"arrayValue"in e}function ke(e){return!!e&&"nullValue"in e}function Te(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Ce(e){return!!e&&"mapValue"in e}function Ne(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return ie(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=Ne(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Ne(e.arrayValue.values[n]);return t}return Object.assign({},e)}function Re(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Le{constructor(e,t){this.position=e,this.inclusive=t}}function Me(e,t,n){let i=0;for(let r=0;r<e.position.length;r++){const o=t[r],s=e.position[r];if(i=o.field.isKeyField()?V.comparator(V.fromName(s.referenceValue),n.key):xe(s,n.data.field(o.field)),"desc"===o.dir&&(i*=-1),0!==i)break}return i}function Oe(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!be(e.position[n],t.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{}class Pe extends De{static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new We(e,t,n):"array-contains"===t?new qe(e,n):"in"===t?new Ye(e,n):"not-in"===t?new Ze(e,n):"array-contains-any"===t?new Xe(e,n):new Pe(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new Ge(e,n):new ze(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(xe(t,this.value)):null!==t&&ye(this.value)===ye(t)&&this.matchesComparison(xe(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return y()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}}class Fe extends De{static create(e,t){return new Fe(e,t)}matches(e){return Be(this)?void 0===this.filters.find((t=>!t.matches(e))):void 0!==this.filters.find((t=>t.matches(e)))}getFlattenedFilters(){return null!==this.ht||(this.ht=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt((e=>e.isInequality()));return null!==e?e.field:null}lt(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}constructor(e,t){super(),this.filters=e,this.op=t,this.ht=null}}function Be(e){return"and"===e.op}function Ue(e){return je(e)&&Be(e)}function je(e){for(const t of e.filters)if(t instanceof Fe)return!1;return!0}function $e(e){if(e instanceof Pe)return e.field.canonicalString()+e.op.toString()+Ee(e.value);{const t=e.filters.map((e=>$e(e))).join(",");return`${e.op}(${t})`}}function Ve(e,t){return e instanceof Pe?(n=e,(i=t)instanceof Pe&&n.op===i.op&&n.field.isEqual(i.field)&&be(n.value,i.value)):e instanceof Fe?function(e,t){return t instanceof Fe&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce(((e,n,i)=>e&&Ve(n,t.filters[i])),!0)}(e,t):void y();var n,i}function He(e){return e instanceof Pe?`${(t=e).field.canonicalString()} ${t.op} ${Ee(t.value)}`:e instanceof Fe?function(e){return e.op.toString()+" {"+e.getFilters().map(He).join(" ,")+"}"}(e):"Filter";var t}class We extends Pe{matches(e){const t=V.comparator(e.key,this.key);return this.matchesComparison(t)}constructor(e,t,n){super(e,t,n),this.key=V.fromName(n.referenceValue)}}class Ge extends Pe{matches(e){return this.keys.some((t=>t.isEqual(e.key)))}constructor(e,t){super(e,"in",t),this.keys=Ke("in",t)}}class ze extends Pe{matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}constructor(e,t){super(e,"not-in",t),this.keys=Ke("not-in",t)}}function Ke(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>V.fromName(e.referenceValue)))}class qe extends Pe{matches(e){const t=e.data.field(this.field);return Ae(t)&&we(t.arrayValue,this.value)}constructor(e,t){super(e,"array-contains",t)}}class Ye extends Pe{matches(e){const t=e.data.field(this.field);return null!==t&&we(this.value.arrayValue,t)}constructor(e,t){super(e,"in",t)}}class Ze extends Pe{matches(e){if(we(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!we(this.value.arrayValue,t)}constructor(e,t){super(e,"not-in",t)}}class Xe extends Pe{matches(e){const t=e.data.field(this.field);return!(!Ae(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>we(this.value.arrayValue,e)))}constructor(e,t){super(e,"array-contains-any",t)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e,t="asc"){this.field=e,this.dir=t}}function Qe(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{insert(e,t){return new et(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,nt.BLACK,null,null))}remove(e){return new et(this.comparator,this.root.remove(e,this.comparator).copy(null,null,nt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(0===i)return t+n.left.size;i<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new tt(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new tt(this.root,e,this.comparator,!1)}getReverseIterator(){return new tt(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new tt(this.root,e,this.comparator,!0)}constructor(e,t){this.comparator=e,this.root=t||nt.EMPTY}}class tt{getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}constructor(e,t,n,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=t?n(e.key,t):1,t&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(0===r){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}}class nt{copy(e,t,n,i,r){return new nt(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const r=n(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===r?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return nt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===t(e,i.key)){if(i.right.isEmpty())return nt.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,nt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,nt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw y();if(this.right.isRed())throw y();const e=this.left.check();if(e!==this.right.check())throw y();return e+(this.isRed()?0:1)}constructor(e,t,n,i,r){this.key=e,this.value=t,this.color=null!=n?n:nt.RED,this.left=null!=i?i:nt.EMPTY,this.right=null!=r?r:nt.EMPTY,this.size=this.left.size+1+this.right.size}}nt.EMPTY=null,nt.RED=!0,nt.BLACK=!1,nt.EMPTY=new class{get key(){throw y()}get value(){throw y()}get color(){throw y()}get left(){throw y()}get right(){throw y()}copy(e,t,n,i,r){return this}insert(e,t,n){return new nt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}constructor(){this.size=0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class it{has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new rt(this.data.getIterator())}getIteratorFrom(e){return new rt(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof it))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,i=n.getNext().key;if(0!==this.comparator(e,i))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new it(this.comparator);return t.data=e,t}constructor(e){this.comparator=e,this.data=new et(this.comparator)}}class rt{getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}constructor(e){this.iter=e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ot{static empty(){return new ot([])}unionWith(e){let t=new it($.comparator);for(const e of this.fields)t=t.add(e);for(const n of e)t=t.add(n);return new ot(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return D(this.fields,e.fields,((e,t)=>e.isEqual(t)))}constructor(e){this.fields=e,e.sort($.comparator)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{static empty(){return new st({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Ce(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ne(t)}setAll(e){let t=$.emptyPath(),n={},i=[];e.forEach(((e,r)=>{if(!t.isImmediateParentOf(r)){const e=this.getFieldsMap(t);this.applyChanges(e,n,i),n={},i=[],t=r.popLast()}e?n[r.lastSegment()]=Ne(e):i.push(r.lastSegment())}));const r=this.getFieldsMap(t);this.applyChanges(r,n,i)}delete(e){const t=this.field(e.popLast());Ce(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return be(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let i=t.mapValue.fields[e.get(n)];Ce(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,n){ie(t,((t,n)=>e[t]=n));for(const t of n)delete e[t]}clone(){return new st(Ne(this.value))}constructor(e){this.value=e}}function at(e){const t=[];return ie(e.fields,((e,n)=>{const i=new $([e]);if(Ce(n)){const e=at(n.mapValue).fields;if(0===e.length)t.push(i);else for(const n of e)t.push(i.child(n))}else t.push(i)})),new ot(t)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class ut{static newInvalidDocument(e){return new ut(e,0,F.min(),F.min(),F.min(),st.empty(),0)}static newFoundDocument(e,t,n,i){return new ut(e,1,t,F.min(),n,i,0)}static newNoDocument(e,t){return new ut(e,2,t,F.min(),F.min(),st.empty(),0)}static newUnknownDocument(e,t){return new ut(e,3,t,F.min(),F.min(),st.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(F.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=st.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=st.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=F.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof ut&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ut(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}constructor(e,t,n,i,r,o,s){this.key=e,this.documentType=t,this.version=n,this.readTime=i,this.createTime=r,this.data=o,this.documentState=s}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e,t=null,n=[],i=[],r=null,o=null,s=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=i,this.limit=r,this.startAt=o,this.endAt=s,this.ft=null}}function lt(e,t=null,n=[],i=[],r=null,o=null,s=null){return new ct(e,t,n,i,r,o,s)}function dt(e){const t=w(e);if(null===t.ft){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>$e(e))).join(","),e+="|ob:",e+=t.orderBy.map((e=>{return(t=e).field.canonicalString()+t.dir;var t})).join(","),oe(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((e=>Ee(e))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((e=>Ee(e))).join(",")),t.ft=e}return t.ft}function ht(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!Qe(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!Ve(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Oe(e.startAt,t.startAt)&&Oe(e.endAt,t.endAt)}function ft(e){return V.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pt{constructor(e,t=null,n=[],i=[],r=null,o="F",s=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=i,this.limit=r,this.limitType=o,this.startAt=s,this.endAt=a,this.dt=null,this._t=null,this.startAt,this.endAt}}function mt(e,t,n,i,r,o,s,a){return new pt(e,t,n,i,r,o,s,a)}function gt(e){return new pt(e)}function vt(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function yt(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function bt(e){for(const t of e.filters){const e=t.getFirstInequalityField();if(null!==e)return e}return null}function wt(e){return null!==e.collectionGroup}function xt(e){const t=w(e);if(null===t.dt){t.dt=[];const e=bt(t),n=yt(t);if(null!==e&&null===n)e.isKeyField()||t.dt.push(new Je(e)),t.dt.push(new Je($.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.dt.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.dt.push(new Je($.keyField(),e))}}}return t.dt}function _t(e){const t=w(e);if(!t._t)if("F"===t.limitType)t._t=lt(t.path,t.collectionGroup,xt(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const n of xt(t)){const t="desc"===n.dir?"asc":"desc";e.push(new Je(n.field,t))}const n=t.endAt?new Le(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new Le(t.startAt.position,t.startAt.inclusive):null;t._t=lt(t.path,t.collectionGroup,e,t.filters,t.limit,n,i)}return t._t}function Et(e,t,n){return new pt(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function It(e,t){return ht(_t(e),_t(t))&&e.limitType===t.limitType}function St(e){return`${dt(_t(e))}|lt:${e.limitType}`}function At(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>He(e))).join(", ")}]`),oe(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>{return`${(t=e).field.canonicalString()} (${t.dir})`;var t})).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((e=>Ee(e))).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((e=>Ee(e))).join(",")),`Target(${t})`}(_t(e))}; limitType=${e.limitType})`}function kt(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):V.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of xt(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&(i=t,!((n=e).startAt&&!function(e,t,n){const i=Me(e,t,n);return e.inclusive?i<=0:i<0}(n.startAt,xt(n),i)||n.endAt&&!function(e,t,n){const i=Me(e,t,n);return e.inclusive?i>=0:i>0}(n.endAt,xt(n),i)));var n,i}function Tt(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Ct(e){return(t,n)=>{let i=!1;for(const r of xt(e)){const e=Nt(r,t,n);if(0!==e)return e;i=i||r.field.isKeyField()}return 0}}function Nt(e,t,n){const i=e.field.isKeyField()?V.comparator(t.key,n.key):function(e,t,n){const i=t.data.field(e),r=n.data.field(e);return null!==i&&null!==r?xe(i,r):y()}(e.field,t,n);switch(e.dir){case"asc":return i;case"desc":return-1*i;default:return y()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rt(e,t){if(e.wt){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:se(t)?"-0":t}}function Lt(e){return{integerValue:""+e}}function Mt(e,t){return ae(t)?Lt(t):Rt(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(){this._=void 0}}function Dt(e,t,n){return e instanceof Bt?Ut(e,t):e instanceof jt?$t(e,t):n}function Pt(e,t){var n,i;return e instanceof Vt?Se(n=t)||(i=n)&&"doubleValue"in i?t:{integerValue:0}:null}class Ft extends Ot{}class Bt extends Ot{constructor(e){super(),this.elements=e}}function Ut(e,t){const n=Wt(t);for(const t of e.elements)n.some((e=>be(e,t)))||n.push(t);return{arrayValue:{values:n}}}class jt extends Ot{constructor(e){super(),this.elements=e}}function $t(e,t){let n=Wt(t);for(const t of e.elements)n=n.filter((e=>!be(e,t)));return{arrayValue:{values:n}}}class Vt extends Ot{constructor(e,t){super(),this.yt=e,this.gt=t}}function Ht(e){return he(e.integerValue||e.doubleValue)}function Wt(e){return Ae(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e,t){this.field=e,this.transform=t}}class zt{constructor(e,t){this.version=e,this.transformResults=t}}class Kt{static none(){return new Kt}static exists(e){return new Kt(void 0,e)}static updateTime(e){return new Kt(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}constructor(e,t){this.updateTime=e,this.exists=t}}function qt(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class Yt{}function Zt(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new an(e.key,Kt.none()):new tn(e.key,e.data,Kt.none());{const n=e.data,i=st.empty();let r=new it($.comparator);for(let e of t.fields)if(!r.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?i.delete(e):i.set(e,t),r=r.add(e)}return new nn(e.key,i,new ot(r.toArray()),Kt.none())}}function Xt(e,t,n){var i;e instanceof tn?function(e,t,n){const i=e.value.clone(),r=on(e.fieldTransforms,t,n.transformResults);i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):e instanceof nn?function(e,t,n){if(!qt(e.precondition,t))return void t.convertToUnknownDocument(n.version);const i=on(e.fieldTransforms,t,n.transformResults),r=t.data;r.setAll(rn(e)),r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):(i=n,t.convertToNoDocument(i.version).setHasCommittedMutations())}function Jt(e,t,n,i){return e instanceof tn?function(e,t,n,i){if(!qt(e.precondition,t))return n;const r=e.value.clone(),o=sn(e.fieldTransforms,i,t);return r.setAll(o),t.convertToFoundDocument(t.version,r).setHasLocalMutations(),null}(e,t,n,i):e instanceof nn?function(e,t,n,i){if(!qt(e.precondition,t))return n;const r=sn(e.fieldTransforms,i,t),o=t.data;return o.setAll(rn(e)),o.setAll(r),t.convertToFoundDocument(t.version,o).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map((e=>e.field)))}(e,t,n,i):(r=t,o=n,qt(e.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o);var r,o}function Qt(e,t){let n=null;for(const i of e.fieldTransforms){const e=t.data.field(i.field),r=Pt(i.transform,e||null);null!=r&&(null===n&&(n=st.empty()),n.set(i.field,r))}return n||null}function en(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(n=e.fieldTransforms,i=t.fieldTransforms,!!(void 0===n&&void 0===i||n&&i&&D(n,i,((e,t)=>function(e,t){return e.field.isEqual(t.field)&&(n=e.transform,i=t.transform,n instanceof Bt&&i instanceof Bt||n instanceof jt&&i instanceof jt?D(n.elements,i.elements,be):n instanceof Vt&&i instanceof Vt?be(n.gt,i.gt):n instanceof Ft&&i instanceof Ft);var n,i}(e,t)))))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask));var n,i}class tn extends Yt{getFieldMask(){return null}constructor(e,t,n,i=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=i,this.type=0}}class nn extends Yt{getFieldMask(){return this.fieldMask}constructor(e,t,n,i,r=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=i,this.fieldTransforms=r,this.type=1}}function rn(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const i=e.data.field(n);t.set(n,i)}})),t}function on(e,t,n){const i=new Map;b(e.length===n.length);for(let r=0;r<n.length;r++){const o=e[r],s=o.transform,a=t.data.field(o.field);i.set(o.field,Dt(s,a,n[r]))}return i}function sn(e,t,n){const i=new Map;for(const a of e){const e=a.transform,u=n.data.field(a.field);i.set(a.field,(o=u,s=t,(r=e)instanceof Ft?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&(n.fields.__previous_value__=t),{mapValue:n}}(s,o):r instanceof Bt?Ut(r,o):r instanceof jt?$t(r,o):function(e,t){const n=Pt(e,t),i=Ht(n)+Ht(e.gt);return Se(n)&&Se(e.gt)?Lt(i):Rt(e.yt,i)}(r,o)))}var r,o,s;return i}class an extends Yt{getFieldMask(){return null}constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}}class un extends Yt{getFieldMask(){return null}constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(e){this.count=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ln,dn;function hn(e){switch(e){default:return y();case x.CANCELLED:case x.UNKNOWN:case x.DEADLINE_EXCEEDED:case x.RESOURCE_EXHAUSTED:case x.INTERNAL:case x.UNAVAILABLE:case x.UNAUTHENTICATED:return!1;case x.INVALID_ARGUMENT:case x.NOT_FOUND:case x.ALREADY_EXISTS:case x.PERMISSION_DENIED:case x.FAILED_PRECONDITION:case x.ABORTED:case x.OUT_OF_RANGE:case x.UNIMPLEMENTED:case x.DATA_LOSS:return!0}}function fn(e){if(void 0===e)return m("GRPC error has no .code"),x.UNKNOWN;switch(e){case ln.OK:return x.OK;case ln.CANCELLED:return x.CANCELLED;case ln.UNKNOWN:return x.UNKNOWN;case ln.DEADLINE_EXCEEDED:return x.DEADLINE_EXCEEDED;case ln.RESOURCE_EXHAUSTED:return x.RESOURCE_EXHAUSTED;case ln.INTERNAL:return x.INTERNAL;case ln.UNAVAILABLE:return x.UNAVAILABLE;case ln.UNAUTHENTICATED:return x.UNAUTHENTICATED;case ln.INVALID_ARGUMENT:return x.INVALID_ARGUMENT;case ln.NOT_FOUND:return x.NOT_FOUND;case ln.ALREADY_EXISTS:return x.ALREADY_EXISTS;case ln.PERMISSION_DENIED:return x.PERMISSION_DENIED;case ln.FAILED_PRECONDITION:return x.FAILED_PRECONDITION;case ln.ABORTED:return x.ABORTED;case ln.OUT_OF_RANGE:return x.OUT_OF_RANGE;case ln.UNIMPLEMENTED:return x.UNIMPLEMENTED;case ln.DATA_LOSS:return x.DATA_LOSS;default:return y()}}(dn=ln||(ln={}))[dn.OK=0]="OK",dn[dn.CANCELLED=1]="CANCELLED",dn[dn.UNKNOWN=2]="UNKNOWN",dn[dn.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",dn[dn.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",dn[dn.NOT_FOUND=5]="NOT_FOUND",dn[dn.ALREADY_EXISTS=6]="ALREADY_EXISTS",dn[dn.PERMISSION_DENIED=7]="PERMISSION_DENIED",dn[dn.UNAUTHENTICATED=16]="UNAUTHENTICATED",dn[dn.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",dn[dn.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",dn[dn.ABORTED=10]="ABORTED",dn[dn.OUT_OF_RANGE=11]="OUT_OF_RANGE",dn[dn.UNIMPLEMENTED=12]="UNIMPLEMENTED",dn[dn.INTERNAL=13]="INTERNAL",dn[dn.UNAVAILABLE=14]="UNAVAILABLE",dn[dn.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pn{get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[t,i]of n)if(this.equalsFn(t,e))return i}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),i=this.inner[n];if(void 0===i)return this.inner[n]=[[e,t]],void this.innerSize++;for(let n=0;n<i.length;n++)if(this.equalsFn(i[n][0],e))return void(i[n]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],e))return 1===n.length?delete this.inner[t]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ie(this.inner,((t,n)=>{for(const[t,i]of n)e(t,i)}))}isEmpty(){return re(this.inner)}size(){return this.innerSize}constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mn=new et(V.comparator);function gn(){return mn}const vn=new et(V.comparator);function yn(...e){let t=vn;for(const n of e)t=t.insert(n.key,n);return t}function bn(e){let t=vn;return e.forEach(((e,n)=>t=t.insert(e,n.overlayedDocument))),t}function wn(){return _n()}function xn(){return _n()}function _n(){return new pn((e=>e.toString()),((e,t)=>e.isEqual(t)))}const En=new et(V.comparator),In=new it(V.comparator);function Sn(...e){let t=In;for(const n of e)t=t.add(n);return t}const An=new it(O);function kn(){return An}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{static createSynthesizedRemoteEventForCurrentChange(e,t,n){const i=new Map;return i.set(e,Cn.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new Tn(F.min(),i,kn(),gn(),Sn())}constructor(e,t,n,i,r){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=r}}class Cn{static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new Cn(n,t,Sn(),Sn(),Sn())}constructor(e,t,n,i,r){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=r}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(e,t,n,i){this.It=e,this.removedTargetIds=t,this.key=n,this.Tt=i}}class Rn{constructor(e,t){this.targetId=e,this.Et=t}}class Ln{constructor(e,t,n=ce.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=i}}class Mn{get current(){return this.Pt}get resumeToken(){return this.bt}get Vt(){return 0!==this.At}get St(){return this.vt}Dt(e){e.approximateByteSize()>0&&(this.vt=!0,this.bt=e)}Ct(){let e=Sn(),t=Sn(),n=Sn();return this.Rt.forEach(((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:n=n.add(i);break;default:y()}})),new Cn(this.bt,this.Pt,e,t,n)}xt(){this.vt=!1,this.Rt=Pn()}Nt(e,t){this.vt=!0,this.Rt=this.Rt.insert(e,t)}kt(e){this.vt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}Mt(){this.At-=1}Ft(){this.vt=!0,this.Pt=!0}constructor(){this.At=0,this.Rt=Pn(),this.bt=ce.EMPTY_BYTE_STRING,this.Pt=!1,this.vt=!0}}class On{Kt(e){for(const t of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(t,e.Tt):this.Qt(t,e.key,e.Tt);for(const t of e.removedTargetIds)this.Qt(t,e.key,e.Tt)}jt(e){this.forEachTarget(e,(t=>{const n=this.Wt(t);switch(e.state){case 0:this.zt(t)&&n.Dt(e.resumeToken);break;case 1:n.Mt(),n.Vt||n.xt(),n.Dt(e.resumeToken);break;case 2:n.Mt(),n.Vt||this.removeTarget(t);break;case 3:this.zt(t)&&(n.Ft(),n.Dt(e.resumeToken));break;case 4:this.zt(t)&&(this.Ht(t),n.Dt(e.resumeToken));break;default:y()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Bt.forEach(((e,n)=>{this.zt(n)&&t(n)}))}Jt(e){const t=e.targetId,n=e.Et.count,i=this.Yt(t);if(i){const e=i.target;if(ft(e))if(0===n){const n=new V(e.path);this.Qt(t,n,ut.newNoDocument(n,F.min()))}else b(1===n);else this.Xt(t)!==n&&(this.Ht(t),this.Ut=this.Ut.add(t))}}Zt(e){const t=new Map;this.Bt.forEach(((n,i)=>{const r=this.Yt(i);if(r){if(n.current&&ft(r.target)){const t=new V(r.target.path);null!==this.Lt.get(t)||this.te(i,t)||this.Qt(i,t,ut.newNoDocument(t,e))}n.St&&(t.set(i,n.Ct()),n.xt())}}));let n=Sn();this.qt.forEach(((e,t)=>{let i=!0;t.forEachWhile((e=>{const t=this.Yt(e);return!t||2===t.purpose||(i=!1,!1)})),i&&(n=n.add(e))})),this.Lt.forEach(((t,n)=>n.setReadTime(e)));const i=new Tn(e,t,this.Ut,this.Lt,n);return this.Lt=gn(),this.qt=Dn(),this.Ut=new it(O),i}Gt(e,t){if(!this.zt(e))return;const n=this.te(e,t.key)?2:0;this.Wt(e).Nt(t.key,n),this.Lt=this.Lt.insert(t.key,t),this.qt=this.qt.insert(t.key,this.ee(t.key).add(e))}Qt(e,t,n){if(!this.zt(e))return;const i=this.Wt(e);this.te(e,t)?i.Nt(t,1):i.kt(t),this.qt=this.qt.insert(t,this.ee(t).delete(e)),n&&(this.Lt=this.Lt.insert(t,n))}removeTarget(e){this.Bt.delete(e)}Xt(e){const t=this.Wt(e).Ct();return this.$t.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ot(e){this.Wt(e).Ot()}Wt(e){let t=this.Bt.get(e);return t||(t=new Mn,this.Bt.set(e,t)),t}ee(e){let t=this.qt.get(e);return t||(t=new it(O),this.qt=this.qt.insert(e,t)),t}zt(e){const t=null!==this.Yt(e);return t||p("WatchChangeAggregator","Detected inactive target",e),t}Yt(e){const t=this.Bt.get(e);return t&&t.Vt?null:this.$t.ne(e)}Ht(e){this.Bt.set(e,new Mn),this.$t.getRemoteKeysForTarget(e).forEach((t=>{this.Qt(e,t,null)}))}te(e,t){return this.$t.getRemoteKeysForTarget(e).has(t)}constructor(e){this.$t=e,this.Bt=new Map,this.Lt=gn(),this.qt=Dn(),this.Ut=new it(O)}}function Dn(){return new et(V.comparator)}function Pn(){return new et(V.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fn={asc:"ASCENDING",desc:"DESCENDING"},Bn={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Un={and:"AND",or:"OR"};class jn{constructor(e,t){this.databaseId=e,this.wt=t}}function $n(e,t){return e.wt?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Vn(e,t){return e.wt?t.toBase64():t.toUint8Array()}function Hn(e,t){return $n(e,t.toTimestamp())}function Wn(e){return b(!!e),F.fromTimestamp(function(e){const t=de(e);return new P(t.seconds,t.nanos)}(e))}function Gn(e,t){return(n=e,new U(["projects",n.projectId,"databases",n.database])).child("documents").child(t).canonicalString();var n}function zn(e){const t=U.fromString(e);return b(di(t)),t}function Kn(e,t){return Gn(e.databaseId,t.path)}function qn(e,t){const n=zn(t);if(n.get(1)!==e.databaseId.projectId)throw new _(x.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new _(x.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new V(Jn(n))}function Yn(e,t){return Gn(e.databaseId,t)}function Zn(e){const t=zn(e);return 4===t.length?U.emptyPath():Jn(t)}function Xn(e){return new U(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Jn(e){return b(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function Qn(e,t,n){return{name:Kn(e,t),fields:n.value.mapValue.fields}}function ei(e,t){let n;if(t instanceof tn)n={update:Qn(e,t.key,t.value)};else if(t instanceof an)n={delete:Kn(e,t.key)};else if(t instanceof nn)n={update:Qn(e,t.key,t.data),updateMask:li(t.fieldMask)};else{if(!(t instanceof un))return y();n={verify:Kn(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof Ft)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Bt)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof jt)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Vt)return{fieldPath:t.field.canonicalString(),increment:n.gt};throw y()}(0,e)))),t.precondition.isNone||(n.currentDocument=(i=e,void 0!==(r=t.precondition).updateTime?{updateTime:Hn(i,r.updateTime)}:void 0!==r.exists?{exists:r.exists}:y())),n;var i,r}function ti(e,t){return{documents:[Yn(e,t.path)]}}function ni(e,t){const n={structuredQuery:{}},i=t.path;null!==t.collectionGroup?(n.parent=Yn(e,i),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=Yn(e,i.popLast()),n.structuredQuery.from=[{collectionId:i.lastSegment()}]);const r=function(e){if(0!==e.length)return ci(Fe.create(e,"and"))}(t.filters);r&&(n.structuredQuery.where=r);const o=function(e){if(0!==e.length)return e.map((e=>{return{field:ai((t=e).field),direction:oi(t.dir)};var t}))}(t.orderBy);o&&(n.structuredQuery.orderBy=o);const s=(a=e,u=t.limit,a.wt||oe(u)?u:{value:u});var a,u,c;return null!==s&&(n.structuredQuery.limit=s),t.startAt&&(n.structuredQuery.startAt={before:(c=t.startAt).inclusive,values:c.position}),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),n}function ii(e){let t=Zn(e.parent);const n=e.structuredQuery,i=n.from?n.from.length:0;let r=null;if(i>0){b(1===i);const e=n.from[0];e.allDescendants?r=e.collectionId:t=t.child(e.collectionId)}let o=[];n.where&&(o=function(e){const t=ri(e);return t instanceof Fe&&Ue(t)?t.getFilters():[t]}(n.where));let s=[];n.orderBy&&(s=n.orderBy.map((e=>{return new Je(ui((t=e).field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction));var t})));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,oe(t)?null:t}(n.limit));let u=null;n.startAt&&(u=function(e){const t=!!e.before,n=e.values||[];return new Le(n,t)}(n.startAt));let c=null;return n.endAt&&(c=function(e){const t=!e.before,n=e.values||[];return new Le(n,t)}(n.endAt)),mt(t,r,s,o,a,"F",u,c)}function ri(e){return void 0!==e.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=ui(e.unaryFilter.field);return Pe.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=ui(e.unaryFilter.field);return Pe.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ui(e.unaryFilter.field);return Pe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=ui(e.unaryFilter.field);return Pe.create(r,"!=",{nullValue:"NULL_VALUE"});default:return y()}}(e):void 0!==e.fieldFilter?(n=e,Pe.create(ui(n.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return y()}}(n.fieldFilter.op),n.fieldFilter.value)):void 0!==e.compositeFilter?(t=e,Fe.create(t.compositeFilter.filters.map((e=>ri(e))),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return y()}}(t.compositeFilter.op))):y();var t,n}function oi(e){return Fn[e]}function si(e){return Bn[e]}function ai(e){return{fieldPath:e.canonicalString()}}function ui(e){return $.fromServerFormat(e.fieldPath)}function ci(e){return e instanceof Pe?function(e){if("=="===e.op){if(Te(e.value))return{unaryFilter:{field:ai(e.field),op:"IS_NAN"}};if(ke(e.value))return{unaryFilter:{field:ai(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(Te(e.value))return{unaryFilter:{field:ai(e.field),op:"IS_NOT_NAN"}};if(ke(e.value))return{unaryFilter:{field:ai(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ai(e.field),op:si(e.op),value:e.value}}}(e):e instanceof Fe?function(e){const t=e.getFilters().map((e=>ci(e)));return 1===t.length?t[0]:{compositeFilter:{op:(n=e.op,Un[n]),filters:t}};var n}(e):y()}function li(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function di(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hi=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],fi=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],pi=fi;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mi{applyToRemoteDocument(e,t){const n=t.mutationResults;for(let t=0;t<this.mutations.length;t++){const i=this.mutations[t];i.key.isEqual(e.key)&&Xt(i,e,n[t])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=Jt(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=Jt(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=xn();return this.mutations.forEach((i=>{const r=e.get(i.key),o=r.overlayedDocument;let s=this.applyToLocalView(o,r.mutatedFields);s=t.has(i.key)?null:s;const a=Zt(o,s);null!==a&&n.set(i.key,a),o.isValidDocument()||o.convertToNoDocument(F.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Sn())}isEqual(e){return this.batchId===e.batchId&&D(this.mutations,e.mutations,((e,t)=>en(e,t)))&&D(this.baseMutations,e.baseMutations,((e,t)=>en(e,t)))}constructor(e,t,n,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=i}}class gi{static from(e,t,n){b(e.mutations.length===n.length);let i=En;const r=e.mutations;for(let e=0;e<r.length;e++)i=i.insert(r[e].key,n[e].version);return new gi(e,t,n,i)}constructor(e,t,n,i){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=i}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}constructor(e,t){this.largestBatchId=e,this.mutation=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{withSequenceNumber(e){return new yi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new yi(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new yi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}constructor(e,t,n,i,r=F.min(),o=F.min(),s=ce.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=s}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(e){this.ie=e}}function wi(e){const t=ii({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?Et(t,t.limit,"L"):t}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{ue(e,t){this.ce(e,t),t.ae()}ce(e,t){if("nullValue"in e)this.he(t,5);else if("booleanValue"in e)this.he(t,10),t.le(e.booleanValue?1:0);else if("integerValue"in e)this.he(t,15),t.le(he(e.integerValue));else if("doubleValue"in e){const n=he(e.doubleValue);isNaN(n)?this.he(t,13):(this.he(t,15),se(n)?t.le(0):t.le(n))}else if("timestampValue"in e){const n=e.timestampValue;this.he(t,20),"string"==typeof n?t.fe(n):(t.fe(`${n.seconds||""}`),t.le(n.nanos||0))}else if("stringValue"in e)this.de(e.stringValue,t),this._e(t);else if("bytesValue"in e)this.he(t,30),t.we(fe(e.bytesValue)),this._e(t);else if("referenceValue"in e)this.me(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.he(t,45),t.le(n.latitude||0),t.le(n.longitude||0)}else"mapValue"in e?Re(e)?this.he(t,Number.MAX_SAFE_INTEGER):(this.ge(e.mapValue,t),this._e(t)):"arrayValue"in e?(this.ye(e.arrayValue,t),this._e(t)):y()}de(e,t){this.he(t,25),this.pe(e,t)}pe(e,t){t.fe(e)}ge(e,t){const n=e.fields||{};this.he(t,55);for(const e of Object.keys(n))this.de(e,t),this.ce(n[e],t)}ye(e,t){const n=e.values||[];this.he(t,50);for(const e of n)this.ce(e,t)}me(e,t){this.he(t,37),V.fromName(e).path.forEach((e=>{this.he(t,60),this.pe(e,t)}))}he(e,t){e.le(t)}_e(e){e.le(2)}constructor(){}}xi.Ie=new xi;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _i{addToCollectionParentIndex(e,t){return this.Je.add(t),X.resolve()}getCollectionParents(e,t){return X.resolve(this.Je.getEntries(t))}addFieldIndex(e,t){return X.resolve()}deleteFieldIndex(e,t){return X.resolve()}getDocumentsMatchingTarget(e,t){return X.resolve(null)}getIndexType(e,t){return X.resolve(0)}getFieldIndexes(e,t){return X.resolve([])}getNextCollectionGroupToUpdate(e){return X.resolve(null)}getMinOffset(e,t){return X.resolve(z.min())}getMinOffsetFromCollectionGroup(e,t){return X.resolve(z.min())}updateCollectionGroup(e,t,n){return X.resolve()}updateIndexEntries(e,t){return X.resolve()}constructor(){this.Je=new Ei}}class Ei{add(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t]||new it(U.comparator),r=!i.has(n);return this.index[t]=i.add(n),r}has(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t];return i&&i.has(n)}getEntries(e){return(this.index[e]||new it(U.comparator)).toArray()}constructor(){this.index={}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);class Ii{static withCacheSize(e){return new Ii(e,Ii.DEFAULT_COLLECTION_PERCENTILE,Ii.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ii.DEFAULT_COLLECTION_PERCENTILE=10,Ii.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ii.DEFAULT=new Ii(41943040,Ii.DEFAULT_COLLECTION_PERCENTILE,Ii.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ii.DISABLED=new Ii(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Si{next(){return this.bn+=2,this.bn}static Pn(){return new Si(0)}static vn(){return new Si(-1)}constructor(e){this.bn=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ai{addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ut.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?X.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}constructor(){this.changes=new pn((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ki{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((i=>(n=i,this.remoteDocumentCache.getEntry(e,t)))).next((e=>(null!==n&&Jt(n.mutation,e,ot.empty(),P.now()),e)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.getLocalViewOfDocuments(e,t,Sn()).next((()=>t))))}getLocalViewOfDocuments(e,t,n=Sn()){const i=wn();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,n).next((e=>{let t=yn();return e.forEach(((e,n)=>{t=t.insert(e,n.overlayedDocument)})),t}))))}getOverlayedDocuments(e,t){const n=wn();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,Sn())))}populateOverlays(e,t,n){const i=[];return n.forEach((e=>{t.has(e)||i.push(e)})),this.documentOverlayCache.getOverlays(e,i).next((e=>{e.forEach(((e,n)=>{t.set(e,n)}))}))}computeViews(e,t,n,i){let r=gn();const o=_n(),s=_n();return t.forEach(((e,t)=>{const s=n.get(t.key);i.has(t.key)&&(void 0===s||s.mutation instanceof nn)?r=r.insert(t.key,t):void 0!==s&&(o.set(t.key,s.mutation.getFieldMask()),Jt(s.mutation,t,s.mutation.getFieldMask(),P.now()))})),this.recalculateAndSaveOverlays(e,r).next((e=>(e.forEach(((e,t)=>o.set(e,t))),t.forEach(((e,t)=>{var n;return s.set(e,new ki(t,null!==(n=o.get(e))&&void 0!==n?n:null))})),s)))}recalculateAndSaveOverlays(e,t){const n=_n();let i=new et(((e,t)=>e-t)),r=Sn();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>{for(const r of e)r.keys().forEach((e=>{const o=t.get(e);if(null===o)return;let s=n.get(e)||ot.empty();s=r.applyToLocalView(o,s),n.set(e,s);const a=(i.get(r.batchId)||Sn()).add(e);i=i.insert(r.batchId,a)}))})).next((()=>{const o=[],s=i.getReverseIterator();for(;s.hasNext();){const i=s.getNext(),a=i.key,u=i.value,c=xn();u.forEach((e=>{if(!r.has(e)){const i=Zt(t.get(e),n.get(e));null!==i&&c.set(e,i),r=r.add(e)}})),o.push(this.documentOverlayCache.saveOverlays(e,a,c))}return X.waitFor(o)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.recalculateAndSaveOverlays(e,t)))}getDocumentsMatchingQuery(e,t,n){return i=t,V.isDocumentKey(i.path)&&null===i.collectionGroup&&0===i.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):wt(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n):this.getDocumentsMatchingCollectionQuery(e,t,n);var i}getNextDocuments(e,t,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,i).next((r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,i-r.size):X.resolve(wn());let s=-1,a=r;return o.next((t=>X.forEach(t,((t,n)=>(s<n.largestBatchId&&(s=n.largestBatchId),r.get(t)?X.resolve():this.remoteDocumentCache.getEntry(e,t).next((e=>{a=a.insert(t,e)}))))).next((()=>this.populateOverlays(e,t,r))).next((()=>this.computeViews(e,a,t,Sn()))).next((e=>({batchId:s,changes:bn(e)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new V(t)).next((e=>{let t=yn();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}getDocumentsMatchingCollectionGroupQuery(e,t,n){const i=t.collectionGroup;let r=yn();return this.indexManager.getCollectionParents(e,i).next((o=>X.forEach(o,(o=>{const s=(a=t,u=o.child(i),new pt(u,null,a.explicitOrderBy.slice(),a.filters.slice(),a.limit,a.limitType,a.startAt,a.endAt));var a,u;return this.getDocumentsMatchingCollectionQuery(e,s,n).next((e=>{e.forEach(((e,t)=>{r=r.insert(e,t)}))}))})).next((()=>r))))}getDocumentsMatchingCollectionQuery(e,t,n){let i;return this.remoteDocumentCache.getAllFromCollection(e,t.path,n).next((r=>(i=r,this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId)))).next((e=>{e.forEach(((e,t)=>{const n=t.getKey();null===i.get(n)&&(i=i.insert(n,ut.newInvalidDocument(n)))}));let n=yn();return i.forEach(((i,r)=>{const o=e.get(i);void 0!==o&&Jt(o.mutation,r,ot.empty(),P.now()),kt(t,r)&&(n=n.insert(i,r))})),n}))}constructor(e,t,n,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{getBundleMetadata(e,t){return X.resolve(this.Zn.get(t))}saveBundleMetadata(e,t){var n;return this.Zn.set(t.id,{id:(n=t).id,version:n.version,createTime:Wn(n.createTime)}),X.resolve()}getNamedQuery(e,t){return X.resolve(this.ts.get(t))}saveNamedQuery(e,t){return this.ts.set(t.name,{name:(n=t).name,query:wi(n.bundledQuery),readTime:Wn(n.readTime)}),X.resolve();var n}constructor(e){this.yt=e,this.Zn=new Map,this.ts=new Map}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{getOverlay(e,t){return X.resolve(this.overlays.get(t))}getOverlays(e,t){const n=wn();return X.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((n,i)=>{this.oe(e,t,i)})),X.resolve()}removeOverlaysForBatchId(e,t,n){const i=this.es.get(n);return void 0!==i&&(i.forEach((e=>this.overlays=this.overlays.remove(e))),this.es.delete(n)),X.resolve()}getOverlaysForCollection(e,t,n){const i=wn(),r=t.length+1,o=new V(t.child("")),s=this.overlays.getIteratorFrom(o);for(;s.hasNext();){const e=s.getNext().value,o=e.getKey();if(!t.isPrefixOf(o.path))break;o.path.length===r&&e.largestBatchId>n&&i.set(e.getKey(),e)}return X.resolve(i)}getOverlaysForCollectionGroup(e,t,n,i){let r=new et(((e,t)=>e-t));const o=this.overlays.getIterator();for(;o.hasNext();){const e=o.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=r.get(e.largestBatchId);null===t&&(t=wn(),r=r.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const s=wn(),a=r.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach(((e,t)=>s.set(e,t))),!(s.size()>=i)););return X.resolve(s)}oe(e,t,n){const i=this.overlays.get(n.key);if(null!==i){const e=this.es.get(i.largestBatchId).delete(n.key);this.es.set(i.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new vi(t,n));let r=this.es.get(t);void 0===r&&(r=Sn(),this.es.set(t,r)),this.es.set(t,r.add(n.key))}constructor(){this.overlays=new et(V.comparator),this.es=new Map}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{isEmpty(){return this.ns.isEmpty()}addReference(e,t){const n=new Li(e,t);this.ns=this.ns.add(n),this.rs=this.rs.add(n)}us(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.cs(new Li(e,t))}hs(e,t){e.forEach((e=>this.removeReference(e,t)))}ls(e){const t=new V(new U([])),n=new Li(t,e),i=new Li(t,e+1),r=[];return this.rs.forEachInRange([n,i],(e=>{this.cs(e),r.push(e.key)})),r}fs(){this.ns.forEach((e=>this.cs(e)))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const t=new V(new U([])),n=new Li(t,e),i=new Li(t,e+1);let r=Sn();return this.rs.forEachInRange([n,i],(e=>{r=r.add(e.key)})),r}containsKey(e){const t=new Li(e,0),n=this.ns.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}constructor(){this.ns=new it(Li.ss),this.rs=new it(Li.os)}}class Li{static ss(e,t){return V.comparator(e.key,t.key)||O(e._s,t._s)}static os(e,t){return O(e._s,t._s)||V.comparator(e.key,t.key)}constructor(e,t){this.key=e,this._s=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{checkEmpty(e){return X.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,i){const r=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new mi(r,t,n,i);this.mutationQueue.push(o);for(const t of i)this.gs=this.gs.add(new Li(t.key,r)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return X.resolve(o)}lookupMutationBatch(e,t){return X.resolve(this.ys(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,i=this.ps(n),r=i<0?0:i;return X.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return X.resolve(0===this.mutationQueue.length?-1:this.ws-1)}getAllMutationBatches(e){return X.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Li(t,0),i=new Li(t,Number.POSITIVE_INFINITY),r=[];return this.gs.forEachInRange([n,i],(e=>{const t=this.ys(e._s);r.push(t)})),X.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new it(O);return t.forEach((e=>{const t=new Li(e,0),i=new Li(e,Number.POSITIVE_INFINITY);this.gs.forEachInRange([t,i],(e=>{n=n.add(e._s)}))})),X.resolve(this.Is(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,i=n.length+1;let r=n;V.isDocumentKey(r)||(r=r.child(""));const o=new Li(new V(r),0);let s=new it(O);return this.gs.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===i&&(s=s.add(e._s)),!0)}),o),X.resolve(this.Is(s))}Is(e){const t=[];return e.forEach((e=>{const n=this.ys(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){b(0===this.Ts(t.batchId,"removed")),this.mutationQueue.shift();let n=this.gs;return X.forEach(t.mutations,(i=>{const r=new Li(i.key,t.batchId);return n=n.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)})).next((()=>{this.gs=n}))}An(e){}containsKey(e,t){const n=new Li(t,0),i=this.gs.firstAfterOrEqual(n);return X.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,X.resolve()}Ts(e,t){return this.ps(e)}ps(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}ys(e){const t=this.ps(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.ws=1,this.gs=new it(Li.ss)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,i=this.docs.get(n),r=i?i.size:0,o=this.Es(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return X.resolve(n?n.document.mutableCopy():ut.newInvalidDocument(t))}getEntries(e,t){let n=gn();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():ut.newInvalidDocument(e))})),X.resolve(n)}getAllFromCollection(e,t,n){let i=gn();const r=new V(t.child("")),o=this.docs.getIteratorFrom(r);for(;o.hasNext();){const{key:e,value:{document:r}}=o.getNext();if(!t.isPrefixOf(e.path))break;e.path.length>t.length+1||K(G(r),n)<=0||(i=i.insert(r.key,r.mutableCopy()))}return X.resolve(i)}getAllFromCollectionGroup(e,t,n,i){y()}As(e,t){return X.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new Di(this)}getSize(e){return X.resolve(this.size)}constructor(e){this.Es=e,this.docs=new et(V.comparator),this.size=0}}class Di extends Ai{applyChanges(e){const t=[];return this.changes.forEach(((n,i)=>{i.isValidDocument()?t.push(this.Yn.addEntry(e,i)):this.Yn.removeEntry(n)})),X.waitFor(t)}getFromCache(e,t){return this.Yn.getEntry(e,t)}getAllFromCache(e,t){return this.Yn.getEntries(e,t)}constructor(e){super(),this.Yn=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{forEachTarget(e,t){return this.Rs.forEach(((e,n)=>t(n))),X.resolve()}getLastRemoteSnapshotVersion(e){return X.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return X.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),X.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.bs&&(this.bs=t),X.resolve()}Dn(e){this.Rs.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.vs=new Si(t),this.highestTargetId=t),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,t){return this.Dn(t),this.targetCount+=1,X.resolve()}updateTargetData(e,t){return this.Dn(t),X.resolve()}removeTargetData(e,t){return this.Rs.delete(t.target),this.Ps.ls(t.targetId),this.targetCount-=1,X.resolve()}removeTargets(e,t,n){let i=0;const r=[];return this.Rs.forEach(((o,s)=>{s.sequenceNumber<=t&&null===n.get(s.targetId)&&(this.Rs.delete(o),r.push(this.removeMatchingKeysForTargetId(e,s.targetId)),i++)})),X.waitFor(r).next((()=>i))}getTargetCount(e){return X.resolve(this.targetCount)}getTargetData(e,t){const n=this.Rs.get(t)||null;return X.resolve(n)}addMatchingKeys(e,t,n){return this.Ps.us(t,n),X.resolve()}removeMatchingKeys(e,t,n){this.Ps.hs(t,n);const i=this.persistence.referenceDelegate,r=[];return i&&t.forEach((t=>{r.push(i.markPotentiallyOrphaned(e,t))})),X.waitFor(r)}removeMatchingKeysForTargetId(e,t){return this.Ps.ls(t),X.resolve()}getMatchingKeysForTargetId(e,t){const n=this.Ps.ds(t);return X.resolve(n)}containsKey(e,t){return X.resolve(this.Ps.containsKey(t))}constructor(e){this.persistence=e,this.Rs=new pn((e=>dt(e)),ht),this.lastRemoteSnapshotVersion=F.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Ri,this.targetCount=0,this.vs=Si.Pn()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Ni,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Vs[e.toKey()];return n||(n=new Mi(t,this.referenceDelegate),this.Vs[e.toKey()]=n),n}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,t,n){p("MemoryPersistence","Starting transaction:",e);const i=new Bi(this.Ss.next());return this.referenceDelegate.ks(),n(i).next((e=>this.referenceDelegate.Os(i).next((()=>e)))).toPromise().then((e=>(i.raiseOnCommittedEvent(),e)))}Ms(e,t){return X.or(Object.values(this.Vs).map((n=>()=>n.containsKey(e,t))))}constructor(e,t){this.Vs={},this.overlays={},this.Ss=new Q(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new Pi(this),this.indexManager=new _i,this.remoteDocumentCache=new Oi((e=>this.referenceDelegate.xs(e))),this.yt=new bi(t),this.Ns=new Ci(this.yt)}}class Bi extends Y{constructor(e){super(),this.currentSequenceNumber=e}}class Ui{static Bs(e){return new Ui(e)}get Ls(){if(this.$s)return this.$s;throw y()}addReference(e,t,n){return this.Fs.addReference(n,t),this.Ls.delete(n.toString()),X.resolve()}removeReference(e,t,n){return this.Fs.removeReference(n,t),this.Ls.add(n.toString()),X.resolve()}markPotentiallyOrphaned(e,t){return this.Ls.add(t.toString()),X.resolve()}removeTarget(e,t){this.Fs.ls(t.targetId).forEach((e=>this.Ls.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.Ls.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}ks(){this.$s=new Set}Os(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return X.forEach(this.Ls,(n=>{const i=V.fromPath(n);return this.qs(e,i).next((e=>{e||t.removeEntry(i,F.min())}))})).next((()=>(this.$s=null,t.apply(e))))}updateLimboDocument(e,t){return this.qs(e,t).next((e=>{e?this.Ls.delete(t.toString()):this.Ls.add(t.toString())}))}xs(e){return 0}qs(e,t){return X.or([()=>X.resolve(this.Fs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ms(e,t)])}constructor(e){this.persistence=e,this.Fs=new Ri,this.$s=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ji{static Ci(e,t){let n=Sn(),i=Sn();for(const e of t.docChanges)switch(e.type){case 0:n=n.add(e.doc.key);break;case 1:i=i.add(e.doc.key)}return new ji(e,t.fromCache,n,i)}constructor(e,t,n,i){this.targetId=e,this.fromCache=t,this.Si=n,this.Di=i}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{initialize(e,t){this.Ni=e,this.indexManager=t,this.xi=!0}getDocumentsMatchingQuery(e,t,n,i){return this.ki(e,t).next((r=>r||this.Oi(e,t,i,n))).next((n=>n||this.Mi(e,t)))}ki(e,t){if(vt(t))return X.resolve(null);let n=_t(t);return this.indexManager.getIndexType(e,n).next((i=>0===i?null:(null!==t.limit&&1===i&&(t=Et(t,null,"F"),n=_t(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((i=>{const r=Sn(...i);return this.Ni.getDocuments(e,r).next((i=>this.indexManager.getMinOffset(e,n).next((n=>{const o=this.Fi(t,i);return this.$i(t,o,r,n.readTime)?this.ki(e,Et(t,null,"F")):this.Bi(e,o,t,n)}))))})))))}Oi(e,t,n,i){return vt(t)||i.isEqual(F.min())?this.Mi(e,t):this.Ni.getDocuments(e,n).next((r=>{const o=this.Fi(t,r);return this.$i(t,o,n,i)?this.Mi(e,t):(f()<=s.LogLevel.DEBUG&&p("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),At(t)),this.Bi(e,o,t,W(i,-1)))}))}Fi(e,t){let n=new it(Ct(e));return t.forEach(((t,i)=>{kt(e,i)&&(n=n.add(i))})),n}$i(e,t,n,i){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const r="F"===e.limitType?t.last():t.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Mi(e,t){return f()<=s.LogLevel.DEBUG&&p("QueryEngine","Using full collection scan to execute query:",At(t)),this.Ni.getDocumentsMatchingQuery(e,t,z.min())}Bi(e,t,n,i){return this.Ni.getDocumentsMatchingQuery(e,n,i).next((e=>(t.forEach((t=>{e=e.insert(t.key,t)})),e)))}constructor(){this.xi=!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Ti(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.qi)))}constructor(e,t,n,i){this.persistence=e,this.Li=t,this.yt=i,this.qi=new et(O),this.Ui=new pn((e=>dt(e)),ht),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(n)}}function Hi(e,t,n,i){return new Vi(e,t,n,i)}async function Wi(e,t){const n=w(e);return await n.persistence.runTransaction("Handle user change","readonly",(e=>{let i;return n.mutationQueue.getAllMutationBatches(e).next((r=>(i=r,n.Qi(t),n.mutationQueue.getAllMutationBatches(e)))).next((t=>{const r=[],o=[];let s=Sn();for(const e of i){r.push(e.batchId);for(const t of e.mutations)s=s.add(t.key)}for(const e of t){o.push(e.batchId);for(const t of e.mutations)s=s.add(t.key)}return n.localDocuments.getDocuments(e,s).next((e=>({ji:e,removedBatchIds:r,addedBatchIds:o})))}))}))}function Gi(e){const t=w(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Cs.getLastRemoteSnapshotVersion(e)))}function zi(e,t,n){let i=Sn(),r=Sn();return n.forEach((e=>i=i.add(e))),t.getEntries(e,i).next((e=>{let i=gn();return n.forEach(((n,o)=>{const s=e.get(n);o.isFoundDocument()!==s.isFoundDocument()&&(r=r.add(n)),o.isNoDocument()&&o.version.isEqual(F.min())?(t.removeEntry(n,o.readTime),i=i.insert(n,o)):!s.isValidDocument()||o.version.compareTo(s.version)>0||0===o.version.compareTo(s.version)&&s.hasPendingWrites?(t.addEntry(o),i=i.insert(n,o)):p("LocalStore","Ignoring outdated watch update for ",n,". Current version:",s.version," Watch version:",o.version)})),{Wi:i,zi:r}}))}function Ki(e,t){const n=w(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t))))}function qi(e,t){const n=w(e);return n.persistence.runTransaction("Allocate target","readwrite",(e=>{let i;return n.Cs.getTargetData(e,t).next((r=>r?(i=r,X.resolve(i)):n.Cs.allocateTargetId(e).next((r=>(i=new yi(t,r,0,e.currentSequenceNumber),n.Cs.addTargetData(e,i).next((()=>i)))))))})).then((e=>{const i=n.qi.get(e.targetId);return(null===i||e.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.qi=n.qi.insert(e.targetId,e),n.Ui.set(t,e.targetId)),e}))}async function Yi(e,t,n){const i=w(e),r=i.qi.get(t),o=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",o,(e=>i.persistence.referenceDelegate.removeTarget(e,r)))}catch(e){if(!J(e))throw e;p("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}i.qi=i.qi.remove(t),i.Ui.delete(r.target)}function Zi(e,t,n){const i=w(e);let r=F.min(),o=Sn();return i.persistence.runTransaction("Execute query","readonly",(e=>function(e,t,n){const i=w(e),r=i.Ui.get(n);return void 0!==r?X.resolve(i.qi.get(r)):i.Cs.getTargetData(t,n)}(i,e,_t(t)).next((t=>{if(t)return r=t.lastLimboFreeSnapshotVersion,i.Cs.getMatchingKeysForTargetId(e,t.targetId).next((e=>{o=e}))})).next((()=>i.Li.getDocumentsMatchingQuery(e,t,n?r:F.min(),n?o:Sn()))).next((e=>(Xi(i,Tt(t),e),{documents:e,Hi:o})))))}function Xi(e,t,n){let i=e.Ki.get(t)||F.min();n.forEach(((e,t)=>{t.readTime.compareTo(i)>0&&(i=t.readTime)})),e.Ki.set(t,i)}class Ji{er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}constructor(){this.activeTargetIds=kn()}}class Qi{addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.Lr.er(e),this.qr[e]||"not-current"}updateQueryState(e,t,n){this.qr[e]=t}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.qr[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new Ji,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}constructor(){this.Lr=new Ji,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{Ur(e){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{Ur(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){p("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){p("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nr={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr extends class{get co(){return!1}ao(e,t,n,i,r){const o=this.ho(e,t);p("RestConnection","Sending: ",o,n);const s={};return this.lo(s,i,r),this.fo(e,o,s,n).then((e=>(p("RestConnection","Received: ",e),e)),(t=>{throw g("RestConnection",`${e} failed with error: `,t,"url: ",o,"request:",n),t}))}_o(e,t,n,i,r,o){return this.ao(e,t,n,i,r)}lo(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+d,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}ho(e,t){const n=nr[e];return`${this.oo}/v1/${t}:${n}`}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.oo=t+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}}{fo(e,t,n,i){return new Promise(((r,o)=>{const s=new(0,u.XhrIo);s.setWithCredentials(!0),s.listenOnce(u.EventType.COMPLETE,(()=>{try{switch(s.getLastErrorCode()){case u.ErrorCode.NO_ERROR:const t=s.getResponseJson();p("Connection","XHR received:",JSON.stringify(t)),r(t);break;case u.ErrorCode.TIMEOUT:p("Connection",'RPC "'+e+'" timed out'),o(new _(x.DEADLINE_EXCEEDED,"Request time out"));break;case u.ErrorCode.HTTP_ERROR:const n=s.getStatus();if(p("Connection",'RPC "'+e+'" failed with status:',n,"response text:",s.getResponseText()),n>0){let e=s.getResponseJson();Array.isArray(e)&&(e=e[0]);const t=null==e?void 0:e.error;if(t&&t.status&&t.message){const e=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(x).indexOf(t)>=0?t:x.UNKNOWN}(t.status);o(new _(e,t.message))}else o(new _(x.UNKNOWN,"Server responded with status "+s.getStatus()))}else o(new _(x.UNAVAILABLE,"Connection failed."));break;default:y()}}finally{p("Connection",'RPC "'+e+'" completed.')}}));const a=JSON.stringify(i);s.send(t,"POST",a,n,15)}))}wo(e,t,n){const i=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],r=(0,u.createWebChannelTransport)(),o=(0,u.getStatEventTarget)(),s={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(s.xmlHttpFactory=new(0,u.FetchXmlHttpFactory)({})),this.lo(s.initMessageHeaders,t,n),s.encodeInitMessageHeaders=!0;const a=i.join("");p("Connection","Creating WebChannel: "+a,s);const c=r.createWebChannel(a,s);let l=!1,d=!1;const h=new ir({Hr:e=>{d?p("Connection","Not sending because WebChannel is closed:",e):(l||(p("Connection","Opening WebChannel transport."),c.open(),l=!0),p("Connection","WebChannel sending:",e),c.send(e))},Jr:()=>c.close()}),f=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(e){setTimeout((()=>{throw e}),0)}}))};return f(c,u.WebChannel.EventType.OPEN,(()=>{d||p("Connection","WebChannel transport opened.")})),f(c,u.WebChannel.EventType.CLOSE,(()=>{d||(d=!0,p("Connection","WebChannel transport closed"),h.io())})),f(c,u.WebChannel.EventType.ERROR,(e=>{d||(d=!0,g("Connection","WebChannel transport errored:",e),h.io(new _(x.UNAVAILABLE,"The operation could not be completed")))})),f(c,u.WebChannel.EventType.MESSAGE,(e=>{var t;if(!d){const n=e.data[0];b(!!n);const i=n,r=i.error||(null===(t=i[0])||void 0===t?void 0:t.error);if(r){p("Connection","WebChannel received error:",r);const e=r.status;let t=function(e){const t=ln[e];if(void 0!==t)return fn(t)}(e),n=r.message;void 0===t&&(t=x.INTERNAL,n="Unknown error status: "+e+" with message "+r.message),d=!0,h.io(new _(t,n)),c.close()}else p("Connection","WebChannel received:",n),h.ro(n)}})),f(o,u.Event.STAT_EVENT,(e=>{e.stat===u.Stat.PROXY?p("Connection","Detected buffering proxy"):e.stat===u.Stat.NOPROXY&&p("Connection","Detected no buffering proxy")})),setTimeout((()=>{h.so()}),0),h}constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function or(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sr(e){return new jn(e,!0)}class ar{reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const t=Math.floor(this.Io+this.bo()),n=Math.max(0,Date.now()-this.Eo),i=Math.max(0,t-n);i>0&&p("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,i,(()=>(this.Eo=Date.now(),e()))),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){null!==this.To&&(this.To.skipDelay(),this.To=null)}cancel(){null!==this.To&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}constructor(e,t,n=1e3,i=1.5,r=6e4){this.Hs=e,this.timerId=t,this.mo=n,this.yo=i,this.po=r,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{No(){return 1===this.state||5===this.state||this.ko()}ko(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&null===this.Do&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,(()=>this.$o())))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}qo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,t){this.Lo(),this.qo(),this.xo.cancel(),this.So++,4!==e?this.xo.reset():t&&t.code===x.RESOURCE_EXHAUSTED?(m(t.toString()),m("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):t&&t.code===x.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Uo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(t)}Uo(){}auth(){this.state=1;const e=this.Ko(this.So),t=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.So===t&&this.Go(e,n)}),(t=>{e((()=>{const e=new _(x.UNKNOWN,"Fetching auth token failed: "+t.message);return this.Qo(e)}))}))}Go(e,t){const n=this.Ko(this.So);this.stream=this.jo(e,t),this.stream.Yr((()=>{n((()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,(()=>(this.ko()&&(this.state=3),Promise.resolve()))),this.listener.Yr())))})),this.stream.Zr((e=>{n((()=>this.Qo(e)))})),this.stream.onMessage((e=>{n((()=>this.onMessage(e)))}))}Oo(){this.state=5,this.xo.Ro((async()=>{this.state=0,this.start()}))}Qo(e){return p("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return t=>{this.Hs.enqueueAndForget((()=>this.So===e?t():(p("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}constructor(e,t,n,i,r,o,s,a){this.Hs=e,this.vo=n,this.Vo=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=s,this.listener=a,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new ar(e,t)}}class cr extends ur{jo(e,t){return this.connection.wo("Listen",e,t)}onMessage(e){this.xo.reset();const t=function(e,t){let n;if("targetChange"in t){t.targetChange;const r="NO_CHANGE"===(i=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===i?1:"REMOVE"===i?2:"CURRENT"===i?3:"RESET"===i?4:y(),o=t.targetChange.targetIds||[],s=function(e,t){return e.wt?(b(void 0===t||"string"==typeof t),ce.fromBase64String(t||"")):(b(void 0===t||t instanceof Uint8Array),ce.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),a=t.targetChange.cause,u=a&&function(e){const t=void 0===e.code?x.UNKNOWN:fn(e.code);return new _(t,e.message||"")}(a);n=new Ln(r,o,s,u||null)}else if("documentChange"in t){t.documentChange;const i=t.documentChange;i.document,i.document.name,i.document.updateTime;const r=qn(e,i.document.name),o=Wn(i.document.updateTime),s=i.document.createTime?Wn(i.document.createTime):F.min(),a=new st({mapValue:{fields:i.document.fields}}),u=ut.newFoundDocument(r,o,s,a),c=i.targetIds||[],l=i.removedTargetIds||[];n=new Nn(c,l,u.key,u)}else if("documentDelete"in t){t.documentDelete;const i=t.documentDelete;i.document;const r=qn(e,i.document),o=i.readTime?Wn(i.readTime):F.min(),s=ut.newNoDocument(r,o),a=i.removedTargetIds||[];n=new Nn([],a,s.key,s)}else if("documentRemove"in t){t.documentRemove;const i=t.documentRemove;i.document;const r=qn(e,i.document),o=i.removedTargetIds||[];n=new Nn([],o,r,null)}else{if(!("filter"in t))return y();{t.filter;const e=t.filter;e.targetId;const i=e.count||0,r=new cn(i),o=e.targetId;n=new Rn(o,r)}}var i;return n}(this.yt,e),n=function(e){if(!("targetChange"in e))return F.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?F.min():t.readTime?Wn(t.readTime):F.min()}(e);return this.listener.Wo(t,n)}zo(e){const t={};t.database=Xn(this.yt),t.addTarget=function(e,t){let n;const i=t.target;return n=ft(i)?{documents:ti(e,i)}:{query:ni(e,i)},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0?n.resumeToken=Vn(e,t.resumeToken):t.snapshotVersion.compareTo(F.min())>0&&(n.readTime=$n(e,t.snapshotVersion.toTimestamp())),n}(this.yt,e);const n=function(e,t){const n=function(e,t){switch(t){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return y()}}(0,t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.yt,e);n&&(t.labels=n),this.Bo(t)}Ho(e){const t={};t.database=Xn(this.yt),t.removeTarget=e,this.Bo(t)}constructor(e,t,n,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,i,o),this.yt=r}}class lr extends ur{get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}Uo(){this.Jo&&this.Xo([])}jo(e,t){return this.connection.wo("Write",e,t)}onMessage(e){if(b(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const i=(t=e.writeResults,n=e.commitTime,t&&t.length>0?(b(void 0!==n),t.map((e=>function(e,t){let n=e.updateTime?Wn(e.updateTime):Wn(t);return n.isEqual(F.min())&&(n=Wn(t)),new zt(n,e.transformResults||[])}(e,n)))):[]),r=Wn(e.commitTime);return this.listener.Zo(r,i)}var t,n;return b(!e.writeResults||0===e.writeResults.length),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=Xn(this.yt),this.Bo(e)}Xo(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>ei(this.yt,e)))};this.Bo(t)}constructor(e,t,n,i,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,i,o),this.yt=r,this.Jo=!1}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr extends class{}{su(){if(this.nu)throw new _(x.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,t,n){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,r])=>this.connection.ao(e,t,n,i,r))).catch((e=>{throw"FirebaseError"===e.name?(e.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new _(x.UNKNOWN,e.toString())}))}_o(e,t,n,i){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,o])=>this.connection._o(e,t,n,r,o,i))).catch((e=>{throw"FirebaseError"===e.name?(e.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new _(x.UNKNOWN,e.toString())}))}terminate(){this.nu=!0}constructor(e,t,n,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.yt=i,this.nu=!1}}class hr{uu(){0===this.iu&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve()))))}hu(e){"Online"===this.state?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,"Online"===e&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(m(t),this.ou=!1):p("OnlineStateTracker",t)}lu(){null!==this.ru&&(this.ru.cancel(),this.ru=null)}constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(e,t,n,i,r){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=r,this.mu.Ur((e=>{n.enqueueAndForget((async()=>{_r(this)&&(p("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=w(e);t._u.add(4),await mr(t),t.gu.set("Unknown"),t._u.delete(4),await pr(t)}(this))}))})),this.gu=new hr(n,i)}}async function pr(e){if(_r(e))for(const t of e.wu)await t(!0)}async function mr(e){for(const t of e.wu)await t(!1)}function gr(e,t){const n=w(e);n.du.has(t.targetId)||(n.du.set(t.targetId,t),xr(n)?wr(n):jr(n).ko()&&yr(n,t))}function vr(e,t){const n=w(e),i=jr(n);n.du.delete(t),i.ko()&&br(n,t),0===n.du.size&&(i.ko()?i.Fo():_r(n)&&n.gu.set("Unknown"))}function yr(e,t){e.yu.Ot(t.targetId),jr(e).zo(t)}function br(e,t){e.yu.Ot(t),jr(e).Ho(t)}function wr(e){e.yu=new On({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ne:t=>e.du.get(t)||null}),jr(e).start(),e.gu.uu()}function xr(e){return _r(e)&&!jr(e).No()&&e.du.size>0}function _r(e){return 0===w(e)._u.size}function Er(e){e.yu=void 0}async function Ir(e){e.du.forEach(((t,n)=>{yr(e,t)}))}async function Sr(e,t){Er(e),xr(e)?(e.gu.hu(t),wr(e)):e.gu.set("Unknown")}async function Ar(e,t,n){if(e.gu.set("Online"),t instanceof Ln&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const i of t.targetIds)e.du.has(i)&&(await e.remoteSyncer.rejectListen(i,n),e.du.delete(i),e.yu.removeTarget(i))}(e,t)}catch(n){p("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await kr(e,n)}else if(t instanceof Nn?e.yu.Kt(t):t instanceof Rn?e.yu.Jt(t):e.yu.jt(t),!n.isEqual(F.min()))try{const t=await Gi(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.yu.Zt(t);return n.targetChanges.forEach(((n,i)=>{if(n.resumeToken.approximateByteSize()>0){const r=e.du.get(i);r&&e.du.set(i,r.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach((t=>{const n=e.du.get(t);if(!n)return;e.du.set(t,n.withResumeToken(ce.EMPTY_BYTE_STRING,n.snapshotVersion)),br(e,t);const i=new yi(n.target,t,1,n.sequenceNumber);yr(e,i)})),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){p("RemoteStore","Failed to raise snapshot:",t),await kr(e,t)}}async function kr(e,t,n){if(!J(t))throw t;e._u.add(1),await mr(e),e.gu.set("Offline"),n||(n=()=>Gi(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{p("RemoteStore","Retrying IndexedDB access"),await n(),e._u.delete(1),await pr(e)}))}function Tr(e,t){return t().catch((n=>kr(e,n,t)))}async function Cr(e){const t=w(e),n=$r(t);let i=t.fu.length>0?t.fu[t.fu.length-1].batchId:-1;for(;Nr(t);)try{const e=await Ki(t.localStore,i);if(null===e){0===t.fu.length&&n.Fo();break}i=e.batchId,Rr(t,e)}catch(e){await kr(t,e)}Lr(t)&&Mr(t)}function Nr(e){return _r(e)&&e.fu.length<10}function Rr(e,t){e.fu.push(t);const n=$r(e);n.ko()&&n.Yo&&n.Xo(t.mutations)}function Lr(e){return _r(e)&&!$r(e).No()&&e.fu.length>0}function Mr(e){$r(e).start()}async function Or(e){$r(e).eu()}async function Dr(e){const t=$r(e);for(const n of e.fu)t.Xo(n.mutations)}async function Pr(e,t,n){const i=e.fu.shift(),r=gi.from(i,t,n);await Tr(e,(()=>e.remoteSyncer.applySuccessfulWrite(r))),await Cr(e)}async function Fr(e,t){t&&$r(e).Yo&&await async function(e,t){if(hn(n=t.code)&&n!==x.ABORTED){const n=e.fu.shift();$r(e).Mo(),await Tr(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await Cr(e)}var n}(e,t),Lr(e)&&Mr(e)}async function Br(e,t){const n=w(e);n.asyncQueue.verifyOperationInProgress(),p("RemoteStore","RemoteStore received new credentials");const i=_r(n);n._u.add(3),await mr(n),i&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n._u.delete(3),await pr(n)}async function Ur(e,t){const n=w(e);t?(n._u.delete(2),await pr(n)):t||(n._u.add(2),await mr(n),n.gu.set("Unknown"))}function jr(e){return e.pu||(e.pu=function(e,t,n){const i=w(e);return i.su(),new cr(t,i.connection,i.authCredentials,i.appCheckCredentials,i.yt,n)}(e.datastore,e.asyncQueue,{Yr:Ir.bind(null,e),Zr:Sr.bind(null,e),Wo:Ar.bind(null,e)}),e.wu.push((async t=>{t?(e.pu.Mo(),xr(e)?wr(e):e.gu.set("Unknown")):(await e.pu.stop(),Er(e))}))),e.pu}function $r(e){return e.Iu||(e.Iu=function(e,t,n){const i=w(e);return i.su(),new lr(t,i.connection,i.authCredentials,i.appCheckCredentials,i.yt,n)}(e.datastore,e.asyncQueue,{Yr:Or.bind(null,e),Zr:Fr.bind(null,e),tu:Dr.bind(null,e),Zo:Pr.bind(null,e)}),e.wu.push((async t=>{t?(e.Iu.Mo(),await Cr(e)):(await e.Iu.stop(),e.fu.length>0&&(p("RemoteStore",`Stopping write stream with ${e.fu.length} pending writes`),e.fu=[]))}))),e.Iu
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Vr{static createAndSchedule(e,t,n,i,r){const o=Date.now()+n,s=new Vr(e,t,o,i,r);return s.start(n),s}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new _(x.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}constructor(e,t,n,i,r){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=i,this.removalCallback=r,this.deferred=new E,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}}function Hr(e,t){if(m("AsyncQueue",`${t}: ${e}`),J(e))return new _(x.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{static emptySet(e){return new Wr(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Wr))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,i=n.getNext().key;if(!e.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new Wr;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}constructor(e){this.comparator=e?(t,n)=>e(t,n)||V.comparator(t.key,n.key):(e,t)=>V.comparator(e.key,t.key),this.keyedMap=yn(),this.sortedSet=new et(this.comparator)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{track(e){const t=e.doc.key,n=this.Tu.get(t);n?0!==e.type&&3===n.type?this.Tu=this.Tu.insert(t,e):3===e.type&&1!==n.type?this.Tu=this.Tu.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.Tu=this.Tu.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.Tu=this.Tu.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.Tu=this.Tu.remove(t):1===e.type&&2===n.type?this.Tu=this.Tu.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.Tu=this.Tu.insert(t,{type:2,doc:e.doc}):y():this.Tu=this.Tu.insert(t,e)}Eu(){const e=[];return this.Tu.inorderTraversal(((t,n)=>{e.push(n)})),e}constructor(){this.Tu=new et(V.comparator)}}class zr{static fromInitialDocuments(e,t,n,i,r){const o=[];return t.forEach((e=>{o.push({type:0,doc:e})})),new zr(e,t,Wr.emptySet(t),o,n,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&It(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==n[e].type||!t[e].doc.isEqual(n[e].doc))return!1;return!0}constructor(e,t,n,i,r,o,s,a,u){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=s,this.excludesMetadataChanges=a,this.hasCachedResults=u}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(){this.Au=void 0,this.listeners=[]}}class qr{constructor(){this.queries=new pn((e=>St(e)),It),this.onlineState="Unknown",this.Ru=new Set}}async function Yr(e,t){const n=w(e),i=t.query;let r=!1,o=n.queries.get(i);if(o||(r=!0,o=new Kr),r)try{o.Au=await n.onListen(i)}catch(e){const n=Hr(e,`Initialization of query '${At(t.query)}' failed`);return void t.onError(n)}n.queries.set(i,o),o.listeners.push(t),t.bu(n.onlineState),o.Au&&t.Pu(o.Au)&&Qr(n)}async function Zr(e,t){const n=w(e),i=t.query;let r=!1;const o=n.queries.get(i);if(o){const e=o.listeners.indexOf(t);e>=0&&(o.listeners.splice(e,1),r=0===o.listeners.length)}if(r)return n.queries.delete(i),n.onUnlisten(i)}function Xr(e,t){const n=w(e);let i=!1;for(const e of t){const t=e.query,r=n.queries.get(t);if(r){for(const t of r.listeners)t.Pu(e)&&(i=!0);r.Au=e}}i&&Qr(n)}function Jr(e,t,n){const i=w(e),r=i.queries.get(t);if(r)for(const e of r.listeners)e.onError(n);i.queries.delete(t)}function Qr(e){e.Ru.forEach((e=>{e.next()}))}class eo{Pu(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new zr(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),t=!0):this.Cu(e,this.onlineState)&&(this.xu(e),t=!0),this.Su=e,t}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let t=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),t=!0),t}Cu(e,t){if(!e.fromCache)return!0;const n="Offline"!==t;return(!this.options.Nu||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}Du(e){if(e.docChanges.length>0)return!0;const t=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}xu(e){e=zr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}constructor(e,t,n){this.query=e,this.vu=t,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=n||{}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class to{constructor(e){this.key=e}}class no{constructor(e){this.key=e}}class io{get ju(){return this.qu}Wu(e,t){const n=t?t.zu:new Gr,i=t?t.Qu:this.Qu;let r=t?t.mutatedKeys:this.mutatedKeys,o=i,s=!1;const a="F"===this.query.limitType&&i.size===this.query.limit?i.last():null,u="L"===this.query.limitType&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal(((e,t)=>{const c=i.get(e),l=kt(this.query,t)?t:null,d=!!c&&this.mutatedKeys.has(c.key),h=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let f=!1;c&&l?c.data.isEqual(l.data)?d!==h&&(n.track({type:3,doc:l}),f=!0):this.Hu(c,l)||(n.track({type:2,doc:l}),f=!0,(a&&this.Gu(l,a)>0||u&&this.Gu(l,u)<0)&&(s=!0)):!c&&l?(n.track({type:0,doc:l}),f=!0):c&&!l&&(n.track({type:1,doc:c}),f=!0,(a||u)&&(s=!0)),f&&(l?(o=o.add(l),r=h?r.add(e):r.delete(e)):(o=o.delete(e),r=r.delete(e)))})),null!==this.query.limit)for(;o.size>this.query.limit;){const e="F"===this.query.limitType?o.last():o.first();o=o.delete(e.key),r=r.delete(e.key),n.track({type:1,doc:e})}return{Qu:o,zu:n,$i:s,mutatedKeys:r}}Hu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){const i=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const r=e.zu.Eu();r.sort(((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return y()}};return n(e)-n(t)}(e.type,t.type)||this.Gu(e.doc,t.doc))),this.Ju(n);const o=t?this.Yu():[],s=0===this.Ku.size&&this.current?1:0,a=s!==this.Uu;return this.Uu=s,0!==r.length||a?{snapshot:new zr(this.query,e.Qu,i,r,e.mutatedKeys,0===s,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}bu(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new Gr,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.qu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach((e=>this.qu=this.qu.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.qu=this.qu.delete(e))),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=Sn(),this.Qu.forEach((e=>{this.Zu(e.key)&&(this.Ku=this.Ku.add(e.key))}));const t=[];return e.forEach((e=>{this.Ku.has(e)||t.push(new no(e))})),this.Ku.forEach((n=>{e.has(n)||t.push(new to(n))})),t}tc(e){this.qu=e.Hi,this.Ku=Sn();const t=this.Wu(e.documents);return this.applyChanges(t,!0)}ec(){return zr.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,0===this.Uu,this.hasCachedResults)}constructor(e,t){this.query=e,this.qu=t,this.Uu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=Sn(),this.mutatedKeys=Sn(),this.Gu=Ct(e),this.Qu=new Wr(this.Gu)}}class ro{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class oo{constructor(e){this.key=e,this.nc=!1}}class so{get isPrimaryClient(){return!0===this.dc}constructor(e,t,n,i,r,o){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new pn((e=>St(e)),It),this.rc=new Map,this.oc=new Set,this.uc=new et(V.comparator),this.cc=new Map,this.ac=new Ri,this.hc={},this.lc=new Map,this.fc=Si.vn(),this.onlineState="Unknown",this.dc=void 0}}async function ao(e,t){const n=Ao(e);let i,r;const o=n.ic.get(t);if(o)i=o.targetId,n.sharedClientState.addLocalQueryTarget(i),r=o.view.ec();else{const e=await qi(n.localStore,_t(t));n.isPrimaryClient&&gr(n.remoteStore,e);const o=n.sharedClientState.addLocalQueryTarget(e.targetId);i=e.targetId,r=await uo(n,t,i,"current"===o,e.resumeToken)}return r}async function uo(e,t,n,i,r){e._c=(t,n,i)=>async function(e,t,n,i){let r=t.view.Wu(n);r.$i&&(r=await Zi(e.localStore,t.query,!1).then((({documents:e})=>t.view.Wu(e,r))));const o=i&&i.targetChanges.get(t.targetId),s=t.view.applyChanges(r,e.isPrimaryClient,o);return wo(e,t.targetId,s.Xu),s.snapshot}(e,t,n,i);const o=await Zi(e.localStore,t,!0),s=new io(t,o.Hi),a=s.Wu(o.documents),u=Cn.createSynthesizedTargetChangeForCurrentChange(n,i&&"Offline"!==e.onlineState,r),c=s.applyChanges(a,e.isPrimaryClient,u);wo(e,n,c.Xu);const l=new ro(t,n,s);return e.ic.set(t,l),e.rc.has(n)?e.rc.get(n).push(t):e.rc.set(n,[t]),c.snapshot}async function co(e,t){const n=w(e),i=n.ic.get(t),r=n.rc.get(i.targetId);if(r.length>1)return n.rc.set(i.targetId,r.filter((e=>!It(e,t)))),void n.ic.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await Yi(n.localStore,i.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(i.targetId),vr(n.remoteStore,i.targetId),yo(n,i.targetId)})).catch(Z)):(yo(n,i.targetId),await Yi(n.localStore,i.targetId,!0))}async function lo(e,t){const n=w(e);try{const e=await function(e,t){const n=w(e),i=t.snapshotVersion;let r=n.qi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});r=n.qi;const s=[];t.targetChanges.forEach(((o,a)=>{const u=r.get(a);if(!u)return;s.push(n.Cs.removeMatchingKeys(e,o.removedDocuments,a).next((()=>n.Cs.addMatchingKeys(e,o.addedDocuments,a))));let c=u.withSequenceNumber(e.currentSequenceNumber);var l,d,h;t.targetMismatches.has(a)?c=c.withResumeToken(ce.EMPTY_BYTE_STRING,F.min()).withLastLimboFreeSnapshotVersion(F.min()):o.resumeToken.approximateByteSize()>0&&(c=c.withResumeToken(o.resumeToken,i)),r=r.insert(a,c),d=c,h=o,(0===(l=u).resumeToken.approximateByteSize()||d.snapshotVersion.toMicroseconds()-l.snapshotVersion.toMicroseconds()>=3e8||h.addedDocuments.size+h.modifiedDocuments.size+h.removedDocuments.size>0)&&s.push(n.Cs.updateTargetData(e,c))}));let a=gn(),u=Sn();if(t.documentUpdates.forEach((i=>{t.resolvedLimboDocuments.has(i)&&s.push(n.persistence.referenceDelegate.updateLimboDocument(e,i))})),s.push(zi(e,o,t.documentUpdates).next((e=>{a=e.Wi,u=e.zi}))),!i.isEqual(F.min())){const t=n.Cs.getLastRemoteSnapshotVersion(e).next((t=>n.Cs.setTargetsMetadata(e,e.currentSequenceNumber,i)));s.push(t)}return X.waitFor(s).next((()=>o.apply(e))).next((()=>n.localDocuments.getLocalViewOfDocuments(e,a,u))).next((()=>a))})).then((e=>(n.qi=r,e)))}(n.localStore,t);t.targetChanges.forEach(((e,t)=>{const i=n.cc.get(t);i&&(b(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?i.nc=!0:e.modifiedDocuments.size>0?b(i.nc):e.removedDocuments.size>0&&(b(i.nc),i.nc=!1))})),await Eo(n,e,t)}catch(e){await Z(e)}}function ho(e,t,n){const i=w(e);if(i.isPrimaryClient&&0===n||!i.isPrimaryClient&&1===n){const e=[];i.ic.forEach(((n,i)=>{const r=i.view.bu(t);r.snapshot&&e.push(r.snapshot)})),function(e,t){const n=w(e);n.onlineState=t;let i=!1;n.queries.forEach(((e,n)=>{for(const e of n.listeners)e.bu(t)&&(i=!0)})),i&&Qr(n)}(i.eventManager,t),e.length&&i.sc.Wo(e),i.onlineState=t,i.isPrimaryClient&&i.sharedClientState.setOnlineState(t)}}async function fo(e,t,n){const i=w(e);i.sharedClientState.updateQueryState(t,"rejected",n);const r=i.cc.get(t),o=r&&r.key;if(o){let e=new et(V.comparator);e=e.insert(o,ut.newNoDocument(o,F.min()));const n=Sn().add(o),r=new Tn(F.min(),new Map,new it(O),e,n);await lo(i,r),i.uc=i.uc.remove(o),i.cc.delete(t),_o(i)}else await Yi(i.localStore,t,!1).then((()=>yo(i,t,n))).catch(Z)}async function po(e,t){const n=w(e),i=t.batch.batchId;try{const e=await function(e,t){const n=w(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const i=t.batch.keys(),r=n.Gi.newChangeBuffer({trackRemovals:!0});return function(e,t,n,i){const r=n.batch,o=r.keys();let s=X.resolve();return o.forEach((e=>{s=s.next((()=>i.getEntry(t,e))).next((t=>{const o=n.docVersions.get(e);b(null!==o),t.version.compareTo(o)<0&&(r.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),i.addEntry(t)))}))})),s.next((()=>e.mutationQueue.removeMutationBatch(t,r)))}(n,e,t,r).next((()=>r.apply(e))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,i,t.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=Sn();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t)))).next((()=>n.localDocuments.getDocuments(e,i)))}))}(n.localStore,t);vo(n,i,null),go(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await Eo(n,e)}catch(e){await Z(e)}}async function mo(e,t,n){const i=w(e);try{const e=await function(e,t){const n=w(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let i;return n.mutationQueue.lookupMutationBatch(e,t).next((t=>(b(null!==t),i=t.keys(),n.mutationQueue.removeMutationBatch(e,t)))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,i,t))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,i))).next((()=>n.localDocuments.getDocuments(e,i)))}))}(i.localStore,t);vo(i,t,n),go(i,t),i.sharedClientState.updateMutationState(t,"rejected",n),await Eo(i,e)}catch(e){await Z(e)}}function go(e,t){(e.lc.get(t)||[]).forEach((e=>{e.resolve()})),e.lc.delete(t)}function vo(e,t,n){const i=w(e);let r=i.hc[i.currentUser.toKey()];if(r){const e=r.get(t);e&&(n?e.reject(n):e.resolve(),r=r.remove(t)),i.hc[i.currentUser.toKey()]=r}}function yo(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const i of e.rc.get(t))e.ic.delete(i),n&&e.sc.wc(i,n);e.rc.delete(t),e.isPrimaryClient&&e.ac.ls(t).forEach((t=>{e.ac.containsKey(t)||bo(e,t)}))}function bo(e,t){e.oc.delete(t.path.canonicalString());const n=e.uc.get(t);null!==n&&(vr(e.remoteStore,n),e.uc=e.uc.remove(t),e.cc.delete(n),_o(e))}function wo(e,t,n){for(const i of n)i instanceof to?(e.ac.addReference(i.key,t),xo(e,i)):i instanceof no?(p("SyncEngine","Document no longer in limbo: "+i.key),e.ac.removeReference(i.key,t),e.ac.containsKey(i.key)||bo(e,i.key)):y()}function xo(e,t){const n=t.key,i=n.path.canonicalString();e.uc.get(n)||e.oc.has(i)||(p("SyncEngine","New document in limbo: "+n),e.oc.add(i),_o(e))}function _o(e){for(;e.oc.size>0&&e.uc.size<e.maxConcurrentLimboResolutions;){const t=e.oc.values().next().value;e.oc.delete(t);const n=new V(U.fromString(t)),i=e.fc.next();e.cc.set(i,new oo(n)),e.uc=e.uc.insert(n,i),gr(e.remoteStore,new yi(_t(gt(n.path)),i,2,Q.at))}}async function Eo(e,t,n){const i=w(e),r=[],o=[],s=[];i.ic.isEmpty()||(i.ic.forEach(((e,a)=>{s.push(i._c(a,t,n).then((e=>{if((e||n)&&i.isPrimaryClient&&i.sharedClientState.updateQueryState(a.targetId,(null==e?void 0:e.fromCache)?"not-current":"current"),e){r.push(e);const t=ji.Ci(a.targetId,e);o.push(t)}})))})),await Promise.all(s),i.sc.Wo(r),await async function(e,t){const n=w(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>X.forEach(t,(t=>X.forEach(t.Si,(i=>n.persistence.referenceDelegate.addReference(e,t.targetId,i))).next((()=>X.forEach(t.Di,(i=>n.persistence.referenceDelegate.removeReference(e,t.targetId,i)))))))))}catch(e){if(!J(e))throw e;p("LocalStore","Failed to update sequence numbers: "+e)}for(const e of t){const t=e.targetId;if(!e.fromCache){const e=n.qi.get(t),i=e.snapshotVersion,r=e.withLastLimboFreeSnapshotVersion(i);n.qi=n.qi.insert(t,r)}}}(i.localStore,o))}async function Io(e,t){const n=w(e);if(!n.currentUser.isEqual(t)){p("SyncEngine","User change. New user:",t.toKey());const e=await Wi(n.localStore,t);n.currentUser=t,(i=n).lc.forEach((e=>{e.forEach((e=>{e.reject(new _(x.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),i.lc.clear(),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await Eo(n,e.ji)}var i}function So(e,t){const n=w(e),i=n.cc.get(t);if(i&&i.nc)return Sn().add(i.key);{let e=Sn();const i=n.rc.get(t);if(!i)return e;for(const t of i){const i=n.ic.get(t);e=e.unionWith(i.view.ju)}return e}}function Ao(e){const t=w(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=lo.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=So.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=fo.bind(null,t),t.sc.Wo=Xr.bind(null,t.eventManager),t.sc.wc=Jr.bind(null,t.eventManager),t}function ko(e){const t=w(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=po.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=mo.bind(null,t),t}class To{async initialize(e){this.yt=sr(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,t){return null}Ec(e,t){return null}Ic(e){return Hi(this.persistence,new $i,e.initialUser,this.yt)}yc(e){return new Fi(Ui.Bs,this.yt)}gc(e){return new Qi}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}constructor(){this.synchronizeTabs=!1}}class Co{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>ho(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=Io.bind(null,this.syncEngine),await Ur(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new qr}createDatastore(e){const t=sr(e.databaseInfo.databaseId),n=(i=e.databaseInfo,new rr(i));var i,r,o;return r=e.authCredentials,o=e.appCheckCredentials,new dr(r,o,n,t)}createRemoteStore(e){var t,n,i,r,o;return t=this.localStore,n=this.datastore,i=e.asyncQueue,r=e=>ho(this.syncEngine,e,0),o=tr.C()?new tr:new er,new fr(t,n,i,r,o)}createSyncEngine(e,t){return function(e,t,n,i,r,o,s){const a=new so(e,t,n,i,r,o);return s&&(a.dc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=w(e);p("RemoteStore","RemoteStore shutting down."),t._u.add(5),await mr(t),t.mu.shutdown(),t.gu.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function No(e,t,n){if(!n)throw new _(x.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Ro(e){if(!V.isDocumentKey(e))throw new _(x.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Lo(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const n=(t=e).constructor?t.constructor.name:null;return n?`a custom ${n} object`:"an object"}}var t;return"function"==typeof e?"a function":y()}function Mo(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new _(x.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Lo(e);throw new _(x.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Oo=new Map;class Do{isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new _(x.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new _(x.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,function(e,t,n,i){if(!0===t&&!0===i)throw new _(x.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{get app(){if(!this._app)throw new _(x.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new _(x.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Do(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new S;switch(e.type){case"gapi":const t=e.client;return new C(t,e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new _(x.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=Oo.get(e);t&&(p("ComponentProvider","Removing Datastore"),Oo.delete(e),t.terminate())}(this),Promise.resolve()}constructor(e,t,n,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Do({}),this._settingsFrozen=!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fo{get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Uo(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Fo(this.firestore,e,this._key)}constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}}class Bo{withConverter(e){return new Bo(this.firestore,e,this._query)}constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}}class Uo extends Bo{get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Fo(this.firestore,null,new V(e))}withConverter(e){return new Uo(this.firestore,e,this._path)}constructor(e,t,n){super(e,t,gt(n)),this._path=n,this.type="collection"}}function jo(e,t,...n){if(e=(0,a.getModularInstance)(e),1===arguments.length&&(t=M.R()),No("doc","path",t),e instanceof Po){const i=U.fromString(t,...n);return Ro(i),new Fo(e,null,new V(i))}{if(!(e instanceof Fo||e instanceof Uo))throw new _(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=e._path.child(U.fromString(t,...n));return Ro(i),new Fo(e.firestore,e instanceof Uo?e.converter:null,new V(i))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $o{next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):m("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}Rc(e,t){this.muted||setTimeout((()=>{this.muted||e(t)}),0)}constructor(e){this.observer=e,this.muted=!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Vo{async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new _(x.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new E;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=Hr(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}constructor(e,t,n,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=i,this.user=l.UNAUTHENTICATED,this.clientId=M.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async e=>{p("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(e=>(p("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user))))}}async function Ho(e,t){e.asyncQueue.verifyOperationInProgress(),p("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let i=n.initialUser;e.setCredentialChangeListener((async e=>{i.isEqual(e)||(await Wi(t.localStore,e),i=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e.offlineComponents=t}async function Wo(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Go(e);p("FirestoreClient","Initializing OnlineComponentProvider");const i=await e.getConfiguration();await t.initialize(n,i),e.setCredentialChangeListener((e=>Br(t.remoteStore,e))),e.setAppCheckTokenChangeListener(((e,n)=>Br(t.remoteStore,n))),e.onlineComponents=t}async function Go(e){return e.offlineComponents||(p("FirestoreClient","Using default OfflineComponentProvider"),await Ho(e,new To)),e.offlineComponents}async function zo(e){return e.onlineComponents||(p("FirestoreClient","Using default OnlineComponentProvider"),await Wo(e,new Co)),e.onlineComponents}function Ko(e){return zo(e).then((e=>e.syncEngine))}async function qo(e){const t=await zo(e),n=t.eventManager;return n.onListen=ao.bind(null,t.syncEngine),n.onUnlisten=co.bind(null,t.syncEngine),n}function Yo(e,t,n={}){const i=new E;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,i,r){const o=new $o({next:o=>{t.enqueueAndForget((()=>Zr(e,s)));const a=o.docs.has(n);!a&&o.fromCache?r.reject(new _(x.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&o.fromCache&&i&&"server"===i.source?r.reject(new _(x.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):r.resolve(o)},error:e=>r.reject(e)}),s=new eo(gt(n.path),o,{includeMetadataChanges:!0,Nu:!0});return Yr(e,s)}(await qo(e),e.asyncQueue,t,n,i))),i.promise}class Zo{get isShuttingDown(){return this.qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.qc){this.qc=!0,this.Qc=e||!1;const t=or();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.qc)return new Promise((()=>{}));const t=new E;return this.Hc((()=>this.qc&&this.Qc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Lc.push(e),this.Jc())))}async Jc(){if(0!==this.Lc.length){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!J(e))throw e;p("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro((()=>this.Jc()))}}Hc(e){const t=this.Bc.then((()=>(this.Gc=!0,e().catch((e=>{this.Kc=e,this.Gc=!1;throw m("INTERNAL UNHANDLED ERROR: ",function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}(e)),e})).then((e=>(this.Gc=!1,e))))));return this.Bc=t,t}enqueueAfterDelay(e,t,n){this.zc(),this.jc.indexOf(e)>-1&&(t=0);const i=Vr.createAndSchedule(this,e,t,n,(e=>this.Yc(e)));return this.Uc.push(i),i}zc(){this.Kc&&y()}verifyOperationInProgress(){}async Xc(){let e;do{e=this.Bc,await e}while(e!==this.Bc)}Zc(e){for(const t of this.Uc)if(t.timerId===e)return!0;return!1}ta(e){return this.Xc().then((()=>{this.Uc.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.Uc)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Xc()}))}ea(e){this.jc.push(e)}Yc(e){const t=this.Uc.indexOf(e);this.Uc.splice(t,1)}constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new ar(this,"async_queue_retry"),this.Wc=()=>{const e=or();e&&p("AsyncQueue","Visibility state changed to "+e.visibilityState),this.xo.Po()};const e=or();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Wc)}}class Xo extends Po{_terminate(){return this._firestoreClient||es(this),this._firestoreClient.terminate()}constructor(e,t,n,i){super(e,t,n,i),this.type="firestore",this._queue=new Zo,this._persistenceKey=(null==i?void 0:i.name)||"[DEFAULT]"}}function Jo(e,t){const n="object"==typeof e?e:(0,i.getApp)(),r="string"==typeof e?e:t||"(default)",o=(0,i._getProvider)(n,"firestore").getImmediate({identifier:r});if(!o._initialized){const e=(0,a.getDefaultEmulatorHostnameAndPort)("firestore");e&&function(e,t,n,i={}){var r;const o=(e=Mo(e,Po))._getSettings();if("firestore.googleapis.com"!==o.host&&o.host!==t&&g("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},o),{host:`${t}:${n}`,ssl:!1})),i.mockUserToken){let t,n;if("string"==typeof i.mockUserToken)t=i.mockUserToken,n=l.MOCK_USER;else{t=(0,a.createMockUserToken)(i.mockUserToken,null===(r=e._app)||void 0===r?void 0:r.options.projectId);const o=i.mockUserToken.sub||i.mockUserToken.user_id;if(!o)throw new _(x.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new l(o)}e._authCredentials=new A(new I(t,n))}}(o,...e)}return o}function Qo(e){return e._firestoreClient||es(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function es(e){var t;const n=e._freezeSettings(),i=(r=e._databaseId,o=(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",s=e._persistenceKey,new ee(r,o,s,(a=n).host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams));var r,o,s,a;e._firestoreClient=new Vo(e._authCredentials,e._appCheckCredentials,e._queue,i)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ts{static fromBase64String(e){try{return new ts(ce.fromBase64String(e))}catch(e){throw new _(x.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new ts(ce.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}constructor(e){this._byteString=e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{isEqual(e){return this._internalPath.isEqual(e._internalPath)}constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new _(x.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new $(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class is{constructor(e){this._methodName=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return O(this._lat,e._lat)||O(this._long,e._long)}constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new _(x.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new _(x.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const os=/^__.*__$/;class ss{toMutation(e,t){return null!==this.fieldMask?new nn(e,this.data,this.fieldMask,t,this.fieldTransforms):new tn(e,this.data,t,this.fieldTransforms)}constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}}function as(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw y()}}class us{get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new us(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.yt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),i=this.ia({path:n,oa:!1});return i.ua(e),i}ca(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),i=this.ia({path:n,oa:!1});return i.na(),i}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return ws(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(0===e.length)throw this.ha("Document fields must not be empty");if(as(this.sa)&&os.test(e))throw this.ha('Document fields cannot begin and end with "__"')}constructor(e,t,n,i,r,o){this.settings=e,this.databaseId=t,this.yt=n,this.ignoreUndefinedProperties=i,void 0===r&&this.na(),this.fieldTransforms=r||[],this.fieldMask=o||[]}}class cs{da(e,t,n,i=!1){return new us({sa:e,methodName:t,fa:n,path:$.emptyPath(),oa:!1,la:i},this.databaseId,this.yt,this.ignoreUndefinedProperties)}constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.yt=n||sr(e)}}function ls(e){const t=e._freezeSettings(),n=sr(e._databaseId);return new cs(e._databaseId,!!t.ignoreUndefinedProperties,n)}function ds(e,t,n,i,r,o={}){const s=e.da(o.merge||o.mergeFields?2:0,t,n,r);gs("Data must be an object, but it was:",s,i);const a=ps(i,s);let u,c;if(o.merge)u=new ot(s.fieldMask),c=s.fieldTransforms;else if(o.mergeFields){const e=[];for(const i of o.mergeFields){const r=vs(t,i,n);if(!s.contains(r))throw new _(x.INVALID_ARGUMENT,`Field '${r}' is specified in your field mask but missing from your input data.`);xs(e,r)||e.push(r)}u=new ot(e),c=s.fieldTransforms.filter((e=>u.covers(e.field)))}else u=null,c=s.fieldTransforms;return new ss(new st(a),u,c)}class hs extends is{_toFieldTransform(e){return new Gt(e.path,new Ft)}isEqual(e){return e instanceof hs}}function fs(e,t){if(ms(e=(0,a.getModularInstance)(e)))return gs("Unsupported field value:",t,e),ps(e,t);if(e instanceof is)return function(e,t){if(!as(t.sa))throw t.ha(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.ha(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.oa&&4!==t.sa)throw t.ha("Nested arrays are not supported");return function(e,t){const n=[];let i=0;for(const r of e){let e=fs(r,t.aa(i));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),i++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=(0,a.getModularInstance)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return Mt(t.yt,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=P.fromDate(e);return{timestampValue:$n(t.yt,n)}}if(e instanceof P){const n=new P(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:$n(t.yt,n)}}if(e instanceof rs)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof ts)return{bytesValue:Vn(t.yt,e._byteString)};if(e instanceof Fo){const n=t.databaseId,i=e.firestore._databaseId;if(!i.isEqual(n))throw t.ha(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Gn(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.ha(`Unsupported field value: ${Lo(e)}`)}(e,t)}function ps(e,t){const n={};return re(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):ie(e,((e,i)=>{const r=fs(i,t.ra(e));null!=r&&(n[e]=r)})),{mapValue:{fields:n}}}function ms(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof P||e instanceof rs||e instanceof ts||e instanceof Fo||e instanceof is)}function gs(e,t,n){if(!ms(n)||("object"!=typeof(i=n)||null===i||Object.getPrototypeOf(i)!==Object.prototype&&null!==Object.getPrototypeOf(i))){const i=Lo(n);throw"an object"===i?t.ha(e+" a custom object"):t.ha(e+" "+i)}var i}function vs(e,t,n){if((t=(0,a.getModularInstance)(t))instanceof ns)return t._internalPath;if("string"==typeof t)return bs(e,t);throw ws("Field path arguments must be of type string or ",e,!1,void 0,n)}const ys=new RegExp("[~\\*/\\[\\]]");function bs(e,t,n){if(t.search(ys)>=0)throw ws(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new ns(...t.split("."))._internalPath}catch(i){throw ws(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function ws(e,t,n,i,r){const o=i&&!i.isEmpty(),s=void 0!==r;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(o||s)&&(u+=" (found",o&&(u+=` in field ${i}`),s&&(u+=` in document ${r}`),u+=")"),new _(x.INVALID_ARGUMENT,a+e+u)}function xs(e,t){return e.some((e=>e.isEqual(t)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{get id(){return this._key.path.lastSegment()}get ref(){return new Fo(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new Es(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Is("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}constructor(e,t,n,i,r){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=i,this._converter=r}}class Es extends _s{data(){return super.data()}}function Is(e,t){return"string"==typeof t?bs(e,t):t instanceof ns?t._internalPath:t._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{convertValue(e,t="none"){switch(ye(e)){case 0:return null;case 1:return e.booleanValue;case 2:return he(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(fe(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw y()}}convertObject(e,t){const n={};return ie(e.fields,((e,i)=>{n[e]=this.convertValue(i,t)})),n}convertGeoPoint(e){return new rs(he(e.latitude),he(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=me(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(ge(e));default:return null}}convertTimestamp(e){const t=de(e);return new P(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=U.fromString(e);b(di(n));const i=new te(n.get(1),n.get(3)),r=new V(n.popFirst(5));return i.isEqual(t)||m(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),r}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function As(e,t,n){let i;return i=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ks{isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}}class Ts extends _s{exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Cs(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Is("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}constructor(e,t,n,i,r,o){super(e,t,n,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}}class Cs extends Ts{data(e={}){return super.data(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ns(e){e=Mo(e,Fo);const t=Mo(e.firestore,Xo);return Yo(Qo(t),e._key).then((n=>Os(t,e,n)))}class Rs extends Ss{convertBytes(e){return new ts(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Fo(this.firestore,null,t)}constructor(e){super(),this.firestore=e}}function Ls(e,t,n){e=Mo(e,Fo);const i=Mo(e.firestore,Xo),r=As(e.converter,t,n);return Ms(i,[ds(ls(i),"setDoc",e._key,r,null!==e.converter,n).toMutation(e._key,Kt.none())])}function Ms(e,t){return function(e,t){const n=new E;return e.asyncQueue.enqueueAndForget((async()=>async function(e,t,n){const i=ko(e);try{const e=await function(e,t){const n=w(e),i=P.now(),r=t.reduce(((e,t)=>e.add(t.key)),Sn());let o,s;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>{let a=gn(),u=Sn();return n.Gi.getEntries(e,r).next((e=>{a=e,a.forEach(((e,t)=>{t.isValidDocument()||(u=u.add(e))}))})).next((()=>n.localDocuments.getOverlayedDocuments(e,a))).next((r=>{o=r;const s=[];for(const e of t){const t=Qt(e,o.get(e.key).overlayedDocument);null!=t&&s.push(new nn(e.key,t,at(t.value.mapValue),Kt.exists(!0)))}return n.mutationQueue.addMutationBatch(e,i,s,t)})).next((t=>{s=t;const i=t.applyToLocalDocumentSet(o,u);return n.documentOverlayCache.saveOverlays(e,t.batchId,i)}))})).then((()=>({batchId:s.batchId,changes:bn(o)})))}(i.localStore,t);i.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let i=e.hc[e.currentUser.toKey()];i||(i=new et(O)),i=i.insert(t,n),e.hc[e.currentUser.toKey()]=i}(i,e.batchId,n),await Eo(i,e.changes),await Cr(i.remoteStore)}catch(e){const t=Hr(e,"Failed to persist write");n.reject(t)}}(await Ko(e),t,n))),n.promise}(Qo(e),t)}function Os(e,t,n){const i=n.docs.get(t._key),r=new Rs(e);return new Ts(e,r,t._key,i,new ks(n.hasPendingWrites,n.fromCache),t.converter)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ds(){return new hs("serverTimestamp")}!function(e,t=!0){var n;n=i.SDK_VERSION,d=n,(0,i._registerComponent)(new(0,r.Component)("firestore",((e,{instanceIdentifier:n,options:i})=>{const r=e.getProvider("app").getImmediate(),o=new Xo(new k(e.getProvider("auth-internal")),new R(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new _(x.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new te(e.options.projectId,t)}(r,n),r);return i=Object.assign({useFetchStreams:t},i),o._setSettings(i),o}),"PUBLIC").setMultipleInstances(!0)),(0,i.registerVersion)(c,"3.8.0",e),(0,i.registerVersion)(c,"3.8.0","esm2017")}()})),o.register("lW9Fu",(function(t,i){e(t.exports,"createWebChannelTransport",(function(){return Jn})),e(t.exports,"getStatEventTarget",(function(){return Qn})),e(t.exports,"ErrorCode",(function(){return ei})),e(t.exports,"EventType",(function(){return ti})),e(t.exports,"Event",(function(){return ni})),e(t.exports,"Stat",(function(){return ii})),e(t.exports,"FetchXmlHttpFactory",(function(){return ri})),e(t.exports,"WebChannel",(function(){return oi})),e(t.exports,"XhrIo",(function(){return si}));var r,o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n?n:"undefined"!=typeof self?self:{},s={},a=a||{},u=o||self;function c(){}function l(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function d(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}var h="closure_uid_"+(1e9*Math.random()>>>0),f=0;function p(e,t,n){return e.call.apply(e.bind,arguments)}function m(e,t,n){if(!e)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function g(e,t,n){return(g=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?p:m).apply(null,arguments)}function v(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function y(e,t){function n(){}n.prototype=t.prototype,e.X=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Wb=function(e,n,i){for(var r=Array(arguments.length-2),o=2;o<arguments.length;o++)r[o-2]=arguments[o];return t.prototype[n].apply(e,r)}}function b(){this.s=this.s,this.o=this.o}b.prototype.s=!1,b.prototype.na=function(){var e;!this.s&&(this.s=!0,this.M(),0)&&(e=this,Object.prototype.hasOwnProperty.call(e,h)&&e[h]||(e[h]=++f))},b.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const w=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"==typeof e)return"string"!=typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function x(e){const t=e.length;if(0<t){const n=Array(t);for(let i=0;i<t;i++)n[i]=e[i];return n}return[]}function _(e,t){for(let t=1;t<arguments.length;t++){const n=arguments[t];if(l(n)){const t=e.length||0,i=n.length||0;e.length=t+i;for(let r=0;r<i;r++)e[t+r]=n[r]}else e.push(n)}}function E(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}E.prototype.h=function(){this.defaultPrevented=!0};var I=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{u.addEventListener("test",c,t),u.removeEventListener("test",c,t)}catch(e){}return e}();function S(e){return/^[\s\xa0]*$/.test(e)}var A=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function k(e,t){return e<t?-1:e>t?1:0}function T(){var e=u.navigator;return e&&(e=e.userAgent)?e:""}function C(e){return-1!=T().indexOf(e)}function N(e){return N[" "](e),e}N[" "]=c;var R,L,M=C("Opera"),O=C("Trident")||C("MSIE"),D=C("Edge"),P=D||O,F=C("Gecko")&&!(-1!=T().toLowerCase().indexOf("webkit")&&!C("Edge"))&&!(C("Trident")||C("MSIE"))&&!C("Edge"),B=-1!=T().toLowerCase().indexOf("webkit")&&!C("Edge");function U(){var e=u.document;return e?e.documentMode:void 0}e:{var j="",$=(L=T(),F?/rv:([^\);]+)(\)|;)/.exec(L):D?/Edge\/([\d\.]+)/.exec(L):O?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(L):B?/WebKit\/(\S+)/.exec(L):M?/(?:Version)[ \/]?(\S+)/.exec(L):void 0);if($&&(j=$?$[1]:""),O){var V=U();if(null!=V&&V>parseFloat(j)){R=String(V);break e}}R=j}var H,W={};function G(){return function(e){var t=W;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}((function(){let e=0;const t=A(String(R)).split("."),n=A("9").split("."),i=Math.max(t.length,n.length);for(let s=0;0==e&&s<i;s++){var r=t[s]||"",o=n[s]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],o=/(\d*)(\D*)(.*)/.exec(o)||["","","",""],0==r[0].length&&0==o[0].length)break;e=k(0==r[1].length?0:parseInt(r[1],10),0==o[1].length?0:parseInt(o[1],10))||k(0==r[2].length,0==o[2].length)||k(r[2],o[2]),r=r[3],o=o[3]}while(0==e)}return 0<=e}))}if(u.document&&O){var z=U();H=z||(parseInt(R,10)||void 0)}else H=void 0;var K=H;function q(e,t){if(E.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,i=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(F){e:{try{N(t.nodeName);var r=!0;break e}catch(e){}r=!1}r||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:Y[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&q.X.h.call(this)}}y(q,E);var Y={2:"touch",3:"pen",4:"mouse"};q.prototype.h=function(){q.X.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Z="closure_listenable_"+(1e6*Math.random()|0),X=0;function J(e,t,n,i,r){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!i,this.ha=r,this.key=++X,this.ba=this.ea=!1}function Q(e){e.ba=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function ee(e,t,n){for(const i in e)t.call(n,e[i],i,e)}function te(e){const t={};for(const n in e)t[n]=e[n];return t}const ne="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ie(e,t){let n,i;for(let t=1;t<arguments.length;t++){for(n in i=arguments[t],i)e[n]=i[n];for(let t=0;t<ne.length;t++)n=ne[t],Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}}function re(e){this.src=e,this.g={},this.h=0}function oe(e,t){var n=t.type;if(n in e.g){var i,r=e.g[n],o=w(r,t);(i=0<=o)&&Array.prototype.splice.call(r,o,1),i&&(Q(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function se(e,t,n,i){for(var r=0;r<e.length;++r){var o=e[r];if(!o.ba&&o.listener==t&&o.capture==!!n&&o.ha==i)return r}return-1}re.prototype.add=function(e,t,n,i,r){var o=e.toString();(e=this.g[o])||(e=this.g[o]=[],this.h++);var s=se(e,t,i,r);return-1<s?(t=e[s],n||(t.ea=!1)):((t=new J(t,this.src,o,!!i,r)).ea=n,e.push(t)),t};var ae="closure_lm_"+(1e6*Math.random()|0),ue={};function ce(e,t,n,i,r){if(i&&i.once)return de(e,t,n,i,r);if(Array.isArray(t)){for(var o=0;o<t.length;o++)ce(e,t[o],n,i,r);return null}return n=ye(n),e&&e[Z]?e.N(t,n,d(i)?!!i.capture:!!i,r):le(e,t,n,!1,i,r)}function le(e,t,n,i,r,o){if(!t)throw Error("Invalid event type");var s=d(r)?!!r.capture:!!r,a=ge(e);if(a||(e[ae]=a=new re(e)),(n=a.add(t,n,i,s,o)).proxy)return n;if(i=function(){function e(n){return t.call(e.src,e.listener,n)}const t=me;return e}(),n.proxy=i,i.src=e,i.listener=n,e.addEventListener)I||(r=s),void 0===r&&(r=!1),e.addEventListener(t.toString(),i,r);else if(e.attachEvent)e.attachEvent(pe(t.toString()),i);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(i)}return n}function de(e,t,n,i,r){if(Array.isArray(t)){for(var o=0;o<t.length;o++)de(e,t[o],n,i,r);return null}return n=ye(n),e&&e[Z]?e.O(t,n,d(i)?!!i.capture:!!i,r):le(e,t,n,!0,i,r)}function he(e,t,n,i,r){if(Array.isArray(t))for(var o=0;o<t.length;o++)he(e,t[o],n,i,r);else i=d(i)?!!i.capture:!!i,n=ye(n),e&&e[Z]?(e=e.i,(t=String(t).toString())in e.g&&(-1<(n=se(o=e.g[t],n,i,r))&&(Q(o[n]),Array.prototype.splice.call(o,n,1),0==o.length&&(delete e.g[t],e.h--)))):e&&(e=ge(e))&&(t=e.g[t.toString()],e=-1,t&&(e=se(t,n,i,r)),(n=-1<e?t[e]:null)&&fe(n))}function fe(e){if("number"!=typeof e&&e&&!e.ba){var t=e.src;if(t&&t[Z])oe(t.i,e);else{var n=e.type,i=e.proxy;t.removeEventListener?t.removeEventListener(n,i,e.capture):t.detachEvent?t.detachEvent(pe(n),i):t.addListener&&t.removeListener&&t.removeListener(i),(n=ge(t))?(oe(n,e),0==n.h&&(n.src=null,t[ae]=null)):Q(e)}}}function pe(e){return e in ue?ue[e]:ue[e]="on"+e}function me(e,t){if(e.ba)e=!0;else{t=new q(t,this);var n=e.listener,i=e.ha||e.src;e.ea&&fe(e),e=n.call(i,t)}return e}function ge(e){return(e=e[ae])instanceof re?e:null}var ve="__closure_events_fn_"+(1e9*Math.random()>>>0);function ye(e){return"function"==typeof e?e:(e[ve]||(e[ve]=function(t){return e.handleEvent(t)}),e[ve])}function be(){b.call(this),this.i=new re(this),this.P=this,this.I=null}function we(e,t){var n,i=e.I;if(i)for(n=[];i;i=i.I)n.push(i);if(e=e.P,i=t.type||t,"string"==typeof t)t=new E(t,e);else if(t instanceof E)t.target=t.target||e;else{var r=t;ie(t=new E(i,e),r)}if(r=!0,n)for(var o=n.length-1;0<=o;o--){var s=t.g=n[o];r=xe(s,i,!0,t)&&r}if(r=xe(s=t.g=e,i,!0,t)&&r,r=xe(s,i,!1,t)&&r,n)for(o=0;o<n.length;o++)r=xe(s=t.g=n[o],i,!1,t)&&r}function xe(e,t,n,i){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var r=!0,o=0;o<t.length;++o){var s=t[o];if(s&&!s.ba&&s.capture==n){var a=s.listener,u=s.ha||s.src;s.ea&&oe(e.i,s),r=!1!==a.call(u,i)&&r}}return r&&!i.defaultPrevented}y(be,b),be.prototype[Z]=!0,be.prototype.removeEventListener=function(e,t,n,i){he(this,e,t,n,i)},be.prototype.M=function(){if(be.X.M.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],i=0;i<n.length;i++)Q(n[i]);delete t.g[e],t.h--}}this.I=null},be.prototype.N=function(e,t,n,i){return this.i.add(String(e),t,!1,n,i)},be.prototype.O=function(e,t,n,i){return this.i.add(String(e),t,!0,n,i)};var _e=u.JSON.stringify;function Ee(){var e=Ne;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var Ie,Se=new class{get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}}((()=>new Ae),(e=>e.reset()));class Ae{set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}constructor(){this.next=this.g=this.h=null}}function ke(e){u.setTimeout((()=>{throw e}),0)}function Te(e,t){Ie||function(){var e=u.Promise.resolve(void 0);Ie=function(){e.then(Re)}}(),Ce||(Ie(),Ce=!0),Ne.add(e,t)}var Ce=!1,Ne=new class{add(e,t){const n=Se.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}constructor(){this.h=this.g=null}};function Re(){for(var e;e=Ee();){try{e.h.call(e.g)}catch(e){ke(e)}var t=Se;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Ce=!1}function Le(e,t){be.call(this),this.h=e||1,this.g=t||u,this.j=g(this.lb,this),this.l=Date.now()}function Me(e){e.ca=!1,e.R&&(e.g.clearTimeout(e.R),e.R=null)}function Oe(e,t,n){if("function"==typeof e)n&&(e=g(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=g(e.handleEvent,e)}return 2147483647<Number(t)?-1:u.setTimeout(e,t||0)}function De(e){e.g=Oe((()=>{e.g=null,e.i&&(e.i=!1,De(e))}),e.j);const t=e.h;e.h=null,e.m.apply(null,t)}y(Le,be),(r=Le.prototype).ca=!1,r.R=null,r.lb=function(){if(this.ca){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-e):(this.R&&(this.g.clearTimeout(this.R),this.R=null),we(this,"tick"),this.ca&&(Me(this),this.start()))}},r.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())},r.M=function(){Le.X.M.call(this),Me(this),delete this.g};class Pe extends b{l(e){this.h=arguments,this.g?this.i=!0:De(this)}M(){super.M(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}}function Fe(e){b.call(this),this.h=e,this.g={}}y(Fe,b);var Be=[];function Ue(e,t,n,i){Array.isArray(n)||(n&&(Be[0]=n.toString()),n=Be);for(var r=0;r<n.length;r++){var o=ce(t,n[r],i||e.handleEvent,!1,e.h||e);if(!o)break;e.g[o.key]=o}}function je(e){ee(e.g,(function(e,t){this.g.hasOwnProperty(t)&&fe(e)}),e),e.g={}}function $e(){this.g=!0}function Ve(e,t,n,i){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var i=n[e];if(!(2>i.length)){var r=i[1];if(Array.isArray(r)&&!(1>r.length)){var o=r[0];if("noop"!=o&&"stop"!=o&&"close"!=o)for(var s=1;s<r.length;s++)r[s]=""}}}return _e(n)}catch(e){return t}}(e,n)+(i?" "+i:"")}))}Fe.prototype.M=function(){Fe.X.M.call(this),je(this)},Fe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},$e.prototype.Aa=function(){this.g=!1},$e.prototype.info=function(){};var He={},We=null;function Ge(){return We=We||new be}function ze(e){E.call(this,He.Pa,e)}function Ke(e){const t=Ge();we(t,new ze(t))}function qe(e,t){E.call(this,He.STAT_EVENT,e),this.stat=t}function Ye(e){const t=Ge();we(t,new qe(t,e))}function Ze(e,t){E.call(this,He.Qa,e),this.size=t}function Xe(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return u.setTimeout((function(){e()}),t)}He.Pa="serverreachability",y(ze,E),He.STAT_EVENT="statevent",y(qe,E),He.Qa="timingevent",y(Ze,E);var Je={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Qe={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function et(){}function tt(e){return e.h||(e.h=e.i())}function nt(){}et.prototype.h=null;var it,rt={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function ot(){E.call(this,"d")}function st(){E.call(this,"c")}function at(){}function ut(e,t,n,i){this.l=e,this.j=t,this.m=n,this.U=i||1,this.S=new Fe(this),this.O=lt,e=P?125:void 0,this.T=new Le(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new ct}function ct(){this.i=null,this.g="",this.h=!1}y(ot,E),y(st,E),y(at,et),at.prototype.g=function(){return new XMLHttpRequest},at.prototype.i=function(){return{}},it=new at;var lt=45e3,dt={},ht={};function ft(e,t,n){e.K=1,e.v=Lt(kt(t)),e.s=n,e.P=!0,pt(e,null)}function pt(e,t){e.F=Date.now(),yt(e),e.A=kt(e.v);var n=e.A,i=e.U;Array.isArray(i)||(i=[String(i)]),Gt(n.i,"t",i),e.C=0,n=e.l.H,e.h=new ct,e.g=Gn(e.l,n?t:null,!e.s),0<e.N&&(e.L=new Pe(g(e.La,e,e.g),e.N)),Ue(e.S,e.g,"readystatechange",e.ib),t=e.H?te(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.da(e.A,e.u,e.s,t)):(e.u="GET",e.g.da(e.A,e.u,null,t)),Ke(),function(e,t,n,i,r,o){e.info((function(){if(e.g)if(o)for(var s="",a=o.split("&"),u=0;u<a.length;u++){var c=a[u].split("=");if(1<c.length){var l=c[0];c=c[1];var d=l.split("_");s=2<=d.length&&"type"==d[1]?s+(l+"=")+c+"&":s+(l+"=redacted&")}}else s=null;else s=o;return"XMLHTTP REQ ("+i+") [attempt "+r+"]: "+t+"\n"+n+"\n"+s}))}(e.j,e.u,e.A,e.m,e.U,e.s)}function mt(e){return!!e.g&&("GET"==e.u&&2!=e.K&&e.l.Da)}function gt(e,t,n){let i,r=!0;for(;!e.I&&e.C<n.length;){if(i=vt(e,n),i==ht){4==t&&(e.o=4,Ye(14),r=!1),Ve(e.j,e.m,null,"[Incomplete Response]");break}if(i==dt){e.o=4,Ye(15),Ve(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}Ve(e.j,e.m,i,null),Et(e,i)}mt(e)&&i!=ht&&i!=dt&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,Ye(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.$&&(e.$=!0,(t=e.l).g==e&&t.$&&!t.K&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Fn(t),t.K=!0,Ye(11))):(Ve(e.j,e.m,n,"[Invalid Chunked Response]"),_t(e),xt(e))}function vt(e,t){var n=e.C,i=t.indexOf("\n",n);return-1==i?ht:(n=Number(t.substring(n,i)),isNaN(n)?dt:(i+=1)+n>t.length?ht:(t=t.substr(i,n),e.C=i+n,t))}function yt(e){e.V=Date.now()+e.O,bt(e,e.O)}function bt(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=Xe(g(e.gb,e),t)}function wt(e){e.B&&(u.clearTimeout(e.B),e.B=null)}function xt(e){0==e.l.G||e.I||jn(e.l,e)}function _t(e){wt(e);var t=e.L;t&&"function"==typeof t.na&&t.na(),e.L=null,Me(e.T),je(e.S),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function Et(e,t){try{var n=e.l;if(0!=n.G&&(n.g==e||Xt(n.h,e)))if(!e.J&&Xt(n.h,e)&&3==n.G){try{var i=n.Fa.g.parse(t)}catch(e){i=null}if(Array.isArray(i)&&3==i.length){var r=i;if(0==r[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;Un(n),Cn(n)}Pn(n),Ye(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&0==n.A&&!n.v&&(n.v=Xe(g(n.cb,n),6e3));if(1>=Zt(n.h)&&n.ja){try{n.ja()}catch(e){}n.ja=void 0}}else Vn(n,11)}else if((e.J||n.g==e)&&Un(n),!S(t))for(r=n.Fa.g.parse(t),t=0;t<r.length;t++){let c=r[t];if(n.T=c[0],c=c[1],2==n.G)if("c"==c[0]){n.I=c[1],n.ka=c[2];const t=c[3];null!=t&&(n.ma=t,n.j.info("VER="+n.ma));const r=c[4];null!=r&&(n.Ca=r,n.j.info("SVER="+n.Ca));const l=c[5];null!=l&&"number"==typeof l&&0<l&&(i=1.5*l,n.J=i,n.j.info("backChannelRequestTimeoutMs_="+i)),i=n;const d=e.g;if(d){const e=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var o=i.h;o.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(o.j=o.l,o.g=new Set,o.h&&(Jt(o,o.h),o.h=null))}if(i.D){const e=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(i.za=e,Rt(i.F,i.D,e))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-e.F,n.j.info("Handshake RTT: "+n.P+"ms"));var s=e;if((i=n).sa=Wn(i,i.H?i.ka:null,i.V),s.J){Qt(i.h,s);var a=s,u=i.J;u&&a.setTimeout(u),a.B&&(wt(a),yt(a)),i.g=s}else Dn(i);0<n.i.length&&Rn(n)}else"stop"!=c[0]&&"close"!=c[0]||Vn(n,7);else 3==n.G&&("stop"==c[0]||"close"==c[0]?"stop"==c[0]?Vn(n,7):Tn(n):"noop"!=c[0]&&n.l&&n.l.wa(c),n.A=0)}Ke()}catch(e){}}function It(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(l(e)||"string"==typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=function(e){if(e.oa&&"function"==typeof e.oa)return e.oa();if(!e.W||"function"!=typeof e.W){if("undefined"!=typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!=typeof Set&&e instanceof Set)){if(l(e)||"string"==typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const i in e)t[n++]=i;return t}}}(e),i=function(e){if(e.W&&"function"==typeof e.W)return e.W();if("undefined"!=typeof Map&&e instanceof Map||"undefined"!=typeof Set&&e instanceof Set)return Array.from(e.values());if("string"==typeof e)return e.split("");if(l(e)){for(var t=[],n=e.length,i=0;i<n;i++)t.push(e[i]);return t}for(i in t=[],n=0,e)t[n++]=e[i];return t}(e),r=i.length,o=0;o<r;o++)t.call(void 0,i[o],n&&n[o],e)}(r=ut.prototype).setTimeout=function(e){this.O=e},r.ib=function(e){e=e.target;const t=this.L;t&&3==_n(e)?t.l():this.La(e)},r.La=function(e){try{if(e==this.g)e:{const d=_n(this.g);var t=this.g.Ea();this.g.aa();if(!(3>d)&&(3!=d||P||this.g&&(this.h.h||this.g.fa()||En(this.g)))){this.I||4!=d||7==t||Ke(),wt(this);var n=this.g.aa();this.Y=n;t:if(mt(this)){var i=En(this.g);e="";var r=i.length,o=4==_n(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){_t(this),xt(this);var s="";break t}this.h.i=new u.TextDecoder}for(t=0;t<r;t++)this.h.h=!0,e+=this.h.i.decode(i[t],{stream:o&&t==r-1});i.splice(0,r),this.h.g+=e,this.C=0,s=this.h.g}else s=this.g.fa();if(this.i=200==n,function(e,t,n,i,r,o,s){e.info((function(){return"XMLHTTP RESP ("+i+") [ attempt "+r+"]: "+t+"\n"+n+"\n"+o+" "+s}))}(this.j,this.u,this.A,this.m,this.U,d,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!S(a)){var l=a;break t}}l=null}if(!(n=l)){this.i=!1,this.o=3,Ye(12),_t(this),xt(this);break e}Ve(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Et(this,n)}this.P?(gt(this,d,s),P&&this.i&&3==d&&(Ue(this.S,this.T,"tick",this.hb),this.T.start())):(Ve(this.j,this.m,s,null),Et(this,s)),4==d&&_t(this),this.i&&!this.I&&(4==d?jn(this.l,this):(this.i=!1,yt(this)))}else 400==n&&0<s.indexOf("Unknown SID")?(this.o=3,Ye(12)):(this.o=0,Ye(13)),_t(this),xt(this)}}}catch(e){}},r.hb=function(){if(this.g){var e=_n(this.g),t=this.g.fa();this.C<t.length&&(wt(this),gt(this,e,t),this.i&&4!=e&&yt(this))}},r.cancel=function(){this.I=!0,_t(this)},r.gb=function(){this.B=null;const e=Date.now();0<=e-this.V?(function(e,t){e.info((function(){return"TIMEOUT: "+t}))}(this.j,this.A),2!=this.K&&(Ke(),Ye(17)),_t(this),this.o=2,xt(this)):bt(this,this.V-e)};var St=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function At(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof At){this.h=void 0!==t?t:e.h,Tt(this,e.j),this.s=e.s,this.g=e.g,Ct(this,e.m),this.l=e.l,t=e.i;var n=new $t;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Nt(this,n),this.o=e.o}else e&&(n=String(e).match(St))?(this.h=!!t,Tt(this,n[1]||"",!0),this.s=Mt(n[2]||""),this.g=Mt(n[3]||"",!0),Ct(this,n[4]),this.l=Mt(n[5]||"",!0),Nt(this,n[6]||"",!0),this.o=Mt(n[7]||"")):(this.h=!!t,this.i=new $t(null,this.h))}function kt(e){return new At(e)}function Tt(e,t,n){e.j=n?Mt(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Ct(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Nt(e,t,n){t instanceof $t?(e.i=t,function(e,t){t&&!e.j&&(Vt(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(Ht(this,t),Gt(this,n,e))}),e)),e.j=t}(e.i,e.h)):(n||(t=Ot(t,Ut)),e.i=new $t(t,e.h))}function Rt(e,t,n){e.i.set(t,n)}function Lt(e){return Rt(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Mt(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Ot(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,Dt),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Dt(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}At.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Ot(t,Pt,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(Ot(t,Pt,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(Ot(n,"/"==n.charAt(0)?Bt:Ft,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Ot(n,jt)),e.join("")};var Pt=/[#\/\?@]/g,Ft=/[#\?:]/g,Bt=/[#\?]/g,Ut=/[#\?@]/g,jt=/#/g;function $t(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Vt(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var i=e[n].indexOf("="),r=null;if(0<=i){var o=e[n].substring(0,i);r=e[n].substring(i+1)}else o=e[n];t(o,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function Ht(e,t){Vt(e),t=zt(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function Wt(e,t){return Vt(e),t=zt(e,t),e.g.has(t)}function Gt(e,t,n){Ht(e,t),0<n.length&&(e.i=null,e.g.set(zt(e,t),x(n)),e.h+=n.length)}function zt(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}(r=$t.prototype).add=function(e,t){Vt(this),this.i=null,e=zt(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},r.forEach=function(e,t){Vt(this),this.g.forEach((function(n,i){n.forEach((function(n){e.call(t,n,i,this)}),this)}),this)},r.oa=function(){Vt(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let i=0;i<t.length;i++){const r=e[i];for(let e=0;e<r.length;e++)n.push(t[i])}return n},r.W=function(e){Vt(this);let t=[];if("string"==typeof e)Wt(this,e)&&(t=t.concat(this.g.get(zt(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},r.set=function(e,t){return Vt(this),this.i=null,Wt(this,e=zt(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},r.get=function(e,t){return e&&0<(e=this.W(e)).length?String(e[0]):t},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var i=t[n];const o=encodeURIComponent(String(i)),s=this.W(i);for(i=0;i<s.length;i++){var r=o;""!==s[i]&&(r+="="+encodeURIComponent(String(s[i]))),e.push(r)}}return this.i=e.join("&")};function Kt(e){this.l=e||qt,u.PerformanceNavigationTiming?e=0<(e=u.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):e=!!(u.g&&u.g.Ga&&u.g.Ga()&&u.g.Ga().$b),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var qt=10;function Yt(e){return!!e.h||!!e.g&&e.g.size>=e.j}function Zt(e){return e.h?1:e.g?e.g.size:0}function Xt(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function Jt(e,t){e.g?e.g.add(t):e.h=t}function Qt(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function en(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return x(e.i)}function tn(){}function nn(){this.g=new tn}function rn(e,t,n){const i=n||"";try{It(e,(function(e,n){let r=e;d(e)&&(r=_e(e)),t.push(i+n+"="+encodeURIComponent(r))}))}catch(e){throw t.push(i+"type="+encodeURIComponent("_badmap")),e}}function on(e,t,n,i,r){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,r(i)}catch(e){}}function sn(e){this.l=e.ac||null,this.j=e.jb||!1}function an(e,t){be.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=un,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Kt.prototype.cancel=function(){if(this.i=en(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}},tn.prototype.stringify=function(e){return u.JSON.stringify(e,void 0)},tn.prototype.parse=function(e){return u.JSON.parse(e,void 0)},y(sn,et),sn.prototype.g=function(){return new an(this.l,this.j)},sn.prototype.i=function(e){return function(){return e}}({}),y(an,be);var un=0;function cn(e){e.j.read().then(e.Ta.bind(e)).catch(e.ga.bind(e))}function ln(e){e.readyState=4,e.l=null,e.j=null,e.A=null,dn(e)}function dn(e){e.onreadystatechange&&e.onreadystatechange.call(e)}(r=an.prototype).open=function(e,t){if(this.readyState!=un)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,dn(this)},r.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||u).fetch(new Request(this.B,t)).then(this.Wa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,ln(this)),this.readyState=un},r.Wa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,dn(this)),this.g&&(this.readyState=3,dn(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(void 0!==u.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;cn(this)}else e.text().then(this.Va.bind(this),this.ga.bind(this))},r.Ta=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?ln(this):dn(this),3==this.readyState&&cn(this)}},r.Va=function(e){this.g&&(this.response=this.responseText=e,ln(this))},r.Ua=function(e){this.g&&(this.response=e,ln(this))},r.ga=function(){this.g&&ln(this)},r.setRequestHeader=function(e,t){this.v.append(e,t)},r.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(an.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var hn=u.JSON.parse;function fn(e){be.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=pn,this.K=this.L=!1}y(fn,be);var pn="",mn=/^https?$/i,gn=["POST","PUT"];function vn(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,yn(e),wn(e)}function yn(e){e.D||(e.D=!0,we(e,"complete"),we(e,"error"))}function bn(e){if(e.h&&void 0!==a&&(!e.C[1]||4!=_n(e)||2!=e.aa()))if(e.v&&4==_n(e))Oe(e.Ha,0,e);else if(we(e,"readystatechange"),4==_n(e)){e.h=!1;try{const a=e.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var i;if(i=0===a){var r=String(e.H).match(St)[1]||null;if(!r&&u.self&&u.self.location){var o=u.self.location.protocol;r=o.substr(0,o.length-1)}i=!mn.test(r?r.toLowerCase():"")}n=i}if(n)we(e,"complete"),we(e,"success");else{e.m=6;try{var s=2<_n(e)?e.g.statusText:""}catch(e){s=""}e.j=s+" ["+e.aa()+"]",yn(e)}}finally{wn(e)}}}function wn(e,t){if(e.g){xn(e);const n=e.g,i=e.C[0]?c:null;e.g=null,e.C=null,t||we(e,"ready");try{n.onreadystatechange=i}catch(e){}}}function xn(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(u.clearTimeout(e.A),e.A=null)}function _n(e){return e.g?e.g.readyState:0}function En(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case pn:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function In(e){let t="";return ee(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function Sn(e,t,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=In(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):Rt(e,t,n))}function An(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function kn(e){this.Ca=0,this.i=[],this.j=new $e,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=An("failFast",!1,e),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=An("baseRetryDelayMs",5e3,e),this.bb=An("retryDelaySeedMs",1e4,e),this.$a=An("forwardChannelMaxRetries",2,e),this.ta=An("forwardChannelRequestTimeoutMs",2e4,e),this.ra=e&&e.xmlHttpFactory||void 0,this.Da=e&&e.Zb||!1,this.J=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.I="",this.h=new Kt(e&&e.concurrentRequestLimit),this.Fa=new nn,this.O=e&&e.fastHandshake||!1,this.N=e&&e.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=e&&e.Xb||!1,e&&e.Aa&&this.j.Aa(),e&&e.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&e&&e.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}function Tn(e){if(Nn(e),3==e.G){var t=e.U++,n=kt(e.F);Rt(n,"SID",e.I),Rt(n,"RID",t),Rt(n,"TYPE","terminate"),Mn(e,n),(t=new ut(e,e.j,t,void 0)).K=2,t.v=Lt(kt(n)),n=!1,u.navigator&&u.navigator.sendBeacon&&(n=u.navigator.sendBeacon(t.v.toString(),"")),!n&&u.Image&&((new Image).src=t.v,n=!0),n||(t.g=Gn(t.l,null),t.g.da(t.v)),t.F=Date.now(),yt(t)}Hn(e)}function Cn(e){e.g&&(Fn(e),e.g.cancel(),e.g=null)}function Nn(e){Cn(e),e.u&&(u.clearTimeout(e.u),e.u=null),Un(e),e.h.cancel(),e.m&&("number"==typeof e.m&&u.clearTimeout(e.m),e.m=null)}function Rn(e){Yt(e.h)||e.m||(e.m=!0,Te(e.Ja,e),e.C=0)}function Ln(e,t){var n;n=t?t.m:e.U++;const i=kt(e.F);Rt(i,"SID",e.I),Rt(i,"RID",n),Rt(i,"AID",e.T),Mn(e,i),e.o&&e.s&&Sn(i,e.o,e.s),n=new ut(e,e.j,n,e.C+1),null===e.o&&(n.H=e.s),t&&(e.i=t.D.concat(e.i)),t=On(e,n,1e3),n.setTimeout(Math.round(.5*e.ta)+Math.round(.5*e.ta*Math.random())),Jt(e.h,n),ft(n,i,t)}function Mn(e,t){e.ia&&ee(e.ia,(function(e,n){Rt(t,n,e)})),e.l&&It({},(function(e,n){Rt(t,n,e)}))}function On(e,t,n){n=Math.min(e.i.length,n);var i=e.l?g(e.l.Ra,e.l,e):null;e:{var r=e.i;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=r[0].h,e.push("ofs="+t)):t=0:e.push("ofs="+t);let o=!0;for(let s=0;s<n;s++){let n=r[s].h;const a=r[s].g;if(n-=t,0>n)t=Math.max(0,r[s].h-100),o=!1;else try{rn(a,e,"req"+n+"_")}catch(e){i&&i(a)}}if(o){i=e.join("&");break e}}}return e=e.i.splice(0,n),t.D=e,i}function Dn(e){e.g||e.u||(e.Z=1,Te(e.Ia,e),e.A=0)}function Pn(e){return!(e.g||e.u||3<=e.A)&&(e.Z++,e.u=Xe(g(e.Ia,e),$n(e,e.A)),e.A++,!0)}function Fn(e){null!=e.B&&(u.clearTimeout(e.B),e.B=null)}function Bn(e){e.g=new ut(e,e.j,"rpc",e.Z),null===e.o&&(e.g.H=e.s),e.g.N=0;var t=kt(e.sa);Rt(t,"RID","rpc"),Rt(t,"SID",e.I),Rt(t,"CI",e.L?"0":"1"),Rt(t,"AID",e.T),Rt(t,"TYPE","xmlhttp"),Mn(e,t),e.o&&e.s&&Sn(t,e.o,e.s),e.J&&e.g.setTimeout(e.J);var n=e.g;e=e.ka,n.K=1,n.v=Lt(kt(t)),n.s=null,n.P=!0,pt(n,e)}function Un(e){null!=e.v&&(u.clearTimeout(e.v),e.v=null)}function jn(e,t){var n=null;if(e.g==t){Un(e),Fn(e),e.g=null;var i=2}else{if(!Xt(e.h,t))return;n=t.D,Qt(e.h,t),i=1}if(0!=e.G)if(e.pa=t.Y,t.i)if(1==i){n=t.s?t.s.length:0,t=Date.now()-t.F;var r=e.C;we(i=Ge(),new Ze(i,n)),Rn(e)}else Dn(e);else if(3==(r=t.o)||0==r&&0<e.pa||!(1==i&&function(e,t){return!(Zt(e.h)>=e.h.j-(e.m?1:0)||(e.m?(e.i=t.D.concat(e.i),0):1==e.G||2==e.G||e.C>=(e.Za?0:e.$a)||(e.m=Xe(g(e.Ja,e,t),$n(e,e.C)),e.C++,0)))}(e,t)||2==i&&Pn(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),r){case 1:Vn(e,5);break;case 4:Vn(e,10);break;case 3:Vn(e,6);break;default:Vn(e,2)}}function $n(e,t){let n=e.Xa+Math.floor(Math.random()*e.bb);return e.l||(n*=2),n*t}function Vn(e,t){if(e.j.info("Error code "+t),2==t){var n=null;e.l&&(n=null);var i=g(e.kb,e);n||(n=new At("//www.google.com/images/cleardot.gif"),u.location&&"http"==u.location.protocol||Tt(n,"https"),Lt(n)),function(e,t){const n=new $e;if(u.Image){const i=new Image;i.onload=v(on,n,i,"TestLoadImage: loaded",!0,t),i.onerror=v(on,n,i,"TestLoadImage: error",!1,t),i.onabort=v(on,n,i,"TestLoadImage: abort",!1,t),i.ontimeout=v(on,n,i,"TestLoadImage: timeout",!1,t),u.setTimeout((function(){i.ontimeout&&i.ontimeout()}),1e4),i.src=e}else t(!1)}(n.toString(),i)}else Ye(2);e.G=0,e.l&&e.l.va(t),Hn(e),Nn(e)}function Hn(e){if(e.G=0,e.la=[],e.l){const t=en(e.h);0==t.length&&0==e.i.length||(_(e.la,t),_(e.la,e.i),e.h.i.length=0,x(e.i),e.i.length=0),e.l.ua()}}function Wn(e,t,n){var i=n instanceof At?kt(n):new At(n,void 0);if(""!=i.g)t&&(i.g=t+"."+i.g),Ct(i,i.m);else{var r=u.location;i=r.protocol,t=t?t+"."+r.hostname:r.hostname,r=+r.port;var o=new At(null,void 0);i&&Tt(o,i),t&&(o.g=t),r&&Ct(o,r),n&&(o.l=n),i=o}return n=e.D,t=e.za,n&&t&&Rt(i,n,t),Rt(i,"VER",e.ma),Mn(e,i),i}function Gn(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return(t=n&&e.Da&&!e.ra?new fn(new sn({jb:!0})):new fn(e.ra)).Ka(e.H),t}function zn(){}function Kn(){if(O&&!(10<=Number(K)))throw Error("Environmental error: no available transport.")}function qn(e,t){be.call(this),this.g=new kn(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.S=e,(e=t&&t.Yb)&&!S(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!S(t)&&(this.g.D=t,null!==(e=this.h)&&t in e&&(t in(e=this.h)&&delete e[t])),this.j=new Xn(this)}function Yn(e){ot.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function Zn(){st.call(this),this.status=1}function Xn(e){this.g=e}(r=fn.prototype).Ka=function(e){this.L=e},r.da=function(e,t,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():it.g(),this.C=this.u?tt(this.u):tt(it),this.g.onreadystatechange=g(this.Ha,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(e){return void vn(this,e)}if(e=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var r in i)n.set(r,i[r]);else{if("function"!=typeof i.keys||"function"!=typeof i.get)throw Error("Unknown input type for opt_headers: "+String(i));for(const e of i.keys())n.set(e,i.get(e))}i=Array.from(n.keys()).find((e=>"content-type"==e.toLowerCase())),r=u.FormData&&e instanceof u.FormData,!(0<=w(gn,t))||i||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[e,t]of n)this.g.setRequestHeader(e,t);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{xn(this),0<this.B&&((this.K=function(e){return O&&G()&&"number"==typeof e.timeout&&void 0!==e.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=g(this.qa,this)):this.A=Oe(this.qa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(e){vn(this,e)}},r.qa=function(){void 0!==a&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,we(this,"timeout"),this.abort(8))},r.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,we(this,"complete"),we(this,"abort"),wn(this))},r.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),wn(this,!0)),fn.X.M.call(this)},r.Ha=function(){this.s||(this.F||this.v||this.l?bn(this):this.fb())},r.fb=function(){bn(this)},r.aa=function(){try{return 2<_n(this)?this.g.status:-1}catch(e){return-1}},r.fa=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},r.Sa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),hn(t)}},r.Ea=function(){return this.m},r.Oa=function(){return"string"==typeof this.j?this.j:String(this.j)},(r=kn.prototype).ma=8,r.G=1,r.Ja=function(e){if(this.m)if(this.m=null,1==this.G){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const r=new ut(this,this.j,e,void 0);let o=this.s;if(this.S&&(o?(o=te(o),ie(o,this.S)):o=this.S),null!==this.o||this.N||(r.H=o,o=null),this.O)e:{for(var t=0,n=0;n<this.i.length;n++){var i=this.i[n];if(void 0===(i="__data__"in i.g&&"string"==typeof(i=i.g.__data__)?i.length:void 0))break;if(4096<(t+=i)){t=n;break e}if(4096===t||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=On(this,r,t),Rt(n=kt(this.F),"RID",e),Rt(n,"CVER",22),this.D&&Rt(n,"X-HTTP-Session-Id",this.D),Mn(this,n),o&&(this.N?t="headers="+encodeURIComponent(String(In(o)))+"&"+t:this.o&&Sn(n,this.o,o)),Jt(this.h,r),this.Ya&&Rt(n,"TYPE","init"),this.O?(Rt(n,"$req",t),Rt(n,"SID","null"),r.Z=!0,ft(r,n,null)):ft(r,n,t),this.G=2}}else 3==this.G&&(e?Ln(this,e):0==this.i.length||Yt(this.h)||Ln(this))},r.Ia=function(){if(this.u=null,Bn(this),this.$&&!(this.K||null==this.g||0>=this.P)){var e=2*this.P;this.j.info("BP detection timer enabled: "+e),this.B=Xe(g(this.eb,this),e)}},r.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Ye(10),Cn(this),Bn(this))},r.cb=function(){null!=this.v&&(this.v=null,Cn(this),Pn(this),Ye(19))},r.kb=function(e){e?(this.j.info("Successfully pinged google.com"),Ye(2)):(this.j.info("Failed to ping google.com"),Ye(1))},(r=zn.prototype).xa=function(){},r.wa=function(){},r.va=function(){},r.ua=function(){},r.Ra=function(){},Kn.prototype.g=function(e,t){return new qn(e,t)},y(qn,be),qn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;Ye(0),e.V=t,e.ia=n||{},e.L=e.Y,e.F=Wn(e,null,e.V),Rn(e)},qn.prototype.close=function(){Tn(this.g)},qn.prototype.u=function(e){var t=this.g;if("string"==typeof e){var n={};n.__data__=e,e=n}else this.v&&((n={}).__data__=_e(e),e=n);t.i.push(new class{constructor(e,t){this.h=e,this.g=t}}(t.ab++,e)),3==t.G&&Rn(t)},qn.prototype.M=function(){this.g.l=null,delete this.j,Tn(this.g),delete this.g,qn.X.M.call(this)},y(Yn,ot),y(Zn,st),y(Xn,zn),Xn.prototype.xa=function(){we(this.g,"a")},Xn.prototype.wa=function(e){we(this.g,new Yn(e))},Xn.prototype.va=function(e){we(this.g,new Zn)},Xn.prototype.ua=function(){we(this.g,"b")},Kn.prototype.createWebChannel=Kn.prototype.g,qn.prototype.send=qn.prototype.u,qn.prototype.open=qn.prototype.m,qn.prototype.close=qn.prototype.close,Je.NO_ERROR=0,Je.TIMEOUT=8,Je.HTTP_ERROR=6,Qe.COMPLETE="complete",nt.EventType=rt,rt.OPEN="a",rt.CLOSE="b",rt.ERROR="c",rt.MESSAGE="d",be.prototype.listen=be.prototype.N,fn.prototype.listenOnce=fn.prototype.O,fn.prototype.getLastError=fn.prototype.Oa,fn.prototype.getLastErrorCode=fn.prototype.Ea,fn.prototype.getStatus=fn.prototype.aa,fn.prototype.getResponseJson=fn.prototype.Sa,fn.prototype.getResponseText=fn.prototype.fa,fn.prototype.send=fn.prototype.da,fn.prototype.setWithCredentials=fn.prototype.Ka;var Jn=s.createWebChannelTransport=function(){return new Kn},Qn=s.getStatEventTarget=function(){return Ge()},ei=s.ErrorCode=Je,ti=s.EventType=Qe,ni=s.Event=He,ii=s.Stat={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},ri=s.FetchXmlHttpFactory=sn,oi=s.WebChannel=nt,si=s.XhrIo=fn})),o.register("23RrO",(function(i,r){e(i.exports,"auth",(function(){return u})),o("cEmXr");var s=o("hVw4Q");o("cxzCy");var a=o("dvE9m");o("ezAbo"),o("45J63"),o("9P2Za"),o("3TzKX"),o("hWGzj"),function(){(function(){var e,t,i="function"==typeof Object.create?Object.create:function(e){function t(){}return t.prototype=e,new t};if("function"==typeof Object.setPrototypeOf)t=Object.setPrototypeOf;else{var r;e:{var o={};try{o.__proto__={xb:!0},r=o.xb;break e}catch(Je){}r=!1}t=r?function(e,t){if(e.__proto__=t,e.__proto__!==t)throw new TypeError(e+" is not extensible");return e}:null}var a=t;function u(e,t){if(e.prototype=i(t.prototype),e.prototype.constructor=e,a)a(e,t);else for(var n in t)if("prototype"!=n)if(Object.defineProperties){var r=Object.getOwnPropertyDescriptor(t,n);r&&Object.defineProperty(e,n,r)}else e[n]=t[n];e.K=t.prototype}var c="function"==typeof Object.defineProperties?Object.defineProperty:function(e,t,n){e!=Array.prototype&&e!=Object.prototype&&(e[t]=n.value)},l="undefined"!=typeof window&&window===this?this:void 0!==n&&null!=n?n:this;function d(e,t){if(t){var n=l;e=e.split(".");for(var i=0;i<e.length-1;i++){var r=e[i];r in n||(n[r]={}),n=n[r]}(t=t(i=n[e=e[e.length-1]]))!=i&&null!=t&&c(n,e,{configurable:!0,writable:!0,value:t})}}d("Object.is",(function(e){return e||function(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}})),d("Array.prototype.includes",(function(e){return e||function(e,t){var n=this;n instanceof String&&(n=String(n));var i=n.length;for(0>(t=t||0)&&(t=Math.max(t+i,0));t<i;t++){var r=n[t];if(r===e||Object.is(r,e))return!0}return!1}}));var h=this;function f(e){return void 0!==e}function p(e){return"string"==typeof e}var m=/^[\w+/_-]+[=]{0,2}$/,g=null;function v(){}function y(e){e.W=void 0,e.Xa=function(){return e.W?e.W:e.W=new e}}function b(e){var t=typeof e;if("object"==t){if(!e)return"null";if(e instanceof Array)return"array";if(e instanceof Object)return t;var n=Object.prototype.toString.call(e);if("[object Window]"==n)return"object";if("[object Array]"==n||"number"==typeof e.length&&void 0!==e.splice&&void 0!==e.propertyIsEnumerable&&!e.propertyIsEnumerable("splice"))return"array";if("[object Function]"==n||void 0!==e.call&&void 0!==e.propertyIsEnumerable&&!e.propertyIsEnumerable("call"))return"function"}else if("function"==t&&void 0===e.call)return"object";return t}function w(e){return"array"==b(e)}function x(e){var t=b(e);return"array"==t||"object"==t&&"number"==typeof e.length}function _(e){return"function"==b(e)}function E(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}var I="closure_uid_"+(1e9*Math.random()>>>0),S=0;function A(e,t,n){return e.call.apply(e.bind,arguments)}function k(e,t,n){if(!e)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function T(e,t,n){return(T=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?A:k).apply(null,arguments)}function C(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function N(e,t){for(var n in t)e[n]=t[n]}var R,L=Date.now||function(){return+new Date};function M(e,t){e=e.split(".");var n,i=h;e[0]in i||void 0===i.execScript||i.execScript("var "+e[0]);for(;e.length&&(n=e.shift());)!e.length&&f(t)?i[n]=t:i=i[n]&&i[n]!==Object.prototype[n]?i[n]:i[n]={}}function O(e,t){function n(){}n.prototype=t.prototype,e.K=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.vc=function(e,n,i){for(var r=Array(arguments.length-2),o=2;o<arguments.length;o++)r[o-2]=arguments[o];return t.prototype[n].apply(e,r)}}function D(e){if(Error.captureStackTrace)Error.captureStackTrace(this,D);else{var t=Error().stack;t&&(this.stack=t)}e&&(this.message=String(e))}function P(e,t){for(var n="",i=(e=e.split("%s")).length-1,r=0;r<i;r++)n+=e[r]+(r<t.length?t[r]:"%s");D.call(this,n+e[i])}function F(e,t){throw new P("Failure"+(e?": "+e:""),Array.prototype.slice.call(arguments,1))}O(D,Error),D.prototype.name="CustomError",O(P,D),P.prototype.name="AssertionError";var B=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(p(e))return p(t)&&1==t.length?e.indexOf(t,0):-1;for(var n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1},U=Array.prototype.forEach?function(e,t,n){Array.prototype.forEach.call(e,t,n)}:function(e,t,n){for(var i=e.length,r=p(e)?e.split(""):e,o=0;o<i;o++)o in r&&t.call(n,r[o],o,e)};var j=Array.prototype.filter?function(e,t){return Array.prototype.filter.call(e,t,void 0)}:function(e,t){for(var n=e.length,i=[],r=0,o=p(e)?e.split(""):e,s=0;s<n;s++)if(s in o){var a=o[s];t.call(void 0,a,s,e)&&(i[r++]=a)}return i},$=Array.prototype.map?function(e,t){return Array.prototype.map.call(e,t,void 0)}:function(e,t){for(var n=e.length,i=Array(n),r=p(e)?e.split(""):e,o=0;o<n;o++)o in r&&(i[o]=t.call(void 0,r[o],o,e));return i},V=Array.prototype.some?function(e,t){return Array.prototype.some.call(e,t,void 0)}:function(e,t){for(var n=e.length,i=p(e)?e.split(""):e,r=0;r<n;r++)if(r in i&&t.call(void 0,i[r],r,e))return!0;return!1};function H(e,t){return 0<=B(e,t)}function W(e,t){var n;return(n=0<=(t=B(e,t)))&&G(e,t),n}function G(e,t){return 1==Array.prototype.splice.call(e,t,1).length}function z(e,t){!function(e,t){for(var n=p(e)?e.split(""):e,i=e.length-1;0<=i;--i)i in n&&t.call(void 0,n[i],i,e)}(e,(function(n,i){t.call(void 0,n,i,e)&&G(e,i)&&0}))}function K(e){return Array.prototype.concat.apply([],arguments)}function q(e){var t=e.length;if(0<t){for(var n=Array(t),i=0;i<t;i++)n[i]=e[i];return n}return[]}function Y(e,t,n){return 2>=arguments.length?Array.prototype.slice.call(e,t):Array.prototype.slice.call(e,t,n)}var Z=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]},X=/&/g,J=/</g,Q=/>/g,ee=/"/g,te=/'/g,ne=/\x00/g,ie=/[\x00&<>"']/;function re(e,t){return e<t?-1:e>t?1:0}function oe(e){return ie.test(e)&&(-1!=e.indexOf("&")&&(e=e.replace(X,"&amp;")),-1!=e.indexOf("<")&&(e=e.replace(J,"&lt;")),-1!=e.indexOf(">")&&(e=e.replace(Q,"&gt;")),-1!=e.indexOf('"')&&(e=e.replace(ee,"&quot;")),-1!=e.indexOf("'")&&(e=e.replace(te,"&#39;")),-1!=e.indexOf("\0")&&(e=e.replace(ne,"&#0;"))),e}function se(e,t,n){for(var i in e)t.call(n,e[i],i,e)}function ae(e){var t,n={};for(t in e)n[t]=e[t];return n}var ue="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ce(e,t){for(var n,i,r=1;r<arguments.length;r++){for(n in i=arguments[r])e[n]=i[n];for(var o=0;o<ue.length;o++)n=ue[o],Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}}var le="StopIteration"in h?h.StopIteration:{message:"StopIteration",stack:""};function de(){}function he(e){if(e instanceof de)return e;if("function"==typeof e.ha)return e.ha(!1);if(x(e)){var t=0,n=new de;return n.next=function(){for(;;){if(t>=e.length)throw le;if(t in e)return e[t++];t++}},n}throw Error("Not implemented")}function fe(e){if(x(e))return q(e);e=he(e);var t=[];return function(e,t){if(x(e))try{U(e,t,void 0)}catch(e){if(e!==le)throw e}else{e=he(e);try{for(;;)t.call(void 0,e.next(),void 0,e)}catch(e){if(e!==le)throw e}}}(e,(function(e){t.push(e)})),t}function pe(e,t){this.g={},this.a=[],this.j=this.h=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var i=0;i<n;i+=2)this.set(arguments[i],arguments[i+1])}else if(e)if(e instanceof pe)for(n=e.ja(),i=0;i<n.length;i++)this.set(n[i],e.get(n[i]));else for(i in e)this.set(i,e[i])}function me(e){if(e.h!=e.a.length){for(var t=0,n=0;t<e.a.length;){var i=e.a[t];ge(e.g,i)&&(e.a[n++]=i),t++}e.a.length=n}if(e.h!=e.a.length){var r={};for(n=t=0;t<e.a.length;)ge(r,i=e.a[t])||(e.a[n++]=i,r[i]=1),t++;e.a.length=n}}function ge(e,t){return Object.prototype.hasOwnProperty.call(e,t)}de.prototype.next=function(){throw le},de.prototype.ha=function(){return this},(e=pe.prototype).la=function(){me(this);for(var e=[],t=0;t<this.a.length;t++)e.push(this.g[this.a[t]]);return e},e.ja=function(){return me(this),this.a.concat()},e.clear=function(){this.g={},this.j=this.h=this.a.length=0},e.get=function(e,t){return ge(this.g,e)?this.g[e]:t},e.set=function(e,t){ge(this.g,e)||(this.h++,this.a.push(e),this.j++),this.g[e]=t},e.forEach=function(e,t){for(var n=this.ja(),i=0;i<n.length;i++){var r=n[i],o=this.get(r);e.call(t,o,r,this)}},e.ha=function(e){me(this);var t=0,n=this.j,i=this,r=new de;return r.next=function(){if(n!=i.j)throw Error("The map has changed since the iterator was created");if(t>=i.a.length)throw le;var r=i.a[t++];return e?r:i.g[r]},r};var ve=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function ye(e,t,n,i){for(var r=n.length;0<=(t=e.indexOf(n,t))&&t<i;){var o=e.charCodeAt(t-1);if(!(38!=o&&63!=o||(o=e.charCodeAt(t+r))&&61!=o&&38!=o&&35!=o))return t;t+=r+1}return-1}var be=/#|$/;function we(e,t){var n=e.search(be),i=ye(e,0,t,n);if(0>i)return null;var r=e.indexOf("&",i);return(0>r||r>n)&&(r=n),i+=t.length+1,decodeURIComponent(e.substr(i,r-i).replace(/\+/g," "))}var xe=/[?&]($|#)/;function _e(e,t){var n;this.h=this.A=this.j="",this.C=null,this.s=this.g="",this.i=!1,e instanceof _e?(this.i=f(t)?t:e.i,Ee(this,e.j),this.A=e.A,this.h=e.h,Ie(this,e.C),this.g=e.g,Se(this,Ue(e.a)),this.s=e.s):e&&(n=String(e).match(ve))?(this.i=!!t,Ee(this,n[1]||"",!0),this.A=ke(n[2]||""),this.h=ke(n[3]||"",!0),Ie(this,n[4]),this.g=ke(n[5]||"",!0),Se(this,n[6]||"",!0),this.s=ke(n[7]||"")):(this.i=!!t,this.a=new De(null,this.i))}function Ee(e,t,n){e.j=n?ke(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Ie(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.C=t}else e.C=null}function Se(e,t,n){t instanceof De?(e.a=t,function(e,t){t&&!e.j&&(Pe(e),e.h=null,e.a.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(Fe(this,t),Fe(this,n),0<e.length&&(this.h=null,this.a.set(je(this,n),q(e)),this.g+=e.length))}),e)),e.j=t}(e.a,e.i)):(n||(t=Te(t,Me)),e.a=new De(t,e.i))}function Ae(e){return e instanceof _e?new _e(e):new _e(e,void 0)}function ke(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Te(e,t,n){return p(e)?(e=encodeURI(e).replace(t,Ce),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Ce(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}_e.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Te(t,Ne,!0),":");var n=this.h;return(n||"file"==t)&&(e.push("//"),(t=this.A)&&e.push(Te(t,Ne,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.C)&&e.push(":",String(n))),(n=this.g)&&(this.h&&"/"!=n.charAt(0)&&e.push("/"),e.push(Te(n,"/"==n.charAt(0)?Le:Re,!0))),(n=this.a.toString())&&e.push("?",n),(n=this.s)&&e.push("#",Te(n,Oe)),e.join("")};var Ne=/[#\/\?@]/g,Re=/[#\?:]/g,Le=/[#\?]/g,Me=/[#\?@]/g,Oe=/#/g;function De(e,t){this.g=this.a=null,this.h=e||null,this.j=!!t}function Pe(e){e.a||(e.a=new pe,e.g=0,e.h&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var i=e[n].indexOf("="),r=null;if(0<=i){var o=e[n].substring(0,i);r=e[n].substring(i+1)}else o=e[n];t(o,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}(e.h,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function Fe(e,t){Pe(e),t=je(e,t),ge(e.a.g,t)&&(e.h=null,e.g-=e.a.get(t).length,ge((e=e.a).g,t)&&(delete e.g[t],e.h--,e.j++,e.a.length>2*e.h&&me(e)))}function Be(e,t){return Pe(e),t=je(e,t),ge(e.a.g,t)}function Ue(e){var t=new De;return t.h=e.h,e.a&&(t.a=new pe(e.a),t.g=e.g),t}function je(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function $e(e){this.a=Ae(e)}function Ve(e){return e.a.a.get(Ge.Pa)||null}function He(e,t){t?e.a.a.set(Ge.PROVIDER_ID,t):Fe(e.a.a,Ge.PROVIDER_ID)}(e=De.prototype).add=function(e,t){Pe(this),this.h=null,e=je(this,e);var n=this.a.get(e);return n||this.a.set(e,n=[]),n.push(t),this.g+=1,this},e.clear=function(){this.a=this.h=null,this.g=0},e.forEach=function(e,t){Pe(this),this.a.forEach((function(n,i){U(n,(function(n){e.call(t,n,i,this)}),this)}),this)},e.ja=function(){Pe(this);for(var e=this.a.la(),t=this.a.ja(),n=[],i=0;i<t.length;i++)for(var r=e[i],o=0;o<r.length;o++)n.push(t[i]);return n},e.la=function(e){Pe(this);var t=[];if(p(e))Be(this,e)&&(t=K(t,this.a.get(je(this,e))));else{e=this.a.la();for(var n=0;n<e.length;n++)t=K(t,e[n])}return t},e.set=function(e,t){return Pe(this),this.h=null,Be(this,e=je(this,e))&&(this.g-=this.a.get(e).length),this.a.set(e,[t]),this.g+=1,this},e.get=function(e,t){return e&&0<(e=this.la(e)).length?String(e[0]):t},e.toString=function(){if(this.h)return this.h;if(!this.a)return"";for(var e=[],t=this.a.ja(),n=0;n<t.length;n++){var i=t[n],r=encodeURIComponent(String(i));i=this.la(i);for(var o=0;o<i.length;o++){var s=r;""!==i[o]&&(s+="="+encodeURIComponent(String(i[o]))),e.push(s)}}return this.h=e.join("&")},$e.prototype.toString=function(){return this.a.toString()};var We,Ge={Pa:"ui_auid",lc:"apiKey",Qa:"ui_sd",ub:"mode",$a:"oobCode",PROVIDER_ID:"ui_pid",Sa:"ui_sid",vb:"tenantId"};e:{var ze=h.navigator;if(ze){var Ke=ze.userAgent;if(Ke){We=Ke;break e}}We=""}function qe(e){return-1!=We.indexOf(e)}function Ye(){return(qe("Chrome")||qe("CriOS"))&&!qe("Edge")}function Ze(e){return Ze[" "](e),e}Ze[" "]=v;var Xe,Je,Qe=qe("Opera"),et=qe("Trident")||qe("MSIE"),tt=qe("Edge"),nt=tt||et,it=qe("Gecko")&&!(-1!=We.toLowerCase().indexOf("webkit")&&!qe("Edge"))&&!(qe("Trident")||qe("MSIE"))&&!qe("Edge"),rt=-1!=We.toLowerCase().indexOf("webkit")&&!qe("Edge"),ot=rt&&qe("Mobile"),st=qe("Macintosh");function at(){var e=h.document;return e?e.documentMode:void 0}e:{var ut="",ct=(Je=We,it?/rv:([^\);]+)(\)|;)/.exec(Je):tt?/Edge\/([\d\.]+)/.exec(Je):et?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(Je):rt?/WebKit\/(\S+)/.exec(Je):Qe?/(?:Version)[ \/]?(\S+)/.exec(Je):void 0);if(ct&&(ut=ct?ct[1]:""),et){var lt=at();if(null!=lt&&lt>parseFloat(ut)){Xe=String(lt);break e}}Xe=ut}var dt,ht={};function ft(e){return function(e,t){var n=ht;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}(e,(function(){for(var t=0,n=Z(String(Xe)).split("."),i=Z(String(e)).split("."),r=Math.max(n.length,i.length),o=0;0==t&&o<r;o++){var s=n[o]||"",a=i[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],a=/(\d*)(\D*)(.*)/.exec(a)||["","","",""],0==s[0].length&&0==a[0].length)break;t=re(0==s[1].length?0:parseInt(s[1],10),0==a[1].length?0:parseInt(a[1],10))||re(0==s[2].length,0==a[2].length)||re(s[2],a[2]),s=s[3],a=a[3]}while(0==t)}return 0<=t}))}var pt=h.document;function mt(e,t){this.a=e===vt&&t||"",this.g=gt}dt=pt&&et?at()||("CSS1Compat"==pt.compatMode?parseInt(Xe,10):5):void 0,mt.prototype.ma=!0,mt.prototype.ka=function(){return this.a},mt.prototype.toString=function(){return"Const{"+this.a+"}"};var gt={},vt={};function yt(){this.a="",this.h=wt}function bt(e){return e instanceof yt&&e.constructor===yt&&e.h===wt?e.a:(F("expected object of type TrustedResourceUrl, got '"+e+"' of type "+b(e)),"type_error:TrustedResourceUrl")}yt.prototype.ma=!0,yt.prototype.ka=function(){return this.a.toString()},yt.prototype.g=function(){return 1},yt.prototype.toString=function(){return"TrustedResourceUrl{"+this.a+"}"};var wt={};function xt(){this.a="",this.h=At}function _t(e){return e instanceof xt&&e.constructor===xt&&e.h===At?e.a:(F("expected object of type SafeUrl, got '"+e+"' of type "+b(e)),"type_error:SafeUrl")}xt.prototype.ma=!0,xt.prototype.ka=function(){return this.a.toString()},xt.prototype.g=function(){return 1},xt.prototype.toString=function(){return"SafeUrl{"+this.a+"}"};var Et=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function It(e){return e instanceof xt?e:(e="object"==typeof e&&e.ma?e.ka():String(e),Et.test(e)||(e="about:invalid#zClosurez"),kt(e))}function St(e){return e instanceof xt?e:(e="object"==typeof e&&e.ma?e.ka():String(e),Et.test(e)||(e="about:invalid#zClosurez"),kt(e))}var At={};function kt(e){var t=new xt;return t.a=e,t}function Tt(){this.a="",this.g=Ct}kt("about:blank"),Tt.prototype.ma=!0;var Ct={};function Nt(){this.a="",this.j=Lt,this.h=null}function Rt(e){return e instanceof Nt&&e.constructor===Nt&&e.j===Lt?e.a:(F("expected object of type SafeHtml, got '"+e+"' of type "+b(e)),"type_error:SafeHtml")}Tt.prototype.ka=function(){return this.a},Tt.prototype.toString=function(){return"SafeStyle{"+this.a+"}"},Nt.prototype.g=function(){return this.h},Nt.prototype.ma=!0,Nt.prototype.ka=function(){return this.a.toString()},Nt.prototype.toString=function(){return"SafeHtml{"+this.a+"}"};var Lt={};function Mt(e,t){var n=new Nt;return n.a=e,n.h=t,n}Mt("<!DOCTYPE html>",0);var Ot=Mt("",0);Mt("<br>",0);var Dt,Pt,Ft=(Pt=!1,function(){return Pt||(Dt=function(){if("undefined"==typeof document)return!1;var e=document.createElement("div"),t=document.createElement("div");return t.appendChild(document.createElement("div")),e.appendChild(t),!!e.firstChild&&(t=e.firstChild.firstChild,e.innerHTML=Rt(Ot),!t.parentElement)}(),Pt=!0),Dt});function Bt(e,t){t=t instanceof xt?t:St(t),e.assign(_t(t))}function Ut(e,t){this.a=f(e)?e:0,this.g=f(t)?t:0}function jt(e,t){this.width=e,this.height=t}function $t(e){return e?new Xt(qt(e)):R||(R=new Xt)}function Vt(e,t){var n=t||document;return n.querySelectorAll&&n.querySelector?n.querySelectorAll("."+e):Wt(document,e,t)}function Ht(e,t){var n=t||document;if(n.getElementsByClassName)e=n.getElementsByClassName(e)[0];else{n=document;var i=t||n;e=i.querySelectorAll&&i.querySelector&&e?i.querySelector(e?"."+e:""):Wt(n,e,t)[0]||null}return e||null}function Wt(e,t,n){var i;if((e=n||e).querySelectorAll&&e.querySelector&&t)return e.querySelectorAll(t?"."+t:"");if(t&&e.getElementsByClassName){var r=e.getElementsByClassName(t);return r}if(r=e.getElementsByTagName("*"),t){var o={};for(n=i=0;e=r[n];n++){var s=e.className;"function"==typeof s.split&&H(s.split(/\s+/),t)&&(o[i++]=e)}return o.length=i,o}return r}Ut.prototype.toString=function(){return"("+this.a+", "+this.g+")"},Ut.prototype.ceil=function(){return this.a=Math.ceil(this.a),this.g=Math.ceil(this.g),this},Ut.prototype.floor=function(){return this.a=Math.floor(this.a),this.g=Math.floor(this.g),this},Ut.prototype.round=function(){return this.a=Math.round(this.a),this.g=Math.round(this.g),this},(e=jt.prototype).toString=function(){return"("+this.width+" x "+this.height+")"},e.aspectRatio=function(){return this.width/this.height},e.ceil=function(){return this.width=Math.ceil(this.width),this.height=Math.ceil(this.height),this},e.floor=function(){return this.width=Math.floor(this.width),this.height=Math.floor(this.height),this},e.round=function(){return this.width=Math.round(this.width),this.height=Math.round(this.height),this};var Gt={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};function zt(e){return e.scrollingElement?e.scrollingElement:(rt||"CSS1Compat"!=e.compatMode)&&e.body||e.documentElement}function Kt(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function qt(e){return 9==e.nodeType?e:e.ownerDocument||e.document}function Yt(e,t){if("textContent"in e)e.textContent=t;else if(3==e.nodeType)e.data=String(t);else if(e.firstChild&&3==e.firstChild.nodeType){for(;e.lastChild!=e.firstChild;)e.removeChild(e.lastChild);e.firstChild.data=String(t)}else{for(var n;n=e.firstChild;)e.removeChild(n);e.appendChild(qt(e).createTextNode(String(t)))}}function Zt(e,t){return t?function(e,t){for(;e;){if(t(e))return e;e=e.parentNode}return null}(e,(function(e){return!t||p(e.className)&&H(e.className.split(/\s+/),t)})):null}function Xt(e){this.a=e||h.document||document}Xt.prototype.N=function(){return p(void 0)?this.a.getElementById(void 0):void 0};var Jt={Fc:!0},Qt={Hc:!0},en={Ec:!0},tn={Gc:!0};function nn(){throw Error("Do not instantiate directly")}function rn(e,t,n,i){if(e=e(t||sn,void 0,n),i=(i||$t()).a.createElement("DIV"),(e=function(e){if(!E(e))return oe(String(e));if(e instanceof nn){if(e.fa===Jt)return e.content;if(e.fa===tn)return oe(e.content)}return F("Soy template output is unsafe for use as HTML: "+e),"zSoyz"}(e)).match(on),e=Mt(e,null),Ft())for(;i.lastChild;)i.removeChild(i.lastChild);return i.innerHTML=Rt(e),1==i.childNodes.length&&(1==(e=i.firstChild).nodeType&&(i=e)),i}nn.prototype.va=null,nn.prototype.toString=function(){return this.content};var on=/^<(body|caption|col|colgroup|head|html|tr|td|th|tbody|thead|tfoot)>/i,sn={};function an(){nn.call(this)}function un(e){return null!=e&&e.fa===Jt?e:e instanceof Nt?hn(Rt(e).toString(),e.g()):hn(oe(String(String(e))),function(e){if(null!=e)switch(e.va){case 1:return 1;case-1:return-1;case 0:return 0}return null}(e))}function cn(){nn.call(this)}function ln(e,t){this.content=String(e),this.va=null!=t?t:null}function dn(e){return new ln(e,void 0)}O(an,nn),an.prototype.fa=Jt,O(cn,nn),cn.prototype.fa=Qt,cn.prototype.va=1,O(ln,nn),ln.prototype.fa=tn;var hn=function(e){function t(e){this.content=e}return t.prototype=e.prototype,function(e,n){return e=new t(String(e)),void 0!==n&&(e.va=n),e}}(an),fn=function(e){function t(e){this.content=e}return t.prototype=e.prototype,function(e){return new t(String(e))}}(cn);function pn(e){return(e=String(e))?new ln(e,void 0):""}var mn=function(e){function t(e){this.content=e}return t.prototype=e.prototype,function(e,n){return(e=String(e))?(e=new t(e),void 0!==n&&(e.va=n),e):""}}(an);function gn(e){return null!=e&&e.fa===Jt?String(String(e.content).replace(kn,"").replace(Tn,"&lt;")).replace(En,wn):oe(String(e))}function vn(e){return null!=e&&e.fa===Qt?e=String(e).replace(In,_n):e instanceof xt?e=String(_t(e).toString()).replace(In,_n):(e=String(e),An.test(e)?e=e.replace(In,_n):(F("Bad value `%s` for |filterNormalizeUri",[e]),e="#zSoyz")),e}function yn(e){return null!=e&&e.fa===en?e=e.content:null==e?e="":e instanceof Tt?e instanceof Tt&&e.constructor===Tt&&e.g===Ct?e=e.a:(F("expected object of type SafeStyle, got '"+e+"' of type "+b(e)),e="type_error:SafeStyle"):(e=String(e),Sn.test(e)||(F("Bad value `%s` for |filterCssValue",[e]),e="zSoyz")),e}var bn={"\0":"&#0;","\t":"&#9;","\n":"&#10;","\v":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;",'"':"&quot;","&":"&amp;","'":"&#39;","-":"&#45;","/":"&#47;","<":"&lt;","=":"&#61;",">":"&gt;","`":"&#96;","":"&#133;"," ":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"};function wn(e){return bn[e]}var xn={"\0":"%00","":"%01","":"%02","":"%03","":"%04","":"%05","":"%06","":"%07","\b":"%08","\t":"%09","\n":"%0A","\v":"%0B","\f":"%0C","\r":"%0D","":"%0E","":"%0F","":"%10","":"%11","":"%12","":"%13","":"%14","":"%15","":"%16","":"%17","":"%18","":"%19","":"%1A","":"%1B","":"%1C","":"%1D","":"%1E","":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","":"%7F","":"%C2%85"," ":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","！":"%EF%BC%81","＃":"%EF%BC%83","＄":"%EF%BC%84","＆":"%EF%BC%86","＇":"%EF%BC%87","（":"%EF%BC%88","）":"%EF%BC%89","＊":"%EF%BC%8A","＋":"%EF%BC%8B","，":"%EF%BC%8C","／":"%EF%BC%8F","：":"%EF%BC%9A","；":"%EF%BC%9B","＝":"%EF%BC%9D","？":"%EF%BC%9F","＠":"%EF%BC%A0","［":"%EF%BC%BB","］":"%EF%BC%BD"};function _n(e){return xn[e]}var En=/[\x00\x22\x27\x3c\x3e]/g,In=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,Sn=/^(?!-*(?:expression|(?:moz-)?binding))(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|-?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:[a-z]{1,2}|%)?|!important|)$/i,An=/^(?![^#?]*\/(?:\.|%2E){2}(?:[\/?#]|$))(?:(?:https?|mailto):|[^&:\/?#]*(?:[\/?#]|$))/i,kn=/<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g,Tn=/</g;function Cn(){return dn("Enter a valid phone number")}function Nn(){return dn("Unable to send password reset code to specified email")}function Rn(){return dn("Something went wrong. Please try again.")}function Ln(){return dn("This email already exists without any means of sign-in. Please reset the password to recover.")}function Mn(e){var t="";switch((e=e||{}).code){case"invalid-argument":t+="Client specified an invalid argument.";break;case"invalid-configuration":t+="Client specified an invalid project configuration.";break;case"failed-precondition":t+="Request can not be executed in the current system state.";break;case"out-of-range":t+="Client specified an invalid range.";break;case"unauthenticated":t+="Request not authenticated due to missing, invalid, or expired OAuth token.";break;case"permission-denied":t+="Client does not have sufficient permission.";break;case"not-found":t+="Specified resource is not found.";break;case"aborted":t+="Concurrency conflict, such as read-modify-write conflict.";break;case"already-exists":t+="The resource that a client tried to create already exists.";break;case"resource-exhausted":t+="Either out of resource quota or reaching rate limiting.";break;case"cancelled":t+="Request cancelled by the client.";break;case"data-loss":t+="Unrecoverable data loss or data corruption.";break;case"unknown":t+="Unknown server error.";break;case"internal":t+="Internal server error.";break;case"not-implemented":t+="API method not implemented by the server.";break;case"unavailable":t+="Service unavailable.";break;case"deadline-exceeded":t+="Request deadline exceeded.";break;case"auth/user-disabled":t+="The user account has been disabled by an administrator.";break;case"auth/timeout":t+="The operation has timed out.";break;case"auth/too-many-requests":t+="We have blocked all requests from this device due to unusual activity. Try again later.";break;case"auth/quota-exceeded":t+="The quota for this operation has been exceeded. Try again later.";break;case"auth/network-request-failed":t+="A network error has occurred. Try again later.";break;case"restart-process":t+="An issue was encountered when authenticating your request. Please visit the URL that redirected you to this page again to restart the authentication process.";break;case"no-matching-tenant-for-email":t+="No sign-in provider is available for the given email, please try with a different email."}return dn(t)}function On(){return dn("Please login again to perform this operation")}function Dn(e,t,n){var i=Error.call(this);if(this.message=i.message,"stack"in i&&(this.stack=i.stack),this.code=Pn+e,!(e=t)){if(e="","firebaseui/merge-conflict"===this.code)e+="The current anonymous user failed to upgrade. The non-anonymous credential is already associated with a different user account.";else e+=Rn();e=dn(e).toString()}this.message=e||"",this.credential=n||null}u(Dn,Error),Dn.prototype.toJSON=function(){return{code:this.code,message:this.message}};var Pn="firebaseui/";function Fn(){0!=Bn&&(Un[this[I]||(this[I]=++S)]=this),this.T=this.T,this.C=this.C}var Bn=0,Un={};function jn(e,t){e.T?f(void 0)?t.call(void 0):t():(e.C||(e.C=[]),e.C.push(f(void 0)?T(t,void 0):t))}function $n(e){e&&"function"==typeof e.m&&e.m()}Fn.prototype.T=!1,Fn.prototype.m=function(){if(!this.T&&(this.T=!0,this.o(),0!=Bn)){var e=this[I]||(this[I]=++S);if(0!=Bn&&this.C&&0<this.C.length)throw Error(this+" did not empty its onDisposeCallbacks queue. This probably means it overrode dispose() or disposeInternal() without calling the superclass' method.");delete Un[e]}},Fn.prototype.o=function(){if(this.C)for(;this.C.length;)this.C.shift()()};var Vn=Object.freeze||function(e){return e},Hn=!et||9<=Number(dt),Wn=et&&!ft("9"),Gn=function(){if(!h.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{h.addEventListener("test",v,t),h.removeEventListener("test",v,t)}catch(e){}return e}();function zn(e,t){this.type=e,this.g=this.target=t,this.h=!1,this.qb=!0}function Kn(e,t){if(zn.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.j=this.keyCode=0,this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.pointerId=0,this.pointerType="",this.a=null,e){var n=this.type=e.type,i=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(it){e:{try{Ze(t.nodeName);var r=!0;break e}catch(e){}r=!1}r||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.keyCode=e.keyCode||0,this.key=e.key||"",this.j=e.charCode||("keypress"==n?e.keyCode:0),this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=p(e.pointerType)?e.pointerType:qn[e.pointerType]||"",this.a=e,e.defaultPrevented&&this.preventDefault()}}zn.prototype.stopPropagation=function(){this.h=!0},zn.prototype.preventDefault=function(){this.qb=!1},O(Kn,zn);var qn=Vn({2:"touch",3:"pen",4:"mouse"});Kn.prototype.stopPropagation=function(){Kn.K.stopPropagation.call(this),this.a.stopPropagation?this.a.stopPropagation():this.a.cancelBubble=!0},Kn.prototype.preventDefault=function(){Kn.K.preventDefault.call(this);var e=this.a;if(e.preventDefault)e.preventDefault();else if(e.returnValue=!1,Wn)try{(e.ctrlKey||112<=e.keyCode&&123>=e.keyCode)&&(e.keyCode=-1)}catch(e){}};var Yn="closure_listenable_"+(1e6*Math.random()|0),Zn=0;function Xn(e,t,n,i,r){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!i,this.La=r,this.key=++Zn,this.sa=this.Ia=!1}function Jn(e){e.sa=!0,e.listener=null,e.proxy=null,e.src=null,e.La=null}function Qn(e){this.src=e,this.a={},this.g=0}function ei(e,t){var n=t.type;n in e.a&&W(e.a[n],t)&&(Jn(t),0==e.a[n].length&&(delete e.a[n],e.g--))}function ti(e,t,n,i){for(var r=0;r<e.length;++r){var o=e[r];if(!o.sa&&o.listener==t&&o.capture==!!n&&o.La==i)return r}return-1}Qn.prototype.add=function(e,t,n,i,r){var o=e.toString();(e=this.a[o])||(e=this.a[o]=[],this.g++);var s=ti(e,t,i,r);return-1<s?(t=e[s],n||(t.Ia=!1)):((t=new Xn(t,this.src,o,!!i,r)).Ia=n,e.push(t)),t};var ni="closure_lm_"+(1e6*Math.random()|0),ii={};function ri(e,t,n,i,r){if(i&&i.once)return si(e,t,n,i,r);if(w(t)){for(var o=0;o<t.length;o++)ri(e,t[o],n,i,r);return null}return n=mi(n),e&&e[Yn]?e.J.add(String(t),n,!1,E(i)?!!i.capture:!!i,r):oi(e,t,n,!1,i,r)}function oi(e,t,n,i,r,o){if(!t)throw Error("Invalid event type");var s=E(r)?!!r.capture:!!r,a=fi(e);if(a||(e[ni]=a=new Qn(e)),(n=a.add(t,n,i,s,o)).proxy)return n;if(i=function(){var e=hi,t=Hn?function(n){return e.call(t.src,t.listener,n)}:function(n){if(!(n=e.call(t.src,t.listener,n)))return n};return t}(),n.proxy=i,i.src=e,i.listener=n,e.addEventListener)Gn||(r=s),void 0===r&&(r=!1),e.addEventListener(t.toString(),i,r);else if(e.attachEvent)e.attachEvent(ci(t.toString()),i);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(i)}return n}function si(e,t,n,i,r){if(w(t)){for(var o=0;o<t.length;o++)si(e,t[o],n,i,r);return null}return n=mi(n),e&&e[Yn]?e.J.add(String(t),n,!0,E(i)?!!i.capture:!!i,r):oi(e,t,n,!0,i,r)}function ai(e,t,n,i,r){if(w(t))for(var o=0;o<t.length;o++)ai(e,t[o],n,i,r);else i=E(i)?!!i.capture:!!i,n=mi(n),e&&e[Yn]?(e=e.J,(t=String(t).toString())in e.a&&(-1<(n=ti(o=e.a[t],n,i,r))&&(Jn(o[n]),G(o,n),0==o.length&&(delete e.a[t],e.g--)))):e&&(e=fi(e))&&(t=e.a[t.toString()],e=-1,t&&(e=ti(t,n,i,r)),(n=-1<e?t[e]:null)&&ui(n))}function ui(e){if("number"!=typeof e&&e&&!e.sa){var t=e.src;if(t&&t[Yn])ei(t.J,e);else{var n=e.type,i=e.proxy;t.removeEventListener?t.removeEventListener(n,i,e.capture):t.detachEvent?t.detachEvent(ci(n),i):t.addListener&&t.removeListener&&t.removeListener(i),(n=fi(t))?(ei(n,e),0==n.g&&(n.src=null,t[ni]=null)):Jn(e)}}}function ci(e){return e in ii?ii[e]:ii[e]="on"+e}function li(e,t,n,i){var r=!0;if((e=fi(e))&&(t=e.a[t.toString()]))for(t=t.concat(),e=0;e<t.length;e++){var o=t[e];o&&o.capture==n&&!o.sa&&(o=di(o,i),r=r&&!1!==o)}return r}function di(e,t){var n=e.listener,i=e.La||e.src;return e.Ia&&ui(e),n.call(i,t)}function hi(e,t){if(e.sa)return!0;if(!Hn){if(!t)e:{t=["window","event"];for(var n=h,i=0;i<t.length;i++)if(null==(n=n[t[i]])){t=null;break e}t=n}if(t=new Kn(i=t,this),n=!0,!(0>i.keyCode||null!=i.returnValue)){e:{var r=!1;if(0==i.keyCode)try{i.keyCode=-1;break e}catch(e){r=!0}(r||null==i.returnValue)&&(i.returnValue=!0)}for(i=[],r=t.g;r;r=r.parentNode)i.push(r);for(e=e.type,r=i.length-1;!t.h&&0<=r;r--){t.g=i[r];var o=li(i[r],e,!0,t);n=n&&o}for(r=0;!t.h&&r<i.length;r++)t.g=i[r],o=li(i[r],e,!1,t),n=n&&o}return n}return di(e,new Kn(t,this))}function fi(e){return(e=e[ni])instanceof Qn?e:null}var pi="__closure_events_fn_"+(1e9*Math.random()>>>0);function mi(e){return _(e)?e:(e[pi]||(e[pi]=function(t){return e.handleEvent(t)}),e[pi])}function gi(){Fn.call(this),this.J=new Qn(this),this.wb=this,this.Ha=null}function vi(e,t){var n,i=e.Ha;if(i)for(n=[];i;i=i.Ha)n.push(i);if(e=e.wb,i=t.type||t,p(t))t=new zn(t,e);else if(t instanceof zn)t.target=t.target||e;else{var r=t;ce(t=new zn(i,e),r)}if(r=!0,n)for(var o=n.length-1;!t.h&&0<=o;o--){var s=t.g=n[o];r=yi(s,i,!0,t)&&r}if(t.h||(r=yi(s=t.g=e,i,!0,t)&&r,t.h||(r=yi(s,i,!1,t)&&r)),n)for(o=0;!t.h&&o<n.length;o++)r=yi(s=t.g=n[o],i,!1,t)&&r;return r}function yi(e,t,n,i){if(!(t=e.J.a[String(t)]))return!0;t=t.concat();for(var r=!0,o=0;o<t.length;++o){var s=t[o];if(s&&!s.sa&&s.capture==n){var a=s.listener,u=s.La||s.src;s.Ia&&ei(e.J,s),r=!1!==a.call(u,i)&&r}}return r&&0!=i.qb}O(gi,Fn),gi.prototype[Yn]=!0,gi.prototype.Za=function(e){this.Ha=e},gi.prototype.removeEventListener=function(e,t,n,i){ai(this,e,t,n,i)},gi.prototype.o=function(){if(gi.K.o.call(this),this.J){var e,t=this.J;for(e in t.a){for(var n=t.a[e],i=0;i<n.length;i++)Jn(n[i]);delete t.a[e],t.g--}}this.Ha=null};var bi={},wi=0;function xi(e,t){if(!e)throw Error("Event target element must be provided!");if(e=Ei(e),bi[e]&&bi[e].length)for(var n=0;n<bi[e].length;n++)vi(bi[e][n],t)}function _i(e){var t=Ei(e.N());bi[t]&&bi[t].length&&(function(e,t){e:{for(var n=e.length,i=p(e)?e.split(""):e,r=0;r<n;r++)if(r in i&&t.call(void 0,i[r],r,e)){t=r;break e}t=-1}0<=t&&G(e,t)}(bi[t],(function(t){return t==e})),bi[t].length||delete bi[t])}function Ei(e){return void 0===e.a&&(e.a=wi,wi++),e.a}function Ii(e){if(!e)throw Error("Event target element must be provided!");gi.call(this),this.a=e}function Si(e){if(!e)return!1;try{return!!e.$goog_Thenable}catch(e){return!1}}function Ai(e,t){this.h=e,this.j=t,this.g=0,this.a=null}function ki(e,t){e.j(t),100>e.g&&(e.g++,t.next=e.a,e.a=t)}function Ti(){this.g=this.a=null}u(Ii,gi),Ii.prototype.N=function(){return this.a},Ii.prototype.register=function(){var e=Ei(this.N());bi[e]?H(bi[e],this)||bi[e].push(this):bi[e]=[this]},Ai.prototype.get=function(){if(0<this.g){this.g--;var e=this.a;this.a=e.next,e.next=null}else e=this.h();return e};var Ci,Ni,Ri=new Ai((function(){return new Mi}),(function(e){e.reset()}));function Li(){var e=Fi,t=null;return e.a&&(t=e.a,e.a=e.a.next,e.a||(e.g=null),t.next=null),t}function Mi(){this.next=this.g=this.a=null}function Oi(e){h.setTimeout((function(){throw e}),0)}function Di(e,t){Ni||function(){if(h.Promise&&h.Promise.resolve){var e=h.Promise.resolve(void 0);Ni=function(){e.then(Bi)}}else Ni=function(){var e=Bi;!_(h.setImmediate)||h.Window&&h.Window.prototype&&!qe("Edge")&&h.Window.prototype.setImmediate==h.setImmediate?(Ci||(Ci=function(){var e=h.MessageChannel;if(void 0===e&&"undefined"!=typeof window&&window.postMessage&&window.addEventListener&&!qe("Presto")&&(e=function(){var e=document.createElement("IFRAME");e.style.display="none",e.src="",document.documentElement.appendChild(e);var t=e.contentWindow;(e=t.document).open(),e.write(""),e.close();var n="callImmediate"+Math.random(),i="file:"==t.location.protocol?"*":t.location.protocol+"//"+t.location.host;e=T((function(e){"*"!=i&&e.origin!=i||e.data!=n||this.port1.onmessage()}),this),t.addEventListener("message",e,!1),this.port1={},this.port2={postMessage:function(){t.postMessage(n,i)}}}),void 0!==e&&!qe("Trident")&&!qe("MSIE")){var t=new e,n={},i=n;return t.port1.onmessage=function(){if(f(n.next)){var e=(n=n.next).gb;n.gb=null,e()}},function(e){i.next={gb:e},i=i.next,t.port2.postMessage(0)}}return"undefined"!=typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(e){var t=document.createElement("SCRIPT");t.onreadystatechange=function(){t.onreadystatechange=null,t.parentNode.removeChild(t),t=null,e(),e=null},document.documentElement.appendChild(t)}:function(e){h.setTimeout(e,0)}}()),Ci(e)):h.setImmediate(e)}}(),Pi||(Ni(),Pi=!0),Fi.add(e,t)}Ti.prototype.add=function(e,t){var n=Ri.get();n.set(e,t),this.g?this.g.next=n:this.a=n,this.g=n},Mi.prototype.set=function(e,t){this.a=e,this.g=t,this.next=null},Mi.prototype.reset=function(){this.next=this.g=this.a=null};var Pi=!1,Fi=new Ti;function Bi(){for(var e;e=Li();){try{e.a.call(e.g)}catch(e){Oi(e)}ki(Ri,e)}Pi=!1}function Ui(e){if(this.a=ji,this.A=void 0,this.j=this.g=this.h=null,this.s=this.i=!1,e!=v)try{var t=this;e.call(void 0,(function(e){Xi(t,$i,e)}),(function(e){if(!(e instanceof ir))try{if(e instanceof Error)throw e;throw Error("Promise rejected.")}catch(e){}Xi(t,Vi,e)}))}catch(e){Xi(this,Vi,e)}}var ji=0,$i=2,Vi=3;function Hi(){this.next=this.j=this.g=this.s=this.a=null,this.h=!1}Hi.prototype.reset=function(){this.j=this.g=this.s=this.a=null,this.h=!1};var Wi=new Ai((function(){return new Hi}),(function(e){e.reset()}));function Gi(e,t,n){var i=Wi.get();return i.s=e,i.g=t,i.j=n,i}function zi(e){if(e instanceof Ui)return e;var t=new Ui(v);return Xi(t,$i,e),t}function Ki(e){return new Ui((function(t,n){n(e)}))}function qi(e,t){if(e.a==ji)if(e.h){var n=e.h;if(n.g){for(var i=0,r=null,o=null,s=n.g;s&&(s.h||(i++,s.a==e&&(r=s),!(r&&1<i)));s=s.next)r||(o=s);r&&(n.a==ji&&1==i?qi(n,t):(o?((i=o).next==n.j&&(n.j=i),i.next=i.next.next):Qi(n),er(n,r,Vi,t)))}e.h=null}else Xi(e,Vi,t)}function Yi(e,t){e.g||e.a!=$i&&e.a!=Vi||Ji(e),e.j?e.j.next=t:e.g=t,e.j=t}function Zi(e,t,n,i){var r=Gi(null,null,null);return r.a=new Ui((function(e,o){r.s=t?function(n){try{var r=t.call(i,n);e(r)}catch(e){o(e)}}:e,r.g=n?function(t){try{var r=n.call(i,t);!f(r)&&t instanceof ir?o(t):e(r)}catch(e){o(e)}}:o})),r.a.h=e,Yi(e,r),r.a}function Xi(e,t,n){if(e.a==ji){e===n&&(t=Vi,n=new TypeError("Promise cannot resolve to itself")),e.a=1;e:{var i=n,r=e.hc,o=e.ic;if(i instanceof Ui){Yi(i,Gi(r||v,o||null,e));var s=!0}else if(Si(i))i.then(r,o,e),s=!0;else{if(E(i))try{var a=i.then;if(_(a)){!function(e,t,n,i,r){function o(e){a||(a=!0,i.call(r,e))}function s(e){a||(a=!0,n.call(r,e))}var a=!1;try{t.call(e,s,o)}catch(e){o(e)}}(i,a,r,o,e),s=!0;break e}}catch(t){o.call(e,t),s=!0;break e}s=!1}}s||(e.A=n,e.a=t,e.h=null,Ji(e),t!=Vi||n instanceof ir||function(e,t){e.s=!0,Di((function(){e.s&&nr.call(null,t)}))}(e,n))}}function Ji(e){e.i||(e.i=!0,Di(e.Hb,e))}function Qi(e){var t=null;return e.g&&(t=e.g,e.g=t.next,t.next=null),e.g||(e.j=null),t}function er(e,t,n,i){if(n==Vi&&t.g&&!t.h)for(;e&&e.s;e=e.h)e.s=!1;if(t.a)t.a.h=null,tr(t,n,i);else try{t.h?t.s.call(t.j):tr(t,n,i)}catch(e){nr.call(null,e)}ki(Wi,t)}function tr(e,t,n){t==$i?e.s.call(e.j,n):e.g&&e.g.call(e.j,n)}Ui.prototype.then=function(e,t,n){return Zi(this,_(e)?e:null,_(t)?t:null,n)},Ui.prototype.$goog_Thenable=!0,(e=Ui.prototype).fc=function(e,t){return(e=Gi(e,e,t)).h=!0,Yi(this,e),this},e.Ca=function(e,t){return Zi(this,null,e,t)},e.cancel=function(e){this.a==ji&&Di((function(){qi(this,new ir(e))}),this)},e.hc=function(e){this.a=ji,Xi(this,$i,e)},e.ic=function(e){this.a=ji,Xi(this,Vi,e)},e.Hb=function(){for(var e;e=Qi(this);)er(this,e,this.a,this.A);this.i=!1};var nr=Oi;function ir(e){D.call(this,e)}function rr(e,t,n){t||(t={}),n=n||window;var i=e instanceof xt?e:It(void 0!==e.href?e.href:String(e));e=t.target||e.target;var r=[];for(o in t)switch(o){case"width":case"height":case"top":case"left":r.push(o+"="+t[o]);break;case"target":case"noopener":case"noreferrer":break;default:r.push(o+"="+(t[o]?1:0))}var o=r.join(",");return(qe("iPhone")&&!qe("iPod")&&!qe("iPad")||qe("iPad")||qe("iPod"))&&n.navigator&&n.navigator.standalone&&e&&"_self"!=e?(o=n.document.createElement("A"),i=i instanceof xt?i:St(i),o.href=_t(i),o.setAttribute("target",e),t.noreferrer&&o.setAttribute("rel","noreferrer"),(t=document.createEvent("MouseEvent")).initMouseEvent("click",!0,!0,n,1),o.dispatchEvent(t),n={}):t.noreferrer?(n=n.open("",e,o),t=_t(i).toString(),n&&(nt&&-1!=t.indexOf(";")&&(t="'"+t.replace(/'/g,"%27")+"'"),n.opener=null,t=Mt('<meta name="referrer" content="no-referrer"><meta http-equiv="refresh" content="0; url='+oe(t)+'">',null),n.document.write(Rt(t)),n.document.close())):(n=n.open(_t(i).toString(),e,o))&&t.noopener&&(n.opener=null),n}function or(){try{return!(!window.opener||!window.opener.location||window.opener.location.hostname!==window.location.hostname||window.opener.location.protocol!==window.location.protocol)}catch(e){}return!1}function sr(e){rr(e,{target:window.cordova&&window.cordova.InAppBrowser?"_system":"_blank"},void 0)}function ar(e,t){if(null==(e=E(e)&&1==e.nodeType?e:document.querySelector(String(e))))throw Error(t||"Cannot find element.");return e}function ur(){return window.location.href}function cr(e){var t=wr;this.s=[],this.T=t,this.O=e||null,this.j=this.a=!1,this.h=void 0,this.J=this.l=this.A=!1,this.i=0,this.g=null,this.C=0}function lr(e,t,n){e.a=!0,e.h=n,e.j=!t,pr(e)}function dr(e){if(e.a){if(!e.J)throw new mr(e);e.J=!1}}function hr(e,t,n){e.s.push([t,n,void 0]),e.a&&pr(e)}function fr(e){return V(e.s,(function(e){return _(e[1])}))}function pr(e){if(e.i&&e.a&&fr(e)){var t=e.i,n=yr[t];n&&(h.clearTimeout(n.a),delete yr[t]),e.i=0}e.g&&(e.g.C--,delete e.g),t=e.h;for(var i=n=!1;e.s.length&&!e.A;){var r=e.s.shift(),o=r[0],s=r[1];if(r=r[2],o=e.j?s:o)try{var a=o.call(r||e.O,t);f(a)&&(e.j=e.j&&(a==t||a instanceof Error),e.h=t=a),(Si(t)||"function"==typeof h.Promise&&t instanceof h.Promise)&&(i=!0,e.A=!0)}catch(i){t=i,e.j=!0,fr(e)||(n=!0)}}e.h=t,i&&(a=T(e.L,e,!0),i=T(e.L,e,!1),t instanceof cr?(hr(t,a,i),t.l=!0):t.then(a,i)),n&&(t=new vr(t),yr[t.a]=t,e.i=t.a)}function mr(){D.call(this)}function gr(){D.call(this)}function vr(e){this.a=h.setTimeout(T(this.h,this),0),this.g=e}O(ir,D),ir.prototype.name="cancel",cr.prototype.cancel=function(e){if(this.a)this.h instanceof cr&&this.h.cancel();else{if(this.g){var t=this.g;delete this.g,e?t.cancel(e):(t.C--,0>=t.C&&t.cancel())}this.T?this.T.call(this.O,this):this.J=!0,this.a||(e=new gr(this),dr(this),lr(this,!1,e))}},cr.prototype.L=function(e,t){this.A=!1,lr(this,e,t)},cr.prototype.callback=function(e){dr(this),lr(this,!0,e)},cr.prototype.then=function(e,t,n){var i,r,o=new Ui((function(e,t){i=e,r=t}));return hr(this,i,(function(e){e instanceof gr?o.cancel():r(e)})),o.then(e,t,n)},cr.prototype.$goog_Thenable=!0,O(mr,D),mr.prototype.message="Deferred has already fired",mr.prototype.name="AlreadyCalledError",O(gr,D),gr.prototype.message="Deferred was canceled",gr.prototype.name="CanceledError",vr.prototype.h=function(){throw delete yr[this.a],this.g};var yr={};function br(e){var t={},n=t.document||document,i=bt(e).toString(),r=document.createElement("SCRIPT"),o={rb:r,sb:void 0},s=new cr(o),a=null,u=null!=t.timeout?t.timeout:5e3;return 0<u&&(a=window.setTimeout((function(){xr(r,!0);var e=new Ir(Er,"Timeout reached for loading script "+i);dr(s),lr(s,!1,e)}),u),o.sb=a),r.onload=r.onreadystatechange=function(){r.readyState&&"loaded"!=r.readyState&&"complete"!=r.readyState||(xr(r,t.xc||!1,a),s.callback(null))},r.onerror=function(){xr(r,!0,a);var e=new Ir(_r,"Error while loading script "+i);dr(s),lr(s,!1,e)},ce(o=t.attributes||{},{type:"text/javascript",charset:"UTF-8"}),function(e,t){se(t,(function(t,n){t&&"object"==typeof t&&t.ma&&(t=t.ka()),"style"==n?e.style.cssText=t:"class"==n?e.className=t:"for"==n?e.htmlFor=t:Gt.hasOwnProperty(n)?e.setAttribute(Gt[n],t):0==n.lastIndexOf("aria-",0)||0==n.lastIndexOf("data-",0)?e.setAttribute(n,t):e[n]=t}))}(r,o),function(e,t){e.src=bt(t),null===g&&(g=(t=(t=h.document).querySelector&&t.querySelector("script[nonce]"))&&(t=t.nonce||t.getAttribute("nonce"))&&m.test(t)?t:""),(t=g)&&e.setAttribute("nonce",t)}(r,e),function(e){var t=(e||document).getElementsByTagName("HEAD");return t&&0!=t.length?t[0]:e.documentElement}(n).appendChild(r),s}function wr(){if(this&&this.rb){var e=this.rb;e&&"SCRIPT"==e.tagName&&xr(e,!0,this.sb)}}function xr(e,t,n){null!=n&&h.clearTimeout(n),e.onload=v,e.onerror=v,e.onreadystatechange=v,t&&window.setTimeout((function(){Kt(e)}),0)}var _r=0,Er=1;function Ir(e,t){var n="Jsloader error (code #"+e+")";t&&(n+=": "+t),D.call(this,n),this.code=e}function Sr(){return h.google&&h.google.accounts&&h.google.accounts.id||null}function Ar(e){this.a=e||Sr(),this.h=!1,this.g=null}function kr(e,t,n){return e.a&&t?(e.h=!0,new Ui((function(i){e.g=i,e.a.initialize({client_id:t,callback:i,auto_select:!n}),e.a.prompt()}))):zi(t?Cr.Xa().load().then((function(){return e.a=Sr(),kr(e,t,n)})).Ca((function(){return null})):null)}O(Ir,D),Ar.prototype.cancel=function(){this.a&&this.h&&(this.g&&this.g(null),this.a.cancel())},y(Ar);var Tr=new mt(vt,"https://accounts.google.com/gsi/client");function Cr(){this.a=null}function Nr(e,t){this.a=e,this.g=t||function(e){throw e}}function Rr(e,t,n){this.reset(e,t,n,void 0,void 0)}Cr.prototype.load=function(){var e=this;if(this.a)return this.a;var t=function(){var e=Tr;e instanceof mt&&e.constructor===mt&&e.g===gt?e=e.a:(F("expected object of type Const, got '"+e+"'"),e="type_error:Const");var t=new yt;return t.a=e,t}();return Sr()?zi():this.a=function(){var e=null;return new Ui((function(t){"complete"==h.document.readyState?t():(e=function(){t()},si(window,"load",e))})).Ca((function(t){throw ai(window,"load",e),t}))}().then((function(){if(!Sr())return new Ui((function(n,i){var r=setTimeout((function(){e.a=null,i(Error("Network error!"))}),1e4);h.onGoogleLibraryLoad=function(){clearTimeout(r),n()},zi(br(t)).then((function(){Sr()&&n()})).Ca((function(t){clearTimeout(r),e.a=null,i(t)}))}))}))},y(Cr),Nr.prototype.confirm=function(e){return zi(this.a.confirm(e)).Ca(this.g)},Rr.prototype.a=null;function Lr(e){this.s=e,this.a=this.h=this.j=this.g=null}function Mr(e,t){this.name=e,this.value=t}Rr.prototype.reset=function(e,t,n,i,r){"number"==typeof r||0,this.h=i||L(),this.j=e,this.s=t,this.g=n,delete this.a},Mr.prototype.toString=function(){return this.name};var Or=new Mr("SEVERE",1e3),Dr=new Mr("WARNING",900),Pr=new Mr("CONFIG",700);function Fr(e){return e.j?e.j:e.g?Fr(e.g):(F("Root logger has no level set."),null)}Lr.prototype.log=function(e,t,n){if(e.value>=Fr(this).value)for(_(t)&&(t=t()),e=new Rr(e,String(t),this.s),n&&(e.a=n),n=this;n;){var i=n,r=e;if(i.a)for(var o=0;t=i.a[o];o++)t(r);n=n.g}};var Br={},Ur=null;function jr(){Ur||(Ur=new Lr(""),Br[""]=Ur,Ur.j=Pr)}function $r(){this.a=L()}var Vr=null;function Hr(e){this.j=e||"",Vr||(Vr=new $r),this.s=Vr}function Wr(e){return 10>e?"0"+e:String(e)}function Gr(e){Hr.call(this,e)}function zr(){this.s=T(this.h,this),this.a=new Gr,this.a.g=!1,this.a.h=!1,this.g=this.a.a=!1,this.j={}}$r.prototype.set=function(e){this.a=e},$r.prototype.reset=function(){this.set(L())},$r.prototype.get=function(){return this.a},Hr.prototype.a=!0,Hr.prototype.g=!0,Hr.prototype.h=!1,O(Gr,Hr),zr.prototype.h=function(e){if(!this.j[e.g]){var t=function(e,t){var n=[];if(n.push(e.j," "),e.g){var i=new Date(t.h);n.push("[",Wr(i.getFullYear()-2e3)+Wr(i.getMonth()+1)+Wr(i.getDate())+" "+Wr(i.getHours())+":"+Wr(i.getMinutes())+":"+Wr(i.getSeconds())+"."+Wr(Math.floor(i.getMilliseconds()/10)),"] ")}return n.push("[",function(e,t){t=(e=(e.h-t)/1e3).toFixed(3);var n=0;if(1>e)n=2;else for(;100>e;)n++,e*=10;for(;0<n--;)t=" "+t;return t}(t,e.s.get()),"s] "),n.push("[",t.g,"] "),n.push(t.s),e.h&&(t=t.a)&&n.push("\n",t instanceof Error?t.message:t.toString()),e.a&&n.push("\n"),n.join("")}(this.a,e);if(qr)!function(e,t,n,i){e[t]?e[t](n,i||""):e.log(n,i||"")}(qr,function(e){if(e){if(e.value>=Or.value)return"error";if(e.value>=Dr.value)return"warn";if(e.value>=Pr.value)return"log"}return"debug"}(e.j),t,e.a)}};var Kr,qr=h.console;function Yr(e,t){Kr&&Kr.log(Or,e,t)}Kr=function e(t){var n;if(jr(),!(n=Br[t])){n=new Lr(t);var i=t.lastIndexOf("."),r=t.substr(i+1);(i=e(t.substr(0,i))).h||(i.h={}),i.h[r]=n,n.g=i,Br[t]=n}return n}("firebaseui");var Zr=new zr;if(1!=Zr.g){var Xr;jr(),Xr=Ur;var Jr=Zr.s;Xr.a||(Xr.a=[]),Xr.a.push(Jr),Zr.g=!0}function Qr(e){Kr&&Kr.log(Dr,e,void 0)}function eo(){this.a=("undefined"==typeof document?null:document)||{cookie:""}}function to(e){e=(e.a.cookie||"").split(";");for(var t,n,i=[],r=[],o=0;o<e.length;o++)-1==(t=(n=Z(e[o])).indexOf("="))?(i.push(""),r.push(n)):(i.push(n.substring(0,t)),r.push(n.substring(t+1)));return{keys:i,values:r}}(e=eo.prototype).set=function(e,t,n,i,r,o){if(/[;=\s]/.test(e))throw Error('Invalid cookie name "'+e+'"');if(/[;\r\n]/.test(t))throw Error('Invalid cookie value "'+t+'"');f(n)||(n=-1),r=r?";domain="+r:"",i=i?";path="+i:"",o=o?";secure":"",n=0>n?"":0==n?";expires="+new Date(1970,1,1).toUTCString():";expires="+new Date(L()+1e3*n).toUTCString(),this.a.cookie=e+"="+t+r+i+n+o},e.get=function(e,t){for(var n,i=e+"=",r=(this.a.cookie||"").split(";"),o=0;o<r.length;o++){if(0==(n=Z(r[o])).lastIndexOf(i,0))return n.substr(i.length);if(n==e)return""}return t},e.ja=function(){return to(this).keys},e.la=function(){return to(this).values},e.clear=function(){for(var e=to(this).keys,t=e.length-1;0<=t;t--){var n=e[t];this.get(n),this.set(n,"",0,void 0,void 0)}};var no=new eo;function io(){}function ro(e,t,n,i){this.h=null!=e?e:-1,this.g=t||null,this.a=n||null,this.j=!!i}function oo(e,t){this.g=e,this.a=t||null}function so(e){return{email:e.g,credential:e.a&&e.a.toJSON()}}function ao(e){if(e&&e.email){var t=e.credential&&s.default.auth.AuthCredential.fromJSON(e.credential);return new oo(e.email,t)}return null}function uo(e){this.a=e||null}function co(e){for(var t=[],n=0,i=0;i<e.length;i++){var r=e.charCodeAt(i);255<r&&(t[n++]=255&r,r>>=8),t[n++]=r}return t}function lo(e){return $(e,(function(e){return 1<(e=e.toString(16)).length?e:"0"+e})).join("")}function ho(e){for(this.i=e,this.g=this.i.length/4,this.j=this.g+6,this.h=[[],[],[],[]],this.s=[[],[],[],[]],this.a=Array(fo*(this.j+1)),e=0;e<this.g;e++)this.a[e]=[this.i[4*e],this.i[4*e+1],this.i[4*e+2],this.i[4*e+3]];var t=Array(4);for(e=this.g;e<fo*(this.j+1);e++){if(t[0]=this.a[e-1][0],t[1]=this.a[e-1][1],t[2]=this.a[e-1][2],t[3]=this.a[e-1][3],0==e%this.g){var n=t,i=n[0];n[0]=n[1],n[1]=n[2],n[2]=n[3],n[3]=i,wo(t),t[0]^=Eo[e/this.g][0],t[1]^=Eo[e/this.g][1],t[2]^=Eo[e/this.g][2],t[3]^=Eo[e/this.g][3]}else 6<this.g&&4==e%this.g&&wo(t);this.a[e]=Array(4),this.a[e][0]=this.a[e-this.g][0]^t[0],this.a[e][1]=this.a[e-this.g][1]^t[1],this.a[e][2]=this.a[e-this.g][2]^t[2],this.a[e][3]=this.a[e-this.g][3]^t[3]}}u(ro,io),ro.prototype.set=function(e,t){no.set(e,t,this.h,this.g,this.a,this.j)},ro.prototype.get=function(e){return no.get(e)||null},ro.prototype.ra=function(e){var t=this.g,n=this.a;no.get(e),no.set(e,"",0,t,n)},ho.prototype.A=16;var fo=ho.prototype.A/4;function po(e,t){for(var n,i=0;i<fo;i++)for(var r=0;4>r;r++)n=t[n=4*r+i],e.h[i][r]=n}function mo(e){for(var t=[],n=0;n<fo;n++)for(var i=0;4>i;i++)t[4*i+n]=e.h[n][i];return t}function go(e,t){for(var n=0;4>n;n++)for(var i=0;4>i;i++)e.h[n][i]^=e.a[4*t+i][n]}function vo(e,t){for(var n=0;4>n;n++)for(var i=0;4>i;i++)e.h[n][i]=t[e.h[n][i]]}function yo(e){for(var t=1;4>t;t++)for(var n=0;4>n;n++)e.s[t][n]=e.h[t][n];for(t=1;4>t;t++)for(n=0;4>n;n++)e.h[t][n]=e.s[t][(n+t)%fo]}function bo(e){for(var t=1;4>t;t++)for(var n=0;4>n;n++)e.s[t][(n+t)%fo]=e.h[t][n];for(t=1;4>t;t++)for(n=0;4>n;n++)e.h[t][n]=e.s[t][n]}function wo(e){e[0]=xo[e[0]],e[1]=xo[e[1]],e[2]=xo[e[2]],e[3]=xo[e[3]]}var xo=[99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22],_o=[82,9,106,213,48,54,165,56,191,64,163,158,129,243,215,251,124,227,57,130,155,47,255,135,52,142,67,68,196,222,233,203,84,123,148,50,166,194,35,61,238,76,149,11,66,250,195,78,8,46,161,102,40,217,36,178,118,91,162,73,109,139,209,37,114,248,246,100,134,104,152,22,212,164,92,204,93,101,182,146,108,112,72,80,253,237,185,218,94,21,70,87,167,141,157,132,144,216,171,0,140,188,211,10,247,228,88,5,184,179,69,6,208,44,30,143,202,63,15,2,193,175,189,3,1,19,138,107,58,145,17,65,79,103,220,234,151,242,207,206,240,180,230,115,150,172,116,34,231,173,53,133,226,249,55,232,28,117,223,110,71,241,26,113,29,41,197,137,111,183,98,14,170,24,190,27,252,86,62,75,198,210,121,32,154,219,192,254,120,205,90,244,31,221,168,51,136,7,199,49,177,18,16,89,39,128,236,95,96,81,127,169,25,181,74,13,45,229,122,159,147,201,156,239,160,224,59,77,174,42,245,176,200,235,187,60,131,83,153,97,23,43,4,126,186,119,214,38,225,105,20,99,85,33,12,125],Eo=[[0,0,0,0],[1,0,0,0],[2,0,0,0],[4,0,0,0],[8,0,0,0],[16,0,0,0],[32,0,0,0],[64,0,0,0],[128,0,0,0],[27,0,0,0],[54,0,0,0]],Io=[0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,120,122,124,126,128,130,132,134,136,138,140,142,144,146,148,150,152,154,156,158,160,162,164,166,168,170,172,174,176,178,180,182,184,186,188,190,192,194,196,198,200,202,204,206,208,210,212,214,216,218,220,222,224,226,228,230,232,234,236,238,240,242,244,246,248,250,252,254,27,25,31,29,19,17,23,21,11,9,15,13,3,1,7,5,59,57,63,61,51,49,55,53,43,41,47,45,35,33,39,37,91,89,95,93,83,81,87,85,75,73,79,77,67,65,71,69,123,121,127,125,115,113,119,117,107,105,111,109,99,97,103,101,155,153,159,157,147,145,151,149,139,137,143,141,131,129,135,133,187,185,191,189,179,177,183,181,171,169,175,173,163,161,167,165,219,217,223,221,211,209,215,213,203,201,207,205,195,193,199,197,251,249,255,253,243,241,247,245,235,233,239,237,227,225,231,229],So=[0,3,6,5,12,15,10,9,24,27,30,29,20,23,18,17,48,51,54,53,60,63,58,57,40,43,46,45,36,39,34,33,96,99,102,101,108,111,106,105,120,123,126,125,116,119,114,113,80,83,86,85,92,95,90,89,72,75,78,77,68,71,66,65,192,195,198,197,204,207,202,201,216,219,222,221,212,215,210,209,240,243,246,245,252,255,250,249,232,235,238,237,228,231,226,225,160,163,166,165,172,175,170,169,184,187,190,189,180,183,178,177,144,147,150,149,156,159,154,153,136,139,142,141,132,135,130,129,155,152,157,158,151,148,145,146,131,128,133,134,143,140,137,138,171,168,173,174,167,164,161,162,179,176,181,182,191,188,185,186,251,248,253,254,247,244,241,242,227,224,229,230,239,236,233,234,203,200,205,206,199,196,193,194,211,208,213,214,223,220,217,218,91,88,93,94,87,84,81,82,67,64,69,70,79,76,73,74,107,104,109,110,103,100,97,98,115,112,117,118,127,124,121,122,59,56,61,62,55,52,49,50,35,32,37,38,47,44,41,42,11,8,13,14,7,4,1,2,19,16,21,22,31,28,25,26],Ao=[0,9,18,27,36,45,54,63,72,65,90,83,108,101,126,119,144,153,130,139,180,189,166,175,216,209,202,195,252,245,238,231,59,50,41,32,31,22,13,4,115,122,97,104,87,94,69,76,171,162,185,176,143,134,157,148,227,234,241,248,199,206,213,220,118,127,100,109,82,91,64,73,62,55,44,37,26,19,8,1,230,239,244,253,194,203,208,217,174,167,188,181,138,131,152,145,77,68,95,86,105,96,123,114,5,12,23,30,33,40,51,58,221,212,207,198,249,240,235,226,149,156,135,142,177,184,163,170,236,229,254,247,200,193,218,211,164,173,182,191,128,137,146,155,124,117,110,103,88,81,74,67,52,61,38,47,16,25,2,11,215,222,197,204,243,250,225,232,159,150,141,132,187,178,169,160,71,78,85,92,99,106,113,120,15,6,29,20,43,34,57,48,154,147,136,129,190,183,172,165,210,219,192,201,246,255,228,237,10,3,24,17,46,39,60,53,66,75,80,89,102,111,116,125,161,168,179,186,133,140,151,158,233,224,251,242,205,196,223,214,49,56,35,42,21,28,7,14,121,112,107,98,93,84,79,70],ko=[0,11,22,29,44,39,58,49,88,83,78,69,116,127,98,105,176,187,166,173,156,151,138,129,232,227,254,245,196,207,210,217,123,112,109,102,87,92,65,74,35,40,53,62,15,4,25,18,203,192,221,214,231,236,241,250,147,152,133,142,191,180,169,162,246,253,224,235,218,209,204,199,174,165,184,179,130,137,148,159,70,77,80,91,106,97,124,119,30,21,8,3,50,57,36,47,141,134,155,144,161,170,183,188,213,222,195,200,249,242,239,228,61,54,43,32,17,26,7,12,101,110,115,120,73,66,95,84,247,252,225,234,219,208,205,198,175,164,185,178,131,136,149,158,71,76,81,90,107,96,125,118,31,20,9,2,51,56,37,46,140,135,154,145,160,171,182,189,212,223,194,201,248,243,238,229,60,55,42,33,16,27,6,13,100,111,114,121,72,67,94,85,1,10,23,28,45,38,59,48,89,82,79,68,117,126,99,104,177,186,167,172,157,150,139,128,233,226,255,244,197,206,211,216,122,113,108,103,86,93,64,75,34,41,52,63,14,5,24,19,202,193,220,215,230,237,240,251,146,153,132,143,190,181,168,163],To=[0,13,26,23,52,57,46,35,104,101,114,127,92,81,70,75,208,221,202,199,228,233,254,243,184,181,162,175,140,129,150,155,187,182,161,172,143,130,149,152,211,222,201,196,231,234,253,240,107,102,113,124,95,82,69,72,3,14,25,20,55,58,45,32,109,96,119,122,89,84,67,78,5,8,31,18,49,60,43,38,189,176,167,170,137,132,147,158,213,216,207,194,225,236,251,246,214,219,204,193,226,239,248,245,190,179,164,169,138,135,144,157,6,11,28,17,50,63,40,37,110,99,116,121,90,87,64,77,218,215,192,205,238,227,244,249,178,191,168,165,134,139,156,145,10,7,16,29,62,51,36,41,98,111,120,117,86,91,76,65,97,108,123,118,85,88,79,66,9,4,19,30,61,48,39,42,177,188,171,166,133,136,159,146,217,212,195,206,237,224,247,250,183,186,173,160,131,142,153,148,223,210,197,200,235,230,241,252,103,106,125,112,83,94,73,68,15,2,21,24,59,54,33,44,12,1,22,27,56,53,34,47,100,105,126,115,80,93,74,71,220,209,198,203,232,229,242,255,180,185,174,163,128,141,154,151],Co=[0,14,28,18,56,54,36,42,112,126,108,98,72,70,84,90,224,238,252,242,216,214,196,202,144,158,140,130,168,166,180,186,219,213,199,201,227,237,255,241,171,165,183,185,147,157,143,129,59,53,39,41,3,13,31,17,75,69,87,89,115,125,111,97,173,163,177,191,149,155,137,135,221,211,193,207,229,235,249,247,77,67,81,95,117,123,105,103,61,51,33,47,5,11,25,23,118,120,106,100,78,64,82,92,6,8,26,20,62,48,34,44,150,152,138,132,174,160,178,188,230,232,250,244,222,208,194,204,65,79,93,83,121,119,101,107,49,63,45,35,9,7,21,27,161,175,189,179,153,151,133,139,209,223,205,195,233,231,245,251,154,148,134,136,162,172,190,176,234,228,246,248,210,220,206,192,122,116,102,104,66,76,94,80,10,4,22,24,50,60,46,32,236,226,240,254,212,218,200,198,156,146,128,142,164,170,184,182,12,2,16,30,52,58,40,38,124,114,96,110,68,74,88,86,55,57,43,37,15,1,19,29,71,73,91,85,127,113,99,109,215,217,203,197,239,225,243,253,167,169,187,181,159,145,131,141];function No(e,t){e=new ho(Lo(e));for(var n,i=(t=co(t)).splice(0,16),r="";i.length;){n=16-i.length;for(var o=0;o<n;o++)i.push(0);for(po(n=e,i),go(n,0),i=1;i<n.j;++i){vo(n,xo),yo(n),o=n.h;for(var s=n.s[0],a=0;4>a;a++)s[0]=o[0][a],s[1]=o[1][a],s[2]=o[2][a],s[3]=o[3][a],o[0][a]=Io[s[0]]^So[s[1]]^s[2]^s[3],o[1][a]=s[0]^Io[s[1]]^So[s[2]]^s[3],o[2][a]=s[0]^s[1]^Io[s[2]]^So[s[3]],o[3][a]=So[s[0]]^s[1]^s[2]^Io[s[3]];go(n,i)}vo(n,xo),yo(n),go(n,n.j),r+=lo(mo(n)),i=t.splice(0,16)}return r}function Ro(e,t){e=new ho(Lo(e));for(var n=[],i=0;i<t.length;i+=2)n.push(parseInt(t.substring(i,i+2),16));var r=n.splice(0,16);for(t="";r.length;){for(po(i=e,r),go(i,i.j),r=1;r<i.j;++r){bo(i),vo(i,_o),go(i,i.j-r);for(var o=i.h,s=i.s[0],a=0;4>a;a++)s[0]=o[0][a],s[1]=o[1][a],s[2]=o[2][a],s[3]=o[3][a],o[0][a]=Co[s[0]]^ko[s[1]]^To[s[2]]^Ao[s[3]],o[1][a]=Ao[s[0]]^Co[s[1]]^ko[s[2]]^To[s[3]],o[2][a]=To[s[0]]^Ao[s[1]]^Co[s[2]]^ko[s[3]],o[3][a]=ko[s[0]]^To[s[1]]^Ao[s[2]]^Co[s[3]]}if(bo(i),vo(i,_o),go(i,0),8192>=(i=mo(i)).length)i=String.fromCharCode.apply(null,i);else{for(r="",o=0;o<i.length;o+=8192)r+=String.fromCharCode.apply(null,Y(i,o,o+8192));i=r}t+=i,r=n.splice(0,16)}return t.replace(/(\x00)+$/,"")}function Lo(e){for(var t=32-(e=co(e.substring(0,32))).length,n=0;n<t;n++)e.push(0);return e}function Mo(e){var t=[];return Do(new Oo,e,t),t.join("")}function Oo(){}function Do(e,t,n){if(null==t)n.push("null");else{if("object"==typeof t){if(w(t)){var i=t;t=i.length,n.push("[");for(var r="",o=0;o<t;o++)n.push(r),Do(e,i[o],n),r=",";return void n.push("]")}if(!(t instanceof String||t instanceof Number||t instanceof Boolean)){for(i in n.push("{"),r="",t)Object.prototype.hasOwnProperty.call(t,i)&&("function"!=typeof(o=t[i])&&(n.push(r),Bo(i,n),n.push(":"),Do(e,o,n),r=","));return void n.push("}")}t=t.valueOf()}switch(typeof t){case"string":Bo(t,n);break;case"number":n.push(isFinite(t)&&!isNaN(t)?String(t):"null");break;case"boolean":n.push(String(t));break;case"function":n.push("null");break;default:throw Error("Unknown type: "+typeof t)}}}var Po={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\u000b"},Fo=/\uffff/.test("￿")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function Bo(e,t){t.push('"',e.replace(Fo,(function(e){var t=Po[e];return t||(t="\\u"+(65536|e.charCodeAt(0)).toString(16).substr(1),Po[e]=t),t})),'"')}function Uo(e){this.a=e}function jo(){}function $o(e){this.a=e}function Vo(e){if(!e.a)return!1;try{return e.a.setItem("__sak","1"),e.a.removeItem("__sak"),!0}catch(e){return!1}}function Ho(){var e=null;try{e=window.localStorage||null}catch(e){}this.a=e}function Wo(){var e=null;try{e=window.sessionStorage||null}catch(e){}this.a=e}function Go(e,t){this.g=e,this.a=t+"::"}Uo.prototype.set=function(e,t){f(t)?this.a.set(e,Mo(t)):this.a.ra(e)},Uo.prototype.get=function(e){try{var t=this.a.get(e)}catch(e){return}if(null!==t)try{return JSON.parse(t)}catch(e){throw"Storage: Invalid value was encountered"}},O(jo,io),jo.prototype.clear=function(){var e=fe(this.ha(!0)),t=this;U(e,(function(e){t.ra(e)}))},O($o,jo),(e=$o.prototype).set=function(e,t){try{this.a.setItem(e,t)}catch(e){if(0==this.a.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded"}},e.get=function(e){if(!p(e=this.a.getItem(e))&&null!==e)throw"Storage mechanism: Invalid value was encountered";return e},e.ra=function(e){this.a.removeItem(e)},e.ha=function(e){var t=0,n=this.a,i=new de;return i.next=function(){if(t>=n.length)throw le;var i=n.key(t++);if(e)return i;if(!p(i=n.getItem(i)))throw"Storage mechanism: Invalid value was encountered";return i},i},e.clear=function(){this.a.clear()},e.key=function(e){return this.a.key(e)},O(Ho,$o),O(Wo,$o),O(Go,jo),Go.prototype.set=function(e,t){this.g.set(this.a+e,t)},Go.prototype.get=function(e){return this.g.get(this.a+e)},Go.prototype.ra=function(e){this.g.ra(this.a+e)},Go.prototype.ha=function(e){var t=this.g.ha(!0),n=this,i=new de;return i.next=function(){for(var i=t.next();i.substr(0,n.a.length)!=n.a;)i=t.next();return e?i.substr(n.a.length):n.g.get(i)},i},Vo(new Ho);var zo=new Wo,Ko=new Uo(Vo(zo)?new Go(zo,"firebaseui"):null),qo={name:"pendingEmailCredential",storage:Ko},Yo={name:"redirectStatus",storage:Ko},Zo={name:"redirectUrl",storage:Ko},Xo={name:"emailForSignIn",storage:new Uo(new ro(3600,"/"))},Jo={name:"pendingEncryptedCredential",storage:new Uo(new ro(3600,"/"))};function Qo(e,t){return e.storage.get(t?e.name+":"+t:e.name)}function es(e,t){e.storage.a.ra(t?e.name+":"+t:e.name)}function ts(e,t,n){e.storage.set(n?e.name+":"+n:e.name,t)}function ns(e){return Qo(Zo,e)||null}function is(e){return ao(e=Qo(qo,e)||null)}function rs(e){es(qo,e)}function os(e,t){ts(qo,so(e),t)}function ss(e){return(e=Qo(Yo,e)||null)&&void 0!==e.tenantId?new uo(e.tenantId):null}function as(){this.W={}}function us(e,t,n){if(t.toLowerCase()in e.W)throw Error("Configuration "+t+" has already been defined.");e.W[t.toLowerCase()]=n}function cs(e,t,n){if(!(t.toLowerCase()in e.W))throw Error("Configuration "+t+" is not defined.");e.W[t.toLowerCase()]=n}function ls(e,t){if(!(e=e.get(t)))throw Error("Configuration "+t+" is required.");return e}function ds(){this.g=void 0,this.a={}}function hs(e,t,n,i){for(var r=0;r<t.length;r++){var o=t.charAt(r);e.a[o]||(e.a[o]=new ds),e=e.a[o]}if(i&&void 0!==e.g)throw Error('The collection already contains the key "'+t+'"');e.g=n}function fs(e,t){for(var n in void 0!==e.g&&t.push(e.g),e.a)fs(e.a[n],t)}function ps(e,t,n){for(var i in void 0!==e.g&&n.push(t),e.a)ps(e.a[i],t+i,n)}function ms(e){for(this.a=e,this.g=new ds,e=0;e<this.a.length;e++){var t=this.g.get("+"+this.a[e].b);t?t.push(this.a[e]):this.g.add("+"+this.a[e].b,[this.a[e]])}}function gs(e,t){var n={},i=0;for(void 0!==(e=e.g).g&&(n[i]=e.g);i<t.length;i++){var r=t.charAt(i);if(!(r in e.a))break;void 0!==(e=e.a[r]).g&&(n[i]=e.g)}for(var o in n)if(n.hasOwnProperty(o))return n[o];return[]}function vs(e){for(var t=0;t<xs.length;t++)if(xs[t].c===e)return xs[t];return null}function ys(e){e=e.toUpperCase();for(var t=[],n=0;n<xs.length;n++)xs[n].f===e&&t.push(xs[n]);return t}function bs(e){if(0<e.length&&"+"==e.charAt(0)){e=e.substring(1);for(var t=[],n=0;n<xs.length;n++)xs[n].b==e&&t.push(xs[n]);e=t}else e=ys(e);return e}function ws(e){e.sort((function(e,t){return e.name.localeCompare(t.name,"en")}))}as.prototype.get=function(e){if(!(e.toLowerCase()in this.W))throw Error("Configuration "+e+" is not defined.");return this.W[e.toLowerCase()]},(e=ds.prototype).set=function(e,t){hs(this,e,t,!1)},e.add=function(e,t){hs(this,e,t,!0)},e.get=function(e){e:{for(var t=this,n=0;n<e.length;n++)if(!(t=t.a[e.charAt(n)])){e=void 0;break e}e=t}return e?e.g:void 0},e.la=function(){var e=[];return fs(this,e),e},e.ja=function(){var e=[];return ps(this,"",e),e},e.clear=function(){this.a={},this.g=void 0};var xs=[{name:"Afghanistan",c:"93-AF-0",b:"93",f:"AF"},{name:"Åland Islands",c:"358-AX-0",b:"358",f:"AX"},{name:"Albania",c:"355-AL-0",b:"355",f:"AL"},{name:"Algeria",c:"213-DZ-0",b:"213",f:"DZ"},{name:"American Samoa",c:"1-AS-0",b:"1",f:"AS"},{name:"Andorra",c:"376-AD-0",b:"376",f:"AD"},{name:"Angola",c:"244-AO-0",b:"244",f:"AO"},{name:"Anguilla",c:"1-AI-0",b:"1",f:"AI"},{name:"Antigua and Barbuda",c:"1-AG-0",b:"1",f:"AG"},{name:"Argentina",c:"54-AR-0",b:"54",f:"AR"},{name:"Armenia",c:"374-AM-0",b:"374",f:"AM"},{name:"Aruba",c:"297-AW-0",b:"297",f:"AW"},{name:"Ascension Island",c:"247-AC-0",b:"247",f:"AC"},{name:"Australia",c:"61-AU-0",b:"61",f:"AU"},{name:"Austria",c:"43-AT-0",b:"43",f:"AT"},{name:"Azerbaijan",c:"994-AZ-0",b:"994",f:"AZ"},{name:"Bahamas",c:"1-BS-0",b:"1",f:"BS"},{name:"Bahrain",c:"973-BH-0",b:"973",f:"BH"},{name:"Bangladesh",c:"880-BD-0",b:"880",f:"BD"},{name:"Barbados",c:"1-BB-0",b:"1",f:"BB"},{name:"Belarus",c:"375-BY-0",b:"375",f:"BY"},{name:"Belgium",c:"32-BE-0",b:"32",f:"BE"},{name:"Belize",c:"501-BZ-0",b:"501",f:"BZ"},{name:"Benin",c:"229-BJ-0",b:"229",f:"BJ"},{name:"Bermuda",c:"1-BM-0",b:"1",f:"BM"},{name:"Bhutan",c:"975-BT-0",b:"975",f:"BT"},{name:"Bolivia",c:"591-BO-0",b:"591",f:"BO"},{name:"Bosnia and Herzegovina",c:"387-BA-0",b:"387",f:"BA"},{name:"Botswana",c:"267-BW-0",b:"267",f:"BW"},{name:"Brazil",c:"55-BR-0",b:"55",f:"BR"},{name:"British Indian Ocean Territory",c:"246-IO-0",b:"246",f:"IO"},{name:"British Virgin Islands",c:"1-VG-0",b:"1",f:"VG"},{name:"Brunei",c:"673-BN-0",b:"673",f:"BN"},{name:"Bulgaria",c:"359-BG-0",b:"359",f:"BG"},{name:"Burkina Faso",c:"226-BF-0",b:"226",f:"BF"},{name:"Burundi",c:"257-BI-0",b:"257",f:"BI"},{name:"Cambodia",c:"855-KH-0",b:"855",f:"KH"},{name:"Cameroon",c:"237-CM-0",b:"237",f:"CM"},{name:"Canada",c:"1-CA-0",b:"1",f:"CA"},{name:"Cape Verde",c:"238-CV-0",b:"238",f:"CV"},{name:"Caribbean Netherlands",c:"599-BQ-0",b:"599",f:"BQ"},{name:"Cayman Islands",c:"1-KY-0",b:"1",f:"KY"},{name:"Central African Republic",c:"236-CF-0",b:"236",f:"CF"},{name:"Chad",c:"235-TD-0",b:"235",f:"TD"},{name:"Chile",c:"56-CL-0",b:"56",f:"CL"},{name:"China",c:"86-CN-0",b:"86",f:"CN"},{name:"Christmas Island",c:"61-CX-0",b:"61",f:"CX"},{name:"Cocos [Keeling] Islands",c:"61-CC-0",b:"61",f:"CC"},{name:"Colombia",c:"57-CO-0",b:"57",f:"CO"},{name:"Comoros",c:"269-KM-0",b:"269",f:"KM"},{name:"Democratic Republic Congo",c:"243-CD-0",b:"243",f:"CD"},{name:"Republic of Congo",c:"242-CG-0",b:"242",f:"CG"},{name:"Cook Islands",c:"682-CK-0",b:"682",f:"CK"},{name:"Costa Rica",c:"506-CR-0",b:"506",f:"CR"},{name:"Côte d'Ivoire",c:"225-CI-0",b:"225",f:"CI"},{name:"Croatia",c:"385-HR-0",b:"385",f:"HR"},{name:"Cuba",c:"53-CU-0",b:"53",f:"CU"},{name:"Curaçao",c:"599-CW-0",b:"599",f:"CW"},{name:"Cyprus",c:"357-CY-0",b:"357",f:"CY"},{name:"Czech Republic",c:"420-CZ-0",b:"420",f:"CZ"},{name:"Denmark",c:"45-DK-0",b:"45",f:"DK"},{name:"Djibouti",c:"253-DJ-0",b:"253",f:"DJ"},{name:"Dominica",c:"1-DM-0",b:"1",f:"DM"},{name:"Dominican Republic",c:"1-DO-0",b:"1",f:"DO"},{name:"East Timor",c:"670-TL-0",b:"670",f:"TL"},{name:"Ecuador",c:"593-EC-0",b:"593",f:"EC"},{name:"Egypt",c:"20-EG-0",b:"20",f:"EG"},{name:"El Salvador",c:"503-SV-0",b:"503",f:"SV"},{name:"Equatorial Guinea",c:"240-GQ-0",b:"240",f:"GQ"},{name:"Eritrea",c:"291-ER-0",b:"291",f:"ER"},{name:"Estonia",c:"372-EE-0",b:"372",f:"EE"},{name:"Ethiopia",c:"251-ET-0",b:"251",f:"ET"},{name:"Falkland Islands [Islas Malvinas]",c:"500-FK-0",b:"500",f:"FK"},{name:"Faroe Islands",c:"298-FO-0",b:"298",f:"FO"},{name:"Fiji",c:"679-FJ-0",b:"679",f:"FJ"},{name:"Finland",c:"358-FI-0",b:"358",f:"FI"},{name:"France",c:"33-FR-0",b:"33",f:"FR"},{name:"French Guiana",c:"594-GF-0",b:"594",f:"GF"},{name:"French Polynesia",c:"689-PF-0",b:"689",f:"PF"},{name:"Gabon",c:"241-GA-0",b:"241",f:"GA"},{name:"Gambia",c:"220-GM-0",b:"220",f:"GM"},{name:"Georgia",c:"995-GE-0",b:"995",f:"GE"},{name:"Germany",c:"49-DE-0",b:"49",f:"DE"},{name:"Ghana",c:"233-GH-0",b:"233",f:"GH"},{name:"Gibraltar",c:"350-GI-0",b:"350",f:"GI"},{name:"Greece",c:"30-GR-0",b:"30",f:"GR"},{name:"Greenland",c:"299-GL-0",b:"299",f:"GL"},{name:"Grenada",c:"1-GD-0",b:"1",f:"GD"},{name:"Guadeloupe",c:"590-GP-0",b:"590",f:"GP"},{name:"Guam",c:"1-GU-0",b:"1",f:"GU"},{name:"Guatemala",c:"502-GT-0",b:"502",f:"GT"},{name:"Guernsey",c:"44-GG-0",b:"44",f:"GG"},{name:"Guinea Conakry",c:"224-GN-0",b:"224",f:"GN"},{name:"Guinea-Bissau",c:"245-GW-0",b:"245",f:"GW"},{name:"Guyana",c:"592-GY-0",b:"592",f:"GY"},{name:"Haiti",c:"509-HT-0",b:"509",f:"HT"},{name:"Heard Island and McDonald Islands",c:"672-HM-0",b:"672",f:"HM"},{name:"Honduras",c:"504-HN-0",b:"504",f:"HN"},{name:"Hong Kong",c:"852-HK-0",b:"852",f:"HK"},{name:"Hungary",c:"36-HU-0",b:"36",f:"HU"},{name:"Iceland",c:"354-IS-0",b:"354",f:"IS"},{name:"India",c:"91-IN-0",b:"91",f:"IN"},{name:"Indonesia",c:"62-ID-0",b:"62",f:"ID"},{name:"Iran",c:"98-IR-0",b:"98",f:"IR"},{name:"Iraq",c:"964-IQ-0",b:"964",f:"IQ"},{name:"Ireland",c:"353-IE-0",b:"353",f:"IE"},{name:"Isle of Man",c:"44-IM-0",b:"44",f:"IM"},{name:"Israel",c:"972-IL-0",b:"972",f:"IL"},{name:"Italy",c:"39-IT-0",b:"39",f:"IT"},{name:"Jamaica",c:"1-JM-0",b:"1",f:"JM"},{name:"Japan",c:"81-JP-0",b:"81",f:"JP"},{name:"Jersey",c:"44-JE-0",b:"44",f:"JE"},{name:"Jordan",c:"962-JO-0",b:"962",f:"JO"},{name:"Kazakhstan",c:"7-KZ-0",b:"7",f:"KZ"},{name:"Kenya",c:"254-KE-0",b:"254",f:"KE"},{name:"Kiribati",c:"686-KI-0",b:"686",f:"KI"},{name:"Kosovo",c:"377-XK-0",b:"377",f:"XK"},{name:"Kosovo",c:"381-XK-0",b:"381",f:"XK"},{name:"Kosovo",c:"386-XK-0",b:"386",f:"XK"},{name:"Kuwait",c:"965-KW-0",b:"965",f:"KW"},{name:"Kyrgyzstan",c:"996-KG-0",b:"996",f:"KG"},{name:"Laos",c:"856-LA-0",b:"856",f:"LA"},{name:"Latvia",c:"371-LV-0",b:"371",f:"LV"},{name:"Lebanon",c:"961-LB-0",b:"961",f:"LB"},{name:"Lesotho",c:"266-LS-0",b:"266",f:"LS"},{name:"Liberia",c:"231-LR-0",b:"231",f:"LR"},{name:"Libya",c:"218-LY-0",b:"218",f:"LY"},{name:"Liechtenstein",c:"423-LI-0",b:"423",f:"LI"},{name:"Lithuania",c:"370-LT-0",b:"370",f:"LT"},{name:"Luxembourg",c:"352-LU-0",b:"352",f:"LU"},{name:"Macau",c:"853-MO-0",b:"853",f:"MO"},{name:"Macedonia",c:"389-MK-0",b:"389",f:"MK"},{name:"Madagascar",c:"261-MG-0",b:"261",f:"MG"},{name:"Malawi",c:"265-MW-0",b:"265",f:"MW"},{name:"Malaysia",c:"60-MY-0",b:"60",f:"MY"},{name:"Maldives",c:"960-MV-0",b:"960",f:"MV"},{name:"Mali",c:"223-ML-0",b:"223",f:"ML"},{name:"Malta",c:"356-MT-0",b:"356",f:"MT"},{name:"Marshall Islands",c:"692-MH-0",b:"692",f:"MH"},{name:"Martinique",c:"596-MQ-0",b:"596",f:"MQ"},{name:"Mauritania",c:"222-MR-0",b:"222",f:"MR"},{name:"Mauritius",c:"230-MU-0",b:"230",f:"MU"},{name:"Mayotte",c:"262-YT-0",b:"262",f:"YT"},{name:"Mexico",c:"52-MX-0",b:"52",f:"MX"},{name:"Micronesia",c:"691-FM-0",b:"691",f:"FM"},{name:"Moldova",c:"373-MD-0",b:"373",f:"MD"},{name:"Monaco",c:"377-MC-0",b:"377",f:"MC"},{name:"Mongolia",c:"976-MN-0",b:"976",f:"MN"},{name:"Montenegro",c:"382-ME-0",b:"382",f:"ME"},{name:"Montserrat",c:"1-MS-0",b:"1",f:"MS"},{name:"Morocco",c:"212-MA-0",b:"212",f:"MA"},{name:"Mozambique",c:"258-MZ-0",b:"258",f:"MZ"},{name:"Myanmar [Burma]",c:"95-MM-0",b:"95",f:"MM"},{name:"Namibia",c:"264-NA-0",b:"264",f:"NA"},{name:"Nauru",c:"674-NR-0",b:"674",f:"NR"},{name:"Nepal",c:"977-NP-0",b:"977",f:"NP"},{name:"Netherlands",c:"31-NL-0",b:"31",f:"NL"},{name:"New Caledonia",c:"687-NC-0",b:"687",f:"NC"},{name:"New Zealand",c:"64-NZ-0",b:"64",f:"NZ"},{name:"Nicaragua",c:"505-NI-0",b:"505",f:"NI"},{name:"Niger",c:"227-NE-0",b:"227",f:"NE"},{name:"Nigeria",c:"234-NG-0",b:"234",f:"NG"},{name:"Niue",c:"683-NU-0",b:"683",f:"NU"},{name:"Norfolk Island",c:"672-NF-0",b:"672",f:"NF"},{name:"North Korea",c:"850-KP-0",b:"850",f:"KP"},{name:"Northern Mariana Islands",c:"1-MP-0",b:"1",f:"MP"},{name:"Norway",c:"47-NO-0",b:"47",f:"NO"},{name:"Oman",c:"968-OM-0",b:"968",f:"OM"},{name:"Pakistan",c:"92-PK-0",b:"92",f:"PK"},{name:"Palau",c:"680-PW-0",b:"680",f:"PW"},{name:"Palestinian Territories",c:"970-PS-0",b:"970",f:"PS"},{name:"Panama",c:"507-PA-0",b:"507",f:"PA"},{name:"Papua New Guinea",c:"675-PG-0",b:"675",f:"PG"},{name:"Paraguay",c:"595-PY-0",b:"595",f:"PY"},{name:"Peru",c:"51-PE-0",b:"51",f:"PE"},{name:"Philippines",c:"63-PH-0",b:"63",f:"PH"},{name:"Poland",c:"48-PL-0",b:"48",f:"PL"},{name:"Portugal",c:"351-PT-0",b:"351",f:"PT"},{name:"Puerto Rico",c:"1-PR-0",b:"1",f:"PR"},{name:"Qatar",c:"974-QA-0",b:"974",f:"QA"},{name:"Réunion",c:"262-RE-0",b:"262",f:"RE"},{name:"Romania",c:"40-RO-0",b:"40",f:"RO"},{name:"Russia",c:"7-RU-0",b:"7",f:"RU"},{name:"Rwanda",c:"250-RW-0",b:"250",f:"RW"},{name:"Saint Barthélemy",c:"590-BL-0",b:"590",f:"BL"},{name:"Saint Helena",c:"290-SH-0",b:"290",f:"SH"},{name:"St. Kitts",c:"1-KN-0",b:"1",f:"KN"},{name:"St. Lucia",c:"1-LC-0",b:"1",f:"LC"},{name:"Saint Martin",c:"590-MF-0",b:"590",f:"MF"},{name:"Saint Pierre and Miquelon",c:"508-PM-0",b:"508",f:"PM"},{name:"St. Vincent",c:"1-VC-0",b:"1",f:"VC"},{name:"Samoa",c:"685-WS-0",b:"685",f:"WS"},{name:"San Marino",c:"378-SM-0",b:"378",f:"SM"},{name:"São Tomé and Príncipe",c:"239-ST-0",b:"239",f:"ST"},{name:"Saudi Arabia",c:"966-SA-0",b:"966",f:"SA"},{name:"Senegal",c:"221-SN-0",b:"221",f:"SN"},{name:"Serbia",c:"381-RS-0",b:"381",f:"RS"},{name:"Seychelles",c:"248-SC-0",b:"248",f:"SC"},{name:"Sierra Leone",c:"232-SL-0",b:"232",f:"SL"},{name:"Singapore",c:"65-SG-0",b:"65",f:"SG"},{name:"Sint Maarten",c:"1-SX-0",b:"1",f:"SX"},{name:"Slovakia",c:"421-SK-0",b:"421",f:"SK"},{name:"Slovenia",c:"386-SI-0",b:"386",f:"SI"},{name:"Solomon Islands",c:"677-SB-0",b:"677",f:"SB"},{name:"Somalia",c:"252-SO-0",b:"252",f:"SO"},{name:"South Africa",c:"27-ZA-0",b:"27",f:"ZA"},{name:"South Georgia and the South Sandwich Islands",c:"500-GS-0",b:"500",f:"GS"},{name:"South Korea",c:"82-KR-0",b:"82",f:"KR"},{name:"South Sudan",c:"211-SS-0",b:"211",f:"SS"},{name:"Spain",c:"34-ES-0",b:"34",f:"ES"},{name:"Sri Lanka",c:"94-LK-0",b:"94",f:"LK"},{name:"Sudan",c:"249-SD-0",b:"249",f:"SD"},{name:"Suriname",c:"597-SR-0",b:"597",f:"SR"},{name:"Svalbard and Jan Mayen",c:"47-SJ-0",b:"47",f:"SJ"},{name:"Swaziland",c:"268-SZ-0",b:"268",f:"SZ"},{name:"Sweden",c:"46-SE-0",b:"46",f:"SE"},{name:"Switzerland",c:"41-CH-0",b:"41",f:"CH"},{name:"Syria",c:"963-SY-0",b:"963",f:"SY"},{name:"Taiwan",c:"886-TW-0",b:"886",f:"TW"},{name:"Tajikistan",c:"992-TJ-0",b:"992",f:"TJ"},{name:"Tanzania",c:"255-TZ-0",b:"255",f:"TZ"},{name:"Thailand",c:"66-TH-0",b:"66",f:"TH"},{name:"Togo",c:"228-TG-0",b:"228",f:"TG"},{name:"Tokelau",c:"690-TK-0",b:"690",f:"TK"},{name:"Tonga",c:"676-TO-0",b:"676",f:"TO"},{name:"Trinidad/Tobago",c:"1-TT-0",b:"1",f:"TT"},{name:"Tunisia",c:"216-TN-0",b:"216",f:"TN"},{name:"Turkey",c:"90-TR-0",b:"90",f:"TR"},{name:"Turkmenistan",c:"993-TM-0",b:"993",f:"TM"},{name:"Turks and Caicos Islands",c:"1-TC-0",b:"1",f:"TC"},{name:"Tuvalu",c:"688-TV-0",b:"688",f:"TV"},{name:"U.S. Virgin Islands",c:"1-VI-0",b:"1",f:"VI"},{name:"Uganda",c:"256-UG-0",b:"256",f:"UG"},{name:"Ukraine",c:"380-UA-0",b:"380",f:"UA"},{name:"United Arab Emirates",c:"971-AE-0",b:"971",f:"AE"},{name:"United Kingdom",c:"44-GB-0",b:"44",f:"GB"},{name:"United States",c:"1-US-0",b:"1",f:"US"},{name:"Uruguay",c:"598-UY-0",b:"598",f:"UY"},{name:"Uzbekistan",c:"998-UZ-0",b:"998",f:"UZ"},{name:"Vanuatu",c:"678-VU-0",b:"678",f:"VU"},{name:"Vatican City",c:"379-VA-0",b:"379",f:"VA"},{name:"Venezuela",c:"58-VE-0",b:"58",f:"VE"},{name:"Vietnam",c:"84-VN-0",b:"84",f:"VN"},{name:"Wallis and Futuna",c:"681-WF-0",b:"681",f:"WF"},{name:"Western Sahara",c:"212-EH-0",b:"212",f:"EH"},{name:"Yemen",c:"967-YE-0",b:"967",f:"YE"},{name:"Zambia",c:"260-ZM-0",b:"260",f:"ZM"},{name:"Zimbabwe",c:"263-ZW-0",b:"263",f:"ZW"}];ws(xs);var _s=new ms(xs);function Es(e,t){this.a=e,this.Aa=t}function Is(e){e=Z(e);var t=gs(_s,e);return 0<t.length?new Es("1"==t[0].b?"1-US-0":t[0].c,Z(e.substr(t[0].b.length+1))):null}function Ss(e){var t=vs(e.a);if(!t)throw Error("Country ID "+e.a+" not found.");return"+"+t.b+e.Aa}function As(e,t){for(var n=0;n<e.length;n++)if(!H(ks,e[n])&&(null!==Ts&&e[n]in Ts||H(t,e[n])))return e[n];return null}var ks=["emailLink","password","phone"],Ts={"facebook.com":"FacebookAuthProvider","github.com":"GithubAuthProvider","google.com":"GoogleAuthProvider",password:"EmailAuthProvider","twitter.com":"TwitterAuthProvider",phone:"PhoneAuthProvider"};function Cs(){this.a=new as,us(this.a,"autoUpgradeAnonymousUsers"),us(this.a,"callbacks"),us(this.a,"credentialHelper",ra),us(this.a,"immediateFederatedRedirect",!1),us(this.a,"popupMode",!1),us(this.a,"privacyPolicyUrl"),us(this.a,"queryParameterForSignInSuccessUrl","signInSuccessUrl"),us(this.a,"queryParameterForWidgetMode","mode"),us(this.a,"signInFlow"),us(this.a,"signInOptions"),us(this.a,"signInSuccessUrl"),us(this.a,"siteName"),us(this.a,"tosUrl"),us(this.a,"widgetUrl"),us(this.a,"adminRestrictedOperation")}function Ns(e){var t=!!e.a.get("autoUpgradeAnonymousUsers");return t&&!Xs(e)&&Yr('Missing "signInFailure" callback: "signInFailure" callback needs to be provided when "autoUpgradeAnonymousUsers" is set to true.',void 0),t}function Rs(e){e=e.a.get("signInOptions")||[];for(var t=[],n=0;n<e.length;n++){var i=e[n];(i=E(i)?i:{provider:i}).provider&&t.push(i)}return t}function Ls(e,t){e=Rs(e);for(var n=0;n<e.length;n++)if(e[n].provider===t)return e[n];return null}function Ms(e){return Rs(e).map((function(e){return e.provider}))}function Os(e,t){e=Ds(e);for(var n=0;n<e.length;n++)if(e[n].providerId===t)return e[n];return null}function Ds(e){return Rs(e).map((function(e){if(Ts[e.provider]||H(ca,e.provider)){for(var t in e={providerId:e.provider,S:e.providerName||null,V:e.fullLabel||null,ta:e.buttonColor||null,za:e.iconUrl?_t(It(e.iconUrl)).toString():null})null===e[t]&&delete e[t];return e}return{providerId:e.provider,S:e.providerName||null,V:e.fullLabel||null,ta:e.buttonColor||null,za:e.iconUrl?_t(It(e.iconUrl)).toString():null,Ob:e.loginHintKey||null}}))}function Ps(e){var t,n=Ls(e,s.default.auth.GoogleAuthProvider.PROVIDER_ID);if(t=n&&n.clientId){e:{if("http:"===(window.location&&window.location.protocol)||"https:"===(window.location&&window.location.protocol))for(i in e=e.a.get("credentialHelper"),oa)if(oa[i]===e){var i=oa[i];break e}i=ra}t=i===ia}return t&&n.clientId||null}function Fs(e){return!!((e=Ls(e,s.default.auth.EmailAuthProvider.PROVIDER_ID))&&e.disableSignUp&&e.disableSignUp.status)}function Bs(e){return!(!(e=e.a.get("adminRestrictedOperation")||null)||!e.status)}function Us(e,t){return e=(e=Ls(e,t))&&e.scopes,Array.isArray(e)?e:[]}function js(e,t){return E(e=(e=Ls(e,t))&&e.customParameters)?(e=ae(e),t===s.default.auth.GoogleAuthProvider.PROVIDER_ID&&delete e.login_hint,t===s.default.auth.GithubAuthProvider.PROVIDER_ID&&delete e.login,e):null}function $s(e){if(!(e=Ls(e,s.default.auth.PhoneAuthProvider.PROVIDER_ID)))return null;var t=e.whitelistedCountries,n=e.blacklistedCountries;if(void 0!==t&&(!Array.isArray(t)||0==t.length))throw Error("WhitelistedCountries must be a non-empty array.");if(void 0!==n&&!Array.isArray(n))throw Error("BlacklistedCountries must be an array.");if(t&&n)throw Error("Both whitelistedCountries and blacklistedCountries are provided.");if(!t&&!n)return xs;if(e=[],t){n={};for(var i=0;i<t.length;i++)for(var r=bs(t[i]),o=0;o<r.length;o++)n[r[o].c]=r[o];for(var a in n)n.hasOwnProperty(a)&&e.push(n[a])}else{for(a={},t=0;t<n.length;t++)for(r=bs(n[t]),i=0;i<r.length;i++)a[r[i].c]=r[i];for(r=0;r<xs.length;r++)null!==a&&xs[r].c in a||e.push(xs[r])}return e}function Vs(e){return ls(e.a,"queryParameterForWidgetMode")}function Hs(e){var t=e.a.get("tosUrl")||null;if(e=e.a.get("privacyPolicyUrl")||null,t&&!e&&Qr("Privacy Policy URL is missing, the link will not be displayed."),t&&e){if("function"==typeof t)return t;if("string"==typeof t)return function(){sr(t)}}return null}function Ws(e){var t=e.a.get("tosUrl")||null,n=e.a.get("privacyPolicyUrl")||null;if(n&&!t&&Qr("Term of Service URL is missing, the link will not be displayed."),t&&n){if("function"==typeof n)return n;if("string"==typeof n)return function(){sr(n)}}return null}function Gs(e){return!(e=Ls(e,s.default.auth.EmailAuthProvider.PROVIDER_ID))||void 0===e.requireDisplayName||!!e.requireDisplayName}function zs(e){return!(!(e=Ls(e,s.default.auth.EmailAuthProvider.PROVIDER_ID))||e.signInMethod!==s.default.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD)}function Ks(e){var t=!!e.a.get("immediateFederatedRedirect"),n=Ms(e);return e=qs(e),t&&1==n.length&&!H(ks,n[0])&&e==sa}function qs(e){for(var t in e=e.a.get("signInFlow"),aa)if(aa[t]==e)return aa[t];return sa}function Ys(e){return Js(e).signInSuccess||null}function Zs(e){return Js(e).signInSuccessWithAuthResult||null}function Xs(e){return Js(e).signInFailure||null}function Js(e){return e.a.get("callbacks")||{}}var Qs,ea,ta,na,ia="googleyolo",ra="none",oa={nc:ia,NONE:ra},sa="redirect",aa={qc:"popup",rc:sa},ua={mc:"callback",RECOVER_EMAIL:"recoverEmail",sc:"resetPassword",REVERT_SECOND_FACTOR_ADDITION:"revertSecondFactorAddition",tc:"select",uc:"signIn",VERIFY_AND_CHANGE_EMAIL:"verifyAndChangeEmail",VERIFY_EMAIL:"verifyEmail"},ca=["anonymous"],la=["sitekey","tabindex","callback","expired-callback"],da={};function ha(e,t,n,i){da[e].apply(null,Array.prototype.slice.call(arguments,1))}function fa(e){return e.classList?e.classList:p(e=e.className)&&e.match(/\S+/g)||[]}function pa(e,t){return e.classList?e.classList.contains(t):H(fa(e),t)}function ma(e,t){e.classList?e.classList.add(t):pa(e,t)||(e.className+=0<e.className.length?" "+t:t)}function ga(e,t){e.classList?e.classList.remove(t):pa(e,t)&&(e.className=j(fa(e),(function(e){return e!=t})).join(" "))}function va(e){var t=e.type;switch(p(t)&&t.toLowerCase()){case"checkbox":case"radio":return e.checked?e.value:null;case"select-one":return 0<=(t=e.selectedIndex)?e.options[t].value:null;case"select-multiple":t=[];for(var n,i=0;n=e.options[i];i++)n.selected&&t.push(n.value);return t.length?t:null;default:return null!=e.value?e.value:null}}function ya(e,t){var n=e.type;switch(p(n)&&n.toLowerCase()){case"checkbox":case"radio":e.checked=t;break;case"select-one":if(e.selectedIndex=-1,p(t))for(var i=0;n=e.options[i];i++)if(n.value==t){n.selected=!0;break}break;case"select-multiple":for(p(t)&&(t=[t]),i=0;n=e.options[i];i++)if(n.selected=!1,t)for(var r,o=0;r=t[o];o++)n.value==r&&(n.selected=!0);break;default:e.value=null!=t?t:""}}function ba(e,t,n,i,r,o){if(rt&&!ft("525"))return!0;if(st&&r)return wa(e);if(r&&!i)return!1;if(!it&&("number"==typeof t&&(t=xa(t)),(!n||st)&&(17==t||18==t||st&&91==t)||st&&16==t&&(i||o)))return!1;if((rt||tt)&&i&&n)switch(e){case 220:case 219:case 221:case 192:case 186:case 189:case 187:case 188:case 190:case 191:case 192:case 222:return!1}if(et&&i&&t==e)return!1;switch(e){case 13:return!it||!o&&!r&&!(n&&i);case 27:return!(rt||tt||it)}return(!it||!(i||r||o))&&wa(e)}function wa(e){if(48<=e&&57>=e||96<=e&&106>=e||65<=e&&90>=e||(rt||tt)&&0==e)return!0;switch(e){case 32:case 43:case 63:case 64:case 107:case 109:case 110:case 111:case 186:case 59:case 189:case 187:case 61:case 188:case 190:case 191:case 192:case 222:case 219:case 220:case 221:case 163:return!0;case 173:return it;default:return!1}}function xa(e){if(it)e=function(e){switch(e){case 61:return 187;case 59:return 186;case 173:return 189;case 224:return 91;case 0:return 224;default:return e}}(e);else if(st&&rt&&93===e)e=91;return e}function _a(e){gi.call(this),this.a=e,ri(e,"keydown",this.g,!1,this),ri(e,"click",this.h,!1,this)}function Ea(e,t){var n=new Sa(t);if(vi(e,n)){n=new Ia(t);try{vi(e,n)}finally{t.stopPropagation()}}}function Ia(e){Kn.call(this,e.a),this.type="action"}function Sa(e){Kn.call(this,e.a),this.type="beforeaction"}function Aa(e){gi.call(this),this.a=e,e=et?"focusout":"blur",this.g=ri(this.a,et?"focusin":"focus",this,!et),this.h=ri(this.a,e,this,!et)}function ka(e,t){gi.call(this),this.g=e||1,this.a=t||h,this.h=T(this.gc,this),this.j=L()}function Ta(e){e.Ka=!1,e.aa&&(e.a.clearTimeout(e.aa),e.aa=null)}function Ca(e){Fn.call(this),this.g=e,this.a={}}O(_a,gi),_a.prototype.g=function(e){(13==e.keyCode||rt&&3==e.keyCode)&&Ea(this,e)},_a.prototype.h=function(e){Ea(this,e)},_a.prototype.o=function(){_a.K.o.call(this),ai(this.a,"keydown",this.g,!1,this),ai(this.a,"click",this.h,!1,this),delete this.a},O(Ia,Kn),O(Sa,Kn),O(Aa,gi),Aa.prototype.handleEvent=function(e){var t=new Kn(e.a);t.type="focusin"==e.type||"focus"==e.type?"focusin":"focusout",vi(this,t)},Aa.prototype.o=function(){Aa.K.o.call(this),ui(this.g),ui(this.h),delete this.a},O(ka,gi),(e=ka.prototype).Ka=!1,e.aa=null,e.gc=function(){if(this.Ka){var e=L()-this.j;0<e&&e<.8*this.g?this.aa=this.a.setTimeout(this.h,this.g-e):(this.aa&&(this.a.clearTimeout(this.aa),this.aa=null),vi(this,"tick"),this.Ka&&(Ta(this),this.start()))}},e.start=function(){this.Ka=!0,this.aa||(this.aa=this.a.setTimeout(this.h,this.g),this.j=L())},e.o=function(){ka.K.o.call(this),Ta(this),delete this.a},O(Ca,Fn);var Na=[];function Ra(e,t,n,i){w(n)||(n&&(Na[0]=n.toString()),n=Na);for(var r=0;r<n.length;r++){var o=ri(t,n[r],i||e.handleEvent,!1,e.g||e);if(!o)break;e.a[o.key]=o}}function La(e){se(e.a,(function(e,t){this.a.hasOwnProperty(t)&&ui(e)}),e),e.a={}}function Ma(e){gi.call(this),this.a=null,this.g=e,e=et||tt||rt&&!ft("531")&&"TEXTAREA"==e.tagName,this.h=new Ca(this),Ra(this.h,this.g,e?["keydown","paste","cut","drop","input"]:"input",this)}function Oa(e){null!=e.a&&(h.clearTimeout(e.a),e.a=null)}function Da(e){return(e=new Kn(e.a)).type="input",e}function Pa(e,t){gi.call(this),e&&(this.Oa&&$a(this),this.qa=e,this.Na=ri(this.qa,"keypress",this,t),this.Ya=ri(this.qa,"keydown",this.Jb,t,this),this.Oa=ri(this.qa,"keyup",this.Kb,t,this))}Ca.prototype.o=function(){Ca.K.o.call(this),La(this)},Ca.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},O(Ma,gi),Ma.prototype.handleEvent=function(e){if("input"==e.type)et&&ft(10)&&0==e.keyCode&&0==e.j||(Oa(this),vi(this,Da(e)));else if("keydown"!=e.type||function(e){if(e.altKey&&!e.ctrlKey||e.metaKey||112<=e.keyCode&&123>=e.keyCode)return!1;if(wa(e.keyCode))return!0;switch(e.keyCode){case 18:case 20:case 93:case 17:case 40:case 35:case 27:case 36:case 45:case 37:case 224:case 91:case 144:case 12:case 34:case 33:case 19:case 255:case 44:case 39:case 145:case 16:case 38:case 252:case 224:case 92:return!1;case 0:return!it;default:return 166>e.keyCode||183<e.keyCode}}(e)){var t="keydown"==e.type?this.g.value:null;et&&229==e.keyCode&&(t=null);var n=Da(e);Oa(this),this.a=function(e,t){if(_(e))t&&(e=T(e,t));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=T(e.handleEvent,e)}return 2147483647<Number(0)?-1:h.setTimeout(e,0)}((function(){this.a=null,this.g.value!=t&&vi(this,n)}),this)}},Ma.prototype.o=function(){Ma.K.o.call(this),this.h.m(),Oa(this),delete this.g},O(Pa,gi),(e=Pa.prototype).qa=null,e.Na=null,e.Ya=null,e.Oa=null,e.R=-1,e.X=-1,e.Ua=!1;var Fa={3:13,12:144,63232:38,63233:40,63234:37,63235:39,63236:112,63237:113,63238:114,63239:115,63240:116,63241:117,63242:118,63243:119,63244:120,63245:121,63246:122,63247:123,63248:44,63272:46,63273:36,63275:35,63276:33,63277:34,63289:144,63302:45},Ba={Up:38,Down:40,Left:37,Right:39,Enter:13,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,"U+007F":46,Home:36,End:35,PageUp:33,PageDown:34,Insert:45},Ua=!rt||ft("525"),ja=st&&it;function $a(e){e.Na&&(ui(e.Na),ui(e.Ya),ui(e.Oa),e.Na=null,e.Ya=null,e.Oa=null),e.qa=null,e.R=-1,e.X=-1}function Va(e,t,n,i){Kn.call(this,i),this.type="key",this.keyCode=e,this.j=t,this.repeat=n}function Ha(e,t,n,i){this.top=e,this.right=t,this.bottom=n,this.left=i}function Wa(e,t){var n=qt(e);return n.defaultView&&n.defaultView.getComputedStyle&&(e=n.defaultView.getComputedStyle(e,null))&&(e[t]||e.getPropertyValue(t))||""}function Ga(e){try{var t=e.getBoundingClientRect()}catch(e){return{left:0,top:0,right:0,bottom:0}}return et&&e.ownerDocument.body&&(e=e.ownerDocument,t.left-=e.documentElement.clientLeft+e.body.clientLeft,t.top-=e.documentElement.clientTop+e.body.clientTop),t}function za(e){var t=qt(e),n=new Ut(0,0),i=t?qt(t):document;return e==(i=!et||9<=Number(dt)||"CSS1Compat"==$t(i).a.compatMode?i.documentElement:i.body)||(e=Ga(e),t=zt(i=$t(t).a),i=i.parentWindow||i.defaultView,t=et&&ft("10")&&i.pageYOffset!=t.scrollTop?new Ut(t.scrollLeft,t.scrollTop):new Ut(i.pageXOffset||t.scrollLeft,i.pageYOffset||t.scrollTop),n.a=e.left+t.a,n.g=e.top+t.g),n}(e=Pa.prototype).Jb=function(e){(rt||tt)&&(17==this.R&&!e.ctrlKey||18==this.R&&!e.altKey||st&&91==this.R&&!e.metaKey)&&(this.X=this.R=-1),-1==this.R&&(e.ctrlKey&&17!=e.keyCode?this.R=17:e.altKey&&18!=e.keyCode?this.R=18:e.metaKey&&91!=e.keyCode&&(this.R=91)),Ua&&!ba(e.keyCode,this.R,e.shiftKey,e.ctrlKey,e.altKey,e.metaKey)?this.handleEvent(e):(this.X=xa(e.keyCode),ja&&(this.Ua=e.altKey))},e.Kb=function(e){this.X=this.R=-1,this.Ua=e.altKey},e.handleEvent=function(e){var t=e.a,n=t.altKey;if(et&&"keypress"==e.type)var i=this.X,r=13!=i&&27!=i?t.keyCode:0;else(rt||tt)&&"keypress"==e.type?(i=this.X,r=0<=t.charCode&&63232>t.charCode&&wa(i)?t.charCode:0):Qe&&!rt?r=wa(i=this.X)?t.keyCode:0:("keypress"==e.type?(ja&&(n=this.Ua),t.keyCode==t.charCode?32>t.keyCode?(i=t.keyCode,r=0):(i=this.X,r=t.charCode):(i=t.keyCode||this.X,r=t.charCode||0)):(i=t.keyCode||this.X,r=t.charCode||0),st&&63==r&&224==i&&(i=191));var o=i=xa(i);i?63232<=i&&i in Fa?o=Fa[i]:25==i&&e.shiftKey&&(o=9):t.keyIdentifier&&t.keyIdentifier in Ba&&(o=Ba[t.keyIdentifier]),it&&Ua&&"keypress"==e.type&&!ba(o,this.R,e.shiftKey,e.ctrlKey,n,e.metaKey)||(e=o==this.R,this.R=o,(t=new Va(o,r,e,t)).altKey=n,vi(this,t))},e.N=function(){return this.qa},e.o=function(){Pa.K.o.call(this),$a(this)},O(Va,Kn),Ha.prototype.toString=function(){return"("+this.top+"t, "+this.right+"r, "+this.bottom+"b, "+this.left+"l)"},Ha.prototype.ceil=function(){return this.top=Math.ceil(this.top),this.right=Math.ceil(this.right),this.bottom=Math.ceil(this.bottom),this.left=Math.ceil(this.left),this},Ha.prototype.floor=function(){return this.top=Math.floor(this.top),this.right=Math.floor(this.right),this.bottom=Math.floor(this.bottom),this.left=Math.floor(this.left),this},Ha.prototype.round=function(){return this.top=Math.round(this.top),this.right=Math.round(this.right),this.bottom=Math.round(this.bottom),this.left=Math.round(this.left),this};var Ka={thin:2,medium:4,thick:6};function qa(e,t){if("none"==(e.currentStyle?e.currentStyle[t+"Style"]:null))return 0;var n=e.currentStyle?e.currentStyle[t+"Width"]:null;if(n in Ka)e=Ka[n];else if(/^\d+px?$/.test(n))e=parseInt(n,10);else{t=e.style.left;var i=e.runtimeStyle.left;e.runtimeStyle.left=e.currentStyle.left,e.style.left=n,n=e.style.pixelLeft,e.style.left=t,e.runtimeStyle.left=i,e=+n}return e}function Ya(){}function Za(e){gi.call(this),this.s=e||$t(),this.cb=null,this.na=!1,this.g=null,this.L=void 0,this.oa=this.Ea=this.Y=null}function Xa(e,t){return e.g?Ht(t,e.g||e.s.a):null}function Ja(e){return e.L||(e.L=new Ca(e)),e.L}function Qa(e,t){e.Ea&&U(e.Ea,t,void 0)}function eu(e,t){var n=Zt(e,"firebaseui-textfield");t?(ga(e,"firebaseui-input-invalid"),ma(e,"firebaseui-input"),n&&ga(n,"firebaseui-textfield-invalid")):(ga(e,"firebaseui-input"),ma(e,"firebaseui-input-invalid"),n&&ma(n,"firebaseui-textfield-invalid"))}function tu(e,t,n){jn(e,C($n,t=new Ma(t))),Ra(Ja(e),t,"input",n)}function nu(e,t,n){jn(e,C($n,t=new Pa(t))),Ra(Ja(e),t,"key",(function(e){13==e.keyCode&&(e.stopPropagation(),e.preventDefault(),n(e))}))}function iu(e,t,n){jn(e,C($n,t=new _a(t))),Ra(Ja(e),t,"action",(function(e){e.stopPropagation(),e.preventDefault(),n(e)}))}function ru(e){ma(e,"firebaseui-hidden")}function ou(e,t){t&&Yt(e,t),ga(e,"firebaseui-hidden")}function su(e){return!pa(e,"firebaseui-hidden")&&"none"!=e.style.display}function au(e){var t=(e=e||{}).email,n=e.disabled,i='<div class="firebaseui-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><label class="mdl-textfield__label firebaseui-label" for="ui-sign-in-email-input">';return i=e.wc?i+"Enter new email address":i+"Email",i+='</label><input type="email" name="email" id="ui-sign-in-email-input" autocomplete="username" class="mdl-textfield__input firebaseui-input firebaseui-id-email" value="'+gn(null!=t?t:"")+'"'+(n?"disabled":"")+'></div><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-id-email-error"></p></div>',hn(i)}function uu(e){var t='<button type="submit" class="firebaseui-id-submit firebaseui-button mdl-button mdl-js-button mdl-button--raised mdl-button--colored">';return t=(e=(e=e||{}).label)?t+un(e):t+"Next",hn(t+"</button>")}function cu(){var e=""+uu({label:pn("Sign In")});return hn(e)}function lu(){var e=""+uu({label:pn("Save")});return hn(e)}function du(){var e=""+uu({label:pn("Continue")});return hn(e)}function hu(e){var t='<div class="firebaseui-new-password-component"><div class="firebaseui-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><label class="mdl-textfield__label firebaseui-label" for="ui-sign-in-new-password-input">';return t=(e=(e=e||{}).label)?t+un(e):t+"Choose password",hn(t+'</label><input type="password" name="newPassword" id="ui-sign-in-new-password-input" autocomplete="new-password" class="mdl-textfield__input firebaseui-input firebaseui-id-new-password"></div><a href="javascript:void(0)" class="firebaseui-input-floating-button firebaseui-id-password-toggle firebaseui-input-toggle-on firebaseui-input-toggle-blur"></a><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-id-new-password-error"></p></div></div>')}function fu(){var e='<div class="firebaseui-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><label class="mdl-textfield__label firebaseui-label" for="ui-sign-in-password-input">';return hn((e={}.current?e+"Current password":e+"Password")+'</label><input type="password" name="password" id="ui-sign-in-password-input" autocomplete="current-password" class="mdl-textfield__input firebaseui-input firebaseui-id-password"></div><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-id-password-error"></p></div>')}function pu(){return hn('<a class="firebaseui-link firebaseui-id-secondary-link" href="javascript:void(0)">Trouble signing in?</a>')}function mu(e){var t='<button class="firebaseui-id-secondary-link firebaseui-button mdl-button mdl-js-button mdl-button--primary">';return t=(e=(e=e||{}).label)?t+un(e):t+"Cancel",hn(t+"</button>")}function gu(e){var t="";return e.F&&e.D&&(t+='<ul class="firebaseui-tos-list firebaseui-tos"><li class="firebaseui-inline-list-item"><a href="javascript:void(0)" class="firebaseui-link firebaseui-tos-link" target="_blank">Terms of Service</a></li><li class="firebaseui-inline-list-item"><a href="javascript:void(0)" class="firebaseui-link firebaseui-pp-link" target="_blank">Privacy Policy</a></li></ul>'),hn(t)}function vu(e){var t="";return e.F&&e.D&&(t+='<p class="firebaseui-tos firebaseui-tospp-full-message">By continuing, you are indicating that you accept our <a href="javascript:void(0)" class="firebaseui-link firebaseui-tos-link" target="_blank">Terms of Service</a> and <a href="javascript:void(0)" class="firebaseui-link firebaseui-pp-link" target="_blank">Privacy Policy</a>.</p>'),hn(t)}function yu(e){return e='<div class="firebaseui-info-bar firebaseui-id-info-bar"><p class="firebaseui-info-bar-message">'+un(e.message)+'&nbsp;&nbsp;<a href="javascript:void(0)" class="firebaseui-link firebaseui-id-dismiss-info-bar">Dismiss</a></p></div>',hn(e)}function bu(e){var t=e.content;return e=e.Ab,hn('<dialog class="mdl-dialog firebaseui-dialog firebaseui-id-dialog'+(e?" "+gn(e):"")+'">'+un(t)+"</dialog>")}function wu(e){var t=e.message;return hn(bu({content:mn('<div class="firebaseui-dialog-icon-wrapper"><div class="'+gn(e.Ma)+' firebaseui-dialog-icon"></div></div><div class="firebaseui-progress-dialog-message">'+un(t)+"</div>")}))}function xu(e){for(var t='<div class="firebaseui-list-box-actions">',n=(e=e.items).length,i=0;i<n;i++){var r=e[i];t+='<button type="button" data-listboxid="'+gn(r.id)+'" class="mdl-button firebaseui-id-list-box-dialog-button firebaseui-list-box-dialog-button">'+(r.Ma?'<div class="firebaseui-list-box-icon-wrapper"><div class="firebaseui-list-box-icon '+gn(r.Ma)+'"></div></div>':"")+'<div class="firebaseui-list-box-label-wrapper">'+un(r.label)+"</div></button>"}return t=""+bu({Ab:pn("firebaseui-list-box-dialog"),content:mn(t+"</div>")}),hn(t)}function _u(e){return hn((e=e||{}).tb?'<div class="mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active firebaseui-busy-indicator firebaseui-id-busy-indicator"></div>':'<div class="mdl-progress mdl-js-progress mdl-progress__indeterminate firebaseui-busy-indicator firebaseui-id-busy-indicator"></div>')}function Eu(e,t){return dn((e=(e=e||{}).ga).S?e.S:t.hb[e.providerId]?""+t.hb[e.providerId]:e.providerId&&0==e.providerId.indexOf("saml.")||e.providerId&&0==e.providerId.indexOf("oidc.")?e.providerId.substring(5):""+e.providerId)}function Iu(e){ku(e,"upgradeElement")}function Su(e){ku(e,"downgradeElements")}y(Ya),Ya.prototype.a=0,O(Za,gi),(e=Za.prototype).Lb=Ya.Xa(),e.N=function(){return this.g},e.Za=function(e){if(this.Y&&this.Y!=e)throw Error("Method not supported");Za.K.Za.call(this,e)},e.kb=function(){this.g=this.s.a.createElement("DIV")},e.render=function(e){if(this.na)throw Error("Component already rendered");this.g||this.kb(),e?e.insertBefore(this.g,null):this.s.a.body.appendChild(this.g),this.Y&&!this.Y.na||this.v()},e.v=function(){this.na=!0,Qa(this,(function(e){!e.na&&e.N()&&e.v()}))},e.ya=function(){Qa(this,(function(e){e.na&&e.ya()})),this.L&&La(this.L),this.na=!1},e.o=function(){this.na&&this.ya(),this.L&&(this.L.m(),delete this.L),Qa(this,(function(e){e.m()})),this.g&&Kt(this.g),this.Y=this.g=this.oa=this.Ea=null,Za.K.o.call(this)},e.removeChild=function(e,t){if(e){var n=p(e)?e:e.cb||(e.cb=":"+(e.Lb.a++).toString(36));if(this.oa&&n?e=(null!==(e=this.oa)&&n in e?e[n]:void 0)||null:e=null,n&&e){var i=this.oa;if(n in i&&delete i[n],W(this.Ea,e),t&&(e.ya(),e.g&&Kt(e.g)),null==(t=e))throw Error("Unable to set parent component");t.Y=null,Za.K.Za.call(t,null)}}if(!e)throw Error("Child is not in parent component");return e},yu.a="firebaseui.auth.soy2.element.infoBar",wu.a="firebaseui.auth.soy2.element.progressDialog",xu.a="firebaseui.auth.soy2.element.listBoxDialog",_u.a="firebaseui.auth.soy2.element.busyIndicator";var Au=["mdl-js-textfield","mdl-js-progress","mdl-js-spinner","mdl-js-button"];function ku(e,t){e&&window.componentHandler&&window.componentHandler[t]&&Au.forEach((function(n){pa(e,n)&&window.componentHandler[t](e),U(Vt(n,e),(function(e){window.componentHandler[t](e)}))}))}function Tu(e,t,n){if(Cu.call(this),document.body.appendChild(e),e.showModal||window.dialogPolyfill.registerDialog(e),e.showModal(),Iu(e),t&&iu(this,e,(function(t){var n=e.getBoundingClientRect();(t.clientX<n.left||n.left+n.width<t.clientX||t.clientY<n.top||n.top+n.height<t.clientY)&&Cu.call(this)})),!n){var i=this.N().parentElement||this.N().parentNode;if(i){var r=this;this.da=function(){if(e.open){var t=e.getBoundingClientRect().height,n=i.getBoundingClientRect().height,o=i.getBoundingClientRect().top-document.body.getBoundingClientRect().top,s=i.getBoundingClientRect().left-document.body.getBoundingClientRect().left,a=e.getBoundingClientRect().width,u=i.getBoundingClientRect().width;e.style.top=(o+(n-t)/2).toString()+"px",t=s+(u-a)/2,e.style.left=t.toString()+"px",e.style.right=(document.body.getBoundingClientRect().width-t-a).toString()+"px"}else window.removeEventListener("resize",r.da)},this.da(),window.addEventListener("resize",this.da,!1)}}}function Cu(){var e=Nu.call(this);e&&(Su(e),e.open&&e.close(),Kt(e),this.da&&window.removeEventListener("resize",this.da))}function Nu(){return Ht("firebaseui-id-dialog")}function Ru(){Kt(Lu.call(this))}function Lu(){return Xa(this,"firebaseui-id-info-bar")}function Mu(){return Xa(this,"firebaseui-id-dismiss-info-bar")}var Ou={xa:{"google.com":"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg","github.com":"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/github.svg","facebook.com":"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/facebook.svg","twitter.com":"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/twitter.svg",password:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/mail.svg",phone:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/phone.svg",anonymous:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/anonymous.png","microsoft.com":"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/microsoft.svg","yahoo.com":"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/yahoo.svg","apple.com":"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/apple.png",saml:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/saml.svg",oidc:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/oidc.svg"},wa:{"google.com":"#ffffff","github.com":"#333333","facebook.com":"#3b5998","twitter.com":"#55acee",password:"#db4437",phone:"#02bd7e",anonymous:"#f4b400","microsoft.com":"#2F2F2F","yahoo.com":"#720E9E","apple.com":"#000000",saml:"#007bff",oidc:"#007bff"},hb:{"google.com":"Google","github.com":"GitHub","facebook.com":"Facebook","twitter.com":"Twitter",password:"Password",phone:"Phone",anonymous:"Guest","microsoft.com":"Microsoft","yahoo.com":"Yahoo","apple.com":"Apple"}};function Du(e,t,n){for(var i in zn.call(this,e,t),n)this[i]=n[i]}function Pu(e,t,n,i,r){Za.call(this,n),this.fb=e,this.eb=t,this.Fa=!1,this.Ga=i||null,this.A=this.ca=null,this.Z=ae(Ou),ce(this.Z,r||{})}function Fu(e){return e.N().parentElement||e.N().parentNode}function Bu(e,t,n){nu(e,t,(function(){n.focus()}))}function Uu(e,t,n){nu(e,t,(function(){n()}))}function ju(e,t,n){t=(e=e||{}).Va;var i=e.ia;return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-sign-in"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in with email</h1></div><div class="firebaseui-card-content"><div class="firebaseui-relative-wrapper">'+au(e)+'</div></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+(t?mu(null):"")+uu(null)+'</div></div><div class="firebaseui-card-footer">'+(i?vu(n):gu(n))+"</div></form></div>",hn(e)}function $u(e,t,n){return t=(e=e||{}).ia,e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-sign-in"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content">'+au(e)+fu()+'</div><div class="firebaseui-card-actions"><div class="firebaseui-form-links">'+pu()+'</div><div class="firebaseui-form-actions">'+cu()+'</div></div><div class="firebaseui-card-footer">'+(t?vu(n):gu(n))+"</div></form></div>",hn(e)}function Vu(e,t,n){var i=(e=e||{}).Tb;t=e.Ta;var r=e.ia,o='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-sign-up"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Create account</h1></div><div class="firebaseui-card-content">'+au(e);return i?(e='<div class="firebaseui-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><label class="mdl-textfield__label firebaseui-label" for="ui-sign-in-name-input">First &amp; last name</label><input type="text" name="name" id="ui-sign-in-name-input" autocomplete="name" class="mdl-textfield__input firebaseui-input firebaseui-id-name" value="'+gn(null!=(e=(e=e||{}).name)?e:"")+'"></div><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-id-name-error"></p></div>',e=hn(e)):e="",n=o+e+hu(null)+'</div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+(t?mu(null):"")+lu()+'</div></div><div class="firebaseui-card-footer">'+(r?vu(n):gu(n))+"</div></form></div>",hn(n)}function Hu(e,t,n){return t=(e=e||{}).Ta,e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-recovery"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Recover password</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Get instructions sent to this email that explain how to reset your password</p>'+au(e)+'</div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+(t?mu(null):"")+uu({label:pn("Send")})+'</div></div><div class="firebaseui-card-footer">'+gu(n)+"</div></form></div>",hn(e)}function Wu(e,t,n){t=e.G;var i="";return i+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-recovery-email-sent"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Check your email</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+(e="Follow the instructions sent to <strong>"+un(e.email)+"</strong> to recover your password")+'</p></div><div class="firebaseui-card-actions">',t&&(i+='<div class="firebaseui-form-actions">'+uu({label:pn("Done")})+"</div>"),i+='</div><div class="firebaseui-card-footer">'+gu(n)+"</div></div>",hn(i)}function Gu(e,t,n){return hn('<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-callback"><div class="firebaseui-callback-indicator-container">'+_u(null)+"</div></div>")}function zu(e,t,n){return hn('<div class="firebaseui-container firebaseui-id-page-spinner">'+_u({tb:!0})+"</div>")}function Ku(){return hn('<div class="firebaseui-container firebaseui-id-page-blank firebaseui-use-spinner"></div>')}function qu(e,t,n){return t="",t+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-link-sign-in-sent"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign-in email sent</h1></div><div class="firebaseui-card-content"><div class="firebaseui-email-sent"></div><p class="firebaseui-text">'+(e="A sign-in email with additional instructions was sent to <strong>"+un(e.email)+"</strong>. Check your email to complete sign-in.")+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-links">'+hn('<a class="firebaseui-link firebaseui-id-trouble-getting-email-link" href="javascript:void(0)">Trouble getting email?</a>')+'</div><div class="firebaseui-form-actions">'+mu({label:pn("Back")})+'</div></div><div class="firebaseui-card-footer">'+gu(n)+"</div></form></div>",hn(t)}function Yu(e,t,n){return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-not-received"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Trouble getting email?</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Try these common fixes:<ul><li>Check if the email was marked as spam or filtered.</li><li>Check your internet connection.</li><li>Check that you did not misspell your email.</li><li>Check that your inbox space is not running out or other inbox settings related issues.</li></ul></p><p class="firebaseui-text">If the steps above didn\'t work, you can resend the email. Note that this will deactivate the link in the older email.</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-links">'+hn('<a class="firebaseui-link firebaseui-id-resend-email-link" href="javascript:void(0)">Resend</a>')+'</div><div class="firebaseui-form-actions">'+mu({label:pn("Back")})+'</div></div><div class="firebaseui-card-footer">'+gu(n)+"</div></form></div>",hn(e)}function Zu(e,t,n){return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-link-sign-in-confirmation"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Confirm email</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Confirm your email to complete sign in</p><div class="firebaseui-relative-wrapper">'+au(e)+'</div></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+mu(null)+uu(null)+'</div></div><div class="firebaseui-card-footer">'+gu(n)+"</div></form></div>",hn(e)}function Xu(){var e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-different-device-error"><div class="firebaseui-card-header"><h1 class="firebaseui-title">New device or browser detected</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Try opening the link using the same device or browser where you started the sign-in process.</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+mu({label:pn("Dismiss")})+"</div></div></div>";return hn(e)}function Ju(){var e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-anonymous-user-mismatch"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Session ended</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">The session associated with this sign-in request has either expired or was cleared.</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+mu({label:pn("Dismiss")})+"</div></div></div>";return hn(e)}function Qu(e,t,n){return t="",t+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-linking"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><h2 class="firebaseui-subtitle">You already have an account</h2><p class="firebaseui-text">'+(e="You’ve already used <strong>"+un(e.email)+"</strong> to sign in. Enter your password for that account.")+"</p>"+fu()+'</div><div class="firebaseui-card-actions"><div class="firebaseui-form-links">'+pu()+'</div><div class="firebaseui-form-actions">'+cu()+'</div></div><div class="firebaseui-card-footer">'+gu(n)+"</div></form></div>",hn(t)}function ec(e,t,n){var i=e.email;return t="",e=pn(e=""+Eu(e,n)),t+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-link-sign-in-linking"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><h2 class="firebaseui-subtitle">You already have an account</h2><p class="firebaseui-text firebaseui-text-justify">'+(i="You’ve already used <strong>"+un(i)+"</strong>. You can connect your <strong>"+un(e)+"</strong> account with <strong>"+un(i)+"</strong> by signing in with email link below.")+'<p class="firebaseui-text firebaseui-text-justify">'+(e="For this flow to successfully connect your "+un(e)+" account with this email, you have to open the link on the same device or browser.")+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+cu()+'</div></div><div class="firebaseui-card-footer">'+gu(n)+"</div></form></div>",hn(t)}function tc(e,t,n){t="";var i=""+Eu(e,n);return t+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-link-sign-in-linking-different-device"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text firebaseui-text-justify">'+(e="You originally intended to connect <strong>"+un(i=pn(i))+"</strong> to your email account but have opened the link on a different device where you are not signed in.")+'</p><p class="firebaseui-text firebaseui-text-justify">'+(i="If you still want to connect your <strong>"+un(i)+"</strong> account, open the link on the same device where you started sign-in. Otherwise, tap Continue to sign-in on this device.")+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+du()+'</div></div><div class="firebaseui-card-footer">'+gu(n)+"</div></form></div>",hn(t)}function nc(e,t,n){var i=e.email;return t="",e=pn(e=""+Eu(e,n)),t+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-federated-linking"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><h2 class="firebaseui-subtitle">You already have an account</h2><p class="firebaseui-text">'+(i="You’ve already used <strong>"+un(i)+"</strong>. Sign in with "+un(e)+" to continue.")+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+uu({label:pn("Sign in with "+e)})+'</div></div><div class="firebaseui-card-footer">'+gu(n)+"</div></form></div>",hn(t)}function ic(e,t,n){var i=(e=e||{}).kc;t=e.yb,e=e.Eb;var r='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-unauthorized-user"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Not Authorized</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">';return i?r+=i="<strong>"+un(i)+"</strong> is not authorized to view the requested page.":r+="User is not authorized to view the requested page.",r+="</p>",t&&(r+='<p class="firebaseui-text firebaseui-id-unauthorized-user-admin-email">'+(t="Please contact <strong>"+un(t)+"</strong> for authorization.")+"</p>"),r+='</div><div class="firebaseui-card-actions"><div class="firebaseui-form-links">',e&&(r+='<a class="firebaseui-link firebaseui-id-unauthorized-user-help-link" href="javascript:void(0)" target="_blank">Learn More</a>'),r+='</div><div class="firebaseui-form-actions">'+mu({label:pn("Back")})+'</div></div><div class="firebaseui-card-footer">'+gu(n)+"</div></form></div>",hn(r)}function rc(e,t,n){return t="",t+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-unsupported-provider"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+(e="To continue sign in with <strong>"+un(e.email)+"</strong> on this device, you have to recover the password.")+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+mu(null)+uu({label:pn("Recover password")})+'</div></div><div class="firebaseui-card-footer">'+gu(n)+"</div></form></div>",hn(t)}function oc(e){var t="";return t+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-reset"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Reset your password</h1></div><div class="firebaseui-card-content">'+('<p class="firebaseui-text">for <strong>'+un(e.email)+"</strong></p>")+hu(function(e){function t(){}var n={label:pn("New password")};for(var i in t.prototype=e,e=new t,n)e[i]=n[i];return e}(e))+'</div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+lu()+"</div></div></form></div>",hn(t)}function sc(e){return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-reset-success"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Password changed</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">You can now sign in with your new password</p></div><div class="firebaseui-card-actions">'+((e=e||{}).G?'<div class="firebaseui-form-actions">'+du()+"</div>":"")+"</div></div>",hn(e)}function ac(e){return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-reset-failure"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Try resetting your password again</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Your request to reset your password has expired or the link has already been used</p></div><div class="firebaseui-card-actions">'+((e=e||{}).G?'<div class="firebaseui-form-actions">'+du()+"</div>":"")+"</div></div>",hn(e)}function uc(e){var t=e.G,n="";return n+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-change-revoke-success"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Updated email address</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+(e="Your sign-in email address has been changed back to <strong>"+un(e.email)+"</strong>.")+'</p><p class="firebaseui-text">If you didn’t ask to change your sign-in email, it’s possible someone is trying to access your account and you should <a class="firebaseui-link firebaseui-id-reset-password-link" href="javascript:void(0)">change your password right away</a>.</p></div><div class="firebaseui-card-actions">'+(t?'<div class="firebaseui-form-actions">'+du()+"</div>":"")+"</div></form></div>",hn(n)}function cc(e){return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-change-revoke-failure"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Unable to update your email address</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">There was a problem changing your sign-in email back.</p><p class="firebaseui-text">If you try again and still can’t reset your email, try asking your administrator for help.</p></div><div class="firebaseui-card-actions">'+((e=e||{}).G?'<div class="firebaseui-form-actions">'+du()+"</div>":"")+"</div></div>",hn(e)}function lc(e){return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-verification-success"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Your email has been verified</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">You can now sign in with your new account</p></div><div class="firebaseui-card-actions">'+((e=e||{}).G?'<div class="firebaseui-form-actions">'+du()+"</div>":"")+"</div></div>",hn(e)}function dc(e){return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-verification-failure"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Try verifying your email again</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Your request to verify your email has expired or the link has already been used</p></div><div class="firebaseui-card-actions">'+((e=e||{}).G?'<div class="firebaseui-form-actions">'+du()+"</div>":"")+"</div></div>",hn(e)}function hc(e){var t=e.G,n="";return n+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-verify-and-change-email-success"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Your email has been verified and changed</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+(e="You can now sign in with your new email <strong>"+un(e.email)+"</strong>.")+'</p></div><div class="firebaseui-card-actions">'+(t?'<div class="firebaseui-form-actions">'+du()+"</div>":"")+"</div></div>",hn(n)}function fc(e){return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-verify-and-change-email-failure"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Try updating your email again</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Your request to verify and update your email has expired or the link has already been used.</p></div><div class="firebaseui-card-actions">'+((e=e||{}).G?'<div class="firebaseui-form-actions">'+du()+"</div>":"")+"</div></div>",hn(e)}function pc(e){var t=e.factorId,n=e.phoneNumber;e=e.G;var i='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-revert-second-factor-addition-success"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Removed second factor</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">';if("phone"===t)i+=t="The <strong>"+un(t)+" "+un(n)+"</strong> was removed as a second authentication step.";else i+="The device or app was removed as a second authentication step.";return i+='</p><p class="firebaseui-text">If you don\'t recognize this device, someone might be trying to access your account. Consider <a class="firebaseui-link firebaseui-id-reset-password-link" href="javascript:void(0)">changing your password right away</a>.</p></div><div class="firebaseui-card-actions">'+(e?'<div class="firebaseui-form-actions">'+du()+"</div>":"")+"</div></form></div>",hn(i)}function mc(e){return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-revert-second-factor-addition-failure"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Couldn\'t remove your second factor</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Something went wrong removing your second factor.</p><p class="firebaseui-text">Try removing it again. If that doesn\'t work, contact support for assistance.</p></div><div class="firebaseui-card-actions">'+((e=e||{}).G?'<div class="firebaseui-form-actions">'+du()+"</div>":"")+"</div></div>",hn(e)}function gc(e){var t=e.zb;return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-recoverable-error"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Error encountered</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+un(e.errorMessage)+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">',t&&(e+=uu({label:pn("Retry")})),hn(e+"</div></div></div>")}function vc(e){return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-unrecoverable-error"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Error encountered</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+un(e.errorMessage)+"</p></div></div>",hn(e)}function yc(e,t,n){var i=e.Qb;return t="",t+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-mismatch"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><h2 class="firebaseui-subtitle">'+(e="Continue with "+un(e.jc)+"?")+'</h2><p class="firebaseui-text">'+(i="You originally wanted to sign in with "+un(i))+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+mu(null)+uu({label:pn("Continue")})+'</div></div><div class="firebaseui-card-footer">'+gu(n)+"</div></form></div>",hn(t)}function bc(e,t,n){var i='<div class="firebaseui-container firebaseui-page-provider-sign-in firebaseui-id-page-provider-sign-in firebaseui-use-spinner"><div class="firebaseui-card-content"><form onsubmit="return false;"><ul class="firebaseui-idp-list">';t=(e=e.Sb).length;for(var r=0;r<t;r++){var o={ga:e[r]},s=n,a=(o=o||{}).ga,u=o,c="";switch((u=u||{}).ga.providerId){case"google.com":c+="firebaseui-idp-google";break;case"github.com":c+="firebaseui-idp-github";break;case"facebook.com":c+="firebaseui-idp-facebook";break;case"twitter.com":c+="firebaseui-idp-twitter";break;case"phone":c+="firebaseui-idp-phone";break;case"anonymous":c+="firebaseui-idp-anonymous";break;case"password":c+="firebaseui-idp-password";break;default:c+="firebaseui-idp-generic"}u=(u='<button class="firebaseui-idp-button mdl-button mdl-js-button mdl-button--raised '+gn(dn(c))+' firebaseui-id-idp-button" data-provider-id="'+gn(a.providerId)+'" style="background-color:')+gn(yn(dn((c=(c=(c=o)||{}).ga).ta?c.ta:s.wa[c.providerId]?""+s.wa[c.providerId]:0==c.providerId.indexOf("saml.")?""+s.wa.saml:0==c.providerId.indexOf("oidc.")?""+s.wa.oidc:""+s.wa.password)))+'"><span class="firebaseui-idp-icon-wrapper"><img class="firebaseui-idp-icon" alt="" src="';var l=o;c=s,l=(l=l||{}).ga,c=fn(l.za?vn(l.za):c.xa[l.providerId]?vn(c.xa[l.providerId]):0==l.providerId.indexOf("saml.")?vn(c.xa.saml):0==l.providerId.indexOf("oidc.")?vn(c.xa.oidc):vn(c.xa.password)),u=u+gn(vn(c))+'"></span>',"password"==a.providerId?(u+='<span class="firebaseui-idp-text firebaseui-idp-text-long">',a.V?u+=un(a.V):a.S?u+=o="Sign in with "+un(Eu(o,s)):u+="Sign in with email",u+='</span><span class="firebaseui-idp-text firebaseui-idp-text-short">',u=a.S?u+un(a.S):u+"Email",u+="</span>"):"phone"==a.providerId?(u+='<span class="firebaseui-idp-text firebaseui-idp-text-long">',a.V?u+=un(a.V):a.S?u+=o="Sign in with "+un(Eu(o,s)):u+="Sign in with phone",u+='</span><span class="firebaseui-idp-text firebaseui-idp-text-short">',u=a.S?u+un(a.S):u+"Phone",u+="</span>"):"anonymous"==a.providerId?(u+='<span class="firebaseui-idp-text firebaseui-idp-text-long">',a.V?u+=un(a.V):a.S?u+=o="Sign in with "+un(Eu(o,s)):u+="Continue as guest",u+='</span><span class="firebaseui-idp-text firebaseui-idp-text-short">',u=a.S?u+un(a.S):u+"Guest",u+="</span>"):(u+='<span class="firebaseui-idp-text firebaseui-idp-text-long">',a.V?u+=un(a.V):u+=c="Sign in with "+un(Eu(o,s)),u+='</span><span class="firebaseui-idp-text firebaseui-idp-text-short">'+(a.S?un(a.S):un(Eu(o,s)))+"</span>"),i+='<li class="firebaseui-list-item">'+(a=hn(u+"</button>"))+"</li>"}return i+='</ul></form></div><div class="firebaseui-card-footer firebaseui-provider-sign-in-footer">'+vu(n)+"</div></div>",hn(i)}function wc(e,t,n){var i,r=(e=e||{}).Gb,o=e.Va;return t=e.ia,e='<div class="firebaseui-phone-number"><button class="firebaseui-id-country-selector firebaseui-country-selector mdl-button mdl-js-button"><span class="firebaseui-flag firebaseui-country-selector-flag firebaseui-id-country-selector-flag"></span><span class="firebaseui-id-country-selector-code"></span></button><div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label firebaseui-textfield firebaseui-phone-input-wrapper"><label class="mdl-textfield__label firebaseui-label" for="ui-sign-in-phone-number-input">Phone number</label><input type="tel" name="phoneNumber" id="ui-sign-in-phone-number-input" class="mdl-textfield__input firebaseui-input firebaseui-id-phone-number" value="'+gn(null!=(e=(e=e||{}).Aa)?e:"")+'"></div></div><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-phone-number-error firebaseui-id-phone-number-error"></p></div>',i=(e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-phone-sign-in-start"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Enter your phone number</h1></div><div class="firebaseui-card-content"><div class="firebaseui-relative-wrapper">'+hn(e))+(i=r?hn('<div class="firebaseui-recaptcha-wrapper"><div class="firebaseui-recaptcha-container"></div><div class="firebaseui-error-wrapper firebaseui-recaptcha-error-wrapper"><p class="firebaseui-error firebaseui-hidden firebaseui-id-recaptcha-error"></p></div></div>'):"")+'</div></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+(o?mu(null):"")+uu({label:pn("Verify")})+'</div></div><div class="firebaseui-card-footer">',t?(t='<p class="firebaseui-tos firebaseui-phone-tos">',t=n.F&&n.D?t+'By tapping Verify, you are indicating that you accept our <a href="javascript:void(0)" class="firebaseui-link firebaseui-tos-link" target="_blank">Terms of Service</a> and <a href="javascript:void(0)" class="firebaseui-link firebaseui-pp-link" target="_blank">Privacy Policy</a>. An SMS may be sent. Message &amp; data rates may apply.':t+"By tapping Verify, an SMS may be sent. Message &amp; data rates may apply.",n=hn(t+"</p>")):n=hn('<p class="firebaseui-tos firebaseui-phone-sms-notice">By tapping Verify, an SMS may be sent. Message &amp; data rates may apply.</p>')+gu(n),hn(i+n+"</div></form></div>")}function xc(e,t,n){var i="";return e='Enter the 6-digit code we sent to <a class="firebaseui-link firebaseui-change-phone-number-link firebaseui-id-change-phone-number-link" href="javascript:void(0)">&lrm;'+un(t=(e=e||{}).phoneNumber)+"</a>",un(t),t=i,n='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-phone-sign-in-finish"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Verify your phone number</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+e+"</p>"+(i=hn('<div class="firebaseui-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><label class="mdl-textfield__label firebaseui-label" for="ui-sign-in-phone-confirmation-code-input">6-digit code</label><input type="number" name="phoneConfirmationCode" id="ui-sign-in-phone-confirmation-code-input" class="mdl-textfield__input firebaseui-input firebaseui-id-phone-confirmation-code"></div><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-id-phone-confirmation-code-error"></p></div>'))+'</div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+mu(null)+uu({label:pn("Continue")})+'</div></div><div class="firebaseui-card-footer">'+gu(n)+"</div></form>",e=hn('<div class="firebaseui-resend-container"><span class="firebaseui-id-resend-countdown"></span><a href="javascript:void(0)" class="firebaseui-id-resend-link firebaseui-hidden firebaseui-link">Resend</a></div>'),hn(t+(n+e+"</div>"))}function _c(){return hn('<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-sign-out"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign Out</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">You are now successfully signed out.</p></div></div>')}function Ec(e,t,n){var i='<div class="firebaseui-container firebaseui-page-select-tenant firebaseui-id-page-select-tenant"><div class="firebaseui-card-content"><form onsubmit="return false;"><ul class="firebaseui-tenant-list">';t=(e=e.ec).length;for(var r=0;r<t;r++){var o=e[r],s="",a=un(o.displayName),u=o.tenantId?o.tenantId:"top-level-project";s+='<button class="firebaseui-tenant-button mdl-button mdl-js-button mdl-button--raised firebaseui-tenant-selection-'+gn(u=pn(u))+' firebaseui-id-tenant-selection-button"'+(o.tenantId?'data-tenant-id="'+gn(o.tenantId)+'"':"")+'style="background-color:'+gn(yn(o.ta))+'"><span class="firebaseui-idp-icon-wrapper"><img class="firebaseui-idp-icon" alt="" src="'+gn(vn(o.za))+'"></span><span class="firebaseui-idp-text firebaseui-idp-text-long">',o.V?s+=un(o.V):s+=o="Sign in to "+un(o.displayName),i+='<li class="firebaseui-list-item">'+(s=hn(s+'</span><span class="firebaseui-idp-text firebaseui-idp-text-short">'+a+"</span></button>"))+"</li>"}return i+='</ul></form></div><div class="firebaseui-card-footer firebaseui-provider-sign-in-footer">'+vu(n)+"</div></div>",hn(i)}function Ic(e,t,n){return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-provider-match-by-email"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><div class="firebaseui-relative-wrapper">'+au(null)+'</div></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+uu(null)+'</div></div><div class="firebaseui-card-footer">'+vu(n)+"</div></form></div>",hn(e)}function Sc(){return Xa(this,"firebaseui-id-submit")}function Ac(){return Xa(this,"firebaseui-id-secondary-link")}function kc(e,t){iu(this,Sc.call(this),(function(t){e(t)}));var n=Ac.call(this);n&&t&&iu(this,n,(function(e){t(e)}))}function Tc(){return Xa(this,"firebaseui-id-password")}function Cc(){return Xa(this,"firebaseui-id-password-error")}function Nc(){var e=Tc.call(this),t=Cc.call(this);tu(this,e,(function(){su(t)&&(eu(e,!0),ru(t))}))}function Rc(){var e=Tc.call(this),t=Cc.call(this);return va(e)?(eu(e,!0),ru(t),t=!0):(eu(e,!1),ou(t,dn("Enter your password").toString()),t=!1),t?va(e):null}function Lc(e,t,n,i,r,o){Pu.call(this,Qu,{email:e},o,"passwordLinking",{F:i,D:r}),this.w=t,this.H=n}O(Du,zn),O(Pu,Za),(e=Pu.prototype).kb=function(){var e=rn(this.fb,this.eb,this.Z,this.s);Iu(e),this.g=e},e.v=function(){if(Pu.K.v.call(this),xi(Fu(this),new Du("pageEnter",Fu(this),{pageId:this.Ga})),this.bb()&&this.Z.F){var e=this.Z.F;iu(this,this.bb(),(function(){e()}))}if(this.ab()&&this.Z.D){var t=this.Z.D;iu(this,this.ab(),(function(){t()}))}},e.ya=function(){xi(Fu(this),new Du("pageExit",Fu(this),{pageId:this.Ga})),Pu.K.ya.call(this)},e.o=function(){window.clearTimeout(this.ca),this.eb=this.fb=this.ca=null,this.Fa=!1,this.A=null,Su(this.N()),Pu.K.o.call(this)},e.I=function(e,t,n,i){function r(){if(o.T)return null;o.Fa=!1,window.clearTimeout(o.ca),o.ca=null,o.A&&(Su(o.A),Kt(o.A),o.A=null)}var o=this;return o.Fa?null:(function(e){e.Fa=!0;var t=pa(e.N(),"firebaseui-use-spinner");e.ca=window.setTimeout((function(){e.N()&&null===e.A&&(e.A=rn(_u,{tb:t},null,e.s),e.N().appendChild(e.A),Iu(e.A))}),500)}(o),e.apply(null,t).then(n,i).then(r,r))},N(Pu.prototype,{a:function(e){Ru.call(this);var t=rn(yu,{message:e},null,this.s);this.N().appendChild(t),iu(this,Mu.call(this),(function(){Kt(t)}))},yc:Ru,Ac:Lu,zc:Mu,$:function(e,t){e=rn(wu,{Ma:e,message:t},null,this.s),Tu.call(this,e)},h:Cu,Cb:Nu,Cc:function(){return Xa(this,"firebaseui-tos")},bb:function(){return Xa(this,"firebaseui-tos-link")},ab:function(){return Xa(this,"firebaseui-pp-link")},Dc:function(){return Xa(this,"firebaseui-tos-list")}}),ju.a="firebaseui.auth.soy2.page.signIn",$u.a="firebaseui.auth.soy2.page.passwordSignIn",Vu.a="firebaseui.auth.soy2.page.passwordSignUp",Hu.a="firebaseui.auth.soy2.page.passwordRecovery",Wu.a="firebaseui.auth.soy2.page.passwordRecoveryEmailSent",Gu.a="firebaseui.auth.soy2.page.callback",zu.a="firebaseui.auth.soy2.page.spinner",Ku.a="firebaseui.auth.soy2.page.blank",qu.a="firebaseui.auth.soy2.page.emailLinkSignInSent",Yu.a="firebaseui.auth.soy2.page.emailNotReceived",Zu.a="firebaseui.auth.soy2.page.emailLinkSignInConfirmation",Xu.a="firebaseui.auth.soy2.page.differentDeviceError",Ju.a="firebaseui.auth.soy2.page.anonymousUserMismatch",Qu.a="firebaseui.auth.soy2.page.passwordLinking",ec.a="firebaseui.auth.soy2.page.emailLinkSignInLinking",tc.a="firebaseui.auth.soy2.page.emailLinkSignInLinkingDifferentDevice",nc.a="firebaseui.auth.soy2.page.federatedLinking",ic.a="firebaseui.auth.soy2.page.unauthorizedUser",rc.a="firebaseui.auth.soy2.page.unsupportedProvider",oc.a="firebaseui.auth.soy2.page.passwordReset",sc.a="firebaseui.auth.soy2.page.passwordResetSuccess",ac.a="firebaseui.auth.soy2.page.passwordResetFailure",uc.a="firebaseui.auth.soy2.page.emailChangeRevokeSuccess",cc.a="firebaseui.auth.soy2.page.emailChangeRevokeFailure",lc.a="firebaseui.auth.soy2.page.emailVerificationSuccess",dc.a="firebaseui.auth.soy2.page.emailVerificationFailure",hc.a="firebaseui.auth.soy2.page.verifyAndChangeEmailSuccess",fc.a="firebaseui.auth.soy2.page.verifyAndChangeEmailFailure",pc.a="firebaseui.auth.soy2.page.revertSecondFactorAdditionSuccess",mc.a="firebaseui.auth.soy2.page.revertSecondFactorAdditionFailure",gc.a="firebaseui.auth.soy2.page.recoverableError",vc.a="firebaseui.auth.soy2.page.unrecoverableError",yc.a="firebaseui.auth.soy2.page.emailMismatch",bc.a="firebaseui.auth.soy2.page.providerSignIn",wc.a="firebaseui.auth.soy2.page.phoneSignInStart",xc.a="firebaseui.auth.soy2.page.phoneSignInFinish",_c.a="firebaseui.auth.soy2.page.signOut",Ec.a="firebaseui.auth.soy2.page.selectTenant",Ic.a="firebaseui.auth.soy2.page.providerMatchByEmail",u(Lc,Pu),Lc.prototype.v=function(){this.P(),this.M(this.w,this.H),Uu(this,this.i(),this.w),this.i().focus(),Pu.prototype.v.call(this)},Lc.prototype.o=function(){this.w=null,Pu.prototype.o.call(this)},Lc.prototype.j=function(){return va(Xa(this,"firebaseui-id-email"))},N(Lc.prototype,{i:Tc,B:Cc,P:Nc,u:Rc,ea:Sc,ba:Ac,M:kc});var Mc=/^[+a-zA-Z0-9_.!#$%&'*\/=?^`{|}~-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z0-9]{2,63}$/;function Oc(){return Xa(this,"firebaseui-id-email")}function Dc(){return Xa(this,"firebaseui-id-email-error")}function Pc(e){var t=Oc.call(this),n=Dc.call(this);tu(this,t,(function(){su(n)&&(eu(t,!0),ru(n))})),e&&nu(this,t,(function(){e()}))}function Fc(){return Z(va(Oc.call(this))||"")}function Bc(){var e=Oc.call(this),t=Dc.call(this),n=va(e)||"";return n?Mc.test(n)?(eu(e,!0),ru(t),t=!0):(eu(e,!1),ou(t,dn("That email address isn't correct").toString()),t=!1):(eu(e,!1),ou(t,dn("Enter your email address to continue").toString()),t=!1),t?Z(va(e)):null}function Uc(e,t,n,i,r,o,s){Pu.call(this,$u,{email:n,ia:!!o},s,"passwordSignIn",{F:i,D:r}),this.w=e,this.H=t}function jc(e,t,n,i,r,o){Pu.call(this,e,t,i,r||"notice",o),this.i=n||null}function $c(e,t,n,i,r){jc.call(this,Wu,{email:e,G:!!t},t,r,"passwordRecoveryEmailSent",{F:n,D:i})}function Vc(e,t){jc.call(this,lc,{G:!!e},e,t,"emailVerificationSuccess")}function Hc(e,t){jc.call(this,dc,{G:!!e},e,t,"emailVerificationFailure")}function Wc(e,t,n){jc.call(this,hc,{email:e,G:!!t},t,n,"verifyAndChangeEmailSuccess")}function Gc(e,t){jc.call(this,fc,{G:!!e},e,t,"verifyAndChangeEmailFailure")}function zc(e,t){jc.call(this,mc,{G:!!e},e,t,"revertSecondFactorAdditionFailure")}function Kc(e){jc.call(this,_c,void 0,void 0,e,"signOut")}function qc(e,t){jc.call(this,sc,{G:!!e},e,t,"passwordResetSuccess")}function Yc(e,t){jc.call(this,ac,{G:!!e},e,t,"passwordResetFailure")}function Zc(e,t){jc.call(this,cc,{G:!!e},e,t,"emailChangeRevokeFailure")}function Xc(e,t,n){jc.call(this,gc,{errorMessage:e,zb:!!t},t,n,"recoverableError")}function Jc(e,t){jc.call(this,vc,{errorMessage:e},void 0,t,"unrecoverableError")}function Qc(e){if("auth/invalid-credential"===e.code&&e.message&&-1!==e.message.indexOf("error=consent_required"))return{code:"auth/user-cancelled"};if(e.message&&-1!==e.message.indexOf("HTTP Cloud Function returned an error:")){var t=JSON.parse(e.message.substring(e.message.indexOf("{"),e.message.lastIndexOf("}")+1));return{code:e.code,message:t&&t.error&&t.error.message||e.message}}return e}function el(e,t,n,i){function r(n){if(!n.name||"cancel"!=n.name){e:{var i=n.message;try{var r=((JSON.parse(i).error||{}).message||"").toLowerCase().match(/invalid.+(access|id)_token/);if(r&&r.length){var o=!0;break e}}catch(e){}o=!1}if(o)n=Fu(t),t.m(),al(e,n,void 0,dn("Your sign-in session has expired. Please try again.").toString());else{if(o=n&&n.message||"",n.code){if("auth/email-already-in-use"==n.code||"auth/credential-already-in-use"==n.code)return;o=il(n)}t.a(o)}}}if(Ld(e),i)return tl(e,n),zi();if(!n.credential)throw Error("No credential found!");if(!_d(e).currentUser&&!n.user)throw Error("User not logged in.");try{var o=function(e,t){return Dd(e),Cd(e,(function(n){if(e.j&&!e.j.isAnonymous&&Ns(Od(e))&&!_d(e).currentUser)return Fd(e).then((function(){return"password"==t.credential.providerId&&(t.credential=null),t}));if(n)return Fd(e).then((function(){return n.linkWithCredential(t.credential)})).then((function(e){return t.user=e.user,t.credential=e.credential,t.operationType=e.operationType,t.additionalUserInfo=e.additionalUserInfo,t}),(function(n){if(n&&"auth/email-already-in-use"==n.code&&n.email&&n.credential)throw n;return Bd(e,n,t.credential)}));if(!t.user)throw Error('Internal error: An incompatible or outdated version of "firebase.js" may be used.');return Fd(e).then((function(){return Ed(e).updateCurrentUser(t.user)})).then((function(){return t.user=Ed(e).currentUser,t.operationType="signIn",t.credential&&t.credential.providerId&&"password"==t.credential.providerId&&(t.credential=null),t}))}))}(e,n)}catch(e){return Yr(e.code||e.message,e),t.a(e.code||e.message),zi()}return n=o.then((function(t){tl(e,t)}),r).then(void 0,r),Rd(e,o),zi(n)}function tl(e,t){if(!t.user)throw Error("No user found");var n=Zs(Od(e));if(Ys(Od(e))&&n&&Qr("Both signInSuccess and signInSuccessWithAuthResult callbacks are provided. Only signInSuccessWithAuthResult callback will be invoked."),n){n=Zs(Od(e));var i=ns(Id(e))||void 0;es(Zo,Id(e));var r=!1;or()?(n&&!n(t,i)||(r=!0,Bt(window.opener.location,nl(e,i))),n||window.close()):n&&!n(t,i)||(r=!0,Bt(window.location,nl(e,i))),r||e.reset()}else{n=t.user,t=t.credential,i=Ys(Od(e)),r=ns(Id(e))||void 0,es(Zo,Id(e));var o=!1;or()?(i&&!i(n,t,r)||(o=!0,Bt(window.opener.location,nl(e,r))),i||window.close()):i&&!i(n,t,r)||(o=!0,Bt(window.location,nl(e,r))),o||e.reset()}}function nl(e,t){if(!(e=t||Od(e).a.get("signInSuccessUrl")))throw Error("No redirect URL has been found. You must either specify a signInSuccessUrl in the configuration, pass in a redirect URL to the widget URL, or return false from the callback.");return e}function il(e){var t={code:e.code},n="";switch((t=t||{}).code){case"auth/email-already-in-use":n+="The email address is already used by another account";break;case"auth/requires-recent-login":case"auth/user-token-expired":n+=On();break;case"auth/too-many-requests":n+="You have entered an incorrect password too many times. Please try again in a few minutes.";break;case"auth/user-cancelled":n+="Please authorize the required permissions to sign in to the application";break;case"auth/user-not-found":n+="That email address doesn't match an existing account";break;case"auth/weak-password":n+="Strong passwords have at least 6 characters and a mix of letters and numbers";break;case"auth/wrong-password":n+="The email and password you entered don't match";break;case"auth/network-request-failed":n+="A network error has occurred";break;case"auth/invalid-phone-number":n+=Cn();break;case"auth/invalid-verification-code":n+=dn("Wrong code. Try again.");break;case"auth/code-expired":n+="This code is no longer valid";break;case"auth/expired-action-code":n+="This code has expired.";break;case"auth/invalid-action-code":n+="The action code is invalid. This can happen if the code is malformed, expired, or has already been used."}if(t=dn(n).toString())return t;try{return JSON.parse(e.message),Yr("Internal error: "+e.message,void 0),Rn().toString()}catch(t){return e.message}}function rl(e,t,n,i){function r(){!function(e,t){ts(Yo,{tenantId:e.a},t)}(new uo(e.h.tenantId||null),Id(e)),Rd(e,t.I(T(e.dc,e),[c],(function(){if("file:"===(window.location&&window.location.protocol))return Rd(e,bd(e).then((function(n){t.m(),es(Yo,Id(e)),ha("callback",e,u,zi(n))}),o))}),a))}function o(i){if(es(Yo,Id(e)),!i.name||"cancel"!=i.name)switch(i=Qc(i),i.code){case"auth/popup-blocked":r();break;case"auth/popup-closed-by-user":case"auth/cancelled-popup-request":case"auth/credential-already-in-use":break;case"auth/network-request-failed":case"auth/too-many-requests":case"auth/user-cancelled":t.a(il(i));break;case"auth/admin-restricted-operation":t.m(),Bs(Od(e))?ha("handleUnauthorizedUser",e,u,null,n):ha("callback",e,u,Ki(i));break;default:t.m(),ha("callback",e,u,Ki(i))}}function a(n){es(Yo,Id(e)),n.name&&"cancel"==n.name||(Yr("signInWithRedirect: "+n.code,void 0),n=il(n),"blank"==t.Ga&&Ks(Od(e))?(t.m(),ha("providerSignIn",e,u,n)):t.a(n))}var u=Fu(t),c=function(e,t,n){var i=Ts[t]&&s.default.auth[Ts[t]]?new s.default.auth[Ts[t]]:0==t.indexOf("saml.")?new s.default.auth.SAMLAuthProvider(t):new s.default.auth.OAuthProvider(t);if(!i)throw Error("Invalid Firebase Auth provider!");var r=Us(Od(e),t);if(i.addScope)for(var o=0;o<r.length;o++)i.addScope(r[o]);return r=js(Od(e),t)||{},n&&(e=t==s.default.auth.GoogleAuthProvider.PROVIDER_ID?"login_hint":t==s.default.auth.GithubAuthProvider.PROVIDER_ID?"login":(e=Os(Od(e),t))&&e.Ob)&&(r[e]=n),i.setCustomParameters&&i.setCustomParameters(r),i}(e,n,i);qs(Od(e))==sa?r():Rd(e,function(e,t){return Dd(e),Cd(e,(function(n){return n&&!is(Id(e))?n.linkWithPopup(t).then((function(e){return e}),(function(t){if(t&&"auth/email-already-in-use"==t.code&&t.email&&t.credential)throw t;return Bd(e,t)})):_d(e).signInWithPopup(t)}))}(e,c).then((function(n){t.m(),ha("callback",e,u,zi(n))}),o))}function ol(e){return 1==(e=Ms(Od(e))).length&&e[0]==s.default.auth.EmailAuthProvider.PROVIDER_ID}function sl(e){return 1==(e=Ms(Od(e))).length&&e[0]==s.default.auth.PhoneAuthProvider.PROVIDER_ID}function al(e,t,n,i){ol(e)?i?ha("signIn",e,t,n,i):dl(e,t,n):e&&sl(e)&&!i?ha("phoneSignInStart",e,t):e&&Ks(Od(e))&&!i?ha("federatedRedirect",e,t,n):ha("providerSignIn",e,t,i,n)}function ul(e,t,n,i){var r=Fu(t);Rd(e,t.I(T(_d(e).fetchSignInMethodsForEmail,_d(e)),[n],(function(o){t.m(),cl(e,r,o,n,i)}),(function(e){e=il(e),t.a(e)})))}function cl(e,t,n,i,r,o){n.length||zs(Od(e))&&!zs(Od(e))?H(n,s.default.auth.EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD)?ha("passwordSignIn",e,t,i,o):1==n.length&&n[0]===s.default.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD?zs(Od(e))?ha("sendEmailLinkForSignIn",e,t,i,(function(){ha("signIn",e,t)})):ha("unsupportedProvider",e,t,i):(n=As(n,Ms(Od(e))))?(os(new oo(i),Id(e)),ha("federatedSignIn",e,t,i,n,r)):ha("unsupportedProvider",e,t,i):Fs(Od(e))?ha("handleUnauthorizedUser",e,t,i,s.default.auth.EmailAuthProvider.PROVIDER_ID):zs(Od(e))?ha("sendEmailLinkForSignIn",e,t,i,(function(){ha("signIn",e,t)})):ha("passwordSignUp",e,t,i,void 0,void 0,o)}function ll(e,t,n,i,r,o){var s=Fu(t);Rd(e,t.I(T(e.Ib,e),[n,o],(function(){t.m(),ha("emailLinkSignInSent",e,s,n,i,o)}),r))}function dl(e,t,n){n?ha("prefilledEmailSignIn",e,t,n):ha("signIn",e,t)}function hl(){return we(ur(),"oobCode")}function fl(){var e=we(ur(),"continueUrl");return e?function(){Bt(window.location,e)}:null}function pl(e,t){Pu.call(this,Ju,void 0,t,"anonymousUserMismatch"),this.i=e}function ml(e){Pu.call(this,Gu,void 0,e,"callback")}function gl(e,t,n){if(n.user){var i={user:n.user,credential:n.credential,operationType:n.operationType,additionalUserInfo:n.additionalUserInfo},r=is(Id(e)),o=r&&r.g;if(o&&!function(e,t){if(t==e.email)return!0;if(e.providerData)for(var n=0;n<e.providerData.length;n++)if(t==e.providerData[n].email)return!0;return!1}(n.user,o))!function(e,t,n){var i=Fu(t);Rd(e,Fd(e).then((function(){t.m(),ha("emailMismatch",e,i,n)}),(function(e){e.name&&"cancel"==e.name||(e=il(e.code),t.a(e))})))}(e,t,i);else{var s=r&&r.a;s?Rd(e,n.user.linkWithCredential(s).then((function(n){i={user:n.user,credential:s,operationType:n.operationType,additionalUserInfo:n.additionalUserInfo},vl(e,t,i)}),(function(n){yl(e,t,n)}))):vl(e,t,i)}}else n=Fu(t),t.m(),rs(Id(e)),al(e,n)}function vl(e,t,n){rs(Id(e)),el(e,t,n)}function yl(e,t,n){var i=Fu(t);rs(Id(e)),n=il(n),t.m(),al(e,i,void 0,n)}function bl(e,t,n,i){var r=Fu(t);Rd(e,_d(e).fetchSignInMethodsForEmail(n).then((function(o){t.m(),o.length?H(o,s.default.auth.EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD)?ha("passwordLinking",e,r,n):1==o.length&&o[0]===s.default.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD?ha("emailLinkSignInLinking",e,r,n):(o=As(o,Ms(Od(e))))?ha("federatedLinking",e,r,n,o,i):(rs(Id(e)),ha("unsupportedProvider",e,r,n)):(rs(Id(e)),ha("passwordRecovery",e,r,n,!1,Ln().toString()))}),(function(n){yl(e,t,n)})))}function wl(e,t){Pu.call(this,Xu,void 0,t,"differentDeviceError"),this.i=e}function xl(e,t,n,i){Pu.call(this,uc,{email:e,G:!!n},i,"emailChangeRevoke"),this.l=t,this.i=n||null}function _l(){return Xa(this,"firebaseui-id-new-password")}function El(){return Xa(this,"firebaseui-id-password-toggle")}function Il(){this.Ra=!this.Ra;var e=El.call(this),t=_l.call(this);this.Ra?(t.type="text",ma(e,"firebaseui-input-toggle-off"),ga(e,"firebaseui-input-toggle-on")):(t.type="password",ma(e,"firebaseui-input-toggle-on"),ga(e,"firebaseui-input-toggle-off")),t.focus()}function Sl(){return Xa(this,"firebaseui-id-new-password-error")}function Al(){this.Ra=!1;var e=_l.call(this);e.type="password";var t=Sl.call(this);tu(this,e,(function(){su(t)&&(eu(e,!0),ru(t))}));var n=El.call(this);ma(n,"firebaseui-input-toggle-on"),ga(n,"firebaseui-input-toggle-off"),function(e,t,n){jn(e,C($n,t=new Aa(t))),Ra(Ja(e),t,"focusin",n)}(this,e,(function(){ma(n,"firebaseui-input-toggle-focus"),ga(n,"firebaseui-input-toggle-blur")})),function(e,t,n){jn(e,C($n,t=new Aa(t))),Ra(Ja(e),t,"focusout",n)}(this,e,(function(){ma(n,"firebaseui-input-toggle-blur"),ga(n,"firebaseui-input-toggle-focus")})),iu(this,n,T(Il,this))}function kl(){var e=_l.call(this),t=Sl.call(this);return va(e)?(eu(e,!0),ru(t),t=!0):(eu(e,!1),ou(t,dn("Enter your password").toString()),t=!1),t?va(e):null}function Tl(e,t,n){Pu.call(this,oc,{email:e},n,"passwordReset"),this.l=t}function Cl(e,t,n,i,r){Pu.call(this,pc,{factorId:e,phoneNumber:n||null,G:!!i},r,"revertSecondFactorAdditionSuccess"),this.l=t,this.i=i||null}function Nl(e,t,n,i){"auth/weak-password"==(i&&i.code)?(e=il(i),eu(n.i(),!1),ou(n.w(),e),n.i().focus()):(n&&n.m(),(n=new Yc).render(t),wd(e,n))}function Rl(e,t){try{var n="number"==typeof e.selectionStart}catch(e){n=!1}n?(e.selectionStart=t,e.selectionEnd=t):et&&!ft("9")&&("textarea"==e.type&&(t=e.value.substring(0,t).replace(/(\r\n|\r|\n)/g,"\n").length),(e=e.createTextRange()).collapse(!0),e.move("character",t),e.select())}function Ll(e,t,n,i,r,o){Pu.call(this,Zu,{email:n},o,"emailLinkSignInConfirmation",{F:i,D:r}),this.l=e,this.u=t}function Ml(e,t,n,i,r){Pu.call(this,tc,{ga:e},r,"emailLinkSignInLinkingDifferentDevice",{F:n,D:i}),this.i=t}function Ol(e){Pu.call(this,Ku,void 0,e,"blank")}function Dl(e,t,n,i,r){var o=new Ol,a=new $e(n),u=a.a.a.get(Ge.$a)||"",c=a.a.a.get(Ge.Sa)||"",l="1"===a.a.a.get(Ge.Qa),d=Ve(a),h=a.a.a.get(Ge.PROVIDER_ID)||null;a=a.a.a.get(Ge.vb)||null,Md(e,a);var f=!Qo(Xo,Id(e)),p=i||function(e,t){var n=null;if(t=Qo(Xo,t))try{var i=Ro(e,t),r=JSON.parse(i);n=r&&r.email||null}catch(e){}return n}(c,Id(e)),m=(i=function(e,t){var n=null;if(t=Qo(Jo,t))try{var i=Ro(e,t);n=JSON.parse(i)}catch(e){}return ao(n||null)}(c,Id(e)))&&i.a;h&&m&&m.providerId!==h&&(m=null),o.render(t),wd(e,o),Rd(e,o.I((function(){var t=zi(null);t=d&&f||f&&l?Ki(Error("anonymous-user-not-found")):function(e,t){var n=Ve(new $e(t));return n?(t=new Ui((function(t,i){var r=Ed(e).onAuthStateChanged((function(e){r(),e&&e.isAnonymous&&e.uid===n?t(e):e&&e.isAnonymous&&e.uid!==n?i(Error("anonymous-user-mismatch")):i(Error("anonymous-user-not-found"))}));Rd(e,r)})),Rd(e,t),t):zi(null)}(e,n).then((function(e){if(h&&!m)throw Error("pending-credential-not-found");return e}));var i=null;return t.then((function(t){return i=t,r?null:_d(e).checkActionCode(u)})).then((function(){return i}))}),[],(function(i){p?function(e,t,n,i,r,o){var a=Fu(t);t.$("mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active firebaseui-progress-dialog-loading-icon",dn("Signing in...").toString());var u=null;r=(o?function(e,t,n,i,r){Dd(e);var o=r||null,a=s.default.auth.EmailAuthProvider.credentialWithLink(n,i);return n=o?_d(e).signInWithEmailLink(n,i).then((function(e){return e.user.linkWithCredential(o)})).then((function(){return Fd(e)})).then((function(){return Bd(e,{code:"auth/email-already-in-use"},o)})):_d(e).fetchSignInMethodsForEmail(n).then((function(n){return n.length?Bd(e,{code:"auth/email-already-in-use"},a):t.linkWithCredential(a)})),Rd(e,n),n}(e,o,n,i,r):function(e,t,n,i){Dd(e);var r,o=i||null;return t=_d(e).signInWithEmailLink(t,n).then((function(e){if(r={user:e.user,credential:null,operationType:e.operationType,additionalUserInfo:e.additionalUserInfo},o)return e.user.linkWithCredential(o).then((function(e){r={user:e.user,credential:o,operationType:r.operationType,additionalUserInfo:e.additionalUserInfo}}))})).then((function(){Fd(e)})).then((function(){return Ed(e).updateCurrentUser(r.user)})).then((function(){return r.user=Ed(e).currentUser,r})),Rd(e,t),t}(e,n,i,r)).then((function(n){es(Jo,Id(e)),es(Xo,Id(e)),t.h(),t.$("firebaseui-icon-done",dn("Signed in!").toString()),u=setTimeout((function(){t.h(),el(e,t,n,!0)}),1e3),Rd(e,(function(){t&&(t.h(),t.m()),clearTimeout(u)}))}),(function(r){if(t.h(),t.m(),!r.name||"cancel"!=r.name){var o=il(r=Qc(r));"auth/email-already-in-use"==r.code||"auth/credential-already-in-use"==r.code?(es(Jo,Id(e)),es(Xo,Id(e))):"auth/invalid-email"==r.code?(o=dn("The email provided does not match the current sign-in session.").toString(),ha("emailLinkConfirmation",e,a,i,Pl,null,o)):al(e,a,n,o)}})),Rd(e,r)}(e,o,p,n,m,i):l?(o.m(),ha("differentDeviceError",e,t)):(o.m(),ha("emailLinkConfirmation",e,t,n,Pl))}),(function(i){var r=void 0;if(!i||!i.name||"cancel"!=i.name)switch(o.m(),i&&i.message){case"anonymous-user-not-found":ha("differentDeviceError",e,t);break;case"anonymous-user-mismatch":ha("anonymousUserMismatch",e,t);break;case"pending-credential-not-found":ha("emailLinkNewDeviceLinking",e,t,n,Fl);break;default:i&&(r=il(i)),al(e,t,void 0,r)}})))}function Pl(e,t,n,i){Dl(e,t,i,n,!0)}function Fl(e,t,n){Dl(e,t,n)}function Bl(e,t,n,i,r,o){Pu.call(this,ec,{email:e,ga:t},o,"emailLinkSignInLinking",{F:i,D:r}),this.i=n}function Ul(e,t,n,i,r,o){Pu.call(this,qu,{email:e},o,"emailLinkSignInSent",{F:i,D:r}),this.u=t,this.i=n}function jl(e,t,n,i,r,o,s){Pu.call(this,yc,{jc:e,Qb:t},s,"emailMismatch",{F:r,D:o}),this.l=n,this.i=i}function $l(e,t,n,i,r){Pu.call(this,Yu,void 0,r,"emailNotReceived",{F:n,D:i}),this.l=e,this.i=t}function Vl(e,t,n,i,r,o){Pu.call(this,nc,{email:e,ga:t},o,"federatedLinking",{F:i,D:r}),this.i=n}function Hl(e,t,n,i,r,o){Pu.call(this,Hu,{email:n,Ta:!!t},o,"passwordRecovery",{F:i,D:r}),this.l=e,this.u=t}function Wl(){return Xa(this,"firebaseui-id-name")}function Gl(){return Xa(this,"firebaseui-id-name-error")}function zl(e,t,n,i,r,o,s,a,u){Pu.call(this,Vu,{email:i,Tb:e,name:r,Ta:!!n,ia:!!a},u,"passwordSignUp",{F:o,D:s}),this.w=t,this.H=n,this.B=e}function Kl(e,t){var n=Gs(Od(e)),i=t.j(),r=null;n&&(r=t.M());var o=t.P();if(i){if(n){if(!r)return void t.u().focus();r=oe(r)}if(o){var a=s.default.auth.EmailAuthProvider.credential(i,o);Rd(e,t.I(T(e.Yb,e),[i,o],(function(i){var o={user:i.user,credential:a,operationType:i.operationType,additionalUserInfo:i.additionalUserInfo};return n?(i=i.user.updateProfile({displayName:r}).then((function(){return el(e,t,o)})),Rd(e,i),i):el(e,t,o)}),(function(n){if(!n.name||"cancel"!=n.name){var r=Qc(n);switch(n=il(r),r.code){case"auth/email-already-in-use":return function(e,t,n,i){function r(){var e=il(i);eu(t.i(),!1),ou(t.U(),e),t.i().focus()}var o=_d(e).fetchSignInMethodsForEmail(n).then((function(i){i.length?r():(i=Fu(t),t.m(),ha("passwordRecovery",e,i,n,!1,Ln().toString()))}),(function(){r()}));return Rd(e,o),o}(e,t,i,r);case"auth/too-many-requests":n=dn("Too many account requests are coming from your IP address. Try again in a few minutes.").toString();case"auth/operation-not-allowed":case"auth/weak-password":eu(t.l(),!1),ou(t.ba(),n);break;case"auth/admin-restricted-operation":Bs(Od(e))?(n=Fu(t),t.m(),ha("handleUnauthorizedUser",e,n,i,s.default.auth.EmailAuthProvider.PROVIDER_ID)):t.a(n);break;default:Yr(r="setAccountInfo: "+Mo(r),void 0),t.a(n)}}})))}else t.l().focus()}else t.i().focus()}function ql(){return Xa(this,"firebaseui-id-phone-confirmation-code")}function Yl(){return Xa(this,"firebaseui-id-phone-confirmation-code-error")}function Zl(){return Xa(this,"firebaseui-id-resend-countdown")}function Xl(e,t,n,i,r,o,s,a,u){Pu.call(this,xc,{phoneNumber:r},u,"phoneSignInFinish",{F:s,D:a}),this.jb=o,this.i=new ka(1e3),this.B=o,this.P=e,this.l=t,this.H=n,this.M=i}u(Uc,Pu),Uc.prototype.v=function(){this.P(),this.ea(),this.ba(this.w,this.H),Bu(this,this.l(),this.i()),Uu(this,this.i(),this.w),va(this.l())?this.i().focus():this.l().focus(),Pu.prototype.v.call(this)},Uc.prototype.o=function(){this.H=this.w=null,Pu.prototype.o.call(this)},N(Uc.prototype,{l:Oc,U:Dc,P:Pc,M:Fc,j:Bc,i:Tc,B:Cc,ea:Nc,u:Rc,ua:Sc,pa:Ac,ba:kc}),O(jc,Pu),jc.prototype.v=function(){this.i&&(this.u(this.i),this.l().focus()),jc.K.v.call(this)},jc.prototype.o=function(){this.i=null,jc.K.o.call(this)},N(jc.prototype,{l:Sc,w:Ac,u:kc}),O($c,jc),O(Vc,jc),O(Hc,jc),O(Wc,jc),O(Gc,jc),O(zc,jc),O(Kc,jc),O(qc,jc),O(Yc,jc),O(Zc,jc),O(Xc,jc),O(Jc,jc),u(pl,Pu),pl.prototype.v=function(){var e=this;iu(this,this.l(),(function(){e.i()})),this.l().focus(),Pu.prototype.v.call(this)},pl.prototype.o=function(){this.i=null,Pu.prototype.o.call(this)},N(pl.prototype,{l:Ac}),da.anonymousUserMismatch=function(e,t){var n=new pl((function(){n.m(),al(e,t)}));n.render(t),wd(e,n)},u(ml,Pu),ml.prototype.I=function(e,t,n,i){return e.apply(null,t).then(n,i)},da.callback=function(e,t,n){var i=new ml;i.render(t),wd(e,i),n=n||bd(e),Rd(e,n.then((function(t){gl(e,i,t)}),(function(n){if((n=Qc(n))&&("auth/account-exists-with-different-credential"==n.code||"auth/email-already-in-use"==n.code)&&n.email&&n.credential)os(new oo(n.email,n.credential),Id(e)),bl(e,i,n.email);else if(n&&"auth/user-cancelled"==n.code){var r=is(Id(e)),o=il(n);r&&r.a?bl(e,i,r.g,o):r?ul(e,i,r.g,o):yl(e,i,n)}else n&&"auth/credential-already-in-use"==n.code||(n&&"auth/operation-not-supported-in-this-environment"==n.code&&ol(e)?gl(e,i,{user:null,credential:null}):n&&"auth/admin-restricted-operation"==n.code&&Bs(Od(e))?(i.m(),rs(Id(e)),ha("handleUnauthorizedUser",e,t,null,null)):yl(e,i,n))})))},u(wl,Pu),wl.prototype.v=function(){var e=this;iu(this,this.l(),(function(){e.i()})),this.l().focus(),Pu.prototype.v.call(this)},wl.prototype.o=function(){this.i=null,Pu.prototype.o.call(this)},N(wl.prototype,{l:Ac}),da.differentDeviceError=function(e,t){var n=new wl((function(){n.m(),al(e,t)}));n.render(t),wd(e,n)},u(xl,Pu),xl.prototype.v=function(){var e=this;iu(this,Xa(this,"firebaseui-id-reset-password-link"),(function(){e.l()})),this.i&&(this.w(this.i),this.u().focus()),Pu.prototype.v.call(this)},xl.prototype.o=function(){this.l=this.i=null,Pu.prototype.o.call(this)},N(xl.prototype,{u:Sc,B:Ac,w:kc}),u(Tl,Pu),Tl.prototype.v=function(){this.H(),this.B(this.l),Uu(this,this.i(),this.l),this.i().focus(),Pu.prototype.v.call(this)},Tl.prototype.o=function(){this.l=null,Pu.prototype.o.call(this)},N(Tl.prototype,{i:_l,w:Sl,M:El,H:Al,u:kl,U:Sc,P:Ac,B:kc}),u(Cl,Pu),Cl.prototype.v=function(){var e=this;iu(this,Xa(this,"firebaseui-id-reset-password-link"),(function(){e.l()})),this.i&&(this.w(this.i),this.u().focus()),Pu.prototype.v.call(this)},Cl.prototype.o=function(){this.l=this.i=null,Pu.prototype.o.call(this)},N(Cl.prototype,{u:Sc,B:Ac,w:kc}),da.passwordReset=function(e,t,n,i){Rd(e,_d(e).verifyPasswordResetCode(n).then((function(r){var o=new Tl(r,(function(){!function(e,t,n,i,r){var o=n.u();o&&Rd(e,n.I(T(_d(e).confirmPasswordReset,_d(e)),[i,o],(function(){n.m();var i=new qc(r);i.render(t),wd(e,i)}),(function(i){Nl(e,t,n,i)})))}(e,t,o,n,i)}));o.render(t),wd(e,o)}),(function(){Nl(e,t)})))},da.emailChangeRevocation=function(e,t,n){var i=null;Rd(e,_d(e).checkActionCode(n).then((function(t){return i=t.data.email,_d(e).applyActionCode(n)})).then((function(){!function(e,t,n){var i=new xl(n,(function(){Rd(e,i.I(T(_d(e).sendPasswordResetEmail,_d(e)),[n],(function(){i.m(),(i=new $c(n,void 0,Hs(Od(e)),Ws(Od(e)))).render(t),wd(e,i)}),(function(){i.a(Nn().toString())})))}));i.render(t),wd(e,i)}(e,t,i)}),(function(){var n=new Zc;n.render(t),wd(e,n)})))},da.emailVerification=function(e,t,n,i){Rd(e,_d(e).applyActionCode(n).then((function(){var n=new Vc(i);n.render(t),wd(e,n)}),(function(){var n=new Hc;n.render(t),wd(e,n)})))},da.revertSecondFactorAddition=function(e,t,n){var i=null,r=null;Rd(e,_d(e).checkActionCode(n).then((function(t){return i=t.data.email,r=t.data.multiFactorInfo,_d(e).applyActionCode(n)})).then((function(){!function(e,t,n,i){var r=new Cl(i.factorId,(function(){r.I(T(_d(e).sendPasswordResetEmail,_d(e)),[n],(function(){r.m(),(r=new $c(n,void 0,Hs(Od(e)),Ws(Od(e)))).render(t),wd(e,r)}),(function(){r.a(Nn().toString())}))}),i.phoneNumber);r.render(t),wd(e,r)}(e,t,i,r)}),(function(){var n=new zc;n.render(t),wd(e,n)})))},da.verifyAndChangeEmail=function(e,t,n,i){var r=null;Rd(e,_d(e).checkActionCode(n).then((function(t){return r=t.data.email,_d(e).applyActionCode(n)})).then((function(){var n=new Wc(r,i);n.render(t),wd(e,n)}),(function(){var n=new Gc;n.render(t),wd(e,n)})))},u(Ll,Pu),Ll.prototype.v=function(){this.w(this.l),this.B(this.l,this.u),this.i().focus(),Rl(this.i(),(this.i().value||"").length),Pu.prototype.v.call(this)},Ll.prototype.o=function(){this.u=this.l=null,Pu.prototype.o.call(this)},N(Ll.prototype,{i:Oc,M:Dc,w:Pc,H:Fc,j:Bc,U:Sc,P:Ac,B:kc}),da.emailLinkConfirmation=function(e,t,n,i,r,o){var s=new Ll((function(){var r=s.j();r?(s.m(),i(e,t,r,n)):s.i().focus()}),(function(){s.m(),al(e,t,r||void 0)}),r||void 0,Hs(Od(e)),Ws(Od(e)));s.render(t),wd(e,s),o&&s.a(o)},u(Ml,Pu),Ml.prototype.v=function(){this.u(this.i),this.l().focus(),Pu.prototype.v.call(this)},Ml.prototype.o=function(){this.i=null,Pu.prototype.o.call(this)},N(Ml.prototype,{l:Sc,u:kc}),da.emailLinkNewDeviceLinking=function(e,t,n,i){var r=new $e(n);if(n=r.a.a.get(Ge.PROVIDER_ID)||null,He(r,null),n){var o=new Ml(Os(Od(e),n),(function(){o.m(),i(e,t,r.toString())}),Hs(Od(e)),Ws(Od(e)));o.render(t),wd(e,o)}else al(e,t)},u(Ol,Pu),da.emailLinkSignInCallback=Dl,u(Bl,Pu),Bl.prototype.v=function(){this.u(this.i),this.l().focus(),Pu.prototype.v.call(this)},Bl.prototype.o=function(){this.i=null,Pu.prototype.o.call(this)},N(Bl.prototype,{l:Sc,u:kc}),da.emailLinkSignInLinking=function(e,t,n){var i=is(Id(e));if(rs(Id(e)),i){var r=i.a.providerId,o=new Bl(n,Os(Od(e),r),(function(){!function(e,t,n,i){var r=Fu(t);ll(e,t,n,(function(){al(e,r,n)}),(function(i){if(!i.name||"cancel"!=i.name){var o=il(i);i&&"auth/network-request-failed"==i.code?t.a(o):(t.m(),al(e,r,n,o))}}),i)}(e,o,n,i)}),Hs(Od(e)),Ws(Od(e)));o.render(t),wd(e,o)}else al(e,t)},u(Ul,Pu),Ul.prototype.v=function(){var e=this;iu(this,this.l(),(function(){e.i()})),iu(this,Xa(this,"firebaseui-id-trouble-getting-email-link"),(function(){e.u()})),this.l().focus(),Pu.prototype.v.call(this)},Ul.prototype.o=function(){this.i=this.u=null,Pu.prototype.o.call(this)},N(Ul.prototype,{l:Ac}),da.emailLinkSignInSent=function(e,t,n,i,r){var o=new Ul(n,(function(){o.m(),ha("emailNotReceived",e,t,n,i,r)}),(function(){o.m(),i()}),Hs(Od(e)),Ws(Od(e)));o.render(t),wd(e,o)},u(jl,Pu),jl.prototype.v=function(){this.w(this.l,this.i),this.u().focus(),Pu.prototype.v.call(this)},jl.prototype.o=function(){this.i=null,Pu.prototype.o.call(this)},N(jl.prototype,{u:Sc,B:Ac,w:kc}),da.emailMismatch=function(e,t,n){var i=is(Id(e));if(i){var r=new jl(n.user.email,i.g,(function(){var t=r;rs(Id(e)),el(e,t,n)}),(function(){var t=n.credential.providerId,o=Fu(r);r.m(),i.a?ha("federatedLinking",e,o,i.g,t):ha("federatedSignIn",e,o,i.g,t)}),Hs(Od(e)),Ws(Od(e)));r.render(t),wd(e,r)}else al(e,t)},u($l,Pu),$l.prototype.v=function(){var e=this;iu(this,this.u(),(function(){e.i()})),iu(this,this.Da(),(function(){e.l()})),this.u().focus(),Pu.prototype.v.call(this)},$l.prototype.Da=function(){return Xa(this,"firebaseui-id-resend-email-link")},$l.prototype.o=function(){this.i=this.l=null,Pu.prototype.o.call(this)},N($l.prototype,{u:Ac}),da.emailNotReceived=function(e,t,n,i,r){var o=new $l((function(){ll(e,o,n,i,(function(e){e=il(e),o.a(e)}),r)}),(function(){o.m(),al(e,t,n)}),Hs(Od(e)),Ws(Od(e)));o.render(t),wd(e,o)},u(Vl,Pu),Vl.prototype.v=function(){this.u(this.i),this.l().focus(),Pu.prototype.v.call(this)},Vl.prototype.o=function(){this.i=null,Pu.prototype.o.call(this)},N(Vl.prototype,{l:Sc,u:kc}),da.federatedLinking=function(e,t,n,i,r){var o=is(Id(e));if(o&&o.a){var s=new Vl(n,Os(Od(e),i),(function(){rl(e,s,i,n)}),Hs(Od(e)),Ws(Od(e)));s.render(t),wd(e,s),r&&s.a(r)}else al(e,t)},da.federatedRedirect=function(e,t,n){var i=new Ol;i.render(t),wd(e,i),rl(e,i,t=Ms(Od(e))[0],n)},da.federatedSignIn=function(e,t,n,i,r){var o=new Vl(n,Os(Od(e),i),(function(){rl(e,o,i,n)}),Hs(Od(e)),Ws(Od(e)));o.render(t),wd(e,o),r&&o.a(r)},da.passwordLinking=function(e,t,n){var i=is(Id(e));rs(Id(e));var r=i&&i.a;if(r){var o=new Lc(n,(function(){!function(e,t,n,i){var r=t.u();r?Rd(e,t.I(T(e.Xb,e),[n,r],(function(n){return n=n.user.linkWithCredential(i).then((function(n){return el(e,t,{user:n.user,credential:i,operationType:n.operationType,additionalUserInfo:n.additionalUserInfo})})),Rd(e,n),n}),(function(e){if(!e.name||"cancel"!=e.name)switch(e.code){case"auth/wrong-password":eu(t.i(),!1),ou(t.B(),il(e));break;case"auth/too-many-requests":t.a(il(e));break;default:Yr("signInWithEmailAndPassword: "+e.message,void 0),t.a(il(e))}}))):t.i().focus()}(e,o,n,r)}),(function(){o.m(),ha("passwordRecovery",e,t,n)}),Hs(Od(e)),Ws(Od(e)));o.render(t),wd(e,o)}else al(e,t)},u(Hl,Pu),Hl.prototype.v=function(){this.B(),this.H(this.l,this.u),va(this.i())||this.i().focus(),Uu(this,this.i(),this.l),Pu.prototype.v.call(this)},Hl.prototype.o=function(){this.u=this.l=null,Pu.prototype.o.call(this)},N(Hl.prototype,{i:Oc,w:Dc,B:Pc,M:Fc,j:Bc,U:Sc,P:Ac,H:kc}),da.passwordRecovery=function(e,t,n,i,r){var o=new Hl((function(){!function(e,t){var n=t.j();if(n){var i=Fu(t);Rd(e,t.I(T(_d(e).sendPasswordResetEmail,_d(e)),[n],(function(){t.m();var r=new $c(n,(function(){r.m(),al(e,i)}),Hs(Od(e)),Ws(Od(e)));r.render(i),wd(e,r)}),(function(e){eu(t.i(),!1),ou(t.w(),il(e))})))}else t.i().focus()}(e,o)}),i?void 0:function(){o.m(),al(e,t)},n,Hs(Od(e)),Ws(Od(e)));o.render(t),wd(e,o),r&&o.a(r)},da.passwordSignIn=function(e,t,n,i){var r=new Uc((function(){!function(e,t){var n=t.j(),i=t.u();if(n)if(i){var r=s.default.auth.EmailAuthProvider.credential(n,i);Rd(e,t.I(T(e.bc,e),[n,i],(function(n){return el(e,t,{user:n.user,credential:r,operationType:n.operationType,additionalUserInfo:n.additionalUserInfo})}),(function(e){if(!e.name||"cancel"!=e.name)switch(e.code){case"auth/email-already-in-use":break;case"auth/email-exists":eu(t.l(),!1),ou(t.U(),il(e));break;case"auth/too-many-requests":case"auth/wrong-password":eu(t.i(),!1),ou(t.B(),il(e));break;default:Yr("verifyPassword: "+e.message,void 0),t.a(il(e))}})))}else t.i().focus();else t.l().focus()}(e,r)}),(function(){var n=r.M();r.m(),ha("passwordRecovery",e,t,n)}),n,Hs(Od(e)),Ws(Od(e)),i);r.render(t),wd(e,r)},u(zl,Pu),zl.prototype.v=function(){this.ea(),this.B&&this.Ja(),this.ua(),this.pa(this.w,this.H),this.B?(Bu(this,this.i(),this.u()),Bu(this,this.u(),this.l())):Bu(this,this.i(),this.l()),this.w&&Uu(this,this.l(),this.w),va(this.i())?this.B&&!va(this.u())?this.u().focus():this.l().focus():this.i().focus(),Pu.prototype.v.call(this)},zl.prototype.o=function(){this.H=this.w=null,Pu.prototype.o.call(this)},N(zl.prototype,{i:Oc,U:Dc,ea:Pc,jb:Fc,j:Bc,u:Wl,Bc:Gl,Ja:function(){var e=Wl.call(this),t=Gl.call(this);tu(this,e,(function(){su(t)&&(eu(e,!0),ru(t))}))},M:function(){var e=Wl.call(this),t=Gl.call(this),n=va(e);return eu(e,n=!/^[\s\xa0]*$/.test(null==n?"":String(n))),n?(ru(t),t=!0):(ou(t,dn("Enter your account name").toString()),t=!1),t?Z(va(e)):null},l:_l,ba:Sl,lb:El,ua:Al,P:kl,Nb:Sc,Mb:Ac,pa:kc}),da.passwordSignUp=function(e,t,n,i,r,o){var s=new zl(Gs(Od(e)),(function(){Kl(e,s)}),r?void 0:function(){s.m(),al(e,t)},n,i,Hs(Od(e)),Ws(Od(e)),o);s.render(t),wd(e,s)},u(Xl,Pu),Xl.prototype.v=function(){var e=this;this.U(this.jb),ri(this.i,"tick",this.w,!1,this),this.i.start(),iu(this,Xa(this,"firebaseui-id-change-phone-number-link"),(function(){e.P()})),iu(this,this.Da(),(function(){e.M()})),this.Ja(this.l),this.ea(this.l,this.H),this.u().focus(),Pu.prototype.v.call(this)},Xl.prototype.o=function(){this.M=this.H=this.l=this.P=null,Ta(this.i),ai(this.i,"tick",this.w),this.i=null,Pu.prototype.o.call(this)},Xl.prototype.w=function(){--this.B,0<this.B?this.U(this.B):(Ta(this.i),ai(this.i,"tick",this.w),this.ua(),this.lb())},N(Xl.prototype,{u:ql,pa:Yl,Ja:function(e){var t=ql.call(this),n=Yl.call(this);tu(this,t,(function(){su(n)&&(eu(t,!0),ru(n))})),e&&nu(this,t,(function(){e()}))},ba:function(){var e=Z(va(ql.call(this))||"");return/^\d{6}$/.test(e)?e:null},Fb:Zl,U:function(e){Yt(Zl.call(this),dn("Resend code in "+(9<e?"0:":"0:0")+e).toString())},ua:function(){ru(this.Fb())},Da:function(){return Xa(this,"firebaseui-id-resend-link")},lb:function(){ou(this.Da())},Nb:Sc,Mb:Ac,ea:kc}),da.phoneSignInFinish=function(e,t,n,i,r,o){var s=new Xl((function(){s.m(),ha("phoneSignInStart",e,t,n)}),(function(){!function(e,t,n,i){function r(e){t.u().focus(),eu(t.u(),!1),ou(t.pa(),e)}var o=t.ba();o?(t.$("mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active firebaseui-progress-dialog-loading-icon",dn("Verifying...").toString()),Rd(e,t.I(T(i.confirm,i),[o],(function(n){t.h(),t.$("firebaseui-icon-done",dn("Verified!").toString());var i=setTimeout((function(){t.h(),t.m();var i={user:Ed(e).currentUser,credential:null,operationType:n.operationType,additionalUserInfo:n.additionalUserInfo};el(e,t,i,!0)}),1e3);Rd(e,(function(){t&&t.h(),clearTimeout(i)}))}),(function(i){if(i.name&&"cancel"==i.name)t.h();else{var o=Qc(i);switch(i=il(o),o.code){case"auth/credential-already-in-use":t.h();break;case"auth/code-expired":o=Fu(t),t.h(),t.m(),ha("phoneSignInStart",e,o,n,i);break;case"auth/missing-verification-code":case"auth/invalid-verification-code":t.h(),r(i);break;default:t.h(),t.a(i)}}})))):r(dn("Wrong code. Try again.").toString())}(e,s,n,r)}),(function(){s.m(),al(e,t)}),(function(){s.m(),ha("phoneSignInStart",e,t,n)}),Ss(n),i,Hs(Od(e)),Ws(Od(e)));s.render(t),wd(e,s),o&&s.a(o)};var Jl=!(et||qe("Safari")&&!(Ye()||qe("Coast")||qe("Opera")||qe("Edge")||qe("Firefox")||qe("FxiOS")||qe("Silk")||qe("Android")));function Ql(e,t){return/-[a-z]/.test(t)?null:Jl&&e.dataset?!qe("Android")||Ye()||qe("Firefox")||qe("FxiOS")||qe("Opera")||qe("Silk")||t in e.dataset?void 0===(e=e.dataset[t])?null:e:null:e.getAttribute("data-"+String(t).replace(/([A-Z])/g,"-$1").toLowerCase())}function ed(e,t,n){var i=this;e=rn(xu,{items:e},null,this.s),Tu.call(this,e,!0,!0),n&&(n=function(e,t){e=(e||document).getElementsByTagName("BUTTON");for(var n=0;n<e.length;n++)if(Ql(e[n],"listboxid")===t)return e[n];return null}(e,n))&&(n.focus(),function(e,t){var n=(t=t||zt(document))||zt(document),i=za(e),r=za(n);if(!et||9<=Number(dt)){s=Wa(n,"borderLeftWidth");var o=Wa(n,"borderRightWidth");a=Wa(n,"borderTopWidth"),u=Wa(n,"borderBottomWidth"),o=new Ha(parseFloat(a),parseFloat(o),parseFloat(u),parseFloat(s))}else{var s=qa(n,"borderLeft");o=qa(n,"borderRight");var a=qa(n,"borderTop"),u=qa(n,"borderBottom");o=new Ha(a,o,u,s)}n==zt(document)?(s=i.a-n.scrollLeft,i=i.g-n.scrollTop,!et||10<=Number(dt)||(s+=o.left,i+=o.top)):(s=i.a-r.a-o.left,i=i.g-r.g-o.top),r=e.offsetWidth,o=e.offsetHeight,a=rt&&!r&&!o,e=f(r)&&!a||!e.getBoundingClientRect?new jt(r,o):new jt((e=Ga(e)).right-e.left,e.bottom-e.top),r=n.clientHeight-e.height,o=n.scrollLeft,a=n.scrollTop,n=new Ut(o+=Math.min(s,Math.max(s-(n.clientWidth-e.width),0)),a+=Math.min(i,Math.max(i-r,0))),t.scrollLeft=n.a,t.scrollTop=n.g}(n,e)),iu(this,e,(function(e){(e=(e=Zt(e.target,"firebaseui-id-list-box-dialog-button"))&&Ql(e,"listboxid"))&&(Cu.call(i),t(e))}))}function td(){return Xa(this,"firebaseui-id-phone-number")}function nd(){return Xa(this,"firebaseui-id-country-selector")}function id(){return Xa(this,"firebaseui-id-phone-number-error")}function rd(e,t){var n=e.a,i=od("1-US-0",n),r=null;if(!(r=t&&od(t,n)?t:i?"1-US-0":0<n.length?n[0].c:null))throw Error("No available default country");ud.call(this,r,e)}function od(e,t){return!(!(e=vs(e))||!H(t,e))}function sd(e){return"firebaseui-flag-"+e.f}function ad(e){var t=this;ed.call(this,function(e){return e.map((function(e){return{id:e.c,Ma:"firebaseui-flag "+sd(e),label:e.name+" ‎+"+e.b}}))}(e.a),(function(n){ud.call(t,n,e,!0),t.O().focus()}),this.Ba)}function ud(e,t,n){var i=vs(e);i&&(n&&((t=gs(t,n=Z(va(td.call(this))||""))).length&&t[0].b!=i.b&&(n="+"+i.b+n.substr(t[0].b.length+1),ya(td.call(this),n))),t=vs(this.Ba),this.Ba=e,e=Xa(this,"firebaseui-id-country-selector-flag"),t&&ga(e,sd(t)),ma(e,sd(i)),Yt(Xa(this,"firebaseui-id-country-selector-code"),"‎+"+i.b))}function cd(e,t,n,i,r,o,s,a,u,c){Pu.call(this,wc,{Gb:t,Aa:u||null,Va:!!n,ia:!!o},c,"phoneSignInStart",{F:i,D:r}),this.H=a||null,this.M=t,this.l=e,this.w=n||null,this.pa=s||null}function ld(e,t,n,i){try{var r=t.U(ta)}catch(e){return}r?Qs?(t.$("mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active firebaseui-progress-dialog-loading-icon",dn("Verifying...").toString()),Rd(e,t.I(T(e.cc,e),[Ss(r),n],(function(n){var i=Fu(t);t.$("firebaseui-icon-done",dn("Code sent!").toString());var o=setTimeout((function(){t.h(),t.m(),ha("phoneSignInFinish",e,i,r,15,n)}),1e3);Rd(e,(function(){t&&t.h(),clearTimeout(o)}))}),(function(n){if(t.h(),!n.name||"cancel"!=n.name){grecaptcha.reset(na),Qs=null;var i=n&&n.message||"";if(n.code)switch(n.code){case"auth/too-many-requests":i=dn("This phone number has been used too many times").toString();break;case"auth/invalid-phone-number":case"auth/missing-phone-number":return t.O().focus(),void ou(t.B(),Cn().toString());case"auth/admin-restricted-operation":if(Bs(Od(e)))return n=Fu(t),t.m(),void ha("handleUnauthorizedUser",e,n,Ss(r),s.default.auth.PhoneAuthProvider.PROVIDER_ID);i=il(n);break;default:i=il(n)}t.a(i)}})))):ea?ou(t.u(),dn("Solve the reCAPTCHA").toString()):!ea&&i&&t.i().click():(t.O().focus(),ou(t.B(),Cn().toString()))}function dd(e,t,n,i,r){Pu.call(this,bc,{Sb:t},r,"providerSignIn",{F:n,D:i}),this.i=e}function hd(e,t,n,i,r,o,s){Pu.call(this,ju,{email:n,Va:!!t,ia:!!o},s,"signIn",{F:i,D:r}),this.i=e,this.u=t}function fd(e,t,n,i,r,o,s){Pu.call(this,ic,{kc:e,yb:n,Eb:!!i},s,"unauthorizedUser",{F:r,D:o}),this.l=t,this.i=i}function pd(e,t,n,i,r,o){Pu.call(this,rc,{email:e},o,"unsupportedProvider",{F:i,D:r}),this.l=t,this.i=n}function md(e,t){this.$=!1;var n=yd(t);if(vd[n])throw Error('An AuthUI instance already exists for the key "'+n+'"');vd[n]=this,this.a=e,this.u=null,this.Y=!1,gd(this.a),this.h=s.default.initializeApp({apiKey:e.app.options.apiKey,authDomain:e.app.options.authDomain},e.app.name+"-firebaseui-temp").auth(),(e=e.emulatorConfig)&&(n=e.port,this.h.useEmulator(e.protocol+"://"+e.host+(null===n?"":":"+n),e.options)),gd(this.h),this.h.setPersistence&&this.h.setPersistence(s.default.auth.Auth.Persistence.SESSION),this.oa=t,this.ca=new Cs,this.g=this.T=this.i=this.J=this.O=null,this.s=[],this.Z=!1,this.l=Ar.Xa(),this.j=this.C=null,this.da=this.A=!1}function gd(e){e&&e.INTERNAL&&e.INTERNAL.logFramework&&e.INTERNAL.logFramework("FirebaseUI-web")}u(cd,Pu),cd.prototype.v=function(){this.ea(this.pa,this.H),this.P(this.l,this.w||void 0),this.M||Bu(this,this.O(),this.i()),Uu(this,this.i(),this.l),this.O().focus(),Rl(this.O(),(this.O().value||"").length),Pu.prototype.v.call(this)},cd.prototype.o=function(){this.w=this.l=null,Pu.prototype.o.call(this)},N(cd.prototype,{Cb:Nu,O:td,B:id,ea:function(e,t,n){var i=this,r=td.call(this),o=nd.call(this),s=id.call(this),a=e||_s,u=a.a;if(0==u.length)throw Error("No available countries provided.");rd.call(i,a,t),iu(this,o,(function(){ad.call(i,a)})),tu(this,r,(function(){su(s)&&(eu(r,!0),ru(s));var e=Z(va(r)||""),t=vs(this.Ba),n=gs(a,e);e=od("1-US-0",u),n.length&&n[0].b!=t.b&&(t=n[0],ud.call(i,"1"==t.b&&e?"1-US-0":t.c,a))})),n&&nu(this,r,(function(){n()}))},U:function(e){var t=Z(va(td.call(this))||""),n=(e=e||_s).a,i=gs(_s,t);if(i.length&&!H(n,i[0]))throw ya(td.call(this)),td.call(this).focus(),ou(id.call(this),dn("The country code provided is not supported.").toString()),Error("The country code provided is not supported.");return n=vs(this.Ba),i.length&&i[0].b!=n.b&&ud.call(this,i[0].c,e),i.length&&(t=t.substr(i[0].b.length+1)),t?new Es(this.Ba,t):null},Ja:nd,ba:function(){return Xa(this,"firebaseui-recaptcha-container")},u:function(){return Xa(this,"firebaseui-id-recaptcha-error")},i:Sc,ua:Ac,P:kc}),da.phoneSignInStart=function(e,t,n,i){var r=function(e){var t=null;if(Rs(e).forEach((function(e){e.provider==s.default.auth.PhoneAuthProvider.PROVIDER_ID&&E(e.recaptchaParameters)&&!Array.isArray(e.recaptchaParameters)&&(t=ae(e.recaptchaParameters))})),t){var n=[];la.forEach((function(e){void 0!==t[e]&&(n.push(e),delete t[e])})),n.length&&Qr('The following provided "recaptchaParameters" keys are not allowed: '+n.join(", "))}return t}(Od(e))||{};Qs=null,ea=!(r&&"invisible"===r.size);var o=sl(e),a=function(e){var t=(e=Ls(e,s.default.auth.PhoneAuthProvider.PROVIDER_ID))&&e.defaultCountry||null;t=t&&ys(t);var n=null;return e&&"string"==typeof e.loginHint&&(n=Is(e.loginHint)),t&&t[0]||n&&vs(n.a)||null}(Od(e)),u=o?function(e){var t=null;return(e=Ls(e,s.default.auth.PhoneAuthProvider.PROVIDER_ID))&&"string"==typeof e.loginHint&&(t=Is(e.loginHint)),e&&e.defaultNationalNumber||t&&t.Aa||null}(Od(e)):null;a=n&&n.a||a&&a.c||null,n=n&&n.Aa||u,(u=$s(Od(e)))&&ws(u),ta=u?new ms($s(Od(e))):_s;var c=new cd((function(t){ld(e,c,l,!(!t||!t.keyCode))}),ea,o?null:function(){l.clear(),c.m(),al(e,t)},Hs(Od(e)),Ws(Od(e)),o,ta,a,n);c.render(t),wd(e,c),i&&c.a(i),r.callback=function(t){c.u()&&ru(c.u()),Qs=t,ea||ld(e,c,l)},r["expired-callback"]=function(){Qs=null};var l=new s.default.auth.RecaptchaVerifier(ea?c.ba():c.i(),r,Ed(e).app);Rd(e,c.I(T(l.render,l),[],(function(e){na=e}),(function(n){n.name&&"cancel"==n.name||(n=il(n),c.m(),al(e,t,void 0,n))})))},da.prefilledEmailSignIn=function(e,t,n){var i=new Ol;i.render(t),wd(e,i),Rd(e,i.I(T(_d(e).fetchSignInMethodsForEmail,_d(e)),[n],(function(r){i.m();var o=!(!ol(e)||!Sd(e));cl(e,t,r,n,void 0,o)}),(function(r){r=il(r),i.m(),ha("signIn",e,t,n,r)})))},u(dd,Pu),dd.prototype.v=function(){this.l(this.i),Pu.prototype.v.call(this)},dd.prototype.o=function(){this.i=null,Pu.prototype.o.call(this)},N(dd.prototype,{l:function(e){function t(t){e(t)}for(var n=this.g?Vt("firebaseui-id-idp-button",this.g||this.s.a):[],i=0;i<n.length;i++){var r=n[i];iu(this,r,C(t,Ql(r,"providerId")))}}}),da.providerSignIn=function(e,t,n,i){var r=new dd((function(n){n==s.default.auth.EmailAuthProvider.PROVIDER_ID?(r.m(),dl(e,t,i)):n==s.default.auth.PhoneAuthProvider.PROVIDER_ID?(r.m(),ha("phoneSignInStart",e,t)):"anonymous"==n?function(e,t){Rd(e,t.I(T(e.$b,e),[],(function(n){return t.m(),el(e,t,n,!0)}),(function(e){e.name&&"cancel"==e.name||(Yr("ContinueAsGuest: "+e.code,void 0),e=il(e),t.a(e))})))}(e,r):rl(e,r,n,i),Dd(e),e.l.cancel()}),Ds(Od(e)),Hs(Od(e)),Ws(Od(e)));r.render(t),wd(e,r),n&&r.a(n),function(e){Dd(e);try{kr(e.l,Ps(Od(e)),function(e){var t;return Dd(e),(t=e.Z)||(e=js(e=Od(e),s.default.auth.GoogleAuthProvider.PROVIDER_ID),t=!(!e||"select_account"!==e.prompt)),t}(e)).then((function(t){return!!e.g&&function(e,t,n){if(n&&n.credential&&n.clientId===Ps(Od(e))){if(Us(Od(e),s.default.auth.GoogleAuthProvider.PROVIDER_ID).length){try{var i=JSON.parse(atob(n.credential.split(".")[1])).email}catch(r){}return rl(e,t,s.default.auth.GoogleAuthProvider.PROVIDER_ID,i),zi(!0)}return r=s.default.auth.GoogleAuthProvider.credential(n.credential),o=!1,r=t.I(T(e.ac,e),[r],(function(n){var i=Fu(t);t.m(),ha("callback",e,i,zi(n)),o=!0}),(function(n){if(!(n.name&&"cancel"==n.name||n&&"auth/credential-already-in-use"==n.code))if(n&&"auth/email-already-in-use"==n.code&&n.email&&n.credential){var i=Fu(t);t.m(),ha("callback",e,i,Ki(n))}else n&&"auth/admin-restricted-operation"==n.code&&Bs(Od(e))?(n=Fu(t),t.m(),ha("handleUnauthorizedUser",e,n,null,s.default.auth.GoogleAuthProvider.PROVIDER_ID)):(n=il(n),t.a(n))})),Rd(e,r),r.then((function(){return o}),(function(){return!1}))}var r,o;return n&&t.a(dn("The selected credential for the authentication provider is not supported!").toString()),zi(!1)}(e,e.g,t)}))}catch(e){}}(e)},da.sendEmailLinkForSignIn=function(e,t,n,i){var r=new ml;r.render(t),wd(e,r),ll(e,r,n,i,(function(i){r.m(),i&&"auth/admin-restricted-operation"==i.code&&Bs(Od(e))?ha("handleUnauthorizedUser",e,t,n,s.default.auth.EmailAuthProvider.PROVIDER_ID):(i=il(i),ha("signIn",e,t,n,i))}))},u(hd,Pu),hd.prototype.v=function(){this.w(this.i),this.B(this.i,this.u||void 0),this.l().focus(),Rl(this.l(),(this.l().value||"").length),Pu.prototype.v.call(this)},hd.prototype.o=function(){this.u=this.i=null,Pu.prototype.o.call(this)},N(hd.prototype,{l:Oc,M:Dc,w:Pc,H:Fc,j:Bc,U:Sc,P:Ac,B:kc}),da.signIn=function(e,t,n,i){var r=ol(e),o=new hd((function(){var t=o,n=t.j()||"";n&&ul(e,t,n)}),r?null:function(){o.m(),al(e,t,n)},n,Hs(Od(e)),Ws(Od(e)),r);o.render(t),wd(e,o),i&&o.a(i)},u(fd,Pu),fd.prototype.v=function(){var e=this,t=Xa(this,"firebaseui-id-unauthorized-user-help-link");this.i&&t&&iu(this,t,(function(){e.i()})),iu(this,this.u(),(function(){e.l()})),this.u().focus(),Pu.prototype.v.call(this)},fd.prototype.o=function(){this.i=this.l=null,Pu.prototype.o.call(this)},N(fd.prototype,{u:Ac}),da.handleUnauthorizedUser=function(e,t,n,i){function r(){al(e,t)}i===s.default.auth.EmailAuthProvider.PROVIDER_ID?r=function(){dl(e,t)}:i===s.default.auth.PhoneAuthProvider.PROVIDER_ID&&(r=function(){ha("phoneSignInStart",e,t)});var o=null,a=null;i===s.default.auth.EmailAuthProvider.PROVIDER_ID&&Fs(Od(e))?(o=function(e){return(e=Ls(e,s.default.auth.EmailAuthProvider.PROVIDER_ID))&&e.disableSignUp&&e.disableSignUp.adminEmail||null}(Od(e)),a=function(e){if((e=Ls(e,s.default.auth.EmailAuthProvider.PROVIDER_ID))&&e.disableSignUp){var t=e.disableSignUp.helpLink||null;if(t&&"string"==typeof t)return function(){sr(t)}}return null}(Od(e))):Bs(Od(e))&&(o=function(e){return(e=e.a.get("adminRestrictedOperation"))&&e.adminEmail?e.adminEmail:null}(Od(e)),a=function(e){if(e=e.a.get("adminRestrictedOperation")||null){var t=e.helpLink||null;if(t&&"string"==typeof t)return function(){sr(t)}}return null}(Od(e)));var u=new fd(n,(function(){u.m(),r()}),o,a,Hs(Od(e)),Ws(Od(e)));u.render(t),wd(e,u)},u(pd,Pu),pd.prototype.v=function(){this.w(this.l,this.i),this.u().focus(),Pu.prototype.v.call(this)},pd.prototype.o=function(){this.i=this.l=null,Pu.prototype.o.call(this)},N(pd.prototype,{u:Sc,B:Ac,w:kc}),da.unsupportedProvider=function(e,t,n){var i=new pd(n,(function(){i.m(),ha("passwordRecovery",e,t,n)}),(function(){i.m(),al(e,t,n)}),Hs(Od(e)),Ws(Od(e)));i.render(t),wd(e,i)};var vd={};function yd(e){return e||"[DEFAULT]"}function bd(e){return Dd(e),e.i||(e.i=Cd(e,(function(t){return t&&!is(Id(e))?zi(Ed(e).getRedirectResult().then((function(e){return e}),(function(t){if(t&&"auth/email-already-in-use"==t.code&&t.email&&t.credential)throw t;return Bd(e,t)}))):zi(_d(e).getRedirectResult().then((function(t){return Ns(Od(e))&&!t.user&&e.j&&!e.j.isAnonymous?Ed(e).getRedirectResult():t})))}))),e.i}function wd(e,t){Dd(e),e.g=t}var xd=null;function _d(e){return Dd(e),e.h}function Ed(e){return Dd(e),e.a}function Id(e){return Dd(e),e.oa}function Sd(e){return Dd(e),e.O?e.O.emailHint:void 0}function Ad(e){return"signIn"===((e=new $e(e)).a.a.get(Ge.ub)||null)&&!!e.a.a.get(Ge.$a)}function kd(e,t,n,i){Dd(e),void 0!==e.a.languageCode&&(e.u=e.a.languageCode);var r="en".replace(/_/g,"-");e.a.languageCode=r,e.h.languageCode=r,e.Y=!0,void 0!==e.a.tenantId&&(e.h.tenantId=e.a.tenantId),e.ib(n),e.O=i||null;var o=h.document;e.C?e.C.then((function(){"complete"==o.readyState?Td(e,t):si(window,"load",(function(){Td(e,t)}))})):"complete"==o.readyState?Td(e,t):si(window,"load",(function(){Td(e,t)}))}function Td(e,t){var n=ar(t,"Could not find the FirebaseUI widget element on the page.");if(n.setAttribute("lang","en".replace(/_/g,"-")),xd){var i=xd;Dd(i),is(Id(i))&&Qr("UI Widget is already rendered on the page and is pending some user interaction. Only one widget instance can be rendered per page. The previous instance has been automatically reset."),xd.reset()}if(xd=e,e.T=n,function(e,t){e.L=null,e.J=new Ii(t),e.J.register(),ri(e.J,"pageEnter",(function(t){if(t=t&&t.pageId,e.L!=t){var n=Od(e);(n=Js(n).uiChanged||null)&&n(e.L,t),e.L=t}}))}(e,n),Vo(new Ho)&&Vo(new Wo)){t=ar(t,"Could not find the FirebaseUI widget element on the page."),n=(n=we(n=ur(),i=ls(Od(e).a,"queryParameterForSignInSuccessUrl")))?_t(It(n)).toString():null;e:{i=ur();var r=Vs(Od(e));for(o in i=we(i,r)||"",ua)if(ua[o].toLowerCase()==i.toLowerCase()){var o=ua[o];break e}o="callback"}switch(o){case"callback":n&&(o=Id(e),ts(Zo,n,o)),e.nb()?ha("callback",e,t):al(e,t,Sd(e));break;case"resetPassword":ha("passwordReset",e,t,hl(),fl());break;case"recoverEmail":ha("emailChangeRevocation",e,t,hl());break;case"revertSecondFactorAddition":ha("revertSecondFactorAddition",e,t,hl());break;case"verifyEmail":ha("emailVerification",e,t,hl(),fl());break;case"verifyAndChangeEmail":ha("verifyAndChangeEmail",e,t,hl(),fl());break;case"signIn":ha("emailLinkSignInCallback",e,t,ur()),Pd();break;case"select":n&&(o=Id(e),ts(Zo,n,o)),al(e,t);break;default:throw Error("Unhandled widget operation.")}(t=Js(t=Od(e)).uiShown||null)&&t()}else t=ar(t,"Could not find the FirebaseUI widget element on the page."),(o=new Jc(dn("The browser you are using does not support Web Storage. Please try again in a different browser.").toString())).render(t),wd(e,o);t=e.g&&"blank"==e.g.Ga&&Ks(Od(e)),ss(Id(e))&&!t&&(Md(e,(t=ss(Id(e))).a),es(Yo,Id(e)))}function Cd(e,t){if(e.A)return t(Nd(e));if(Rd(e,(function(){e.A=!1})),Ns(Od(e))){var n=new Ui((function(n){Rd(e,e.a.onAuthStateChanged((function(i){e.j=i,e.A||(e.A=!0,n(t(Nd(e))))})))}));return Rd(e,n),n}return e.A=!0,t(null)}function Nd(e){return Dd(e),Ns(Od(e))&&e.j&&e.j.isAnonymous?e.j:null}function Rd(e,t){if(Dd(e),t){e.s.push(t);var n=function(){z(e.s,(function(e){return e==t}))};"function"!=typeof t&&t.then(n,n)}}function Ld(e){void 0!==e.a.languageCode&&e.Y&&(e.Y=!1,e.a.languageCode=e.u)}function Md(e,t){e.a.tenantId=t,e.h.tenantId=t}function Od(e){return Dd(e),e.ca}function Dd(e){if(e.$)throw Error("AuthUI instance is deleted!")}function Pd(){var e=ur();if(Ad(e)){for(var t in e=new $e(e),Ge)Ge.hasOwnProperty(t)&&Fe(e.a.a,Ge[t]);t={state:"signIn",mode:"emailLink",operation:"clear"};var n=h.document.title;h.history&&h.history.replaceState&&h.history.replaceState(t,n,e.toString())}}function Fd(e){return Dd(e),_d(e).signOut()}function Bd(e,t,n){if(Dd(e),t&&t.code&&("auth/email-already-in-use"==t.code||"auth/credential-already-in-use"==t.code)){var i=Xs(Od(e));return zi().then((function(){return i(new Dn("anonymous-upgrade-merge-conflict",null,n||t.credential))})).then((function(){throw e.g&&(e.g.m(),e.g=null),t}))}return Ki(t)}function Ud(e,t,n,i){Pu.call(this,Ic,void 0,i,"providerMatchByEmail",{F:t,D:n}),this.i=e}function jd(e,t,n,i,r){Pu.call(this,Ec,{ec:t},r,"selectTenant",{F:n,D:i}),this.i=e}function $d(e){Pu.call(this,zu,void 0,e,"spinner")}function Vd(e){for(var t in this.a=new as,us(this.a,"authDomain"),us(this.a,"displayMode",Zd),us(this.a,"tenants"),us(this.a,"callbacks"),us(this.a,"tosUrl"),us(this.a,"privacyPolicyUrl"),e)if(e.hasOwnProperty(t))try{cs(this.a,t,e[t])}catch(e){Yr('Invalid config: "'+t+'"',void 0)}}function Hd(e){return e.a.get("callbacks")||{}}function Wd(e){var t=e.a.get("tosUrl")||null;if(e=e.a.get("privacyPolicyUrl")||null,t&&!e&&Qr("Privacy Policy URL is missing, the link will not be displayed."),t&&e){if("function"==typeof t)return t;if("string"==typeof t)return function(){sr(t)}}return null}function Gd(e){var t=e.a.get("tosUrl")||null,n=e.a.get("privacyPolicyUrl")||null;if(n&&!t&&Qr("Terms of Service URL is missing, the link will not be displayed."),t&&n){if("function"==typeof n)return n;if("string"==typeof n)return function(){sr(n)}}return null}function zd(e,t){if(!(e=e.a.get("tenants"))||!e.hasOwnProperty(t)&&!e.hasOwnProperty(Jd))throw Error("Invalid tenant configuration!")}function Kd(e,t,n){if(!(e=e.a.get("tenants")))throw Error("Invalid tenant configuration!");var i=[];if(!(e=e[t]||e[Jd]))return Yr("Invalid tenant configuration: "+t+" is not configured!",void 0),i;if(!(t=e.signInOptions))throw Error("Invalid tenant configuration: signInOptions are invalid!");return t.forEach((function(e){if("string"==typeof e)i.push(e);else if("string"==typeof e.provider){var t=e.hd;t&&n?(t instanceof RegExp?t:new RegExp("@"+t.replace(".","\\.")+"$")).test(n)&&i.push(e.provider):i.push(e.provider)}else Yr(e="Invalid tenant configuration: signInOption "+JSON.stringify(e)+" is invalid!",void 0)})),i}function qd(e,t,n){return e=function(e,t){var n=Yd,i=void 0===i?{}:i;return zd(e,t),function(e,t,n){return n=void 0===n?{}:n,Object.keys(e).filter((function(e){return t.includes(e)})).reduce((function(t,n){return t[n]=e[n],t}),n)}((e=e.a.get("tenants"))[t]||e[Jd],n,i)}(e,t),(t=e.signInOptions)&&n&&(t=t.filter((function(e){return"string"==typeof e?n.includes(e):n.includes(e.provider)})),e.signInOptions=t),e}(e=md.prototype).nb=function(){return Dd(this),!!ss(Id(this))||Ad(ur())},e.start=function(e,t){kd(this,e,t)},e.Db=function(){Dd(this),this.Z=!0},e.reset=function(){Dd(this);var e=this;this.T&&this.T.removeAttribute("lang"),this.J&&_i(this.J),Ld(this),this.O=null,Pd(),es(Yo,Id(this)),Dd(this),this.l.cancel(),this.i=zi({user:null,credential:null}),xd==this&&(xd=null),this.T=null;for(var t=0;t<this.s.length;t++)"function"==typeof this.s[t]?this.s[t]():this.s[t].cancel&&this.s[t].cancel();this.s=[],rs(Id(this)),this.g&&(this.g.m(),this.g=null),this.L=null,this.h&&(this.C=Fd(this).then((function(){e.C=null}),(function(){e.C=null})))},e.ib=function(e){Dd(this);var t,n=this.ca;for(t in e)try{cs(n.a,t,e[t])}catch(e){Yr('Invalid config: "'+t+'"',void 0)}ot&&cs(n.a,"popupMode",!1),$s(n),!this.da&&Ys(Od(this))&&(Qr("signInSuccess callback is deprecated. Please use signInSuccessWithAuthResult callback instead."),this.da=!0)},e.Wb=function(){Dd(this);var e=Od(this),t=ls(e.a,"widgetUrl");e=Vs(e);for(var n,i=t.search(be),r=0,o=[];0<=(n=ye(t,r,e,i));)o.push(t.substring(r,n)),r=Math.min(t.indexOf("&",n)+1||i,i);o.push(t.substr(r)),t=o.join("").replace(xe,"$1"),(e+=i="="+encodeURIComponent("select"))?(0>(i=t.indexOf("#"))&&(i=t.length),0>(r=t.indexOf("?"))||r>i?(r=i,n=""):n=t.substring(r+1,i),i=(t=[t.substr(0,r),n,t.substr(i)])[1],t[1]=e?i?i+"&"+e:e:i,i=t[0]+(t[1]?"?"+t[1]:"")+t[2]):i=t,Od(this).a.get("popupMode")?(i=i||"about:blank",(e={width:500,height:600,top:0<(e=(window.screen.availHeight-600)/2)?e:0,left:0<(t=(window.screen.availWidth-500)/2)?t:0,location:!0,resizable:!0,statusbar:!0,toolbar:!1}).target=e.target||i.target||"google_popup",e.width=e.width||690,e.height=e.height||500,(e=rr(i,e))&&e.focus()):Bt(window.location,i)},e.Wa=function(){var e=this;return Dd(this),this.h.app.delete().then((function(){var t=yd(Id(e));delete vd[t],e.reset(),e.$=!0}))},e.Ib=function(e,t){Dd(this);var n=this,i=function(){for(var e=32,t=[];0<e;)t.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62*Math.random()))),e--;return t.join("")}();if(!zs(Od(this)))return Ki(Error("Email link sign-in should be enabled to trigger email sending."));var r=function(e){if(zs(e)){var t={url:ur(),handleCodeInApp:!0};(e=Ls(e,s.default.auth.EmailAuthProvider.PROVIDER_ID))&&"function"==typeof e.emailLinkSignIn&&ce(t,e.emailLinkSignIn()),e=t.url;var n=ur();n instanceof _e||(n=Ae(n)),e instanceof _e||(e=Ae(e));var i=n;n=new _e(i);var r=!!e.j;r?Ee(n,e.j):r=!!e.A,r?n.A=e.A:r=!!e.h,r?n.h=e.h:r=null!=e.C;var o=e.g;if(r)Ie(n,e.C);else if(r=!!e.g)if("/"!=o.charAt(0)&&(i.h&&!i.g?o="/"+o:-1!=(i=n.g.lastIndexOf("/"))&&(o=n.g.substr(0,i+1)+o)),".."==o||"."==o)o="";else if(-1!=o.indexOf("./")||-1!=o.indexOf("/.")){i=0==o.lastIndexOf("/",0),o=o.split("/");for(var a=[],u=0;u<o.length;){var c=o[u++];"."==c?i&&u==o.length&&a.push(""):".."==c?((1<a.length||1==a.length&&""!=a[0])&&a.pop(),i&&u==o.length&&a.push("")):(a.push(c),i=!0)}o=a.join("/")}return r?n.g=o:r=""!==e.a.toString(),r?Se(n,Ue(e.a)):r=!!e.s,r&&(n.s=e.s),t.url=n.toString(),t}return null}(Od(this)),o=new $e(r.url);return function(e,t){t?e.a.a.set(Ge.Sa,t):Fe(e.a.a,Ge.Sa)}(o,i),t&&t.a&&(function(e,t,n){ts(Jo,No(e,JSON.stringify(so(t))),n)}(i,t,Id(this)),He(o,t.a.providerId)),function(e,t){null!==t?e.a.a.set(Ge.Qa,t?"1":"0"):Fe(e.a.a,Ge.Qa)}(o,function(e){return!(!(e=Ls(e,s.default.auth.EmailAuthProvider.PROVIDER_ID))||!e.forceSameDevice)}(Od(this))),Cd(this,(function(t){return t&&((t=t.uid)?o.a.a.set(Ge.Pa,t):Fe(o.a.a,Ge.Pa)),r.url=o.toString(),_d(n).sendSignInLinkToEmail(e,r)})).then((function(){var t=Id(n),r={};r.email=e,ts(Xo,No(i,JSON.stringify(r)),t)}),(function(e){throw es(Jo,Id(n)),es(Xo,Id(n)),e}))},e.bc=function(e,t){Dd(this);var n=this;return _d(this).signInWithEmailAndPassword(e,t).then((function(i){return Cd(n,(function(r){return r?Fd(n).then((function(){return Bd(n,{code:"auth/email-already-in-use"},s.default.auth.EmailAuthProvider.credential(e,t))})):i}))}))},e.Yb=function(e,t){Dd(this);var n=this;return Cd(this,(function(i){if(i){var r=s.default.auth.EmailAuthProvider.credential(e,t);return i.linkWithCredential(r)}return _d(n).createUserWithEmailAndPassword(e,t)}))},e.ac=function(e){Dd(this);var t=this;return Cd(this,(function(n){return n?n.linkWithCredential(e).then((function(e){return e}),(function(n){if(n&&"auth/email-already-in-use"==n.code&&n.email&&n.credential)throw n;return Bd(t,n,e)})):_d(t).signInWithCredential(e)}))},e.dc=function(e){Dd(this);var t=this,n=this.i;return this.i=null,Cd(this,(function(n){return n&&!is(Id(t))?n.linkWithRedirect(e):_d(t).signInWithRedirect(e)})).then((function(){}),(function(e){throw t.i=n,e}))},e.cc=function(e,t){Dd(this);var n=this;return Cd(this,(function(i){return i?i.linkWithPhoneNumber(e,t).then((function(e){return new Nr(e,(function(e){if("auth/credential-already-in-use"==e.code)return Bd(n,e);throw e}))})):Ed(n).signInWithPhoneNumber(e,t).then((function(e){return new Nr(e)}))}))},e.$b=function(){return Dd(this),Ed(this).signInAnonymously()},e.Xb=function(e,t){return Dd(this),_d(this).signInWithEmailAndPassword(e,t)},u(Ud,Pu),Ud.prototype.v=function(){this.u(this.i),this.w(this.i),this.l().focus(),Rl(this.l(),(this.l().value||"").length),Pu.prototype.v.call(this)},Ud.prototype.o=function(){this.i=null,Pu.prototype.o.call(this)},N(Ud.prototype,{l:Oc,H:Dc,u:Pc,B:Fc,j:Bc,M:Sc,w:kc}),u(jd,Pu),jd.prototype.v=function(){!function(e,t){function n(e){t(e)}for(var i=e.g?Vt("firebaseui-id-tenant-selection-button",e.g||e.s.a):[],r=0;r<i.length;r++){var o=i[r];iu(e,o,C(n,Ql(o,"tenantId")))}}(this,this.i),Pu.prototype.v.call(this)},jd.prototype.o=function(){this.i=null,Pu.prototype.o.call(this)},u($d,Pu);var Yd=["immediateFederatedRedirect","privacyPolicyUrl","signInFlow","signInOptions","tosUrl"],Zd="optionFirst",Xd={pc:Zd,oc:"identifierFirst"},Jd="*";function Qd(e,t){var n=this;this.s=ar(e),this.a={},Object.keys(t).forEach((function(e){n.a[e]=new Vd(t[e])})),this.ob=this.g=this.A=this.h=this.i=this.j=null,Object.defineProperty(this,"languageCode",{get:function(){return this.ob},set:function(e){this.ob=e||null},enumerable:!1})}function eh(e){e.j&&e.j.reset(),e.mb(),e.g&&e.g.m()}(e=Qd.prototype).Ub=function(e,t){var n=this;eh(this);var i=e.apiKey;return new Ui((function(e,r){if(n.a.hasOwnProperty(i)){var o=Hd(n.a[i]).selectTenantUiHidden||null;if(function(e){for(var t in e=e.a.get("displayMode"),Xd)if(Xd[t]===e)return Xd[t];return Zd}(n.a[i])===Zd){var s=[];t.forEach((function(e){e=e||"_";var t=n.a[i].a.get("tenants");if(!t)throw Error("Invalid tenant configuration!");(t=t[e]||t[Jd])?e={tenantId:"_"!==e?e:null,V:t.fullLabel||null,displayName:t.displayName,za:t.iconUrl,ta:t.buttonColor}:(Yr("Invalid tenant configuration: "+e+" is not configured!",void 0),e=null),e&&s.push(e)}));var a=function(t){t={tenantId:t,providerIds:Kd(n.a[i],t||"_")},e(t)};if(1===s.length)return void a(s[0].tenantId);n.g=new jd((function(e){eh(n),o&&o(),a(e)}),s,Wd(n.a[i]),Gd(n.a[i]))}else n.g=new Ud((function(){var r=n.g.j();if(r){for(var s=0;s<t.length;s++){var a=Kd(n.a[i],t[s]||"_",r);if(0!==a.length)return r={tenantId:t[s],providerIds:a,email:r},eh(n),o&&o(),void e(r)}n.g.a(Mn({code:"no-matching-tenant-for-email"}).toString())}}),Wd(n.a[i]),Gd(n.a[i]));n.g.render(n.s),(r=Hd(n.a[i]).selectTenantUiShown||null)&&r()}else{var u=Error("Invalid project configuration: API key is invalid!");u.code="invalid-configuration",n.pb(u),r(u)}}))},e.Pb=function(e,t){if(!this.a.hasOwnProperty(e))throw Error("Invalid project configuration: API key is invalid!");var n=t||void 0;zd(this.a[e],t||"_");try{this.i=s.default.app(n).auth()}catch(r){var i=this.a[e].a.get("authDomain");if(!i)throw Error("Invalid project configuration: authDomain is required!");(e=s.default.initializeApp({apiKey:e,authDomain:i},n)).auth().tenantId=t,this.i=e.auth()}return this.i},e.Zb=function(e,t){var n=this;return new Ui((function(i,r){function o(t,i){n.j=new md(e),kd(n.j,n.s,t,i)}var s=e.app.options.apiKey;n.a.hasOwnProperty(s)||r(Error("Invalid project configuration: API key is invalid!"));var a=qd(n.a[s],e.tenantId||"_",t&&t.providerIds);eh(n),r={signInSuccessWithAuthResult:function(e){return i(e),!1}};var u,c=Hd(n.a[s]).signInUiShown||null,l=!1;r.uiChanged=function(t,i){null===t&&"callback"===i?((t=Ht("firebaseui-id-page-callback",n.s))&&ru(t),n.h=new $d,n.h.render(n.s)):l||null===t&&"spinner"===i||"blank"===i||(n.h&&(n.h.m(),n.h=null),l=!0,c&&c(e.tenantId))},a.callbacks=r,a.credentialHelper="none",t&&t.email&&(u={emailHint:t.email}),n.j?n.j.Wa().then((function(){o(a,u)})):o(a,u)}))},e.reset=function(){var e=this;return zi().then((function(){e.j&&e.j.Wa()})).then((function(){e.j=null,eh(e)}))},e.Vb=function(){var e=this;this.h||this.A||(this.A=window.setTimeout((function(){eh(e),e.h=new $d,e.g=e.h,e.h.render(e.s),e.A=null}),500))},e.mb=function(){window.clearTimeout(this.A),this.A=null,this.h&&(this.h.m(),this.h=null)},e.Bb=function(){return eh(this),this.g=new Kc,this.g.render(this.s),zi()},e.pb=function(e){var t,n=this,i=Mn({code:e.code}).toString()||e.message;eh(this),e.retry&&"function"==typeof e.retry&&(t=function(){n.reset(),e.retry()}),this.g=new Xc(i,t),this.g.render(this.s)},e.Rb=function(e){var t=this;return zi().then((function(){var n=t.i&&t.i.app.options.apiKey;if(!t.a.hasOwnProperty(n))throw Error("Invalid project configuration: API key is invalid!");if(zd(t.a[n],e.tenantId||"_"),!t.i.currentUser||t.i.currentUser.uid!==e.uid)throw Error("The user being processed does not match the signed in user!");return(n=Hd(t.a[n]).beforeSignInSuccess||null)?n(e):e})).then((function(t){if(t.uid!==e.uid)throw Error("User with mismatching UID returned.");return t}))},M("firebaseui.auth.FirebaseUiHandler",Qd),M("firebaseui.auth.FirebaseUiHandler.prototype.selectTenant",Qd.prototype.Ub),M("firebaseui.auth.FirebaseUiHandler.prototype.getAuth",Qd.prototype.Pb),M("firebaseui.auth.FirebaseUiHandler.prototype.startSignIn",Qd.prototype.Zb),M("firebaseui.auth.FirebaseUiHandler.prototype.reset",Qd.prototype.reset),M("firebaseui.auth.FirebaseUiHandler.prototype.showProgressBar",Qd.prototype.Vb),M("firebaseui.auth.FirebaseUiHandler.prototype.hideProgressBar",Qd.prototype.mb),M("firebaseui.auth.FirebaseUiHandler.prototype.completeSignOut",Qd.prototype.Bb),M("firebaseui.auth.FirebaseUiHandler.prototype.handleError",Qd.prototype.pb),M("firebaseui.auth.FirebaseUiHandler.prototype.processUser",Qd.prototype.Rb),M("firebaseui.auth.AuthUI",md),M("firebaseui.auth.AuthUI.getInstance",(function(e){return e=yd(e),vd[e]?vd[e]:null})),M("firebaseui.auth.AuthUI.prototype.disableAutoSignIn",md.prototype.Db),M("firebaseui.auth.AuthUI.prototype.start",md.prototype.start),M("firebaseui.auth.AuthUI.prototype.setConfig",md.prototype.ib),M("firebaseui.auth.AuthUI.prototype.signIn",md.prototype.Wb),M("firebaseui.auth.AuthUI.prototype.reset",md.prototype.reset),M("firebaseui.auth.AuthUI.prototype.delete",md.prototype.Wa),M("firebaseui.auth.AuthUI.prototype.isPendingRedirect",md.prototype.nb),M("firebaseui.auth.AuthUIError",Dn),M("firebaseui.auth.AuthUIError.prototype.toJSON",Dn.prototype.toJSON),M("firebaseui.auth.CredentialHelper.GOOGLE_YOLO",ia),M("firebaseui.auth.CredentialHelper.NONE",ra),M("firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID","anonymous"),Ui.prototype.catch=Ui.prototype.Ca,Ui.prototype.finally=Ui.prototype.fc}).apply(void 0!==n?n:"undefined"!=typeof self?self:window)}.apply(void 0!==n?n:"undefined"!=typeof self?self:window),"undefined"!=typeof window&&(window.dialogPolyfill=t(a));var u=firebaseui.auth})),o.register("cEmXr",(function(t,n){e(t.exports,"default",(function(){return o("hVw4Q").default}));o("hVw4Q");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
o("hVw4Q").default.registerVersion("firebase","9.15.0","app-compat")})),o.register("hVw4Q",(function(t,n){e(t.exports,"default",(function(){return f}));var i=o("ffjl9"),r=o("4a6xH"),s=o("ix4Jr"),a=(s=o("ix4Jr"),o("7vF8m"));
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class u{get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise((e=>{this._delegate.checkDestroyed(),e()})).then((()=>(this.firebase.INTERNAL.removeApp(this.name),(0,s.deleteApp)(this._delegate))))}_getService(e,t=s._DEFAULT_ENTRY_NAME){var n;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return i.isInitialized()||"EXPLICIT"!==(null===(n=i.getComponent())||void 0===n?void 0:n.instantiationMode)||i.initialize(),i.getImmediate({identifier:t})}_removeServiceInstance(e,t=s._DEFAULT_ENTRY_NAME){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){(0,s._addComponent)(this._delegate,e)}_addOrOverwriteComponent(e){(0,s._addOrOverwriteComponent)(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}constructor(e,t){this._delegate=e,this.firebase=t,(0,s._addComponent)(e,new(0,r.Component)("app-compat",(()=>this),"PUBLIC")),this.container=e.container}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},l=new(0,i.ErrorFactory)("app-compat","Firebase",c);const d=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function e(){const t=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){const t={},n={__esModule:!0,initializeApp:function(r,o={}){const a=s.initializeApp(r,o);if((0,i.contains)(t,a.name))return t[a.name];const u=new e(a,n);return t[a.name]=u,u},app:r,registerVersion:s.registerVersion,setLogLevel:s.setLogLevel,onLog:s.onLog,apps:null,SDK_VERSION:s.SDK_VERSION,INTERNAL:{registerComponent:function(t){const o=t.name,a=o.replace("-compat","");if(s._registerComponent(t)&&"PUBLIC"===t.type){const s=(e=r())=>{if("function"!=typeof e[a])throw l.create("invalid-app-argument",{appName:o});return e[a]()};void 0!==t.serviceProps&&(0,i.deepExtend)(s,t.serviceProps),n[a]=s,e.prototype[a]=function(...e){return this._getService.bind(this,o).apply(this,t.multipleInstances?e:[])}}return"PUBLIC"===t.type?n[a]:null},removeApp:function(e){delete t[e]},useAsService:function(e,t){return"serverAuth"===t?null:t},modularAPIs:s}};function r(e){if(e=e||s._DEFAULT_ENTRY_NAME,!(0,i.contains)(t,e))throw l.create("no-app",{appName:e});return t[e]}return n.default=n,Object.defineProperty(n,"apps",{get:function(){return Object.keys(t).map((e=>t[e]))}}),r.App=e,n}(u);return t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:e,extendNamespace:function(e){(0,i.deepExtend)(t,e)},createSubscribe:i.createSubscribe,ErrorFactory:i.ErrorFactory,deepExtend:i.deepExtend}),t}(),h=new(0,a.Logger)("@firebase/app-compat");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
if((0,i.isBrowser)()&&void 0!==self.firebase){h.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");const e=self.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&h.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}const f=d;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var p;(0,s.registerVersion)("@firebase/app-compat","0.2.0",p)})),o.register("cxzCy",(function(e,t){o("cexSw")})),o.register("cexSw",(function(e,t){var i=o("hVw4Q");o("j3TbB");var r=o("2YDLC"),s=o("j3TbB"),a=o("4a6xH"),u=o("ffjl9");function c(){var e;return(null===(e=null===self||void 0===self?void 0:self.location)||void 0===e?void 0:e.protocol)||null}function l(e=(0,u.getUA)()){return!("file:"!==c()&&"ionic:"!==c()&&"capacitor:"!==c()||!e.toLowerCase().match(/iphone|ipad|ipod|android/))}function d(e=(0,u.getUA)()){return(0,u.isIE)()&&11===(null===document||void 0===document?void 0:document.documentMode)||function(e=(0,u.getUA)()){return/Edge\/\d+/.test(e)}(e)}function h(){try{const e=self.localStorage,t=r.aI();if(e)return e.setItem(t,"1"),e.removeItem(t),!d()||(0,u.isIndexedDBAvailable)()}catch(e){return f()&&(0,u.isIndexedDBAvailable)()}return!1}function f(){return void 0!==n&&"WorkerGlobalScope"in n&&"importScripts"in n}function p(){return("http:"===c()||"https:"===c()||(0,u.isBrowserExtension)()||l())&&!((0,u.isReactNative)()||(0,u.isNode)())&&h()&&!f()}function m(){return l()&&"undefined"!=typeof document}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const g={LOCAL:"local",NONE:"none",SESSION:"session"},v=r.ax,y="persistence";async function b(e){await e._initializationPromise;const t=w(),n=r.aA(y,e.config.apiKey,e.name);t&&t.setItem(n,e._getPersistence())}function w(){var e;try{return(null===(e="undefined"!=typeof window?window:null)||void 0===e?void 0:e.sessionStorage)||null}catch(e){return null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x=r.ax;class _{async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,n,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,n,i)}async _openRedirect(e,t,n,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,n,i)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return m()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return x(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await async function(){return!!m()&&new Promise((e=>{const t=setTimeout((()=>{e(!1)}),1e3);document.addEventListener("deviceready",(()=>{clearTimeout(t),e(!0)}))}))}();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}constructor(){this.browserResolver=r.az(r.k),this.cordovaResolver=r.az(s.cordovaPopupRedirectResolver),this.underlyingResolver=null,this._redirectPersistence=r.a,this._completeRedirectFn=r.aB,this._overrideRedirectResult=r.aC}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(e){return e.unwrap()}function I(e){const{_tokenResponse:t}=e instanceof u.FirebaseError?e.customData:e;if(!t)return null;if(!(e instanceof u.FirebaseError)&&"temporaryProof"in t&&"phoneNumber"in t)return r.P.credentialFromResult(e);const n=t.providerId;if(!n||n===r.o.PASSWORD)return null;let i;switch(n){case r.o.GOOGLE:i=r.Q;break;case r.o.FACEBOOK:i=r.N;break;case r.o.GITHUB:i=r.T;break;case r.o.TWITTER:i=r.W;break;default:const{oauthIdToken:e,oauthAccessToken:o,oauthTokenSecret:s,pendingToken:a,nonce:u}=t;return o||s||e||a?a?n.startsWith("saml.")?r.aL._create(n,a):r.J._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:e,accessToken:o}):new r.U(n).credential({idToken:e,accessToken:o,rawNonce:u}):null}return e instanceof u.FirebaseError?i.credentialFromError(e):i.credentialFromResult(e)}function S(e,t){return t.catch((t=>{throw t instanceof u.FirebaseError&&function(e,t){var n;const i=null===(n=t.customData)||void 0===n?void 0:n._tokenResponse;if("auth/multi-factor-auth-required"===(null==t?void 0:t.code))t.resolver=new k(e,r.an(e,t));else if(i){const e=I(t),n=t;e&&(n.credential=e,n.tenantId=i.tenantId||void 0,n.email=i.email||void 0,n.phoneNumber=i.phoneNumber||void 0)}}(e,t),t})).then((e=>{const t=e.operationType,n=e.user;return{operationType:t,credential:(i=e,I(i)),additionalUserInfo:r.al(e),user:T.getOrCreate(n)};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var i}))}async function A(e,t){const n=await t;return{verificationId:n.verificationId,confirm:t=>S(e,n.confirm(t))}}class k{get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return S(E(this.auth),this.resolver.resolveSignIn(e))}constructor(e,t){this.resolver=t,this.auth=e.wrapped()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{static getOrCreate(e){return T.USER_MAP.has(e)||T.USER_MAP.set(e,new T(e)),T.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return S(this.auth,r.Z(this._delegate,e))}async linkWithPhoneNumber(e,t){return A(this.auth,r.l(this._delegate,e,t))}async linkWithPopup(e){return S(this.auth,r.d(this._delegate,e,_))}async linkWithRedirect(e){return await b(r.aE(this.auth)),r.g(this._delegate,e,_)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return S(this.auth,r._(this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return A(this.auth,r.r(this._delegate,e,t))}reauthenticateWithPopup(e){return S(this.auth,r.e(this._delegate,e,_))}async reauthenticateWithRedirect(e){return await b(r.aE(this.auth)),r.h(this._delegate,e,_)}sendEmailVerification(e){return r.ab(this._delegate,e)}async unlink(e){return await r.ak(this._delegate,e),this}updateEmail(e){return r.ag(this._delegate,e)}updatePassword(e){return r.ah(this._delegate,e)}updatePhoneNumber(e){return r.u(this._delegate,e)}updateProfile(e){return r.af(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return r.ac(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}constructor(e){this._delegate=e,this.multiFactor=r.ao(e)}}T.USER_MAP=new WeakMap;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const C=r.ax;class N{get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?T.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){r.G(this._delegate,e,t)}applyActionCode(e){return r.a2(this._delegate,e)}checkActionCode(e){return r.a3(this._delegate,e)}confirmPasswordReset(e,t){return r.a1(this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return S(this._delegate,r.a5(this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return r.aa(this._delegate,e)}isSignInWithEmailLink(e){return r.a8(this._delegate,e)}async getRedirectResult(){C(p(),this._delegate,"operation-not-supported-in-this-environment");const e=await r.j(this._delegate,_);return e?S(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){s.addFrameworkForLogging(this._delegate,e)}onAuthStateChanged(e,t,n){const{next:i,error:r,complete:o}=R(e,t,n);return this._delegate.onAuthStateChanged(i,r,o)}onIdTokenChanged(e,t,n){const{next:i,error:r,complete:o}=R(e,t,n);return this._delegate.onIdTokenChanged(i,r,o)}sendSignInLinkToEmail(e,t){return r.a7(this._delegate,e,t)}sendPasswordResetEmail(e,t){return r.a0(this._delegate,e,t||void 0)}async setPersistence(e){let t;switch(function(e,t){v(Object.values(g).includes(t),e,"invalid-persistence-type"),(0,u.isReactNative)()?v(t!==g.SESSION,e,"unsupported-persistence-type"):(0,u.isNode)()?v(t===g.NONE,e,"unsupported-persistence-type"):f()?v(t===g.NONE||t===g.LOCAL&&(0,u.isIndexedDBAvailable)(),e,"unsupported-persistence-type"):v(t===g.NONE||h(),e,"unsupported-persistence-type")}(this._delegate,e),e){case g.SESSION:t=r.a;break;case g.LOCAL:t=await r.az(r.i)._isAvailable()?r.i:r.b;break;case g.NONE:t=r.L;break;default:return r.as("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return S(this._delegate,r.X(this._delegate))}signInWithCredential(e){return S(this._delegate,r.Y(this._delegate,e))}signInWithCustomToken(e){return S(this._delegate,r.$(this._delegate,e))}signInWithEmailAndPassword(e,t){return S(this._delegate,r.a6(this._delegate,e,t))}signInWithEmailLink(e,t){return S(this._delegate,r.a9(this._delegate,e,t))}signInWithPhoneNumber(e,t){return A(this._delegate,r.s(this._delegate,e,t))}async signInWithPopup(e){return C(p(),this._delegate,"operation-not-supported-in-this-environment"),S(this._delegate,r.c(this._delegate,e,_))}async signInWithRedirect(e){return C(p(),this._delegate,"operation-not-supported-in-this-environment"),await b(this._delegate),r.f(this._delegate,e,_)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return r.a4(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}constructor(e,t){if(this.app=e,t.isInitialized())return this._delegate=t.getImmediate(),void this.linkUnderlyingAuth();const{apiKey:n}=e.options;C(n,"invalid-api-key",{appName:e.name}),C(n,"invalid-api-key",{appName:e.name});const i="undefined"!=typeof window?_:void 0;this._delegate=t.initialize({options:{persistence:L(n,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(r.B),this.linkUnderlyingAuth()}}function R(e,t,n){let i=e;"function"!=typeof e&&({next:i,error:t,complete:n}=e);const r=i;return{next:e=>r(e&&T.getOrCreate(e)),error:t,complete:n}}function L(e,t){const n=function(e,t){const n=w();if(!n)return[];const i=r.aA(y,e,t);switch(n.getItem(i)){case g.NONE:return[r.L];case g.LOCAL:return[r.i,r.a];case g.SESSION:return[r.a];default:return[]}}(e,t);if("undefined"==typeof self||n.includes(r.i)||n.push(r.i),"undefined"!=typeof window)for(const e of[r.b,r.a])n.includes(e)||n.push(e);return n.includes(r.L)||n.push(r.L),n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */N.Persistence=g;class M{static credential(e,t){return r.P.credential(e,t)}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}constructor(){this.providerId="phone",this._delegate=new r.P(E(i.default.auth()))}}M.PHONE_SIGN_IN_METHOD=r.P.PHONE_SIGN_IN_METHOD,M.PROVIDER_ID=r.P.PROVIDER_ID;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const O=r.ax;class D{clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}constructor(e,t,n=i.default.app()){var o;O(null===(o=n.options)||void 0===o?void 0:o.apiKey,"invalid-api-key",{appName:n.name}),this._delegate=new r.R(e,t,n.auth()),this.type=this._delegate.type}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var P;(P=i.default).INTERNAL.registerComponent(new(0,a.Component)("auth-compat",(e=>{const t=e.getProvider("app-compat").getImmediate(),n=e.getProvider("auth");return new N(t,n)}),"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:r.A.EMAIL_SIGNIN,PASSWORD_RESET:r.A.PASSWORD_RESET,RECOVER_EMAIL:r.A.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:r.A.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:r.A.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:r.A.VERIFY_EMAIL}},EmailAuthProvider:r.M,FacebookAuthProvider:r.N,GithubAuthProvider:r.T,GoogleAuthProvider:r.Q,OAuthProvider:r.U,SAMLAuthProvider:r.V,PhoneAuthProvider:M,PhoneMultiFactorGenerator:r.m,RecaptchaVerifier:D,TwitterAuthProvider:r.W,Auth:N,AuthCredential:r.H,Error:u.FirebaseError}).setInstantiationMode("LAZY").setMultipleInstances(!1)),P.registerVersion("@firebase/auth-compat","0.3.0")})),o.register("j3TbB",(function(t,n){e(t.exports,"cordovaPopupRedirectResolver",(function(){return m})),e(t.exports,"addFrameworkForLogging",(function(){return v})),e(t.exports,"ActionCodeOperation",(function(){return o("2YDLC").A})),e(t.exports,"AuthCredential",(function(){return o("2YDLC").H})),e(t.exports,"EmailAuthProvider",(function(){return o("2YDLC").M})),e(t.exports,"FacebookAuthProvider",(function(){return o("2YDLC").N})),e(t.exports,"GithubAuthProvider",(function(){return o("2YDLC").T})),e(t.exports,"GoogleAuthProvider",(function(){return o("2YDLC").Q})),e(t.exports,"OAuthCredential",(function(){return o("2YDLC").J})),e(t.exports,"OAuthProvider",(function(){return o("2YDLC").U})),e(t.exports,"PhoneAuthProvider",(function(){return o("2YDLC").P})),e(t.exports,"PhoneMultiFactorGenerator",(function(){return o("2YDLC").m})),e(t.exports,"ProviderId",(function(){return o("2YDLC").o})),e(t.exports,"RecaptchaVerifier",(function(){return o("2YDLC").R})),e(t.exports,"SAMLAuthCredential",(function(){return o("2YDLC").aL})),e(t.exports,"SAMLAuthProvider",(function(){return o("2YDLC").V})),e(t.exports,"TwitterAuthProvider",(function(){return o("2YDLC").W})),e(t.exports,"_assert",(function(){return o("2YDLC").ax})),e(t.exports,"_castAuth",(function(){return o("2YDLC").aE})),e(t.exports,"_fail",(function(){return o("2YDLC").as})),e(t.exports,"_generateEventId",(function(){return o("2YDLC").aI})),e(t.exports,"_getInstance",(function(){return o("2YDLC").az})),e(t.exports,"_getRedirectResult",(function(){return o("2YDLC").aB})),e(t.exports,"_overrideRedirectResult",(function(){return o("2YDLC").aC})),e(t.exports,"_persistenceKeyName",(function(){return o("2YDLC").aA})),e(t.exports,"applyActionCode",(function(){return o("2YDLC").a2})),e(t.exports,"browserLocalPersistence",(function(){return o("2YDLC").b})),e(t.exports,"browserPopupRedirectResolver",(function(){return o("2YDLC").k})),e(t.exports,"browserSessionPersistence",(function(){return o("2YDLC").a})),e(t.exports,"checkActionCode",(function(){return o("2YDLC").a3})),e(t.exports,"confirmPasswordReset",(function(){return o("2YDLC").a1})),e(t.exports,"connectAuthEmulator",(function(){return o("2YDLC").G})),e(t.exports,"createUserWithEmailAndPassword",(function(){return o("2YDLC").a5})),e(t.exports,"debugErrorMap",(function(){return o("2YDLC").B})),e(t.exports,"fetchSignInMethodsForEmail",(function(){return o("2YDLC").aa})),e(t.exports,"getAdditionalUserInfo",(function(){return o("2YDLC").al})),e(t.exports,"getMultiFactorResolver",(function(){return o("2YDLC").an})),e(t.exports,"getRedirectResult",(function(){return o("2YDLC").j})),e(t.exports,"inMemoryPersistence",(function(){return o("2YDLC").L})),e(t.exports,"indexedDBLocalPersistence",(function(){return o("2YDLC").i})),e(t.exports,"isSignInWithEmailLink",(function(){return o("2YDLC").a8})),e(t.exports,"linkWithCredential",(function(){return o("2YDLC").Z})),e(t.exports,"linkWithPhoneNumber",(function(){return o("2YDLC").l})),e(t.exports,"linkWithPopup",(function(){return o("2YDLC").d})),e(t.exports,"linkWithRedirect",(function(){return o("2YDLC").g})),e(t.exports,"multiFactor",(function(){return o("2YDLC").ao})),e(t.exports,"reauthenticateWithCredential",(function(){return o("2YDLC")._})),e(t.exports,"reauthenticateWithPhoneNumber",(function(){return o("2YDLC").r})),e(t.exports,"reauthenticateWithPopup",(function(){return o("2YDLC").e})),e(t.exports,"reauthenticateWithRedirect",(function(){return o("2YDLC").h})),e(t.exports,"sendEmailVerification",(function(){return o("2YDLC").ab})),e(t.exports,"sendPasswordResetEmail",(function(){return o("2YDLC").a0})),e(t.exports,"sendSignInLinkToEmail",(function(){return o("2YDLC").a7})),e(t.exports,"signInAnonymously",(function(){return o("2YDLC").X})),e(t.exports,"signInWithCredential",(function(){return o("2YDLC").Y})),e(t.exports,"signInWithCustomToken",(function(){return o("2YDLC").$})),e(t.exports,"signInWithEmailAndPassword",(function(){return o("2YDLC").a6})),e(t.exports,"signInWithEmailLink",(function(){return o("2YDLC").a9})),e(t.exports,"signInWithPhoneNumber",(function(){return o("2YDLC").s})),e(t.exports,"signInWithPopup",(function(){return o("2YDLC").c})),e(t.exports,"signInWithRedirect",(function(){return o("2YDLC").f})),e(t.exports,"unlink",(function(){return o("2YDLC").ak})),e(t.exports,"updateEmail",(function(){return o("2YDLC").ag})),e(t.exports,"updatePassword",(function(){return o("2YDLC").ah})),e(t.exports,"updatePhoneNumber",(function(){return o("2YDLC").u})),e(t.exports,"updateProfile",(function(){return o("2YDLC").af})),e(t.exports,"verifyBeforeUpdateEmail",(function(){return o("2YDLC").ac})),e(t.exports,"verifyPasswordResetCode",(function(){return o("2YDLC").a4}));var i=o("2YDLC"),r=o("ffjl9");o("ix4Jr"),o("7vF8m"),o("4a6xH");i=o("2YDLC");
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s(){return window}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function a(e,t,n){var r;const{BuildInfo:o}=s();(0,i.ap)(t.sessionId,"AuthEvent did not contain a session ID");const a=await async function(e){const t=function(e){if((0,i.ap)(/[0-9a-zA-Z]+/.test(e),"Can only convert alpha-numeric strings"),"undefined"!=typeof TextEncoder)return(new TextEncoder).encode(e);const t=new ArrayBuffer(e.length),n=new Uint8Array(t);for(let t=0;t<e.length;t++)n[t]=e.charCodeAt(t);return n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e),n=await crypto.subtle.digest("SHA-256",t);return Array.from(new Uint8Array(n)).map((e=>e.toString(16).padStart(2,"0"))).join("")}(t.sessionId),u={};return(0,i.aq)()?u.ibi=o.packageName:(0,i.ar)()?u.apn=o.packageName:(0,i.as)(e,"operation-not-supported-in-this-environment"),o.displayName&&(u.appDisplayName=o.displayName),u.sessionId=a,(0,i.at)(e,n,t.type,void 0,null!==(r=t.eventId)&&void 0!==r?r:void 0,u)}class u extends i.ay{addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach((t=>t(e))),super.onEvent(e)}async initialized(){await this.initPromise}constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise((e=>{this.resolveInialized=e}))}}async function c(e){const t=await h()._get(f(e));return t&&await h()._remove(f(e)),t}function l(e,t){var n,r;const o=function(e){const t=p(e),n=t.link?decodeURIComponent(t.link):void 0,i=p(n).link,r=t.deep_link_id?decodeURIComponent(t.deep_link_id):void 0;return p(r).link||r||i||n||e}(t);if(o.includes("/__/auth/callback")){const t=p(o),s=t.firebaseError?function(e){try{return JSON.parse(e)}catch(e){return null}}(decodeURIComponent(t.firebaseError)):null,a=null===(r=null===(n=null==s?void 0:s.code)||void 0===n?void 0:n.split("auth/"))||void 0===r?void 0:r[1],u=a?(0,i.aw)(a):null;return u?{type:e.type,eventId:e.eventId,tenantId:e.tenantId,error:u,urlResponse:null,sessionId:null,postBody:null}:{type:e.type,eventId:e.eventId,tenantId:e.tenantId,sessionId:e.sessionId,urlResponse:o,postBody:null}}return null}function d(){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<20;n++){const n=Math.floor(Math.random()*t.length);e.push(t.charAt(n))}return e.join("")}function h(){return(0,i.az)(i.b)}function f(e){return(0,i.aA)("authEvent",e.config.apiKey,e.name)}function p(e){if(!(null==e?void 0:e.includes("?")))return{};const[t,...n]=e.split("?");return(0,r.querystringDecode)(n.join("?"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m=class{async _initialize(e){const t=e._key();let n=this.eventManagers.get(t);return n||(n=new u(e),this.eventManagers.set(t,n),this.attachCallbackListeners(e,n)),n}_openPopup(e){(0,i.as)(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,n,r){!function(e){var t,n,r,o,a,u,c,l,d,h;const f=s();(0,i.ax)("function"==typeof(null===(t=null==f?void 0:f.universalLinks)||void 0===t?void 0:t.subscribe),e,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),(0,i.ax)(void 0!==(null===(n=null==f?void 0:f.BuildInfo)||void 0===n?void 0:n.packageName),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),(0,i.ax)("function"==typeof(null===(a=null===(o=null===(r=null==f?void 0:f.cordova)||void 0===r?void 0:r.plugins)||void 0===o?void 0:o.browsertab)||void 0===a?void 0:a.openUrl),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),(0,i.ax)("function"==typeof(null===(l=null===(c=null===(u=null==f?void 0:f.cordova)||void 0===u?void 0:u.plugins)||void 0===c?void 0:c.browsertab)||void 0===l?void 0:l.isAvailable),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),(0,i.ax)("function"==typeof(null===(h=null===(d=null==f?void 0:f.cordova)||void 0===d?void 0:d.InAppBrowser)||void 0===h?void 0:h.open),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}(e);const o=await this._initialize(e);await o.initialized(),o.resetRedirect(),(0,i.aD)(),await this._originValidation(e);const u=function(e,t,n=null){return{type:t,eventId:n,urlResponse:null,sessionId:d(),postBody:null,tenantId:e.tenantId,error:(0,i.aw)(e,"no-auth-event")}}(e,n,r);await function(e,t){return h()._set(f(e),t)}(e,u);const c=await a(e,u,t);return async function(e,t,n){const{cordova:r}=s();let o=()=>{};try{await new Promise(((s,a)=>{let u=null;function c(){var e;s();const t=null===(e=r.plugins.browsertab)||void 0===e?void 0:e.close;"function"==typeof t&&t(),"function"==typeof(null==n?void 0:n.close)&&n.close()}function l(){u||(u=window.setTimeout((()=>{a((0,i.aw)(e,"redirect-cancelled-by-user"))}),2e3))}function d(){"visible"===(null===document||void 0===document?void 0:document.visibilityState)&&l()}t.addPassiveListener(c),document.addEventListener("resume",l,!1),(0,i.ar)()&&document.addEventListener("visibilitychange",d,!1),o=()=>{t.removePassiveListener(c),document.removeEventListener("resume",l,!1),document.removeEventListener("visibilitychange",d,!1),u&&window.clearTimeout(u)}}))}finally{o()}}(e,o,await function(e){const{cordova:t}=s();return new Promise((n=>{t.plugins.browsertab.isAvailable((r=>{let o=null;r?t.plugins.browsertab.openUrl(e):o=t.InAppBrowser.open(e,(0,i.av)()?"_blank":"_system","location=yes"),n(o)}))}))}(c))}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=async function(e){const{BuildInfo:t}=s(),n={};(0,i.aq)()?n.iosBundleId=t.packageName:(0,i.ar)()?n.androidPackageName=t.packageName:(0,i.as)(e,"operation-not-supported-in-this-environment"),await(0,i.au)(e,n)}(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:n,handleOpenURL:i,BuildInfo:r}=s(),o=setTimeout((async()=>{await c(e),t.onEvent(g())}),500),a=async n=>{clearTimeout(o);const i=await c(e);let r=null;i&&(null==n?void 0:n.url)&&(r=l(i,n.url)),t.onEvent(r||g())};void 0!==n&&"function"==typeof n.subscribe&&n.subscribe(null,a);const u=i,d=`${r.packageName.toLowerCase()}://`;s().handleOpenURL=async e=>{if(e.toLowerCase().startsWith(d)&&a({url:e}),"function"==typeof u)try{u(e)}catch(e){console.error(e)}}}constructor(){this._redirectPersistence=i.a,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=i.aB,this._overrideRedirectResult=i.aC}};function g(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:(0,i.aw)("no-auth-event")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v(e,t){(0,i.aE)(e)._logFramework(t)}})),o.register("dvE9m",(function(e,t){!function(){var t=window.CustomEvent;function n(e){for(;e;){if("dialog"===e.localName)return e;e=e.parentElement}return null}function i(e){e&&e.blur&&e!==document.body&&e.blur()}function r(e,t){for(var n=0;n<e.length;++n)if(e[n]===t)return!0;return!1}function o(e){return!(!e||!e.hasAttribute("method"))&&"dialog"===e.getAttribute("method").toLowerCase()}function s(e){if(this.dialog_=e,this.replacedStyleTop_=!1,this.openAsModal_=!1,e.hasAttribute("role")||e.setAttribute("role","dialog"),e.show=this.show.bind(this),e.showModal=this.showModal.bind(this),e.close=this.close.bind(this),"returnValue"in e||(e.returnValue=""),"MutationObserver"in window){new MutationObserver(this.maybeHideModal.bind(this)).observe(e,{attributes:!0,attributeFilter:["open"]})}else{var t,n=!1,i=function(){n?this.downgradeModal():this.maybeHideModal(),n=!1}.bind(this),r=function(r){if(r.target===e){var o="DOMNodeRemoved";n|=r.type.substr(0,o.length)===o,window.clearTimeout(t),t=window.setTimeout(i,0)}};["DOMAttrModified","DOMNodeRemoved","DOMNodeRemovedFromDocument"].forEach((function(t){e.addEventListener(t,r)}))}Object.defineProperty(e,"open",{set:this.setOpen.bind(this),get:e.hasAttribute.bind(e,"open")}),this.backdrop_=document.createElement("div"),this.backdrop_.className="backdrop",this.backdrop_.addEventListener("click",this.backdropClick_.bind(this))}t&&"object"!=typeof t||((t=function(e,t){t=t||{};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,!!t.bubbles,!!t.cancelable,t.detail||null),n}).prototype=window.Event.prototype),s.prototype={get dialog(){return this.dialog_},maybeHideModal:function(){this.dialog_.hasAttribute("open")&&document.body.contains(this.dialog_)||this.downgradeModal()},downgradeModal:function(){this.openAsModal_&&(this.openAsModal_=!1,this.dialog_.style.zIndex="",this.replacedStyleTop_&&(this.dialog_.style.top="",this.replacedStyleTop_=!1),this.backdrop_.parentNode&&this.backdrop_.parentNode.removeChild(this.backdrop_),a.dm.removeDialog(this))},setOpen:function(e){e?this.dialog_.hasAttribute("open")||this.dialog_.setAttribute("open",""):(this.dialog_.removeAttribute("open"),this.maybeHideModal())},backdropClick_:function(e){if(this.dialog_.hasAttribute("tabindex"))this.dialog_.focus();else{var t=document.createElement("div");this.dialog_.insertBefore(t,this.dialog_.firstChild),t.tabIndex=-1,t.focus(),this.dialog_.removeChild(t)}var n=document.createEvent("MouseEvents");n.initMouseEvent(e.type,e.bubbles,e.cancelable,window,e.detail,e.screenX,e.screenY,e.clientX,e.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,e.button,e.relatedTarget),this.dialog_.dispatchEvent(n),e.stopPropagation()},focus_:function(){var e=this.dialog_.querySelector("[autofocus]:not([disabled])");if(!e&&this.dialog_.tabIndex>=0&&(e=this.dialog_),!e){var t=["button","input","keygen","select","textarea"].map((function(e){return e+":not([disabled])"}));t.push('[tabindex]:not([disabled]):not([tabindex=""])'),e=this.dialog_.querySelector(t.join(", "))}i(document.activeElement),e&&e.focus()},updateZIndex:function(e,t){if(e<t)throw new Error("dialogZ should never be < backdropZ");this.dialog_.style.zIndex=e,this.backdrop_.style.zIndex=t},show:function(){this.dialog_.open||(this.setOpen(!0),this.focus_())},showModal:function(){if(this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'showModal' on dialog: The element is already open, and therefore cannot be opened modally.");if(!document.body.contains(this.dialog_))throw new Error("Failed to execute 'showModal' on dialog: The element is not in a Document.");if(!a.dm.pushDialog(this))throw new Error("Failed to execute 'showModal' on dialog: There are too many open modal dialogs.");(function(e){for(;e&&e!==document.body;){var t=window.getComputedStyle(e),n=function(e,n){return!(void 0===t[e]||t[e]===n)};if(t.opacity<1||n("zIndex","auto")||n("transform","none")||n("mixBlendMode","normal")||n("filter","none")||n("perspective","none")||"isolate"===t.isolation||"fixed"===t.position||"touch"===t.webkitOverflowScrolling)return!0;e=e.parentElement}return!1})(this.dialog_.parentElement)&&console.warn("A dialog is being shown inside a stacking context. This may cause it to be unusable. For more information, see this link: https://github.com/GoogleChrome/dialog-polyfill/#stacking-context"),this.setOpen(!0),this.openAsModal_=!0,a.needsCentering(this.dialog_)?(a.reposition(this.dialog_),this.replacedStyleTop_=!0):this.replacedStyleTop_=!1,this.dialog_.parentNode.insertBefore(this.backdrop_,this.dialog_.nextSibling),this.focus_()},close:function(e){if(!this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'close' on dialog: The element does not have an 'open' attribute, and therefore cannot be closed.");this.setOpen(!1),void 0!==e&&(this.dialog_.returnValue=e);var n=new t("close",{bubbles:!1,cancelable:!1});this.dialog_.dispatchEvent(n)}};var a={reposition:function(e){var t=document.body.scrollTop||document.documentElement.scrollTop,n=t+(window.innerHeight-e.offsetHeight)/2;e.style.top=Math.max(t,n)+"px"},isInlinePositionSetByStylesheet:function(e){for(var t=0;t<document.styleSheets.length;++t){var n=document.styleSheets[t],i=null;try{i=n.cssRules}catch(e){}if(i)for(var o=0;o<i.length;++o){var s=i[o],a=null;try{a=document.querySelectorAll(s.selectorText)}catch(e){}if(a&&r(a,e)){var u=s.style.getPropertyValue("top"),c=s.style.getPropertyValue("bottom");if(u&&"auto"!==u||c&&"auto"!==c)return!0}}}return!1},needsCentering:function(e){return"absolute"===window.getComputedStyle(e).position&&(!("auto"!==e.style.top&&""!==e.style.top||"auto"!==e.style.bottom&&""!==e.style.bottom)&&!a.isInlinePositionSetByStylesheet(e))},forceRegisterDialog:function(e){if((window.HTMLDialogElement||e.showModal)&&console.warn("This browser already supports <dialog>, the polyfill may not work correctly",e),"dialog"!==e.localName)throw new Error("Failed to register dialog: The element is not a dialog.");new s(e)},registerDialog:function(e){e.showModal||a.forceRegisterDialog(e)},DialogManager:function(){this.pendingDialogStack=[];var e=this.checkDOM_.bind(this);this.overlay=document.createElement("div"),this.overlay.className="_dialog_overlay",this.overlay.addEventListener("click",function(t){this.forwardTab_=void 0,t.stopPropagation(),e([])}.bind(this)),this.handleKey_=this.handleKey_.bind(this),this.handleFocus_=this.handleFocus_.bind(this),this.zIndexLow_=1e5,this.zIndexHigh_=100150,this.forwardTab_=void 0,"MutationObserver"in window&&(this.mo_=new MutationObserver((function(t){var n=[];t.forEach((function(e){for(var t,i=0;t=e.removedNodes[i];++i)t instanceof Element&&("dialog"===t.localName&&n.push(t),n=n.concat(t.querySelectorAll("dialog")))})),n.length&&e(n)})))}};if(a.DialogManager.prototype.blockDocument=function(){document.documentElement.addEventListener("focus",this.handleFocus_,!0),document.addEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.observe(document,{childList:!0,subtree:!0})},a.DialogManager.prototype.unblockDocument=function(){document.documentElement.removeEventListener("focus",this.handleFocus_,!0),document.removeEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.disconnect()},a.DialogManager.prototype.updateStacking=function(){for(var e,t=this.zIndexHigh_,n=0;e=this.pendingDialogStack[n];++n)e.updateZIndex(--t,--t),0===n&&(this.overlay.style.zIndex=--t);var i=this.pendingDialogStack[0];i?(i.dialog.parentNode||document.body).appendChild(this.overlay):this.overlay.parentNode&&this.overlay.parentNode.removeChild(this.overlay)},a.DialogManager.prototype.containedByTopDialog_=function(e){for(;e=n(e);){for(var t,i=0;t=this.pendingDialogStack[i];++i)if(t.dialog===e)return 0===i;e=e.parentElement}return!1},a.DialogManager.prototype.handleFocus_=function(e){if(!this.containedByTopDialog_(e.target)&&(e.preventDefault(),e.stopPropagation(),i(e.target),void 0!==this.forwardTab_)){var t=this.pendingDialogStack[0];return t.dialog.compareDocumentPosition(e.target)&Node.DOCUMENT_POSITION_PRECEDING&&(this.forwardTab_?t.focus_():document.documentElement.focus()),!1}},a.DialogManager.prototype.handleKey_=function(e){if(this.forwardTab_=void 0,27===e.keyCode){e.preventDefault(),e.stopPropagation();var n=new t("cancel",{bubbles:!1,cancelable:!0}),i=this.pendingDialogStack[0];i&&i.dialog.dispatchEvent(n)&&i.dialog.close()}else 9===e.keyCode&&(this.forwardTab_=!e.shiftKey)},a.DialogManager.prototype.checkDOM_=function(e){this.pendingDialogStack.slice().forEach((function(t){-1!==e.indexOf(t.dialog)?t.downgradeModal():t.maybeHideModal()}))},a.DialogManager.prototype.pushDialog=function(e){var t=(this.zIndexHigh_-this.zIndexLow_)/2-1;return!(this.pendingDialogStack.length>=t)&&(1===this.pendingDialogStack.unshift(e)&&this.blockDocument(),this.updateStacking(),!0)},a.DialogManager.prototype.removeDialog=function(e){var t=this.pendingDialogStack.indexOf(e);-1!==t&&(this.pendingDialogStack.splice(t,1),0===this.pendingDialogStack.length&&this.unblockDocument(),this.updateStacking())},a.dm=new a.DialogManager,a.formSubmitter=null,a.useValue=null,void 0===window.HTMLDialogElement){var u=document.createElement("form");if(u.setAttribute("method","dialog"),"dialog"!==u.method){var c=Object.getOwnPropertyDescriptor(HTMLFormElement.prototype,"method");if(c){var l=c.get;c.get=function(){return o(this)?"dialog":l.call(this)};var d=c.set;c.set=function(e){return"string"==typeof e&&"dialog"===e.toLowerCase()?this.setAttribute("method",e):d.call(this,e)},Object.defineProperty(HTMLFormElement.prototype,"method",c)}}document.addEventListener("click",(function(e){if(a.formSubmitter=null,a.useValue=null,!e.defaultPrevented){var t=e.target;if(t&&o(t.form)){if(!("submit"===t.type&&["button","input"].indexOf(t.localName)>-1)){if("input"!==t.localName||"image"!==t.type)return;a.useValue=e.offsetX+","+e.offsetY}n(t)&&(a.formSubmitter=t)}}}),!1);var h=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){if(!o(this))return h.call(this);var e=n(this);e&&e.close()},document.addEventListener("submit",(function(e){var t=e.target;if(o(t)){e.preventDefault();var i=n(t);if(i){var r=a.formSubmitter;r&&r.form===t?i.close(a.useValue||r.value):i.close(),a.formSubmitter=null}}}),!0)}a.forceRegisterDialog=a.forceRegisterDialog,a.registerDialog=a.registerDialog,"function"==typeof define&&"amd"in define?define((function(){return a})):"object"==typeof e.exports?e.exports=a:window.dialogPolyfill=a}()})),o.register("ezAbo",(function(e,t){
/**
 * @license
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var n={upgradeDom:function(e,t){},upgradeElement:function(e,t){},upgradeElements:function(e){},upgradeAllRegistered:function(){},registerUpgradedCallback:function(e,t){},register:function(e){},downgradeElements:function(e){}};(n=function(){var e=[],t=[],n="mdlComponentConfigInternal_";function i(t,n){for(var i=0;i<e.length;i++)if(e[i].className===t)return void 0!==n&&(e[i]=n),e[i];return!1}function r(e){var t=e.getAttribute("data-upgraded");return null===t?[""]:t.split(",")}function o(e,t){return-1!==r(e).indexOf(t)}function s(e,t,n){if("CustomEvent"in window&&"function"==typeof window.CustomEvent)return new CustomEvent(e,{bubbles:t,cancelable:n});var i=document.createEvent("Events");return i.initEvent(e,t,n),i}function a(t,n){if(void 0===t&&void 0===n)for(var r=0;r<e.length;r++)a(e[r].className,e[r].cssClass);else{var o=t;if(void 0===n){var s=i(o);s&&(n=s.cssClass)}for(var c=document.querySelectorAll("."+n),l=0;l<c.length;l++)u(c[l],o)}}function u(a,u){if(!("object"==typeof a&&a instanceof Element))throw new Error("Invalid argument provided to upgrade MDL element.");var c=s("mdl-componentupgrading",!0,!0);if(a.dispatchEvent(c),!c.defaultPrevented){var l=r(a),d=[];if(u)o(a,u)||d.push(i(u));else{var h=a.classList;e.forEach((function(e){h.contains(e.cssClass)&&-1===d.indexOf(e)&&!o(a,e.className)&&d.push(e)}))}for(var f,p=0,m=d.length;p<m;p++){if(!(f=d[p]))throw new Error("Unable to find a registered component for the given class.");l.push(f.className),a.setAttribute("data-upgraded",l.join(","));var g=new f.classConstructor(a);g[n]=f,t.push(g);for(var v=0,y=f.callbacks.length;v<y;v++)f.callbacks[v](a);f.widget&&(a[f.className]=g);var b=s("mdl-componentupgraded",!0,!1);a.dispatchEvent(b)}}}function c(e){if(e){var i=t.indexOf(e);t.splice(i,1);var r=e.element_.getAttribute("data-upgraded").split(","),o=r.indexOf(e[n].classAsString);r.splice(o,1),e.element_.setAttribute("data-upgraded",r.join(","));var a=s("mdl-componentdowngraded",!0,!1);e.element_.dispatchEvent(a)}}return{upgradeDom:a,upgradeElement:u,upgradeElements:function e(t){Array.isArray(t)||(t=t instanceof Element?[t]:Array.prototype.slice.call(t));for(var n,i=0,r=t.length;i<r;i++)(n=t[i])instanceof HTMLElement&&(u(n),n.children.length>0&&e(n.children))},upgradeAllRegistered:function(){for(var t=0;t<e.length;t++)a(e[t].className)},registerUpgradedCallback:function(e,t){var n=i(e);n&&n.callbacks.push(t)},register:function(t){var r=!0;void 0===t.widget&&void 0===t.widget||(r=t.widget||t.widget);var o={classConstructor:t.constructor||t.constructor,className:t.classAsString||t.classAsString,cssClass:t.cssClass||t.cssClass,widget:r,callbacks:[]};if(e.forEach((function(e){if(e.cssClass===o.cssClass)throw new Error("The provided cssClass has already been registered: "+e.cssClass);if(e.className===o.className)throw new Error("The provided className has already been registered")})),t.constructor.prototype.hasOwnProperty(n))throw new Error("MDL component classes must not have mdlComponentConfigInternal_ defined as a property.");i(t.classAsString,o)||e.push(o)},downgradeElements:function(e){var n=function(e){t.filter((function(t){return t.element_===e})).forEach(c)};if(e instanceof Array||e instanceof NodeList)for(var i=0;i<e.length;i++)n(e[i]);else{if(!(e instanceof Node))throw new Error("Invalid argument provided to downgrade MDL nodes.");n(e)}}}}()).ComponentConfigPublic,n.ComponentConfig,n.Component,n.upgradeDom=n.upgradeDom,n.upgradeElement=n.upgradeElement,n.upgradeElements=n.upgradeElements,n.upgradeAllRegistered=n.upgradeAllRegistered,n.registerUpgradedCallback=n.registerUpgradedCallback,n.register=n.register,n.downgradeElements=n.downgradeElements,window.componentHandler=n,window.componentHandler=n,window.addEventListener("load",(function(){"classList"in document.createElement("div")&&"querySelector"in document&&"addEventListener"in window&&Array.prototype.forEach?(document.documentElement.classList.add("mdl-js"),n.upgradeAllRegistered()):(n.upgradeElement=function(){},n.register=function(){})}))})),o.register("45J63",(function(e,t){
/**
 * @license
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var n;n=function(e){this.element_=e,this.init()},window.MaterialButton=n,n.prototype.Constant_={},n.prototype.CssClasses_={RIPPLE_EFFECT:"mdl-js-ripple-effect",RIPPLE_CONTAINER:"mdl-button__ripple-container",RIPPLE:"mdl-ripple"},n.prototype.blurHandler_=function(e){e&&this.element_.blur()},n.prototype.disable=function(){this.element_.disabled=!0},n.prototype.disable=n.prototype.disable,n.prototype.enable=function(){this.element_.disabled=!1},n.prototype.enable=n.prototype.enable,n.prototype.init=function(){if(this.element_){if(this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT)){var e=document.createElement("span");e.classList.add(this.CssClasses_.RIPPLE_CONTAINER),this.rippleElement_=document.createElement("span"),this.rippleElement_.classList.add(this.CssClasses_.RIPPLE),e.appendChild(this.rippleElement_),this.boundRippleBlurHandler=this.blurHandler_.bind(this),this.rippleElement_.addEventListener("mouseup",this.boundRippleBlurHandler),this.element_.appendChild(e)}this.boundButtonBlurHandler=this.blurHandler_.bind(this),this.element_.addEventListener("mouseup",this.boundButtonBlurHandler),this.element_.addEventListener("mouseleave",this.boundButtonBlurHandler)}},componentHandler.register({constructor:n,classAsString:"MaterialButton",cssClass:"mdl-js-button",widget:!0})})),o.register("9P2Za",(function(e,t){
/**
 * @license
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var n;n=function(e){this.element_=e,this.init()},window.MaterialProgress=n,n.prototype.Constant_={},n.prototype.CssClasses_={INDETERMINATE_CLASS:"mdl-progress__indeterminate"},n.prototype.setProgress=function(e){this.element_.classList.contains(this.CssClasses_.INDETERMINATE_CLASS)||(this.progressbar_.style.width=e+"%")},n.prototype.setProgress=n.prototype.setProgress,n.prototype.setBuffer=function(e){this.bufferbar_.style.width=e+"%",this.auxbar_.style.width=100-e+"%"},n.prototype.setBuffer=n.prototype.setBuffer,n.prototype.init=function(){if(this.element_){var e=document.createElement("div");e.className="progressbar bar bar1",this.element_.appendChild(e),this.progressbar_=e,(e=document.createElement("div")).className="bufferbar bar bar2",this.element_.appendChild(e),this.bufferbar_=e,(e=document.createElement("div")).className="auxbar bar bar3",this.element_.appendChild(e),this.auxbar_=e,this.progressbar_.style.width="0%",this.bufferbar_.style.width="100%",this.auxbar_.style.width="0%",this.element_.classList.add("is-upgraded")}},componentHandler.register({constructor:n,classAsString:"MaterialProgress",cssClass:"mdl-js-progress",widget:!0})})),o.register("3TzKX",(function(e,t){
/**
 * @license
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var n;n=function(e){this.element_=e,this.init()},window.MaterialSpinner=n,n.prototype.Constant_={MDL_SPINNER_LAYER_COUNT:4},n.prototype.CssClasses_={MDL_SPINNER_LAYER:"mdl-spinner__layer",MDL_SPINNER_CIRCLE_CLIPPER:"mdl-spinner__circle-clipper",MDL_SPINNER_CIRCLE:"mdl-spinner__circle",MDL_SPINNER_GAP_PATCH:"mdl-spinner__gap-patch",MDL_SPINNER_LEFT:"mdl-spinner__left",MDL_SPINNER_RIGHT:"mdl-spinner__right"},n.prototype.createLayer=function(e){var t=document.createElement("div");t.classList.add(this.CssClasses_.MDL_SPINNER_LAYER),t.classList.add(this.CssClasses_.MDL_SPINNER_LAYER+"-"+e);var n=document.createElement("div");n.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE_CLIPPER),n.classList.add(this.CssClasses_.MDL_SPINNER_LEFT);var i=document.createElement("div");i.classList.add(this.CssClasses_.MDL_SPINNER_GAP_PATCH);var r=document.createElement("div");r.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE_CLIPPER),r.classList.add(this.CssClasses_.MDL_SPINNER_RIGHT);for(var o=[n,i,r],s=0;s<o.length;s++){var a=document.createElement("div");a.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE),o[s].appendChild(a)}t.appendChild(n),t.appendChild(i),t.appendChild(r),this.element_.appendChild(t)},n.prototype.createLayer=n.prototype.createLayer,n.prototype.stop=function(){this.element_.classList.remove("is-active")},n.prototype.stop=n.prototype.stop,n.prototype.start=function(){this.element_.classList.add("is-active")},n.prototype.start=n.prototype.start,n.prototype.init=function(){if(this.element_){for(var e=1;e<=this.Constant_.MDL_SPINNER_LAYER_COUNT;e++)this.createLayer(e);this.element_.classList.add("is-upgraded")}},componentHandler.register({constructor:n,classAsString:"MaterialSpinner",cssClass:"mdl-js-spinner",widget:!0})})),o.register("hWGzj",(function(e,t){
/**
 * @license
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
//# sourceMappingURL=index.d8b31c4d.js.map