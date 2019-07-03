!function(e){function t(t){for(var o,r,a=t[0],i=t[1],l=t[2],c=0,s=[];c<a.length;c++)r=a[c],D[r]&&s.push(D[r][0]),D[r]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);for(C&&C(t);s.length;)s.shift()();return H.push.apply(H,l||[]),n()}function n(){for(var e,t=0;t<H.length;t++){for(var n=H[t],o=!0,r=1;r<n.length;r++){var a=n[r];0!==D[a]&&(o=!1)}o&&(H.splice(t--,1),e=P(P.s=n[0]))}return e}var o=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,t){if(!w[e]||!g[e])return;for(var n in g[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(h[n]=t[n]);0==--b&&0===y&&x()}(e,t),o&&o(e,t)};var r,a=!0,i="f7e03f9ad0c2b8f35bdc",l=1e4,c={},s=[],u=[];var d=[],p="idle";function f(e){p=e;for(var t=0;t<d.length;t++)d[t].call(null,e)}var m,h,v,b=0,y=0,E={},g={},w={};function O(e){return+e+""===e?+e:e}function T(e){if("idle"!==p)throw new Error("check() is only allowed in idle status");return a=e,f("check"),function(e){return e=e||1e4,new Promise(function(t,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var o=new XMLHttpRequest,r=P.p+""+i+".hot-update.json";o.open("GET",r,!0),o.timeout=e,o.send(null)}catch(e){return n(e)}o.onreadystatechange=function(){if(4===o.readyState)if(0===o.status)n(new Error("Manifest request to "+r+" timed out."));else if(404===o.status)t();else if(200!==o.status&&304!==o.status)n(new Error("Manifest request to "+r+" failed."));else{try{var e=JSON.parse(o.responseText)}catch(e){return void n(e)}t(e)}}})}(l).then(function(e){if(!e)return f("idle"),null;g={},E={},w=e.c,v=e.h,f("prepare");var t=new Promise(function(e,t){m={resolve:e,reject:t}});for(var n in h={},D)_(n);return"prepare"===p&&0===y&&0===b&&x(),t})}function _(e){w[e]?(g[e]=!0,b++,function(e){var t=document.getElementsByTagName("head")[0],n=document.createElement("script");n.charset="utf-8",n.src=P.p+""+e+"."+i+".hot-update.js",t.appendChild(n)}(e)):E[e]=!0}function x(){f("ready");var e=m;if(m=null,e)if(a)Promise.resolve().then(function(){return I(a)}).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var n in h)Object.prototype.hasOwnProperty.call(h,n)&&t.push(O(n));e.resolve(t)}}function I(t){if("ready"!==p)throw new Error("apply() is only allowed in ready status");var n,o,r,a,l;function u(e){for(var t=[e],n={},o=t.slice().map(function(e){return{chain:[e],id:e}});o.length>0;){var r=o.pop(),i=r.id,l=r.chain;if((a=S[i])&&!a.hot._selfAccepted){if(a.hot._selfDeclined)return{type:"self-declined",chain:l,moduleId:i};if(a.hot._main)return{type:"unaccepted",chain:l,moduleId:i};for(var c=0;c<a.parents.length;c++){var s=a.parents[c],u=S[s];if(u){if(u.hot._declinedDependencies[i])return{type:"declined",chain:l.concat([s]),moduleId:i,parentId:s};-1===t.indexOf(s)&&(u.hot._acceptedDependencies[i]?(n[s]||(n[s]=[]),d(n[s],[i])):(delete n[s],t.push(s),o.push({chain:l.concat([s]),id:s})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function d(e,t){for(var n=0;n<t.length;n++){var o=t[n];-1===e.indexOf(o)&&e.push(o)}}t=t||{};var m={},b=[],y={},E=function(){console.warn("[HMR] unexpected require("+T.moduleId+") to disposed module")};for(var g in h)if(Object.prototype.hasOwnProperty.call(h,g)){var T;l=O(g);var _=!1,x=!1,I=!1,H="";switch((T=h[g]?u(l):{type:"disposed",moduleId:g}).chain&&(H="\nUpdate propagation: "+T.chain.join(" -> ")),T.type){case"self-declined":t.onDeclined&&t.onDeclined(T),t.ignoreDeclined||(_=new Error("Aborted because of self decline: "+T.moduleId+H));break;case"declined":t.onDeclined&&t.onDeclined(T),t.ignoreDeclined||(_=new Error("Aborted because of declined dependency: "+T.moduleId+" in "+T.parentId+H));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(T),t.ignoreUnaccepted||(_=new Error("Aborted because "+l+" is not accepted"+H));break;case"accepted":t.onAccepted&&t.onAccepted(T),x=!0;break;case"disposed":t.onDisposed&&t.onDisposed(T),I=!0;break;default:throw new Error("Unexception type "+T.type)}if(_)return f("abort"),Promise.reject(_);if(x)for(l in y[l]=h[l],d(b,T.outdatedModules),T.outdatedDependencies)Object.prototype.hasOwnProperty.call(T.outdatedDependencies,l)&&(m[l]||(m[l]=[]),d(m[l],T.outdatedDependencies[l]));I&&(d(b,[T.moduleId]),y[l]=E)}var k,A=[];for(o=0;o<b.length;o++)l=b[o],S[l]&&S[l].hot._selfAccepted&&A.push({module:l,errorHandler:S[l].hot._selfAccepted});f("dispose"),Object.keys(w).forEach(function(e){!1===w[e]&&function(e){delete D[e]}(e)});for(var j,C,M=b.slice();M.length>0;)if(l=M.pop(),a=S[l]){var R={},L=a.hot._disposeHandlers;for(r=0;r<L.length;r++)(n=L[r])(R);for(c[l]=R,a.hot.active=!1,delete S[l],delete m[l],r=0;r<a.children.length;r++){var F=S[a.children[r]];F&&((k=F.parents.indexOf(l))>=0&&F.parents.splice(k,1))}}for(l in m)if(Object.prototype.hasOwnProperty.call(m,l)&&(a=S[l]))for(C=m[l],r=0;r<C.length;r++)j=C[r],(k=a.children.indexOf(j))>=0&&a.children.splice(k,1);for(l in f("apply"),i=v,y)Object.prototype.hasOwnProperty.call(y,l)&&(e[l]=y[l]);var q=null;for(l in m)if(Object.prototype.hasOwnProperty.call(m,l)&&(a=S[l])){C=m[l];var N=[];for(o=0;o<C.length;o++)if(j=C[o],n=a.hot._acceptedDependencies[j]){if(-1!==N.indexOf(n))continue;N.push(n)}for(o=0;o<N.length;o++){n=N[o];try{n(C)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:l,dependencyId:C[o],error:e}),t.ignoreErrored||q||(q=e)}}}for(o=0;o<A.length;o++){var W=A[o];l=W.module,s=[l];try{P(l)}catch(e){if("function"==typeof W.errorHandler)try{W.errorHandler(e)}catch(n){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:l,error:n,originalError:e}),t.ignoreErrored||q||(q=n),q||(q=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:l,error:e}),t.ignoreErrored||q||(q=e)}}return q?(f("fail"),Promise.reject(q)):(f("idle"),new Promise(function(e){e(b)}))}var S={},D={0:0},H=[];function P(t){if(S[t])return S[t].exports;var n=S[t]={i:t,l:!1,exports:{},hot:function(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:r!==e,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var o=0;o<e.length;o++)t._acceptedDependencies[e[o]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:T,apply:I,status:function(e){if(!e)return p;d.push(e)},addStatusHandler:function(e){d.push(e)},removeStatusHandler:function(e){var t=d.indexOf(e);t>=0&&d.splice(t,1)},data:c[e]};return r=void 0,t}(t),parents:(u=s,s=[],u),children:[]};return e[t].call(n.exports,n,n.exports,function(e){var t=S[e];if(!t)return P;var n=function(n){return t.hot.active?(S[n]?-1===S[n].parents.indexOf(e)&&S[n].parents.push(e):(s=[e],r=n),-1===t.children.indexOf(n)&&t.children.push(n)):(console.warn("[HMR] unexpected require("+n+") from disposed module "+e),s=[]),P(n)},o=function(e){return{configurable:!0,enumerable:!0,get:function(){return P[e]},set:function(t){P[e]=t}}};for(var a in P)Object.prototype.hasOwnProperty.call(P,a)&&"e"!==a&&"t"!==a&&Object.defineProperty(n,a,o(a));return n.e=function(e){return"ready"===p&&f("prepare"),y++,P.e(e).then(t,function(e){throw t(),e});function t(){y--,"prepare"===p&&(E[e]||_(e),0===y&&0===b&&x())}},n.t=function(e,t){return 1&t&&(e=n(e)),P.t(e,-2&t)},n}(t)),n.l=!0,n.exports}P.m=e,P.c=S,P.d=function(e,t,n){P.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},P.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},P.t=function(e,t){if(1&t&&(e=P(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(P.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)P.d(n,o,function(t){return e[t]}.bind(null,o));return n},P.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return P.d(t,"a",t),t},P.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},P.p="/beta/apps/ruledev/",P.h=function(){return i};var k=window.webpackJsonp=window.webpackJsonp||[],A=k.push.bind(k);k.push=t,k=k.slice();for(var j=0;j<k.length;j++)t(k[j]);var C=A;H.push([279,1]),n()}({115:function(e,t,n){(t=e.exports=n(4)(!1)).i(n(278),""),t.push([e.i,":root {\n  --ins-color--orange: #ec7a08; }\n\nbutton:focus {\n  outline: none; }\n",""])},277:function(e,t,n){var o=n(115);"string"==typeof o&&(o=[[e.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0},a=n(5)(o,r);o.locals&&(e.exports=o.locals),e.hot.accept(115,function(){var t=n(115);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var n,o=0;for(n in e){if(!t||e[n]!==t[n])return!1;o++}for(n in t)o--;return 0===o}(o.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");a(t)}),e.hot.dispose(function(){a()})},279:function(e,t,n){"use strict";n.r(t);var o,r=n(2),a=n.n(r),i=n(18),l=n.n(i),c=n(56),s=n(57),u=n(174),d=n.n(u),p=n(192);var f=n(59),m=n.n(f),h=n(175),v=n.n(h),b=n(176),y=n.n(b),E=n(177),g=n.n(E),w=n(178),O=n.n(w),T=n(179),_=n.n(T),x=n(1),I=n.n(x),S=n(116),D=n(180),H=n.n(D),P=n(181),k=n.n(P),A=n(182),j=n.n(A),C=n(183),M=n.n(C),R=n(156),L=n(141),F=n(129),q=n(130),N=n(144),W=n(145),X=n(119),U=n(20),z=n.n(U),G=n(167),B={title:"Resolution Details",stepKey:"details",name:"step-3",fields:[{component:"description-text",name:"description-text",text:a.a.createElement("p",null,"What is the procedure needed to be taken to resolve the problem.")},{component:U.componentTypes.SWITCH,name:"workaround",label:"Is there a workaround?"},{component:U.componentTypes.TEXTAREA_FIELD,name:"workaround-description",type:"text",condition:{when:"workaround",is:!0}},{component:U.componentTypes.SELECT,name:"workaround-risk",label:"What is the risk of the workaround?",options:[{label:"Select One"},{value:"low",label:"Low"},{value:"medium",label:"Medium"},{value:"high",label:"High"},{value:"critical",label:"Critical"}],condition:{when:"workaround",is:!0}},{component:U.componentTypes.SWITCH,name:"problem-resolve",label:"Can the problem be resolved without contacting support?"},{component:U.componentTypes.SELECT,name:"steps-resolve",label:"Given the steps needed to be taken to resolve the problem, what is the risk of acting on these changes?",options:[{label:"Select One"},{value:"low",label:"Low"},{value:"medium",label:"Medium"},{value:"high",label:"High"},{value:"critical",label:"Critical"}]},{component:"description-text",name:"description-text",text:a.a.createElement("a",{href:"https://access.redhat.com/articles/3263881"},"More info")}]},J={title:"Rule Detection",name:"step-2",stepKey:"detection",nextStep:"details",fields:[{component:U.componentTypes.TEXTAREA_FIELD,name:"proactive-detection",type:"text",label:"How can this issue be proactively detected prior to a customer noticing it or before the host is impacted?"},{component:U.componentTypes.TEXTAREA_FIELD,name:"conditions",type:"text",label:"What conditions and/or events on the host cause this problem to happen?"},{component:U.componentTypes.TEXTAREA_FIELD,name:"env-details",type:"text",label:"What environmental details are required for this issue to occur?"},{component:U.componentTypes.SELECT,name:"current-conditions",label:"Given the current conditions being detected, how likely is the problem about to occur in their environment?",options:[{label:"Select One"},{value:"low",label:"Low"},{value:"medium",label:"Medium"},{value:"high",label:"High"},{value:"critical",label:"Critical"}]},{component:U.componentTypes.TEXTAREA_FIELD,name:"consequence",type:"text",label:"What is the consequence if this issue was not resolved in time?"},{component:U.componentTypes.SELECT,name:"consequence",label:"Given if the consequence provided above was to occur, how severely will this impact the host’s operations?",options:[{label:"Select One"},{value:"low",label:"Low"},{value:"medium",label:"Medium"},{value:"high",label:"High"},{value:"critical",label:"Critical"}]}]},V={component:"wizard",name:"wizzard",inModal:!0,title:"Create Rule Nomination",fields:[{title:"General Info",name:"step-1",stepKey:1,nextStep:"detection",fields:[{component:"description-text",name:"description-text",text:a.a.createElement("i",null,"The intended use for this form is to nominate known issues, optimizations or problematic conditions for their evaluation to be added into Red Hat Insights as a new rule. The submission of this form will initiate a review process of the proposed rule candidate prior to its development by our team and release. If there are any questions, please email ",a.a.createElement("a",{href:"mailto:insights-rule-discuss@redhat.com"},"insights-rule-discuss@redhat.com"))},{component:U.componentTypes.TEXT_FIELD,name:"description",type:"text",label:"Provide a brief description of the issue"},{component:U.componentTypes.TEXTAREA_FIELD,name:"documentation",type:"text",label:"Provide any associated supporting documentation"},{component:U.componentTypes.SELECT,name:"category",label:"Which category does this issue fall under?",options:[{label:"Select One"},{value:"availability",label:"Availability"},{value:"stability",label:"Stability"},{value:"security",label:"Security"},{value:"performance",label:"Performance"}]},{component:U.componentTypes.SELECT,name:"select-one",label:"What supported Red Hat products and versions does this issue impact?",options:[{label:"Multi-Select "},{value:"rhel-6",label:"RHEL 6"},{value:"rhel-7",label:"RHEL 7"},{value:"rhel-8",label:"RHEL 8"},{value:"ocp",label:"OCP"},{value:"osp",label:"OSP"},{value:"rhv",label:"RHV"},{value:"jboss",label:"JBoss"},{value:"satelite",label:"Satellite"},{value:"cloudforms",label:"Cloudforms"},{value:"ansible",label:"Ansible"},{value:"other",label:"Other"}],multi:!0}]},J,B]},K=function(e){var t=e.text;return a.a.createElement("span",null,t)};K.propTypes={text:I.a.string};var Q=function(e){var t=e.onSubmit,n=e.onCancel,o=e.isOpen;return a.a.createElement(a.a.Fragment,null,o&&a.a.createElement(z.a,{formFieldsMapper:m()({},G.formFieldsMapper,{"description-text":K}),layoutMapper:G.layoutMapper,schema:{fields:[V]},onSubmit:t,onCancel:n,showFormControls:!1}))};Q.propTypes={isOpen:I.a.bool,onSubmit:I.a.func,onCancel:I.a.func},Q.defaultProps={isOpen:!1,onSubmit:function(){},onCancel:function(){}};var Y=Q,Z=function(){var e=Object(r.useState)(!1),t=M()(e,2),n=t[0],o=t[1];return a.a.createElement(a.a.Fragment,null,a.a.createElement(R.PageHeader,{className:"pf-m-light"},a.a.createElement(R.PageHeaderTitle,{title:"Rules definition"})),a.a.createElement(R.Main,null,a.a.createElement(L.a,{gutter:"md",sm:12,md:6,lg:4},a.a.createElement(F.a,null,a.a.createElement(q.a,null,a.a.createElement(N.a,null,a.a.createElement(W.a,{isFilled:!0},"To recommend a known issue, optimization or problematic condition to be added into Red Hat Insights as a new rule to be developed by the Insights team:"),a.a.createElement(W.a,null,a.a.createElement(X.a,{variant:X.c.link,onClick:function(){return o(!0)}},"Visit Nomination Form"))))),a.a.createElement(F.a,null,a.a.createElement(q.a,null,a.a.createElement(N.a,null,a.a.createElement(W.a,{isFilled:!0},"If interested in developing and contributing Insights rules on your own, or viewing Red Hat Insights rule developer documentation:"),a.a.createElement(W.a,null,a.a.createElement(X.a,{variant:X.c.link},"Visit Rule Documentation")))))),a.a.createElement(Y,{onCancel:function(){return o(!1)},onSubmit:function(){return o(!1)},isOpen:n})))};Z.propTypes={},Z.defaultProps={};var $=Z,ee={home:"/"},te=function(e){var t=e.component,n=e.rootClass,o=k()(e,["component","rootClass"]),r=document.getElementById("root");return r.removeAttribute("class"),r.classList.add("page__".concat(n),"pf-c-page__main"),r.setAttribute("role","main"),a.a.createElement(S.d,H()({},o,{component:t}))};te.propTypes={component:I.a.func,rootClass:I.a.string};var ne=function(e){var t=e.childProps.location.pathname;return a.a.createElement(S.g,null,a.a.createElement(te,{path:ee.home,component:$,rootClass:"homePage"}),a.a.createElement(S.d,{render:function(){return j()(ee,function(e){return e===t})?null:a.a.createElement(S.c,{to:ee.home})}}))},oe=(n(277),function(e){function t(){return v()(this,t),g()(this,O()(t).apply(this,arguments))}return _()(t,e),y()(t,[{key:"componentDidMount",value:function(){var e=this;insights.chrome.init(),insights.chrome.identifyApp("ruledev"),insights.chrome.navigation(ae()),this.appNav=insights.chrome.on("APP_NAVIGATION",function(t){return e.props.history.push("/".concat(t.navId))}),this.buildNav=this.props.history.listen(function(){return insights.chrome.navigation(ae())})}},{key:"componentWillUnmount",value:function(){this.appNav(),this.buildNav()}},{key:"render",value:function(){return a.a.createElement(ne,{childProps:this.props})}}]),t}(r.Component));oe.propTypes={history:I.a.object};var re=Object(S.k)(Object(s.connect)()(oe));function ae(){var e=window.location.pathname.split("/").slice(-1)[0];return[{title:"Actions",id:"actions"},{title:"Rules",id:"rules"}].map(function(t){return m()({},t,{active:t.id===e})})}var ie=function(e){var t="/",n=e.split("/");return n.shift(),"beta"===n[0]&&(n.shift(),t="/beta/"),"".concat(t).concat(n[0],"/").concat(n[1])};l.a.render(a.a.createElement(s.Provider,{store:function(){if(o)throw new Error("store already initialized");for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return o=new d.a({},[Object(p.a)()].concat(t))}().getStore()},a.a.createElement(c.BrowserRouter,{basename:ie(window.location.pathname)},a.a.createElement(re,null))),document.getElementById("root"))}});