import{_ as k,a as $,b as f,o as h,c as b,f as g,d as s,w as m,h as C,i as V,t as D,n as w,j,v as S,F as B,k as I,l as H,e as N,r as R,p as z,g as A}from"./index-4fb89d43.js";import{V as E}from"./index-0ed32576.js";import"./index-0063d12b.js";const F={class:"tree-node"},U={key:0,class:"tree-node-children"},W={__name:"tree-node",props:{node:{type:Object,default:()=>({})}},setup(l){const d=$(l.node.expanded),r=()=>{d.value=!d.value};return(c,v)=>{const u=f("CaretBottom"),x=f("CaretRight"),i=f("el-icon"),t=f("TreeNode",!0);return h(),b("div",F,[g("div",{class:"tree-node-content",style:w({"padding-left":l.node.level*18+"px"}),onClick:r},[s(i,{class:"tree-node-expand-icon"},{default:m(()=>[l.node.data.children&&d.value?(h(),C(u,{key:0})):l.node.data.children?(h(),C(x,{key:1})):V("",!0)]),_:1}),g("span",null,D(l.node.data.label),1)],4),l.node.data.children?j((h(),b("div",U,[(h(!0),b(B,null,I(l.node.data.children,a=>(h(),C(t,{key:a.id,node:a},null,8,["node"]))),128))],512)),[[S,d.value]]):V("",!0)])}}},O=k(W,[["__scopeId","data-v-ea105630"]]);const P={class:"tree"},q={class:"tree-content"},G={__name:"index",props:{data:{type:Array,default:()=>[]},maxHeight:{type:Number,default:void 0}},setup(l){const o=l,d=$(r(o.data,0));function r(c,v){return c.map((u,x)=>{const i={id:`${Date.now()}-${x}`,level:v,expanded:!1,data:{}};return u.children?i.data={...u,children:r(u.children,v+1)}:i.data=u,i})}return H(()=>o.data,c=>{d.value=r(c,0)}),(c,v)=>(h(),b("div",P,[g("div",{class:"tree-inner",style:w({"max-height":l.maxHeight+"px"})},[g("div",q,[(h(!0),b(B,null,I(d.value,u=>(h(),C(O,{key:u.id,node:u},null,8,["node"]))),128))])],4)]))}},J=k(G,[["__scopeId","data-v-5c689af5"]]);const K={class:"wrap"},Q=400,X={__name:"tree",setup(l){const o=$([]);let d=[5,4,3,3],r=0;c();function c(){d=x(),r=0,o.value=v(0,d[0])}function v(i,t){if(!t)return;const a=[];let e={};for(let n=0;n<t;n++)r++,e={label:`${r} --- ${u()}`,children:v(i+1,d[i+1])},a.push(e);return a}function u(){const i=["a","b","c","d","e","f","g","h","i","j","k"],t=Math.ceil(Math.random()*10);return i.slice(0,t).join("")}function x(){const i=[],t=Math.ceil(Math.random()*4);for(let a=0;a<t;a++)i.push(Math.ceil(Math.random()*10));return i}return(i,t)=>{const a=f("el-button"),e=f("el-form-item"),n=f("el-form");return h(),b("div",null,[s(n,{inline:""},{default:m(()=>[s(e,null,{default:m(()=>[s(a,{type:"primary",onClick:c},{default:m(()=>[N("更新列表")]),_:1})]),_:1})]),_:1}),g("div",K,[s(J,{data:o.value,"max-height":Q},null,8,["data"])])])}}},Y=k(X,[["__scopeId","data-v-995c16b0"]]);const Z={class:"tree"},ee=["onClick"],te={__name:"index",props:{data:{type:Array,default:()=>[]},maxHeight:{type:Number,default:void 0},cache:{type:Number,default:2},buffer:{type:Number,default:1}},setup(l){const o=l;let d=-1,r=[];const c=$([]);function v(){return r.filter(t=>t.level===0)}function u(t,a){let e=[];return t.forEach(n=>{d++,e.push({id:`${Date.now()}-${d}`,index:d,level:a,leaf:!(n.children&&n.children.length>0),expanded:!1,data:x(n)}),n.children&&n.children.length>0&&(e=e.concat(u(n.children,a+1)))}),e}function x(t){let a={};for(const e in t)e!=="children"&&(a[e]=t[e]);return a}H(()=>o.data,t=>{d=-1,r=u(t,0),c.value=v()},{immediate:!0,deep:!0});const i=t=>{if(!t.leaf)if(t.expanded){t.expanded=!1;let a=c.value.findIndex(e=>e.id===t.id);for(let e=a+1;e<c.value.length&&c.value[e].level>t.level;e++)c.value.splice(e,1),e--}else{t.expanded=!0;const a=[];for(let e=t.index+1;e<r.length&&r[e].level>t.level;e++)r[e].level===t.level+1&&a.push(r[e]);c.value.some((e,n)=>{if(e.id===t.id)return c.value.splice(n+1,0,...a),!0})}};return(t,a)=>{const e=f("CaretBottom"),n=f("CaretRight"),_=f("el-icon");return h(),b("div",Z,[s(E,{data:c.value,"max-height":l.maxHeight,buffer:l.buffer,cache:l.cache},{default:m(({item:p})=>[g("div",{class:"tree-node-content",style:w({"padding-left":p.level*18+"px"}),onClick:y=>i(p)},[s(_,{class:"tree-node-expand-icon"},{default:m(()=>[!p.leaf&&p.expanded?(h(),C(e,{key:0})):p.leaf?V("",!0):(h(),C(n,{key:1}))]),_:2},1024),g("span",null,D(p.data.label),1)],12,ee)]),_:1},8,["data","max-height","buffer","cache"])])}}},ne=k(te,[["__scopeId","data-v-72c5fee2"]]);const ae={class:"wrap"},le=400,oe={__name:"virtual-tree",setup(l){const o=R({buffer:0,cache:2}),d=$([]),r=$(0),c=$(2);let v=[5,4,3,3],u=0;x();function x(){v=a(),u=0,d.value=i(0,v[0]),r.value=o.buffer,c.value=o.cache}function i(n,_){if(!_)return;const p=[];let y={};for(let M=0;M<_;M++)u++,y={label:`${u} --- ${t()}`,children:i(n+1,v[n+1])},p.push(y);return p}function t(){const n=["a","b","c","d","e","f","g","h","i","j","k"],_=Math.ceil(Math.random()*10);return n.slice(0,_).join("")}function a(){const n=[],_=Math.ceil(Math.random()*4);for(let p=0;p<_;p++)n.push(Math.ceil(Math.random()*10));return n}function e(n){o[n]!==""&&typeof o[n]=="string"&&(o[n]=o[n].replace(/[^0-9]/g,"").replace(/^0+(?=\d)/,""),o[n]=Number(o[n]))}return(n,_)=>{const p=f("el-input"),y=f("el-form-item"),M=f("el-button"),L=f("el-form");return h(),b("div",null,[s(L,{inline:""},{default:m(()=>[s(y,{label:"缓冲量"},{default:m(()=>[s(p,{modelValue:o.buffer,"onUpdate:modelValue":_[0]||(_[0]=T=>o.buffer=T),modelModifiers:{number:!0},placeholder:"请输入滚动时的缓冲量",maxlength:"5",onBlur:_[1]||(_[1]=T=>e("buffer"))},null,8,["modelValue"])]),_:1}),s(y,{label:"预先多加载的列表数量"},{default:m(()=>[s(p,{modelValue:o.cache,"onUpdate:modelValue":_[2]||(_[2]=T=>o.cache=T),modelModifiers:{number:!0},placeholder:"请输入预先多加载的列表数量",maxlength:"5",onBlur:_[3]||(_[3]=T=>e("cache"))},null,8,["modelValue"])]),_:1}),s(y,null,{default:m(()=>[s(M,{type:"primary",onClick:x},{default:m(()=>[N("更新列表")]),_:1})]),_:1})]),_:1}),g("div",ae,[s(ne,{data:d.value,"max-height":le,buffer:r.value,cache:c.value},null,8,["data","buffer","cache"])])])}}},re=k(oe,[["__scopeId","data-v-8195ebf2"]]);const ce=l=>(z("data-v-52b6afbe"),l=l(),A(),l),de=ce(()=>g("div",{class:"title"},"Tree 树形控件",-1)),se={__name:"index",setup(l){return(o,d)=>{const r=f("el-tab-pane"),c=f("el-tabs");return h(),b(B,null,[de,s(c,{"model-value":"1"},{default:m(()=>[s(r,{label:"树形控件",name:"1"},{default:m(()=>[s(Y)]),_:1}),s(r,{label:"虚拟树形控件",name:"2",lazy:""},{default:m(()=>[s(re)]),_:1})]),_:1})],64)}}},fe=k(se,[["__scopeId","data-v-52b6afbe"]]);export{fe as default};
