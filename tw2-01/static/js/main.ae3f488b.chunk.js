(this["webpackJsonptw2-01-quiz"]=this["webpackJsonptw2-01-quiz"]||[]).push([[0],{40:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),a=n(14),o=n.n(a),r=(n(40),n(11)),l=n(16),s=n(32),_=n(33),u=n(9).actionTypes,d={nav_fetching:!1,nav_fetched:!1,nav_fetch_error:"",nav_data:[],nav_dataLength:0},h={multiple_choice_fetching:!1,multiple_choice_fetched:!1,multiple_choice_fetch_error:"",multiple_choice_data:[],multiple_choice_dataLength:0},p=Object(l.b)({reducerMainNav:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u.MAIN_NAV_START_FETCHING:return{fetching:!0,nav_data:[]};case u.MAIN_NAV_FETCHED:return{nav_data:t.data,nav_fetched:!0,nav_dataLength:t.data.length};case u.MAIN_NAV_FETCH_ERROR:return{nav_fetched:!1,nav_fetching:!1,nav_fetch_error:t.error};default:return e}},reducerMultipleChoice:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u.MULTIPLE_CHOICE_START_FETCHING:return{multiple_choice_fetching:!0,multiple_choice_data:[]};case u.MULTIPLE_CHOICE_FETCHED:return{multiple_choice_data:t.data,multiple_choice_fetched:!0,multiple_choice_dataLength:t.data.length};case u.MULTIPLE_CHOICE_FETCH_ERROR:return{multiple_choice_fetched:!1,multiple_choice_fetching:!1,multiple_choice_fetch_error:t.error};default:return e}}}),j=Object(l.a)(_.a,Object(s.createLogger)()),f=Object(l.c)(p,j),O=n(15),T=n(3),m=n(9),E=n(13),v=n.n(E),g="https://yellow-website.com/d9-quiz",C=n(1);var b=function(){return Object(C.jsx)("div",{children:"Home page"})},I=n(19),N=n.n(I),x=n(34),H=n(35);var y=function(){var e=Object(r.c)((function(e){return e.reducerMultipleChoice.multiple_choice_data})),t=Object(c.useState)([]),n=Object(H.a)(t,2),i=n[0],a=n[1];Object(c.useEffect)((function(){var t=new Date,n=[];e.length>0&&e.map((function(e){return n.push({uid:e.uid,uuid:e.uuid,nid:e.nid,ans:e.field_answer,ans_given:"",date:t.getTime()})})),localStorage.setItem("quiz",JSON.stringify(n))}),[e]);var o=function(e){var t=e.target.value,n=e.target.name,c=JSON.parse(localStorage.getItem("quiz"));c.map((function(e){return e.nid===n&&(e.ans_given=t),e})),localStorage.setItem("quiz",JSON.stringify(c)),a(JSON.parse(localStorage.getItem("quiz")))},l=function(){var e=Object(x.a)(N.a.mark((function e(){var t;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return{headers:{Accept:"application/vnd.api+json"}},t={headers:{Accept:"application/vnd.api+json"},type:[{target_id:"article",target_type:"node_type"}],title:[{value:"This is title"}],body:[{value:"This is test text for body contente",format:"plain_text"}]},e.next=4,v.a.post("".concat(g,"/node"),t).then((function(e){console.log(e)})).catch((function(e){return console.log(e)}));case 4:console.log("handle submited");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return console.log(i),localStorage.setItem("locData",JSON.stringify(i)),Object(C.jsxs)("div",{children:[Object(C.jsx)("h1",{children:"Mulitple Choice"}),e.length>0&&e.map((function(e){return Object(C.jsxs)("div",{className:"p-3",children:[Object(C.jsx)("div",{dangerouslySetInnerHTML:{__html:e.field_multiple_choice_questions}}),Object(C.jsxs)("div",{className:"flex p-3",children:[Object(C.jsx)("div",{dangerouslySetInnerHTML:{__html:e.field_option_one}}),Object(C.jsx)("input",{className:"mt-2 ml-3",type:"radio",name:e.nid,value:"1",onChange:o})]}),Object(C.jsxs)("div",{className:"flex p-3",children:[Object(C.jsx)("div",{dangerouslySetInnerHTML:{__html:e.field_option_two}}),Object(C.jsx)("input",{className:"mt-2 ml-3",type:"radio",name:e.nid,value:"2",onChange:o})]}),Object(C.jsxs)("div",{className:"flex p-3",children:[Object(C.jsx)("div",{dangerouslySetInnerHTML:{__html:e.field_option_three}}),Object(C.jsx)("input",{className:"mt-2 ml-3",type:"radio",name:e.nid,value:"3",onChange:o})]}),Object(C.jsxs)("div",{className:"flex p-3",children:[Object(C.jsx)("div",{dangerouslySetInnerHTML:{__html:e.field_option_four}}),Object(C.jsx)("input",{className:"mt-2 ml-3",type:"radio",name:e.nid,value:"4",onChange:o})]})]},e.uuid)})),Object(C.jsx)("div",{children:Object(C.jsx)("div",{onClick:l,children:"submit"})})]})};var L=function(){return Object(C.jsx)("div",{children:Object(C.jsx)(y,{})})};var A=function(){var e=Object(r.b)();return Object(c.useEffect)((function(){e(function(){var e={headers:{Accept:"application/vnd.api+json"}},t="".concat(g,"/api/menu_items/main"),n="http://localhost:3000"===window.location.origin?"./data/mainnav.json":t,c="".concat(g,"/rest/multiple-choice-question"),i="http://localhost:3000"===window.location.origin?"./data/multipleChoice.json":c;return function(t){t({type:m.actionTypes.MAIN_NAV_START_FETCHING}),v.a.get(n,e).then((function(e){t({type:m.actionTypes.MAIN_NAV_FETCHED,data:e.data})})).catch((function(e){t({type:m.actionTypes.MAIN_NAV_FETCH_ERROR,fetched:!1,error:e})})),t({type:m.actionTypes.MULTIPLE_CHOICE_START_FETCHING}),v.a.get(i,e).then((function(e){t({type:m.actionTypes.MULTIPLE_CHOICE_FETCHED,data:e.data})})).catch((function(e){t({type:m.actionTypes.MULTIPLE_CHOICE_FETCH_ERROR,fetched:!1,error:e})}))}}())})),Object(C.jsxs)(O.a,{children:[Object(C.jsx)("nav",{children:Object(C.jsxs)("ul",{children:[Object(C.jsx)("li",{children:Object(C.jsx)(O.b,{to:"/",children:"Home"})}),Object(C.jsx)("li",{children:Object(C.jsx)(O.b,{to:"/quiz",children:"Quiz"})})]})}),Object(C.jsxs)(T.c,{children:[Object(C.jsx)(T.a,{exact:!0,path:"/",component:b}),Object(C.jsx)(T.a,{path:"/quiz",component:L})]})]})};var M=function(){return Object(C.jsx)(r.a,{store:f,children:Object(C.jsx)(A,{})})},R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,70)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),i(e),a(e),o(e)}))};o.a.render(Object(C.jsx)(i.a.StrictMode,{children:Object(C.jsx)(M,{})}),document.getElementById("root")),R()},9:function(e,t,n){"use strict";n.r(t),n.d(t,"actionTypes",(function(){return c}));var c={MAIN_NAV_START_FETCHING:"MAIN_NAV_START_FETCHING",MAIN_NAV_FETCHED:"MAIN_NAV_FETCHED",MAIN_NAV_FETCH_ERROR:"MAIN_NAV_FETCH_ERROR",MULTIPLE_CHOICE_START_FETCHING:"MULTIPLE_CHOICE_START_FETCHING",MULTIPLE_CHOICE_FETCHED:"MULTIPLE_CHOICE_FETCHED",MULTIPLE_CHOICE_FETCH_ERROR:"MULTIPLE_CHOICE_FETCH_ERROR"}}},[[69,1,2]]]);
//# sourceMappingURL=main.ae3f488b.chunk.js.map