import{_ as g,r as c,c as a,w as D,e as n,a as s,j as w,b as r,d as m,F as y,a1 as R,o as l,m as z,p as B,f as O}from"./index-6269380d.js";import{v as S}from"./el-loading-d2cffde3.js";import{E as V,a as A}from"./el-table-2a44098d.js";import"./el-scrollbar-b3ca1029.js";import{E as F}from"./index-621daba0.js";import"./index-eb302f3b.js";const k=i=>(B("data-v-2907bfa4"),i=i(),O(),i),H=k(()=>s("div",{class:"title"},"Lodop 打印",-1)),M={key:0},j={key:0,class:"download-lodop"},q=k(()=>s("a",{href:"CLodop.protocol:setup"},"点这里直接再次启动",-1)),G={class:"print-content"},J="http://www.c-lodop.com/download/CLodop_Setup_for_Win64NT_6.577EN.zip",L="http://localhost:8000/CLodopFuncs.js",K={__name:"index",setup(i){const d=c(!1),_=c(!1),u=c(!1);let e=null;const x=()=>{d.value=!0,document.querySelectorAll("script").forEach(t=>{t.src===L&&document.body.removeChild(t)});const o=document.createElement("script");o.src=L,o.onerror=()=>{console.log("Lodop 加载失败"),_.value=!0,u.value=!1,d.value=!1},o.onload=()=>{u.value=!0,_.value=!1,e=window.LODOP,d.value=!1},document.body.appendChild(o)};(()=>{window.LODOP||x()})();const T=[{prop:"date",label:"日期",minWidth:100},{prop:"name",label:"名字",minWidth:100},{prop:"province",label:"省份",minWidth:100},{prop:"city",label:"城市",minWidth:100},{prop:"address",label:"地址",minWidth:150},{prop:"zip",label:"邮编",minWidth:100},{prop:"remark",label:"备注",minWidth:150}],C=[{date:"2016-05-03",name:"张三",province:"黑龙江",city:"哈尔滨",address:"南岗区-哈尔滨大街501号",zip:"000000",remark:""},{date:"2016-05-03",name:"张三",province:"黑龙江",city:"哈尔滨",address:"南岗区-哈尔滨大街501号",zip:"000000",remark:""},{date:"2016-05-03",name:"张三",province:"黑龙江",city:"哈尔滨",address:"南岗区-哈尔滨大街501号",zip:"000000",remark:""},{date:"2016-05-03",name:"张三",province:"黑龙江",city:"哈尔滨",address:"南岗区-哈尔滨大街501号",zip:"000000",remark:""}],f=c(),b=()=>window.LODOP?!0:(F.alert("Web打印服务CLodop未安装或启动，请先安装或启动","",{confirmButtonText:"确认",type:"error",callback:()=>{}}),!1),h=()=>{e.PRINT_INIT("tablePrint"),e.ADD_PRINT_HTM(10,55,"100%","100%",f.value.innerHTML)},E=()=>{b()&&(h(),e.PREVIEW())},I=()=>{b()&&(h(),e.PRINT())};return(W,o)=>{const t=R,v=A,N=V,P=S;return l(),a(y,null,[H,D((l(),a("div",null,[_.value?(l(),a("div",M,[u.value?w("",!0):(l(),a("div",j,[n(" Web打印服务CLodop未安装启动，点击这里 "),s("a",{href:J},"下载"),n(" ，并且执行安装（若此前已安装过，可 "),q,n(" ），成功后请刷新本页面或重启浏览器。 ")]))])):w("",!0),r(t,{type:"primary",onClick:E},{default:m(()=>[n("打印预览")]),_:1}),r(t,{type:"primary",onClick:I},{default:m(()=>[n("直接打印")]),_:1}),s("div",G,[s("div",{ref_key:"printTableRef",ref:f},[r(N,{ref:"tableRef",data:C,border:"",stripe:"","max-height":400},{default:m(()=>[r(v,{type:"index",fixed:"left",label:"序号",width:"70"}),(l(),a(y,null,z(T,p=>r(v,{key:p.prop,prop:p.prop,label:p.label,"min-width":p.minWidth},null,8,["prop","label","min-width"])),64))]),_:1},512)],512)])])),[[P,d.value]])],64)}}},oe=g(K,[["__scopeId","data-v-2907bfa4"]]);export{oe as default};
