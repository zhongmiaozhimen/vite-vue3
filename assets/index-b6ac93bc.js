import{o as c,c as d,a as e,_ as L,r as m,q as P,U as Q,s as V,C as G,a0 as J,y as E,n as p,b as n,d as u,F as C,m as x,x as K,G as Y,E as O,p as A,f as z,i as Z,a6 as ee,h as te}from"./index-81a62dc2.js";/* empty css                */const se="/vite-vue3/assets/1406sdf06-a827676f.jpg",le="/vite-vue3/assets/2342rfwef-88b955b5.jpg",ae="/vite-vue3/assets/245435-84e535db.jpg",ne={viewBox:"0 0 1024 1024",width:"1.2em",height:"1.2em"},oe=e("path",{fill:"currentColor",d:"M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512L340.864 831.872a30.592 30.592 0 0 0 0 42.752a29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"},null,-1),re=[oe];function ie(o,g){return c(),d("svg",ne,re)}const ue={name:"ep-arrow-right",render:ie},ce={viewBox:"0 0 1024 1024",width:"1.2em",height:"1.2em"},de=e("path",{fill:"currentColor",d:"M609.408 149.376L277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0a30.592 30.592 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.592 30.592 0 0 0 0-42.688a29.12 29.12 0 0 0-41.728 0z"},null,-1),_e=[de];function fe(o,g){return c(),d("svg",ce,_e)}const ve={name:"ep-arrow-left",render:fe};const me=o=>(A("data-v-1b471fee"),o=o(),z(),o),ge={class:"carousel__arrow"},he={class:"carousel__indicators"},pe=["onClick"],be=me(()=>e("div",{class:"carousel__indicator__square"},null,-1)),we=[be],j="0.4s",Ie=3e3,ye={__name:"carousel",setup(o){const g=m(),_=m(),r=m(0),a=m(0),h=m("0s");let s=m(0),i=null,b="end",f=null;const v=m([]);P("addCarouselItem",t=>{v.value.push(t.uid)});const B=Q(()=>r.value*v.value.length),U=()=>{if(s.value--,s.value<0){s.value=v.value.length-1;const t=-(r.value*v.value.length),k=_.value.lastElementChild;k.style.transform=`translateX(${t}px)`}a.value+=r.value,h.value=j,b="start"},S=()=>{if(s.value++,s.value>v.value.length-1){s.value=0;const t=r.value*v.value.length,k=_.value.firstElementChild;k.style.transform=`translateX(${t}px)`}a.value-=r.value,h.value=j,b="start"},w=()=>{i=setTimeout(()=>{S(),w()},Ie)},y=()=>{i&&clearTimeout(i)},R=()=>{y(),f(),f=null,w()};V(v,t=>{t.length>0&&w()},{deep:!0});const X=()=>{if(b="end",s.value===0){const t=_.value.firstElementChild;if(t.style.transform){if(t.style.transform=null,a.value=0,h.value="0s",!f)return;requestAnimationFrame(()=>{requestAnimationFrame(()=>{R()})});return}}else if(s.value===v.value.length-1){const t=_.value.lastElementChild;if(t.style.transform){if(t.style.transform=null,a.value=-(r.value*s.value),h.value="0s",!f)return;requestAnimationFrame(()=>{requestAnimationFrame(()=>{R()})});return}}f&&R()},W=()=>{if(b==="end"){y(),U(),w();return}f||(f=U)},F=()=>{if(b==="end"){y(),S(),w();return}f||(f=S)},M=t=>{s.value!==t&&(y(),s.value=t,a.value=-r.value*s.value,h.value=j,b="start",w())};return G(()=>{r.value=g.value.clientWidth}),J(()=>{y()}),(t,k)=>{const D=ve,q=O,H=ue;return c(),d("div",{ref_key:"carouselRef",ref:g,class:"carousel"},[e("div",{ref_key:"carouselContainerRef",ref:_,class:"carousel__container",style:p({width:B.value+"px",transform:`translateX(${a.value}px)`,"transition-duration":h.value}),onTransitionend:X},[E(t.$slots,"default",{},void 0,!0)],36),e("div",ge,[e("div",{class:"carousel-arrow-left",onClick:W},[n(q,null,{default:u(()=>[n(D)]),_:1})]),e("div",{class:"carousel-arrow-right",onClick:F},[n(q,null,{default:u(()=>[n(H)]),_:1})])]),e("div",he,[e("ul",null,[(c(!0),d(C,null,x(v.value,(N,T)=>(c(),d("li",{key:N,class:K(["carousel__indicator",{active:T===Y(s)}]),onClick:Ve=>M(T)},we,10,pe))),128))])])],512)}}},$=L(ye,[["__scopeId","data-v-1b471fee"]]);const Ce={class:"carousel-item"},ke={__name:"carousel-item",setup(o){return Z("addCarouselItem")(ee()),(_,r)=>(c(),d("div",Ce,[E(_.$slots,"default",{},void 0,!0)]))}},I=L(ke,[["__scopeId","data-v-6c3ec3fb"]]),$e=[{id:"1",imgSrc:"https://ts1.cn.mm.bing.net/th/id/R-C.243e79d2fcb64ada4702bd4593e7d3f7?rik=bvAhurflqw4Y9A&riu=http%3a%2f%2fwww.quazero.com%2fuploads%2fallimg%2f140303%2f1-140303214S3.jpg&ehk=N2TUq%2fL6le4NSp9spwx0kC1dqWnBSvE%2byT6c9kjDe0I%3d&risl=&pid=ImgRaw&r=0"},{id:"2",imgSrc:"https://ts1.cn.mm.bing.net/th/id/R-C.541d315de4b11e79e0bcb84f35ccf30b?rik=V96LdUGfUZJu5g&riu=http%3a%2f%2fimage.qianye88.com%2fpic%2f812f74e3a664e1c2b1e0e8cde0480e8c&ehk=o55Cw49jjhzmX%2bO%2fvYRXQsoMo3R%2f%2fuXTqpx%2bM88E63M%3d&risl=&pid=ImgRaw&r=0"},{id:"3",imgSrc:"https://ts1.cn.mm.bing.net/th/id/R-C.9de53f9726576696b318a8d95c0946cb?rik=sWB3V9KSxHbThw&riu=http%3a%2f%2fpic.bizhi360.com%2fbbpic%2f95%2f9995_1.jpg&ehk=GcPUjJED69TBvg9XxQr2klzDzfRsQWhAfLKlIAUWHJQ%3d&risl=&pid=ImgRaw&r=0"}];const l=o=>(A("data-v-e0b4273f"),o=o(),z(),o),xe={class:"header"},Se=l(()=>e("div",{class:"title"},"轮播",-1)),Re={class:"bg-img"},je=l(()=>e("div",{class:"bg-img-1"},null,-1)),Le=l(()=>e("div",{class:"bg-img-2"},null,-1)),Ue=l(()=>e("div",{class:"bg-img-3"},null,-1)),qe=l(()=>e("div",null,"1",-1)),Te=l(()=>e("img",{src:se},null,-1)),Ee=l(()=>e("img",{src:le},null,-1)),Ae=l(()=>e("img",{src:ae},null,-1)),ze=l(()=>e("br",null,null,-1)),Be=l(()=>e("div",null,"2",-1)),Xe=["src"],We=l(()=>e("br",null,null,-1)),Fe=l(()=>e("div",null,"3",-1)),Me=["src"],De=l(()=>e("br",null,null,-1)),He=l(()=>e("div",null,"4",-1)),Ne=["src"],Pe={__name:"index",setup(o){const g=[{id:"1",imgSrc:"/src/assets/1406sdf06.jpg"},{id:"2",imgSrc:"../../assets/2342rfwef.jpg"},{id:"3",imgSrc:"@/assets/245435.jpg"}],_=[{id:"1",imgSrc:new URL("/vite-vue3/assets/1406sdf06-a827676f.jpg",self.location).href},{id:"2",imgSrc:new URL("/vite-vue3/assets/2342rfwef-88b955b5.jpg",self.location).href},{id:"3",imgSrc:new URL("/vite-vue3/assets/245435-84e535db.jpg",self.location).href}],r=m([]);setTimeout(()=>{r.value=$e},500);const a=["/src/assets/vue.svg","../../assets/vue.svg","@/assets/vue.svg",new URL("/vite-vue3/assets/vue-5532db34.svg",self.location).href,new URL("/vite-vue3/assets/vue-5532db34.svg",self.location).href,new URL("/vite-vue3/assets/vue-5532db34.svg",self.location).href];return(h,s)=>(c(),d(C,null,[e("div",xe,[Se,e("div",Re,[je,Le,Ue,e("div",{class:"bg-img-4",style:p({backgroundImage:`url(${a[0]})`})},null,4),e("div",{class:"bg-img-5",style:p({backgroundImage:`url(${a[1]})`})},null,4),e("div",{class:"bg-img-6",style:p({backgroundImage:`url(${a[2]})`})},null,4),e("div",{class:"bg-img-7",style:p({backgroundImage:`url(${a[3]})`})},null,4),e("div",{class:"bg-img-8",style:p({backgroundImage:`url(${a[4]})`})},null,4),e("div",{class:"bg-img-9",style:p({backgroundImage:`url(${a[5]})`})},null,4)])]),qe,n($,null,{default:u(()=>[n(I,null,{default:u(()=>[Te]),_:1}),n(I,null,{default:u(()=>[Ee]),_:1}),n(I,null,{default:u(()=>[Ae]),_:1})]),_:1}),ze,Be,n($,null,{default:u(()=>[(c(),d(C,null,x(g,i=>n(I,{key:i.id},{default:u(()=>[e("img",{src:i.imgSrc},null,8,Xe)]),_:2},1024)),64))]),_:1}),We,Fe,n($,null,{default:u(()=>[(c(),d(C,null,x(_,i=>n(I,{key:i.id},{default:u(()=>[e("img",{src:i.imgSrc},null,8,Me)]),_:2},1024)),64))]),_:1}),De,He,n($,null,{default:u(()=>[(c(!0),d(C,null,x(r.value,i=>(c(),te(I,{key:i.id},{default:u(()=>[e("img",{src:i.imgSrc},null,8,Ne)]),_:2},1024))),128))]),_:1})],64))}},Ke=L(Pe,[["__scopeId","data-v-e0b4273f"]]);export{Ke as default};
