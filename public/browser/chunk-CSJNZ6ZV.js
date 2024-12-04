import{b as T}from"./chunk-EENZJMDI.js";import{a as w}from"./chunk-2XZO4QSL.js";import{a as j,b as B,c as O,d as H,e as V,g as q,h as W,i as $,j as J}from"./chunk-7CKZNUKU.js";import{a as M,b as L,c as _,d as D,h as I,i as p,k as P,l as k,o as R,q as x,r as E,s as G,u as A}from"./chunk-IASFZHR5.js";import{$ as b}from"./chunk-MXDFVPY4.js";import"./chunk-7RTFL4X6.js";import{$ as C,Ha as t,Qa as i,Ra as l,Sa as d,U as v,Vb as S,Wb as F,Yb as g,Za as N,_ as h,gb as f,ob as y,ta as r,ua as s}from"./chunk-HXDG54XB.js";import{f as z}from"./chunk-WXOQW3K3.js";var c=class n{constructor(m,e,o){this.fb=m;this.authService=e;this.router=o;this.form=this.fb.group({email:["",[p.required,p.email]],password:["",[p.required,p.minLength(6)]]})}form;onSubmit(){return z(this,null,function*(){if(this.form.invalid)return;let{email:m,password:e}=this.form.value;try{yield this.authService.login(m,e),this.router.navigate(["/welcome"]),alert("Login successful!")}catch(o){alert(`Login failed: ${o.message}`)}})}static \u0275fac=function(e){return new(e||n)(s(G),s(w),s(S))};static \u0275cmp=h({type:n,selectors:[["app-login"]],standalone:!0,features:[y],decls:17,vars:6,consts:[["nz-form","",1,"login-form",3,"ngSubmit","formGroup"],["nzErrorTip","Please input your email!",3,"nzHasFeedback"],["nzPrefixIcon","mail"],["type","email","nz-input","","formControlName","email","placeholder","Email"],["nzErrorTip","Please input your password!",3,"nzHasFeedback"],["nzPrefixIcon","lock"],["type","password","nz-input","","formControlName","password","placeholder","Password"],["nz-row","",1,"login-form-margin"],["nz-col","",1,"text-right",3,"nzSpan"],["nz-button","","nzType","primary",1,"login-form-button",3,"nzLoading"],[1,"text-center"],[3,"routerLink"]],template:function(e,o){if(e&1&&(i(0,"form",0),N("ngSubmit",function(){return o.onSubmit()}),i(1,"nz-form-item")(2,"nz-form-control",1)(3,"nz-input-group",2),d(4,"input",3),l()()(),i(5,"nz-form-item")(6,"nz-form-control",4)(7,"nz-input-group",5),d(8,"input",6),l()()(),i(9,"div",7)(10,"div",8)(11,"button",9),f(12,"Log in"),l()()(),i(13,"div",10),f(14," Or "),i(15,"a",11),f(16,"register now!"),l()()()),e&2){let a,u;t("formGroup",o.form),r(2),t("nzHasFeedback",((a=o.form.get("email"))==null?null:a.touched)&&((a=o.form.get("email"))==null?null:a.invalid)),r(4),t("nzHasFeedback",((u=o.form.get("password"))==null?null:u.touched)&&((u=o.form.get("password"))==null?null:u.invalid)),r(4),t("nzSpan",12),r(),t("nzLoading",o.form.invalid),r(4),t("routerLink","/signup")}},dependencies:[b,A,R,I,P,k,x,E,q,B,j,H,O,V,D,_,M,L,J,W,$,T,F],styles:[".login-form[_ngcontent-%COMP%]{max-width:300px}.login-form-margin[_ngcontent-%COMP%]{margin-bottom:16px}.login-form-forgot[_ngcontent-%COMP%]{float:right}.login-form-button[_ngcontent-%COMP%]{width:100%}"]})};var U=[{path:"",component:c}],K=class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=C({type:n});static \u0275inj=v({imports:[g.forChild(U),g]})};export{K as LoginRoutingModule};
