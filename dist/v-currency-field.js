(function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VCurrencyField=t():e.VCurrencyField=t()})(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p=".",t(t.s=10)}([function(e,t,n){"use strict";t.__esModule=!0,t.default={prefix:"",suffix:"",thousands:",",decimal:".",precision:2,allowBlank:!1,min:Number.MIN_SAFE_INTEGER,max:Number.MAX_SAFE_INTEGER}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.default=function(e,t){if(t.value){var n=(0,i.default)(l.default,t.value);if("INPUT"!==e.tagName.toLocaleUpperCase()){var r=e.getElementsByTagName("input");1!==r.length||(e=r[0])}e.onkeydown=function(t){var r=8==t.which||46==t.which,u=e.value.length-e.selectionEnd==0;n.allowBlank&&r&&u&&0===(0,o.unformat)(e.value,0)&&(e.value="",e.dispatchEvent((0,o.event)("change")))},e.oninput=function(){var t=e.value.length-e.selectionEnd;e.value=(0,o.format)(e.value,n),t=Math.max(t,n.suffix.length),t=e.value.length-t,t=Math.max(t,n.prefix.length+1),(0,o.setCursor)(e,t),e.dispatchEvent((0,o.event)("change"))},e.onfocus=function(){(0,o.setCursor)(e,e.value.length-n.suffix.length)},e.oninput(),e.dispatchEvent((0,o.event)("input"))}};var o=n(2),u=n(5),i=r(u),a=n(0),l=r(a)},function(e,t,n){"use strict";function r(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:v.default;if(t.allowBlank&&""==e)return"";"number"==typeof e&&(e>t.max?e=t.max:e<t.min&&(e=t.min),e=e.toFixed(i(t.precision)));var n=e.indexOf("-")>=0?"-":"",r=u(e),o=l(r,t.precision),a=s(o).split("."),d=a[0],p=a[1];return d=c(d,t.thousands),n+f(d,p,t.decimal)}function o(e,t){var n=e.indexOf("-")>=0?-1:1,r=u(e),o=l(r,t);return parseFloat(o)*n}function u(e){return s(e).replace(/\D+/g,"")||"0"}function i(e){return a(0,e,20)}function a(e,t,n){return Math.max(e,Math.min(t,n))}function l(e,t){var n=Math.pow(10,t);return(parseFloat(e)/n).toFixed(i(t))}function c(e,t){return e.replace(/(\d)(?=(?:\d{3})+\b)/gm,"$1"+t)}function f(e,t,n){return t?e+n+t:e}function s(e){return e?e.toString():""}function d(e,t){var n=function(){e.setSelectionRange(t,t)};e===document.activeElement&&(n(),setTimeout(n,1))}function p(e){var t=document.createEvent("Event");return t.initEvent(e,!0,!0),t}t.__esModule=!0,t.event=t.setCursor=t.unformat=t.format=void 0;var m=n(0),v=function(e){return e&&e.__esModule?e:{default:e}}(m);t.format=r,t.unformat=o,t.setCursor=d,t.event=p},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){t&&Object.keys(t).map(function(e){f.default[e]=t[e]}),e.directive("currency",l.default),e.component("v-currency-field",i.default)}t.__esModule=!0,t.VERSION=t.options=t.VMoney=t.Money=void 0;var u=n(7),i=r(u),a=n(1),l=r(a),c=n(0),f=r(c);t.Money=i.default,t.VMoney=l.default,t.options=f.default,t.VERSION="1.0.6",t.default=o,"undefined"!=typeof window&&window.Vue&&window.Vue.use(o)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(1),u=r(o),i=n(0),a=r(i),l=n(2);t.default={name:"Money",props:{value:{required:!0,type:[Number,String],default:0},masked:{type:Boolean,default:!1},precision:{type:Number,default:function(){return a.default.precision}},decimal:{type:String,default:function(){return a.default.decimal}},thousands:{type:String,default:function(){return a.default.thousands}},prefix:{type:String,default:function(){return a.default.prefix}},suffix:{type:String,default:function(){return a.default.suffix}},appendOuterIcon:String,appendOuterIconCb:Function,autofocus:Boolean,box:Boolean,browserAutocomplete:String,clearable:Boolean,clearIcon:{type:String,default:"$vuetify.icons.clear"},clearIconCb:Function,color:{type:String,default:"primary"},counter:[Boolean,Number,String],flat:Boolean,fullWidth:Boolean,label:String,outline:Boolean,placeholder:String,prependInnerIcon:String,prependInnerIconCb:Function,reverse:Boolean,singleLine:Boolean,solo:Boolean,soloInverted:Boolean,dark:Boolean,disabled:Boolean,readonly:Boolean,light:Boolean,height:String,backgroundColor:String,hint:String,persistentHint:String,error:Boolean,errorCount:{type:[Number,String],default:1},errorMessages:{type:[String,Array],default:function(){return[]}},messages:{type:[String,Array],default:function(){return[]}},rules:{type:Array,default:function(){return[]}},success:Boolean,successMessages:{type:[String,Array],default:function(){return[]}},validateOnBlur:Boolean,tabindex:String,hideDetails:Boolean},directives:{currency:u.default},data:function(){return{formattedValue:""}},computed:{classes:function(){var e={"padding-prefix":this.prefix},t="";for(var n in e)e[n]&&(t+=n+" ");return t}},watch:{value:{immediate:!0,handler:function(e,t){var n=(0,l.format)(e,this.$props);n!==this.formattedValue&&(this.formattedValue=n,this.$refs.textfield&&(this.$refs.textfield.$refs.input.value=this.formattedValue))}}},methods:{change:function(e){this.$emit("input",this.masked?e:(0,l.unformat)(e,this.precision))}}}},function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t){return e=e||{},t=t||{},Object.keys(e).concat(Object.keys(t)).reduce(function(n,r){return n[r]=void 0===t[r]?e[r]:t[r],n},{})}},function(e,t){},function(e,t,n){n(6);var r=n(8)(n(4),n(9),null,null);e.exports=r.exports},function(e,t){e.exports=function(e,t,n,r){var o,u=e=e||{},i=typeof e.default;"object"!==i&&"function"!==i||(o=e,u=e.default);var a="function"==typeof u?u.options:u;if(t&&(a.render=t.render,a.staticRenderFns=t.staticRenderFns),n&&(a._scopeId=n),r){var l=a.computed||(a.computed={});Object.keys(r).forEach(function(e){var t=r[e];l[e]=function(){return t}})}return{esModule:o,exports:u,options:a}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("v-text-field",e._b({directives:[{name:"currency",rawName:"v-currency",value:{precision:e.precision,decimal:e.decimal,thousands:e.thousands},expression:"{precision, decimal, thousands}"}],ref:"textfield",class:""+e.classes,attrs:{value:e.formattedValue,type:"tel"},on:{change:e.change}},"v-text-field",e.$props,!1))},staticRenderFns:[]}},function(e,t,n){e.exports=n(3)}])});