var re=Object.create;var T=Object.defineProperty;var ae=Object.getOwnPropertyDescriptor;var oe=Object.getOwnPropertyNames;var se=Object.getPrototypeOf,ie=Object.prototype.hasOwnProperty;var R=t=>e=>{var n=t[e];if(n)return n();throw new Error("Module not found in bundle: "+e)};var m=(t,e)=>()=>(t&&(e=t(t=0)),e);var ce=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),x=(t,e)=>{for(var n in e)T(t,n,{get:e[n],enumerable:!0})},pe=(t,e,n,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let a of oe(e))!ie.call(t,a)&&a!==n&&T(t,a,{get:()=>e[a],enumerable:!(r=ae(e,a))||r.enumerable});return t};var S=(t,e,n)=>(n=t!=null?re(se(t)):{},pe(e||!t||!t.__esModule?T(n,"default",{value:t,enumerable:!0}):n,t));function p(t,e,...n){let r;do r=`${t}:${Math.floor(Math.random()*100001)}:${e}`;while(h[r]);return emitNet(`_bl_cb_${t}`,e,N,r,...n),new Promise(a=>{h[r]=a})}function o(t,e){onNet(`_bl_cb_${t}`,async(n,r,...a)=>{let i=source,g;try{g=await e(i,...a)}catch(_){console.error(`an error occurred while handling callback event ${t}`),console.log(`^3${_.stack}^0`)}emitNet(`_bl_cb_${n}`,i,r,g)})}var N,h,le,y,k,c,ue,P,d=m(()=>{N=GetCurrentResourceName(),h={};onNet(`_bl_cb_${N}`,(t,...e)=>{let n=h[t];return n&&n(...e)});le=exports.bl_bridge,y=le.core(),k=t=>y.GetPlayer(t),c=t=>{let e=y.GetPlayer(t);return e?e.id:null},ue=exports.bl_appearance.config(),P=ue});var E=ce(O=>{"use strict";Object.defineProperty(O,"__esModule",{value:!0});O.oxmysql=void 0;var j=[];function b(t,e){if(!t)throw new TypeError(e)}var l=(t,e,n,r)=>{if(typeof t=="number"&&(t=j[t]),r?b(typeof t=="object",`First argument expected object, recieved ${typeof t}`):b(typeof t=="string",`First argument expected string, received ${typeof t}`),e){let a=typeof e;b(a==="object"||a==="function",`Second argument expected object or function, received ${a}`),!n&&a==="function"&&(n=e,e=void 0)}return n!==void 0&&b(typeof n=="function",`Third argument expected function, received ${typeof n}`),[t,e,n]},A=global.exports.oxmysql,fe=GetCurrentResourceName();function u(t,e,n){return new Promise((r,a)=>{A[t](e,n,(i,g)=>{if(g)return a(g);r(i)},fe,!0)})}O.oxmysql={store(t){return b(typeof t!="string",`Query expects a string, received ${typeof t}`),j.push(t)},ready(t){setImmediate(async()=>{for(;GetResourceState("oxmysql")!=="started";)await new Promise(e=>setTimeout(e,50));t()})},async query(t,e,n){[t,e,n]=l(t,e,n);let r=await u("query",t,e);return n?n(r):r},async single(t,e,n){[t,e,n]=l(t,e,n);let r=await u("single",t,e);return n?n(r):r},async scalar(t,e,n){[t,e,n]=l(t,e,n);let r=await u("scalar",t,e);return n?n(r):r},async update(t,e,n){[t,e,n]=l(t,e,n);let r=await u("update",t,e);return n?n(r):r},async insert(t,e,n){[t,e,n]=l(t,e,n);let r=await u("insert",t,e);return n?n(r):r},async prepare(t,e,n){[t,e,n]=l(t,e,n);let r=await u("prepare",t,e);return n?n(r):r},async rawExecute(t,e,n){[t,e,n]=l(t,e,n);let r=await u("rawExecute",t,e);return n?n(r):r},async transaction(t,e,n){[t,e,n]=l(t,e,n,!0);let r=await u("transaction",t,e);return n?n(r):r},isReady(){return A.isReady()},async awaitConnection(){return await A.awaitConnection()}}});var me={};var I=m(()=>{});var D={};x(D,{default:()=>de});var L,ge,ye,de,J=m(()=>{L=S(E(),1);d();v();ge=t=>new Promise(e=>setTimeout(e,t)),ye=async t=>{let e=await L.oxmysql.query("SELECT * FROM `players`");if(e){for(let n of e)if(n.skin){await p("bl_appearance:client:migration:setAppearance",t,{type:"fivem",data:JSON.parse(n.skin)}),await ge(100);let r=await p("bl_appearance:client:getAppearance",t),a=parseInt(t);await f(a,n.citizenid,r)}console.log("Converted "+e.length+" appearances")}},de=ye});var F={};x(F,{default:()=>Se});var M,be,Ee,Se,$=m(()=>{M=S(E(),1);d();v();be=t=>new Promise(e=>setTimeout(e,t)),Ee=async t=>{let e=await M.oxmysql.query("SELECT * FROM `playerskins` WHERE active = 1");if(e){for(let n of e)if(n.skin){await p("bl_appearance:client:migration:setAppearance",t,{type:"illenium",data:JSON.parse(n.skin)}),await be(100);let r=await p("bl_appearance:client:getAppearance",t),a=parseInt(t);await f(a,n.citizenid,r)}console.log("Converted "+e.length+" appearances")}},Se=Ee});var W={};x(W,{default:()=>we});var H,Oe,ve,we,U=m(()=>{H=S(E(),1);d();v();Oe=t=>new Promise(e=>setTimeout(e,t)),ve=async t=>{let e=await H.oxmysql.query("SELECT * FROM `playerskins` WHERE active = 1");if(e){for(let n of e){emitNet("qb-clothes:loadSkin",t,0,n.model,n.skin),await Oe(200);let r=await p("bl_appearance:client:getAppearance",t),a=parseInt(t);await f(a,n.citizenid,r)}console.log("Converted "+e.length+" appearances")}},we=ve});var _e,C=m(()=>{_e=R({"./migrate/esx.ts":()=>Promise.resolve().then(()=>(I(),me)),"./migrate/fivem.ts":()=>Promise.resolve().then(()=>(J(),D)),"./migrate/illenium.ts":()=>Promise.resolve().then(()=>($(),F)),"./migrate/qb.ts":()=>Promise.resolve().then(()=>(U(),W))})});async function G(t,e){let n=y.GetPlayer(t).job||{name:"unknown",grade:{name:"unknown"}},r=await s.oxmysql.prepare("SELECT * FROM outfits WHERE player_id = ? OR (jobname = ? AND jobrank <= ?)",[e,n.name,n.grade.name]);return r?(Array.isArray(r)||(r=[r]),r.map(i=>({id:i.id,label:i.label,outfit:JSON.parse(i.outfit),jobname:i.jobname}))):[]}async function B(t,e){let n=c(t);return await s.oxmysql.update("UPDATE outfits SET label = ? WHERE player_id = ? AND id = ?",[e.label,n,e.id])}async function V(t,e){let n=c(t);return await s.oxmysql.update("DELETE FROM outfits WHERE player_id = ? AND id = ?",[n,e])>0}async function z(t,e){let n=c(t),r=null,a=0;return e.job&&(r=e.job.name,a=e.job.rank),await s.oxmysql.insert("INSERT INTO outfits (player_id, label, outfit, jobname, jobrank) VALUES (?, ?, ?, ?, ?)",[n,e.label,JSON.stringify(e.outfit),r,a])}async function Q(t,e){let n=await s.oxmysql.prepare("SELECT outfit FROM outfits WHERE id = ?",[e]);return JSON.parse(n)}async function Y(t,e,n,r){let a=await s.oxmysql.query("SELECT label, outfit FROM outfits WHERE id = ?",[n]);return!a||typeof a!="object"||Object.keys(a).length===0?{success:!1,message:"Outfit not found"}:{success:!0,newId:await s.oxmysql.insert("INSERT INTO outfits (player_id, label, outfit) VALUES (?, ?, ?)",[e,r,a.outfit])}}async function K(t,e){let n=c(t);return await s.oxmysql.update("UPDATE appearance SET skin = ? WHERE id = ?",[JSON.stringify(e),n])}async function X(t,e){let n=c(t);return await s.oxmysql.update("UPDATE appearance SET clothes = ? WHERE id = ?",[JSON.stringify(e),n])}async function Z(t,e){let n=c(t);return await s.oxmysql.update("UPDATE appearance SET tattoos = ? WHERE id = ?",[JSON.stringify(e),n])}async function q(t,e){e||(e=c(t));let n=await s.oxmysql.prepare("SELECT skin FROM appearance WHERE id = ?",[e]);return JSON.parse(n)}async function ee(t,e){e||(e=c(source));let n=await s.oxmysql.prepare("SELECT clothes FROM appearance WHERE id = ?",[e]);return JSON.parse(n)}async function te(t,e){e||(e=c(t));let n=await s.oxmysql.prepare("SELECT tattoos FROM appearance WHERE id = ?",[e]);return JSON.parse(n)||[]}async function ne(t,e){if(!e&&!t)return null;e||(e=c(t));let n=await s.oxmysql.single("SELECT * FROM appearance WHERE id = ? LIMIT 1",[e]);if(!n)return null;let r={...JSON.parse(n.skin),...JSON.parse(n.clothes),...JSON.parse(n.tattoos)};return r.id=n.id,r}var s,f,w,v=m(()=>{d();s=S(E(),1);C();o("bl_appearance:server:getOutfits",G);exports("GetOutfits",G);o("bl_appearance:server:renameOutfit",B);exports("RenameOutfit",B);o("bl_appearance:server:deleteOutfit",V);exports("DeleteOutfit",V);o("bl_appearance:server:saveOutfit",z);exports("SaveOutfit",z);o("bl_appearance:server:fetchOutfit",Q);exports("FetchOutfit",Q);o("bl_appearance:server:importOutfit",Y);exports("ImportOutfit",Y);o("bl_appearance:server:saveSkin",K);exports("SaveSkin",K);o("bl_appearance:server:saveClothes",X);exports("SaveClothes",X);o("bl_appearance:server:saveTattoos",Z);exports("SaveTattoos",Z);o("bl_appearance:server:getSkin",q);exports("GetSkin",q);f=async(t,e,n)=>{if(t&&e){let _=c(t);if(e!==_){console.warn("You are trying to save an appearance for a different player",t,e);return}}e||(e=c(t));let r={drawables:n.drawables,props:n.props,headOverlay:n.headOverlay},a={headBlend:n.headBlend,headStructure:n.headStructure,hairColor:n.hairColor,model:n.model},i=n.tattoos||[];return await s.oxmysql.prepare("INSERT INTO appearance (id, clothes, skin, tattoos) VALUES (?, ?, ?, ?) ON DUPLICATE KEY UPDATE clothes = VALUES(clothes), skin = VALUES(skin), tattoos = VALUES(tattoos);",[e,JSON.stringify(r),JSON.stringify(a),JSON.stringify(i)])};o("bl_appearance:server:saveAppearance",f);exports("SaveAppearance",f);o("bl_appearance:server:getClothes",ee);exports("GetClothes",ee);o("bl_appearance:server:getTattoos",te);exports("GetTattoos",te);o("bl_appearance:server:getAppearance",ne);exports("GetAppearance",ne);onNet("bl_appearance:server:setroutingbucket",()=>{SetPlayerRoutingBucket(source.toString(),source)});onNet("bl_appearance:server:resetroutingbucket",()=>{SetPlayerRoutingBucket(source.toString(),0)});RegisterCommand("migrate",async t=>{t=t!==0?t:parseInt(getPlayers()[0]);let n=exports.bl_appearance.config();(await _e(`./migrate/${n.previousClothing==="fivem-appearance"?"fivem":n.previousClothing}.ts`)).default(t)},!1);w=P.outfitItem;w||console.warn("bl_appearance: No outfit item configured, please set it in config.lua");o("bl_appearance:server:itemOutfit",async(t,e)=>{y.GetPlayer(t).addItem(w,1,e)});y.RegisterUsableItem(w,async(t,e,n)=>{k(t)?.removeItem(w,1,e)&&emitNet("bl_appearance:server:useOutfitItem",t,n.outfit)})});v();export{f as saveAppearance};
