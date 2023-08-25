import{_ as N,r as V,o as I,c as b,F as W,e as K,d as C,t as F,b as B,j as J,k as X,l as L,p as Q,m as R}from"./index-e53715e7.js";const U=["onMousedown","onTouchstart","onTouchmove","onTouchend"],v=50,k=10,Z={__name:"list-drag",setup(Y){const u=V("text"),e=V([]);["a","b","c","d","e","f","g"].forEach((a,s)=>{e.value.push({id:`${new Date().getTime()}-${s}`,index:s,top:10+(v+k)*s,transition:"",zIndex:0,constant:a})});const g=e.value.length,y=g*v+(g-1)*k+10*2;let M=0,p=0,T=0;function S(a,s){const c=s-M;let l=T+c;const E=0,n=y-v;l<E?l=E:l>n&&(l=n),a.top=l;const o=a.top+v/2;for(let t=0;t<e.value.length;t++)if(a.index!==e.value[t].index&&o>e.value[t].top&&o<e.value[t].top+v){a.index=e.value[t].index,e.value[t].index=p,e.value[t].top=p*(v+k)+10,e.value[t].transition="top 0.3s linear 0s",p=a.index;break}}const $=function(a,s){u.value="none",M=a.clientY,p=s.index,T=s.top,document.onmousemove=function(c){s.zIndex=99,s.transition="",S(s,c.clientY)},document.onmouseup=function(){s.top=p*(v+k)+10,s.zIndex=0,u.value="text",document.onmousemove=null}};function i(a,s){u.value="none",M=a.targetTouches[0].clientY,p=s.index,T=s.top}function m(a,s){s.zIndex=99,s.transition="";const c=a.targetTouches[0];S(s,c.clientY)}function w(a){a.top=p*(v+k)+10,a.zIndex=0,u.value="text"}return(a,s)=>(I(),b("div",{class:"drag-list",style:C({height:y+"px",userSelect:u.value})},[(I(!0),b(W,null,K(e.value,c=>(I(),b("div",{key:c.id,class:"drag-list-item",style:C({height:v+"px",top:c.top+"px",transition:c.transition,"z-index":c.zIndex}),onMousedown:l=>$(l,c),onTouchstart:l=>i(l,c),onTouchmove:l=>m(l,c),onTouchend:l=>w(c)},F(c.constant)+" --- top: "+F(c.top.toFixed()),45,U))),128))],4))}},tt=N(Z,[["__scopeId","data-v-90695155"]]);const ot=["onMousedown","onTouchstart","onTouchmove","onTouchend"],h=100,f=100,_=10,r=3,et={__name:"grid-drag",setup(Y){const u=V("text"),e=V([]),z=["a","b","c","d","e","f","g"];let g=0,y=0;z.forEach((n,o)=>{g=10+(h+_)*(o%r),y=10+(f+_)*Math.floor(o/r),e.value.push({id:`${new Date().getTime()}-${o}`,index:o,left:g,top:y,transition:"",zIndex:0,constant:n})});const M=e.value.length,p=r*h+(r-1)*_+20,T=Math.ceil(M/r)*f+(r-1)*_+20;let S=0,$=0,i=0,m=0,w=0;function a(n,o,t){const x=o-S,O=t-$;let D=m+x,P=w+O;const H=0,j=p-h,G=T-f;D<H?D=H:D>j&&(D=j),P<H?P=H:P>G&&(P=G),n.left=D,n.top=P;const q=n.left+h/2,A=n.top+f/2;for(let d=0;d<e.value.length;d++)if(n.index!==e.value[d].index&&q>e.value[d].left&&q<e.value[d].left+h&&A>e.value[d].top&&A<e.value[d].top+f){n.index=e.value[d].index,e.value[d].index=i,e.value[d].left=(h+_)*(i%r)+10,e.value[d].top=(f+_)*Math.floor(i/r)+10,e.value[d].transition="left 0.3s linear,top 0.3s linear",i=n.index;break}}const s=function(n,o){u.value="none",S=n.clientX,$=n.clientY,i=o.index,m=o.left,w=o.top,document.onmousemove=function(t){o.zIndex=99,o.transition="",a(o,t.clientX,t.clientY)},document.onmouseup=function(){o.left=(h+_)*(i%r)+10,o.top=(f+_)*Math.floor(i/r)+10,o.zIndex=0,u.value="text",document.onmousemove=null}};function c(n,o){u.value="none";const t=n.targetTouches[0];S=t.clientX,$=t.clientY,i=o.index,m=o.left,w=o.top}function l(n,o){o.zIndex=99,o.transition="";const t=n.targetTouches[0];a(o,t.clientX,t.clientY)}function E(n){n.left=(h+_)*(i%r)+10,n.top=(f+_)*Math.floor(i/r)+10,n.zIndex=0,u.value="text"}return(n,o)=>(I(),b("div",{class:"drag-list",style:C({width:p+"px",height:T+"px",userSelect:u.value})},[(I(!0),b(W,null,K(e.value,t=>(I(),b("div",{key:t.id,class:"drag-list-item",style:C({width:h+"px",height:f+"px",top:t.top+"px",left:t.left+"px",transition:t.transition,"z-index":t.zIndex}),onMousedown:x=>s(x,t),onTouchstart:x=>c(x,t),onTouchmove:x=>l(x,t),onTouchend:x=>E(t)},[B("div",null,F(t.constant),1),B("div",null,"left: "+F(t.left.toFixed()),1),B("div",null,"top: "+F(t.top.toFixed()),1)],44,ot))),128))],4))}},nt=N(et,[["__scopeId","data-v-bf6e18d8"]]);const st=Y=>(Q("data-v-c86ba7b7"),Y=Y(),R(),Y),at=st(()=>B("div",{class:"title"},"元素拖拽",-1)),ct={__name:"index",setup(Y){return(u,e)=>{const z=J("el-tab-pane"),g=J("el-tabs");return I(),b(W,null,[at,X(g,{modelValue:"1"},{default:L(()=>[X(z,{label:"列表",name:"1"},{default:L(()=>[X(tt)]),_:1}),X(z,{label:"网格",name:"2",lazy:""},{default:L(()=>[X(nt)]),_:1})]),_:1})],64)}}},ut=N(ct,[["__scopeId","data-v-c86ba7b7"]]);export{ut as default};
