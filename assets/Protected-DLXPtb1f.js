import{_ as r,o as a,c as l,a as e,t as c}from"./index-CjKeS1WN.js";const u={data(){return{username:window.user}},methods:{logout(){window.user=null,this.$router.push({name:"Home",query:{logout:null}})}}},d={class:"profile-container"},i={class:"profile-content"};function _(p,o,f,m,s,t){return a(),l("div",d,[e("div",i,[e("h1",null,"Здравствуйте, "+c(s.username),1),e("button",{class:"btn",onClick:o[0]||(o[0]=(...n)=>t.logout&&t.logout(...n))},"Выход")])])}const h=r(u,[["render",_],["__scopeId","data-v-43ef0091"]]);export{h as default};
