import{r as o,A as w,H as W,l as a,_ as N,o as k,h as R,F as $,g as F}from"./index-93a533d4.js";const I={props:{data:{type:Array,default:()=>[]},columns:{type:Array,default:()=>[]}},setup(f){const r=o([]),s=o([]);let h=0;const l=100;r.value=f.data.map((e,n)=>({id:`row-${Date().now}-${n}`,data:e})),s.value=f.columns.map((e,n)=>{const t=e.minWidth||l;h+=t;let _="";return(e.fixed==="left"||e.fixed==="right")&&(_=`fixed-${e.fixed}`),{id:`column-${Date().now}-${n}`,minWidth:t,className:_,data:e}});const c=f.columns.findLastIndex(e=>e.fixed==="left");c>=0&&(s.value[c].className+=" last-fixed-left");const u=f.columns.findIndex(e=>e.fixed==="right");if(u>=0){s.value[u].className+=" first-fixed-right";const e=u-1;e>=0&&(s.value[e].className+=" last-no-fixed")}const i=o(null),x=o(!1),m=o(!1);let v=0;const d=o(""),g=()=>{i.value.scrollWidth>i.value.clientWidth?x.value=!0:x.value=!1,i.value.scrollHeight>i.value.clientHeight?m.value=!0:m.value=!1,v=i.value.scrollWidth-i.value.clientWidth,x.value&&v>0?d.value="scrolling-left":d.value=""},y=e=>{if(v===0)return;const n=e.target.scrollLeft,t=Math.abs(v-n);n===0?d.value="scrolling-left":n===v||t<=1?d.value="scrolling-right":d.value="scrolling-middle"};let p=!1;const b=new ResizeObserver(()=>{p||(p=!0,requestAnimationFrame(()=>{p=!1}),g())});return w(()=>{b.observe(i.value)}),W(()=>{b.unobserve(i.value)}),()=>a("div",{class:["table",x.value&&"horizontal-scroll",m.value&&"vertical-scroll",d.value]},[a("div",{ref:i,class:"table-inner",onScroll:y},[a("div",{class:"table-content",style:{"min-width":h+"px"}},[a("div",{class:"table-header"},[a("div",{class:"table-row"},[s.value.map(e=>a("div",{key:e.id,class:["table-cell",e.className],style:{"min-width":e.minWidth+"px"}},[a("div",{class:"cell-inner"},[e.data.label])]))])]),a("div",{class:"table-body"},[r.value.map((e,n)=>a("div",{key:e.id,class:"table-row"},[s.value.map(t=>a("div",{key:t.id,class:["table-cell",t.className],style:{"min-width":t.minWidth+"px"}},[a("div",{class:"cell-inner"},[t.data.cellRender?t.data.cellRender({index:n,row:e.data,column:t.data}):e.data[t.data.prop]])]))]))])])])])}};const z=N(I,[["__scopeId","data-v-8ee4240e"]]),A={__name:"index",setup(f){const r=[],s=[],h=()=>{console.log("--编辑--")};for(let l=1;l<=8;l++)r.push({prop:`column-${l}`,label:"title-"+l});r.unshift({label:"序号",fixed:"left",cellRender:({index:l})=>a($,null,[l+1])}),r.push({label:"操作",fixed:"right",cellRender:()=>a("span",{onClick:h},[F("编辑")])});for(let l=1;l<=15;l++){let c={};r.forEach(u=>{c[u.prop]=l}),s.push(c)}return(l,c)=>(k(),R(z,{data:s,columns:r}))}};export{A as default};
