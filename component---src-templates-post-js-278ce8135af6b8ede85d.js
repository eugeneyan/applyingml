(self.webpackChunkapplyingml=self.webpackChunkapplyingml||[]).push([[851],{67228:function(t){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n},t.exports.__esModule=!0,t.exports.default=t.exports},23646:function(t,e,r){var n=r(67228);t.exports=function(t){if(Array.isArray(t))return n(t)},t.exports.__esModule=!0,t.exports.default=t.exports},69100:function(t,e,r){var n=r(99489),o=r(57067);function i(e,r,a){return o()?(t.exports=i=Reflect.construct,t.exports.__esModule=!0,t.exports.default=t.exports):(t.exports=i=function(t,e,r){var o=[null];o.push.apply(o,e);var i=new(Function.bind.apply(t,o));return r&&n(i,r.prototype),i},t.exports.__esModule=!0,t.exports.default=t.exports),i.apply(null,arguments)}t.exports=i,t.exports.__esModule=!0,t.exports.default=t.exports},59713:function(t){t.exports=function(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t},t.exports.__esModule=!0,t.exports.default=t.exports},57067:function(t){t.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}},t.exports.__esModule=!0,t.exports.default=t.exports},46860:function(t){t.exports=function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)},t.exports.__esModule=!0,t.exports.default=t.exports},98206:function(t){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},t.exports.__esModule=!0,t.exports.default=t.exports},319:function(t,e,r){var n=r(23646),o=r(46860),i=r(60379),a=r(98206);t.exports=function(t){return n(t)||o(t)||i(t)||a()},t.exports.__esModule=!0,t.exports.default=t.exports},60379:function(t,e,r){var n=r(67228);t.exports=function(t,e){if(t){if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}},t.exports.__esModule=!0,t.exports.default=t.exports},46725:function(t,e,r){var n=r(93395);t.exports={MDXRenderer:n}},93395:function(t,e,r){var n=r(319),o=r(69100),i=r(59713),a=r(37316),l=["scope","children"];function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var p=r(67294),s=r(64983).mdx,f=r(89480).useMDXScope;t.exports=function(t){var e=t.scope,r=t.children,i=a(t,l),u=f(e),m=p.useMemo((function(){if(!r)return null;var t=c({React:p,mdx:s},u),e=Object.keys(t),i=e.map((function(e){return t[e]}));return o(Function,["_fn"].concat(e,[""+r])).apply(void 0,[{}].concat(n(i)))}),[r,e]);return p.createElement(m,c({},i))}},75723:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return f}});r(67294);var n=r(25444),o=r(46725),i=r(35660),a=r(35414),l=r(29499),u=r(39021),c=function(t){var e=t.title,r=t.description,o=t.image,i=t.article,c=(0,l.useLocation)().pathname,p=(0,n.useStaticQuery)(s).site.siteMetadata,f=p.defaultTitle,m=p.titleTemplate,d=p.defaultDescription,y=p.siteUrl,x=p.defaultImage,g=p.twitterUsername,Z={title:e||f,description:r||d,image:y+"/"+(o||x),url:""+y+c};return(0,u.tZ)(a.q,{title:Z.title,titleTemplate:m},(0,u.tZ)("meta",{name:"description",content:Z.description}),(0,u.tZ)("meta",{name:"image",content:Z.image}),Z.url&&(0,u.tZ)("meta",{property:"og:url",content:Z.url}),!i?null:(0,u.tZ)("meta",{property:"og:type",content:"article"}),Z.title&&(0,u.tZ)("meta",{property:"og:title",content:Z.title}),Z.description&&(0,u.tZ)("meta",{property:"og:description",content:Z.description}),Z.image&&(0,u.tZ)("meta",{property:"og:image",content:Z.image}),(0,u.tZ)("meta",{name:"twitter:card",content:"summary_large_image"}),g&&(0,u.tZ)("meta",{name:"twitter:creator",content:g}),Z.title&&(0,u.tZ)("meta",{name:"twitter:title",content:Z.title}),Z.description&&(0,u.tZ)("meta",{name:"twitter:description",content:Z.description}),Z.image&&(0,u.tZ)("meta",{name:"twitter:image",content:Z.image}))},p=c;c.defaultProps={title:null,description:null,image:null,article:!1};var s="3897982121";function f(t){var e=t.data.mdx;return"page"===e.frontmatter.type?(0,u.tZ)(i.Z,null,(0,u.tZ)(p,{title:e.frontmatter.title,description:e.frontmatter.description,image:e.frontmatter.image,pathname:e.frontmatter.slug,article:!0}),(0,u.tZ)("div",null,(0,u.tZ)(o.MDXRenderer,null,e.body))):"resource"===e.frontmatter.type?(0,u.tZ)(i.Z,null,(0,u.tZ)(p,{title:e.frontmatter.title,description:e.frontmatter.description,image:e.frontmatter.image,pathname:e.frontmatter.slug,article:!0}),(0,u.tZ)("div",null,(0,u.tZ)("h2",{style:{fontSize:"2em"}},e.frontmatter.title),(0,u.tZ)(o.MDXRenderer,null,e.body)),(0,u.tZ)("p",{style:{fontFamily:"raleway, sans-serif",fontSize:"1.1em",textAlign:"center"}},(0,u.tZ)("i",null,"Read more ",(0,u.tZ)(n.Link,{to:"/resources"},"guides?")))):"mentor"===e.frontmatter.type?(0,u.tZ)(i.Z,null,(0,u.tZ)(p,{title:e.frontmatter.name+" - "+e.frontmatter.role,description:"Interview with "+e.frontmatter.name+" on applying machine learning at work",image:e.frontmatter.image,pathname:e.frontmatter.slug,article:!0}),(0,u.tZ)("div",null,(0,u.tZ)("h2",{style:{fontSize:"1.75em"}},e.frontmatter.name+" - "+e.frontmatter.role),(0,u.tZ)(o.MDXRenderer,null,e.body)),(0,u.tZ)("p",{style:{fontFamily:"raleway, sans-serif",fontSize:"1.1em",textAlign:"center"}},(0,u.tZ)("i",null,"Read more ",(0,u.tZ)(n.Link,{to:"/mentors"},"mentor interviews?")))):null}}}]);
//# sourceMappingURL=component---src-templates-post-js-278ce8135af6b8ede85d.js.map