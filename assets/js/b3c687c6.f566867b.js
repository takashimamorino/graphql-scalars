(self.webpackChunk_graphql_scalars_website=self.webpackChunk_graphql_scalars_website||[]).push([[8923],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return c},kt:function(){return m}});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),p=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},c=function(e){var r=p(e.components);return n.createElement(i.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),g=p(t),m=a,y=g["".concat(i,".").concat(m)]||g[m]||u[m]||o;return t?n.createElement(y,s(s({ref:r},c),{},{components:t})):n.createElement(y,s({ref:r},c))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=g;var l={};for(var i in r)hasOwnProperty.call(r,i)&&(l[i]=r[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var p=2;p<o;p++)s[p]=t[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},7226:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return p},toc:function(){return c},default:function(){return g}});var n=t(2122),a=t(9756),o=(t(7294),t(3905)),s=["components"],l={id:"regex",title:"Using the RegularExpression Scalar Factory",sidebar_label:"Generate your own scalars from regular expressions"},i=void 0,p={unversionedId:"usage/regex",id:"usage/regex",isDocsHomePage:!1,title:"Using the RegularExpression Scalar Factory",description:"Using the RegularExpression scalar",source:"@site/docs/usage/regex.md",sourceDirName:"usage",slug:"/usage/regex",permalink:"/docs/usage/regex",editUrl:"https://github.com/urigo/graphql-scalars/edit/master/website/docs/usage/regex.md",tags:[],version:"current",frontMatter:{id:"regex",title:"Using the RegularExpression Scalar Factory",sidebar_label:"Generate your own scalars from regular expressions"},sidebar:"sidebar",previous:{title:"Mocks",permalink:"/docs/usage/mocks"},next:{title:"BigInt",permalink:"/docs/scalars/big-int"}},c=[{value:"Using the RegularExpression scalar",id:"using-the-regularexpression-scalar",children:[]}],u={toc:c};function g(e){var r=e.components,t=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"using-the-regularexpression-scalar"},"Using the RegularExpression scalar"),(0,o.kt)("p",null,"First an explanation: To create a new scalar type to the GraphQL schema language, you must create an\ninstance of a new ",(0,o.kt)("inlineCode",{parentName:"p"},"GraphQLScalarType")," object that implements three general functions/methods:\n",(0,o.kt)("inlineCode",{parentName:"p"},"serialize"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"parseValue")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"parseLiteral")," which are used at different stages of processing your\nGraphQL types during queries and mutations. So creating a new scalar looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const MyScalar = new GraphQLScalarType({\n    'MyScalar',\n\n    description: 'A description of my scalar',\n\n    serialize(value) {\n      // ...\n      return value;\n    },\n\n    parseValue(value) {\n      // ...\n      return value;\n    },\n\n    parseLiteral(ast) {\n      // ...\n      return ast.value;\n    }\n  });\n")),(0,o.kt)("p",null,"Given this, if we want to create a new type that is essentially the same except for one little\ncustomizable aspect (e.g., a regular expression type that has all the same code except the regex is\ndifferent) then we need to dynamically ",(0,o.kt)("em",{parentName:"p"},"generate")," a new ",(0,o.kt)("inlineCode",{parentName:"p"},"GraphQLScalarType")," object given some\nparameters. That's the approach we take here."),(0,o.kt)("p",null,"Therefore the ",(0,o.kt)("inlineCode",{parentName:"p"},"RegularExpression")," scalar type is really a ",(0,o.kt)("inlineCode",{parentName:"p"},"GraphQLScalarType")," object ",(0,o.kt)("em",{parentName:"p"},"generator"),"\nthat takes two arguments:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"a name"),(0,o.kt)("li",{parentName:"ul"},"the regex you want it to use")),(0,o.kt)("p",null,"So to create a new scalar for a given regex, you will do this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const MyRegexType = new RegularExpression('MyRegexType', /^ABC$/);\n")),(0,o.kt)("p",null,"Now ",(0,o.kt)("inlineCode",{parentName:"p"},"MyRegexType"),' is your new GraphQL scalar type that will enforce a value of, in this case, "ABC".'),(0,o.kt)("p",null,"Add your new scalar type to your resolver map:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"export default {\n  MyRegexType,\n};\n")),(0,o.kt)("p",null,"And to your schema:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"scalar MyRegexType\n")),(0,o.kt)("p",null,"That's it. Now you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"MyRegexType")," as a type in the rest of your schema."),(0,o.kt)("h4",{id:"regularexpression-options"},"RegularExpression options"),(0,o.kt)("p",null,"There is an optional third ",(0,o.kt)("inlineCode",{parentName:"p"},"options")," argument to the RegularExpression constructor that can be used like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const options = {\n  errorMessage: (regex, value) => {\n    if (process.env.NODE_ENV === 'production')\n      return `Value is invalid format: ${value} `;\n    else\n      return `Value does not match the regular expression ${regex}: ${value}`;\n  },\n};\n\nconst MyRegexType = new RegularExpression('MyRegexType', /^ABC$/, options);\n")))}g.isMDXComponent=!0}}]);