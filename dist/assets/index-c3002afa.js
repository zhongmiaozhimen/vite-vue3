import{_ as D,r as b,a as P,n as N,w as Q,o as L,c as S,b as $,d as C,F as X,e as rt,f as st,g as ut,h as R,t as A,i as ft,j as H,k as f,l as g,p as dt,m as ct}from"./index-e53715e7.js";const mt={class:"virtual-list"},pt={__name:"virtual-list",props:{data:{type:Array,default:()=>[]},height:{type:Number,default:void 0},maxHeight:{type:Number,default:void 0},minItemHeight:{type:Number,default:20},buffer:{type:Number,default:1},fixed:{type:Boolean,default:!0},showOverflowTooltip:{type:Boolean,default:!1}},setup(_){const t=_;let m=j(),a=m.length;const v=b(t.height?null:t.maxHeight);let x=0,w=0,l=0;const o=b([]);let d=0,p=0;const V=b(0),y=b(0);let r=0;const O=b(null),k=b(null);let M=[],F=!1;const U=b(null),s=P({show:!1,content:null,maxWidth:0,maxHeight:0,left:0,top:0,opacity:0,arrowStyle:null});let W=null;et();function j(){return t.data.map((e,i)=>({id:`${new Date().getTime()}-${i}`,data:e}))}function E(){o.value=m,V.value=0,y.value=0,r=0}function Z(){if(!t.height&&!t.maxHeight)return;let e=0;return t.fixed?t.height?e=Math.ceil(t.height/x):e=Math.ceil(t.maxHeight/x):t.height?e=Math.ceil(t.height/t.minItemHeight):e=Math.ceil(t.maxHeight/t.minItemHeight),e}function tt(){const e=k.value.children,i=[];for(let n=0;n<e.length;n++)i.push(e[n].getBoundingClientRect().height);for(let n=i.length;n<m.length;n++)i.push(t.minItemHeight);return i}function et(){if(a<=2||!t.height&&!t.maxHeight||!t.fixed&&!t.minItemHeight){E();return}if(t.fixed){o.value=m.slice(0,1),N(()=>{x=k.value.children[0].clientHeight,z()});return}z()}function z(){if(w=Z(),l=t.buffer*2||1,w+l>=a){E();return}const e=w+l;d=0,p=e-1,V.value=0,t.fixed?y.value=(a-e)*x:y.value=(a-e)*t.minItemHeight,o.value=m.slice(d,p+1),r=0,t.fixed||N(()=>{M=tt()})}function lt(e){let i=0;if(t.fixed)i=Math.floor(e/x);else{let h=0;for(let c=0;c<M.length;c++){if(h+=M[c],e===h){i=c+1;break}if(e<h){i=c;break}}}if(e>r){if(r=e,p+1-i-w>t.buffer)return}else if(e<r){if(r=e,i-d>t.buffer)return}else return;l%2?d=i-Math.floor(l/2):d=i-l/2;const n=a-o.value.length;d<0?d=0:d>n&&(d=n),p=d+o.value.length-1;const T=a-1;if(p>T&&(p=T),o.value=m.slice(d,p+1),t.fixed)V.value=d*x,y.value=(a-p-1)*x;else{let h=0;for(let u=0;u<d;u++)h+=M[u];V.value=h;let c=0;for(let u=p+1;u<a;u++)c+=M[u];y.value=c,N(()=>{const u=k.value.children,B=[];for(let I=0;I<u.length;I++)B.push(u[I].getBoundingClientRect().height);M.splice(d,B.length,...B)})}}Q(()=>t.data,()=>{if(O.value&&(O.value.scrollTop=0),m=j(),a=m.length,a<=2||!t.height&&!t.maxHeight||!t.fixed&&!t.minItemHeight){E();return}z()}),Q([()=>t.height,()=>t.maxHeight],()=>{if(a<=2||!t.height&&!t.maxHeight||!t.fixed&&!t.minItemHeight){E();return}v.value=t.height?null:t.maxHeight,z()});function ot(e){t.showOverflowTooltip&&(s.show=!1),!(a<=2||!t.height&&!t.maxHeight||o.value.length>=a||!t.fixed&&!t.minItemHeight)&&(F||(F=!0,requestAnimationFrame(()=>{F=!1}),lt(e.target.scrollTop)))}function it(e){if(!t.showOverflowTooltip||e.target===e.currentTarget||e.target.parentElement!==e.currentTarget)return;const i=e.target,n=document.createRange();n.setStart(i,0),n.setEnd(i,i.childNodes.length);const T=n.getBoundingClientRect().width,h=window.getComputedStyle(i),c=parseInt(h.getPropertyValue("padding-left"))+parseInt(h.getPropertyValue("padding-right")),u=i.getBoundingClientRect(),B=u.width;if(T+c-B>.02){clearTimeout(W),W=null,s.show=!0,s.content=i.innerText;const I=document.documentElement.clientWidth,G=document.documentElement.clientHeight-u.top-u.height,J=I-40,K=Math.max(u.top,G)-40;s.maxWidth=J<500?J:500,s.maxHeight=K<500?K:500,N(()=>{at(i,I,u,G)})}}function nt(){!t.showOverflowTooltip||!s.show||W||(s.opacity=0,W=setTimeout(()=>{W=null,s.show=!1},200))}function at(e,i,n,T){const h=U.value.offsetWidth;let c=e.offsetLeft+n.width/2-h/2,u=h/2-5;c<0?(u+=c,c=0):c+h>i&&(u+=c+h-i,c=i-h);const B=U.value.offsetHeight+10;let I=e.offsetTop-O.value.scrollTop-B;q(u),n.top<T&&B>n.top&&(I=n.top+n.height+10,q(u,"bottom")),s.left=c,s.top=I,N(()=>{s.opacity=1})}function q(e,i="top"){i==="bottom"?s.arrowStyle={left:e+"px",top:"-5px","border-right-color":"transparent","border-bottom-color":"transparent","border-top-left-radius":"2px"}:s.arrowStyle={left:e+"px",bottom:"-5px","border-top-color":"transparent","border-left-color":"transparent","border-bottom-right-radius":"2px"}}return(e,i)=>(L(),S("div",mt,[$("div",{ref_key:"listWrapRef",ref:O,class:"list-wrap",style:C({height:_.height?_.height+"px":"","max-height":v.value?v.value+"px":""}),onScroll:ot},[$("ul",{ref_key:"listRef",ref:k,style:C({"padding-top":V.value+"px","padding-bottom":y.value+"px"}),onMouseover:it,onMouseout:nt},[(L(!0),S(X,null,rt(o.value,n=>(L(),S("li",{key:n.id,class:st(["list-item",{"is-tooltip":t.showOverflowTooltip}]),style:C({"white-space":_.fixed?"nowrap":"normal","word-break":_.fixed?"normal":"break-all",overflow:_.fixed?"hidden":"visible"})},[ut(e.$slots,"default",{items:n.data},()=>[R(A(n),1)],!0)],6))),128))],36)],36),t.showOverflowTooltip?(L(),S("div",{key:0,ref_key:"tooltipRef",ref:U,class:"tooltip",style:C({display:s.show?"block":"none",left:s.left+"px",top:s.top+"px",opacity:s.opacity})},[$("div",{class:"tooltip-content",style:C({"max-width":s.maxWidth+"px","max-height":s.maxHeight+"px"})},A(s.content),5),$("div",{class:"tooltip-arrow",style:C(s.arrowStyle)},null,4)],4)):ft("",!0)]))}},Y=D(pt,[["__scopeId","data-v-9382dc57"]]);const ht={class:"wrap"},gt=500,_t={__name:"fixed-virtual-list",setup(_){const t=P({total:1e3,buffer:0}),m=b([]),a=b(0);v();function v(){m.value=[];for(let l=1;l<=t.total;l++)m.value.push({msg:`${l} --- ${x()}`});a.value=t.buffer}function x(){const l=["abcdefg","hijklmn","opq","rst","uvw","xyz","1","2","3","4"],o=Math.ceil(Math.random()*10);return l.slice(0,o)}function w(l){t[l]!==""&&typeof t[l]=="string"&&(t[l]=t[l].replace(/[^0-9]/g,"").replace(/^0+(?=\d)/,""),t[l]=Number(t[l]))}return(l,o)=>{const d=H("el-input"),p=H("el-form-item"),V=H("el-button"),y=H("el-form");return L(),S("div",null,[f(y,{inline:""},{default:g(()=>[f(p,{label:"列表总数"},{default:g(()=>[f(d,{modelValue:t.total,"onUpdate:modelValue":o[0]||(o[0]=r=>t.total=r),modelModifiers:{number:!0},placeholder:"请输入列表总数",maxlength:"6",onBlur:o[1]||(o[1]=r=>w("total"))},null,8,["modelValue"])]),_:1}),f(p,{label:"缓冲量"},{default:g(()=>[f(d,{modelValue:t.buffer,"onUpdate:modelValue":o[2]||(o[2]=r=>t.buffer=r),modelModifiers:{number:!0},placeholder:"请输入滚动时的缓冲量",maxlength:"5",onBlur:o[3]||(o[3]=r=>w("buffer"))},null,8,["modelValue"])]),_:1}),f(p,null,{default:g(()=>[f(V,{type:"primary",onClick:v},{default:g(()=>[R("更新列表")]),_:1})]),_:1})]),_:1}),$("div",ht,[f(Y,{data:m.value,"max-height":gt,buffer:a.value,"show-overflow-tooltip":""},{default:g(({items:r})=>[R(A(r.msg),1)]),_:1},8,["data","buffer"])])])}}},vt=D(_t,[["__scopeId","data-v-5c084a5d"]]);const xt={class:"wrap"},bt=500,wt={__name:"dynamic-virtual-list",setup(_){const t=P({total:1e3,buffer:0}),m=b([]),a=b(0);v();function v(){m.value=[];for(let l=1;l<=t.total;l++)m.value.push({msg:`${l} --- ${x()}`});a.value=t.buffer}function x(){const l=["道可道也，非恒道也。","名可名也，非恒名也。","无名万物之始也，有名万物之母也。","故：恒无欲也，以观其眇；","恒有欲也，以观其徼。","两者同出，异名同谓。玄之又玄，众妙之门。","天下皆知美之为美，恶矣，皆知善之为善，斯不善矣。","有无之相生也，难易之相成也，长短之相形也，高下之相盈也，音声之相和也，先后之相随也。","是以圣人居无为之事，行不言之教。","万物作而弗始也，为而弗恃也，成功而弗居也，夫唯弗居，是以弗去。"],o=Math.ceil(Math.random()*10);return l.slice(0,o)}function w(l){typeof t[l]=="string"&&(t[l]=t[l].replace(/[^0-9]/g,"").replace(/^0+(?=\d)/,""),t[l]=Number(t[l]))}return(l,o)=>{const d=H("el-input"),p=H("el-form-item"),V=H("el-button"),y=H("el-form");return L(),S("div",null,[f(y,{inline:""},{default:g(()=>[f(p,{label:"列表总数"},{default:g(()=>[f(d,{modelValue:t.total,"onUpdate:modelValue":o[0]||(o[0]=r=>t.total=r),modelModifiers:{number:!0},placeholder:"请输入列表总数",maxlength:"6",onBlur:o[1]||(o[1]=r=>w("total"))},null,8,["modelValue"])]),_:1}),f(p,{label:"缓冲量"},{default:g(()=>[f(d,{modelValue:t.buffer,"onUpdate:modelValue":o[2]||(o[2]=r=>t.buffer=r),placeholder:"请输入滚动时的缓冲量",maxlength:"5",onBlur:o[3]||(o[3]=r=>w("buffer"))},null,8,["modelValue"])]),_:1}),f(p,null,{default:g(()=>[f(V,{type:"primary",onClick:v},{default:g(()=>[R("更新列表")]),_:1})]),_:1})]),_:1}),$("div",xt,[f(Y,{data:m.value,"max-height":bt,buffer:a.value,fixed:!1},{default:g(({items:r})=>[R(A(r.msg),1)]),_:1},8,["data","buffer"])])])}}},yt=D(wt,[["__scopeId","data-v-6bd7bc3f"]]);const Ht=_=>(dt("data-v-111c59da"),_=_(),ct(),_),Vt=Ht(()=>$("div",{class:"title"},"虚拟列表",-1)),It={__name:"index",setup(_){return(t,m)=>{const a=H("el-tab-pane"),v=H("el-tabs");return L(),S(X,null,[Vt,f(v,{modelValue:"1"},{default:g(()=>[f(a,{label:"定高",name:"1"},{default:g(()=>[f(vt)]),_:1}),f(a,{label:"非定高",name:"2",lazy:""},{default:g(()=>[f(yt)]),_:1})]),_:1})],64)}}},St=D(It,[["__scopeId","data-v-111c59da"]]);export{St as default};
