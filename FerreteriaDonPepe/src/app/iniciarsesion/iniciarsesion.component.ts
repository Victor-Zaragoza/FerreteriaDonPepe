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
  usuario={
    email: '',
    password: ''
  }


  misusers:usuario[]=[];
  check:any;


  constructor(public miservicio:SharedService) {

  }

  ngOnInit(): void {
    this.misusers=this.miservicio.getuser();
  }
  Ingresar(){
    
    const {email,password} = this.usuario;
    this.miservicio.login(email,password).then(res=>{
      console.log("se logeo: ",res);
      
    })
  }
   async opc(){
    const uid = await this.miservicio.getAuthUid();
    console.log(uid);
  }























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

}
