import{_,j as p,k as a,c as d,l as o,m as i,o as l,g as u}from"./index-bf51827a.js";const m={__name:"bar",setup(x){const t=p({xAxis:{type:"category",data:["星期一","星期二","星期三","星期四","星期五","星期六","星期日"]},yAxis:{type:"value"},series:[{type:"bar",data:[100,150,300,400,135,147,260]}]});function n(){t.series[0].data=[];for(let e=0;e<7;e++)t.series[0].data.push(s())}function s(){let e=Math.random().toFixed(2)*400;return e>400&&(e=400),e}return(e,f)=>{const r=a("el-button"),c=a("v-chart");return l(),d("div",null,[o(r,{type:"primary",onClick:n},{default:i(()=>[u("更新数据")]),_:1}),o(c,{class:"chart",option:t,autoresize:""},null,8,["option"])])}}},y=_(m,[["__scopeId","data-v-eedd5e7a"]]);export{y as default};
