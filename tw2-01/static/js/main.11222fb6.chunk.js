(this["webpackJsonptw2-01-quiz"]=this["webpackJsonptw2-01-quiz"]||[]).push([[0],{38:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),a=n(15),o=n.n(a),r=(n(38),n(12)),l=n(16),s=n(31),u=n(32),_=n(9).actionTypes,d={nav_fetching:!1,nav_fetched:!1,nav_fetch_error:"",nav_data:[],nav_dataLength:0},h={multiple_choice_fetching:!1,multiple_choice_fetched:!1,multiple_choice_fetch_error:"",multiple_choice_data:[],multiple_choice_dataLength:0},j=Object(l.b)({reducerMainNav:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _.MAIN_NAV_START_FETCHING:return{fetching:!0,nav_data:[]};case _.MAIN_NAV_FETCHED:return{nav_data:t.data,nav_fetched:!0,nav_dataLength:t.data.length};case _.MAIN_NAV_FETCH_ERROR:return{nav_fetched:!1,nav_fetching:!1,nav_fetch_error:t.error};default:return e}},reducerMultipleChoice:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _.MULTIPLE_CHOICE_START_FETCHING:return{multiple_choice_fetching:!0,multiple_choice_data:[]};case _.MULTIPLE_CHOICE_FETCHED:return{multiple_choice_data:t.data,multiple_choice_fetched:!0,multiple_choice_dataLength:t.data.length};case _.MULTIPLE_CHOICE_FETCH_ERROR:return{multiple_choice_fetched:!1,multiple_choice_fetching:!1,multiple_choice_fetch_error:t.error};default:return e}}}),p=Object(l.a)(u.a,Object(s.createLogger)()),m=Object(l.c)(j,p),f=n(14),O=n(3),T=n(9),b=n(10),E=n.n(b),C="https://yellow-website.com/d9-quiz",v=n(1);var g=function(){return Object(v.jsx)("div",{children:"Home page"})},I=n(33);var x=function(){var e=Object(r.c)((function(e){return e.reducerMultipleChoice.multiple_choice_data})),t=Object(c.useState)([]),n=Object(I.a)(t,2),i=n[0],a=n[1];Object(c.useEffect)((function(){var t=new Date,n=[];e.length>0&&e.map((function(e){return n.push({uid:e.uid,uuid:e.uuid,nid:e.nid,ans:e.field_answer,ans_given:"",date:t.getTime()})})),localStorage.setItem("quiz",JSON.stringify(n))}),[e]);var o=function(e){var t=e.target.value,n=e.target.name,c=JSON.parse(localStorage.getItem("quiz"));c.map((function(e){return e.nid===n&&(e.ans_given=t),e})),localStorage.setItem("quiz",JSON.stringify(c)),a(JSON.parse(localStorage.getItem("quiz")))};return console.log(i),localStorage.setItem("locData",JSON.stringify(i)),Object(v.jsxs)("div",{children:[Object(v.jsx)("h1",{children:"Mulitple Choice"}),e.length>0&&e.map((function(e){return Object(v.jsxs)("div",{className:"p-3",children:[Object(v.jsx)("div",{dangerouslySetInnerHTML:{__html:e.field_multiple_choice_questions}}),Object(v.jsxs)("div",{className:"flex p-3",children:[Object(v.jsx)("div",{dangerouslySetInnerHTML:{__html:e.field_option_one}}),Object(v.jsx)("input",{className:"mt-2 ml-3",type:"radio",name:e.nid,value:"1",onChange:o})]}),Object(v.jsxs)("div",{className:"flex p-3",children:[Object(v.jsx)("div",{dangerouslySetInnerHTML:{__html:e.field_option_two}}),Object(v.jsx)("input",{className:"mt-2 ml-3",type:"radio",name:e.nid,value:"2",onChange:o})]}),Object(v.jsxs)("div",{className:"flex p-3",children:[Object(v.jsx)("div",{dangerouslySetInnerHTML:{__html:e.field_option_three}}),Object(v.jsx)("input",{className:"mt-2 ml-3",type:"radio",name:e.nid,value:"3",onChange:o})]}),Object(v.jsxs)("div",{className:"flex p-3",children:[Object(v.jsx)("div",{dangerouslySetInnerHTML:{__html:e.field_option_four}}),Object(v.jsx)("input",{className:"mt-2 ml-3",type:"radio",name:e.nid,value:"4",onChange:o})]})]},e.uuid)})),Object(v.jsx)("div",{children:Object(v.jsx)("div",{onClick:function(){E()({method:"post",url:"".concat(C,"/jsonapi/node/article?_fromat=json"),headers:{Accept:"application/vnd.api+json","Content-Type":"application/vnd.api+json"},data:{type:"node--article",attributes:{title:"My custom title",body:{value:"Custom value",format:"plain_text"}}}}).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)})),console.log("handle submited")},children:"submit"})})]})};var N=function(){return Object(v.jsx)("div",{children:Object(v.jsx)(x,{})})};var H=function(){return Object(v.jsxs)("div",{children:[Object(v.jsx)("h1",{children:"Contact form"}),Object(v.jsx)("div",{onClick:function(){console.log("webform contact handle submit");E()("".concat(C,"/webform_rest/submit?_format=json"),{method:"POST",headers:{"Content-Type":"application/json"},data:{webform_id:"contact",name:"Test",subject:"123456789",message:"Hello"}}).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}))},children:"Submit"})]})};var L=function(){var e=Object(r.b)();return Object(c.useEffect)((function(){e(function(){var e={headers:{Accept:"application/vnd.api+json"}},t="".concat(C,"/api/menu_items/main"),n="http://localhost:3000"===window.location.origin?"./data/mainnav.json":t,c="".concat(C,"/rest/multiple-choice-question"),i="http://localhost:3000"===window.location.origin?"./data/multipleChoice.json":c;return function(t){t({type:T.actionTypes.MAIN_NAV_START_FETCHING}),E.a.get(n,e).then((function(e){t({type:T.actionTypes.MAIN_NAV_FETCHED,data:e.data})})).catch((function(e){t({type:T.actionTypes.MAIN_NAV_FETCH_ERROR,fetched:!1,error:e})})),t({type:T.actionTypes.MULTIPLE_CHOICE_START_FETCHING}),E.a.get(i,e).then((function(e){t({type:T.actionTypes.MULTIPLE_CHOICE_FETCHED,data:e.data})})).catch((function(e){t({type:T.actionTypes.MULTIPLE_CHOICE_FETCH_ERROR,fetched:!1,error:e})}))}}())})),Object(v.jsxs)(f.a,{children:[Object(v.jsx)("nav",{children:Object(v.jsxs)("ul",{children:[Object(v.jsx)("li",{children:Object(v.jsx)(f.b,{to:"/",children:"Home"})}),Object(v.jsx)("li",{children:Object(v.jsx)(f.b,{to:"/quiz",children:"Quiz"})}),Object(v.jsx)("li",{children:Object(v.jsx)(f.b,{to:"/form/contact",children:"Contact"})})]})}),Object(v.jsxs)(O.c,{children:[Object(v.jsx)(O.a,{exact:!0,path:"/",component:g}),Object(v.jsx)(O.a,{path:"/quiz",component:N}),Object(v.jsx)(O.a,{path:"/form/contact",component:H})]})]})};var y=function(){return Object(v.jsx)(r.a,{store:m,children:Object(v.jsx)(L,{})})},M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,67)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),i(e),a(e),o(e)}))};o.a.render(Object(v.jsx)(i.a.StrictMode,{children:Object(v.jsx)(y,{})}),document.getElementById("root")),M()},9:function(e,t,n){"use strict";n.r(t),n.d(t,"actionTypes",(function(){return c}));var c={MAIN_NAV_START_FETCHING:"MAIN_NAV_START_FETCHING",MAIN_NAV_FETCHED:"MAIN_NAV_FETCHED",MAIN_NAV_FETCH_ERROR:"MAIN_NAV_FETCH_ERROR",MULTIPLE_CHOICE_START_FETCHING:"MULTIPLE_CHOICE_START_FETCHING",MULTIPLE_CHOICE_FETCHED:"MULTIPLE_CHOICE_FETCHED",MULTIPLE_CHOICE_FETCH_ERROR:"MULTIPLE_CHOICE_FETCH_ERROR"}}},[[66,1,2]]]);
//# sourceMappingURL=main.11222fb6.chunk.js.map