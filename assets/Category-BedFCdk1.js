import{_ as u,s as _,c as l,a,b as o,w as s,t as d,F as g,j as h,r as m,o as c,d as r,n as p}from"./index-CagO5pva.js";const f={data(){return{products:_.products}},computed:{categoryName(){return this.$route.params.category||"Категория не найдена"},categoryProducts(){return this.products.filter(n=>n.category===this.$route.params.category)}}},y={class:"clothing-category"},k={id:"clothing-nav"},v={class:"items-grid"},x=["src","alt"];function N(n,$,w,B,C,i){const e=m("router-link");return c(),l("div",y,[a("div",k,[o(e,{to:"/clothing/shirts"},{default:s(()=>[r("Футболки")]),_:1}),o(e,{to:"/clothing/pants"},{default:s(()=>[r("Брюки")]),_:1}),o(e,{to:"/clothing/headwear"},{default:s(()=>[r("Головные уборы")]),_:1}),o(e,{to:"/clothing/home-decor"},{default:s(()=>[r("Домашний декор")]),_:1})]),a("h1",null,d(i.categoryName),1),a("div",v,[(c(!0),l(g,null,h(i.categoryProducts,t=>(c(),p(e,{key:t.id,to:{name:"product.show",params:{id:t.id,slug:t.slug}},class:"item product"},{default:s(()=>[a("h2",null,d(t.name),1),a("img",{src:`/shop/images/${t.image}`,alt:t.name},null,8,x)]),_:2},1032,["to"]))),128))])])}const D=u(f,[["render",N]]);export{D as default};
