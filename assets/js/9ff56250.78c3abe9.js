(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{116:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),i=(n(0),n(134)),o={id:"safe-int",title:"SafeInt",sidebar_label:"SafeInt"},s={unversionedId:"scalars/safe-int",id:"scalars/safe-int",isDocsHomePage:!1,title:"SafeInt",description:'This scalar behaves just like the native GraphQLInt scalar, but it allows integers that require more than 32-bits. Any integer that is considered "safe" in JavaScript (i.e. \xb1 9,007,199,254,740,991) is considered a valid value. But if you need more than 52-bits, you should use BigInt.',source:"@site/docs/scalars/safe-int.md",slug:"/scalars/safe-int",permalink:"/docs/scalars/safe-int",editUrl:"https://github.com/urigo/graphql-scalars/edit/master/website/docs/scalars/safe-int.md",version:"current",sidebar_label:"SafeInt",sidebar:"sidebar",previous:{title:"RGBA",permalink:"/docs/scalars/rgba"},next:{title:"Time",permalink:"/docs/scalars/time"}},c=[],l={toc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This scalar behaves just like the native ",Object(i.b)("inlineCode",{parentName:"p"},"GraphQLInt"),' scalar, but it allows integers that require more than 32-bits. Any integer that is considered "safe" in JavaScript (i.e. \xb1 9,007,199,254,740,991) is considered a valid value. But if you need more than 52-bits, you should use ',Object(i.b)("inlineCode",{parentName:"p"},"BigInt"),"."),Object(i.b)("p",null,"The ",Object(i.b)("a",{parentName:"p",href:"https://facebook.github.io/graphql/#sec-Int"},"GraphQL spec")," limits its Int type to 32-bits. Maybe you've seen this error before:\n",Object(i.b)("a",{parentName:"p",href:"https://github.com/graphql/graphql-js/issues/292"},"Issue on graphql-js")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Based on ",Object(i.b)("a",{parentName:"p",href:"https://github.com/stems/graphql-bigint"},"graphql-bigint"),". Even though ",Object(i.b)("inlineCode",{parentName:"p"},"stems"),"'s implementation looks like the same with ",Object(i.b)("inlineCode",{parentName:"p"},"BigInt")," scalar, it is different because our ",Object(i.b)("inlineCode",{parentName:"p"},"BigInt")," implementation uses JavaScript's native ",Object(i.b)("inlineCode",{parentName:"p"},"BigInt")," type while ",Object(i.b)("inlineCode",{parentName:"p"},"SafeInt")," implementation doesn't support more than 52-bit integers.")))}p.isMDXComponent=!0},134:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),f=r,m=u["".concat(o,".").concat(f)]||u[f]||b[f]||i;return n?a.a.createElement(m,s(s({ref:t},l),{},{components:n})):a.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);