import{_ as C,q as k,b as x,x as N,y as p,z as l,f,o as m,c as _,a,i as s,j as n,t as u,F as T,g as w,n as r}from"./index-Cz0k0I1w.js";const v=[{path:"shirts",name:"Верх"},{path:"pants",name:"Низ"},{path:"headwear",name:"Головные уборы"},{path:"home-decor",name:"Домашний декор"}],P={setup(){const h=k(),i=x();N(()=>{p.initProducts()});const d=l(()=>p.products.value),c=l(()=>{const t=i.params.category,o=v.find(e=>e.path===t);return o?o.name:"Категория не найдена"}),g=l(()=>d.value.filter(t=>t.category===i.params.category));return{products:d,categories:v,categoryName:c,categoryProducts:g,addToCart:t=>{const o={id:t.id,name:t.name,image:`/shop/images/${t.image}`,price:t.price,type:"product"};h.dispatch("addToCart",o)}}}},$={class:"home main-content"},b={id:"clothing-nav"},B={class:"items-grid"},F={class:"item-image-container"},S=["src","alt"],V={class:"item-info"},j=["onClick"];function q(h,i,d,c,g,y){const t=f("router-link"),o=f("v-icon");return m(),_("div",$,[a("div",b,[s(t,{to:"/clothing/shirts"},{default:n(()=>[r("Верх")]),_:1}),s(t,{to:"/clothing/pants"},{default:n(()=>[r("Низ")]),_:1}),s(t,{to:"/clothing/headwear"},{default:n(()=>[r("Головные уборы")]),_:1}),s(t,{to:"/clothing/home-decor"},{default:n(()=>[r("Домашний декор")]),_:1})]),a("h1",null,u(c.categoryName),1),a("div",B,[(m(!0),_(T,null,w(c.categoryProducts,e=>(m(),_("div",{key:e.id,class:"item product"},[s(t,{to:{name:"product.show",params:{id:e.id,slug:e.slug}}},{default:n(()=>[a("h2",null,u(e.name),1),a("div",F,[a("img",{src:`/shop/images/${e.image}`,alt:e.name},null,8,S)])]),_:2},1032,["to"]),a("div",V,[a("p",null,"Цена: "+u(e.price.toFixed(2))+" ₽",1),a("button",{class:"btn",onClick:z=>c.addToCart(e)},[s(o,null,{default:n(()=>[r("mdi-cart")]),_:1})],8,j)])]))),128))])])}const E=C(P,[["render",q],["__scopeId","data-v-0c7ed4c5"]]);export{E as default};