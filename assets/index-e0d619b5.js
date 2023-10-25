import{_ as b,r as p,o as m,c as f,a as e,n as x,A as g,p as C,f as y,b as v,d,F as I}from"./index-6269380d.js";import{E as R,a as T}from"./el-tab-pane-1ee04ffd.js";import"./strings-9dcb04b0.js";const S={class:"box-wrap"},z={__name:"position-relative",setup(i){const o=p(0),s=p(0);function n(a=0,t=0){o.value+=a,s.value+=t}function u(){o.value=0,s.value=0}return(a,t)=>(m(),f("div",null,[e("button",{onClick:u},"回到起点"),e("button",{onClick:t[0]||(t[0]=l=>n(200))},"右移200"),e("button",{onClick:t[1]||(t[1]=l=>n(-100))},"左移100"),e("button",{onClick:t[2]||(t[2]=l=>n(0,200))},"下移200"),e("button",{onClick:t[3]||(t[3]=l=>n(0,-100))},"上移100"),e("div",S,[e("div",{class:"box",style:x({left:o.value+"px",top:s.value+"px"})},null,4)])]))}},A=b(z,[["__scopeId","data-v-2c0889cb"]]);const E={class:"box-wrap"},X={__name:"position-absolute",setup(i){const o=p(0),s=p(0);function n(a=0,t=0){o.value+=a,s.value+=t}function u(){o.value=0,s.value=0}return(a,t)=>(m(),f("div",null,[e("button",{onClick:u},"回到起点"),e("button",{onClick:t[0]||(t[0]=l=>n(200))},"右移200"),e("button",{onClick:t[1]||(t[1]=l=>n(-100))},"左移100"),e("button",{onClick:t[2]||(t[2]=l=>n(0,200))},"下移200"),e("button",{onClick:t[3]||(t[3]=l=>n(0,-100))},"上移100"),e("div",E,[e("div",{class:"box",style:x({left:o.value+"px",top:s.value+"px"})},null,4)])]))}},Y=b(X,[["__scopeId","data-v-bc9efe85"]]);const B={class:"box-wrap"},N={__name:"translate",setup(i){const o=p(0),s=p(0);function n(a=0,t=0){o.value+=a,s.value+=t}function u(){o.value=0,s.value=0}return(a,t)=>(m(),f("div",null,[e("button",{onClick:u},"回到起点"),e("button",{onClick:t[0]||(t[0]=l=>n(200))},"右移200"),e("button",{onClick:t[1]||(t[1]=l=>n(-100))},"左移100"),e("button",{onClick:t[2]||(t[2]=l=>n(0,200))},"下移200"),e("button",{onClick:t[3]||(t[3]=l=>n(0,-100))},"上移100"),e("div",B,[e("div",{class:"box",style:x({translate:`${o.value}px ${s.value}px`})},null,4)])]))}},P=b(N,[["__scopeId","data-v-d9c95b84"]]);const V={class:"box-wrap"},D={__name:"transform-translate",setup(i){const o=p(0),s=p(0);function n(a=0,t=0){o.value+=a,s.value+=t}function u(){o.value=0,s.value=0}return(a,t)=>(m(),f("div",null,[e("button",{onClick:u},"回到起点"),e("button",{onClick:t[0]||(t[0]=l=>n(200))},"右移200"),e("button",{onClick:t[1]||(t[1]=l=>n(-100))},"左移100"),e("button",{onClick:t[2]||(t[2]=l=>n(0,200))},"下移200"),e("button",{onClick:t[3]||(t[3]=l=>n(0,-100))},"上移100"),e("div",V,[e("div",{class:"box",style:x({transform:`translate(${o.value}px, ${s.value}px)`})},null,4)])]))}},F=b(D,[["__scopeId","data-v-18766199"]]);const j=i=>(C("data-v-9a77965f"),i=i(),y(),i),q=j(()=>e("div",{class:"box-wrap"},[e("div",{class:"box"})],-1)),G={__name:"animation",setup(i){g(c=>({"70436f90":s.value}));let o="";const s=p("");let n=0,u=0,a=0,t=0;function l(c=0,_=0){const r=document.styleSheets[0],k=r.cssRules;for(let $=0;$<k.length;$++)if(k[$].name===o){r.deleteRule($);break}a+=c,t+=_,o=`move-${Date.now()}`,r.insertRule(`@keyframes ${o} {
      0% {
        translate: ${n}px ${u}px;
      }
      100% {
        translate: ${a}px ${t}px;
      }
    }`,0),s.value=`${o} 0.5s linear 0s 1 normal forwards running`,n=a,u=t}function w(){const c=document.styleSheets[0],_=c.cssRules;for(let r=0;r<_.length;r++)if(_[r].name===o){c.deleteRule(r);break}a=0,t=0,o=`move-${Date.now()}`,c.insertRule(`@keyframes ${o} {
      0% {
        translate: ${n}px ${u}px;
      }
      100% {
        translate: ${a}px ${t}px;
      }
    }`,0),s.value=`${o} 0.5s linear 0s 1 normal forwards running`,n=a,u=t}return(c,_)=>(m(),f("div",null,[e("button",{onClick:w},"回到起点"),e("button",{onClick:_[0]||(_[0]=r=>l(200))},"右移200"),e("button",{onClick:_[1]||(_[1]=r=>l(-100))},"左移100"),e("button",{onClick:_[2]||(_[2]=r=>l(0,200))},"下移200"),e("button",{onClick:_[3]||(_[3]=r=>l(0,-100))},"上移100"),q]))}},H=b(G,[["__scopeId","data-v-9a77965f"]]);const J=i=>(C("data-v-17fea23c"),i=i(),y(),i),K=J(()=>e("div",{class:"title"},"元素平移",-1)),L={__name:"index",setup(i){return(o,s)=>{const n=T,u=R;return m(),f(I,null,[K,v(u,{"model-value":"1"},{default:d(()=>[v(n,{label:"相对定位",name:"1"},{default:d(()=>[v(A)]),_:1}),v(n,{label:"绝对定位",name:"2",lazy:""},{default:d(()=>[v(Y)]),_:1}),v(n,{label:"translate",name:"3",lazy:""},{default:d(()=>[v(P)]),_:1}),v(n,{label:"transform: translate()",name:"4",lazy:""},{default:d(()=>[v(F)]),_:1}),v(n,{label:"animation",name:"5",lazy:""},{default:d(()=>[v(H)]),_:1})]),_:1})],64)}}},U=b(L,[["__scopeId","data-v-17fea23c"]]);export{U as default};
