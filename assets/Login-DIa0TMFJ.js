import{_ as c,r as i,u as p,b as m,o as _,c as f,a as s,w as l,v as d,d as w}from"./index-DDCuo4ga.js";const h={setup(){const n=i(""),e=i(""),r=p(),o=m();return{username:n,password:e,login:()=>{window.user=n.value;const a=o.query.redirect||"/protected";r.push(a)}}}},b={class:"login"},g=s("div",{class:"header-wrapper"},[s("h1",{class:"white-bg"},"Профиль")],-1),v=s("h1",null,"Вход",-1),x=s("label",{for:"username"},"Имя пользователя",-1),y=s("label",{for:"password"},"Пароль",-1),B=s("button",{class:"btn"},"Войти",-1);function V(n,e,r,o,u,a){return _(),f("div",b,[g,s("form",{class:"form",onSubmit:e[2]||(e[2]=w((...t)=>o.login&&o.login(...t),["prevent"]))},[v,x,l(s("input",{"onUpdate:modelValue":e[0]||(e[0]=t=>o.username=t),name:"username",type:"text",class:"input"},null,512),[[d,o.username]]),y,l(s("input",{"onUpdate:modelValue":e[1]||(e[1]=t=>o.password=t),name:"password",type:"text",class:"input"},null,512),[[d,o.password]]),B],32)])}const M=c(h,[["render",V]]);export{M as default};
