import{_ as T,r as g,n as A,w as P,o as w,c as H,a as I,b as U,F as j,d as N,e as ae,f as oe,g as k,t as E,h as D,T as ie,i as F,j as q,k as b,l as n,m as c,p as re,v as ue,q as de,s as se}from"./index-bf51827a.js";const ce={class:"virtual-list"},fe={__name:"virtual-list",props:{data:{type:Array,default:()=>[]},height:{type:Number,default:void 0},maxHeight:{type:Number,default:void 0},minItemHeight:{type:Number,default:20},cache:{type:Number,default:2},buffer:{type:Number,default:1},fixed:{type:Boolean,default:!0},showOverflowTooltip:{type:Boolean,default:!1}},setup(s){const e=s;let d=G(),i=d.length;const x=g(e.height?null:e.maxHeight);let m=0,h=0,p=0;const t=g([]);let l=0,f=0;const r=g(0),u=g(0),V=g(null),o=g(null);let $=[],S=!1;const _=g(null);Z();function G(){return e.data.map((a,v)=>({id:`${Date.now()}-${v}`,data:a}))}function O(){t.value=d,r.value=0,u.value=0}function X(){if(!e.height&&!e.maxHeight)return;let a=0;return e.fixed?e.height?a=Math.ceil(e.height/m):a=Math.ceil(e.maxHeight/m):e.height?a=Math.ceil(e.height/e.minItemHeight):a=Math.ceil(e.maxHeight/e.minItemHeight),a}function Y(){const a=o.value.children,v=[];for(let y=0;y<a.length;y++)v.push(a[y].getBoundingClientRect().height);for(let y=v.length;y<d.length;y++)v.push(e.minItemHeight);return v}function Z(){if(i<=2||!e.height&&!e.maxHeight||!e.fixed&&!e.minItemHeight){O();return}if(e.fixed){t.value=d.slice(0,1),A(()=>{m=o.value.children[0].clientHeight,R()});return}R()}function R(){if(h=X(),p=e.cache+e.buffer*2,p<2&&(p=2),h+p>=i){O();return}const a=h+p;l=0,f=a-1,r.value=0,e.fixed?u.value=(i-a)*m:u.value=(i-a)*e.minItemHeight,t.value=d.slice(l,f+1),e.fixed||A(()=>{$=Y()})}function ee(a){let v=0;if(e.fixed)v=Math.floor(a/m);else{let L=0;for(let B=0;B<$.length;B++){if(L+=$[B],a===L){v=B+1;break}if(a<L){v=B;break}}}const y=v-l;if(f+1-v-h>e.buffer&&y>e.buffer)return;let M=v-Math.floor(p/2);const J=i-t.value.length;if(M<0?M=0:M>J&&(M=J),M===l)return;l=M,f=l+t.value.length-1;const K=i-1;if(f>K&&(f=K),t.value=d.slice(l,f+1),e.fixed)r.value=l*m,u.value=(i-f-1)*m;else{let L=0;for(let C=0;C<l;C++)L+=$[C];r.value=L;let B=0;for(let C=f+1;C<i;C++)B+=$[C];u.value=B,A(()=>{const C=o.value.children,W=[];for(let z=0;z<C.length;z++)W.push(C[z].getBoundingClientRect().height);$.splice(l,W.length,...W)})}}P(()=>e.data,()=>{if(V.value&&(V.value.scrollTop=0),d=G(),i=d.length,i<=2||!e.height&&!e.maxHeight||!e.fixed&&!e.minItemHeight){O();return}R()}),P([()=>e.height,()=>e.maxHeight],()=>{if(i<=2||!e.height&&!e.maxHeight||!e.fixed&&!e.minItemHeight){O();return}x.value=e.height?null:e.maxHeight,R()});function te(a){e.showOverflowTooltip&&(_.value=null),!(i<=2||!e.height&&!e.maxHeight||t.value.length>=i||!e.fixed&&!e.minItemHeight)&&(S||(S=!0,requestAnimationFrame(()=>{S=!1}),ee(a.target.scrollTop)))}function le(a){if(!(!e.showOverflowTooltip||a.target===a.currentTarget||_.value&&(_.value.contains(a.fromElement)||!_.value.contains(a.target)))&&(_.value=a.target,a.target.parentElement!==a.currentTarget)){const v=a.currentTarget.children;for(let y=0;y<v.length;y++)if(v[y].contains(a.target)){_.value=v[y];break}}}function ne(a){!e.showOverflowTooltip||_.value&&(!_.value.contains(a.target)||_.value.contains(a.toElement))||(_.value=null)}return(a,v)=>(w(),H("div",ce,[I("div",{ref_key:"listWrapRef",ref:V,class:"list-wrap",style:U({height:s.height?s.height+"px":"","max-height":x.value?x.value+"px":""}),onScroll:te},[I("ul",{ref_key:"listRef",ref:o,style:U({"padding-top":r.value+"px","padding-bottom":u.value+"px"}),onMouseover:le,onMouseout:ne},[(w(!0),H(j,null,N(t.value,y=>(w(),H("li",{key:y.id,class:ae(["list-item",{tooltip:e.showOverflowTooltip}]),style:U({"white-space":s.fixed?"nowrap":"normal","word-break":s.fixed?"normal":"break-all",overflow:s.fixed?"hidden":"visible"})},[oe(a.$slots,"default",{items:y.data},()=>[k(E(y),1)],!0)],6))),128))],36)],36),e.showOverflowTooltip?(w(),D(ie,{key:0,"mouseenter-el":_.value,enterable:!1,"teleport-to-body":!1},null,8,["mouseenter-el"])):F("",!0)]))}},Q=T(fe,[["__scopeId","data-v-5eebc4a0"]]);const me={class:"wrap"},he=500,pe={__name:"fixed-virtual-list",setup(s){const e=q({total:1e3,buffer:0,cache:2}),d=g([]),i=g(0),x=g(2);m();function m(){d.value=[];for(let t=1;t<=e.total;t++)d.value.push({label:`${t} --- ${h()}`});i.value=e.buffer,x.value=e.cache}function h(){const t=["aaa"," bbbb"," cccccccccc"," ddddddddddddddddddddddddddddd"," eeeeeeeeeee"," ff"," gggg"," hhhhhh"," ii"," j"," k"],l=Math.ceil(Math.random()*10);return t.slice(0,l).join("")}function p(t){e[t]!==""&&typeof e[t]=="string"&&(e[t]=e[t].replace(/[^0-9]/g,"").replace(/^0+(?=\d)/,""),e[t]=Number(e[t]))}return(t,l)=>{const f=b("el-input"),r=b("el-form-item"),u=b("el-button"),V=b("el-form");return w(),H("div",null,[n(V,{inline:""},{default:c(()=>[n(r,{label:"列表总数"},{default:c(()=>[n(f,{modelValue:e.total,"onUpdate:modelValue":l[0]||(l[0]=o=>e.total=o),modelModifiers:{number:!0},placeholder:"请输入列表总数",maxlength:"6",onBlur:l[1]||(l[1]=o=>p("total"))},null,8,["modelValue"])]),_:1}),n(r,{label:"缓冲量"},{default:c(()=>[n(f,{modelValue:e.buffer,"onUpdate:modelValue":l[2]||(l[2]=o=>e.buffer=o),modelModifiers:{number:!0},placeholder:"请输入滚动时的缓冲量",maxlength:"5",onBlur:l[3]||(l[3]=o=>p("buffer"))},null,8,["modelValue"])]),_:1}),n(r,{label:"预先多加载的列表数量"},{default:c(()=>[n(f,{modelValue:e.cache,"onUpdate:modelValue":l[4]||(l[4]=o=>e.cache=o),modelModifiers:{number:!0},placeholder:"请输入预先多加载的列表数量",maxlength:"5",onBlur:l[5]||(l[5]=o=>p("cache"))},null,8,["modelValue"])]),_:1}),n(r,null,{default:c(()=>[n(u,{type:"primary",onClick:m},{default:c(()=>[k("更新列表")]),_:1})]),_:1})]),_:1}),I("div",me,[n(Q,{data:d.value,"max-height":he,buffer:i.value,cache:x.value,"show-overflow-tooltip":""},{default:c(({items:o})=>[k(E(o.label),1)]),_:1},8,["data","buffer","cache"])])])}}},_e=T(pe,[["__scopeId","data-v-c8cdca07"]]);const ve={class:"wrap"},ge=500,be={__name:"dynamic-virtual-list",setup(s){const e=q({total:1e3,buffer:0,cache:2}),d=g([]),i=g(0),x=g(2);m();function m(){d.value=[];for(let t=1;t<=e.total;t++)d.value.push({label:`${t} --- ${h()}`});i.value=e.buffer,x.value=e.cache}function h(){const t=["道可道也，非恒道也。","名可名也，非恒名也。","无名万物之始也，有名万物之母也。","故：恒无欲也，以观其眇；","恒有欲也，以观其徼。","两者同出，异名同谓。玄之又玄，众妙之门。","天下皆知美之为美，恶矣，皆知善之为善，斯不善矣。","有无之相生也，难易之相成也，长短之相形也，高下之相盈也，音声之相和也，先后之相随也。","是以圣人居无为之事，行不言之教。","万物作而弗始也，为而弗恃也，成功而弗居也，夫唯弗居，是以弗去。"],l=Math.ceil(Math.random()*10);return t.slice(0,l).join("")}function p(t){typeof e[t]=="string"&&(e[t]=e[t].replace(/[^0-9]/g,"").replace(/^0+(?=\d)/,""),e[t]=Number(e[t]))}return(t,l)=>{const f=b("el-input"),r=b("el-form-item"),u=b("el-button"),V=b("el-form");return w(),H("div",null,[n(V,{inline:""},{default:c(()=>[n(r,{label:"列表总数"},{default:c(()=>[n(f,{modelValue:e.total,"onUpdate:modelValue":l[0]||(l[0]=o=>e.total=o),modelModifiers:{number:!0},placeholder:"请输入列表总数",maxlength:"6",onBlur:l[1]||(l[1]=o=>p("total"))},null,8,["modelValue"])]),_:1}),n(r,{label:"缓冲量"},{default:c(()=>[n(f,{modelValue:e.buffer,"onUpdate:modelValue":l[2]||(l[2]=o=>e.buffer=o),placeholder:"请输入滚动时的缓冲量",maxlength:"5",onBlur:l[3]||(l[3]=o=>p("buffer"))},null,8,["modelValue"])]),_:1}),n(r,{label:"预先多加载的列表数量"},{default:c(()=>[n(f,{modelValue:e.cache,"onUpdate:modelValue":l[4]||(l[4]=o=>e.cache=o),modelModifiers:{number:!0},placeholder:"请输入预先多加载的列表数量",maxlength:"5",onBlur:l[5]||(l[5]=o=>p("cache"))},null,8,["modelValue"])]),_:1}),n(r,null,{default:c(()=>[n(u,{type:"primary",onClick:m},{default:c(()=>[k("更新列表")]),_:1})]),_:1})]),_:1}),I("div",ve,[n(Q,{data:d.value,"max-height":ge,buffer:i.value,cache:x.value,fixed:!1},{default:c(({items:o})=>[k(E(o.label),1)]),_:1},8,["data","buffer","cache"])])])}}},xe=T(be,[["__scopeId","data-v-6fba8d5e"]]);const ye={class:"tree-node"},we={key:0,class:"tree-node-children"},Ve={__name:"tree-node",props:{node:{type:Object,default:()=>({})}},setup(s){const d=g(s.node.expanded),i=()=>{d.value=!d.value};return(x,m)=>{const h=b("CaretBottom"),p=b("CaretRight"),t=b("el-icon"),l=b("TreeNode",!0);return w(),H("div",ye,[I("div",{class:"tree-node-content",style:U({"padding-left":s.node.level*18+"px"}),onClick:i},[n(t,{class:"tree-node-expand-icon"},{default:c(()=>[s.node.data.children&&d.value?(w(),D(h,{key:0})):s.node.data.children?(w(),D(p,{key:1})):F("",!0)]),_:1}),I("span",null,E(s.node.data.label),1)],4),s.node.data.children?re((w(),H("div",we,[(w(!0),H(j,null,N(s.node.data.children,f=>(w(),D(l,{key:f.id,node:f},null,8,["node"]))),128))],512)),[[ue,d.value]]):F("",!0)])}}},He=T(Ve,[["__scopeId","data-v-ea105630"]]);const $e={class:"tree"},Ce={class:"tree-content"},Ie={__name:"index",props:{data:{type:Array,default:()=>[]},maxHeight:{type:Number,default:void 0}},setup(s){const d=g(i(s.data,0));function i(x,m){return x.map((h,p)=>{const t={id:`${Date.now()}-${p}`,level:m,expanded:!1,data:{}};return h.children?t.data={...h,children:i(h.children,m+1)}:t.data=h,t})}return(x,m)=>(w(),H("div",$e,[I("div",{class:"tree-inner",style:U({"max-height":s.maxHeight+"px"})},[I("div",Ce,[(w(!0),H(j,null,N(d.value,h=>(w(),D(He,{key:h.id,node:h},null,8,["node"]))),128))])],4)]))}},Be=T(Ie,[["__scopeId","data-v-eab7a11a"]]);const Te={class:"wrap"},Me=500,Le={__name:"tree",setup(s){const e=q({total:1e3,buffer:0,cache:2}),d=g([]),i=g(0),x=g(2),m=[5,4,3,3];let h=0;p();function p(){d.value=t(0,m[0]),i.value=e.buffer,x.value=e.cache}function t(r,u){if(!u)return;const V=[];let o={};for(let $=0;$<u;$++)h++,o={label:`${h} --- ${l()}`,children:t(r+1,m[r+1])},V.push(o);return V}function l(){const r=["a","b","c","d","e","f","g","h","i","j","k"],u=Math.ceil(Math.random()*10);return r.slice(0,u).join("")}function f(r){e[r]!==""&&typeof e[r]=="string"&&(e[r]=e[r].replace(/[^0-9]/g,"").replace(/^0+(?=\d)/,""),e[r]=Number(e[r]))}return(r,u)=>{const V=b("el-input"),o=b("el-form-item"),$=b("el-button"),S=b("el-form");return w(),H("div",null,[n(S,{inline:""},{default:c(()=>[n(o,{label:"列表总数"},{default:c(()=>[n(V,{modelValue:e.total,"onUpdate:modelValue":u[0]||(u[0]=_=>e.total=_),modelModifiers:{number:!0},placeholder:"请输入列表总数",maxlength:"6",onBlur:u[1]||(u[1]=_=>f("total"))},null,8,["modelValue"])]),_:1}),n(o,{label:"缓冲量"},{default:c(()=>[n(V,{modelValue:e.buffer,"onUpdate:modelValue":u[2]||(u[2]=_=>e.buffer=_),modelModifiers:{number:!0},placeholder:"请输入滚动时的缓冲量",maxlength:"5",onBlur:u[3]||(u[3]=_=>f("buffer"))},null,8,["modelValue"])]),_:1}),n(o,{label:"预先多加载的列表数量"},{default:c(()=>[n(V,{modelValue:e.cache,"onUpdate:modelValue":u[4]||(u[4]=_=>e.cache=_),modelModifiers:{number:!0},placeholder:"请输入预先多加载的列表数量",maxlength:"5",onBlur:u[5]||(u[5]=_=>f("cache"))},null,8,["modelValue"])]),_:1}),n(o,null,{default:c(()=>[n($,{type:"primary",onClick:p},{default:c(()=>[k("更新列表")]),_:1})]),_:1})]),_:1}),I("div",Te,[n(Be,{data:d.value,"max-height":Me},null,8,["data"])])])}}},ke=T(Le,[["__scopeId","data-v-c86e6f3d"]]);const Se=s=>(de("data-v-6707877d"),s=s(),se(),s),Ue=Se(()=>I("div",{class:"title"},"虚拟列表",-1)),De={__name:"index",setup(s){return(e,d)=>{const i=b("el-tab-pane"),x=b("el-tabs");return w(),H(j,null,[Ue,n(x,{"model-value":"1"},{default:c(()=>[n(i,{label:"定高",name:"1"},{default:c(()=>[n(_e)]),_:1}),n(i,{label:"非定高",name:"2",lazy:""},{default:c(()=>[n(xe)]),_:1}),n(i,{label:"tree",name:"3",lazy:""},{default:c(()=>[n(ke)]),_:1})]),_:1})],64)}}},je=T(De,[["__scopeId","data-v-6707877d"]]);export{je as default};
