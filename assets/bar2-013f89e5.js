import{_ as p,r as l,C as _,aq as b,D as f,c as h,b as m,d as T,a as S,a1 as W,o as v,e as x}from"./index-42043489.js";import"./index-fb892a43.js";const F={__name:"bar2",setup(M){const e=l(null),r={dataset:{dimensions:["product","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],source:[{product:"一",Monday:200,Tuesday:300,Wednesday:400,Thursday:135,Friday:147,Saturday:260,Sunday:450},{product:"二",Monday:200,Tuesday:300,Wednesday:400,Thursday:135,Friday:147,Saturday:260,Sunday:450},{product:"三",Monday:200,Tuesday:300,Wednesday:400,Thursday:135,Friday:147,Saturday:260,Sunday:450},{product:"四",Monday:200,Tuesday:300,Wednesday:400,Thursday:135,Friday:147,Saturday:260,Sunday:450},{product:"五",Monday:200,Tuesday:300,Wednesday:400,Thursday:135,Friday:147,Saturday:260,Sunday:450},{product:"六",Monday:200,Tuesday:300,Wednesday:400,Thursday:135,Friday:147,Saturday:260,Sunday:450},{product:"七",Monday:200,Tuesday:300,Wednesday:400,Thursday:135,Friday:147,Saturday:260,Sunday:450}]},xAxis:{type:"category",axisLabel:{interval:0}},yAxis:{},series:[{type:"bar",barWidth:20},{type:"bar",barWidth:20},{type:"bar",barWidth:20},{type:"bar",barWidth:20},{type:"bar",barWidth:20},{type:"bar",barWidth:20},{type:"bar",barWidth:20}],dataZoom:[{type:"inside",start:0,end:50}]};let t=null,n=null,s=!1,o=!1;function y(){t.resize()}function i(){for(let a=0;a<7;a++){const u=r.dataset.source[a];for(const d in u)d!=="product"&&(u[d]=c())}t.setOption(r)}function c(){let a=Math.random().toFixed(2)*400;return a>400&&(a=400),a}return _(()=>{t=b(e.value),t.setOption(r),n=new ResizeObserver(()=>{if(!o){o=!0;return}s||(s=!0,requestAnimationFrame(()=>{s=!1}),y())}),n.observe(e.value)}),f(()=>{n.unobserve(e.value)}),(a,u)=>{const d=W;return v(),h("div",null,[m(d,{type:"primary",onClick:i},{default:T(()=>[x("更新数据")]),_:1}),S("div",{ref_key:"mainRef",ref:e,class:"main"},null,512)])}}},B=p(F,[["__scopeId","data-v-18db1994"]]);export{B as default};
