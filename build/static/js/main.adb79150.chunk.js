(this["webpackJsonpgeo-widget"]=this["webpackJsonpgeo-widget"]||[]).push([[0],{19:function(e,a,t){e.exports={app:"App_app__9r-S2"}},22:function(e,a,t){e.exports=t(34)},27:function(e,a,t){},28:function(e,a,t){},34:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(8),o=t.n(c),i=(t(27),t(9)),s=t(19),l=t.n(s),u=(t(28),t(39)),m=t(40),p=t(38),d=function(e){var a=e.data;return r.a.createElement(u.a,{center:[a[0],a[1]],zoom:12},r.a.createElement(m.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),r.a.createElement(p.a,{position:[a[0],a[1]]}))},b=t(15),_=t.n(b),f=t(21),h=t(6),g=t.n(h),E=t(13),v=(t(17),function(e){E.a.configure({position:"bottom-left",autoClose:3e3,draggable:!0});var a=Object(n.useState)(""),t=Object(i.a)(a,2),c=t[0],o=t[1],s=Object(n.useState)([]),l=Object(i.a)(s,2),u=l[0],m=l[1],p=Object(n.useState)(!1),d=Object(i.a)(p,2),b=d[0],h=d[1],v=Object(n.useCallback)((function(e){e&&E.a.error(e)}),[]),k=Object(n.useCallback)(Object(f.a)(_.a.mark((function e(){var a,t;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://nominatim.openstreetmap.org/search/?format=json&q=".concat(c),e.next=3,fetch(a);case 3:t=e.sent,""===c?v("Enter a location!"):(t.ok&&t.json().then((function(e){m(e)})),h(!0));case 5:case"end":return e.stop()}}),e)}))),[c]),S=u.map((function(a,t){var n=a.display_name,c=a.type,o=a.lat,i=a.lon,s=JSON.stringify(c).toUpperCase().replace(/['"]+/g,"");return r.a.createElement("div",{key:t,onClick:function(){var a;a=[o,i],e.passData(a),k()},className:b?"".concat(g.a.item," ").concat(g.a.opened):g.a.item},r.a.createElement("h3",{className:g.a.heading},n),r.a.createElement("p",{className:g.a.label},"Type: ",s))}));return r.a.createElement("div",{className:g.a.sidebar},r.a.createElement("h3",{className:g.a.heading},"Find a location"),r.a.createElement("div",{className:g.a.inputBlock},r.a.createElement("input",{type:"text",placeholder:"Enter a location",className:g.a.input,onChange:function(e){o(e.target.value)}}),r.a.createElement("a",{href:"/",className:g.a.link,onClick:function(e){e.preventDefault(),k()}},r.a.createElement("i",{className:"material-icons"},"search"))),r.a.createElement("div",{className:g.a.result},S))}),k=function(){var e=Object(n.useState)(["42.8765615","74.6070079"]),a=Object(i.a)(e,2),t=a[0],c=a[1];return r.a.createElement("div",{className:l.a.app},r.a.createElement(v,{passData:c}),r.a.createElement(d,{data:t}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,a,t){e.exports={sidebar:"Sidebar_sidebar__19OFa",inputBlock:"Sidebar_inputBlock__2bGoW",input:"Sidebar_input__3Ua1T",link:"Sidebar_link__2XWVo",result:"Sidebar_result__1b4TF",item:"Sidebar_item__1r8rv",opened:"Sidebar_opened__NEokW",heading:"Sidebar_heading__19n-h",label:"Sidebar_label__3d7Z5"}}},[[22,1,2]]]);