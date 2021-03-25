(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{108:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return s})),t.d(r,"metadata",(function(){return c})),t.d(r,"toc",(function(){return l})),t.d(r,"default",(function(){return p}));var o=t(3),n=t(7),a=(t(0),t(134)),s={id:"mocks",title:"Using GraphQL Scalars Mocks",sidebar_label:"Mocks"},c={unversionedId:"usage/mocks",id:"usage/mocks",isDocsHomePage:!1,title:"Using GraphQL Scalars Mocks",description:"GraphQL Scalars provides mock implementations out-of-box that is compatible with GraphQL Tools Mocking. It can be used with ApolloServer like below as well.",source:"@site/docs/usage/mocks.md",slug:"/usage/mocks",permalink:"/docs/usage/mocks",editUrl:"https://github.com/urigo/graphql-scalars/edit/master/website/docs/usage/mocks.md",version:"current",sidebar_label:"Mocks",sidebar:"sidebar",previous:{title:"Usage with Apollo Server",permalink:"/docs/usage/apollo-server"},next:{title:"Using the RegularExpression Scalar Factory",permalink:"/docs/usage/regex"}},l=[{value:"Using mocks with GraphQL Tools",id:"using-mocks-with-graphql-tools",children:[]},{value:"Using mocks with Apollo Server",id:"using-mocks-with-apollo-server",children:[]}],i={toc:l};function p(e){var r=e.components,t=Object(n.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},i,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("p",null,"GraphQL Scalars provides mock implementations out-of-box that is compatible with ",Object(a.b)("a",{parentName:"p",href:"https://www.graphql-tools.com/docs/mocking"},"GraphQL Tools Mocking"),". It can be used with ",Object(a.b)("inlineCode",{parentName:"p"},"ApolloServer")," like below as well."),Object(a.b)("h3",{id:"using-mocks-with-graphql-tools"},"Using mocks with GraphQL Tools"),Object(a.b)("h4",{id:"import-all-scalars-with-all-mocks"},"Import all scalars with all mocks"),Object(a.b)("p",null,"This example imports all scalars to the schema."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},"import { addMocksToSchema } from '@graphql-tools/mock';\nimport { typeDefs: scalarsTypeDefs, resolvers: scalarsResolvers, mocks: scalarsMocks } from 'graphql-scalars';\n\nconst schema = makeExecutableSchema({\n  typeDefs: [\n    ...scalarsTypeDefs,\n    // all other typeDefs\n  ],\n  resolvers: {\n    ...scalarsResolvers,\n    // all other resolvers\n  },\n});\n\nconst mockedSchema = addMocksToSchema({\n  schema,\n  mocks: {\n    ...scalarsMocks,\n    // other mocks\n  }\n});\n")),Object(a.b)("h4",{id:"import-individual-scalars-with-their-own-mocks"},"Import individual scalars with their own mocks"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},"import { addMocksToSchema } from '@graphql-tools/mock';\nimport { DateTimeTypeDefinition, DateTimeResolver, DateTimeMock } from 'graphql-scalars';\n\nconst schema = makeExecutableSchema({\n  typeDefs: [\n    DateTimeTypeDefinition,\n    // all other typeDefs\n  ],\n  resolvers: {\n    DateTime: DateTimeResolver\n  },\n});\n\nconst mockedSchema = addMocksToSchema({\n  schema,\n  mocks: {\n    DateTime: DateTimeMock\n  }\n});\n")),Object(a.b)("h3",{id:"using-mocks-with-apollo-server"},"Using mocks with Apollo Server"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},"import { ApolloServer } from 'apollo-server';\nimport { makeExecutableSchema } from '@graphql-tools/schema';\n// import all scalars and resolvers\nimport { typeDefs, resolvers, mocks } from 'graphql-scalars';\n// Alternatively, import individual scalars and resolvers\n// import { DateTimeResolver, DateTimeTypeDefinition, DateTimeMock, ... } from \"graphql-scalars\"\n\nconst server = new ApolloServer({\n  typeDefs: [\n    // use spread syntax to add scalar definitions to your schema\n    ...typeDefs,\n    // DateTimeTypeDefinition,\n    // ...\n    // ... other type definitions ...\n  ],\n  resolvers: {\n    // use spread syntax to add scalar resolvers to your resolver map\n    ...resolvers,\n    // DateTimeResolver,\n    // ...\n    // ... remainder of resolver map ...\n  },\n  mocks: {\n    // use spread syntax to add scalar resolvers to your resolver map\n    ...mocks,\n    // DateTimeMock,\n    // ...\n    // ... other mocks ...\n  },\n});\n")))}p.isMDXComponent=!0},134:function(e,r,t){"use strict";t.d(r,"a",(function(){return m})),t.d(r,"b",(function(){return h}));var o=t(0),n=t.n(o);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=n.a.createContext({}),p=function(e){var r=n.a.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},m=function(e){var r=p(e.components);return n.a.createElement(i.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.a.createElement(n.a.Fragment,{},r)}},d=n.a.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),m=p(t),d=o,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return t?n.a.createElement(h,c(c({ref:r},i),{},{components:t})):n.a.createElement(h,c({ref:r},i))}));function h(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=d;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var i=2;i<a;i++)s[i]=t[i];return n.a.createElement.apply(null,s)}return n.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);