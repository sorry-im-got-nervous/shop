import{_ as u,c as a,a as t,t as l,b as c,o as i,r as m}from"./index-DLbzQZa1.js";const d={data(){return{username:window.user}},methods:{logout(){window.user=null,this.$router.push({name:"Home",query:{logout:null}})}}};function p(_,e,f,g,n,o){const r=m("router-link");return i(),a("div",null,[t("h1",null,"Здравствуйте, "+l(n.username),1),t("button",{class:"btn",onClick:e[0]||(e[0]=(...s)=>o.logout&&o.logout(...s))},"Выход"),c(r,{to:{name:"invoices"}})])}const w=u(d,[["render",p]]);export{w as default};
