(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{246:function(e,t,r){"use strict";r.r(t);r(32),r(43),r(154);var n={name:"JetBarStatCard",props:{title:{type:String,required:!0},number:String|Number,type:{type:String,default:"info",validator:function(e){return["info","success","warning","danger"].includes(e)}}},computed:{cardIconColors:function(){return{info:"text-blue-600 bg-blue-200 dark:text-blue-200 dark:bg-blue-600",success:"text-green-600 bg-green-200 dark:text-green-200 dark:bg-green-600",warning:"text-yellow-600 bg-yellow-200 dark:text-orange-200 dark:bg-orange-600",danger:"text-red-600 bg-red-200 dark:text-red-200 dark:bg-red-600"}[this.type]}}},d=r(3),component=Object(d.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"flex items-center py-2 px-4 bg-white border rounded-lg shadow dark:bg-gray-800"},[this.$slots.icon?r("div",{staticClass:"p-3 mr-4 rounded-full",class:e.cardIconColors},[e._t("icon")],2):e._e(),e._v(" "),r("div",[r("p",{staticClass:"mb-2 text-sm font-medium text-gray-600 dark:text-gray-400"},[e._v("\n            "+e._s(e.title)+"\n        ")]),e._v(" "),r("p",{staticClass:"text-lg font-semibold text-gray-700 dark:text-gray-200"},[e._v("\n            "+e._s(e.number)+"\n        ")])])])}),[],!1,null,null,null);t.default=component.exports}}]);