import{d as g,r as x,o as r,c as _,a as n,b as l,w as p,u as a,e as z,f as H,t as d,E as y,Q as q,I as b,g as T,h as M,F as k,i as F,j as W,l as N,k as B,m as P,n as j,p as w,q as Q,s as V,S as R,v as G,x as U,P as Y,M as K,y as J,B as X,C as Z,z as ee,A as te,D as se,G as oe,L as ne,H as A,J as ae,K as ie,N as ce,O as le,R as re,T as C,U as $,V as ue,W as _e,X as de,Y as pe,Z as me}from"./vendor.fddd3b7b.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const c of t)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&o(u)}).observe(document,{childList:!0,subtree:!0});function i(t){const c={};return t.integrity&&(c.integrity=t.integrity),t.referrerpolicy&&(c.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?c.credentials="include":t.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(t){if(t.ep)return;t.ep=!0;const c=i(t);fetch(t.href,c)}})();const fe={class:"logo"},he={class:"logo-icon"},ge=g({__name:"Logo",setup(s){return(e,i)=>{const o=x("el-icon");return r(),_("div",fe,[n("div",he,[l(o,{size:"40"},{default:p(()=>[l(a(z))]),_:1})]),i[0]||(i[0]=n("div",{class:"logo-text"},[n("span",{style:{"font-size":"5rem"}},"xtzg"),n("span",{style:{"margin-left":"6px","font-size":"2rem"}},".top")],-1))])}}});const m=(s,e)=>{const i=s.__vccOpts||s;for(const[o,t]of e)i[o]=t;return i},ve=m(ge,[["__scopeId","data-v-960a123f"]]),S=H("store",{state:()=>({boxOpenState:!1,mobileMenuState:!1,isMobile:!1}),getters:{},actions:{checkMobileWidth(){window.innerWidth<720?this.isMobile=!0:this.isMobile=!1,this.isMobile||(this.mobileMenuState=!1)},initWindowListener(){this.checkMobileWidth(),window.addEventListener("resize",()=>{this.checkMobileWidth()})}}}),ye={class:"content",style:{display:"flex","flex-direction":"row","align-items":"center","justify-content":"space-between"}},xe={class:"text",style:{margin:"0.75rem 1rem","line-height":"2rem","margin-top":"auto",transition:"opacity 0.2s",display:"flex","flex-direction":"column","align-items":"flex-start","justify-content":"flex-start"}},be=g({__name:"Message",setup(s){const e=S(),i={first:"\u606D\u559C\u4F60",second:"\u53D1\u73B0\u9690\u85CF\u76D2\u5B50"},o=()=>{y({message:"\u79FB\u52A8\u7AEF\u6682\u672A\u5F00\u653E\u9690\u85CF\u76D2\u5B50\u529F\u80FD",type:"warning",showClose:!0})},t=()=>{if(e.isMobile){o();return}else e.boxOpenState=!e.boxOpenState,e.boxOpenState?y({message:"\u9690\u85CF\u76D2\u5B50",type:"success",showClose:!0}):y({message:"\u56DE\u5230\u4E3B\u9875",type:"success",showClose:!0})};return(c,u)=>(r(),_("div",{class:"message cards",onClick:t},[n("div",ye,[l(a(b),{size:"26",style:{transform:"translateY(-10px)"}},{default:p(()=>[l(a(q))]),_:1}),n("div",xe,[n("p",null,d(a(e).boxOpenState?i.first:"\u4F60\u597D\uFF01"),1),n("p",null,d(a(e).boxOpenState?i.second:"\u6B22\u8FCE\u5149\u4E34"),1)]),l(a(b),{size:"26",style:{transform:"translateY(10px)"}},{default:p(()=>[l(a(T))]),_:1})])]))}});const ke=m(be,[["__scopeId","data-v-c5dc4bc2"]]),we=[{name:"Github",icon:"/home-made/icons/github.png",tip:"\u53BBgithub\u770B\u770B",url:"https://github.com/xtzg"},{name:"Bilibili",icon:"/home-made/icons/bilibili.png",tip:"(\u309C-\u309C)\u3064\u30ED \u5E72\u676F ~",url:"https://www.bilibili.com/"},{name:"QQ",icon:"/home-made/icons/qq.png",tip:"\u52A0\u6211QQ\u597D\u53CB",url:"https://res.abeim.cn/api/qq/?qq=2364016387"},{name:"Email",icon:"/home-made/icons/email.png",tip:"\u6765\u5C01 Email ~",url:"mailto:2364016387@qq.com"},{name:"Wechat",icon:"/home-made/icons/wechat.png",tip:"\u52A0\u5FAE\u52A0\u5FAE",url:"https://res.abeim.cn/api/qq/?qq=2364016387"},{name:"Onlyfans",icon:"/home-made/icons/onlyfans.png",tip:"\u5B8B\u5E08\u5085\u8BA4\u8BC1",url:"https://www.onlyfans.com/xtzg"}],Ce={class:"social"},$e={class:"Links"},Fe=["href","onMouseenter"],Me=["src"],Se={class:"tip"},De=g({__name:"Social",setup(s){const e=M("\u901A\u8FC7\u8FD9\u91CC\u8054\u7CFB\u4FFA");return(i,o)=>(r(),_("div",Ce,[n("div",$e,[(r(!0),_(k,null,F(a(we),t=>(r(),_("a",{key:t.name,href:t.url,target:"_blank",onMouseenter:c=>e.value=t.tip,onMouseleave:o[0]||(o[0]=c=>e.value="\u901A\u8FC7\u8FD9\u91CC\u8054\u7CFB\u4FFA")},[n("img",{class:"icon",src:t.icon,alt:"social icon",height:"24"},null,8,Me)],40,Fe))),128))]),n("span",Se,d(e.value),1)]))}});const Le=m(De,[["__scopeId","data-v-412e43a7"]]),Be={class:"left-content"},Ee=g({__name:"Left",setup(s){return(e,i)=>(r(),_("div",Be,[l(ve),l(ke),l(Le)]))}});const Oe=m(Ee,[["__scopeId","data-v-6835dced"]]);async function Ae(){return(await W.get("https://v1.hitokoto.cn/")).data}const Ie={class:"content"},ze={class:"text"},He={class:"form"},qe={__name:"Hitokoto",setup(s){const e={hitokoto:"\u8FD9\u91CC\u5E94\u8BE5\u663E\u793A\u4E00\u53E5\u8BDD",from:"\u65E0\u540D"},i=M({hitokoto:"",from:""}),o=async()=>{try{const t=await Ae();return i.value.hitokoto=t.hitokoto,i.value.from=t.from,i}catch{y.error("\u83B7\u53D6\u540D\u8A00\u5931\u8D25"),i.value.hitokoto=e.hitokoto,i.value.from=e.from}};return N.exports.debounce(o,1e4),B(()=>{o()}),(t,c)=>(r(),_("div",{class:"weather cards",onClick:o},[n("div",Ie,[n("span",ze,d(i.value.hitokoto),1),n("span",He," -\u300C\xA0"+d(i.value.from)+"\xA0\u300D ",1)])]))}},Te=m(qe,[["__scopeId","data-v-d9c78289"]]),E=()=>{let s=new Date,e=s.getFullYear(),i=s.getMonth()+1<10?"0"+(s.getMonth()+1):s.getMonth()+1,o=s.getDate()<10?"0"+s.getDate():s.getDate(),t=s.getHours()<10?"0"+s.getHours():s.getHours(),c=s.getMinutes()<10?"0"+s.getMinutes():s.getMinutes(),u=s.getSeconds()<10?"0"+s.getSeconds():s.getSeconds();return{year:e,month:i,day:o,hour:t,minute:c,second:u,weekday:["\u661F\u671F\u65E5","\u661F\u671F\u4E00","\u661F\u671F\u4E8C","\u661F\u671F\u4E09","\u661F\u671F\u56DB","\u661F\u671F\u4E94","\u661F\u671F\u516D"][s.getDay()]}},O=()=>{const s=P();s.year(),s.month(),s.date(),s.hour(),s.minute(),s.second();const e=["minute","hour","date","month","year"];return{countDiff:o=>{o==="day"&&(o="date");const t=s.startOf(e[e.indexOf(o)+1]),u=s.endOf(e[e.indexOf(o)+1]).diff(t,o==="date"?"day":o)+1,v=o==="hour"?s.diff(t,o==="date"?"day":o):s.diff(t,o==="date"?"day":o)+1,f=u-v,h=v/u*100;return{total:u,pass:v,remain:f,percentage:h.toFixed(2)}}}},We={class:"right cards"},Ne={class:"time"},Pe={class:"date"},je={class:"text"},Qe=g({__name:"Time",setup(s){const e=M(E());return setInterval(()=>{e.value=E()},1e3),(i,o)=>(r(),_("div",We,[n("div",Ne,[n("div",Pe,[n("span",null,d(e.value.year)+" \xA0\u5E74 \xA0",1),n("span",null,d(e.value.month)+" \xA0\u6708 \xA0",1),n("span",null,d(e.value.day)+" \xA0\u65E5 \xA0",1)]),n("div",je,d(e.value.hour)+":"+d(e.value.minute)+":"+d(e.value.second),1)]),o[0]||(o[0]=n("span",null,"\u5929\u6C14\u6570\u636E\u83B7\u53D6api",-1))]))}});const Ve=m(Qe,[["__scopeId","data-v-c41fc8b5"]]),L=[{icon:"Blog",name:"\u535A\u5BA2",link:"11"},{icon:"Cloud",name:"\u7F51\u76D8",link:"11"},{icon:"CompactDisc",name:"\u97F3\u4E50",link:"11"},{icon:"Compass",name:"\u8D77\u59CB\u9875",link:"https://nav.imsyy.top/"},{icon:"Book",name:"\u7F51\u5740\u96C6",link:"11"},{icon:"Fire",name:"\u4ECA\u65E5\u70ED\u699C",link:"https://hot.imsyy.top/"},{icon:"LaptopCode",name:"\u7AD9\u70B9\u76D1\u6D4B",link:"11"}],Re={class:"links"},Ge={class:"line"},Ue=["onClick"],Ye={class:"name text-hidden"},Ke=g({__name:"Links",setup(s){const e={Blog:X,Cloud:Z,CompactDisc:ee,Compass:te,Book:se,Fire:oe,LaptopCode:ne},i=j(()=>{const t=[];for(let c=0;c<L.length;c+=6){const u=L.slice(c,c+6);t.push(u)}return t}),o=t=>{try{new URL(t),window.location.href=t}catch{y({message:"\u8BBF\u95EE\u65E0\u6548\uFF0C\u53EF\u80FD\u7F51\u5740\u5931\u6548\u4E86",type:"error"})}};return(t,c)=>{const u=x("el-col"),v=x("el-row");return r(),_("div",Re,[n("div",Ge,[l(a(b),null,{default:p(()=>[l(a(V))]),_:1}),c[0]||(c[0]=n("span",{class:"title"},"\u7F51\u7AD9\u5217\u8868",-1))]),a(L).length>0?(r(),w(a(J),{key:0,modules:[a(Y),a(K)],slidesPerView:1,spaceBetween:40,pagination:{el:".swiper-pagination",clickable:!0,bulletClass:"div"},mousewheel:!0,class:"links-swiper"},{default:p(()=>[(r(!0),_(k,null,F(i.value,f=>(r(),w(a(R),{key:f},{default:p(()=>[l(v,{class:"link-all",gutter:20},{default:p(()=>[(r(!0),_(k,null,F(f,(h,I)=>(r(),w(u,{span:8,key:h},{default:p(()=>[n("div",{class:"item cards",onClick:$t=>o(h.link),style:U([I<3?"margin-bottom: 20px;":"null",{height:"100px",display:"flex","align-items":"center","justify-content":"center"}])},[l(a(b),{size:"26"},{default:p(()=>[(r(),w(G(e[h.icon])))]),_:2},1024),n("span",Ye,d(h.name),1)],12,Ue)]),_:2},1024))),128))]),_:2},1024)]),_:2},1024))),128)),c[1]||(c[1]=n("div",{class:"swiper-pagination"},null,-1))]),_:1},8,["modules"])):Q("",!0)])}}});const Je=m(Ke,[["__scopeId","data-v-831a13f7"]]),Xe={class:"right-top"},Ze=g({__name:"Right",setup(s){const e=S();return(i,o)=>{const t=x("el-col"),c=x("el-row");return r(),_("div",{class:A(["right-content",a(e).boxOpenState?"hidden":""])},[n("div",Xe,[l(c,{gutter:24},{default:p(()=>[l(t,{span:12},{default:p(()=>[l(Te)]),_:1}),l(t,{span:12},{default:p(()=>[l(Ve)]),_:1})]),_:1})]),l(Je)],2)}}});const et=m(Ze,[["__scopeId","data-v-fb70b562"]]);const tt={class:"top"},st={class:"content"},ot={class:"time-capsule"},nt={class:"title"},at={class:"item-title",style:{display:"flex","flex-direction":"row","align-items":"space-between","justify-content":"space-between","margin-bottom":"10px"}},it={class:"percentage"},ct={class:"remaining"},lt={__name:"BoxHidden",setup(s){const e=M(O());setInterval(()=>{e.value=O()},6e4);const i=S(),o=["minute","hour","day","month"],t=["\u5206\u949F","\u5C0F\u65F6","\u5929","\u6708","\u5E74"];return(c,u)=>{const v=x("el-progress");return r(),_("div",{class:A(["box cards",a(i).boxOpenState?"":"hidden"])},[n("div",tt,[l(a(ae),{class:"setting",theme:"outline",size:"26",fill:"#ffffff"}),l(a(ie),{class:"close",onClick:u[0]||(u[0]=f=>a(i).boxOpenState=!1),theme:"outline",size:"26",fill:"#ffffff"})]),n("div",st,[n("div",ot,[n("div",nt,[l(a(ce),{theme:"outline",size:"26",fill:"#ffffff",style:{"margin-right":"10px"}}),u[1]||(u[1]=le(" \u65F6\u95F4\u80F6\u56CA "))]),(r(),_(k,null,F(o,(f,h)=>n("div",{class:"all-capsule",key:f},[n("div",at,[n("span",it,"\u672C"+d(t[h+1])+"\u5DF2\u7ECF\u5EA6\u8FC7 "+d(e.value.countDiff(f).pass)+" "+d(t[h]),1),n("span",ct,"\u5269\u4F59 "+d(e.value.countDiff(f).remain)+" "+d(t[h]),1)]),l(v,{"text-inside":!0,"stroke-width":20,percentage:e.value.countDiff(f).percentage,class:"progress-bar"},null,8,["percentage"])])),64))]),u[2]||(u[2]=n("div",{class:"more-content"}," \u66F4\u591A\u5185\u5BB9 ",-1))])],2)}}},rt=m(lt,[["__scopeId","data-v-f8503551"]]),ut={class:"home-container"},_t={class:"content-box"},dt=g({__name:"Home",setup(s){const e=S();return B(()=>{e.initWindowListener()}),re(()=>{window.removeEventListener("resize",e.checkMobileWidth)}),(i,o)=>(r(),_("div",ut,[n("div",_t,[C(l(Oe,null,null,512),[[$,a(e).isMobile?!a(e).mobileMenuState:"true"]]),C(l(et,null,null,512),[[$,a(e).isMobile?a(e).mobileMenuState:!a(e).boxOpenState]]),C(l(rt,null,null,512),[[$,a(e).boxOpenState]]),C(l(a(b),{class:"menu-icon cards",size:"26",onClick:o[0]||(o[0]=t=>a(e).mobileMenuState=!a(e).mobileMenuState)},{default:p(()=>[l(a(ue))]),_:1},512),[[$,a(e).isMobile]])])]))}});const pt=m(dt,[["__scopeId","data-v-adc475ff"]]),mt="/home-made/videos/background.mp4";const ft={},ht={class:"background"};function gt(s,e){return r(),_("div",ht,e[0]||(e[0]=[n("video",{class:"bg",src:mt,autoplay:"",muted:"",loop:""},null,-1)]))}const vt=m(ft,[["render",gt],["__scopeId","data-v-cb8318ce"]]);const yt={},xt={class:"footer cards"};function bt(s,e){return r(),_("div",xt,e[0]||(e[0]=[n("span",null,"Copyright \xA9 - 2025 \xA0",-1),n("span",null,"Powered by \u5077\u732A\u602A",-1)]))}const kt=m(yt,[["render",bt],["__scopeId","data-v-d70f5dea"]]),wt=g({__name:"App",setup(s){return B(()=>{y({message:"\u5077\u732A\u602A\u7684\u4E3B\u9875",type:"info",duration:1e5,customClass:"custom-message"})}),(e,i)=>(r(),_(k,null,[l(vt),l(pt),l(kt)],64))}}),D=_e(wt),Ct=de();for(const[s,e]of Object.entries(pe))D.component(s,e);D.use(me);D.use(Ct);D.mount("#app");
