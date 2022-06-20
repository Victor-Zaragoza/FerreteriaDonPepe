
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  forma!: FormGroup;
  email = "";
  name = "";
  mensaje = "";
  
  constructor(private httpClient:HttpClient) {
    this.forma = new FormGroup({
      'fullname': new FormControl('', [Validators.required, Validators.minLength(3)]),
      'type': new FormControl('', [Validators.required] ),
      'mail': new FormControl('',[Validators.required,Validators.email]),
      'message': new FormControl('',[Validators.required, Validators.minLength(5)])
      });
   }

  ngOnInit(): void {
  }

  public enviarDatos(){
    this.email = (<HTMLInputElement>document.getElementById('email')).value;
    this.name = (<HTMLInputElement>document.getElementById('name')).value;
    this.mensaje = (<HTMLInputElement>document.getElementById('mensaje')).value;
    let params = {
      asunto: "Contacto",
      mensaje: this.name + " " + this.email + " " + this.mensaje
    }
    console.log(params);
    this.httpClient.post('https://us-central1-ferreteria-c749b.cloudfunctions.net/app/envio',params).
    subscribe( data => {
      console.log(data);
      (<HTMLInputElement>document.getElementById('email')).value = "";
      (<HTMLInputElement>document.getElementById('name')).value = "";
      (<HTMLInputElement>document.getElementById('mensaje')).value = "";
    })
  }

  send(values:any){
    console.log(values);
    Swal.fire('Mensaje enviado.', '¡Muchas Gracias!', 'success');
    this.forma.reset();
   }


}
