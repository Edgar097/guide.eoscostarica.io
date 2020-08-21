(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{105:function(t,e,r){"use strict";r.d(e,"a",(function(){return p})),r.d(e,"b",(function(){return w}));var o=r(0),n=r.n(o);function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,o,n=function(t,e){if(null==t)return{};var r,o,n={},i=Object.keys(t);for(o=0;o<i.length;o++)r=i[o],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)r=i[o],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var u=n.a.createContext({}),s=function(t){var e=n.a.useContext(u),r=e;return t&&(r="function"==typeof t?t(e):c(c({},e),t)),r},p=function(t){var e=s(t.components);return n.a.createElement(u.Provider,{value:e},t.children)},f={inlineCode:"code",wrapper:function(t){var e=t.children;return n.a.createElement(n.a.Fragment,{},e)}},d=n.a.forwardRef((function(t,e){var r=t.components,o=t.mdxType,i=t.originalType,a=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),p=s(r),d=o,w=p["".concat(a,".").concat(d)]||p[d]||f[d]||i;return r?n.a.createElement(w,c(c({ref:e},u),{},{components:r})):n.a.createElement(w,c({ref:e},u))}));function w(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=r.length,a=new Array(i);a[0]=d;var c={};for(var l in e)hasOwnProperty.call(e,l)&&(c[l]=e[l]);c.originalType=t,c.mdxType="string"==typeof t?t:o,a[1]=c;for(var u=2;u<i;u++)a[u]=r[u];return n.a.createElement.apply(null,a)}return n.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},74:function(t,e,r){"use strict";r.r(e),r.d(e,"frontMatter",(function(){return a})),r.d(e,"metadata",(function(){return c})),r.d(e,"rightToc",(function(){return l})),r.d(e,"default",(function(){return s}));var o=r(2),n=r(6),i=(r(0),r(105)),a={id:"git-workflow-tutorial",title:"Git workflow Tutorial",sidebar_label:"Git workflow Tutorial"},c={unversionedId:"tutorials/git-workflow-tutorial",id:"tutorials/git-workflow-tutorial",isDocsHomePage:!1,title:"Git workflow Tutorial",description:"Git workflow Tutorial",source:"@site/docs/tutorials/workflow-tutorial.md",permalink:"/docs/tutorials/git-workflow-tutorial",editUrl:"https://github.com/eoscostarica/guide.eoscostarica.io/tree/master/docs/tutorials/workflow-tutorial.md",lastUpdatedBy:"Andres Gomez",lastUpdatedAt:1598003532,sidebar_label:"Git workflow Tutorial",sidebar:"docs",previous:{title:"Modern C++",permalink:"/docs/tutorials/modern-cpp"},next:{title:"Glossary",permalink:"/docs/tools/glossary"}},l=[{value:"Git workflow Tutorial",id:"git-workflow-tutorial",children:[]}],u={rightToc:l};function s(t){var e=t.components,r=Object(n.a)(t,["components"]);return Object(i.b)("wrapper",Object(o.a)({},u,r,{components:e,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"git-workflow-tutorial"},"Git workflow Tutorial"),Object(i.b)("p",null,"In this tutorial, we explain step by step how to program an open source project using the ",Object(i.b)("strong",{parentName:"p"},"GitHub")," platform. This is a repository with access to various functions and tools for project development and administration."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"GitHub")," contains a function called ",Object(i.b)("inlineCode",{parentName:"p"},"forking"),", which allows you to copy a repository from another account and request access to modify it in the user's account. In case the user decides to make sharing changes, he can send a notification to the original owner of the repository called ",Object(i.b)("inlineCode",{parentName:"p"},"pull request"),". In this way, you can unify the changes with the original repository, this is called ",Object(i.b)("inlineCode",{parentName:"p"},"merge"),"."),Object(i.b)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/K33cFzHWBt0",frameborder:"0",allowfullscreen:"true"}))}s.isMDXComponent=!0}}]);