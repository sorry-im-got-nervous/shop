import{_ as c,e as i,u as p,f as m,c as f,a as o,g as l,v as u,h as _,o as w}from"./index-DbLR9WuJ.js";const g={setup(){const n=i(""),e=i(""),r=p(),s=m();return{username:n,password:e,login:()=>{window.user=n.value;const a=s.query.redirect||"/protected";r.push(a)}}}},h={class:"login"},v=o("h1",null,"Вход",-1),x=o("label",{for:"username"},"Имя пользователя",-1),b=o("label",{for:"password"},"Пароль",-1),y=o("button",{class:"btn"},"Войти",-1);function B(n,e,r,s,d,a){return w(),f("div",h,[o("form",{class:"form",onSubmit:e[2]||(e[2]=_((...t)=>s.login&&s.login(...t),["prevent"]))},[v,x,l(o("input",{"onUpdate:modelValue":e[0]||(e[0]=t=>s.username=t),name:"username",type:"text",class:"input"},null,512),[[u,s.username]]),b,l(o("input",{"onUpdate:modelValue":e[1]||(e[1]=t=>s.password=t),name:"password",type:"text",class:"input"},null,512),[[u,s.password]]),y],32)])}const k=c(g,[["render",B]]);export{k as default};
