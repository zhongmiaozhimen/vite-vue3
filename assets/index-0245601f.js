import{_ as o,o as v,c as _,K as b,r as f,E as $,a as e,y as x,p as u,f as h,g as y,b as s,d as l,F as w}from"./index-47cf10a8.js";const S={},k={class:"container"},I=b('<div class="wrap" data-v-51c9126e><div class="view" data-v-51c9126e><div class="top" data-v-51c9126e>top</div><div class="center" data-v-51c9126e>center</div><div class="bottom" data-v-51c9126e><div data-v-51c9126e>bottom</div><div data-v-51c9126e>1111111</div><div data-v-51c9126e>2222222</div><div data-v-51c9126e>3333333</div><div data-v-51c9126e>4444444</div><div data-v-51c9126e>5555555</div></div></div></div>',1),z=[I];function R(t,d){return v(),_("div",k,z)}const B=o(S,[["render",R],["__scopeId","data-v-51c9126e"]]);const H={},L={class:"container"},T=b('<div class="wrap" data-v-b2738716><div class="view" data-v-b2738716><div class="top" data-v-b2738716>top</div><div class="center" data-v-b2738716><div data-v-b2738716>center</div><div data-v-b2738716>1111111</div><div data-v-b2738716>2222222</div><div data-v-b2738716>3333333</div><div data-v-b2738716>4444444</div><div data-v-b2738716>5555555</div></div><div class="bottom" data-v-b2738716>bottom</div></div></div>',1),V=[T];function C(t,d){return v(),_("div",L,V)}const M=o(H,[["render",C],["__scopeId","data-v-b2738716"]]);const N={},E={class:"container"},F=b('<div class="wrap" data-v-a2fb2e51><div class="view" data-v-a2fb2e51><div class="left" data-v-a2fb2e51>left 区域</div><div class="center" data-v-a2fb2e51>center 区域</div><div class="right" data-v-a2fb2e51><div class="flex-box" data-v-a2fb2e51><div data-v-a2fb2e51>start</div><div data-v-a2fb2e51>right 区域</div><div data-v-a2fb2e51>end</div></div></div></div></div>',1),W=[F];function K(t,d){return v(),_("div",E,W)}const j=o(N,[["render",K],["__scopeId","data-v-a2fb2e51"]]);const q={},A={class:"container"},D=b('<div class="wrap" data-v-a0cb16b2><div class="view" data-v-a0cb16b2><div class="left" data-v-a0cb16b2>left 区域</div><div class="center" data-v-a0cb16b2><div class="flex-box" data-v-a0cb16b2><div data-v-a0cb16b2>start</div><div data-v-a0cb16b2>center 区域</div><div data-v-a0cb16b2>end</div></div></div><div class="right" data-v-a0cb16b2>right 区域</div></div></div>',1),G=[D];function J(t,d){return v(),_("div",A,G)}const O=o(q,[["render",J],["__scopeId","data-v-a0cb16b2"]]);const m=t=>(u("data-v-99cdb5ac"),t=t(),h(),t),P={class:"container"},Q=m(()=>e("div",{class:"left"},"left 区域",-1)),U=m(()=>e("div",{class:"center"},[e("div",{class:"flex-box"},[e("div",null,"start"),e("div",null,"center 区域"),e("div",null,"end")])],-1)),X=m(()=>e("div",{class:"right"},"right 区域",-1)),Y=[Q,U,X],Z={__name:"horizontal",setup(t){const d=f();let c=0;const a=f(""),n=r=>{if(c===0)return;const i=r.target.scrollLeft,p=Math.abs(c-i);i===0?a.value="is-scrolling-left":i===c||p<=1?a.value="is-scrolling-right":a.value="is-scrolling-middle"};return $(()=>{c=d.value.scrollWidth-d.value.clientWidth,c>0&&(a.value="is-scrolling-left")}),(r,i)=>(v(),_("div",P,[e("div",{ref_key:"wrapRef",ref:d,class:"wrap",onScroll:n},[e("div",{class:x(["view",a.value])},Y,2)],544)]))}},ee=o(Z,[["__scopeId","data-v-99cdb5ac"]]);const g=t=>(u("data-v-ada5c9d7"),t=t(),h(),t),te={class:"container"},ae=g(()=>e("div",{class:"top"},"top 区域",-1)),se=g(()=>e("div",{class:"center"},[e("div",null,"center 区域"),e("div",null,"111111111"),e("div",null,"222222222"),e("div",null,"333333333"),e("div",null,"444444444"),e("div",null,"555555555")],-1)),de=g(()=>e("div",{class:"bottom"},[e("div",null,"bottom 区域")],-1)),ce=[ae,se,de],ie={__name:"vertical",setup(t){const d=f();let c=0;const a=f(""),n=r=>{if(c===0)return;const i=r.target.scrollTop,p=Math.abs(c-i);i===0?a.value="is-scrolling-top":i===c||p<=1?a.value="is-scrolling-bottom":a.value="is-scrolling-middle"};return $(()=>{c=d.value.scrollHeight-d.value.clientHeight,c>0&&(a.value="is-scrolling-top")}),(r,i)=>(v(),_("div",te,[e("div",{ref_key:"wrapRef",ref:d,class:"wrap",onScroll:n},[e("div",{class:x(["view",a.value])},ce,2)],544)]))}},le=o(ie,[["__scopeId","data-v-ada5c9d7"]]);const oe=t=>(u("data-v-bf36c1de"),t=t(),h(),t),ve=oe(()=>e("div",{class:"title"},"粘性定位",-1)),_e={__name:"index",setup(t){return(d,c)=>{const a=y("el-tab-pane"),n=y("el-tabs");return v(),_(w,null,[ve,s(n,{"model-value":"1"},{default:l(()=>[s(a,{label:"吸附在顶部",name:"1"},{default:l(()=>[s(B)]),_:1}),s(a,{label:"吸附在底部",name:"2"},{default:l(()=>[s(M)]),_:1}),s(a,{label:"吸附在左侧",name:"3",lazy:""},{default:l(()=>[s(j)]),_:1}),s(a,{label:"吸附在右侧",name:"4",lazy:""},{default:l(()=>[s(O)]),_:1}),s(a,{label:"左右吸附",name:"5",lazy:""},{default:l(()=>[s(ee)]),_:1}),s(a,{label:"上下吸附",name:"6",lazy:""},{default:l(()=>[s(le)]),_:1})]),_:1})],64)}}},re=o(_e,[["__scopeId","data-v-bf36c1de"]]);export{re as default};
