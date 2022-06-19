import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { __await } from 'tslib';
import { Cliente } from '../models';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  cliente:Cliente={
    uid:'',
    email:'',
    passwordd: '',
    passwordd2: '',
    nombrerefe:'',
    usuarioubi:''
  }
  
  uid='';

  constructor(private forma:FormBuilder,private _sharedService: SharedService, private router:Router,private toastr: ToastrService,private aRoute: ActivatedRoute) { 
    this._sharedService.stateAuth().subscribe(res=>{
      if(res!=null){
        this.uid=res.uid;
        // this.getUserInfo(this.uid);
      }
    });
  }

  async ngOnInit() { 
    const uid = await this._sharedService.getAuthUid();
    console.log(uid);
  }

  async registrarse(){
    console.log(this.cliente.passwordd);
    console.log(this.cliente.passwordd2);
    if(this.cliente.passwordd==this.cliente.passwordd2){
      console.log("entra");
        const credenciales={
        email: this.cliente.email,
        password:this.cliente.passwordd
      };
      const res = await this._sharedService.register(credenciales.email,credenciales.password).catch(err=>{
        console.log(' error -> ', err);
      })
      const uid = await this._sharedService.getAuthUid();
      
      this.cliente.uid= uid;
      this.guardarUser();
      this.toastr.success('Registro Exitoso','Registro Exitoso',{positionClass:'toast-bottom-right'});
      this.router.navigate(['/home']);
    }
    else{
      console.log("no");
      this.cliente.passwordd="";
      this.cliente.passwordd2="";
      this.toastr.error('Las contraseñas deben coincidir','Las contraseñas deben coincidir',{positionClass:'toast-bottom-right'});
      
    }

  }
  async guardarUser(){
    const path = 'users';
    this._sharedService.createDoc(this.cliente,path,this.cliente.uid).then(res=>{
      console.log("guardado con exito");
    }).catch(error=>{});

  }
  async salir(){
    this._sharedService.logout();
    const uid = await this._sharedService.getAuthUid();
    console.log(uid);
  }
  
  // getUserInfo(uid:string){
  //   const path='users';
  //   this._sharedService.getDoc<Cliente>(path,uid).subscribe(res=>{
  //     this.cliente=res;
  //   });
  // }
  
  
 
}
