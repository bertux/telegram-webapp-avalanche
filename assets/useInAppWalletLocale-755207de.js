import{a as Z,ch as ee,aK as te,aA as p,ax as ne,cv as f,aB as o,aT as ie,cy as ae,aD as W,aE as H,bn as w,aX as K,aW as oe,aI as O,cz as se,cA as le,cB as q,cC as E,cD as ce,cE as re,cF as de,cG as ue,bb as he,b4 as ge,aY as T,b8 as me,cf as fe,cx as we,w as pe,_ as r}from"./index-94750922.js";import{g as ye,l as _e}from"./oauth-1d9e393b.js";function be(e){switch(e){case"google":return"Sign In - Google Accounts";default:return`Sign In - ${e.slice(0,1).toUpperCase()}${e.slice(1)}`}}function Ee(e){switch(e){case"facebook":return{width:715,height:555};default:return{width:350,height:500}}}function Le(e,t,n){switch(e){case"apple":case"facebook":case"google":case"farcaster":case"telegram":case"discord":return ye({authOption:e,client:t,ecosystem:n});default:return""}}function Ie({authOption:e,themeObj:t,client:n,ecosystem:l}){const{height:y,width:c}=Ee(e),L=(window.innerHeight-y)/2,I=(window.innerWidth-c)/2,s=window.open(Le(e,n,l),void 0,`width=${c}, height=${y}, top=${L}, left=${I}`);if(s){const u=be(e);s.document.title=u,s.document.body.innerHTML=ke,s.document.body.style.background=t.colors.modalBg,s.document.body.style.color=t.colors.accentText}return s&&window.addEventListener("beforeunload",()=>{s==null||s.close()}),s}const ke=`
<svg class="loader" viewBox="0 0 50 50">
  <circle
    cx="25"
    cy="25"
    r="20"
    fill="none"
    stroke="currentColor"
    stroke-width="4"
  />
</svg>

<style>
  body,
  html {
    height: 100%;
    margin: 0;
    padding: 0;
  }

  body {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .loader {
    width: 50px;
    height: 50px;
    animation: spin 2s linear infinite;
  }

  .loader circle {
    animation: loading 1.5s linear infinite;
  }

  @keyframes loading {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }

  @keyframes spin {
    100% {
      transform: rotate(360deg);
        }
  }
</style>
`;async function xe(e){const n=await(await fetch(`${Z("inAppWallet")}/api/2024-05-05/ecosystem-wallet`,{headers:{"x-ecosystem-id":e}})).json();if(!n||n.code==="UNAUTHORIZED")throw new Error(n.message||`Could not find ecosystem wallet with id ${e}, please check your ecosystem wallet configuration.`);return n.authOptions??void 0}function Se(e){return/^\S+@\S+\.\S+$/.test(e.replace(/\+/g,""))}const G=["email","phone","google","apple","facebook","passkey"],Oe=e=>{var M,V,U;const t=e.locale,{wallet:n}=e,l=ee(),y=te(),c=p.useMemo(()=>{var i,a;return e.wallet.id==="inApp"?(a=(i=e.wallet.getConfig())==null?void 0:i.metadata)==null?void 0:a.image:void 0},[e.wallet]),L={google:t.signInWithGoogle,facebook:t.signInWithFacebook,apple:t.signInWithApple,discord:t.signInWithDiscord,farcaster:"Farcaster",telegram:"Telegram"},{data:I,isLoading:s}=ne({queryKey:["auth-options",n.id],queryFn:async()=>f(n)?xe(n.id):null,enabled:f(n),retry:!1}),u=f(n)?I??G:((V=(M=n.getConfig())==null?void 0:M.auth)==null?void 0:V.options)??G,k=u.indexOf("email"),m=k!==-1,x=u.indexOf("phone"),h=x!==-1,[S,C]=p.useState(null),g=p.useMemo(()=>S||(m&&h?k<x?"email":"phone":m?"email":h?"phone":"none"),[m,h,k,x,S]);if(f(n)&&s)return o(ie,{});const N=u.includes("passkey"),R=g==="email"?t.emailPlaceholder:t.phonePlaceholder,$=g==="email"?t.emailRequired:t.phoneRequired;let _="text";g==="email"?_="email":g==="phone"&&(_="tel");const d=u.filter(i=>ae.includes(i)),D=d.length>0,B=f(n)?{id:n.id,partnerId:(U=n.getConfig())==null?void 0:U.partnerId}:void 0,J=async i=>{var j,F;const a=n.getConfig(),P=((j=a==null?void 0:a.auth)==null?void 0:j.mode)??"popup";if(a&&"auth"in a&&P!=="popup"&&!e.isLinking)return _e({authOption:i,client:e.client,ecosystem:B,redirectUrl:(F=a==null?void 0:a.auth)==null?void 0:F.redirectUrl,mode:P});try{const b=Ie({authOption:i,themeObj:y,client:e.client,ecosystem:B});if(!b)throw new Error("Failed to open login window");const z={chain:e.chain,client:e.client,strategy:i,openedWindow:b,closeOpenedWindow:A=>{A.close()}},Y=(()=>{if(e.isLinking){if(n.id!=="inApp")throw new Error("Only in-app wallets support multi-auth");return fe(n,z)}else{const A=n.connect(z);return we(i,pe),A}})();l({socialLogin:{type:i,connectionPromise:Y}}),e.select()}catch(b){console.error(`Error signing in with ${i}`,b)}};function Q(){l({passkeyLogin:!0}),e.select()}function X(){l({walletLogin:!0}),e.select()}const v=d.length>2;return W(H,{flex:"column",gap:"md",style:{position:"relative"},children:[c&&W(w,{children:[o(K,{client:e.client,src:c.src,alt:c.alt,width:`${c.width}`,height:`${c.height}`,style:{margin:"auto"}}),o(oe,{y:"xxs"})]}),D&&o(H,{flex:"row",center:"x",gap:d.length>4?"xs":"sm",style:{justifyContent:"space-between",display:"grid",gridTemplateColumns:`repeat(${d.length}, 1fr)`},children:d.map(i=>{const a=(()=>v?d.length>4?O.md:O.lg:O.md)();return W(ve,{"aria-label":`Login with ${i}`,"data-variant":v?"icon":"full",variant:"outline",disabled:e.disabled,onClick:()=>{J(i)},children:[o(K,{src:se[i],width:a,height:a,client:e.client}),!v&&`${d.length===1?"Continue with ":""}${L[i]}`]},i)})}),e.size==="wide"&&D&&(m||h)&&o(le,{text:t.or}),m&&o(w,{children:g==="email"?o(q,{type:_,onSelect:i=>{l({emailLogin:i}),e.select()},placeholder:R,name:"email",errorMessage:i=>{if(!Se(i.toLowerCase()))return t.invalidEmail},disabled:e.disabled,emptyErrorMessage:$,submitButtonText:t.submitEmail}):o(E,{client:e.client,icon:ce,onClick:()=>{C("email")},title:t.emailPlaceholder,disabled:e.disabled})}),h&&o(w,{children:g==="phone"?o(q,{format:"phone",type:_,onSelect:i=>{l({phoneLogin:i.replace(/[-\(\) ]/g,"")}),e.select()},placeholder:R,name:"phone",errorMessage:i=>{const a=i.replace(/[-\(\) ]/g,"");if(!/^[0-9]+$/.test(a)&&h)return t.invalidPhone},disabled:e.disabled,emptyErrorMessage:$,submitButtonText:t.submitEmail}):o(E,{client:e.client,icon:re,onClick:()=>{C("phone")},title:t.phonePlaceholder,disabled:e.disabled})}),N&&o(w,{children:o(E,{client:e.client,icon:de,onClick:()=>{Q()},title:t.passkey,disabled:e.disabled})}),e.isLinking&&o(w,{children:o(E,{client:e.client,icon:ue(""),onClick:()=>{X()},title:t.linkWallet})})]})},ve=he(ge)({flexGrow:1,"&[data-variant='full']":{display:"flex",justifyContent:"flex-start",padding:T.md,gap:T.sm,fontSize:me.md,fontWeight:500,transition:"background-color 0.2s ease","&:active":{boxShadow:"none"}},"&[data-variant='icon']":{padding:T.sm}});async function Pe(e){switch(e){case"es_ES":return(await r(()=>import("./es-8ed540ca.js"),[])).default;case"ja_JP":return(await r(()=>import("./ja-784cfb0f.js"),[])).default;case"tl_PH":return(await r(()=>import("./tl-49c56ddc.js"),[])).default;case"vi_VN":return(await r(()=>import("./vi-af39dc37.js"),[])).default;case"de_DE":return(await r(()=>import("./de-5c5d98af.js"),[])).default;case"ko_KR":return(await r(()=>import("./kr-30bb4ef7.js"),[])).default;case"fr_FR":return(await r(()=>import("./fr-364dacb2.js"),[])).default;default:return(await r(()=>import("./en-4ed007fd.js"),[])).default}}function Te(e){const[t,n]=p.useState(void 0);return p.useEffect(()=>{Pe(e).then(l=>{n(l)})},[e]),t}export{Oe as C,Ie as o,Te as u};
