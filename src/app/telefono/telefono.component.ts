import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import firebase from "firebase/compat/app";
import { Cliente } from '../models';

@Component({
  selector: 'app-telefono',
  templateUrl: './telefono.component.html',
  styleUrls: ['./telefono.component.css']
})
export class TelefonoComponent implements OnInit {
  cliente:Cliente={
    uid:'',
    email:'',
    passwordd: '',
    passwordd2: '',
    nombrerefe:'',
    usuarioubi:''
  }
  
  uid='';

  constructor(private authservice:SharedService) { }

  async ngOnInit() {
    const uid = await this.authservice.getAuthUid();
    console.log(uid);
    setTimeout(()=>{
     this.captchaCreator();     
   },200)
 }
 captchaCreator(){
   window.recaptchaVerifier= new firebase.auth.RecaptchaVerifier('recaptcha-container');
   window.recaptchaVerifier.render();
 }
 mandarCodigo(numero:string){
   this.authservice.mandarCodigo(numero,window.recaptchaVerifier);
 }
 verificarCodigo(codigo:string){
   this.authservice.verificarCodigo(codigo);
   
 }
 async registrarse(){
  const credenciales={
    email: this.cliente.email,
    password:this.cliente.passwordd
  };
  const uid = await this.authservice.getAuthUid();
  
  this.cliente.uid= uid;
  this.guardarUser();
}
async guardarUser(){
  const path = 'users';
  this.authservice.createDoc(this.cliente,path,this.cliente.uid).then(res=>{
    console.log("guardado con exito");
  }).catch(error=>{});

}
async salir(){
  this.authservice.logout();
  const uid = await this.authservice.getAuthUid();
  console.log(uid);
}
}
