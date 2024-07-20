import{_ as f,r as c,x,y as p,o as d,c as s,a as t,w as n,v as a,h as y,d as v,t as m,F as b,g as h,n as w}from"./index-Cz0k0I1w.js";const U={setup(){const i=c({id:"",name:"",price:0,slug:"",image:"",category:"",description:"",material:"",design:"",cut:"",print:"",care:""}),r=c(""),u=c("");x(()=>{p.initProducts()});const e=l=>{},g=()=>{try{const l={...i.value,id:Date.now(),price:Number(i.value.price)};p.addProduct(l),i.value={id:null,name:"",price:0,slug:"",image:"",category:"",description:"",material:"",design:"",cut:"",print:"",care:""},u.value="",r.value="Продукт успешно создан!",setTimeout(()=>{r.value=""},3e3)}catch(l){console.error("Ошибка при создании продукта:",l),r.value="Ошибка при создании продукта"}};return{product:i,products:p.products,createProduct:g,message:r,handleImageUpload:e,imagePreview:u}}},V={class:"product-creator"},q=t("div",{class:"header-wrapper"},[t("h1",{class:"white-bg"},"Создание нового продукта")],-1),P=t("h2",null,"Введите информацию о продукте",-1),k=t("label",{for:"name"},"Название",-1),N=t("label",{for:"price"},"Цена",-1),S=t("label",{for:"slug"},"Slug",-1),B=t("label",{for:"image"},"Изображение",-1),D=["src"],I=t("label",{for:"category"},"Категория",-1),M=t("label",{for:"description"},"Описание",-1),T=t("label",{for:"material"},"Материал",-1),C=t("label",{for:"design"},"Дизайн",-1),F=t("label",{for:"cut"},"Крой",-1),A=t("label",{for:"print"},"Принт",-1),E=t("label",{for:"care"},"Уход",-1),L=t("button",{class:"btn"},"Создать продукт",-1),j={key:0,class:"message"},z=t("h2",null,"Список продуктов",-1),G=["src","alt"];function H(i,r,u,e,g,l){return d(),s("div",V,[q,t("form",{class:"form",onSubmit:r[11]||(r[11]=v((...o)=>e.createProduct&&e.createProduct(...o),["prevent"]))},[P,k,n(t("input",{"onUpdate:modelValue":r[0]||(r[0]=o=>e.product.name=o),name:"name",type:"text",class:"input",required:""},null,512),[[a,e.product.name]]),N,n(t("input",{"onUpdate:modelValue":r[1]||(r[1]=o=>e.product.price=o),name:"price",type:"number",class:"input",required:""},null,512),[[a,e.product.price]]),S,n(t("input",{"onUpdate:modelValue":r[2]||(r[2]=o=>e.product.slug=o),name:"slug",type:"text",class:"input",required:""},null,512),[[a,e.product.slug]]),B,t("input",{type:"file",onChange:r[3]||(r[3]=(...o)=>e.handleImageUpload&&e.handleImageUpload(...o)),accept:"image/*",class:"input",required:""},null,32),e.imagePreview?(d(),s("img",{key:0,src:e.imagePreview,alt:"Preview",style:{"max-width":"200px","margin-top":"10px"}},null,8,D)):y("",!0),I,n(t("input",{"onUpdate:modelValue":r[4]||(r[4]=o=>e.product.category=o),name:"category",type:"text",class:"input",required:""},null,512),[[a,e.product.category]]),M,n(t("textarea",{"onUpdate:modelValue":r[5]||(r[5]=o=>e.product.description=o),name:"description",class:"input",required:""},null,512),[[a,e.product.description]]),T,n(t("input",{"onUpdate:modelValue":r[6]||(r[6]=o=>e.product.material=o),name:"material",type:"text",class:"input",required:""},null,512),[[a,e.product.material]]),C,n(t("input",{"onUpdate:modelValue":r[7]||(r[7]=o=>e.product.design=o),name:"design",type:"text",class:"input",required:""},null,512),[[a,e.product.design]]),F,n(t("input",{"onUpdate:modelValue":r[8]||(r[8]=o=>e.product.cut=o),name:"cut",type:"text",class:"input",required:""},null,512),[[a,e.product.cut]]),A,n(t("input",{"onUpdate:modelValue":r[9]||(r[9]=o=>e.product.print=o),name:"print",type:"text",class:"input",required:""},null,512),[[a,e.product.print]]),E,n(t("input",{"onUpdate:modelValue":r[10]||(r[10]=o=>e.product.care=o),name:"care",type:"text",class:"input",required:""},null,512),[[a,e.product.care]]),L],32),e.message?(d(),s("div",j,m(e.message),1)):y("",!0),z,t("ul",null,[(d(!0),s(b,null,h(e.products,(o,_)=>(d(),s("li",{key:_},[w(m(o.name)+" - "+m(o.price)+"₽ ",1),t("img",{src:`/shop/images/${o.image}`,alt:o.name,style:{"max-width":"50px","max-height":"50px"}},null,8,G)]))),128))])])}const K=f(U,[["render",H]]);export{K as default};