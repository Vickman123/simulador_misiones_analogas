var Bc=Object.defineProperty;var Hc=(s,e,t)=>e in s?Bc(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var w=(s,e,t)=>Hc(s,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ta="160",Gc=0,pa=1,kc=2,Yo=1,$o=2,fn=3,Pn=0,Gt=1,Lt=2,Cn=0,Oi=1,ma=2,ga=3,_a=4,zc=5,Vn=100,Vc=101,Wc=102,va=103,xa=104,Xc=200,jc=201,qc=202,Yc=203,Vr=204,Wr=205,$c=206,Zc=207,Kc=208,Jc=209,Qc=210,el=211,tl=212,nl=213,il=214,sl=0,rl=1,al=2,Vs=3,ol=4,cl=5,ll=6,hl=7,Zo=0,dl=1,ul=2,Rn=0,fl=1,pl=2,ml=3,Ko=4,gl=5,_l=6,Jo=300,Bi=301,Hi=302,Xr=303,jr=304,Ks=306,si=1e3,tn=1001,qr=1002,Ft=1003,Ea=1004,cr=1005,It=1006,vl=1007,ns=1008,In=1009,xl=1010,El=1011,na=1012,Qo=1013,Tn=1014,An=1015,is=1016,ec=1017,tc=1018,ri=1020,Ml=1021,nn=1023,Sl=1024,yl=1025,ai=1026,Gi=1027,bl=1028,nc=1029,Tl=1030,ic=1031,sc=1033,lr=33776,hr=33777,dr=33778,ur=33779,Ma=35840,Sa=35841,ya=35842,ba=35843,rc=36196,Ta=37492,Aa=37496,wa=37808,Ca=37809,Ra=37810,Ia=37811,La=37812,Pa=37813,Da=37814,Ua=37815,Oa=37816,Na=37817,Fa=37818,Ba=37819,Ha=37820,Ga=37821,fr=36492,ka=36494,za=36495,Al=36283,Va=36284,Wa=36285,Xa=36286,ac=3e3,oi=3001,wl=3200,Cl=3201,oc=0,Rl=1,Zt="",Tt="srgb",vn="srgb-linear",ia="display-p3",Js="display-p3-linear",Ws="linear",st="srgb",Xs="rec709",js="p3",ui=7680,ja=519,Il=512,Ll=513,Pl=514,cc=515,Dl=516,Ul=517,Ol=518,Nl=519,Yr=35044,qa="300 es",$r=1035,mn=2e3,qs=2001;class zi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const Ct=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],pr=Math.PI/180,Zr=180/Math.PI;function Ln(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ct[s&255]+Ct[s>>8&255]+Ct[s>>16&255]+Ct[s>>24&255]+"-"+Ct[e&255]+Ct[e>>8&255]+"-"+Ct[e>>16&15|64]+Ct[e>>24&255]+"-"+Ct[t&63|128]+Ct[t>>8&255]+"-"+Ct[t>>16&255]+Ct[t>>24&255]+Ct[n&255]+Ct[n>>8&255]+Ct[n>>16&255]+Ct[n>>24&255]).toLowerCase()}function Bt(s,e,t){return Math.max(e,Math.min(t,s))}function Fl(s,e){return(s%e+e)%e}function mr(s,e,t){return(1-t)*s+t*e}function Ya(s){return(s&s-1)===0&&s!==0}function Kr(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function pn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function et(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class we{constructor(e=0,t=0){we.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xe{constructor(e,t,n,i,r,a,o,c,l){Xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l)}set(e,t,n,i,r,a,o,c,l){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],d=n[7],f=n[2],m=n[5],_=n[8],g=i[0],p=i[3],u=i[6],M=i[1],v=i[4],S=i[7],I=i[2],A=i[5],C=i[8];return r[0]=a*g+o*M+c*I,r[3]=a*p+o*v+c*A,r[6]=a*u+o*S+c*C,r[1]=l*g+h*M+d*I,r[4]=l*p+h*v+d*A,r[7]=l*u+h*S+d*C,r[2]=f*g+m*M+_*I,r[5]=f*p+m*v+_*A,r[8]=f*u+m*S+_*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+i*r*l-i*a*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=h*a-o*l,f=o*c-h*r,m=l*r-a*c,_=t*d+n*f+i*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=d*g,e[1]=(i*l-h*n)*g,e[2]=(o*n-i*a)*g,e[3]=f*g,e[4]=(h*t-i*c)*g,e[5]=(i*r-o*t)*g,e[6]=m*g,e[7]=(n*c-l*t)*g,e[8]=(a*t-n*r)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-i*l,i*c,-i*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(gr.makeScale(e,t)),this}rotate(e){return this.premultiply(gr.makeRotation(-e)),this}translate(e,t){return this.premultiply(gr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const gr=new Xe;function lc(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Ys(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Bl(){const s=Ys("canvas");return s.style.display="block",s}const $a={};function Qi(s){s in $a||($a[s]=!0,console.warn(s))}const Za=new Xe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ka=new Xe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),fs={[vn]:{transfer:Ws,primaries:Xs,toReference:s=>s,fromReference:s=>s},[Tt]:{transfer:st,primaries:Xs,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Js]:{transfer:Ws,primaries:js,toReference:s=>s.applyMatrix3(Ka),fromReference:s=>s.applyMatrix3(Za)},[ia]:{transfer:st,primaries:js,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Ka),fromReference:s=>s.applyMatrix3(Za).convertLinearToSRGB()}},Hl=new Set([vn,Js]),Qe={enabled:!0,_workingColorSpace:vn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Hl.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=fs[e].toReference,i=fs[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return fs[s].primaries},getTransfer:function(s){return s===Zt?Ws:fs[s].transfer}};function Ni(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function _r(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let fi;class hc{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{fi===void 0&&(fi=Ys("canvas")),fi.width=e.width,fi.height=e.height;const n=fi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=fi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ys("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Ni(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ni(t[n]/255)*255):t[n]=Ni(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Gl=0;class dc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Gl++}),this.uuid=Ln(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(vr(i[a].image)):r.push(vr(i[a]))}else r=vr(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function vr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?hc.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let kl=0;class kt extends zi{constructor(e=kt.DEFAULT_IMAGE,t=kt.DEFAULT_MAPPING,n=tn,i=tn,r=It,a=ns,o=nn,c=In,l=kt.DEFAULT_ANISOTROPY,h=Zt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kl++}),this.uuid=Ln(),this.name="",this.source=new dc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new we(0,0),this.repeat=new we(1,1),this.center=new we(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Qi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===oi?Tt:Zt),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Jo)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case si:e.x=e.x-Math.floor(e.x);break;case tn:e.x=e.x<0?0:1;break;case qr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case si:e.y=e.y-Math.floor(e.y);break;case tn:e.y=e.y<0?0:1;break;case qr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Qi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Tt?oi:ac}set encoding(e){Qi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===oi?Tt:Zt}}kt.DEFAULT_IMAGE=null;kt.DEFAULT_MAPPING=Jo;kt.DEFAULT_ANISOTROPY=1;class rt{constructor(e=0,t=0,n=0,i=1){rt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const c=e.elements,l=c[0],h=c[4],d=c[8],f=c[1],m=c[5],_=c[9],g=c[2],p=c[6],u=c[10];if(Math.abs(h-f)<.01&&Math.abs(d-g)<.01&&Math.abs(_-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+g)<.1&&Math.abs(_+p)<.1&&Math.abs(l+m+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(l+1)/2,S=(m+1)/2,I=(u+1)/2,A=(h+f)/4,C=(d+g)/4,O=(_+p)/4;return v>S&&v>I?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=A/n,r=C/n):S>I?S<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(S),n=A/i,r=O/i):I<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(I),n=C/r,i=O/r),this.set(n,i,r,t),this}let M=Math.sqrt((p-_)*(p-_)+(d-g)*(d-g)+(f-h)*(f-h));return Math.abs(M)<.001&&(M=1),this.x=(p-_)/M,this.y=(d-g)/M,this.z=(f-h)/M,this.w=Math.acos((l+m+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class zl extends zi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new rt(0,0,e,t),this.scissorTest=!1,this.viewport=new rt(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(Qi("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===oi?Tt:Zt),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:It,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new kt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new dc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class li extends zl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class uc extends kt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vl extends kt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class cs{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let c=n[i+0],l=n[i+1],h=n[i+2],d=n[i+3];const f=r[a+0],m=r[a+1],_=r[a+2],g=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d;return}if(o===1){e[t+0]=f,e[t+1]=m,e[t+2]=_,e[t+3]=g;return}if(d!==g||c!==f||l!==m||h!==_){let p=1-o;const u=c*f+l*m+h*_+d*g,M=u>=0?1:-1,v=1-u*u;if(v>Number.EPSILON){const I=Math.sqrt(v),A=Math.atan2(I,u*M);p=Math.sin(p*A)/I,o=Math.sin(o*A)/I}const S=o*M;if(c=c*p+f*S,l=l*p+m*S,h=h*p+_*S,d=d*p+g*S,p===1-o){const I=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=I,l*=I,h*=I,d*=I}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],d=r[a],f=r[a+1],m=r[a+2],_=r[a+3];return e[t]=o*_+h*d+c*m-l*f,e[t+1]=c*_+h*f+l*d-o*m,e[t+2]=l*_+h*m+o*f-c*d,e[t+3]=h*_-o*d-c*f-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),d=o(r/2),f=c(n/2),m=c(i/2),_=c(r/2);switch(a){case"XYZ":this._x=f*h*d+l*m*_,this._y=l*m*d-f*h*_,this._z=l*h*_+f*m*d,this._w=l*h*d-f*m*_;break;case"YXZ":this._x=f*h*d+l*m*_,this._y=l*m*d-f*h*_,this._z=l*h*_-f*m*d,this._w=l*h*d+f*m*_;break;case"ZXY":this._x=f*h*d-l*m*_,this._y=l*m*d+f*h*_,this._z=l*h*_+f*m*d,this._w=l*h*d-f*m*_;break;case"ZYX":this._x=f*h*d-l*m*_,this._y=l*m*d+f*h*_,this._z=l*h*_-f*m*d,this._w=l*h*d+f*m*_;break;case"YZX":this._x=f*h*d+l*m*_,this._y=l*m*d+f*h*_,this._z=l*h*_-f*m*d,this._w=l*h*d-f*m*_;break;case"XZY":this._x=f*h*d-l*m*_,this._y=l*m*d-f*h*_,this._z=l*h*_+f*m*d,this._w=l*h*d+f*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],d=t[10],f=n+o+d;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-c)*m,this._y=(r-l)*m,this._z=(a-i)*m}else if(n>o&&n>d){const m=2*Math.sqrt(1+n-o-d);this._w=(h-c)/m,this._x=.25*m,this._y=(i+a)/m,this._z=(r+l)/m}else if(o>d){const m=2*Math.sqrt(1+o-n-d);this._w=(r-l)/m,this._x=(i+a)/m,this._y=.25*m,this._z=(c+h)/m}else{const m=2*Math.sqrt(1+d-n-o);this._w=(a-i)/m,this._x=(r+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Bt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+i*l-r*c,this._y=i*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-i*o,this._w=a*h-n*o-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),d=Math.sin((1-t)*h)/l,f=Math.sin(t*h)/l;return this._w=a*d+this._w*f,this._x=n*d+this._x*f,this._y=i*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(e=0,t=0,n=0){R.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ja.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ja.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*i-o*n),h=2*(o*t-r*i),d=2*(r*n-a*t);return this.x=t+c*l+a*d-o*h,this.y=n+c*h+o*l-r*d,this.z=i+c*d+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-r*o,this.y=r*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return xr.copy(this).projectOnVector(e),this.sub(xr)}reflect(e){return this.sub(xr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const xr=new R,Ja=new cs;class ls{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Jt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Jt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Jt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Jt):Jt.fromBufferAttribute(r,a),Jt.applyMatrix4(e.matrixWorld),this.expandByPoint(Jt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ps.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ps.copy(n.boundingBox)),ps.applyMatrix4(e.matrixWorld),this.union(ps)}const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Jt),Jt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xi),ms.subVectors(this.max,Xi),pi.subVectors(e.a,Xi),mi.subVectors(e.b,Xi),gi.subVectors(e.c,Xi),En.subVectors(mi,pi),Mn.subVectors(gi,mi),Fn.subVectors(pi,gi);let t=[0,-En.z,En.y,0,-Mn.z,Mn.y,0,-Fn.z,Fn.y,En.z,0,-En.x,Mn.z,0,-Mn.x,Fn.z,0,-Fn.x,-En.y,En.x,0,-Mn.y,Mn.x,0,-Fn.y,Fn.x,0];return!Er(t,pi,mi,gi,ms)||(t=[1,0,0,0,1,0,0,0,1],!Er(t,pi,mi,gi,ms))?!1:(gs.crossVectors(En,Mn),t=[gs.x,gs.y,gs.z],Er(t,pi,mi,gi,ms))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Jt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Jt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(cn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const cn=[new R,new R,new R,new R,new R,new R,new R,new R],Jt=new R,ps=new ls,pi=new R,mi=new R,gi=new R,En=new R,Mn=new R,Fn=new R,Xi=new R,ms=new R,gs=new R,Bn=new R;function Er(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Bn.fromArray(s,r);const o=i.x*Math.abs(Bn.x)+i.y*Math.abs(Bn.y)+i.z*Math.abs(Bn.z),c=e.dot(Bn),l=t.dot(Bn),h=n.dot(Bn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const Wl=new ls,ji=new R,Mr=new R;class hs{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Wl.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ji.subVectors(e,this.center);const t=ji.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ji,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Mr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ji.copy(e.center).add(Mr)),this.expandByPoint(ji.copy(e.center).sub(Mr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ln=new R,Sr=new R,_s=new R,Sn=new R,yr=new R,vs=new R,br=new R;class Qs{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ln)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ln.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ln.copy(this.origin).addScaledVector(this.direction,t),ln.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Sr.copy(e).add(t).multiplyScalar(.5),_s.copy(t).sub(e).normalize(),Sn.copy(this.origin).sub(Sr);const r=e.distanceTo(t)*.5,a=-this.direction.dot(_s),o=Sn.dot(this.direction),c=-Sn.dot(_s),l=Sn.lengthSq(),h=Math.abs(1-a*a);let d,f,m,_;if(h>0)if(d=a*c-o,f=a*o-c,_=r*h,d>=0)if(f>=-_)if(f<=_){const g=1/h;d*=g,f*=g,m=d*(d+a*f+2*o)+f*(a*d+f+2*c)+l}else f=r,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*c)+l;else f=-r,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*c)+l;else f<=-_?(d=Math.max(0,-(-a*r+o)),f=d>0?-r:Math.min(Math.max(-r,-c),r),m=-d*d+f*(f+2*c)+l):f<=_?(d=0,f=Math.min(Math.max(-r,-c),r),m=f*(f+2*c)+l):(d=Math.max(0,-(a*r+o)),f=d>0?r:Math.min(Math.max(-r,-c),r),m=-d*d+f*(f+2*c)+l);else f=a>0?-r:r,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Sr).addScaledVector(_s,f),m}intersectSphere(e,t){ln.subVectors(e.center,this.origin);const n=ln.dot(this.direction),i=ln.dot(ln)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,i=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,i=(e.min.x-f.x)*l),h>=0?(r=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),d>=0?(o=(e.min.z-f.z)*d,c=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,c=(e.min.z-f.z)*d),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,ln)!==null}intersectTriangle(e,t,n,i,r){yr.subVectors(t,e),vs.subVectors(n,e),br.crossVectors(yr,vs);let a=this.direction.dot(br),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Sn.subVectors(this.origin,e);const c=o*this.direction.dot(vs.crossVectors(Sn,vs));if(c<0)return null;const l=o*this.direction.dot(yr.cross(Sn));if(l<0||c+l>a)return null;const h=-o*Sn.dot(br);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class at{constructor(e,t,n,i,r,a,o,c,l,h,d,f,m,_,g,p){at.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l,h,d,f,m,_,g,p)}set(e,t,n,i,r,a,o,c,l,h,d,f,m,_,g,p){const u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=i,u[1]=r,u[5]=a,u[9]=o,u[13]=c,u[2]=l,u[6]=h,u[10]=d,u[14]=f,u[3]=m,u[7]=_,u[11]=g,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new at().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/_i.setFromMatrixColumn(e,0).length(),r=1/_i.setFromMatrixColumn(e,1).length(),a=1/_i.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const f=a*h,m=a*d,_=o*h,g=o*d;t[0]=c*h,t[4]=-c*d,t[8]=l,t[1]=m+_*l,t[5]=f-g*l,t[9]=-o*c,t[2]=g-f*l,t[6]=_+m*l,t[10]=a*c}else if(e.order==="YXZ"){const f=c*h,m=c*d,_=l*h,g=l*d;t[0]=f+g*o,t[4]=_*o-m,t[8]=a*l,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=m*o-_,t[6]=g+f*o,t[10]=a*c}else if(e.order==="ZXY"){const f=c*h,m=c*d,_=l*h,g=l*d;t[0]=f-g*o,t[4]=-a*d,t[8]=_+m*o,t[1]=m+_*o,t[5]=a*h,t[9]=g-f*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const f=a*h,m=a*d,_=o*h,g=o*d;t[0]=c*h,t[4]=_*l-m,t[8]=f*l+g,t[1]=c*d,t[5]=g*l+f,t[9]=m*l-_,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const f=a*c,m=a*l,_=o*c,g=o*l;t[0]=c*h,t[4]=g-f*d,t[8]=_*d+m,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=m*d+_,t[10]=f-g*d}else if(e.order==="XZY"){const f=a*c,m=a*l,_=o*c,g=o*l;t[0]=c*h,t[4]=-d,t[8]=l*h,t[1]=f*d+g,t[5]=a*h,t[9]=m*d-_,t[2]=_*d-m,t[6]=o*h,t[10]=g*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Xl,e,jl)}lookAt(e,t,n){const i=this.elements;return Vt.subVectors(e,t),Vt.lengthSq()===0&&(Vt.z=1),Vt.normalize(),yn.crossVectors(n,Vt),yn.lengthSq()===0&&(Math.abs(n.z)===1?Vt.x+=1e-4:Vt.z+=1e-4,Vt.normalize(),yn.crossVectors(n,Vt)),yn.normalize(),xs.crossVectors(Vt,yn),i[0]=yn.x,i[4]=xs.x,i[8]=Vt.x,i[1]=yn.y,i[5]=xs.y,i[9]=Vt.y,i[2]=yn.z,i[6]=xs.z,i[10]=Vt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],d=n[5],f=n[9],m=n[13],_=n[2],g=n[6],p=n[10],u=n[14],M=n[3],v=n[7],S=n[11],I=n[15],A=i[0],C=i[4],O=i[8],x=i[12],b=i[1],U=i[5],F=i[9],$=i[13],L=i[2],N=i[6],z=i[10],q=i[14],Y=i[3],Z=i[7],K=i[11],ie=i[15];return r[0]=a*A+o*b+c*L+l*Y,r[4]=a*C+o*U+c*N+l*Z,r[8]=a*O+o*F+c*z+l*K,r[12]=a*x+o*$+c*q+l*ie,r[1]=h*A+d*b+f*L+m*Y,r[5]=h*C+d*U+f*N+m*Z,r[9]=h*O+d*F+f*z+m*K,r[13]=h*x+d*$+f*q+m*ie,r[2]=_*A+g*b+p*L+u*Y,r[6]=_*C+g*U+p*N+u*Z,r[10]=_*O+g*F+p*z+u*K,r[14]=_*x+g*$+p*q+u*ie,r[3]=M*A+v*b+S*L+I*Y,r[7]=M*C+v*U+S*N+I*Z,r[11]=M*O+v*F+S*z+I*K,r[15]=M*x+v*$+S*q+I*ie,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],d=e[6],f=e[10],m=e[14],_=e[3],g=e[7],p=e[11],u=e[15];return _*(+r*c*d-i*l*d-r*o*f+n*l*f+i*o*m-n*c*m)+g*(+t*c*m-t*l*f+r*a*f-i*a*m+i*l*h-r*c*h)+p*(+t*l*d-t*o*m-r*a*d+n*a*m+r*o*h-n*l*h)+u*(-i*o*h-t*c*d+t*o*f+i*a*d-n*a*f+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=e[9],f=e[10],m=e[11],_=e[12],g=e[13],p=e[14],u=e[15],M=d*p*l-g*f*l+g*c*m-o*p*m-d*c*u+o*f*u,v=_*f*l-h*p*l-_*c*m+a*p*m+h*c*u-a*f*u,S=h*g*l-_*d*l+_*o*m-a*g*m-h*o*u+a*d*u,I=_*d*c-h*g*c-_*o*f+a*g*f+h*o*p-a*d*p,A=t*M+n*v+i*S+r*I;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/A;return e[0]=M*C,e[1]=(g*f*r-d*p*r-g*i*m+n*p*m+d*i*u-n*f*u)*C,e[2]=(o*p*r-g*c*r+g*i*l-n*p*l-o*i*u+n*c*u)*C,e[3]=(d*c*r-o*f*r-d*i*l+n*f*l+o*i*m-n*c*m)*C,e[4]=v*C,e[5]=(h*p*r-_*f*r+_*i*m-t*p*m-h*i*u+t*f*u)*C,e[6]=(_*c*r-a*p*r-_*i*l+t*p*l+a*i*u-t*c*u)*C,e[7]=(a*f*r-h*c*r+h*i*l-t*f*l-a*i*m+t*c*m)*C,e[8]=S*C,e[9]=(_*d*r-h*g*r-_*n*m+t*g*m+h*n*u-t*d*u)*C,e[10]=(a*g*r-_*o*r+_*n*l-t*g*l-a*n*u+t*o*u)*C,e[11]=(h*o*r-a*d*r-h*n*l+t*d*l+a*n*m-t*o*m)*C,e[12]=I*C,e[13]=(h*g*i-_*d*i+_*n*f-t*g*f-h*n*p+t*d*p)*C,e[14]=(_*o*i-a*g*i-_*n*c+t*g*c+a*n*p-t*o*p)*C,e[15]=(a*d*i-h*o*i+h*n*c-t*d*c-a*n*f+t*o*f)*C,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*a,0,l*c-i*o,h*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,d=o+o,f=r*l,m=r*h,_=r*d,g=a*h,p=a*d,u=o*d,M=c*l,v=c*h,S=c*d,I=n.x,A=n.y,C=n.z;return i[0]=(1-(g+u))*I,i[1]=(m+S)*I,i[2]=(_-v)*I,i[3]=0,i[4]=(m-S)*A,i[5]=(1-(f+u))*A,i[6]=(p+M)*A,i[7]=0,i[8]=(_+v)*C,i[9]=(p-M)*C,i[10]=(1-(f+g))*C,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=_i.set(i[0],i[1],i[2]).length();const a=_i.set(i[4],i[5],i[6]).length(),o=_i.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Qt.copy(this);const l=1/r,h=1/a,d=1/o;return Qt.elements[0]*=l,Qt.elements[1]*=l,Qt.elements[2]*=l,Qt.elements[4]*=h,Qt.elements[5]*=h,Qt.elements[6]*=h,Qt.elements[8]*=d,Qt.elements[9]*=d,Qt.elements[10]*=d,t.setFromRotationMatrix(Qt),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=mn){const c=this.elements,l=2*r/(t-e),h=2*r/(n-i),d=(t+e)/(t-e),f=(n+i)/(n-i);let m,_;if(o===mn)m=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===qs)m=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=mn){const c=this.elements,l=1/(t-e),h=1/(n-i),d=1/(a-r),f=(t+e)*l,m=(n+i)*h;let _,g;if(o===mn)_=(a+r)*d,g=-2*d;else if(o===qs)_=r*d,g=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=g,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const _i=new R,Qt=new at,Xl=new R(0,0,0),jl=new R(1,1,1),yn=new R,xs=new R,Vt=new R,Qa=new at,eo=new cs;class er{constructor(e=0,t=0,n=0,i=er.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],c=i[1],l=i[5],h=i[9],d=i[2],f=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(Bt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Bt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Bt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Bt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Bt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Bt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Qa.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Qa,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return eo.setFromEuler(this),this.setFromQuaternion(eo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}er.DEFAULT_ORDER="XYZ";class sa{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ql=0;const to=new R,vi=new cs,hn=new at,Es=new R,qi=new R,Yl=new R,$l=new cs,no=new R(1,0,0),io=new R(0,1,0),so=new R(0,0,1),Zl={type:"added"},Kl={type:"removed"};class _t extends zi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ql++}),this.uuid=Ln(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_t.DEFAULT_UP.clone();const e=new R,t=new er,n=new cs,i=new R(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new at},normalMatrix:{value:new Xe}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=_t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return vi.setFromAxisAngle(e,t),this.quaternion.multiply(vi),this}rotateOnWorldAxis(e,t){return vi.setFromAxisAngle(e,t),this.quaternion.premultiply(vi),this}rotateX(e){return this.rotateOnAxis(no,e)}rotateY(e){return this.rotateOnAxis(io,e)}rotateZ(e){return this.rotateOnAxis(so,e)}translateOnAxis(e,t){return to.copy(e).applyQuaternion(this.quaternion),this.position.add(to.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(no,e)}translateY(e){return this.translateOnAxis(io,e)}translateZ(e){return this.translateOnAxis(so,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(hn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Es.copy(e):Es.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),qi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hn.lookAt(qi,Es,this.up):hn.lookAt(Es,qi,this.up),this.quaternion.setFromRotationMatrix(hn),i&&(hn.extractRotation(i.matrixWorld),vi.setFromRotationMatrix(hn),this.quaternion.premultiply(vi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Zl)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Kl)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),hn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),hn.multiply(e.parent.matrixWorld)),e.applyMatrix4(hn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qi,e,Yl),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qi,$l,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++){const o=i[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),d=a(e.shapes),f=a(e.skeletons),m=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=i,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}_t.DEFAULT_UP=new R(0,1,0);_t.DEFAULT_MATRIX_AUTO_UPDATE=!0;_t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const en=new R,dn=new R,Tr=new R,un=new R,xi=new R,Ei=new R,ro=new R,Ar=new R,wr=new R,Cr=new R;let Ms=!1;class $t{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),en.subVectors(e,t),i.cross(en);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){en.subVectors(i,t),dn.subVectors(n,t),Tr.subVectors(e,t);const a=en.dot(en),o=en.dot(dn),c=en.dot(Tr),l=dn.dot(dn),h=dn.dot(Tr),d=a*l-o*o;if(d===0)return r.set(0,0,0),null;const f=1/d,m=(l*c-o*h)*f,_=(a*h-o*c)*f;return r.set(1-m-_,_,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,un)===null?!1:un.x>=0&&un.y>=0&&un.x+un.y<=1}static getUV(e,t,n,i,r,a,o,c){return Ms===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ms=!0),this.getInterpolation(e,t,n,i,r,a,o,c)}static getInterpolation(e,t,n,i,r,a,o,c){return this.getBarycoord(e,t,n,i,un)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,un.x),c.addScaledVector(a,un.y),c.addScaledVector(o,un.z),c)}static isFrontFacing(e,t,n,i){return en.subVectors(n,t),dn.subVectors(e,t),en.cross(dn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return en.subVectors(this.c,this.b),dn.subVectors(this.a,this.b),en.cross(dn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return $t.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return $t.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return Ms===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ms=!0),$t.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}getInterpolation(e,t,n,i,r){return $t.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return $t.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return $t.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;xi.subVectors(i,n),Ei.subVectors(r,n),Ar.subVectors(e,n);const c=xi.dot(Ar),l=Ei.dot(Ar);if(c<=0&&l<=0)return t.copy(n);wr.subVectors(e,i);const h=xi.dot(wr),d=Ei.dot(wr);if(h>=0&&d<=h)return t.copy(i);const f=c*d-h*l;if(f<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(xi,a);Cr.subVectors(e,r);const m=xi.dot(Cr),_=Ei.dot(Cr);if(_>=0&&m<=_)return t.copy(r);const g=m*l-c*_;if(g<=0&&l>=0&&_<=0)return o=l/(l-_),t.copy(n).addScaledVector(Ei,o);const p=h*_-m*d;if(p<=0&&d-h>=0&&m-_>=0)return ro.subVectors(r,i),o=(d-h)/(d-h+(m-_)),t.copy(i).addScaledVector(ro,o);const u=1/(p+g+f);return a=g*u,o=f*u,t.copy(n).addScaledVector(xi,a).addScaledVector(Ei,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const fc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bn={h:0,s:0,l:0},Ss={h:0,s:0,l:0};function Rr(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class He{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Tt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Qe.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Qe.workingColorSpace){if(e=Fl(e,1),t=Bt(t,0,1),n=Bt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Rr(a,r,e+1/3),this.g=Rr(a,r,e),this.b=Rr(a,r,e-1/3)}return Qe.toWorkingColorSpace(this,i),this}setStyle(e,t=Tt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Tt){const n=fc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ni(e.r),this.g=Ni(e.g),this.b=Ni(e.b),this}copyLinearToSRGB(e){return this.r=_r(e.r),this.g=_r(e.g),this.b=_r(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tt){return Qe.fromWorkingColorSpace(Rt.copy(this),e),Math.round(Bt(Rt.r*255,0,255))*65536+Math.round(Bt(Rt.g*255,0,255))*256+Math.round(Bt(Rt.b*255,0,255))}getHexString(e=Tt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.fromWorkingColorSpace(Rt.copy(this),t);const n=Rt.r,i=Rt.g,r=Rt.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const d=a-o;switch(l=h<=.5?d/(a+o):d/(2-a-o),a){case n:c=(i-r)/d+(i<r?6:0);break;case i:c=(r-n)/d+2;break;case r:c=(n-i)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Qe.workingColorSpace){return Qe.fromWorkingColorSpace(Rt.copy(this),t),e.r=Rt.r,e.g=Rt.g,e.b=Rt.b,e}getStyle(e=Tt){Qe.fromWorkingColorSpace(Rt.copy(this),e);const t=Rt.r,n=Rt.g,i=Rt.b;return e!==Tt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(bn),this.setHSL(bn.h+e,bn.s+t,bn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(bn),e.getHSL(Ss);const n=mr(bn.h,Ss.h,t),i=mr(bn.s,Ss.s,t),r=mr(bn.l,Ss.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Rt=new He;He.NAMES=fc;let Jl=0;class Un extends zi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Jl++}),this.uuid=Ln(),this.name="",this.type="Material",this.blending=Oi,this.side=Pn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vr,this.blendDst=Wr,this.blendEquation=Vn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=Vs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ja,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ui,this.stencilZFail=ui,this.stencilZPass=ui,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Oi&&(n.blending=this.blending),this.side!==Pn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Vr&&(n.blendSrc=this.blendSrc),this.blendDst!==Wr&&(n.blendDst=this.blendDst),this.blendEquation!==Vn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Vs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ja&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ui&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ui&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ui&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class lt extends Un{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Zo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const gt=new R,ys=new we;class Kt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Yr,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=An,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ys.fromBufferAttribute(this,t),ys.applyMatrix3(e),this.setXY(t,ys.x,ys.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix3(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix4(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyNormalMatrix(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.transformDirection(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=pn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=et(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=pn(t,this.array)),t}setX(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=pn(t,this.array)),t}setY(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=pn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=pn(t,this.array)),t}setW(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array),r=et(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Yr&&(e.usage=this.usage),e}}class pc extends Kt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class mc extends Kt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class dt extends Kt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Ql=0;const Yt=new at,Ir=new _t,Mi=new R,Wt=new ls,Yi=new ls,yt=new R;class At extends zi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ql++}),this.uuid=Ln(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(lc(e)?mc:pc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Xe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Yt.makeRotationFromQuaternion(e),this.applyMatrix4(Yt),this}rotateX(e){return Yt.makeRotationX(e),this.applyMatrix4(Yt),this}rotateY(e){return Yt.makeRotationY(e),this.applyMatrix4(Yt),this}rotateZ(e){return Yt.makeRotationZ(e),this.applyMatrix4(Yt),this}translate(e,t,n){return Yt.makeTranslation(e,t,n),this.applyMatrix4(Yt),this}scale(e,t,n){return Yt.makeScale(e,t,n),this.applyMatrix4(Yt),this}lookAt(e){return Ir.lookAt(e),Ir.updateMatrix(),this.applyMatrix4(Ir.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Mi).negate(),this.translate(Mi.x,Mi.y,Mi.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new dt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ls);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Wt.setFromBufferAttribute(r),this.morphTargetsRelative?(yt.addVectors(this.boundingBox.min,Wt.min),this.boundingBox.expandByPoint(yt),yt.addVectors(this.boundingBox.max,Wt.max),this.boundingBox.expandByPoint(yt)):(this.boundingBox.expandByPoint(Wt.min),this.boundingBox.expandByPoint(Wt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new R,1/0);return}if(e){const n=this.boundingSphere.center;if(Wt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Yi.setFromBufferAttribute(o),this.morphTargetsRelative?(yt.addVectors(Wt.min,Yi.min),Wt.expandByPoint(yt),yt.addVectors(Wt.max,Yi.max),Wt.expandByPoint(yt)):(Wt.expandByPoint(Yi.min),Wt.expandByPoint(Yi.max))}Wt.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)yt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(yt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)yt.fromBufferAttribute(o,l),c&&(Mi.fromBufferAttribute(e,l),yt.add(Mi)),i=Math.max(i,n.distanceToSquared(yt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,a=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Kt(new Float32Array(4*o),4));const c=this.getAttribute("tangent").array,l=[],h=[];for(let b=0;b<o;b++)l[b]=new R,h[b]=new R;const d=new R,f=new R,m=new R,_=new we,g=new we,p=new we,u=new R,M=new R;function v(b,U,F){d.fromArray(i,b*3),f.fromArray(i,U*3),m.fromArray(i,F*3),_.fromArray(a,b*2),g.fromArray(a,U*2),p.fromArray(a,F*2),f.sub(d),m.sub(d),g.sub(_),p.sub(_);const $=1/(g.x*p.y-p.x*g.y);isFinite($)&&(u.copy(f).multiplyScalar(p.y).addScaledVector(m,-g.y).multiplyScalar($),M.copy(m).multiplyScalar(g.x).addScaledVector(f,-p.x).multiplyScalar($),l[b].add(u),l[U].add(u),l[F].add(u),h[b].add(M),h[U].add(M),h[F].add(M))}let S=this.groups;S.length===0&&(S=[{start:0,count:n.length}]);for(let b=0,U=S.length;b<U;++b){const F=S[b],$=F.start,L=F.count;for(let N=$,z=$+L;N<z;N+=3)v(n[N+0],n[N+1],n[N+2])}const I=new R,A=new R,C=new R,O=new R;function x(b){C.fromArray(r,b*3),O.copy(C);const U=l[b];I.copy(U),I.sub(C.multiplyScalar(C.dot(U))).normalize(),A.crossVectors(O,U);const $=A.dot(h[b])<0?-1:1;c[b*4]=I.x,c[b*4+1]=I.y,c[b*4+2]=I.z,c[b*4+3]=$}for(let b=0,U=S.length;b<U;++b){const F=S[b],$=F.start,L=F.count;for(let N=$,z=$+L;N<z;N+=3)x(n[N+0]),x(n[N+1]),x(n[N+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Kt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const i=new R,r=new R,a=new R,o=new R,c=new R,l=new R,h=new R,d=new R;if(e)for(let f=0,m=e.count;f<m;f+=3){const _=e.getX(f+0),g=e.getX(f+1),p=e.getX(f+2);i.fromBufferAttribute(t,_),r.fromBufferAttribute(t,g),a.fromBufferAttribute(t,p),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),o.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),l.fromBufferAttribute(n,p),o.add(h),c.add(h),l.add(h),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let f=0,m=t.count;f<m;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)yt.fromBufferAttribute(e,t),yt.normalize(),e.setXYZ(t,yt.x,yt.y,yt.z)}toNonIndexed(){function e(o,c){const l=o.array,h=o.itemSize,d=o.normalized,f=new l.constructor(c.length*h);let m=0,_=0;for(let g=0,p=c.length;g<p;g++){o.isInterleavedBufferAttribute?m=c[g]*o.data.stride+o.offset:m=c[g]*h;for(let u=0;u<h;u++)f[_++]=l[m++]}return new Kt(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new At,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],l=e(c,n);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,d=l.length;h<d;h++){const f=l[h],m=e(f,n);c.push(m)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,f=l.length;d<f;d++){const m=l[d];h.push(m.toJSON(e.data))}h.length>0&&(i[c]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],d=r[l];for(let f=0,m=d.length;f<m;f++)h.push(d[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,h=a.length;l<h;l++){const d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ao=new at,Hn=new Qs,bs=new hs,oo=new R,Si=new R,yi=new R,bi=new R,Lr=new R,Ts=new R,As=new we,ws=new we,Cs=new we,co=new R,lo=new R,ho=new R,Rs=new R,Is=new R;class X extends _t{constructor(e=new At,t=new lt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){Ts.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],d=r[c];h!==0&&(Lr.fromBufferAttribute(d,e),a?Ts.addScaledVector(Lr,h):Ts.addScaledVector(Lr.sub(t),h))}t.add(Ts)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),bs.copy(n.boundingSphere),bs.applyMatrix4(r),Hn.copy(e.ray).recast(e.near),!(bs.containsPoint(Hn.origin)===!1&&(Hn.intersectSphere(bs,oo)===null||Hn.origin.distanceToSquared(oo)>(e.far-e.near)**2))&&(ao.copy(r).invert(),Hn.copy(e.ray).applyMatrix4(ao),!(n.boundingBox!==null&&Hn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Hn)))}_computeIntersections(e,t,n){let i;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=f.length;_<g;_++){const p=f[_],u=a[p.materialIndex],M=Math.max(p.start,m.start),v=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let S=M,I=v;S<I;S+=3){const A=o.getX(S),C=o.getX(S+1),O=o.getX(S+2);i=Ls(this,u,e,n,l,h,d,A,C,O),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const _=Math.max(0,m.start),g=Math.min(o.count,m.start+m.count);for(let p=_,u=g;p<u;p+=3){const M=o.getX(p),v=o.getX(p+1),S=o.getX(p+2);i=Ls(this,a,e,n,l,h,d,M,v,S),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let _=0,g=f.length;_<g;_++){const p=f[_],u=a[p.materialIndex],M=Math.max(p.start,m.start),v=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let S=M,I=v;S<I;S+=3){const A=S,C=S+1,O=S+2;i=Ls(this,u,e,n,l,h,d,A,C,O),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const _=Math.max(0,m.start),g=Math.min(c.count,m.start+m.count);for(let p=_,u=g;p<u;p+=3){const M=p,v=p+1,S=p+2;i=Ls(this,a,e,n,l,h,d,M,v,S),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}}function eh(s,e,t,n,i,r,a,o){let c;if(e.side===Gt?c=n.intersectTriangle(a,r,i,!0,o):c=n.intersectTriangle(i,r,a,e.side===Pn,o),c===null)return null;Is.copy(o),Is.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(Is);return l<t.near||l>t.far?null:{distance:l,point:Is.clone(),object:s}}function Ls(s,e,t,n,i,r,a,o,c,l){s.getVertexPosition(o,Si),s.getVertexPosition(c,yi),s.getVertexPosition(l,bi);const h=eh(s,e,t,n,Si,yi,bi,Rs);if(h){i&&(As.fromBufferAttribute(i,o),ws.fromBufferAttribute(i,c),Cs.fromBufferAttribute(i,l),h.uv=$t.getInterpolation(Rs,Si,yi,bi,As,ws,Cs,new we)),r&&(As.fromBufferAttribute(r,o),ws.fromBufferAttribute(r,c),Cs.fromBufferAttribute(r,l),h.uv1=$t.getInterpolation(Rs,Si,yi,bi,As,ws,Cs,new we),h.uv2=h.uv1),a&&(co.fromBufferAttribute(a,o),lo.fromBufferAttribute(a,c),ho.fromBufferAttribute(a,l),h.normal=$t.getInterpolation(Rs,Si,yi,bi,co,lo,ho,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new R,materialIndex:0};$t.getNormal(Si,yi,bi,d.normal),h.face=d}return h}class he extends At{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],d=[];let f=0,m=0;_("z","y","x",-1,-1,n,t,e,a,r,0),_("z","y","x",1,-1,n,t,-e,a,r,1),_("x","z","y",1,1,e,n,t,i,a,2),_("x","z","y",1,-1,e,n,-t,i,a,3),_("x","y","z",1,-1,e,t,n,i,r,4),_("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new dt(l,3)),this.setAttribute("normal",new dt(h,3)),this.setAttribute("uv",new dt(d,2));function _(g,p,u,M,v,S,I,A,C,O,x){const b=S/C,U=I/O,F=S/2,$=I/2,L=A/2,N=C+1,z=O+1;let q=0,Y=0;const Z=new R;for(let K=0;K<z;K++){const ie=K*U-$;for(let se=0;se<N;se++){const W=se*b-F;Z[g]=W*M,Z[p]=ie*v,Z[u]=L,l.push(Z.x,Z.y,Z.z),Z[g]=0,Z[p]=0,Z[u]=A>0?1:-1,h.push(Z.x,Z.y,Z.z),d.push(se/C),d.push(1-K/O),q+=1}}for(let K=0;K<O;K++)for(let ie=0;ie<C;ie++){const se=f+ie+N*K,W=f+ie+N*(K+1),J=f+(ie+1)+N*(K+1),de=f+(ie+1)+N*K;c.push(se,W,de),c.push(W,J,de),Y+=6}o.addGroup(m,Y,x),m+=Y,f+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new he(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ki(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Nt(s){const e={};for(let t=0;t<s.length;t++){const n=ki(s[t]);for(const i in n)e[i]=n[i]}return e}function th(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function gc(s){return s.getRenderTarget()===null?s.outputColorSpace:Qe.workingColorSpace}const nh={clone:ki,merge:Nt};var ih=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Dn extends Un{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ih,this.fragmentShader=sh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ki(e.uniforms),this.uniformsGroups=th(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class _c extends _t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=mn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class jt extends _c{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Zr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(pr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Zr*2*Math.atan(Math.tan(pr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(pr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*i/c,t-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ti=-90,Ai=1;class rh extends _t{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new jt(Ti,Ai,e,t);i.layers=this.layers,this.add(i);const r=new jt(Ti,Ai,e,t);r.layers=this.layers,this.add(r);const a=new jt(Ti,Ai,e,t);a.layers=this.layers,this.add(a);const o=new jt(Ti,Ai,e,t);o.layers=this.layers,this.add(o);const c=new jt(Ti,Ai,e,t);c.layers=this.layers,this.add(c);const l=new jt(Ti,Ai,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,c]=t;for(const l of t)this.remove(l);if(e===mn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===qs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(d,f,m),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class vc extends kt{constructor(e,t,n,i,r,a,o,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:Bi,super(e,t,n,i,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ah extends li{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(Qi("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===oi?Tt:Zt),this.texture=new vc(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:It}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new he(5,5,5),r=new Dn({name:"CubemapFromEquirect",uniforms:ki(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Gt,blending:Cn});r.uniforms.tEquirect.value=t;const a=new X(i,r),o=t.minFilter;return t.minFilter===ns&&(t.minFilter=It),new rh(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}const Pr=new R,oh=new R,ch=new Xe;class kn{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Pr.subVectors(n,t).cross(oh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Pr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||ch.getNormalMatrix(e),i=this.coplanarPoint(Pr).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gn=new hs,Ps=new R;class ra{constructor(e=new kn,t=new kn,n=new kn,i=new kn,r=new kn,a=new kn){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=mn){const n=this.planes,i=e.elements,r=i[0],a=i[1],o=i[2],c=i[3],l=i[4],h=i[5],d=i[6],f=i[7],m=i[8],_=i[9],g=i[10],p=i[11],u=i[12],M=i[13],v=i[14],S=i[15];if(n[0].setComponents(c-r,f-l,p-m,S-u).normalize(),n[1].setComponents(c+r,f+l,p+m,S+u).normalize(),n[2].setComponents(c+a,f+h,p+_,S+M).normalize(),n[3].setComponents(c-a,f-h,p-_,S-M).normalize(),n[4].setComponents(c-o,f-d,p-g,S-v).normalize(),t===mn)n[5].setComponents(c+o,f+d,p+g,S+v).normalize();else if(t===qs)n[5].setComponents(o,d,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Gn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Gn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Gn)}intersectsSprite(e){return Gn.center.set(0,0,0),Gn.radius=.7071067811865476,Gn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gn)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Ps.x=i.normal.x>0?e.max.x:e.min.x,Ps.y=i.normal.y>0?e.max.y:e.min.y,Ps.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ps)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function xc(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function lh(s,e){const t=e.isWebGL2,n=new WeakMap;function i(l,h){const d=l.array,f=l.usage,m=d.byteLength,_=s.createBuffer();s.bindBuffer(h,_),s.bufferData(h,d,f),l.onUploadCallback();let g;if(d instanceof Float32Array)g=s.FLOAT;else if(d instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)g=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=s.UNSIGNED_SHORT;else if(d instanceof Int16Array)g=s.SHORT;else if(d instanceof Uint32Array)g=s.UNSIGNED_INT;else if(d instanceof Int32Array)g=s.INT;else if(d instanceof Int8Array)g=s.BYTE;else if(d instanceof Uint8Array)g=s.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)g=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:_,type:g,bytesPerElement:d.BYTES_PER_ELEMENT,version:l.version,size:m}}function r(l,h,d){const f=h.array,m=h._updateRange,_=h.updateRanges;if(s.bindBuffer(d,l),m.count===-1&&_.length===0&&s.bufferSubData(d,0,f),_.length!==0){for(let g=0,p=_.length;g<p;g++){const u=_[g];t?s.bufferSubData(d,u.start*f.BYTES_PER_ELEMENT,f,u.start,u.count):s.bufferSubData(d,u.start*f.BYTES_PER_ELEMENT,f.subarray(u.start,u.start+u.count))}h.clearUpdateRanges()}m.count!==-1&&(t?s.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):s.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h&&(s.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){const f=n.get(l);(!f||f.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const d=n.get(l);if(d===void 0)n.set(l,i(l,h));else if(d.version<l.version){if(d.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,l,h),d.version=l.version}}return{get:a,remove:o,update:c}}class Xt extends At{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,d=e/o,f=t/c,m=[],_=[],g=[],p=[];for(let u=0;u<h;u++){const M=u*f-a;for(let v=0;v<l;v++){const S=v*d-r;_.push(S,-M,0),g.push(0,0,1),p.push(v/o),p.push(1-u/c)}}for(let u=0;u<c;u++)for(let M=0;M<o;M++){const v=M+l*u,S=M+l*(u+1),I=M+1+l*(u+1),A=M+1+l*u;m.push(v,S,A),m.push(S,I,A)}this.setIndex(m),this.setAttribute("position",new dt(_,3)),this.setAttribute("normal",new dt(g,3)),this.setAttribute("uv",new dt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xt(e.width,e.height,e.widthSegments,e.heightSegments)}}var hh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,dh=`#ifdef USE_ALPHAHASH
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
#endif`,uh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ph=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,mh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gh=`#ifdef USE_AOMAP
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
#endif`,_h=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vh=`#ifdef USE_BATCHING
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
#endif`,xh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Eh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Mh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Sh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,yh=`#ifdef USE_IRIDESCENCE
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
#endif`,bh=`#ifdef USE_BUMPMAP
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
#endif`,Th=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ah=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ch=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Rh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ih=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Lh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Ph=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Dh=`#define PI 3.141592653589793
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
} // validated`,Uh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Oh=`vec3 transformedNormal = objectNormal;
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
#endif`,Nh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Fh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Bh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Hh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Gh="gl_FragColor = linearToOutputTexel( gl_FragColor );",kh=`
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
}`,zh=`#ifdef USE_ENVMAP
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
#endif`,Vh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Wh=`#ifdef USE_ENVMAP
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
#endif`,Xh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jh=`#ifdef USE_ENVMAP
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
#endif`,qh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Yh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$h=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Zh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Kh=`#ifdef USE_GRADIENTMAP
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
}`,Jh=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Qh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ed=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,td=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nd=`uniform bool receiveShadow;
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
#endif`,id=`#ifdef USE_ENVMAP
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
#endif`,sd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ad=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,od=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cd=`PhysicalMaterial material;
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
#endif`,ld=`struct PhysicalMaterial {
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
}`,hd=`
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
#endif`,dd=`#if defined( RE_IndirectDiffuse )
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
#endif`,ud=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,md=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,gd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,_d=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ed=`#if defined( USE_POINTS_UV )
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
#endif`,Md=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Sd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yd=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,bd=`#ifdef USE_MORPHNORMALS
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
#endif`,Td=`#ifdef USE_MORPHTARGETS
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
#endif`,Ad=`#ifdef USE_MORPHTARGETS
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
#endif`,wd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Cd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Rd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Id=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ld=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Pd=`#ifdef USE_NORMALMAP
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
#endif`,Dd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ud=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Od=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Nd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Fd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Bd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Hd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Gd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,kd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Vd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Wd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Xd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Yd=`float getShadowMask() {
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
}`,$d=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Zd=`#ifdef USE_SKINNING
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
#endif`,Kd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Jd=`#ifdef USE_SKINNING
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
#endif`,Qd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,eu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,nu=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,iu=`#ifdef USE_TRANSMISSION
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
#endif`,su=`#ifdef USE_TRANSMISSION
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
#endif`,ru=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,au=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ou=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const lu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hu=`uniform sampler2D t2D;
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
}`,du=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uu=`#ifdef ENVMAP_TYPE_CUBE
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
}`,fu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pu=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mu=`#include <common>
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
}`,gu=`#if DEPTH_PACKING == 3200
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
}`,_u=`#define DISTANCE
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
}`,vu=`#define DISTANCE
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
}`,xu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Eu=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mu=`uniform float scale;
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
}`,Su=`uniform vec3 diffuse;
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
}`,yu=`#include <common>
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
}`,bu=`uniform vec3 diffuse;
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
}`,Tu=`#define LAMBERT
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
}`,Au=`#define LAMBERT
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
}`,wu=`#define MATCAP
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
}`,Cu=`#define MATCAP
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
}`,Ru=`#define NORMAL
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
}`,Iu=`#define NORMAL
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
}`,Lu=`#define PHONG
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
}`,Pu=`#define PHONG
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
}`,Du=`#define STANDARD
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
}`,Uu=`#define STANDARD
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
}`,Ou=`#define TOON
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
}`,Nu=`#define TOON
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
}`,Fu=`uniform float size;
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
}`,Bu=`uniform vec3 diffuse;
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
}`,Hu=`#include <common>
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
}`,Gu=`uniform vec3 color;
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
}`,ku=`uniform float rotation;
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
}`,zu=`uniform vec3 diffuse;
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
}`,Be={alphahash_fragment:hh,alphahash_pars_fragment:dh,alphamap_fragment:uh,alphamap_pars_fragment:fh,alphatest_fragment:ph,alphatest_pars_fragment:mh,aomap_fragment:gh,aomap_pars_fragment:_h,batching_pars_vertex:vh,batching_vertex:xh,begin_vertex:Eh,beginnormal_vertex:Mh,bsdfs:Sh,iridescence_fragment:yh,bumpmap_pars_fragment:bh,clipping_planes_fragment:Th,clipping_planes_pars_fragment:Ah,clipping_planes_pars_vertex:wh,clipping_planes_vertex:Ch,color_fragment:Rh,color_pars_fragment:Ih,color_pars_vertex:Lh,color_vertex:Ph,common:Dh,cube_uv_reflection_fragment:Uh,defaultnormal_vertex:Oh,displacementmap_pars_vertex:Nh,displacementmap_vertex:Fh,emissivemap_fragment:Bh,emissivemap_pars_fragment:Hh,colorspace_fragment:Gh,colorspace_pars_fragment:kh,envmap_fragment:zh,envmap_common_pars_fragment:Vh,envmap_pars_fragment:Wh,envmap_pars_vertex:Xh,envmap_physical_pars_fragment:id,envmap_vertex:jh,fog_vertex:qh,fog_pars_vertex:Yh,fog_fragment:$h,fog_pars_fragment:Zh,gradientmap_pars_fragment:Kh,lightmap_fragment:Jh,lightmap_pars_fragment:Qh,lights_lambert_fragment:ed,lights_lambert_pars_fragment:td,lights_pars_begin:nd,lights_toon_fragment:sd,lights_toon_pars_fragment:rd,lights_phong_fragment:ad,lights_phong_pars_fragment:od,lights_physical_fragment:cd,lights_physical_pars_fragment:ld,lights_fragment_begin:hd,lights_fragment_maps:dd,lights_fragment_end:ud,logdepthbuf_fragment:fd,logdepthbuf_pars_fragment:pd,logdepthbuf_pars_vertex:md,logdepthbuf_vertex:gd,map_fragment:_d,map_pars_fragment:vd,map_particle_fragment:xd,map_particle_pars_fragment:Ed,metalnessmap_fragment:Md,metalnessmap_pars_fragment:Sd,morphcolor_vertex:yd,morphnormal_vertex:bd,morphtarget_pars_vertex:Td,morphtarget_vertex:Ad,normal_fragment_begin:wd,normal_fragment_maps:Cd,normal_pars_fragment:Rd,normal_pars_vertex:Id,normal_vertex:Ld,normalmap_pars_fragment:Pd,clearcoat_normal_fragment_begin:Dd,clearcoat_normal_fragment_maps:Ud,clearcoat_pars_fragment:Od,iridescence_pars_fragment:Nd,opaque_fragment:Fd,packing:Bd,premultiplied_alpha_fragment:Hd,project_vertex:Gd,dithering_fragment:kd,dithering_pars_fragment:zd,roughnessmap_fragment:Vd,roughnessmap_pars_fragment:Wd,shadowmap_pars_fragment:Xd,shadowmap_pars_vertex:jd,shadowmap_vertex:qd,shadowmask_pars_fragment:Yd,skinbase_vertex:$d,skinning_pars_vertex:Zd,skinning_vertex:Kd,skinnormal_vertex:Jd,specularmap_fragment:Qd,specularmap_pars_fragment:eu,tonemapping_fragment:tu,tonemapping_pars_fragment:nu,transmission_fragment:iu,transmission_pars_fragment:su,uv_pars_fragment:ru,uv_pars_vertex:au,uv_vertex:ou,worldpos_vertex:cu,background_vert:lu,background_frag:hu,backgroundCube_vert:du,backgroundCube_frag:uu,cube_vert:fu,cube_frag:pu,depth_vert:mu,depth_frag:gu,distanceRGBA_vert:_u,distanceRGBA_frag:vu,equirect_vert:xu,equirect_frag:Eu,linedashed_vert:Mu,linedashed_frag:Su,meshbasic_vert:yu,meshbasic_frag:bu,meshlambert_vert:Tu,meshlambert_frag:Au,meshmatcap_vert:wu,meshmatcap_frag:Cu,meshnormal_vert:Ru,meshnormal_frag:Iu,meshphong_vert:Lu,meshphong_frag:Pu,meshphysical_vert:Du,meshphysical_frag:Uu,meshtoon_vert:Ou,meshtoon_frag:Nu,points_vert:Fu,points_frag:Bu,shadow_vert:Hu,shadow_frag:Gu,sprite_vert:ku,sprite_frag:zu},ae={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new we(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new we(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},an={basic:{uniforms:Nt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:Nt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new He(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:Nt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:Nt([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:Nt([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new He(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:Nt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:Nt([ae.points,ae.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:Nt([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:Nt([ae.common,ae.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:Nt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:Nt([ae.sprite,ae.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distanceRGBA:{uniforms:Nt([ae.common,ae.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distanceRGBA_vert,fragmentShader:Be.distanceRGBA_frag},shadow:{uniforms:Nt([ae.lights,ae.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};an.physical={uniforms:Nt([an.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new we(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new we},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new we},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};const Ds={r:0,b:0,g:0};function Vu(s,e,t,n,i,r,a){const o=new He(0);let c=r===!0?0:1,l,h,d=null,f=0,m=null;function _(p,u){let M=!1,v=u.isScene===!0?u.background:null;v&&v.isTexture&&(v=(u.backgroundBlurriness>0?t:e).get(v)),v===null?g(o,c):v&&v.isColor&&(g(v,1),M=!0);const S=s.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,a):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||M)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Ks)?(h===void 0&&(h=new X(new he(1,1,1),new Dn({name:"BackgroundCubeMaterial",uniforms:ki(an.backgroundCube.uniforms),vertexShader:an.backgroundCube.vertexShader,fragmentShader:an.backgroundCube.fragmentShader,side:Gt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,h.material.toneMapped=Qe.getTransfer(v.colorSpace)!==st,(d!==v||f!==v.version||m!==s.toneMapping)&&(h.material.needsUpdate=!0,d=v,f=v.version,m=s.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new X(new Xt(2,2),new Dn({name:"BackgroundMaterial",uniforms:ki(an.background.uniforms),vertexShader:an.background.vertexShader,fragmentShader:an.background.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,l.material.toneMapped=Qe.getTransfer(v.colorSpace)!==st,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||f!==v.version||m!==s.toneMapping)&&(l.material.needsUpdate=!0,d=v,f=v.version,m=s.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function g(p,u){p.getRGB(Ds,gc(s)),n.buffers.color.setClear(Ds.r,Ds.g,Ds.b,u,a)}return{getClearColor:function(){return o},setClearColor:function(p,u=1){o.set(p),c=u,g(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(p){c=p,g(o,c)},render:_}}function Wu(s,e,t,n){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},c=p(null);let l=c,h=!1;function d(L,N,z,q,Y){let Z=!1;if(a){const K=g(q,z,N);l!==K&&(l=K,m(l.object)),Z=u(L,q,z,Y),Z&&M(L,q,z,Y)}else{const K=N.wireframe===!0;(l.geometry!==q.id||l.program!==z.id||l.wireframe!==K)&&(l.geometry=q.id,l.program=z.id,l.wireframe=K,Z=!0)}Y!==null&&t.update(Y,s.ELEMENT_ARRAY_BUFFER),(Z||h)&&(h=!1,O(L,N,z,q),Y!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function f(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function m(L){return n.isWebGL2?s.bindVertexArray(L):r.bindVertexArrayOES(L)}function _(L){return n.isWebGL2?s.deleteVertexArray(L):r.deleteVertexArrayOES(L)}function g(L,N,z){const q=z.wireframe===!0;let Y=o[L.id];Y===void 0&&(Y={},o[L.id]=Y);let Z=Y[N.id];Z===void 0&&(Z={},Y[N.id]=Z);let K=Z[q];return K===void 0&&(K=p(f()),Z[q]=K),K}function p(L){const N=[],z=[],q=[];for(let Y=0;Y<i;Y++)N[Y]=0,z[Y]=0,q[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:z,attributeDivisors:q,object:L,attributes:{},index:null}}function u(L,N,z,q){const Y=l.attributes,Z=N.attributes;let K=0;const ie=z.getAttributes();for(const se in ie)if(ie[se].location>=0){const J=Y[se];let de=Z[se];if(de===void 0&&(se==="instanceMatrix"&&L.instanceMatrix&&(de=L.instanceMatrix),se==="instanceColor"&&L.instanceColor&&(de=L.instanceColor)),J===void 0||J.attribute!==de||de&&J.data!==de.data)return!0;K++}return l.attributesNum!==K||l.index!==q}function M(L,N,z,q){const Y={},Z=N.attributes;let K=0;const ie=z.getAttributes();for(const se in ie)if(ie[se].location>=0){let J=Z[se];J===void 0&&(se==="instanceMatrix"&&L.instanceMatrix&&(J=L.instanceMatrix),se==="instanceColor"&&L.instanceColor&&(J=L.instanceColor));const de={};de.attribute=J,J&&J.data&&(de.data=J.data),Y[se]=de,K++}l.attributes=Y,l.attributesNum=K,l.index=q}function v(){const L=l.newAttributes;for(let N=0,z=L.length;N<z;N++)L[N]=0}function S(L){I(L,0)}function I(L,N){const z=l.newAttributes,q=l.enabledAttributes,Y=l.attributeDivisors;z[L]=1,q[L]===0&&(s.enableVertexAttribArray(L),q[L]=1),Y[L]!==N&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,N),Y[L]=N)}function A(){const L=l.newAttributes,N=l.enabledAttributes;for(let z=0,q=N.length;z<q;z++)N[z]!==L[z]&&(s.disableVertexAttribArray(z),N[z]=0)}function C(L,N,z,q,Y,Z,K){K===!0?s.vertexAttribIPointer(L,N,z,Y,Z):s.vertexAttribPointer(L,N,z,q,Y,Z)}function O(L,N,z,q){if(n.isWebGL2===!1&&(L.isInstancedMesh||q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const Y=q.attributes,Z=z.getAttributes(),K=N.defaultAttributeValues;for(const ie in Z){const se=Z[ie];if(se.location>=0){let W=Y[ie];if(W===void 0&&(ie==="instanceMatrix"&&L.instanceMatrix&&(W=L.instanceMatrix),ie==="instanceColor"&&L.instanceColor&&(W=L.instanceColor)),W!==void 0){const J=W.normalized,de=W.itemSize,Me=t.get(W);if(Me===void 0)continue;const Ee=Me.buffer,Ue=Me.type,Ne=Me.bytesPerElement,Ce=n.isWebGL2===!0&&(Ue===s.INT||Ue===s.UNSIGNED_INT||W.gpuType===Qo);if(W.isInterleavedBufferAttribute){const Ye=W.data,B=Ye.stride,Pt=W.offset;if(Ye.isInstancedInterleavedBuffer){for(let ye=0;ye<se.locationSize;ye++)I(se.location+ye,Ye.meshPerAttribute);L.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=Ye.meshPerAttribute*Ye.count)}else for(let ye=0;ye<se.locationSize;ye++)S(se.location+ye);s.bindBuffer(s.ARRAY_BUFFER,Ee);for(let ye=0;ye<se.locationSize;ye++)C(se.location+ye,de/se.locationSize,Ue,J,B*Ne,(Pt+de/se.locationSize*ye)*Ne,Ce)}else{if(W.isInstancedBufferAttribute){for(let Ye=0;Ye<se.locationSize;Ye++)I(se.location+Ye,W.meshPerAttribute);L.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let Ye=0;Ye<se.locationSize;Ye++)S(se.location+Ye);s.bindBuffer(s.ARRAY_BUFFER,Ee);for(let Ye=0;Ye<se.locationSize;Ye++)C(se.location+Ye,de/se.locationSize,Ue,J,de*Ne,de/se.locationSize*Ye*Ne,Ce)}}else if(K!==void 0){const J=K[ie];if(J!==void 0)switch(J.length){case 2:s.vertexAttrib2fv(se.location,J);break;case 3:s.vertexAttrib3fv(se.location,J);break;case 4:s.vertexAttrib4fv(se.location,J);break;default:s.vertexAttrib1fv(se.location,J)}}}}A()}function x(){F();for(const L in o){const N=o[L];for(const z in N){const q=N[z];for(const Y in q)_(q[Y].object),delete q[Y];delete N[z]}delete o[L]}}function b(L){if(o[L.id]===void 0)return;const N=o[L.id];for(const z in N){const q=N[z];for(const Y in q)_(q[Y].object),delete q[Y];delete N[z]}delete o[L.id]}function U(L){for(const N in o){const z=o[N];if(z[L.id]===void 0)continue;const q=z[L.id];for(const Y in q)_(q[Y].object),delete q[Y];delete z[L.id]}}function F(){$(),h=!0,l!==c&&(l=c,m(l.object))}function $(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:d,reset:F,resetDefaultState:$,dispose:x,releaseStatesOfGeometry:b,releaseStatesOfProgram:U,initAttributes:v,enableAttribute:S,disableUnusedAttributes:A}}function Xu(s,e,t,n){const i=n.isWebGL2;let r;function a(h){r=h}function o(h,d){s.drawArrays(r,h,d),t.update(d,r,1)}function c(h,d,f){if(f===0)return;let m,_;if(i)m=s,_="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[_](r,h,d,f),t.update(d,r,f)}function l(h,d,f){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<f;_++)this.render(h[_],d[_]);else{m.multiDrawArraysWEBGL(r,h,0,d,0,f);let _=0;for(let g=0;g<f;g++)_+=d[g];t.update(_,r,1)}}this.setMode=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=l}function ju(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(C){if(C==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const c=r(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);const l=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_TEXTURE_SIZE),_=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),p=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),u=s.getParameter(s.MAX_VARYING_VECTORS),M=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),v=f>0,S=a||e.has("OES_texture_float"),I=v&&S,A=a?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:p,maxVaryings:u,maxFragmentUniforms:M,vertexTextures:v,floatFragmentTextures:S,floatVertexTextures:I,maxSamples:A}}function qu(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new kn,o=new Xe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const m=d.length!==0||f||n!==0||i;return i=f,n=d.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){t=h(d,f,0)},this.setState=function(d,f,m){const _=d.clippingPlanes,g=d.clipIntersection,p=d.clipShadows,u=s.get(d);if(!i||_===null||_.length===0||r&&!p)r?h(null):l();else{const M=r?0:n,v=M*4;let S=u.clippingState||null;c.value=S,S=h(_,f,v,m);for(let I=0;I!==v;++I)S[I]=t[I];u.clippingState=S,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,f,m,_){const g=d!==null?d.length:0;let p=null;if(g!==0){if(p=c.value,_!==!0||p===null){const u=m+g*4,M=f.matrixWorldInverse;o.getNormalMatrix(M),(p===null||p.length<u)&&(p=new Float32Array(u));for(let v=0,S=m;v!==g;++v,S+=4)a.copy(d[v]).applyMatrix4(M,o),a.normal.toArray(p,S),p[S+3]=a.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,p}}function Yu(s){let e=new WeakMap;function t(a,o){return o===Xr?a.mapping=Bi:o===jr&&(a.mapping=Hi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Xr||o===jr)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new ah(c.height/2);return l.fromEquirectangularTexture(s,a),e.set(a,l),a.addEventListener("dispose",i),t(l.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Ec extends _c{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Di=4,uo=[.125,.215,.35,.446,.526,.582],Wn=20,Dr=new Ec,fo=new He;let Ur=null,Or=0,Nr=0;const zn=(1+Math.sqrt(5))/2,wi=1/zn,po=[new R(1,1,1),new R(-1,1,1),new R(1,1,-1),new R(-1,1,-1),new R(0,zn,wi),new R(0,zn,-wi),new R(wi,0,zn),new R(-wi,0,zn),new R(zn,wi,0),new R(-zn,wi,0)];class mo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Ur=this._renderer.getRenderTarget(),Or=this._renderer.getActiveCubeFace(),Nr=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_o(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ur,Or,Nr),e.scissorTest=!1,Us(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Bi||e.mapping===Hi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ur=this._renderer.getRenderTarget(),Or=this._renderer.getActiveCubeFace(),Nr=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:It,minFilter:It,generateMipmaps:!1,type:is,format:nn,colorSpace:vn,depthBuffer:!1},i=go(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=go(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=$u(r)),this._blurMaterial=Zu(r,e,t)}return i}_compileMaterial(e){const t=new X(this._lodPlanes[0],e);this._renderer.compile(t,Dr)}_sceneToCubeUV(e,t,n,i){const o=new jt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(fo),h.toneMapping=Rn,h.autoClear=!1;const m=new lt({name:"PMREM.Background",side:Gt,depthWrite:!1,depthTest:!1}),_=new X(new he,m);let g=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,g=!0):(m.color.copy(fo),g=!0);for(let u=0;u<6;u++){const M=u%3;M===0?(o.up.set(0,c[u],0),o.lookAt(l[u],0,0)):M===1?(o.up.set(0,0,c[u]),o.lookAt(0,l[u],0)):(o.up.set(0,c[u],0),o.lookAt(0,0,l[u]));const v=this._cubeSize;Us(i,M*v,u>2?v:0,v,v),h.setRenderTarget(i),g&&h.render(_,o),h.render(e,o)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Bi||e.mapping===Hi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=vo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_o());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new X(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;Us(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Dr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=po[(i-1)%po.length];this._blur(e,i-1,i,r,a)}t.autoClear=n}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new X(this._lodPlanes[i],l),f=l.uniforms,m=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Wn-1),g=r/_,p=isFinite(r)?1+Math.floor(h*g):Wn;p>Wn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Wn}`);const u=[];let M=0;for(let C=0;C<Wn;++C){const O=C/g,x=Math.exp(-O*O/2);u.push(x),C===0?M+=x:C<p&&(M+=2*x)}for(let C=0;C<u.length;C++)u[C]=u[C]/M;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=u,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:v}=this;f.dTheta.value=_,f.mipInt.value=v-n;const S=this._sizeLods[i],I=3*S*(i>v-Di?i-v+Di:0),A=4*(this._cubeSize-S);Us(t,I,A,3*S,2*S),c.setRenderTarget(t),c.render(d,Dr)}}function $u(s){const e=[],t=[],n=[];let i=s;const r=s-Di+1+uo.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);t.push(o);let c=1/o;a>s-Di?c=uo[a-s+Di-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),h=-l,d=1+l,f=[h,h,d,h,d,d,h,h,d,d,h,d],m=6,_=6,g=3,p=2,u=1,M=new Float32Array(g*_*m),v=new Float32Array(p*_*m),S=new Float32Array(u*_*m);for(let A=0;A<m;A++){const C=A%3*2/3-1,O=A>2?0:-1,x=[C,O,0,C+2/3,O,0,C+2/3,O+1,0,C,O,0,C+2/3,O+1,0,C,O+1,0];M.set(x,g*_*A),v.set(f,p*_*A);const b=[A,A,A,A,A,A];S.set(b,u*_*A)}const I=new At;I.setAttribute("position",new Kt(M,g)),I.setAttribute("uv",new Kt(v,p)),I.setAttribute("faceIndex",new Kt(S,u)),e.push(I),i>Di&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function go(s,e,t){const n=new li(s,e,t);return n.texture.mapping=Ks,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Us(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Zu(s,e,t){const n=new Float32Array(Wn),i=new R(0,1,0);return new Dn({name:"SphericalGaussianBlur",defines:{n:Wn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:aa(),fragmentShader:`

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
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function _o(){return new Dn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:aa(),fragmentShader:`

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
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function vo(){return new Dn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:aa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function aa(){return`

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
	`}function Ku(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===Xr||c===jr,h=c===Bi||c===Hi;if(l||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let d=e.get(o);return t===null&&(t=new mo(s)),d=l?t.fromEquirectangular(o,d):t.fromCubemap(o,d),e.set(o,d),d.texture}else{if(e.has(o))return e.get(o).texture;{const d=o.image;if(l&&d&&d.height>0||h&&d&&i(d)){t===null&&(t=new mo(s));const f=l?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,f),o.addEventListener("dispose",r),f.texture}else return null}}}return o}function i(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Ju(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Qu(s,e,t,n){const i={},r=new WeakMap;function a(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);for(const _ in f.morphAttributes){const g=f.morphAttributes[_];for(let p=0,u=g.length;p<u;p++)e.remove(g[p])}f.removeEventListener("dispose",a),delete i[f.id];const m=r.get(f);m&&(e.remove(m),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(d,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,t.memory.geometries++),f}function c(d){const f=d.attributes;for(const _ in f)e.update(f[_],s.ARRAY_BUFFER);const m=d.morphAttributes;for(const _ in m){const g=m[_];for(let p=0,u=g.length;p<u;p++)e.update(g[p],s.ARRAY_BUFFER)}}function l(d){const f=[],m=d.index,_=d.attributes.position;let g=0;if(m!==null){const M=m.array;g=m.version;for(let v=0,S=M.length;v<S;v+=3){const I=M[v+0],A=M[v+1],C=M[v+2];f.push(I,A,A,C,C,I)}}else if(_!==void 0){const M=_.array;g=_.version;for(let v=0,S=M.length/3-1;v<S;v+=3){const I=v+0,A=v+1,C=v+2;f.push(I,A,A,C,C,I)}}else return;const p=new(lc(f)?mc:pc)(f,1);p.version=g;const u=r.get(d);u&&e.remove(u),r.set(d,p)}function h(d){const f=r.get(d);if(f){const m=d.index;m!==null&&f.version<m.version&&l(d)}else l(d);return r.get(d)}return{get:o,update:c,getWireframeAttribute:h}}function ef(s,e,t,n){const i=n.isWebGL2;let r;function a(m){r=m}let o,c;function l(m){o=m.type,c=m.bytesPerElement}function h(m,_){s.drawElements(r,_,o,m*c),t.update(_,r,1)}function d(m,_,g){if(g===0)return;let p,u;if(i)p=s,u="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[u](r,_,o,m*c,g),t.update(_,r,g)}function f(m,_,g){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<g;u++)this.render(m[u]/c,_[u]);else{p.multiDrawElementsWEBGL(r,_,0,o,m,0,g);let u=0;for(let M=0;M<g;M++)u+=_[M];t.update(u,r,1)}}this.setMode=a,this.setIndex=l,this.render=h,this.renderInstances=d,this.renderMultiDraw=f}function tf(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function nf(s,e){return s[0]-e[0]}function sf(s,e){return Math.abs(e[1])-Math.abs(s[1])}function rf(s,e,t){const n={},i=new Float32Array(8),r=new WeakMap,a=new rt,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,h,d){const f=l.morphTargetInfluences;if(e.isWebGL2===!0){const _=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=_!==void 0?_.length:0;let p=r.get(h);if(p===void 0||p.count!==g){let N=function(){$.dispose(),r.delete(h),h.removeEventListener("dispose",N)};var m=N;p!==void 0&&p.texture.dispose();const v=h.morphAttributes.position!==void 0,S=h.morphAttributes.normal!==void 0,I=h.morphAttributes.color!==void 0,A=h.morphAttributes.position||[],C=h.morphAttributes.normal||[],O=h.morphAttributes.color||[];let x=0;v===!0&&(x=1),S===!0&&(x=2),I===!0&&(x=3);let b=h.attributes.position.count*x,U=1;b>e.maxTextureSize&&(U=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const F=new Float32Array(b*U*4*g),$=new uc(F,b,U,g);$.type=An,$.needsUpdate=!0;const L=x*4;for(let z=0;z<g;z++){const q=A[z],Y=C[z],Z=O[z],K=b*U*4*z;for(let ie=0;ie<q.count;ie++){const se=ie*L;v===!0&&(a.fromBufferAttribute(q,ie),F[K+se+0]=a.x,F[K+se+1]=a.y,F[K+se+2]=a.z,F[K+se+3]=0),S===!0&&(a.fromBufferAttribute(Y,ie),F[K+se+4]=a.x,F[K+se+5]=a.y,F[K+se+6]=a.z,F[K+se+7]=0),I===!0&&(a.fromBufferAttribute(Z,ie),F[K+se+8]=a.x,F[K+se+9]=a.y,F[K+se+10]=a.z,F[K+se+11]=Z.itemSize===4?a.w:1)}}p={count:g,texture:$,size:new we(b,U)},r.set(h,p),h.addEventListener("dispose",N)}let u=0;for(let v=0;v<f.length;v++)u+=f[v];const M=h.morphTargetsRelative?1:1-u;d.getUniforms().setValue(s,"morphTargetBaseInfluence",M),d.getUniforms().setValue(s,"morphTargetInfluences",f),d.getUniforms().setValue(s,"morphTargetsTexture",p.texture,t),d.getUniforms().setValue(s,"morphTargetsTextureSize",p.size)}else{const _=f===void 0?0:f.length;let g=n[h.id];if(g===void 0||g.length!==_){g=[];for(let S=0;S<_;S++)g[S]=[S,0];n[h.id]=g}for(let S=0;S<_;S++){const I=g[S];I[0]=S,I[1]=f[S]}g.sort(sf);for(let S=0;S<8;S++)S<_&&g[S][1]?(o[S][0]=g[S][0],o[S][1]=g[S][1]):(o[S][0]=Number.MAX_SAFE_INTEGER,o[S][1]=0);o.sort(nf);const p=h.morphAttributes.position,u=h.morphAttributes.normal;let M=0;for(let S=0;S<8;S++){const I=o[S],A=I[0],C=I[1];A!==Number.MAX_SAFE_INTEGER&&C?(p&&h.getAttribute("morphTarget"+S)!==p[A]&&h.setAttribute("morphTarget"+S,p[A]),u&&h.getAttribute("morphNormal"+S)!==u[A]&&h.setAttribute("morphNormal"+S,u[A]),i[S]=C,M+=C):(p&&h.hasAttribute("morphTarget"+S)===!0&&h.deleteAttribute("morphTarget"+S),u&&h.hasAttribute("morphNormal"+S)===!0&&h.deleteAttribute("morphNormal"+S),i[S]=0)}const v=h.morphTargetsRelative?1:1-M;d.getUniforms().setValue(s,"morphTargetBaseInfluence",v),d.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:c}}function af(s,e,t,n){let i=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,d=e.get(c,h);if(i.get(d)!==l&&(e.update(d),i.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==l&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;i.get(f)!==l&&(f.update(),i.set(f,l))}return d}function a(){i=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}class Mc extends kt{constructor(e,t,n,i,r,a,o,c,l,h){if(h=h!==void 0?h:ai,h!==ai&&h!==Gi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ai&&(n=Tn),n===void 0&&h===Gi&&(n=ri),super(null,i,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Ft,this.minFilter=c!==void 0?c:Ft,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Sc=new kt,yc=new Mc(1,1);yc.compareFunction=cc;const bc=new uc,Tc=new Vl,Ac=new vc,xo=[],Eo=[],Mo=new Float32Array(16),So=new Float32Array(9),yo=new Float32Array(4);function Vi(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=xo[i];if(r===void 0&&(r=new Float32Array(i),xo[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function xt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Et(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function tr(s,e){let t=Eo[e];t===void 0&&(t=new Int32Array(e),Eo[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function of(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function cf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;s.uniform2fv(this.addr,e),Et(t,e)}}function lf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(xt(t,e))return;s.uniform3fv(this.addr,e),Et(t,e)}}function hf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;s.uniform4fv(this.addr,e),Et(t,e)}}function df(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Et(t,e)}else{if(xt(t,n))return;yo.set(n),s.uniformMatrix2fv(this.addr,!1,yo),Et(t,n)}}function uf(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Et(t,e)}else{if(xt(t,n))return;So.set(n),s.uniformMatrix3fv(this.addr,!1,So),Et(t,n)}}function ff(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Et(t,e)}else{if(xt(t,n))return;Mo.set(n),s.uniformMatrix4fv(this.addr,!1,Mo),Et(t,n)}}function pf(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function mf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;s.uniform2iv(this.addr,e),Et(t,e)}}function gf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;s.uniform3iv(this.addr,e),Et(t,e)}}function _f(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;s.uniform4iv(this.addr,e),Et(t,e)}}function vf(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function xf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;s.uniform2uiv(this.addr,e),Et(t,e)}}function Ef(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;s.uniform3uiv(this.addr,e),Et(t,e)}}function Mf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;s.uniform4uiv(this.addr,e),Et(t,e)}}function Sf(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);const r=this.type===s.SAMPLER_2D_SHADOW?yc:Sc;t.setTexture2D(e||r,i)}function yf(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Tc,i)}function bf(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Ac,i)}function Tf(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||bc,i)}function Af(s){switch(s){case 5126:return of;case 35664:return cf;case 35665:return lf;case 35666:return hf;case 35674:return df;case 35675:return uf;case 35676:return ff;case 5124:case 35670:return pf;case 35667:case 35671:return mf;case 35668:case 35672:return gf;case 35669:case 35673:return _f;case 5125:return vf;case 36294:return xf;case 36295:return Ef;case 36296:return Mf;case 35678:case 36198:case 36298:case 36306:case 35682:return Sf;case 35679:case 36299:case 36307:return yf;case 35680:case 36300:case 36308:case 36293:return bf;case 36289:case 36303:case 36311:case 36292:return Tf}}function wf(s,e){s.uniform1fv(this.addr,e)}function Cf(s,e){const t=Vi(e,this.size,2);s.uniform2fv(this.addr,t)}function Rf(s,e){const t=Vi(e,this.size,3);s.uniform3fv(this.addr,t)}function If(s,e){const t=Vi(e,this.size,4);s.uniform4fv(this.addr,t)}function Lf(s,e){const t=Vi(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Pf(s,e){const t=Vi(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Df(s,e){const t=Vi(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Uf(s,e){s.uniform1iv(this.addr,e)}function Of(s,e){s.uniform2iv(this.addr,e)}function Nf(s,e){s.uniform3iv(this.addr,e)}function Ff(s,e){s.uniform4iv(this.addr,e)}function Bf(s,e){s.uniform1uiv(this.addr,e)}function Hf(s,e){s.uniform2uiv(this.addr,e)}function Gf(s,e){s.uniform3uiv(this.addr,e)}function kf(s,e){s.uniform4uiv(this.addr,e)}function zf(s,e,t){const n=this.cache,i=e.length,r=tr(t,i);xt(n,r)||(s.uniform1iv(this.addr,r),Et(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Sc,r[a])}function Vf(s,e,t){const n=this.cache,i=e.length,r=tr(t,i);xt(n,r)||(s.uniform1iv(this.addr,r),Et(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Tc,r[a])}function Wf(s,e,t){const n=this.cache,i=e.length,r=tr(t,i);xt(n,r)||(s.uniform1iv(this.addr,r),Et(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Ac,r[a])}function Xf(s,e,t){const n=this.cache,i=e.length,r=tr(t,i);xt(n,r)||(s.uniform1iv(this.addr,r),Et(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||bc,r[a])}function jf(s){switch(s){case 5126:return wf;case 35664:return Cf;case 35665:return Rf;case 35666:return If;case 35674:return Lf;case 35675:return Pf;case 35676:return Df;case 5124:case 35670:return Uf;case 35667:case 35671:return Of;case 35668:case 35672:return Nf;case 35669:case 35673:return Ff;case 5125:return Bf;case 36294:return Hf;case 36295:return Gf;case 36296:return kf;case 35678:case 36198:case 36298:case 36306:case 35682:return zf;case 35679:case 36299:case 36307:return Vf;case 35680:case 36300:case 36308:case 36293:return Wf;case 36289:case 36303:case 36311:case 36292:return Xf}}class qf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Af(t.type)}}class Yf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=jf(t.type)}}class $f{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const Fr=/(\w+)(\])?(\[|\.)?/g;function bo(s,e){s.seq.push(e),s.map[e.id]=e}function Zf(s,e,t){const n=s.name,i=n.length;for(Fr.lastIndex=0;;){const r=Fr.exec(n),a=Fr.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){bo(t,l===void 0?new qf(o,s,e):new Yf(o,s,e));break}else{let d=t.map[o];d===void 0&&(d=new $f(o),bo(t,d)),t=d}}}class ks{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);Zf(r,a,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function To(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const Kf=37297;let Jf=0;function Qf(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function ep(s){const e=Qe.getPrimaries(Qe.workingColorSpace),t=Qe.getPrimaries(s);let n;switch(e===t?n="":e===js&&t===Xs?n="LinearDisplayP3ToLinearSRGB":e===Xs&&t===js&&(n="LinearSRGBToLinearDisplayP3"),s){case vn:case Js:return[n,"LinearTransferOETF"];case Tt:case ia:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function Ao(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+Qf(s.getShaderSource(e),a)}else return i}function tp(s,e){const t=ep(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function np(s,e){let t;switch(e){case fl:t="Linear";break;case pl:t="Reinhard";break;case ml:t="OptimizedCineon";break;case Ko:t="ACESFilmic";break;case _l:t="AgX";break;case gl:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function ip(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ui).join(`
`)}function sp(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ui).join(`
`)}function rp(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ap(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function Ui(s){return s!==""}function wo(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Co(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const op=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jr(s){return s.replace(op,lp)}const cp=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function lp(s,e){let t=Be[e];if(t===void 0){const n=cp.get(e);if(n!==void 0)t=Be[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Jr(t)}const hp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ro(s){return s.replace(hp,dp)}function dp(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Io(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function up(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Yo?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===$o?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===fn&&(e="SHADOWMAP_TYPE_VSM"),e}function fp(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Bi:case Hi:e="ENVMAP_TYPE_CUBE";break;case Ks:e="ENVMAP_TYPE_CUBE_UV";break}return e}function pp(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Hi:e="ENVMAP_MODE_REFRACTION";break}return e}function mp(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Zo:e="ENVMAP_BLENDING_MULTIPLY";break;case dl:e="ENVMAP_BLENDING_MIX";break;case ul:e="ENVMAP_BLENDING_ADD";break}return e}function gp(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function _p(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=up(t),l=fp(t),h=pp(t),d=mp(t),f=gp(t),m=t.isWebGL2?"":ip(t),_=sp(t),g=rp(r),p=i.createProgram();let u,M,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ui).join(`
`),u.length>0&&(u+=`
`),M=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ui).join(`
`),M.length>0&&(M+=`
`)):(u=[Io(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ui).join(`
`),M=[m,Io(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Rn?"#define TONE_MAPPING":"",t.toneMapping!==Rn?Be.tonemapping_pars_fragment:"",t.toneMapping!==Rn?np("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,tp("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ui).join(`
`)),a=Jr(a),a=wo(a,t),a=Co(a,t),o=Jr(o),o=wo(o,t),o=Co(o,t),a=Ro(a),o=Ro(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,u=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,M=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===qa?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===qa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);const S=v+u+a,I=v+M+o,A=To(i,i.VERTEX_SHADER,S),C=To(i,i.FRAGMENT_SHADER,I);i.attachShader(p,A),i.attachShader(p,C),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p);function O(F){if(s.debug.checkShaderErrors){const $=i.getProgramInfoLog(p).trim(),L=i.getShaderInfoLog(A).trim(),N=i.getShaderInfoLog(C).trim();let z=!0,q=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if(z=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,p,A,C);else{const Y=Ao(i,A,"vertex"),Z=Ao(i,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Program Info Log: `+$+`
`+Y+`
`+Z)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(L===""||N==="")&&(q=!1);q&&(F.diagnostics={runnable:z,programLog:$,vertexShader:{log:L,prefix:u},fragmentShader:{log:N,prefix:M}})}i.deleteShader(A),i.deleteShader(C),x=new ks(i,p),b=ap(i,p)}let x;this.getUniforms=function(){return x===void 0&&O(this),x};let b;this.getAttributes=function(){return b===void 0&&O(this),b};let U=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=i.getProgramParameter(p,Kf)),U},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Jf++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=A,this.fragmentShader=C,this}let vp=0;class xp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Ep(e),t.set(e,n)),n}}class Ep{constructor(e){this.id=vp++,this.code=e,this.usedTimes=0}}function Mp(s,e,t,n,i,r,a){const o=new sa,c=new xp,l=[],h=i.isWebGL2,d=i.logarithmicDepthBuffer,f=i.vertexTextures;let m=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return x===0?"uv":`uv${x}`}function p(x,b,U,F,$){const L=F.fog,N=$.geometry,z=x.isMeshStandardMaterial?F.environment:null,q=(x.isMeshStandardMaterial?t:e).get(x.envMap||z),Y=q&&q.mapping===Ks?q.image.height:null,Z=_[x.type];x.precision!==null&&(m=i.getMaxPrecision(x.precision),m!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",m,"instead."));const K=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,ie=K!==void 0?K.length:0;let se=0;N.morphAttributes.position!==void 0&&(se=1),N.morphAttributes.normal!==void 0&&(se=2),N.morphAttributes.color!==void 0&&(se=3);let W,J,de,Me;if(Z){const Dt=an[Z];W=Dt.vertexShader,J=Dt.fragmentShader}else W=x.vertexShader,J=x.fragmentShader,c.update(x),de=c.getVertexShaderID(x),Me=c.getFragmentShaderID(x);const Ee=s.getRenderTarget(),Ue=$.isInstancedMesh===!0,Ne=$.isBatchedMesh===!0,Ce=!!x.map,Ye=!!x.matcap,B=!!q,Pt=!!x.aoMap,ye=!!x.lightMap,Pe=!!x.bumpMap,_e=!!x.normalMap,ot=!!x.displacementMap,Ge=!!x.emissiveMap,T=!!x.metalnessMap,E=!!x.roughnessMap,G=x.anisotropy>0,te=x.clearcoat>0,ee=x.iridescence>0,ne=x.sheen>0,ve=x.transmission>0,le=G&&!!x.anisotropyMap,pe=te&&!!x.clearcoatMap,Ae=te&&!!x.clearcoatNormalMap,ke=te&&!!x.clearcoatRoughnessMap,Q=ee&&!!x.iridescenceMap,Ke=ee&&!!x.iridescenceThicknessMap,je=ne&&!!x.sheenColorMap,Le=ne&&!!x.sheenRoughnessMap,Se=!!x.specularMap,me=!!x.specularColorMap,Fe=!!x.specularIntensityMap,Ze=ve&&!!x.transmissionMap,ut=ve&&!!x.thicknessMap,Ve=!!x.gradientMap,re=!!x.alphaMap,P=x.alphaTest>0,oe=!!x.alphaHash,ce=!!x.extensions,Re=!!N.attributes.uv1,be=!!N.attributes.uv2,tt=!!N.attributes.uv3;let nt=Rn;return x.toneMapped&&(Ee===null||Ee.isXRRenderTarget===!0)&&(nt=s.toneMapping),{isWebGL2:h,shaderID:Z,shaderType:x.type,shaderName:x.name,vertexShader:W,fragmentShader:J,defines:x.defines,customVertexShaderID:de,customFragmentShaderID:Me,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:m,batching:Ne,instancing:Ue,instancingColor:Ue&&$.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:Ee===null?s.outputColorSpace:Ee.isXRRenderTarget===!0?Ee.texture.colorSpace:vn,map:Ce,matcap:Ye,envMap:B,envMapMode:B&&q.mapping,envMapCubeUVHeight:Y,aoMap:Pt,lightMap:ye,bumpMap:Pe,normalMap:_e,displacementMap:f&&ot,emissiveMap:Ge,normalMapObjectSpace:_e&&x.normalMapType===Rl,normalMapTangentSpace:_e&&x.normalMapType===oc,metalnessMap:T,roughnessMap:E,anisotropy:G,anisotropyMap:le,clearcoat:te,clearcoatMap:pe,clearcoatNormalMap:Ae,clearcoatRoughnessMap:ke,iridescence:ee,iridescenceMap:Q,iridescenceThicknessMap:Ke,sheen:ne,sheenColorMap:je,sheenRoughnessMap:Le,specularMap:Se,specularColorMap:me,specularIntensityMap:Fe,transmission:ve,transmissionMap:Ze,thicknessMap:ut,gradientMap:Ve,opaque:x.transparent===!1&&x.blending===Oi,alphaMap:re,alphaTest:P,alphaHash:oe,combine:x.combine,mapUv:Ce&&g(x.map.channel),aoMapUv:Pt&&g(x.aoMap.channel),lightMapUv:ye&&g(x.lightMap.channel),bumpMapUv:Pe&&g(x.bumpMap.channel),normalMapUv:_e&&g(x.normalMap.channel),displacementMapUv:ot&&g(x.displacementMap.channel),emissiveMapUv:Ge&&g(x.emissiveMap.channel),metalnessMapUv:T&&g(x.metalnessMap.channel),roughnessMapUv:E&&g(x.roughnessMap.channel),anisotropyMapUv:le&&g(x.anisotropyMap.channel),clearcoatMapUv:pe&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:Ae&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ke&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:Ke&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:je&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:Le&&g(x.sheenRoughnessMap.channel),specularMapUv:Se&&g(x.specularMap.channel),specularColorMapUv:me&&g(x.specularColorMap.channel),specularIntensityMapUv:Fe&&g(x.specularIntensityMap.channel),transmissionMapUv:Ze&&g(x.transmissionMap.channel),thicknessMapUv:ut&&g(x.thicknessMap.channel),alphaMapUv:re&&g(x.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(_e||G),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,vertexUv1s:Re,vertexUv2s:be,vertexUv3s:tt,pointsUvs:$.isPoints===!0&&!!N.attributes.uv&&(Ce||re),fog:!!L,useFog:x.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:$.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:se,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&U.length>0,shadowMapType:s.shadowMap.type,toneMapping:nt,useLegacyLights:s._useLegacyLights,decodeVideoTexture:Ce&&x.map.isVideoTexture===!0&&Qe.getTransfer(x.map.colorSpace)===st,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Lt,flipSided:x.side===Gt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:ce&&x.extensions.derivatives===!0,extensionFragDepth:ce&&x.extensions.fragDepth===!0,extensionDrawBuffers:ce&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:ce&&x.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ce&&x.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()}}function u(x){const b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(const U in x.defines)b.push(U),b.push(x.defines[U]);return x.isRawShaderMaterial===!1&&(M(b,x),v(b,x),b.push(s.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function M(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapCubeUVHeight),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.morphAttributeCount),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function v(x,b){o.disableAll(),b.isWebGL2&&o.enable(0),b.supportsVertexTextures&&o.enable(1),b.instancing&&o.enable(2),b.instancingColor&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),x.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.skinning&&o.enable(4),b.morphTargets&&o.enable(5),b.morphNormals&&o.enable(6),b.morphColors&&o.enable(7),b.premultipliedAlpha&&o.enable(8),b.shadowMapEnabled&&o.enable(9),b.useLegacyLights&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),x.push(o.mask)}function S(x){const b=_[x.type];let U;if(b){const F=an[b];U=nh.clone(F.uniforms)}else U=x.uniforms;return U}function I(x,b){let U;for(let F=0,$=l.length;F<$;F++){const L=l[F];if(L.cacheKey===b){U=L,++U.usedTimes;break}}return U===void 0&&(U=new _p(s,b,x,r),l.push(U)),U}function A(x){if(--x.usedTimes===0){const b=l.indexOf(x);l[b]=l[l.length-1],l.pop(),x.destroy()}}function C(x){c.remove(x)}function O(){c.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:S,acquireProgram:I,releaseProgram:A,releaseShaderCache:C,programs:l,dispose:O}}function Sp(){let s=new WeakMap;function e(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function t(r){s.delete(r)}function n(r,a,o){s.get(r)[a]=o}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function yp(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Lo(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Po(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(d,f,m,_,g,p){let u=s[e];return u===void 0?(u={id:d.id,object:d,geometry:f,material:m,groupOrder:_,renderOrder:d.renderOrder,z:g,group:p},s[e]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=m,u.groupOrder=_,u.renderOrder=d.renderOrder,u.z=g,u.group=p),e++,u}function o(d,f,m,_,g,p){const u=a(d,f,m,_,g,p);m.transmission>0?n.push(u):m.transparent===!0?i.push(u):t.push(u)}function c(d,f,m,_,g,p){const u=a(d,f,m,_,g,p);m.transmission>0?n.unshift(u):m.transparent===!0?i.unshift(u):t.unshift(u)}function l(d,f){t.length>1&&t.sort(d||yp),n.length>1&&n.sort(f||Lo),i.length>1&&i.sort(f||Lo)}function h(){for(let d=e,f=s.length;d<f;d++){const m=s[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:c,finish:h,sort:l}}function bp(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new Po,s.set(n,[a])):i>=r.length?(a=new Po,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function Tp(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new He};break;case"SpotLight":t={position:new R,direction:new R,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new He,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new He,groundColor:new He};break;case"RectAreaLight":t={color:new He,position:new R,halfWidth:new R,halfHeight:new R};break}return s[e.id]=t,t}}}function Ap(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let wp=0;function Cp(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Rp(s,e){const t=new Tp,n=Ap(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new R);const r=new R,a=new at,o=new at;function c(h,d){let f=0,m=0,_=0;for(let F=0;F<9;F++)i.probe[F].set(0,0,0);let g=0,p=0,u=0,M=0,v=0,S=0,I=0,A=0,C=0,O=0,x=0;h.sort(Cp);const b=d===!0?Math.PI:1;for(let F=0,$=h.length;F<$;F++){const L=h[F],N=L.color,z=L.intensity,q=L.distance,Y=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)f+=N.r*z*b,m+=N.g*z*b,_+=N.b*z*b;else if(L.isLightProbe){for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(L.sh.coefficients[Z],z);x++}else if(L.isDirectionalLight){const Z=t.get(L);if(Z.color.copy(L.color).multiplyScalar(L.intensity*b),L.castShadow){const K=L.shadow,ie=n.get(L);ie.shadowBias=K.bias,ie.shadowNormalBias=K.normalBias,ie.shadowRadius=K.radius,ie.shadowMapSize=K.mapSize,i.directionalShadow[g]=ie,i.directionalShadowMap[g]=Y,i.directionalShadowMatrix[g]=L.shadow.matrix,S++}i.directional[g]=Z,g++}else if(L.isSpotLight){const Z=t.get(L);Z.position.setFromMatrixPosition(L.matrixWorld),Z.color.copy(N).multiplyScalar(z*b),Z.distance=q,Z.coneCos=Math.cos(L.angle),Z.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Z.decay=L.decay,i.spot[u]=Z;const K=L.shadow;if(L.map&&(i.spotLightMap[C]=L.map,C++,K.updateMatrices(L),L.castShadow&&O++),i.spotLightMatrix[u]=K.matrix,L.castShadow){const ie=n.get(L);ie.shadowBias=K.bias,ie.shadowNormalBias=K.normalBias,ie.shadowRadius=K.radius,ie.shadowMapSize=K.mapSize,i.spotShadow[u]=ie,i.spotShadowMap[u]=Y,A++}u++}else if(L.isRectAreaLight){const Z=t.get(L);Z.color.copy(N).multiplyScalar(z),Z.halfWidth.set(L.width*.5,0,0),Z.halfHeight.set(0,L.height*.5,0),i.rectArea[M]=Z,M++}else if(L.isPointLight){const Z=t.get(L);if(Z.color.copy(L.color).multiplyScalar(L.intensity*b),Z.distance=L.distance,Z.decay=L.decay,L.castShadow){const K=L.shadow,ie=n.get(L);ie.shadowBias=K.bias,ie.shadowNormalBias=K.normalBias,ie.shadowRadius=K.radius,ie.shadowMapSize=K.mapSize,ie.shadowCameraNear=K.camera.near,ie.shadowCameraFar=K.camera.far,i.pointShadow[p]=ie,i.pointShadowMap[p]=Y,i.pointShadowMatrix[p]=L.shadow.matrix,I++}i.point[p]=Z,p++}else if(L.isHemisphereLight){const Z=t.get(L);Z.skyColor.copy(L.color).multiplyScalar(z*b),Z.groundColor.copy(L.groundColor).multiplyScalar(z*b),i.hemi[v]=Z,v++}}M>0&&(e.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ae.LTC_FLOAT_1,i.rectAreaLTC2=ae.LTC_FLOAT_2):(i.rectAreaLTC1=ae.LTC_HALF_1,i.rectAreaLTC2=ae.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ae.LTC_FLOAT_1,i.rectAreaLTC2=ae.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ae.LTC_HALF_1,i.rectAreaLTC2=ae.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=m,i.ambient[2]=_;const U=i.hash;(U.directionalLength!==g||U.pointLength!==p||U.spotLength!==u||U.rectAreaLength!==M||U.hemiLength!==v||U.numDirectionalShadows!==S||U.numPointShadows!==I||U.numSpotShadows!==A||U.numSpotMaps!==C||U.numLightProbes!==x)&&(i.directional.length=g,i.spot.length=u,i.rectArea.length=M,i.point.length=p,i.hemi.length=v,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=I,i.pointShadowMap.length=I,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=I,i.spotLightMatrix.length=A+C-O,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=O,i.numLightProbes=x,U.directionalLength=g,U.pointLength=p,U.spotLength=u,U.rectAreaLength=M,U.hemiLength=v,U.numDirectionalShadows=S,U.numPointShadows=I,U.numSpotShadows=A,U.numSpotMaps=C,U.numLightProbes=x,i.version=wp++)}function l(h,d){let f=0,m=0,_=0,g=0,p=0;const u=d.matrixWorldInverse;for(let M=0,v=h.length;M<v;M++){const S=h[M];if(S.isDirectionalLight){const I=i.directional[f];I.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),I.direction.sub(r),I.direction.transformDirection(u),f++}else if(S.isSpotLight){const I=i.spot[_];I.position.setFromMatrixPosition(S.matrixWorld),I.position.applyMatrix4(u),I.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),I.direction.sub(r),I.direction.transformDirection(u),_++}else if(S.isRectAreaLight){const I=i.rectArea[g];I.position.setFromMatrixPosition(S.matrixWorld),I.position.applyMatrix4(u),o.identity(),a.copy(S.matrixWorld),a.premultiply(u),o.extractRotation(a),I.halfWidth.set(S.width*.5,0,0),I.halfHeight.set(0,S.height*.5,0),I.halfWidth.applyMatrix4(o),I.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){const I=i.point[m];I.position.setFromMatrixPosition(S.matrixWorld),I.position.applyMatrix4(u),m++}else if(S.isHemisphereLight){const I=i.hemi[p];I.direction.setFromMatrixPosition(S.matrixWorld),I.direction.transformDirection(u),p++}}}return{setup:c,setupView:l,state:i}}function Do(s,e){const t=new Rp(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function a(d){n.push(d)}function o(d){i.push(d)}function c(d){t.setup(n,d)}function l(d){t.setupView(n,d)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function Ip(s,e){let t=new WeakMap;function n(r,a=0){const o=t.get(r);let c;return o===void 0?(c=new Do(s,e),t.set(r,[c])):a>=o.length?(c=new Do(s,e),o.push(c)):c=o[a],c}function i(){t=new WeakMap}return{get:n,dispose:i}}class Lp extends Un{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Pp extends Un{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Dp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Up=`uniform sampler2D shadow_pass;
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
}`;function Op(s,e,t){let n=new ra;const i=new we,r=new we,a=new rt,o=new Lp({depthPacking:Cl}),c=new Pp,l={},h=t.maxTextureSize,d={[Pn]:Gt,[Gt]:Pn,[Lt]:Lt},f=new Dn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new we},radius:{value:4}},vertexShader:Dp,fragmentShader:Up}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const _=new At;_.setAttribute("position",new Kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new X(_,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yo;let u=this.type;this.render=function(A,C,O){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;const x=s.getRenderTarget(),b=s.getActiveCubeFace(),U=s.getActiveMipmapLevel(),F=s.state;F.setBlending(Cn),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const $=u!==fn&&this.type===fn,L=u===fn&&this.type!==fn;for(let N=0,z=A.length;N<z;N++){const q=A[N],Y=q.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;i.copy(Y.mapSize);const Z=Y.getFrameExtents();if(i.multiply(Z),r.copy(Y.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/Z.x),i.x=r.x*Z.x,Y.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/Z.y),i.y=r.y*Z.y,Y.mapSize.y=r.y)),Y.map===null||$===!0||L===!0){const ie=this.type!==fn?{minFilter:Ft,magFilter:Ft}:{};Y.map!==null&&Y.map.dispose(),Y.map=new li(i.x,i.y,ie),Y.map.texture.name=q.name+".shadowMap",Y.camera.updateProjectionMatrix()}s.setRenderTarget(Y.map),s.clear();const K=Y.getViewportCount();for(let ie=0;ie<K;ie++){const se=Y.getViewport(ie);a.set(r.x*se.x,r.y*se.y,r.x*se.z,r.y*se.w),F.viewport(a),Y.updateMatrices(q,ie),n=Y.getFrustum(),S(C,O,Y.camera,q,this.type)}Y.isPointLightShadow!==!0&&this.type===fn&&M(Y,O),Y.needsUpdate=!1}u=this.type,p.needsUpdate=!1,s.setRenderTarget(x,b,U)};function M(A,C){const O=e.update(g);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new li(i.x,i.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(C,null,O,f,g,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(C,null,O,m,g,null)}function v(A,C,O,x){let b=null;const U=O.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(U!==void 0)b=U;else if(b=O.isPointLight===!0?c:o,s.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const F=b.uuid,$=C.uuid;let L=l[F];L===void 0&&(L={},l[F]=L);let N=L[$];N===void 0&&(N=b.clone(),L[$]=N,C.addEventListener("dispose",I)),b=N}if(b.visible=C.visible,b.wireframe=C.wireframe,x===fn?b.side=C.shadowSide!==null?C.shadowSide:C.side:b.side=C.shadowSide!==null?C.shadowSide:d[C.side],b.alphaMap=C.alphaMap,b.alphaTest=C.alphaTest,b.map=C.map,b.clipShadows=C.clipShadows,b.clippingPlanes=C.clippingPlanes,b.clipIntersection=C.clipIntersection,b.displacementMap=C.displacementMap,b.displacementScale=C.displacementScale,b.displacementBias=C.displacementBias,b.wireframeLinewidth=C.wireframeLinewidth,b.linewidth=C.linewidth,O.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const F=s.properties.get(b);F.light=O}return b}function S(A,C,O,x,b){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&b===fn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,A.matrixWorld);const $=e.update(A),L=A.material;if(Array.isArray(L)){const N=$.groups;for(let z=0,q=N.length;z<q;z++){const Y=N[z],Z=L[Y.materialIndex];if(Z&&Z.visible){const K=v(A,Z,x,b);A.onBeforeShadow(s,A,C,O,$,K,Y),s.renderBufferDirect(O,null,$,K,A,Y),A.onAfterShadow(s,A,C,O,$,K,Y)}}}else if(L.visible){const N=v(A,L,x,b);A.onBeforeShadow(s,A,C,O,$,N,null),s.renderBufferDirect(O,null,$,N,A,null),A.onAfterShadow(s,A,C,O,$,N,null)}}const F=A.children;for(let $=0,L=F.length;$<L;$++)S(F[$],C,O,x,b)}function I(A){A.target.removeEventListener("dispose",I);for(const O in l){const x=l[O],b=A.target.uuid;b in x&&(x[b].dispose(),delete x[b])}}}function Np(s,e,t){const n=t.isWebGL2;function i(){let P=!1;const oe=new rt;let ce=null;const Re=new rt(0,0,0,0);return{setMask:function(be){ce!==be&&!P&&(s.colorMask(be,be,be,be),ce=be)},setLocked:function(be){P=be},setClear:function(be,tt,nt,Mt,Dt){Dt===!0&&(be*=Mt,tt*=Mt,nt*=Mt),oe.set(be,tt,nt,Mt),Re.equals(oe)===!1&&(s.clearColor(be,tt,nt,Mt),Re.copy(oe))},reset:function(){P=!1,ce=null,Re.set(-1,0,0,0)}}}function r(){let P=!1,oe=null,ce=null,Re=null;return{setTest:function(be){be?Ne(s.DEPTH_TEST):Ce(s.DEPTH_TEST)},setMask:function(be){oe!==be&&!P&&(s.depthMask(be),oe=be)},setFunc:function(be){if(ce!==be){switch(be){case sl:s.depthFunc(s.NEVER);break;case rl:s.depthFunc(s.ALWAYS);break;case al:s.depthFunc(s.LESS);break;case Vs:s.depthFunc(s.LEQUAL);break;case ol:s.depthFunc(s.EQUAL);break;case cl:s.depthFunc(s.GEQUAL);break;case ll:s.depthFunc(s.GREATER);break;case hl:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ce=be}},setLocked:function(be){P=be},setClear:function(be){Re!==be&&(s.clearDepth(be),Re=be)},reset:function(){P=!1,oe=null,ce=null,Re=null}}}function a(){let P=!1,oe=null,ce=null,Re=null,be=null,tt=null,nt=null,Mt=null,Dt=null;return{setTest:function(it){P||(it?Ne(s.STENCIL_TEST):Ce(s.STENCIL_TEST))},setMask:function(it){oe!==it&&!P&&(s.stencilMask(it),oe=it)},setFunc:function(it,Ut,rn){(ce!==it||Re!==Ut||be!==rn)&&(s.stencilFunc(it,Ut,rn),ce=it,Re=Ut,be=rn)},setOp:function(it,Ut,rn){(tt!==it||nt!==Ut||Mt!==rn)&&(s.stencilOp(it,Ut,rn),tt=it,nt=Ut,Mt=rn)},setLocked:function(it){P=it},setClear:function(it){Dt!==it&&(s.clearStencil(it),Dt=it)},reset:function(){P=!1,oe=null,ce=null,Re=null,be=null,tt=null,nt=null,Mt=null,Dt=null}}}const o=new i,c=new r,l=new a,h=new WeakMap,d=new WeakMap;let f={},m={},_=new WeakMap,g=[],p=null,u=!1,M=null,v=null,S=null,I=null,A=null,C=null,O=null,x=new He(0,0,0),b=0,U=!1,F=null,$=null,L=null,N=null,z=null;const q=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,Z=0;const K=s.getParameter(s.VERSION);K.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(K)[1]),Y=Z>=1):K.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),Y=Z>=2);let ie=null,se={};const W=s.getParameter(s.SCISSOR_BOX),J=s.getParameter(s.VIEWPORT),de=new rt().fromArray(W),Me=new rt().fromArray(J);function Ee(P,oe,ce,Re){const be=new Uint8Array(4),tt=s.createTexture();s.bindTexture(P,tt),s.texParameteri(P,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(P,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let nt=0;nt<ce;nt++)n&&(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)?s.texImage3D(oe,0,s.RGBA,1,1,Re,0,s.RGBA,s.UNSIGNED_BYTE,be):s.texImage2D(oe+nt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,be);return tt}const Ue={};Ue[s.TEXTURE_2D]=Ee(s.TEXTURE_2D,s.TEXTURE_2D,1),Ue[s.TEXTURE_CUBE_MAP]=Ee(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Ue[s.TEXTURE_2D_ARRAY]=Ee(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Ue[s.TEXTURE_3D]=Ee(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Ne(s.DEPTH_TEST),c.setFunc(Vs),Ge(!1),T(pa),Ne(s.CULL_FACE),_e(Cn);function Ne(P){f[P]!==!0&&(s.enable(P),f[P]=!0)}function Ce(P){f[P]!==!1&&(s.disable(P),f[P]=!1)}function Ye(P,oe){return m[P]!==oe?(s.bindFramebuffer(P,oe),m[P]=oe,n&&(P===s.DRAW_FRAMEBUFFER&&(m[s.FRAMEBUFFER]=oe),P===s.FRAMEBUFFER&&(m[s.DRAW_FRAMEBUFFER]=oe)),!0):!1}function B(P,oe){let ce=g,Re=!1;if(P)if(ce=_.get(oe),ce===void 0&&(ce=[],_.set(oe,ce)),P.isWebGLMultipleRenderTargets){const be=P.texture;if(ce.length!==be.length||ce[0]!==s.COLOR_ATTACHMENT0){for(let tt=0,nt=be.length;tt<nt;tt++)ce[tt]=s.COLOR_ATTACHMENT0+tt;ce.length=be.length,Re=!0}}else ce[0]!==s.COLOR_ATTACHMENT0&&(ce[0]=s.COLOR_ATTACHMENT0,Re=!0);else ce[0]!==s.BACK&&(ce[0]=s.BACK,Re=!0);Re&&(t.isWebGL2?s.drawBuffers(ce):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ce))}function Pt(P){return p!==P?(s.useProgram(P),p=P,!0):!1}const ye={[Vn]:s.FUNC_ADD,[Vc]:s.FUNC_SUBTRACT,[Wc]:s.FUNC_REVERSE_SUBTRACT};if(n)ye[va]=s.MIN,ye[xa]=s.MAX;else{const P=e.get("EXT_blend_minmax");P!==null&&(ye[va]=P.MIN_EXT,ye[xa]=P.MAX_EXT)}const Pe={[Xc]:s.ZERO,[jc]:s.ONE,[qc]:s.SRC_COLOR,[Vr]:s.SRC_ALPHA,[Qc]:s.SRC_ALPHA_SATURATE,[Kc]:s.DST_COLOR,[$c]:s.DST_ALPHA,[Yc]:s.ONE_MINUS_SRC_COLOR,[Wr]:s.ONE_MINUS_SRC_ALPHA,[Jc]:s.ONE_MINUS_DST_COLOR,[Zc]:s.ONE_MINUS_DST_ALPHA,[el]:s.CONSTANT_COLOR,[tl]:s.ONE_MINUS_CONSTANT_COLOR,[nl]:s.CONSTANT_ALPHA,[il]:s.ONE_MINUS_CONSTANT_ALPHA};function _e(P,oe,ce,Re,be,tt,nt,Mt,Dt,it){if(P===Cn){u===!0&&(Ce(s.BLEND),u=!1);return}if(u===!1&&(Ne(s.BLEND),u=!0),P!==zc){if(P!==M||it!==U){if((v!==Vn||A!==Vn)&&(s.blendEquation(s.FUNC_ADD),v=Vn,A=Vn),it)switch(P){case Oi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ma:s.blendFunc(s.ONE,s.ONE);break;case ga:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case _a:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Oi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ma:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case ga:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case _a:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}S=null,I=null,C=null,O=null,x.set(0,0,0),b=0,M=P,U=it}return}be=be||oe,tt=tt||ce,nt=nt||Re,(oe!==v||be!==A)&&(s.blendEquationSeparate(ye[oe],ye[be]),v=oe,A=be),(ce!==S||Re!==I||tt!==C||nt!==O)&&(s.blendFuncSeparate(Pe[ce],Pe[Re],Pe[tt],Pe[nt]),S=ce,I=Re,C=tt,O=nt),(Mt.equals(x)===!1||Dt!==b)&&(s.blendColor(Mt.r,Mt.g,Mt.b,Dt),x.copy(Mt),b=Dt),M=P,U=!1}function ot(P,oe){P.side===Lt?Ce(s.CULL_FACE):Ne(s.CULL_FACE);let ce=P.side===Gt;oe&&(ce=!ce),Ge(ce),P.blending===Oi&&P.transparent===!1?_e(Cn):_e(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),c.setFunc(P.depthFunc),c.setTest(P.depthTest),c.setMask(P.depthWrite),o.setMask(P.colorWrite);const Re=P.stencilWrite;l.setTest(Re),Re&&(l.setMask(P.stencilWriteMask),l.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),l.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),G(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?Ne(s.SAMPLE_ALPHA_TO_COVERAGE):Ce(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ge(P){F!==P&&(P?s.frontFace(s.CW):s.frontFace(s.CCW),F=P)}function T(P){P!==Gc?(Ne(s.CULL_FACE),P!==$&&(P===pa?s.cullFace(s.BACK):P===kc?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ce(s.CULL_FACE),$=P}function E(P){P!==L&&(Y&&s.lineWidth(P),L=P)}function G(P,oe,ce){P?(Ne(s.POLYGON_OFFSET_FILL),(N!==oe||z!==ce)&&(s.polygonOffset(oe,ce),N=oe,z=ce)):Ce(s.POLYGON_OFFSET_FILL)}function te(P){P?Ne(s.SCISSOR_TEST):Ce(s.SCISSOR_TEST)}function ee(P){P===void 0&&(P=s.TEXTURE0+q-1),ie!==P&&(s.activeTexture(P),ie=P)}function ne(P,oe,ce){ce===void 0&&(ie===null?ce=s.TEXTURE0+q-1:ce=ie);let Re=se[ce];Re===void 0&&(Re={type:void 0,texture:void 0},se[ce]=Re),(Re.type!==P||Re.texture!==oe)&&(ie!==ce&&(s.activeTexture(ce),ie=ce),s.bindTexture(P,oe||Ue[P]),Re.type=P,Re.texture=oe)}function ve(){const P=se[ie];P!==void 0&&P.type!==void 0&&(s.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function le(){try{s.compressedTexImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function pe(){try{s.compressedTexImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ae(){try{s.texSubImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ke(){try{s.texSubImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Q(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ke(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function je(){try{s.texStorage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Le(){try{s.texStorage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Se(){try{s.texImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function me(){try{s.texImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Fe(P){de.equals(P)===!1&&(s.scissor(P.x,P.y,P.z,P.w),de.copy(P))}function Ze(P){Me.equals(P)===!1&&(s.viewport(P.x,P.y,P.z,P.w),Me.copy(P))}function ut(P,oe){let ce=d.get(oe);ce===void 0&&(ce=new WeakMap,d.set(oe,ce));let Re=ce.get(P);Re===void 0&&(Re=s.getUniformBlockIndex(oe,P.name),ce.set(P,Re))}function Ve(P,oe){const Re=d.get(oe).get(P);h.get(oe)!==Re&&(s.uniformBlockBinding(oe,Re,P.__bindingPointIndex),h.set(oe,Re))}function re(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),f={},ie=null,se={},m={},_=new WeakMap,g=[],p=null,u=!1,M=null,v=null,S=null,I=null,A=null,C=null,O=null,x=new He(0,0,0),b=0,U=!1,F=null,$=null,L=null,N=null,z=null,de.set(0,0,s.canvas.width,s.canvas.height),Me.set(0,0,s.canvas.width,s.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:Ne,disable:Ce,bindFramebuffer:Ye,drawBuffers:B,useProgram:Pt,setBlending:_e,setMaterial:ot,setFlipSided:Ge,setCullFace:T,setLineWidth:E,setPolygonOffset:G,setScissorTest:te,activeTexture:ee,bindTexture:ne,unbindTexture:ve,compressedTexImage2D:le,compressedTexImage3D:pe,texImage2D:Se,texImage3D:me,updateUBOMapping:ut,uniformBlockBinding:Ve,texStorage2D:je,texStorage3D:Le,texSubImage2D:Ae,texSubImage3D:ke,compressedTexSubImage2D:Q,compressedTexSubImage3D:Ke,scissor:Fe,viewport:Ze,reset:re}}function Fp(s,e,t,n,i,r,a){const o=i.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let d;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(T,E){return m?new OffscreenCanvas(T,E):Ys("canvas")}function g(T,E,G,te){let ee=1;if((T.width>te||T.height>te)&&(ee=te/Math.max(T.width,T.height)),ee<1||E===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){const ne=E?Kr:Math.floor,ve=ne(ee*T.width),le=ne(ee*T.height);d===void 0&&(d=_(ve,le));const pe=G?_(ve,le):d;return pe.width=ve,pe.height=le,pe.getContext("2d").drawImage(T,0,0,ve,le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+ve+"x"+le+")."),pe}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function p(T){return Ya(T.width)&&Ya(T.height)}function u(T){return o?!1:T.wrapS!==tn||T.wrapT!==tn||T.minFilter!==Ft&&T.minFilter!==It}function M(T,E){return T.generateMipmaps&&E&&T.minFilter!==Ft&&T.minFilter!==It}function v(T){s.generateMipmap(T)}function S(T,E,G,te,ee=!1){if(o===!1)return E;if(T!==null){if(s[T]!==void 0)return s[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let ne=E;if(E===s.RED&&(G===s.FLOAT&&(ne=s.R32F),G===s.HALF_FLOAT&&(ne=s.R16F),G===s.UNSIGNED_BYTE&&(ne=s.R8)),E===s.RED_INTEGER&&(G===s.UNSIGNED_BYTE&&(ne=s.R8UI),G===s.UNSIGNED_SHORT&&(ne=s.R16UI),G===s.UNSIGNED_INT&&(ne=s.R32UI),G===s.BYTE&&(ne=s.R8I),G===s.SHORT&&(ne=s.R16I),G===s.INT&&(ne=s.R32I)),E===s.RG&&(G===s.FLOAT&&(ne=s.RG32F),G===s.HALF_FLOAT&&(ne=s.RG16F),G===s.UNSIGNED_BYTE&&(ne=s.RG8)),E===s.RGBA){const ve=ee?Ws:Qe.getTransfer(te);G===s.FLOAT&&(ne=s.RGBA32F),G===s.HALF_FLOAT&&(ne=s.RGBA16F),G===s.UNSIGNED_BYTE&&(ne=ve===st?s.SRGB8_ALPHA8:s.RGBA8),G===s.UNSIGNED_SHORT_4_4_4_4&&(ne=s.RGBA4),G===s.UNSIGNED_SHORT_5_5_5_1&&(ne=s.RGB5_A1)}return(ne===s.R16F||ne===s.R32F||ne===s.RG16F||ne===s.RG32F||ne===s.RGBA16F||ne===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function I(T,E,G){return M(T,G)===!0||T.isFramebufferTexture&&T.minFilter!==Ft&&T.minFilter!==It?Math.log2(Math.max(E.width,E.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?E.mipmaps.length:1}function A(T){return T===Ft||T===Ea||T===cr?s.NEAREST:s.LINEAR}function C(T){const E=T.target;E.removeEventListener("dispose",C),x(E),E.isVideoTexture&&h.delete(E)}function O(T){const E=T.target;E.removeEventListener("dispose",O),U(E)}function x(T){const E=n.get(T);if(E.__webglInit===void 0)return;const G=T.source,te=f.get(G);if(te){const ee=te[E.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&b(T),Object.keys(te).length===0&&f.delete(G)}n.remove(T)}function b(T){const E=n.get(T);s.deleteTexture(E.__webglTexture);const G=T.source,te=f.get(G);delete te[E.__cacheKey],a.memory.textures--}function U(T){const E=T.texture,G=n.get(T),te=n.get(E);if(te.__webglTexture!==void 0&&(s.deleteTexture(te.__webglTexture),a.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(G.__webglFramebuffer[ee]))for(let ne=0;ne<G.__webglFramebuffer[ee].length;ne++)s.deleteFramebuffer(G.__webglFramebuffer[ee][ne]);else s.deleteFramebuffer(G.__webglFramebuffer[ee]);G.__webglDepthbuffer&&s.deleteRenderbuffer(G.__webglDepthbuffer[ee])}else{if(Array.isArray(G.__webglFramebuffer))for(let ee=0;ee<G.__webglFramebuffer.length;ee++)s.deleteFramebuffer(G.__webglFramebuffer[ee]);else s.deleteFramebuffer(G.__webglFramebuffer);if(G.__webglDepthbuffer&&s.deleteRenderbuffer(G.__webglDepthbuffer),G.__webglMultisampledFramebuffer&&s.deleteFramebuffer(G.__webglMultisampledFramebuffer),G.__webglColorRenderbuffer)for(let ee=0;ee<G.__webglColorRenderbuffer.length;ee++)G.__webglColorRenderbuffer[ee]&&s.deleteRenderbuffer(G.__webglColorRenderbuffer[ee]);G.__webglDepthRenderbuffer&&s.deleteRenderbuffer(G.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let ee=0,ne=E.length;ee<ne;ee++){const ve=n.get(E[ee]);ve.__webglTexture&&(s.deleteTexture(ve.__webglTexture),a.memory.textures--),n.remove(E[ee])}n.remove(E),n.remove(T)}let F=0;function $(){F=0}function L(){const T=F;return T>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+i.maxTextures),F+=1,T}function N(T){const E=[];return E.push(T.wrapS),E.push(T.wrapT),E.push(T.wrapR||0),E.push(T.magFilter),E.push(T.minFilter),E.push(T.anisotropy),E.push(T.internalFormat),E.push(T.format),E.push(T.type),E.push(T.generateMipmaps),E.push(T.premultiplyAlpha),E.push(T.flipY),E.push(T.unpackAlignment),E.push(T.colorSpace),E.join()}function z(T,E){const G=n.get(T);if(T.isVideoTexture&&ot(T),T.isRenderTargetTexture===!1&&T.version>0&&G.__version!==T.version){const te=T.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{de(G,T,E);return}}t.bindTexture(s.TEXTURE_2D,G.__webglTexture,s.TEXTURE0+E)}function q(T,E){const G=n.get(T);if(T.version>0&&G.__version!==T.version){de(G,T,E);return}t.bindTexture(s.TEXTURE_2D_ARRAY,G.__webglTexture,s.TEXTURE0+E)}function Y(T,E){const G=n.get(T);if(T.version>0&&G.__version!==T.version){de(G,T,E);return}t.bindTexture(s.TEXTURE_3D,G.__webglTexture,s.TEXTURE0+E)}function Z(T,E){const G=n.get(T);if(T.version>0&&G.__version!==T.version){Me(G,T,E);return}t.bindTexture(s.TEXTURE_CUBE_MAP,G.__webglTexture,s.TEXTURE0+E)}const K={[si]:s.REPEAT,[tn]:s.CLAMP_TO_EDGE,[qr]:s.MIRRORED_REPEAT},ie={[Ft]:s.NEAREST,[Ea]:s.NEAREST_MIPMAP_NEAREST,[cr]:s.NEAREST_MIPMAP_LINEAR,[It]:s.LINEAR,[vl]:s.LINEAR_MIPMAP_NEAREST,[ns]:s.LINEAR_MIPMAP_LINEAR},se={[Il]:s.NEVER,[Nl]:s.ALWAYS,[Ll]:s.LESS,[cc]:s.LEQUAL,[Pl]:s.EQUAL,[Ol]:s.GEQUAL,[Dl]:s.GREATER,[Ul]:s.NOTEQUAL};function W(T,E,G){if(G?(s.texParameteri(T,s.TEXTURE_WRAP_S,K[E.wrapS]),s.texParameteri(T,s.TEXTURE_WRAP_T,K[E.wrapT]),(T===s.TEXTURE_3D||T===s.TEXTURE_2D_ARRAY)&&s.texParameteri(T,s.TEXTURE_WRAP_R,K[E.wrapR]),s.texParameteri(T,s.TEXTURE_MAG_FILTER,ie[E.magFilter]),s.texParameteri(T,s.TEXTURE_MIN_FILTER,ie[E.minFilter])):(s.texParameteri(T,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(T,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(T===s.TEXTURE_3D||T===s.TEXTURE_2D_ARRAY)&&s.texParameteri(T,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(E.wrapS!==tn||E.wrapT!==tn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(T,s.TEXTURE_MAG_FILTER,A(E.magFilter)),s.texParameteri(T,s.TEXTURE_MIN_FILTER,A(E.minFilter)),E.minFilter!==Ft&&E.minFilter!==It&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(s.texParameteri(T,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(T,s.TEXTURE_COMPARE_FUNC,se[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const te=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===Ft||E.minFilter!==cr&&E.minFilter!==ns||E.type===An&&e.has("OES_texture_float_linear")===!1||o===!1&&E.type===is&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||n.get(E).__currentAnisotropy)&&(s.texParameterf(T,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy)}}function J(T,E){let G=!1;T.__webglInit===void 0&&(T.__webglInit=!0,E.addEventListener("dispose",C));const te=E.source;let ee=f.get(te);ee===void 0&&(ee={},f.set(te,ee));const ne=N(E);if(ne!==T.__cacheKey){ee[ne]===void 0&&(ee[ne]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,G=!0),ee[ne].usedTimes++;const ve=ee[T.__cacheKey];ve!==void 0&&(ee[T.__cacheKey].usedTimes--,ve.usedTimes===0&&b(E)),T.__cacheKey=ne,T.__webglTexture=ee[ne].texture}return G}function de(T,E,G){let te=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(te=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(te=s.TEXTURE_3D);const ee=J(T,E),ne=E.source;t.bindTexture(te,T.__webglTexture,s.TEXTURE0+G);const ve=n.get(ne);if(ne.version!==ve.__version||ee===!0){t.activeTexture(s.TEXTURE0+G);const le=Qe.getPrimaries(Qe.workingColorSpace),pe=E.colorSpace===Zt?null:Qe.getPrimaries(E.colorSpace),Ae=E.colorSpace===Zt||le===pe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);const ke=u(E)&&p(E.image)===!1;let Q=g(E.image,ke,!1,i.maxTextureSize);Q=Ge(E,Q);const Ke=p(Q)||o,je=r.convert(E.format,E.colorSpace);let Le=r.convert(E.type),Se=S(E.internalFormat,je,Le,E.colorSpace,E.isVideoTexture);W(te,E,Ke);let me;const Fe=E.mipmaps,Ze=o&&E.isVideoTexture!==!0&&Se!==rc,ut=ve.__version===void 0||ee===!0,Ve=I(E,Q,Ke);if(E.isDepthTexture)Se=s.DEPTH_COMPONENT,o?E.type===An?Se=s.DEPTH_COMPONENT32F:E.type===Tn?Se=s.DEPTH_COMPONENT24:E.type===ri?Se=s.DEPTH24_STENCIL8:Se=s.DEPTH_COMPONENT16:E.type===An&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===ai&&Se===s.DEPTH_COMPONENT&&E.type!==na&&E.type!==Tn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=Tn,Le=r.convert(E.type)),E.format===Gi&&Se===s.DEPTH_COMPONENT&&(Se=s.DEPTH_STENCIL,E.type!==ri&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=ri,Le=r.convert(E.type))),ut&&(Ze?t.texStorage2D(s.TEXTURE_2D,1,Se,Q.width,Q.height):t.texImage2D(s.TEXTURE_2D,0,Se,Q.width,Q.height,0,je,Le,null));else if(E.isDataTexture)if(Fe.length>0&&Ke){Ze&&ut&&t.texStorage2D(s.TEXTURE_2D,Ve,Se,Fe[0].width,Fe[0].height);for(let re=0,P=Fe.length;re<P;re++)me=Fe[re],Ze?t.texSubImage2D(s.TEXTURE_2D,re,0,0,me.width,me.height,je,Le,me.data):t.texImage2D(s.TEXTURE_2D,re,Se,me.width,me.height,0,je,Le,me.data);E.generateMipmaps=!1}else Ze?(ut&&t.texStorage2D(s.TEXTURE_2D,Ve,Se,Q.width,Q.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,Q.width,Q.height,je,Le,Q.data)):t.texImage2D(s.TEXTURE_2D,0,Se,Q.width,Q.height,0,je,Le,Q.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ze&&ut&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ve,Se,Fe[0].width,Fe[0].height,Q.depth);for(let re=0,P=Fe.length;re<P;re++)me=Fe[re],E.format!==nn?je!==null?Ze?t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,re,0,0,0,me.width,me.height,Q.depth,je,me.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,re,Se,me.width,me.height,Q.depth,0,me.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?t.texSubImage3D(s.TEXTURE_2D_ARRAY,re,0,0,0,me.width,me.height,Q.depth,je,Le,me.data):t.texImage3D(s.TEXTURE_2D_ARRAY,re,Se,me.width,me.height,Q.depth,0,je,Le,me.data)}else{Ze&&ut&&t.texStorage2D(s.TEXTURE_2D,Ve,Se,Fe[0].width,Fe[0].height);for(let re=0,P=Fe.length;re<P;re++)me=Fe[re],E.format!==nn?je!==null?Ze?t.compressedTexSubImage2D(s.TEXTURE_2D,re,0,0,me.width,me.height,je,me.data):t.compressedTexImage2D(s.TEXTURE_2D,re,Se,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?t.texSubImage2D(s.TEXTURE_2D,re,0,0,me.width,me.height,je,Le,me.data):t.texImage2D(s.TEXTURE_2D,re,Se,me.width,me.height,0,je,Le,me.data)}else if(E.isDataArrayTexture)Ze?(ut&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ve,Se,Q.width,Q.height,Q.depth),t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,je,Le,Q.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,Se,Q.width,Q.height,Q.depth,0,je,Le,Q.data);else if(E.isData3DTexture)Ze?(ut&&t.texStorage3D(s.TEXTURE_3D,Ve,Se,Q.width,Q.height,Q.depth),t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,je,Le,Q.data)):t.texImage3D(s.TEXTURE_3D,0,Se,Q.width,Q.height,Q.depth,0,je,Le,Q.data);else if(E.isFramebufferTexture){if(ut)if(Ze)t.texStorage2D(s.TEXTURE_2D,Ve,Se,Q.width,Q.height);else{let re=Q.width,P=Q.height;for(let oe=0;oe<Ve;oe++)t.texImage2D(s.TEXTURE_2D,oe,Se,re,P,0,je,Le,null),re>>=1,P>>=1}}else if(Fe.length>0&&Ke){Ze&&ut&&t.texStorage2D(s.TEXTURE_2D,Ve,Se,Fe[0].width,Fe[0].height);for(let re=0,P=Fe.length;re<P;re++)me=Fe[re],Ze?t.texSubImage2D(s.TEXTURE_2D,re,0,0,je,Le,me):t.texImage2D(s.TEXTURE_2D,re,Se,je,Le,me);E.generateMipmaps=!1}else Ze?(ut&&t.texStorage2D(s.TEXTURE_2D,Ve,Se,Q.width,Q.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,je,Le,Q)):t.texImage2D(s.TEXTURE_2D,0,Se,je,Le,Q);M(E,Ke)&&v(te),ve.__version=ne.version,E.onUpdate&&E.onUpdate(E)}T.__version=E.version}function Me(T,E,G){if(E.image.length!==6)return;const te=J(T,E),ee=E.source;t.bindTexture(s.TEXTURE_CUBE_MAP,T.__webglTexture,s.TEXTURE0+G);const ne=n.get(ee);if(ee.version!==ne.__version||te===!0){t.activeTexture(s.TEXTURE0+G);const ve=Qe.getPrimaries(Qe.workingColorSpace),le=E.colorSpace===Zt?null:Qe.getPrimaries(E.colorSpace),pe=E.colorSpace===Zt||ve===le?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const Ae=E.isCompressedTexture||E.image[0].isCompressedTexture,ke=E.image[0]&&E.image[0].isDataTexture,Q=[];for(let re=0;re<6;re++)!Ae&&!ke?Q[re]=g(E.image[re],!1,!0,i.maxCubemapSize):Q[re]=ke?E.image[re].image:E.image[re],Q[re]=Ge(E,Q[re]);const Ke=Q[0],je=p(Ke)||o,Le=r.convert(E.format,E.colorSpace),Se=r.convert(E.type),me=S(E.internalFormat,Le,Se,E.colorSpace),Fe=o&&E.isVideoTexture!==!0,Ze=ne.__version===void 0||te===!0;let ut=I(E,Ke,je);W(s.TEXTURE_CUBE_MAP,E,je);let Ve;if(Ae){Fe&&Ze&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ut,me,Ke.width,Ke.height);for(let re=0;re<6;re++){Ve=Q[re].mipmaps;for(let P=0;P<Ve.length;P++){const oe=Ve[P];E.format!==nn?Le!==null?Fe?t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,P,0,0,oe.width,oe.height,Le,oe.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,P,me,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,P,0,0,oe.width,oe.height,Le,Se,oe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,P,me,oe.width,oe.height,0,Le,Se,oe.data)}}}else{Ve=E.mipmaps,Fe&&Ze&&(Ve.length>0&&ut++,t.texStorage2D(s.TEXTURE_CUBE_MAP,ut,me,Q[0].width,Q[0].height));for(let re=0;re<6;re++)if(ke){Fe?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Q[re].width,Q[re].height,Le,Se,Q[re].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,me,Q[re].width,Q[re].height,0,Le,Se,Q[re].data);for(let P=0;P<Ve.length;P++){const ce=Ve[P].image[re].image;Fe?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,P+1,0,0,ce.width,ce.height,Le,Se,ce.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,P+1,me,ce.width,ce.height,0,Le,Se,ce.data)}}else{Fe?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Le,Se,Q[re]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,me,Le,Se,Q[re]);for(let P=0;P<Ve.length;P++){const oe=Ve[P];Fe?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,P+1,0,0,Le,Se,oe.image[re]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,P+1,me,Le,Se,oe.image[re])}}}M(E,je)&&v(s.TEXTURE_CUBE_MAP),ne.__version=ee.version,E.onUpdate&&E.onUpdate(E)}T.__version=E.version}function Ee(T,E,G,te,ee,ne){const ve=r.convert(G.format,G.colorSpace),le=r.convert(G.type),pe=S(G.internalFormat,ve,le,G.colorSpace);if(!n.get(E).__hasExternalTextures){const ke=Math.max(1,E.width>>ne),Q=Math.max(1,E.height>>ne);ee===s.TEXTURE_3D||ee===s.TEXTURE_2D_ARRAY?t.texImage3D(ee,ne,pe,ke,Q,E.depth,0,ve,le,null):t.texImage2D(ee,ne,pe,ke,Q,0,ve,le,null)}t.bindFramebuffer(s.FRAMEBUFFER,T),_e(E)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,te,ee,n.get(G).__webglTexture,0,Pe(E)):(ee===s.TEXTURE_2D||ee>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,te,ee,n.get(G).__webglTexture,ne),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ue(T,E,G){if(s.bindRenderbuffer(s.RENDERBUFFER,T),E.depthBuffer&&!E.stencilBuffer){let te=o===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(G||_e(E)){const ee=E.depthTexture;ee&&ee.isDepthTexture&&(ee.type===An?te=s.DEPTH_COMPONENT32F:ee.type===Tn&&(te=s.DEPTH_COMPONENT24));const ne=Pe(E);_e(E)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ne,te,E.width,E.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,ne,te,E.width,E.height)}else s.renderbufferStorage(s.RENDERBUFFER,te,E.width,E.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,T)}else if(E.depthBuffer&&E.stencilBuffer){const te=Pe(E);G&&_e(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,te,s.DEPTH24_STENCIL8,E.width,E.height):_e(E)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,te,s.DEPTH24_STENCIL8,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,T)}else{const te=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let ee=0;ee<te.length;ee++){const ne=te[ee],ve=r.convert(ne.format,ne.colorSpace),le=r.convert(ne.type),pe=S(ne.internalFormat,ve,le,ne.colorSpace),Ae=Pe(E);G&&_e(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ae,pe,E.width,E.height):_e(E)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ae,pe,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,pe,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ne(T,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,T),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),z(E.depthTexture,0);const te=n.get(E.depthTexture).__webglTexture,ee=Pe(E);if(E.depthTexture.format===ai)_e(E)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,te,0,ee):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,te,0);else if(E.depthTexture.format===Gi)_e(E)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,te,0,ee):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function Ce(T){const E=n.get(T),G=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!E.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");Ne(E.__webglFramebuffer,T)}else if(G){E.__webglDepthbuffer=[];for(let te=0;te<6;te++)t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[te]),E.__webglDepthbuffer[te]=s.createRenderbuffer(),Ue(E.__webglDepthbuffer[te],T,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=s.createRenderbuffer(),Ue(E.__webglDepthbuffer,T,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ye(T,E,G){const te=n.get(T);E!==void 0&&Ee(te.__webglFramebuffer,T,T.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),G!==void 0&&Ce(T)}function B(T){const E=T.texture,G=n.get(T),te=n.get(E);T.addEventListener("dispose",O),T.isWebGLMultipleRenderTargets!==!0&&(te.__webglTexture===void 0&&(te.__webglTexture=s.createTexture()),te.__version=E.version,a.memory.textures++);const ee=T.isWebGLCubeRenderTarget===!0,ne=T.isWebGLMultipleRenderTargets===!0,ve=p(T)||o;if(ee){G.__webglFramebuffer=[];for(let le=0;le<6;le++)if(o&&E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer[le]=[];for(let pe=0;pe<E.mipmaps.length;pe++)G.__webglFramebuffer[le][pe]=s.createFramebuffer()}else G.__webglFramebuffer[le]=s.createFramebuffer()}else{if(o&&E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer=[];for(let le=0;le<E.mipmaps.length;le++)G.__webglFramebuffer[le]=s.createFramebuffer()}else G.__webglFramebuffer=s.createFramebuffer();if(ne)if(i.drawBuffers){const le=T.texture;for(let pe=0,Ae=le.length;pe<Ae;pe++){const ke=n.get(le[pe]);ke.__webglTexture===void 0&&(ke.__webglTexture=s.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&T.samples>0&&_e(T)===!1){const le=ne?E:[E];G.__webglMultisampledFramebuffer=s.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let pe=0;pe<le.length;pe++){const Ae=le[pe];G.__webglColorRenderbuffer[pe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,G.__webglColorRenderbuffer[pe]);const ke=r.convert(Ae.format,Ae.colorSpace),Q=r.convert(Ae.type),Ke=S(Ae.internalFormat,ke,Q,Ae.colorSpace,T.isXRRenderTarget===!0),je=Pe(T);s.renderbufferStorageMultisample(s.RENDERBUFFER,je,Ke,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pe,s.RENDERBUFFER,G.__webglColorRenderbuffer[pe])}s.bindRenderbuffer(s.RENDERBUFFER,null),T.depthBuffer&&(G.__webglDepthRenderbuffer=s.createRenderbuffer(),Ue(G.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ee){t.bindTexture(s.TEXTURE_CUBE_MAP,te.__webglTexture),W(s.TEXTURE_CUBE_MAP,E,ve);for(let le=0;le<6;le++)if(o&&E.mipmaps&&E.mipmaps.length>0)for(let pe=0;pe<E.mipmaps.length;pe++)Ee(G.__webglFramebuffer[le][pe],T,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+le,pe);else Ee(G.__webglFramebuffer[le],T,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);M(E,ve)&&v(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ne){const le=T.texture;for(let pe=0,Ae=le.length;pe<Ae;pe++){const ke=le[pe],Q=n.get(ke);t.bindTexture(s.TEXTURE_2D,Q.__webglTexture),W(s.TEXTURE_2D,ke,ve),Ee(G.__webglFramebuffer,T,ke,s.COLOR_ATTACHMENT0+pe,s.TEXTURE_2D,0),M(ke,ve)&&v(s.TEXTURE_2D)}t.unbindTexture()}else{let le=s.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(o?le=T.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(le,te.__webglTexture),W(le,E,ve),o&&E.mipmaps&&E.mipmaps.length>0)for(let pe=0;pe<E.mipmaps.length;pe++)Ee(G.__webglFramebuffer[pe],T,E,s.COLOR_ATTACHMENT0,le,pe);else Ee(G.__webglFramebuffer,T,E,s.COLOR_ATTACHMENT0,le,0);M(E,ve)&&v(le),t.unbindTexture()}T.depthBuffer&&Ce(T)}function Pt(T){const E=p(T)||o,G=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let te=0,ee=G.length;te<ee;te++){const ne=G[te];if(M(ne,E)){const ve=T.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,le=n.get(ne).__webglTexture;t.bindTexture(ve,le),v(ve),t.unbindTexture()}}}function ye(T){if(o&&T.samples>0&&_e(T)===!1){const E=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],G=T.width,te=T.height;let ee=s.COLOR_BUFFER_BIT;const ne=[],ve=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,le=n.get(T),pe=T.isWebGLMultipleRenderTargets===!0;if(pe)for(let Ae=0;Ae<E.length;Ae++)t.bindFramebuffer(s.FRAMEBUFFER,le.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,le.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let Ae=0;Ae<E.length;Ae++){ne.push(s.COLOR_ATTACHMENT0+Ae),T.depthBuffer&&ne.push(ve);const ke=le.__ignoreDepthValues!==void 0?le.__ignoreDepthValues:!1;if(ke===!1&&(T.depthBuffer&&(ee|=s.DEPTH_BUFFER_BIT),T.stencilBuffer&&(ee|=s.STENCIL_BUFFER_BIT)),pe&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,le.__webglColorRenderbuffer[Ae]),ke===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[ve]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[ve])),pe){const Q=n.get(E[Ae]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Q,0)}s.blitFramebuffer(0,0,G,te,0,0,G,te,ee,s.NEAREST),l&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ne)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),pe)for(let Ae=0;Ae<E.length;Ae++){t.bindFramebuffer(s.FRAMEBUFFER,le.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.RENDERBUFFER,le.__webglColorRenderbuffer[Ae]);const ke=n.get(E[Ae]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,le.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.TEXTURE_2D,ke,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}}function Pe(T){return Math.min(i.maxSamples,T.samples)}function _e(T){const E=n.get(T);return o&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function ot(T){const E=a.render.frame;h.get(T)!==E&&(h.set(T,E),T.update())}function Ge(T,E){const G=T.colorSpace,te=T.format,ee=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===$r||G!==vn&&G!==Zt&&(Qe.getTransfer(G)===st?o===!1?e.has("EXT_sRGB")===!0&&te===nn?(T.format=$r,T.minFilter=It,T.generateMipmaps=!1):E=hc.sRGBToLinear(E):(te!==nn||ee!==In)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),E}this.allocateTextureUnit=L,this.resetTextureUnits=$,this.setTexture2D=z,this.setTexture2DArray=q,this.setTexture3D=Y,this.setTextureCube=Z,this.rebindTextures=Ye,this.setupRenderTarget=B,this.updateRenderTargetMipmap=Pt,this.updateMultisampleRenderTarget=ye,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=_e}function Bp(s,e,t){const n=t.isWebGL2;function i(r,a=Zt){let o;const c=Qe.getTransfer(a);if(r===In)return s.UNSIGNED_BYTE;if(r===ec)return s.UNSIGNED_SHORT_4_4_4_4;if(r===tc)return s.UNSIGNED_SHORT_5_5_5_1;if(r===xl)return s.BYTE;if(r===El)return s.SHORT;if(r===na)return s.UNSIGNED_SHORT;if(r===Qo)return s.INT;if(r===Tn)return s.UNSIGNED_INT;if(r===An)return s.FLOAT;if(r===is)return n?s.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===Ml)return s.ALPHA;if(r===nn)return s.RGBA;if(r===Sl)return s.LUMINANCE;if(r===yl)return s.LUMINANCE_ALPHA;if(r===ai)return s.DEPTH_COMPONENT;if(r===Gi)return s.DEPTH_STENCIL;if(r===$r)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===bl)return s.RED;if(r===nc)return s.RED_INTEGER;if(r===Tl)return s.RG;if(r===ic)return s.RG_INTEGER;if(r===sc)return s.RGBA_INTEGER;if(r===lr||r===hr||r===dr||r===ur)if(c===st)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===lr)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===hr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===dr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ur)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===lr)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===hr)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===dr)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ur)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Ma||r===Sa||r===ya||r===ba)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Ma)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Sa)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===ya)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ba)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===rc)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Ta||r===Aa)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Ta)return c===st?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Aa)return c===st?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===wa||r===Ca||r===Ra||r===Ia||r===La||r===Pa||r===Da||r===Ua||r===Oa||r===Na||r===Fa||r===Ba||r===Ha||r===Ga)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===wa)return c===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ca)return c===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Ra)return c===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Ia)return c===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===La)return c===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Pa)return c===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Da)return c===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Ua)return c===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Oa)return c===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Na)return c===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Fa)return c===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ba)return c===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Ha)return c===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ga)return c===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===fr||r===ka||r===za)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===fr)return c===st?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===ka)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===za)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Al||r===Va||r===Wa||r===Xa)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===fr)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Va)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Wa)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Xa)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ri?n?s.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class Hp extends jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class $e extends _t{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Gp={type:"move"};class Br{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $e,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $e,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $e,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const g of e.hand.values()){const p=t.getJointPose(g,n),u=this._getHandJoint(l,g);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=h.position.distanceTo(d.position),m=.02,_=.005;l.inputState.pinching&&f>m+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=m-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Gp)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new $e;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class kp extends zi{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,d=null,f=null,m=null,_=null;const g=t.getContextAttributes();let p=null,u=null;const M=[],v=[],S=new we;let I=null;const A=new jt;A.layers.enable(1),A.viewport=new rt;const C=new jt;C.layers.enable(2),C.viewport=new rt;const O=[A,C],x=new Hp;x.layers.enable(1),x.layers.enable(2);let b=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let J=M[W];return J===void 0&&(J=new Br,M[W]=J),J.getTargetRaySpace()},this.getControllerGrip=function(W){let J=M[W];return J===void 0&&(J=new Br,M[W]=J),J.getGripSpace()},this.getHand=function(W){let J=M[W];return J===void 0&&(J=new Br,M[W]=J),J.getHandSpace()};function F(W){const J=v.indexOf(W.inputSource);if(J===-1)return;const de=M[J];de!==void 0&&(de.update(W.inputSource,W.frame,l||a),de.dispatchEvent({type:W.type,data:W.inputSource}))}function $(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",$),i.removeEventListener("inputsourceschange",L);for(let W=0;W<M.length;W++){const J=v[W];J!==null&&(v[W]=null,M[W].disconnect(J))}b=null,U=null,e.setRenderTarget(p),m=null,f=null,d=null,i=null,u=null,se.stop(),n.isPresenting=!1,e.setPixelRatio(I),e.setSize(S.width,S.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(W){l=W},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(W){if(i=W,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",$),i.addEventListener("inputsourceschange",L),g.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(S),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const J={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(i,t,J),i.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),u=new li(m.framebufferWidth,m.framebufferHeight,{format:nn,type:In,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let J=null,de=null,Me=null;g.depth&&(Me=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,J=g.stencil?Gi:ai,de=g.stencil?ri:Tn);const Ee={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:r};d=new XRWebGLBinding(i,t),f=d.createProjectionLayer(Ee),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),u=new li(f.textureWidth,f.textureHeight,{format:nn,type:In,depthTexture:new Mc(f.textureWidth,f.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const Ue=e.properties.get(u);Ue.__ignoreDepthValues=f.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),se.setContext(i),se.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function L(W){for(let J=0;J<W.removed.length;J++){const de=W.removed[J],Me=v.indexOf(de);Me>=0&&(v[Me]=null,M[Me].disconnect(de))}for(let J=0;J<W.added.length;J++){const de=W.added[J];let Me=v.indexOf(de);if(Me===-1){for(let Ue=0;Ue<M.length;Ue++)if(Ue>=v.length){v.push(de),Me=Ue;break}else if(v[Ue]===null){v[Ue]=de,Me=Ue;break}if(Me===-1)break}const Ee=M[Me];Ee&&Ee.connect(de)}}const N=new R,z=new R;function q(W,J,de){N.setFromMatrixPosition(J.matrixWorld),z.setFromMatrixPosition(de.matrixWorld);const Me=N.distanceTo(z),Ee=J.projectionMatrix.elements,Ue=de.projectionMatrix.elements,Ne=Ee[14]/(Ee[10]-1),Ce=Ee[14]/(Ee[10]+1),Ye=(Ee[9]+1)/Ee[5],B=(Ee[9]-1)/Ee[5],Pt=(Ee[8]-1)/Ee[0],ye=(Ue[8]+1)/Ue[0],Pe=Ne*Pt,_e=Ne*ye,ot=Me/(-Pt+ye),Ge=ot*-Pt;J.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Ge),W.translateZ(ot),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const T=Ne+ot,E=Ce+ot,G=Pe-Ge,te=_e+(Me-Ge),ee=Ye*Ce/E*T,ne=B*Ce/E*T;W.projectionMatrix.makePerspective(G,te,ee,ne,T,E),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function Y(W,J){J===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(J.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(i===null)return;x.near=C.near=A.near=W.near,x.far=C.far=A.far=W.far,(b!==x.near||U!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),b=x.near,U=x.far);const J=W.parent,de=x.cameras;Y(x,J);for(let Me=0;Me<de.length;Me++)Y(de[Me],J);de.length===2?q(x,A,C):x.projectionMatrix.copy(A.projectionMatrix),Z(W,x,J)};function Z(W,J,de){de===null?W.matrix.copy(J.matrixWorld):(W.matrix.copy(de.matrixWorld),W.matrix.invert(),W.matrix.multiply(J.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(J.projectionMatrix),W.projectionMatrixInverse.copy(J.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Zr*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&m===null))return c},this.setFoveation=function(W){c=W,f!==null&&(f.fixedFoveation=W),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=W)};let K=null;function ie(W,J){if(h=J.getViewerPose(l||a),_=J,h!==null){const de=h.views;m!==null&&(e.setRenderTargetFramebuffer(u,m.framebuffer),e.setRenderTarget(u));let Me=!1;de.length!==x.cameras.length&&(x.cameras.length=0,Me=!0);for(let Ee=0;Ee<de.length;Ee++){const Ue=de[Ee];let Ne=null;if(m!==null)Ne=m.getViewport(Ue);else{const Ye=d.getViewSubImage(f,Ue);Ne=Ye.viewport,Ee===0&&(e.setRenderTargetTextures(u,Ye.colorTexture,f.ignoreDepthValues?void 0:Ye.depthStencilTexture),e.setRenderTarget(u))}let Ce=O[Ee];Ce===void 0&&(Ce=new jt,Ce.layers.enable(Ee),Ce.viewport=new rt,O[Ee]=Ce),Ce.matrix.fromArray(Ue.transform.matrix),Ce.matrix.decompose(Ce.position,Ce.quaternion,Ce.scale),Ce.projectionMatrix.fromArray(Ue.projectionMatrix),Ce.projectionMatrixInverse.copy(Ce.projectionMatrix).invert(),Ce.viewport.set(Ne.x,Ne.y,Ne.width,Ne.height),Ee===0&&(x.matrix.copy(Ce.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),Me===!0&&x.cameras.push(Ce)}}for(let de=0;de<M.length;de++){const Me=v[de],Ee=M[de];Me!==null&&Ee!==void 0&&Ee.update(Me,J,l||a)}K&&K(W,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),_=null}const se=new xc;se.setAnimationLoop(ie),this.setAnimationLoop=function(W){K=W},this.dispose=function(){}}}function zp(s,e){function t(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function n(p,u){u.color.getRGB(p.fogColor.value,gc(s)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function i(p,u,M,v,S){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(p,u):u.isMeshToonMaterial?(r(p,u),d(p,u)):u.isMeshPhongMaterial?(r(p,u),h(p,u)):u.isMeshStandardMaterial?(r(p,u),f(p,u),u.isMeshPhysicalMaterial&&m(p,u,S)):u.isMeshMatcapMaterial?(r(p,u),_(p,u)):u.isMeshDepthMaterial?r(p,u):u.isMeshDistanceMaterial?(r(p,u),g(p,u)):u.isMeshNormalMaterial?r(p,u):u.isLineBasicMaterial?(a(p,u),u.isLineDashedMaterial&&o(p,u)):u.isPointsMaterial?c(p,u,M,v):u.isSpriteMaterial?l(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,t(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===Gt&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,t(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===Gt&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,t(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,t(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const M=e.get(u).envMap;if(M&&(p.envMap.value=M,p.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap){p.lightMap.value=u.lightMap;const v=s._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=u.lightMapIntensity*v,t(u.lightMap,p.lightMapTransform)}u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,p.aoMapTransform))}function a(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform))}function o(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function c(p,u,M,v){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*M,p.scale.value=v*.5,u.map&&(p.map.value=u.map,t(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function l(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function h(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function d(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function f(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,p.roughnessMapTransform)),e.get(u).envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,M){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Gt&&p.clearcoatNormalScale.value.negate())),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,u){u.matcap&&(p.matcap.value=u.matcap)}function g(p,u){const M=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Vp(s,e,t,n){let i={},r={},a=[];const o=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(M,v){const S=v.program;n.uniformBlockBinding(M,S)}function l(M,v){let S=i[M.id];S===void 0&&(_(M),S=h(M),i[M.id]=S,M.addEventListener("dispose",p));const I=v.program;n.updateUBOMapping(M,I);const A=e.render.frame;r[M.id]!==A&&(f(M),r[M.id]=A)}function h(M){const v=d();M.__bindingPointIndex=v;const S=s.createBuffer(),I=M.__size,A=M.usage;return s.bindBuffer(s.UNIFORM_BUFFER,S),s.bufferData(s.UNIFORM_BUFFER,I,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,S),S}function d(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const v=i[M.id],S=M.uniforms,I=M.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let A=0,C=S.length;A<C;A++){const O=Array.isArray(S[A])?S[A]:[S[A]];for(let x=0,b=O.length;x<b;x++){const U=O[x];if(m(U,A,x,I)===!0){const F=U.__offset,$=Array.isArray(U.value)?U.value:[U.value];let L=0;for(let N=0;N<$.length;N++){const z=$[N],q=g(z);typeof z=="number"||typeof z=="boolean"?(U.__data[0]=z,s.bufferSubData(s.UNIFORM_BUFFER,F+L,U.__data)):z.isMatrix3?(U.__data[0]=z.elements[0],U.__data[1]=z.elements[1],U.__data[2]=z.elements[2],U.__data[3]=0,U.__data[4]=z.elements[3],U.__data[5]=z.elements[4],U.__data[6]=z.elements[5],U.__data[7]=0,U.__data[8]=z.elements[6],U.__data[9]=z.elements[7],U.__data[10]=z.elements[8],U.__data[11]=0):(z.toArray(U.__data,L),L+=q.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,F,U.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function m(M,v,S,I){const A=M.value,C=v+"_"+S;if(I[C]===void 0)return typeof A=="number"||typeof A=="boolean"?I[C]=A:I[C]=A.clone(),!0;{const O=I[C];if(typeof A=="number"||typeof A=="boolean"){if(O!==A)return I[C]=A,!0}else if(O.equals(A)===!1)return O.copy(A),!0}return!1}function _(M){const v=M.uniforms;let S=0;const I=16;for(let C=0,O=v.length;C<O;C++){const x=Array.isArray(v[C])?v[C]:[v[C]];for(let b=0,U=x.length;b<U;b++){const F=x[b],$=Array.isArray(F.value)?F.value:[F.value];for(let L=0,N=$.length;L<N;L++){const z=$[L],q=g(z),Y=S%I;Y!==0&&I-Y<q.boundary&&(S+=I-Y),F.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=S,S+=q.storage}}}const A=S%I;return A>0&&(S+=I-A),M.__size=S,M.__cache={},this}function g(M){const v={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(v.boundary=4,v.storage=4):M.isVector2?(v.boundary=8,v.storage=8):M.isVector3||M.isColor?(v.boundary=16,v.storage=12):M.isVector4?(v.boundary=16,v.storage=16):M.isMatrix3?(v.boundary=48,v.storage=48):M.isMatrix4?(v.boundary=64,v.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),v}function p(M){const v=M.target;v.removeEventListener("dispose",p);const S=a.indexOf(v.__bindingPointIndex);a.splice(S,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function u(){for(const M in i)s.deleteBuffer(i[M]);a=[],i={},r={}}return{bind:c,update:l,dispose:u}}class wc{constructor(e={}){const{canvas:t=Bl(),context:n=null,depth:i=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=a;const m=new Uint32Array(4),_=new Int32Array(4);let g=null,p=null;const u=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Tt,this._useLegacyLights=!1,this.toneMapping=Rn,this.toneMappingExposure=1;const v=this;let S=!1,I=0,A=0,C=null,O=-1,x=null;const b=new rt,U=new rt;let F=null;const $=new He(0);let L=0,N=t.width,z=t.height,q=1,Y=null,Z=null;const K=new rt(0,0,N,z),ie=new rt(0,0,N,z);let se=!1;const W=new ra;let J=!1,de=!1,Me=null;const Ee=new at,Ue=new we,Ne=new R,Ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ye(){return C===null?q:1}let B=n;function Pt(y,D){for(let k=0;k<y.length;k++){const V=y[k],H=t.getContext(V,D);if(H!==null)return H}return null}try{const y={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ta}`),t.addEventListener("webglcontextlost",re,!1),t.addEventListener("webglcontextrestored",P,!1),t.addEventListener("webglcontextcreationerror",oe,!1),B===null){const D=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&D.shift(),B=Pt(D,y),B===null)throw Pt(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&B instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),B.getShaderPrecisionFormat===void 0&&(B.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let ye,Pe,_e,ot,Ge,T,E,G,te,ee,ne,ve,le,pe,Ae,ke,Q,Ke,je,Le,Se,me,Fe,Ze;function ut(){ye=new Ju(B),Pe=new ju(B,ye,e),ye.init(Pe),me=new Bp(B,ye,Pe),_e=new Np(B,ye,Pe),ot=new tf(B),Ge=new Sp,T=new Fp(B,ye,_e,Ge,Pe,me,ot),E=new Yu(v),G=new Ku(v),te=new lh(B,Pe),Fe=new Wu(B,ye,te,Pe),ee=new Qu(B,te,ot,Fe),ne=new af(B,ee,te,ot),je=new rf(B,Pe,T),ke=new qu(Ge),ve=new Mp(v,E,G,ye,Pe,Fe,ke),le=new zp(v,Ge),pe=new bp,Ae=new Ip(ye,Pe),Ke=new Vu(v,E,G,_e,ne,f,c),Q=new Op(v,ne,Pe),Ze=new Vp(B,ot,Pe,_e),Le=new Xu(B,ye,ot,Pe),Se=new ef(B,ye,ot,Pe),ot.programs=ve.programs,v.capabilities=Pe,v.extensions=ye,v.properties=Ge,v.renderLists=pe,v.shadowMap=Q,v.state=_e,v.info=ot}ut();const Ve=new kp(v,B);this.xr=Ve,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const y=ye.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=ye.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(y){y!==void 0&&(q=y,this.setSize(N,z,!1))},this.getSize=function(y){return y.set(N,z)},this.setSize=function(y,D,k=!0){if(Ve.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=y,z=D,t.width=Math.floor(y*q),t.height=Math.floor(D*q),k===!0&&(t.style.width=y+"px",t.style.height=D+"px"),this.setViewport(0,0,y,D)},this.getDrawingBufferSize=function(y){return y.set(N*q,z*q).floor()},this.setDrawingBufferSize=function(y,D,k){N=y,z=D,q=k,t.width=Math.floor(y*k),t.height=Math.floor(D*k),this.setViewport(0,0,y,D)},this.getCurrentViewport=function(y){return y.copy(b)},this.getViewport=function(y){return y.copy(K)},this.setViewport=function(y,D,k,V){y.isVector4?K.set(y.x,y.y,y.z,y.w):K.set(y,D,k,V),_e.viewport(b.copy(K).multiplyScalar(q).floor())},this.getScissor=function(y){return y.copy(ie)},this.setScissor=function(y,D,k,V){y.isVector4?ie.set(y.x,y.y,y.z,y.w):ie.set(y,D,k,V),_e.scissor(U.copy(ie).multiplyScalar(q).floor())},this.getScissorTest=function(){return se},this.setScissorTest=function(y){_e.setScissorTest(se=y)},this.setOpaqueSort=function(y){Y=y},this.setTransparentSort=function(y){Z=y},this.getClearColor=function(y){return y.copy(Ke.getClearColor())},this.setClearColor=function(){Ke.setClearColor.apply(Ke,arguments)},this.getClearAlpha=function(){return Ke.getClearAlpha()},this.setClearAlpha=function(){Ke.setClearAlpha.apply(Ke,arguments)},this.clear=function(y=!0,D=!0,k=!0){let V=0;if(y){let H=!1;if(C!==null){const ue=C.texture.format;H=ue===sc||ue===ic||ue===nc}if(H){const ue=C.texture.type,xe=ue===In||ue===Tn||ue===na||ue===ri||ue===ec||ue===tc,Te=Ke.getClearColor(),Ie=Ke.getClearAlpha(),ze=Te.r,De=Te.g,Oe=Te.b;xe?(m[0]=ze,m[1]=De,m[2]=Oe,m[3]=Ie,B.clearBufferuiv(B.COLOR,0,m)):(_[0]=ze,_[1]=De,_[2]=Oe,_[3]=Ie,B.clearBufferiv(B.COLOR,0,_))}else V|=B.COLOR_BUFFER_BIT}D&&(V|=B.DEPTH_BUFFER_BIT),k&&(V|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",re,!1),t.removeEventListener("webglcontextrestored",P,!1),t.removeEventListener("webglcontextcreationerror",oe,!1),pe.dispose(),Ae.dispose(),Ge.dispose(),E.dispose(),G.dispose(),ne.dispose(),Fe.dispose(),Ze.dispose(),ve.dispose(),Ve.dispose(),Ve.removeEventListener("sessionstart",Dt),Ve.removeEventListener("sessionend",it),Me&&(Me.dispose(),Me=null),Ut.stop()};function re(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function P(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const y=ot.autoReset,D=Q.enabled,k=Q.autoUpdate,V=Q.needsUpdate,H=Q.type;ut(),ot.autoReset=y,Q.enabled=D,Q.autoUpdate=k,Q.needsUpdate=V,Q.type=H}function oe(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function ce(y){const D=y.target;D.removeEventListener("dispose",ce),Re(D)}function Re(y){be(y),Ge.remove(y)}function be(y){const D=Ge.get(y).programs;D!==void 0&&(D.forEach(function(k){ve.releaseProgram(k)}),y.isShaderMaterial&&ve.releaseShaderCache(y))}this.renderBufferDirect=function(y,D,k,V,H,ue){D===null&&(D=Ce);const xe=H.isMesh&&H.matrixWorld.determinant()<0,Te=Uc(y,D,k,V,H);_e.setMaterial(V,xe);let Ie=k.index,ze=1;if(V.wireframe===!0){if(Ie=ee.getWireframeAttribute(k),Ie===void 0)return;ze=2}const De=k.drawRange,Oe=k.attributes.position;let mt=De.start*ze,zt=(De.start+De.count)*ze;ue!==null&&(mt=Math.max(mt,ue.start*ze),zt=Math.min(zt,(ue.start+ue.count)*ze)),Ie!==null?(mt=Math.max(mt,0),zt=Math.min(zt,Ie.count)):Oe!=null&&(mt=Math.max(mt,0),zt=Math.min(zt,Oe.count));const St=zt-mt;if(St<0||St===1/0)return;Fe.setup(H,V,Te,k,Ie);let on,ct=Le;if(Ie!==null&&(on=te.get(Ie),ct=Se,ct.setIndex(on)),H.isMesh)V.wireframe===!0?(_e.setLineWidth(V.wireframeLinewidth*Ye()),ct.setMode(B.LINES)):ct.setMode(B.TRIANGLES);else if(H.isLine){let We=V.linewidth;We===void 0&&(We=1),_e.setLineWidth(We*Ye()),H.isLineSegments?ct.setMode(B.LINES):H.isLineLoop?ct.setMode(B.LINE_LOOP):ct.setMode(B.LINE_STRIP)}else H.isPoints?ct.setMode(B.POINTS):H.isSprite&&ct.setMode(B.TRIANGLES);if(H.isBatchedMesh)ct.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else if(H.isInstancedMesh)ct.renderInstances(mt,St,H.count);else if(k.isInstancedBufferGeometry){const We=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,sr=Math.min(k.instanceCount,We);ct.renderInstances(mt,St,sr)}else ct.render(mt,St)};function tt(y,D,k){y.transparent===!0&&y.side===Lt&&y.forceSinglePass===!1?(y.side=Gt,y.needsUpdate=!0,us(y,D,k),y.side=Pn,y.needsUpdate=!0,us(y,D,k),y.side=Lt):us(y,D,k)}this.compile=function(y,D,k=null){k===null&&(k=y),p=Ae.get(k),p.init(),M.push(p),k.traverseVisible(function(H){H.isLight&&H.layers.test(D.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),y!==k&&y.traverseVisible(function(H){H.isLight&&H.layers.test(D.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),p.setupLights(v._useLegacyLights);const V=new Set;return y.traverse(function(H){const ue=H.material;if(ue)if(Array.isArray(ue))for(let xe=0;xe<ue.length;xe++){const Te=ue[xe];tt(Te,k,H),V.add(Te)}else tt(ue,k,H),V.add(ue)}),M.pop(),p=null,V},this.compileAsync=function(y,D,k=null){const V=this.compile(y,D,k);return new Promise(H=>{function ue(){if(V.forEach(function(xe){Ge.get(xe).currentProgram.isReady()&&V.delete(xe)}),V.size===0){H(y);return}setTimeout(ue,10)}ye.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let nt=null;function Mt(y){nt&&nt(y)}function Dt(){Ut.stop()}function it(){Ut.start()}const Ut=new xc;Ut.setAnimationLoop(Mt),typeof self<"u"&&Ut.setContext(self),this.setAnimationLoop=function(y){nt=y,Ve.setAnimationLoop(y),y===null?Ut.stop():Ut.start()},Ve.addEventListener("sessionstart",Dt),Ve.addEventListener("sessionend",it),this.render=function(y,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Ve.enabled===!0&&Ve.isPresenting===!0&&(Ve.cameraAutoUpdate===!0&&Ve.updateCamera(D),D=Ve.getCamera()),y.isScene===!0&&y.onBeforeRender(v,y,D,C),p=Ae.get(y,M.length),p.init(),M.push(p),Ee.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),W.setFromProjectionMatrix(Ee),de=this.localClippingEnabled,J=ke.init(this.clippingPlanes,de),g=pe.get(y,u.length),g.init(),u.push(g),rn(y,D,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(Y,Z),this.info.render.frame++,J===!0&&ke.beginShadows();const k=p.state.shadowsArray;if(Q.render(k,y,D),J===!0&&ke.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ke.render(g,y),p.setupLights(v._useLegacyLights),D.isArrayCamera){const V=D.cameras;for(let H=0,ue=V.length;H<ue;H++){const xe=V[H];ca(g,y,xe,xe.viewport)}}else ca(g,y,D);C!==null&&(T.updateMultisampleRenderTarget(C),T.updateRenderTargetMipmap(C)),y.isScene===!0&&y.onAfterRender(v,y,D),Fe.resetDefaultState(),O=-1,x=null,M.pop(),M.length>0?p=M[M.length-1]:p=null,u.pop(),u.length>0?g=u[u.length-1]:g=null};function rn(y,D,k,V){if(y.visible===!1)return;if(y.layers.test(D.layers)){if(y.isGroup)k=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(D);else if(y.isLight)p.pushLight(y),y.castShadow&&p.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||W.intersectsSprite(y)){V&&Ne.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Ee);const xe=ne.update(y),Te=y.material;Te.visible&&g.push(y,xe,Te,k,Ne.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||W.intersectsObject(y))){const xe=ne.update(y),Te=y.material;if(V&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Ne.copy(y.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),Ne.copy(xe.boundingSphere.center)),Ne.applyMatrix4(y.matrixWorld).applyMatrix4(Ee)),Array.isArray(Te)){const Ie=xe.groups;for(let ze=0,De=Ie.length;ze<De;ze++){const Oe=Ie[ze],mt=Te[Oe.materialIndex];mt&&mt.visible&&g.push(y,xe,mt,k,Ne.z,Oe)}}else Te.visible&&g.push(y,xe,Te,k,Ne.z,null)}}const ue=y.children;for(let xe=0,Te=ue.length;xe<Te;xe++)rn(ue[xe],D,k,V)}function ca(y,D,k,V){const H=y.opaque,ue=y.transmissive,xe=y.transparent;p.setupLightsView(k),J===!0&&ke.setGlobalState(v.clippingPlanes,k),ue.length>0&&Dc(H,ue,D,k),V&&_e.viewport(b.copy(V)),H.length>0&&ds(H,D,k),ue.length>0&&ds(ue,D,k),xe.length>0&&ds(xe,D,k),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function Dc(y,D,k,V){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;const ue=Pe.isWebGL2;Me===null&&(Me=new li(1,1,{generateMipmaps:!0,type:ye.has("EXT_color_buffer_half_float")?is:In,minFilter:ns,samples:ue?4:0})),v.getDrawingBufferSize(Ue),ue?Me.setSize(Ue.x,Ue.y):Me.setSize(Kr(Ue.x),Kr(Ue.y));const xe=v.getRenderTarget();v.setRenderTarget(Me),v.getClearColor($),L=v.getClearAlpha(),L<1&&v.setClearColor(16777215,.5),v.clear();const Te=v.toneMapping;v.toneMapping=Rn,ds(y,k,V),T.updateMultisampleRenderTarget(Me),T.updateRenderTargetMipmap(Me);let Ie=!1;for(let ze=0,De=D.length;ze<De;ze++){const Oe=D[ze],mt=Oe.object,zt=Oe.geometry,St=Oe.material,on=Oe.group;if(St.side===Lt&&mt.layers.test(V.layers)){const ct=St.side;St.side=Gt,St.needsUpdate=!0,la(mt,k,V,zt,St,on),St.side=ct,St.needsUpdate=!0,Ie=!0}}Ie===!0&&(T.updateMultisampleRenderTarget(Me),T.updateRenderTargetMipmap(Me)),v.setRenderTarget(xe),v.setClearColor($,L),v.toneMapping=Te}function ds(y,D,k){const V=D.isScene===!0?D.overrideMaterial:null;for(let H=0,ue=y.length;H<ue;H++){const xe=y[H],Te=xe.object,Ie=xe.geometry,ze=V===null?xe.material:V,De=xe.group;Te.layers.test(k.layers)&&la(Te,D,k,Ie,ze,De)}}function la(y,D,k,V,H,ue){y.onBeforeRender(v,D,k,V,H,ue),y.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),H.onBeforeRender(v,D,k,V,y,ue),H.transparent===!0&&H.side===Lt&&H.forceSinglePass===!1?(H.side=Gt,H.needsUpdate=!0,v.renderBufferDirect(k,D,V,H,y,ue),H.side=Pn,H.needsUpdate=!0,v.renderBufferDirect(k,D,V,H,y,ue),H.side=Lt):v.renderBufferDirect(k,D,V,H,y,ue),y.onAfterRender(v,D,k,V,H,ue)}function us(y,D,k){D.isScene!==!0&&(D=Ce);const V=Ge.get(y),H=p.state.lights,ue=p.state.shadowsArray,xe=H.state.version,Te=ve.getParameters(y,H.state,ue,D,k),Ie=ve.getProgramCacheKey(Te);let ze=V.programs;V.environment=y.isMeshStandardMaterial?D.environment:null,V.fog=D.fog,V.envMap=(y.isMeshStandardMaterial?G:E).get(y.envMap||V.environment),ze===void 0&&(y.addEventListener("dispose",ce),ze=new Map,V.programs=ze);let De=ze.get(Ie);if(De!==void 0){if(V.currentProgram===De&&V.lightsStateVersion===xe)return da(y,Te),De}else Te.uniforms=ve.getUniforms(y),y.onBuild(k,Te,v),y.onBeforeCompile(Te,v),De=ve.acquireProgram(Te,Ie),ze.set(Ie,De),V.uniforms=Te.uniforms;const Oe=V.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Oe.clippingPlanes=ke.uniform),da(y,Te),V.needsLights=Nc(y),V.lightsStateVersion=xe,V.needsLights&&(Oe.ambientLightColor.value=H.state.ambient,Oe.lightProbe.value=H.state.probe,Oe.directionalLights.value=H.state.directional,Oe.directionalLightShadows.value=H.state.directionalShadow,Oe.spotLights.value=H.state.spot,Oe.spotLightShadows.value=H.state.spotShadow,Oe.rectAreaLights.value=H.state.rectArea,Oe.ltc_1.value=H.state.rectAreaLTC1,Oe.ltc_2.value=H.state.rectAreaLTC2,Oe.pointLights.value=H.state.point,Oe.pointLightShadows.value=H.state.pointShadow,Oe.hemisphereLights.value=H.state.hemi,Oe.directionalShadowMap.value=H.state.directionalShadowMap,Oe.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Oe.spotShadowMap.value=H.state.spotShadowMap,Oe.spotLightMatrix.value=H.state.spotLightMatrix,Oe.spotLightMap.value=H.state.spotLightMap,Oe.pointShadowMap.value=H.state.pointShadowMap,Oe.pointShadowMatrix.value=H.state.pointShadowMatrix),V.currentProgram=De,V.uniformsList=null,De}function ha(y){if(y.uniformsList===null){const D=y.currentProgram.getUniforms();y.uniformsList=ks.seqWithValue(D.seq,y.uniforms)}return y.uniformsList}function da(y,D){const k=Ge.get(y);k.outputColorSpace=D.outputColorSpace,k.batching=D.batching,k.instancing=D.instancing,k.instancingColor=D.instancingColor,k.skinning=D.skinning,k.morphTargets=D.morphTargets,k.morphNormals=D.morphNormals,k.morphColors=D.morphColors,k.morphTargetsCount=D.morphTargetsCount,k.numClippingPlanes=D.numClippingPlanes,k.numIntersection=D.numClipIntersection,k.vertexAlphas=D.vertexAlphas,k.vertexTangents=D.vertexTangents,k.toneMapping=D.toneMapping}function Uc(y,D,k,V,H){D.isScene!==!0&&(D=Ce),T.resetTextureUnits();const ue=D.fog,xe=V.isMeshStandardMaterial?D.environment:null,Te=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:vn,Ie=(V.isMeshStandardMaterial?G:E).get(V.envMap||xe),ze=V.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,De=!!k.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Oe=!!k.morphAttributes.position,mt=!!k.morphAttributes.normal,zt=!!k.morphAttributes.color;let St=Rn;V.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(St=v.toneMapping);const on=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,ct=on!==void 0?on.length:0,We=Ge.get(V),sr=p.state.lights;if(J===!0&&(de===!0||y!==x)){const qt=y===x&&V.id===O;ke.setState(V,y,qt)}let ft=!1;V.version===We.__version?(We.needsLights&&We.lightsStateVersion!==sr.state.version||We.outputColorSpace!==Te||H.isBatchedMesh&&We.batching===!1||!H.isBatchedMesh&&We.batching===!0||H.isInstancedMesh&&We.instancing===!1||!H.isInstancedMesh&&We.instancing===!0||H.isSkinnedMesh&&We.skinning===!1||!H.isSkinnedMesh&&We.skinning===!0||H.isInstancedMesh&&We.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&We.instancingColor===!1&&H.instanceColor!==null||We.envMap!==Ie||V.fog===!0&&We.fog!==ue||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==ke.numPlanes||We.numIntersection!==ke.numIntersection)||We.vertexAlphas!==ze||We.vertexTangents!==De||We.morphTargets!==Oe||We.morphNormals!==mt||We.morphColors!==zt||We.toneMapping!==St||Pe.isWebGL2===!0&&We.morphTargetsCount!==ct)&&(ft=!0):(ft=!0,We.__version=V.version);let On=We.currentProgram;ft===!0&&(On=us(V,D,H));let ua=!1,Wi=!1,rr=!1;const wt=On.getUniforms(),Nn=We.uniforms;if(_e.useProgram(On.program)&&(ua=!0,Wi=!0,rr=!0),V.id!==O&&(O=V.id,Wi=!0),ua||x!==y){wt.setValue(B,"projectionMatrix",y.projectionMatrix),wt.setValue(B,"viewMatrix",y.matrixWorldInverse);const qt=wt.map.cameraPosition;qt!==void 0&&qt.setValue(B,Ne.setFromMatrixPosition(y.matrixWorld)),Pe.logarithmicDepthBuffer&&wt.setValue(B,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&wt.setValue(B,"isOrthographic",y.isOrthographicCamera===!0),x!==y&&(x=y,Wi=!0,rr=!0)}if(H.isSkinnedMesh){wt.setOptional(B,H,"bindMatrix"),wt.setOptional(B,H,"bindMatrixInverse");const qt=H.skeleton;qt&&(Pe.floatVertexTextures?(qt.boneTexture===null&&qt.computeBoneTexture(),wt.setValue(B,"boneTexture",qt.boneTexture,T)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}H.isBatchedMesh&&(wt.setOptional(B,H,"batchingTexture"),wt.setValue(B,"batchingTexture",H._matricesTexture,T));const ar=k.morphAttributes;if((ar.position!==void 0||ar.normal!==void 0||ar.color!==void 0&&Pe.isWebGL2===!0)&&je.update(H,k,On),(Wi||We.receiveShadow!==H.receiveShadow)&&(We.receiveShadow=H.receiveShadow,wt.setValue(B,"receiveShadow",H.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Nn.envMap.value=Ie,Nn.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),Wi&&(wt.setValue(B,"toneMappingExposure",v.toneMappingExposure),We.needsLights&&Oc(Nn,rr),ue&&V.fog===!0&&le.refreshFogUniforms(Nn,ue),le.refreshMaterialUniforms(Nn,V,q,z,Me),ks.upload(B,ha(We),Nn,T)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(ks.upload(B,ha(We),Nn,T),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&wt.setValue(B,"center",H.center),wt.setValue(B,"modelViewMatrix",H.modelViewMatrix),wt.setValue(B,"normalMatrix",H.normalMatrix),wt.setValue(B,"modelMatrix",H.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const qt=V.uniformsGroups;for(let or=0,Fc=qt.length;or<Fc;or++)if(Pe.isWebGL2){const fa=qt[or];Ze.update(fa,On),Ze.bind(fa,On)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return On}function Oc(y,D){y.ambientLightColor.needsUpdate=D,y.lightProbe.needsUpdate=D,y.directionalLights.needsUpdate=D,y.directionalLightShadows.needsUpdate=D,y.pointLights.needsUpdate=D,y.pointLightShadows.needsUpdate=D,y.spotLights.needsUpdate=D,y.spotLightShadows.needsUpdate=D,y.rectAreaLights.needsUpdate=D,y.hemisphereLights.needsUpdate=D}function Nc(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(y,D,k){Ge.get(y.texture).__webglTexture=D,Ge.get(y.depthTexture).__webglTexture=k;const V=Ge.get(y);V.__hasExternalTextures=!0,V.__hasExternalTextures&&(V.__autoAllocateDepthBuffer=k===void 0,V.__autoAllocateDepthBuffer||ye.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(y,D){const k=Ge.get(y);k.__webglFramebuffer=D,k.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(y,D=0,k=0){C=y,I=D,A=k;let V=!0,H=null,ue=!1,xe=!1;if(y){const Ie=Ge.get(y);Ie.__useDefaultFramebuffer!==void 0?(_e.bindFramebuffer(B.FRAMEBUFFER,null),V=!1):Ie.__webglFramebuffer===void 0?T.setupRenderTarget(y):Ie.__hasExternalTextures&&T.rebindTextures(y,Ge.get(y.texture).__webglTexture,Ge.get(y.depthTexture).__webglTexture);const ze=y.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(xe=!0);const De=Ge.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(De[D])?H=De[D][k]:H=De[D],ue=!0):Pe.isWebGL2&&y.samples>0&&T.useMultisampledRTT(y)===!1?H=Ge.get(y).__webglMultisampledFramebuffer:Array.isArray(De)?H=De[k]:H=De,b.copy(y.viewport),U.copy(y.scissor),F=y.scissorTest}else b.copy(K).multiplyScalar(q).floor(),U.copy(ie).multiplyScalar(q).floor(),F=se;if(_e.bindFramebuffer(B.FRAMEBUFFER,H)&&Pe.drawBuffers&&V&&_e.drawBuffers(y,H),_e.viewport(b),_e.scissor(U),_e.setScissorTest(F),ue){const Ie=Ge.get(y.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+D,Ie.__webglTexture,k)}else if(xe){const Ie=Ge.get(y.texture),ze=D||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ie.__webglTexture,k||0,ze)}O=-1},this.readRenderTargetPixels=function(y,D,k,V,H,ue,xe){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=Ge.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&xe!==void 0&&(Te=Te[xe]),Te){_e.bindFramebuffer(B.FRAMEBUFFER,Te);try{const Ie=y.texture,ze=Ie.format,De=Ie.type;if(ze!==nn&&me.convert(ze)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Oe=De===is&&(ye.has("EXT_color_buffer_half_float")||Pe.isWebGL2&&ye.has("EXT_color_buffer_float"));if(De!==In&&me.convert(De)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_TYPE)&&!(De===An&&(Pe.isWebGL2||ye.has("OES_texture_float")||ye.has("WEBGL_color_buffer_float")))&&!Oe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=y.width-V&&k>=0&&k<=y.height-H&&B.readPixels(D,k,V,H,me.convert(ze),me.convert(De),ue)}finally{const Ie=C!==null?Ge.get(C).__webglFramebuffer:null;_e.bindFramebuffer(B.FRAMEBUFFER,Ie)}}},this.copyFramebufferToTexture=function(y,D,k=0){const V=Math.pow(2,-k),H=Math.floor(D.image.width*V),ue=Math.floor(D.image.height*V);T.setTexture2D(D,0),B.copyTexSubImage2D(B.TEXTURE_2D,k,0,0,y.x,y.y,H,ue),_e.unbindTexture()},this.copyTextureToTexture=function(y,D,k,V=0){const H=D.image.width,ue=D.image.height,xe=me.convert(k.format),Te=me.convert(k.type);T.setTexture2D(k,0),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,k.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,k.unpackAlignment),D.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,V,y.x,y.y,H,ue,xe,Te,D.image.data):D.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,V,y.x,y.y,D.mipmaps[0].width,D.mipmaps[0].height,xe,D.mipmaps[0].data):B.texSubImage2D(B.TEXTURE_2D,V,y.x,y.y,xe,Te,D.image),V===0&&k.generateMipmaps&&B.generateMipmap(B.TEXTURE_2D),_e.unbindTexture()},this.copyTextureToTexture3D=function(y,D,k,V,H=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ue=y.max.x-y.min.x+1,xe=y.max.y-y.min.y+1,Te=y.max.z-y.min.z+1,Ie=me.convert(V.format),ze=me.convert(V.type);let De;if(V.isData3DTexture)T.setTexture3D(V,0),De=B.TEXTURE_3D;else if(V.isDataArrayTexture||V.isCompressedArrayTexture)T.setTexture2DArray(V,0),De=B.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,V.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,V.unpackAlignment);const Oe=B.getParameter(B.UNPACK_ROW_LENGTH),mt=B.getParameter(B.UNPACK_IMAGE_HEIGHT),zt=B.getParameter(B.UNPACK_SKIP_PIXELS),St=B.getParameter(B.UNPACK_SKIP_ROWS),on=B.getParameter(B.UNPACK_SKIP_IMAGES),ct=k.isCompressedTexture?k.mipmaps[H]:k.image;B.pixelStorei(B.UNPACK_ROW_LENGTH,ct.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ct.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,y.min.x),B.pixelStorei(B.UNPACK_SKIP_ROWS,y.min.y),B.pixelStorei(B.UNPACK_SKIP_IMAGES,y.min.z),k.isDataTexture||k.isData3DTexture?B.texSubImage3D(De,H,D.x,D.y,D.z,ue,xe,Te,Ie,ze,ct.data):k.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),B.compressedTexSubImage3D(De,H,D.x,D.y,D.z,ue,xe,Te,Ie,ct.data)):B.texSubImage3D(De,H,D.x,D.y,D.z,ue,xe,Te,Ie,ze,ct),B.pixelStorei(B.UNPACK_ROW_LENGTH,Oe),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,mt),B.pixelStorei(B.UNPACK_SKIP_PIXELS,zt),B.pixelStorei(B.UNPACK_SKIP_ROWS,St),B.pixelStorei(B.UNPACK_SKIP_IMAGES,on),H===0&&V.generateMipmaps&&B.generateMipmap(De),_e.unbindTexture()},this.initTexture=function(y){y.isCubeTexture?T.setTextureCube(y,0):y.isData3DTexture?T.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?T.setTexture2DArray(y,0):T.setTexture2D(y,0),_e.unbindTexture()},this.resetState=function(){I=0,A=0,C=null,_e.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===ia?"display-p3":"srgb",t.unpackColorSpace=Qe.workingColorSpace===Js?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Tt?oi:ac}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===oi?Tt:vn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Wp extends wc{}Wp.prototype.isWebGL1Renderer=!0;class es{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new He(e),this.density=t}clone(){return new es(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Xp extends _t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class jp{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Yr,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Ln()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ln()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ln()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ot=new R;class $s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix4(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyNormalMatrix(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.transformDirection(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}setX(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=pn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=pn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=pn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=pn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array),r=et(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Kt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new $s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Cc extends Un{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new He(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Ci;const $i=new R,Ri=new R,Ii=new R,Li=new we,Zi=new we,Rc=new at,Os=new R,Ki=new R,Ns=new R,Uo=new we,Hr=new we,Oo=new we;class qp extends _t{constructor(e=new Cc){if(super(),this.isSprite=!0,this.type="Sprite",Ci===void 0){Ci=new At;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new jp(t,5);Ci.setIndex([0,1,2,0,2,3]),Ci.setAttribute("position",new $s(n,3,0,!1)),Ci.setAttribute("uv",new $s(n,2,3,!1))}this.geometry=Ci,this.material=e,this.center=new we(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ri.setFromMatrixScale(this.matrixWorld),Rc.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ii.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ri.multiplyScalar(-Ii.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const a=this.center;Fs(Os.set(-.5,-.5,0),Ii,a,Ri,i,r),Fs(Ki.set(.5,-.5,0),Ii,a,Ri,i,r),Fs(Ns.set(.5,.5,0),Ii,a,Ri,i,r),Uo.set(0,0),Hr.set(1,0),Oo.set(1,1);let o=e.ray.intersectTriangle(Os,Ki,Ns,!1,$i);if(o===null&&(Fs(Ki.set(-.5,.5,0),Ii,a,Ri,i,r),Hr.set(0,1),o=e.ray.intersectTriangle(Os,Ns,Ki,!1,$i),o===null))return;const c=e.ray.origin.distanceTo($i);c<e.near||c>e.far||t.push({distance:c,point:$i.clone(),uv:$t.getInterpolation($i,Os,Ki,Ns,Uo,Hr,Oo,new we),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Fs(s,e,t,n,i,r){Li.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(Zi.x=r*Li.x-i*Li.y,Zi.y=i*Li.x+r*Li.y):Zi.copy(Li),s.copy(e),s.x+=Zi.x,s.y+=Zi.y,s.applyMatrix4(Rc)}class Zs extends Un{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new He(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const No=new R,Fo=new R,Bo=new at,Gr=new Qs,Bs=new hs;class Yp extends _t{constructor(e=new At,t=new Zs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)No.fromBufferAttribute(t,i-1),Fo.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=No.distanceTo(Fo);e.setAttribute("lineDistance",new dt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Bs.copy(n.boundingSphere),Bs.applyMatrix4(i),Bs.radius+=r,e.ray.intersectsSphere(Bs)===!1)return;Bo.copy(i).invert(),Gr.copy(e.ray).applyMatrix4(Bo);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=new R,h=new R,d=new R,f=new R,m=this.isLineSegments?2:1,_=n.index,p=n.attributes.position;if(_!==null){const u=Math.max(0,a.start),M=Math.min(_.count,a.start+a.count);for(let v=u,S=M-1;v<S;v+=m){const I=_.getX(v),A=_.getX(v+1);if(l.fromBufferAttribute(p,I),h.fromBufferAttribute(p,A),Gr.distanceSqToSegment(l,h,f,d)>c)continue;f.applyMatrix4(this.matrixWorld);const O=e.ray.origin.distanceTo(f);O<e.near||O>e.far||t.push({distance:O,point:d.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const u=Math.max(0,a.start),M=Math.min(p.count,a.start+a.count);for(let v=u,S=M-1;v<S;v+=m){if(l.fromBufferAttribute(p,v),h.fromBufferAttribute(p,v+1),Gr.distanceSqToSegment(l,h,f,d)>c)continue;f.applyMatrix4(this.matrixWorld);const A=e.ray.origin.distanceTo(f);A<e.near||A>e.far||t.push({distance:A,point:d.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}class Ic extends Un{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new He(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ho=new at,Qr=new Qs,Hs=new hs,Gs=new R;class $p extends _t{constructor(e=new At,t=new Ic){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Hs.copy(n.boundingSphere),Hs.applyMatrix4(i),Hs.radius+=r,e.ray.intersectsSphere(Hs)===!1)return;Ho.copy(i).invert(),Qr.copy(e.ray).applyMatrix4(Ho);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,d=n.attributes.position;if(l!==null){const f=Math.max(0,a.start),m=Math.min(l.count,a.start+a.count);for(let _=f,g=m;_<g;_++){const p=l.getX(_);Gs.fromBufferAttribute(d,p),Go(Gs,p,c,i,e,t,this)}}else{const f=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let _=f,g=m;_<g;_++)Gs.fromBufferAttribute(d,_),Go(Gs,_,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Go(s,e,t,n,i,r,a){const o=Qr.distanceSqToPoint(s);if(o<t){const c=new R;Qr.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,object:a})}}class ts extends kt{constructor(e,t,n,i,r,a,o,c,l){super(e,t,n,i,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class bt extends At{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;i=Math.floor(i),r=Math.floor(r);const h=[],d=[],f=[],m=[];let _=0;const g=[],p=n/2;let u=0;M(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new dt(d,3)),this.setAttribute("normal",new dt(f,3)),this.setAttribute("uv",new dt(m,2));function M(){const S=new R,I=new R;let A=0;const C=(t-e)/n;for(let O=0;O<=r;O++){const x=[],b=O/r,U=b*(t-e)+e;for(let F=0;F<=i;F++){const $=F/i,L=$*c+o,N=Math.sin(L),z=Math.cos(L);I.x=U*N,I.y=-b*n+p,I.z=U*z,d.push(I.x,I.y,I.z),S.set(N,C,z).normalize(),f.push(S.x,S.y,S.z),m.push($,1-b),x.push(_++)}g.push(x)}for(let O=0;O<i;O++)for(let x=0;x<r;x++){const b=g[x][O],U=g[x+1][O],F=g[x+1][O+1],$=g[x][O+1];h.push(b,U,$),h.push(U,F,$),A+=6}l.addGroup(u,A,0),u+=A}function v(S){const I=_,A=new we,C=new R;let O=0;const x=S===!0?e:t,b=S===!0?1:-1;for(let F=1;F<=i;F++)d.push(0,p*b,0),f.push(0,b,0),m.push(.5,.5),_++;const U=_;for(let F=0;F<=i;F++){const L=F/i*c+o,N=Math.cos(L),z=Math.sin(L);C.x=x*z,C.y=p*b,C.z=x*N,d.push(C.x,C.y,C.z),f.push(0,b,0),A.x=N*.5+.5,A.y=z*.5*b+.5,m.push(A.x,A.y),_++}for(let F=0;F<i;F++){const $=I+F,L=U+F;S===!0?h.push(L,L+1,$):h.push(L+1,L,$),O+=3}l.addGroup(u,O,S===!0?1:2),u+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class nr extends At{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const r=[],a=[];o(i),l(n),h(),this.setAttribute("position",new dt(r,3)),this.setAttribute("normal",new dt(r.slice(),3)),this.setAttribute("uv",new dt(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(M){const v=new R,S=new R,I=new R;for(let A=0;A<t.length;A+=3)m(t[A+0],v),m(t[A+1],S),m(t[A+2],I),c(v,S,I,M)}function c(M,v,S,I){const A=I+1,C=[];for(let O=0;O<=A;O++){C[O]=[];const x=M.clone().lerp(S,O/A),b=v.clone().lerp(S,O/A),U=A-O;for(let F=0;F<=U;F++)F===0&&O===A?C[O][F]=x:C[O][F]=x.clone().lerp(b,F/U)}for(let O=0;O<A;O++)for(let x=0;x<2*(A-O)-1;x++){const b=Math.floor(x/2);x%2===0?(f(C[O][b+1]),f(C[O+1][b]),f(C[O][b])):(f(C[O][b+1]),f(C[O+1][b+1]),f(C[O+1][b]))}}function l(M){const v=new R;for(let S=0;S<r.length;S+=3)v.x=r[S+0],v.y=r[S+1],v.z=r[S+2],v.normalize().multiplyScalar(M),r[S+0]=v.x,r[S+1]=v.y,r[S+2]=v.z}function h(){const M=new R;for(let v=0;v<r.length;v+=3){M.x=r[v+0],M.y=r[v+1],M.z=r[v+2];const S=p(M)/2/Math.PI+.5,I=u(M)/Math.PI+.5;a.push(S,1-I)}_(),d()}function d(){for(let M=0;M<a.length;M+=6){const v=a[M+0],S=a[M+2],I=a[M+4],A=Math.max(v,S,I),C=Math.min(v,S,I);A>.9&&C<.1&&(v<.2&&(a[M+0]+=1),S<.2&&(a[M+2]+=1),I<.2&&(a[M+4]+=1))}}function f(M){r.push(M.x,M.y,M.z)}function m(M,v){const S=M*3;v.x=e[S+0],v.y=e[S+1],v.z=e[S+2]}function _(){const M=new R,v=new R,S=new R,I=new R,A=new we,C=new we,O=new we;for(let x=0,b=0;x<r.length;x+=9,b+=6){M.set(r[x+0],r[x+1],r[x+2]),v.set(r[x+3],r[x+4],r[x+5]),S.set(r[x+6],r[x+7],r[x+8]),A.set(a[b+0],a[b+1]),C.set(a[b+2],a[b+3]),O.set(a[b+4],a[b+5]),I.copy(M).add(v).add(S).divideScalar(3);const U=p(I);g(A,b+0,M,U),g(C,b+2,v,U),g(O,b+4,S,U)}}function g(M,v,S,I){I<0&&M.x===1&&(a[v]=M.x-1),S.x===0&&S.z===0&&(a[v]=I/2/Math.PI+.5)}function p(M){return Math.atan2(M.z,-M.x)}function u(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nr(e.vertices,e.indices,e.radius,e.details)}}class ss extends nr{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ss(e.radius,e.detail)}}class oa extends nr{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new oa(e.radius,e.detail)}}class ci extends At{constructor(e=.5,t=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],c=[],l=[],h=[];let d=e;const f=(t-e)/i,m=new R,_=new we;for(let g=0;g<=i;g++){for(let p=0;p<=n;p++){const u=r+p/n*a;m.x=d*Math.cos(u),m.y=d*Math.sin(u),c.push(m.x,m.y,m.z),l.push(0,0,1),_.x=(m.x/t+1)/2,_.y=(m.y/t+1)/2,h.push(_.x,_.y)}d+=f}for(let g=0;g<i;g++){const p=g*(n+1);for(let u=0;u<n;u++){const M=u+p,v=M,S=M+n+1,I=M+n+2,A=M+1;o.push(v,S,A),o.push(S,I,A)}}this.setIndex(o),this.setAttribute("position",new dt(c,3)),this.setAttribute("normal",new dt(l,3)),this.setAttribute("uv",new dt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ci(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class gn extends At{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const h=[],d=new R,f=new R,m=[],_=[],g=[],p=[];for(let u=0;u<=n;u++){const M=[],v=u/n;let S=0;u===0&&a===0?S=.5/t:u===n&&c===Math.PI&&(S=-.5/t);for(let I=0;I<=t;I++){const A=I/t;d.x=-e*Math.cos(i+A*r)*Math.sin(a+v*o),d.y=e*Math.cos(a+v*o),d.z=e*Math.sin(i+A*r)*Math.sin(a+v*o),_.push(d.x,d.y,d.z),f.copy(d).normalize(),g.push(f.x,f.y,f.z),p.push(A+S,1-v),M.push(l++)}h.push(M)}for(let u=0;u<n;u++)for(let M=0;M<t;M++){const v=h[u][M+1],S=h[u][M],I=h[u+1][M],A=h[u+1][M+1];(u!==0||a>0)&&m.push(v,S,A),(u!==n-1||c<Math.PI)&&m.push(S,I,A)}this.setIndex(m),this.setAttribute("position",new dt(_,3)),this.setAttribute("normal",new dt(g,3)),this.setAttribute("uv",new dt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class _n extends At{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],c=[],l=[],h=new R,d=new R,f=new R;for(let m=0;m<=n;m++)for(let _=0;_<=i;_++){const g=_/i*r,p=m/n*Math.PI*2;d.x=(e+t*Math.cos(p))*Math.cos(g),d.y=(e+t*Math.cos(p))*Math.sin(g),d.z=t*Math.sin(p),o.push(d.x,d.y,d.z),h.x=e*Math.cos(g),h.y=e*Math.sin(g),f.subVectors(d,h).normalize(),c.push(f.x,f.y,f.z),l.push(_/i),l.push(m/n)}for(let m=1;m<=n;m++)for(let _=1;_<=i;_++){const g=(i+1)*m+_-1,p=(i+1)*(m-1)+_-1,u=(i+1)*(m-1)+_,M=(i+1)*m+_;a.push(g,p,M),a.push(p,u,M)}this.setIndex(a),this.setAttribute("position",new dt(o,3)),this.setAttribute("normal",new dt(c,3)),this.setAttribute("uv",new dt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class ge extends Un{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new He(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=oc,this.normalScale=new we(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Lc extends ge{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new we(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Bt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new He(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new He(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new He(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class ir extends _t{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new He(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class Zp extends ir{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.groundColor=new He(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const kr=new at,ko=new R,zo=new R;class Pc{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new we(512,512),this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ra,this._frameExtents=new we(1,1),this._viewportCount=1,this._viewports=[new rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;ko.setFromMatrixPosition(e.matrixWorld),t.position.copy(ko),zo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(zo),t.updateMatrixWorld(),kr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(kr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(kr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Vo=new at,Ji=new R,zr=new R;class Kp extends Pc{constructor(){super(new jt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new we(4,2),this._viewportCount=6,this._viewports=[new rt(2,1,1,1),new rt(0,1,1,1),new rt(3,1,1,1),new rt(1,1,1,1),new rt(3,0,1,1),new rt(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ji.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ji),zr.copy(n.position),zr.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(zr),n.updateMatrixWorld(),i.makeTranslation(-Ji.x,-Ji.y,-Ji.z),Vo.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vo)}}class zs extends ir{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Kp}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Jp extends Pc{constructor(){super(new Ec(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Qp extends ir{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.target=new _t,this.shadow=new Jp}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class em extends ir{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class tm{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Wo(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Wo();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Wo(){return(typeof performance>"u"?Date:performance).now()}class nm{constructor(e,t,n=0,i=1/0){this.ray=new Qs(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new sa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return ea(e,this,n,t),n.sort(Xo),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)ea(e[i],this,n,t);return n.sort(Xo),n}}function Xo(s,e){return s.distance-e.distance}function ea(s,e,t,n){if(s.layers.test(e.layers)&&s.raycast(e,t),n===!0){const i=s.children;for(let r=0,a=i.length;r<a;r++)ea(i[r],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ta}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ta);const fe={APP_NAME:"MARS ANALOG MISSION",SUBTITLE:"SPACE Tech Labs — Immersive Analog Mission Simulator",VERSION:"1.0.0-MVP",STORAGE_KEY:"SPACE_TECH_LABS_MAM_v1",GRAPHICS:{FOV:75,NEAR_PLANE:.1,FAR_PLANE:250,DESKTOP_PIXEL_RATIO:Math.min(window.devicePixelRatio||1,2),XR_PIXEL_RATIO:1,SHADOWS_ENABLED:!0},COLORS:{SPACE_BLACK:461070,SURFACE_DARK:987930,METALLIC_PANEL:1844017,MARS_ORANGE:16733986,MARS_ORANGE_LIGHT:16740419,TECH_CYAN:58879,TECH_GREEN:58998,TECH_RED:16717636,TECH_AMBER:16755456,WARM_INTERIOR_LIGHT:16769202,MARS_SKY:10045480,MARS_TERRAIN:11883308},HABITAT:{RADIUS:17.5,HEIGHT:4.6,WALKABLE_RADIUS:16.85,WINDOW_WIDTH:13,WINDOW_HEIGHT:3.6,CAMERA_HEIGHT:1.7},EVA:{OUTDOORS_MAX_RADIUS:110,MARS_GRAVITY:-3.71,JUMP_VELOCITY:4.8,SUIT_O2_DURATION_SECONDS:600},MISSION:{ID:"M-001",NAME:"HABITAT RECOVERY & BIOGROWTH VALIDATION",TARGET_DURATION_SECONDS:600,MAX_DURATION_SECONDS:900},CONTROLS:{WALK_SPEED:3.5,RUN_SPEED:5.5,MOUSE_SENSITIVITY:.0022,CONTROLLER_DEADZONE:.15}};class im{constructor(){w(this,"scene");this.scene=new Xp,this.scene.background=new He(fe.COLORS.SPACE_BLACK),this.scene.fog=new es(fe.COLORS.MARS_SKY,.006)}add(e){this.scene.add(e)}remove(e){this.scene.remove(e)}setEmergencyAtmosphere(e){e?this.scene.fog=new es(3803144,.015):this.scene.fog=new es(fe.COLORS.MARS_SKY,.006)}}class sm{constructor(){w(this,"camera");w(this,"cameraRig");w(this,"onWindowResize",()=>{this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix()});const e=window.innerWidth/window.innerHeight;this.camera=new jt(fe.GRAPHICS.FOV,e,fe.GRAPHICS.NEAR_PLANE,fe.GRAPHICS.FAR_PLANE),this.camera.position.set(0,fe.HABITAT.CAMERA_HEIGHT,2),this.cameraRig=new $e,this.cameraRig.name="CameraRig",this.cameraRig.add(this.camera),window.addEventListener("resize",this.onWindowResize)}resetPosition(){this.cameraRig.position.set(0,0,0),this.camera.position.set(0,fe.HABITAT.CAMERA_HEIGHT,2),this.camera.rotation.set(0,0,0)}dispose(){window.removeEventListener("resize",this.onWindowResize)}}class rm{constructor(e){w(this,"renderer");w(this,"container");w(this,"onWindowResize",()=>{this.renderer.setSize(window.innerWidth,window.innerHeight)});this.container=e,this.renderer=new wc({antialias:!0,powerPreference:"high-performance",alpha:!1}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(fe.GRAPHICS.DESKTOP_PIXEL_RATIO),this.renderer.toneMapping=Ko,this.renderer.toneMappingExposure=1.35,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=$o,this.renderer.xr.enabled=!0,this.container.appendChild(this.renderer.domElement),window.addEventListener("resize",this.onWindowResize)}setAnimationLoop(e){this.renderer.setAnimationLoop(e)}render(e,t){this.renderer.render(e,t)}dispose(){window.removeEventListener("resize",this.onWindowResize),this.renderer.dispose(),this.renderer.domElement.parentElement&&this.renderer.domElement.parentElement.removeChild(this.renderer.domElement)}}const Xn=class Xn{constructor(){w(this,"listeners",new Map)}static getInstance(){return Xn.instance||(Xn.instance=new Xn),Xn.instance}on(e,t){return this.listeners.has(e)||this.listeners.set(e,new Set),this.listeners.get(e).add(t),()=>this.off(e,t)}off(e,t){const n=this.listeners.get(e);n&&(n.delete(t),n.size===0&&this.listeners.delete(e))}emit(e,t){const n=this.listeners.get(e);n&&n.forEach(i=>{try{i(t)}catch(r){console.error(`[EventBus] Error handling event "${e}":`,r)}})}clear(){this.listeners.clear()}};w(Xn,"instance");let j=Xn;const Pi={schemaVersion:1,completedMissions:[],bestScore:0,bestTimeSeconds:0,totalRuns:0,soundEnabled:!0,lastMissionDate:null,history:[],unlockedAchievements:[]},jn=class jn{constructor(){w(this,"memoryCache");w(this,"isStorageAvailable");this.memoryCache={...Pi},this.isStorageAvailable=this.checkStorageAvailability(),this.loadData()}static getInstance(){return jn.instance||(jn.instance=new jn),jn.instance}checkStorageAvailability(){try{const e="__mam_test_storage__";return window.localStorage.setItem(e,"ok"),window.localStorage.removeItem(e),!0}catch{return console.warn("[ProgressStorage] localStorage is unavailable. Using in-memory fallback."),!1}}loadData(){if(this.isStorageAvailable)try{const e=window.localStorage.getItem(fe.STORAGE_KEY);if(e){const t=JSON.parse(e);t.schemaVersion===Pi.schemaVersion?this.memoryCache={...Pi,...t}:(this.memoryCache={...Pi,...t,schemaVersion:Pi.schemaVersion},this.saveData())}}catch(e){console.error("[ProgressStorage] Error reading saved progress:",e)}}saveData(){if(this.isStorageAvailable)try{window.localStorage.setItem(fe.STORAGE_KEY,JSON.stringify(this.memoryCache))}catch(e){console.error("[ProgressStorage] Error writing progress data:",e)}}getData(){return this.memoryCache}recordMissionRun(e){this.memoryCache.totalRuns+=1,this.memoryCache.lastMissionDate=e.date,this.memoryCache.completedMissions.includes(e.missionId)||this.memoryCache.completedMissions.push(e.missionId),e.score>this.memoryCache.bestScore&&(this.memoryCache.bestScore=e.score),(this.memoryCache.bestTimeSeconds===0||e.timeSeconds<this.memoryCache.bestTimeSeconds)&&(this.memoryCache.bestTimeSeconds=e.timeSeconds),this.memoryCache.history.unshift(e),this.memoryCache.history.length>15&&this.memoryCache.history.pop(),this.saveData()}setSoundEnabled(e){this.memoryCache.soundEnabled=e,this.saveData()}unlockAchievement(e){return this.memoryCache.unlockedAchievements||(this.memoryCache.unlockedAchievements=[]),this.memoryCache.unlockedAchievements.includes(e)?!1:(this.memoryCache.unlockedAchievements.push(e),this.saveData(),!0)}isAchievementUnlocked(e){return(this.memoryCache.unlockedAchievements||[]).includes(e)}getUnlockedAchievements(){return this.memoryCache.unlockedAchievements||[]}clearProgress(){if(this.memoryCache={...Pi},this.isStorageAvailable)try{window.localStorage.removeItem(fe.STORAGE_KEY)}catch(e){console.error(e)}}};w(jn,"instance");let hi=jn;const qn=class qn{constructor(){w(this,"ctx",null);w(this,"isEnabled",!0);w(this,"ambientGain",null);w(this,"masterGain",null);w(this,"ambientOsc",null);w(this,"emergencyInterval",null);this.isEnabled=hi.getInstance().getData().soundEnabled}static getInstance(){return qn.instance||(qn.instance=new qn),qn.instance}initContext(){if(!this.ctx){const e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx=new e,this.masterGain=this.ctx.createGain(),this.masterGain.gain.value=this.isEnabled?.35:0,this.masterGain.connect(this.ctx.destination))}this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}setEnabled(e){this.isEnabled=e,hi.getInstance().setSoundEnabled(e),this.masterGain&&(this.masterGain.gain.value=e?.35:0),!e&&this.emergencyInterval&&(clearInterval(this.emergencyInterval),this.emergencyInterval=null)}getEnabled(){return this.isEnabled}startAmbientHum(){if(this.isEnabled&&(this.initContext(),!(!this.ctx||!this.masterGain||this.ambientOsc)))try{this.ambientOsc=this.ctx.createOscillator(),this.ambientGain=this.ctx.createGain(),this.ambientOsc.type="sine",this.ambientOsc.frequency.setValueAtTime(58,this.ctx.currentTime);const e=this.ctx.createBiquadFilter();e.type="lowpass",e.frequency.setValueAtTime(120,this.ctx.currentTime),this.ambientGain.gain.setValueAtTime(.08,this.ctx.currentTime),this.ambientOsc.connect(e),e.connect(this.ambientGain),this.ambientGain.connect(this.masterGain),this.ambientOsc.start()}catch(e){console.warn("[AudioManager] Could not start ambient sound:",e)}}stopAmbientHum(){if(this.ambientOsc){try{this.ambientOsc.stop(),this.ambientOsc.disconnect()}catch{}this.ambientOsc=null}}playClick(){if(this.isEnabled&&(this.initContext(),!(!this.ctx||!this.masterGain)))try{const e=this.ctx.createOscillator(),t=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(800,this.ctx.currentTime),e.frequency.exponentialRampToValueAtTime(1400,this.ctx.currentTime+.05),t.gain.setValueAtTime(.12,this.ctx.currentTime),t.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.05),e.connect(t),t.connect(this.masterGain),e.start(),e.stop(this.ctx.currentTime+.05)}catch{}}playSuccessTone(){if(!this.isEnabled||(this.initContext(),!this.ctx||!this.masterGain))return;[523.25,659.25,783.99,1046.5].forEach((t,n)=>{if(!this.ctx||!this.masterGain)return;const i=this.ctx.createOscillator(),r=this.ctx.createGain(),a=this.ctx.currentTime+n*.08;i.type="triangle",i.frequency.setValueAtTime(t,a),r.gain.setValueAtTime(.15,a),r.gain.exponentialRampToValueAtTime(.001,a+.35),i.connect(r),r.connect(this.masterGain),i.start(a),i.stop(a+.35)})}startEmergencySiren(){if(!this.isEnabled||this.emergencyInterval)return;this.initContext();const e=()=>{if(!(!this.ctx||!this.masterGain||!this.isEnabled))try{const t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="sawtooth",t.frequency.setValueAtTime(880,this.ctx.currentTime),t.frequency.linearRampToValueAtTime(440,this.ctx.currentTime+.3),n.gain.setValueAtTime(.2,this.ctx.currentTime),n.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.35),t.connect(n),n.connect(this.masterGain),t.start(),t.stop(this.ctx.currentTime+.35)}catch{}};e(),this.emergencyInterval=window.setInterval(e,800)}stopEmergencySiren(){this.emergencyInterval&&(clearInterval(this.emergencyInterval),this.emergencyInterval=null)}};w(qn,"instance");let qe=qn;const Yn=class Yn{constructor(){w(this,"interactables",new Map);w(this,"raycaster",new nm);w(this,"currentHovered",null);w(this,"rayOriginCenter",new we(0,0));this.raycaster.far=4.2}static getInstance(){return Yn.instance||(Yn.instance=new Yn),Yn.instance}register(e){this.interactables.set(e.id,e),e.object3D.userData.interactableId=e.id,e.object3D.traverse(t=>{t.userData.interactableId=e.id})}unregister(e){const t=this.interactables.get(e);t&&(this.currentHovered===t&&this.clearHover(),this.interactables.delete(e))}getInteractable(e){return this.interactables.get(e)}updateDesktop(e){this.raycaster.setFromCamera(this.rayOriginCenter,e),this.evaluateRaycast()}evaluateRaycast(){var i;const e=Array.from(this.interactables.values()).map(r=>r.object3D),t=this.raycaster.intersectObjects(e,!0);let n=null;for(const r of t){let a=r.object;for(;a;){const o=(i=a.userData)==null?void 0:i.interactableId;if(o&&this.interactables.has(o)){const c=this.interactables.get(o);if(c.canInteract()){n=c;break}}a=a.parent}if(n)break}n!==this.currentHovered&&(this.currentHovered&&this.currentHovered.onHoverEnd&&this.currentHovered.onHoverEnd(),this.currentHovered=n,this.currentHovered&&this.currentHovered.onHoverStart&&this.currentHovered.onHoverStart(),j.getInstance().emit("interaction:hoverChanged",{interactable:this.currentHovered,hasTarget:!!this.currentHovered}))}testRay(e,t){var r;this.raycaster.set(e,t);const n=Array.from(this.interactables.values()).map(a=>a.object3D),i=this.raycaster.intersectObjects(n,!0);for(const a of i){let o=a.object;for(;o;){const c=(r=o.userData)==null?void 0:r.interactableId;if(c&&this.interactables.has(c)){const l=this.interactables.get(c);if(l.canInteract())return l}o=o.parent}}return null}raycastFromScreenPoint(e,t,n){var o;const i=new we(e/window.innerWidth*2-1,-(t/window.innerHeight)*2+1);this.raycaster.setFromCamera(i,n);const r=Array.from(this.interactables.values()).map(c=>c.object3D),a=this.raycaster.intersectObjects(r,!0);for(const c of a){if(c.distance>this.raycaster.far)continue;let l=c.object;for(;l;){const h=(o=l.userData)==null?void 0:o.interactableId;if(h&&this.interactables.has(h)){const d=this.interactables.get(h);if(d.canInteract())return d}l=l.parent}}return null}interactAtPoint(e,t,n){const i=this.raycastFromScreenPoint(e,t,n);return i&&i.canInteract()?(qe.getInstance().playClick(),i.onInteract(),j.getInstance().emit("interaction:triggered",i.id),!0):!1}getCurrentHovered(){return this.currentHovered}interactCurrent(){return this.currentHovered&&this.currentHovered.canInteract()?(qe.getInstance().playClick(),this.currentHovered.onInteract(),j.getInstance().emit("interaction:triggered",this.currentHovered.id),!0):!1}interactDirect(e){const t=this.interactables.get(e);return t&&t.canInteract()?(qe.getInstance().playClick(),t.onInteract(),j.getInstance().emit("interaction:triggered",t.id),!0):!1}clearHover(){this.currentHovered&&this.currentHovered.onHoverEnd&&this.currentHovered.onHoverEnd(),this.currentHovered=null,j.getInstance().emit("interaction:hoverChanged",{interactable:null,hasTarget:!1})}};w(Yn,"instance");let ht=Yn;class vt{static clamp(e,t,n){return Math.max(t,Math.min(n,e))}static lerp(e,t,n){return e+(t-e)*vt.clamp(n,0,1)}static formatTime(e){const t=Math.floor(e/60),n=Math.floor(e%60),i=Math.floor(e%1*10),r=t.toString().padStart(2,"0"),a=n.toString().padStart(2,"0");return`${r}:${a}.${i}`}static getMartianTerrainHeight(e,t){const n=Math.sqrt(e*e+t*t),i=22.5;if(n<=i)return-.85;const r=Math.min(1,Math.max(0,(n-i)/8));let o=Math.sin(e*.035)*3+Math.cos(t*.03)*3.2+Math.sin((e+t)*.07)*1.5;return t<-40&&(o+=Math.pow(Math.abs(t+40)*.12,1.4)),-.85+r*(o+.5)}static getPlayerWalkHeight(e,t){if(Math.sqrt(e*e+t*t)<=17.5&&!(e>=17.2&&t>=5.8&&t<=9.2))return 0;if(e>=17.2&&e<=23.8&&t>=5.8&&t<=9.2){const i=vt.clamp((e-17.2)/6.6,0,1);return vt.lerp(0,-.85,i)}return vt.getMartianTerrainHeight(e,t)}static resolveSlidingCollisions(e,t,n,i,r,a=.32){let o=n,c=i;for(const l of r){const h=l.minX-a,d=l.maxX+a,f=l.minZ-a,m=l.maxZ+a;t>f&&t<m&&o>h&&o<d&&(n>=e?o=h:o=d)}for(const l of r){const h=l.minX-a,d=l.maxX+a,f=l.minZ-a,m=l.maxZ+a;o>h&&o<d&&c>f&&c<m&&(i>=t?c=f:c=m)}return{x:o,z:c}}static resolveCollisions(e,t,n,i=.32){return vt.resolveSlidingCollisions(e,t,e,t,n,i)}static clampToHabitatWalkable(e,t,n){let i=vt.clamp(e,n.minX,n.maxX),r=vt.clamp(t,n.minZ,n.maxZ);if(n.obstacles)for(const a of n.obstacles){const o=i-a.x,c=r-a.z,l=o*o+c*c,h=a.radius;if(l<h*h){const d=Math.sqrt(l)||.001,f=h-d;i+=o/d*f,r+=c/d*f}}return{x:i,z:r}}}const $n=class $n{constructor(){w(this,"currentMode","desktop");w(this,"isVRSupported",!1);w(this,"isMetaQuest",!1);w(this,"isMobile",!1);w(this,"isTouch",!1);w(this,"onResize",()=>{this.updateMobileState()});this.detectDevice(),window.addEventListener("resize",this.onResize),window.addEventListener("orientationchange",this.onResize)}static getInstance(){return $n.instance||($n.instance=new $n),$n.instance}async detectDevice(){var n;const e=navigator.userAgent||"";this.isMetaQuest=/Quest/i.test(e)||/OculusBrowser/i.test(e),this.isTouch="ontouchstart"in window||navigator.maxTouchPoints>0;const t=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile/i.test(e);if(this.isMobile=this.isTouch&&t||this.isTouch&&window.innerWidth<=1024,this.isMetaQuest?this.currentMode="desktop":this.isMobile?this.currentMode="mobile":this.currentMode="desktop",this.applyBodyClasses(),"xr"in navigator&&((n=navigator.xr)!=null&&n.isSessionSupported))try{this.isVRSupported=await navigator.xr.isSessionSupported("immersive-vr")}catch{this.isVRSupported=!1}else this.isVRSupported=!1;j.getInstance().emit("platform:detected",{isVRSupported:this.isVRSupported,isMetaQuest:this.isMetaQuest,isMobile:this.isMobile,isTouch:this.isTouch,mode:this.currentMode})}updateMobileState(){const e=navigator.userAgent||"",t=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile/i.test(e),n=this.isMobile;this.isMobile=this.isTouch&&t||this.isTouch&&window.innerWidth<=1024,this.currentMode!=="webxr"&&(this.currentMode=this.isMobile?"mobile":"desktop"),this.applyBodyClasses(),n!==this.isMobile&&j.getInstance().emit("platform:modeChanged",this.currentMode)}applyBodyClasses(){typeof document<"u"&&document.body&&(document.body.classList.toggle("is-mobile",this.isMobile),document.body.classList.toggle("is-touch",this.isTouch),document.body.classList.toggle("is-portrait",this.isPortrait()),document.body.classList.toggle("is-landscape",!this.isPortrait()))}isPortrait(){return window.innerHeight>window.innerWidth}checkVRSupport(){var e;return"xr"in navigator&&((e=navigator.xr)!=null&&e.isSessionSupported)?navigator.xr.isSessionSupported("immersive-vr"):Promise.resolve(!1)}getIsVRSupported(){return this.isVRSupported}getIsMetaQuest(){return this.isMetaQuest}getIsMobile(){return this.isMobile}getIsTouch(){return this.isTouch}getCurrentMode(){return this.currentMode}setMode(e){this.currentMode!==e&&(this.currentMode=e,j.getInstance().emit("platform:modeChanged",e))}};w($n,"instance");let sn=$n;const Zn=class Zn{constructor(){w(this,"isSuitDonned",!1);w(this,"o2Percent",100);w(this,"batteryPercent",100);w(this,"suitPressureKpa",29.6);w(this,"heartRateBpm",78);w(this,"samplesCollected",0);w(this,"totalSamples",3);w(this,"helmetHudEl",null);w(this,"suitO2El",null);w(this,"suitPressEl",null);w(this,"suitBatEl",null);w(this,"suitHrEl",null);w(this,"suitSamplesEl",null);w(this,"collectedRockIds",new Set);this.bindEvents()}static getInstance(){return Zn.instance||(Zn.instance=new Zn),Zn.instance}initDOM(){this.helmetHudEl=document.getElementById("helmet-hud"),this.suitO2El=document.getElementById("suit-o2-val"),this.suitPressEl=document.getElementById("suit-press-val"),this.suitBatEl=document.getElementById("suit-bat-val"),this.suitHrEl=document.getElementById("suit-hr-val"),this.suitSamplesEl=document.getElementById("suit-samples-val")}bindEvents(){j.getInstance().on("eva:suitUp",()=>{this.donSuitAndExit()}),j.getInstance().on("eva:returnInside",()=>{this.doffSuitAndEnter()}),j.getInstance().on("eva:collectSample",e=>{this.collectSample(e)})}getIsSuitDonned(){return this.isSuitDonned}donSuitAndExit(){if(!this.isSuitDonned){this.isSuitDonned=!0;try{qe.getInstance().playSuccessTone()}catch{}this.helmetHudEl||this.initDOM(),this.helmetHudEl&&this.helmetHudEl.classList.remove("hidden"),j.getInstance().emit("ui:notify","👨‍🚀 Traje EMU-MARS equipado. Esclusa despresurizada a 0.6 kPa. ¡Bienvenido a la superficie de Marte!"),j.getInstance().emit("eva:stateChanged",{isOutdoors:!0}),j.getInstance().emit("achievement:check","ach_mars_walker")}}doffSuitAndEnter(){if(this.isSuitDonned){this.isSuitDonned=!1;try{qe.getInstance().playSuccessTone()}catch{}this.helmetHudEl&&this.helmetHudEl.classList.add("hidden"),j.getInstance().emit("ui:notify","🏠 Esclusa represurizada a 101.3 kPa. Traje EMU retirado. Has regresado al interior del hábitat."),j.getInstance().emit("eva:stateChanged",{isOutdoors:!1})}}collectSample(e){if(this.collectedRockIds.has(e))return;this.collectedRockIds.add(e),this.samplesCollected+=1;try{qe.getInstance().playSuccessTone()}catch{}let t="Muestra Geológica";e==="rockSampleAlpha"&&(t="Muestra Alfa: Basalto rico en Olivino"),e==="rockSampleBeta"&&(t="Muestra Beta: Sulfatos y Arcillas de Impacto"),e==="rockSampleGamma"&&(t="Muestra Gamma: Nódulos de Hematita Marciana"),j.getInstance().emit("ui:notify",`💎 ¡Recolectada! ${t} (${this.samplesCollected}/${this.totalSamples})`),this.updateHUD(),this.samplesCollected>=this.totalSamples&&j.getInstance().emit("achievement:check","ach_geologist")}update(e){this.isSuitDonned&&(this.o2Percent=Math.max(88,this.o2Percent-e*.02),this.batteryPercent=Math.max(90,this.batteryPercent-e*.015),this.heartRateBpm=76+Math.round(Math.sin(Date.now()*.002)*6),this.updateHUD())}updateHUD(){this.suitO2El&&(this.suitO2El.textContent=`${this.o2Percent.toFixed(1)}%`),this.suitPressEl&&(this.suitPressEl.textContent=`${this.suitPressureKpa.toFixed(1)} kPa`),this.suitBatEl&&(this.suitBatEl.textContent=`${Math.round(this.batteryPercent)}%`),this.suitHrEl&&(this.suitHrEl.textContent=`${this.heartRateBpm} BPM`),this.suitSamplesEl&&(this.suitSamplesEl.textContent=`${this.samplesCollected}/${this.totalSamples}`)}getTelemetry(){return{o2Percent:this.o2Percent,batteryPercent:this.batteryPercent,suitPressureKpa:this.suitPressureKpa,heartRateBpm:this.heartRateBpm,samplesCollected:this.samplesCollected,totalSamples:this.totalSamples}}reset(){this.isSuitDonned=!1,this.o2Percent=100,this.batteryPercent=100,this.suitPressureKpa=29.6,this.heartRateBpm=78,this.samplesCollected=0,this.collectedRockIds.clear(),this.helmetHudEl&&this.helmetHudEl.classList.add("hidden")}};w(Zn,"instance");let wn=Zn;class am{constructor(e,t,n){w(this,"camera");w(this,"cameraRig");w(this,"domElement");w(this,"isLocked",!1);w(this,"isEnabled",!0);w(this,"pitch",0);w(this,"yaw",0);w(this,"touchMoveX",0);w(this,"touchMoveZ",0);w(this,"touchRunning",!1);w(this,"isEVAMode",!1);w(this,"isJumping",!1);w(this,"verticalVelocity",0);w(this,"keys",{KeyW:!1,KeyA:!1,KeyS:!1,KeyD:!1,ArrowUp:!1,ArrowLeft:!1,ArrowDown:!1,ArrowRight:!1,ShiftLeft:!1,Space:!1});w(this,"velocity",new R);w(this,"direction",new R);w(this,"wallBoxes",[{minX:-5.14,maxX:-4.86,minZ:-16.8,maxZ:-5.5},{minX:-5.14,maxX:-4.86,minZ:-2,maxZ:2},{minX:-5.14,maxX:-4.86,minZ:5.5,maxZ:16.8},{minX:-16.8,maxX:-4.86,minZ:-.14,maxZ:.14},{minX:4.86,maxX:5.14,minZ:-16.8,maxZ:-5.5},{minX:4.86,maxX:5.14,minZ:-2,maxZ:2},{minX:4.86,maxX:5.14,minZ:5.5,maxZ:16.8},{minX:4.86,maxX:16.8,minZ:-.14,maxZ:.14},{minX:16.8,maxX:17.6,minZ:.14,maxZ:5.8},{minX:16.8,maxX:17.6,minZ:9.2,maxZ:16.8},{minX:-2.2,maxX:2.2,minZ:-10.3,maxZ:-8.7},{minX:-.9,maxX:.9,minZ:-3.4,maxZ:-1.6},{minX:-4.1,maxX:-1.5,minZ:5.4,maxZ:6.6},{minX:1.8,maxX:3.8,minZ:5.4,maxZ:6.6},{minX:8,maxX:11,minZ:-5.8,maxZ:-3.8},{minX:9.8,maxX:13.2,minZ:-11.2,maxZ:-9.8},{minX:-12.3,maxX:-8.7,minZ:5.8,maxZ:8.2},{minX:-13.8,maxX:-7.2,minZ:-9.3,maxZ:-6.7},{minX:7.9,maxX:11.1,minZ:4.2,maxZ:5.8}]);w(this,"onKeyDown",e=>{this.isEnabled&&(e.code in this.keys&&(this.keys[e.code]=!0),e.code==="Space"&&this.jump(),e.code==="KeyE"&&ht.getInstance().interactCurrent(),e.code==="KeyM"&&j.getInstance().emit("ui:toggleMap"),e.code==="Escape"&&j.getInstance().emit("ui:togglePause"))});w(this,"onKeyUp",e=>{e.code in this.keys&&(this.keys[e.code]=!1)});w(this,"onCanvasClick",()=>{var e,t;if(this.isEnabled){if(sn.getInstance().getIsMobile()){ht.getInstance().interactCurrent();return}this.isLocked?ht.getInstance().interactCurrent():document.querySelector(".modal-backdrop:not(.hidden), .fullscreen-modal:not(.hidden)")||(t=(e=this.domElement).requestPointerLock)==null||t.call(e)}});w(this,"onPointerLockChange",()=>{this.isLocked=document.pointerLockElement===this.domElement,j.getInstance().emit("input:pointerLockChanged",this.isLocked)});w(this,"onMouseMove",e=>{if(!this.isLocked||!this.isEnabled)return;const t=e.movementX||0,n=e.movementY||0;this.addLookDelta(t*fe.CONTROLS.MOUSE_SENSITIVITY,n*fe.CONTROLS.MOUSE_SENSITIVITY)});this.camera=e,this.cameraRig=t,this.domElement=n,this.bindEvents()}bindEvents(){window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp),document.addEventListener("pointerlockchange",this.onPointerLockChange),document.addEventListener("mousemove",this.onMouseMove),this.domElement.addEventListener("click",this.onCanvasClick),j.getInstance().on("eva:stateChanged",e=>{e.isOutdoors?this.setEVAMode(!0,new R(19.2,-.15,7.5)):this.setEVAMode(!1,new R(14,0,7.5))}),j.getInstance().on("eva:jump",()=>{this.jump()})}addLookDelta(e,t){if(!this.isEnabled)return;this.yaw-=e,this.pitch-=t;const n=Math.PI/2.05;this.pitch=vt.clamp(this.pitch,-n,n),this.cameraRig.rotation.y=this.yaw,this.camera.rotation.x=this.pitch}setTouchMove(e,t){this.touchMoveX=e,this.touchMoveZ=t}setTouchRunning(e){this.touchRunning=e}update(e){if(!this.isEnabled)return;const t=vt.getPlayerWalkHeight(this.cameraRig.position.x,this.cameraRig.position.z);if(this.isEVAMode)if(this.isJumping)this.verticalVelocity+=fe.EVA.MARS_GRAVITY*e,this.cameraRig.position.y+=this.verticalVelocity*e,this.cameraRig.position.y<=t&&(this.cameraRig.position.y=t,this.verticalVelocity=0,this.isJumping=!1);else{const d=this.cameraRig.position.y;this.cameraRig.position.y=vt.lerp(d,t,Math.min(1,e*18))}else this.cameraRig.position.y=vt.lerp(this.cameraRig.position.y,0,Math.min(1,e*15));const n=Number(this.keys.KeyW||this.keys.ArrowUp)-Number(this.keys.KeyS||this.keys.ArrowDown),i=Number(this.keys.KeyD||this.keys.ArrowRight)-Number(this.keys.KeyA||this.keys.ArrowLeft),r=n!==0?n:this.touchMoveZ,a=i!==0?i:this.touchMoveX,o=Math.min(Math.sqrt(a*a+r*r),1),h=(this.keys.ShiftLeft||this.touchRunning||o>.9?fe.CONTROLS.RUN_SPEED:fe.CONTROLS.WALK_SPEED)*o;if(o>.05){const d=new R(0,0,-1).applyAxisAngle(new R(0,1,0),this.yaw),f=new R(1,0,0).applyAxisAngle(new R(0,1,0),this.yaw),m=d.multiplyScalar(r).add(f.multiplyScalar(a)).normalize().multiplyScalar(h);this.velocity.lerp(m,.25)}else this.velocity.lerp(new R(0,0,0),.3);if(this.velocity.lengthSq()>1e-4){const d=this.cameraRig.position.x,f=this.cameraRig.position.z,m=this.cameraRig.position.clone().addScaledVector(this.velocity,e),_=m.x>=12&&m.x<=25&&m.z>=5.8&&m.z<=9.2;if(!this.isEVAMode&&m.x>18&&_?wn.getInstance().getIsSuitDonned()?this.setEVAMode(!0):wn.getInstance().donSuitAndExit():this.isEVAMode&&m.x<17&&_&&(wn.getInstance().getIsSuitDonned()?wn.getInstance().doffSuitAndEnter():this.setEVAMode(!1)),this.isEVAMode){const g=Math.sqrt(m.x*m.x+m.z*m.z);if(g>fe.EVA.OUTDOORS_MAX_RADIUS){const p=fe.EVA.OUTDOORS_MAX_RADIUS/g;this.cameraRig.position.x=m.x*p,this.cameraRig.position.z=m.z*p}else if(g<17.5&&!_){const p=17.5/g;this.cameraRig.position.x=m.x*p,this.cameraRig.position.z=m.z*p}else this.cameraRig.position.x=m.x,this.cameraRig.position.z=m.z}else{const g=vt.resolveSlidingCollisions(d,f,m.x,m.z,this.wallBoxes,.32),p=Math.sqrt(g.x*g.x+g.z*g.z);if(p>fe.HABITAT.WALKABLE_RADIUS&&!_){const u=fe.HABITAT.WALKABLE_RADIUS/p;this.cameraRig.position.x=g.x*u,this.cameraRig.position.z=g.z*u}else this.cameraRig.position.x=g.x,this.cameraRig.position.z=g.z}}ht.getInstance().updateDesktop(this.camera)}jump(){this.isEVAMode&&!this.isJumping&&(this.verticalVelocity=fe.EVA.JUMP_VELOCITY,this.isJumping=!0)}setEVAMode(e,t){this.isEVAMode=e,t&&this.cameraRig.position.copy(t),this.velocity.set(0,0,0),this.verticalVelocity=0,this.isJumping=!1}getIsEVAMode(){return this.isEVAMode}setEnabled(e){var t;this.isEnabled=e,!e&&this.isLocked&&((t=document.exitPointerLock)==null||t.call(document)),e||(this.touchMoveX=0,this.touchMoveZ=0)}getIsLocked(){return this.isLocked}exitPointerLock(){var e;this.isLocked&&((e=document.exitPointerLock)==null||e.call(document))}dispose(){window.removeEventListener("keydown",this.onKeyDown),window.removeEventListener("keyup",this.onKeyUp),document.removeEventListener("pointerlockchange",this.onPointerLockChange),document.removeEventListener("mousemove",this.onMouseMove),this.domElement.removeEventListener("click",this.onCanvasClick)}}var Je=(s=>(s.INITIALIZING="INITIALIZING",s.BRIEFING="BRIEFING",s.READY="READY",s.ACTIVE="ACTIVE",s.OBJECTIVE_COMPLETED="OBJECTIVE_COMPLETED",s.EMERGENCY="EMERGENCY",s.RECOVERY="RECOVERY",s.COMPLETED="COMPLETED",s.FAILED="FAILED",s.PAUSED="PAUSED",s))(Je||{});const om=[{id:"obj_inspection",order:1,title:"Inspección de Soporte Vital",description:"Acceda a la consola ECLSS y ejecute la rutina de diagnóstico integral.",isCompleted:!1,isCurrent:!0,scoreWeight:12},{id:"obj_science",order:2,title:"Experimento BIOGROWTH-01",description:"Calibre fotoperiodo y suministro hidropónico en la Estación de Ciencias.",isCompleted:!1,isCurrent:!1,scoreWeight:14},{id:"obj_emergency",order:3,title:"Resolución de Contingencia de Filtración",description:"Obtenga filtro HEPA-C1 en almacén y reemplace el cartucho saturado.",isCompleted:!1,isCurrent:!1,scoreWeight:14}],cm=[{id:"tut_movement",order:1,title:"Familiarización de Desplazamiento",description:"Usa el joystick táctil o teclas WASD para caminar unos metros por el hábitat.",isCompleted:!1,isCurrent:!0,scoreWeight:20},{id:"tut_mission_control",order:2,title:"Centro de Mando & Telemetría",description:"Acércate e interactúa con el Centro de Control frontal [CENTRO DE CONTROL].",isCompleted:!1,isCurrent:!1,scoreWeight:20},{id:"tut_lifesupport",order:3,title:"Consola de Soporte Vital (ECLSS)",description:"Localiza la consola cian a la izquierda [1. SOPORTE VITAL] e inicia el diagnóstico.",isCompleted:!1,isCurrent:!1,scoreWeight:20},{id:"tut_science",order:4,title:"Módulo Botánico BIOGROWTH-01",description:"Inspecciona la Estación de Ciencias verde a la derecha [2. CIENCIA BIOLÓGICA].",isCompleted:!1,isCurrent:!1,scoreWeight:20},{id:"tut_resources",order:5,title:"Gabinete de Suministros & Herramientas",description:"Visita el almacén ámbar al fondo [3. ALMACÉN Y REPUESTOS] para completar el entrenamiento.",isCompleted:!1,isCurrent:!1,scoreWeight:20}],lm=[{id:"cert_diagnostics",order:1,title:"Auditoría Atmosférica y Filtración ECLSS",description:"Ejecute diagnóstico completo verificando parámetros O2, CO2 y presión sin desviaciones.",isCompleted:!1,isCurrent:!0,scoreWeight:10},{id:"cert_biogrowth",order:2,title:"Calibración Fotónica BIOGROWTH-01",description:"Configure fotoperiodo óptimo (Azul+Rojo) e irrigación hidropónica de precisión.",isCompleted:!1,isCurrent:!1,scoreWeight:10},{id:"cert_emergency",order:3,title:"Respuesta ante Contingencia Crítica",description:"Siga el checklist de 5 pasos con tolerancia cero a errores para reemplazar el filtro saturado.",isCompleted:!1,isCurrent:!1,scoreWeight:10},{id:"cert_airlock",order:4,title:"Verificación de Hermeticidad en Esclusa (Airlock)",description:"Inspeccione y certifique la presurización de la compuerta de salida exterior EVA.",isCompleted:!1,isCurrent:!1,scoreWeight:10}],Kn=class Kn{constructor(){w(this,"items",new Map);this.initDefaultInventory()}static getInstance(){return Kn.instance||(Kn.instance=new Kn),Kn.instance}initDefaultInventory(){this.items.set("filter_hepa_c1",{id:"filter_hepa_c1",name:"Cartucho Filtro HEPA-C1 (Módulo Secundario)",category:"component",description:"Unidad presurizada de carbón activado y membrana de microfibra de borosilicato.",inStock:!0,inPlayerPossession:!1}),this.items.set("seal_wrench",{id:"seal_wrench",name:"Llave Dinamométrica de Acople Rápido",category:"tool",description:"Herramienta de precisión para fijación de bridas de soporte vital.",inStock:!0,inPlayerPossession:!0})}getItem(e){return this.items.get(e)}getAllItems(){return Array.from(this.items.values())}hasItem(e){const t=this.items.get(e);return!!t&&t.inPlayerPossession}retrieveFilterFromCabinet(){const e=this.items.get("filter_hepa_c1");return e&&e.inStock&&!e.inPlayerPossession?(e.inStock=!1,e.inPlayerPossession=!0,j.getInstance().emit("resources:itemRetrieved",e),!0):!1}consumeFilter(){const e=this.items.get("filter_hepa_c1");return e&&e.inPlayerPossession?(e.inPlayerPossession=!1,j.getInstance().emit("resources:itemConsumed",e),!0):!1}reset(){this.initDefaultInventory()}};w(Kn,"instance");let xn=Kn;const Jn=class Jn{constructor(){w(this,"isActive",!1);w(this,"isResolved",!1);w(this,"currentStepIndex",0);w(this,"proceduralMistakes",0);w(this,"steps",[{id:"step_isolate",name:"1. Aislar Bucle Secundario",description:"Cerrar la válvula de aislamiento V-204 para evitar retorno de contaminantes.",completed:!1},{id:"step_depressurize",name:"2. Purgar y Despresurizar Caja de Filtro",description:"Aliviar presión residual hasta 0.2 bar manométricos.",completed:!1},{id:"step_replace",name:"3. Instalar Cartucho HEPA-C1 de Repuesto",description:"Insertar la nueva unidad de filtrado obtenida del Gabinete de Recursos.",completed:!1,requiredItemId:"filter_hepa_c1"},{id:"step_torque",name:"4. Ajustar Brida de Sellado Dinamométrico",description:"Aplicar 35 N·m con la llave de acople rápido para garantizar hermeticidad.",completed:!1},{id:"step_reopen",name:"5. Restablecer Flujo y Calibrar Presión",description:"Reabrir V-204 y verificar caída de presión nominal (< 12 Pa).",completed:!1}])}static getInstance(){return Jn.instance||(Jn.instance=new Jn),Jn.instance}triggerEmergency(){this.isActive||this.isResolved||(this.isActive=!0,this.currentStepIndex=0,this.proceduralMistakes=0,j.getInstance().emit("emergency:started",{timestamp:Date.now(),severity:"CRITICAL",subsystem:"ECLSS_SECONDARY_FILTRATION"}))}getIsActive(){return this.isActive}getIsResolved(){return this.isResolved}getCurrentStep(){return!this.isActive||this.currentStepIndex>=this.steps.length?null:this.steps[this.currentStepIndex]}executeStep(e){if(!this.isActive)return{success:!1,message:"No hay contingencia activa en este momento.",allComplete:!1};const t=this.steps[this.currentStepIndex];if(t.id!==e)return this.proceduralMistakes+=1,{success:!1,message:`Secuencia incorrecta. Paso esperado: "${t.name}". Respete los protocolos operacionales de SPACE Tech Labs.`,allComplete:!1};if(t.requiredItemId){if(!xn.getInstance().hasItem(t.requiredItemId))return this.proceduralMistakes+=1,{success:!1,message:"Falta componente requerido: Diríjase al Gabinete de Recursos para extraer el Cartucho HEPA-C1.",allComplete:!1};xn.getInstance().consumeFilter()}return t.completed=!0,this.currentStepIndex+=1,j.getInstance().emit("emergency:stepCompleted",{stepId:e,stepIndex:this.currentStepIndex,totalSteps:this.steps.length}),this.currentStepIndex>=this.steps.length?(this.isActive=!1,this.isResolved=!0,j.getInstance().emit("emergency:resolved",{proceduralMistakes:this.proceduralMistakes}),{success:!0,message:"¡Circuito restaurado con éxito! Condiciones atmosféricas estabilizadas.",allComplete:!0}):{success:!0,message:`Paso "${t.name}" completado correctamente.`,allComplete:!1}}getProceduralMistakes(){return this.proceduralMistakes}reset(){this.isActive=!1,this.isResolved=!1,this.currentStepIndex=0,this.proceduralMistakes=0,this.steps.forEach(e=>e.completed=!1)}};w(Jn,"instance");let di=Jn;class jo{constructor(){w(this,"id","M-001");w(this,"name","HABITAT RECOVERY");w(this,"type","standard");w(this,"objectives",[]);w(this,"isEmergencyTriggered",!1);this.reset()}reset(){this.objectives=JSON.parse(JSON.stringify(om)),this.isEmergencyTriggered=!1}getObjectives(){return this.objectives}getCompletedCount(){return this.objectives.filter(e=>e.isCompleted).length}getProgressPercent(){const e=this.objectives.length;return e===0?0:Math.round(this.getCompletedCount()/e*100)}handleLifeSupportDiagnostic(){const e=this.objectives.find(t=>t.id==="obj_inspection");if(e&&!e.isCompleted){e.isCompleted=!0,e.isCurrent=!1;const t=this.objectives.find(n=>n.id==="obj_science");t&&(t.isCurrent=!0),qe.getInstance().playSuccessTone(),j.getInstance().emit("mission:objectiveUpdated",{objectiveId:e.id,completed:!0,percent:this.getProgressPercent()})}}handleScienceCompleted(){const e=this.objectives.find(t=>t.id==="obj_science");e&&!e.isCompleted&&(e.isCompleted=!0,e.isCurrent=!1,qe.getInstance().playSuccessTone(),j.getInstance().emit("mission:objectiveUpdated",{objectiveId:e.id,completed:!0,percent:this.getProgressPercent()}),this.isEmergencyTriggered||(this.isEmergencyTriggered=!0,window.setTimeout(()=>{const t=this.objectives.find(n=>n.id==="obj_emergency");t&&(t.isCurrent=!0),di.getInstance().triggerEmergency()},1500)))}handleEmergencyResolved(){const e=this.objectives.find(t=>t.id==="obj_emergency");e&&!e.isCompleted&&(e.isCompleted=!0,e.isCurrent=!1,qe.getInstance().playSuccessTone(),j.getInstance().emit("mission:objectiveUpdated",{objectiveId:e.id,completed:!0,percent:this.getProgressPercent()}))}}class hm{constructor(){w(this,"id","M-TUTORIAL");w(this,"name","ACADEMIA: ENTRENAMIENTO DE CONTROLES & HÁBITAT");w(this,"type","tutorial");w(this,"objectives",[]);w(this,"totalDistanceMoved",0);this.reset()}reset(){this.objectives=JSON.parse(JSON.stringify(cm)),this.totalDistanceMoved=0}getObjectives(){return this.objectives}getCompletedCount(){return this.objectives.filter(e=>e.isCompleted).length}getProgressPercent(){const e=this.objectives.length;return e===0?0:Math.round(this.getCompletedCount()/e*100)}completeObjective(e,t){const n=this.objectives.find(i=>i.id===e);if(n&&!n.isCompleted){if(n.isCompleted=!0,n.isCurrent=!1,t){const i=this.objectives.find(r=>r.id===t);i&&!i.isCompleted&&(i.isCurrent=!0)}else{const i=this.objectives.find(r=>!r.isCompleted);i&&(i.isCurrent=!0)}qe.getInstance().playSuccessTone(),j.getInstance().emit("mission:objectiveUpdated",{objectiveId:n.id,completed:!0,percent:this.getProgressPercent()})}}handleMovement(e){const t=this.objectives.find(n=>n.id==="tut_movement");t&&!t.isCompleted&&(this.totalDistanceMoved+=e,this.totalDistanceMoved>=1.8&&this.completeObjective("tut_movement","tut_mission_control"))}handleInteraction(e){switch(e){case"missionControl":this.completeObjective("tut_mission_control","tut_lifesupport");break;case"lifeSupportConsole":this.completeObjective("tut_lifesupport","tut_science");break;case"scienceStation":this.completeObjective("tut_science","tut_resources");break;case"resourceCabinet":this.completeObjective("tut_resources");break}}handleLifeSupportDiagnostic(){this.completeObjective("tut_lifesupport","tut_science")}handleScienceCompleted(){this.completeObjective("tut_science","tut_resources")}}class dm{constructor(){w(this,"id","M-CERT-01");w(this,"name","EVALUACIÓN OFICIAL: CERTIFICACIÓN DE ASTRONAUTA ANÁLOGO");w(this,"type","certification");w(this,"objectives",[]);w(this,"isEmergencyTriggered",!1);this.reset()}reset(){this.objectives=JSON.parse(JSON.stringify(lm)),this.isEmergencyTriggered=!1}getObjectives(){return this.objectives}getCompletedCount(){return this.objectives.filter(e=>e.isCompleted).length}getProgressPercent(){const e=this.objectives.length;return e===0?0:Math.round(this.getCompletedCount()/e*100)}completeObjective(e,t){const n=this.objectives.find(i=>i.id===e);if(n&&!n.isCompleted){if(n.isCompleted=!0,n.isCurrent=!1,t){const i=this.objectives.find(r=>r.id===t);i&&!i.isCompleted&&(i.isCurrent=!0)}else{const i=this.objectives.find(r=>!r.isCompleted);i&&(i.isCurrent=!0)}qe.getInstance().playSuccessTone(),j.getInstance().emit("mission:objectiveUpdated",{objectiveId:n.id,completed:!0,percent:this.getProgressPercent()})}}handleLifeSupportDiagnostic(){this.completeObjective("cert_diagnostics","cert_biogrowth")}handleScienceCompleted(){this.completeObjective("cert_biogrowth","cert_emergency"),this.isEmergencyTriggered||(this.isEmergencyTriggered=!0,window.setTimeout(()=>{di.getInstance().triggerEmergency()},1200))}handleEmergencyResolved(){this.completeObjective("cert_emergency","cert_airlock")}handleInteraction(e){if(e==="airlockPanel"){const t=this.objectives.find(n=>n.id==="cert_emergency");t&&t.isCompleted&&this.completeObjective("cert_airlock")}}}class um{static calculate(e){const t=e.totalObjectivesCount>0?e.completedObjectivesCount/e.totalObjectivesCount:0,n=Math.round(t*40),i=Math.max(0,Math.round(30-e.proceduralMistakes*6)),r=Math.round(Math.max(0,Math.min(100,e.scienceAccuracy))/100*20);let a=10;if(e.timeElapsedSeconds>e.targetTimeSeconds){const d=e.timeElapsedSeconds-e.targetTimeSeconds;a=Math.max(2,Math.round(10-d/60*2.5))}const o=Math.min(100,Math.max(0,n+i+r+a));let c="COMPETENTE";o>=88?c="SOBRESALIENTE":o<70&&(c="NECESITA REVISIÓN");const l=["El aislamiento y la gestión de atmósferas en bases análogas exigen adherencia irrestricta a listas de comprobación (checklists).","En sistemas de soporte vital de circuito cerrado (ECLSS), una variación en el bucle secundario puede comprometer la remoción de CO₂.","El cultivo botánico in situ (ISRU bio-regenerativo) depende de balances exactos de PAR (Radiación Fotosintéticamente Activa) y humedad radicular."],h=[];return e.proceduralMistakes>0?h.push(`Se registraron ${e.proceduralMistakes} desvíos de procedimiento en la secuencia de emergencia. Repase la guía de aislamiento de válvulas antes del desacople.`):h.push("Ejecución procedimental impecable sin errores de secuencia."),e.scienceAccuracy<75?h.push("Mejore la calibración del fotoperiodo e irrigación para optimizar la tasa fotosintética del espécimen botánico."):h.push("Parámetros de crecimiento vegetal ajustados en rango óptimo."),a<8&&h.push("Optimice los tiempos de desplazamiento entre estaciones dentro del módulo del hábitat."),{totalScore:o,rating:c,breakdown:{objectivesScore:n,proceduralScore:i,resourcesScore:r,timeScore:a},metrics:{timeElapsedSeconds:e.timeElapsedSeconds,proceduralMistakes:e.proceduralMistakes,scienceAccuracy:e.scienceAccuracy,completedObjectivesCount:e.completedObjectivesCount},educationalNotes:l,recommendations:h}}}const Qn=class Qn{constructor(){w(this,"availableSamples",[{id:"S-01",name:"Arabidopsis Análoga",scientificName:"Arabidopsis thaliana (Ecol-Mars-1)",targetLight:70,targetWater:55,description:"Planta modelo para estudios genéticos en gravedad reducida y fotoperiodos regulados."},{id:"S-02",name:"Espirulina Biocultivo",scientificName:"Arthrospira platensis (Strain-M)",targetLight:85,targetWater:80,description:"Cianobacteria fotosintética de alto rendimiento proteico y producción de O₂."},{id:"S-03",name:"Tomate Enano Marciano",scientificName:"Solanum lycopersicum Micro-Tom",targetLight:60,targetWater:65,description:"Cultivo compacto apto para cámaras hidropónicas de hábitat con tolerancia a sales."}]);w(this,"selectedSample",this.availableSamples[0]);w(this,"lightLevel",50);w(this,"waterLevel",50);w(this,"completedResult",null)}static getInstance(){return Qn.instance||(Qn.instance=new Qn),Qn.instance}setSample(e){const t=this.availableSamples.find(n=>n.id===e);t&&(this.selectedSample=t,j.getInstance().emit("science:sampleChanged",this.selectedSample))}getSelectedSample(){return this.selectedSample}setLight(e){this.lightLevel=Math.max(0,Math.min(100,Math.round(e)))}getLight(){return this.lightLevel}setWater(e){this.waterLevel=Math.max(0,Math.min(100,Math.round(e)))}getWater(){return this.waterLevel}getCompletedResult(){return this.completedResult}executeExperiment(){const e=Math.abs(this.lightLevel-this.selectedSample.targetLight),t=Math.abs(this.waterLevel-this.selectedSample.targetWater),n=e+t,i=Math.max(0,Math.min(100,100-n));let r="CRECIMIENTO ÓPTIMO",a=94,o="";return i>=85?(r="CRECIMIENTO ÓPTIMO",a=Math.round(88+(i-85)*.8),o="Calibración fotobiológica de precisión. Tasa fotosintética nominal alcanzada."):i>=60?(r="CRECIMIENTO MODERADO",a=Math.round(62+(i-60)*1),o="Crecimiento aceptable pero con desviación del punto óptimo de saturación lumínica o nutricional."):(r="ESTRÉS VEGETAL",a=Math.round(Math.max(20,i*.7)),o="Desbalance fisiológico severo detectado: revise parámetros de PAR e irrigación hidropónica."),this.completedResult={sampleId:this.selectedSample.id,sampleName:this.selectedSample.name,appliedLight:this.lightLevel,appliedWater:this.waterLevel,accuracyScore:i,outcome:r,growthIndexPercent:a,educationalNote:o},j.getInstance().emit("science:completed",this.completedResult),this.completedResult}reset(){this.selectedSample=this.availableSamples[0],this.lightLevel=50,this.waterLevel=50,this.completedResult=null}};w(Qn,"instance");let rs=Qn;const ei=class ei{constructor(){w(this,"telemetry",{o2Percent:20.9,co2Ppm:420,cabinPressureKpa:101.3,powerKw:98.4,filterLoopStatus:"NOMINAL",diagnosticCompleted:!1});w(this,"isEmergencyActive",!1);this.bindEvents()}static getInstance(){return ei.instance||(ei.instance=new ei),ei.instance}bindEvents(){j.getInstance().on("emergency:started",()=>{this.isEmergencyActive=!0,this.telemetry.filterLoopStatus="ANOMALÍA CRÍTICA",j.getInstance().emit("lifesupport:updated",this.telemetry)}),j.getInstance().on("emergency:resolved",()=>{this.isEmergencyActive=!1,this.telemetry.filterLoopStatus="RESTAURADO",this.telemetry.co2Ppm=440,this.telemetry.o2Percent=20.8,j.getInstance().emit("lifesupport:updated",this.telemetry)})}getTelemetry(){return this.telemetry}runDiagnostic(){this.telemetry.diagnosticCompleted=!0,this.telemetry.filterLoopStatus="ADVERTENCIA";const e={steps:[{name:"1. Inyectores de O₂ Criogénico",status:"OK",detail:"Presión en colector nominal (2.4 bar)"},{name:"2. Válvulas Reguladoras Barométricas",status:"OK",detail:"Hermeticidad 101.3 kPa verificada"},{name:"3. Circuito de Filtración Secundario",status:"WARN",detail:"Restricción de flujo detectada en cartucho HEPA-C1"}],anomalyFound:!0};return j.getInstance().emit("lifesupport:diagnosticComplete",e),j.getInstance().emit("lifesupport:updated",this.telemetry),e}update(e){this.isEmergencyActive&&(this.telemetry.co2Ppm=Math.min(920,this.telemetry.co2Ppm+e*8.5),this.telemetry.o2Percent=Math.max(19.6,this.telemetry.o2Percent-e*.03),j.getInstance().emit("lifesupport:updated",this.telemetry))}reset(){this.telemetry={o2Percent:20.9,co2Ppm:420,cabinPressureKpa:101.3,powerKw:98.4,filterLoopStatus:"NOMINAL",diagnosticCompleted:!1},this.isEmergencyActive=!1}};w(ei,"instance");let as=ei;const ti=class ti{constructor(){w(this,"state",Je.INITIALIZING);w(this,"previousState",Je.INITIALIZING);w(this,"missionType","standard");w(this,"activeMission");w(this,"elapsedSeconds",0);w(this,"isTimerRunning",!1);w(this,"latestReport",null);this.activeMission=new jo,this.bindEvents()}static getInstance(){return ti.instance||(ti.instance=new ti),ti.instance}bindEvents(){j.getInstance().on("lifesupport:diagnosticComplete",()=>{var e,t;(t=(e=this.activeMission).handleLifeSupportDiagnostic)==null||t.call(e),this.checkMissionAdvancement()}),j.getInstance().on("science:completed",()=>{var e,t;(t=(e=this.activeMission).handleScienceCompleted)==null||t.call(e),this.checkMissionAdvancement()}),j.getInstance().on("emergency:started",()=>{this.setState(Je.EMERGENCY)}),j.getInstance().on("emergency:resolved",()=>{var e,t;this.setState(Je.RECOVERY),(t=(e=this.activeMission).handleEmergencyResolved)==null||t.call(e),this.checkMissionAdvancement()}),j.getInstance().on("interaction:triggered",e=>{var t,n;(n=(t=this.activeMission).handleInteraction)==null||n.call(t,e),this.checkMissionAdvancement()})}setMissionType(e){this.missionType=e,e==="tutorial"?this.activeMission=new hm:e==="certification"?this.activeMission=new dm:this.activeMission=new jo,j.getInstance().emit("mission:typeChanged",e)}getMissionType(){return this.missionType}getState(){return this.state}setState(e){this.state!==e&&(this.previousState=this.state,this.state=e,j.getInstance().emit("mission:stateChanged",{previous:this.previousState,current:this.state}))}getActiveMission(){return this.activeMission}getElapsedSeconds(){return this.elapsedSeconds}getLatestReport(){return this.latestReport}startMission(){this.resetMission(),this.setState(Je.ACTIVE),this.isTimerRunning=!0}pauseMission(){(this.state===Je.ACTIVE||this.state===Je.EMERGENCY||this.state===Je.RECOVERY)&&(this.setState(Je.PAUSED),this.isTimerRunning=!1)}resumeMission(){this.state===Je.PAUSED&&(this.setState(this.previousState||Je.ACTIVE),this.isTimerRunning=!0)}resetMission(){this.elapsedSeconds=0,this.isTimerRunning=!1,this.latestReport=null,this.activeMission.reset(),as.getInstance().reset(),rs.getInstance().reset(),xn.getInstance().reset(),di.getInstance().reset(),this.setState(Je.READY)}checkMissionAdvancement(){const e=this.activeMission.objectives.length;this.activeMission.getCompletedCount()>=e&&this.state!==Je.COMPLETED&&this.completeMission()}completeMission(){this.isTimerRunning=!1,this.setState(Je.COMPLETED);const e=rs.getInstance().getCompletedResult(),t=e?e.accuracyScore:75,n=di.getInstance().getProceduralMistakes();this.latestReport=um.calculate({completedObjectivesCount:this.activeMission.getCompletedCount(),totalObjectivesCount:this.activeMission.objectives.length,proceduralMistakes:n,scienceAccuracy:t,timeElapsedSeconds:Math.round(this.elapsedSeconds),targetTimeSeconds:fe.MISSION.TARGET_DURATION_SECONDS}),hi.getInstance().recordMissionRun({missionId:this.activeMission.id,date:new Date().toISOString(),score:this.latestReport.totalScore,timeSeconds:Math.round(this.elapsedSeconds),objectivesCompleted:this.activeMission.getCompletedCount(),proceduralScore:this.latestReport.breakdown.proceduralScore,resourcesScore:this.latestReport.breakdown.resourcesScore,efficiencyScore:this.latestReport.breakdown.timeScore}),this.missionType==="certification"?j.getInstance().emit("certification:completed",{report:this.latestReport,mission:this.activeMission}):this.missionType==="tutorial"?j.getInstance().emit("tutorial:completed",{report:this.latestReport,mission:this.activeMission}):j.getInstance().emit("mission:completed",{report:this.latestReport})}update(e){var t,n;this.isTimerRunning&&(this.elapsedSeconds+=e,this.missionType==="tutorial"&&((n=(t=this.activeMission).handleMovement)==null||n.call(t,e*.8),this.checkMissionAdvancement()),j.getInstance().emit("mission:timerTick",{elapsedSeconds:this.elapsedSeconds,formatted:vt.formatTime(this.elapsedSeconds)}),as.getInstance().update(e))}};w(ti,"instance");let Ht=ti;class fm{constructor(e,t){w(this,"camera");w(this,"inputManager");w(this,"containerEl",null);w(this,"joystickZoneEl",null);w(this,"joystickBaseEl",null);w(this,"joystickThumbEl",null);w(this,"btnInteractEl",null);w(this,"btnInteractLabelEl",null);w(this,"btnSprintEl",null);w(this,"btnJumpEl",null);w(this,"btnToggleObjectivesEl",null);w(this,"btnCloseObjectivesEl",null);w(this,"objectivesSidebarEl",null);w(this,"portraitHintEl",null);w(this,"joystickTouchId",null);w(this,"lookTouchId",null);w(this,"joystickOrigin",{x:0,y:0});w(this,"joystickRadius",45);w(this,"lookLastPos",{x:0,y:0});w(this,"lookStartPos",{x:0,y:0});w(this,"lookStartTime",0);w(this,"touchLookSensitivity",.0032);w(this,"isRunning",!1);w(this,"isVisible",!1);w(this,"isEnabled",!0);w(this,"updateOrientationNotice",()=>{var t,n;if(!sn.getInstance().getIsMobile())return;window.innerHeight>window.innerWidth&&this.isVisible?(t=this.portraitHintEl)==null||t.classList.remove("hidden"):(n=this.portraitHintEl)==null||n.classList.add("hidden")});w(this,"onJoystickTouchStart",e=>{if(!this.isEnabled||(e.preventDefault(),this.joystickTouchId!==null))return;const t=e.changedTouches[0];if(this.joystickTouchId=t.identifier,this.joystickBaseEl&&this.joystickZoneEl){const n=this.joystickZoneEl.getBoundingClientRect(),i=t.clientX-n.left,r=t.clientY-n.top;this.joystickOrigin={x:t.clientX,y:t.clientY},this.joystickBaseEl.style.left=`${i}px`,this.joystickBaseEl.style.top=`${r}px`,this.joystickBaseEl.classList.add("active"),this.joystickThumbEl&&(this.joystickThumbEl.style.transform="translate(0px, 0px)")}});w(this,"onJoystickTouchMove",e=>{if(!(!this.isEnabled||this.joystickTouchId===null)){e.preventDefault();for(let t=0;t<e.changedTouches.length;t++){const n=e.changedTouches[t];if(n.identifier===this.joystickTouchId){const i=n.clientX-this.joystickOrigin.x,r=n.clientY-this.joystickOrigin.y,a=Math.sqrt(i*i+r*r);let o=i,c=r;if(a>this.joystickRadius){const d=this.joystickRadius/a;o=i*d,c=r*d}this.joystickThumbEl&&(this.joystickThumbEl.style.transform=`translate(${o}px, ${c}px)`);const l=o/this.joystickRadius,h=-c/this.joystickRadius;this.inputManager.setTouchMove(l,h),a>this.joystickRadius*.95&&!this.isRunning?this.inputManager.setTouchRunning(!0):this.isRunning||this.inputManager.setTouchRunning(!1);break}}}});w(this,"onJoystickTouchEnd",e=>{if(this.joystickTouchId!==null){for(let t=0;t<e.changedTouches.length;t++)if(e.changedTouches[t].identifier===this.joystickTouchId){this.joystickTouchId=null,this.inputManager.setTouchMove(0,0),this.isRunning||this.inputManager.setTouchRunning(!1),this.joystickThumbEl&&(this.joystickThumbEl.style.transform="translate(0px, 0px)"),this.joystickBaseEl&&this.joystickBaseEl.classList.remove("active");break}}});w(this,"onLookTouchStart",e=>{if(!this.isEnabled||(e.preventDefault(),this.lookTouchId!==null))return;const t=e.changedTouches[0];this.lookTouchId=t.identifier,this.lookLastPos={x:t.clientX,y:t.clientY},this.lookStartPos={x:t.clientX,y:t.clientY},this.lookStartTime=performance.now()});w(this,"onLookTouchMove",e=>{if(!(!this.isEnabled||this.lookTouchId===null)){e.preventDefault();for(let t=0;t<e.changedTouches.length;t++){const n=e.changedTouches[t];if(n.identifier===this.lookTouchId){const i=n.clientX-this.lookLastPos.x,r=n.clientY-this.lookLastPos.y;this.inputManager.addLookDelta(i*this.touchLookSensitivity,r*this.touchLookSensitivity),this.lookLastPos={x:n.clientX,y:n.clientY};break}}}});w(this,"onLookTouchEnd",e=>{if(this.lookTouchId!==null)for(let t=0;t<e.changedTouches.length;t++){const n=e.changedTouches[t];if(n.identifier===this.lookTouchId){const i=performance.now()-this.lookStartTime,r=n.clientX-this.lookStartPos.x,a=n.clientY-this.lookStartPos.y,o=r*r+a*a;i<250&&o<144&&(ht.getInstance().interactAtPoint(n.clientX,n.clientY,this.camera)||ht.getInstance().interactCurrent()),this.lookTouchId=null;break}}});this.camera=e,this.inputManager=t,this.initDOMElements(),this.bindTouchEvents(),this.bindMissionEvents(),sn.getInstance().getIsMobile()&&this.initMobileUI(),j.getInstance().on("platform:modeChanged",n=>{n==="mobile"&&this.initMobileUI()})}initDOMElements(){this.containerEl=document.getElementById("mobile-controls"),this.joystickZoneEl=document.getElementById("joystick-zone"),this.joystickBaseEl=document.getElementById("joystick-base"),this.joystickThumbEl=document.getElementById("joystick-thumb"),this.btnInteractEl=document.getElementById("btn-mobile-interact"),this.btnInteractLabelEl=document.getElementById("btn-mobile-interact-label"),this.btnSprintEl=document.getElementById("btn-mobile-sprint"),this.btnJumpEl=document.getElementById("btn-mobile-jump"),this.btnToggleObjectivesEl=document.getElementById("btn-toggle-objectives"),this.btnCloseObjectivesEl=document.getElementById("btn-close-objectives"),this.objectivesSidebarEl=document.querySelector(".hud-objectives-sidebar"),this.portraitHintEl=document.getElementById("portrait-hint-banner")}initMobileUI(){var e;document.body.classList.add("is-mobile"),(e=this.portraitHintEl)==null||e.addEventListener("click",()=>{var t;(t=this.portraitHintEl)==null||t.classList.add("hidden")}),this.updateOrientationNotice(),window.addEventListener("resize",this.updateOrientationNotice),window.addEventListener("orientationchange",this.updateOrientationNotice)}bindTouchEvents(){var t,n,i,r,a,o,c,l;this.joystickZoneEl&&(this.joystickZoneEl.addEventListener("touchstart",this.onJoystickTouchStart,{passive:!1}),this.joystickZoneEl.addEventListener("touchmove",this.onJoystickTouchMove,{passive:!1}),this.joystickZoneEl.addEventListener("touchend",this.onJoystickTouchEnd,{passive:!1}),this.joystickZoneEl.addEventListener("touchcancel",this.onJoystickTouchEnd,{passive:!1}));const e=document.getElementById("touch-look-zone");e&&(e.addEventListener("touchstart",this.onLookTouchStart,{passive:!1}),e.addEventListener("touchmove",this.onLookTouchMove,{passive:!1}),e.addEventListener("touchend",this.onLookTouchEnd,{passive:!1}),e.addEventListener("touchcancel",this.onLookTouchEnd,{passive:!1})),(t=this.btnInteractEl)==null||t.addEventListener("touchstart",h=>{h.preventDefault(),h.stopPropagation(),this.triggerInteract()},{passive:!1}),(n=this.btnInteractEl)==null||n.addEventListener("click",h=>{h.preventDefault(),this.triggerInteract()}),(i=this.btnSprintEl)==null||i.addEventListener("touchstart",h=>{h.preventDefault(),h.stopPropagation(),this.toggleSprint()},{passive:!1}),(r=this.btnSprintEl)==null||r.addEventListener("click",h=>{h.preventDefault(),this.toggleSprint()}),(a=this.btnJumpEl)==null||a.addEventListener("touchstart",h=>{h.preventDefault(),h.stopPropagation(),this.inputManager.jump()},{passive:!1}),(o=this.btnJumpEl)==null||o.addEventListener("click",h=>{h.preventDefault(),this.inputManager.jump()}),(c=this.btnToggleObjectivesEl)==null||c.addEventListener("click",h=>{h.preventDefault(),this.toggleObjectivesDrawer()}),(l=this.btnCloseObjectivesEl)==null||l.addEventListener("click",h=>{h.preventDefault(),this.closeObjectivesDrawer()})}bindMissionEvents(){j.getInstance().on("interaction:hoverChanged",e=>{if(this.btnInteractEl)if(e.hasTarget&&e.interactable){if(this.btnInteractEl.classList.add("in-range"),this.btnInteractLabelEl&&(this.btnInteractLabelEl.textContent=e.interactable.name),"vibrate"in navigator)try{navigator.vibrate(12)}catch{}}else this.btnInteractEl.classList.remove("in-range"),this.btnInteractLabelEl&&(this.btnInteractLabelEl.textContent="INTERACTUAR")}),j.getInstance().on("mission:objectiveUpdated",()=>{this.updateObjectivesBadge()})}triggerInteract(){ht.getInstance().interactCurrent()}toggleSprint(){if(this.isRunning=!this.isRunning,this.inputManager.setTouchRunning(this.isRunning),this.btnSprintEl){this.btnSprintEl.classList.toggle("active",this.isRunning);const e=this.btnSprintEl.querySelector(".btn-sub");e&&(e.textContent=this.isRunning?"CORRIENDO":"CAMINAR")}}toggleObjectivesDrawer(){if(!this.objectivesSidebarEl)return;this.objectivesSidebarEl.classList.contains("mobile-expanded")?this.closeObjectivesDrawer():this.openObjectivesDrawer()}openObjectivesDrawer(){var e,t;(e=this.objectivesSidebarEl)==null||e.classList.add("mobile-expanded"),(t=this.btnToggleObjectivesEl)==null||t.classList.add("active")}closeObjectivesDrawer(){var e,t;(e=this.objectivesSidebarEl)==null||e.classList.remove("mobile-expanded"),(t=this.btnToggleObjectivesEl)==null||t.classList.remove("active")}updateObjectivesBadge(){var a;const t=Ht.getInstance().getActiveMission().getObjectives(),n=t.filter(o=>o.isCompleted).length,i=t.length,r=document.getElementById("obj-btn-count");r&&(r.textContent=`${n}/${i}`),this.btnToggleObjectivesEl&&!((a=this.objectivesSidebarEl)!=null&&a.classList.contains("mobile-expanded"))&&(this.btnToggleObjectivesEl.classList.add("pulse-notify"),setTimeout(()=>{var o;(o=this.btnToggleObjectivesEl)==null||o.classList.remove("pulse-notify")},1800))}setVisible(e){var t;this.isVisible=e,this.containerEl&&(e&&sn.getInstance().getIsMobile()?(this.containerEl.classList.remove("hidden"),this.updateOrientationNotice()):(this.containerEl.classList.add("hidden"),(t=this.portraitHintEl)==null||t.classList.add("hidden")))}setEnabled(e){var t;this.isEnabled=e,e||(this.inputManager.setTouchMove(0,0),this.joystickThumbEl&&(this.joystickThumbEl.style.transform="translate(0px, 0px)"),(t=this.joystickBaseEl)==null||t.classList.remove("active"),this.joystickTouchId=null,this.lookTouchId=null)}dispose(){window.removeEventListener("resize",this.updateOrientationNotice),window.removeEventListener("orientationchange",this.updateOrientationNotice)}}class pm{constructor(e){w(this,"renderer");w(this,"currentSession",null);w(this,"isVRActive",!1);this.renderer=e,this.bindEvents()}bindEvents(){this.renderer.xr.addEventListener("sessionstart",()=>{this.isVRActive=!0,this.currentSession=this.renderer.xr.getSession(),sn.getInstance().setMode("webxr"),j.getInstance().emit("xr:sessionStart",this.currentSession)}),this.renderer.xr.addEventListener("sessionend",()=>{this.isVRActive=!1,this.currentSession=null,sn.getInstance().setMode("desktop"),j.getInstance().emit("xr:sessionEnd")})}async enterVR(){if(!("xr"in navigator))return console.warn("[XRManager] WebXR not available in navigator"),!1;try{const e={requiredFeatures:["local-floor"],optionalFeatures:["hand-tracking","bounded-floor"]},t=await navigator.xr.requestSession("immersive-vr",e);return await this.renderer.xr.setSession(t),!0}catch(e){console.error("[XRManager] Failed to start WebXR session:",e);try{const t=await navigator.xr.requestSession("immersive-vr");return await this.renderer.xr.setSession(t),!0}catch(t){return console.error("[XRManager] Retry failed:",t),alert("No se pudo inicializar la sesión WebXR. Asegúrate de estar en un visor compatible (Meta Quest Browser) o con WebXR habilitado."),!1}}}async exitVR(){if(this.currentSession)try{await this.currentSession.end()}catch(e){console.warn("[XRManager] Error ending session:",e)}}getIsVRActive(){return this.isVRActive}getSession(){return this.currentSession}}class mm{constructor(e,t){w(this,"renderer");w(this,"cameraRig");w(this,"controllers",[]);this.renderer=e,this.cameraRig=t,this.setupControllers()}setupControllers(){for(let e=0;e<2;e++){const t=this.renderer.xr.getController(e),n=this.renderer.xr.getControllerGrip(e),i=new At().setFromPoints([new R(0,0,0),new R(0,0,-4.5)]),r=new Zs({color:fe.COLORS.TECH_CYAN,transparent:!0,opacity:.65}),a=new Yp(i,r);a.name=`RayLine_${e}`,t.add(a);const o=new ci(.015,.025,16),c=new lt({color:fe.COLORS.TECH_CYAN,side:Lt}),l=new X(o,c);l.position.set(0,0,-4.5),l.visible=!1,t.add(l);const h=this.createControllerModel(e===0?"Left":"Right");n.add(h),this.cameraRig.add(t),this.cameraRig.add(n),this.controllers.push({controller:t,grip:n,rayLine:a,reticle:l,index:e})}}createControllerModel(e){const t=new $e;t.name=`ProceduralController_${e}`;const n=new bt(.018,.022,.12,12),i=new ge({color:1712432,metalness:.8,roughness:.3}),r=new X(n,i);r.rotation.x=Math.PI/4,r.position.set(0,-.03,.04),t.add(r);const a=new _n(.045,.006,8,24),o=new ge({color:2963272,metalness:.9,roughness:.2}),c=new X(a,o);c.rotation.x=Math.PI/3,c.position.set(0,.02,-.03),t.add(c);const l=new gn(.005,8,8),h=new lt({color:fe.COLORS.TECH_CYAN}),d=new X(l,h);return d.position.set(0,.01,-.01),t.add(d),t}setRayVisibility(e){for(const t of this.controllers)t.rayLine.visible=e}}class gm{constructor(e,t,n){w(this,"controllerManager");w(this,"cameraRig");w(this,"renderer");w(this,"tempMatrix",new at);w(this,"rayOrigin",new R);w(this,"rayDirection",new R);w(this,"snapTurnCoolDown",0);this.controllerManager=e,this.cameraRig=t,this.renderer=n,this.bindControllerEvents()}bindControllerEvents(){for(const e of this.controllerManager.controllers)e.controller.addEventListener("selectstart",()=>this.onSelectStart(e)),e.controller.addEventListener("selectend",()=>this.onSelectEnd(e))}onSelectStart(e){this.triggerHaptic(e.index,.5,40),this.computeControllerRay(e.controller);const t=ht.getInstance().testRay(this.rayOrigin,this.rayDirection);t&&(this.triggerHaptic(e.index,.8,80),ht.getInstance().interactDirect(t.id))}onSelectEnd(e){}triggerHaptic(e,t=.5,n=50){const i=this.renderer.xr.getSession();if(!i||!i.inputSources)return;const r=i.inputSources[e];if(r&&r.gamepad&&r.gamepad.hapticActuators&&r.gamepad.hapticActuators.length>0)try{r.gamepad.hapticActuators[0].pulse(t,n)}catch{}}computeControllerRay(e){this.tempMatrix.identity().extractRotation(e.matrixWorld),this.rayOrigin.setFromMatrixPosition(e.matrixWorld),this.rayDirection.set(0,0,-1).applyMatrix4(this.tempMatrix).normalize()}update(e){const t=this.renderer.xr.getSession();if(!t||!t.inputSources)return;for(const a of this.controllerManager.controllers)this.computeControllerRay(a.controller),ht.getInstance().testRay(this.rayOrigin,this.rayDirection)?(a.rayLine.material=new Zs({color:fe.COLORS.MARS_ORANGE,transparent:!0,opacity:.95}),a.reticle.visible=!0):(a.rayLine.material=new Zs({color:fe.COLORS.TECH_CYAN,transparent:!0,opacity:.5}),a.reticle.visible=!1);let n=0,i=0,r=0;for(let a=0;a<t.inputSources.length;a++){const o=t.inputSources[a];if(!o.gamepad||!o.gamepad.axes)continue;const c=o.gamepad.axes,l=c.length>=4?c[2]:c[0],h=c.length>=4?c[3]:c[1];o.handedness==="left"?(Math.abs(l)>fe.CONTROLS.CONTROLLER_DEADZONE&&(n=l),Math.abs(h)>fe.CONTROLS.CONTROLLER_DEADZONE&&(i=h)):o.handedness==="right"&&Math.abs(l)>.6&&(r=l)}if(this.snapTurnCoolDown>0)this.snapTurnCoolDown-=e;else if(Math.abs(r)>.6){const a=r>0?-Math.PI/6:Math.PI/6;this.cameraRig.rotateY(a),this.snapTurnCoolDown=.35}if(Math.abs(n)>0||Math.abs(i)>0){const a=fe.CONTROLS.WALK_SPEED,o=new R(0,0,-1).applyAxisAngle(new R(0,1,0),this.cameraRig.rotation.y),c=new R(1,0,0).applyAxisAngle(new R(0,1,0),this.cameraRig.rotation.y),l=o.multiplyScalar(-i*a*e).add(c.multiplyScalar(n*a*e)),h=this.cameraRig.position.clone().add(l),d=vt.clampToHabitatWalkable(h.x,h.z,{minX:-16.85,maxX:fe.HABITAT.WALKABLE_RADIUS,minZ:-16.85,maxZ:fe.HABITAT.WALKABLE_RADIUS});Math.sqrt(d.x*d.x+d.z*d.z)<=fe.HABITAT.WALKABLE_RADIUS&&(this.cameraRig.position.x=d.x,this.cameraRig.position.z=d.z)}}}const ni=class ni{constructor(){w(this,"textureCache",new Map)}static getInstance(){return ni.instance||(ni.instance=new ni),ni.instance}createTechGridTexture(e=512,t=512,n="#1a2433",i="#00e5ff",r=32){const a=`tech_grid_${e}_${t}_${n}_${i}_${r}`;if(this.textureCache.has(a))return this.textureCache.get(a);const o=document.createElement("canvas");o.width=e,o.height=t;const c=o.getContext("2d");c.fillStyle=n,c.fillRect(0,0,e,t),c.strokeStyle="rgba(0, 229, 255, 0.08)",c.lineWidth=1;for(let h=0;h<=e;h+=r/4)c.beginPath(),c.moveTo(h,0),c.lineTo(h,t),c.stroke();for(let h=0;h<=t;h+=r/4)c.beginPath(),c.moveTo(0,h),c.lineTo(e,h),c.stroke();c.strokeStyle=i,c.lineWidth=1.5;for(let h=0;h<=e;h+=r)c.beginPath(),c.moveTo(h,0),c.lineTo(h,t),c.stroke();for(let h=0;h<=t;h+=r)c.beginPath(),c.moveTo(0,h),c.lineTo(e,h),c.stroke();c.fillStyle="rgba(255, 255, 255, 0.4)",c.font="10px monospace",c.fillText("SPACE TECH LABS // SEC-01",12,24),c.fillText("ARGYRE ANALOG HABITAT",12,t-12);const l=new ts(o);return l.wrapS=si,l.wrapT=si,this.textureCache.set(a,l),l}createConsoleCanvas(e=512,t=320){const n=document.createElement("canvas");n.width=e,n.height=t;const i=n.getContext("2d"),r=new ts(n);return r.minFilter=It,r.magFilter=It,{texture:r,canvas:n,ctx:i,update:()=>{r.needsUpdate=!0}}}createFloorTexture(){const e="habitat_white_cleanroom_floor_black_margins";if(this.textureCache.has(e))return this.textureCache.get(e);const t=document.createElement("canvas");t.width=512,t.height=512;const n=t.getContext("2d");n.fillStyle="#f8fafc",n.fillRect(0,0,512,512),n.fillStyle="#ffffff";for(let r=0;r<512;r+=64)for(let a=0;a<512;a+=64)n.fillRect(r+4,a+4,56,56);n.strokeStyle="#0f172a",n.lineWidth=3.5;for(let r=0;r<=512;r+=64)n.beginPath(),n.moveTo(r,0),n.lineTo(r,512),n.stroke();for(let r=0;r<=512;r+=64)n.beginPath(),n.moveTo(0,r),n.lineTo(512,r),n.stroke();n.strokeStyle="#020617",n.lineWidth=2.5;for(let r=0;r<=512;r+=64)for(let a=0;a<=512;a+=64)n.beginPath(),n.moveTo(r-6,a),n.lineTo(r+6,a),n.moveTo(r,a-6),n.lineTo(r,a+6),n.stroke();n.strokeStyle="#020617",n.lineWidth=5,n.strokeRect(0,0,512,512),n.fillStyle="#0f172a",n.fillRect(0,250,512,12),n.fillStyle="#00e5ff",n.fillRect(0,254,512,4);const i=new ts(t);return i.wrapS=si,i.wrapT=si,i.repeat.set(10,10),this.textureCache.set(e,i),i}};w(ni,"instance");let os=ni;class _m{constructor(){w(this,"group");w(this,"dustParticles",null);w(this,"dustPositions",null);this.group=new $e,this.group.name="HabitatEnvironment",this.createSkyDome(),this.createMartianTerrain(),this.createMartianSun(),this.createAtmosphericDust()}createSkyDome(){const e=new gn(180,24,16);e.scale(-1,1,1);const t=`
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
    `,i=new Dn({vertexShader:t,fragmentShader:n,side:Gt,depthWrite:!1}),r=new X(e,i);this.group.add(r)}createMartianTerrain(){const e=new Xt(320,320,64,64);e.rotateX(-Math.PI/2);const t=e.attributes.position;for(let c=0;c<t.count;c++){const l=t.getX(c),h=t.getZ(c);t.setY(c,vt.getMartianTerrainHeight(l,h))}e.computeVertexNormals();const n=new ge({color:fe.COLORS.MARS_TERRAIN,roughness:.95,metalness:.05,flatShading:!0}),i=new X(e,n);i.position.set(0,0,0),i.receiveShadow=!0,this.group.add(i);const r=new ss(1,1),a=new ge({color:8534814,roughness:.9,metalness:.1}),o=55;for(let c=0;c<o;c++){const l=Math.random()*Math.PI*2,h=26.5+Math.random()*75,d=Math.cos(l)*h,f=Math.sin(l)*h;if(d>14&&d<28&&f>1.5&&f<10.5)continue;const m=new X(r,a),_=.5+Math.random()*1.8;m.scale.set(_,_*(.6+Math.random()*.5),_),m.position.set(d,_*.35-.3,f),m.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI),m.castShadow=!0,this.group.add(m)}}createMartianSun(){const e=new gn(2.5,16,16),t=new lt({color:16774112}),n=new X(e,t);n.position.set(60,45,-100),this.group.add(n);const i=new ci(2.6,6.5,24),r=new lt({color:16764032,transparent:!0,opacity:.35,side:Lt}),a=new X(i,r);a.position.copy(n.position),a.lookAt(0,0,0),this.group.add(a)}createAtmosphericDust(){const t=new At,n=new Float32Array(120*3);for(let r=0;r<120;r++)n[r*3]=(Math.random()-.5)*30,n[r*3+1]=Math.random()*8,n[r*3+2]=-17.5-Math.random()*15;t.setAttribute("position",new Kt(n,3));const i=new Ic({color:16747109,size:.08,transparent:!0,opacity:.65});this.dustParticles=new $p(t,i),this.dustPositions=n,this.group.add(this.dustParticles)}update(e){if(this.dustParticles&&this.dustPositions){const t=this.dustPositions.length/3;for(let n=0;n<t;n++)this.dustPositions[n*3]+=.8*e,this.dustPositions[n*3+1]+=Math.sin(Date.now()*.001+n)*.1*e,this.dustPositions[n*3]>18&&(this.dustPositions[n*3]=-18);this.dustParticles.geometry.attributes.position.needsUpdate=!0}}}class vm{constructor(){w(this,"group");w(this,"ambientLight");w(this,"hemisphereLight");w(this,"sunLight");w(this,"interiorDownlights",[]);w(this,"workstationLights",[]);w(this,"emergencyLights",[]);w(this,"isEmergencyActive",!1);w(this,"pulseTime",0);this.group=new $e,this.group.name="HabitatLighting",this.ambientLight=new em(16777215,1.15),this.group.add(this.ambientLight),this.hemisphereLight=new Zp(16317183,14870768,.95),this.group.add(this.hemisphereLight),this.sunLight=new Qp(16765348,1.4),this.sunLight.position.set(40,30,-60),this.sunLight.castShadow=!0,this.sunLight.shadow.mapSize.width=1024,this.sunLight.shadow.mapSize.height=1024,this.sunLight.shadow.camera.near=10,this.sunLight.shadow.camera.far=150,this.sunLight.shadow.camera.left=-20,this.sunLight.shadow.camera.right=20,this.sunLight.shadow.camera.top=20,this.sunLight.shadow.camera.bottom=-20,this.sunLight.shadow.bias=-.001,this.group.add(this.sunLight),[new R(0,fe.HABITAT.HEIGHT-.35,0),new R(0,fe.HABITAT.HEIGHT-.35,-7.5),new R(0,fe.HABITAT.HEIGHT-.35,5.5),new R(-10.5,fe.HABITAT.HEIGHT-.35,7),new R(-10.5,fe.HABITAT.HEIGHT-.35,-7.5),new R(10.5,fe.HABITAT.HEIGHT-.35,-5),new R(11.5,fe.HABITAT.HEIGHT-.35,-10.5),new R(9.5,fe.HABITAT.HEIGHT-.35,5),new R(13.5,fe.HABITAT.HEIGHT-.35,7.5),new R(18.2,fe.HABITAT.HEIGHT-.35,7.5)].forEach((i,r)=>{const a=new zs(16317183,2.1,18,1.3);a.position.copy(i),a.name=`InteriorDownlight_${r}`,this.group.add(a),this.interiorDownlights.push(a)}),[{name:"Task_LifeSupport",pos:new R(-2.8,2.6,6),color:58879,intensity:2,distance:7.5},{name:"Task_ScienceStation",pos:new R(9.5,2.6,-4.8),color:58998,intensity:2,distance:7.5},{name:"Task_ResourceCabinet",pos:new R(2.8,2.6,6),color:16758605,intensity:2,distance:7.5},{name:"Task_MissionControl",pos:new R(0,2.6,-9.5),color:3718648,intensity:2.2,distance:8.5},{name:"Task_Airlock",pos:new R(13.5,2.6,7.5),color:16777215,intensity:2,distance:7.5},{name:"Task_MessHall",pos:new R(-10.5,2.6,7),color:16776171,intensity:2,distance:9},{name:"Task_CrewQuarters",pos:new R(-10.5,2.6,-8),color:14742270,intensity:1.8,distance:9},{name:"Task_GeologyLab",pos:new R(11.5,2.6,-10.5),color:11006928,intensity:2,distance:9},{name:"Task_SuitBay",pos:new R(9.5,2.6,5),color:16766464,intensity:2,distance:8},{name:"Task_ExteriorAirlock",pos:new R(18.2,2.6,7.5),color:16777215,intensity:2.4,distance:14}].forEach(i=>{const r=new zs(i.color,i.intensity,i.distance,1.5);r.position.copy(i.pos),r.name=i.name,this.group.add(r),this.workstationLights.push(r)}),[new R(-8,fe.HABITAT.HEIGHT-.5,0),new R(8,fe.HABITAT.HEIGHT-.5,0),new R(0,fe.HABITAT.HEIGHT-.5,-8),new R(0,fe.HABITAT.HEIGHT-.5,8)].forEach((i,r)=>{const a=new zs(fe.COLORS.TECH_RED,0,10,1.8);a.position.copy(i),a.name=`EmergencyLight_${r}`,this.group.add(a),this.emergencyLights.push(a)})}setEmergencyMode(e){this.isEmergencyActive=e,e?(this.ambientLight.color.setHex(3342341),this.ambientLight.intensity=.35,this.hemisphereLight.intensity=.25,this.interiorDownlights.forEach(t=>{t.intensity=.25}),this.workstationLights.forEach(t=>{t.intensity=.35})):(this.ambientLight.color.setHex(16777215),this.ambientLight.intensity=1.15,this.hemisphereLight.intensity=.95,this.interiorDownlights.forEach(t=>{t.color.setHex(16317183),t.intensity=1.85}),this.workstationLights.forEach(t=>{t.intensity=1.8}),this.emergencyLights.forEach(t=>{t.intensity=0}))}update(e){if(this.isEmergencyActive){this.pulseTime+=e*4.5;const n=.5+(Math.sin(this.pulseTime)+1)*.5*2.8;this.emergencyLights.forEach(i=>{i.intensity=n})}}}class xm{constructor(){w(this,"group");w(this,"lifeSupportCanvasUpdate");w(this,"lifeSupportCtx");w(this,"scienceCanvasUpdate");w(this,"scienceCtx");w(this,"lifeSupportConsole");w(this,"scienceStation");w(this,"resourceCabinet");w(this,"airlockPanel");w(this,"missionControlPanel");w(this,"filterCartridgeMesh");w(this,"animTime",0);w(this,"hologramMesh");this.group=new $e,this.group.name="HabitatObjects",this.buildMissionControl(),this.buildCentralHologram(),this.buildLifeSupportConsole(),this.buildScienceStation(),this.buildResourceCabinet(),this.buildAirlock(),this.buildMessHall(),this.buildCrewQuarters(),this.buildGeologyLab(),this.buildSuitBay(),this.buildMartianExteriorProps()}createInteractionBadge(e,t,n=fe.COLORS.TECH_CYAN,i=1.6){const r=new $e;r.position.y=i,r.name=`Badge_${e}`;const a=new ci(.24,.32,32),o=new lt({color:n,side:Lt,transparent:!0,opacity:.85}),c=new X(a,o);c.name="badge_ring",c.rotation.x=Math.PI/2,r.add(c);const l=new oa(.12,0),h=new lt({color:16777215,wireframe:!1}),d=new X(l,h);d.name="badge_diamond",r.add(d);try{const f=document.createElement("canvas");f.width=512,f.height=128;const m=f.getContext("2d");if(m){m.fillStyle="rgba(8, 12, 22, 0.88)",m.beginPath();const _=`#${n.toString(16).padStart(6,"0")}`;m.roundRect(16,16,480,96,24),m.fill(),m.strokeStyle=_,m.lineWidth=5,m.stroke(),m.shadowColor=_,m.shadowBlur=12,m.fillStyle="#ffffff",m.font='bold 36px "Rajdhani", "Orbitron", sans-serif',m.textAlign="center",m.textBaseline="middle",m.fillText(t,256,64);const g=new ts(f);g.minFilter=It;const p=new Cc({map:g,transparent:!0,depthTest:!1}),u=new qp(p);u.name="badge_sprite",u.scale.set(1.5,.38,1),u.position.set(0,.38,0),r.add(u)}}catch{}return r}buildMissionControl(){this.missionControlPanel=new $e,this.missionControlPanel.name="missionControlPanel",this.missionControlPanel.position.set(0,0,-9.5);const e=new he(4.4,.95,1.4),t=new ge({color:16317180,roughness:.22,metalness:.12}),n=new X(e,t);n.position.y=.475,n.castShadow=!0,n.receiveShadow=!0,this.missionControlPanel.add(n);const i=new he(4.46,.06,1.46),r=new ge({color:593174,roughness:.5,metalness:.5}),a=new X(i,r);a.position.y=.96,this.missionControlPanel.add(a);const o=new he(4.44,.12,1.44),c=new X(o,r);c.position.y=.06,this.missionControlPanel.add(c);const l=new he(3.2,.95,.08),h=new ge({color:329746,roughness:.15,metalness:.85,emissive:205880,emissiveIntensity:.7}),d=new X(l,h);d.position.set(0,1.5,-.25),d.rotation.x=-.1,this.missionControlPanel.add(d);const f=new he(3.28,1.02,.12),m=new X(f,r);m.position.copy(d.position),m.position.z-=.03,m.rotation.copy(d.rotation),this.missionControlPanel.add(m);const _=new he(3.24,.98,.04),g=new lt({color:fe.COLORS.TECH_CYAN,wireframe:!0}),p=new X(_,g);p.position.copy(d.position),p.position.z+=.02,p.rotation.copy(d.rotation),this.missionControlPanel.add(p);const u=this.createInteractionBadge("MissionControl","CENTRO DE CONTROL",fe.COLORS.TECH_CYAN,2.15);this.missionControlPanel.add(u),this.group.add(this.missionControlPanel);const M={id:"missionControl",name:"Centro de Mando y Telemetría",actionPrompt:"Consultar estado general de la misión",object3D:this.missionControlPanel,canInteract:()=>!0,onHoverStart:()=>{u.scale.set(1.2,1.2,1.2)},onHoverEnd:()=>{u.scale.set(1,1,1)},onInteract:()=>{j.getInstance().emit("ui:openBriefing")}};ht.getInstance().register(M)}buildCentralHologram(){const e=new $e;e.name="CentralHologram",e.position.set(0,0,-2.5);const t=new bt(.85,.9,.12,32),n=new ge({color:593174,roughness:.5,metalness:.5}),i=new X(t,n);i.position.y=.06,e.add(i);const r=new bt(.75,.82,.38,32),a=new ge({color:16317180,roughness:.2,metalness:.15}),o=new X(r,a);o.position.y=.25,e.add(o);const c=new _n(.72,.03,12,32),l=new X(c,n);l.rotation.x=Math.PI/2,l.position.y=.44,e.add(l);const h=new ci(.35,.65,32),d=new lt({color:58879,side:Lt}),f=new X(h,d);f.rotation.x=-Math.PI/2,f.position.y=.445,e.add(f);const m=new gn(.55,24,20),_=new lt({color:58879,wireframe:!0,transparent:!0,opacity:.75});this.hologramMesh=new X(m,_),this.hologramMesh.position.y=1.25,e.add(this.hologramMesh);const g=new ci(.72,.76,32),p=new lt({color:3718648,side:Lt,transparent:!0,opacity:.55}),u=new X(g,p);u.rotation.x=Math.PI/3,u.position.y=1.25,e.add(u),this.group.add(e)}buildLifeSupportConsole(){this.lifeSupportConsole=new $e,this.lifeSupportConsole.name="lifeSupportConsole",this.lifeSupportConsole.position.set(-2.8,0,6),this.lifeSupportConsole.rotation.y=Math.PI-.25;const e=new ge({color:593174,roughness:.5,metalness:.5}),t=new he(2.4,2,.95),n=new ge({color:16317180,roughness:.25,metalness:.15}),i=new X(t,n);i.position.y=1,i.castShadow=!0,i.receiveShadow=!0,this.lifeSupportConsole.add(i);const r=new he(2.46,.14,1),a=new X(r,e);a.position.y=.07,this.lifeSupportConsole.add(a);const o=new he(1.86,1.16,.06),c=new X(o,e);c.position.set(0,1.25,.47),this.lifeSupportConsole.add(c);const l=os.getInstance().createConsoleCanvas(512,320);this.lifeSupportCtx=l.ctx,this.lifeSupportCanvasUpdate=l.update,this.renderLifeSupportCanvas(20.9,420,101.3,"NOMINAL");const h=new Xt(1.8,1.1),d=new lt({map:l.texture}),f=new X(h,d);f.position.set(0,1.25,.51),this.lifeSupportConsole.add(f);const m=this.createInteractionBadge("LifeSupport","1. SOPORTE VITAL",58879,2.3);this.lifeSupportConsole.add(m),this.group.add(this.lifeSupportConsole);const _={id:"lifeSupportConsole",name:"Consola de Soporte Vital",actionPrompt:"Inspeccionar lecturas atmosféricas y filtración",object3D:this.lifeSupportConsole,canInteract:()=>!0,onHoverStart:()=>{m.scale.set(1.2,1.2,1.2)},onHoverEnd:()=>{m.scale.set(1,1,1)},onInteract:()=>{j.getInstance().emit("ui:openConsole","lifesupport")}};ht.getInstance().register(_)}renderLifeSupportCanvas(e,t,n,i){var l;if(!this.lifeSupportCtx)return;const r=this.lifeSupportCtx,a=512,o=320;r.fillStyle="#0a0e17",r.fillRect(0,0,a,o),r.fillStyle="#00e5ff",r.font="bold 20px monospace",r.fillText("SPACE TECH LABS // LIFE SUPPORT SYS",20,36),r.strokeStyle="rgba(0, 229, 255, 0.4)",r.lineWidth=2,r.beginPath(),r.moveTo(20,48),r.lineTo(a-20,48),r.stroke(),r.font="14px monospace",r.fillStyle="#94a3b8",r.fillText("OXÍGENO (O₂):",24,88),r.fillStyle=e<19.5?"#ff1744":"#00e676",r.font="bold 28px monospace",r.fillText(`${e.toFixed(1)} %`,24,122),r.font="14px monospace",r.fillStyle="#94a3b8",r.fillText("DIÓXIDO DE CARBONO (CO₂):",270,88),r.fillStyle=t>800?"#ff1744":"#00e5ff",r.font="bold 28px monospace",r.fillText(`${Math.round(t)} ppm`,270,122),r.font="14px monospace",r.fillStyle="#94a3b8",r.fillText("PRESIÓN CABINA:",24,180),r.fillStyle="#f8fafc",r.font="bold 28px monospace",r.fillText(`${n.toFixed(1)} kPa`,24,214),r.font="14px monospace",r.fillStyle="#94a3b8",r.fillText("BUCLE FILTRACIÓN:",270,180);const c=i.includes("ANOMALÍA")||i.includes("FALLA");r.fillStyle=c?"#ff1744":"#00e676",r.font="bold 24px monospace",r.fillText(i,270,214),r.fillStyle="rgba(0, 229, 255, 0.15)",r.fillRect(20,245,a-40,50),r.strokeStyle="#00e5ff",r.strokeRect(20,245,a-40,50),r.fillStyle="#ffffff",r.font="bold 16px monospace",r.textAlign="center",r.fillText("[ CLIC / GATILLO: ABRIR DIAGNÓSTICO DETALLADO ]",a/2,276),r.textAlign="left",(l=this.lifeSupportCanvasUpdate)==null||l.call(this)}buildScienceStation(){this.scienceStation=new $e,this.scienceStation.name="scienceStation",this.scienceStation.position.set(9.5,0,-4.8),this.scienceStation.rotation.y=-Math.PI/3;const e=new ge({color:593174,roughness:.5,metalness:.5}),t=new he(2.8,.9,1.1),n=new ge({color:16317180,roughness:.2,metalness:.15}),i=new X(t,n);i.position.y=.45,i.castShadow=!0,i.receiveShadow=!0,this.scienceStation.add(i);const r=new he(2.84,.12,1.14),a=new X(r,e);a.position.y=.06,this.scienceStation.add(a);const o=new he(2.82,.04,1.12),c=new X(o,e);c.position.y=.91,this.scienceStation.add(c);const l=new bt(.38,.38,.75,24),h=new Lc({color:16777215,transmission:.9,opacity:.35,transparent:!0,roughness:.1,metalness:.1,ior:1.5}),d=new X(l,h);d.position.set(0,1.35,0),this.scienceStation.add(d);const f=new bt(.42,.42,.08,24),m=new ge({color:16777215,metalness:.4,roughness:.2}),_=new X(f,m);_.position.set(0,.97,0);const g=new X(f,m);g.position.set(0,1.73,0),this.scienceStation.add(_,g);const p=new _n(.42,.02,8,24),u=new X(p,e);u.rotation.x=Math.PI/2,u.position.set(0,1.01,0);const M=new X(p,e);M.rotation.x=Math.PI/2,M.position.set(0,1.69,0),this.scienceStation.add(u,M);const v=new bt(.015,.02,.32,8),S=new ge({color:3706428,roughness:.8}),I=new X(v,S);I.position.set(0,1.25,0),this.scienceStation.add(I);const A=new gn(.09,8,8);A.scale(1.8,.4,1.2);const C=new ge({color:5025616,roughness:.6});for(let q=0;q<3;q++){const Y=new X(A,C);Y.position.set(Math.cos(q*Math.PI*2/3)*.09,1.38,Math.sin(q*Math.PI*2/3)*.09),Y.rotation.y=q*Math.PI*2/3,this.scienceStation.add(Y)}const O=new zs(13959417,.8,2.5);O.position.set(0,1.68,0),this.scienceStation.add(O);const x=new he(1,.7,.06),b=new X(x,e);b.position.set(-.75,1.3,.25),b.rotation.y=.2,this.scienceStation.add(b);const U=os.getInstance().createConsoleCanvas(512,320);this.scienceCtx=U.ctx,this.scienceCanvasUpdate=U.update,this.renderScienceCanvas("BIOGROWTH-01","ESPERANDO CALIBRACIÓN",65,45);const F=new Xt(.92,.62),$=new lt({map:U.texture}),L=new X(F,$);L.position.set(-.75,1.3,.285),L.rotation.y=.2,this.scienceStation.add(L);const N=this.createInteractionBadge("ScienceStation","2. CIENCIA BIOLÓGICA",fe.COLORS.TECH_GREEN,2.15);this.scienceStation.add(N),this.group.add(this.scienceStation);const z={id:"scienceStation",name:"Estación de Ciencias BIOGROWTH-01",actionPrompt:"Configurar espectro de luz y riego hidropónico",object3D:this.scienceStation,canInteract:()=>!0,onHoverStart:()=>{N.scale.set(1.2,1.2,1.2)},onHoverEnd:()=>{N.scale.set(1,1,1)},onInteract:()=>{j.getInstance().emit("ui:openConsole","science")}};ht.getInstance().register(z)}renderScienceCanvas(e,t,n,i){var a;if(!this.scienceCtx)return;const r=this.scienceCtx;r.fillStyle="#081016",r.fillRect(0,0,512,320),r.fillStyle="#00e5ff",r.font="bold 20px monospace",r.fillText("LABORATORIO // "+e,20,36),r.strokeStyle="#00e5ff",r.lineWidth=1,r.strokeRect(20,48,472,1),r.fillStyle="#94a3b8",r.font="14px monospace",r.fillText("ESTADO DEL CULTIVO:",24,85),r.fillStyle=t==="CRECIMIENTO ÓPTIMO"?"#00e676":"#ffab00",r.font="bold 22px monospace",r.fillText(t,24,118),r.fillStyle="#94a3b8",r.font="14px monospace",r.fillText(`FOTOPERIODO (LUZ): ${n}%`,24,165),r.fillStyle="#94a3b8",r.fillText(`IRRIGACIÓN NUTRIENTES: ${i}%`,24,215),r.fillStyle="rgba(0, 229, 255, 0.15)",r.fillRect(20,250,472,45),r.fillStyle="#ffffff",r.font="bold 15px monospace",r.textAlign="center",r.fillText("[ CLIC / GATILLO: AJUSTAR EXPERIMENTO ]",256,278),r.textAlign="left",(a=this.scienceCanvasUpdate)==null||a.call(this)}buildResourceCabinet(){this.resourceCabinet=new $e,this.resourceCabinet.name="resourceCabinet",this.resourceCabinet.position.set(2.8,0,6),this.resourceCabinet.rotation.y=Math.PI+.25;const e=new ge({color:593174,roughness:.5,metalness:.5}),t=new he(1.8,2.3,.9),n=new ge({color:16317180,roughness:.25,metalness:.15}),i=new X(t,n);i.position.y=1.15,i.castShadow=!0,this.resourceCabinet.add(i);const r=new he(1.86,.14,.96),a=new X(r,e);a.position.y=.07,this.resourceCabinet.add(a);const o=new he(1.86,.08,.96),c=new X(o,e);c.position.y=2.32,this.resourceCabinet.add(c);const l=new he(.04,2.1,.02),h=new X(l,e);h.position.set(0,1.15,.46),this.resourceCabinet.add(h);const d=new Xt(1.5,.16),f=new lt({color:fe.COLORS.TECH_AMBER}),m=new X(d,f);m.position.set(0,1.9,.465),this.resourceCabinet.add(m);const _=new bt(.2,.2,.5,16),g=new ge({color:6583435,metalness:.8,roughness:.3});this.filterCartridgeMesh=new X(_,g),this.filterCartridgeMesh.position.set(0,1.05,.3),this.filterCartridgeMesh.rotation.z=Math.PI/2,this.resourceCabinet.add(this.filterCartridgeMesh);const p=new _n(.21,.02,8,16),u=new lt({color:fe.COLORS.TECH_CYAN}),M=new X(p,u);this.filterCartridgeMesh.add(M);const v=this.createInteractionBadge("ResourceCabinet","3. ALMACÉN Y REPUESTOS",fe.COLORS.TECH_AMBER,2.4);this.resourceCabinet.add(v),this.group.add(this.resourceCabinet);const S={id:"resourceCabinet",name:"Gabinete de Recursos y Repuestos",actionPrompt:"Extraer unidad de filtración HEPA-C1 de repuesto",object3D:this.resourceCabinet,canInteract:()=>!0,onHoverStart:()=>{v.scale.set(1.2,1.2,1.2)},onHoverEnd:()=>{v.scale.set(1,1,1)},onInteract:()=>{j.getInstance().emit("ui:openConsole","resources")}};ht.getInstance().register(S)}buildAirlock(){this.airlockPanel=new $e,this.airlockPanel.name="airlockPanel",this.airlockPanel.position.set(13.5,0,7.5),this.airlockPanel.rotation.y=-Math.PI+.4;const e=new ge({color:593174,roughness:.5,metalness:.5}),t=new he(2,2.6,.35),n=new ge({color:16317180,metalness:.4,roughness:.3}),i=new X(t,n);i.position.y=1.3,i.castShadow=!0,this.airlockPanel.add(i);const r=new he(2.15,2.75,.3),a=new X(r,e);a.position.y=1.3,this.airlockPanel.add(a);const o=new gn(.08,12,12),c=new lt({color:fe.COLORS.TECH_GREEN}),l=new X(o,c);l.position.set(0,2.45,.2),this.airlockPanel.add(l);const h=new he(.48,.6,.04),d=new X(h,e);d.position.set(.75,1.3,.19),this.airlockPanel.add(d);const f=new he(.44,.56,.08),m=new ge({color:988970,roughness:.3}),_=new X(f,m);_.position.set(.75,1.3,.21),this.airlockPanel.add(_);const g=this.createInteractionBadge("Airlock","ESCLUSA DE SALIDA EVA",3718648,2.5);this.airlockPanel.add(g),this.group.add(this.airlockPanel);const p={id:"airlockPanel",name:"Compuerta Esclusa (Airlock EVA)",actionPrompt:"Verificar presurización de compuerta",object3D:this.airlockPanel,canInteract:()=>!0,onHoverStart:()=>{g.scale.set(1.2,1.2,1.2)},onHoverEnd:()=>{g.scale.set(1,1,1)},onInteract:()=>{j.getInstance().emit("ui:notify","Esclusa presurizada a 101.3 kPa. EVA exterior restringida durante Misión 001.")}};ht.getInstance().register(p)}buildMessHall(){const e=new $e;e.name="MessHall",e.position.set(-10.5,0,7);const t=new ge({color:593174,roughness:.5,metalness:.5}),n=new he(3.2,.75,1.4),i=new ge({color:16317180,roughness:.22,metalness:.12}),r=new X(n,i);r.position.y=.375,r.castShadow=!0,r.receiveShadow=!0,e.add(r);const a=new he(3.24,.04,1.44),o=new X(a,t);o.position.y=.755,e.add(o);const c=new he(2.4,.1,1),l=new X(c,t);l.position.y=.05,e.add(l);const h=new bt(.22,.22,.45,16),d=new ge({color:16317180,roughness:.3}),f=new bt(.24,.24,.06,16),m=new bt(.23,.23,.07,16),_=new ge({color:1976635,roughness:.7}),g=[[-1.2,.95],[-.4,.95],[.4,.95],[1.2,.95],[-1.2,-.95],[-.4,-.95],[.4,-.95],[1.2,-.95]];for(const[U,F]of g){const $=new $e;$.position.set(U,0,F);const L=new X(h,d);L.position.y=.225,L.castShadow=!0,$.add(L);const N=new X(f,t);N.position.y=.03,$.add(N);const z=new X(m,_);z.position.y=.46,$.add(z),e.add($)}const p=[16733986,5025616,165063,16096779];for(let U=0;U<4;U++){const F=new he(.26,.08,.18),$=new ge({color:p[U],roughness:.4}),L=new X(F,$);L.position.set(-.8+U*.5,.81,U%2===0?.25:-.25),L.rotation.y=U*.2-.1,e.add(L)}const u=new he(.7,1.4,.45),M=new ge({color:16317180,roughness:.2,metalness:.15}),v=new X(u,M);v.position.set(-3.2,1.1,0),e.add(v);const S=new he(.76,1.46,.42),I=new X(S,t);I.position.set(-3.2,1.1,-.01),e.add(I);const A=new Xt(.42,.3),C=new lt({color:58879}),O=new X(A,C);O.position.set(-3.2,1.35,.24),e.add(O);const x=this.createInteractionBadge("MessHall","ZONA DE COMEDOR Y CONVIVENCIA",16765312,2);e.add(x),this.group.add(e);const b={id:"messHall",name:"Comedor y Convivencia de la Tripulación (Galley)",actionPrompt:"Consumir ración liofilizada y consultar plan de convivencia",object3D:e,canInteract:()=>!0,onHoverStart:()=>x.scale.set(1.2,1.2,1.2),onHoverEnd:()=>x.scale.set(1,1,1),onInteract:()=>{j.getInstance().emit("ui:notify","🍲 Ración espacial consumida (Guiso liofilizado con electrolitos). Moral y energía de la tripulación al 100%."),j.getInstance().emit("achievement:check","ach_habitat_life")}};ht.getInstance().register(b)}buildCrewQuarters(){const e=new $e;e.name="CrewQuarters",e.position.set(-10.5,0,-8);const t=new ge({color:593174,roughness:.5,metalness:.5}),n=[-3,-1,1,3];for(let a=0;a<n.length;a++){const o=n[a],c=new he(1.3,1.2,2.3),l=new ge({color:16317180,roughness:.25,metalness:.1}),h=new X(c,l);h.position.set(o,.6,0),h.castShadow=!0,e.add(h);const d=new he(1.34,.12,2.34),f=new X(d,t);f.position.set(o,.06,0),e.add(f);const m=new he(1.34,.06,2.34),_=new X(m,t);_.position.set(o,1.22,0),e.add(_);const g=new he(1.1,.22,2),p=new ge({color:14870768,roughness:.8}),u=new X(g,p);u.position.set(o,1.15,0),e.add(u);const M=new he(.75,.12,.42),v=new ge({color:16777215}),S=new X(M,v);S.position.set(o,1.3,-.75),e.add(S);const I=new he(.36,.26,.04),A=new X(I,t);A.position.set(o+.45,1.4,-.85),e.add(A);const C=new Xt(.32,.22),O=new lt({color:9489145}),x=new X(C,O);x.position.set(o+.45,1.4,-.82),e.add(x)}const i=this.createInteractionBadge("CrewQuarters","DORMITORIOS TRIPULACIÓN",9489145,2.1);e.add(i),this.group.add(e);const r={id:"crewQuarters",name:"Camarotes de la Tripulación (Crew Berths)",actionPrompt:"Inspeccionar cabinas de descanso y ciclo circadiano",object3D:e,canInteract:()=>!0,onHoverStart:()=>i.scale.set(1.2,1.2,1.2),onHoverEnd:()=>i.scale.set(1,1,1),onInteract:()=>{j.getInstance().emit("ui:notify","🛏️ Cabinas de descanso acústico. Ciclo circadiano sincronizado a 24 horas y 39 minutos (Sol marciano).")}};ht.getInstance().register(r)}buildGeologyLab(){const e=new $e;e.name="GeologyLab",e.position.set(11.5,0,-10.5);const t=new ge({color:593174,roughness:.5,metalness:.5}),n=new he(3.2,.85,1.2),i=new ge({color:16317180,metalness:.15,roughness:.2}),r=new X(n,i);r.position.y=.425,r.castShadow=!0,e.add(r);const a=new he(3.26,.12,1.26),o=new X(a,t);o.position.y=.06,e.add(o);const c=new he(3.24,.04,1.24),l=new X(c,t);l.position.y=.86,e.add(l);const h=new ge({color:1976635,metalness:.8,roughness:.2}),d=new he(.35,.08,.35),f=new X(d,h);f.position.set(-.9,.92,0),e.add(f);const m=new bt(.04,.04,.48,12),_=new X(m,h);_.position.set(-.9,1.15,-.08),_.rotation.x=.2,e.add(_);const g=new he(.76,.54,.04),p=new X(g,t);p.position.set(.9,1.25,-.15),e.add(p);const u=new Xt(.7,.48),M=new lt({color:366185}),v=new X(u,M);v.position.set(.9,1.25,-.12),e.add(v);for(let A=0;A<3;A++){const C=new ss(.11,0),O=new ge({color:A===0?9268835:A===1?16758605:7901340,roughness:.9}),x=new X(C,O);x.position.set(-.2+A*.4,.96,.05),e.add(x)}const S=this.createInteractionBadge("GeologyLab","LABORATORIO DE GEOLOGÍA",6942894,2.1);e.add(S),this.group.add(e);const I={id:"geologyBench",name:"Banco de Geología y Mineralogía Marciana",actionPrompt:"Analizar composición de muestras de regolito y rocas",object3D:e,canInteract:()=>!0,onHoverStart:()=>S.scale.set(1.2,1.2,1.2),onHoverEnd:()=>S.scale.set(1,1,1),onInteract:()=>{j.getInstance().emit("ui:notify","🔬 Espectrómetro de masas listo. Sal al exterior en EVA para recolectar muestras en la superficie.")}};ht.getInstance().register(I)}buildSuitBay(){const e=new $e;e.name="SuitBay",e.position.set(9.5,0,5);const t=new ge({color:593174,roughness:.5,metalness:.5}),n=new he(3,2.5,.18),i=new ge({color:16317180,roughness:.25,metalness:.2}),r=new X(n,i);r.position.set(0,1.25,-.6),e.add(r);for(const d of[-1.52,1.52]){const f=new he(.08,2.54,.22),m=new X(f,t);m.position.set(d,1.25,-.6),e.add(m)}const a=new he(3.12,.14,.3),o=new X(a,t);o.position.set(0,.07,-.6),e.add(o);const c=[-.75,.75];for(const d of c){const f=new $e;f.position.set(d,.4,-.3);const m=new he(.7,.9,.48),_=new ge({color:16777215,roughness:.5,metalness:.08}),g=new X(m,_);g.position.y=1.05,g.castShadow=!0,f.add(g);const p=new Xt(.18,.12),u=new X(p,t);u.position.set(.15,1.25,.25),f.add(u);const M=new gn(.26,16,16),v=new ge({color:16766720,metalness:.95,roughness:.05}),S=new X(M,v);S.position.set(0,1.7,.08),f.add(S);for(const I of[-.2,.2]){const A=new bt(.13,.15,.7,12),C=new X(A,_);C.position.set(I,.38,0),f.add(C);const O=new he(.18,.08,.26),x=new X(O,t);x.position.set(I,.04,.04),f.add(x)}e.add(f)}const l=this.createInteractionBadge("SuitBay","ESTACIÓN DE TRAJES EVA (SALIDA A MARTE)",16766464,2.4);e.add(l),this.group.add(e);const h={id:"suitBay",name:"Estación de Trajes Espaciales EMU-MARS",actionPrompt:"Equipar traje presurizado y salir a explorar la superficie de Marte",object3D:e,canInteract:()=>!0,onHoverStart:()=>l.scale.set(1.2,1.2,1.2),onHoverEnd:()=>l.scale.set(1,1,1),onInteract:()=>{j.getInstance().emit("eva:suitUp")}};ht.getInstance().register(h)}buildMartianExteriorProps(){const e=new ge({color:593174,roughness:.5,metalness:.5}),t=new $e;t.name="ExteriorAirlock",t.position.set(18.2,0,7.5);const n=new he(.35,2.8,2.2),i=new ge({color:9741240,metalness:.9,roughness:.2}),r=new X(n,i);r.position.y=1.4,r.castShadow=!0,t.add(r);const a=new he(.38,2.95,2.35),o=new X(a,e);o.position.y=1.4,t.add(o);const c=this.createInteractionBadge("AirlockExterior","COMPUERTA EXTERIOR (INGRESAR AL HÁBITAT)",58879,2.6);t.add(c),this.group.add(t);const l={id:"airlockExteriorDoor",name:"Compuerta Exterior del Airlock (Ingreso)",actionPrompt:"Entrar al hábitat, represurizar y retirar traje espacial",object3D:t,canInteract:()=>!0,onHoverStart:()=>c.scale.set(1.2,1.2,1.2),onHoverEnd:()=>c.scale.set(1,1,1),onInteract:()=>{j.getInstance().emit("eva:returnInside")}};ht.getInstance().register(l);const h=[{id:"rockSampleAlpha",name:"Muestra Alfa (Basalto de Argyre)",pos:[28,.2,12],color:9268835,badgeColor:16733986},{id:"rockSampleBeta",name:"Muestra Beta (Sulfatos Hidratados)",pos:[16,.2,32],color:16758605,badgeColor:16766464},{id:"rockSampleGamma",name:"Muestra Gamma (Hematita Marciana)",pos:[-32,.2,24],color:6323595,badgeColor:58879}];for(const d of h){const f=new $e;f.name=d.id;const m=vt.getMartianTerrainHeight(d.pos[0],d.pos[2]);f.position.set(d.pos[0],m+.35,d.pos[2]);const _=new ss(.4,1),g=new ge({color:d.color,roughness:.9,flatShading:!0}),p=new X(_,g);p.castShadow=!0,f.add(p);const u=this.createInteractionBadge(d.id,d.name,d.badgeColor,1);f.add(u),this.group.add(f);const M={id:d.id,name:d.name,actionPrompt:"Recolectar muestra geológica con el contenedor del traje",object3D:f,canInteract:()=>!0,onHoverStart:()=>u.scale.set(1.2,1.2,1.2),onHoverEnd:()=>u.scale.set(1,1,1),onInteract:()=>{f.visible=!1,j.getInstance().emit("eva:collectSample",d.id)}};ht.getInstance().register(M)}}update(e){this.animTime+=e,this.hologramMesh&&(this.hologramMesh.rotation.y+=e*.5);const t=this.group.children.flatMap(n=>n.children.filter(i=>i.name.startsWith("Badge_")));for(const n of t){const i=n.getObjectByName("badge_ring"),r=n.getObjectByName("badge_diamond");i&&(i.rotation.z+=e*1.5),r&&(r.rotation.y+=e*2,r.rotation.x+=e*1,r.position.y=Math.sin(this.animTime*3)*.05)}}}class Em{constructor(){w(this,"group");w(this,"environment");w(this,"lighting");w(this,"objects");this.group=new $e,this.group.name="HabitatModule",this.environment=new _m,this.lighting=new vm,this.objects=new xm,this.group.add(this.environment.group),this.group.add(this.lighting.group),this.group.add(this.objects.group),this.buildStructure()}buildStructure(){const e=fe.HABITAT.RADIUS,t=fe.HABITAT.HEIGHT,n=new bt(e+.1,e+.35,.9,48),i=new ge({color:1976635,roughness:.85,metalness:.2}),r=new X(n,i);r.position.y=-.45,r.receiveShadow=!0,this.group.add(r);const a=os.getInstance().createFloorTexture(),o=new bt(e,e,.2,36),c=new ge({map:a,roughness:.22,metalness:.1}),l=new X(o,c);l.position.y=-.1,l.receiveShadow=!0,this.group.add(l);const h=new bt(e,e,.2,36),d=new ge({color:16777215,roughness:.35,metalness:.08}),f=new X(h,d);f.position.y=t+.1,this.group.add(f);const m=new _n(e-.2,.12,8,36),_=new ge({color:988970,roughness:.5,metalness:.5}),g=new X(m,_);g.rotation.x=Math.PI/2,g.position.set(0,t-.04,0),this.group.add(g);const p=new _n(5.2,.1,16,48),u=new ge({color:16777215,emissive:16777215,emissiveIntensity:.95,roughness:.1}),M=new X(p,u);M.rotation.x=Math.PI/2,M.position.set(0,t-.02,0),this.group.add(M);for(const b of[-10.5,10.5]){const U=new _n(3.2,.08,16,36),F=new X(U,u);F.rotation.x=Math.PI/2,F.position.set(b,t-.02,0),this.group.add(F)}const v=20,S=Math.PI*2/v,I=t,A=new ge({color:16317180,roughness:.3,metalness:.12}),C=new ge({color:593174,roughness:.6,metalness:.4});for(let b=0;b<v;b++){const U=b*S,F=Math.cos(U)*e,$=Math.sin(U)*e,L=b>=13&&b<=17,N=F>14&&$>=4.5&&$<=10.5;if(!L&&!N){const z=e*.34,q=new $e,Y=new he(z,I,.25),Z=new X(Y,A);Z.position.y=I/2,Z.receiveShadow=!0,q.add(Z);const K=new he(z+.02,.18,.27),ie=new X(K,C);ie.position.y=.09,q.add(ie);const se=new he(z+.02,.14,.27),W=new X(se,C);W.position.y=I-.07,q.add(W),q.position.set(F,0,$),q.rotation.y=-U+Math.PI/2,this.group.add(q)}}const O=new he(.38,I,.42),x=new ge({color:16777215,metalness:.2,roughness:.25});for(let b=0;b<v;b++){const U=b*S,F=Math.cos(U)*(e-.1),$=Math.sin(U)*(e-.1);if(F>14&&$>=4.5&&$<=10.5)continue;const L=new $e,N=new X(O,x);N.position.y=I/2,L.add(N);const z=new X(new he(.42,.2,.46),C);z.position.y=.1,L.add(z);const q=new X(new he(.42,.16,.46),C);q.position.y=I-.08,L.add(q),L.position.set(F,0,$),L.rotation.y=-U,this.group.add(L)}this.buildInteriorPartitions(t),this.buildExteriorRamp(e),this.buildPanoramicWindow(e,t)}buildInteriorPartitions(e){const t=new ge({color:16317180,roughness:.3,metalness:.1}),n=new ge({color:593174,roughness:.6,metalness:.4}),i=new ge({color:988970,roughness:.4,metalness:.6}),r=new lt({color:fe.COLORS.TECH_CYAN}),a=(u,M,v)=>{const S=document.createElement("canvas");S.width=512,S.height=128;const I=S.getContext("2d");I.fillStyle="#090d16",I.fillRect(0,0,512,128),I.strokeStyle=v,I.lineWidth=6,I.strokeRect(6,6,500,116),I.fillStyle=v,I.font='bold 28px "Rajdhani", "Orbitron", monospace, sans-serif',I.textAlign="center",I.fillText(u,256,48),I.fillStyle="#f8fafc",I.font="bold 20px monospace, sans-serif",I.fillText(M,256,90);const A=new ts(S);A.minFilter=It;const C=new lt({map:A,side:Lt}),O=new Xt(2.4,.55);return new X(O,C)},o=(u,M,v,S)=>{const I=new $e,A=new X(new he(u,e,M),t);A.position.set(v,e/2,S),A.castShadow=!0,A.receiveShadow=!0,I.add(A);const C=new X(new he(u+.04,.18,M+.04),n);C.position.set(v,.09,S),I.add(C);const O=new X(new he(u+.04,.14,M+.04),n);return O.position.set(v,e-.07,S),I.add(O),I};this.group.add(o(.24,11,-5,-11));const c=new X(new he(.32,1,3.5),i);c.position.set(-5,e-.5,-3.75),this.group.add(c);const l=a("ZONA 02 // DORMITORIOS","CAMAROTES TRIPULACIÓN","#38bdf8");l.position.set(-4.82,e-.5,-3.75),l.rotation.y=-Math.PI/2,this.group.add(l),this.group.add(o(.24,4,-5,0)),this.group.add(o(11.5,.24,-10.75,0));const h=new X(new he(.32,1,3.5),i);h.position.set(-5,e-.5,3.75),this.group.add(h);const d=a("ZONA 01 // COMEDOR","GALLEY & CONVIVENCIA","#fbbf24");d.position.set(-4.82,e-.5,3.75),d.rotation.y=-Math.PI/2,this.group.add(d),this.group.add(o(.24,11,-5,11)),this.group.add(o(.24,11,5,-11));const f=new X(new he(.32,1,3.5),i);f.position.set(5,e-.5,-3.75),this.group.add(f);const m=a("ZONA 03 // LABORATORIO","GEOLOGÍA & BIOLOGÍA","#4ade80");m.position.set(4.82,e-.5,-3.75),m.rotation.y=Math.PI/2,this.group.add(m),this.group.add(o(.24,4,5,0)),this.group.add(o(11.5,.24,10.75,0));const _=new X(new he(.32,1,3.5),i);_.position.set(5,e-.5,3.75),this.group.add(_);const g=a("ZONA 04 // ESCLUSA EVA","TRAJES Y SALIDA A MARTE","#facc15");g.position.set(4.82,e-.5,3.75),g.rotation.y=Math.PI/2,this.group.add(g),this.group.add(o(.24,11,5,11));const p=[{x:-5,z:-3.75},{x:-5,z:3.75},{x:5,z:-3.75},{x:5,z:3.75}];for(const u of p){const M=new X(new he(.34,.05,3.5),r);M.position.set(u.x,e-1.02,u.z),this.group.add(M)}}buildExteriorRamp(e){const t=new $e;t.name="ExteriorEVARamp";const n=new ge({color:1976635,metalness:.8,roughness:.3}),i=new he(2,.2,3.6),r=new X(i,n);r.position.set(e+.5,-.1,7.5),t.add(r);const a=Math.hypot(5.5,.85),o=Math.atan2(-.85,5.5),c=new he(a,.16,3.2),l=new X(c,n);l.position.set(18.5+5.5/2,-.425,7.5),l.rotation.z=o,t.add(l);const h=new he(a,.05,.12),d=new lt({color:16766464}),f=new X(h,d);f.position.set(18.5+5.5/2,-.34,5.9),f.rotation.z=o,t.add(f);const m=new X(h,d);m.position.set(18.5+5.5/2,-.34,9.1),m.rotation.z=o,t.add(m),this.group.add(t)}buildPanoramicWindow(e,t){const n=new $e;n.name="PanoramicWindow";const i=new ge({color:593174,metalness:.85,roughness:.3}),r=fe.HABITAT.WINDOW_WIDTH,a=fe.HABITAT.WINDOW_HEIGHT,o=new he(r+.6,.35,.35),c=new X(o,i);c.position.set(0,t-.35,-e+.15),n.add(c);const l=new he(r+.6,.45,.45),h=new X(l,i);h.position.set(0,.65,-e+.15),n.add(h);const d=new Xt(r,a),f=new Lc({color:12510200,transmission:.94,transparent:!0,opacity:.18,roughness:.04,metalness:.1,ior:1.52,side:Lt}),m=new X(d,f);m.position.set(0,t/2+.15,-e+.15),n.add(m);for(const _ of[-r/3,0,r/3]){const g=new he(.14,a,.22),p=new X(g,i);p.position.set(_,t/2+.15,-e+.15),n.add(p)}this.group.add(n)}update(e){this.environment.update(e),this.lighting.update(e),this.objects.update(e)}}function pt(s,e){if(!s)return;let t=!1;s.addEventListener("touchend",n=>{t=!0,n.preventDefault(),e(n)},{passive:!1}),s.addEventListener("click",n=>{if(t){t=!1;return}e(n)})}class Mm{constructor(){w(this,"containerEl");w(this,"btnDesktop");w(this,"btnVR");w(this,"selectedMode","standard");this.containerEl=document.getElementById("screen-main-menu"),this.btnDesktop=document.getElementById("btn-start-desktop"),this.btnVR=document.getElementById("btn-start-vr"),this.bindEvents(),this.initModeSelector(),this.adaptForDevice()}initModeSelector(){const e=document.querySelectorAll(".mode-card");e.forEach(t=>{pt(t,()=>{qe.getInstance().playClick(),e.forEach(i=>i.classList.remove("active")),t.classList.add("active");const n=t.dataset.mode||"standard";this.selectedMode=n,Ht.getInstance().setMissionType(n),this.adaptForDevice()})})}adaptForDevice(){const e=sn.getInstance().getIsMobile();if(this.btnDesktop){const t=this.btnDesktop.querySelector(".btn-label");t&&(this.selectedMode==="tutorial"?t.textContent="INICIAR MODO TUTORIAL":this.selectedMode==="certification"?t.textContent="INICIAR EXAMEN OFICIAL":t.textContent="INICIAR MISIÓN ESTÁNDAR")}sn.getInstance().checkVRSupport().then(t=>{if(!t&&e&&this.btnVR){this.btnVR.style.opacity="0.6";const n=this.btnVR.querySelector(".vr-title");n&&(n.textContent="MODO VR")}})}bindEvents(){pt(this.btnDesktop,()=>{qe.getInstance().playClick(),this.hide(),Ht.getInstance().setMissionType(this.selectedMode),this.selectedMode==="tutorial"?(Ht.getInstance().startMission(),j.getInstance().emit("ui:notify","🎓 Bienvenido al Tutorial: Sigue las instrucciones del banner superior.")):j.getInstance().emit("ui:openBriefing")}),pt(this.btnVR,()=>{qe.getInstance().playClick(),Ht.getInstance().setMissionType(this.selectedMode),j.getInstance().emit("xr:requestEnter")});const e=document.getElementById("btn-header-vr");e&&pt(e,()=>{qe.getInstance().playClick(),Ht.getInstance().setMissionType(this.selectedMode),j.getInstance().emit("xr:requestEnter")}),j.getInstance().on("ui:showMainMenu",()=>{this.show(),this.adaptForDevice()}),j.getInstance().on("platform:modeChanged",()=>{this.adaptForDevice()})}show(){this.containerEl&&(this.containerEl.classList.remove("hidden"),this.containerEl.classList.add("visible"))}hide(){this.containerEl&&(this.containerEl.classList.remove("visible"),this.containerEl.classList.add("hidden"))}}class Sm{constructor(){w(this,"modalEl");w(this,"btnAccept");w(this,"btnClose");w(this,"modalTagEl");w(this,"titleEl");w(this,"speakerTextEl");var e,t,n;this.modalEl=document.getElementById("modal-briefing"),this.btnAccept=document.getElementById("btn-accept-briefing"),this.btnClose=document.getElementById("btn-close-briefing"),this.modalTagEl=((e=this.modalEl)==null?void 0:e.querySelector(".modal-tag"))||null,this.titleEl=((t=this.modalEl)==null?void 0:t.querySelector("h2"))||null,this.speakerTextEl=((n=this.modalEl)==null?void 0:n.querySelector(".speaker-text"))||null,this.bindEvents()}bindEvents(){pt(this.btnAccept,()=>{qe.getInstance().playClick(),this.hide(),Ht.getInstance().startMission(),qe.getInstance().startAmbientHum()}),pt(this.btnClose,()=>{qe.getInstance().playClick(),this.hide(),j.getInstance().emit("ui:showMainMenu")}),j.getInstance().on("ui:openBriefing",()=>{this.show()})}show(){var t;Ht.getInstance().getMissionType()==="certification"?(this.modalTagEl&&(this.modalTagEl.textContent="EVALUACIÓN OFICIAL DE CERTIFICACIÓN"),this.titleEl&&(this.titleEl.textContent="EXAMEN DE ASTRONAUTA ANÁLOGO"),this.speakerTextEl&&(this.speakerTextEl.innerHTML=`
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
        `),this.btnAccept&&(this.btnAccept.textContent="COMENZAR OPERACIONES")),(t=this.modalEl)==null||t.classList.remove("hidden")}hide(){var e;(e=this.modalEl)==null||e.classList.add("hidden")}}class ym{constructor(){w(this,"timerEl");w(this,"habitatStatusEl");w(this,"progressPercentEl");w(this,"progressFillEl");w(this,"objectivesListEl");w(this,"emergencyBannerEl");w(this,"guideBannerEl");w(this,"guideInstructionEl");w(this,"guideHintEl");w(this,"telO2El");w(this,"telCo2El");w(this,"telPressEl");w(this,"telPowerEl");w(this,"reticleContainerEl");w(this,"tooltipTextEl");this.timerEl=document.getElementById("hud-timer"),this.habitatStatusEl=document.getElementById("hud-habitat-status"),this.progressPercentEl=document.getElementById("hud-progress-percent"),this.progressFillEl=document.getElementById("hud-progress-fill"),this.objectivesListEl=document.getElementById("hud-objectives-list"),this.emergencyBannerEl=document.getElementById("emergency-banner"),this.guideBannerEl=document.getElementById("objective-guide-banner"),this.guideInstructionEl=document.getElementById("guide-instruction"),this.guideHintEl=document.getElementById("guide-hint"),this.telO2El=document.getElementById("tel-o2"),this.telCo2El=document.getElementById("tel-co2"),this.telPressEl=document.getElementById("tel-press"),this.telPowerEl=document.getElementById("tel-power"),this.reticleContainerEl=document.getElementById("reticle-container"),this.tooltipTextEl=document.getElementById("tooltip-text"),this.bindEvents(),this.renderObjectives(),this.updateGuideBanner()}bindEvents(){j.getInstance().on("mission:timerTick",e=>{this.timerEl&&(this.timerEl.textContent=e.formatted)}),j.getInstance().on("mission:objectiveUpdated",()=>{this.renderObjectives(),this.updateGuideBanner()}),j.getInstance().on("resources:itemRetrieved",()=>{this.updateGuideBanner()}),j.getInstance().on("emergency:started",()=>{this.updateGuideBanner()}),j.getInstance().on("lifesupport:updated",e=>{this.telO2El&&(this.telO2El.textContent=`${e.o2Percent.toFixed(1)}%`),this.telCo2El&&(this.telCo2El.textContent=`${Math.round(e.co2Ppm)} ppm`),this.telPressEl&&(this.telPressEl.textContent=`${e.cabinPressureKpa.toFixed(1)} kPa`),this.telPowerEl&&(this.telPowerEl.textContent=`${e.powerKw.toFixed(1)} kW`),this.habitatStatusEl&&(this.habitatStatusEl.textContent=e.filterLoopStatus,this.habitatStatusEl.className="metric-value",e.filterLoopStatus==="NOMINAL"||e.filterLoopStatus==="RESTAURADO"?this.habitatStatusEl.classList.add("status-nominal"):e.filterLoopStatus==="ADVERTENCIA"?this.habitatStatusEl.classList.add("status-warning"):this.habitatStatusEl.classList.add("status-critical"))}),j.getInstance().on("mission:stateChanged",e=>{this.updateGuideBanner(),this.emergencyBannerEl&&(e.current===Je.EMERGENCY?this.emergencyBannerEl.classList.remove("hidden"):(e.current===Je.RECOVERY||e.current===Je.COMPLETED)&&this.emergencyBannerEl.classList.add("hidden"))}),j.getInstance().on("interaction:hoverChanged",e=>{this.reticleContainerEl&&(e.hasTarget&&e.interactable?(this.reticleContainerEl.classList.add("interactive"),this.tooltipTextEl&&(this.tooltipTextEl.textContent=`${e.interactable.name} — ${e.interactable.actionPrompt}`)):this.reticleContainerEl.classList.remove("interactive"))})}renderObjectives(){const e=Ht.getInstance().getActiveMission(),t=e.getObjectives(),n=e.getProgressPercent();if(this.progressPercentEl&&(this.progressPercentEl.textContent=`${n}%`),this.progressFillEl&&(this.progressFillEl.style.width=`${n}%`),!!this.objectivesListEl){this.objectivesListEl.innerHTML="";for(const i of t){const r=document.createElement("li");r.className="objective-item",i.isCompleted&&r.classList.add("completed"),i.isCurrent&&r.classList.add("current");const a=document.createElement("div");a.className="objective-icon",a.innerHTML=i.isCompleted?"✓":`${i.order}`;const o=document.createElement("div");o.className="objective-desc";const c=document.createElement("span");c.className="objective-name",c.textContent=i.title;const l=document.createElement("span");l.className="objective-subtext",l.textContent=i.description,o.appendChild(c),o.appendChild(l),r.appendChild(a),r.appendChild(o),this.objectivesListEl.appendChild(r)}}}updateGuideBanner(){if(!this.guideInstructionEl||!this.guideHintEl)return;const t=Ht.getInstance().getActiveMission().getObjectives();if(Ht.getInstance().getState()===Je.COMPLETED){this.guideInstructionEl.textContent="✅ ¡MISIÓN 001 COMPLETADA CON ÉXITO!",this.guideHintEl.textContent="Revisa tu informe de evaluación y logros operacionales obtenidos.";return}const i=t.find(r=>r.isCurrent)||t.find(r=>!r.isCompleted);if(!i){this.guideInstructionEl.textContent="✅ Objetivos primarios concluidos",this.guideHintEl.textContent="Generando evaluación final de misión...";return}i.id==="tut_movement"?(this.guideInstructionEl.textContent="🎓 TUTORIAL: Desplázate unos pasos por el hábitat",this.guideHintEl.textContent="Usa el joystick virtual izquierdo (o teclas WASD) y desliza para girar la vista."):i.id==="tut_mission_control"?(this.guideInstructionEl.textContent="🎓 TUTORIAL: Acércate al Centro de Control frontal",this.guideHintEl.textContent="Apunta a la mesa [CENTRO DE CONTROL] e interactúa para consultar telemetría general."):i.id==="tut_lifesupport"?(this.guideInstructionEl.textContent="🎓 TUTORIAL: Ve a la Consola de Soporte Vital a la izquierda",this.guideHintEl.textContent="Abre [1. SOPORTE VITAL] e inicia el escaneo diagnóstico de O₂ y CO₂."):i.id==="tut_science"?(this.guideInstructionEl.textContent="🎓 TUTORIAL: Visita la Estación de Ciencias a la derecha",this.guideHintEl.textContent="Examina la cámara de cultivo [2. CIENCIA BIOLÓGICA] para aprender sobre botánica espacial."):i.id==="tut_resources"?(this.guideInstructionEl.textContent="🎓 TUTORIAL: Examina el Gabinete de Repuestos al fondo",this.guideHintEl.textContent="Acércate a [3. ALMACÉN Y REPUESTOS] para completar tu entrenamiento en la academia."):i.id==="cert_diagnostics"?(this.guideInstructionEl.textContent="🎖️ EVALUACIÓN: Auditoría de Soporte Vital ECLSS",this.guideHintEl.textContent="Ve a [1. SOPORTE VITAL] a tu izquierda y ejecuta el escaneo de certificación."):i.id==="cert_biogrowth"?(this.guideInstructionEl.textContent="🎖️ EVALUACIÓN: Calibración Fotónica BIOGROWTH-01",this.guideHintEl.textContent="Ve a [2. CIENCIA BIOLÓGICA] a tu derecha y configura el espectro fotosintético."):i.id==="cert_emergency"?xn.getInstance().hasItem("filter_hepa_c1")?(this.guideInstructionEl.textContent="🛠️ EVALUACIÓN: Reemplazo Estricto de Filtro",this.guideHintEl.textContent="Regresa a [1. SOPORTE VITAL] y ejecuta el checklist de 5 pasos sin errores."):(this.guideInstructionEl.textContent="⚠️ EVALUACIÓN: ¡Alarma de Filtro! Ve al Almacén",this.guideHintEl.textContent="Dirígete a [3. ALMACÉN Y REPUESTOS] y extrae el filtro HEPA-C1 inmediatamente."):i.id==="cert_airlock"?(this.guideInstructionEl.textContent="🎖️ EVALUACIÓN: Certifica la Esclusa de Salida Exterior",this.guideHintEl.textContent="Camina a la compuerta [ESCLUSA DE SALIDA EVA] al fondo derecha y confirma sellado."):i.id==="obj_inspection"?(this.guideInstructionEl.textContent="PASO 1: Dirígete a la Consola de Soporte Vital",this.guideHintEl.textContent="Sigue el marcador azul [1. SOPORTE VITAL] a tu izquierda e inicia el diagnóstico."):i.id==="obj_science"?(this.guideInstructionEl.textContent="PASO 2: Dirígete a la Estación de Ciencias",this.guideHintEl.textContent="Sigue el marcador verde [2. CIENCIA BIOLÓGICA] a tu derecha y calibra BIOGROWTH-01."):i.id==="obj_emergency"&&(xn.getInstance().hasItem("filter_hepa_c1")?(this.guideInstructionEl.textContent="🛠️ PASO 4: Regresa a Soporte Vital para el reemplazo",this.guideHintEl.textContent="Ve a [1. SOPORTE VITAL] y ejecuta los 5 pasos del procedimiento de reemplazo."):(this.guideInstructionEl.textContent="⚠️ PASO 3: Ve al Almacén por el filtro de repuesto",this.guideHintEl.textContent="Sigue el marcador ámbar [3. ALMACÉN Y REPUESTOS] al fondo y extrae el filtro HEPA-C1."))}}class bm{constructor(){w(this,"modalLifeSupport");w(this,"contentLifeSupport");w(this,"modalScience");w(this,"contentScience");w(this,"modalResources");w(this,"contentResources");this.modalLifeSupport=document.getElementById("modal-lifesupport"),this.contentLifeSupport=document.getElementById("lifesupport-content"),this.modalScience=document.getElementById("modal-science"),this.contentScience=document.getElementById("science-content"),this.modalResources=document.getElementById("modal-resources"),this.contentResources=document.getElementById("resources-content"),this.bindEvents()}bindEvents(){j.getInstance().on("ui:openConsole",e=>{this.closeAll(),e==="lifesupport"&&this.openLifeSupport(),e==="science"&&this.openScience(),e==="resources"&&this.openResources()}),pt(document.getElementById("btn-close-lifesupport"),()=>this.closeAll()),pt(document.getElementById("btn-close-science"),()=>this.closeAll()),pt(document.getElementById("btn-close-resources"),()=>this.closeAll()),j.getInstance().on("ui:notify",e=>{alert(`[AVISO HÁBITAT] ${e}`)})}closeAll(){var e,t,n;(e=this.modalLifeSupport)==null||e.classList.add("hidden"),(t=this.modalScience)==null||t.classList.add("hidden"),(n=this.modalResources)==null||n.classList.add("hidden"),j.getInstance().emit("ui:consoleClosed")}openLifeSupport(){var e;(e=this.modalLifeSupport)==null||e.classList.remove("hidden"),this.renderLifeSupportUI()}renderLifeSupportUI(){var o;if(!this.contentLifeSupport)return;const e=as.getInstance(),t=e.getTelemetry(),n=di.getInstance(),i=xn.getInstance().hasItem("filter_hepa_c1");let r=`
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
      `),this.contentLifeSupport.innerHTML=r,(o=document.getElementById("btn-run-diagnostic"))==null||o.addEventListener("click",()=>{qe.getInstance().playClick(),e.runDiagnostic(),this.renderLifeSupportUI()}),this.contentLifeSupport.querySelectorAll(".btn-execute-step").forEach(c=>{c.addEventListener("click",l=>{const h=l.currentTarget.getAttribute("data-step");qe.getInstance().playClick();const d=n.executeStep(h);d.success?qe.getInstance().playSuccessTone():alert(d.message),this.renderLifeSupportUI()})})}openScience(){var e;(e=this.modalScience)==null||e.classList.remove("hidden"),this.renderScienceUI()}renderScienceUI(){var h;if(!this.contentScience)return;const e=rs.getInstance(),t=e.getSelectedSample(),n=e.getCompletedResult();let i=`
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
      `),this.contentScience.innerHTML=i;const r=document.getElementById("slider-light"),a=document.getElementById("slider-water"),o=document.getElementById("lbl-light-val"),c=document.getElementById("lbl-water-val");r==null||r.addEventListener("input",()=>{const d=Number(r.value);e.setLight(d),o&&(o.textContent=`${d}%`)}),a==null||a.addEventListener("input",()=>{const d=Number(a.value);e.setWater(d),c&&(c.textContent=`${d}%`)}),this.contentScience.querySelectorAll(".btn-sample-select").forEach(d=>{d.addEventListener("click",f=>{const m=f.currentTarget.getAttribute("data-id");qe.getInstance().playClick(),e.setSample(m),this.renderScienceUI()})}),(h=document.getElementById("btn-run-experiment"))==null||h.addEventListener("click",()=>{qe.getInstance().playClick(),e.executeExperiment(),qe.getInstance().playSuccessTone(),this.renderScienceUI()})}openResources(){var e;(e=this.modalResources)==null||e.classList.remove("hidden"),this.renderResourcesUI()}renderResourcesUI(){var r;if(!this.contentResources)return;const e=xn.getInstance(),t=e.getAllItems(),n=e.hasItem("filter_hepa_c1"),i=`
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
    `;this.contentResources.innerHTML=i,(r=document.getElementById("btn-retrieve-filter"))==null||r.addEventListener("click",()=>{qe.getInstance().playClick(),e.retrieveFilterFromCabinet(),qe.getInstance().playSuccessTone(),this.renderResourcesUI()})}}const qo=[{id:"ach_first_steps",icon:"🚀",title:"Primer Contacto",description:"Inicia tu primera simulación en la Estación Análoga Argyre Planitia.",category:"operational"},{id:"ach_diagnostic",icon:"🩺",title:"Diagnóstico Vital",description:"Completa la rutina integral de escaneo en la Consola ECLSS.",category:"operational"},{id:"ach_botanist",icon:"🌱",title:"Botánico Marciano",description:"Calibra con éxito el fotoperiodo e irrigación en BIOGROWTH-01.",category:"science"},{id:"ach_spare_part",icon:"📦",title:"Técnico de Suministros",description:"Localiza y extrae el cartucho de filtración HEPA-C1 del almacén.",category:"operational"},{id:"ach_hero",icon:"🛠️",title:"Salvador del Hábitat",description:"Resuelve la contingencia crítica de filtración restableciendo el soporte vital.",category:"safety"},{id:"ach_elite",icon:"🌟",title:"Astronauta de Élite",description:"Obtén una calificación superior a 90 puntos en el reporte final de misión.",category:"mastery"},{id:"ach_speedrun",icon:"⚡",title:"Respuesta Rápida",description:"Completa la misión 001 en menos de 4 minutos.",category:"mastery"},{id:"ach_explorer",icon:"🔍",title:"Inspección Exhaustiva",description:"Interactúa con todas las terminales y verifica la esclusa exterior.",category:"operational"},{id:"ach_academy_grad",icon:"🎓",title:"Graduado de la Academia",description:"Completa con éxito el entrenamiento interactivo en Modo Tutorial.",category:"operational"},{id:"ach_certified_astronaut",icon:"📜",title:"Certificación Oficial",description:"Supera el examen operacional y obtén tu Diploma de Astronauta Análogo.",category:"mastery"},{id:"ach_honors_commander",icon:"⭐",title:"Comandante con Honores",description:"Obtén 95+ puntos de distinción en el examen de Certificación Oficial.",category:"mastery"},{id:"ach_mars_walker",icon:"👨‍🚀",title:"Caminante de Marte",description:"Realiza tu primera caminata espacial EVA en la superficie de Marte con traje presurizado.",category:"operational"},{id:"ach_geologist",icon:"💎",title:"Geólogo Marciano",description:"Recolecta las 3 muestras minerales en la superficie marciana durante una EVA.",category:"science"},{id:"ach_habitat_life",icon:"🍲",title:"Vida en el Hábitat",description:"Consume una ración de astronauta en la zona de comedor y convivencia.",category:"operational"}],ii=class ii{constructor(){w(this,"visitedStations",new Set);w(this,"toastContainer",null);this.createToastContainer(),this.bindEvents()}static getInstance(){return ii.instance||(ii.instance=new ii),ii.instance}createToastContainer(){if(typeof document>"u")return;let e=document.getElementById("achievement-toast-container");e||(e=document.createElement("div"),e.id="achievement-toast-container",e.className="achievement-toast-container",document.body.appendChild(e)),this.toastContainer=e}bindEvents(){j.getInstance().on("mission:stateChanged",t=>{t.current==="ACTIVE"&&this.unlock("ach_first_steps")}),j.getInstance().on("lifesupport:diagnosticComplete",()=>{this.unlock("ach_diagnostic")}),j.getInstance().on("science:completed",()=>{this.unlock("ach_botanist")}),j.getInstance().on("resources:itemRetrieved",t=>{t.id==="filter_hepa_c1"&&this.unlock("ach_spare_part")}),j.getInstance().on("emergency:resolved",()=>{this.unlock("ach_hero")}),j.getInstance().on("mission:completed",t=>{t.report.totalScore>=90&&this.unlock("ach_elite"),t.report.metrics.timeElapsedSeconds<=240&&this.unlock("ach_speedrun")}),j.getInstance().on("tutorial:completed",()=>{this.unlock("ach_academy_grad")}),j.getInstance().on("achievement:check",t=>{this.unlock(t)}),j.getInstance().on("certification:completed",t=>{this.unlock("ach_certified_astronaut"),t.report.totalScore>=95&&this.unlock("ach_honors_commander"),t.report.totalScore>=90&&this.unlock("ach_elite")});const e=t=>{this.visitedStations.add(t),this.visitedStations.size>=4&&this.unlock("ach_explorer")};j.getInstance().on("interaction:interacted",e),j.getInstance().on("interaction:triggered",e)}unlock(e){const t=qo.find(r=>r.id===e);if(!t)return!1;if(hi.getInstance().unlockAchievement(e)){try{qe.getInstance().playSuccessTone()}catch{}return this.showToast(t),j.getInstance().emit("achievement:unlocked",t),!0}return!1}showToast(e){if(this.toastContainer||this.createToastContainer(),!this.toastContainer)return;const t=document.createElement("div");t.className="achievement-toast animate-slide-in",t.innerHTML=`
      <div class="toast-glow"></div>
      <div class="toast-icon">${e.icon}</div>
      <div class="toast-info">
        <span class="toast-tag">¡LOGRO DESBLOQUEADO!</span>
        <strong class="toast-title">${e.title}</strong>
        <p class="toast-desc">${e.description}</p>
      </div>
    `,this.toastContainer.appendChild(t),window.setTimeout(()=>{t.classList.add("animate-slide-out"),window.setTimeout(()=>{t.parentElement&&t.parentElement.removeChild(t)},500)},4500)}getAllAchievements(){const e=hi.getInstance().getUnlockedAchievements();return qo.map(t=>({achievement:t,isUnlocked:e.includes(t.id)}))}};w(ii,"instance");let Fi=ii;class Tm{constructor(){w(this,"modalEl");w(this,"cardContentEl");this.modalEl=document.getElementById("modal-report"),this.cardContentEl=document.getElementById("report-card-content"),this.bindEvents()}bindEvents(){j.getInstance().on("mission:completed",e=>{this.renderReport(e.report),this.show()})}show(){var e;(e=this.modalEl)==null||e.classList.remove("hidden")}hide(){var e;(e=this.modalEl)==null||e.classList.add("hidden")}renderReport(e){var i;if(!this.cardContentEl)return;const t=vt.formatTime(e.metrics.timeElapsedSeconds),n=`
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
            ${Fi.getInstance().getAllAchievements().filter(r=>r.isUnlocked).length} / ${Fi.getInstance().getAllAchievements().length} DESBLOQUEADOS
          </span>
        </div>
        <div class="report-achievements-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 10px;">
          ${Fi.getInstance().getAllAchievements().map(({achievement:r,isUnlocked:a})=>`
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
    `;this.cardContentEl.innerHTML=n,(i=document.getElementById("btn-repeat-mission"))==null||i.addEventListener("click",()=>{qe.getInstance().playClick(),this.hide(),Ht.getInstance().resetMission(),j.getInstance().emit("ui:showMainMenu")})}}class Am{constructor(){w(this,"modalEl");w(this,"nameInputEl");w(this,"rankEl");w(this,"scoreEl");w(this,"timeEl");w(this,"idEl");w(this,"btnPrint");w(this,"btnClose");this.modalEl=document.getElementById("modal-certificate"),this.nameInputEl=document.getElementById("cert-astronaut-name"),this.rankEl=document.getElementById("cert-rank-display"),this.scoreEl=document.getElementById("cert-score-display"),this.timeEl=document.getElementById("cert-time-display"),this.idEl=document.getElementById("cert-id-display"),this.btnPrint=document.getElementById("btn-print-certificate"),this.btnClose=document.getElementById("btn-close-certificate"),this.bindEvents()}bindEvents(){if(j.getInstance().on("certification:completed",e=>{this.populate(e.report),this.show()}),this.nameInputEl){const e=localStorage.getItem("mam_astronaut_name");e&&(this.nameInputEl.value=e),this.nameInputEl.addEventListener("input",()=>{this.nameInputEl&&localStorage.setItem("mam_astronaut_name",this.nameInputEl.value)})}pt(this.btnPrint,()=>{qe.getInstance().playClick(),window.print()}),pt(this.btnClose,()=>{qe.getInstance().playClick(),this.hide(),j.getInstance().emit("ui:showMainMenu")})}populate(e){const t=vt.formatTime(e.metrics.timeElapsedSeconds);let n="ESPECIALISTA DE MISIÓN ANÁLOGA",i="var(--tech-cyan)";if(e.totalScore>=95?(n="COMANDANTE ANÁLOGO DE ÉLITE (HONORIS CAUSA)",i="#ffd700"):e.totalScore>=85?(n="OFICIAL DE SISTEMAS DE HÁBITAT CLASE I",i="#00e676"):e.totalScore>=75?(n="ESPECIALISTA DE MISIÓN ANÁLOGA CLASE II",i="var(--tech-cyan)"):(n="CADETE ANÁLOGO (CERTIFICACIÓN CONDICIONAL)",i="#ffab00"),this.rankEl&&(this.rankEl.textContent=n,this.rankEl.style.color=i),this.scoreEl&&(this.scoreEl.textContent=`${e.totalScore} / 100 PTS`),this.timeEl&&(this.timeEl.textContent=t),this.idEl){const r="STL-MARS-"+Math.random().toString(16).substring(2,6).toUpperCase();this.idEl.textContent=r}try{qe.getInstance().playSuccessTone()}catch{}}show(){this.modalEl&&(this.modalEl.classList.remove("hidden"),this.modalEl.classList.add("visible"))}hide(){this.modalEl&&(this.modalEl.classList.remove("visible"),this.modalEl.classList.add("hidden"))}}class wm{constructor(){w(this,"container");w(this,"clock");w(this,"sceneManager");w(this,"cameraManager");w(this,"rendererManager");w(this,"inputManager");w(this,"mobileControls");w(this,"audioManager");w(this,"xrManager");w(this,"xrControllerManager");w(this,"xrInteractionManager");w(this,"habitat");w(this,"missionManager");w(this,"mainMenu");w(this,"briefing");w(this,"hud");w(this,"interactionPanel");w(this,"missionReport");w(this,"modalPause");w(this,"btnSoundToggle");const e=document.getElementById("webgl-container");if(!e)throw new Error("WebGL container element #webgl-container not found in DOM.");this.container=e,this.clock=new tm,this.sceneManager=new im,this.cameraManager=new sm,this.rendererManager=new rm(this.container),this.sceneManager.add(this.cameraManager.cameraRig),this.habitat=new Em,this.sceneManager.add(this.habitat.group),this.audioManager=qe.getInstance(),this.inputManager=new am(this.cameraManager.camera,this.cameraManager.cameraRig,this.rendererManager.renderer.domElement),this.mobileControls=new fm(this.cameraManager.camera,this.inputManager),this.xrManager=new pm(this.rendererManager.renderer),this.xrControllerManager=new mm(this.rendererManager.renderer,this.cameraManager.cameraRig),this.xrInteractionManager=new gm(this.xrControllerManager,this.cameraManager.cameraRig,this.rendererManager.renderer),this.missionManager=Ht.getInstance(),Fi.getInstance(),this.mainMenu=new Mm,this.briefing=new Sm,this.hud=new ym,this.interactionPanel=new bm,this.missionReport=new Tm,new Am,wn.getInstance().initDOM(),this.modalPause=document.getElementById("modal-pause"),this.btnSoundToggle=document.getElementById("btn-toggle-sound"),this.bindApplicationEvents(),this.startLoop(),console.log("[Application] MARS ANALOG MISSION initialized successfully.")}bindApplicationEvents(){const e=async()=>{this.audioManager.playClick(),await this.xrManager.enterVR()&&(this.mainMenu.hide(),this.briefing.hide(),this.inputManager.setEnabled(!1),this.mobileControls.setVisible(!1),this.missionManager.startMission(),this.audioManager.startAmbientHum())};pt(document.getElementById("btn-enter-xr"),e),j.getInstance().on("xr:requestEnter",e),j.getInstance().on("xr:sessionEnd",()=>{this.inputManager.setEnabled(!0),sn.getInstance().getIsMobile()&&this.mobileControls.setVisible(!0)}),pt(document.getElementById("btn-pause-menu"),()=>{this.togglePause()}),j.getInstance().on("ui:togglePause",()=>{const a=document.getElementById("modal-habitat-map");if(a&&!a.classList.contains("hidden")){a.classList.add("hidden");return}this.togglePause()});const t=document.getElementById("modal-habitat-map"),n=()=>{this.audioManager.playClick(),t&&(t.classList.contains("hidden")?(t.classList.remove("hidden"),document.pointerLockElement&&document.exitPointerLock()):t.classList.add("hidden"))};pt(document.getElementById("btn-open-map"),n),pt(document.getElementById("btn-close-map"),n),pt(document.getElementById("btn-dismiss-map"),n),j.getInstance().on("ui:toggleMap",()=>{n()});const i=()=>{if(this.audioManager.playClick(),!document.fullscreenElement&&!document.webkitFullscreenElement){const a=document.documentElement;a.requestFullscreen?a.requestFullscreen().catch(()=>{}):a.webkitRequestFullscreen&&a.webkitRequestFullscreen()}else{const a=document;a.exitFullscreen?a.exitFullscreen().catch(()=>{}):a.webkitExitFullscreen&&a.webkitExitFullscreen()}},r=()=>{const a=!!(document.fullscreenElement||document.webkitFullscreenElement),o=document.getElementById("btn-fullscreen-toggle");if(o){const h=o.querySelector(".fs-icon");h&&(h.textContent=a?"✕":"⛶"),o.classList.toggle("is-fullscreen",a),o.setAttribute("title",a?"Salir de pantalla completa":"Pantalla completa")}const c=document.getElementById("btn-menu-fullscreen");if(c){const h=c.querySelector(".btn-label");h&&(h.textContent=a?"SALIR DE PANTALLA COMPLETA":"PANTALLA COMPLETA")}const l=document.getElementById("btn-pause-fullscreen");l&&(l.textContent=a?"PANTALLA COMPLETA: DESACTIVAR":"PANTALLA COMPLETA: ACTIVAR")};pt(document.getElementById("btn-fullscreen-toggle"),i),pt(document.getElementById("btn-menu-fullscreen"),i),pt(document.getElementById("btn-pause-fullscreen"),i),document.addEventListener("fullscreenchange",r),document.addEventListener("webkitfullscreenchange",r),pt(document.getElementById("btn-resume-mission"),()=>{this.audioManager.playClick(),this.resume()}),pt(document.getElementById("btn-restart-mission"),()=>{this.audioManager.playClick(),this.restart()}),pt(this.btnSoundToggle,()=>{const a=this.audioManager.getEnabled();this.audioManager.setEnabled(!a),this.btnSoundToggle&&(this.btnSoundToggle.textContent=`AUDIO: ${a?"SILENCIADO":"ACTIVADO"}`),this.audioManager.playClick()}),j.getInstance().on("emergency:started",()=>{this.habitat.lighting.setEmergencyMode(!0),this.sceneManager.setEmergencyAtmosphere(!0),this.audioManager.startEmergencySiren()}),j.getInstance().on("emergency:resolved",()=>{this.habitat.lighting.setEmergencyMode(!1),this.sceneManager.setEmergencyAtmosphere(!1),this.audioManager.stopEmergencySiren()}),j.getInstance().on("mission:stateChanged",a=>{a.current===Je.ACTIVE||a.current===Je.EMERGENCY||a.current===Je.RECOVERY?(this.mobileControls.setEnabled(!0),this.mobileControls.setVisible(!0)):(a.current===Je.PAUSED||a.current===Je.COMPLETED)&&(this.mobileControls.setEnabled(!1),this.mobileControls.setVisible(!1))}),j.getInstance().on("ui:openConsole",()=>{this.inputManager.setEnabled(!1),this.mobileControls.setEnabled(!1),this.mobileControls.setVisible(!1)}),j.getInstance().on("ui:consoleClosed",()=>{const a=this.missionManager.getState();(a===Je.ACTIVE||a===Je.EMERGENCY||a===Je.RECOVERY)&&(this.inputManager.setEnabled(!0),this.mobileControls.setEnabled(!0),this.mobileControls.setVisible(!0))}),j.getInstance().on("ui:openBriefing",()=>{this.mobileControls.setVisible(!1)}),j.getInstance().on("mission:completed",()=>{this.mobileControls.setVisible(!1)}),j.getInstance().on("ui:showMainMenu",()=>{this.mobileControls.setVisible(!1),this.cameraManager.resetPosition(),this.inputManager.setEnabled(!0)})}togglePause(){this.missionManager.getState()===Je.PAUSED?this.resume():this.pause()}pause(){var e;this.missionManager.pauseMission(),this.inputManager.setEnabled(!1),this.mobileControls.setEnabled(!1),this.mobileControls.setVisible(!1),(e=this.modalPause)==null||e.classList.remove("hidden")}resume(){var e;(e=this.modalPause)==null||e.classList.add("hidden"),this.inputManager.setEnabled(!0),this.mobileControls.setEnabled(!0),this.mobileControls.setVisible(!0),this.missionManager.resumeMission()}restart(){var e;(e=this.modalPause)==null||e.classList.add("hidden"),this.mobileControls.setVisible(!1),this.missionManager.resetMission(),this.cameraManager.resetPosition(),this.mainMenu.show(),this.inputManager.setEnabled(!0)}startLoop(){this.rendererManager.setAnimationLoop((e,t)=>{const n=Math.min(this.clock.getDelta(),.1);this.habitat.update(n),this.xrManager.getIsVRActive()?this.xrInteractionManager.update(n):this.inputManager.update(n),this.missionManager.update(n),wn.getInstance().update(n),this.rendererManager.render(this.sceneManager.scene,this.cameraManager.camera)})}}window.addEventListener("DOMContentLoaded",()=>{try{const s=new wm;window.__MARS_ANALOG_APP__=s}catch(s){if(console.error("[Main] Failed to initialize MARS ANALOG MISSION application:",s),!navigator.userAgent.includes("HeadlessChrome")){const e=document.createElement("div");e.style.cssText="position:fixed;top:20px;left:20px;background:#b71c1c;color:#fff;padding:16px;border-radius:8px;z-index:9999;font-family:sans-serif;max-width:400px;",e.innerHTML=`<h3>Error al iniciar simulador</h3><p>${s instanceof Error?s.message:String(s)}</p>`,document.body.appendChild(e)}}});
//# sourceMappingURL=index-0anlBVe3.js.map
