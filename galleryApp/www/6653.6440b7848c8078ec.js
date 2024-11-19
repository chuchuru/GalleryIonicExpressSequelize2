"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6653],{6653:(P,p,d)=>{d.r(p),d.d(p,{AddGalleryPageModule:()=>M});var y=d(177),s=d(4341),l=d(4742),c=d(8986),m=d(467),e=d(4438),f=d(3496);const h=[{path:"",component:(()=>{var a;class i{constructor(n,r,t){this.galleryService=n,this.router=r,this.alertController=t,this.gallery={name:"",address:"",file:null},this.selectedImage=null}onImageSelected(n){const r=n.target;r.files&&r.files[0]&&(this.selectedImage=r.files[0])}onSubmit(){var n=this;return(0,m.A)(function*(){if(!n.gallery.name||!n.gallery.address)return void(yield(yield n.alertController.create({header:"Error",message:"Por favor, completa todos los campos del formulario.",buttons:["OK"]})).present());const r=new FormData;r.append("name",n.gallery.name),r.append("address",n.gallery.address),n.selectedImage&&r.append("file",n.selectedImage,n.selectedImage.name),n.galleryService.addGallery(r).subscribe(function(){var t=(0,m.A)(function*(g){yield(yield n.alertController.create({header:"\xc9xito",message:"La galer\xeda ha sido a\xf1adida correctamente.",buttons:["OK"]})).present(),n.router.navigate(["/my-galleries"])});return function(g){return t.apply(this,arguments)}}(),function(){var t=(0,m.A)(function*(g){yield(yield n.alertController.create({header:"Error",message:"Hubo un error al agregar la galer\xeda. Int\xe9ntalo de nuevo.",buttons:["OK"]})).present()});return function(g){return t.apply(this,arguments)}}())})()}}return(a=i).\u0275fac=function(n){return new(n||a)(e.rXU(f.A),e.rXU(c.Ix),e.rXU(l.hG))},a.\u0275cmp=e.VBU({type:a,selectors:[["app-add-gallery"]],decls:21,vars:4,consts:[["galleryForm","ngForm"],[3,"translucent"],["color","primary"],[2,"color","white"],[3,"ngSubmit"],["position","floating"],["type","text","name","name","required","",3,"ngModelChange","ngModel"],["type","text","name","address","required","",3,"ngModelChange","ngModel"],["for","fileInput"],["id","fileInput","name","file","type","file","accept","image/*","capture","environment",3,"change"],["expand","full","type","submit",3,"disabled"]],template:function(n,r){if(1&n){const t=e.RV6();e.j41(0,"ion-header",1)(1,"ion-toolbar",2)(2,"ion-title",3),e.EFF(3,"A\xf1adir Galer\xeda"),e.k0s()()(),e.j41(4,"ion-content")(5,"form",4,0),e.bIt("ngSubmit",function(){return e.eBV(t),e.Njj(r.onSubmit())}),e.j41(7,"ion-item")(8,"ion-label",5),e.EFF(9,"Nombre"),e.k0s(),e.j41(10,"ion-input",6),e.mxI("ngModelChange",function(o){return e.eBV(t),e.DH7(r.gallery.name,o)||(r.gallery.name=o),e.Njj(o)}),e.k0s()(),e.j41(11,"ion-item")(12,"ion-label",5),e.EFF(13,"Direcci\xf3n"),e.k0s(),e.j41(14,"ion-input",7),e.mxI("ngModelChange",function(o){return e.eBV(t),e.DH7(r.gallery.address,o)||(r.gallery.address=o),e.Njj(o)}),e.k0s()(),e.j41(15,"ion-item")(16,"ion-label",8),e.EFF(17,"Selecciona una imagen (opcional)"),e.k0s(),e.j41(18,"input",9),e.bIt("change",function(o){return e.eBV(t),e.Njj(r.onImageSelected(o))}),e.k0s()(),e.j41(19,"ion-button",10),e.EFF(20," A\xf1adir Galer\xeda "),e.k0s()()()}if(2&n){const t=e.sdS(6);e.Y8G("translucent",!0),e.R7$(10),e.R50("ngModel",r.gallery.name),e.R7$(4),e.R50("ngModel",r.gallery.address),e.R7$(5),e.Y8G("disabled",!t.valid)}},dependencies:[s.qT,s.BC,s.cb,s.YS,s.vS,s.cV,l.Jm,l.W9,l.eU,l.$w,l.uz,l.he,l.BC,l.ai,l.Gw],styles:[".custom-card[_ngcontent-%COMP%]{border-radius:12px;overflow:hidden;box-shadow:0 4px 8px #0000001a;margin-bottom:20px}.card-image[_ngcontent-%COMP%]{width:100%;height:auto;border-top-left-radius:12px;border-top-right-radius:12px}.card-subtitle[_ngcontent-%COMP%], .card-title[_ngcontent-%COMP%]{color:#6a0dad}.card-description[_ngcontent-%COMP%]{font-size:.9em;color:#555}.custom-card-footer[_ngcontent-%COMP%]{background-color:#f9f9f9;padding:10px;border-top:1px solid #ddd}.icon[_ngcontent-%COMP%]{font-size:1.8em;color:#6a0dad}.revalue[_ngcontent-%COMP%], .price[_ngcontent-%COMP%]{font-size:1.2em;color:#333}.action-button[_ngcontent-%COMP%]{margin-top:10px}ion-fab-button[_ngcontent-%COMP%]{border-radius:50%;box-shadow:0 4px 10px #0003}ion-fab-button[_ngcontent-%COMP%]:hover{background-color:#54268f}"]}),i})()}];let b=(()=>{var a;class i{}return(a=i).\u0275fac=function(n){return new(n||a)},a.\u0275mod=e.$C({type:a}),a.\u0275inj=e.G2t({imports:[c.iI.forChild(h),c.iI]}),i})(),M=(()=>{var a;class i{}return(a=i).\u0275fac=function(n){return new(n||a)},a.\u0275mod=e.$C({type:a}),a.\u0275inj=e.G2t({imports:[y.MD,s.YN,l.bv,b]}),i})()}}]);