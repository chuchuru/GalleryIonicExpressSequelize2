"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9358],{9358:(I,f,d)=>{d.r(f),d.d(f,{AddArtistPageModule:()=>F});var h=d(177),c=d(4341),a=d(4742),p=d(8986),u=d(467),m=d(3114),t=d(4438),b=d(9581);function A(r,s){1&r&&(t.j41(0,"div")(1,"ion-text",13),t.EFF(2,"El nombre es obligatorio."),t.k0s()())}function P(r,s){1&r&&(t.j41(0,"div")(1,"ion-text",13),t.EFF(2,"Los apellidos son obligatorios."),t.k0s()())}function M(r,s){1&r&&(t.j41(0,"div")(1,"ion-text",13),t.EFF(2,"La fecha de nacimiento es obligatoria."),t.k0s()())}const y=[{path:"",component:(()=>{var r;class s{constructor(e,n,o){this.artistService=e,this.router=n,this.alertController=o,this.artist={name:"",surnames:"",dateBirth:""},this.selectedImage=null}chooseImageSource(){var e=this;return(0,u.A)(function*(){yield(yield e.alertController.create({header:"Seleccionar Imagen",message:"Elige una opci\xf3n para a\xf1adir la imagen.",buttons:[{text:"Tomar Foto",handler:()=>{e.takePhoto()}},{text:"Seleccionar de Galer\xeda",handler:()=>{e.pickImage()}}]})).present()})()}takePhoto(){var e=this;return(0,u.A)(function*(){try{const n=yield m.i7.getPhoto({resultType:m.LK.Uri,source:m.ru.Camera,quality:100}),o=yield fetch(n.webPath);e.selectedImage=yield o.blob(),console.log("Imagen tomada:",n)}catch{yield(yield e.alertController.create({header:"Error",message:"Hubo un error al tomar la foto. Intenta de nuevo.",buttons:["OK"]})).present()}})()}pickImage(){var e=this;return(0,u.A)(function*(){try{const n=yield m.i7.pickImages({limit:1,quality:100}),o=yield fetch(n.photos[0].webPath);e.selectedImage=yield o.blob(),console.log("Imagen seleccionada:",n)}catch{yield(yield e.alertController.create({header:"Error",message:"Hubo un error al seleccionar la imagen. Intenta de nuevo.",buttons:["OK"]})).present()}})()}onSubmit(){var e=this;return(0,u.A)(function*(){if(!e.artist.name||!e.artist.surnames||!e.artist.dateBirth)return void(yield(yield e.alertController.create({header:"Error",message:"Por favor, completa todos los campos del formulario.",buttons:["OK"]})).present());const n=new FormData;if(n.append("name",e.artist.name),n.append("surnames",e.artist.surnames),n.append("dateBirth",e.artist.dateBirth),e.selectedImage){const o=new File([e.selectedImage],"photo.jpg",{type:"image/jpeg"});n.append("file",o)}e.artistService.addArtist(n).subscribe(function(){var o=(0,u.A)(function*(l){yield(yield e.alertController.create({header:"\xc9xito",message:"El artista ha sido a\xf1adido correctamente.",buttons:["OK"]})).present(),e.router.navigate(["/my-artists"]).then(()=>{e.artistService.getArtists().subscribe(v=>{console.log("Artistas actualizados:",v)})})});return function(l){return o.apply(this,arguments)}}(),function(){var o=(0,u.A)(function*(l){console.error("Error al agregar el artista:",l),yield(yield e.alertController.create({header:"Error",message:"Hubo un error al agregar el artista. Int\xe9ntalo de nuevo.",buttons:["OK"]})).present()});return function(l){return o.apply(this,arguments)}}())})()}}return(r=s).\u0275fac=function(e){return new(e||r)(t.rXU(b.J),t.rXU(p.Ix),t.rXU(a.hG))},r.\u0275cmp=t.VBU({type:r,selectors:[["app-add-artist"]],decls:29,vars:8,consts:[["artistForm","ngForm"],[3,"translucent"],["color","primary"],[2,"color","white"],[3,"ngSubmit"],["position","floating"],["type","text","name","name","required","",3,"ngModelChange","ngModel"],["type","text","name","surnames","required","",3,"ngModelChange","ngModel"],["name","dateBirth","placeholder","DD/MM/YYYY","displayFormat","DD/MM/YYYY","required","",3,"ngModelChange","ngModel"],["for","fileInput"],["expand","full",3,"click"],[4,"ngIf"],["expand","full","type","submit",3,"disabled"],["color","danger"]],template:function(e,n){if(1&e){const o=t.RV6();t.j41(0,"ion-header",1)(1,"ion-toolbar",2)(2,"ion-title",3),t.EFF(3,"A\xf1adir Artista"),t.k0s()()(),t.j41(4,"ion-content")(5,"form",4,0),t.bIt("ngSubmit",function(){return t.eBV(o),t.Njj(n.onSubmit())}),t.j41(7,"ion-item")(8,"ion-label",5),t.EFF(9,"Nombre"),t.k0s(),t.j41(10,"ion-input",6),t.mxI("ngModelChange",function(i){return t.eBV(o),t.DH7(n.artist.name,i)||(n.artist.name=i),t.Njj(i)}),t.k0s()(),t.j41(11,"ion-item")(12,"ion-label",5),t.EFF(13,"Apellidos"),t.k0s(),t.j41(14,"ion-input",7),t.mxI("ngModelChange",function(i){return t.eBV(o),t.DH7(n.artist.surnames,i)||(n.artist.surnames=i),t.Njj(i)}),t.k0s()(),t.j41(15,"ion-item")(16,"ion-label",5),t.EFF(17,"Fecha de Nacimiento"),t.k0s(),t.j41(18,"ion-datetime",8),t.mxI("ngModelChange",function(i){return t.eBV(o),t.DH7(n.artist.dateBirth,i)||(n.artist.dateBirth=i),t.Njj(i)}),t.k0s()(),t.j41(19,"ion-item")(20,"ion-label",9),t.EFF(21,"Seleccionar Imagen"),t.k0s(),t.j41(22,"ion-button",10),t.bIt("click",function(){return t.eBV(o),t.Njj(n.chooseImageSource())}),t.EFF(23,"Seleccionar Imagen"),t.k0s()(),t.DNE(24,A,3,0,"div",11)(25,P,3,0,"div",11)(26,M,3,0,"div",11),t.j41(27,"ion-button",12),t.EFF(28," A\xf1adir Artista "),t.k0s()()()}if(2&e){const o=t.sdS(6);t.Y8G("translucent",!0),t.R7$(10),t.R50("ngModel",n.artist.name),t.R7$(4),t.R50("ngModel",n.artist.surnames),t.R7$(4),t.R50("ngModel",n.artist.dateBirth),t.R7$(6),t.Y8G("ngIf",o.submitted&&!n.artist.name),t.R7$(),t.Y8G("ngIf",o.submitted&&!n.artist.surnames),t.R7$(),t.Y8G("ngIf",o.submitted&&!n.artist.dateBirth),t.R7$(),t.Y8G("disabled",!o.valid)}},dependencies:[h.bT,c.qT,c.BC,c.cb,c.YS,c.vS,c.cV,a.Jm,a.W9,a.A9,a.eU,a.$w,a.uz,a.he,a.IO,a.BC,a.ai,a.Je,a.Gw],styles:['@charset "UTF-8";ion-header[_ngcontent-%COMP%]{--background: #4c8bf5;--color: white}ion-toolbar[_ngcontent-%COMP%]{--background: #4c8bf5}ion-title[_ngcontent-%COMP%]{font-weight:700;font-size:24px;color:#fff}form[_ngcontent-%COMP%]{padding:20px;background:#f9f9f9;border-radius:10px}ion-item[_ngcontent-%COMP%]{margin-bottom:15px;border-radius:8px}ion-label[_ngcontent-%COMP%]{font-size:16px}ion-input[_ngcontent-%COMP%], ion-datetime[_ngcontent-%COMP%]{font-size:16px;padding:10px;border-radius:8px}ion-button[_ngcontent-%COMP%]{background-color:#4c8bf5;color:#fff;font-weight:700;margin-top:20px;border-radius:5px}ion-button[_ngcontent-%COMP%]:disabled{background-color:#e0e0e0}ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{color:#4c8bf5}input[type=file][_ngcontent-%COMP%]{padding:10px;border-radius:8px}ion-icon[_ngcontent-%COMP%]{font-size:25px;color:#4c8bf5}ion-fab-button[_ngcontent-%COMP%]{background-color:#4c8bf5}ion-datetime[_ngcontent-%COMP%]{--padding-start: 10px;--padding-end: 10px;--min-width: 150px;--max-width: 250px}']}),s})()}];let C=(()=>{var r;class s{}return(r=s).\u0275fac=function(e){return new(e||r)},r.\u0275mod=t.$C({type:r}),r.\u0275inj=t.G2t({imports:[p.iI.forChild(y),p.iI]}),s})(),F=(()=>{var r;class s{}return(r=s).\u0275fac=function(e){return new(e||r)},r.\u0275mod=t.$C({type:r}),r.\u0275inj=t.G2t({imports:[h.MD,c.YN,a.bv,C]}),s})()}}]);