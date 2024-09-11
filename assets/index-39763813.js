import{B as xt,K as et,L as wt,M as Tt,O as I,P as Ot,Q as Z,R as at,S as v,T as nt,V as k,W as K,X as _t,Y as st,Z as rt,$ as it,a0 as Dt,a1 as Lt,a2 as B,a3 as Et,l as It,v as Vt,a4 as L,a5 as T,a6 as V,u as Ct,a7 as N,a8 as w,c as Ut,f as Ft,a9 as ot,aa as b,ab as St,ac as Nt,ad as x,ae as C,af as j,g as ct,ag as Rt,ah as G,ai as Bt,aj as Mt,s as dt,ak as z,al as _,am as $t,an as Ht,ao as kt,ap as ut,aq as D,ar as jt,as as zt,at as Wt,b as qt,_ as P,p as pt,au as Yt,d as Zt}from"./index-94750922.js";import{concatHex as mt}from"./concat-hex-c9b9fd32.js";import{t as Kt}from"./toRlp-4b688d9f.js";class Jt extends xt{constructor(e){super(`Filter type "${e}" is not supported.`,{name:"FilterTypeNotSupportedError"})}}const W=et;function yt(t){const{abi:e,args:a=[],name:n}=t,i=wt(n,{strict:!1}),s=e.filter(r=>i?r.type==="function"?Tt(r)===n:r.type==="event"?W(r)===n:!1:"name"in r&&r.name===n);if(s.length===0)return;if(s.length===1)return s[0];let o;for(const r of s){if(!("inputs"in r))continue;if(!a||a.length===0){if(!r.inputs||r.inputs.length===0)return r;continue}if(!r.inputs||r.inputs.length===0||r.inputs.length!==a.length)continue;if(a.every((d,u)=>{const y="inputs"in r&&r.inputs[u];return y?M(d,y):!1})){if(o&&"inputs"in o&&o.inputs){const d=lt(r.inputs,o.inputs,a);if(d)throw new Ot({abiItem:r,type:d[0]},{abiItem:o,type:d[1]})}o=r}}return o||s[0]}function M(t,e){const a=typeof t,n=e.type;switch(n){case"address":return I(t,{strict:!1});case"bool":return a==="boolean";case"function":return a==="string";case"string":return a==="string";default:return n==="tuple"&&"components"in e?Object.values(e.components).every((i,s)=>M(Object.values(t)[s],i)):/^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(n)?a==="number"||a==="bigint":/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(n)?a==="string"||t instanceof Uint8Array:/[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(n)?Array.isArray(t)&&t.every(i=>M(i,{...e,type:n.replace(/(\[[0-9]{0,}\])$/,"")})):!1}}function lt(t,e,a){for(const n in t){const i=t[n],s=e[n];if(i.type==="tuple"&&s.type==="tuple"&&"components"in i&&"components"in s)return lt(i.components,s.components,a[n]);const o=[i.type,s.type];if((()=>o.includes("address")&&o.includes("bytes20")?!0:o.includes("address")&&o.includes("string")?I(a[n],{strict:!1}):o.includes("address")&&o.includes("bytes")?I(a[n],{strict:!1}):!1)())return o}}const J="/docs/contract/encodeEventTopics";function Qt(t){var c;const{abi:e,eventName:a,args:n}=t;let i=e[0];if(a){const d=yt({abi:e,name:a});if(!d)throw new Z(a,{docsPath:J});i=d}if(i.type!=="event")throw new Z(void 0,{docsPath:J});const s=at(i),o=W(s);let r=[];if(n&&"inputs"in i){const d=(c=i.inputs)==null?void 0:c.filter(y=>"indexed"in y&&y.indexed),u=Array.isArray(n)?n:Object.values(n).length>0?(d==null?void 0:d.map(y=>n[y.name]))??[]:[];u.length>0&&(r=(d==null?void 0:d.map((y,l)=>Array.isArray(u[l])?u[l].map((f,h)=>Q({param:y,value:u[l][h]})):u[l]?Q({param:y,value:u[l]}):null))??[])}return[o,...r]}function Q({param:t,value:e}){if(t.type==="string"||t.type==="bytes")return v(nt(e));if(t.type==="tuple"||t.type.match(/^(.*)\[(\d+)?\]$/))throw new Jt(t.type);return k([t],[e])}function Xt(t,e){if(!I(t,{strict:!1}))throw new K({address:t});if(!I(e,{strict:!1}))throw new K({address:e});return t.toLowerCase()===e.toLowerCase()}const X="/docs/contract/decodeEventLog";function te(t){const{abi:e,data:a,strict:n,topics:i}=t,s=n??!0,[o,...r]=i;if(!o)throw new _t({docsPath:X});const c=e.find(p=>p.type==="event"&&o===W(at(p)));if(!(c&&"name"in c)||c.type!=="event")throw new st(o,{docsPath:X});const{name:d,inputs:u}=c,y=u==null?void 0:u.some(p=>!("name"in p&&p.name));let l=y?[]:{};const f=u.filter(p=>"indexed"in p&&p.indexed);for(let p=0;p<f.length;p++){const m=f[p],g=r[p];if(!g)throw new rt({abiItem:c,param:m});l[y?p:m.name||p]=ee({param:m,value:g})}const h=u.filter(p=>!("indexed"in p&&p.indexed));if(h.length>0){if(a&&a!=="0x")try{const p=it(h,a);if(p)if(y)l=[...l,...p];else for(let m=0;m<h.length;m++)l[h[m].name]=p[m]}catch(p){if(s)throw p instanceof Dt||p instanceof Lt?new B({abiItem:c,data:a,params:h,size:Et(a)}):p}else if(s)throw new B({abiItem:c,data:"0x",params:h,size:0})}return{eventName:d,args:Object.values(l).length>0?l:void 0}}function ee({param:t,value:e}){return t.type==="string"||t.type==="bytes"||t.type==="tuple"||t.type.match(/^(.*)\[(\d+)?\]$/)?e:(it([t],e)||[])[0]}function ae(t){const{abi:e,args:a,logs:n,strict:i=!0}=t,s=(()=>{if(t.eventName)return Array.isArray(t.eventName)?t.eventName:[t.eventName]})();return n.map(o=>{var r;try{const c=yt({abi:e,name:o.topics[0]});if(!c)return null;const d=te({...o,abi:[c],strict:i});return s&&!s.includes(d.eventName)||!ne({args:d.args,inputs:c.inputs,matchArgs:a})?null:{...d,...o}}catch(c){let d,u;if(c instanceof st)return null;if(c instanceof B||c instanceof rt){if(i)return null;d=c.abiItem.name,u=(r=c.abiItem.inputs)==null?void 0:r.some(y=>!("name"in y&&y.name))}return{...o,args:u?[]:{},eventName:d}}}).filter(Boolean)}function ne(t){const{args:e,inputs:a,matchArgs:n}=t;if(!n)return!0;if(!e)return!1;function i(s,o,r){try{return s.type==="address"?Xt(o,r):s.type==="string"||s.type==="bytes"?v(nt(o))===r:o===r}catch{return!1}}return Array.isArray(e)&&Array.isArray(n)?n.every((s,o)=>{if(!s)return!0;const r=a[o];return r?(Array.isArray(s)?s:[s]).some(d=>i(r,d,e[o])):!1}):typeof e=="object"&&!Array.isArray(e)&&typeof n=="object"&&!Array.isArray(n)?Object.entries(n).every(([s,o])=>{if(!o)return!0;const r=a.find(d=>d.name===s);return r?(Array.isArray(o)?o:[o]).some(d=>i(r,d,e[s])):!1}):!1}function se(t){const{domain:e={},message:a,primaryType:n}=t,i={EIP712Domain:It({domain:e}),...t.types};Vt({domain:e,message:a,primaryType:n,types:i});const s=["0x1901"];return e&&s.push(re({domain:e,types:i})),n!=="EIP712Domain"&&s.push(ft({data:a,primaryType:n,types:i})),v(L(s))}function re({domain:t,types:e}){return ft({data:t,primaryType:"EIP712Domain",types:e})}function ft({data:t,primaryType:e,types:a}){const n=gt({data:t,primaryType:e,types:a});return v(n)}function gt({data:t,primaryType:e,types:a}){const n=[{type:"bytes32"}],i=[ie({primaryType:e,types:a})];for(const s of a[e]){const[o,r]=At({types:a,name:s.name,type:s.type,value:t[s.name]});n.push(o),i.push(r)}return k(n,i)}function ie({primaryType:t,types:e}){const a=T(oe({primaryType:t,types:e}));return v(a)}function oe({primaryType:t,types:e}){let a="";const n=ht({primaryType:t,types:e});n.delete(t);const i=[t,...Array.from(n).sort()];for(const s of i)a+=`${s}(${e[s].map(({name:o,type:r})=>`${r} ${o}`).join(",")})`;return a}function ht({primaryType:t,types:e},a=new Set){const n=t.match(/^\w*/u),i=n==null?void 0:n[0];if(a.has(i)||e[i]===void 0)return a;a.add(i);for(const s of e[i])ht({primaryType:s.type,types:e},a);return a}function At({types:t,name:e,type:a,value:n}){if(t[a]!==void 0)return[{type:"bytes32"},v(gt({data:n,primaryType:a,types:t}))];if(a==="bytes")return n=`0x${(n.length%2?"0":"")+n.slice(2)}`,[{type:"bytes32"},v(n)];if(a==="string")return[{type:"bytes32"},v(T(n))];if(a.lastIndexOf("]")===a.length-1){const i=a.slice(0,a.lastIndexOf("[")),s=n.map(o=>At({name:e,type:i,types:t,value:o}));return[{type:"bytes32"},v(k(s.map(([o])=>o),s.map(([,o])=>o)))]}return[{type:a},n]}const ce=2n**96n-1n,de="0xdd62ed3e",ue=[{type:"address",name:"owner"},{type:"address",name:"spender"}],pe=[{type:"uint256"}];async function me(t){return V({contract:t.contract,method:[de,ue,pe],params:[t.owner,t.spender]})}function U(t){if(["string","number"].includes(typeof t)&&!Number.isInteger(Number(t)))throw new Error(`Expected value to be an integer to convert to a bigint, got ${t} of type ${typeof t}`);return t instanceof Uint8Array?BigInt(Ct(t)):BigInt(t)}const Gt=50000n,ye=t=>{const e=le(t);return{domain:{name:"zkSync",version:"2",chainId:t.chainId},types:{Transaction:[{name:"txType",type:"uint256"},{name:"from",type:"uint256"},{name:"to",type:"uint256"},{name:"gasLimit",type:"uint256"},{name:"gasPerPubdataByteLimit",type:"uint256"},{name:"maxFeePerGas",type:"uint256"},{name:"maxPriorityFeePerGas",type:"uint256"},{name:"paymaster",type:"uint256"},{name:"nonce",type:"uint256"},{name:"value",type:"uint256"},{name:"data",type:"bytes"},{name:"factoryDeps",type:"bytes32[]"},{name:"paymasterInput",type:"bytes"}]},primaryType:"Transaction",message:e}};function le(t){const{gas:e,nonce:a,to:n,from:i,value:s,maxFeePerGas:o,maxPriorityFeePerGas:r,paymaster:c,paymasterInput:d,gasPerPubdata:u,data:y}=t;return{txType:113n,from:BigInt(i),to:n?BigInt(n):0n,gasLimit:e??0n,gasPerPubdataByteLimit:u??Gt,maxFeePerGas:o??0n,maxPriorityFeePerGas:r??0n,paymaster:c?BigInt(c):0n,nonce:a?BigInt(a):0n,value:s??0n,data:y||"0x0",factoryDeps:[],paymasterInput:d||"0x"}}async function fe(t){const{account:e,eip712Transaction:a,chainId:n}=t,i=ye(a),s=await e.signTypedData({...i});return he({...a,chainId:n,customSignature:s})}async function ge(t){const{account:e,transaction:a}=t;let[n,i,s,o,r,c,d]=await Promise.all([N(a),w(a.to),w(a.value),w(a.gas),w(a.maxFeePerGas),w(a.maxPriorityFeePerGas),w(a.eip712).then(y=>y==null?void 0:y.gasPerPubdata)]);if(!o||!r||!c){const l=await Ut(a)({method:"zks_estimateFee",params:[{from:e.address,to:i,data:n,value:s?Ft(s):void 0}]});o=U(l.gas_limit),r=U(l.max_fee_per_gas)*2n,c=U(l.max_priority_fee_per_gas)||1n,d=U(l.gas_per_pubdata_limit)*2n}return{...await ot({transaction:{...a,gas:o,maxFeePerGas:r,maxPriorityFeePerGas:c},from:e.address}),...a.eip712,gasPerPubdata:d,from:e.address}}function he(t){const{chainId:e,gas:a,nonce:n,to:i,from:s,value:o,maxFeePerGas:r,maxPriorityFeePerGas:c,customSignature:d,factoryDeps:u,paymaster:y,paymasterInput:l,gasPerPubdata:f,data:h}=t,p=[n?b(n):"0x",c?b(c):"0x",r?b(r):"0x",a?b(a):"0x",i??"0x",o?b(o):"0x",h??"0x0",b(e),b(""),b(""),b(e),s??"0x",f?b(f):b(Gt),u??[],d??"0x",y&&l?[y,l]:[]];return mt(["0x71",Kt(p)])}function Ae(t){const{logs:e,events:a,strict:n}=t;return ae({logs:e,abi:a.map(i=>i.abiEvent),strict:n})}function Ge(t){return!!(t&&typeof t=="object"&&"type"in t&&t.type==="event")}function bt(t){const{signature:e}=t;let a;return Ge(e)?a=e:a=St(e),{abiEvent:a,hash:et(a),topics:Qt({abi:[a],args:t.filters})}}function be(t={}){return bt({signature:"event UserOperationRevertReason(bytes32 indexed userOpHash, address indexed sender, uint256 nonce, bytes revertReason)",filters:t})}function Pe(t={}){return bt({signature:"event PostOpRevertReason(bytes32 indexed userOpHash, address indexed sender, uint256 nonce, bytes revertReason)",filters:t})}function ve(t){const{receipt:e}=t,a={...e,transactionHash:e.transactionHash,blockNumber:e.blockNumber?BigInt(e.blockNumber):null,contractAddress:e.contractAddress?e.contractAddress:null,cumulativeGasUsed:e.cumulativeGasUsed?BigInt(e.cumulativeGasUsed):null,effectiveGasPrice:e.effectiveGasPrice?BigInt(e.effectiveGasPrice):null,gasUsed:e.gasUsed?BigInt(e.gasUsed):null,logs:e.logs,to:e.to?e.to:null,transactionIndex:e.transactionIndex,status:e.status,type:e.type};return e.blobGasPrice&&(a.blobGasPrice=BigInt(e.blobGasPrice)),e.blobGasUsed&&(a.blobGasUsed=BigInt(e.blobGasUsed)),{...t,receipt:a,userOpHash:t.userOpHash,actualGasCost:BigInt(t.actualGasCost),actualGasUsed:BigInt(t.actualGasUsed),nonce:BigInt(t.nonce)}}const xe=()=>{const t=BigInt(Math.floor(Math.random()*4294967296)),e=BigInt(Math.floor(Math.random()*4294967296)),a=BigInt(Math.floor(Math.random()*4294967296)),n=BigInt(Math.floor(Math.random()*4294967296)),i=BigInt(Math.floor(Math.random()*4294967296)),s=BigInt(Math.floor(Math.random()*4294967296));return t<<BigInt(160)|e<<BigInt(128)|a<<BigInt(96)|n<<BigInt(64)|i<<BigInt(32)|s};function q(t){return Object.fromEntries(Object.entries(t).map(([e,a])=>[e,a==null||Nt(a)?a:b(a)]))}function we(t){return t.id===324||t.id===300||t.id===302||t.id===11124}async function Te(t){return E({...t,operation:"eth_sendUserOperation",params:[q(t.userOp),t.options.entrypointAddress??x]})}async function F(t){const e=await E({...t,operation:"eth_estimateUserOperationGas",params:[q(t.userOp),t.options.entrypointAddress??x]});return{preVerificationGas:G(e.preVerificationGas),verificationGas:G(e.verificationGas),verificationGasLimit:G(e.verificationGasLimit),callGasLimit:G(e.callGasLimit)+Bt,paymasterVerificationGasLimit:e.paymasterVerificationGasLimit!==void 0?G(e.paymasterVerificationGasLimit):void 0,paymasterPostOpGasLimit:e.paymasterPostOpGasLimit!==void 0?G(e.paymasterPostOpGasLimit):void 0}}async function Oe(t){const e=await E({...t,operation:"thirdweb_getUserOperationGasPrice",params:[]});return{maxPriorityFeePerGas:G(e.maxPriorityFeePerGas),maxFeePerGas:G(e.maxFeePerGas)}}async function _e(t){var a,n;const e=await De(t);if(e){if(e.success===!1){const s=(n=(a=Ae({events:[be(),Pe()],logs:e.logs})[0])==null?void 0:a.args)==null?void 0:n.revertReason;if(!s)throw new Error(`UserOp failed at txHash: ${e.receipt.transactionHash}`);const o=Mt({data:s});throw new Error(`UserOp failed with reason: '${o.args.join(",")}' at txHash: ${e.receipt.transactionHash}`)}return e.receipt}}async function De(t){const e=await E({options:t,operation:"eth_getUserOperationReceipt",params:[t.userOpHash]});if(e)return ve(e)}async function Le(t){const e=await E({options:t.options,operation:"zk_paymasterData",params:[t.transaction]});return{paymaster:e.paymaster,paymasterInput:e.paymasterInput}}async function Ee(t){return{transactionHash:(await E({options:t.options,operation:"zk_broadcastTransaction",params:[{...t.transaction,signedTransaction:t.signedTransaction}]})).transactionHash}}async function E(t){const{options:e,operation:a,params:n}=t,s=C(e.entrypointAddress||x)==="v0.6"?"v1":"v2",o=e.bundlerUrl??j(e.chain,s),c=await ct(e.client)(o,{method:"POST",headers:{"Content-Type":"application/json"},body:Rt({jsonrpc:"2.0",id:1,method:a,params:n})}),d=await c.json();if(!c.ok||d.error){let u=d.error||c.statusText;typeof u=="object"&&(u=JSON.stringify(u));const y=d.code||"UNKNOWN";throw new Error(`${a} error: ${u}
Status: ${c.status}
Code: ${y}`)}return d.result}async function Ie(t){const{factoryContract:e,predictAddressOverride:a,adminAddress:n,accountSalt:i,accountAddress:s}=t;if(a)return a(e);if(s)return s;if(!n)throw new Error("Account address is required to predict the smart wallet address.");const o=dt(i??"");return V({contract:e,method:"function getAddress(address, bytes) returns (address)",params:[n,o]})}function Pt(t){const{adminAddress:e,factoryContract:a,createAccountOverride:n,accountSalt:i}=t;return n?n(a):z({contract:a,method:"function createAccount(address, bytes) returns (address)",params:[e,dt(i??"")]})}function vt(t){const{accountContract:e,transaction:a,executeOverride:n}=t;return n?n(e,a):z({contract:e,method:"function execute(address, uint256, bytes)",params:[a.to||"",a.value||0n,a.data||"0x"]})}function Ve(t){const{accountContract:e,transactions:a,executeBatchOverride:n}=t;return n?n(e,a):z({contract:e,method:"function executeBatch(address[], uint256[], bytes[])",params:[a.map(i=>i.to||""),a.map(i=>i.value||0n),a.map(i=>i.data||"0x")]})}const Ce="0x35567e1a",Ue=[{type:"address",name:"sender"},{type:"uint192",name:"key"}],Fe=[{type:"uint256",name:"nonce"}];async function Se(t){return V({contract:t.contract,method:[Ce,Ue,Fe],params:[t.sender,t.key]})}const Ne="0xa6193531",Re=[{type:"tuple",name:"userOp",components:[{type:"address",name:"sender"},{type:"uint256",name:"nonce"},{type:"bytes",name:"initCode"},{type:"bytes",name:"callData"},{type:"uint256",name:"callGasLimit"},{type:"uint256",name:"verificationGasLimit"},{type:"uint256",name:"preVerificationGas"},{type:"uint256",name:"maxFeePerGas"},{type:"uint256",name:"maxPriorityFeePerGas"},{type:"bytes",name:"paymasterAndData"},{type:"bytes",name:"signature"}]}],Be=[{type:"bytes32"}];async function Me(t){return V({contract:t.contract,method:[Ne,Re,Be],params:[t.userOp]})}const $e="0x22cdde4c",He=[{type:"tuple",name:"userOp",components:[{type:"address",name:"sender"},{type:"uint256",name:"nonce"},{type:"bytes",name:"initCode"},{type:"bytes",name:"callData"},{type:"bytes32",name:"accountGasLimits"},{type:"uint256",name:"preVerificationGas"},{type:"bytes32",name:"gasFees"},{type:"bytes",name:"paymasterAndData"},{type:"bytes",name:"signature"}]}],ke=[{type:"bytes32"}];async function je(t){return V({contract:t.contract,method:[$e,He,ke],params:[t.userOp]})}function ze(t){return t.factory?L([t.factory,t.factoryData||"0x"]):"0x"}function We(t){return L([_(T(t.verificationGasLimit),{size:16}),_(T(t.callGasLimit),{size:16})])}function qe(t){return L([_(T(t.maxPriorityFeePerGas),{size:16}),_(T(t.maxFeePerGas),{size:16})])}function Ye(t){return t.paymaster?L([t.paymaster,_(T(t.paymasterVerificationGasLimit||BigInt(0)),{size:16}),_(T(t.paymasterPostOpGasLimit||BigInt(0)),{size:16}),t.paymasterData||"0x"]):"0x"}const Ze=t=>({sender:t.sender,nonce:t.nonce,initCode:ze(t),callData:t.callData,accountGasLimits:We(t),preVerificationGas:t.preVerificationGas,gasFees:qe(t),paymasterAndData:Ye(t),signature:t.signature});async function S(t){var p;const{userOp:e,paymasterOverride:a,client:n,chain:i,entrypointAddress:s}=t;if(a)return a(e);const o={"Content-Type":"application/json"},r=s??x,d=C(r)==="v0.6"?"v1":"v2",u=j(i,d),l=await ct(n)(u,{method:"POST",headers:o,body:JSON.stringify({jsonrpc:"2.0",id:1,method:"pm_sponsorUserOperation",params:[q(e),r]})}),f=await l.json();if(!l.ok){const m=f.error||l.statusText,g=f.code||"UNKNOWN";throw new Error(`Paymaster error: ${m}
Status: ${l.status}
Code: ${g}`)}if(f.result)return typeof f.result=="string"?{paymasterAndData:f.result}:{paymasterAndData:f.result.paymasterAndData,verificationGasLimit:f.result.verificationGasLimit?G(f.result.verificationGasLimit):void 0,preVerificationGas:f.result.preVerificationGas?G(f.result.preVerificationGas):void 0,callGasLimit:f.result.callGasLimit?G(f.result.callGasLimit):void 0,paymaster:f.result.paymaster,paymasterData:f.result.paymasterData,paymasterVerificationGasLimit:f.result.paymasterVerificationGasLimit?G(f.result.paymasterVerificationGasLimit):void 0,paymasterPostOpGasLimit:f.result.paymasterPostOpGasLimit?G(f.result.paymasterPostOpGasLimit):void 0};const h=((p=f.error)==null?void 0:p.message)||f.error||l.statusText||"unknown error";throw new Error(`Paymaster error from ${u}: ${h}`)}async function Ke(t){const e=t.timeoutMs||12e4,a=t.intervalMs||1e3,n=Date.now()+e;for(;Date.now()<n;){const i=await _e(t);if(i)return i;await new Promise(s=>setTimeout(s,a))}throw new Error("Timeout waiting for userOp to be mined")}async function Je(t){var g;const{transaction:e,accountContract:a,factoryContract:n,adminAddress:i,overrides:s,sponsorGas:o}=t,r=e.chain,c=e.client,d={client:c,chain:r,entrypointAddress:s==null?void 0:s.entrypointAddress},u=C(((g=t.overrides)==null?void 0:g.entrypointAddress)||x),[y,l,f,h]=await Promise.all([$t(a),N(e),Qe({executeTx:e,bundlerOptions:d,chain:r,client:c}),na({accountContract:a,chain:r,client:c,entrypointAddress:s==null?void 0:s.entrypointAddress,getNonceOverride:s==null?void 0:s.getAccountNonce})]),{maxFeePerGas:p,maxPriorityFeePerGas:m}=f;return u==="v0.7"?Xe({bundlerOptions:d,factoryContract:n,accountContract:a,adminAddress:i,sponsorGas:o,overrides:s,isDeployed:y,nonce:h,callData:l,maxFeePerGas:p,maxPriorityFeePerGas:m}):ta({bundlerOptions:d,factoryContract:n,accountContract:a,adminAddress:i,sponsorGas:o,overrides:s,isDeployed:y,nonce:h,callData:l,maxFeePerGas:p,maxPriorityFeePerGas:m})}async function Qe(t){const{executeTx:e,bundlerOptions:a,chain:n,client:i}=t;let{maxFeePerGas:s,maxPriorityFeePerGas:o}=e;const c=C(a.entrypointAddress||x)==="v0.6"?"v1":"v2",d=(a==null?void 0:a.bundlerUrl)??j(n,c);if(Ht(d)){const u=await Oe({options:a});s=u.maxFeePerGas,o=u.maxPriorityFeePerGas}else{const[u,y]=await Promise.all([w(s),w(o)]);if(u&&y)s=u,o=y;else{const l=await kt(i,n);o=y??l.maxPriorityFeePerGas??0n,s=u??l.maxFeePerGas??0n}}return{maxFeePerGas:s,maxPriorityFeePerGas:o}}async function Xe(t){const{bundlerOptions:e,isDeployed:a,factoryContract:n,accountContract:i,adminAddress:s,sponsorGas:o,overrides:r,nonce:c,callData:d,maxFeePerGas:u,maxPriorityFeePerGas:y}=t,{chain:l,client:f}=e,h=a?void 0:n.address,p=a?"0x":await N(Pt({factoryContract:n,adminAddress:s,accountSalt:r==null?void 0:r.accountSalt,createAccountOverride:r==null?void 0:r.createAccount})),m={sender:i.address,nonce:c,callData:d,maxFeePerGas:u,maxPriorityFeePerGas:y,callGasLimit:0n,verificationGasLimit:0n,preVerificationGas:0n,factory:h,factoryData:p,paymaster:void 0,paymasterData:"0x",paymasterVerificationGasLimit:0n,paymasterPostOpGasLimit:0n,signature:ut};if(o){const g=await S({userOp:m,chain:l,client:f,entrypointAddress:r==null?void 0:r.entrypointAddress,paymasterOverride:r==null?void 0:r.paymaster});if(g.paymaster&&g.paymasterData&&(m.paymaster=g.paymaster,m.paymasterData=g.paymasterData),g.callGasLimit&&g.verificationGasLimit&&g.preVerificationGas&&g.paymasterPostOpGasLimit&&g.paymasterVerificationGasLimit)m.callGasLimit=g.callGasLimit,m.verificationGasLimit=g.verificationGasLimit,m.preVerificationGas=g.preVerificationGas,m.paymasterPostOpGasLimit=g.paymasterPostOpGasLimit,m.paymasterVerificationGasLimit=g.paymasterVerificationGasLimit;else{const A=await F({userOp:m,options:e});m.callGasLimit=A.callGasLimit,m.verificationGasLimit=A.verificationGasLimit,m.preVerificationGas=A.preVerificationGas,m.paymasterPostOpGasLimit=g.paymasterPostOpGasLimit||0n,m.paymasterVerificationGasLimit=g.paymasterVerificationGasLimit||0n;const O=await S({userOp:m,chain:l,client:f,entrypointAddress:r==null?void 0:r.entrypointAddress,paymasterOverride:r==null?void 0:r.paymaster});O.paymaster&&O.paymasterData&&(m.paymaster=O.paymaster,m.paymasterData=O.paymasterData)}}else{const g=await F({userOp:m,options:e});m.callGasLimit=g.callGasLimit,m.verificationGasLimit=g.verificationGasLimit,m.preVerificationGas=g.preVerificationGas,m.paymasterPostOpGasLimit=g.paymasterPostOpGasLimit||0n,m.paymasterVerificationGasLimit=g.paymasterVerificationGasLimit||0n}return{...m,signature:"0x"}}async function ta(t){const{bundlerOptions:e,isDeployed:a,factoryContract:n,accountContract:i,adminAddress:s,sponsorGas:o,overrides:r,nonce:c,callData:d,maxFeePerGas:u,maxPriorityFeePerGas:y}=t,{chain:l,client:f}=e,h=a?"0x":await aa({factoryContract:n,adminAddress:s,accountSalt:r==null?void 0:r.accountSalt,createAccountOverride:r==null?void 0:r.createAccount}),p={sender:i.address,nonce:c,initCode:h,callData:d,maxFeePerGas:u,maxPriorityFeePerGas:y,callGasLimit:0n,verificationGasLimit:0n,preVerificationGas:0n,paymasterAndData:"0x",signature:ut};if(o){const m=await S({userOp:p,chain:l,client:f,entrypointAddress:r==null?void 0:r.entrypointAddress,paymasterOverride:r==null?void 0:r.paymaster}),g="paymasterAndData"in m?m.paymasterAndData:"0x";if(g&&g!=="0x"&&(p.paymasterAndData=g),m.callGasLimit&&m.verificationGasLimit&&m.preVerificationGas)p.callGasLimit=m.callGasLimit,p.verificationGasLimit=m.verificationGasLimit,p.preVerificationGas=m.preVerificationGas;else{const A=await F({userOp:p,options:e});if(p.callGasLimit=A.callGasLimit,p.verificationGasLimit=A.verificationGasLimit,p.preVerificationGas=A.preVerificationGas,g&&g!=="0x"){const O=await S({userOp:p,chain:l,client:f,entrypointAddress:r==null?void 0:r.entrypointAddress,paymasterOverride:r==null?void 0:r.paymaster}),R="paymasterAndData"in O?O.paymasterAndData:"0x";R&&R!=="0x"&&(p.paymasterAndData=R)}}}else{const m=await F({userOp:p,options:e});p.callGasLimit=m.callGasLimit,p.verificationGasLimit=m.verificationGasLimit,p.preVerificationGas=m.preVerificationGas}return{...p,signature:"0x"}}async function ea(t){const{userOp:e,chain:a,entrypointAddress:n,adminAccount:i}=t,s=C(n||x);let o;if(s==="v0.7"){const r=Ze(e);o=await je({contract:D({address:n||jt,chain:a,client:t.client}),userOp:r})}else o=await Me({contract:D({address:n||x,chain:a,client:t.client}),userOp:e});if(i.signMessage){const r=await i.signMessage({message:{raw:zt(o)}});return{...e,signature:r}}throw new Error("signMessage not implemented in signingAccount")}async function aa(t){const{factoryContract:e,adminAddress:a,accountSalt:n,createAccountOverride:i}=t,s=Pt({factoryContract:e,adminAddress:a,accountSalt:n,createAccountOverride:i});return L([e.address,await N(s)])}async function na(t){const{accountContract:e,chain:a,client:n,entrypointAddress:i,getNonceOverride:s}=t;return s?s(e):Se({contract:D({address:i||x,chain:a,client:n}),key:xe(),sender:e.address})}function sa(t){return t.id==="smart"}const Y=new WeakMap,$=new WeakMap;async function ra(t,e,a){var h,p,m,g;const{personalAccount:n,client:i,chain:s}=e;if(!n)throw new Error("Personal wallet does not have an account");const o=a,r=o.factoryAddress??Wt((h=a.overrides)==null?void 0:h.entrypointAddress),c=s??o.chain,d="gasless"in o?o.gasless:o.sponsorGas;if(we(c))return[da({creationOptions:a,connectionOptions:e,chain:c,sponsorGas:d}),c];const u=D({client:i,address:r,chain:c}),y=await Ie({factoryContract:u,adminAddress:n.address,predictAddressOverride:(p=o.overrides)==null?void 0:p.predictAddress,accountSalt:(m=o.overrides)==null?void 0:m.accountSalt,accountAddress:(g=o.overrides)==null?void 0:g.accountAddress}).then(A=>A).catch(A=>{throw new Error(`Failed to get account address with factory contract ${u.address} on chain ID ${c.id}: ${(A==null?void 0:A.message)||"unknown error"}`,{cause:A})}),l=D({client:i,address:y,chain:c}),f=await oa({...o,chain:c,sponsorGas:d,personalAccount:n,accountContract:l,factoryContract:u,client:i});return Y.set(n,t),$.set(t,n),[f,c]}async function ia(t){const e=$.get(t);e&&(Y.delete(e),$.delete(t))}async function oa(t){const{accountContract:e}=t,a={address:qt(e.address),async sendTransaction(n){var r,c,d;const i=(r=t.overrides)==null?void 0:r.erc20Paymaster;let s;if(i){await ca({accountContract:e,erc20Paymaster:i,options:t});const u=async()=>({paymasterAndData:mt([i.address,i==null?void 0:i.token]),paymaster:i.address,paymasterData:"0x"});s=((c=t.overrides)==null?void 0:c.paymaster)||u}const o=vt({accountContract:e,transaction:n,executeOverride:(d=t.overrides)==null?void 0:d.execute});return H({executeTx:o,options:{...t,overrides:{...t.overrides,paymaster:s}}})},async sendBatchTransaction(n){var s;const i=Ve({accountContract:e,transactions:n,executeBatchOverride:(s=t.overrides)==null?void 0:s.executeBatch});return H({executeTx:i,options:t})},async signMessage({message:n}){const[{isContractDeployed:i},{readContract:s},{encodeAbiParameters:o},{hashMessage:r},{checkContractWalletSignature:c}]=await Promise.all([P(()=>import("./index-94750922.js").then(h=>h.dN),["assets/index-94750922.js","assets/index-b41033e1.css"]),P(()=>import("./index-94750922.js").then(h=>h.dP),["assets/index-94750922.js","assets/index-b41033e1.css"]),P(()=>import("./index-94750922.js").then(h=>h.dO),["assets/index-94750922.js","assets/index-b41033e1.css"]),P(()=>import("./hashMessage-a563653f.js"),["assets/hashMessage-a563653f.js","assets/index-94750922.js","assets/index-b41033e1.css"]),P(()=>import("./checkContractWalletSignature-39797cf2.js"),["assets/checkContractWalletSignature-39797cf2.js","assets/isValidSignature-2e7f8638.js","assets/index-94750922.js","assets/index-b41033e1.css"])]);await i(e)||await tt({options:t,account:a,accountContract:e});const u=r(n);let y=!1;try{await s({contract:e,method:"function getMessageHash(bytes32 _hash) public view returns (bytes32)",params:[u]}),y=!0}catch{}let l;if(y){const h=o([{type:"bytes32"}],[u]);l=await t.personalAccount.signTypedData({domain:{name:"Account",version:"1",chainId:t.chain.id,verifyingContract:e.address},primaryType:"AccountMessage",types:{AccountMessage:[{name:"message",type:"bytes"}]},message:{message:h}})}else l=await t.personalAccount.signMessage({message:n});if(await c({contract:e,message:n,signature:l}))return l;throw new Error("Unable to verify signature on smart account, please make sure the smart account is deployed and the signature is valid.")},async signTypedData(n){var p,m,g;const i=pt(n),[{isContractDeployed:s},{readContract:o},{encodeAbiParameters:r},{checkContractWalletSignedTypedData:c}]=await Promise.all([P(()=>import("./index-94750922.js").then(A=>A.dN),["assets/index-94750922.js","assets/index-b41033e1.css"]),P(()=>import("./index-94750922.js").then(A=>A.dP),["assets/index-94750922.js","assets/index-b41033e1.css"]),P(()=>import("./index-94750922.js").then(A=>A.dO),["assets/index-94750922.js","assets/index-b41033e1.css"]),P(()=>import("./checkContractWalletSignedTypedData-1dc7f6d0.js"),["assets/checkContractWalletSignedTypedData-1dc7f6d0.js","assets/isValidSignature-2e7f8638.js","assets/index-94750922.js","assets/index-b41033e1.css","assets/concat-hex-c9b9fd32.js","assets/toRlp-4b688d9f.js"])]);if(((m=(p=i.domain)==null?void 0:p.verifyingContract)==null?void 0:m.toLowerCase())===((g=e.address)==null?void 0:g.toLowerCase()))return t.personalAccount.signTypedData(i);await s(e)||await tt({options:t,account:a,accountContract:e});const y=se(i);let l=!1;try{await o({contract:e,method:"function getMessageHash(bytes32 _hash) public view returns (bytes32)",params:[y]}),l=!0}catch{}let f;if(l){const A=r([{type:"bytes32"}],[y]);f=await t.personalAccount.signTypedData({domain:{name:"Account",version:"1",chainId:t.chain.id,verifyingContract:e.address},primaryType:"AccountMessage",types:{AccountMessage:[{name:"message",type:"bytes"}]},message:{message:A}})}else f=await t.personalAccount.signTypedData(i);if(await c({contract:e,data:i,signature:f}))return f;throw new Error("Unable to verify signature on smart account, please make sure the smart account is deployed and the signature is valid.")},async onTransactionRequested(n){var i,s;return(s=(i=t.personalAccount).onTransactionRequested)==null?void 0:s.call(i,n)}};return a}async function ca(t){var u;const{accountContract:e,erc20Paymaster:a,options:n}=t,i=a.token,s=D({address:i,chain:e.chain,client:e.client});if(await me({contract:s,owner:e.address,spender:a.address})>0n)return;const r=Yt({contract:s,spender:a.address,amountWei:ce-1n}),c=await ot({transaction:r,from:e.address}),d=vt({accountContract:e,transaction:c,executeOverride:(u=n.overrides)==null?void 0:u.execute});await H({executeTx:d,options:{...n,overrides:{...n.overrides,erc20Paymaster:void 0}}})}function da(t){const{creationOptions:e,connectionOptions:a,chain:n}=t,i={address:a.personalAccount.address,async sendTransaction(s){var u,y,l,f;const o={data:s.data,to:s.to??void 0,value:s.value??0n,chain:Zt(s.chainId),client:a.client};let r=await ge({account:i,transaction:o});if(t.sponsorGas){const h=await Le({options:{client:a.client,chain:n,bundlerUrl:(u=e.overrides)==null?void 0:u.bundlerUrl,entrypointAddress:(y=e.overrides)==null?void 0:y.entrypointAddress},transaction:r});r={...r,...h}}const c=await fe({account:i,chainId:n.id,eip712Transaction:r});return{transactionHash:(await Ee({options:{client:a.client,chain:n,bundlerUrl:(l=e.overrides)==null?void 0:l.bundlerUrl,entrypointAddress:(f=e.overrides)==null?void 0:f.entrypointAddress},transaction:r,signedTransaction:c})).transactionHash,client:a.client,chain:n}},async signMessage({message:s}){return a.personalAccount.signMessage({message:s})},async signTypedData(s){const o=pt(s);return a.personalAccount.signTypedData(o)},async onTransactionRequested(s){var o,r;return(r=(o=a.personalAccount).onTransactionRequested)==null?void 0:r.call(o,s)}};return i}async function tt(t){const{options:e,account:a,accountContract:n}=t,[{sendTransaction:i},{prepareTransaction:s}]=await Promise.all([P(()=>import("./index-94750922.js").then(c=>c.dR),["assets/index-94750922.js","assets/index-b41033e1.css"]),P(()=>import("./index-94750922.js").then(c=>c.dQ),["assets/index-94750922.js","assets/index-b41033e1.css"])]),o=s({client:e.client,chain:e.chain,to:n.address,value:0n,gas:50000n});return await i({transaction:o,account:a})}async function H(t){var c,d,u;const{executeTx:e,options:a}=t,n=await Je({transaction:e,factoryContract:a.factoryContract,accountContract:a.accountContract,adminAddress:a.personalAccount.address,sponsorGas:a.sponsorGas,overrides:a.overrides}),i=await ea({client:a.client,chain:a.chain,adminAccount:a.personalAccount,entrypointAddress:(c=a.overrides)==null?void 0:c.entrypointAddress,userOp:n}),s={chain:a.chain,client:a.client,bundlerUrl:(d=a.overrides)==null?void 0:d.bundlerUrl,entrypointAddress:(u=a.overrides)==null?void 0:u.entrypointAddress},o=await Te({options:s,userOp:i}),r=await Ke({...a,userOpHash:o});return{client:a.client,chain:a.chain,transactionHash:r.transactionHash}}const ya=Object.freeze(Object.defineProperty({__proto__:null,connectSmartWallet:ra,disconnectSmartWallet:ia,isSmartWallet:sa,personalAccountToSmartAccountMap:Y},Symbol.toStringTag,{value:"Module"}));export{se as h,ya as i};
