!function(t){function e(e){for(var i,p,_=e[0],r=e[1],o=e[2],c=0,v=[];c<_.length;c++)p=_[c],Object.prototype.hasOwnProperty.call(a,p)&&a[p]&&v.push(a[p][0]),a[p]=0;for(i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i]);for(l&&l(e);v.length;)v.shift()();return n.push.apply(n,o||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],i=!0,_=1;_<s.length;_++){var r=s[_];0!==a[r]&&(i=!1)}i&&(n.splice(e--,1),t=p(p.s=s[0]))}return t}var i={},a={5:0},n=[];function p(e){if(i[e])return i[e].exports;var s=i[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,p),s.l=!0,s.exports}p.e=function(){return Promise.resolve()},p.m=t,p.c=i,p.d=function(t,e,s){p.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},p.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},p.t=function(t,e){if(1&e&&(t=p(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(p.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)p.d(s,i,function(e){return t[e]}.bind(null,i));return s},p.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return p.d(e,"a",e),e},p.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},p.p="";var _=window.webpackJsonp=window.webpackJsonp||[],r=_.push.bind(_);_.push=e,_=_.slice();for(var o=0;o<_.length;o++)e(_[o]);var l=r;n.push([105,0]),s()}({105:function(t,e,s){"use strict";s.r(e);var i=s(1),a=s.n(i),n=s(73);new a.a({data:()=>({}),components:{"index-main":n.a}}).$mount("#app")},106:function(t,e,s){t.exports=s.p+"logo_c83eb9.png"},107:function(t,e,s){"use strict";var i=s(27);s.n(i).a},108:function(t,e,s){var i=s(109);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,s(9).default)("7d39df78",i,!0,{})},109:function(t,e,s){(e=s(8)(!1)).push([t.i,".rem_demo[data-v-071b09ec]{padding-bottom:2rem}.rem_demo p[data-v-071b09ec]{font-size:.32rem;text-align:center}.rem_demo .btn[data-v-071b09ec]{width:2rem;height:.8rem;line-height:.8rem;text-align:center;font-size:.36rem;background-color:orange;color:#fff;margin:.36rem auto;border-radius:.8rem}\n",""]),t.exports=e},23:function(t,e,s){"use strict";var i=s(24);e.a=i.a},24:function(t,e,s){"use strict";var i=s(74);e.a={components:{PhoneInput:i.a},data:()=>({htmlUrl:"",canvas:""}),methods:{downPdf(){dog.dom2pdf(this.$refs.pdfDom,"pdf_item")}},created(){console.log("production")}}},25:function(t,e,s){"use strict";var i=s(26);e.a=i.a},26:function(t,e,s){"use strict";e.a={name:"PhoneInput",model:{prop:"phone",event:"update_phone"},props:{phone:{type:String},placeholder:{type:String,default:"请填写您的手机号"},autofocus:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1}},data:()=>({write:!1}),watch:{phone(t,e){this._input=t,t&&e&&t.length>e.length?this.write=!0:this.write=!1}},methods:{update(){this.$emit("update_phone",this.phone),this.$emit("input")},formatPhone(){let t=this.phone;if(this.write){if(4===t.length||9===t.length){let e=t.substring(0,t.length-1),s=t.substr(t.length-1,1);this.phone=e+" "+s}else if(t.length>=11){let e=t.replace(/\s+/g,"").substring(0,11),s=e.substring(0,3),i=e.substring(3,7),a=e.substring(7,12);this.phone=s+" "+i+" "+a}}else 4!==t.length&&9!==t.length||(this.phone=t.substring(0,t.length-1));this.$emit("keyup")}}}},27:function(t,e,s){var i=s(7),a=s(108);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[t.i,a,""]]);var n={insert:"head",singleton:!1};i(a,n);t.exports=a.locals||{}},45:function(t,e,s){"use strict";var i=s(56);s.d(e,"a",(function(){return i.a})),s.d(e,"b",(function(){return i.b}))},46:function(t,e,s){"use strict";var i=s(57);s.d(e,"a",(function(){return i.a})),s.d(e,"b",(function(){return i.b}))},56:function(t,e,s){"use strict";s.d(e,"a",(function(){return i})),s.d(e,"b",(function(){return a}));var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"pdfDom",staticClass:"rem_demo"},[i("img",{attrs:{src:s(106),alt:""}}),t._v(" "),i("p",[t._v("我是第零段文章我是第零段文章我是第零段文章我是第零段文章pppp")]),t._v(" "),i("p",{staticClass:"pdf_item"},[t._v("我是第一段文章")]),t._v(" "),i("p",{staticClass:"pdf_item"},[t._v("我是第一段文章")]),t._v(" "),i("p",{staticClass:"pdf_item"},[t._v("我是第一段文章")]),t._v(" "),i("p",{staticClass:"pdf_item"},[t._v("我是第一段文章")]),t._v(" "),i("p",{staticClass:"pdf_item"},[t._v("我是第一段文章")]),t._v(" "),i("p",{staticClass:"pdf_item"},[t._v("我是第一段文章")]),t._v(" "),i("p",{staticClass:"pdf_item"},[t._v("我是第一段文章")]),t._v(" "),i("p",{staticClass:"pdf_item"},[t._v("我是第一段文章")]),t._v(" "),i("p",{staticClass:"pdf_item"},[t._v("我是第一段文章")]),t._v(" "),i("phone-input"),t._v(" "),i("p",{staticClass:"pdf_item"},[t._v("我是第一段文章")]),t._v(" "),i("p",{staticClass:"pdf_item"},[t._v("我是第一段文章")]),t._v(" "),i("p",{staticClass:"pdf_item"},[t._v("我是第一段文章")]),t._v(" "),i("p",{staticClass:"pdf_item"},[t._v("我是第一段文章")]),t._v("\n\n\n    efiuhf\n\n\n    "),i("p",{staticClass:"pdf_item"},[t._v("我是第一段文章")]),t._v(" "),i("p",{staticClass:"pdf_item"},[t._v("我是第一段文章")]),t._v(" "),i("p",{staticClass:"pdf_item"},[t._v("我是第一段文章")]),t._v(" "),i("p",{staticClass:"pdf_item"},[t._v("我是第一段文章")]),t._v(" "),i("p",{staticClass:"pdf_item"},[t._v("我是第一段文章")]),t._v(" "),i("p",{staticClass:"pdf_item"},[t._v("我是第一段文章")]),t._v(" "),i("p",[t._v("我是最后一段文章")]),t._v(" "),i("phone-input"),t._v(" "),i("p",{staticClass:"pdf_item"},[t._v("我是第一段文章")]),t._v(" "),i("p",{staticClass:"pdf_item"},[t._v("我是第一段文章")]),t._v(" "),i("p",{staticClass:"pdf_item"},[t._v("我是第一段文章")]),t._v(" "),i("p",{staticClass:"pdf_item"},[t._v("我是第一段文章")]),t._v(" "),i("p",{staticClass:"pdf_item"},[t._v("我是第一段文章")]),t._v(" "),i("p",{staticClass:"pdf_item"},[t._v("我是第一段文章")]),t._v(" "),i("p",{staticClass:"pdf_item"},[t._v("我是第一段文章")]),t._v(" "),i("phone-input"),t._v(" "),i("p",{staticClass:"pdf_item"},[t._v("我是第一段文章")]),t._v(" "),i("p",{staticClass:"pdf_item"},[t._v("我是第一段文章")]),t._v(" "),i("p",{staticClass:"pdf_item"},[t._v("我是第一段文章")]),t._v(" "),i("p",{staticClass:"pdf_item"},[t._v("我是第一段文章")]),t._v(" "),i("p",{staticClass:"pdf_item"},[t._v("我是第一段文章")]),t._v(" "),i("p",{staticClass:"pdf_item"},[t._v("我是第一段文章")]),t._v(" "),i("p",{staticClass:"pdf_item"},[t._v("我是第一段文章")]),t._v(" "),i("p",{staticClass:"pdf_item"},[t._v("我是第一段文章")]),t._v(" "),i("p",{staticClass:"pdf_item"},[t._v("我是第一段文章")]),t._v(" "),i("p",{staticClass:"pdf_item"},[t._v("我是第一段文章")]),t._v(" "),i("p",[t._v("我是最后一段文章")]),t._v(" "),i("phone-input"),t._v(" "),i("p",{staticClass:"pdf_item"},[t._v("我是第一段文章")]),t._v(" "),i("p",{staticClass:"pdf_item"},[t._v("我是第一段文章")]),t._v(" "),i("p",{staticClass:"pdf_item"},[t._v("我是第一段文章")]),t._v(" "),i("p",{staticClass:"pdf_item"},[t._v("我是第一段文章")]),t._v(" "),i("p",{staticClass:"pdf_item"},[t._v("我是第一段文章")]),t._v(" "),i("p",{staticClass:"pdf_item"},[t._v("我是第一段文章")]),t._v(" "),i("p",{staticClass:"pdf_item"},[t._v("我是第一段文章")]),t._v(" "),i("phone-input"),t._v(" "),i("p",{staticClass:"pdf_item"},[t._v("我是第一段文章")]),t._v(" "),i("p",{staticClass:"pdf_item"},[t._v("我是第一段文章")]),t._v(" "),i("p",{staticClass:"pdf_item"},[t._v("我是第一段文章")]),t._v(" "),i("p",{staticClass:"pdf_item"},[t._v("我是第一段文章")]),t._v(" "),i("p",{staticClass:"pdf_item"},[t._v("我是第一段文章")]),t._v(" "),i("p",{staticClass:"pdf_item"},[t._v("我是第一段文章")]),t._v(" "),i("p",{staticClass:"pdf_item"},[t._v("我是第一段文章")]),t._v(" "),i("p",{staticClass:"pdf_item"},[t._v("我是第一段文章")]),t._v(" "),i("p",{staticClass:"pdf_item"},[t._v("我是第一段文章")]),t._v(" "),i("p",{staticClass:"pdf_item"},[t._v("我是第一段文章")]),t._v(" "),i("p",[t._v("我是最后一段文章")]),t._v(" "),i("phone-input"),t._v("\n    yyyyyy\n    "),i("div",{staticClass:"btn",on:{click:t.downPdf}},[t._v("下载pdf")])],1)},a=[]},57:function(t,e,s){"use strict";s.d(e,"a",(function(){return i})),s.d(e,"b",(function(){return a}));var i=function(){var t=this,e=t.$createElement;return(t._self._c||e)("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],staticClass:"common_input phone_input",attrs:{type:"tel",pattern:"[0-9]*",maxlength:"13",placeholder:t.placeholder,autofocus:t.autofocus,disabled:t.disabled},domProps:{value:t.phone},on:{input:[function(e){e.target.composing||(t.phone=e.target.value)},t.update],keyup:t.formatPhone}})},a=[]},73:function(t,e,s){"use strict";var i=s(45),a=s(23),n=(s(107),s(0)),p=Object(n.a)(a.a,i.a,i.b,!1,null,"071b09ec",null);e.a=p.exports},74:function(t,e,s){"use strict";var i=s(46),a=s(25),n=s(0),p=Object(n.a)(a.a,i.a,i.b,!1,null,null,null);e.a=p.exports}});