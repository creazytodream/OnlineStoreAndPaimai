(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/cart/cart"],{"058a":function(t,e,a){},7850:function(t,e,a){"use strict";var n=a("058a"),o=a.n(n);o.a},"8cd4":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},o=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return o})},d1b9:function(t,e,a){"use strict";a.r(e);var n=a("8cd4"),o=a("de9e");for(var i in o)"default"!==i&&function(t){a.d(e,t,function(){return o[t]})}(i);a("7850");var r=a("2877"),c=Object(r["a"])(o["default"],n["a"],n["b"],!1,null,null,null);e["default"]=c.exports},de9e:function(t,e,a){"use strict";a.r(e);var n=a("f690"),o=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,function(){return n[t]})}(i);e["default"]=o.a},f690:function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("a34a")),o=a("2f62");function i(t){return t&&t.__esModule?t:{default:t}}function r(t,e,a,n,o,i,r){try{var c=t[i](r),u=c.value}catch(s){return void a(s)}c.done?e(u):Promise.resolve(u).then(n,o)}function c(t){return function(){var e=this,a=arguments;return new Promise(function(n,o){var i=t.apply(e,a);function c(t){r(i,n,o,c,u,"next",t)}function u(t){r(i,n,o,c,u,"throw",t)}c(void 0)})}}function u(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{},n=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter(function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable}))),n.forEach(function(e){s(t,e,a[e])})}return t}function s(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var d=function(){return a.e("components/uni-number-box").then(a.bind(null,"b4b6"))},l={components:{uniNumberBox:d},data:function(){return{total:0,shoudutotal:0,daxingtotal:0,allChecked:!0,shouduallChecked:!0,daxingallChecked:!0,empty:!0,cartList:{},daxingList:{},shouduList:{},titleimg:[]}},watch:{cartList:function(t){var e=0===t.length;this.empty!==e&&(this.empty=e)}},onShow:function(){this.loadData()},computed:u({},(0,o.mapState)(["hasLogin"])),mounted:function(){console.log(this.hasLogin,"hasLogin")},methods:{navToDetailPage:function(e){var a=e.goodsId;t.navigateTo({url:"/pages/product/product?id=".concat(a,"&from=appointment")})},loadData:function(){var t=c(n.default.mark(function t(){var e;return n.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:e=this,e.$http({method:"GET",url:this.global.target+"/wx/cart/index"}).then(function(t){console.log(t);var a=t.data;if(0==a.errno){var n=a.data.cartList;e.cartList=n,console.log(a);for(var o=0;o<n.length;o++)console.log(n[o]),e.titleimg[o]=n[o].checked;e.total=a.data.cartTotal.checkedGoodsAmount;var i=a.data.shouduList;e.shouduList=i,e.shoudutotal=a.data.shouduTotal.checkedGoodsAmount;var r=a.data.daxingList;e.daxingList=r,e.daxingtotal=a.data.daxingTotal.checkedGoodsAmount}},function(t){});case 2:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),checkshop:function(t){var e=this,a=e.cartList,n=a[t];e.$http({method:"POST",params:{ids:n.productId,checkValue:1==n.checked?0:1},url:e.global.target+"/wx/cart/checked"}).then(function(n){console.log(n);var o=n.data;0==o.errno&&(e.titleimg[t]=!e.titleimg[t],console.log(e.titleimg),e.$forceUpdate(),a[t].checked=!a[t].checked,e.calcTotal("cartList","item"))},function(t){})},onImageLoad:function(t,e){this.$set(this[t][e],"loaded","loaded")},onImageError:function(t,e){this[t][e].image="/static/errorImage.jpg"},navToLogin:function(){t.navigateTo({url:"/pages/public/login"})},check:function(t,e,a){var n,o=this;"cartList"==t?n=o.cartList:"shouduList"==t?n=o.shouduList:"daxingList"==t&&(n=o.daxingList);var i=n[a];o.$http({method:"POST",params:{ids:i.productId,checkValue:1==i.checked?0:1},url:o.global.target+"/wx/cart/checked"}).then(function(i){console.log(i);var r=i.data;if(0==r.errno){if("item"===e)n[a].checked=!n[a].checked;else{var c=!o.allChecked,u=n;u.forEach(function(t){t.checked=c}),o.allChecked=c}o.calcTotal(t,e)}},function(t){})},numberChange:function(t,e){var a;"cartList"==e?a=this.cartList:"shouduList"==e?a=this.shouduList:"daxingList"==e&&(a=this.daxingList);var n=this,o=a[t.index];n.$http({method:"POST",params:{id:o.id,number:t.number},url:n.global.target+"/wx/cart/update"}).then(function(o){console.log(o);var i=o.data;0==i.errno?(a[t.index].number=t.number,n.calcTotal(e)):n.$api.msg(i.errmsg)},function(t){})},deleteCartItem:function(e,a){var n;"cartList"==a?n=this.cartList:"shouduList"==a?n=this.shouduList:"daxingList"==a&&(n=this.daxingList);var o=n[e],i=o.productId,r=this;r.$http({method:"POST",params:{productIds:i},url:this.global.target+"/wx/cart/delete"}).then(function(t){console.log(t);var o=t.data;0==o.errno&&(n.splice(e,1),r.calcTotal(a),r.getcartNumber())},function(t){}),t.hideLoading()},clearCart:function(){var e=this;t.showModal({content:"清空购物车？",success:function(t){if(t.confirm){var a=e.cartList;a.forEach(function(t){t.id+","});var n=e;n.$http({method:"POST",url:e.global.target+"/wx/cart/clear"}).then(function(t){console.log(t);var e=t.data;0==e.errno&&(n.cartList=[],n.calcTotal(),n.getcartNumber())},function(t){})}}})},calcTotal:function(t){var e;if("cartList"==t){if(e=this.cartList,0==e.length)return void(this.empty=!0);var a=0,n=!0;e.forEach(function(t){!0===t.checked?a+=t.price*t.number:!0===n&&(n=!1)}),this.allChecked=n,this.total=Number(a.toFixed(2))}else if("shouduList"==t){if(e=this.shouduList,0==e.length)return void(this.shouduempty=!0);var o=0,i=!0;e.forEach(function(t){!0===t.checked?(console.log(t.price),console.log(t.number),o+=t.price*t.number):!0===i&&(i=!1)}),this.allChecked=i,this.shoudutotal=Number(o.toFixed(2))}else if("daxingList"==t){if(e=this.daxingList,0==e.length)return void(this.shouduempty=!0);var r=0,c=!0;e.forEach(function(t){!0===t.checked?r+=t.price*t.number:!0===c&&(c=!1)}),this.allChecked=c,this.daxingtotal=Number(r.toFixed(2))}},createOrder:function(e){var a;"cartList"==e?a=this.cartList:"shouduList"==e?a=this.shouduList:"daxingList"==e&&(a=this.daxingList);var n="",o="",i="";a.forEach(function(t){t.checked&&(n+=t.id+",",o+=t.number+",",i=t.comId)}),""!=n&&""!=o?"cartList"==e?t.navigateTo({url:"/pages/order/createOrder?cartIds="+n+"&numbers="+o+"&comId="+i}):t.navigateTo({url:"/pages/submitam/submitam?cartIds="+n+"&numbers="+o+"&comId="+i}):this.$api.msg("请选择商品")},getcartNumber:function(){var e=this;e.$http({method:"GET",url:e.global.target+"/wx/cart/cartNumber"}).then(function(e){var a=e.data;0==a.errno&&(console.log(a),t.setTabBarBadge({index:3,text:""+a.data}))},function(t){})}}};e.default=l}).call(this,a("543d")["default"])}},[["3483","common/runtime","common/vendor"]]]);