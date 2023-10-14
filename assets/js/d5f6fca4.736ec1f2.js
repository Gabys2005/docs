"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[620],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,d=u["".concat(l,".").concat(m)]||u[m]||f[m]||i;return r?n.createElement(d,o(o({ref:t},p),{},{components:r})):n.createElement(d,o({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6702:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const i={sidebar_position:3},o="Basic usage",s={unversionedId:"gifs/technical-explanation/basic",id:"gifs/technical-explanation/basic",title:"Basic usage",description:"The most basic way to use the player is to call the .new() method with a table of parameters:",source:"@site/docs/gifs/technical-explanation/basic.md",sourceDirName:"gifs/technical-explanation",slug:"/gifs/technical-explanation/basic",permalink:"/docs/gifs/technical-explanation/basic",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"gifsSiderbar",previous:{title:"Generating sprite sheets",permalink:"/docs/gifs/technical-explanation/generating-spritesheets"},next:{title:"Playing the same GIF on multiple screens",permalink:"/docs/gifs/technical-explanation/multiple-screens"}},l={},c=[],p={toc:c},u="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"basic-usage"},"Basic usage"),(0,a.kt)("p",null,"The most basic way to use the player is to call the ",(0,a.kt)("inlineCode",{parentName:"p"},".new()")," method with a table of parameters:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Screen - a texture or UI element that the GIF should be displayed on"),(0,a.kt)("li",{parentName:"ul"},"Image - ID of a sprite sheet"),(0,a.kt)("li",{parentName:"ul"},"FPS - frames per second, up to 60"),(0,a.kt)("li",{parentName:"ul"},"FramesPerRow - the amount of frames the sprite sheet has per row"),(0,a.kt)("li",{parentName:"ul"},"Frames - total number of frames on the sprite sheet")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'local GIFPlayer = require(game.ServerScriptService.GIFPlayer)\n\nlocal gif = GIFPlayer.new({\n    Screen = workspace.Screen.SurfaceGui,\n    Image = "rbxassetid://3528512681",\n    FPS = 24,\n    FramesPerRow = 6,\n    Frames = 26\n})\n\ngif:Play()\n')))}f.isMDXComponent=!0}}]);