import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import swal from'sweetalert2';
import { SharedService } from '../shared.service';
import{usuario} from '../usuarios'

@Component({
  selector: 'app-iniciarsesion',
  templateUrl: './iniciarsesion.component.html',
  styleUrls: ['./iniciarsesion.component.css']
})

export class IniciarsesionComponent implements OnInit {
  
    Pam1:any;
    Pam2:any;
  


 
  check:any;


  constructor(public miservicio:SharedService) {

  }

  ngOnInit(): void {
  }

  async Ingresar(){
    
    const res = await this.miservicio.login(this.Pam1,this.Pam2).catch(err=>{
      console.log(' error -> ', err);
    })
  }
   async opc(){
    const uid = await this.miservicio.getAuthUid();
    console.log(uid);
  }






















/*
  public Login(nombrerec:string,passwordrec:string){
    localStorage.setItem("userval",nombrerec);
    this.check=localStorage.getItem('usuarioLogin')
    if(this.check==null){
    localStorage.setItem('usuarioLogin', JSON.stringify(this.misusers));
    }
    if(this.misusers[0].Nombre==nombrerec  && this.misusers[0].Contraseña==passwordrec || this.misusers[1].Nombre==nombrerec && this.misusers[1].Contraseña==passwordrec){
      timer(5000);
      swal.fire('Inicio de sesion exitoso...', 'Exitosos', 'success',);
      window.location.href = '/home';
    }else{
      swal.fire('Inicio Invalido...', 'No Exitosos', 'error');
    }    
  }

  sinlogin(){
    localStorage.setItem("userval","sinlogin");
    this.check=localStorage.getItem('usuarioLogin')
    if(this.check==null){
    localStorage.setItem('usuarioLogin', JSON.stringify(this.misusers));
    }
  }
  */

}
