import{a as i,b as s}from"./chunk-UDHG5IME.js";i();var r=(t,e=document)=>t[0]==="#"?e.getElementById(t.substring(1)):e.querySelector(t);r.all=(t,e=document)=>e.querySelectorAll(t);r.each=(t,e,n)=>{r.all(t,n).forEach(e)};i();var m=function(t,e){let n=t.parentNode;n.lastChild===t?n.appendChild(e):n.insertBefore(e,t.nextSibling)},j=function(t,e,n,d){let o=document.createElement(e);switch(Object.assign(o,n),d){case"after":m(t,o);break;case"replace":t.innerHTML="",t.appendChild(o);break;default:t.appendChild(o)}return o},w=function(t,e){let n=document.createElement("div");Object.assign(n,e),t.parentNode.insertBefore(n,t),t.parentNode.removeChild(t),n.appendChild(t)},W=function(t){return t.getBoundingClientRect().height},k=function(t,e){t.style.width=typeof e=="number"?e+"rem":e},P=function(t){return t.getBoundingClientRect().width},D=function(t){return t.getBoundingClientRect().top},_=function(t){return t.getBoundingClientRect().left},A=function(t){return t.style.display},q=function(t,e){return t.style.display=e,t};function l(){Object.assign(HTMLElement.prototype,{find(t){return r.all(t,this)},_class(t,e,n){(e.indexOf(" ")?e.split(" "):[e]).forEach(o=>{t==="toggle"?this.classList.toggle(o,n):this.classList[t](o)})},addClass(t){return this._class("add",t),this},removeClass(t){return this._class("remove",t),this},toggleClass(t,e){return this._class("toggle",t,e),this},hasClass(t){return this.classList.contains(t)}})}i();var c=s;l();var $=c.statics.indexOf("//")>0?c.statics:c.root,F={x:0,y:0},u=0,a,p,J=document.getElementsByTagName("body")[0],U=document.documentElement,z=document.getElementById("container"),K=document.getElementById("loading"),g=document.getElementById("nav"),Q=document.getElementById("header"),V=g.querySelector(".toggle"),X=document.getElementById("quick"),Z=document.getElementById("sidebar"),tt=document.getElementById("brand"),x=document.getElementById("tool"),f,h,T,E,H=document.getElementById("search"),L,b,v,y=window.innerHeight,C=window.innerWidth,B=0,M=window.location.href,O;function et(t){L=t}function nt(t){b=t}function ot(t){v=t}function it(t){y=t}function rt(t){C=t}function st(t){u=t}function lt(t){p=t}function ct(t){B=t}function dt(t){M=t}function mt(t){O=t}function ut(t){a=t}function at(t){f=t}function pt(t){h=t}function gt(t){T=t}function xt(t){E=t}function ft(t){x=t}function ht(t){H=t}export{r as a,m as b,j as c,w as d,W as e,k as f,P as g,D as h,_ as i,A as j,q as k,l,c as m,$ as n,F as o,u as p,a as q,p as r,J as s,U as t,z as u,K as v,g as w,Q as x,V as y,X as z,Z as A,tt as B,x as C,f as D,h as E,T as F,E as G,H,L as I,b as J,v as K,C as L,B as M,M as N,O,et as P,nt as Q,ot as R,it as S,rt as T,st as U,lt as V,ct as W,dt as X,mt as Y,ut as Z,at as _,pt as $,gt as aa,xt as ba,ft as ca,ht as da};
