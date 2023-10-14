"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[319],{7319:function(n,e,t){t.r(e),t.d(e,{default:function(){return V}});var r,i,o,a,s,d,l,c,u,p,x,f,m,h=t(5705),b=t(6727),g=t(168),j=t(5867),Z=(0,j.ZP)(h.l0)(r||(r=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  width: 480px;\n  margin: 0 auto;\n"]))),v=j.ZP.h1(i||(i=(0,g.Z)(["\n  color: #e84a5f;\n\n  font-family: Manjari;\n  font-size: 36px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: normal;\n"]))),y=j.ZP.label(o||(o=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n"]))),w=(0,j.ZP)(h.gN)(a||(a=(0,g.Z)(["\n  width: 480px;\n  height: 32px;\n  border-radius: 4px;\n  border: 1px solid #635b5b;\n  color: #635b5b;\n\n  font-family: Overpass;\n  font-size: 20px;\n  font-weight: 300;\n"]))),P=(0,j.ZP)(h.Bc)(s||(s=(0,g.Z)(["\n  font-size: 14px;\n  color: red;\n"]))),z=j.ZP.button(d||(d=(0,g.Z)(["\n  border-radius: 4px;\n  background: #e84a5f;\n  width: 200px;\n  height: 32px;\n  color: #fff;\n  border: none;\n\n  font-family: Overpass;\n  font-size: 20px;\n\n  font-weight: 400;\n  margin: 0 auto;\n  margin-top: 32px;\n"]))),_=t(9434),k=t(6299),A=t(2286),C=t(184),F=b.Ry().shape({name:b.Z_("Enter your name").min(3,"Too Short!").matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan").required("Name is required"),number:b.Z_().matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +").min(12,"Phone number must be at least 12 digits").required("Phone number is required")}),N=function(){var n=(0,_.v9)(A.Af),e=(0,_.I0)();return(0,C.jsx)("div",{children:(0,C.jsx)(h.J9,{initialValues:{name:"",number:""},validationSchema:F,onSubmit:function(t,r){!function(t){var r={name:t.name,number:t.number};if(n.items.some((function(n){return n.name.toLowerCase()===r.name.toLowerCase()})))return window.alert("".concat(r.name," is allready in contacts"));e((0,k.uK)(r))}(t),r.resetForm()},children:(0,C.jsxs)(Z,{children:[(0,C.jsx)(v,{children:"Your contacts"}),(0,C.jsxs)(y,{children:["Name",(0,C.jsx)(w,{type:"text",name:"name"}),(0,C.jsx)(P,{name:"name",component:"span"})]}),(0,C.jsxs)(y,{children:["Number",(0,C.jsx)(w,{type:"tel",name:"number"}),(0,C.jsx)(P,{name:"number",component:"span"})]}),(0,C.jsx)(z,{type:"submit",children:"Add contact"})]})})})},q=j.ZP.li(l||(l=(0,g.Z)(["\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid #b6b1b1;\n  padding-top: 16px;\n  padding-bottom: 16px;\n"]))),I=j.ZP.p(c||(c=(0,g.Z)(["\n  flex: 1;\n  color: #646b74;\n"]))),L=j.ZP.button(u||(u=(0,g.Z)(["\n  color: #e84a5f;\n  background-color: #ffffff;\n  border: 0.5px solid #e84a5f;\n  border-radius: 6px;\n  padding: 4px 8px;\n\n  font-family: Overpass;\n  font-size: 16px;\n  font-weight: 400;\n"]))),O=function(n){var e=n.contact,t=(0,_.I0)();return(0,C.jsxs)(q,{children:[(0,C.jsx)(I,{children:e.name}),(0,C.jsx)(I,{children:e.number}),(0,C.jsx)(L,{onClick:function(){return t((0,k.GK)(e.id))},type:"button",children:"Delete"})]},e.id)},S=j.ZP.ul(p||(p=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),B=function(){var n=(0,_.v9)(A.hF);return(0,C.jsx)(S,{children:n.map((function(n){return(0,C.jsx)("li",{children:(0,C.jsx)(O,{contact:n})})}))})},D=j.ZP.label(x||(x=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  font-size: 18px;\n  color: #646b74;\n"]))),E=j.ZP.input(f||(f=(0,g.Z)(["\n  color: #635b5b;\n  border-radius: 4px;\n  border: 1px solid #635b5b;\n\n  font-family: Overpass;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 300;\n  line-height: normal;\n  width: 208px;\n  height: 24px;\n"]))),J=t(6895),K=function(){var n=(0,_.I0)(),e=(0,_.v9)(A.AD);return(0,C.jsxs)(D,{children:["Find contacts by name",(0,C.jsx)(E,{value:e,onChange:function(e){return n((0,J.S)(e.target.value))},type:"text"})]})},M=function(){return(0,C.jsx)("div",{children:"Loading..."})},G=j.ZP.div(m||(m=(0,g.Z)(["\n  width: 480px;\n  margin: 0 auto;\n  padding-top: 24px;\n"]))),R=function(){var n=(0,_.v9)(A.Af);return(0,C.jsxs)("div",{children:[(0,C.jsx)(N,{}),(0,C.jsx)(G,{children:0!==n.items.length&&(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(K,{}),n.isLoading&&!n.error&&(0,C.jsx)(M,{}),(0,C.jsx)(B,{})]})})]})},T=t(2791);function V(){var n=(0,_.I0)();return(0,T.useEffect)((function(){n((0,k.yF)())}),[n]),(0,C.jsx)("div",{children:(0,C.jsx)(R,{})})}}}]);
//# sourceMappingURL=319.7ffab6ef.chunk.js.map