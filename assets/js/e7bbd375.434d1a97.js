"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[450],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(n),f=a,h=u["".concat(c,".").concat(f)]||u[f]||m[f]||i;return n?r.createElement(h,l(l({ref:t},p),{},{components:n})):r.createElement(h,l({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=f;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6613:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:4},l="Playing the same GIF on multiple screens",o={unversionedId:"gifs/technical-explanation/multiple-screens",id:"gifs/technical-explanation/multiple-screens",title:"Playing the same GIF on multiple screens",description:"You can replace the Screen property with Screens, which is a table of UI elements / textures, to show the same GIF on multiple screens.",source:"@site/docs/gifs/technical-explanation/multiple-screens.md",sourceDirName:"gifs/technical-explanation",slug:"/gifs/technical-explanation/multiple-screens",permalink:"/docs/gifs/technical-explanation/multiple-screens",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"gifsSiderbar",previous:{title:"Basic usage",permalink:"/docs/gifs/technical-explanation/basic"},next:{title:"Using multiple sprite sheets",permalink:"/docs/gifs/technical-explanation/multiple-spritesheets"}},c={},s=[],p={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"playing-the-same-gif-on-multiple-screens"},"Playing the same GIF on multiple screens"),(0,a.kt)("p",null,"You can replace the ",(0,a.kt)("inlineCode",{parentName:"p"},"Screen")," property with ",(0,a.kt)("inlineCode",{parentName:"p"},"Screens"),", which is a table of UI elements / textures, to show the same GIF on multiple screens."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'local GIFPlayer = require(game.ServerScriptService.GIFPlayer)\n\n// highlight-start\nlocal screens = {\n    workspace.NormalScreen1.SurfaceGui,\n    workspace.MeshScreen1.Texture\n}\n// highlight-end\n\nlocal gif = GIFPlayer.new({\n    // highlight-next-line\n    Screens = screens,\n    Image = "rbxassetid://3528512681",\n    FPS = 24,\n    FramesPerRow = 6,\n    Frames = 26\n})\n\ngif:Play()\n')))}m.isMDXComponent=!0}}]);