webpackJsonp([1],{0:function(t,e,r){t.exports=r("x35b")},"4tXX":function(t,e){},"88WS":function(t,e){},G3BA:function(t,e){},Is0A:function(t,e){},PPql:function(t,e){},RTkk:function(t,e){},g9BH:function(t,e){},x35b:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r("/5sW"),o=r("Z60a"),a=r.n(o),i=r("T/v0"),s=r.n(i),c=r("j/rp"),u=r.n(c),d=r("Oy1H"),l=r.n(d),p=r("EOM2"),f=(r("uDYd"),r("gbyG"),r("Gh7F"),{name:"VTable",components:{},props:{sortKey:{type:String},columns:{type:Array},rows:{type:Array}},data:function(){return{sortColumn:"",search:"",ascending:!1,reverse:!1,sortNumbers:["price"]}},computed:{},methods:{label:function(t){switch(t){case"name":return"Product Name";case"price":return"Product Price";case"category":return"Product Category";default:return""}},sortBy:function(t){this.sortColumn===t?this.ascending=!this.ascending:(this.ascending=!0,this.sortColumn=t);var e=this.ascending;this.sortNumbers.includes(t)?this.sortNumber(t,e):this.sortString(t,e)},sortString:function(t,e){this.rows.sort(function(r,n){var o=r[t].toUpperCase(),a=n[t].toUpperCase();return o>a?e?1:-1:o<a?e?-1:1:0})},sortNumber:function(t,e){this.rows.sort(function(r,n){var o=r[t],a=n[t],i=0===o.indexOf("$")?parseFloat(o.substr(1)):parseFloat(o),s=0===a.indexOf("$")?parseFloat(a.substr(1)):parseFloat(a);return i>s?e?1:-1:i<s?e?-1:1:0})}},mounted:function(){}}),h=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("table",[r("thead",[r("tr",t._l(t.columns,function(e){return r("th",{on:{click:function(r){t.sortBy(e)}}},[r("span",[t._v(t._s(t.label(e)))]),e==t.sortColumn?r("i",{staticClass:"fas",class:t.ascending?"fa-caret-up":"fa-caret-down"}):t._e()])}))]),r("tbody",t._l(t.rows,function(e){return r("tr",t._l(t.columns,function(n){return r("td",[t._v(" "+t._s(e[n]))])}))}))])},m=[],v=r("XyMi");function y(t){r("4tXX")}var b=!1,g=y,_="data-v-7a08e3ec",P=null,C=Object(v["a"])(f,h,m,b,g,_,P),w=C.exports,x=r("mtWM"),N=r.n(x),$={name:"ProductList",components:{VTable:w},data:function(){return{rows:[],sortKey:"name",columns:["name","price","category"]}},computed:{},methods:{getProductList:function(){var t=this,e="http://usweb.dotomi.com/resources/swfs/cookies.json";return N.a.get(e).then(function(e){t.rows=e.data}).catch(function(t){console.log(t)})}},mounted:function(){var t=this;this.getProductList(),this.$bus.$on("addNewProduct",function(e){t.rows.push(e)})}},O=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"product-list"},[r("v-table",{attrs:{sortKey:t.sortKey,columns:t.columns,rows:t.rows}})],1)},A=[];function j(t){r("RTkk")}var S=!1,k=j,E="data-v-475342e5",B=null,T=Object(v["a"])($,O,A,S,k,E,B),F=T.exports,V=(r("EuXz"),{name:"VTextInput",props:{label:{type:String},id:{type:String,default:""},value:{type:[String,Number],default:""},maxlength:{type:[String,Number]},placeholder:{type:String},validation:{type:Boolean,default:!0},required:{type:Boolean,default:!1}},data:function(){return{}},methods:{input:function(t){var e=t.target.value;this.$emit("input",e)}}}),X=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"text-input"},[r("label",{staticClass:"text-input__label",attrs:{for:t.id}},[t._v(t._s(t.label))]),r("input",{class:["text__input-type",t.validation?"valid":"not-valid"],attrs:{type:"text",id:t.id,maxlength:t.maxlength,placeholder:t.placeholder,required:t.required},domProps:{value:t.value},on:{input:t.input}})])},q=[];function H(t){r("88WS")}var L=!1,R=H,G="data-v-5e8d29af",I=null,K=Object(v["a"])(V,X,q,L,R,G,I),M=K.exports,W={name:"VButton",props:{label:{type:String},classes:{type:String,default:"button--primary"}},methods:{clickHandler:function(){this.$emit("buttonClick")}}},D=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("button",{staticClass:"button",class:t.classes,attrs:{type:"button"},on:{click:t.clickHandler}},[t._v(t._s(t.label))])},U=[];function z(t){r("g9BH")}var J=!1,Y=z,Z="data-v-3ef53948",Q=null,tt=Object(v["a"])(W,D,U,J,Y,Z,Q),et=tt.exports,rt={name:"AddNewProduct",components:{VTextInput:M,VButton:et},data:function(){return{name:"",price:"",category:"",productAdded:"",validName:!0,validPrice:!0,validCategory:!0}},methods:{productName:function(t){t&&(this.validName=!0,this.productAdded=""),this.name=t},productPrice:function(t){var e=/^[+-]?[0-9]{1,3}(?:,?[0-9]{3})*(?:\.[0-9]{2})?$/;!t||e.test(t)?this.validPrice=!0:this.validPrice=!1,this.price=t,this.productAdded=""},productCategory:function(t){t&&(this.validCategory=!0,this.productAdded=""),this.category=t},addProduct:function(){if(this.name||(this.validName=!1),this.price||(this.validPrice=!1),this.category||(this.validCategory=!1),this.validateForm()&&this.validPrice){var t={name:this.name,price:this.dollarSymbol(this.price),category:this.category};this.$bus.$emit("addNewProduct",t),this.productAdded=this.name,this.clearProduct()}},dollarSymbol:function(t){return 0===this.price.indexOf("$")?t:"$"+t},validateForm:function(){return!!(this.name&&this.price&&this.category)},clearProduct:function(){this.name="",this.price="",this.category=""}}},nt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"product-list__add-new-product"},[r("section",{staticClass:"product-list__add-product"},[r("h2",[t._v("Add New Product")]),r("v-text-input",{attrs:{label:"Product Name",id:"productName",value:t.name,placeholder:"Enter Product Name",validation:t.validName},on:{input:t.productName}}),r("v-text-input",{attrs:{label:"Price",id:"productPrice",value:t.price,placeholder:"Enter Price",validation:t.validPrice},on:{input:t.productPrice}}),r("v-text-input",{attrs:{label:"Category",id:"productCategory",value:t.category,placeholder:"Enter Category",validation:t.validCategory},on:{input:t.productCategory}}),r("v-button",{attrs:{label:"Add Product",classes:"button--primary"},on:{buttonClick:t.addProduct}})],1),t.productAdded?r("p",{staticClass:"product-list__add-product-success"},[r("strong",[t._v(t._s(t.productAdded)+" product was successfully added to the product list.")])]):t._e()])},ot=[];function at(t){r("PPql")}var it=!1,st=at,ct="data-v-f6ebfa48",ut=null,dt=Object(v["a"])(rt,nt,ot,it,st,ct,ut),lt=dt.exports,pt={name:"Products",components:{ProductList:F,AddNewProduct:lt}},ft=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"products"},[r("h1",[t._v("Product List")]),r("div",{staticClass:"products__wrapper"},[r("product-list"),r("add-new-product")],1)])},ht=[];function mt(t){r("Is0A")}var vt=!1,yt=mt,bt="data-v-fac475da",gt=null,_t=Object(v["a"])(pt,ft,ht,vt,yt,bt,gt),Pt=_t.exports,Ct=this&&this.__decorate||function(t,e,r,n){var o,a=arguments.length,i=a<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"===l()(Reflect)&&"function"===typeof Reflect.decorate)i=Reflect.decorate(t,e,r,n);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(i=(a<3?o(i):a>3?o(e,r,i):o(e,r))||i);return a>3&&i&&Object.defineProperty(e,r,i),i},wt=function(t){function e(){return a()(this,e),s()(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return u()(e,t),e}(p["Vue"]);wt=Ct([Object(p["Component"])({components:{Products:Pt}})],wt);var xt=wt,Nt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("products")],1)},$t=[];function Ot(t){r("G3BA")}var At=!1,jt=Ot,St=null,kt=null,Et=Object(v["a"])(xt,Nt,$t,At,jt,St,kt),Bt=Et.exports;n["default"].prototype.$bus=new n["default"]({}),n["default"].config.productionTip=!1,new n["default"]({render:function(t){return t(Bt)}}).$mount("#app")}},[0]);
//# sourceMappingURL=app.642d0ea4.js.map