var Oc=Object.defineProperty;var Fc=(s,e,t)=>e in s?Oc(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var C=(s,e,t)=>Fc(s,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Jr="160",Bc=0,ua=1,zc=2,jo=1,qo=2,dn=3,Rn=0,Nt=1,Vt=2,bn=0,Li=1,fa=2,pa=3,ma=4,Hc=5,Hn=100,Gc=101,kc=102,ga=103,_a=104,Vc=200,Wc=201,Xc=202,jc=203,Hr=204,Gr=205,qc=206,Yc=207,$c=208,Kc=209,Zc=210,Jc=211,Qc=212,el=213,tl=214,nl=0,il=1,sl=2,zs=3,rl=4,al=5,ol=6,cl=7,Yo=0,ll=1,hl=2,Tn=0,dl=1,ul=2,fl=3,$o=4,pl=5,ml=6,Ko=300,Ui=301,Ni=302,kr=303,Vr=304,qs=306,ei=1e3,Jt=1001,Wr=1002,Lt=1003,va=1004,rr=1005,Pt=1006,gl=1007,Zi=1008,An=1009,_l=1010,vl=1011,Qr=1012,Zo=1013,Sn=1014,yn=1015,Ji=1016,Jo=1017,Qo=1018,ti=1020,xl=1021,Qt=1023,El=1024,Ml=1025,ni=1026,Oi=1027,Sl=1028,ec=1029,yl=1030,tc=1031,nc=1033,ar=33776,or=33777,cr=33778,lr=33779,xa=35840,Ea=35841,Ma=35842,Sa=35843,ic=36196,ya=37492,ba=37496,Ta=37808,Aa=37809,Ca=37810,wa=37811,Ra=37812,Ia=37813,La=37814,Pa=37815,Da=37816,Ua=37817,Na=37818,Oa=37819,Fa=37820,Ba=37821,hr=36492,za=36494,Ha=36495,bl=36283,Ga=36284,ka=36285,Va=36286,sc=3e3,ii=3001,Tl=3200,Al=3201,rc=0,Cl=1,qt="",xt="srgb",mn="srgb-linear",ea="display-p3",Ys="display-p3-linear",Hs="linear",tt="srgb",Gs="rec709",ks="p3",ci=7680,Wa=519,wl=512,Rl=513,Il=514,ac=515,Ll=516,Pl=517,Dl=518,Ul=519,Xr=35044,Xa="300 es",jr=1035,fn=2e3,Vs=2001;class Bi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],dr=Math.PI/180,qr=180/Math.PI;function Cn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(bt[s&255]+bt[s>>8&255]+bt[s>>16&255]+bt[s>>24&255]+"-"+bt[e&255]+bt[e>>8&255]+"-"+bt[e>>16&15|64]+bt[e>>24&255]+"-"+bt[t&63|128]+bt[t>>8&255]+"-"+bt[t>>16&255]+bt[t>>24&255]+bt[n&255]+bt[n>>8&255]+bt[n>>16&255]+bt[n>>24&255]).toLowerCase()}function Dt(s,e,t){return Math.max(e,Math.min(t,s))}function Nl(s,e){return(s%e+e)%e}function ur(s,e,t){return(1-t)*s+t*e}function ja(s){return(s&s-1)===0&&s!==0}function Yr(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function un(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ze(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class be{constructor(e=0,t=0){be.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ve{constructor(e,t,n,i,r,a,o,c,l){Ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l)}set(e,t,n,i,r,a,o,c,l){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],d=n[7],f=n[2],m=n[5],g=n[8],_=i[0],p=i[3],u=i[6],M=i[1],x=i[4],y=i[7],L=i[2],A=i[5],w=i[8];return r[0]=a*_+o*M+c*L,r[3]=a*p+o*x+c*A,r[6]=a*u+o*y+c*w,r[1]=l*_+h*M+d*L,r[4]=l*p+h*x+d*A,r[7]=l*u+h*y+d*w,r[2]=f*_+m*M+g*L,r[5]=f*p+m*x+g*A,r[8]=f*u+m*y+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+i*r*l-i*a*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=h*a-o*l,f=o*c-h*r,m=l*r-a*c,g=t*d+n*f+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(i*l-h*n)*_,e[2]=(o*n-i*a)*_,e[3]=f*_,e[4]=(h*t-i*c)*_,e[5]=(i*r-o*t)*_,e[6]=m*_,e[7]=(n*c-l*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-i*l,i*c,-i*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(fr.makeScale(e,t)),this}rotate(e){return this.premultiply(fr.makeRotation(-e)),this}translate(e,t){return this.premultiply(fr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const fr=new Ve;function oc(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Ws(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Ol(){const s=Ws("canvas");return s.style.display="block",s}const qa={};function $i(s){s in qa||(qa[s]=!0,console.warn(s))}const Ya=new Ve().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),$a=new Ve().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),cs={[mn]:{transfer:Hs,primaries:Gs,toReference:s=>s,fromReference:s=>s},[xt]:{transfer:tt,primaries:Gs,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Ys]:{transfer:Hs,primaries:ks,toReference:s=>s.applyMatrix3($a),fromReference:s=>s.applyMatrix3(Ya)},[ea]:{transfer:tt,primaries:ks,toReference:s=>s.convertSRGBToLinear().applyMatrix3($a),fromReference:s=>s.applyMatrix3(Ya).convertLinearToSRGB()}},Fl=new Set([mn,Ys]),Ke={enabled:!0,_workingColorSpace:mn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Fl.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=cs[e].toReference,i=cs[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return cs[s].primaries},getTransfer:function(s){return s===qt?Hs:cs[s].transfer}};function Pi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function pr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let li;class cc{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{li===void 0&&(li=Ws("canvas")),li.width=e.width,li.height=e.height;const n=li.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=li}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ws("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Pi(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Pi(t[n]/255)*255):t[n]=Pi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Bl=0;class lc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Bl++}),this.uuid=Cn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(mr(i[a].image)):r.push(mr(i[a]))}else r=mr(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function mr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?cc.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let zl=0;class Bt extends Bi{constructor(e=Bt.DEFAULT_IMAGE,t=Bt.DEFAULT_MAPPING,n=Jt,i=Jt,r=Pt,a=Zi,o=Qt,c=An,l=Bt.DEFAULT_ANISOTROPY,h=qt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zl++}),this.uuid=Cn(),this.name="",this.source=new lc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new be(0,0),this.repeat=new be(1,1),this.center=new be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:($i("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===ii?xt:qt),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ko)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ei:e.x=e.x-Math.floor(e.x);break;case Jt:e.x=e.x<0?0:1;break;case Wr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ei:e.y=e.y-Math.floor(e.y);break;case Jt:e.y=e.y<0?0:1;break;case Wr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return $i("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===xt?ii:sc}set encoding(e){$i("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===ii?xt:qt}}Bt.DEFAULT_IMAGE=null;Bt.DEFAULT_MAPPING=Ko;Bt.DEFAULT_ANISOTROPY=1;class nt{constructor(e=0,t=0,n=0,i=1){nt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const c=e.elements,l=c[0],h=c[4],d=c[8],f=c[1],m=c[5],g=c[9],_=c[2],p=c[6],u=c[10];if(Math.abs(h-f)<.01&&Math.abs(d-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+_)<.1&&Math.abs(g+p)<.1&&Math.abs(l+m+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(l+1)/2,y=(m+1)/2,L=(u+1)/2,A=(h+f)/4,w=(d+_)/4,z=(g+p)/4;return x>y&&x>L?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=A/n,r=w/n):y>L?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=A/i,r=z/i):L<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(L),n=w/r,i=z/r),this.set(n,i,r,t),this}let M=Math.sqrt((p-g)*(p-g)+(d-_)*(d-_)+(f-h)*(f-h));return Math.abs(M)<.001&&(M=1),this.x=(p-g)/M,this.y=(d-_)/M,this.z=(f-h)/M,this.w=Math.acos((l+m+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Hl extends Bi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new nt(0,0,e,t),this.scissorTest=!1,this.viewport=new nt(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&($i("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===ii?xt:qt),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Bt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new lc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class si extends Hl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class hc extends Bt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=Jt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Gl extends Bt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=Jt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ns{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let c=n[i+0],l=n[i+1],h=n[i+2],d=n[i+3];const f=r[a+0],m=r[a+1],g=r[a+2],_=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d;return}if(o===1){e[t+0]=f,e[t+1]=m,e[t+2]=g,e[t+3]=_;return}if(d!==_||c!==f||l!==m||h!==g){let p=1-o;const u=c*f+l*m+h*g+d*_,M=u>=0?1:-1,x=1-u*u;if(x>Number.EPSILON){const L=Math.sqrt(x),A=Math.atan2(L,u*M);p=Math.sin(p*A)/L,o=Math.sin(o*A)/L}const y=o*M;if(c=c*p+f*y,l=l*p+m*y,h=h*p+g*y,d=d*p+_*y,p===1-o){const L=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=L,l*=L,h*=L,d*=L}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],d=r[a],f=r[a+1],m=r[a+2],g=r[a+3];return e[t]=o*g+h*d+c*m-l*f,e[t+1]=c*g+h*f+l*d-o*m,e[t+2]=l*g+h*m+o*f-c*d,e[t+3]=h*g-o*d-c*f-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),d=o(r/2),f=c(n/2),m=c(i/2),g=c(r/2);switch(a){case"XYZ":this._x=f*h*d+l*m*g,this._y=l*m*d-f*h*g,this._z=l*h*g+f*m*d,this._w=l*h*d-f*m*g;break;case"YXZ":this._x=f*h*d+l*m*g,this._y=l*m*d-f*h*g,this._z=l*h*g-f*m*d,this._w=l*h*d+f*m*g;break;case"ZXY":this._x=f*h*d-l*m*g,this._y=l*m*d+f*h*g,this._z=l*h*g+f*m*d,this._w=l*h*d-f*m*g;break;case"ZYX":this._x=f*h*d-l*m*g,this._y=l*m*d+f*h*g,this._z=l*h*g-f*m*d,this._w=l*h*d+f*m*g;break;case"YZX":this._x=f*h*d+l*m*g,this._y=l*m*d+f*h*g,this._z=l*h*g-f*m*d,this._w=l*h*d-f*m*g;break;case"XZY":this._x=f*h*d-l*m*g,this._y=l*m*d-f*h*g,this._z=l*h*g+f*m*d,this._w=l*h*d+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],d=t[10],f=n+o+d;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-c)*m,this._y=(r-l)*m,this._z=(a-i)*m}else if(n>o&&n>d){const m=2*Math.sqrt(1+n-o-d);this._w=(h-c)/m,this._x=.25*m,this._y=(i+a)/m,this._z=(r+l)/m}else if(o>d){const m=2*Math.sqrt(1+o-n-d);this._w=(r-l)/m,this._x=(i+a)/m,this._y=.25*m,this._z=(c+h)/m}else{const m=2*Math.sqrt(1+d-n-o);this._w=(a-i)/m,this._x=(r+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Dt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+i*l-r*c,this._y=i*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-i*o,this._w=a*h-n*o-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),d=Math.sin((1-t)*h)/l,f=Math.sin(t*h)/l;return this._w=a*d+this._w*f,this._x=n*d+this._x*f,this._y=i*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(e=0,t=0,n=0){R.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ka.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ka.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*i-o*n),h=2*(o*t-r*i),d=2*(r*n-a*t);return this.x=t+c*l+a*d-o*h,this.y=n+c*h+o*l-r*d,this.z=i+c*d+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-r*o,this.y=r*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return gr.copy(this).projectOnVector(e),this.sub(gr)}reflect(e){return this.sub(gr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const gr=new R,Ka=new ns;class is{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint($t.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint($t.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=$t.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,$t):$t.fromBufferAttribute(r,a),$t.applyMatrix4(e.matrixWorld),this.expandByPoint($t);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ls.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ls.copy(n.boundingBox)),ls.applyMatrix4(e.matrixWorld),this.union(ls)}const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,$t),$t.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Gi),hs.subVectors(this.max,Gi),hi.subVectors(e.a,Gi),di.subVectors(e.b,Gi),ui.subVectors(e.c,Gi),_n.subVectors(di,hi),vn.subVectors(ui,di),Un.subVectors(hi,ui);let t=[0,-_n.z,_n.y,0,-vn.z,vn.y,0,-Un.z,Un.y,_n.z,0,-_n.x,vn.z,0,-vn.x,Un.z,0,-Un.x,-_n.y,_n.x,0,-vn.y,vn.x,0,-Un.y,Un.x,0];return!_r(t,hi,di,ui,hs)||(t=[1,0,0,0,1,0,0,0,1],!_r(t,hi,di,ui,hs))?!1:(ds.crossVectors(_n,vn),t=[ds.x,ds.y,ds.z],_r(t,hi,di,ui,hs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,$t).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize($t).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(an[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),an[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),an[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),an[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),an[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),an[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),an[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),an[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(an),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const an=[new R,new R,new R,new R,new R,new R,new R,new R],$t=new R,ls=new is,hi=new R,di=new R,ui=new R,_n=new R,vn=new R,Un=new R,Gi=new R,hs=new R,ds=new R,Nn=new R;function _r(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Nn.fromArray(s,r);const o=i.x*Math.abs(Nn.x)+i.y*Math.abs(Nn.y)+i.z*Math.abs(Nn.z),c=e.dot(Nn),l=t.dot(Nn),h=n.dot(Nn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const kl=new is,ki=new R,vr=new R;class ss{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):kl.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ki.subVectors(e,this.center);const t=ki.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ki,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(vr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ki.copy(e.center).add(vr)),this.expandByPoint(ki.copy(e.center).sub(vr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const on=new R,xr=new R,us=new R,xn=new R,Er=new R,fs=new R,Mr=new R;class $s{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,on)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=on.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(on.copy(this.origin).addScaledVector(this.direction,t),on.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){xr.copy(e).add(t).multiplyScalar(.5),us.copy(t).sub(e).normalize(),xn.copy(this.origin).sub(xr);const r=e.distanceTo(t)*.5,a=-this.direction.dot(us),o=xn.dot(this.direction),c=-xn.dot(us),l=xn.lengthSq(),h=Math.abs(1-a*a);let d,f,m,g;if(h>0)if(d=a*c-o,f=a*o-c,g=r*h,d>=0)if(f>=-g)if(f<=g){const _=1/h;d*=_,f*=_,m=d*(d+a*f+2*o)+f*(a*d+f+2*c)+l}else f=r,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*c)+l;else f=-r,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*c)+l;else f<=-g?(d=Math.max(0,-(-a*r+o)),f=d>0?-r:Math.min(Math.max(-r,-c),r),m=-d*d+f*(f+2*c)+l):f<=g?(d=0,f=Math.min(Math.max(-r,-c),r),m=f*(f+2*c)+l):(d=Math.max(0,-(a*r+o)),f=d>0?r:Math.min(Math.max(-r,-c),r),m=-d*d+f*(f+2*c)+l);else f=a>0?-r:r,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(xr).addScaledVector(us,f),m}intersectSphere(e,t){on.subVectors(e.center,this.origin);const n=on.dot(this.direction),i=on.dot(on)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,i=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,i=(e.min.x-f.x)*l),h>=0?(r=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),d>=0?(o=(e.min.z-f.z)*d,c=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,c=(e.min.z-f.z)*d),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,on)!==null}intersectTriangle(e,t,n,i,r){Er.subVectors(t,e),fs.subVectors(n,e),Mr.crossVectors(Er,fs);let a=this.direction.dot(Mr),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;xn.subVectors(this.origin,e);const c=o*this.direction.dot(fs.crossVectors(xn,fs));if(c<0)return null;const l=o*this.direction.dot(Er.cross(xn));if(l<0||c+l>a)return null;const h=-o*xn.dot(Mr);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class it{constructor(e,t,n,i,r,a,o,c,l,h,d,f,m,g,_,p){it.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l,h,d,f,m,g,_,p)}set(e,t,n,i,r,a,o,c,l,h,d,f,m,g,_,p){const u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=i,u[1]=r,u[5]=a,u[9]=o,u[13]=c,u[2]=l,u[6]=h,u[10]=d,u[14]=f,u[3]=m,u[7]=g,u[11]=_,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new it().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/fi.setFromMatrixColumn(e,0).length(),r=1/fi.setFromMatrixColumn(e,1).length(),a=1/fi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const f=a*h,m=a*d,g=o*h,_=o*d;t[0]=c*h,t[4]=-c*d,t[8]=l,t[1]=m+g*l,t[5]=f-_*l,t[9]=-o*c,t[2]=_-f*l,t[6]=g+m*l,t[10]=a*c}else if(e.order==="YXZ"){const f=c*h,m=c*d,g=l*h,_=l*d;t[0]=f+_*o,t[4]=g*o-m,t[8]=a*l,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=m*o-g,t[6]=_+f*o,t[10]=a*c}else if(e.order==="ZXY"){const f=c*h,m=c*d,g=l*h,_=l*d;t[0]=f-_*o,t[4]=-a*d,t[8]=g+m*o,t[1]=m+g*o,t[5]=a*h,t[9]=_-f*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const f=a*h,m=a*d,g=o*h,_=o*d;t[0]=c*h,t[4]=g*l-m,t[8]=f*l+_,t[1]=c*d,t[5]=_*l+f,t[9]=m*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const f=a*c,m=a*l,g=o*c,_=o*l;t[0]=c*h,t[4]=_-f*d,t[8]=g*d+m,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=m*d+g,t[10]=f-_*d}else if(e.order==="XZY"){const f=a*c,m=a*l,g=o*c,_=o*l;t[0]=c*h,t[4]=-d,t[8]=l*h,t[1]=f*d+_,t[5]=a*h,t[9]=m*d-g,t[2]=g*d-m,t[6]=o*h,t[10]=_*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Vl,e,Wl)}lookAt(e,t,n){const i=this.elements;return Ht.subVectors(e,t),Ht.lengthSq()===0&&(Ht.z=1),Ht.normalize(),En.crossVectors(n,Ht),En.lengthSq()===0&&(Math.abs(n.z)===1?Ht.x+=1e-4:Ht.z+=1e-4,Ht.normalize(),En.crossVectors(n,Ht)),En.normalize(),ps.crossVectors(Ht,En),i[0]=En.x,i[4]=ps.x,i[8]=Ht.x,i[1]=En.y,i[5]=ps.y,i[9]=Ht.y,i[2]=En.z,i[6]=ps.z,i[10]=Ht.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],d=n[5],f=n[9],m=n[13],g=n[2],_=n[6],p=n[10],u=n[14],M=n[3],x=n[7],y=n[11],L=n[15],A=i[0],w=i[4],z=i[8],E=i[12],T=i[1],G=i[5],k=i[9],te=i[13],P=i[2],B=i[6],W=i[10],q=i[14],X=i[3],j=i[7],Y=i[11],ne=i[15];return r[0]=a*A+o*T+c*P+l*X,r[4]=a*w+o*G+c*B+l*j,r[8]=a*z+o*k+c*W+l*Y,r[12]=a*E+o*te+c*q+l*ne,r[1]=h*A+d*T+f*P+m*X,r[5]=h*w+d*G+f*B+m*j,r[9]=h*z+d*k+f*W+m*Y,r[13]=h*E+d*te+f*q+m*ne,r[2]=g*A+_*T+p*P+u*X,r[6]=g*w+_*G+p*B+u*j,r[10]=g*z+_*k+p*W+u*Y,r[14]=g*E+_*te+p*q+u*ne,r[3]=M*A+x*T+y*P+L*X,r[7]=M*w+x*G+y*B+L*j,r[11]=M*z+x*k+y*W+L*Y,r[15]=M*E+x*te+y*q+L*ne,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],d=e[6],f=e[10],m=e[14],g=e[3],_=e[7],p=e[11],u=e[15];return g*(+r*c*d-i*l*d-r*o*f+n*l*f+i*o*m-n*c*m)+_*(+t*c*m-t*l*f+r*a*f-i*a*m+i*l*h-r*c*h)+p*(+t*l*d-t*o*m-r*a*d+n*a*m+r*o*h-n*l*h)+u*(-i*o*h-t*c*d+t*o*f+i*a*d-n*a*f+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=e[9],f=e[10],m=e[11],g=e[12],_=e[13],p=e[14],u=e[15],M=d*p*l-_*f*l+_*c*m-o*p*m-d*c*u+o*f*u,x=g*f*l-h*p*l-g*c*m+a*p*m+h*c*u-a*f*u,y=h*_*l-g*d*l+g*o*m-a*_*m-h*o*u+a*d*u,L=g*d*c-h*_*c-g*o*f+a*_*f+h*o*p-a*d*p,A=t*M+n*x+i*y+r*L;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/A;return e[0]=M*w,e[1]=(_*f*r-d*p*r-_*i*m+n*p*m+d*i*u-n*f*u)*w,e[2]=(o*p*r-_*c*r+_*i*l-n*p*l-o*i*u+n*c*u)*w,e[3]=(d*c*r-o*f*r-d*i*l+n*f*l+o*i*m-n*c*m)*w,e[4]=x*w,e[5]=(h*p*r-g*f*r+g*i*m-t*p*m-h*i*u+t*f*u)*w,e[6]=(g*c*r-a*p*r-g*i*l+t*p*l+a*i*u-t*c*u)*w,e[7]=(a*f*r-h*c*r+h*i*l-t*f*l-a*i*m+t*c*m)*w,e[8]=y*w,e[9]=(g*d*r-h*_*r-g*n*m+t*_*m+h*n*u-t*d*u)*w,e[10]=(a*_*r-g*o*r+g*n*l-t*_*l-a*n*u+t*o*u)*w,e[11]=(h*o*r-a*d*r-h*n*l+t*d*l+a*n*m-t*o*m)*w,e[12]=L*w,e[13]=(h*_*i-g*d*i+g*n*f-t*_*f-h*n*p+t*d*p)*w,e[14]=(g*o*i-a*_*i-g*n*c+t*_*c+a*n*p-t*o*p)*w,e[15]=(a*d*i-h*o*i+h*n*c-t*d*c-a*n*f+t*o*f)*w,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*a,0,l*c-i*o,h*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,d=o+o,f=r*l,m=r*h,g=r*d,_=a*h,p=a*d,u=o*d,M=c*l,x=c*h,y=c*d,L=n.x,A=n.y,w=n.z;return i[0]=(1-(_+u))*L,i[1]=(m+y)*L,i[2]=(g-x)*L,i[3]=0,i[4]=(m-y)*A,i[5]=(1-(f+u))*A,i[6]=(p+M)*A,i[7]=0,i[8]=(g+x)*w,i[9]=(p-M)*w,i[10]=(1-(f+_))*w,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=fi.set(i[0],i[1],i[2]).length();const a=fi.set(i[4],i[5],i[6]).length(),o=fi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Kt.copy(this);const l=1/r,h=1/a,d=1/o;return Kt.elements[0]*=l,Kt.elements[1]*=l,Kt.elements[2]*=l,Kt.elements[4]*=h,Kt.elements[5]*=h,Kt.elements[6]*=h,Kt.elements[8]*=d,Kt.elements[9]*=d,Kt.elements[10]*=d,t.setFromRotationMatrix(Kt),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=fn){const c=this.elements,l=2*r/(t-e),h=2*r/(n-i),d=(t+e)/(t-e),f=(n+i)/(n-i);let m,g;if(o===fn)m=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Vs)m=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=fn){const c=this.elements,l=1/(t-e),h=1/(n-i),d=1/(a-r),f=(t+e)*l,m=(n+i)*h;let g,_;if(o===fn)g=(a+r)*d,_=-2*d;else if(o===Vs)g=r*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const fi=new R,Kt=new it,Vl=new R(0,0,0),Wl=new R(1,1,1),En=new R,ps=new R,Ht=new R,Za=new it,Ja=new ns;class Ks{constructor(e=0,t=0,n=0,i=Ks.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],c=i[1],l=i[5],h=i[9],d=i[2],f=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(Dt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Dt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Dt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Dt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Dt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Dt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Za.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Za,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ja.setFromEuler(this),this.setFromQuaternion(Ja,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ks.DEFAULT_ORDER="XYZ";class ta{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Xl=0;const Qa=new R,pi=new ns,cn=new it,ms=new R,Vi=new R,jl=new R,ql=new ns,eo=new R(1,0,0),to=new R(0,1,0),no=new R(0,0,1),Yl={type:"added"},$l={type:"removed"};class ut extends Bi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xl++}),this.uuid=Cn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ut.DEFAULT_UP.clone();const e=new R,t=new Ks,n=new ns,i=new R(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new it},normalMatrix:{value:new Ve}}),this.matrix=new it,this.matrixWorld=new it,this.matrixAutoUpdate=ut.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ta,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return pi.setFromAxisAngle(e,t),this.quaternion.multiply(pi),this}rotateOnWorldAxis(e,t){return pi.setFromAxisAngle(e,t),this.quaternion.premultiply(pi),this}rotateX(e){return this.rotateOnAxis(eo,e)}rotateY(e){return this.rotateOnAxis(to,e)}rotateZ(e){return this.rotateOnAxis(no,e)}translateOnAxis(e,t){return Qa.copy(e).applyQuaternion(this.quaternion),this.position.add(Qa.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(eo,e)}translateY(e){return this.translateOnAxis(to,e)}translateZ(e){return this.translateOnAxis(no,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(cn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ms.copy(e):ms.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Vi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?cn.lookAt(Vi,ms,this.up):cn.lookAt(ms,Vi,this.up),this.quaternion.setFromRotationMatrix(cn),i&&(cn.extractRotation(i.matrixWorld),pi.setFromRotationMatrix(cn),this.quaternion.premultiply(pi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Yl)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent($l)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),cn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),cn.multiply(e.parent.matrixWorld)),e.applyMatrix4(cn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vi,e,jl),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vi,ql,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++){const o=i[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),d=a(e.shapes),f=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}ut.DEFAULT_UP=new R(0,1,0);ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Zt=new R,ln=new R,Sr=new R,hn=new R,mi=new R,gi=new R,io=new R,yr=new R,br=new R,Tr=new R;let gs=!1;class jt{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Zt.subVectors(e,t),i.cross(Zt);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Zt.subVectors(i,t),ln.subVectors(n,t),Sr.subVectors(e,t);const a=Zt.dot(Zt),o=Zt.dot(ln),c=Zt.dot(Sr),l=ln.dot(ln),h=ln.dot(Sr),d=a*l-o*o;if(d===0)return r.set(0,0,0),null;const f=1/d,m=(l*c-o*h)*f,g=(a*h-o*c)*f;return r.set(1-m-g,g,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,hn)===null?!1:hn.x>=0&&hn.y>=0&&hn.x+hn.y<=1}static getUV(e,t,n,i,r,a,o,c){return gs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),gs=!0),this.getInterpolation(e,t,n,i,r,a,o,c)}static getInterpolation(e,t,n,i,r,a,o,c){return this.getBarycoord(e,t,n,i,hn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,hn.x),c.addScaledVector(a,hn.y),c.addScaledVector(o,hn.z),c)}static isFrontFacing(e,t,n,i){return Zt.subVectors(n,t),ln.subVectors(e,t),Zt.cross(ln).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Zt.subVectors(this.c,this.b),ln.subVectors(this.a,this.b),Zt.cross(ln).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return jt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return jt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return gs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),gs=!0),jt.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}getInterpolation(e,t,n,i,r){return jt.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return jt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return jt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;mi.subVectors(i,n),gi.subVectors(r,n),yr.subVectors(e,n);const c=mi.dot(yr),l=gi.dot(yr);if(c<=0&&l<=0)return t.copy(n);br.subVectors(e,i);const h=mi.dot(br),d=gi.dot(br);if(h>=0&&d<=h)return t.copy(i);const f=c*d-h*l;if(f<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(mi,a);Tr.subVectors(e,r);const m=mi.dot(Tr),g=gi.dot(Tr);if(g>=0&&m<=g)return t.copy(r);const _=m*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(gi,o);const p=h*g-m*d;if(p<=0&&d-h>=0&&m-g>=0)return io.subVectors(r,i),o=(d-h)/(d-h+(m-g)),t.copy(i).addScaledVector(io,o);const u=1/(p+_+f);return a=_*u,o=f*u,t.copy(n).addScaledVector(mi,a).addScaledVector(gi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const dc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mn={h:0,s:0,l:0},_s={h:0,s:0,l:0};function Ar(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Fe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=xt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ke.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Ke.workingColorSpace){if(e=Nl(e,1),t=Dt(t,0,1),n=Dt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Ar(a,r,e+1/3),this.g=Ar(a,r,e),this.b=Ar(a,r,e-1/3)}return Ke.toWorkingColorSpace(this,i),this}setStyle(e,t=xt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=xt){const n=dc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pi(e.r),this.g=Pi(e.g),this.b=Pi(e.b),this}copyLinearToSRGB(e){return this.r=pr(e.r),this.g=pr(e.g),this.b=pr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=xt){return Ke.fromWorkingColorSpace(Tt.copy(this),e),Math.round(Dt(Tt.r*255,0,255))*65536+Math.round(Dt(Tt.g*255,0,255))*256+Math.round(Dt(Tt.b*255,0,255))}getHexString(e=xt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.fromWorkingColorSpace(Tt.copy(this),t);const n=Tt.r,i=Tt.g,r=Tt.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const d=a-o;switch(l=h<=.5?d/(a+o):d/(2-a-o),a){case n:c=(i-r)/d+(i<r?6:0);break;case i:c=(r-n)/d+2;break;case r:c=(n-i)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Ke.workingColorSpace){return Ke.fromWorkingColorSpace(Tt.copy(this),t),e.r=Tt.r,e.g=Tt.g,e.b=Tt.b,e}getStyle(e=xt){Ke.fromWorkingColorSpace(Tt.copy(this),e);const t=Tt.r,n=Tt.g,i=Tt.b;return e!==xt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Mn),this.setHSL(Mn.h+e,Mn.s+t,Mn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Mn),e.getHSL(_s);const n=ur(Mn.h,_s.h,t),i=ur(Mn.s,_s.s,t),r=ur(Mn.l,_s.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Tt=new Fe;Fe.NAMES=dc;let Kl=0;class Ln extends Bi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Kl++}),this.uuid=Cn(),this.name="",this.type="Material",this.blending=Li,this.side=Rn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Hr,this.blendDst=Gr,this.blendEquation=Hn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Fe(0,0,0),this.blendAlpha=0,this.depthFunc=zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ci,this.stencilZFail=ci,this.stencilZPass=ci,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Li&&(n.blending=this.blending),this.side!==Rn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Hr&&(n.blendSrc=this.blendSrc),this.blendDst!==Gr&&(n.blendDst=this.blendDst),this.blendEquation!==Hn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==zs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Wa&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ci&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ci&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ci&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ot extends Ln{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Yo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const dt=new R,vs=new be;class Yt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Xr,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=yn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)vs.fromBufferAttribute(this,t),vs.applyMatrix3(e),this.setXY(t,vs.x,vs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.applyMatrix3(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.applyMatrix4(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.applyNormalMatrix(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.transformDirection(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=un(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ze(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=un(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=un(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=un(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=un(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array),i=Ze(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array),i=Ze(i,this.array),r=Ze(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Xr&&(e.usage=this.usage),e}}class uc extends Yt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class fc extends Yt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class at extends Yt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Zl=0;const Xt=new it,Cr=new ut,_i=new R,Gt=new is,Wi=new is,_t=new R;class St extends Bi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zl++}),this.uuid=Cn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(oc(e)?fc:uc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ve().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Xt.makeRotationFromQuaternion(e),this.applyMatrix4(Xt),this}rotateX(e){return Xt.makeRotationX(e),this.applyMatrix4(Xt),this}rotateY(e){return Xt.makeRotationY(e),this.applyMatrix4(Xt),this}rotateZ(e){return Xt.makeRotationZ(e),this.applyMatrix4(Xt),this}translate(e,t,n){return Xt.makeTranslation(e,t,n),this.applyMatrix4(Xt),this}scale(e,t,n){return Xt.makeScale(e,t,n),this.applyMatrix4(Xt),this}lookAt(e){return Cr.lookAt(e),Cr.updateMatrix(),this.applyMatrix4(Cr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_i).negate(),this.translate(_i.x,_i.y,_i.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new at(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new is);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Gt.setFromBufferAttribute(r),this.morphTargetsRelative?(_t.addVectors(this.boundingBox.min,Gt.min),this.boundingBox.expandByPoint(_t),_t.addVectors(this.boundingBox.max,Gt.max),this.boundingBox.expandByPoint(_t)):(this.boundingBox.expandByPoint(Gt.min),this.boundingBox.expandByPoint(Gt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ss);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new R,1/0);return}if(e){const n=this.boundingSphere.center;if(Gt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Wi.setFromBufferAttribute(o),this.morphTargetsRelative?(_t.addVectors(Gt.min,Wi.min),Gt.expandByPoint(_t),_t.addVectors(Gt.max,Wi.max),Gt.expandByPoint(_t)):(Gt.expandByPoint(Wi.min),Gt.expandByPoint(Wi.max))}Gt.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)_t.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(_t));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)_t.fromBufferAttribute(o,l),c&&(_i.fromBufferAttribute(e,l),_t.add(_i)),i=Math.max(i,n.distanceToSquared(_t))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,a=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Yt(new Float32Array(4*o),4));const c=this.getAttribute("tangent").array,l=[],h=[];for(let T=0;T<o;T++)l[T]=new R,h[T]=new R;const d=new R,f=new R,m=new R,g=new be,_=new be,p=new be,u=new R,M=new R;function x(T,G,k){d.fromArray(i,T*3),f.fromArray(i,G*3),m.fromArray(i,k*3),g.fromArray(a,T*2),_.fromArray(a,G*2),p.fromArray(a,k*2),f.sub(d),m.sub(d),_.sub(g),p.sub(g);const te=1/(_.x*p.y-p.x*_.y);isFinite(te)&&(u.copy(f).multiplyScalar(p.y).addScaledVector(m,-_.y).multiplyScalar(te),M.copy(m).multiplyScalar(_.x).addScaledVector(f,-p.x).multiplyScalar(te),l[T].add(u),l[G].add(u),l[k].add(u),h[T].add(M),h[G].add(M),h[k].add(M))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let T=0,G=y.length;T<G;++T){const k=y[T],te=k.start,P=k.count;for(let B=te,W=te+P;B<W;B+=3)x(n[B+0],n[B+1],n[B+2])}const L=new R,A=new R,w=new R,z=new R;function E(T){w.fromArray(r,T*3),z.copy(w);const G=l[T];L.copy(G),L.sub(w.multiplyScalar(w.dot(G))).normalize(),A.crossVectors(z,G);const te=A.dot(h[T])<0?-1:1;c[T*4]=L.x,c[T*4+1]=L.y,c[T*4+2]=L.z,c[T*4+3]=te}for(let T=0,G=y.length;T<G;++T){const k=y[T],te=k.start,P=k.count;for(let B=te,W=te+P;B<W;B+=3)E(n[B+0]),E(n[B+1]),E(n[B+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Yt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const i=new R,r=new R,a=new R,o=new R,c=new R,l=new R,h=new R,d=new R;if(e)for(let f=0,m=e.count;f<m;f+=3){const g=e.getX(f+0),_=e.getX(f+1),p=e.getX(f+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,p),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,p),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let f=0,m=t.count;f<m;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)_t.fromBufferAttribute(e,t),_t.normalize(),e.setXYZ(t,_t.x,_t.y,_t.z)}toNonIndexed(){function e(o,c){const l=o.array,h=o.itemSize,d=o.normalized,f=new l.constructor(c.length*h);let m=0,g=0;for(let _=0,p=c.length;_<p;_++){o.isInterleavedBufferAttribute?m=c[_]*o.data.stride+o.offset:m=c[_]*h;for(let u=0;u<h;u++)f[g++]=l[m++]}return new Yt(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new St,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],l=e(c,n);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,d=l.length;h<d;h++){const f=l[h],m=e(f,n);c.push(m)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,f=l.length;d<f;d++){const m=l[d];h.push(m.toJSON(e.data))}h.length>0&&(i[c]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],d=r[l];for(let f=0,m=d.length;f<m;f++)h.push(d[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,h=a.length;l<h;l++){const d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const so=new it,On=new $s,xs=new ss,ro=new R,vi=new R,xi=new R,Ei=new R,wr=new R,Es=new R,Ms=new be,Ss=new be,ys=new be,ao=new R,oo=new R,co=new R,bs=new R,Ts=new R;class Ce extends ut{constructor(e=new St,t=new Ot){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){Es.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],d=r[c];h!==0&&(wr.fromBufferAttribute(d,e),a?Es.addScaledVector(wr,h):Es.addScaledVector(wr.sub(t),h))}t.add(Es)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),xs.copy(n.boundingSphere),xs.applyMatrix4(r),On.copy(e.ray).recast(e.near),!(xs.containsPoint(On.origin)===!1&&(On.intersectSphere(xs,ro)===null||On.origin.distanceToSquared(ro)>(e.far-e.near)**2))&&(so.copy(r).invert(),On.copy(e.ray).applyMatrix4(so),!(n.boundingBox!==null&&On.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,On)))}_computeIntersections(e,t,n){let i;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const p=f[g],u=a[p.materialIndex],M=Math.max(p.start,m.start),x=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let y=M,L=x;y<L;y+=3){const A=o.getX(y),w=o.getX(y+1),z=o.getX(y+2);i=As(this,u,e,n,l,h,d,A,w,z),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,m.start),_=Math.min(o.count,m.start+m.count);for(let p=g,u=_;p<u;p+=3){const M=o.getX(p),x=o.getX(p+1),y=o.getX(p+2);i=As(this,a,e,n,l,h,d,M,x,y),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const p=f[g],u=a[p.materialIndex],M=Math.max(p.start,m.start),x=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let y=M,L=x;y<L;y+=3){const A=y,w=y+1,z=y+2;i=As(this,u,e,n,l,h,d,A,w,z),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,m.start),_=Math.min(c.count,m.start+m.count);for(let p=g,u=_;p<u;p+=3){const M=p,x=p+1,y=p+2;i=As(this,a,e,n,l,h,d,M,x,y),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}}function Jl(s,e,t,n,i,r,a,o){let c;if(e.side===Nt?c=n.intersectTriangle(a,r,i,!0,o):c=n.intersectTriangle(i,r,a,e.side===Rn,o),c===null)return null;Ts.copy(o),Ts.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(Ts);return l<t.near||l>t.far?null:{distance:l,point:Ts.clone(),object:s}}function As(s,e,t,n,i,r,a,o,c,l){s.getVertexPosition(o,vi),s.getVertexPosition(c,xi),s.getVertexPosition(l,Ei);const h=Jl(s,e,t,n,vi,xi,Ei,bs);if(h){i&&(Ms.fromBufferAttribute(i,o),Ss.fromBufferAttribute(i,c),ys.fromBufferAttribute(i,l),h.uv=jt.getInterpolation(bs,vi,xi,Ei,Ms,Ss,ys,new be)),r&&(Ms.fromBufferAttribute(r,o),Ss.fromBufferAttribute(r,c),ys.fromBufferAttribute(r,l),h.uv1=jt.getInterpolation(bs,vi,xi,Ei,Ms,Ss,ys,new be),h.uv2=h.uv1),a&&(ao.fromBufferAttribute(a,o),oo.fromBufferAttribute(a,c),co.fromBufferAttribute(a,l),h.normal=jt.getInterpolation(bs,vi,xi,Ei,ao,oo,co,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new R,materialIndex:0};jt.getNormal(vi,xi,Ei,d.normal),h.face=d}return h}class vt extends St{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],d=[];let f=0,m=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new at(l,3)),this.setAttribute("normal",new at(h,3)),this.setAttribute("uv",new at(d,2));function g(_,p,u,M,x,y,L,A,w,z,E){const T=y/w,G=L/z,k=y/2,te=L/2,P=A/2,B=w+1,W=z+1;let q=0,X=0;const j=new R;for(let Y=0;Y<W;Y++){const ne=Y*G-te;for(let ie=0;ie<B;ie++){const V=ie*T-k;j[_]=V*M,j[p]=ne*x,j[u]=P,l.push(j.x,j.y,j.z),j[_]=0,j[p]=0,j[u]=A>0?1:-1,h.push(j.x,j.y,j.z),d.push(ie/w),d.push(1-Y/z),q+=1}}for(let Y=0;Y<z;Y++)for(let ne=0;ne<w;ne++){const ie=f+ne+B*Y,V=f+ne+B*(Y+1),$=f+(ne+1)+B*(Y+1),le=f+(ne+1)+B*Y;c.push(ie,V,le),c.push(V,$,le),X+=6}o.addGroup(m,X,E),m+=X,f+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Fi(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function It(s){const e={};for(let t=0;t<s.length;t++){const n=Fi(s[t]);for(const i in n)e[i]=n[i]}return e}function Ql(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function pc(s){return s.getRenderTarget()===null?s.outputColorSpace:Ke.workingColorSpace}const eh={clone:Fi,merge:It};var th=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,nh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class In extends Ln{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=th,this.fragmentShader=nh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fi(e.uniforms),this.uniformsGroups=Ql(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class mc extends ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new it,this.projectionMatrix=new it,this.projectionMatrixInverse=new it,this.coordinateSystem=fn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class kt extends mc{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=qr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(dr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qr*2*Math.atan(Math.tan(dr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(dr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*i/c,t-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Mi=-90,Si=1;class ih extends ut{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new kt(Mi,Si,e,t);i.layers=this.layers,this.add(i);const r=new kt(Mi,Si,e,t);r.layers=this.layers,this.add(r);const a=new kt(Mi,Si,e,t);a.layers=this.layers,this.add(a);const o=new kt(Mi,Si,e,t);o.layers=this.layers,this.add(o);const c=new kt(Mi,Si,e,t);c.layers=this.layers,this.add(c);const l=new kt(Mi,Si,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,c]=t;for(const l of t)this.remove(l);if(e===fn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Vs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(d,f,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class gc extends Bt{constructor(e,t,n,i,r,a,o,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:Ui,super(e,t,n,i,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class sh extends si{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&($i("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===ii?xt:qt),this.texture=new gc(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Pt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new vt(5,5,5),r=new In({name:"CubemapFromEquirect",uniforms:Fi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Nt,blending:bn});r.uniforms.tEquirect.value=t;const a=new Ce(i,r),o=t.minFilter;return t.minFilter===Zi&&(t.minFilter=Pt),new ih(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}const Rr=new R,rh=new R,ah=new Ve;class Bn{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Rr.subVectors(n,t).cross(rh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Rr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||ah.getNormalMatrix(e),i=this.coplanarPoint(Rr).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Fn=new ss,Cs=new R;class na{constructor(e=new Bn,t=new Bn,n=new Bn,i=new Bn,r=new Bn,a=new Bn){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=fn){const n=this.planes,i=e.elements,r=i[0],a=i[1],o=i[2],c=i[3],l=i[4],h=i[5],d=i[6],f=i[7],m=i[8],g=i[9],_=i[10],p=i[11],u=i[12],M=i[13],x=i[14],y=i[15];if(n[0].setComponents(c-r,f-l,p-m,y-u).normalize(),n[1].setComponents(c+r,f+l,p+m,y+u).normalize(),n[2].setComponents(c+a,f+h,p+g,y+M).normalize(),n[3].setComponents(c-a,f-h,p-g,y-M).normalize(),n[4].setComponents(c-o,f-d,p-_,y-x).normalize(),t===fn)n[5].setComponents(c+o,f+d,p+_,y+x).normalize();else if(t===Vs)n[5].setComponents(o,d,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Fn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Fn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Fn)}intersectsSprite(e){return Fn.center.set(0,0,0),Fn.radius=.7071067811865476,Fn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fn)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Cs.x=i.normal.x>0?e.max.x:e.min.x,Cs.y=i.normal.y>0?e.max.y:e.min.y,Cs.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Cs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function _c(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function oh(s,e){const t=e.isWebGL2,n=new WeakMap;function i(l,h){const d=l.array,f=l.usage,m=d.byteLength,g=s.createBuffer();s.bindBuffer(h,g),s.bufferData(h,d,f),l.onUploadCallback();let _;if(d instanceof Float32Array)_=s.FLOAT;else if(d instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)_=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=s.UNSIGNED_SHORT;else if(d instanceof Int16Array)_=s.SHORT;else if(d instanceof Uint32Array)_=s.UNSIGNED_INT;else if(d instanceof Int32Array)_=s.INT;else if(d instanceof Int8Array)_=s.BYTE;else if(d instanceof Uint8Array)_=s.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)_=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:_,bytesPerElement:d.BYTES_PER_ELEMENT,version:l.version,size:m}}function r(l,h,d){const f=h.array,m=h._updateRange,g=h.updateRanges;if(s.bindBuffer(d,l),m.count===-1&&g.length===0&&s.bufferSubData(d,0,f),g.length!==0){for(let _=0,p=g.length;_<p;_++){const u=g[_];t?s.bufferSubData(d,u.start*f.BYTES_PER_ELEMENT,f,u.start,u.count):s.bufferSubData(d,u.start*f.BYTES_PER_ELEMENT,f.subarray(u.start,u.start+u.count))}h.clearUpdateRanges()}m.count!==-1&&(t?s.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):s.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h&&(s.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){const f=n.get(l);(!f||f.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const d=n.get(l);if(d===void 0)n.set(l,i(l,h));else if(d.version<l.version){if(d.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,l,h),d.version=l.version}}return{get:a,remove:o,update:c}}class wn extends St{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,d=e/o,f=t/c,m=[],g=[],_=[],p=[];for(let u=0;u<h;u++){const M=u*f-a;for(let x=0;x<l;x++){const y=x*d-r;g.push(y,-M,0),_.push(0,0,1),p.push(x/o),p.push(1-u/c)}}for(let u=0;u<c;u++)for(let M=0;M<o;M++){const x=M+l*u,y=M+l*(u+1),L=M+1+l*(u+1),A=M+1+l*u;m.push(x,y,A),m.push(y,L,A)}this.setIndex(m),this.setAttribute("position",new at(g,3)),this.setAttribute("normal",new at(_,3)),this.setAttribute("uv",new at(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wn(e.width,e.height,e.widthSegments,e.heightSegments)}}var ch=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,hh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,dh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,uh=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,fh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ph=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,mh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gh=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,_h=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,vh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Eh=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Mh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Sh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,yh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,bh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Th=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ah=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ch=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,wh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Rh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Ih=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Lh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ph=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Dh=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Uh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Nh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Oh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Fh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Bh="gl_FragColor = linearToOutputTexel( gl_FragColor );",zh=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Hh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Gh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,kh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Vh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Xh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Yh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$h=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Kh=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Zh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Jh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Qh=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ed=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,td=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,nd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,id=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ad=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,od=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,cd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ld=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,hd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,dd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ud=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,pd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,md=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_d=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,vd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ed=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Md=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Sd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,yd=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,bd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Td=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ad=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Cd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Id=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ld=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Pd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Dd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ud=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Nd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Od=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Fd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Bd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Hd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Gd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,kd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Vd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Wd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Xd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,jd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,qd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Yd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,$d=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Kd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Zd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Jd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Qd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,eu=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,tu=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,nu=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,iu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,su=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ru=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,au=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ou=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cu=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hu=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,du=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uu=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fu=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,pu=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,mu=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,gu=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,_u=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vu=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xu=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Eu=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Mu=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Su=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yu=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bu=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tu=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Au=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cu=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,wu=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ru=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Iu=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lu=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Pu=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Du=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Uu=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nu=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Ou=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Fu=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bu=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,zu=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Hu=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Oe={alphahash_fragment:ch,alphahash_pars_fragment:lh,alphamap_fragment:hh,alphamap_pars_fragment:dh,alphatest_fragment:uh,alphatest_pars_fragment:fh,aomap_fragment:ph,aomap_pars_fragment:mh,batching_pars_vertex:gh,batching_vertex:_h,begin_vertex:vh,beginnormal_vertex:xh,bsdfs:Eh,iridescence_fragment:Mh,bumpmap_pars_fragment:Sh,clipping_planes_fragment:yh,clipping_planes_pars_fragment:bh,clipping_planes_pars_vertex:Th,clipping_planes_vertex:Ah,color_fragment:Ch,color_pars_fragment:wh,color_pars_vertex:Rh,color_vertex:Ih,common:Lh,cube_uv_reflection_fragment:Ph,defaultnormal_vertex:Dh,displacementmap_pars_vertex:Uh,displacementmap_vertex:Nh,emissivemap_fragment:Oh,emissivemap_pars_fragment:Fh,colorspace_fragment:Bh,colorspace_pars_fragment:zh,envmap_fragment:Hh,envmap_common_pars_fragment:Gh,envmap_pars_fragment:kh,envmap_pars_vertex:Vh,envmap_physical_pars_fragment:td,envmap_vertex:Wh,fog_vertex:Xh,fog_pars_vertex:jh,fog_fragment:qh,fog_pars_fragment:Yh,gradientmap_pars_fragment:$h,lightmap_fragment:Kh,lightmap_pars_fragment:Zh,lights_lambert_fragment:Jh,lights_lambert_pars_fragment:Qh,lights_pars_begin:ed,lights_toon_fragment:nd,lights_toon_pars_fragment:id,lights_phong_fragment:sd,lights_phong_pars_fragment:rd,lights_physical_fragment:ad,lights_physical_pars_fragment:od,lights_fragment_begin:cd,lights_fragment_maps:ld,lights_fragment_end:hd,logdepthbuf_fragment:dd,logdepthbuf_pars_fragment:ud,logdepthbuf_pars_vertex:fd,logdepthbuf_vertex:pd,map_fragment:md,map_pars_fragment:gd,map_particle_fragment:_d,map_particle_pars_fragment:vd,metalnessmap_fragment:xd,metalnessmap_pars_fragment:Ed,morphcolor_vertex:Md,morphnormal_vertex:Sd,morphtarget_pars_vertex:yd,morphtarget_vertex:bd,normal_fragment_begin:Td,normal_fragment_maps:Ad,normal_pars_fragment:Cd,normal_pars_vertex:wd,normal_vertex:Rd,normalmap_pars_fragment:Id,clearcoat_normal_fragment_begin:Ld,clearcoat_normal_fragment_maps:Pd,clearcoat_pars_fragment:Dd,iridescence_pars_fragment:Ud,opaque_fragment:Nd,packing:Od,premultiplied_alpha_fragment:Fd,project_vertex:Bd,dithering_fragment:zd,dithering_pars_fragment:Hd,roughnessmap_fragment:Gd,roughnessmap_pars_fragment:kd,shadowmap_pars_fragment:Vd,shadowmap_pars_vertex:Wd,shadowmap_vertex:Xd,shadowmask_pars_fragment:jd,skinbase_vertex:qd,skinning_pars_vertex:Yd,skinning_vertex:$d,skinnormal_vertex:Kd,specularmap_fragment:Zd,specularmap_pars_fragment:Jd,tonemapping_fragment:Qd,tonemapping_pars_fragment:eu,transmission_fragment:tu,transmission_pars_fragment:nu,uv_pars_fragment:iu,uv_pars_vertex:su,uv_vertex:ru,worldpos_vertex:au,background_vert:ou,background_frag:cu,backgroundCube_vert:lu,backgroundCube_frag:hu,cube_vert:du,cube_frag:uu,depth_vert:fu,depth_frag:pu,distanceRGBA_vert:mu,distanceRGBA_frag:gu,equirect_vert:_u,equirect_frag:vu,linedashed_vert:xu,linedashed_frag:Eu,meshbasic_vert:Mu,meshbasic_frag:Su,meshlambert_vert:yu,meshlambert_frag:bu,meshmatcap_vert:Tu,meshmatcap_frag:Au,meshnormal_vert:Cu,meshnormal_frag:wu,meshphong_vert:Ru,meshphong_frag:Iu,meshphysical_vert:Lu,meshphysical_frag:Pu,meshtoon_vert:Du,meshtoon_frag:Uu,points_vert:Nu,points_frag:Ou,shadow_vert:Fu,shadow_frag:Bu,sprite_vert:zu,sprite_frag:Hu},re={common:{diffuse:{value:new Fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new Fe(16777215)},opacity:{value:1},center:{value:new be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},nn={basic:{uniforms:It([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:It([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Fe(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:It([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Fe(0)},specular:{value:new Fe(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:It([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new Fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:It([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new Fe(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:It([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:It([re.points,re.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:It([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:It([re.common,re.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:It([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:It([re.sprite,re.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:It([re.common,re.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:It([re.lights,re.fog,{color:{value:new Fe(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};nn.physical={uniforms:It([nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new Fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new Fe(0)},specularColor:{value:new Fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const ws={r:0,b:0,g:0};function Gu(s,e,t,n,i,r,a){const o=new Fe(0);let c=r===!0?0:1,l,h,d=null,f=0,m=null;function g(p,u){let M=!1,x=u.isScene===!0?u.background:null;x&&x.isTexture&&(x=(u.backgroundBlurriness>0?t:e).get(x)),x===null?_(o,c):x&&x.isColor&&(_(x,1),M=!0);const y=s.xr.getEnvironmentBlendMode();y==="additive"?n.buffers.color.setClear(0,0,0,1,a):y==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||M)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),x&&(x.isCubeTexture||x.mapping===qs)?(h===void 0&&(h=new Ce(new vt(1,1,1),new In({name:"BackgroundCubeMaterial",uniforms:Fi(nn.backgroundCube.uniforms),vertexShader:nn.backgroundCube.vertexShader,fragmentShader:nn.backgroundCube.fragmentShader,side:Nt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,A,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,h.material.toneMapped=Ke.getTransfer(x.colorSpace)!==tt,(d!==x||f!==x.version||m!==s.toneMapping)&&(h.material.needsUpdate=!0,d=x,f=x.version,m=s.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Ce(new wn(2,2),new In({name:"BackgroundMaterial",uniforms:Fi(nn.background.uniforms),vertexShader:nn.background.vertexShader,fragmentShader:nn.background.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,l.material.toneMapped=Ke.getTransfer(x.colorSpace)!==tt,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||f!==x.version||m!==s.toneMapping)&&(l.material.needsUpdate=!0,d=x,f=x.version,m=s.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function _(p,u){p.getRGB(ws,pc(s)),n.buffers.color.setClear(ws.r,ws.g,ws.b,u,a)}return{getClearColor:function(){return o},setClearColor:function(p,u=1){o.set(p),c=u,_(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(p){c=p,_(o,c)},render:g}}function ku(s,e,t,n){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},c=p(null);let l=c,h=!1;function d(P,B,W,q,X){let j=!1;if(a){const Y=_(q,W,B);l!==Y&&(l=Y,m(l.object)),j=u(P,q,W,X),j&&M(P,q,W,X)}else{const Y=B.wireframe===!0;(l.geometry!==q.id||l.program!==W.id||l.wireframe!==Y)&&(l.geometry=q.id,l.program=W.id,l.wireframe=Y,j=!0)}X!==null&&t.update(X,s.ELEMENT_ARRAY_BUFFER),(j||h)&&(h=!1,z(P,B,W,q),X!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function f(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function m(P){return n.isWebGL2?s.bindVertexArray(P):r.bindVertexArrayOES(P)}function g(P){return n.isWebGL2?s.deleteVertexArray(P):r.deleteVertexArrayOES(P)}function _(P,B,W){const q=W.wireframe===!0;let X=o[P.id];X===void 0&&(X={},o[P.id]=X);let j=X[B.id];j===void 0&&(j={},X[B.id]=j);let Y=j[q];return Y===void 0&&(Y=p(f()),j[q]=Y),Y}function p(P){const B=[],W=[],q=[];for(let X=0;X<i;X++)B[X]=0,W[X]=0,q[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:W,attributeDivisors:q,object:P,attributes:{},index:null}}function u(P,B,W,q){const X=l.attributes,j=B.attributes;let Y=0;const ne=W.getAttributes();for(const ie in ne)if(ne[ie].location>=0){const $=X[ie];let le=j[ie];if(le===void 0&&(ie==="instanceMatrix"&&P.instanceMatrix&&(le=P.instanceMatrix),ie==="instanceColor"&&P.instanceColor&&(le=P.instanceColor)),$===void 0||$.attribute!==le||le&&$.data!==le.data)return!0;Y++}return l.attributesNum!==Y||l.index!==q}function M(P,B,W,q){const X={},j=B.attributes;let Y=0;const ne=W.getAttributes();for(const ie in ne)if(ne[ie].location>=0){let $=j[ie];$===void 0&&(ie==="instanceMatrix"&&P.instanceMatrix&&($=P.instanceMatrix),ie==="instanceColor"&&P.instanceColor&&($=P.instanceColor));const le={};le.attribute=$,$&&$.data&&(le.data=$.data),X[ie]=le,Y++}l.attributes=X,l.attributesNum=Y,l.index=q}function x(){const P=l.newAttributes;for(let B=0,W=P.length;B<W;B++)P[B]=0}function y(P){L(P,0)}function L(P,B){const W=l.newAttributes,q=l.enabledAttributes,X=l.attributeDivisors;W[P]=1,q[P]===0&&(s.enableVertexAttribArray(P),q[P]=1),X[P]!==B&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,B),X[P]=B)}function A(){const P=l.newAttributes,B=l.enabledAttributes;for(let W=0,q=B.length;W<q;W++)B[W]!==P[W]&&(s.disableVertexAttribArray(W),B[W]=0)}function w(P,B,W,q,X,j,Y){Y===!0?s.vertexAttribIPointer(P,B,W,X,j):s.vertexAttribPointer(P,B,W,q,X,j)}function z(P,B,W,q){if(n.isWebGL2===!1&&(P.isInstancedMesh||q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const X=q.attributes,j=W.getAttributes(),Y=B.defaultAttributeValues;for(const ne in j){const ie=j[ne];if(ie.location>=0){let V=X[ne];if(V===void 0&&(ne==="instanceMatrix"&&P.instanceMatrix&&(V=P.instanceMatrix),ne==="instanceColor"&&P.instanceColor&&(V=P.instanceColor)),V!==void 0){const $=V.normalized,le=V.itemSize,ve=t.get(V);if(ve===void 0)continue;const _e=ve.buffer,Pe=ve.type,Ue=ve.bytesPerElement,Te=n.isWebGL2===!0&&(Pe===s.INT||Pe===s.UNSIGNED_INT||V.gpuType===Zo);if(V.isInterleavedBufferAttribute){const Xe=V.data,U=Xe.stride,At=V.offset;if(Xe.isInstancedInterleavedBuffer){for(let Ee=0;Ee<ie.locationSize;Ee++)L(ie.location+Ee,Xe.meshPerAttribute);P.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=Xe.meshPerAttribute*Xe.count)}else for(let Ee=0;Ee<ie.locationSize;Ee++)y(ie.location+Ee);s.bindBuffer(s.ARRAY_BUFFER,_e);for(let Ee=0;Ee<ie.locationSize;Ee++)w(ie.location+Ee,le/ie.locationSize,Pe,$,U*Ue,(At+le/ie.locationSize*Ee)*Ue,Te)}else{if(V.isInstancedBufferAttribute){for(let Xe=0;Xe<ie.locationSize;Xe++)L(ie.location+Xe,V.meshPerAttribute);P.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let Xe=0;Xe<ie.locationSize;Xe++)y(ie.location+Xe);s.bindBuffer(s.ARRAY_BUFFER,_e);for(let Xe=0;Xe<ie.locationSize;Xe++)w(ie.location+Xe,le/ie.locationSize,Pe,$,le*Ue,le/ie.locationSize*Xe*Ue,Te)}}else if(Y!==void 0){const $=Y[ne];if($!==void 0)switch($.length){case 2:s.vertexAttrib2fv(ie.location,$);break;case 3:s.vertexAttrib3fv(ie.location,$);break;case 4:s.vertexAttrib4fv(ie.location,$);break;default:s.vertexAttrib1fv(ie.location,$)}}}}A()}function E(){k();for(const P in o){const B=o[P];for(const W in B){const q=B[W];for(const X in q)g(q[X].object),delete q[X];delete B[W]}delete o[P]}}function T(P){if(o[P.id]===void 0)return;const B=o[P.id];for(const W in B){const q=B[W];for(const X in q)g(q[X].object),delete q[X];delete B[W]}delete o[P.id]}function G(P){for(const B in o){const W=o[B];if(W[P.id]===void 0)continue;const q=W[P.id];for(const X in q)g(q[X].object),delete q[X];delete W[P.id]}}function k(){te(),h=!0,l!==c&&(l=c,m(l.object))}function te(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:d,reset:k,resetDefaultState:te,dispose:E,releaseStatesOfGeometry:T,releaseStatesOfProgram:G,initAttributes:x,enableAttribute:y,disableUnusedAttributes:A}}function Vu(s,e,t,n){const i=n.isWebGL2;let r;function a(h){r=h}function o(h,d){s.drawArrays(r,h,d),t.update(d,r,1)}function c(h,d,f){if(f===0)return;let m,g;if(i)m=s,g="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](r,h,d,f),t.update(d,r,f)}function l(h,d,f){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<f;g++)this.render(h[g],d[g]);else{m.multiDrawArraysWEBGL(r,h,0,d,0,f);let g=0;for(let _=0;_<f;_++)g+=d[_];t.update(g,r,1)}}this.setMode=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=l}function Wu(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(w){if(w==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const c=r(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);const l=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),p=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),u=s.getParameter(s.MAX_VARYING_VECTORS),M=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),x=f>0,y=a||e.has("OES_texture_float"),L=x&&y,A=a?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:p,maxVaryings:u,maxFragmentUniforms:M,vertexTextures:x,floatFragmentTextures:y,floatVertexTextures:L,maxSamples:A}}function Xu(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new Bn,o=new Ve,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const m=d.length!==0||f||n!==0||i;return i=f,n=d.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){t=h(d,f,0)},this.setState=function(d,f,m){const g=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,u=s.get(d);if(!i||g===null||g.length===0||r&&!p)r?h(null):l();else{const M=r?0:n,x=M*4;let y=u.clippingState||null;c.value=y,y=h(g,f,x,m);for(let L=0;L!==x;++L)y[L]=t[L];u.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,f,m,g){const _=d!==null?d.length:0;let p=null;if(_!==0){if(p=c.value,g!==!0||p===null){const u=m+_*4,M=f.matrixWorldInverse;o.getNormalMatrix(M),(p===null||p.length<u)&&(p=new Float32Array(u));for(let x=0,y=m;x!==_;++x,y+=4)a.copy(d[x]).applyMatrix4(M,o),a.normal.toArray(p,y),p[y+3]=a.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function ju(s){let e=new WeakMap;function t(a,o){return o===kr?a.mapping=Ui:o===Vr&&(a.mapping=Ni),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===kr||o===Vr)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new sh(c.height/2);return l.fromEquirectangularTexture(s,a),e.set(a,l),a.addEventListener("dispose",i),t(l.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class vc extends mc{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ri=4,lo=[.125,.215,.35,.446,.526,.582],Gn=20,Ir=new vc,ho=new Fe;let Lr=null,Pr=0,Dr=0;const zn=(1+Math.sqrt(5))/2,yi=1/zn,uo=[new R(1,1,1),new R(-1,1,1),new R(1,1,-1),new R(-1,1,-1),new R(0,zn,yi),new R(0,zn,-yi),new R(yi,0,zn),new R(-yi,0,zn),new R(zn,yi,0),new R(-zn,yi,0)];class fo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Lr=this._renderer.getRenderTarget(),Pr=this._renderer.getActiveCubeFace(),Dr=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=go(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Lr,Pr,Dr),e.scissorTest=!1,Rs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ui||e.mapping===Ni?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Lr=this._renderer.getRenderTarget(),Pr=this._renderer.getActiveCubeFace(),Dr=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Pt,minFilter:Pt,generateMipmaps:!1,type:Ji,format:Qt,colorSpace:mn,depthBuffer:!1},i=po(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=po(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=qu(r)),this._blurMaterial=Yu(r,e,t)}return i}_compileMaterial(e){const t=new Ce(this._lodPlanes[0],e);this._renderer.compile(t,Ir)}_sceneToCubeUV(e,t,n,i){const o=new kt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(ho),h.toneMapping=Tn,h.autoClear=!1;const m=new Ot({name:"PMREM.Background",side:Nt,depthWrite:!1,depthTest:!1}),g=new Ce(new vt,m);let _=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,_=!0):(m.color.copy(ho),_=!0);for(let u=0;u<6;u++){const M=u%3;M===0?(o.up.set(0,c[u],0),o.lookAt(l[u],0,0)):M===1?(o.up.set(0,0,c[u]),o.lookAt(0,l[u],0)):(o.up.set(0,c[u],0),o.lookAt(0,0,l[u]));const x=this._cubeSize;Rs(i,M*x,u>2?x:0,x,x),h.setRenderTarget(i),_&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Ui||e.mapping===Ni;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=go()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mo());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new Ce(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;Rs(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Ir)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=uo[(i-1)%uo.length];this._blur(e,i-1,i,r,a)}t.autoClear=n}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new Ce(this._lodPlanes[i],l),f=l.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Gn-1),_=r/g,p=isFinite(r)?1+Math.floor(h*_):Gn;p>Gn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Gn}`);const u=[];let M=0;for(let w=0;w<Gn;++w){const z=w/_,E=Math.exp(-z*z/2);u.push(E),w===0?M+=E:w<p&&(M+=2*E)}for(let w=0;w<u.length;w++)u[w]=u[w]/M;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=u,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-n;const y=this._sizeLods[i],L=3*y*(i>x-Ri?i-x+Ri:0),A=4*(this._cubeSize-y);Rs(t,L,A,3*y,2*y),c.setRenderTarget(t),c.render(d,Ir)}}function qu(s){const e=[],t=[],n=[];let i=s;const r=s-Ri+1+lo.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);t.push(o);let c=1/o;a>s-Ri?c=lo[a-s+Ri-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),h=-l,d=1+l,f=[h,h,d,h,d,d,h,h,d,d,h,d],m=6,g=6,_=3,p=2,u=1,M=new Float32Array(_*g*m),x=new Float32Array(p*g*m),y=new Float32Array(u*g*m);for(let A=0;A<m;A++){const w=A%3*2/3-1,z=A>2?0:-1,E=[w,z,0,w+2/3,z,0,w+2/3,z+1,0,w,z,0,w+2/3,z+1,0,w,z+1,0];M.set(E,_*g*A),x.set(f,p*g*A);const T=[A,A,A,A,A,A];y.set(T,u*g*A)}const L=new St;L.setAttribute("position",new Yt(M,_)),L.setAttribute("uv",new Yt(x,p)),L.setAttribute("faceIndex",new Yt(y,u)),e.push(L),i>Ri&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function po(s,e,t){const n=new si(s,e,t);return n.texture.mapping=qs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Rs(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Yu(s,e,t){const n=new Float32Array(Gn),i=new R(0,1,0);return new In({name:"SphericalGaussianBlur",defines:{n:Gn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ia(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function mo(){return new In({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ia(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function go(){return new In({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ia(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function ia(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function $u(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===kr||c===Vr,h=c===Ui||c===Ni;if(l||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let d=e.get(o);return t===null&&(t=new fo(s)),d=l?t.fromEquirectangular(o,d):t.fromCubemap(o,d),e.set(o,d),d.texture}else{if(e.has(o))return e.get(o).texture;{const d=o.image;if(l&&d&&d.height>0||h&&d&&i(d)){t===null&&(t=new fo(s));const f=l?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,f),o.addEventListener("dispose",r),f.texture}else return null}}}return o}function i(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Ku(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Zu(s,e,t,n){const i={},r=new WeakMap;function a(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let p=0,u=_.length;p<u;p++)e.remove(_[p])}f.removeEventListener("dispose",a),delete i[f.id];const m=r.get(f);m&&(e.remove(m),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(d,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,t.memory.geometries++),f}function c(d){const f=d.attributes;for(const g in f)e.update(f[g],s.ARRAY_BUFFER);const m=d.morphAttributes;for(const g in m){const _=m[g];for(let p=0,u=_.length;p<u;p++)e.update(_[p],s.ARRAY_BUFFER)}}function l(d){const f=[],m=d.index,g=d.attributes.position;let _=0;if(m!==null){const M=m.array;_=m.version;for(let x=0,y=M.length;x<y;x+=3){const L=M[x+0],A=M[x+1],w=M[x+2];f.push(L,A,A,w,w,L)}}else if(g!==void 0){const M=g.array;_=g.version;for(let x=0,y=M.length/3-1;x<y;x+=3){const L=x+0,A=x+1,w=x+2;f.push(L,A,A,w,w,L)}}else return;const p=new(oc(f)?fc:uc)(f,1);p.version=_;const u=r.get(d);u&&e.remove(u),r.set(d,p)}function h(d){const f=r.get(d);if(f){const m=d.index;m!==null&&f.version<m.version&&l(d)}else l(d);return r.get(d)}return{get:o,update:c,getWireframeAttribute:h}}function Ju(s,e,t,n){const i=n.isWebGL2;let r;function a(m){r=m}let o,c;function l(m){o=m.type,c=m.bytesPerElement}function h(m,g){s.drawElements(r,g,o,m*c),t.update(g,r,1)}function d(m,g,_){if(_===0)return;let p,u;if(i)p=s,u="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[u](r,g,o,m*c,_),t.update(g,r,_)}function f(m,g,_){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<_;u++)this.render(m[u]/c,g[u]);else{p.multiDrawElementsWEBGL(r,g,0,o,m,0,_);let u=0;for(let M=0;M<_;M++)u+=g[M];t.update(u,r,1)}}this.setMode=a,this.setIndex=l,this.render=h,this.renderInstances=d,this.renderMultiDraw=f}function Qu(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function ef(s,e){return s[0]-e[0]}function tf(s,e){return Math.abs(e[1])-Math.abs(s[1])}function nf(s,e,t){const n={},i=new Float32Array(8),r=new WeakMap,a=new nt,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,h,d){const f=l.morphTargetInfluences;if(e.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let p=r.get(h);if(p===void 0||p.count!==_){let B=function(){te.dispose(),r.delete(h),h.removeEventListener("dispose",B)};var m=B;p!==void 0&&p.texture.dispose();const x=h.morphAttributes.position!==void 0,y=h.morphAttributes.normal!==void 0,L=h.morphAttributes.color!==void 0,A=h.morphAttributes.position||[],w=h.morphAttributes.normal||[],z=h.morphAttributes.color||[];let E=0;x===!0&&(E=1),y===!0&&(E=2),L===!0&&(E=3);let T=h.attributes.position.count*E,G=1;T>e.maxTextureSize&&(G=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const k=new Float32Array(T*G*4*_),te=new hc(k,T,G,_);te.type=yn,te.needsUpdate=!0;const P=E*4;for(let W=0;W<_;W++){const q=A[W],X=w[W],j=z[W],Y=T*G*4*W;for(let ne=0;ne<q.count;ne++){const ie=ne*P;x===!0&&(a.fromBufferAttribute(q,ne),k[Y+ie+0]=a.x,k[Y+ie+1]=a.y,k[Y+ie+2]=a.z,k[Y+ie+3]=0),y===!0&&(a.fromBufferAttribute(X,ne),k[Y+ie+4]=a.x,k[Y+ie+5]=a.y,k[Y+ie+6]=a.z,k[Y+ie+7]=0),L===!0&&(a.fromBufferAttribute(j,ne),k[Y+ie+8]=a.x,k[Y+ie+9]=a.y,k[Y+ie+10]=a.z,k[Y+ie+11]=j.itemSize===4?a.w:1)}}p={count:_,texture:te,size:new be(T,G)},r.set(h,p),h.addEventListener("dispose",B)}let u=0;for(let x=0;x<f.length;x++)u+=f[x];const M=h.morphTargetsRelative?1:1-u;d.getUniforms().setValue(s,"morphTargetBaseInfluence",M),d.getUniforms().setValue(s,"morphTargetInfluences",f),d.getUniforms().setValue(s,"morphTargetsTexture",p.texture,t),d.getUniforms().setValue(s,"morphTargetsTextureSize",p.size)}else{const g=f===void 0?0:f.length;let _=n[h.id];if(_===void 0||_.length!==g){_=[];for(let y=0;y<g;y++)_[y]=[y,0];n[h.id]=_}for(let y=0;y<g;y++){const L=_[y];L[0]=y,L[1]=f[y]}_.sort(tf);for(let y=0;y<8;y++)y<g&&_[y][1]?(o[y][0]=_[y][0],o[y][1]=_[y][1]):(o[y][0]=Number.MAX_SAFE_INTEGER,o[y][1]=0);o.sort(ef);const p=h.morphAttributes.position,u=h.morphAttributes.normal;let M=0;for(let y=0;y<8;y++){const L=o[y],A=L[0],w=L[1];A!==Number.MAX_SAFE_INTEGER&&w?(p&&h.getAttribute("morphTarget"+y)!==p[A]&&h.setAttribute("morphTarget"+y,p[A]),u&&h.getAttribute("morphNormal"+y)!==u[A]&&h.setAttribute("morphNormal"+y,u[A]),i[y]=w,M+=w):(p&&h.hasAttribute("morphTarget"+y)===!0&&h.deleteAttribute("morphTarget"+y),u&&h.hasAttribute("morphNormal"+y)===!0&&h.deleteAttribute("morphNormal"+y),i[y]=0)}const x=h.morphTargetsRelative?1:1-M;d.getUniforms().setValue(s,"morphTargetBaseInfluence",x),d.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:c}}function sf(s,e,t,n){let i=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,d=e.get(c,h);if(i.get(d)!==l&&(e.update(d),i.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==l&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;i.get(f)!==l&&(f.update(),i.set(f,l))}return d}function a(){i=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}class xc extends Bt{constructor(e,t,n,i,r,a,o,c,l,h){if(h=h!==void 0?h:ni,h!==ni&&h!==Oi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ni&&(n=Sn),n===void 0&&h===Oi&&(n=ti),super(null,i,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Lt,this.minFilter=c!==void 0?c:Lt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Ec=new Bt,Mc=new xc(1,1);Mc.compareFunction=ac;const Sc=new hc,yc=new Gl,bc=new gc,_o=[],vo=[],xo=new Float32Array(16),Eo=new Float32Array(9),Mo=new Float32Array(4);function zi(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=_o[i];if(r===void 0&&(r=new Float32Array(i),_o[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function ft(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function pt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Zs(s,e){let t=vo[e];t===void 0&&(t=new Int32Array(e),vo[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function rf(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function af(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;s.uniform2fv(this.addr,e),pt(t,e)}}function of(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ft(t,e))return;s.uniform3fv(this.addr,e),pt(t,e)}}function cf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;s.uniform4fv(this.addr,e),pt(t,e)}}function lf(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(ft(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),pt(t,e)}else{if(ft(t,n))return;Mo.set(n),s.uniformMatrix2fv(this.addr,!1,Mo),pt(t,n)}}function hf(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(ft(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),pt(t,e)}else{if(ft(t,n))return;Eo.set(n),s.uniformMatrix3fv(this.addr,!1,Eo),pt(t,n)}}function df(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(ft(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),pt(t,e)}else{if(ft(t,n))return;xo.set(n),s.uniformMatrix4fv(this.addr,!1,xo),pt(t,n)}}function uf(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function ff(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;s.uniform2iv(this.addr,e),pt(t,e)}}function pf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ft(t,e))return;s.uniform3iv(this.addr,e),pt(t,e)}}function mf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;s.uniform4iv(this.addr,e),pt(t,e)}}function gf(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function _f(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;s.uniform2uiv(this.addr,e),pt(t,e)}}function vf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ft(t,e))return;s.uniform3uiv(this.addr,e),pt(t,e)}}function xf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;s.uniform4uiv(this.addr,e),pt(t,e)}}function Ef(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);const r=this.type===s.SAMPLER_2D_SHADOW?Mc:Ec;t.setTexture2D(e||r,i)}function Mf(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||yc,i)}function Sf(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||bc,i)}function yf(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Sc,i)}function bf(s){switch(s){case 5126:return rf;case 35664:return af;case 35665:return of;case 35666:return cf;case 35674:return lf;case 35675:return hf;case 35676:return df;case 5124:case 35670:return uf;case 35667:case 35671:return ff;case 35668:case 35672:return pf;case 35669:case 35673:return mf;case 5125:return gf;case 36294:return _f;case 36295:return vf;case 36296:return xf;case 35678:case 36198:case 36298:case 36306:case 35682:return Ef;case 35679:case 36299:case 36307:return Mf;case 35680:case 36300:case 36308:case 36293:return Sf;case 36289:case 36303:case 36311:case 36292:return yf}}function Tf(s,e){s.uniform1fv(this.addr,e)}function Af(s,e){const t=zi(e,this.size,2);s.uniform2fv(this.addr,t)}function Cf(s,e){const t=zi(e,this.size,3);s.uniform3fv(this.addr,t)}function wf(s,e){const t=zi(e,this.size,4);s.uniform4fv(this.addr,t)}function Rf(s,e){const t=zi(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function If(s,e){const t=zi(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Lf(s,e){const t=zi(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Pf(s,e){s.uniform1iv(this.addr,e)}function Df(s,e){s.uniform2iv(this.addr,e)}function Uf(s,e){s.uniform3iv(this.addr,e)}function Nf(s,e){s.uniform4iv(this.addr,e)}function Of(s,e){s.uniform1uiv(this.addr,e)}function Ff(s,e){s.uniform2uiv(this.addr,e)}function Bf(s,e){s.uniform3uiv(this.addr,e)}function zf(s,e){s.uniform4uiv(this.addr,e)}function Hf(s,e,t){const n=this.cache,i=e.length,r=Zs(t,i);ft(n,r)||(s.uniform1iv(this.addr,r),pt(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Ec,r[a])}function Gf(s,e,t){const n=this.cache,i=e.length,r=Zs(t,i);ft(n,r)||(s.uniform1iv(this.addr,r),pt(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||yc,r[a])}function kf(s,e,t){const n=this.cache,i=e.length,r=Zs(t,i);ft(n,r)||(s.uniform1iv(this.addr,r),pt(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||bc,r[a])}function Vf(s,e,t){const n=this.cache,i=e.length,r=Zs(t,i);ft(n,r)||(s.uniform1iv(this.addr,r),pt(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Sc,r[a])}function Wf(s){switch(s){case 5126:return Tf;case 35664:return Af;case 35665:return Cf;case 35666:return wf;case 35674:return Rf;case 35675:return If;case 35676:return Lf;case 5124:case 35670:return Pf;case 35667:case 35671:return Df;case 35668:case 35672:return Uf;case 35669:case 35673:return Nf;case 5125:return Of;case 36294:return Ff;case 36295:return Bf;case 36296:return zf;case 35678:case 36198:case 36298:case 36306:case 35682:return Hf;case 35679:case 36299:case 36307:return Gf;case 35680:case 36300:case 36308:case 36293:return kf;case 36289:case 36303:case 36311:case 36292:return Vf}}class Xf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=bf(t.type)}}class jf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Wf(t.type)}}class qf{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const Ur=/(\w+)(\])?(\[|\.)?/g;function So(s,e){s.seq.push(e),s.map[e.id]=e}function Yf(s,e,t){const n=s.name,i=n.length;for(Ur.lastIndex=0;;){const r=Ur.exec(n),a=Ur.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){So(t,l===void 0?new Xf(o,s,e):new jf(o,s,e));break}else{let d=t.map[o];d===void 0&&(d=new qf(o),So(t,d)),t=d}}}class Os{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);Yf(r,a,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function yo(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const $f=37297;let Kf=0;function Zf(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function Jf(s){const e=Ke.getPrimaries(Ke.workingColorSpace),t=Ke.getPrimaries(s);let n;switch(e===t?n="":e===ks&&t===Gs?n="LinearDisplayP3ToLinearSRGB":e===Gs&&t===ks&&(n="LinearSRGBToLinearDisplayP3"),s){case mn:case Ys:return[n,"LinearTransferOETF"];case xt:case ea:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function bo(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+Zf(s.getShaderSource(e),a)}else return i}function Qf(s,e){const t=Jf(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function ep(s,e){let t;switch(e){case dl:t="Linear";break;case ul:t="Reinhard";break;case fl:t="OptimizedCineon";break;case $o:t="ACESFilmic";break;case ml:t="AgX";break;case pl:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function tp(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ii).join(`
`)}function np(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ii).join(`
`)}function ip(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function sp(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function Ii(s){return s!==""}function To(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ao(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const rp=/^[ \t]*#include +<([\w\d./]+)>/gm;function $r(s){return s.replace(rp,op)}const ap=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function op(s,e){let t=Oe[e];if(t===void 0){const n=ap.get(e);if(n!==void 0)t=Oe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return $r(t)}const cp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Co(s){return s.replace(cp,lp)}function lp(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function wo(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function hp(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===jo?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===qo?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===dn&&(e="SHADOWMAP_TYPE_VSM"),e}function dp(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ui:case Ni:e="ENVMAP_TYPE_CUBE";break;case qs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function up(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ni:e="ENVMAP_MODE_REFRACTION";break}return e}function fp(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Yo:e="ENVMAP_BLENDING_MULTIPLY";break;case ll:e="ENVMAP_BLENDING_MIX";break;case hl:e="ENVMAP_BLENDING_ADD";break}return e}function pp(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function mp(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=hp(t),l=dp(t),h=up(t),d=fp(t),f=pp(t),m=t.isWebGL2?"":tp(t),g=np(t),_=ip(r),p=i.createProgram();let u,M,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ii).join(`
`),u.length>0&&(u+=`
`),M=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ii).join(`
`),M.length>0&&(M+=`
`)):(u=[wo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ii).join(`
`),M=[m,wo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Tn?"#define TONE_MAPPING":"",t.toneMapping!==Tn?Oe.tonemapping_pars_fragment:"",t.toneMapping!==Tn?ep("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,Qf("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ii).join(`
`)),a=$r(a),a=To(a,t),a=Ao(a,t),o=$r(o),o=To(o,t),o=Ao(o,t),a=Co(a),o=Co(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,u=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,M=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Xa?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Xa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);const y=x+u+a,L=x+M+o,A=yo(i,i.VERTEX_SHADER,y),w=yo(i,i.FRAGMENT_SHADER,L);i.attachShader(p,A),i.attachShader(p,w),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p);function z(k){if(s.debug.checkShaderErrors){const te=i.getProgramInfoLog(p).trim(),P=i.getShaderInfoLog(A).trim(),B=i.getShaderInfoLog(w).trim();let W=!0,q=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if(W=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,p,A,w);else{const X=bo(i,A,"vertex"),j=bo(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Program Info Log: `+te+`
`+X+`
`+j)}else te!==""?console.warn("THREE.WebGLProgram: Program Info Log:",te):(P===""||B==="")&&(q=!1);q&&(k.diagnostics={runnable:W,programLog:te,vertexShader:{log:P,prefix:u},fragmentShader:{log:B,prefix:M}})}i.deleteShader(A),i.deleteShader(w),E=new Os(i,p),T=sp(i,p)}let E;this.getUniforms=function(){return E===void 0&&z(this),E};let T;this.getAttributes=function(){return T===void 0&&z(this),T};let G=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return G===!1&&(G=i.getProgramParameter(p,$f)),G},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Kf++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=A,this.fragmentShader=w,this}let gp=0;class _p{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new vp(e),t.set(e,n)),n}}class vp{constructor(e){this.id=gp++,this.code=e,this.usedTimes=0}}function xp(s,e,t,n,i,r,a){const o=new ta,c=new _p,l=[],h=i.isWebGL2,d=i.logarithmicDepthBuffer,f=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return E===0?"uv":`uv${E}`}function p(E,T,G,k,te){const P=k.fog,B=te.geometry,W=E.isMeshStandardMaterial?k.environment:null,q=(E.isMeshStandardMaterial?t:e).get(E.envMap||W),X=q&&q.mapping===qs?q.image.height:null,j=g[E.type];E.precision!==null&&(m=i.getMaxPrecision(E.precision),m!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));const Y=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ne=Y!==void 0?Y.length:0;let ie=0;B.morphAttributes.position!==void 0&&(ie=1),B.morphAttributes.normal!==void 0&&(ie=2),B.morphAttributes.color!==void 0&&(ie=3);let V,$,le,ve;if(j){const Ct=nn[j];V=Ct.vertexShader,$=Ct.fragmentShader}else V=E.vertexShader,$=E.fragmentShader,c.update(E),le=c.getVertexShaderID(E),ve=c.getFragmentShaderID(E);const _e=s.getRenderTarget(),Pe=te.isInstancedMesh===!0,Ue=te.isBatchedMesh===!0,Te=!!E.map,Xe=!!E.matcap,U=!!q,At=!!E.aoMap,Ee=!!E.lightMap,Ie=!!E.bumpMap,pe=!!E.normalMap,st=!!E.displacementMap,Be=!!E.emissiveMap,b=!!E.metalnessMap,v=!!E.roughnessMap,O=E.anisotropy>0,Q=E.clearcoat>0,J=E.iridescence>0,ee=E.sheen>0,me=E.transmission>0,ce=O&&!!E.anisotropyMap,de=Q&&!!E.clearcoatMap,ye=Q&&!!E.clearcoatNormalMap,ze=Q&&!!E.clearcoatRoughnessMap,Z=J&&!!E.iridescenceMap,Ye=J&&!!E.iridescenceThicknessMap,We=ee&&!!E.sheenColorMap,Re=ee&&!!E.sheenRoughnessMap,xe=!!E.specularMap,ue=!!E.specularColorMap,Ne=!!E.specularIntensityMap,qe=me&&!!E.transmissionMap,ot=me&&!!E.thicknessMap,Ge=!!E.gradientMap,se=!!E.alphaMap,I=E.alphaTest>0,ae=!!E.alphaHash,oe=!!E.extensions,Ae=!!B.attributes.uv1,Me=!!B.attributes.uv2,Je=!!B.attributes.uv3;let Qe=Tn;return E.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(Qe=s.toneMapping),{isWebGL2:h,shaderID:j,shaderType:E.type,shaderName:E.name,vertexShader:V,fragmentShader:$,defines:E.defines,customVertexShaderID:le,customFragmentShaderID:ve,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,batching:Ue,instancing:Pe,instancingColor:Pe&&te.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:_e===null?s.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:mn,map:Te,matcap:Xe,envMap:U,envMapMode:U&&q.mapping,envMapCubeUVHeight:X,aoMap:At,lightMap:Ee,bumpMap:Ie,normalMap:pe,displacementMap:f&&st,emissiveMap:Be,normalMapObjectSpace:pe&&E.normalMapType===Cl,normalMapTangentSpace:pe&&E.normalMapType===rc,metalnessMap:b,roughnessMap:v,anisotropy:O,anisotropyMap:ce,clearcoat:Q,clearcoatMap:de,clearcoatNormalMap:ye,clearcoatRoughnessMap:ze,iridescence:J,iridescenceMap:Z,iridescenceThicknessMap:Ye,sheen:ee,sheenColorMap:We,sheenRoughnessMap:Re,specularMap:xe,specularColorMap:ue,specularIntensityMap:Ne,transmission:me,transmissionMap:qe,thicknessMap:ot,gradientMap:Ge,opaque:E.transparent===!1&&E.blending===Li,alphaMap:se,alphaTest:I,alphaHash:ae,combine:E.combine,mapUv:Te&&_(E.map.channel),aoMapUv:At&&_(E.aoMap.channel),lightMapUv:Ee&&_(E.lightMap.channel),bumpMapUv:Ie&&_(E.bumpMap.channel),normalMapUv:pe&&_(E.normalMap.channel),displacementMapUv:st&&_(E.displacementMap.channel),emissiveMapUv:Be&&_(E.emissiveMap.channel),metalnessMapUv:b&&_(E.metalnessMap.channel),roughnessMapUv:v&&_(E.roughnessMap.channel),anisotropyMapUv:ce&&_(E.anisotropyMap.channel),clearcoatMapUv:de&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:ye&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ze&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Z&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:Ye&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:We&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:Re&&_(E.sheenRoughnessMap.channel),specularMapUv:xe&&_(E.specularMap.channel),specularColorMapUv:ue&&_(E.specularColorMap.channel),specularIntensityMapUv:Ne&&_(E.specularIntensityMap.channel),transmissionMapUv:qe&&_(E.transmissionMap.channel),thicknessMapUv:ot&&_(E.thicknessMap.channel),alphaMapUv:se&&_(E.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(pe||O),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,vertexUv1s:Ae,vertexUv2s:Me,vertexUv3s:Je,pointsUvs:te.isPoints===!0&&!!B.attributes.uv&&(Te||se),fog:!!P,useFog:E.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:te.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:ie,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:s.shadowMap.enabled&&G.length>0,shadowMapType:s.shadowMap.type,toneMapping:Qe,useLegacyLights:s._useLegacyLights,decodeVideoTexture:Te&&E.map.isVideoTexture===!0&&Ke.getTransfer(E.map.colorSpace)===tt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Vt,flipSided:E.side===Nt,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:oe&&E.extensions.derivatives===!0,extensionFragDepth:oe&&E.extensions.fragDepth===!0,extensionDrawBuffers:oe&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:oe&&E.extensions.shaderTextureLOD===!0,extensionClipCullDistance:oe&&E.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()}}function u(E){const T=[];if(E.shaderID?T.push(E.shaderID):(T.push(E.customVertexShaderID),T.push(E.customFragmentShaderID)),E.defines!==void 0)for(const G in E.defines)T.push(G),T.push(E.defines[G]);return E.isRawShaderMaterial===!1&&(M(T,E),x(T,E),T.push(s.outputColorSpace)),T.push(E.customProgramCacheKey),T.join()}function M(E,T){E.push(T.precision),E.push(T.outputColorSpace),E.push(T.envMapMode),E.push(T.envMapCubeUVHeight),E.push(T.mapUv),E.push(T.alphaMapUv),E.push(T.lightMapUv),E.push(T.aoMapUv),E.push(T.bumpMapUv),E.push(T.normalMapUv),E.push(T.displacementMapUv),E.push(T.emissiveMapUv),E.push(T.metalnessMapUv),E.push(T.roughnessMapUv),E.push(T.anisotropyMapUv),E.push(T.clearcoatMapUv),E.push(T.clearcoatNormalMapUv),E.push(T.clearcoatRoughnessMapUv),E.push(T.iridescenceMapUv),E.push(T.iridescenceThicknessMapUv),E.push(T.sheenColorMapUv),E.push(T.sheenRoughnessMapUv),E.push(T.specularMapUv),E.push(T.specularColorMapUv),E.push(T.specularIntensityMapUv),E.push(T.transmissionMapUv),E.push(T.thicknessMapUv),E.push(T.combine),E.push(T.fogExp2),E.push(T.sizeAttenuation),E.push(T.morphTargetsCount),E.push(T.morphAttributeCount),E.push(T.numDirLights),E.push(T.numPointLights),E.push(T.numSpotLights),E.push(T.numSpotLightMaps),E.push(T.numHemiLights),E.push(T.numRectAreaLights),E.push(T.numDirLightShadows),E.push(T.numPointLightShadows),E.push(T.numSpotLightShadows),E.push(T.numSpotLightShadowsWithMaps),E.push(T.numLightProbes),E.push(T.shadowMapType),E.push(T.toneMapping),E.push(T.numClippingPlanes),E.push(T.numClipIntersection),E.push(T.depthPacking)}function x(E,T){o.disableAll(),T.isWebGL2&&o.enable(0),T.supportsVertexTextures&&o.enable(1),T.instancing&&o.enable(2),T.instancingColor&&o.enable(3),T.matcap&&o.enable(4),T.envMap&&o.enable(5),T.normalMapObjectSpace&&o.enable(6),T.normalMapTangentSpace&&o.enable(7),T.clearcoat&&o.enable(8),T.iridescence&&o.enable(9),T.alphaTest&&o.enable(10),T.vertexColors&&o.enable(11),T.vertexAlphas&&o.enable(12),T.vertexUv1s&&o.enable(13),T.vertexUv2s&&o.enable(14),T.vertexUv3s&&o.enable(15),T.vertexTangents&&o.enable(16),T.anisotropy&&o.enable(17),T.alphaHash&&o.enable(18),T.batching&&o.enable(19),E.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.skinning&&o.enable(4),T.morphTargets&&o.enable(5),T.morphNormals&&o.enable(6),T.morphColors&&o.enable(7),T.premultipliedAlpha&&o.enable(8),T.shadowMapEnabled&&o.enable(9),T.useLegacyLights&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),E.push(o.mask)}function y(E){const T=g[E.type];let G;if(T){const k=nn[T];G=eh.clone(k.uniforms)}else G=E.uniforms;return G}function L(E,T){let G;for(let k=0,te=l.length;k<te;k++){const P=l[k];if(P.cacheKey===T){G=P,++G.usedTimes;break}}return G===void 0&&(G=new mp(s,T,E,r),l.push(G)),G}function A(E){if(--E.usedTimes===0){const T=l.indexOf(E);l[T]=l[l.length-1],l.pop(),E.destroy()}}function w(E){c.remove(E)}function z(){c.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:y,acquireProgram:L,releaseProgram:A,releaseShaderCache:w,programs:l,dispose:z}}function Ep(){let s=new WeakMap;function e(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function t(r){s.delete(r)}function n(r,a,o){s.get(r)[a]=o}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Mp(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Ro(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Io(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(d,f,m,g,_,p){let u=s[e];return u===void 0?(u={id:d.id,object:d,geometry:f,material:m,groupOrder:g,renderOrder:d.renderOrder,z:_,group:p},s[e]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=m,u.groupOrder=g,u.renderOrder=d.renderOrder,u.z=_,u.group=p),e++,u}function o(d,f,m,g,_,p){const u=a(d,f,m,g,_,p);m.transmission>0?n.push(u):m.transparent===!0?i.push(u):t.push(u)}function c(d,f,m,g,_,p){const u=a(d,f,m,g,_,p);m.transmission>0?n.unshift(u):m.transparent===!0?i.unshift(u):t.unshift(u)}function l(d,f){t.length>1&&t.sort(d||Mp),n.length>1&&n.sort(f||Ro),i.length>1&&i.sort(f||Ro)}function h(){for(let d=e,f=s.length;d<f;d++){const m=s[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:c,finish:h,sort:l}}function Sp(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new Io,s.set(n,[a])):i>=r.length?(a=new Io,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function yp(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new Fe};break;case"SpotLight":t={position:new R,direction:new R,color:new Fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new Fe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new Fe,groundColor:new Fe};break;case"RectAreaLight":t={color:new Fe,position:new R,halfWidth:new R,halfHeight:new R};break}return s[e.id]=t,t}}}function bp(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Tp=0;function Ap(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Cp(s,e){const t=new yp,n=bp(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new R);const r=new R,a=new it,o=new it;function c(h,d){let f=0,m=0,g=0;for(let k=0;k<9;k++)i.probe[k].set(0,0,0);let _=0,p=0,u=0,M=0,x=0,y=0,L=0,A=0,w=0,z=0,E=0;h.sort(Ap);const T=d===!0?Math.PI:1;for(let k=0,te=h.length;k<te;k++){const P=h[k],B=P.color,W=P.intensity,q=P.distance,X=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)f+=B.r*W*T,m+=B.g*W*T,g+=B.b*W*T;else if(P.isLightProbe){for(let j=0;j<9;j++)i.probe[j].addScaledVector(P.sh.coefficients[j],W);E++}else if(P.isDirectionalLight){const j=t.get(P);if(j.color.copy(P.color).multiplyScalar(P.intensity*T),P.castShadow){const Y=P.shadow,ne=n.get(P);ne.shadowBias=Y.bias,ne.shadowNormalBias=Y.normalBias,ne.shadowRadius=Y.radius,ne.shadowMapSize=Y.mapSize,i.directionalShadow[_]=ne,i.directionalShadowMap[_]=X,i.directionalShadowMatrix[_]=P.shadow.matrix,y++}i.directional[_]=j,_++}else if(P.isSpotLight){const j=t.get(P);j.position.setFromMatrixPosition(P.matrixWorld),j.color.copy(B).multiplyScalar(W*T),j.distance=q,j.coneCos=Math.cos(P.angle),j.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),j.decay=P.decay,i.spot[u]=j;const Y=P.shadow;if(P.map&&(i.spotLightMap[w]=P.map,w++,Y.updateMatrices(P),P.castShadow&&z++),i.spotLightMatrix[u]=Y.matrix,P.castShadow){const ne=n.get(P);ne.shadowBias=Y.bias,ne.shadowNormalBias=Y.normalBias,ne.shadowRadius=Y.radius,ne.shadowMapSize=Y.mapSize,i.spotShadow[u]=ne,i.spotShadowMap[u]=X,A++}u++}else if(P.isRectAreaLight){const j=t.get(P);j.color.copy(B).multiplyScalar(W),j.halfWidth.set(P.width*.5,0,0),j.halfHeight.set(0,P.height*.5,0),i.rectArea[M]=j,M++}else if(P.isPointLight){const j=t.get(P);if(j.color.copy(P.color).multiplyScalar(P.intensity*T),j.distance=P.distance,j.decay=P.decay,P.castShadow){const Y=P.shadow,ne=n.get(P);ne.shadowBias=Y.bias,ne.shadowNormalBias=Y.normalBias,ne.shadowRadius=Y.radius,ne.shadowMapSize=Y.mapSize,ne.shadowCameraNear=Y.camera.near,ne.shadowCameraFar=Y.camera.far,i.pointShadow[p]=ne,i.pointShadowMap[p]=X,i.pointShadowMatrix[p]=P.shadow.matrix,L++}i.point[p]=j,p++}else if(P.isHemisphereLight){const j=t.get(P);j.skyColor.copy(P.color).multiplyScalar(W*T),j.groundColor.copy(P.groundColor).multiplyScalar(W*T),i.hemi[x]=j,x++}}M>0&&(e.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=re.LTC_FLOAT_1,i.rectAreaLTC2=re.LTC_FLOAT_2):(i.rectAreaLTC1=re.LTC_HALF_1,i.rectAreaLTC2=re.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=re.LTC_FLOAT_1,i.rectAreaLTC2=re.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=re.LTC_HALF_1,i.rectAreaLTC2=re.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=m,i.ambient[2]=g;const G=i.hash;(G.directionalLength!==_||G.pointLength!==p||G.spotLength!==u||G.rectAreaLength!==M||G.hemiLength!==x||G.numDirectionalShadows!==y||G.numPointShadows!==L||G.numSpotShadows!==A||G.numSpotMaps!==w||G.numLightProbes!==E)&&(i.directional.length=_,i.spot.length=u,i.rectArea.length=M,i.point.length=p,i.hemi.length=x,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=L,i.pointShadowMap.length=L,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=L,i.spotLightMatrix.length=A+w-z,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=z,i.numLightProbes=E,G.directionalLength=_,G.pointLength=p,G.spotLength=u,G.rectAreaLength=M,G.hemiLength=x,G.numDirectionalShadows=y,G.numPointShadows=L,G.numSpotShadows=A,G.numSpotMaps=w,G.numLightProbes=E,i.version=Tp++)}function l(h,d){let f=0,m=0,g=0,_=0,p=0;const u=d.matrixWorldInverse;for(let M=0,x=h.length;M<x;M++){const y=h[M];if(y.isDirectionalLight){const L=i.directional[f];L.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),L.direction.sub(r),L.direction.transformDirection(u),f++}else if(y.isSpotLight){const L=i.spot[g];L.position.setFromMatrixPosition(y.matrixWorld),L.position.applyMatrix4(u),L.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),L.direction.sub(r),L.direction.transformDirection(u),g++}else if(y.isRectAreaLight){const L=i.rectArea[_];L.position.setFromMatrixPosition(y.matrixWorld),L.position.applyMatrix4(u),o.identity(),a.copy(y.matrixWorld),a.premultiply(u),o.extractRotation(a),L.halfWidth.set(y.width*.5,0,0),L.halfHeight.set(0,y.height*.5,0),L.halfWidth.applyMatrix4(o),L.halfHeight.applyMatrix4(o),_++}else if(y.isPointLight){const L=i.point[m];L.position.setFromMatrixPosition(y.matrixWorld),L.position.applyMatrix4(u),m++}else if(y.isHemisphereLight){const L=i.hemi[p];L.direction.setFromMatrixPosition(y.matrixWorld),L.direction.transformDirection(u),p++}}}return{setup:c,setupView:l,state:i}}function Lo(s,e){const t=new Cp(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function a(d){n.push(d)}function o(d){i.push(d)}function c(d){t.setup(n,d)}function l(d){t.setupView(n,d)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function wp(s,e){let t=new WeakMap;function n(r,a=0){const o=t.get(r);let c;return o===void 0?(c=new Lo(s,e),t.set(r,[c])):a>=o.length?(c=new Lo(s,e),o.push(c)):c=o[a],c}function i(){t=new WeakMap}return{get:n,dispose:i}}class Rp extends Ln{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Tl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ip extends Ln{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Lp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Pp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Dp(s,e,t){let n=new na;const i=new be,r=new be,a=new nt,o=new Rp({depthPacking:Al}),c=new Ip,l={},h=t.maxTextureSize,d={[Rn]:Nt,[Nt]:Rn,[Vt]:Vt},f=new In({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new be},radius:{value:4}},vertexShader:Lp,fragmentShader:Pp}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new St;g.setAttribute("position",new Yt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ce(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=jo;let u=this.type;this.render=function(A,w,z){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;const E=s.getRenderTarget(),T=s.getActiveCubeFace(),G=s.getActiveMipmapLevel(),k=s.state;k.setBlending(bn),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const te=u!==dn&&this.type===dn,P=u===dn&&this.type!==dn;for(let B=0,W=A.length;B<W;B++){const q=A[B],X=q.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;i.copy(X.mapSize);const j=X.getFrameExtents();if(i.multiply(j),r.copy(X.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/j.x),i.x=r.x*j.x,X.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/j.y),i.y=r.y*j.y,X.mapSize.y=r.y)),X.map===null||te===!0||P===!0){const ne=this.type!==dn?{minFilter:Lt,magFilter:Lt}:{};X.map!==null&&X.map.dispose(),X.map=new si(i.x,i.y,ne),X.map.texture.name=q.name+".shadowMap",X.camera.updateProjectionMatrix()}s.setRenderTarget(X.map),s.clear();const Y=X.getViewportCount();for(let ne=0;ne<Y;ne++){const ie=X.getViewport(ne);a.set(r.x*ie.x,r.y*ie.y,r.x*ie.z,r.y*ie.w),k.viewport(a),X.updateMatrices(q,ne),n=X.getFrustum(),y(w,z,X.camera,q,this.type)}X.isPointLightShadow!==!0&&this.type===dn&&M(X,z),X.needsUpdate=!1}u=this.type,p.needsUpdate=!1,s.setRenderTarget(E,T,G)};function M(A,w){const z=e.update(_);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new si(i.x,i.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(w,null,z,f,_,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(w,null,z,m,_,null)}function x(A,w,z,E){let T=null;const G=z.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(G!==void 0)T=G;else if(T=z.isPointLight===!0?c:o,s.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const k=T.uuid,te=w.uuid;let P=l[k];P===void 0&&(P={},l[k]=P);let B=P[te];B===void 0&&(B=T.clone(),P[te]=B,w.addEventListener("dispose",L)),T=B}if(T.visible=w.visible,T.wireframe=w.wireframe,E===dn?T.side=w.shadowSide!==null?w.shadowSide:w.side:T.side=w.shadowSide!==null?w.shadowSide:d[w.side],T.alphaMap=w.alphaMap,T.alphaTest=w.alphaTest,T.map=w.map,T.clipShadows=w.clipShadows,T.clippingPlanes=w.clippingPlanes,T.clipIntersection=w.clipIntersection,T.displacementMap=w.displacementMap,T.displacementScale=w.displacementScale,T.displacementBias=w.displacementBias,T.wireframeLinewidth=w.wireframeLinewidth,T.linewidth=w.linewidth,z.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const k=s.properties.get(T);k.light=z}return T}function y(A,w,z,E,T){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&T===dn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,A.matrixWorld);const te=e.update(A),P=A.material;if(Array.isArray(P)){const B=te.groups;for(let W=0,q=B.length;W<q;W++){const X=B[W],j=P[X.materialIndex];if(j&&j.visible){const Y=x(A,j,E,T);A.onBeforeShadow(s,A,w,z,te,Y,X),s.renderBufferDirect(z,null,te,Y,A,X),A.onAfterShadow(s,A,w,z,te,Y,X)}}}else if(P.visible){const B=x(A,P,E,T);A.onBeforeShadow(s,A,w,z,te,B,null),s.renderBufferDirect(z,null,te,B,A,null),A.onAfterShadow(s,A,w,z,te,B,null)}}const k=A.children;for(let te=0,P=k.length;te<P;te++)y(k[te],w,z,E,T)}function L(A){A.target.removeEventListener("dispose",L);for(const z in l){const E=l[z],T=A.target.uuid;T in E&&(E[T].dispose(),delete E[T])}}}function Up(s,e,t){const n=t.isWebGL2;function i(){let I=!1;const ae=new nt;let oe=null;const Ae=new nt(0,0,0,0);return{setMask:function(Me){oe!==Me&&!I&&(s.colorMask(Me,Me,Me,Me),oe=Me)},setLocked:function(Me){I=Me},setClear:function(Me,Je,Qe,mt,Ct){Ct===!0&&(Me*=mt,Je*=mt,Qe*=mt),ae.set(Me,Je,Qe,mt),Ae.equals(ae)===!1&&(s.clearColor(Me,Je,Qe,mt),Ae.copy(ae))},reset:function(){I=!1,oe=null,Ae.set(-1,0,0,0)}}}function r(){let I=!1,ae=null,oe=null,Ae=null;return{setTest:function(Me){Me?Ue(s.DEPTH_TEST):Te(s.DEPTH_TEST)},setMask:function(Me){ae!==Me&&!I&&(s.depthMask(Me),ae=Me)},setFunc:function(Me){if(oe!==Me){switch(Me){case nl:s.depthFunc(s.NEVER);break;case il:s.depthFunc(s.ALWAYS);break;case sl:s.depthFunc(s.LESS);break;case zs:s.depthFunc(s.LEQUAL);break;case rl:s.depthFunc(s.EQUAL);break;case al:s.depthFunc(s.GEQUAL);break;case ol:s.depthFunc(s.GREATER);break;case cl:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}oe=Me}},setLocked:function(Me){I=Me},setClear:function(Me){Ae!==Me&&(s.clearDepth(Me),Ae=Me)},reset:function(){I=!1,ae=null,oe=null,Ae=null}}}function a(){let I=!1,ae=null,oe=null,Ae=null,Me=null,Je=null,Qe=null,mt=null,Ct=null;return{setTest:function(et){I||(et?Ue(s.STENCIL_TEST):Te(s.STENCIL_TEST))},setMask:function(et){ae!==et&&!I&&(s.stencilMask(et),ae=et)},setFunc:function(et,wt,tn){(oe!==et||Ae!==wt||Me!==tn)&&(s.stencilFunc(et,wt,tn),oe=et,Ae=wt,Me=tn)},setOp:function(et,wt,tn){(Je!==et||Qe!==wt||mt!==tn)&&(s.stencilOp(et,wt,tn),Je=et,Qe=wt,mt=tn)},setLocked:function(et){I=et},setClear:function(et){Ct!==et&&(s.clearStencil(et),Ct=et)},reset:function(){I=!1,ae=null,oe=null,Ae=null,Me=null,Je=null,Qe=null,mt=null,Ct=null}}}const o=new i,c=new r,l=new a,h=new WeakMap,d=new WeakMap;let f={},m={},g=new WeakMap,_=[],p=null,u=!1,M=null,x=null,y=null,L=null,A=null,w=null,z=null,E=new Fe(0,0,0),T=0,G=!1,k=null,te=null,P=null,B=null,W=null;const q=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,j=0;const Y=s.getParameter(s.VERSION);Y.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(Y)[1]),X=j>=1):Y.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),X=j>=2);let ne=null,ie={};const V=s.getParameter(s.SCISSOR_BOX),$=s.getParameter(s.VIEWPORT),le=new nt().fromArray(V),ve=new nt().fromArray($);function _e(I,ae,oe,Ae){const Me=new Uint8Array(4),Je=s.createTexture();s.bindTexture(I,Je),s.texParameteri(I,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(I,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Qe=0;Qe<oe;Qe++)n&&(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)?s.texImage3D(ae,0,s.RGBA,1,1,Ae,0,s.RGBA,s.UNSIGNED_BYTE,Me):s.texImage2D(ae+Qe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Me);return Je}const Pe={};Pe[s.TEXTURE_2D]=_e(s.TEXTURE_2D,s.TEXTURE_2D,1),Pe[s.TEXTURE_CUBE_MAP]=_e(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Pe[s.TEXTURE_2D_ARRAY]=_e(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Pe[s.TEXTURE_3D]=_e(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Ue(s.DEPTH_TEST),c.setFunc(zs),Be(!1),b(ua),Ue(s.CULL_FACE),pe(bn);function Ue(I){f[I]!==!0&&(s.enable(I),f[I]=!0)}function Te(I){f[I]!==!1&&(s.disable(I),f[I]=!1)}function Xe(I,ae){return m[I]!==ae?(s.bindFramebuffer(I,ae),m[I]=ae,n&&(I===s.DRAW_FRAMEBUFFER&&(m[s.FRAMEBUFFER]=ae),I===s.FRAMEBUFFER&&(m[s.DRAW_FRAMEBUFFER]=ae)),!0):!1}function U(I,ae){let oe=_,Ae=!1;if(I)if(oe=g.get(ae),oe===void 0&&(oe=[],g.set(ae,oe)),I.isWebGLMultipleRenderTargets){const Me=I.texture;if(oe.length!==Me.length||oe[0]!==s.COLOR_ATTACHMENT0){for(let Je=0,Qe=Me.length;Je<Qe;Je++)oe[Je]=s.COLOR_ATTACHMENT0+Je;oe.length=Me.length,Ae=!0}}else oe[0]!==s.COLOR_ATTACHMENT0&&(oe[0]=s.COLOR_ATTACHMENT0,Ae=!0);else oe[0]!==s.BACK&&(oe[0]=s.BACK,Ae=!0);Ae&&(t.isWebGL2?s.drawBuffers(oe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(oe))}function At(I){return p!==I?(s.useProgram(I),p=I,!0):!1}const Ee={[Hn]:s.FUNC_ADD,[Gc]:s.FUNC_SUBTRACT,[kc]:s.FUNC_REVERSE_SUBTRACT};if(n)Ee[ga]=s.MIN,Ee[_a]=s.MAX;else{const I=e.get("EXT_blend_minmax");I!==null&&(Ee[ga]=I.MIN_EXT,Ee[_a]=I.MAX_EXT)}const Ie={[Vc]:s.ZERO,[Wc]:s.ONE,[Xc]:s.SRC_COLOR,[Hr]:s.SRC_ALPHA,[Zc]:s.SRC_ALPHA_SATURATE,[$c]:s.DST_COLOR,[qc]:s.DST_ALPHA,[jc]:s.ONE_MINUS_SRC_COLOR,[Gr]:s.ONE_MINUS_SRC_ALPHA,[Kc]:s.ONE_MINUS_DST_COLOR,[Yc]:s.ONE_MINUS_DST_ALPHA,[Jc]:s.CONSTANT_COLOR,[Qc]:s.ONE_MINUS_CONSTANT_COLOR,[el]:s.CONSTANT_ALPHA,[tl]:s.ONE_MINUS_CONSTANT_ALPHA};function pe(I,ae,oe,Ae,Me,Je,Qe,mt,Ct,et){if(I===bn){u===!0&&(Te(s.BLEND),u=!1);return}if(u===!1&&(Ue(s.BLEND),u=!0),I!==Hc){if(I!==M||et!==G){if((x!==Hn||A!==Hn)&&(s.blendEquation(s.FUNC_ADD),x=Hn,A=Hn),et)switch(I){case Li:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case fa:s.blendFunc(s.ONE,s.ONE);break;case pa:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ma:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Li:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case fa:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case pa:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ma:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}y=null,L=null,w=null,z=null,E.set(0,0,0),T=0,M=I,G=et}return}Me=Me||ae,Je=Je||oe,Qe=Qe||Ae,(ae!==x||Me!==A)&&(s.blendEquationSeparate(Ee[ae],Ee[Me]),x=ae,A=Me),(oe!==y||Ae!==L||Je!==w||Qe!==z)&&(s.blendFuncSeparate(Ie[oe],Ie[Ae],Ie[Je],Ie[Qe]),y=oe,L=Ae,w=Je,z=Qe),(mt.equals(E)===!1||Ct!==T)&&(s.blendColor(mt.r,mt.g,mt.b,Ct),E.copy(mt),T=Ct),M=I,G=!1}function st(I,ae){I.side===Vt?Te(s.CULL_FACE):Ue(s.CULL_FACE);let oe=I.side===Nt;ae&&(oe=!oe),Be(oe),I.blending===Li&&I.transparent===!1?pe(bn):pe(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),c.setFunc(I.depthFunc),c.setTest(I.depthTest),c.setMask(I.depthWrite),o.setMask(I.colorWrite);const Ae=I.stencilWrite;l.setTest(Ae),Ae&&(l.setMask(I.stencilWriteMask),l.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),l.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),O(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Ue(s.SAMPLE_ALPHA_TO_COVERAGE):Te(s.SAMPLE_ALPHA_TO_COVERAGE)}function Be(I){k!==I&&(I?s.frontFace(s.CW):s.frontFace(s.CCW),k=I)}function b(I){I!==Bc?(Ue(s.CULL_FACE),I!==te&&(I===ua?s.cullFace(s.BACK):I===zc?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Te(s.CULL_FACE),te=I}function v(I){I!==P&&(X&&s.lineWidth(I),P=I)}function O(I,ae,oe){I?(Ue(s.POLYGON_OFFSET_FILL),(B!==ae||W!==oe)&&(s.polygonOffset(ae,oe),B=ae,W=oe)):Te(s.POLYGON_OFFSET_FILL)}function Q(I){I?Ue(s.SCISSOR_TEST):Te(s.SCISSOR_TEST)}function J(I){I===void 0&&(I=s.TEXTURE0+q-1),ne!==I&&(s.activeTexture(I),ne=I)}function ee(I,ae,oe){oe===void 0&&(ne===null?oe=s.TEXTURE0+q-1:oe=ne);let Ae=ie[oe];Ae===void 0&&(Ae={type:void 0,texture:void 0},ie[oe]=Ae),(Ae.type!==I||Ae.texture!==ae)&&(ne!==oe&&(s.activeTexture(oe),ne=oe),s.bindTexture(I,ae||Pe[I]),Ae.type=I,Ae.texture=ae)}function me(){const I=ie[ne];I!==void 0&&I.type!==void 0&&(s.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function ce(){try{s.compressedTexImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function de(){try{s.compressedTexImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ye(){try{s.texSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ze(){try{s.texSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Z(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ye(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function We(){try{s.texStorage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Re(){try{s.texStorage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function xe(){try{s.texImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ue(){try{s.texImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ne(I){le.equals(I)===!1&&(s.scissor(I.x,I.y,I.z,I.w),le.copy(I))}function qe(I){ve.equals(I)===!1&&(s.viewport(I.x,I.y,I.z,I.w),ve.copy(I))}function ot(I,ae){let oe=d.get(ae);oe===void 0&&(oe=new WeakMap,d.set(ae,oe));let Ae=oe.get(I);Ae===void 0&&(Ae=s.getUniformBlockIndex(ae,I.name),oe.set(I,Ae))}function Ge(I,ae){const Ae=d.get(ae).get(I);h.get(ae)!==Ae&&(s.uniformBlockBinding(ae,Ae,I.__bindingPointIndex),h.set(ae,Ae))}function se(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),f={},ne=null,ie={},m={},g=new WeakMap,_=[],p=null,u=!1,M=null,x=null,y=null,L=null,A=null,w=null,z=null,E=new Fe(0,0,0),T=0,G=!1,k=null,te=null,P=null,B=null,W=null,le.set(0,0,s.canvas.width,s.canvas.height),ve.set(0,0,s.canvas.width,s.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:Ue,disable:Te,bindFramebuffer:Xe,drawBuffers:U,useProgram:At,setBlending:pe,setMaterial:st,setFlipSided:Be,setCullFace:b,setLineWidth:v,setPolygonOffset:O,setScissorTest:Q,activeTexture:J,bindTexture:ee,unbindTexture:me,compressedTexImage2D:ce,compressedTexImage3D:de,texImage2D:xe,texImage3D:ue,updateUBOMapping:ot,uniformBlockBinding:Ge,texStorage2D:We,texStorage3D:Re,texSubImage2D:ye,texSubImage3D:ze,compressedTexSubImage2D:Z,compressedTexSubImage3D:Ye,scissor:Ne,viewport:qe,reset:se}}function Np(s,e,t,n,i,r,a){const o=i.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let d;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,v){return m?new OffscreenCanvas(b,v):Ws("canvas")}function _(b,v,O,Q){let J=1;if((b.width>Q||b.height>Q)&&(J=Q/Math.max(b.width,b.height)),J<1||v===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){const ee=v?Yr:Math.floor,me=ee(J*b.width),ce=ee(J*b.height);d===void 0&&(d=g(me,ce));const de=O?g(me,ce):d;return de.width=me,de.height=ce,de.getContext("2d").drawImage(b,0,0,me,ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+me+"x"+ce+")."),de}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function p(b){return ja(b.width)&&ja(b.height)}function u(b){return o?!1:b.wrapS!==Jt||b.wrapT!==Jt||b.minFilter!==Lt&&b.minFilter!==Pt}function M(b,v){return b.generateMipmaps&&v&&b.minFilter!==Lt&&b.minFilter!==Pt}function x(b){s.generateMipmap(b)}function y(b,v,O,Q,J=!1){if(o===!1)return v;if(b!==null){if(s[b]!==void 0)return s[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let ee=v;if(v===s.RED&&(O===s.FLOAT&&(ee=s.R32F),O===s.HALF_FLOAT&&(ee=s.R16F),O===s.UNSIGNED_BYTE&&(ee=s.R8)),v===s.RED_INTEGER&&(O===s.UNSIGNED_BYTE&&(ee=s.R8UI),O===s.UNSIGNED_SHORT&&(ee=s.R16UI),O===s.UNSIGNED_INT&&(ee=s.R32UI),O===s.BYTE&&(ee=s.R8I),O===s.SHORT&&(ee=s.R16I),O===s.INT&&(ee=s.R32I)),v===s.RG&&(O===s.FLOAT&&(ee=s.RG32F),O===s.HALF_FLOAT&&(ee=s.RG16F),O===s.UNSIGNED_BYTE&&(ee=s.RG8)),v===s.RGBA){const me=J?Hs:Ke.getTransfer(Q);O===s.FLOAT&&(ee=s.RGBA32F),O===s.HALF_FLOAT&&(ee=s.RGBA16F),O===s.UNSIGNED_BYTE&&(ee=me===tt?s.SRGB8_ALPHA8:s.RGBA8),O===s.UNSIGNED_SHORT_4_4_4_4&&(ee=s.RGBA4),O===s.UNSIGNED_SHORT_5_5_5_1&&(ee=s.RGB5_A1)}return(ee===s.R16F||ee===s.R32F||ee===s.RG16F||ee===s.RG32F||ee===s.RGBA16F||ee===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function L(b,v,O){return M(b,O)===!0||b.isFramebufferTexture&&b.minFilter!==Lt&&b.minFilter!==Pt?Math.log2(Math.max(v.width,v.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?v.mipmaps.length:1}function A(b){return b===Lt||b===va||b===rr?s.NEAREST:s.LINEAR}function w(b){const v=b.target;v.removeEventListener("dispose",w),E(v),v.isVideoTexture&&h.delete(v)}function z(b){const v=b.target;v.removeEventListener("dispose",z),G(v)}function E(b){const v=n.get(b);if(v.__webglInit===void 0)return;const O=b.source,Q=f.get(O);if(Q){const J=Q[v.__cacheKey];J.usedTimes--,J.usedTimes===0&&T(b),Object.keys(Q).length===0&&f.delete(O)}n.remove(b)}function T(b){const v=n.get(b);s.deleteTexture(v.__webglTexture);const O=b.source,Q=f.get(O);delete Q[v.__cacheKey],a.memory.textures--}function G(b){const v=b.texture,O=n.get(b),Q=n.get(v);if(Q.__webglTexture!==void 0&&(s.deleteTexture(Q.__webglTexture),a.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(O.__webglFramebuffer[J]))for(let ee=0;ee<O.__webglFramebuffer[J].length;ee++)s.deleteFramebuffer(O.__webglFramebuffer[J][ee]);else s.deleteFramebuffer(O.__webglFramebuffer[J]);O.__webglDepthbuffer&&s.deleteRenderbuffer(O.__webglDepthbuffer[J])}else{if(Array.isArray(O.__webglFramebuffer))for(let J=0;J<O.__webglFramebuffer.length;J++)s.deleteFramebuffer(O.__webglFramebuffer[J]);else s.deleteFramebuffer(O.__webglFramebuffer);if(O.__webglDepthbuffer&&s.deleteRenderbuffer(O.__webglDepthbuffer),O.__webglMultisampledFramebuffer&&s.deleteFramebuffer(O.__webglMultisampledFramebuffer),O.__webglColorRenderbuffer)for(let J=0;J<O.__webglColorRenderbuffer.length;J++)O.__webglColorRenderbuffer[J]&&s.deleteRenderbuffer(O.__webglColorRenderbuffer[J]);O.__webglDepthRenderbuffer&&s.deleteRenderbuffer(O.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let J=0,ee=v.length;J<ee;J++){const me=n.get(v[J]);me.__webglTexture&&(s.deleteTexture(me.__webglTexture),a.memory.textures--),n.remove(v[J])}n.remove(v),n.remove(b)}let k=0;function te(){k=0}function P(){const b=k;return b>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+i.maxTextures),k+=1,b}function B(b){const v=[];return v.push(b.wrapS),v.push(b.wrapT),v.push(b.wrapR||0),v.push(b.magFilter),v.push(b.minFilter),v.push(b.anisotropy),v.push(b.internalFormat),v.push(b.format),v.push(b.type),v.push(b.generateMipmaps),v.push(b.premultiplyAlpha),v.push(b.flipY),v.push(b.unpackAlignment),v.push(b.colorSpace),v.join()}function W(b,v){const O=n.get(b);if(b.isVideoTexture&&st(b),b.isRenderTargetTexture===!1&&b.version>0&&O.__version!==b.version){const Q=b.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{le(O,b,v);return}}t.bindTexture(s.TEXTURE_2D,O.__webglTexture,s.TEXTURE0+v)}function q(b,v){const O=n.get(b);if(b.version>0&&O.__version!==b.version){le(O,b,v);return}t.bindTexture(s.TEXTURE_2D_ARRAY,O.__webglTexture,s.TEXTURE0+v)}function X(b,v){const O=n.get(b);if(b.version>0&&O.__version!==b.version){le(O,b,v);return}t.bindTexture(s.TEXTURE_3D,O.__webglTexture,s.TEXTURE0+v)}function j(b,v){const O=n.get(b);if(b.version>0&&O.__version!==b.version){ve(O,b,v);return}t.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+v)}const Y={[ei]:s.REPEAT,[Jt]:s.CLAMP_TO_EDGE,[Wr]:s.MIRRORED_REPEAT},ne={[Lt]:s.NEAREST,[va]:s.NEAREST_MIPMAP_NEAREST,[rr]:s.NEAREST_MIPMAP_LINEAR,[Pt]:s.LINEAR,[gl]:s.LINEAR_MIPMAP_NEAREST,[Zi]:s.LINEAR_MIPMAP_LINEAR},ie={[wl]:s.NEVER,[Ul]:s.ALWAYS,[Rl]:s.LESS,[ac]:s.LEQUAL,[Il]:s.EQUAL,[Dl]:s.GEQUAL,[Ll]:s.GREATER,[Pl]:s.NOTEQUAL};function V(b,v,O){if(O?(s.texParameteri(b,s.TEXTURE_WRAP_S,Y[v.wrapS]),s.texParameteri(b,s.TEXTURE_WRAP_T,Y[v.wrapT]),(b===s.TEXTURE_3D||b===s.TEXTURE_2D_ARRAY)&&s.texParameteri(b,s.TEXTURE_WRAP_R,Y[v.wrapR]),s.texParameteri(b,s.TEXTURE_MAG_FILTER,ne[v.magFilter]),s.texParameteri(b,s.TEXTURE_MIN_FILTER,ne[v.minFilter])):(s.texParameteri(b,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(b,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(b===s.TEXTURE_3D||b===s.TEXTURE_2D_ARRAY)&&s.texParameteri(b,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(v.wrapS!==Jt||v.wrapT!==Jt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(b,s.TEXTURE_MAG_FILTER,A(v.magFilter)),s.texParameteri(b,s.TEXTURE_MIN_FILTER,A(v.minFilter)),v.minFilter!==Lt&&v.minFilter!==Pt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),v.compareFunction&&(s.texParameteri(b,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(b,s.TEXTURE_COMPARE_FUNC,ie[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const Q=e.get("EXT_texture_filter_anisotropic");if(v.magFilter===Lt||v.minFilter!==rr&&v.minFilter!==Zi||v.type===yn&&e.has("OES_texture_float_linear")===!1||o===!1&&v.type===Ji&&e.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||n.get(v).__currentAnisotropy)&&(s.texParameterf(b,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy)}}function $(b,v){let O=!1;b.__webglInit===void 0&&(b.__webglInit=!0,v.addEventListener("dispose",w));const Q=v.source;let J=f.get(Q);J===void 0&&(J={},f.set(Q,J));const ee=B(v);if(ee!==b.__cacheKey){J[ee]===void 0&&(J[ee]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,O=!0),J[ee].usedTimes++;const me=J[b.__cacheKey];me!==void 0&&(J[b.__cacheKey].usedTimes--,me.usedTimes===0&&T(v)),b.__cacheKey=ee,b.__webglTexture=J[ee].texture}return O}function le(b,v,O){let Q=s.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(Q=s.TEXTURE_2D_ARRAY),v.isData3DTexture&&(Q=s.TEXTURE_3D);const J=$(b,v),ee=v.source;t.bindTexture(Q,b.__webglTexture,s.TEXTURE0+O);const me=n.get(ee);if(ee.version!==me.__version||J===!0){t.activeTexture(s.TEXTURE0+O);const ce=Ke.getPrimaries(Ke.workingColorSpace),de=v.colorSpace===qt?null:Ke.getPrimaries(v.colorSpace),ye=v.colorSpace===qt||ce===de?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const ze=u(v)&&p(v.image)===!1;let Z=_(v.image,ze,!1,i.maxTextureSize);Z=Be(v,Z);const Ye=p(Z)||o,We=r.convert(v.format,v.colorSpace);let Re=r.convert(v.type),xe=y(v.internalFormat,We,Re,v.colorSpace,v.isVideoTexture);V(Q,v,Ye);let ue;const Ne=v.mipmaps,qe=o&&v.isVideoTexture!==!0&&xe!==ic,ot=me.__version===void 0||J===!0,Ge=L(v,Z,Ye);if(v.isDepthTexture)xe=s.DEPTH_COMPONENT,o?v.type===yn?xe=s.DEPTH_COMPONENT32F:v.type===Sn?xe=s.DEPTH_COMPONENT24:v.type===ti?xe=s.DEPTH24_STENCIL8:xe=s.DEPTH_COMPONENT16:v.type===yn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===ni&&xe===s.DEPTH_COMPONENT&&v.type!==Qr&&v.type!==Sn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=Sn,Re=r.convert(v.type)),v.format===Oi&&xe===s.DEPTH_COMPONENT&&(xe=s.DEPTH_STENCIL,v.type!==ti&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=ti,Re=r.convert(v.type))),ot&&(qe?t.texStorage2D(s.TEXTURE_2D,1,xe,Z.width,Z.height):t.texImage2D(s.TEXTURE_2D,0,xe,Z.width,Z.height,0,We,Re,null));else if(v.isDataTexture)if(Ne.length>0&&Ye){qe&&ot&&t.texStorage2D(s.TEXTURE_2D,Ge,xe,Ne[0].width,Ne[0].height);for(let se=0,I=Ne.length;se<I;se++)ue=Ne[se],qe?t.texSubImage2D(s.TEXTURE_2D,se,0,0,ue.width,ue.height,We,Re,ue.data):t.texImage2D(s.TEXTURE_2D,se,xe,ue.width,ue.height,0,We,Re,ue.data);v.generateMipmaps=!1}else qe?(ot&&t.texStorage2D(s.TEXTURE_2D,Ge,xe,Z.width,Z.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,Z.width,Z.height,We,Re,Z.data)):t.texImage2D(s.TEXTURE_2D,0,xe,Z.width,Z.height,0,We,Re,Z.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){qe&&ot&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ge,xe,Ne[0].width,Ne[0].height,Z.depth);for(let se=0,I=Ne.length;se<I;se++)ue=Ne[se],v.format!==Qt?We!==null?qe?t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,se,0,0,0,ue.width,ue.height,Z.depth,We,ue.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,se,xe,ue.width,ue.height,Z.depth,0,ue.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?t.texSubImage3D(s.TEXTURE_2D_ARRAY,se,0,0,0,ue.width,ue.height,Z.depth,We,Re,ue.data):t.texImage3D(s.TEXTURE_2D_ARRAY,se,xe,ue.width,ue.height,Z.depth,0,We,Re,ue.data)}else{qe&&ot&&t.texStorage2D(s.TEXTURE_2D,Ge,xe,Ne[0].width,Ne[0].height);for(let se=0,I=Ne.length;se<I;se++)ue=Ne[se],v.format!==Qt?We!==null?qe?t.compressedTexSubImage2D(s.TEXTURE_2D,se,0,0,ue.width,ue.height,We,ue.data):t.compressedTexImage2D(s.TEXTURE_2D,se,xe,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?t.texSubImage2D(s.TEXTURE_2D,se,0,0,ue.width,ue.height,We,Re,ue.data):t.texImage2D(s.TEXTURE_2D,se,xe,ue.width,ue.height,0,We,Re,ue.data)}else if(v.isDataArrayTexture)qe?(ot&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ge,xe,Z.width,Z.height,Z.depth),t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,We,Re,Z.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,xe,Z.width,Z.height,Z.depth,0,We,Re,Z.data);else if(v.isData3DTexture)qe?(ot&&t.texStorage3D(s.TEXTURE_3D,Ge,xe,Z.width,Z.height,Z.depth),t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,We,Re,Z.data)):t.texImage3D(s.TEXTURE_3D,0,xe,Z.width,Z.height,Z.depth,0,We,Re,Z.data);else if(v.isFramebufferTexture){if(ot)if(qe)t.texStorage2D(s.TEXTURE_2D,Ge,xe,Z.width,Z.height);else{let se=Z.width,I=Z.height;for(let ae=0;ae<Ge;ae++)t.texImage2D(s.TEXTURE_2D,ae,xe,se,I,0,We,Re,null),se>>=1,I>>=1}}else if(Ne.length>0&&Ye){qe&&ot&&t.texStorage2D(s.TEXTURE_2D,Ge,xe,Ne[0].width,Ne[0].height);for(let se=0,I=Ne.length;se<I;se++)ue=Ne[se],qe?t.texSubImage2D(s.TEXTURE_2D,se,0,0,We,Re,ue):t.texImage2D(s.TEXTURE_2D,se,xe,We,Re,ue);v.generateMipmaps=!1}else qe?(ot&&t.texStorage2D(s.TEXTURE_2D,Ge,xe,Z.width,Z.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,We,Re,Z)):t.texImage2D(s.TEXTURE_2D,0,xe,We,Re,Z);M(v,Ye)&&x(Q),me.__version=ee.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function ve(b,v,O){if(v.image.length!==6)return;const Q=$(b,v),J=v.source;t.bindTexture(s.TEXTURE_CUBE_MAP,b.__webglTexture,s.TEXTURE0+O);const ee=n.get(J);if(J.version!==ee.__version||Q===!0){t.activeTexture(s.TEXTURE0+O);const me=Ke.getPrimaries(Ke.workingColorSpace),ce=v.colorSpace===qt?null:Ke.getPrimaries(v.colorSpace),de=v.colorSpace===qt||me===ce?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const ye=v.isCompressedTexture||v.image[0].isCompressedTexture,ze=v.image[0]&&v.image[0].isDataTexture,Z=[];for(let se=0;se<6;se++)!ye&&!ze?Z[se]=_(v.image[se],!1,!0,i.maxCubemapSize):Z[se]=ze?v.image[se].image:v.image[se],Z[se]=Be(v,Z[se]);const Ye=Z[0],We=p(Ye)||o,Re=r.convert(v.format,v.colorSpace),xe=r.convert(v.type),ue=y(v.internalFormat,Re,xe,v.colorSpace),Ne=o&&v.isVideoTexture!==!0,qe=ee.__version===void 0||Q===!0;let ot=L(v,Ye,We);V(s.TEXTURE_CUBE_MAP,v,We);let Ge;if(ye){Ne&&qe&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ot,ue,Ye.width,Ye.height);for(let se=0;se<6;se++){Ge=Z[se].mipmaps;for(let I=0;I<Ge.length;I++){const ae=Ge[I];v.format!==Qt?Re!==null?Ne?t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,I,0,0,ae.width,ae.height,Re,ae.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,I,ue,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ne?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,I,0,0,ae.width,ae.height,Re,xe,ae.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,I,ue,ae.width,ae.height,0,Re,xe,ae.data)}}}else{Ge=v.mipmaps,Ne&&qe&&(Ge.length>0&&ot++,t.texStorage2D(s.TEXTURE_CUBE_MAP,ot,ue,Z[0].width,Z[0].height));for(let se=0;se<6;se++)if(ze){Ne?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Z[se].width,Z[se].height,Re,xe,Z[se].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,ue,Z[se].width,Z[se].height,0,Re,xe,Z[se].data);for(let I=0;I<Ge.length;I++){const oe=Ge[I].image[se].image;Ne?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,I+1,0,0,oe.width,oe.height,Re,xe,oe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,I+1,ue,oe.width,oe.height,0,Re,xe,oe.data)}}else{Ne?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Re,xe,Z[se]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,ue,Re,xe,Z[se]);for(let I=0;I<Ge.length;I++){const ae=Ge[I];Ne?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,I+1,0,0,Re,xe,ae.image[se]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,I+1,ue,Re,xe,ae.image[se])}}}M(v,We)&&x(s.TEXTURE_CUBE_MAP),ee.__version=J.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function _e(b,v,O,Q,J,ee){const me=r.convert(O.format,O.colorSpace),ce=r.convert(O.type),de=y(O.internalFormat,me,ce,O.colorSpace);if(!n.get(v).__hasExternalTextures){const ze=Math.max(1,v.width>>ee),Z=Math.max(1,v.height>>ee);J===s.TEXTURE_3D||J===s.TEXTURE_2D_ARRAY?t.texImage3D(J,ee,de,ze,Z,v.depth,0,me,ce,null):t.texImage2D(J,ee,de,ze,Z,0,me,ce,null)}t.bindFramebuffer(s.FRAMEBUFFER,b),pe(v)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Q,J,n.get(O).__webglTexture,0,Ie(v)):(J===s.TEXTURE_2D||J>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Q,J,n.get(O).__webglTexture,ee),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Pe(b,v,O){if(s.bindRenderbuffer(s.RENDERBUFFER,b),v.depthBuffer&&!v.stencilBuffer){let Q=o===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(O||pe(v)){const J=v.depthTexture;J&&J.isDepthTexture&&(J.type===yn?Q=s.DEPTH_COMPONENT32F:J.type===Sn&&(Q=s.DEPTH_COMPONENT24));const ee=Ie(v);pe(v)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ee,Q,v.width,v.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,ee,Q,v.width,v.height)}else s.renderbufferStorage(s.RENDERBUFFER,Q,v.width,v.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,b)}else if(v.depthBuffer&&v.stencilBuffer){const Q=Ie(v);O&&pe(v)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Q,s.DEPTH24_STENCIL8,v.width,v.height):pe(v)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Q,s.DEPTH24_STENCIL8,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,v.width,v.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,b)}else{const Q=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let J=0;J<Q.length;J++){const ee=Q[J],me=r.convert(ee.format,ee.colorSpace),ce=r.convert(ee.type),de=y(ee.internalFormat,me,ce,ee.colorSpace),ye=Ie(v);O&&pe(v)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ye,de,v.width,v.height):pe(v)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ye,de,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,de,v.width,v.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ue(b,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,b),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),W(v.depthTexture,0);const Q=n.get(v.depthTexture).__webglTexture,J=Ie(v);if(v.depthTexture.format===ni)pe(v)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0,J):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0);else if(v.depthTexture.format===Oi)pe(v)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0,J):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Te(b){const v=n.get(b),O=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!v.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Ue(v.__webglFramebuffer,b)}else if(O){v.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)t.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[Q]),v.__webglDepthbuffer[Q]=s.createRenderbuffer(),Pe(v.__webglDepthbuffer[Q],b,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=s.createRenderbuffer(),Pe(v.__webglDepthbuffer,b,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function Xe(b,v,O){const Q=n.get(b);v!==void 0&&_e(Q.__webglFramebuffer,b,b.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),O!==void 0&&Te(b)}function U(b){const v=b.texture,O=n.get(b),Q=n.get(v);b.addEventListener("dispose",z),b.isWebGLMultipleRenderTargets!==!0&&(Q.__webglTexture===void 0&&(Q.__webglTexture=s.createTexture()),Q.__version=v.version,a.memory.textures++);const J=b.isWebGLCubeRenderTarget===!0,ee=b.isWebGLMultipleRenderTargets===!0,me=p(b)||o;if(J){O.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(o&&v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer[ce]=[];for(let de=0;de<v.mipmaps.length;de++)O.__webglFramebuffer[ce][de]=s.createFramebuffer()}else O.__webglFramebuffer[ce]=s.createFramebuffer()}else{if(o&&v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer=[];for(let ce=0;ce<v.mipmaps.length;ce++)O.__webglFramebuffer[ce]=s.createFramebuffer()}else O.__webglFramebuffer=s.createFramebuffer();if(ee)if(i.drawBuffers){const ce=b.texture;for(let de=0,ye=ce.length;de<ye;de++){const ze=n.get(ce[de]);ze.__webglTexture===void 0&&(ze.__webglTexture=s.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&b.samples>0&&pe(b)===!1){const ce=ee?v:[v];O.__webglMultisampledFramebuffer=s.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let de=0;de<ce.length;de++){const ye=ce[de];O.__webglColorRenderbuffer[de]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,O.__webglColorRenderbuffer[de]);const ze=r.convert(ye.format,ye.colorSpace),Z=r.convert(ye.type),Ye=y(ye.internalFormat,ze,Z,ye.colorSpace,b.isXRRenderTarget===!0),We=Ie(b);s.renderbufferStorageMultisample(s.RENDERBUFFER,We,Ye,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+de,s.RENDERBUFFER,O.__webglColorRenderbuffer[de])}s.bindRenderbuffer(s.RENDERBUFFER,null),b.depthBuffer&&(O.__webglDepthRenderbuffer=s.createRenderbuffer(),Pe(O.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(J){t.bindTexture(s.TEXTURE_CUBE_MAP,Q.__webglTexture),V(s.TEXTURE_CUBE_MAP,v,me);for(let ce=0;ce<6;ce++)if(o&&v.mipmaps&&v.mipmaps.length>0)for(let de=0;de<v.mipmaps.length;de++)_e(O.__webglFramebuffer[ce][de],b,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,de);else _e(O.__webglFramebuffer[ce],b,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);M(v,me)&&x(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ee){const ce=b.texture;for(let de=0,ye=ce.length;de<ye;de++){const ze=ce[de],Z=n.get(ze);t.bindTexture(s.TEXTURE_2D,Z.__webglTexture),V(s.TEXTURE_2D,ze,me),_e(O.__webglFramebuffer,b,ze,s.COLOR_ATTACHMENT0+de,s.TEXTURE_2D,0),M(ze,me)&&x(s.TEXTURE_2D)}t.unbindTexture()}else{let ce=s.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(o?ce=b.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ce,Q.__webglTexture),V(ce,v,me),o&&v.mipmaps&&v.mipmaps.length>0)for(let de=0;de<v.mipmaps.length;de++)_e(O.__webglFramebuffer[de],b,v,s.COLOR_ATTACHMENT0,ce,de);else _e(O.__webglFramebuffer,b,v,s.COLOR_ATTACHMENT0,ce,0);M(v,me)&&x(ce),t.unbindTexture()}b.depthBuffer&&Te(b)}function At(b){const v=p(b)||o,O=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let Q=0,J=O.length;Q<J;Q++){const ee=O[Q];if(M(ee,v)){const me=b.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,ce=n.get(ee).__webglTexture;t.bindTexture(me,ce),x(me),t.unbindTexture()}}}function Ee(b){if(o&&b.samples>0&&pe(b)===!1){const v=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],O=b.width,Q=b.height;let J=s.COLOR_BUFFER_BIT;const ee=[],me=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ce=n.get(b),de=b.isWebGLMultipleRenderTargets===!0;if(de)for(let ye=0;ye<v.length;ye++)t.bindFramebuffer(s.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ye,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,ce.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ye,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let ye=0;ye<v.length;ye++){ee.push(s.COLOR_ATTACHMENT0+ye),b.depthBuffer&&ee.push(me);const ze=ce.__ignoreDepthValues!==void 0?ce.__ignoreDepthValues:!1;if(ze===!1&&(b.depthBuffer&&(J|=s.DEPTH_BUFFER_BIT),b.stencilBuffer&&(J|=s.STENCIL_BUFFER_BIT)),de&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ce.__webglColorRenderbuffer[ye]),ze===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[me]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[me])),de){const Z=n.get(v[ye]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Z,0)}s.blitFramebuffer(0,0,O,Q,0,0,O,Q,J,s.NEAREST),l&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ee)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),de)for(let ye=0;ye<v.length;ye++){t.bindFramebuffer(s.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ye,s.RENDERBUFFER,ce.__webglColorRenderbuffer[ye]);const ze=n.get(v[ye]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,ce.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ye,s.TEXTURE_2D,ze,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}}function Ie(b){return Math.min(i.maxSamples,b.samples)}function pe(b){const v=n.get(b);return o&&b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function st(b){const v=a.render.frame;h.get(b)!==v&&(h.set(b,v),b.update())}function Be(b,v){const O=b.colorSpace,Q=b.format,J=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===jr||O!==mn&&O!==qt&&(Ke.getTransfer(O)===tt?o===!1?e.has("EXT_sRGB")===!0&&Q===Qt?(b.format=jr,b.minFilter=Pt,b.generateMipmaps=!1):v=cc.sRGBToLinear(v):(Q!==Qt||J!==An)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),v}this.allocateTextureUnit=P,this.resetTextureUnits=te,this.setTexture2D=W,this.setTexture2DArray=q,this.setTexture3D=X,this.setTextureCube=j,this.rebindTextures=Xe,this.setupRenderTarget=U,this.updateRenderTargetMipmap=At,this.updateMultisampleRenderTarget=Ee,this.setupDepthRenderbuffer=Te,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=pe}function Op(s,e,t){const n=t.isWebGL2;function i(r,a=qt){let o;const c=Ke.getTransfer(a);if(r===An)return s.UNSIGNED_BYTE;if(r===Jo)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Qo)return s.UNSIGNED_SHORT_5_5_5_1;if(r===_l)return s.BYTE;if(r===vl)return s.SHORT;if(r===Qr)return s.UNSIGNED_SHORT;if(r===Zo)return s.INT;if(r===Sn)return s.UNSIGNED_INT;if(r===yn)return s.FLOAT;if(r===Ji)return n?s.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===xl)return s.ALPHA;if(r===Qt)return s.RGBA;if(r===El)return s.LUMINANCE;if(r===Ml)return s.LUMINANCE_ALPHA;if(r===ni)return s.DEPTH_COMPONENT;if(r===Oi)return s.DEPTH_STENCIL;if(r===jr)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Sl)return s.RED;if(r===ec)return s.RED_INTEGER;if(r===yl)return s.RG;if(r===tc)return s.RG_INTEGER;if(r===nc)return s.RGBA_INTEGER;if(r===ar||r===or||r===cr||r===lr)if(c===tt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===ar)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===or)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===cr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===lr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===ar)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===or)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===cr)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===lr)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===xa||r===Ea||r===Ma||r===Sa)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===xa)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ea)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Ma)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Sa)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===ic)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===ya||r===ba)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===ya)return c===tt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===ba)return c===tt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Ta||r===Aa||r===Ca||r===wa||r===Ra||r===Ia||r===La||r===Pa||r===Da||r===Ua||r===Na||r===Oa||r===Fa||r===Ba)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Ta)return c===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Aa)return c===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Ca)return c===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===wa)return c===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Ra)return c===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Ia)return c===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===La)return c===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Pa)return c===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Da)return c===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Ua)return c===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Na)return c===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Oa)return c===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Fa)return c===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ba)return c===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===hr||r===za||r===Ha)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===hr)return c===tt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===za)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Ha)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===bl||r===Ga||r===ka||r===Va)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===hr)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Ga)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===ka)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Va)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ti?n?s.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class Fp extends kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Et extends ut{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Bp={type:"move"};class Nr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Et,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Et,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Et,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,n),u=this._getHandJoint(l,_);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=h.position.distanceTo(d.position),m=.02,g=.005;l.inputState.pinching&&f>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Bp)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Et;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class zp extends Bi{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,d=null,f=null,m=null,g=null;const _=t.getContextAttributes();let p=null,u=null;const M=[],x=[],y=new be;let L=null;const A=new kt;A.layers.enable(1),A.viewport=new nt;const w=new kt;w.layers.enable(2),w.viewport=new nt;const z=[A,w],E=new Fp;E.layers.enable(1),E.layers.enable(2);let T=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let $=M[V];return $===void 0&&($=new Nr,M[V]=$),$.getTargetRaySpace()},this.getControllerGrip=function(V){let $=M[V];return $===void 0&&($=new Nr,M[V]=$),$.getGripSpace()},this.getHand=function(V){let $=M[V];return $===void 0&&($=new Nr,M[V]=$),$.getHandSpace()};function k(V){const $=x.indexOf(V.inputSource);if($===-1)return;const le=M[$];le!==void 0&&(le.update(V.inputSource,V.frame,l||a),le.dispatchEvent({type:V.type,data:V.inputSource}))}function te(){i.removeEventListener("select",k),i.removeEventListener("selectstart",k),i.removeEventListener("selectend",k),i.removeEventListener("squeeze",k),i.removeEventListener("squeezestart",k),i.removeEventListener("squeezeend",k),i.removeEventListener("end",te),i.removeEventListener("inputsourceschange",P);for(let V=0;V<M.length;V++){const $=x[V];$!==null&&(x[V]=null,M[V].disconnect($))}T=null,G=null,e.setRenderTarget(p),m=null,f=null,d=null,i=null,u=null,ie.stop(),n.isPresenting=!1,e.setPixelRatio(L),e.setSize(y.width,y.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){o=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(V){l=V},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(V){if(i=V,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",te),i.addEventListener("inputsourceschange",P),_.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(y),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const $={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(i,t,$),i.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),u=new si(m.framebufferWidth,m.framebufferHeight,{format:Qt,type:An,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let $=null,le=null,ve=null;_.depth&&(ve=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,$=_.stencil?Oi:ni,le=_.stencil?ti:Sn);const _e={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:r};d=new XRWebGLBinding(i,t),f=d.createProjectionLayer(_e),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),u=new si(f.textureWidth,f.textureHeight,{format:Qt,type:An,depthTexture:new xc(f.textureWidth,f.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const Pe=e.properties.get(u);Pe.__ignoreDepthValues=f.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),ie.setContext(i),ie.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function P(V){for(let $=0;$<V.removed.length;$++){const le=V.removed[$],ve=x.indexOf(le);ve>=0&&(x[ve]=null,M[ve].disconnect(le))}for(let $=0;$<V.added.length;$++){const le=V.added[$];let ve=x.indexOf(le);if(ve===-1){for(let Pe=0;Pe<M.length;Pe++)if(Pe>=x.length){x.push(le),ve=Pe;break}else if(x[Pe]===null){x[Pe]=le,ve=Pe;break}if(ve===-1)break}const _e=M[ve];_e&&_e.connect(le)}}const B=new R,W=new R;function q(V,$,le){B.setFromMatrixPosition($.matrixWorld),W.setFromMatrixPosition(le.matrixWorld);const ve=B.distanceTo(W),_e=$.projectionMatrix.elements,Pe=le.projectionMatrix.elements,Ue=_e[14]/(_e[10]-1),Te=_e[14]/(_e[10]+1),Xe=(_e[9]+1)/_e[5],U=(_e[9]-1)/_e[5],At=(_e[8]-1)/_e[0],Ee=(Pe[8]+1)/Pe[0],Ie=Ue*At,pe=Ue*Ee,st=ve/(-At+Ee),Be=st*-At;$.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(Be),V.translateZ(st),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const b=Ue+st,v=Te+st,O=Ie-Be,Q=pe+(ve-Be),J=Xe*Te/v*b,ee=U*Te/v*b;V.projectionMatrix.makePerspective(O,Q,J,ee,b,v),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function X(V,$){$===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices($.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(i===null)return;E.near=w.near=A.near=V.near,E.far=w.far=A.far=V.far,(T!==E.near||G!==E.far)&&(i.updateRenderState({depthNear:E.near,depthFar:E.far}),T=E.near,G=E.far);const $=V.parent,le=E.cameras;X(E,$);for(let ve=0;ve<le.length;ve++)X(le[ve],$);le.length===2?q(E,A,w):E.projectionMatrix.copy(A.projectionMatrix),j(V,E,$)};function j(V,$,le){le===null?V.matrix.copy($.matrixWorld):(V.matrix.copy(le.matrixWorld),V.matrix.invert(),V.matrix.multiply($.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy($.projectionMatrix),V.projectionMatrixInverse.copy($.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=qr*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(f===null&&m===null))return c},this.setFoveation=function(V){c=V,f!==null&&(f.fixedFoveation=V),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=V)};let Y=null;function ne(V,$){if(h=$.getViewerPose(l||a),g=$,h!==null){const le=h.views;m!==null&&(e.setRenderTargetFramebuffer(u,m.framebuffer),e.setRenderTarget(u));let ve=!1;le.length!==E.cameras.length&&(E.cameras.length=0,ve=!0);for(let _e=0;_e<le.length;_e++){const Pe=le[_e];let Ue=null;if(m!==null)Ue=m.getViewport(Pe);else{const Xe=d.getViewSubImage(f,Pe);Ue=Xe.viewport,_e===0&&(e.setRenderTargetTextures(u,Xe.colorTexture,f.ignoreDepthValues?void 0:Xe.depthStencilTexture),e.setRenderTarget(u))}let Te=z[_e];Te===void 0&&(Te=new kt,Te.layers.enable(_e),Te.viewport=new nt,z[_e]=Te),Te.matrix.fromArray(Pe.transform.matrix),Te.matrix.decompose(Te.position,Te.quaternion,Te.scale),Te.projectionMatrix.fromArray(Pe.projectionMatrix),Te.projectionMatrixInverse.copy(Te.projectionMatrix).invert(),Te.viewport.set(Ue.x,Ue.y,Ue.width,Ue.height),_e===0&&(E.matrix.copy(Te.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),ve===!0&&E.cameras.push(Te)}}for(let le=0;le<M.length;le++){const ve=x[le],_e=M[le];ve!==null&&_e!==void 0&&_e.update(ve,$,l||a)}Y&&Y(V,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),g=null}const ie=new _c;ie.setAnimationLoop(ne),this.setAnimationLoop=function(V){Y=V},this.dispose=function(){}}}function Hp(s,e){function t(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function n(p,u){u.color.getRGB(p.fogColor.value,pc(s)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function i(p,u,M,x,y){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(p,u):u.isMeshToonMaterial?(r(p,u),d(p,u)):u.isMeshPhongMaterial?(r(p,u),h(p,u)):u.isMeshStandardMaterial?(r(p,u),f(p,u),u.isMeshPhysicalMaterial&&m(p,u,y)):u.isMeshMatcapMaterial?(r(p,u),g(p,u)):u.isMeshDepthMaterial?r(p,u):u.isMeshDistanceMaterial?(r(p,u),_(p,u)):u.isMeshNormalMaterial?r(p,u):u.isLineBasicMaterial?(a(p,u),u.isLineDashedMaterial&&o(p,u)):u.isPointsMaterial?c(p,u,M,x):u.isSpriteMaterial?l(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,t(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===Nt&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,t(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===Nt&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,t(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,t(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const M=e.get(u).envMap;if(M&&(p.envMap.value=M,p.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap){p.lightMap.value=u.lightMap;const x=s._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=u.lightMapIntensity*x,t(u.lightMap,p.lightMapTransform)}u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,p.aoMapTransform))}function a(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform))}function o(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function c(p,u,M,x){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*M,p.scale.value=x*.5,u.map&&(p.map.value=u.map,t(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function l(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function h(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function d(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function f(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,p.roughnessMapTransform)),e.get(u).envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,M){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Nt&&p.clearcoatNormalScale.value.negate())),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,u){u.matcap&&(p.matcap.value=u.matcap)}function _(p,u){const M=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Gp(s,e,t,n){let i={},r={},a=[];const o=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(M,x){const y=x.program;n.uniformBlockBinding(M,y)}function l(M,x){let y=i[M.id];y===void 0&&(g(M),y=h(M),i[M.id]=y,M.addEventListener("dispose",p));const L=x.program;n.updateUBOMapping(M,L);const A=e.render.frame;r[M.id]!==A&&(f(M),r[M.id]=A)}function h(M){const x=d();M.__bindingPointIndex=x;const y=s.createBuffer(),L=M.__size,A=M.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,L,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,y),y}function d(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const x=i[M.id],y=M.uniforms,L=M.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let A=0,w=y.length;A<w;A++){const z=Array.isArray(y[A])?y[A]:[y[A]];for(let E=0,T=z.length;E<T;E++){const G=z[E];if(m(G,A,E,L)===!0){const k=G.__offset,te=Array.isArray(G.value)?G.value:[G.value];let P=0;for(let B=0;B<te.length;B++){const W=te[B],q=_(W);typeof W=="number"||typeof W=="boolean"?(G.__data[0]=W,s.bufferSubData(s.UNIFORM_BUFFER,k+P,G.__data)):W.isMatrix3?(G.__data[0]=W.elements[0],G.__data[1]=W.elements[1],G.__data[2]=W.elements[2],G.__data[3]=0,G.__data[4]=W.elements[3],G.__data[5]=W.elements[4],G.__data[6]=W.elements[5],G.__data[7]=0,G.__data[8]=W.elements[6],G.__data[9]=W.elements[7],G.__data[10]=W.elements[8],G.__data[11]=0):(W.toArray(G.__data,P),P+=q.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,k,G.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function m(M,x,y,L){const A=M.value,w=x+"_"+y;if(L[w]===void 0)return typeof A=="number"||typeof A=="boolean"?L[w]=A:L[w]=A.clone(),!0;{const z=L[w];if(typeof A=="number"||typeof A=="boolean"){if(z!==A)return L[w]=A,!0}else if(z.equals(A)===!1)return z.copy(A),!0}return!1}function g(M){const x=M.uniforms;let y=0;const L=16;for(let w=0,z=x.length;w<z;w++){const E=Array.isArray(x[w])?x[w]:[x[w]];for(let T=0,G=E.length;T<G;T++){const k=E[T],te=Array.isArray(k.value)?k.value:[k.value];for(let P=0,B=te.length;P<B;P++){const W=te[P],q=_(W),X=y%L;X!==0&&L-X<q.boundary&&(y+=L-X),k.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=y,y+=q.storage}}}const A=y%L;return A>0&&(y+=L-A),M.__size=y,M.__cache={},this}function _(M){const x={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(x.boundary=4,x.storage=4):M.isVector2?(x.boundary=8,x.storage=8):M.isVector3||M.isColor?(x.boundary=16,x.storage=12):M.isVector4?(x.boundary=16,x.storage=16):M.isMatrix3?(x.boundary=48,x.storage=48):M.isMatrix4?(x.boundary=64,x.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),x}function p(M){const x=M.target;x.removeEventListener("dispose",p);const y=a.indexOf(x.__bindingPointIndex);a.splice(y,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function u(){for(const M in i)s.deleteBuffer(i[M]);a=[],i={},r={}}return{bind:c,update:l,dispose:u}}class Tc{constructor(e={}){const{canvas:t=Ol(),context:n=null,depth:i=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=a;const m=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const u=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=xt,this._useLegacyLights=!1,this.toneMapping=Tn,this.toneMappingExposure=1;const x=this;let y=!1,L=0,A=0,w=null,z=-1,E=null;const T=new nt,G=new nt;let k=null;const te=new Fe(0);let P=0,B=t.width,W=t.height,q=1,X=null,j=null;const Y=new nt(0,0,B,W),ne=new nt(0,0,B,W);let ie=!1;const V=new na;let $=!1,le=!1,ve=null;const _e=new it,Pe=new be,Ue=new R,Te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Xe(){return w===null?q:1}let U=n;function At(S,D){for(let F=0;F<S.length;F++){const H=S[F],N=t.getContext(H,D);if(N!==null)return N}return null}try{const S={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Jr}`),t.addEventListener("webglcontextlost",se,!1),t.addEventListener("webglcontextrestored",I,!1),t.addEventListener("webglcontextcreationerror",ae,!1),U===null){const D=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&D.shift(),U=At(D,S),U===null)throw At(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&U instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),U.getShaderPrecisionFormat===void 0&&(U.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Ee,Ie,pe,st,Be,b,v,O,Q,J,ee,me,ce,de,ye,ze,Z,Ye,We,Re,xe,ue,Ne,qe;function ot(){Ee=new Ku(U),Ie=new Wu(U,Ee,e),Ee.init(Ie),ue=new Op(U,Ee,Ie),pe=new Up(U,Ee,Ie),st=new Qu(U),Be=new Ep,b=new Np(U,Ee,pe,Be,Ie,ue,st),v=new ju(x),O=new $u(x),Q=new oh(U,Ie),Ne=new ku(U,Ee,Q,Ie),J=new Zu(U,Q,st,Ne),ee=new sf(U,J,Q,st),We=new nf(U,Ie,b),ze=new Xu(Be),me=new xp(x,v,O,Ee,Ie,Ne,ze),ce=new Hp(x,Be),de=new Sp,ye=new wp(Ee,Ie),Ye=new Gu(x,v,O,pe,ee,f,c),Z=new Dp(x,ee,Ie),qe=new Gp(U,st,Ie,pe),Re=new Vu(U,Ee,st,Ie),xe=new Ju(U,Ee,st,Ie),st.programs=me.programs,x.capabilities=Ie,x.extensions=Ee,x.properties=Be,x.renderLists=de,x.shadowMap=Z,x.state=pe,x.info=st}ot();const Ge=new zp(x,U);this.xr=Ge,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const S=Ee.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Ee.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(S){S!==void 0&&(q=S,this.setSize(B,W,!1))},this.getSize=function(S){return S.set(B,W)},this.setSize=function(S,D,F=!0){if(Ge.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=S,W=D,t.width=Math.floor(S*q),t.height=Math.floor(D*q),F===!0&&(t.style.width=S+"px",t.style.height=D+"px"),this.setViewport(0,0,S,D)},this.getDrawingBufferSize=function(S){return S.set(B*q,W*q).floor()},this.setDrawingBufferSize=function(S,D,F){B=S,W=D,q=F,t.width=Math.floor(S*F),t.height=Math.floor(D*F),this.setViewport(0,0,S,D)},this.getCurrentViewport=function(S){return S.copy(T)},this.getViewport=function(S){return S.copy(Y)},this.setViewport=function(S,D,F,H){S.isVector4?Y.set(S.x,S.y,S.z,S.w):Y.set(S,D,F,H),pe.viewport(T.copy(Y).multiplyScalar(q).floor())},this.getScissor=function(S){return S.copy(ne)},this.setScissor=function(S,D,F,H){S.isVector4?ne.set(S.x,S.y,S.z,S.w):ne.set(S,D,F,H),pe.scissor(G.copy(ne).multiplyScalar(q).floor())},this.getScissorTest=function(){return ie},this.setScissorTest=function(S){pe.setScissorTest(ie=S)},this.setOpaqueSort=function(S){X=S},this.setTransparentSort=function(S){j=S},this.getClearColor=function(S){return S.copy(Ye.getClearColor())},this.setClearColor=function(){Ye.setClearColor.apply(Ye,arguments)},this.getClearAlpha=function(){return Ye.getClearAlpha()},this.setClearAlpha=function(){Ye.setClearAlpha.apply(Ye,arguments)},this.clear=function(S=!0,D=!0,F=!0){let H=0;if(S){let N=!1;if(w!==null){const he=w.texture.format;N=he===nc||he===tc||he===ec}if(N){const he=w.texture.type,ge=he===An||he===Sn||he===Qr||he===ti||he===Jo||he===Qo,Se=Ye.getClearColor(),we=Ye.getClearAlpha(),He=Se.r,Le=Se.g,De=Se.b;ge?(m[0]=He,m[1]=Le,m[2]=De,m[3]=we,U.clearBufferuiv(U.COLOR,0,m)):(g[0]=He,g[1]=Le,g[2]=De,g[3]=we,U.clearBufferiv(U.COLOR,0,g))}else H|=U.COLOR_BUFFER_BIT}D&&(H|=U.DEPTH_BUFFER_BIT),F&&(H|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",se,!1),t.removeEventListener("webglcontextrestored",I,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),de.dispose(),ye.dispose(),Be.dispose(),v.dispose(),O.dispose(),ee.dispose(),Ne.dispose(),qe.dispose(),me.dispose(),Ge.dispose(),Ge.removeEventListener("sessionstart",Ct),Ge.removeEventListener("sessionend",et),ve&&(ve.dispose(),ve=null),wt.stop()};function se(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function I(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const S=st.autoReset,D=Z.enabled,F=Z.autoUpdate,H=Z.needsUpdate,N=Z.type;ot(),st.autoReset=S,Z.enabled=D,Z.autoUpdate=F,Z.needsUpdate=H,Z.type=N}function ae(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function oe(S){const D=S.target;D.removeEventListener("dispose",oe),Ae(D)}function Ae(S){Me(S),Be.remove(S)}function Me(S){const D=Be.get(S).programs;D!==void 0&&(D.forEach(function(F){me.releaseProgram(F)}),S.isShaderMaterial&&me.releaseShaderCache(S))}this.renderBufferDirect=function(S,D,F,H,N,he){D===null&&(D=Te);const ge=N.isMesh&&N.matrixWorld.determinant()<0,Se=Pc(S,D,F,H,N);pe.setMaterial(H,ge);let we=F.index,He=1;if(H.wireframe===!0){if(we=J.getWireframeAttribute(F),we===void 0)return;He=2}const Le=F.drawRange,De=F.attributes.position;let lt=Le.start*He,zt=(Le.start+Le.count)*He;he!==null&&(lt=Math.max(lt,he.start*He),zt=Math.min(zt,(he.start+he.count)*He)),we!==null?(lt=Math.max(lt,0),zt=Math.min(zt,we.count)):De!=null&&(lt=Math.max(lt,0),zt=Math.min(zt,De.count));const gt=zt-lt;if(gt<0||gt===1/0)return;Ne.setup(N,H,Se,F,we);let rn,rt=Re;if(we!==null&&(rn=Q.get(we),rt=xe,rt.setIndex(rn)),N.isMesh)H.wireframe===!0?(pe.setLineWidth(H.wireframeLinewidth*Xe()),rt.setMode(U.LINES)):rt.setMode(U.TRIANGLES);else if(N.isLine){let ke=H.linewidth;ke===void 0&&(ke=1),pe.setLineWidth(ke*Xe()),N.isLineSegments?rt.setMode(U.LINES):N.isLineLoop?rt.setMode(U.LINE_LOOP):rt.setMode(U.LINE_STRIP)}else N.isPoints?rt.setMode(U.POINTS):N.isSprite&&rt.setMode(U.TRIANGLES);if(N.isBatchedMesh)rt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else if(N.isInstancedMesh)rt.renderInstances(lt,gt,N.count);else if(F.isInstancedBufferGeometry){const ke=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,tr=Math.min(F.instanceCount,ke);rt.renderInstances(lt,gt,tr)}else rt.render(lt,gt)};function Je(S,D,F){S.transparent===!0&&S.side===Vt&&S.forceSinglePass===!1?(S.side=Nt,S.needsUpdate=!0,os(S,D,F),S.side=Rn,S.needsUpdate=!0,os(S,D,F),S.side=Vt):os(S,D,F)}this.compile=function(S,D,F=null){F===null&&(F=S),p=ye.get(F),p.init(),M.push(p),F.traverseVisible(function(N){N.isLight&&N.layers.test(D.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),S!==F&&S.traverseVisible(function(N){N.isLight&&N.layers.test(D.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights(x._useLegacyLights);const H=new Set;return S.traverse(function(N){const he=N.material;if(he)if(Array.isArray(he))for(let ge=0;ge<he.length;ge++){const Se=he[ge];Je(Se,F,N),H.add(Se)}else Je(he,F,N),H.add(he)}),M.pop(),p=null,H},this.compileAsync=function(S,D,F=null){const H=this.compile(S,D,F);return new Promise(N=>{function he(){if(H.forEach(function(ge){Be.get(ge).currentProgram.isReady()&&H.delete(ge)}),H.size===0){N(S);return}setTimeout(he,10)}Ee.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let Qe=null;function mt(S){Qe&&Qe(S)}function Ct(){wt.stop()}function et(){wt.start()}const wt=new _c;wt.setAnimationLoop(mt),typeof self<"u"&&wt.setContext(self),this.setAnimationLoop=function(S){Qe=S,Ge.setAnimationLoop(S),S===null?wt.stop():wt.start()},Ge.addEventListener("sessionstart",Ct),Ge.addEventListener("sessionend",et),this.render=function(S,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Ge.enabled===!0&&Ge.isPresenting===!0&&(Ge.cameraAutoUpdate===!0&&Ge.updateCamera(D),D=Ge.getCamera()),S.isScene===!0&&S.onBeforeRender(x,S,D,w),p=ye.get(S,M.length),p.init(),M.push(p),_e.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),V.setFromProjectionMatrix(_e),le=this.localClippingEnabled,$=ze.init(this.clippingPlanes,le),_=de.get(S,u.length),_.init(),u.push(_),tn(S,D,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(X,j),this.info.render.frame++,$===!0&&ze.beginShadows();const F=p.state.shadowsArray;if(Z.render(F,S,D),$===!0&&ze.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ye.render(_,S),p.setupLights(x._useLegacyLights),D.isArrayCamera){const H=D.cameras;for(let N=0,he=H.length;N<he;N++){const ge=H[N];aa(_,S,ge,ge.viewport)}}else aa(_,S,D);w!==null&&(b.updateMultisampleRenderTarget(w),b.updateRenderTargetMipmap(w)),S.isScene===!0&&S.onAfterRender(x,S,D),Ne.resetDefaultState(),z=-1,E=null,M.pop(),M.length>0?p=M[M.length-1]:p=null,u.pop(),u.length>0?_=u[u.length-1]:_=null};function tn(S,D,F,H){if(S.visible===!1)return;if(S.layers.test(D.layers)){if(S.isGroup)F=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(D);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||V.intersectsSprite(S)){H&&Ue.setFromMatrixPosition(S.matrixWorld).applyMatrix4(_e);const ge=ee.update(S),Se=S.material;Se.visible&&_.push(S,ge,Se,F,Ue.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||V.intersectsObject(S))){const ge=ee.update(S),Se=S.material;if(H&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Ue.copy(S.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),Ue.copy(ge.boundingSphere.center)),Ue.applyMatrix4(S.matrixWorld).applyMatrix4(_e)),Array.isArray(Se)){const we=ge.groups;for(let He=0,Le=we.length;He<Le;He++){const De=we[He],lt=Se[De.materialIndex];lt&&lt.visible&&_.push(S,ge,lt,F,Ue.z,De)}}else Se.visible&&_.push(S,ge,Se,F,Ue.z,null)}}const he=S.children;for(let ge=0,Se=he.length;ge<Se;ge++)tn(he[ge],D,F,H)}function aa(S,D,F,H){const N=S.opaque,he=S.transmissive,ge=S.transparent;p.setupLightsView(F),$===!0&&ze.setGlobalState(x.clippingPlanes,F),he.length>0&&Lc(N,he,D,F),H&&pe.viewport(T.copy(H)),N.length>0&&as(N,D,F),he.length>0&&as(he,D,F),ge.length>0&&as(ge,D,F),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function Lc(S,D,F,H){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;const he=Ie.isWebGL2;ve===null&&(ve=new si(1,1,{generateMipmaps:!0,type:Ee.has("EXT_color_buffer_half_float")?Ji:An,minFilter:Zi,samples:he?4:0})),x.getDrawingBufferSize(Pe),he?ve.setSize(Pe.x,Pe.y):ve.setSize(Yr(Pe.x),Yr(Pe.y));const ge=x.getRenderTarget();x.setRenderTarget(ve),x.getClearColor(te),P=x.getClearAlpha(),P<1&&x.setClearColor(16777215,.5),x.clear();const Se=x.toneMapping;x.toneMapping=Tn,as(S,F,H),b.updateMultisampleRenderTarget(ve),b.updateRenderTargetMipmap(ve);let we=!1;for(let He=0,Le=D.length;He<Le;He++){const De=D[He],lt=De.object,zt=De.geometry,gt=De.material,rn=De.group;if(gt.side===Vt&&lt.layers.test(H.layers)){const rt=gt.side;gt.side=Nt,gt.needsUpdate=!0,oa(lt,F,H,zt,gt,rn),gt.side=rt,gt.needsUpdate=!0,we=!0}}we===!0&&(b.updateMultisampleRenderTarget(ve),b.updateRenderTargetMipmap(ve)),x.setRenderTarget(ge),x.setClearColor(te,P),x.toneMapping=Se}function as(S,D,F){const H=D.isScene===!0?D.overrideMaterial:null;for(let N=0,he=S.length;N<he;N++){const ge=S[N],Se=ge.object,we=ge.geometry,He=H===null?ge.material:H,Le=ge.group;Se.layers.test(F.layers)&&oa(Se,D,F,we,He,Le)}}function oa(S,D,F,H,N,he){S.onBeforeRender(x,D,F,H,N,he),S.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),N.onBeforeRender(x,D,F,H,S,he),N.transparent===!0&&N.side===Vt&&N.forceSinglePass===!1?(N.side=Nt,N.needsUpdate=!0,x.renderBufferDirect(F,D,H,N,S,he),N.side=Rn,N.needsUpdate=!0,x.renderBufferDirect(F,D,H,N,S,he),N.side=Vt):x.renderBufferDirect(F,D,H,N,S,he),S.onAfterRender(x,D,F,H,N,he)}function os(S,D,F){D.isScene!==!0&&(D=Te);const H=Be.get(S),N=p.state.lights,he=p.state.shadowsArray,ge=N.state.version,Se=me.getParameters(S,N.state,he,D,F),we=me.getProgramCacheKey(Se);let He=H.programs;H.environment=S.isMeshStandardMaterial?D.environment:null,H.fog=D.fog,H.envMap=(S.isMeshStandardMaterial?O:v).get(S.envMap||H.environment),He===void 0&&(S.addEventListener("dispose",oe),He=new Map,H.programs=He);let Le=He.get(we);if(Le!==void 0){if(H.currentProgram===Le&&H.lightsStateVersion===ge)return la(S,Se),Le}else Se.uniforms=me.getUniforms(S),S.onBuild(F,Se,x),S.onBeforeCompile(Se,x),Le=me.acquireProgram(Se,we),He.set(we,Le),H.uniforms=Se.uniforms;const De=H.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(De.clippingPlanes=ze.uniform),la(S,Se),H.needsLights=Uc(S),H.lightsStateVersion=ge,H.needsLights&&(De.ambientLightColor.value=N.state.ambient,De.lightProbe.value=N.state.probe,De.directionalLights.value=N.state.directional,De.directionalLightShadows.value=N.state.directionalShadow,De.spotLights.value=N.state.spot,De.spotLightShadows.value=N.state.spotShadow,De.rectAreaLights.value=N.state.rectArea,De.ltc_1.value=N.state.rectAreaLTC1,De.ltc_2.value=N.state.rectAreaLTC2,De.pointLights.value=N.state.point,De.pointLightShadows.value=N.state.pointShadow,De.hemisphereLights.value=N.state.hemi,De.directionalShadowMap.value=N.state.directionalShadowMap,De.directionalShadowMatrix.value=N.state.directionalShadowMatrix,De.spotShadowMap.value=N.state.spotShadowMap,De.spotLightMatrix.value=N.state.spotLightMatrix,De.spotLightMap.value=N.state.spotLightMap,De.pointShadowMap.value=N.state.pointShadowMap,De.pointShadowMatrix.value=N.state.pointShadowMatrix),H.currentProgram=Le,H.uniformsList=null,Le}function ca(S){if(S.uniformsList===null){const D=S.currentProgram.getUniforms();S.uniformsList=Os.seqWithValue(D.seq,S.uniforms)}return S.uniformsList}function la(S,D){const F=Be.get(S);F.outputColorSpace=D.outputColorSpace,F.batching=D.batching,F.instancing=D.instancing,F.instancingColor=D.instancingColor,F.skinning=D.skinning,F.morphTargets=D.morphTargets,F.morphNormals=D.morphNormals,F.morphColors=D.morphColors,F.morphTargetsCount=D.morphTargetsCount,F.numClippingPlanes=D.numClippingPlanes,F.numIntersection=D.numClipIntersection,F.vertexAlphas=D.vertexAlphas,F.vertexTangents=D.vertexTangents,F.toneMapping=D.toneMapping}function Pc(S,D,F,H,N){D.isScene!==!0&&(D=Te),b.resetTextureUnits();const he=D.fog,ge=H.isMeshStandardMaterial?D.environment:null,Se=w===null?x.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:mn,we=(H.isMeshStandardMaterial?O:v).get(H.envMap||ge),He=H.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,Le=!!F.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),De=!!F.morphAttributes.position,lt=!!F.morphAttributes.normal,zt=!!F.morphAttributes.color;let gt=Tn;H.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(gt=x.toneMapping);const rn=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,rt=rn!==void 0?rn.length:0,ke=Be.get(H),tr=p.state.lights;if($===!0&&(le===!0||S!==E)){const Wt=S===E&&H.id===z;ze.setState(H,S,Wt)}let ct=!1;H.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==tr.state.version||ke.outputColorSpace!==Se||N.isBatchedMesh&&ke.batching===!1||!N.isBatchedMesh&&ke.batching===!0||N.isInstancedMesh&&ke.instancing===!1||!N.isInstancedMesh&&ke.instancing===!0||N.isSkinnedMesh&&ke.skinning===!1||!N.isSkinnedMesh&&ke.skinning===!0||N.isInstancedMesh&&ke.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&ke.instancingColor===!1&&N.instanceColor!==null||ke.envMap!==we||H.fog===!0&&ke.fog!==he||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==ze.numPlanes||ke.numIntersection!==ze.numIntersection)||ke.vertexAlphas!==He||ke.vertexTangents!==Le||ke.morphTargets!==De||ke.morphNormals!==lt||ke.morphColors!==zt||ke.toneMapping!==gt||Ie.isWebGL2===!0&&ke.morphTargetsCount!==rt)&&(ct=!0):(ct=!0,ke.__version=H.version);let Pn=ke.currentProgram;ct===!0&&(Pn=os(H,D,N));let ha=!1,Hi=!1,nr=!1;const yt=Pn.getUniforms(),Dn=ke.uniforms;if(pe.useProgram(Pn.program)&&(ha=!0,Hi=!0,nr=!0),H.id!==z&&(z=H.id,Hi=!0),ha||E!==S){yt.setValue(U,"projectionMatrix",S.projectionMatrix),yt.setValue(U,"viewMatrix",S.matrixWorldInverse);const Wt=yt.map.cameraPosition;Wt!==void 0&&Wt.setValue(U,Ue.setFromMatrixPosition(S.matrixWorld)),Ie.logarithmicDepthBuffer&&yt.setValue(U,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&yt.setValue(U,"isOrthographic",S.isOrthographicCamera===!0),E!==S&&(E=S,Hi=!0,nr=!0)}if(N.isSkinnedMesh){yt.setOptional(U,N,"bindMatrix"),yt.setOptional(U,N,"bindMatrixInverse");const Wt=N.skeleton;Wt&&(Ie.floatVertexTextures?(Wt.boneTexture===null&&Wt.computeBoneTexture(),yt.setValue(U,"boneTexture",Wt.boneTexture,b)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}N.isBatchedMesh&&(yt.setOptional(U,N,"batchingTexture"),yt.setValue(U,"batchingTexture",N._matricesTexture,b));const ir=F.morphAttributes;if((ir.position!==void 0||ir.normal!==void 0||ir.color!==void 0&&Ie.isWebGL2===!0)&&We.update(N,F,Pn),(Hi||ke.receiveShadow!==N.receiveShadow)&&(ke.receiveShadow=N.receiveShadow,yt.setValue(U,"receiveShadow",N.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Dn.envMap.value=we,Dn.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),Hi&&(yt.setValue(U,"toneMappingExposure",x.toneMappingExposure),ke.needsLights&&Dc(Dn,nr),he&&H.fog===!0&&ce.refreshFogUniforms(Dn,he),ce.refreshMaterialUniforms(Dn,H,q,W,ve),Os.upload(U,ca(ke),Dn,b)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Os.upload(U,ca(ke),Dn,b),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&yt.setValue(U,"center",N.center),yt.setValue(U,"modelViewMatrix",N.modelViewMatrix),yt.setValue(U,"normalMatrix",N.normalMatrix),yt.setValue(U,"modelMatrix",N.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Wt=H.uniformsGroups;for(let sr=0,Nc=Wt.length;sr<Nc;sr++)if(Ie.isWebGL2){const da=Wt[sr];qe.update(da,Pn),qe.bind(da,Pn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Pn}function Dc(S,D){S.ambientLightColor.needsUpdate=D,S.lightProbe.needsUpdate=D,S.directionalLights.needsUpdate=D,S.directionalLightShadows.needsUpdate=D,S.pointLights.needsUpdate=D,S.pointLightShadows.needsUpdate=D,S.spotLights.needsUpdate=D,S.spotLightShadows.needsUpdate=D,S.rectAreaLights.needsUpdate=D,S.hemisphereLights.needsUpdate=D}function Uc(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(S,D,F){Be.get(S.texture).__webglTexture=D,Be.get(S.depthTexture).__webglTexture=F;const H=Be.get(S);H.__hasExternalTextures=!0,H.__hasExternalTextures&&(H.__autoAllocateDepthBuffer=F===void 0,H.__autoAllocateDepthBuffer||Ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,D){const F=Be.get(S);F.__webglFramebuffer=D,F.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(S,D=0,F=0){w=S,L=D,A=F;let H=!0,N=null,he=!1,ge=!1;if(S){const we=Be.get(S);we.__useDefaultFramebuffer!==void 0?(pe.bindFramebuffer(U.FRAMEBUFFER,null),H=!1):we.__webglFramebuffer===void 0?b.setupRenderTarget(S):we.__hasExternalTextures&&b.rebindTextures(S,Be.get(S.texture).__webglTexture,Be.get(S.depthTexture).__webglTexture);const He=S.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(ge=!0);const Le=Be.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Le[D])?N=Le[D][F]:N=Le[D],he=!0):Ie.isWebGL2&&S.samples>0&&b.useMultisampledRTT(S)===!1?N=Be.get(S).__webglMultisampledFramebuffer:Array.isArray(Le)?N=Le[F]:N=Le,T.copy(S.viewport),G.copy(S.scissor),k=S.scissorTest}else T.copy(Y).multiplyScalar(q).floor(),G.copy(ne).multiplyScalar(q).floor(),k=ie;if(pe.bindFramebuffer(U.FRAMEBUFFER,N)&&Ie.drawBuffers&&H&&pe.drawBuffers(S,N),pe.viewport(T),pe.scissor(G),pe.setScissorTest(k),he){const we=Be.get(S.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+D,we.__webglTexture,F)}else if(ge){const we=Be.get(S.texture),He=D||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,we.__webglTexture,F||0,He)}z=-1},this.readRenderTargetPixels=function(S,D,F,H,N,he,ge){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=Be.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ge!==void 0&&(Se=Se[ge]),Se){pe.bindFramebuffer(U.FRAMEBUFFER,Se);try{const we=S.texture,He=we.format,Le=we.type;if(He!==Qt&&ue.convert(He)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const De=Le===Ji&&(Ee.has("EXT_color_buffer_half_float")||Ie.isWebGL2&&Ee.has("EXT_color_buffer_float"));if(Le!==An&&ue.convert(Le)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Le===yn&&(Ie.isWebGL2||Ee.has("OES_texture_float")||Ee.has("WEBGL_color_buffer_float")))&&!De){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=S.width-H&&F>=0&&F<=S.height-N&&U.readPixels(D,F,H,N,ue.convert(He),ue.convert(Le),he)}finally{const we=w!==null?Be.get(w).__webglFramebuffer:null;pe.bindFramebuffer(U.FRAMEBUFFER,we)}}},this.copyFramebufferToTexture=function(S,D,F=0){const H=Math.pow(2,-F),N=Math.floor(D.image.width*H),he=Math.floor(D.image.height*H);b.setTexture2D(D,0),U.copyTexSubImage2D(U.TEXTURE_2D,F,0,0,S.x,S.y,N,he),pe.unbindTexture()},this.copyTextureToTexture=function(S,D,F,H=0){const N=D.image.width,he=D.image.height,ge=ue.convert(F.format),Se=ue.convert(F.type);b.setTexture2D(F,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,F.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,F.unpackAlignment),D.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,H,S.x,S.y,N,he,ge,Se,D.image.data):D.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,H,S.x,S.y,D.mipmaps[0].width,D.mipmaps[0].height,ge,D.mipmaps[0].data):U.texSubImage2D(U.TEXTURE_2D,H,S.x,S.y,ge,Se,D.image),H===0&&F.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),pe.unbindTexture()},this.copyTextureToTexture3D=function(S,D,F,H,N=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const he=S.max.x-S.min.x+1,ge=S.max.y-S.min.y+1,Se=S.max.z-S.min.z+1,we=ue.convert(H.format),He=ue.convert(H.type);let Le;if(H.isData3DTexture)b.setTexture3D(H,0),Le=U.TEXTURE_3D;else if(H.isDataArrayTexture||H.isCompressedArrayTexture)b.setTexture2DArray(H,0),Le=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,H.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,H.unpackAlignment);const De=U.getParameter(U.UNPACK_ROW_LENGTH),lt=U.getParameter(U.UNPACK_IMAGE_HEIGHT),zt=U.getParameter(U.UNPACK_SKIP_PIXELS),gt=U.getParameter(U.UNPACK_SKIP_ROWS),rn=U.getParameter(U.UNPACK_SKIP_IMAGES),rt=F.isCompressedTexture?F.mipmaps[N]:F.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,rt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,rt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,S.min.x),U.pixelStorei(U.UNPACK_SKIP_ROWS,S.min.y),U.pixelStorei(U.UNPACK_SKIP_IMAGES,S.min.z),F.isDataTexture||F.isData3DTexture?U.texSubImage3D(Le,N,D.x,D.y,D.z,he,ge,Se,we,He,rt.data):F.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),U.compressedTexSubImage3D(Le,N,D.x,D.y,D.z,he,ge,Se,we,rt.data)):U.texSubImage3D(Le,N,D.x,D.y,D.z,he,ge,Se,we,He,rt),U.pixelStorei(U.UNPACK_ROW_LENGTH,De),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,lt),U.pixelStorei(U.UNPACK_SKIP_PIXELS,zt),U.pixelStorei(U.UNPACK_SKIP_ROWS,gt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,rn),N===0&&H.generateMipmaps&&U.generateMipmap(Le),pe.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?b.setTextureCube(S,0):S.isData3DTexture?b.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?b.setTexture2DArray(S,0):b.setTexture2D(S,0),pe.unbindTexture()},this.resetState=function(){L=0,A=0,w=null,pe.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===ea?"display-p3":"srgb",t.unpackColorSpace=Ke.workingColorSpace===Ys?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===xt?ii:sc}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===ii?xt:mn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class kp extends Tc{}kp.prototype.isWebGL1Renderer=!0;class Ki{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Fe(e),this.density=t}clone(){return new Ki(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Vp extends ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Wp{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Xr,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Cn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Cn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Cn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Rt=new R;class Xs{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix4(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyNormalMatrix(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.transformDirection(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}setX(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=un(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=un(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=un(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=un(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array),i=Ze(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array),i=Ze(i,this.array),r=Ze(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Yt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Xs(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Ac extends Ln{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Fe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let bi;const Xi=new R,Ti=new R,Ai=new R,Ci=new be,ji=new be,Cc=new it,Is=new R,qi=new R,Ls=new R,Po=new be,Or=new be,Do=new be;class Xp extends ut{constructor(e=new Ac){if(super(),this.isSprite=!0,this.type="Sprite",bi===void 0){bi=new St;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Wp(t,5);bi.setIndex([0,1,2,0,2,3]),bi.setAttribute("position",new Xs(n,3,0,!1)),bi.setAttribute("uv",new Xs(n,2,3,!1))}this.geometry=bi,this.material=e,this.center=new be(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ti.setFromMatrixScale(this.matrixWorld),Cc.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ai.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ti.multiplyScalar(-Ai.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const a=this.center;Ps(Is.set(-.5,-.5,0),Ai,a,Ti,i,r),Ps(qi.set(.5,-.5,0),Ai,a,Ti,i,r),Ps(Ls.set(.5,.5,0),Ai,a,Ti,i,r),Po.set(0,0),Or.set(1,0),Do.set(1,1);let o=e.ray.intersectTriangle(Is,qi,Ls,!1,Xi);if(o===null&&(Ps(qi.set(-.5,.5,0),Ai,a,Ti,i,r),Or.set(0,1),o=e.ray.intersectTriangle(Is,Ls,qi,!1,Xi),o===null))return;const c=e.ray.origin.distanceTo(Xi);c<e.near||c>e.far||t.push({distance:c,point:Xi.clone(),uv:jt.getInterpolation(Xi,Is,qi,Ls,Po,Or,Do,new be),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Ps(s,e,t,n,i,r){Ci.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(ji.x=r*Ci.x-i*Ci.y,ji.y=i*Ci.x+r*Ci.y):ji.copy(Ci),s.copy(e),s.x+=ji.x,s.y+=ji.y,s.applyMatrix4(Cc)}class js extends Ln{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Fe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Uo=new R,No=new R,Oo=new it,Fr=new $s,Ds=new ss;class jp extends ut{constructor(e=new St,t=new js){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Uo.fromBufferAttribute(t,i-1),No.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Uo.distanceTo(No);e.setAttribute("lineDistance",new at(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ds.copy(n.boundingSphere),Ds.applyMatrix4(i),Ds.radius+=r,e.ray.intersectsSphere(Ds)===!1)return;Oo.copy(i).invert(),Fr.copy(e.ray).applyMatrix4(Oo);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=new R,h=new R,d=new R,f=new R,m=this.isLineSegments?2:1,g=n.index,p=n.attributes.position;if(g!==null){const u=Math.max(0,a.start),M=Math.min(g.count,a.start+a.count);for(let x=u,y=M-1;x<y;x+=m){const L=g.getX(x),A=g.getX(x+1);if(l.fromBufferAttribute(p,L),h.fromBufferAttribute(p,A),Fr.distanceSqToSegment(l,h,f,d)>c)continue;f.applyMatrix4(this.matrixWorld);const z=e.ray.origin.distanceTo(f);z<e.near||z>e.far||t.push({distance:z,point:d.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const u=Math.max(0,a.start),M=Math.min(p.count,a.start+a.count);for(let x=u,y=M-1;x<y;x+=m){if(l.fromBufferAttribute(p,x),h.fromBufferAttribute(p,x+1),Fr.distanceSqToSegment(l,h,f,d)>c)continue;f.applyMatrix4(this.matrixWorld);const A=e.ray.origin.distanceTo(f);A<e.near||A>e.far||t.push({distance:A,point:d.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}class wc extends Ln{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Fo=new it,Kr=new $s,Us=new ss,Ns=new R;class qp extends ut{constructor(e=new St,t=new wc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Us.copy(n.boundingSphere),Us.applyMatrix4(i),Us.radius+=r,e.ray.intersectsSphere(Us)===!1)return;Fo.copy(i).invert(),Kr.copy(e.ray).applyMatrix4(Fo);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,d=n.attributes.position;if(l!==null){const f=Math.max(0,a.start),m=Math.min(l.count,a.start+a.count);for(let g=f,_=m;g<_;g++){const p=l.getX(g);Ns.fromBufferAttribute(d,p),Bo(Ns,p,c,i,e,t,this)}}else{const f=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let g=f,_=m;g<_;g++)Ns.fromBufferAttribute(d,g),Bo(Ns,g,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Bo(s,e,t,n,i,r,a){const o=Kr.distanceSqToPoint(s);if(o<t){const c=new R;Kr.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,object:a})}}class Fs extends Bt{constructor(e,t,n,i,r,a,o,c,l){super(e,t,n,i,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class pn extends St{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;i=Math.floor(i),r=Math.floor(r);const h=[],d=[],f=[],m=[];let g=0;const _=[],p=n/2;let u=0;M(),a===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new at(d,3)),this.setAttribute("normal",new at(f,3)),this.setAttribute("uv",new at(m,2));function M(){const y=new R,L=new R;let A=0;const w=(t-e)/n;for(let z=0;z<=r;z++){const E=[],T=z/r,G=T*(t-e)+e;for(let k=0;k<=i;k++){const te=k/i,P=te*c+o,B=Math.sin(P),W=Math.cos(P);L.x=G*B,L.y=-T*n+p,L.z=G*W,d.push(L.x,L.y,L.z),y.set(B,w,W).normalize(),f.push(y.x,y.y,y.z),m.push(te,1-T),E.push(g++)}_.push(E)}for(let z=0;z<i;z++)for(let E=0;E<r;E++){const T=_[E][z],G=_[E+1][z],k=_[E+1][z+1],te=_[E][z+1];h.push(T,G,te),h.push(G,k,te),A+=6}l.addGroup(u,A,0),u+=A}function x(y){const L=g,A=new be,w=new R;let z=0;const E=y===!0?e:t,T=y===!0?1:-1;for(let k=1;k<=i;k++)d.push(0,p*T,0),f.push(0,T,0),m.push(.5,.5),g++;const G=g;for(let k=0;k<=i;k++){const P=k/i*c+o,B=Math.cos(P),W=Math.sin(P);w.x=E*W,w.y=p*T,w.z=E*B,d.push(w.x,w.y,w.z),f.push(0,T,0),A.x=B*.5+.5,A.y=W*.5*T+.5,m.push(A.x,A.y),g++}for(let k=0;k<i;k++){const te=L+k,P=G+k;y===!0?h.push(P,P+1,te):h.push(P+1,P,te),z+=3}l.addGroup(u,z,y===!0?1:2),u+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Js extends St{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const r=[],a=[];o(i),l(n),h(),this.setAttribute("position",new at(r,3)),this.setAttribute("normal",new at(r.slice(),3)),this.setAttribute("uv",new at(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(M){const x=new R,y=new R,L=new R;for(let A=0;A<t.length;A+=3)m(t[A+0],x),m(t[A+1],y),m(t[A+2],L),c(x,y,L,M)}function c(M,x,y,L){const A=L+1,w=[];for(let z=0;z<=A;z++){w[z]=[];const E=M.clone().lerp(y,z/A),T=x.clone().lerp(y,z/A),G=A-z;for(let k=0;k<=G;k++)k===0&&z===A?w[z][k]=E:w[z][k]=E.clone().lerp(T,k/G)}for(let z=0;z<A;z++)for(let E=0;E<2*(A-z)-1;E++){const T=Math.floor(E/2);E%2===0?(f(w[z][T+1]),f(w[z+1][T]),f(w[z][T])):(f(w[z][T+1]),f(w[z+1][T+1]),f(w[z+1][T]))}}function l(M){const x=new R;for(let y=0;y<r.length;y+=3)x.x=r[y+0],x.y=r[y+1],x.z=r[y+2],x.normalize().multiplyScalar(M),r[y+0]=x.x,r[y+1]=x.y,r[y+2]=x.z}function h(){const M=new R;for(let x=0;x<r.length;x+=3){M.x=r[x+0],M.y=r[x+1],M.z=r[x+2];const y=p(M)/2/Math.PI+.5,L=u(M)/Math.PI+.5;a.push(y,1-L)}g(),d()}function d(){for(let M=0;M<a.length;M+=6){const x=a[M+0],y=a[M+2],L=a[M+4],A=Math.max(x,y,L),w=Math.min(x,y,L);A>.9&&w<.1&&(x<.2&&(a[M+0]+=1),y<.2&&(a[M+2]+=1),L<.2&&(a[M+4]+=1))}}function f(M){r.push(M.x,M.y,M.z)}function m(M,x){const y=M*3;x.x=e[y+0],x.y=e[y+1],x.z=e[y+2]}function g(){const M=new R,x=new R,y=new R,L=new R,A=new be,w=new be,z=new be;for(let E=0,T=0;E<r.length;E+=9,T+=6){M.set(r[E+0],r[E+1],r[E+2]),x.set(r[E+3],r[E+4],r[E+5]),y.set(r[E+6],r[E+7],r[E+8]),A.set(a[T+0],a[T+1]),w.set(a[T+2],a[T+3]),z.set(a[T+4],a[T+5]),L.copy(M).add(x).add(y).divideScalar(3);const G=p(L);_(A,T+0,M,G),_(w,T+2,x,G),_(z,T+4,y,G)}}function _(M,x,y,L){L<0&&M.x===1&&(a[x]=M.x-1),y.x===0&&y.z===0&&(a[x]=L/2/Math.PI+.5)}function p(M){return Math.atan2(M.z,-M.x)}function u(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Js(e.vertices,e.indices,e.radius,e.details)}}class sa extends Js{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new sa(e.radius,e.detail)}}class ra extends Js{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ra(e.radius,e.detail)}}class rs extends St{constructor(e=.5,t=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],c=[],l=[],h=[];let d=e;const f=(t-e)/i,m=new R,g=new be;for(let _=0;_<=i;_++){for(let p=0;p<=n;p++){const u=r+p/n*a;m.x=d*Math.cos(u),m.y=d*Math.sin(u),c.push(m.x,m.y,m.z),l.push(0,0,1),g.x=(m.x/t+1)/2,g.y=(m.y/t+1)/2,h.push(g.x,g.y)}d+=f}for(let _=0;_<i;_++){const p=_*(n+1);for(let u=0;u<n;u++){const M=u+p,x=M,y=M+n+1,L=M+n+2,A=M+1;o.push(x,y,A),o.push(y,L,A)}}this.setIndex(o),this.setAttribute("position",new at(c,3)),this.setAttribute("normal",new at(l,3)),this.setAttribute("uv",new at(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rs(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class ri extends St{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const h=[],d=new R,f=new R,m=[],g=[],_=[],p=[];for(let u=0;u<=n;u++){const M=[],x=u/n;let y=0;u===0&&a===0?y=.5/t:u===n&&c===Math.PI&&(y=-.5/t);for(let L=0;L<=t;L++){const A=L/t;d.x=-e*Math.cos(i+A*r)*Math.sin(a+x*o),d.y=e*Math.cos(a+x*o),d.z=e*Math.sin(i+A*r)*Math.sin(a+x*o),g.push(d.x,d.y,d.z),f.copy(d).normalize(),_.push(f.x,f.y,f.z),p.push(A+y,1-x),M.push(l++)}h.push(M)}for(let u=0;u<n;u++)for(let M=0;M<t;M++){const x=h[u][M+1],y=h[u][M],L=h[u+1][M],A=h[u+1][M+1];(u!==0||a>0)&&m.push(x,y,A),(u!==n-1||c<Math.PI)&&m.push(y,L,A)}this.setIndex(m),this.setAttribute("position",new at(g,3)),this.setAttribute("normal",new at(_,3)),this.setAttribute("uv",new at(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ri(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Qs extends St{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],c=[],l=[],h=new R,d=new R,f=new R;for(let m=0;m<=n;m++)for(let g=0;g<=i;g++){const _=g/i*r,p=m/n*Math.PI*2;d.x=(e+t*Math.cos(p))*Math.cos(_),d.y=(e+t*Math.cos(p))*Math.sin(_),d.z=t*Math.sin(p),o.push(d.x,d.y,d.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),f.subVectors(d,h).normalize(),c.push(f.x,f.y,f.z),l.push(g/i),l.push(m/n)}for(let m=1;m<=n;m++)for(let g=1;g<=i;g++){const _=(i+1)*m+g-1,p=(i+1)*(m-1)+g-1,u=(i+1)*(m-1)+g,M=(i+1)*m+g;a.push(_,p,M),a.push(p,u,M)}this.setIndex(a),this.setAttribute("position",new at(o,3)),this.setAttribute("normal",new at(c,3)),this.setAttribute("uv",new at(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qs(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class ht extends Ln{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rc,this.normalScale=new be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Rc extends ht{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new be(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Dt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Fe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Fe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Fe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class er extends ut{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Fe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class Yp extends er{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ut.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Fe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Br=new it,zo=new R,Ho=new R;class Ic{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new be(512,512),this.map=null,this.mapPass=null,this.matrix=new it,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new na,this._frameExtents=new be(1,1),this._viewportCount=1,this._viewports=[new nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;zo.setFromMatrixPosition(e.matrixWorld),t.position.copy(zo),Ho.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ho),t.updateMatrixWorld(),Br.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Br),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Br)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Go=new it,Yi=new R,zr=new R;class $p extends Ic{constructor(){super(new kt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new be(4,2),this._viewportCount=6,this._viewports=[new nt(2,1,1,1),new nt(0,1,1,1),new nt(3,1,1,1),new nt(1,1,1,1),new nt(3,0,1,1),new nt(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Yi.setFromMatrixPosition(e.matrixWorld),n.position.copy(Yi),zr.copy(n.position),zr.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(zr),n.updateMatrixWorld(),i.makeTranslation(-Yi.x,-Yi.y,-Yi.z),Go.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Go)}}class Bs extends er{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new $p}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Kp extends Ic{constructor(){super(new vc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Zp extends er{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ut.DEFAULT_UP),this.updateMatrix(),this.target=new ut,this.shadow=new Kp}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Jp extends er{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Qp{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ko(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=ko();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function ko(){return(typeof performance>"u"?Date:performance).now()}class em{constructor(e,t,n=0,i=1/0){this.ray=new $s(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new ta,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Zr(e,this,n,t),n.sort(Vo),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)Zr(e[i],this,n,t);return n.sort(Vo),n}}function Vo(s,e){return s.distance-e.distance}function Zr(s,e,t,n){if(s.layers.test(e.layers)&&s.raycast(e,t),n===!0){const i=s.children;for(let r=0,a=i.length;r<a;r++)Zr(i[r],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jr);const fe={APP_NAME:"MARS ANALOG MISSION",SUBTITLE:"SPACE Tech Labs — Immersive Analog Mission Simulator",VERSION:"1.0.0-MVP",STORAGE_KEY:"SPACE_TECH_LABS_MAM_v1",GRAPHICS:{FOV:75,NEAR_PLANE:.1,FAR_PLANE:250,DESKTOP_PIXEL_RATIO:Math.min(window.devicePixelRatio||1,2),XR_PIXEL_RATIO:1,SHADOWS_ENABLED:!0},COLORS:{SPACE_BLACK:461070,SURFACE_DARK:987930,METALLIC_PANEL:1844017,MARS_ORANGE:16733986,MARS_ORANGE_LIGHT:16740419,TECH_CYAN:58879,TECH_GREEN:58998,TECH_RED:16717636,TECH_AMBER:16755456,WARM_INTERIOR_LIGHT:16769202,MARS_SKY:10045480,MARS_TERRAIN:11883308},HABITAT:{RADIUS:7.5,HEIGHT:3.8,WALKABLE_RADIUS:6.2,WINDOW_WIDTH:7,WINDOW_HEIGHT:2.8,CAMERA_HEIGHT:1.68},MISSION:{ID:"M-001",NAME:"HABITAT RECOVERY & BIOGROWTH VALIDATION",TARGET_DURATION_SECONDS:600,MAX_DURATION_SECONDS:900},CONTROLS:{WALK_SPEED:3.5,RUN_SPEED:5.5,MOUSE_SENSITIVITY:.0022,CONTROLLER_DEADZONE:.15}};class tm{constructor(){C(this,"scene");this.scene=new Vp,this.scene.background=new Fe(fe.COLORS.SPACE_BLACK),this.scene.fog=new Ki(fe.COLORS.MARS_SKY,.006)}add(e){this.scene.add(e)}remove(e){this.scene.remove(e)}setEmergencyAtmosphere(e){e?this.scene.fog=new Ki(3803144,.015):this.scene.fog=new Ki(fe.COLORS.MARS_SKY,.006)}}class nm{constructor(){C(this,"camera");C(this,"cameraRig");C(this,"onWindowResize",()=>{this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix()});const e=window.innerWidth/window.innerHeight;this.camera=new kt(fe.GRAPHICS.FOV,e,fe.GRAPHICS.NEAR_PLANE,fe.GRAPHICS.FAR_PLANE),this.camera.position.set(0,fe.HABITAT.CAMERA_HEIGHT,2),this.cameraRig=new Et,this.cameraRig.name="CameraRig",this.cameraRig.add(this.camera),window.addEventListener("resize",this.onWindowResize)}resetPosition(){this.cameraRig.position.set(0,0,0),this.camera.position.set(0,fe.HABITAT.CAMERA_HEIGHT,2),this.camera.rotation.set(0,0,0)}dispose(){window.removeEventListener("resize",this.onWindowResize)}}class im{constructor(e){C(this,"renderer");C(this,"container");C(this,"onWindowResize",()=>{this.renderer.setSize(window.innerWidth,window.innerHeight)});this.container=e,this.renderer=new Tc({antialias:!0,powerPreference:"high-performance",alpha:!1}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(fe.GRAPHICS.DESKTOP_PIXEL_RATIO),this.renderer.toneMapping=$o,this.renderer.toneMappingExposure=1.35,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=qo,this.renderer.xr.enabled=!0,this.container.appendChild(this.renderer.domElement),window.addEventListener("resize",this.onWindowResize)}setAnimationLoop(e){this.renderer.setAnimationLoop(e)}render(e,t){this.renderer.render(e,t)}dispose(){window.removeEventListener("resize",this.onWindowResize),this.renderer.dispose(),this.renderer.domElement.parentElement&&this.renderer.domElement.parentElement.removeChild(this.renderer.domElement)}}const kn=class kn{constructor(){C(this,"listeners",new Map)}static getInstance(){return kn.instance||(kn.instance=new kn),kn.instance}on(e,t){return this.listeners.has(e)||this.listeners.set(e,new Set),this.listeners.get(e).add(t),()=>this.off(e,t)}off(e,t){const n=this.listeners.get(e);n&&(n.delete(t),n.size===0&&this.listeners.delete(e))}emit(e,t){const n=this.listeners.get(e);n&&n.forEach(i=>{try{i(t)}catch(r){console.error(`[EventBus] Error handling event "${e}":`,r)}})}clear(){this.listeners.clear()}};C(kn,"instance");let K=kn;const wi={schemaVersion:1,completedMissions:[],bestScore:0,bestTimeSeconds:0,totalRuns:0,soundEnabled:!0,lastMissionDate:null,history:[],unlockedAchievements:[]},Vn=class Vn{constructor(){C(this,"memoryCache");C(this,"isStorageAvailable");this.memoryCache={...wi},this.isStorageAvailable=this.checkStorageAvailability(),this.loadData()}static getInstance(){return Vn.instance||(Vn.instance=new Vn),Vn.instance}checkStorageAvailability(){try{const e="__mam_test_storage__";return window.localStorage.setItem(e,"ok"),window.localStorage.removeItem(e),!0}catch{return console.warn("[ProgressStorage] localStorage is unavailable. Using in-memory fallback."),!1}}loadData(){if(this.isStorageAvailable)try{const e=window.localStorage.getItem(fe.STORAGE_KEY);if(e){const t=JSON.parse(e);t.schemaVersion===wi.schemaVersion?this.memoryCache={...wi,...t}:(this.memoryCache={...wi,...t,schemaVersion:wi.schemaVersion},this.saveData())}}catch(e){console.error("[ProgressStorage] Error reading saved progress:",e)}}saveData(){if(this.isStorageAvailable)try{window.localStorage.setItem(fe.STORAGE_KEY,JSON.stringify(this.memoryCache))}catch(e){console.error("[ProgressStorage] Error writing progress data:",e)}}getData(){return this.memoryCache}recordMissionRun(e){this.memoryCache.totalRuns+=1,this.memoryCache.lastMissionDate=e.date,this.memoryCache.completedMissions.includes(e.missionId)||this.memoryCache.completedMissions.push(e.missionId),e.score>this.memoryCache.bestScore&&(this.memoryCache.bestScore=e.score),(this.memoryCache.bestTimeSeconds===0||e.timeSeconds<this.memoryCache.bestTimeSeconds)&&(this.memoryCache.bestTimeSeconds=e.timeSeconds),this.memoryCache.history.unshift(e),this.memoryCache.history.length>15&&this.memoryCache.history.pop(),this.saveData()}setSoundEnabled(e){this.memoryCache.soundEnabled=e,this.saveData()}unlockAchievement(e){return this.memoryCache.unlockedAchievements||(this.memoryCache.unlockedAchievements=[]),this.memoryCache.unlockedAchievements.includes(e)?!1:(this.memoryCache.unlockedAchievements.push(e),this.saveData(),!0)}isAchievementUnlocked(e){return(this.memoryCache.unlockedAchievements||[]).includes(e)}getUnlockedAchievements(){return this.memoryCache.unlockedAchievements||[]}clearProgress(){if(this.memoryCache={...wi},this.isStorageAvailable)try{window.localStorage.removeItem(fe.STORAGE_KEY)}catch(e){console.error(e)}}};C(Vn,"instance");let ai=Vn;const Wn=class Wn{constructor(){C(this,"ctx",null);C(this,"isEnabled",!0);C(this,"ambientGain",null);C(this,"masterGain",null);C(this,"ambientOsc",null);C(this,"emergencyInterval",null);this.isEnabled=ai.getInstance().getData().soundEnabled}static getInstance(){return Wn.instance||(Wn.instance=new Wn),Wn.instance}initContext(){if(!this.ctx){const e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx=new e,this.masterGain=this.ctx.createGain(),this.masterGain.gain.value=this.isEnabled?.35:0,this.masterGain.connect(this.ctx.destination))}this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}setEnabled(e){this.isEnabled=e,ai.getInstance().setSoundEnabled(e),this.masterGain&&(this.masterGain.gain.value=e?.35:0),!e&&this.emergencyInterval&&(clearInterval(this.emergencyInterval),this.emergencyInterval=null)}getEnabled(){return this.isEnabled}startAmbientHum(){if(this.isEnabled&&(this.initContext(),!(!this.ctx||!this.masterGain||this.ambientOsc)))try{this.ambientOsc=this.ctx.createOscillator(),this.ambientGain=this.ctx.createGain(),this.ambientOsc.type="sine",this.ambientOsc.frequency.setValueAtTime(58,this.ctx.currentTime);const e=this.ctx.createBiquadFilter();e.type="lowpass",e.frequency.setValueAtTime(120,this.ctx.currentTime),this.ambientGain.gain.setValueAtTime(.08,this.ctx.currentTime),this.ambientOsc.connect(e),e.connect(this.ambientGain),this.ambientGain.connect(this.masterGain),this.ambientOsc.start()}catch(e){console.warn("[AudioManager] Could not start ambient sound:",e)}}stopAmbientHum(){if(this.ambientOsc){try{this.ambientOsc.stop(),this.ambientOsc.disconnect()}catch{}this.ambientOsc=null}}playClick(){if(this.isEnabled&&(this.initContext(),!(!this.ctx||!this.masterGain)))try{const e=this.ctx.createOscillator(),t=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(800,this.ctx.currentTime),e.frequency.exponentialRampToValueAtTime(1400,this.ctx.currentTime+.05),t.gain.setValueAtTime(.12,this.ctx.currentTime),t.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.05),e.connect(t),t.connect(this.masterGain),e.start(),e.stop(this.ctx.currentTime+.05)}catch{}}playSuccessTone(){if(!this.isEnabled||(this.initContext(),!this.ctx||!this.masterGain))return;[523.25,659.25,783.99,1046.5].forEach((t,n)=>{if(!this.ctx||!this.masterGain)return;const i=this.ctx.createOscillator(),r=this.ctx.createGain(),a=this.ctx.currentTime+n*.08;i.type="triangle",i.frequency.setValueAtTime(t,a),r.gain.setValueAtTime(.15,a),r.gain.exponentialRampToValueAtTime(.001,a+.35),i.connect(r),r.connect(this.masterGain),i.start(a),i.stop(a+.35)})}startEmergencySiren(){if(!this.isEnabled||this.emergencyInterval)return;this.initContext();const e=()=>{if(!(!this.ctx||!this.masterGain||!this.isEnabled))try{const t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="sawtooth",t.frequency.setValueAtTime(880,this.ctx.currentTime),t.frequency.linearRampToValueAtTime(440,this.ctx.currentTime+.3),n.gain.setValueAtTime(.2,this.ctx.currentTime),n.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.35),t.connect(n),n.connect(this.masterGain),t.start(),t.stop(this.ctx.currentTime+.35)}catch{}};e(),this.emergencyInterval=window.setInterval(e,800)}stopEmergencySiren(){this.emergencyInterval&&(clearInterval(this.emergencyInterval),this.emergencyInterval=null)}};C(Wn,"instance");let je=Wn;const Xn=class Xn{constructor(){C(this,"interactables",new Map);C(this,"raycaster",new em);C(this,"currentHovered",null);C(this,"rayOriginCenter",new be(0,0));this.raycaster.far=4.2}static getInstance(){return Xn.instance||(Xn.instance=new Xn),Xn.instance}register(e){this.interactables.set(e.id,e),e.object3D.userData.interactableId=e.id,e.object3D.traverse(t=>{t.userData.interactableId=e.id})}unregister(e){const t=this.interactables.get(e);t&&(this.currentHovered===t&&this.clearHover(),this.interactables.delete(e))}getInteractable(e){return this.interactables.get(e)}updateDesktop(e){this.raycaster.setFromCamera(this.rayOriginCenter,e),this.evaluateRaycast()}evaluateRaycast(){var i;const e=Array.from(this.interactables.values()).map(r=>r.object3D),t=this.raycaster.intersectObjects(e,!0);let n=null;for(const r of t){let a=r.object;for(;a;){const o=(i=a.userData)==null?void 0:i.interactableId;if(o&&this.interactables.has(o)){const c=this.interactables.get(o);if(c.canInteract()){n=c;break}}a=a.parent}if(n)break}n!==this.currentHovered&&(this.currentHovered&&this.currentHovered.onHoverEnd&&this.currentHovered.onHoverEnd(),this.currentHovered=n,this.currentHovered&&this.currentHovered.onHoverStart&&this.currentHovered.onHoverStart(),K.getInstance().emit("interaction:hoverChanged",{interactable:this.currentHovered,hasTarget:!!this.currentHovered}))}testRay(e,t){var r;this.raycaster.set(e,t);const n=Array.from(this.interactables.values()).map(a=>a.object3D),i=this.raycaster.intersectObjects(n,!0);for(const a of i){let o=a.object;for(;o;){const c=(r=o.userData)==null?void 0:r.interactableId;if(c&&this.interactables.has(c)){const l=this.interactables.get(c);if(l.canInteract())return l}o=o.parent}}return null}raycastFromScreenPoint(e,t,n){var o;const i=new be(e/window.innerWidth*2-1,-(t/window.innerHeight)*2+1);this.raycaster.setFromCamera(i,n);const r=Array.from(this.interactables.values()).map(c=>c.object3D),a=this.raycaster.intersectObjects(r,!0);for(const c of a){if(c.distance>this.raycaster.far)continue;let l=c.object;for(;l;){const h=(o=l.userData)==null?void 0:o.interactableId;if(h&&this.interactables.has(h)){const d=this.interactables.get(h);if(d.canInteract())return d}l=l.parent}}return null}interactAtPoint(e,t,n){const i=this.raycastFromScreenPoint(e,t,n);return i&&i.canInteract()?(je.getInstance().playClick(),i.onInteract(),K.getInstance().emit("interaction:triggered",i.id),!0):!1}getCurrentHovered(){return this.currentHovered}interactCurrent(){return this.currentHovered&&this.currentHovered.canInteract()?(je.getInstance().playClick(),this.currentHovered.onInteract(),K.getInstance().emit("interaction:triggered",this.currentHovered.id),!0):!1}interactDirect(e){const t=this.interactables.get(e);return t&&t.canInteract()?(je.getInstance().playClick(),t.onInteract(),K.getInstance().emit("interaction:triggered",t.id),!0):!1}clearHover(){this.currentHovered&&this.currentHovered.onHoverEnd&&this.currentHovered.onHoverEnd(),this.currentHovered=null,K.getInstance().emit("interaction:hoverChanged",{interactable:null,hasTarget:!1})}};C(Xn,"instance");let Mt=Xn;class sn{static clamp(e,t,n){return Math.max(t,Math.min(n,e))}static lerp(e,t,n){return e+(t-e)*sn.clamp(n,0,1)}static formatTime(e){const t=Math.floor(e/60),n=Math.floor(e%60),i=Math.floor(e%1*10),r=t.toString().padStart(2,"0"),a=n.toString().padStart(2,"0");return`${r}:${a}.${i}`}static clampToHabitatWalkable(e,t,n){let i=sn.clamp(e,n.minX,n.maxX),r=sn.clamp(t,n.minZ,n.maxZ);if(n.obstacles)for(const a of n.obstacles){const o=i-a.x,c=r-a.z,l=o*o+c*c,h=a.radius;if(l<h*h){const d=Math.sqrt(l)||.001,f=h-d;i+=o/d*f,r+=c/d*f}}return{x:i,z:r}}}const jn=class jn{constructor(){C(this,"currentMode","desktop");C(this,"isVRSupported",!1);C(this,"isMetaQuest",!1);C(this,"isMobile",!1);C(this,"isTouch",!1);C(this,"onResize",()=>{this.updateMobileState()});this.detectDevice(),window.addEventListener("resize",this.onResize),window.addEventListener("orientationchange",this.onResize)}static getInstance(){return jn.instance||(jn.instance=new jn),jn.instance}async detectDevice(){var n;const e=navigator.userAgent||"";this.isMetaQuest=/Quest/i.test(e)||/OculusBrowser/i.test(e),this.isTouch="ontouchstart"in window||navigator.maxTouchPoints>0;const t=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile/i.test(e);if(this.isMobile=this.isTouch&&t||this.isTouch&&window.innerWidth<=1024,this.isMetaQuest?this.currentMode="desktop":this.isMobile?this.currentMode="mobile":this.currentMode="desktop",this.applyBodyClasses(),"xr"in navigator&&((n=navigator.xr)!=null&&n.isSessionSupported))try{this.isVRSupported=await navigator.xr.isSessionSupported("immersive-vr")}catch{this.isVRSupported=!1}else this.isVRSupported=!1;K.getInstance().emit("platform:detected",{isVRSupported:this.isVRSupported,isMetaQuest:this.isMetaQuest,isMobile:this.isMobile,isTouch:this.isTouch,mode:this.currentMode})}updateMobileState(){const e=navigator.userAgent||"",t=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile/i.test(e),n=this.isMobile;this.isMobile=this.isTouch&&t||this.isTouch&&window.innerWidth<=1024,this.currentMode!=="webxr"&&(this.currentMode=this.isMobile?"mobile":"desktop"),this.applyBodyClasses(),n!==this.isMobile&&K.getInstance().emit("platform:modeChanged",this.currentMode)}applyBodyClasses(){typeof document<"u"&&document.body&&(document.body.classList.toggle("is-mobile",this.isMobile),document.body.classList.toggle("is-touch",this.isTouch),document.body.classList.toggle("is-portrait",this.isPortrait()),document.body.classList.toggle("is-landscape",!this.isPortrait()))}isPortrait(){return window.innerHeight>window.innerWidth}checkVRSupport(){var e;return"xr"in navigator&&((e=navigator.xr)!=null&&e.isSessionSupported)?navigator.xr.isSessionSupported("immersive-vr"):Promise.resolve(!1)}getIsVRSupported(){return this.isVRSupported}getIsMetaQuest(){return this.isMetaQuest}getIsMobile(){return this.isMobile}getIsTouch(){return this.isTouch}getCurrentMode(){return this.currentMode}setMode(e){this.currentMode!==e&&(this.currentMode=e,K.getInstance().emit("platform:modeChanged",e))}};C(jn,"instance");let en=jn;class sm{constructor(e,t,n){C(this,"camera");C(this,"cameraRig");C(this,"domElement");C(this,"isLocked",!1);C(this,"isEnabled",!0);C(this,"pitch",0);C(this,"yaw",0);C(this,"touchMoveX",0);C(this,"touchMoveZ",0);C(this,"touchRunning",!1);C(this,"keys",{KeyW:!1,KeyA:!1,KeyS:!1,KeyD:!1,ArrowUp:!1,ArrowLeft:!1,ArrowDown:!1,ArrowRight:!1,ShiftLeft:!1});C(this,"velocity",new R);C(this,"direction",new R);C(this,"obstacles",[{x:0,z:-5.8,radius:1.6},{x:-5.4,z:0,radius:1.5},{x:5.4,z:0,radius:1.5},{x:-3.8,z:4.2,radius:1.2},{x:3.8,z:4.2,radius:1.2}]);C(this,"onKeyDown",e=>{this.isEnabled&&(e.code in this.keys&&(this.keys[e.code]=!0),e.code==="KeyE"&&Mt.getInstance().interactCurrent(),e.code==="Escape"&&K.getInstance().emit("ui:togglePause"))});C(this,"onKeyUp",e=>{e.code in this.keys&&(this.keys[e.code]=!1)});C(this,"onCanvasClick",()=>{var e,t;if(this.isEnabled){if(en.getInstance().getIsMobile()){Mt.getInstance().interactCurrent();return}this.isLocked?Mt.getInstance().interactCurrent():document.querySelector(".modal-backdrop:not(.hidden), .fullscreen-modal:not(.hidden)")||(t=(e=this.domElement).requestPointerLock)==null||t.call(e)}});C(this,"onPointerLockChange",()=>{this.isLocked=document.pointerLockElement===this.domElement,K.getInstance().emit("input:pointerLockChanged",this.isLocked)});C(this,"onMouseMove",e=>{if(!this.isLocked||!this.isEnabled)return;const t=e.movementX||0,n=e.movementY||0;this.addLookDelta(t*fe.CONTROLS.MOUSE_SENSITIVITY,n*fe.CONTROLS.MOUSE_SENSITIVITY)});this.camera=e,this.cameraRig=t,this.domElement=n,this.bindEvents()}bindEvents(){window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp),document.addEventListener("pointerlockchange",this.onPointerLockChange),document.addEventListener("mousemove",this.onMouseMove),this.domElement.addEventListener("click",this.onCanvasClick)}addLookDelta(e,t){if(!this.isEnabled)return;this.yaw-=e,this.pitch-=t;const n=Math.PI/2.05;this.pitch=sn.clamp(this.pitch,-n,n),this.cameraRig.rotation.y=this.yaw,this.camera.rotation.x=this.pitch}setTouchMove(e,t){this.touchMoveX=e,this.touchMoveZ=t}setTouchRunning(e){this.touchRunning=e}update(e){if(!this.isEnabled)return;const t=Number(this.keys.KeyW||this.keys.ArrowUp)-Number(this.keys.KeyS||this.keys.ArrowDown),n=Number(this.keys.KeyD||this.keys.ArrowRight)-Number(this.keys.KeyA||this.keys.ArrowLeft),i=t!==0?t:this.touchMoveZ,r=n!==0?n:this.touchMoveX,a=Math.min(Math.sqrt(r*r+i*i),1),l=(this.keys.ShiftLeft||this.touchRunning||a>.9?fe.CONTROLS.RUN_SPEED:fe.CONTROLS.WALK_SPEED)*a;if(a>.05){const h=new R(0,0,-1).applyAxisAngle(new R(0,1,0),this.yaw),d=new R(1,0,0).applyAxisAngle(new R(0,1,0),this.yaw),f=h.multiplyScalar(i).add(d.multiplyScalar(r)).normalize().multiplyScalar(l);this.velocity.lerp(f,.25)}else this.velocity.lerp(new R(0,0,0),.3);if(this.velocity.lengthSq()>1e-4){const h=this.cameraRig.position.clone().addScaledVector(this.velocity,e),d=sn.clampToHabitatWalkable(h.x,h.z,{minX:-6.2,maxX:fe.HABITAT.WALKABLE_RADIUS,minZ:-6.2,maxZ:fe.HABITAT.WALKABLE_RADIUS,obstacles:this.obstacles}),f=Math.sqrt(d.x*d.x+d.z*d.z);if(f>fe.HABITAT.WALKABLE_RADIUS){const m=fe.HABITAT.WALKABLE_RADIUS/f;this.cameraRig.position.x=d.x*m,this.cameraRig.position.z=d.z*m}else this.cameraRig.position.x=d.x,this.cameraRig.position.z=d.z}Mt.getInstance().updateDesktop(this.camera)}setEnabled(e){var t;this.isEnabled=e,!e&&this.isLocked&&((t=document.exitPointerLock)==null||t.call(document)),e||(this.touchMoveX=0,this.touchMoveZ=0)}getIsLocked(){return this.isLocked}exitPointerLock(){var e;this.isLocked&&((e=document.exitPointerLock)==null||e.call(document))}dispose(){window.removeEventListener("keydown",this.onKeyDown),window.removeEventListener("keyup",this.onKeyUp),document.removeEventListener("pointerlockchange",this.onPointerLockChange),document.removeEventListener("mousemove",this.onMouseMove),this.domElement.removeEventListener("click",this.onCanvasClick)}}var $e=(s=>(s.INITIALIZING="INITIALIZING",s.BRIEFING="BRIEFING",s.READY="READY",s.ACTIVE="ACTIVE",s.OBJECTIVE_COMPLETED="OBJECTIVE_COMPLETED",s.EMERGENCY="EMERGENCY",s.RECOVERY="RECOVERY",s.COMPLETED="COMPLETED",s.FAILED="FAILED",s.PAUSED="PAUSED",s))($e||{});const rm=[{id:"obj_inspection",order:1,title:"Inspección de Soporte Vital",description:"Acceda a la consola ECLSS y ejecute la rutina de diagnóstico integral.",isCompleted:!1,isCurrent:!0,scoreWeight:12},{id:"obj_science",order:2,title:"Experimento BIOGROWTH-01",description:"Calibre fotoperiodo y suministro hidropónico en la Estación de Ciencias.",isCompleted:!1,isCurrent:!1,scoreWeight:14},{id:"obj_emergency",order:3,title:"Resolución de Contingencia de Filtración",description:"Obtenga filtro HEPA-C1 en almacén y reemplace el cartucho saturado.",isCompleted:!1,isCurrent:!1,scoreWeight:14}],am=[{id:"tut_movement",order:1,title:"Familiarización de Desplazamiento",description:"Usa el joystick táctil o teclas WASD para caminar unos metros por el hábitat.",isCompleted:!1,isCurrent:!0,scoreWeight:20},{id:"tut_mission_control",order:2,title:"Centro de Mando & Telemetría",description:"Acércate e interactúa con el Centro de Control frontal [CENTRO DE CONTROL].",isCompleted:!1,isCurrent:!1,scoreWeight:20},{id:"tut_lifesupport",order:3,title:"Consola de Soporte Vital (ECLSS)",description:"Localiza la consola cian a la izquierda [1. SOPORTE VITAL] e inicia el diagnóstico.",isCompleted:!1,isCurrent:!1,scoreWeight:20},{id:"tut_science",order:4,title:"Módulo Botánico BIOGROWTH-01",description:"Inspecciona la Estación de Ciencias verde a la derecha [2. CIENCIA BIOLÓGICA].",isCompleted:!1,isCurrent:!1,scoreWeight:20},{id:"tut_resources",order:5,title:"Gabinete de Suministros & Herramientas",description:"Visita el almacén ámbar al fondo [3. ALMACÉN Y REPUESTOS] para completar el entrenamiento.",isCompleted:!1,isCurrent:!1,scoreWeight:20}],om=[{id:"cert_diagnostics",order:1,title:"Auditoría Atmosférica y Filtración ECLSS",description:"Ejecute diagnóstico completo verificando parámetros O2, CO2 y presión sin desviaciones.",isCompleted:!1,isCurrent:!0,scoreWeight:10},{id:"cert_biogrowth",order:2,title:"Calibración Fotónica BIOGROWTH-01",description:"Configure fotoperiodo óptimo (Azul+Rojo) e irrigación hidropónica de precisión.",isCompleted:!1,isCurrent:!1,scoreWeight:10},{id:"cert_emergency",order:3,title:"Respuesta ante Contingencia Crítica",description:"Siga el checklist de 5 pasos con tolerancia cero a errores para reemplazar el filtro saturado.",isCompleted:!1,isCurrent:!1,scoreWeight:10},{id:"cert_airlock",order:4,title:"Verificación de Hermeticidad en Esclusa (Airlock)",description:"Inspeccione y certifique la presurización de la compuerta de salida exterior EVA.",isCompleted:!1,isCurrent:!1,scoreWeight:10}],qn=class qn{constructor(){C(this,"items",new Map);this.initDefaultInventory()}static getInstance(){return qn.instance||(qn.instance=new qn),qn.instance}initDefaultInventory(){this.items.set("filter_hepa_c1",{id:"filter_hepa_c1",name:"Cartucho Filtro HEPA-C1 (Módulo Secundario)",category:"component",description:"Unidad presurizada de carbón activado y membrana de microfibra de borosilicato.",inStock:!0,inPlayerPossession:!1}),this.items.set("seal_wrench",{id:"seal_wrench",name:"Llave Dinamométrica de Acople Rápido",category:"tool",description:"Herramienta de precisión para fijación de bridas de soporte vital.",inStock:!0,inPlayerPossession:!0})}getItem(e){return this.items.get(e)}getAllItems(){return Array.from(this.items.values())}hasItem(e){const t=this.items.get(e);return!!t&&t.inPlayerPossession}retrieveFilterFromCabinet(){const e=this.items.get("filter_hepa_c1");return e&&e.inStock&&!e.inPlayerPossession?(e.inStock=!1,e.inPlayerPossession=!0,K.getInstance().emit("resources:itemRetrieved",e),!0):!1}consumeFilter(){const e=this.items.get("filter_hepa_c1");return e&&e.inPlayerPossession?(e.inPlayerPossession=!1,K.getInstance().emit("resources:itemConsumed",e),!0):!1}reset(){this.initDefaultInventory()}};C(qn,"instance");let gn=qn;const Yn=class Yn{constructor(){C(this,"isActive",!1);C(this,"isResolved",!1);C(this,"currentStepIndex",0);C(this,"proceduralMistakes",0);C(this,"steps",[{id:"step_isolate",name:"1. Aislar Bucle Secundario",description:"Cerrar la válvula de aislamiento V-204 para evitar retorno de contaminantes.",completed:!1},{id:"step_depressurize",name:"2. Purgar y Despresurizar Caja de Filtro",description:"Aliviar presión residual hasta 0.2 bar manométricos.",completed:!1},{id:"step_replace",name:"3. Instalar Cartucho HEPA-C1 de Repuesto",description:"Insertar la nueva unidad de filtrado obtenida del Gabinete de Recursos.",completed:!1,requiredItemId:"filter_hepa_c1"},{id:"step_torque",name:"4. Ajustar Brida de Sellado Dinamométrico",description:"Aplicar 35 N·m con la llave de acople rápido para garantizar hermeticidad.",completed:!1},{id:"step_reopen",name:"5. Restablecer Flujo y Calibrar Presión",description:"Reabrir V-204 y verificar caída de presión nominal (< 12 Pa).",completed:!1}])}static getInstance(){return Yn.instance||(Yn.instance=new Yn),Yn.instance}triggerEmergency(){this.isActive||this.isResolved||(this.isActive=!0,this.currentStepIndex=0,this.proceduralMistakes=0,K.getInstance().emit("emergency:started",{timestamp:Date.now(),severity:"CRITICAL",subsystem:"ECLSS_SECONDARY_FILTRATION"}))}getIsActive(){return this.isActive}getIsResolved(){return this.isResolved}getCurrentStep(){return!this.isActive||this.currentStepIndex>=this.steps.length?null:this.steps[this.currentStepIndex]}executeStep(e){if(!this.isActive)return{success:!1,message:"No hay contingencia activa en este momento.",allComplete:!1};const t=this.steps[this.currentStepIndex];if(t.id!==e)return this.proceduralMistakes+=1,{success:!1,message:`Secuencia incorrecta. Paso esperado: "${t.name}". Respete los protocolos operacionales de SPACE Tech Labs.`,allComplete:!1};if(t.requiredItemId){if(!gn.getInstance().hasItem(t.requiredItemId))return this.proceduralMistakes+=1,{success:!1,message:"Falta componente requerido: Diríjase al Gabinete de Recursos para extraer el Cartucho HEPA-C1.",allComplete:!1};gn.getInstance().consumeFilter()}return t.completed=!0,this.currentStepIndex+=1,K.getInstance().emit("emergency:stepCompleted",{stepId:e,stepIndex:this.currentStepIndex,totalSteps:this.steps.length}),this.currentStepIndex>=this.steps.length?(this.isActive=!1,this.isResolved=!0,K.getInstance().emit("emergency:resolved",{proceduralMistakes:this.proceduralMistakes}),{success:!0,message:"¡Circuito restaurado con éxito! Condiciones atmosféricas estabilizadas.",allComplete:!0}):{success:!0,message:`Paso "${t.name}" completado correctamente.`,allComplete:!1}}getProceduralMistakes(){return this.proceduralMistakes}reset(){this.isActive=!1,this.isResolved=!1,this.currentStepIndex=0,this.proceduralMistakes=0,this.steps.forEach(e=>e.completed=!1)}};C(Yn,"instance");let oi=Yn;class Wo{constructor(){C(this,"id","M-001");C(this,"name","HABITAT RECOVERY");C(this,"type","standard");C(this,"objectives",[]);C(this,"isEmergencyTriggered",!1);this.reset()}reset(){this.objectives=JSON.parse(JSON.stringify(rm)),this.isEmergencyTriggered=!1}getObjectives(){return this.objectives}getCompletedCount(){return this.objectives.filter(e=>e.isCompleted).length}getProgressPercent(){const e=this.objectives.length;return e===0?0:Math.round(this.getCompletedCount()/e*100)}handleLifeSupportDiagnostic(){const e=this.objectives.find(t=>t.id==="obj_inspection");if(e&&!e.isCompleted){e.isCompleted=!0,e.isCurrent=!1;const t=this.objectives.find(n=>n.id==="obj_science");t&&(t.isCurrent=!0),je.getInstance().playSuccessTone(),K.getInstance().emit("mission:objectiveUpdated",{objectiveId:e.id,completed:!0,percent:this.getProgressPercent()})}}handleScienceCompleted(){const e=this.objectives.find(t=>t.id==="obj_science");e&&!e.isCompleted&&(e.isCompleted=!0,e.isCurrent=!1,je.getInstance().playSuccessTone(),K.getInstance().emit("mission:objectiveUpdated",{objectiveId:e.id,completed:!0,percent:this.getProgressPercent()}),this.isEmergencyTriggered||(this.isEmergencyTriggered=!0,window.setTimeout(()=>{const t=this.objectives.find(n=>n.id==="obj_emergency");t&&(t.isCurrent=!0),oi.getInstance().triggerEmergency()},1500)))}handleEmergencyResolved(){const e=this.objectives.find(t=>t.id==="obj_emergency");e&&!e.isCompleted&&(e.isCompleted=!0,e.isCurrent=!1,je.getInstance().playSuccessTone(),K.getInstance().emit("mission:objectiveUpdated",{objectiveId:e.id,completed:!0,percent:this.getProgressPercent()}))}}class cm{constructor(){C(this,"id","M-TUTORIAL");C(this,"name","ACADEMIA: ENTRENAMIENTO DE CONTROLES & HÁBITAT");C(this,"type","tutorial");C(this,"objectives",[]);C(this,"totalDistanceMoved",0);this.reset()}reset(){this.objectives=JSON.parse(JSON.stringify(am)),this.totalDistanceMoved=0}getObjectives(){return this.objectives}getCompletedCount(){return this.objectives.filter(e=>e.isCompleted).length}getProgressPercent(){const e=this.objectives.length;return e===0?0:Math.round(this.getCompletedCount()/e*100)}completeObjective(e,t){const n=this.objectives.find(i=>i.id===e);if(n&&!n.isCompleted){if(n.isCompleted=!0,n.isCurrent=!1,t){const i=this.objectives.find(r=>r.id===t);i&&!i.isCompleted&&(i.isCurrent=!0)}else{const i=this.objectives.find(r=>!r.isCompleted);i&&(i.isCurrent=!0)}je.getInstance().playSuccessTone(),K.getInstance().emit("mission:objectiveUpdated",{objectiveId:n.id,completed:!0,percent:this.getProgressPercent()})}}handleMovement(e){const t=this.objectives.find(n=>n.id==="tut_movement");t&&!t.isCompleted&&(this.totalDistanceMoved+=e,this.totalDistanceMoved>=1.8&&this.completeObjective("tut_movement","tut_mission_control"))}handleInteraction(e){switch(e){case"missionControl":this.completeObjective("tut_mission_control","tut_lifesupport");break;case"lifeSupportConsole":this.completeObjective("tut_lifesupport","tut_science");break;case"scienceStation":this.completeObjective("tut_science","tut_resources");break;case"resourceCabinet":this.completeObjective("tut_resources");break}}handleLifeSupportDiagnostic(){this.completeObjective("tut_lifesupport","tut_science")}handleScienceCompleted(){this.completeObjective("tut_science","tut_resources")}}class lm{constructor(){C(this,"id","M-CERT-01");C(this,"name","EVALUACIÓN OFICIAL: CERTIFICACIÓN DE ASTRONAUTA ANÁLOGO");C(this,"type","certification");C(this,"objectives",[]);C(this,"isEmergencyTriggered",!1);this.reset()}reset(){this.objectives=JSON.parse(JSON.stringify(om)),this.isEmergencyTriggered=!1}getObjectives(){return this.objectives}getCompletedCount(){return this.objectives.filter(e=>e.isCompleted).length}getProgressPercent(){const e=this.objectives.length;return e===0?0:Math.round(this.getCompletedCount()/e*100)}completeObjective(e,t){const n=this.objectives.find(i=>i.id===e);if(n&&!n.isCompleted){if(n.isCompleted=!0,n.isCurrent=!1,t){const i=this.objectives.find(r=>r.id===t);i&&!i.isCompleted&&(i.isCurrent=!0)}else{const i=this.objectives.find(r=>!r.isCompleted);i&&(i.isCurrent=!0)}je.getInstance().playSuccessTone(),K.getInstance().emit("mission:objectiveUpdated",{objectiveId:n.id,completed:!0,percent:this.getProgressPercent()})}}handleLifeSupportDiagnostic(){this.completeObjective("cert_diagnostics","cert_biogrowth")}handleScienceCompleted(){this.completeObjective("cert_biogrowth","cert_emergency"),this.isEmergencyTriggered||(this.isEmergencyTriggered=!0,window.setTimeout(()=>{oi.getInstance().triggerEmergency()},1200))}handleEmergencyResolved(){this.completeObjective("cert_emergency","cert_airlock")}handleInteraction(e){if(e==="airlockPanel"){const t=this.objectives.find(n=>n.id==="cert_emergency");t&&t.isCompleted&&this.completeObjective("cert_airlock")}}}class hm{static calculate(e){const t=e.totalObjectivesCount>0?e.completedObjectivesCount/e.totalObjectivesCount:0,n=Math.round(t*40),i=Math.max(0,Math.round(30-e.proceduralMistakes*6)),r=Math.round(Math.max(0,Math.min(100,e.scienceAccuracy))/100*20);let a=10;if(e.timeElapsedSeconds>e.targetTimeSeconds){const d=e.timeElapsedSeconds-e.targetTimeSeconds;a=Math.max(2,Math.round(10-d/60*2.5))}const o=Math.min(100,Math.max(0,n+i+r+a));let c="COMPETENTE";o>=88?c="SOBRESALIENTE":o<70&&(c="NECESITA REVISIÓN");const l=["El aislamiento y la gestión de atmósferas en bases análogas exigen adherencia irrestricta a listas de comprobación (checklists).","En sistemas de soporte vital de circuito cerrado (ECLSS), una variación en el bucle secundario puede comprometer la remoción de CO₂.","El cultivo botánico in situ (ISRU bio-regenerativo) depende de balances exactos de PAR (Radiación Fotosintéticamente Activa) y humedad radicular."],h=[];return e.proceduralMistakes>0?h.push(`Se registraron ${e.proceduralMistakes} desvíos de procedimiento en la secuencia de emergencia. Repase la guía de aislamiento de válvulas antes del desacople.`):h.push("Ejecución procedimental impecable sin errores de secuencia."),e.scienceAccuracy<75?h.push("Mejore la calibración del fotoperiodo e irrigación para optimizar la tasa fotosintética del espécimen botánico."):h.push("Parámetros de crecimiento vegetal ajustados en rango óptimo."),a<8&&h.push("Optimice los tiempos de desplazamiento entre estaciones dentro del módulo del hábitat."),{totalScore:o,rating:c,breakdown:{objectivesScore:n,proceduralScore:i,resourcesScore:r,timeScore:a},metrics:{timeElapsedSeconds:e.timeElapsedSeconds,proceduralMistakes:e.proceduralMistakes,scienceAccuracy:e.scienceAccuracy,completedObjectivesCount:e.completedObjectivesCount},educationalNotes:l,recommendations:h}}}const $n=class $n{constructor(){C(this,"availableSamples",[{id:"S-01",name:"Arabidopsis Análoga",scientificName:"Arabidopsis thaliana (Ecol-Mars-1)",targetLight:70,targetWater:55,description:"Planta modelo para estudios genéticos en gravedad reducida y fotoperiodos regulados."},{id:"S-02",name:"Espirulina Biocultivo",scientificName:"Arthrospira platensis (Strain-M)",targetLight:85,targetWater:80,description:"Cianobacteria fotosintética de alto rendimiento proteico y producción de O₂."},{id:"S-03",name:"Tomate Enano Marciano",scientificName:"Solanum lycopersicum Micro-Tom",targetLight:60,targetWater:65,description:"Cultivo compacto apto para cámaras hidropónicas de hábitat con tolerancia a sales."}]);C(this,"selectedSample",this.availableSamples[0]);C(this,"lightLevel",50);C(this,"waterLevel",50);C(this,"completedResult",null)}static getInstance(){return $n.instance||($n.instance=new $n),$n.instance}setSample(e){const t=this.availableSamples.find(n=>n.id===e);t&&(this.selectedSample=t,K.getInstance().emit("science:sampleChanged",this.selectedSample))}getSelectedSample(){return this.selectedSample}setLight(e){this.lightLevel=Math.max(0,Math.min(100,Math.round(e)))}getLight(){return this.lightLevel}setWater(e){this.waterLevel=Math.max(0,Math.min(100,Math.round(e)))}getWater(){return this.waterLevel}getCompletedResult(){return this.completedResult}executeExperiment(){const e=Math.abs(this.lightLevel-this.selectedSample.targetLight),t=Math.abs(this.waterLevel-this.selectedSample.targetWater),n=e+t,i=Math.max(0,Math.min(100,100-n));let r="CRECIMIENTO ÓPTIMO",a=94,o="";return i>=85?(r="CRECIMIENTO ÓPTIMO",a=Math.round(88+(i-85)*.8),o="Calibración fotobiológica de precisión. Tasa fotosintética nominal alcanzada."):i>=60?(r="CRECIMIENTO MODERADO",a=Math.round(62+(i-60)*1),o="Crecimiento aceptable pero con desviación del punto óptimo de saturación lumínica o nutricional."):(r="ESTRÉS VEGETAL",a=Math.round(Math.max(20,i*.7)),o="Desbalance fisiológico severo detectado: revise parámetros de PAR e irrigación hidropónica."),this.completedResult={sampleId:this.selectedSample.id,sampleName:this.selectedSample.name,appliedLight:this.lightLevel,appliedWater:this.waterLevel,accuracyScore:i,outcome:r,growthIndexPercent:a,educationalNote:o},K.getInstance().emit("science:completed",this.completedResult),this.completedResult}reset(){this.selectedSample=this.availableSamples[0],this.lightLevel=50,this.waterLevel=50,this.completedResult=null}};C($n,"instance");let Qi=$n;const Kn=class Kn{constructor(){C(this,"telemetry",{o2Percent:20.9,co2Ppm:420,cabinPressureKpa:101.3,powerKw:98.4,filterLoopStatus:"NOMINAL",diagnosticCompleted:!1});C(this,"isEmergencyActive",!1);this.bindEvents()}static getInstance(){return Kn.instance||(Kn.instance=new Kn),Kn.instance}bindEvents(){K.getInstance().on("emergency:started",()=>{this.isEmergencyActive=!0,this.telemetry.filterLoopStatus="ANOMALÍA CRÍTICA",K.getInstance().emit("lifesupport:updated",this.telemetry)}),K.getInstance().on("emergency:resolved",()=>{this.isEmergencyActive=!1,this.telemetry.filterLoopStatus="RESTAURADO",this.telemetry.co2Ppm=440,this.telemetry.o2Percent=20.8,K.getInstance().emit("lifesupport:updated",this.telemetry)})}getTelemetry(){return this.telemetry}runDiagnostic(){this.telemetry.diagnosticCompleted=!0,this.telemetry.filterLoopStatus="ADVERTENCIA";const e={steps:[{name:"1. Inyectores de O₂ Criogénico",status:"OK",detail:"Presión en colector nominal (2.4 bar)"},{name:"2. Válvulas Reguladoras Barométricas",status:"OK",detail:"Hermeticidad 101.3 kPa verificada"},{name:"3. Circuito de Filtración Secundario",status:"WARN",detail:"Restricción de flujo detectada en cartucho HEPA-C1"}],anomalyFound:!0};return K.getInstance().emit("lifesupport:diagnosticComplete",e),K.getInstance().emit("lifesupport:updated",this.telemetry),e}update(e){this.isEmergencyActive&&(this.telemetry.co2Ppm=Math.min(920,this.telemetry.co2Ppm+e*8.5),this.telemetry.o2Percent=Math.max(19.6,this.telemetry.o2Percent-e*.03),K.getInstance().emit("lifesupport:updated",this.telemetry))}reset(){this.telemetry={o2Percent:20.9,co2Ppm:420,cabinPressureKpa:101.3,powerKw:98.4,filterLoopStatus:"NOMINAL",diagnosticCompleted:!1},this.isEmergencyActive=!1}};C(Kn,"instance");let es=Kn;const Zn=class Zn{constructor(){C(this,"state",$e.INITIALIZING);C(this,"previousState",$e.INITIALIZING);C(this,"missionType","standard");C(this,"activeMission");C(this,"elapsedSeconds",0);C(this,"isTimerRunning",!1);C(this,"latestReport",null);this.activeMission=new Wo,this.bindEvents()}static getInstance(){return Zn.instance||(Zn.instance=new Zn),Zn.instance}bindEvents(){K.getInstance().on("lifesupport:diagnosticComplete",()=>{var e,t;(t=(e=this.activeMission).handleLifeSupportDiagnostic)==null||t.call(e),this.checkMissionAdvancement()}),K.getInstance().on("science:completed",()=>{var e,t;(t=(e=this.activeMission).handleScienceCompleted)==null||t.call(e),this.checkMissionAdvancement()}),K.getInstance().on("emergency:started",()=>{this.setState($e.EMERGENCY)}),K.getInstance().on("emergency:resolved",()=>{var e,t;this.setState($e.RECOVERY),(t=(e=this.activeMission).handleEmergencyResolved)==null||t.call(e),this.checkMissionAdvancement()}),K.getInstance().on("interaction:triggered",e=>{var t,n;(n=(t=this.activeMission).handleInteraction)==null||n.call(t,e),this.checkMissionAdvancement()})}setMissionType(e){this.missionType=e,e==="tutorial"?this.activeMission=new cm:e==="certification"?this.activeMission=new lm:this.activeMission=new Wo,K.getInstance().emit("mission:typeChanged",e)}getMissionType(){return this.missionType}getState(){return this.state}setState(e){this.state!==e&&(this.previousState=this.state,this.state=e,K.getInstance().emit("mission:stateChanged",{previous:this.previousState,current:this.state}))}getActiveMission(){return this.activeMission}getElapsedSeconds(){return this.elapsedSeconds}getLatestReport(){return this.latestReport}startMission(){this.resetMission(),this.setState($e.ACTIVE),this.isTimerRunning=!0}pauseMission(){(this.state===$e.ACTIVE||this.state===$e.EMERGENCY||this.state===$e.RECOVERY)&&(this.setState($e.PAUSED),this.isTimerRunning=!1)}resumeMission(){this.state===$e.PAUSED&&(this.setState(this.previousState||$e.ACTIVE),this.isTimerRunning=!0)}resetMission(){this.elapsedSeconds=0,this.isTimerRunning=!1,this.latestReport=null,this.activeMission.reset(),es.getInstance().reset(),Qi.getInstance().reset(),gn.getInstance().reset(),oi.getInstance().reset(),this.setState($e.READY)}checkMissionAdvancement(){const e=this.activeMission.objectives.length;this.activeMission.getCompletedCount()>=e&&this.state!==$e.COMPLETED&&this.completeMission()}completeMission(){this.isTimerRunning=!1,this.setState($e.COMPLETED);const e=Qi.getInstance().getCompletedResult(),t=e?e.accuracyScore:75,n=oi.getInstance().getProceduralMistakes();this.latestReport=hm.calculate({completedObjectivesCount:this.activeMission.getCompletedCount(),totalObjectivesCount:this.activeMission.objectives.length,proceduralMistakes:n,scienceAccuracy:t,timeElapsedSeconds:Math.round(this.elapsedSeconds),targetTimeSeconds:fe.MISSION.TARGET_DURATION_SECONDS}),ai.getInstance().recordMissionRun({missionId:this.activeMission.id,date:new Date().toISOString(),score:this.latestReport.totalScore,timeSeconds:Math.round(this.elapsedSeconds),objectivesCompleted:this.activeMission.getCompletedCount(),proceduralScore:this.latestReport.breakdown.proceduralScore,resourcesScore:this.latestReport.breakdown.resourcesScore,efficiencyScore:this.latestReport.breakdown.timeScore}),this.missionType==="certification"?K.getInstance().emit("certification:completed",{report:this.latestReport,mission:this.activeMission}):this.missionType==="tutorial"?K.getInstance().emit("tutorial:completed",{report:this.latestReport,mission:this.activeMission}):K.getInstance().emit("mission:completed",{report:this.latestReport})}update(e){var t,n;this.isTimerRunning&&(this.elapsedSeconds+=e,this.missionType==="tutorial"&&((n=(t=this.activeMission).handleMovement)==null||n.call(t,e*.8),this.checkMissionAdvancement()),K.getInstance().emit("mission:timerTick",{elapsedSeconds:this.elapsedSeconds,formatted:sn.formatTime(this.elapsedSeconds)}),es.getInstance().update(e))}};C(Zn,"instance");let Ft=Zn;class dm{constructor(e,t){C(this,"camera");C(this,"inputManager");C(this,"containerEl",null);C(this,"joystickZoneEl",null);C(this,"joystickBaseEl",null);C(this,"joystickThumbEl",null);C(this,"btnInteractEl",null);C(this,"btnInteractLabelEl",null);C(this,"btnSprintEl",null);C(this,"btnToggleObjectivesEl",null);C(this,"btnCloseObjectivesEl",null);C(this,"objectivesSidebarEl",null);C(this,"portraitHintEl",null);C(this,"joystickTouchId",null);C(this,"lookTouchId",null);C(this,"joystickOrigin",{x:0,y:0});C(this,"joystickRadius",45);C(this,"lookLastPos",{x:0,y:0});C(this,"lookStartPos",{x:0,y:0});C(this,"lookStartTime",0);C(this,"touchLookSensitivity",.0032);C(this,"isRunning",!1);C(this,"isVisible",!1);C(this,"isEnabled",!0);C(this,"updateOrientationNotice",()=>{var t,n;if(!en.getInstance().getIsMobile())return;window.innerHeight>window.innerWidth&&this.isVisible?(t=this.portraitHintEl)==null||t.classList.remove("hidden"):(n=this.portraitHintEl)==null||n.classList.add("hidden")});C(this,"onJoystickTouchStart",e=>{if(!this.isEnabled||(e.preventDefault(),this.joystickTouchId!==null))return;const t=e.changedTouches[0];if(this.joystickTouchId=t.identifier,this.joystickBaseEl&&this.joystickZoneEl){const n=this.joystickZoneEl.getBoundingClientRect(),i=t.clientX-n.left,r=t.clientY-n.top;this.joystickOrigin={x:t.clientX,y:t.clientY},this.joystickBaseEl.style.left=`${i}px`,this.joystickBaseEl.style.top=`${r}px`,this.joystickBaseEl.classList.add("active"),this.joystickThumbEl&&(this.joystickThumbEl.style.transform="translate(0px, 0px)")}});C(this,"onJoystickTouchMove",e=>{if(!(!this.isEnabled||this.joystickTouchId===null)){e.preventDefault();for(let t=0;t<e.changedTouches.length;t++){const n=e.changedTouches[t];if(n.identifier===this.joystickTouchId){const i=n.clientX-this.joystickOrigin.x,r=n.clientY-this.joystickOrigin.y,a=Math.sqrt(i*i+r*r);let o=i,c=r;if(a>this.joystickRadius){const d=this.joystickRadius/a;o=i*d,c=r*d}this.joystickThumbEl&&(this.joystickThumbEl.style.transform=`translate(${o}px, ${c}px)`);const l=o/this.joystickRadius,h=-c/this.joystickRadius;this.inputManager.setTouchMove(l,h),a>this.joystickRadius*.95&&!this.isRunning?this.inputManager.setTouchRunning(!0):this.isRunning||this.inputManager.setTouchRunning(!1);break}}}});C(this,"onJoystickTouchEnd",e=>{if(this.joystickTouchId!==null){for(let t=0;t<e.changedTouches.length;t++)if(e.changedTouches[t].identifier===this.joystickTouchId){this.joystickTouchId=null,this.inputManager.setTouchMove(0,0),this.isRunning||this.inputManager.setTouchRunning(!1),this.joystickThumbEl&&(this.joystickThumbEl.style.transform="translate(0px, 0px)"),this.joystickBaseEl&&this.joystickBaseEl.classList.remove("active");break}}});C(this,"onLookTouchStart",e=>{if(!this.isEnabled||(e.preventDefault(),this.lookTouchId!==null))return;const t=e.changedTouches[0];this.lookTouchId=t.identifier,this.lookLastPos={x:t.clientX,y:t.clientY},this.lookStartPos={x:t.clientX,y:t.clientY},this.lookStartTime=performance.now()});C(this,"onLookTouchMove",e=>{if(!(!this.isEnabled||this.lookTouchId===null)){e.preventDefault();for(let t=0;t<e.changedTouches.length;t++){const n=e.changedTouches[t];if(n.identifier===this.lookTouchId){const i=n.clientX-this.lookLastPos.x,r=n.clientY-this.lookLastPos.y;this.inputManager.addLookDelta(i*this.touchLookSensitivity,r*this.touchLookSensitivity),this.lookLastPos={x:n.clientX,y:n.clientY};break}}}});C(this,"onLookTouchEnd",e=>{if(this.lookTouchId!==null)for(let t=0;t<e.changedTouches.length;t++){const n=e.changedTouches[t];if(n.identifier===this.lookTouchId){const i=performance.now()-this.lookStartTime,r=n.clientX-this.lookStartPos.x,a=n.clientY-this.lookStartPos.y,o=r*r+a*a;i<250&&o<144&&(Mt.getInstance().interactAtPoint(n.clientX,n.clientY,this.camera)||Mt.getInstance().interactCurrent()),this.lookTouchId=null;break}}});this.camera=e,this.inputManager=t,this.initDOMElements(),this.bindTouchEvents(),this.bindMissionEvents(),en.getInstance().getIsMobile()&&this.initMobileUI(),K.getInstance().on("platform:modeChanged",n=>{n==="mobile"&&this.initMobileUI()})}initDOMElements(){this.containerEl=document.getElementById("mobile-controls"),this.joystickZoneEl=document.getElementById("joystick-zone"),this.joystickBaseEl=document.getElementById("joystick-base"),this.joystickThumbEl=document.getElementById("joystick-thumb"),this.btnInteractEl=document.getElementById("btn-mobile-interact"),this.btnInteractLabelEl=document.getElementById("btn-mobile-interact-label"),this.btnSprintEl=document.getElementById("btn-mobile-sprint"),this.btnToggleObjectivesEl=document.getElementById("btn-toggle-objectives"),this.btnCloseObjectivesEl=document.getElementById("btn-close-objectives"),this.objectivesSidebarEl=document.querySelector(".hud-objectives-sidebar"),this.portraitHintEl=document.getElementById("portrait-hint-banner")}initMobileUI(){var e;document.body.classList.add("is-mobile"),(e=this.portraitHintEl)==null||e.addEventListener("click",()=>{var t;(t=this.portraitHintEl)==null||t.classList.add("hidden")}),this.updateOrientationNotice(),window.addEventListener("resize",this.updateOrientationNotice),window.addEventListener("orientationchange",this.updateOrientationNotice)}bindTouchEvents(){var t,n,i,r,a,o;this.joystickZoneEl&&(this.joystickZoneEl.addEventListener("touchstart",this.onJoystickTouchStart,{passive:!1}),this.joystickZoneEl.addEventListener("touchmove",this.onJoystickTouchMove,{passive:!1}),this.joystickZoneEl.addEventListener("touchend",this.onJoystickTouchEnd,{passive:!1}),this.joystickZoneEl.addEventListener("touchcancel",this.onJoystickTouchEnd,{passive:!1}));const e=document.getElementById("touch-look-zone");e&&(e.addEventListener("touchstart",this.onLookTouchStart,{passive:!1}),e.addEventListener("touchmove",this.onLookTouchMove,{passive:!1}),e.addEventListener("touchend",this.onLookTouchEnd,{passive:!1}),e.addEventListener("touchcancel",this.onLookTouchEnd,{passive:!1})),(t=this.btnInteractEl)==null||t.addEventListener("touchstart",c=>{c.preventDefault(),c.stopPropagation(),this.triggerInteract()},{passive:!1}),(n=this.btnInteractEl)==null||n.addEventListener("click",c=>{c.preventDefault(),this.triggerInteract()}),(i=this.btnSprintEl)==null||i.addEventListener("touchstart",c=>{c.preventDefault(),c.stopPropagation(),this.toggleSprint()},{passive:!1}),(r=this.btnSprintEl)==null||r.addEventListener("click",c=>{c.preventDefault(),this.toggleSprint()}),(a=this.btnToggleObjectivesEl)==null||a.addEventListener("click",c=>{c.preventDefault(),this.toggleObjectivesDrawer()}),(o=this.btnCloseObjectivesEl)==null||o.addEventListener("click",c=>{c.preventDefault(),this.closeObjectivesDrawer()})}bindMissionEvents(){K.getInstance().on("interaction:hoverChanged",e=>{if(this.btnInteractEl)if(e.hasTarget&&e.interactable){if(this.btnInteractEl.classList.add("in-range"),this.btnInteractLabelEl&&(this.btnInteractLabelEl.textContent=e.interactable.name),"vibrate"in navigator)try{navigator.vibrate(12)}catch{}}else this.btnInteractEl.classList.remove("in-range"),this.btnInteractLabelEl&&(this.btnInteractLabelEl.textContent="INTERACTUAR")}),K.getInstance().on("mission:objectiveUpdated",()=>{this.updateObjectivesBadge()})}triggerInteract(){Mt.getInstance().interactCurrent()}toggleSprint(){if(this.isRunning=!this.isRunning,this.inputManager.setTouchRunning(this.isRunning),this.btnSprintEl){this.btnSprintEl.classList.toggle("active",this.isRunning);const e=this.btnSprintEl.querySelector(".btn-sub");e&&(e.textContent=this.isRunning?"CORRIENDO":"CAMINAR")}}toggleObjectivesDrawer(){if(!this.objectivesSidebarEl)return;this.objectivesSidebarEl.classList.contains("mobile-expanded")?this.closeObjectivesDrawer():this.openObjectivesDrawer()}openObjectivesDrawer(){var e,t;(e=this.objectivesSidebarEl)==null||e.classList.add("mobile-expanded"),(t=this.btnToggleObjectivesEl)==null||t.classList.add("active")}closeObjectivesDrawer(){var e,t;(e=this.objectivesSidebarEl)==null||e.classList.remove("mobile-expanded"),(t=this.btnToggleObjectivesEl)==null||t.classList.remove("active")}updateObjectivesBadge(){var a;const t=Ft.getInstance().getActiveMission().getObjectives(),n=t.filter(o=>o.isCompleted).length,i=t.length,r=document.getElementById("obj-btn-count");r&&(r.textContent=`${n}/${i}`),this.btnToggleObjectivesEl&&!((a=this.objectivesSidebarEl)!=null&&a.classList.contains("mobile-expanded"))&&(this.btnToggleObjectivesEl.classList.add("pulse-notify"),setTimeout(()=>{var o;(o=this.btnToggleObjectivesEl)==null||o.classList.remove("pulse-notify")},1800))}setVisible(e){var t;this.isVisible=e,this.containerEl&&(e&&en.getInstance().getIsMobile()?(this.containerEl.classList.remove("hidden"),this.updateOrientationNotice()):(this.containerEl.classList.add("hidden"),(t=this.portraitHintEl)==null||t.classList.add("hidden")))}setEnabled(e){var t;this.isEnabled=e,e||(this.inputManager.setTouchMove(0,0),this.joystickThumbEl&&(this.joystickThumbEl.style.transform="translate(0px, 0px)"),(t=this.joystickBaseEl)==null||t.classList.remove("active"),this.joystickTouchId=null,this.lookTouchId=null)}dispose(){window.removeEventListener("resize",this.updateOrientationNotice),window.removeEventListener("orientationchange",this.updateOrientationNotice)}}class um{constructor(e){C(this,"renderer");C(this,"currentSession",null);C(this,"isVRActive",!1);this.renderer=e,this.bindEvents()}bindEvents(){this.renderer.xr.addEventListener("sessionstart",()=>{this.isVRActive=!0,this.currentSession=this.renderer.xr.getSession(),en.getInstance().setMode("webxr"),K.getInstance().emit("xr:sessionStart",this.currentSession)}),this.renderer.xr.addEventListener("sessionend",()=>{this.isVRActive=!1,this.currentSession=null,en.getInstance().setMode("desktop"),K.getInstance().emit("xr:sessionEnd")})}async enterVR(){if(!("xr"in navigator))return console.warn("[XRManager] WebXR not available in navigator"),!1;try{const e={requiredFeatures:["local-floor"],optionalFeatures:["hand-tracking","bounded-floor"]},t=await navigator.xr.requestSession("immersive-vr",e);return await this.renderer.xr.setSession(t),!0}catch(e){console.error("[XRManager] Failed to start WebXR session:",e);try{const t=await navigator.xr.requestSession("immersive-vr");return await this.renderer.xr.setSession(t),!0}catch(t){return console.error("[XRManager] Retry failed:",t),alert("No se pudo inicializar la sesión WebXR. Asegúrate de estar en un visor compatible (Meta Quest Browser) o con WebXR habilitado."),!1}}}async exitVR(){if(this.currentSession)try{await this.currentSession.end()}catch(e){console.warn("[XRManager] Error ending session:",e)}}getIsVRActive(){return this.isVRActive}getSession(){return this.currentSession}}class fm{constructor(e,t){C(this,"renderer");C(this,"cameraRig");C(this,"controllers",[]);this.renderer=e,this.cameraRig=t,this.setupControllers()}setupControllers(){for(let e=0;e<2;e++){const t=this.renderer.xr.getController(e),n=this.renderer.xr.getControllerGrip(e),i=new St().setFromPoints([new R(0,0,0),new R(0,0,-4.5)]),r=new js({color:fe.COLORS.TECH_CYAN,transparent:!0,opacity:.65}),a=new jp(i,r);a.name=`RayLine_${e}`,t.add(a);const o=new rs(.015,.025,16),c=new Ot({color:fe.COLORS.TECH_CYAN,side:Vt}),l=new Ce(o,c);l.position.set(0,0,-4.5),l.visible=!1,t.add(l);const h=this.createControllerModel(e===0?"Left":"Right");n.add(h),this.cameraRig.add(t),this.cameraRig.add(n),this.controllers.push({controller:t,grip:n,rayLine:a,reticle:l,index:e})}}createControllerModel(e){const t=new Et;t.name=`ProceduralController_${e}`;const n=new pn(.018,.022,.12,12),i=new ht({color:1712432,metalness:.8,roughness:.3}),r=new Ce(n,i);r.rotation.x=Math.PI/4,r.position.set(0,-.03,.04),t.add(r);const a=new Qs(.045,.006,8,24),o=new ht({color:2963272,metalness:.9,roughness:.2}),c=new Ce(a,o);c.rotation.x=Math.PI/3,c.position.set(0,.02,-.03),t.add(c);const l=new ri(.005,8,8),h=new Ot({color:fe.COLORS.TECH_CYAN}),d=new Ce(l,h);return d.position.set(0,.01,-.01),t.add(d),t}setRayVisibility(e){for(const t of this.controllers)t.rayLine.visible=e}}class pm{constructor(e,t,n){C(this,"controllerManager");C(this,"cameraRig");C(this,"renderer");C(this,"tempMatrix",new it);C(this,"rayOrigin",new R);C(this,"rayDirection",new R);C(this,"snapTurnCoolDown",0);this.controllerManager=e,this.cameraRig=t,this.renderer=n,this.bindControllerEvents()}bindControllerEvents(){for(const e of this.controllerManager.controllers)e.controller.addEventListener("selectstart",()=>this.onSelectStart(e)),e.controller.addEventListener("selectend",()=>this.onSelectEnd(e))}onSelectStart(e){this.triggerHaptic(e.index,.5,40),this.computeControllerRay(e.controller);const t=Mt.getInstance().testRay(this.rayOrigin,this.rayDirection);t&&(this.triggerHaptic(e.index,.8,80),Mt.getInstance().interactDirect(t.id))}onSelectEnd(e){}triggerHaptic(e,t=.5,n=50){const i=this.renderer.xr.getSession();if(!i||!i.inputSources)return;const r=i.inputSources[e];if(r&&r.gamepad&&r.gamepad.hapticActuators&&r.gamepad.hapticActuators.length>0)try{r.gamepad.hapticActuators[0].pulse(t,n)}catch{}}computeControllerRay(e){this.tempMatrix.identity().extractRotation(e.matrixWorld),this.rayOrigin.setFromMatrixPosition(e.matrixWorld),this.rayDirection.set(0,0,-1).applyMatrix4(this.tempMatrix).normalize()}update(e){const t=this.renderer.xr.getSession();if(!t||!t.inputSources)return;for(const a of this.controllerManager.controllers)this.computeControllerRay(a.controller),Mt.getInstance().testRay(this.rayOrigin,this.rayDirection)?(a.rayLine.material=new js({color:fe.COLORS.MARS_ORANGE,transparent:!0,opacity:.95}),a.reticle.visible=!0):(a.rayLine.material=new js({color:fe.COLORS.TECH_CYAN,transparent:!0,opacity:.5}),a.reticle.visible=!1);let n=0,i=0,r=0;for(let a=0;a<t.inputSources.length;a++){const o=t.inputSources[a];if(!o.gamepad||!o.gamepad.axes)continue;const c=o.gamepad.axes,l=c.length>=4?c[2]:c[0],h=c.length>=4?c[3]:c[1];o.handedness==="left"?(Math.abs(l)>fe.CONTROLS.CONTROLLER_DEADZONE&&(n=l),Math.abs(h)>fe.CONTROLS.CONTROLLER_DEADZONE&&(i=h)):o.handedness==="right"&&Math.abs(l)>.6&&(r=l)}if(this.snapTurnCoolDown>0)this.snapTurnCoolDown-=e;else if(Math.abs(r)>.6){const a=r>0?-Math.PI/6:Math.PI/6;this.cameraRig.rotateY(a),this.snapTurnCoolDown=.35}if(Math.abs(n)>0||Math.abs(i)>0){const a=fe.CONTROLS.WALK_SPEED,o=new R(0,0,-1).applyAxisAngle(new R(0,1,0),this.cameraRig.rotation.y),c=new R(1,0,0).applyAxisAngle(new R(0,1,0),this.cameraRig.rotation.y),l=o.multiplyScalar(-i*a*e).add(c.multiplyScalar(n*a*e)),h=this.cameraRig.position.clone().add(l),d=sn.clampToHabitatWalkable(h.x,h.z,{minX:-6.2,maxX:fe.HABITAT.WALKABLE_RADIUS,minZ:-6.2,maxZ:fe.HABITAT.WALKABLE_RADIUS});Math.sqrt(d.x*d.x+d.z*d.z)<=fe.HABITAT.WALKABLE_RADIUS&&(this.cameraRig.position.x=d.x,this.cameraRig.position.z=d.z)}}}const Jn=class Jn{constructor(){C(this,"textureCache",new Map)}static getInstance(){return Jn.instance||(Jn.instance=new Jn),Jn.instance}createTechGridTexture(e=512,t=512,n="#1a2433",i="#00e5ff",r=32){const a=`tech_grid_${e}_${t}_${n}_${i}_${r}`;if(this.textureCache.has(a))return this.textureCache.get(a);const o=document.createElement("canvas");o.width=e,o.height=t;const c=o.getContext("2d");c.fillStyle=n,c.fillRect(0,0,e,t),c.strokeStyle="rgba(0, 229, 255, 0.08)",c.lineWidth=1;for(let h=0;h<=e;h+=r/4)c.beginPath(),c.moveTo(h,0),c.lineTo(h,t),c.stroke();for(let h=0;h<=t;h+=r/4)c.beginPath(),c.moveTo(0,h),c.lineTo(e,h),c.stroke();c.strokeStyle=i,c.lineWidth=1.5;for(let h=0;h<=e;h+=r)c.beginPath(),c.moveTo(h,0),c.lineTo(h,t),c.stroke();for(let h=0;h<=t;h+=r)c.beginPath(),c.moveTo(0,h),c.lineTo(e,h),c.stroke();c.fillStyle="rgba(255, 255, 255, 0.4)",c.font="10px monospace",c.fillText("SPACE TECH LABS // SEC-01",12,24),c.fillText("ARGYRE ANALOG HABITAT",12,t-12);const l=new Fs(o);return l.wrapS=ei,l.wrapT=ei,this.textureCache.set(a,l),l}createConsoleCanvas(e=512,t=320){const n=document.createElement("canvas");n.width=e,n.height=t;const i=n.getContext("2d"),r=new Fs(n);return r.minFilter=Pt,r.magFilter=Pt,{texture:r,canvas:n,ctx:i,update:()=>{r.needsUpdate=!0}}}createFloorTexture(){const e="habitat_floor_texture";if(this.textureCache.has(e))return this.textureCache.get(e);const t=document.createElement("canvas");t.width=512,t.height=512;const n=t.getContext("2d");n.fillStyle="#141822",n.fillRect(0,0,512,512),n.fillStyle="#222938";for(let r=0;r<512;r+=16)for(let a=0;a<512;a+=16)n.fillRect(r+2,a+2,6,6),n.fillRect(r+10,a+10,6,6);n.strokeStyle="#090c12",n.lineWidth=4,n.strokeRect(0,0,512,512),n.fillStyle="rgba(255, 87, 34, 0.2)",n.fillRect(0,240,512,32);const i=new Fs(t);return i.wrapS=ei,i.wrapT=ei,i.repeat.set(4,4),this.textureCache.set(e,i),i}};C(Jn,"instance");let ts=Jn;class mm{constructor(){C(this,"group");C(this,"dustParticles",null);C(this,"dustPositions",null);this.group=new Et,this.group.name="HabitatEnvironment",this.createSkyDome(),this.createMartianTerrain(),this.createMartianSun(),this.createAtmosphericDust()}createSkyDome(){const e=new ri(180,24,16);e.scale(-1,1,1);const t=`
      varying vec3 vWorldPosition;
      void main() {
        vec4 worldPosition = modelMatrix * vec4(position, 1.0);
        vWorldPosition = worldPosition.xyz;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,n=`
      varying vec3 vWorldPosition;
      void main() {
        float h = normalize(vWorldPosition).y;
        // Mars atmospheric gradient: rusty orange at horizon transitioning to deep cosmic black-red at zenith
        vec3 horizonColor = vec3(0.72, 0.32, 0.16);
        vec3 zenithColor = vec3(0.08, 0.04, 0.05);
        vec3 color = mix(horizonColor, zenithColor, max(pow(max(h, 0.0), 0.5), 0.0));
        gl_FragColor = vec4(color, 1.0);
      }
    `,i=new In({vertexShader:t,fragmentShader:n,side:Nt,depthWrite:!1}),r=new Ce(e,i);this.group.add(r)}createMartianTerrain(){const e=new wn(240,240,48,48);e.rotateX(-Math.PI/2);const t=e.attributes.position;for(let c=0;c<t.count;c++){const l=t.getX(c),h=t.getZ(c),d=Math.sqrt(l*l+h*h);let f=0;d>fe.HABITAT.RADIUS+3?(f=Math.sin(l*.04)*2.5+Math.cos(h*.035)*2.8+Math.sin((l+h)*.08)*1.2,h<-30&&(f+=Math.pow(Math.abs(h+30)*.12,1.4))):f=-.05,t.setY(c,f)}e.computeVertexNormals();const n=new ht({color:fe.COLORS.MARS_TERRAIN,roughness:.95,metalness:.05,flatShading:!0}),i=new Ce(e,n);i.position.set(0,-.05,0),i.receiveShadow=!0,this.group.add(i);const r=new sa(1,1),a=new ht({color:8534814,roughness:.9,metalness:.1}),o=45;for(let c=0;c<o;c++){const l=Math.random()*Math.PI*2,h=10+Math.random()*60,d=Math.cos(l)*h,f=Math.sin(l)*h,m=new Ce(r,a),g=.4+Math.random()*1.5;m.scale.set(g,g*(.6+Math.random()*.5),g),m.position.set(d,g*.4,f),m.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI),m.castShadow=!0,this.group.add(m)}}createMartianSun(){const e=new ri(2.5,16,16),t=new Ot({color:16774112}),n=new Ce(e,t);n.position.set(60,45,-100),this.group.add(n);const i=new rs(2.6,6.5,24),r=new Ot({color:16764032,transparent:!0,opacity:.35,side:Vt}),a=new Ce(i,r);a.position.copy(n.position),a.lookAt(0,0,0),this.group.add(a)}createAtmosphericDust(){const t=new St,n=new Float32Array(120*3);for(let r=0;r<120;r++)n[r*3]=(Math.random()-.5)*30,n[r*3+1]=Math.random()*8,n[r*3+2]=-7.5-Math.random()*15;t.setAttribute("position",new Yt(n,3));const i=new wc({color:16747109,size:.08,transparent:!0,opacity:.65});this.dustParticles=new qp(t,i),this.dustPositions=n,this.group.add(this.dustParticles)}update(e){if(this.dustParticles&&this.dustPositions){const t=this.dustPositions.length/3;for(let n=0;n<t;n++)this.dustPositions[n*3]+=.8*e,this.dustPositions[n*3+1]+=Math.sin(Date.now()*.001+n)*.1*e,this.dustPositions[n*3]>18&&(this.dustPositions[n*3]=-18);this.dustParticles.geometry.attributes.position.needsUpdate=!0}}}class gm{constructor(){C(this,"group");C(this,"ambientLight");C(this,"hemisphereLight");C(this,"sunLight");C(this,"interiorDownlights",[]);C(this,"workstationLights",[]);C(this,"emergencyLights",[]);C(this,"isEmergencyActive",!1);C(this,"pulseTime",0);this.group=new Et,this.group.name="HabitatLighting",this.ambientLight=new Jp(16775406,.9),this.group.add(this.ambientLight),this.hemisphereLight=new Yp(15791871,4015186,.8),this.group.add(this.hemisphereLight),this.sunLight=new Zp(16765348,1.4),this.sunLight.position.set(40,30,-60),this.sunLight.castShadow=!0,this.sunLight.shadow.mapSize.width=1024,this.sunLight.shadow.mapSize.height=1024,this.sunLight.shadow.camera.near=10,this.sunLight.shadow.camera.far=150,this.sunLight.shadow.camera.left=-20,this.sunLight.shadow.camera.right=20,this.sunLight.shadow.camera.top=20,this.sunLight.shadow.camera.bottom=-20,this.sunLight.shadow.bias=-.001,this.group.add(this.sunLight),[new R(0,fe.HABITAT.HEIGHT-.35,0),new R(0,fe.HABITAT.HEIGHT-.35,-3.2),new R(0,fe.HABITAT.HEIGHT-.35,3.2),new R(-3.2,fe.HABITAT.HEIGHT-.35,-1.2),new R(3.2,fe.HABITAT.HEIGHT-.35,-1.2),new R(-2.8,fe.HABITAT.HEIGHT-.35,2.8)].forEach((i,r)=>{const a=new Bs(fe.COLORS.WARM_INTERIOR_LIGHT,1.6,14,1.5);a.position.copy(i),a.name=`InteriorDownlight_${r}`,this.group.add(a),this.interiorDownlights.push(a)}),[{name:"Task_LifeSupport",pos:new R(-5.2,2.5,0),color:58879,intensity:1.6,distance:6.5},{name:"Task_ScienceStation",pos:new R(5.2,2.5,0),color:58998,intensity:1.6,distance:6.5},{name:"Task_ResourceCabinet",pos:new R(-3.8,2.5,3.8),color:16758605,intensity:1.5,distance:5.5},{name:"Task_MissionControl",pos:new R(0,2.5,-5.2),color:8444159,intensity:1.6,distance:6.5},{name:"Task_Airlock",pos:new R(3.8,2.5,3.8),color:16777215,intensity:1.2,distance:5}].forEach(i=>{const r=new Bs(i.color,i.intensity,i.distance,1.5);r.position.copy(i.pos),r.name=i.name,this.group.add(r),this.workstationLights.push(r)}),[new R(-4.5,fe.HABITAT.HEIGHT-.5,0),new R(4.5,fe.HABITAT.HEIGHT-.5,0),new R(0,fe.HABITAT.HEIGHT-.5,-4.5),new R(0,fe.HABITAT.HEIGHT-.5,4.5)].forEach((i,r)=>{const a=new Bs(fe.COLORS.TECH_RED,0,10,1.8);a.position.copy(i),a.name=`EmergencyLight_${r}`,this.group.add(a),this.emergencyLights.push(a)})}setEmergencyMode(e){this.isEmergencyActive=e,e?(this.ambientLight.color.setHex(3342341),this.ambientLight.intensity=.35,this.hemisphereLight.intensity=.25,this.interiorDownlights.forEach(t=>{t.intensity=.25}),this.workstationLights.forEach(t=>{t.intensity=.35})):(this.ambientLight.color.setHex(16775406),this.ambientLight.intensity=.9,this.hemisphereLight.intensity=.8,this.interiorDownlights.forEach(t=>{t.color.setHex(fe.COLORS.WARM_INTERIOR_LIGHT),t.intensity=1.6}),this.workstationLights.forEach(t=>{t.intensity=1.6}),this.emergencyLights.forEach(t=>{t.intensity=0}))}update(e){if(this.isEmergencyActive){this.pulseTime+=e*4.5;const n=.5+(Math.sin(this.pulseTime)+1)*.5*2.8;this.emergencyLights.forEach(i=>{i.intensity=n})}}}class _m{constructor(){C(this,"group");C(this,"lifeSupportCanvasUpdate");C(this,"lifeSupportCtx");C(this,"scienceCanvasUpdate");C(this,"scienceCtx");C(this,"lifeSupportConsole");C(this,"scienceStation");C(this,"resourceCabinet");C(this,"airlockPanel");C(this,"missionControlPanel");C(this,"filterCartridgeMesh");C(this,"animTime",0);this.group=new Et,this.group.name="HabitatObjects",this.buildMissionControl(),this.buildLifeSupportConsole(),this.buildScienceStation(),this.buildResourceCabinet(),this.buildAirlock()}createInteractionBadge(e,t,n=fe.COLORS.TECH_CYAN,i=1.6){const r=new Et;r.position.y=i,r.name=`Badge_${e}`;const a=new rs(.24,.32,32),o=new Ot({color:n,side:Vt,transparent:!0,opacity:.85}),c=new Ce(a,o);c.name="badge_ring",c.rotation.x=Math.PI/2,r.add(c);const l=new ra(.12,0),h=new Ot({color:16777215,wireframe:!1}),d=new Ce(l,h);d.name="badge_diamond",r.add(d);try{const f=document.createElement("canvas");f.width=512,f.height=128;const m=f.getContext("2d");if(m){m.fillStyle="rgba(8, 12, 22, 0.88)",m.beginPath();const g=`#${n.toString(16).padStart(6,"0")}`;m.roundRect(16,16,480,96,24),m.fill(),m.strokeStyle=g,m.lineWidth=5,m.stroke(),m.shadowColor=g,m.shadowBlur=12,m.fillStyle="#ffffff",m.font='bold 36px "Rajdhani", "Orbitron", sans-serif',m.textAlign="center",m.textBaseline="middle",m.fillText(t,256,64);const _=new Fs(f);_.minFilter=Pt;const p=new Ac({map:_,transparent:!0,depthTest:!1}),u=new Xp(p);u.name="badge_sprite",u.scale.set(1.5,.38,1),u.position.set(0,.38,0),r.add(u)}}catch{}return r}buildMissionControl(){this.missionControlPanel=new Et,this.missionControlPanel.name="missionControlPanel",this.missionControlPanel.position.set(0,0,-5.8);const e=new vt(3.6,.9,1.2),t=new ht({color:fe.COLORS.SURFACE_DARK,roughness:.4,metalness:.7}),n=new Ce(e,t);n.position.y=.45,n.castShadow=!0,n.receiveShadow=!0,this.missionControlPanel.add(n);const i=new vt(2.4,.8,.08),r=new ht({color:329744,roughness:.2,metalness:.9,emissive:10288,emissiveIntensity:.6}),a=new Ce(i,r);a.position.set(0,1.35,-.2),a.rotation.x=-.1,this.missionControlPanel.add(a);const o=new vt(2.44,.84,.04),c=new Ot({color:fe.COLORS.TECH_CYAN,wireframe:!0}),l=new Ce(o,c);l.position.copy(a.position),l.position.z+=.02,l.rotation.copy(a.rotation),this.missionControlPanel.add(l);const h=this.createInteractionBadge("MissionControl","CENTRO DE CONTROL",fe.COLORS.TECH_CYAN,1.95);this.missionControlPanel.add(h),this.group.add(this.missionControlPanel);const d={id:"missionControl",name:"Centro de Mando y Telemetría",actionPrompt:"Consultar estado general de la misión",object3D:this.missionControlPanel,canInteract:()=>!0,onHoverStart:()=>{h.scale.set(1.2,1.2,1.2)},onHoverEnd:()=>{h.scale.set(1,1,1)},onInteract:()=>{K.getInstance().emit("ui:openBriefing")}};Mt.getInstance().register(d)}buildLifeSupportConsole(){this.lifeSupportConsole=new Et,this.lifeSupportConsole.name="lifeSupportConsole",this.lifeSupportConsole.position.set(-5.4,0,-1.2),this.lifeSupportConsole.rotation.y=Math.PI/3;const e=new vt(2.2,1.8,.9),t=new ht({color:1778480,roughness:.5,metalness:.6}),n=new Ce(e,t);n.position.y=.9,n.castShadow=!0,n.receiveShadow=!0,this.lifeSupportConsole.add(n);const i=ts.getInstance().createConsoleCanvas(512,320);this.lifeSupportCtx=i.ctx,this.lifeSupportCanvasUpdate=i.update,this.renderLifeSupportCanvas(20.9,420,101.3,"NOMINAL");const r=new wn(1.6,1),a=new Ot({map:i.texture}),o=new Ce(r,a);o.position.set(0,1.15,.46),this.lifeSupportConsole.add(o);const c=this.createInteractionBadge("LifeSupport","1. SOPORTE VITAL",58879,2.05);this.lifeSupportConsole.add(c),this.group.add(this.lifeSupportConsole);const l={id:"lifeSupportConsole",name:"Consola de Soporte Vital",actionPrompt:"Inspeccionar lecturas atmosféricas y filtración",object3D:this.lifeSupportConsole,canInteract:()=>!0,onHoverStart:()=>{c.scale.set(1.2,1.2,1.2)},onHoverEnd:()=>{c.scale.set(1,1,1)},onInteract:()=>{K.getInstance().emit("ui:openConsole","lifesupport")}};Mt.getInstance().register(l)}renderLifeSupportCanvas(e,t,n,i){var l;if(!this.lifeSupportCtx)return;const r=this.lifeSupportCtx,a=512,o=320;r.fillStyle="#0a0e17",r.fillRect(0,0,a,o),r.fillStyle="#00e5ff",r.font="bold 20px monospace",r.fillText("SPACE TECH LABS // LIFE SUPPORT SYS",20,36),r.strokeStyle="rgba(0, 229, 255, 0.4)",r.lineWidth=2,r.beginPath(),r.moveTo(20,48),r.lineTo(a-20,48),r.stroke(),r.font="14px monospace",r.fillStyle="#94a3b8",r.fillText("OXÍGENO (O₂):",24,88),r.fillStyle=e<19.5?"#ff1744":"#00e676",r.font="bold 28px monospace",r.fillText(`${e.toFixed(1)} %`,24,122),r.font="14px monospace",r.fillStyle="#94a3b8",r.fillText("DIÓXIDO DE CARBONO (CO₂):",270,88),r.fillStyle=t>800?"#ff1744":"#00e5ff",r.font="bold 28px monospace",r.fillText(`${Math.round(t)} ppm`,270,122),r.font="14px monospace",r.fillStyle="#94a3b8",r.fillText("PRESIÓN CABINA:",24,180),r.fillStyle="#f8fafc",r.font="bold 28px monospace",r.fillText(`${n.toFixed(1)} kPa`,24,214),r.font="14px monospace",r.fillStyle="#94a3b8",r.fillText("BUCLE FILTRACIÓN:",270,180);const c=i.includes("ANOMALÍA")||i.includes("FALLA");r.fillStyle=c?"#ff1744":"#00e676",r.font="bold 24px monospace",r.fillText(i,270,214),r.fillStyle="rgba(0, 229, 255, 0.15)",r.fillRect(20,245,a-40,50),r.strokeStyle="#00e5ff",r.strokeRect(20,245,a-40,50),r.fillStyle="#ffffff",r.font="bold 16px monospace",r.textAlign="center",r.fillText("[ CLIC / GATILLO: ABRIR DIAGNÓSTICO DETALLADO ]",a/2,276),r.textAlign="left",(l=this.lifeSupportCanvasUpdate)==null||l.call(this)}buildScienceStation(){this.scienceStation=new Et,this.scienceStation.name="scienceStation",this.scienceStation.position.set(5.4,0,-1.2),this.scienceStation.rotation.y=-Math.PI/3;const e=new vt(2.4,.9,1),t=new ht({color:2239032,roughness:.3,metalness:.8}),n=new Ce(e,t);n.position.y=.45,n.castShadow=!0,n.receiveShadow=!0,this.scienceStation.add(n);const i=new pn(.35,.35,.7,24),r=new Rc({color:16777215,transmission:.9,opacity:.35,transparent:!0,roughness:.1,metalness:.1,ior:1.5}),a=new Ce(i,r);a.position.set(0,1.3,0),this.scienceStation.add(a);const o=new pn(.38,.38,.08,24),c=new ht({color:1119776,metalness:.9,roughness:.2}),l=new Ce(o,c);l.position.set(0,.95,0);const h=new Ce(o,c);h.position.set(0,1.65,0),this.scienceStation.add(l,h);const d=new pn(.015,.02,.3,8),f=new ht({color:3706428,roughness:.8}),m=new Ce(d,f);m.position.set(0,1.2,0),this.scienceStation.add(m);const g=new ri(.08,8,8);g.scale(1.8,.4,1.2);const _=new ht({color:5025616,roughness:.6});for(let w=0;w<3;w++){const z=new Ce(g,_);z.position.set(Math.cos(w*Math.PI*2/3)*.08,1.32,Math.sin(w*Math.PI*2/3)*.08),z.rotation.y=w*Math.PI*2/3,this.scienceStation.add(z)}const p=new Bs(13959417,.6,2);p.position.set(0,1.6,0),this.scienceStation.add(p);const u=ts.getInstance().createConsoleCanvas(512,320);this.scienceCtx=u.ctx,this.scienceCanvasUpdate=u.update,this.renderScienceCanvas("BIOGROWTH-01","ESPERANDO CALIBRACIÓN",65,45);const M=new wn(.9,.6),x=new Ot({map:u.texture}),y=new Ce(M,x);y.position.set(-.65,1.25,.25),y.rotation.y=.2,this.scienceStation.add(y);const L=this.createInteractionBadge("ScienceStation","2. CIENCIA BIOLÓGICA",fe.COLORS.TECH_GREEN,2);this.scienceStation.add(L),this.group.add(this.scienceStation);const A={id:"scienceStation",name:"Estación de Ciencias BIOGROWTH-01",actionPrompt:"Configurar espectro de luz y riego hidropónico",object3D:this.scienceStation,canInteract:()=>!0,onHoverStart:()=>{L.scale.set(1.2,1.2,1.2)},onHoverEnd:()=>{L.scale.set(1,1,1)},onInteract:()=>{K.getInstance().emit("ui:openConsole","science")}};Mt.getInstance().register(A)}renderScienceCanvas(e,t,n,i){var a;if(!this.scienceCtx)return;const r=this.scienceCtx;r.fillStyle="#081016",r.fillRect(0,0,512,320),r.fillStyle="#00e5ff",r.font="bold 20px monospace",r.fillText("LABORATORIO // "+e,20,36),r.strokeStyle="#00e5ff",r.lineWidth=1,r.strokeRect(20,48,472,1),r.fillStyle="#94a3b8",r.font="14px monospace",r.fillText("ESTADO DEL CULTIVO:",24,85),r.fillStyle=t==="CRECIMIENTO ÓPTIMO"?"#00e676":"#ffab00",r.font="bold 22px monospace",r.fillText(t,24,118),r.fillStyle="#94a3b8",r.font="14px monospace",r.fillText(`FOTOPERIODO (LUZ): ${n}%`,24,165),r.fillStyle="#94a3b8",r.fillText(`IRRIGACIÓN NUTRIENTES: ${i}%`,24,215),r.fillStyle="rgba(0, 229, 255, 0.15)",r.fillRect(20,250,472,45),r.fillStyle="#ffffff",r.font="bold 15px monospace",r.textAlign="center",r.fillText("[ CLIC / GATILLO: AJUSTAR EXPERIMENTO ]",256,278),r.textAlign="left",(a=this.scienceCanvasUpdate)==null||a.call(this)}buildResourceCabinet(){this.resourceCabinet=new Et,this.resourceCabinet.name="resourceCabinet",this.resourceCabinet.position.set(-3.8,0,4.2),this.resourceCabinet.rotation.y=Math.PI-.4;const e=new vt(1.6,2.2,.8),t=new ht({color:1581100,roughness:.6,metalness:.5}),n=new Ce(e,t);n.position.y=1.1,n.castShadow=!0,this.resourceCabinet.add(n);const i=new wn(1.4,.15),r=new Ot({color:fe.COLORS.MARS_ORANGE}),a=new Ce(i,r);a.position.set(0,1.8,.41),this.resourceCabinet.add(a);const o=new pn(.18,.18,.45,16),c=new ht({color:3622735,metalness:.8,roughness:.3});this.filterCartridgeMesh=new Ce(o,c),this.filterCartridgeMesh.position.set(0,1,.25),this.filterCartridgeMesh.rotation.z=Math.PI/2,this.resourceCabinet.add(this.filterCartridgeMesh);const l=new Qs(.19,.02,8,16),h=new Ot({color:fe.COLORS.TECH_CYAN}),d=new Ce(l,h);this.filterCartridgeMesh.add(d);const f=this.createInteractionBadge("ResourceCabinet","3. ALMACÉN Y REPUESTOS",fe.COLORS.TECH_AMBER,2.25);this.resourceCabinet.add(f),this.group.add(this.resourceCabinet);const m={id:"resourceCabinet",name:"Gabinete de Recursos y Repuestos",actionPrompt:"Extraer unidad de filtración HEPA-C1 de repuesto",object3D:this.resourceCabinet,canInteract:()=>!0,onHoverStart:()=>{f.scale.set(1.2,1.2,1.2)},onHoverEnd:()=>{f.scale.set(1,1,1)},onInteract:()=>{K.getInstance().emit("ui:openConsole","resources")}};Mt.getInstance().register(m)}buildAirlock(){this.airlockPanel=new Et,this.airlockPanel.name="airlockPanel",this.airlockPanel.position.set(3.8,0,4.2),this.airlockPanel.rotation.y=-Math.PI+.4;const e=new vt(1.8,2.4,.3),t=new ht({color:2503224,metalness:.7,roughness:.4}),n=new Ce(e,t);n.position.y=1.2,n.castShadow=!0,this.airlockPanel.add(n);const i=new ri(.06,12,12),r=new Ot({color:fe.COLORS.TECH_GREEN}),a=new Ce(i,r);a.position.set(0,2.25,.16),this.airlockPanel.add(a);const o=new vt(.4,.5,.08),c=new ht({color:988970,roughness:.3}),l=new Ce(o,c);l.position.set(.65,1.2,.16),this.airlockPanel.add(l);const h=this.createInteractionBadge("Airlock","ESCLUSA DE SALIDA EVA",9489145,2.35);this.airlockPanel.add(h),this.group.add(this.airlockPanel);const d={id:"airlockPanel",name:"Compuerta Esclusa (Airlock EVA)",actionPrompt:"Verificar presurización de compuerta",object3D:this.airlockPanel,canInteract:()=>!0,onHoverStart:()=>{h.scale.set(1.2,1.2,1.2)},onHoverEnd:()=>{h.scale.set(1,1,1)},onInteract:()=>{K.getInstance().emit("ui:notify","Esclusa presurizada a 101.3 kPa. EVA exterior restringida durante Misión 001.")}};Mt.getInstance().register(d)}update(e){this.animTime+=e;const t=this.group.children.flatMap(n=>n.children.filter(i=>i.name.startsWith("Badge_")));for(const n of t){const i=n.getObjectByName("badge_ring"),r=n.getObjectByName("badge_diamond");i&&(i.rotation.z+=e*1.5),r&&(r.rotation.y+=e*2,r.rotation.x+=e*1,r.position.y=Math.sin(this.animTime*3)*.05)}}}class vm{constructor(){C(this,"group");C(this,"environment");C(this,"lighting");C(this,"objects");this.group=new Et,this.group.name="HabitatModule",this.environment=new mm,this.lighting=new gm,this.objects=new _m,this.group.add(this.environment.group),this.group.add(this.lighting.group),this.group.add(this.objects.group),this.buildStructure()}buildStructure(){const e=fe.HABITAT.RADIUS,t=fe.HABITAT.HEIGHT,n=ts.getInstance().createFloorTexture(),i=new pn(e,e,.2,32),r=new ht({map:n,roughness:.6,metalness:.4}),a=new Ce(i,r);a.position.y=-.1,a.receiveShadow=!0,this.group.add(a);const o=new pn(e,e,.2,32),c=new ht({color:1580842,roughness:.7,metalness:.3}),l=new Ce(o,c);l.position.y=t+.1,this.group.add(l);const h=16,d=Math.PI*2/h,f=t,m=new ht({color:2239032,roughness:.75,metalness:.25});for(let p=0;p<h;p++){const u=p*d;if(!(p>=11&&p<=13)){const x=new vt(e*.42,f,.25),y=new Ce(x,m),L=Math.cos(u)*e,A=Math.sin(u)*e;y.position.set(L,f/2,A),y.rotation.y=-u+Math.PI/2,y.receiveShadow=!0,this.group.add(y)}}const g=new vt(.3,f,.35),_=new ht({color:988448,metalness:.8,roughness:.2});for(let p=0;p<h;p++){const u=p*d,M=new Ce(g,_);M.position.set(Math.cos(u)*(e-.1),f/2,Math.sin(u)*(e-.1)),M.rotation.y=-u,this.group.add(M)}this.buildPanoramicWindow(e,t)}buildPanoramicWindow(e,t){const n=new Et;n.name="PanoramicWindow";const i=new ht({color:1119778,metalness:.9,roughness:.2}),r=fe.HABITAT.WINDOW_WIDTH,a=fe.HABITAT.WINDOW_HEIGHT,o=new vt(r+.4,.3,.3),c=new Ce(o,i);c.position.set(0,t-.3,-e+.15),n.add(c);const l=new vt(r+.4,.4,.4),h=new Ce(l,i);h.position.set(0,.6,-e+.15),n.add(h);const d=new wn(r,a),f=new Rc({color:12510200,transmission:.92,transparent:!0,opacity:.2,roughness:.05,metalness:.1,ior:1.52,side:Vt}),m=new Ce(d,f);m.position.set(0,t/2+.15,-e+.15),n.add(m);for(const g of[-r/3,r/3]){const _=new vt(.12,a,.18),p=new Ce(_,i);p.position.set(g,t/2+.15,-e+.15),n.add(p)}this.group.add(n)}update(e){this.environment.update(e),this.lighting.update(e),this.objects.update(e)}}function Ut(s,e){if(!s)return;let t=!1;s.addEventListener("touchend",n=>{t=!0,n.preventDefault(),e(n)},{passive:!1}),s.addEventListener("click",n=>{if(t){t=!1;return}e(n)})}class xm{constructor(){C(this,"containerEl");C(this,"btnDesktop");C(this,"btnVR");C(this,"selectedMode","standard");this.containerEl=document.getElementById("screen-main-menu"),this.btnDesktop=document.getElementById("btn-start-desktop"),this.btnVR=document.getElementById("btn-start-vr"),this.bindEvents(),this.initModeSelector(),this.adaptForDevice()}initModeSelector(){const e=document.querySelectorAll(".mode-card");e.forEach(t=>{Ut(t,()=>{je.getInstance().playClick(),e.forEach(i=>i.classList.remove("active")),t.classList.add("active");const n=t.dataset.mode||"standard";this.selectedMode=n,Ft.getInstance().setMissionType(n),this.adaptForDevice()})})}adaptForDevice(){const e=en.getInstance().getIsMobile();if(this.btnDesktop){const t=this.btnDesktop.querySelector(".btn-label");t&&(this.selectedMode==="tutorial"?t.textContent=e?"INICIAR TUTORIAL (TÁCTIL)":"INICIAR TUTORIAL ACADÉMICO":this.selectedMode==="certification"?t.textContent=e?"INICIAR EXAMEN (CERTIFICACIÓN)":"INICIAR EXAMEN DE CERTIFICACIÓN":t.textContent=e?"INICIAR MISIÓN (MÓVIL / TÁCTIL)":"INICIAR MISIÓN ESTÁNDAR")}en.getInstance().checkVRSupport().then(t=>{if(!t&&e&&this.btnVR){this.btnVR.style.opacity="0.6";const n=this.btnVR.querySelector(".btn-label");n&&(n.textContent="MODO VR (REQUIERE META QUEST)")}})}bindEvents(){Ut(this.btnDesktop,()=>{je.getInstance().playClick(),this.hide(),Ft.getInstance().setMissionType(this.selectedMode),this.selectedMode==="tutorial"?(Ft.getInstance().startMission(),K.getInstance().emit("ui:notify","🎓 Bienvenido al Tutorial: Sigue las instrucciones del banner superior.")):K.getInstance().emit("ui:openBriefing")}),Ut(this.btnVR,()=>{je.getInstance().playClick(),Ft.getInstance().setMissionType(this.selectedMode),K.getInstance().emit("xr:requestEnter")}),K.getInstance().on("ui:showMainMenu",()=>{this.show(),this.adaptForDevice()}),K.getInstance().on("platform:modeChanged",()=>{this.adaptForDevice()})}show(){this.containerEl&&(this.containerEl.classList.remove("hidden"),this.containerEl.classList.add("visible"))}hide(){this.containerEl&&(this.containerEl.classList.remove("visible"),this.containerEl.classList.add("hidden"))}}class Em{constructor(){C(this,"modalEl");C(this,"btnAccept");C(this,"btnClose");C(this,"modalTagEl");C(this,"titleEl");C(this,"speakerTextEl");var e,t,n;this.modalEl=document.getElementById("modal-briefing"),this.btnAccept=document.getElementById("btn-accept-briefing"),this.btnClose=document.getElementById("btn-close-briefing"),this.modalTagEl=((e=this.modalEl)==null?void 0:e.querySelector(".modal-tag"))||null,this.titleEl=((t=this.modalEl)==null?void 0:t.querySelector("h2"))||null,this.speakerTextEl=((n=this.modalEl)==null?void 0:n.querySelector(".speaker-text"))||null,this.bindEvents()}bindEvents(){Ut(this.btnAccept,()=>{je.getInstance().playClick(),this.hide(),Ft.getInstance().startMission(),je.getInstance().startAmbientHum()}),Ut(this.btnClose,()=>{je.getInstance().playClick(),this.hide(),K.getInstance().emit("ui:showMainMenu")}),K.getInstance().on("ui:openBriefing",()=>{this.show()})}show(){var t;Ft.getInstance().getMissionType()==="certification"?(this.modalTagEl&&(this.modalTagEl.textContent="EVALUACIÓN OFICIAL DE CERTIFICACIÓN"),this.titleEl&&(this.titleEl.textContent="EXAMEN DE ASTRONAUTA ANÁLOGO"),this.speakerTextEl&&(this.speakerTextEl.innerHTML=`
          <p><strong>Comité de Evaluación de SPACE Tech Labs:</strong></p>
          <p>Bienvenido, aspirante a tripulante análogo. Esta prueba certifica tu capacidad operacional en aislamiento marciano a través de 4 fases rigurosas:</p>
          <ol class="briefing-steps">
            <li><strong>Auditoría ECLSS:</strong> Ejecuta el diagnóstico de soporte vital y valida parámetros de cabina.</li>
            <li><strong>Calibración Botánica:</strong> Sincroniza el fotoperiodo de luz e irrigación en BIOGROWTH-01.</li>
            <li><strong>Respuesta a Contingencia:</strong> Reemplaza el filtro HEPA-C1 saturado bajo checklist estricto.</li>
            <li><strong>Certificación de Esclusa (Airlock):</strong> Inspecciona la compuerta exterior y confirma presurización.</li>
          </ol>
          <div class="mobile-brief-hint">
            🏅 <strong>Certificación:</strong> Al obtener 75+ puntos recibirás tu Diploma Oficial descargable e imprimible con sello y código de verificación.
          </div>
        `),this.btnAccept&&(this.btnAccept.textContent="INICIAR EXAMEN DE CERTIFICACIÓN")):(this.modalTagEl&&(this.modalTagEl.textContent="ORDEN DE OPERACIONES"),this.titleEl&&(this.titleEl.textContent="BRIEFING DE LA MISIÓN 001"),this.speakerTextEl&&(this.speakerTextEl.innerHTML=`
          <p><strong>Comandante de Misión Análoga:</strong></p>
          <p>Bienvenido a bordo de la estación análoga de investigación. Tu jornada contempla tres actividades clave:</p>
          <ol class="briefing-steps">
            <li><strong>Inspección Diagnóstica:</strong> Accede a la Consola de Soporte Vital y verifica los subsistemas de presurización y filtración.</li>
            <li><strong>Validación Biológica BIOGROWTH-01:</strong> En la Estación Científica, calibra los espectros lumínicos e irrigación hidropónica de la muestra análoga.</li>
            <li><strong>Resolución de Contingencia:</strong> Resuelve cualquier desviación operativa mediante los protocolos de reemplazo de filtros y presurización.</li>
          </ol>
          <div class="mobile-brief-hint">
            💡 <strong>Controles táctiles:</strong> Usa el joystick a la izquierda para caminar, desliza a la derecha para girar y toca las consolas o el botón "INTERACTUAR" para operar.
          </div>
        `),this.btnAccept&&(this.btnAccept.textContent="COMENZAR OPERACIONES")),(t=this.modalEl)==null||t.classList.remove("hidden")}hide(){var e;(e=this.modalEl)==null||e.classList.add("hidden")}}class Mm{constructor(){C(this,"timerEl");C(this,"habitatStatusEl");C(this,"progressPercentEl");C(this,"progressFillEl");C(this,"objectivesListEl");C(this,"emergencyBannerEl");C(this,"guideBannerEl");C(this,"guideInstructionEl");C(this,"guideHintEl");C(this,"telO2El");C(this,"telCo2El");C(this,"telPressEl");C(this,"telPowerEl");C(this,"reticleContainerEl");C(this,"tooltipTextEl");this.timerEl=document.getElementById("hud-timer"),this.habitatStatusEl=document.getElementById("hud-habitat-status"),this.progressPercentEl=document.getElementById("hud-progress-percent"),this.progressFillEl=document.getElementById("hud-progress-fill"),this.objectivesListEl=document.getElementById("hud-objectives-list"),this.emergencyBannerEl=document.getElementById("emergency-banner"),this.guideBannerEl=document.getElementById("objective-guide-banner"),this.guideInstructionEl=document.getElementById("guide-instruction"),this.guideHintEl=document.getElementById("guide-hint"),this.telO2El=document.getElementById("tel-o2"),this.telCo2El=document.getElementById("tel-co2"),this.telPressEl=document.getElementById("tel-press"),this.telPowerEl=document.getElementById("tel-power"),this.reticleContainerEl=document.getElementById("reticle-container"),this.tooltipTextEl=document.getElementById("tooltip-text"),this.bindEvents(),this.renderObjectives(),this.updateGuideBanner()}bindEvents(){K.getInstance().on("mission:timerTick",e=>{this.timerEl&&(this.timerEl.textContent=e.formatted)}),K.getInstance().on("mission:objectiveUpdated",()=>{this.renderObjectives(),this.updateGuideBanner()}),K.getInstance().on("resources:itemRetrieved",()=>{this.updateGuideBanner()}),K.getInstance().on("emergency:started",()=>{this.updateGuideBanner()}),K.getInstance().on("lifesupport:updated",e=>{this.telO2El&&(this.telO2El.textContent=`${e.o2Percent.toFixed(1)}%`),this.telCo2El&&(this.telCo2El.textContent=`${Math.round(e.co2Ppm)} ppm`),this.telPressEl&&(this.telPressEl.textContent=`${e.cabinPressureKpa.toFixed(1)} kPa`),this.telPowerEl&&(this.telPowerEl.textContent=`${e.powerKw.toFixed(1)} kW`),this.habitatStatusEl&&(this.habitatStatusEl.textContent=e.filterLoopStatus,this.habitatStatusEl.className="metric-value",e.filterLoopStatus==="NOMINAL"||e.filterLoopStatus==="RESTAURADO"?this.habitatStatusEl.classList.add("status-nominal"):e.filterLoopStatus==="ADVERTENCIA"?this.habitatStatusEl.classList.add("status-warning"):this.habitatStatusEl.classList.add("status-critical"))}),K.getInstance().on("mission:stateChanged",e=>{this.updateGuideBanner(),this.emergencyBannerEl&&(e.current===$e.EMERGENCY?this.emergencyBannerEl.classList.remove("hidden"):(e.current===$e.RECOVERY||e.current===$e.COMPLETED)&&this.emergencyBannerEl.classList.add("hidden"))}),K.getInstance().on("interaction:hoverChanged",e=>{this.reticleContainerEl&&(e.hasTarget&&e.interactable?(this.reticleContainerEl.classList.add("interactive"),this.tooltipTextEl&&(this.tooltipTextEl.textContent=`${e.interactable.name} — ${e.interactable.actionPrompt}`)):this.reticleContainerEl.classList.remove("interactive"))})}renderObjectives(){const e=Ft.getInstance().getActiveMission(),t=e.getObjectives(),n=e.getProgressPercent();if(this.progressPercentEl&&(this.progressPercentEl.textContent=`${n}%`),this.progressFillEl&&(this.progressFillEl.style.width=`${n}%`),!!this.objectivesListEl){this.objectivesListEl.innerHTML="";for(const i of t){const r=document.createElement("li");r.className="objective-item",i.isCompleted&&r.classList.add("completed"),i.isCurrent&&r.classList.add("current");const a=document.createElement("div");a.className="objective-icon",a.innerHTML=i.isCompleted?"✓":`${i.order}`;const o=document.createElement("div");o.className="objective-desc";const c=document.createElement("span");c.className="objective-name",c.textContent=i.title;const l=document.createElement("span");l.className="objective-subtext",l.textContent=i.description,o.appendChild(c),o.appendChild(l),r.appendChild(a),r.appendChild(o),this.objectivesListEl.appendChild(r)}}}updateGuideBanner(){if(!this.guideInstructionEl||!this.guideHintEl)return;const t=Ft.getInstance().getActiveMission().getObjectives();if(Ft.getInstance().getState()===$e.COMPLETED){this.guideInstructionEl.textContent="✅ ¡MISIÓN 001 COMPLETADA CON ÉXITO!",this.guideHintEl.textContent="Revisa tu informe de evaluación y logros operacionales obtenidos.";return}const i=t.find(r=>r.isCurrent)||t.find(r=>!r.isCompleted);if(!i){this.guideInstructionEl.textContent="✅ Objetivos primarios concluidos",this.guideHintEl.textContent="Generando evaluación final de misión...";return}i.id==="tut_movement"?(this.guideInstructionEl.textContent="🎓 TUTORIAL: Desplázate unos pasos por el hábitat",this.guideHintEl.textContent="Usa el joystick virtual izquierdo (o teclas WASD) y desliza para girar la vista."):i.id==="tut_mission_control"?(this.guideInstructionEl.textContent="🎓 TUTORIAL: Acércate al Centro de Control frontal",this.guideHintEl.textContent="Apunta a la mesa [CENTRO DE CONTROL] e interactúa para consultar telemetría general."):i.id==="tut_lifesupport"?(this.guideInstructionEl.textContent="🎓 TUTORIAL: Ve a la Consola de Soporte Vital a la izquierda",this.guideHintEl.textContent="Abre [1. SOPORTE VITAL] e inicia el escaneo diagnóstico de O₂ y CO₂."):i.id==="tut_science"?(this.guideInstructionEl.textContent="🎓 TUTORIAL: Visita la Estación de Ciencias a la derecha",this.guideHintEl.textContent="Examina la cámara de cultivo [2. CIENCIA BIOLÓGICA] para aprender sobre botánica espacial."):i.id==="tut_resources"?(this.guideInstructionEl.textContent="🎓 TUTORIAL: Examina el Gabinete de Repuestos al fondo",this.guideHintEl.textContent="Acércate a [3. ALMACÉN Y REPUESTOS] para completar tu entrenamiento en la academia."):i.id==="cert_diagnostics"?(this.guideInstructionEl.textContent="🎖️ EVALUACIÓN: Auditoría de Soporte Vital ECLSS",this.guideHintEl.textContent="Ve a [1. SOPORTE VITAL] a tu izquierda y ejecuta el escaneo de certificación."):i.id==="cert_biogrowth"?(this.guideInstructionEl.textContent="🎖️ EVALUACIÓN: Calibración Fotónica BIOGROWTH-01",this.guideHintEl.textContent="Ve a [2. CIENCIA BIOLÓGICA] a tu derecha y configura el espectro fotosintético."):i.id==="cert_emergency"?gn.getInstance().hasItem("filter_hepa_c1")?(this.guideInstructionEl.textContent="🛠️ EVALUACIÓN: Reemplazo Estricto de Filtro",this.guideHintEl.textContent="Regresa a [1. SOPORTE VITAL] y ejecuta el checklist de 5 pasos sin errores."):(this.guideInstructionEl.textContent="⚠️ EVALUACIÓN: ¡Alarma de Filtro! Ve al Almacén",this.guideHintEl.textContent="Dirígete a [3. ALMACÉN Y REPUESTOS] y extrae el filtro HEPA-C1 inmediatamente."):i.id==="cert_airlock"?(this.guideInstructionEl.textContent="🎖️ EVALUACIÓN: Certifica la Esclusa de Salida Exterior",this.guideHintEl.textContent="Camina a la compuerta [ESCLUSA DE SALIDA EVA] al fondo derecha y confirma sellado."):i.id==="obj_inspection"?(this.guideInstructionEl.textContent="PASO 1: Dirígete a la Consola de Soporte Vital",this.guideHintEl.textContent="Sigue el marcador azul [1. SOPORTE VITAL] a tu izquierda e inicia el diagnóstico."):i.id==="obj_science"?(this.guideInstructionEl.textContent="PASO 2: Dirígete a la Estación de Ciencias",this.guideHintEl.textContent="Sigue el marcador verde [2. CIENCIA BIOLÓGICA] a tu derecha y calibra BIOGROWTH-01."):i.id==="obj_emergency"&&(gn.getInstance().hasItem("filter_hepa_c1")?(this.guideInstructionEl.textContent="🛠️ PASO 4: Regresa a Soporte Vital para el reemplazo",this.guideHintEl.textContent="Ve a [1. SOPORTE VITAL] y ejecuta los 5 pasos del procedimiento de reemplazo."):(this.guideInstructionEl.textContent="⚠️ PASO 3: Ve al Almacén por el filtro de repuesto",this.guideHintEl.textContent="Sigue el marcador ámbar [3. ALMACÉN Y REPUESTOS] al fondo y extrae el filtro HEPA-C1."))}}class Sm{constructor(){C(this,"modalLifeSupport");C(this,"contentLifeSupport");C(this,"modalScience");C(this,"contentScience");C(this,"modalResources");C(this,"contentResources");this.modalLifeSupport=document.getElementById("modal-lifesupport"),this.contentLifeSupport=document.getElementById("lifesupport-content"),this.modalScience=document.getElementById("modal-science"),this.contentScience=document.getElementById("science-content"),this.modalResources=document.getElementById("modal-resources"),this.contentResources=document.getElementById("resources-content"),this.bindEvents()}bindEvents(){K.getInstance().on("ui:openConsole",e=>{this.closeAll(),e==="lifesupport"&&this.openLifeSupport(),e==="science"&&this.openScience(),e==="resources"&&this.openResources()}),Ut(document.getElementById("btn-close-lifesupport"),()=>this.closeAll()),Ut(document.getElementById("btn-close-science"),()=>this.closeAll()),Ut(document.getElementById("btn-close-resources"),()=>this.closeAll()),K.getInstance().on("ui:notify",e=>{alert(`[AVISO HÁBITAT] ${e}`)})}closeAll(){var e,t,n;(e=this.modalLifeSupport)==null||e.classList.add("hidden"),(t=this.modalScience)==null||t.classList.add("hidden"),(n=this.modalResources)==null||n.classList.add("hidden"),K.getInstance().emit("ui:consoleClosed")}openLifeSupport(){var e;(e=this.modalLifeSupport)==null||e.classList.remove("hidden"),this.renderLifeSupportUI()}renderLifeSupportUI(){var o;if(!this.contentLifeSupport)return;const e=es.getInstance(),t=e.getTelemetry(),n=oi.getInstance(),i=gn.getInstance().hasItem("filter_hepa_c1");let r=`
      <div class="console-section-title">LECTURAS EN TIEMPO REAL (DATOS SIMULADOS)</div>
      <div class="console-grid">
        <div class="metric-card ${t.o2Percent<19.5?"critical":""}">
          <div class="metric-card-title">Oxígeno Cabina (O₂)</div>
          <div class="metric-card-val">${t.o2Percent.toFixed(1)} %</div>
          <div class="metric-card-status">${t.o2Percent>=19.5?"ÓPTIMO":"BAJO"}</div>
        </div>
        <div class="metric-card ${t.co2Ppm>800?"critical":""}">
          <div class="metric-card-title">Dióxido de Carbono (CO₂)</div>
          <div class="metric-card-val">${Math.round(t.co2Ppm)} ppm</div>
          <div class="metric-card-status">${t.co2Ppm<=600?"NOMINAL":"ACUMULACIÓN"}</div>
        </div>
        <div class="metric-card">
          <div class="metric-card-title">Presión Barométrica</div>
          <div class="metric-card-val">${t.cabinPressureKpa.toFixed(1)} kPa</div>
          <div class="metric-card-status">HERMÉTICO</div>
        </div>
        <div class="metric-card ${n.getIsActive()?"critical":""}">
          <div class="metric-card-title">Circuito de Filtración</div>
          <div class="metric-card-val" style="font-size: 1.1rem;">${t.filterLoopStatus}</div>
          <div class="metric-card-status">BUCLE SECUNDARIO</div>
        </div>
      </div>
    `;!n.getIsActive()&&!n.getIsResolved()&&(r+=`
        <div class="console-section-title" style="margin-top: 15px;">RUTINA DE INSPECCIÓN DIAGNÓSTICA</div>
        <p style="color: var(--text-secondary); font-size: 0.85rem;">
          Inicie el escaneo de los subsistemas de soporte vital para verificar el circuito de aire y filtración.
        </p>
        <button id="btn-run-diagnostic" class="btn-primary-large" style="margin-top: 10px;">
          ${t.diagnosticCompleted?"RE-EJECUTAR DIAGNÓSTICO INTEGRAL":"EJECUTAR DIAGNÓSTICO INTEGRAL"}
        </button>
      `,t.diagnosticCompleted&&(r+=`
          <div style="background: rgba(255, 171, 0, 0.1); border-left: 3px solid #ffab00; padding: 12px; margin-top: 14px; border-radius: 4px;">
            <strong style="color: #ffab00;">RESULTADO DEL DIAGNÓSTICO:</strong>
            <p style="font-size: 0.85rem; margin-top: 4px;">
              ✓ Colector criogénico O₂: Nominal<br/>
              ✓ Válvulas barométricas: Nominal<br/>
              ⚠ <strong>Restricción de flujo detectada:</strong> Cartucho HEPA-C1 presenta pérdida de carga anómala. Continúe con sus asignaciones científicas mientras el sistema monitoriza el componente.
            </p>
          </div>
        `)),n.getIsActive()&&(r+=`
        <div class="console-section-title" style="margin-top: 15px; color: var(--tech-red);">
          PROTOCOLO DE CONTINGENCIA: REEMPLAZO DE FILTRO HEPA-C1
        </div>
        <p style="color: #ffcdd2; font-size: 0.85rem;">
          Siga rigurosamente la secuencia operacional para estabilizar el circuito de purificación.
        </p>

        <div style="display: flex; flex-direction: column; gap: 8px; margin-top: 10px;">
          ${n.steps.map((c,l)=>{var d;const h=((d=n.getCurrentStep())==null?void 0:d.id)===c.id;return`
                <div style="display: flex; align-items: center; justify-content: space-between; padding: 8px 12px; background: ${c.completed?"rgba(0, 230, 118, 0.1)":h?"rgba(0, 229, 255, 0.15)":"rgba(255, 255, 255, 0.04)"}; border: 1px solid ${h?"var(--tech-cyan)":"transparent"}; border-radius: 4px;">
                  <div>
                    <span style="font-weight: 700; color: ${c.completed?"var(--tech-green)":h?"var(--tech-cyan)":"var(--text-secondary)"};">
                      ${c.name}
                    </span>
                    <div style="font-size: 0.75rem; color: var(--text-dim);">${c.description}</div>
                  </div>
                  <div>
                    ${c.completed?'<span style="color: var(--tech-green); font-weight: 700;">COMPLETADO</span>':h?`<button class="btn-action btn-xr btn-execute-step" data-step="${c.id}" style="padding: 4px 12px;">EJECUTAR</button>`:'<span style="color: var(--text-dim); font-size: 0.8rem;">PENDIENTE</span>'}
                  </div>
                </div>
              `}).join("")}
        </div>

        ${i?`<div style="background: rgba(0, 230, 118, 0.1); border: 1px solid var(--tech-green); padding: 10px; border-radius: 4px; margin-top: 10px; font-size: 0.82rem; color: #b9f6ca;">
                 ✓ Cartucho HEPA-C1 en posesión del astronauta.
               </div>`:`<div style="background: rgba(255, 23, 68, 0.15); border: 1px solid var(--tech-red); padding: 10px; border-radius: 4px; margin-top: 10px; font-size: 0.82rem; color: #ffcdd2;">
                 ⚠ <strong>Aviso de Componente:</strong> Requiere el <em>Cartucho HEPA-C1</em>. Diríjase al <strong>Gabinete de Recursos</strong> para extraerlo antes del paso 3.
               </div>`}
      `),n.getIsResolved()&&(r+=`
        <div style="background: rgba(0, 230, 118, 0.15); border: 1px solid var(--tech-green); padding: 14px; border-radius: 6px; margin-top: 15px;">
          <h4 style="color: var(--tech-green); font-family: var(--font-display);">¡SISTEMA COMPLETAMENTE RESTABLECIDO!</h4>
          <p style="font-size: 0.85rem; color: var(--text-primary); margin-top: 4px;">
            El flujo secundario opera con hermeticidad total y filtración nominal. Los niveles de CO₂ han sido normalizados.
          </p>
        </div>
      `),this.contentLifeSupport.innerHTML=r,(o=document.getElementById("btn-run-diagnostic"))==null||o.addEventListener("click",()=>{je.getInstance().playClick(),e.runDiagnostic(),this.renderLifeSupportUI()}),this.contentLifeSupport.querySelectorAll(".btn-execute-step").forEach(c=>{c.addEventListener("click",l=>{const h=l.currentTarget.getAttribute("data-step");je.getInstance().playClick();const d=n.executeStep(h);d.success?je.getInstance().playSuccessTone():alert(d.message),this.renderLifeSupportUI()})})}openScience(){var e;(e=this.modalScience)==null||e.classList.remove("hidden"),this.renderScienceUI()}renderScienceUI(){var h;if(!this.contentScience)return;const e=Qi.getInstance(),t=e.getSelectedSample(),n=e.getCompletedResult();let i=`
      <div class="console-section-title">SELECCIÓN DE ESPECÍMEN BOTÁNICO</div>
      <div style="display: flex; gap: 10px; margin-bottom: 16px;">
        ${e.availableSamples.map(d=>`
          <button class="btn-action btn-sample-select ${d.id===t.id?"btn-xr":""}" data-id="${d.id}" style="flex: 1; text-align: left; padding: 10px;">
            <div style="font-weight: 700;">${d.name}</div>
            <div style="font-size: 0.7rem; color: var(--text-dim);">${d.scientificName}</div>
          </button>
        `).join("")}
      </div>

      <div style="background: rgba(0, 0, 0, 0.4); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 6px; padding: 14px; margin-bottom: 20px;">
        <div style="font-weight: 700; color: var(--tech-cyan);">${t.name}</div>
        <p style="font-size: 0.85rem; color: var(--text-secondary); margin: 6px 0;">${t.description}</p>
        <div style="display: flex; gap: 20px; font-family: var(--font-mono); font-size: 0.78rem; color: var(--mars-orange-light);">
          <span>Fotoperiodo Óptimo: ~${t.targetLight}%</span>
          <span>Irrigación Óptima: ~${t.targetWater}%</span>
        </div>
      </div>

      <div class="console-section-title">CALIBRACIÓN DE PARÁMETROS HIDROPÓNICOS</div>

      <div class="control-row">
        <div class="control-label">
          <span>INTENSIDAD LUMÍNICA (ESPECTRO PAR):</span>
          <span id="lbl-light-val" style="color: var(--tech-cyan); font-weight: 700;">${e.getLight()}%</span>
        </div>
        <input type="range" id="slider-light" class="control-slider" min="0" max="100" value="${e.getLight()}">
      </div>

      <div class="control-row">
        <div class="control-label">
          <span>SUMINISTRO DE AGUA Y NUTRIENTES:</span>
          <span id="lbl-water-val" style="color: var(--tech-cyan); font-weight: 700;">${e.getWater()}%</span>
        </div>
        <input type="range" id="slider-water" class="control-slider" min="0" max="100" value="${e.getWater()}">
      </div>

      <button id="btn-run-experiment" class="btn-primary-large" style="margin-top: 10px; width: 100%;">
        ${n?"RE-CALIBRAR Y EJECUTAR CICLO":"INICIAR CICLO EXPERIMENTAL BIOGROWTH-01"}
      </button>
    `;n&&(i+=`
        <div style="background: rgba(0, 229, 255, 0.08); border-left: 3px solid var(--tech-cyan); border-radius: 6px; padding: 14px; margin-top: 16px;">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <strong style="color: var(--tech-cyan); font-family: var(--font-display);">RESULTADO: ${n.outcome}</strong>
            <span style="font-family: var(--font-mono); font-weight: 700; color: #fff;">ÍNDICE DE CRECIMIENTO: ${n.growthIndexPercent}%</span>
          </div>
          <p style="font-size: 0.85rem; color: var(--text-primary); margin-top: 6px;">
            ${n.educationalNote}
          </p>
        </div>
      `),this.contentScience.innerHTML=i;const r=document.getElementById("slider-light"),a=document.getElementById("slider-water"),o=document.getElementById("lbl-light-val"),c=document.getElementById("lbl-water-val");r==null||r.addEventListener("input",()=>{const d=Number(r.value);e.setLight(d),o&&(o.textContent=`${d}%`)}),a==null||a.addEventListener("input",()=>{const d=Number(a.value);e.setWater(d),c&&(c.textContent=`${d}%`)}),this.contentScience.querySelectorAll(".btn-sample-select").forEach(d=>{d.addEventListener("click",f=>{const m=f.currentTarget.getAttribute("data-id");je.getInstance().playClick(),e.setSample(m),this.renderScienceUI()})}),(h=document.getElementById("btn-run-experiment"))==null||h.addEventListener("click",()=>{je.getInstance().playClick(),e.executeExperiment(),je.getInstance().playSuccessTone(),this.renderScienceUI()})}openResources(){var e;(e=this.modalResources)==null||e.classList.remove("hidden"),this.renderResourcesUI()}renderResourcesUI(){var r;if(!this.contentResources)return;const e=gn.getInstance(),t=e.getAllItems(),n=e.hasItem("filter_hepa_c1"),i=`
      <div class="console-section-title">INVENTARIO DEL HÁBITAT</div>
      <div style="display: flex; flex-direction: column; gap: 12px;">
        ${t.map(a=>`
          <div style="display: flex; justify-content: space-between; align-items: center; background: rgba(0, 0, 0, 0.4); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 6px; padding: 14px;">
            <div>
              <div style="font-weight: 700; color: #fff;">${a.name}</div>
              <div style="font-size: 0.8rem; color: var(--text-dim); margin-top: 2px;">${a.description}</div>
              <div style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--tech-cyan); margin-top: 4px;">CATEGORÍA: ${a.category.toUpperCase()}</div>
            </div>
            <div>
              ${a.id==="filter_hepa_c1"?n?'<span style="color: var(--tech-green); font-weight: 700; font-size: 0.85rem;">EN TU EQUIPO</span>':'<button id="btn-retrieve-filter" class="btn-primary-large" style="padding: 8px 16px; font-size: 0.85rem;">EXTRAER REPUESTO</button>':'<span style="color: var(--text-secondary); font-size: 0.85rem;">EN DOTACIÓN</span>'}
            </div>
          </div>
        `).join("")}
      </div>
    `;this.contentResources.innerHTML=i,(r=document.getElementById("btn-retrieve-filter"))==null||r.addEventListener("click",()=>{je.getInstance().playClick(),e.retrieveFilterFromCabinet(),je.getInstance().playSuccessTone(),this.renderResourcesUI()})}}const Xo=[{id:"ach_first_steps",icon:"🚀",title:"Primer Contacto",description:"Inicia tu primera simulación en la Estación Análoga Argyre Planitia.",category:"operational"},{id:"ach_diagnostic",icon:"🩺",title:"Diagnóstico Vital",description:"Completa la rutina integral de escaneo en la Consola ECLSS.",category:"operational"},{id:"ach_botanist",icon:"🌱",title:"Botánico Marciano",description:"Calibra con éxito el fotoperiodo e irrigación en BIOGROWTH-01.",category:"science"},{id:"ach_spare_part",icon:"📦",title:"Técnico de Suministros",description:"Localiza y extrae el cartucho de filtración HEPA-C1 del almacén.",category:"operational"},{id:"ach_hero",icon:"🛠️",title:"Salvador del Hábitat",description:"Resuelve la contingencia crítica de filtración restableciendo el soporte vital.",category:"safety"},{id:"ach_elite",icon:"🌟",title:"Astronauta de Élite",description:"Obtén una calificación superior a 90 puntos en el reporte final de misión.",category:"mastery"},{id:"ach_speedrun",icon:"⚡",title:"Respuesta Rápida",description:"Completa la misión 001 en menos de 4 minutos.",category:"mastery"},{id:"ach_explorer",icon:"🔍",title:"Inspección Exhaustiva",description:"Interactúa con todas las terminales y verifica la esclusa exterior.",category:"operational"},{id:"ach_academy_grad",icon:"🎓",title:"Graduado de la Academia",description:"Completa con éxito el entrenamiento interactivo en Modo Tutorial.",category:"operational"},{id:"ach_certified_astronaut",icon:"📜",title:"Certificación Oficial",description:"Supera el examen operacional y obtén tu Diploma de Astronauta Análogo.",category:"mastery"},{id:"ach_honors_commander",icon:"⭐",title:"Comandante con Honores",description:"Obtén 95+ puntos de distinción en el examen de Certificación Oficial.",category:"mastery"}],Qn=class Qn{constructor(){C(this,"visitedStations",new Set);C(this,"toastContainer",null);this.createToastContainer(),this.bindEvents()}static getInstance(){return Qn.instance||(Qn.instance=new Qn),Qn.instance}createToastContainer(){if(typeof document>"u")return;let e=document.getElementById("achievement-toast-container");e||(e=document.createElement("div"),e.id="achievement-toast-container",e.className="achievement-toast-container",document.body.appendChild(e)),this.toastContainer=e}bindEvents(){K.getInstance().on("mission:stateChanged",t=>{t.current==="ACTIVE"&&this.unlock("ach_first_steps")}),K.getInstance().on("lifesupport:diagnosticComplete",()=>{this.unlock("ach_diagnostic")}),K.getInstance().on("science:completed",()=>{this.unlock("ach_botanist")}),K.getInstance().on("resources:itemRetrieved",t=>{t.id==="filter_hepa_c1"&&this.unlock("ach_spare_part")}),K.getInstance().on("emergency:resolved",()=>{this.unlock("ach_hero")}),K.getInstance().on("mission:completed",t=>{t.report.totalScore>=90&&this.unlock("ach_elite"),t.report.metrics.timeElapsedSeconds<=240&&this.unlock("ach_speedrun")}),K.getInstance().on("tutorial:completed",()=>{this.unlock("ach_academy_grad")}),K.getInstance().on("certification:completed",t=>{this.unlock("ach_certified_astronaut"),t.report.totalScore>=95&&this.unlock("ach_honors_commander"),t.report.totalScore>=90&&this.unlock("ach_elite")});const e=t=>{this.visitedStations.add(t),this.visitedStations.size>=4&&this.unlock("ach_explorer")};K.getInstance().on("interaction:interacted",e),K.getInstance().on("interaction:triggered",e)}unlock(e){const t=Xo.find(r=>r.id===e);if(!t)return!1;if(ai.getInstance().unlockAchievement(e)){try{je.getInstance().playSuccessTone()}catch{}return this.showToast(t),K.getInstance().emit("achievement:unlocked",t),!0}return!1}showToast(e){if(this.toastContainer||this.createToastContainer(),!this.toastContainer)return;const t=document.createElement("div");t.className="achievement-toast animate-slide-in",t.innerHTML=`
      <div class="toast-glow"></div>
      <div class="toast-icon">${e.icon}</div>
      <div class="toast-info">
        <span class="toast-tag">¡LOGRO DESBLOQUEADO!</span>
        <strong class="toast-title">${e.title}</strong>
        <p class="toast-desc">${e.description}</p>
      </div>
    `,this.toastContainer.appendChild(t),window.setTimeout(()=>{t.classList.add("animate-slide-out"),window.setTimeout(()=>{t.parentElement&&t.parentElement.removeChild(t)},500)},4500)}getAllAchievements(){const e=ai.getInstance().getUnlockedAchievements();return Xo.map(t=>({achievement:t,isUnlocked:e.includes(t.id)}))}};C(Qn,"instance");let Di=Qn;class ym{constructor(){C(this,"modalEl");C(this,"cardContentEl");this.modalEl=document.getElementById("modal-report"),this.cardContentEl=document.getElementById("report-card-content"),this.bindEvents()}bindEvents(){K.getInstance().on("mission:completed",e=>{this.renderReport(e.report),this.show()})}show(){var e;(e=this.modalEl)==null||e.classList.remove("hidden")}hide(){var e;(e=this.modalEl)==null||e.classList.add("hidden")}renderReport(e){var i;if(!this.cardContentEl)return;const t=sn.formatTime(e.metrics.timeElapsedSeconds),n=`
      <div class="report-header">
        <div class="space-badge">SPACE TECH LABS • EVALUACIÓN OPERACIONAL</div>
        <h2 style="font-family: var(--font-display); font-size: 1.8rem; margin: 8px 0;">INFORME FINAL DE MISIÓN 001</h2>
        <p style="color: var(--text-secondary); font-size: 0.9rem;">Estación Análoga Argyre Planitia — Módulo de Investigación</p>
      </div>

      <div class="report-score-box">
        <div class="score-circle">
          <span class="score-number">${e.totalScore}</span>
          <span class="score-total">/ 100 PTS</span>
        </div>
        <div style="text-align: left;">
          <div style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--text-dim);">CALIFICACIÓN GLOBAL</div>
          <div style="font-family: var(--font-display); font-size: 1.5rem; font-weight: 800; color: ${e.totalScore>=80?"var(--tech-cyan)":"var(--mars-orange-light)"};">
            ${e.rating}
          </div>
          <div style="font-family: var(--font-mono); font-size: 0.85rem; color: var(--text-secondary); margin-top: 4px;">
            Tiempo de Misión: <strong>${t}</strong>
          </div>
        </div>
      </div>

      <div class="report-breakdown">
        <div class="breakdown-row">
          <span>Cumplimiento de Objetivos (3/3):</span>
          <strong style="color: var(--tech-cyan);">${e.breakdown.objectivesScore} / 40 pts</strong>
        </div>
        <div class="breakdown-row">
          <span>Precisión Procedimental y Seguridad:</span>
          <strong style="color: var(--tech-green);">${e.breakdown.proceduralScore} / 30 pts</strong>
        </div>
        <div class="breakdown-row">
          <span>Decisiones de Laboratorio & Recursos:</span>
          <strong style="color: var(--mars-orange-light);">${e.breakdown.resourcesScore} / 20 pts</strong>
        </div>
        <div class="breakdown-row">
          <span>Eficiencia Temporal:</span>
          <strong style="color: #fff;">${e.breakdown.timeScore} / 10 pts</strong>
        </div>
      </div>

      <div class="report-feedback">
        <strong style="color: var(--tech-cyan);">OBSERVACIONES EDUCATIVAS:</strong>
        <ul style="margin: 6px 0 12px 18px;">
          ${e.educationalNotes.map(r=>`<li>${r}</li>`).join("")}
        </ul>
        <strong style="color: var(--mars-orange-light);">RECOMENDACIONES DE MEJORA:</strong>
        <ul style="margin: 6px 0 0 18px;">
          ${e.recommendations.map(r=>`<li>${r}</li>`).join("")}
        </ul>
      </div>

      <!-- Logros Obtenidos -->
      <div class="report-achievements-box" style="margin-top: 20px; text-align: left;">
        <div style="font-family: var(--font-display); font-size: 1.1rem; color: var(--tech-cyan); font-weight: 700; margin-bottom: 12px; display: flex; align-items: center; justify-content: space-between;">
          <span>🏆 REGISTRO DE LOGROS OPERACIONALES</span>
          <span style="font-size: 0.85rem; font-family: var(--font-mono); color: var(--text-secondary);">
            ${Di.getInstance().getAllAchievements().filter(r=>r.isUnlocked).length} / ${Di.getInstance().getAllAchievements().length} DESBLOQUEADOS
          </span>
        </div>
        <div class="report-achievements-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 10px;">
          ${Di.getInstance().getAllAchievements().map(({achievement:r,isUnlocked:a})=>`
            <div style="background: ${a?"rgba(0, 229, 255, 0.08)":"rgba(255, 255, 255, 0.03)"}; border: 1px solid ${a?"var(--tech-cyan)":"rgba(255,255,255,0.1)"}; border-radius: 8px; padding: 10px 12px; display: flex; align-items: center; gap: 12px; opacity: ${a?"1":"0.5"};">
              <span style="font-size: 1.8rem; filter: ${a?"none":"grayscale(100%)"};">${r.icon}</span>
              <div>
                <div style="font-family: var(--font-display); font-weight: 700; font-size: 0.95rem; color: ${a?"#fff":"var(--text-dim)"};">${r.title}</div>
                <div style="font-size: 0.75rem; color: var(--text-secondary); line-height: 1.2; margin-top: 2px;">${r.description}</div>
                <div style="font-size: 0.68rem; font-family: var(--font-mono); color: ${a?"var(--tech-green)":"var(--text-dim)"}; margin-top: 4px;">
                  ${a?"✓ DESBLOQUEADO":"🔒 BLOQUEADO"}
                </div>
              </div>
            </div>
          `).join("")}
        </div>
      </div>

      <div style="display: flex; gap: 16px; margin-top: 20px;">
        <button id="btn-repeat-mission" class="btn-primary-large" style="flex: 1;">
          REPETIR MISIÓN
        </button>
      </div>

      <div style="font-size: 0.72rem; color: var(--text-dim); margin-top: 14px;">
        ✓ Datos de rendimiento guardados localmente bajo la clave del sistema SPACE Tech Labs.
      </div>
    `;this.cardContentEl.innerHTML=n,(i=document.getElementById("btn-repeat-mission"))==null||i.addEventListener("click",()=>{je.getInstance().playClick(),this.hide(),Ft.getInstance().resetMission(),K.getInstance().emit("ui:showMainMenu")})}}class bm{constructor(){C(this,"modalEl");C(this,"nameInputEl");C(this,"rankEl");C(this,"scoreEl");C(this,"timeEl");C(this,"idEl");C(this,"btnPrint");C(this,"btnClose");this.modalEl=document.getElementById("modal-certificate"),this.nameInputEl=document.getElementById("cert-astronaut-name"),this.rankEl=document.getElementById("cert-rank-display"),this.scoreEl=document.getElementById("cert-score-display"),this.timeEl=document.getElementById("cert-time-display"),this.idEl=document.getElementById("cert-id-display"),this.btnPrint=document.getElementById("btn-print-certificate"),this.btnClose=document.getElementById("btn-close-certificate"),this.bindEvents()}bindEvents(){if(K.getInstance().on("certification:completed",e=>{this.populate(e.report),this.show()}),this.nameInputEl){const e=localStorage.getItem("mam_astronaut_name");e&&(this.nameInputEl.value=e),this.nameInputEl.addEventListener("input",()=>{this.nameInputEl&&localStorage.setItem("mam_astronaut_name",this.nameInputEl.value)})}Ut(this.btnPrint,()=>{je.getInstance().playClick(),window.print()}),Ut(this.btnClose,()=>{je.getInstance().playClick(),this.hide(),K.getInstance().emit("ui:showMainMenu")})}populate(e){const t=sn.formatTime(e.metrics.timeElapsedSeconds);let n="ESPECIALISTA DE MISIÓN ANÁLOGA",i="var(--tech-cyan)";if(e.totalScore>=95?(n="COMANDANTE ANÁLOGO DE ÉLITE (HONORIS CAUSA)",i="#ffd700"):e.totalScore>=85?(n="OFICIAL DE SISTEMAS DE HÁBITAT CLASE I",i="#00e676"):e.totalScore>=75?(n="ESPECIALISTA DE MISIÓN ANÁLOGA CLASE II",i="var(--tech-cyan)"):(n="CADETE ANÁLOGO (CERTIFICACIÓN CONDICIONAL)",i="#ffab00"),this.rankEl&&(this.rankEl.textContent=n,this.rankEl.style.color=i),this.scoreEl&&(this.scoreEl.textContent=`${e.totalScore} / 100 PTS`),this.timeEl&&(this.timeEl.textContent=t),this.idEl){const r="STL-MARS-"+Math.random().toString(16).substring(2,6).toUpperCase();this.idEl.textContent=r}try{je.getInstance().playSuccessTone()}catch{}}show(){this.modalEl&&(this.modalEl.classList.remove("hidden"),this.modalEl.classList.add("visible"))}hide(){this.modalEl&&(this.modalEl.classList.remove("visible"),this.modalEl.classList.add("hidden"))}}class Tm{constructor(){C(this,"container");C(this,"clock");C(this,"sceneManager");C(this,"cameraManager");C(this,"rendererManager");C(this,"inputManager");C(this,"mobileControls");C(this,"audioManager");C(this,"xrManager");C(this,"xrControllerManager");C(this,"xrInteractionManager");C(this,"habitat");C(this,"missionManager");C(this,"mainMenu");C(this,"briefing");C(this,"hud");C(this,"interactionPanel");C(this,"missionReport");C(this,"modalPause");C(this,"btnSoundToggle");const e=document.getElementById("webgl-container");if(!e)throw new Error("WebGL container element #webgl-container not found in DOM.");this.container=e,this.clock=new Qp,this.sceneManager=new tm,this.cameraManager=new nm,this.rendererManager=new im(this.container),this.sceneManager.add(this.cameraManager.cameraRig),this.habitat=new vm,this.sceneManager.add(this.habitat.group),this.audioManager=je.getInstance(),this.inputManager=new sm(this.cameraManager.camera,this.cameraManager.cameraRig,this.rendererManager.renderer.domElement),this.mobileControls=new dm(this.cameraManager.camera,this.inputManager),this.xrManager=new um(this.rendererManager.renderer),this.xrControllerManager=new fm(this.rendererManager.renderer,this.cameraManager.cameraRig),this.xrInteractionManager=new pm(this.xrControllerManager,this.cameraManager.cameraRig,this.rendererManager.renderer),this.missionManager=Ft.getInstance(),Di.getInstance(),this.mainMenu=new xm,this.briefing=new Em,this.hud=new Mm,this.interactionPanel=new Sm,this.missionReport=new ym,new bm,this.modalPause=document.getElementById("modal-pause"),this.btnSoundToggle=document.getElementById("btn-toggle-sound"),this.bindApplicationEvents(),this.startLoop(),console.log("[Application] MARS ANALOG MISSION initialized successfully.")}bindApplicationEvents(){const e=async()=>{this.audioManager.playClick(),await this.xrManager.enterVR()&&(this.mainMenu.hide(),this.briefing.hide(),this.inputManager.setEnabled(!1),this.mobileControls.setVisible(!1),this.missionManager.startMission(),this.audioManager.startAmbientHum())};Ut(document.getElementById("btn-enter-xr"),e),K.getInstance().on("xr:requestEnter",e),K.getInstance().on("xr:sessionEnd",()=>{this.inputManager.setEnabled(!0),en.getInstance().getIsMobile()&&this.mobileControls.setVisible(!0)}),Ut(document.getElementById("btn-pause-menu"),()=>{this.togglePause()}),K.getInstance().on("ui:togglePause",()=>{this.togglePause()}),Ut(document.getElementById("btn-resume-mission"),()=>{this.audioManager.playClick(),this.resume()}),Ut(document.getElementById("btn-restart-mission"),()=>{this.audioManager.playClick(),this.restart()}),Ut(this.btnSoundToggle,()=>{const t=this.audioManager.getEnabled();this.audioManager.setEnabled(!t),this.btnSoundToggle&&(this.btnSoundToggle.textContent=`AUDIO: ${t?"SILENCIADO":"ACTIVADO"}`),this.audioManager.playClick()}),K.getInstance().on("emergency:started",()=>{this.habitat.lighting.setEmergencyMode(!0),this.sceneManager.setEmergencyAtmosphere(!0),this.audioManager.startEmergencySiren()}),K.getInstance().on("emergency:resolved",()=>{this.habitat.lighting.setEmergencyMode(!1),this.sceneManager.setEmergencyAtmosphere(!1),this.audioManager.stopEmergencySiren()}),K.getInstance().on("mission:stateChanged",t=>{t.current===$e.ACTIVE||t.current===$e.EMERGENCY||t.current===$e.RECOVERY?(this.mobileControls.setEnabled(!0),this.mobileControls.setVisible(!0)):(t.current===$e.PAUSED||t.current===$e.COMPLETED)&&(this.mobileControls.setEnabled(!1),this.mobileControls.setVisible(!1))}),K.getInstance().on("ui:openConsole",()=>{this.inputManager.setEnabled(!1),this.mobileControls.setEnabled(!1),this.mobileControls.setVisible(!1)}),K.getInstance().on("ui:consoleClosed",()=>{const t=this.missionManager.getState();(t===$e.ACTIVE||t===$e.EMERGENCY||t===$e.RECOVERY)&&(this.inputManager.setEnabled(!0),this.mobileControls.setEnabled(!0),this.mobileControls.setVisible(!0))}),K.getInstance().on("ui:openBriefing",()=>{this.mobileControls.setVisible(!1)}),K.getInstance().on("mission:completed",()=>{this.mobileControls.setVisible(!1)}),K.getInstance().on("ui:showMainMenu",()=>{this.mobileControls.setVisible(!1),this.cameraManager.resetPosition(),this.inputManager.setEnabled(!0)})}togglePause(){this.missionManager.getState()===$e.PAUSED?this.resume():this.pause()}pause(){var e;this.missionManager.pauseMission(),this.inputManager.setEnabled(!1),this.mobileControls.setEnabled(!1),this.mobileControls.setVisible(!1),(e=this.modalPause)==null||e.classList.remove("hidden")}resume(){var e;(e=this.modalPause)==null||e.classList.add("hidden"),this.inputManager.setEnabled(!0),this.mobileControls.setEnabled(!0),this.mobileControls.setVisible(!0),this.missionManager.resumeMission()}restart(){var e;(e=this.modalPause)==null||e.classList.add("hidden"),this.mobileControls.setVisible(!1),this.missionManager.resetMission(),this.cameraManager.resetPosition(),this.mainMenu.show(),this.inputManager.setEnabled(!0)}startLoop(){this.rendererManager.setAnimationLoop((e,t)=>{const n=Math.min(this.clock.getDelta(),.1);this.habitat.update(n),this.xrManager.getIsVRActive()?this.xrInteractionManager.update(n):this.inputManager.update(n),this.missionManager.update(n),this.rendererManager.render(this.sceneManager.scene,this.cameraManager.camera)})}}window.addEventListener("DOMContentLoaded",()=>{try{const s=new Tm;window.__MARS_ANALOG_APP__=s}catch(s){console.error("[Main] Failed to initialize MARS ANALOG MISSION application:",s);const e=document.createElement("div");e.style.cssText="position:fixed;top:20px;left:20px;background:#b71c1c;color:#fff;padding:16px;border-radius:8px;z-index:9999;font-family:sans-serif;max-width:400px;",e.innerHTML=`<h3>Error al iniciar simulador</h3><p>${s instanceof Error?s.message:String(s)}</p>`,document.body.appendChild(e)}});
//# sourceMappingURL=index-BYi4yveE.js.map
