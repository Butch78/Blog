import{a as s,D as y,a0 as g,a1 as D,E as o,a2 as p}from"./entry.72ece0a7.js";import v from"./ContentRenderer.11f8f8a8.js";import w from"./ContentQuery.e9c4cfc1.js";import"./ContentRendererMarkdown.870c2196.js";import"./_commonjsHelpers.726de751.js";const x=s({name:"ContentDoc",props:{tag:{type:String,required:!1,default:"div"},excerpt:{type:Boolean,default:!1},path:{type:String,required:!1,default:void 0},query:{type:Object,required:!1,default:void 0},head:{type:Boolean,required:!1,default:!0}},render(f){const e=y(),{tag:d,excerpt:r,path:m,query:a,head:i}=f,c={...a||{},path:m||(a==null?void 0:a.path)||g(D().path),find:"one"},l=(t,n)=>o("pre",null,JSON.stringify({message:"You should use slots with <ContentDoc>",slot:t,data:n},null,2));return o(w,c,{default:e!=null&&e.default?({data:t,refresh:n,isPartial:h})=>{var u;return i&&p(t),(u=e.default)==null?void 0:u.call(e,{doc:t,refresh:n,isPartial:h,excerpt:r,...this.$attrs})}:({data:t})=>(i&&p(t),o(v,{value:t,excerpt:r,tag:d,...this.$attrs},{empty:n=>e!=null&&e.empty?e.empty(n):l("default",t)})),empty:t=>{var n;return((n=e==null?void 0:e.empty)==null?void 0:n.call(e,t))||o("p",null,"Document is empty, overwrite this content with #empty slot in <ContentDoc>.")},"not-found":t=>{var n;return((n=e==null?void 0:e["not-found"])==null?void 0:n.call(e,t))||o("p",null,"Document not found, overwrite this content with #not-found slot in <ContentDoc>.")}})}});export{x as default};
