import{_ as c,ao as _,g as p,c as i,b as a,d,a1 as l,o as u,e as m}from"./index-6269380d.js";const x={__name:"bar",setup(f){const e=_({xAxis:{type:"category",data:["星期一","星期二","星期三","星期四","星期五","星期六","星期日"]},yAxis:{type:"value"},series:[{type:"bar",data:[100,150,300,400,135,147,260]}]});function o(){e.series[0].data=[];for(let t=0;t<7;t++)e.series[0].data.push(n())}function n(){let t=Math.random().toFixed(2)*400;return t>400&&(t=400),t}return(t,v)=>{const s=l,r=p("v-chart");return u(),i("div",null,[a(s,{type:"primary",onClick:o},{default:d(()=>[m("更新数据")]),_:1}),a(r,{class:"chart",option:e,autoresize:""},null,8,["option"])])}}},h=c(x,[["__scopeId","data-v-067aa455"]]);export{h as default};
