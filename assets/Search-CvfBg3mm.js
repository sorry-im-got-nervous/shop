import{_ as ft,s as gt,f as pt,o as F,c as T,a as I,w as mt,v as _t,F as Mt,g as xt,h as yt,i as Et,j as It,t as J,p as St,k as At}from"./index-Cz0k0I1w.js";function S(e){return Array.isArray?Array.isArray(e):it(e)==="[object Array]"}const wt=1/0;function Lt(e){if(typeof e=="string")return e;let t=e+"";return t=="0"&&1/e==-wt?"-0":t}function kt(e){return e==null?"":Lt(e)}function y(e){return typeof e=="string"}function rt(e){return typeof e=="number"}function Rt(e){return e===!0||e===!1||bt(e)&&it(e)=="[object Boolean]"}function nt(e){return typeof e=="object"}function bt(e){return nt(e)&&e!==null}function m(e){return e!=null}function B(e){return!e.trim().length}function it(e){return e==null?e===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}const vt="Incorrect 'index' type",Nt=e=>`Invalid value for key ${e}`,$t=e=>`Pattern length exceeds max of ${e}.`,Ot=e=>`Missing ${e} property in key`,Ct=e=>`Property 'weight' in key '${e}' must be a positive integer`,Z=Object.prototype.hasOwnProperty;class Ft{constructor(t){this._keys=[],this._keyMap={};let s=0;t.forEach(r=>{let n=ct(r);this._keys.push(n),this._keyMap[n.id]=n,s+=n.weight}),this._keys.forEach(r=>{r.weight/=s})}get(t){return this._keyMap[t]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function ct(e){let t=null,s=null,r=null,n=1,i=null;if(y(e)||S(e))r=e,t=q(e),s=W(e);else{if(!Z.call(e,"name"))throw new Error(Ot("name"));const c=e.name;if(r=c,Z.call(e,"weight")&&(n=e.weight,n<=0))throw new Error(Ct(c));t=q(c),s=W(c),i=e.getFn}return{path:t,id:s,weight:n,src:r,getFn:i}}function q(e){return S(e)?e:e.split(".")}function W(e){return S(e)?e.join("."):e}function Tt(e,t){let s=[],r=!1;const n=(i,c,o)=>{if(m(i))if(!c[o])s.push(i);else{let a=c[o];const h=i[a];if(!m(h))return;if(o===c.length-1&&(y(h)||rt(h)||Rt(h)))s.push(kt(h));else if(S(h)){r=!0;for(let l=0,d=h.length;l<d;l+=1)n(h[l],c,o+1)}else c.length&&n(h,c,o+1)}};return n(e,y(t)?t.split("."):t,0),r?s:s[0]}const Pt={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},jt={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(e,t)=>e.score===t.score?e.idx<t.idx?-1:1:e.score<t.score?-1:1},Dt={location:0,threshold:.6,distance:100},Kt={useExtendedSearch:!1,getFn:Tt,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var u={...jt,...Pt,...Dt,...Kt};const Bt=/[^ ]+/g;function Wt(e=1,t=3){const s=new Map,r=Math.pow(10,t);return{get(n){const i=n.match(Bt).length;if(s.has(i))return s.get(i);const c=1/Math.pow(i,.5*e),o=parseFloat(Math.round(c*r)/r);return s.set(i,o),o},clear(){s.clear()}}}class G{constructor({getFn:t=u.getFn,fieldNormWeight:s=u.fieldNormWeight}={}){this.norm=Wt(s,3),this.getFn=t,this.isCreated=!1,this.setIndexRecords()}setSources(t=[]){this.docs=t}setIndexRecords(t=[]){this.records=t}setKeys(t=[]){this.keys=t,this._keysMap={},t.forEach((s,r)=>{this._keysMap[s.id]=r})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,y(this.docs[0])?this.docs.forEach((t,s)=>{this._addString(t,s)}):this.docs.forEach((t,s)=>{this._addObject(t,s)}),this.norm.clear())}add(t){const s=this.size();y(t)?this._addString(t,s):this._addObject(t,s)}removeAt(t){this.records.splice(t,1);for(let s=t,r=this.size();s<r;s+=1)this.records[s].i-=1}getValueForItemAtKeyId(t,s){return t[this._keysMap[s]]}size(){return this.records.length}_addString(t,s){if(!m(t)||B(t))return;let r={v:t,i:s,n:this.norm.get(t)};this.records.push(r)}_addObject(t,s){let r={i:s,$:{}};this.keys.forEach((n,i)=>{let c=n.getFn?n.getFn(t):this.getFn(t,n.path);if(m(c)){if(S(c)){let o=[];const a=[{nestedArrIndex:-1,value:c}];for(;a.length;){const{nestedArrIndex:h,value:l}=a.pop();if(m(l))if(y(l)&&!B(l)){let d={v:l,i:h,n:this.norm.get(l)};o.push(d)}else S(l)&&l.forEach((d,f)=>{a.push({nestedArrIndex:f,value:d})})}r.$[i]=o}else if(y(c)&&!B(c)){let o={v:c,n:this.norm.get(c)};r.$[i]=o}}}),this.records.push(r)}toJSON(){return{keys:this.keys,records:this.records}}}function ot(e,t,{getFn:s=u.getFn,fieldNormWeight:r=u.fieldNormWeight}={}){const n=new G({getFn:s,fieldNormWeight:r});return n.setKeys(e.map(ct)),n.setSources(t),n.create(),n}function Vt(e,{getFn:t=u.getFn,fieldNormWeight:s=u.fieldNormWeight}={}){const{keys:r,records:n}=e,i=new G({getFn:t,fieldNormWeight:s});return i.setKeys(r),i.setIndexRecords(n),i}function P(e,{errors:t=0,currentLocation:s=0,expectedLocation:r=0,distance:n=u.distance,ignoreLocation:i=u.ignoreLocation}={}){const c=t/e.length;if(i)return c;const o=Math.abs(r-s);return n?c+o/n:o?1:c}function zt(e=[],t=u.minMatchCharLength){let s=[],r=-1,n=-1,i=0;for(let c=e.length;i<c;i+=1){let o=e[i];o&&r===-1?r=i:!o&&r!==-1&&(n=i-1,n-r+1>=t&&s.push([r,n]),r=-1)}return e[i-1]&&i-r>=t&&s.push([r,i-1]),s}const b=32;function Qt(e,t,s,{location:r=u.location,distance:n=u.distance,threshold:i=u.threshold,findAllMatches:c=u.findAllMatches,minMatchCharLength:o=u.minMatchCharLength,includeMatches:a=u.includeMatches,ignoreLocation:h=u.ignoreLocation}={}){if(t.length>b)throw new Error($t(b));const l=t.length,d=e.length,f=Math.max(0,Math.min(r,d));let g=i,p=f;const _=o>1||a,k=_?Array(d):[];let E;for(;(E=e.indexOf(t,p))>-1;){let M=P(t,{currentLocation:E,expectedLocation:f,distance:n,ignoreLocation:h});if(g=Math.min(M,g),p=E+l,_){let A=0;for(;A<l;)k[E+A]=1,A+=1}}p=-1;let v=[],R=1,O=l+d;const dt=1<<l-1;for(let M=0;M<l;M+=1){let A=0,w=O;for(;A<w;)P(t,{errors:M,currentLocation:f+w,expectedLocation:f,distance:n,ignoreLocation:h})<=g?A=w:O=w,w=Math.floor((O-A)/2+A);O=w;let U=Math.max(1,f-w+1),K=c?d:Math.min(f+w,d)+l,N=Array(K+2);N[K+1]=(1<<M)-1;for(let x=K;x>=U;x-=1){let C=x-1,X=s[e.charAt(C)];if(_&&(k[C]=+!!X),N[x]=(N[x+1]<<1|1)&X,M&&(N[x]|=(v[x+1]|v[x])<<1|1|v[x+1]),N[x]&dt&&(R=P(t,{errors:M,currentLocation:C,expectedLocation:f,distance:n,ignoreLocation:h}),R<=g)){if(g=R,p=C,p<=f)break;U=Math.max(1,2*f-p)}}if(P(t,{errors:M+1,currentLocation:f,expectedLocation:f,distance:n,ignoreLocation:h})>g)break;v=N}const D={isMatch:p>=0,score:Math.max(.001,R)};if(_){const M=zt(k,o);M.length?a&&(D.indices=M):D.isMatch=!1}return D}function Ht(e){let t={};for(let s=0,r=e.length;s<r;s+=1){const n=e.charAt(s);t[n]=(t[n]||0)|1<<r-s-1}return t}class at{constructor(t,{location:s=u.location,threshold:r=u.threshold,distance:n=u.distance,includeMatches:i=u.includeMatches,findAllMatches:c=u.findAllMatches,minMatchCharLength:o=u.minMatchCharLength,isCaseSensitive:a=u.isCaseSensitive,ignoreLocation:h=u.ignoreLocation}={}){if(this.options={location:s,threshold:r,distance:n,includeMatches:i,findAllMatches:c,minMatchCharLength:o,isCaseSensitive:a,ignoreLocation:h},this.pattern=a?t:t.toLowerCase(),this.chunks=[],!this.pattern.length)return;const l=(f,g)=>{this.chunks.push({pattern:f,alphabet:Ht(f),startIndex:g})},d=this.pattern.length;if(d>b){let f=0;const g=d%b,p=d-g;for(;f<p;)l(this.pattern.substr(f,b),f),f+=b;if(g){const _=d-b;l(this.pattern.substr(_),_)}}else l(this.pattern,0)}searchIn(t){const{isCaseSensitive:s,includeMatches:r}=this.options;if(s||(t=t.toLowerCase()),this.pattern===t){let p={isMatch:!0,score:0};return r&&(p.indices=[[0,t.length-1]]),p}const{location:n,distance:i,threshold:c,findAllMatches:o,minMatchCharLength:a,ignoreLocation:h}=this.options;let l=[],d=0,f=!1;this.chunks.forEach(({pattern:p,alphabet:_,startIndex:k})=>{const{isMatch:E,score:v,indices:R}=Qt(t,p,_,{location:n+k,distance:i,threshold:c,findAllMatches:o,minMatchCharLength:a,includeMatches:r,ignoreLocation:h});E&&(f=!0),d+=v,E&&R&&(l=[...l,...R])});let g={isMatch:f,score:f?d/this.chunks.length:1};return f&&r&&(g.indices=l),g}}class L{constructor(t){this.pattern=t}static isMultiMatch(t){return tt(t,this.multiRegex)}static isSingleMatch(t){return tt(t,this.singleRegex)}search(){}}function tt(e,t){const s=e.match(t);return s?s[1]:null}class Yt extends L{constructor(t){super(t)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(t){const s=t===this.pattern;return{isMatch:s,score:s?0:1,indices:[0,this.pattern.length-1]}}}class Gt extends L{constructor(t){super(t)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(t){const r=t.indexOf(this.pattern)===-1;return{isMatch:r,score:r?0:1,indices:[0,t.length-1]}}}class Ut extends L{constructor(t){super(t)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(t){const s=t.startsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,this.pattern.length-1]}}}class Xt extends L{constructor(t){super(t)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(t){const s=!t.startsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,t.length-1]}}}class Jt extends L{constructor(t){super(t)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(t){const s=t.endsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[t.length-this.pattern.length,t.length-1]}}}class Zt extends L{constructor(t){super(t)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(t){const s=!t.endsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,t.length-1]}}}class ht extends L{constructor(t,{location:s=u.location,threshold:r=u.threshold,distance:n=u.distance,includeMatches:i=u.includeMatches,findAllMatches:c=u.findAllMatches,minMatchCharLength:o=u.minMatchCharLength,isCaseSensitive:a=u.isCaseSensitive,ignoreLocation:h=u.ignoreLocation}={}){super(t),this._bitapSearch=new at(t,{location:s,threshold:r,distance:n,includeMatches:i,findAllMatches:c,minMatchCharLength:o,isCaseSensitive:a,ignoreLocation:h})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(t){return this._bitapSearch.searchIn(t)}}class lt extends L{constructor(t){super(t)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(t){let s=0,r;const n=[],i=this.pattern.length;for(;(r=t.indexOf(this.pattern,s))>-1;)s=r+i,n.push([r,s-1]);const c=!!n.length;return{isMatch:c,score:c?0:1,indices:n}}}const V=[Yt,lt,Ut,Xt,Zt,Jt,Gt,ht],et=V.length,qt=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,te="|";function ee(e,t={}){return e.split(te).map(s=>{let r=s.trim().split(qt).filter(i=>i&&!!i.trim()),n=[];for(let i=0,c=r.length;i<c;i+=1){const o=r[i];let a=!1,h=-1;for(;!a&&++h<et;){const l=V[h];let d=l.isMultiMatch(o);d&&(n.push(new l(d,t)),a=!0)}if(!a)for(h=-1;++h<et;){const l=V[h];let d=l.isSingleMatch(o);if(d){n.push(new l(d,t));break}}}return n})}const se=new Set([ht.type,lt.type]);class re{constructor(t,{isCaseSensitive:s=u.isCaseSensitive,includeMatches:r=u.includeMatches,minMatchCharLength:n=u.minMatchCharLength,ignoreLocation:i=u.ignoreLocation,findAllMatches:c=u.findAllMatches,location:o=u.location,threshold:a=u.threshold,distance:h=u.distance}={}){this.query=null,this.options={isCaseSensitive:s,includeMatches:r,minMatchCharLength:n,findAllMatches:c,ignoreLocation:i,location:o,threshold:a,distance:h},this.pattern=s?t:t.toLowerCase(),this.query=ee(this.pattern,this.options)}static condition(t,s){return s.useExtendedSearch}searchIn(t){const s=this.query;if(!s)return{isMatch:!1,score:1};const{includeMatches:r,isCaseSensitive:n}=this.options;t=n?t:t.toLowerCase();let i=0,c=[],o=0;for(let a=0,h=s.length;a<h;a+=1){const l=s[a];c.length=0,i=0;for(let d=0,f=l.length;d<f;d+=1){const g=l[d],{isMatch:p,indices:_,score:k}=g.search(t);if(p){if(i+=1,o+=k,r){const E=g.constructor.type;se.has(E)?c=[...c,..._]:c.push(_)}}else{o=0,i=0,c.length=0;break}}if(i){let d={isMatch:!0,score:o/i};return r&&(d.indices=c),d}}return{isMatch:!1,score:1}}}const z=[];function ne(...e){z.push(...e)}function Q(e,t){for(let s=0,r=z.length;s<r;s+=1){let n=z[s];if(n.condition(e,t))return new n(e,t)}return new at(e,t)}const j={AND:"$and",OR:"$or"},H={PATH:"$path",PATTERN:"$val"},Y=e=>!!(e[j.AND]||e[j.OR]),ie=e=>!!e[H.PATH],ce=e=>!S(e)&&nt(e)&&!Y(e),st=e=>({[j.AND]:Object.keys(e).map(t=>({[t]:e[t]}))});function ut(e,t,{auto:s=!0}={}){const r=n=>{let i=Object.keys(n);const c=ie(n);if(!c&&i.length>1&&!Y(n))return r(st(n));if(ce(n)){const a=c?n[H.PATH]:i[0],h=c?n[H.PATTERN]:n[a];if(!y(h))throw new Error(Nt(a));const l={keyId:W(a),pattern:h};return s&&(l.searcher=Q(h,t)),l}let o={children:[],operator:i[0]};return i.forEach(a=>{const h=n[a];S(h)&&h.forEach(l=>{o.children.push(r(l))})}),o};return Y(e)||(e=st(e)),r(e)}function oe(e,{ignoreFieldNorm:t=u.ignoreFieldNorm}){e.forEach(s=>{let r=1;s.matches.forEach(({key:n,norm:i,score:c})=>{const o=n?n.weight:null;r*=Math.pow(c===0&&o?Number.EPSILON:c,(o||1)*(t?1:i))}),s.score=r})}function ae(e,t){const s=e.matches;t.matches=[],m(s)&&s.forEach(r=>{if(!m(r.indices)||!r.indices.length)return;const{indices:n,value:i}=r;let c={indices:n,value:i};r.key&&(c.key=r.key.src),r.idx>-1&&(c.refIndex=r.idx),t.matches.push(c)})}function he(e,t){t.score=e.score}function le(e,t,{includeMatches:s=u.includeMatches,includeScore:r=u.includeScore}={}){const n=[];return s&&n.push(ae),r&&n.push(he),e.map(i=>{const{idx:c}=i,o={item:t[c],refIndex:c};return n.length&&n.forEach(a=>{a(i,o)}),o})}class ${constructor(t,s={},r){this.options={...u,...s},this.options.useExtendedSearch,this._keyStore=new Ft(this.options.keys),this.setCollection(t,r)}setCollection(t,s){if(this._docs=t,s&&!(s instanceof G))throw new Error(vt);this._myIndex=s||ot(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(t){m(t)&&(this._docs.push(t),this._myIndex.add(t))}remove(t=()=>!1){const s=[];for(let r=0,n=this._docs.length;r<n;r+=1){const i=this._docs[r];t(i,r)&&(this.removeAt(r),r-=1,n-=1,s.push(i))}return s}removeAt(t){this._docs.splice(t,1),this._myIndex.removeAt(t)}getIndex(){return this._myIndex}search(t,{limit:s=-1}={}){const{includeMatches:r,includeScore:n,shouldSort:i,sortFn:c,ignoreFieldNorm:o}=this.options;let a=y(t)?y(this._docs[0])?this._searchStringList(t):this._searchObjectList(t):this._searchLogical(t);return oe(a,{ignoreFieldNorm:o}),i&&a.sort(c),rt(s)&&s>-1&&(a=a.slice(0,s)),le(a,this._docs,{includeMatches:r,includeScore:n})}_searchStringList(t){const s=Q(t,this.options),{records:r}=this._myIndex,n=[];return r.forEach(({v:i,i:c,n:o})=>{if(!m(i))return;const{isMatch:a,score:h,indices:l}=s.searchIn(i);a&&n.push({item:i,idx:c,matches:[{score:h,value:i,norm:o,indices:l}]})}),n}_searchLogical(t){const s=ut(t,this.options),r=(o,a,h)=>{if(!o.children){const{keyId:d,searcher:f}=o,g=this._findMatches({key:this._keyStore.get(d),value:this._myIndex.getValueForItemAtKeyId(a,d),searcher:f});return g&&g.length?[{idx:h,item:a,matches:g}]:[]}const l=[];for(let d=0,f=o.children.length;d<f;d+=1){const g=o.children[d],p=r(g,a,h);if(p.length)l.push(...p);else if(o.operator===j.AND)return[]}return l},n=this._myIndex.records,i={},c=[];return n.forEach(({$:o,i:a})=>{if(m(o)){let h=r(s,o,a);h.length&&(i[a]||(i[a]={idx:a,item:o,matches:[]},c.push(i[a])),h.forEach(({matches:l})=>{i[a].matches.push(...l)}))}}),c}_searchObjectList(t){const s=Q(t,this.options),{keys:r,records:n}=this._myIndex,i=[];return n.forEach(({$:c,i:o})=>{if(!m(c))return;let a=[];r.forEach((h,l)=>{a.push(...this._findMatches({key:h,value:c[l],searcher:s}))}),a.length&&i.push({idx:o,item:c,matches:a})}),i}_findMatches({key:t,value:s,searcher:r}){if(!m(s))return[];let n=[];if(S(s))s.forEach(({v:i,i:c,n:o})=>{if(!m(i))return;const{isMatch:a,score:h,indices:l}=r.searchIn(i);a&&n.push({score:h,key:t,value:i,idx:c,norm:o,indices:l})});else{const{v:i,n:c}=s,{isMatch:o,score:a,indices:h}=r.searchIn(i);o&&n.push({score:a,key:t,value:i,norm:c,indices:h})}return n}}$.version="7.0.0";$.createIndex=ot;$.parseIndex=Vt;$.config=u;$.parseQuery=ut;ne(re);const ue={data(){return{searchQuery:"",products:gt.products,fuse:null}},mounted(){const e={keys:["name","description"],includeScore:!0,threshold:.6};this.fuse=new $(this.products,e)},computed:{filteredProducts(){return this.searchQuery.trim()===""?[]:this.fuse.search(this.searchQuery).map(e=>e.item)}}},de=e=>(St("data-v-8f1027e7"),e=e(),At(),e),fe=de(()=>I("div",{class:"header-wrapper"},[I("h1",{class:"white-bg"},"Поиск")],-1)),ge={class:"product-search"},pe={key:0},me={class:"product-image"},_e=["src","alt"],Me={class:"product-details"},xe={class:"product-name"};function ye(e,t,s,r,n,i){const c=pt("router-link");return F(),T("div",null,[fe,I("div",ge,[mt(I("input",{class:"search",type:"text","onUpdate:modelValue":t[0]||(t[0]=o=>n.searchQuery=o),placeholder:"Поиск товаров..."},null,512),[[_t,n.searchQuery]]),i.filteredProducts.length>0?(F(),T("ul",pe,[(F(!0),T(Mt,null,xt(i.filteredProducts,o=>(F(),T("li",{key:o.id,class:"product-item"},[Et(c,{to:{name:"product.show",params:{id:o.id,slug:o.slug}}},{default:It(()=>[I("div",me,[I("img",{src:`/shop/images/${o.image}`,alt:o.name},null,8,_e)]),I("div",Me,[I("h2",xe,J(o.name),1),I("p",null,J(o.description),1)])]),_:2},1032,["to"])]))),128))])):yt("",!0)])])}const Se=ft(ue,[["render",ye],["__scopeId","data-v-8f1027e7"]]);export{Se as default};
