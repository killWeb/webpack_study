(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{112:function(e,t,n){
/*! @license DOMPurify | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.0.8/LICENSE */
e.exports=function(){"use strict";var e=Object.hasOwnProperty,t=Object.setPrototypeOf,n=Object.isFrozen,r=Object.keys,o=Object.freeze,i=Object.seal,a=Object.create,l="undefined"!=typeof Reflect&&Reflect,c=l.apply,s=l.construct;c||(c=function(e,t,n){return e.apply(t,n)}),o||(o=function(e){return e}),i||(i=function(e){return e}),s||(s=function(e,t){return new(Function.prototype.bind.apply(e,[null].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(t))))});var u=k(Array.prototype.forEach),d=k(Array.prototype.indexOf),p=k(Array.prototype.join),f=k(Array.prototype.pop),m=k(Array.prototype.push),y=k(Array.prototype.slice),g=k(String.prototype.toLowerCase),h=k(String.prototype.match),v=k(String.prototype.replace),b=k(String.prototype.indexOf),T=k(String.prototype.trim),A=k(RegExp.prototype.test),x=L(RegExp),S=L(TypeError);function k(e){return function(t){for(var n=arguments.length,r=Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return c(e,t,r)}}function L(e){return function(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];return s(e,n)}}function _(e,r){t&&t(e,null);for(var o=r.length;o--;){var i=r[o];if("string"==typeof i){var a=g(i);a!==i&&(n(r)||(r[o]=a),i=a)}e[i]=!0}return e}function E(t){var n=a(null),r=void 0;for(r in t)c(e,t,[r])&&(n[r]=t[r]);return n}var M=o(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),w=o(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","audio","canvas","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","video","view","vkern"]),D=o(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),N=o(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),R=o(["#text"]),O=o(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns"]),F=o(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),H=o(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),C=o(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),z=i(/\{\{[\s\S]*|[\s\S]*\}\}/gm),I=i(/<%[\s\S]*|[\s\S]*%>/gm),U=i(/^data-[\-\w.\u00B7-\uFFFF]/),j=i(/^aria-[\-\w]+$/),P=i(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),G=i(/^(?:\w+script|data):/i),W=i(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205f\u3000]/g),B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function q(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var K=function(){return"undefined"==typeof window?null:window},V=function(e,t){if("object"!==(void 0===e?"undefined":B(e))||"function"!=typeof e.createPolicy)return null;var n=null;t.currentScript&&t.currentScript.hasAttribute("data-tt-policy-suffix")&&(n=t.currentScript.getAttribute("data-tt-policy-suffix"));var r="dompurify"+(n?"#"+n:"");try{return e.createPolicy(r,{createHTML:function(e){return e}})}catch(e){return console.warn("TrustedTypes policy "+r+" could not be created."),null}};return function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K(),n=function(t){return e(t)};if(n.version="2.0.14",n.removed=[],!t||!t.document||9!==t.document.nodeType)return n.isSupported=!1,n;var i=t.document,a=!1,l=t.document,c=t.DocumentFragment,s=t.HTMLTemplateElement,k=t.Node,L=t.NodeFilter,Y=t.NamedNodeMap,J=void 0===Y?t.NamedNodeMap||t.MozNamedAttrMap:Y,X=t.Text,$=t.Comment,Q=t.DOMParser,Z=t.trustedTypes;if("function"==typeof s){var ee=l.createElement("template");ee.content&&ee.content.ownerDocument&&(l=ee.content.ownerDocument)}var te=V(Z,i),ne=te&&He?te.createHTML(""):"",re=l,oe=re.implementation,ie=re.createNodeIterator,ae=re.getElementsByTagName,le=re.createDocumentFragment,ce=i.importNode,se=E(l).documentMode?l.documentMode:{},ue={};n.isSupported=oe&&void 0!==oe.createHTMLDocument&&9!==se;var de=z,pe=I,fe=U,me=j,ye=G,ge=W,he=P,ve=null,be=_({},[].concat(q(M),q(w),q(D),q(N),q(R))),Te=null,Ae=_({},[].concat(q(O),q(F),q(H),q(C))),xe=null,Se=null,ke=!0,Le=!0,_e=!1,Ee=!1,Me=!1,we=!1,De=!1,Ne=!1,Re=!1,Oe=!1,Fe=!1,He=!1,Ce=!0,ze=!0,Ie=!1,Ue={},je=_({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","plaintext","script","style","svg","template","thead","title","video","xmp"]),Pe=null,Ge=_({},["audio","video","img","source","image","track"]),We=null,Be=_({},["alt","class","for","id","label","name","pattern","placeholder","summary","title","value","style","xmlns"]),qe=null,Ke=l.createElement("form"),Ve=function(e){qe&&qe===e||(e&&"object"===(void 0===e?"undefined":B(e))||(e={}),e=E(e),ve="ALLOWED_TAGS"in e?_({},e.ALLOWED_TAGS):be,Te="ALLOWED_ATTR"in e?_({},e.ALLOWED_ATTR):Ae,We="ADD_URI_SAFE_ATTR"in e?_(E(Be),e.ADD_URI_SAFE_ATTR):Be,Pe="ADD_DATA_URI_TAGS"in e?_(E(Ge),e.ADD_DATA_URI_TAGS):Ge,xe="FORBID_TAGS"in e?_({},e.FORBID_TAGS):{},Se="FORBID_ATTR"in e?_({},e.FORBID_ATTR):{},Ue="USE_PROFILES"in e&&e.USE_PROFILES,ke=!1!==e.ALLOW_ARIA_ATTR,Le=!1!==e.ALLOW_DATA_ATTR,_e=e.ALLOW_UNKNOWN_PROTOCOLS||!1,Ee=e.SAFE_FOR_JQUERY||!1,Me=e.SAFE_FOR_TEMPLATES||!1,we=e.WHOLE_DOCUMENT||!1,Re=e.RETURN_DOM||!1,Oe=e.RETURN_DOM_FRAGMENT||!1,Fe=e.RETURN_DOM_IMPORT||!1,He=e.RETURN_TRUSTED_TYPE||!1,Ne=e.FORCE_BODY||!1,Ce=!1!==e.SANITIZE_DOM,ze=!1!==e.KEEP_CONTENT,Ie=e.IN_PLACE||!1,he=e.ALLOWED_URI_REGEXP||he,Me&&(Le=!1),Oe&&(Re=!0),Ue&&(ve=_({},[].concat(q(R))),Te=[],!0===Ue.html&&(_(ve,M),_(Te,O)),!0===Ue.svg&&(_(ve,w),_(Te,F),_(Te,C)),!0===Ue.svgFilters&&(_(ve,D),_(Te,F),_(Te,C)),!0===Ue.mathMl&&(_(ve,N),_(Te,H),_(Te,C))),e.ADD_TAGS&&(ve===be&&(ve=E(ve)),_(ve,e.ADD_TAGS)),e.ADD_ATTR&&(Te===Ae&&(Te=E(Te)),_(Te,e.ADD_ATTR)),e.ADD_URI_SAFE_ATTR&&_(We,e.ADD_URI_SAFE_ATTR),ze&&(ve["#text"]=!0),we&&_(ve,["html","head","body"]),ve.table&&(_(ve,["tbody"]),delete xe.tbody),o&&o(e),qe=e)},Ye=function(e){m(n.removed,{element:e});try{e.parentNode.removeChild(e)}catch(t){e.outerHTML=ne}},Je=function(e,t){try{m(n.removed,{attribute:t.getAttributeNode(e),from:t})}catch(e){m(n.removed,{attribute:null,from:t})}t.removeAttribute(e)},Xe=function(e){var t=void 0,n=void 0;if(Ne)e="<remove></remove>"+e;else{var r=h(e,/^[\r\n\t ]+/);n=r&&r[0]}var o=te?te.createHTML(e):e;try{t=(new Q).parseFromString(o,"text/html")}catch(e){}if(a&&_(xe,["title"]),!t||!t.documentElement){var i=(t=oe.createHTMLDocument("")).body;i.parentNode.removeChild(i.parentNode.firstElementChild),i.outerHTML=o}return e&&n&&t.body.insertBefore(l.createTextNode(n),t.body.childNodes[0]||null),ae.call(t,we?"html":"body")[0]};n.isSupported&&function(){try{var e=Xe("<x/><title>&lt;/title&gt;&lt;img&gt;");A(/<\/title/,e.querySelector("title").innerHTML)&&(a=!0)}catch(e){}}();var $e=function(e){return ie.call(e.ownerDocument||e,e,L.SHOW_ELEMENT|L.SHOW_COMMENT|L.SHOW_TEXT,(function(){return L.FILTER_ACCEPT}),!1)},Qe=function(e){return!(e instanceof X||e instanceof $||"string"==typeof e.nodeName&&"string"==typeof e.textContent&&"function"==typeof e.removeChild&&e.attributes instanceof J&&"function"==typeof e.removeAttribute&&"function"==typeof e.setAttribute&&"string"==typeof e.namespaceURI)},Ze=function(e){return"object"===(void 0===k?"undefined":B(k))?e instanceof k:e&&"object"===(void 0===e?"undefined":B(e))&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName},et=function(e,t,r){ue[e]&&u(ue[e],(function(e){e.call(n,t,r,qe)}))},tt=function(e){var t=void 0;if(et("beforeSanitizeElements",e,null),Qe(e))return Ye(e),!0;if(h(e.nodeName,/[\u0080-\uFFFF]/))return Ye(e),!0;var r=g(e.nodeName);if(et("uponSanitizeElement",e,{tagName:r,allowedTags:ve}),("svg"===r||"math"===r)&&0!==e.querySelectorAll("p, br").length)return Ye(e),!0;if(!ve[r]||xe[r]){if(ze&&!je[r]&&"function"==typeof e.insertAdjacentHTML)try{var o=e.innerHTML;e.insertAdjacentHTML("AfterEnd",te?te.createHTML(o):o)}catch(e){}return Ye(e),!0}return"noscript"===r&&A(/<\/noscript/i,e.innerHTML)||"noembed"===r&&A(/<\/noembed/i,e.innerHTML)?(Ye(e),!0):(!Ee||e.firstElementChild||e.content&&e.content.firstElementChild||!A(/</g,e.textContent)||(m(n.removed,{element:e.cloneNode()}),e.innerHTML?e.innerHTML=v(e.innerHTML,/</g,"&lt;"):e.innerHTML=v(e.textContent,/</g,"&lt;")),Me&&3===e.nodeType&&(t=e.textContent,t=v(t,de," "),t=v(t,pe," "),e.textContent!==t&&(m(n.removed,{element:e.cloneNode()}),e.textContent=t)),et("afterSanitizeElements",e,null),!1)},nt=function(e,t,n){if(Ce&&("id"===t||"name"===t)&&(n in l||n in Ke))return!1;if(Le&&A(fe,t));else if(ke&&A(me,t));else{if(!Te[t]||Se[t])return!1;if(We[t]);else if(A(he,v(n,ge,"")));else if("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==b(n,"data:")||!Pe[e])if(_e&&!A(ye,v(n,ge,"")));else if(n)return!1}return!0},rt=function(e){var t=void 0,o=void 0,i=void 0,a=void 0,l=void 0;et("beforeSanitizeAttributes",e,null);var c=e.attributes;if(c){var s={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:Te};for(l=c.length;l--;){var u=t=c[l],m=u.name,h=u.namespaceURI;if(o=T(t.value),i=g(m),s.attrName=i,s.attrValue=o,s.keepAttr=!0,s.forceKeepAttr=void 0,et("uponSanitizeAttribute",e,s),o=s.attrValue,!s.forceKeepAttr){if("name"===i&&"IMG"===e.nodeName&&c.id)a=c.id,c=y(c,[]),Je("id",e),Je(m,e),d(c,a)>l&&e.setAttribute("id",a.value);else{if("INPUT"===e.nodeName&&"type"===i&&"file"===o&&s.keepAttr&&(Te[i]||!Se[i]))continue;"id"===m&&e.setAttribute(m,""),Je(m,e)}if(s.keepAttr)if(Ee&&A(/\/>/i,o))Je(m,e);else if(A(/svg|math/i,e.namespaceURI)&&A(x("</("+p(r(je),"|")+")","i"),o))Je(m,e);else{Me&&(o=v(o,de," "),o=v(o,pe," "));var b=e.nodeName.toLowerCase();if(nt(b,i,o))try{h?e.setAttributeNS(h,m,o):e.setAttribute(m,o),f(n.removed)}catch(e){}}}}et("afterSanitizeAttributes",e,null)}},ot=function e(t){var n=void 0,r=$e(t);for(et("beforeSanitizeShadowDOM",t,null);n=r.nextNode();)et("uponSanitizeShadowNode",n,null),tt(n)||(n.content instanceof c&&e(n.content),rt(n));et("afterSanitizeShadowDOM",t,null)};return n.sanitize=function(e,r){var o=void 0,a=void 0,l=void 0,s=void 0,u=void 0;if(e||(e="\x3c!--\x3e"),"string"!=typeof e&&!Ze(e)){if("function"!=typeof e.toString)throw S("toString is not a function");if("string"!=typeof(e=e.toString()))throw S("dirty is not a string, aborting")}if(!n.isSupported){if("object"===B(t.toStaticHTML)||"function"==typeof t.toStaticHTML){if("string"==typeof e)return t.toStaticHTML(e);if(Ze(e))return t.toStaticHTML(e.outerHTML)}return e}if(De||Ve(r),n.removed=[],"string"==typeof e&&(Ie=!1),Ie);else if(e instanceof k)1===(a=(o=Xe("\x3c!--\x3e")).ownerDocument.importNode(e,!0)).nodeType&&"BODY"===a.nodeName||"HTML"===a.nodeName?o=a:o.appendChild(a);else{if(!Re&&!Me&&!we&&-1===e.indexOf("<"))return te&&He?te.createHTML(e):e;if(!(o=Xe(e)))return Re?null:ne}o&&Ne&&Ye(o.firstChild);for(var d=$e(Ie?e:o);l=d.nextNode();)3===l.nodeType&&l===s||tt(l)||(l.content instanceof c&&ot(l.content),rt(l),s=l);if(s=null,Ie)return e;if(Re){if(Oe)for(u=le.call(o.ownerDocument);o.firstChild;)u.appendChild(o.firstChild);else u=o;return Fe&&(u=ce.call(i,u,!0)),u}var p=we?o.outerHTML:o.innerHTML;return Me&&(p=v(p,de," "),p=v(p,pe," ")),te&&He?te.createHTML(p):p},n.setConfig=function(e){Ve(e),De=!0},n.clearConfig=function(){qe=null,De=!1},n.isValidAttribute=function(e,t,n){qe||Ve({});var r=g(e),o=g(t);return nt(r,o,n)},n.addHook=function(e,t){"function"==typeof t&&(ue[e]=ue[e]||[],m(ue[e],t))},n.removeHook=function(e){ue[e]&&f(ue[e])},n.removeHooks=function(e){ue[e]&&(ue[e]=[])},n.removeAllHooks=function(){ue={}},n}()}()}}]);