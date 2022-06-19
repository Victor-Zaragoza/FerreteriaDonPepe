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
  createUser : FormGroup;
  submitted=false;
  id: string | null;
  title='Agregar Usuario';

  cliente:Cliente={
    uid:'',
    email:'',
    passwordd: '',
    nombrerefe:'',
    usuarioubi:''
  }
  uid='';
  constructor(private forma:FormBuilder,private _sharedService: SharedService, private router:Router,private toastr: ToastrService,private aRoute: ActivatedRoute) { 
    this.createUser=this.forma.group({
      nombre:['',Validators.required],
      logname:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required],
    })
    this.id=this.aRoute.snapshot.paramMap.get('id');
    console.log(this.id)
    this._sharedService.stateAuth().subscribe(res=>{
      console.log(res);
    });
  }

  async ngOnInit() {
    this.editUser();
    const uid = await this._sharedService.getUid();
    console.log(uid);
  }
  addEditUser(){
    this.submitted=true;

    if(this.createUser.invalid){
      return;
    }
    if(this.id=== null){
      this.addUser();
    }else{
      this.Edit(this.id);
    }
    
  }
  addUser(){
    // this.title='Agregar Articulo';
    const user:any = {
      nombre:this.createUser.value.nombre,
      logname:this.createUser.value.logname,
      email:this.createUser.value.email,
      password:this.createUser.value.password,
      
    }
    this._sharedService.addUser(user).then(() =>{
      this.toastr.success('Articulo registrado con exito','articulo registrado',{positionClass:'toast-bottom-right'});
      this.router.navigate(['/list'])
    }).catch(error=>{
      console.log(error);
      
    })
  }
  editUser(){
    
    if(this.id!=null){
      this.title='Editar user';
      this._sharedService.getUser(this.id).subscribe(data=>{
        console.log(data.payload.data()['nombre']);
        this.createUser.setValue({
          nombre: data.payload.data()['nombre'],
          logname: data.payload.data()['logname'],
          email: data.payload.data()['email'],
          password: data.payload.data()['password'],
        })
      })
    }
  }
  Edit(id:string){
    const user:any = {
      nombre:this.createUser.value.nombre,
      logname:this.createUser.value.logname,
      email:this.createUser.value.email,
      password:this.createUser.value.password,
    }
    this._sharedService.updateUser(id, user).then(()=>{
      this.toastr.info('El articulo fue modificado', 'Articulo modificado', {positionClass:'toast-bottom-right'})
    })
    this.router.navigate(['/list']);
  }
  register(){
    const credenciales={
      email:this.cliente.email,
      password:this.cliente.passwordd
    };
    this._sharedService.register(credenciales.email,credenciales.password);
  }
  Ingresar(){
    
    const credenciales={
      email:this.cliente.email,
      password:this.cliente.passwordd
    };
    this._sharedService.login(credenciales.email,credenciales.password).then(res=>{
      console.log("se logeo: ",res);
    })
  }
  logout(){
    this._sharedService.logout();

  }
  getUserLogged(){
    this._sharedService.getUserLogged().subscribe(res=>{
      console.log(res?.email);
    });

  }
}
