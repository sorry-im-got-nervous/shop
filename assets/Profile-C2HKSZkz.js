import{_ as u,r as i,u as m,b as _,o as f,c as w,a as s,w as l,v as c,d as h,p as v,k as b}from"./index-Cz0k0I1w.js";const g={setup(){const e=i(""),o=i(""),r=m(),t=_();return{username:e,password:o,login:()=>{if(window.user=e.value,e.value.toLowerCase()==="admin")r.push("/admin");else{const d=t.query.redirect||"/protected";r.push(d)}}}}},n=e=>(v("data-v-ef0ac7c9"),e=e(),b(),e),x={class:"login"},I=n(()=>s("div",{class:"header-wrapper"},[s("h1",{class:"white-bg"},"Профиль")],-1)),S=n(()=>s("h1",null,"Вход",-1)),k=n(()=>s("label",{for:"username"},"Имя пользователя",-1)),y=n(()=>s("label",{for:"password"},"Пароль",-1)),B=n(()=>s("button",{class:"btn"},"Войти",-1));function V(e,o,r,t,p,d){return f(),w("div",x,[I,s("form",{class:"form",onSubmit:o[2]||(o[2]=h((...a)=>t.login&&t.login(...a),["prevent"]))},[S,k,l(s("input",{"onUpdate:modelValue":o[0]||(o[0]=a=>t.username=a),name:"username",type:"text",class:"input"},null,512),[[c,t.username]]),y,l(s("input",{"onUpdate:modelValue":o[1]||(o[1]=a=>t.password=a),name:"password",type:"password",class:"input"},null,512),[[c,t.password]]),B],32)])}const P=u(g,[["render",V],["__scopeId","data-v-ef0ac7c9"]]);export{P as default};
