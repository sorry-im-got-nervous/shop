import{_ as u,r as i,u as _,b as m,o as f,c as w,a as e,w as l,v as c,d as h,p as v,k as b}from"./index-CSkqQKr3.js";const g={setup(){const t=i(""),s=i(""),r=_(),o=m();return{username:t,password:s,login:()=>{window.user=t.value;const d=o.query.redirect||"/protected";r.push(d)}}}},n=t=>(v("data-v-5ade6022"),t=t(),b(),t),x={class:"login"},I=n(()=>e("div",{class:"header-wrapper"},[e("h1",{class:"white-bg"},"Профиль")],-1)),S=n(()=>e("h1",null,"Вход",-1)),k=n(()=>e("label",{for:"username"},"Имя пользователя",-1)),y=n(()=>e("label",{for:"password"},"Пароль",-1)),B=n(()=>e("button",{class:"btn"},"Войти",-1));function V(t,s,r,o,p,d){return f(),w("div",x,[I,e("form",{class:"form",onSubmit:s[2]||(s[2]=h((...a)=>o.login&&o.login(...a),["prevent"]))},[S,k,l(e("input",{"onUpdate:modelValue":s[0]||(s[0]=a=>o.username=a),name:"username",type:"text",class:"input"},null,512),[[c,o.username]]),y,l(e("input",{"onUpdate:modelValue":s[1]||(s[1]=a=>o.password=a),name:"password",type:"text",class:"input"},null,512),[[c,o.password]]),B],32)])}const P=u(g,[["render",V],["__scopeId","data-v-5ade6022"]]);export{P as default};
