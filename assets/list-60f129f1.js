import{_ as C,r as c,g as x,c as u,a as p,b as s,d as a,w as b,t as k,F as $,o as v,e as n,m as y,p as S,f as D}from"./index-6269380d.js";import{v as I}from"./el-loading-d2cffde3.js";const B=i=>(S("data-v-4582c2c6"),i=i(),D(),i),N=B(()=>p("div",{class:"title"},"虚拟列表",-1)),V={class:"list-wrap"},F={__name:"list",setup(i){const r=c([]),d=c(2e3),_=c(!1);e(d.value);function e(f){_.value=!0,setTimeout(()=>{d.value=f,r.value=[],_.value=!1;for(let t=0;t<d.value;t++)r.value.push({id:`${Date.now()}-${t}`,label:`${t+1}`})},1e3)}return(f,t)=>{const o=x("vxe-button"),g=x("vxe-list"),w=I;return v(),u($,null,[N,p("div",null,[s(o,{onClick:t[0]||(t[0]=l=>e(5))},{default:a(()=>[n("加载5条")]),_:1}),s(o,{onClick:t[1]||(t[1]=l=>e(10))},{default:a(()=>[n("加载10条")]),_:1}),s(o,{onClick:t[2]||(t[2]=l=>e(500))},{default:a(()=>[n("加载500条")]),_:1}),s(o,{onClick:t[3]||(t[3]=l=>e(500))},{default:a(()=>[n("加载2000条")]),_:1}),s(o,{onClick:t[4]||(t[4]=l=>e(1e4))},{default:a(()=>[n("加载1w条")]),_:1}),s(o,{onClick:t[5]||(t[5]=l=>e(1e5))},{default:a(()=>[n("加载10w条")]),_:1})]),b((v(),u("div",V,[p("div",null,"总数："+k(d.value),1),s(g,{data:r.value,"max-height":400,"scroll-y":{oSize:3},class:"list"},{default:a(({items:l})=>[(v(!0),u($,null,y(l,m=>(v(),u("div",{key:m.id,class:"list-item"},k(m.label),1))),128))]),_:1},8,["data"])])),[[w,_.value]])],64)}}},z=C(F,[["__scopeId","data-v-4582c2c6"]]);export{z as default};
