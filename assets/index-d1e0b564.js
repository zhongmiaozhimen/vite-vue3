import{_ as P,a as W,b as D,c as H,d as N,e as V,f as G,g as O,h as J,i as K,j as Q,k as Y}from"./vue-3fc1fc4d.js";import{o as u,c as d,a as l,_ as $,r as i,q as Z,U as ee,s as te,C as se,a0 as ae,y as L,n as ne,b as g,d as C,F as x,m as E,x as le,G as re,E as oe,p as T,f as q,i as _e,a6 as ce,h as ue}from"./index-6269380d.js";/* empty css                */const ie={viewBox:"0 0 1024 1024",width:"1.2em",height:"1.2em"},de=l("path",{fill:"currentColor",d:"M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512L340.864 831.872a30.592 30.592 0 0 0 0 42.752a29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"},null,-1),ve=[de];function fe(s,n){return u(),d("svg",ie,ve)}const me={name:"ep-arrow-right",render:fe},pe={viewBox:"0 0 1024 1024",width:"1.2em",height:"1.2em"},ge=l("path",{fill:"currentColor",d:"M609.408 149.376L277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0a30.592 30.592 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.592 30.592 0 0 0 0-42.688a29.12 29.12 0 0 0-41.728 0z"},null,-1),he=[ge];function Ce(s,n){return u(),d("svg",pe,he)}const we={name:"ep-arrow-left",render:Ce};const ye=s=>(T("data-v-1b471fee"),s=s(),q(),s),be={class:"carousel__arrow"},Ie={class:"carousel__indicators"},xe=["onClick"],$e=ye(()=>l("div",{class:"carousel__indicator__square"},null,-1)),je=[$e],I="0.4s",ke=3e3,Se={__name:"carousel",setup(s){const n=i(),r=i(),a=i(0),v=i(0),o=i("0s");let t=i(0),w=null,f="end",_=null;const c=i([]);Z("addCarouselItem",e=>{c.value.push(e.uid)});const A=ee(()=>a.value*c.value.length),j=()=>{if(t.value--,t.value<0){t.value=c.value.length-1;const e=-(a.value*c.value.length),h=r.value.lastElementChild;h.style.transform=`translateX(${e}px)`}v.value+=a.value,o.value=I,f="start"},y=()=>{if(t.value++,t.value>c.value.length-1){t.value=0;const e=a.value*c.value.length,h=r.value.firstElementChild;h.style.transform=`translateX(${e}px)`}v.value-=a.value,o.value=I,f="start"},m=()=>{w=setTimeout(()=>{y(),m()},ke)},p=()=>{w&&clearTimeout(w)},b=()=>{p(),_(),_=null,m()};te(c,e=>{e.length>0&&m()},{deep:!0});const B=()=>{if(f="end",t.value===0){const e=r.value.firstElementChild;if(e.style.transform){if(e.style.transform=null,v.value=0,o.value="0s",!_)return;requestAnimationFrame(()=>{requestAnimationFrame(()=>{b()})});return}}else if(t.value===c.value.length-1){const e=r.value.lastElementChild;if(e.style.transform){if(e.style.transform=null,v.value=-(a.value*t.value),o.value="0s",!_)return;requestAnimationFrame(()=>{requestAnimationFrame(()=>{b()})});return}}_&&b()},F=()=>{if(f==="end"){p(),j(),m();return}_||(_=j)},R=()=>{if(f==="end"){p(),y(),m();return}_||(_=y)},U=e=>{t.value!==e&&(p(),t.value=e,v.value=-a.value*t.value,o.value=I,f="start",m())};return se(()=>{a.value=n.value.clientWidth}),ae(()=>{p()}),(e,h)=>{const z=we,k=oe,X=me;return u(),d("div",{ref_key:"carouselRef",ref:n,class:"carousel"},[l("div",{ref_key:"carouselContainerRef",ref:r,class:"carousel__container",style:ne({width:A.value+"px",transform:`translateX(${v.value}px)`,"transition-duration":o.value}),onTransitionend:B},[L(e.$slots,"default",{},void 0,!0)],36),l("div",be,[l("div",{class:"carousel-arrow-left",onClick:F},[g(k,null,{default:C(()=>[g(z)]),_:1})]),l("div",{class:"carousel-arrow-right",onClick:R},[g(k,null,{default:C(()=>[g(X)]),_:1})])]),l("div",Ie,[l("ul",null,[(u(!0),d(x,null,E(c.value,(M,S)=>(u(),d("li",{key:M,class:le(["carousel__indicator",{active:S===re(t)}]),onClick:ze=>U(S)},je,10,xe))),128))])])],512)}}},Le=$(Se,[["__scopeId","data-v-1b471fee"]]);const Ee={class:"carousel-item"},Te={__name:"carousel-item",setup(s){return _e("addCarouselItem")(ce()),(r,a)=>(u(),d("div",Ee,[L(r.$slots,"default",{},void 0,!0)]))}},qe=$(Te,[["__scopeId","data-v-6c3ec3fb"]]);const Ae=s=>(T("data-v-c961f167"),s=s(),q(),s),Be=Ae(()=>l("div",{class:"title"},"轮播",-1)),Fe=["src"],Re={__name:"index",setup(s){const n=a=>new URL(Object.assign({"/src/assets/1223ffegergr34.png":P,"/src/assets/12356sdfas.webp":W,"/src/assets/1245456.jpg":D,"/src/assets/1406sdf06.jpg":H,"/src/assets/2342rfwef.jpg":N,"/src/assets/23432fewf.webp":V,"/src/assets/245435.jpg":G,"/src/assets/35457jyhtgrf.jpg":O,"/src/assets/ersd3345dfgdh.webp":J,"/src/assets/news.png":K,"/src/assets/sdgrg435.jpg":Q,"/src/assets/vue.svg":Y})[`/src/assets/${a}`],self.location).href,r=i([]);return setTimeout(()=>{r.value=[{id:"1",imgSrc:n("1406sdf06.jpg")},{id:"2",imgSrc:n("2342rfwef.jpg")},{id:"3",imgSrc:n("245435.jpg")},{id:"4",imgSrc:n("1245456.jpg")},{id:"5",imgSrc:n("sdgrg435.jpg")}]},500),(a,v)=>(u(),d(x,null,[Be,g(Le,null,{default:C(()=>[(u(!0),d(x,null,E(r.value,o=>(u(),ue(qe,{key:o.id},{default:C(()=>[l("img",{src:o.imgSrc},null,8,Fe)]),_:2},1024))),128))]),_:1})],64))}},We=$(Re,[["__scopeId","data-v-c961f167"]]);export{We as default};
