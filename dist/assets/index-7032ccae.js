import{_ as N,r as V,o as I,c as Y,F as W,b as K,d as C,t as F,a as B,g as J,h as X,i as L,p as Q,k as R}from"./index-a58f8291.js";const U=["onMousedown","onTouchstart","onTouchmove","onTouchend"],v=50,k=10,Z={__name:"list-drag",setup(b){const u=V("text"),e=V([]);["a","b","c","d","e","f","g"].forEach((a,s)=>{e.value.push({id:`${new Date().getTime()}-${s}`,index:s,top:10+(v+k)*s,transition:"",zIndex:0,constant:a})});const g=e.value.length,M=g*v+(g-1)*k+10*2;let T=0,p=0,S=0;function z(a,s){const c=s-T;let l=S+c;const E=0,n=M-v;l<E?l=E:l>n&&(l=n),a.top=l;const o=a.top+v/2;for(let t=0;t<e.value.length;t++)if(a.index!==e.value[t].index&&o>e.value[t].top&&o<e.value[t].top+v){a.index=e.value[t].index,e.value[t].index=p,e.value[t].top=p*(v+k)+10,e.value[t].transition="top 0.3s linear 0s",p=a.index;break}}const $=function(a,s){u.value="none",T=a.clientY,p=s.index,S=s.top,document.onmousemove=function(c){s.zIndex=99,s.transition="",z(s,c.clientY)},document.onmouseup=function(){s.top=p*(v+k)+10,s.zIndex=0,u.value="text",document.onmousemove=null}};function i(a,s){u.value="none",T=a.targetTouches[0].clientY,p=s.index,S=s.top}function m(a,s){s.zIndex=99,s.transition="";const l=a.targetTouches[0].clientY-T;z(s,l)}function w(a){a.top=p*(v+k)+10,a.zIndex=0,u.value="text"}return(a,s)=>(I(),Y("div",{class:"drag-list",style:C({height:M+"px",userSelect:u.value})},[(I(!0),Y(W,null,K(e.value,c=>(I(),Y("div",{key:c.id,class:"drag-list-item",style:C({height:v+"px",top:c.top+"px",transition:c.transition,"z-index":c.zIndex}),onMousedown:l=>$(l,c),onTouchstart:l=>i(l,c),onTouchmove:l=>m(l,c),onTouchend:l=>w(c)},F(c.constant)+" --- top: "+F(c.top.toFixed()),45,U))),128))],4))}},tt=N(Z,[["__scopeId","data-v-91388648"]]);const ot=["onMousedown","onTouchstart","onTouchmove","onTouchend"],h=100,f=100,_=10,r=3,et={__name:"grid-drag",setup(b){const u=V("text"),e=V([]),y=["a","b","c","d","e","f","g"];let g=0,M=0;y.forEach((n,o)=>{g=10+(h+_)*(o%r),M=10+(f+_)*Math.floor(o/r),e.value.push({id:`${new Date().getTime()}-${o}`,index:o,left:g,top:M,transition:"",zIndex:0,constant:n})});const T=e.value.length,p=r*h+(r-1)*_+20,S=Math.ceil(T/r)*f+(r-1)*_+20;let z=0,$=0,i=0,m=0,w=0;function a(n,o,t){const x=o-z,O=t-$;let D=m+x,P=w+O;const H=0,G=p-h,j=S-f;D<H?D=H:D>G&&(D=G),P<H?P=H:P>j&&(P=j),n.left=D,n.top=P;const q=n.left+h/2,A=n.top+f/2;for(let d=0;d<e.value.length;d++)if(n.index!==e.value[d].index&&q>e.value[d].left&&q<e.value[d].left+h&&A>e.value[d].top&&A<e.value[d].top+f){n.index=e.value[d].index,e.value[d].index=i,e.value[d].left=(h+_)*(i%r)+10,e.value[d].top=(f+_)*Math.floor(i/r)+10,e.value[d].transition="left 0.3s linear,top 0.3s linear",i=n.index;break}}const s=function(n,o){u.value="none",z=n.clientX,$=n.clientY,i=o.index,m=o.left,w=o.top,document.onmousemove=function(t){o.zIndex=99,o.transition="",a(o,t.clientX,t.clientY)},document.onmouseup=function(){o.left=(h+_)*(i%r)+10,o.top=(f+_)*Math.floor(i/r)+10,o.zIndex=0,u.value="text",document.onmousemove=null}};function c(n,o){u.value="none";const t=n.targetTouches[0];z=t.clientX,$=t.clientY,i=o.index,m=o.left,w=o.top}function l(n,o){o.zIndex=99,o.transition="";const t=n.targetTouches[0];a(o,t.clientX,t.clientY)}function E(n){n.left=(h+_)*(i%r)+10,n.top=(f+_)*Math.floor(i/r)+10,n.zIndex=0,u.value="text"}return(n,o)=>(I(),Y("div",{class:"drag-list",style:C({width:p+"px",height:S+"px",userSelect:u.value})},[(I(!0),Y(W,null,K(e.value,t=>(I(),Y("div",{key:t.id,class:"drag-list-item",style:C({width:h+"px",height:f+"px",top:t.top+"px",left:t.left+"px",transition:t.transition,"z-index":t.zIndex}),onMousedown:x=>s(x,t),onTouchstart:x=>c(x,t),onTouchmove:x=>l(x,t),onTouchend:x=>E(t)},[B("div",null,F(t.constant),1),B("div",null,"left: "+F(t.left.toFixed()),1),B("div",null,"top: "+F(t.top.toFixed()),1)],44,ot))),128))],4))}},nt=N(et,[["__scopeId","data-v-bf6e18d8"]]);const st=b=>(Q("data-v-c86ba7b7"),b=b(),R(),b),at=st(()=>B("div",{class:"title"},"元素拖拽",-1)),ct={__name:"index",setup(b){return(u,e)=>{const y=J("el-tab-pane"),g=J("el-tabs");return I(),Y(W,null,[at,X(g,{modelValue:"1"},{default:L(()=>[X(y,{label:"列表",name:"1"},{default:L(()=>[X(tt)]),_:1}),X(y,{label:"网格",name:"2",lazy:""},{default:L(()=>[X(nt)]),_:1})]),_:1})],64)}}},ut=N(ct,[["__scopeId","data-v-c86ba7b7"]]);export{ut as default};
