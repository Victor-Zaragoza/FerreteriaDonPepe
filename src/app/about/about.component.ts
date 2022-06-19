
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  forma!: FormGroup;

  
  constructor() {
    this.forma = new FormGroup({
      'fullname': new FormControl('', [Validators.required, Validators.minLength(3)]),
      'type': new FormControl('', [Validators.required] ),
      'mail': new FormControl('',[Validators.required,Validators.email]),
      'message': new FormControl('',[Validators.required, Validators.minLength(5)])
      });
   }

  ngOnInit(): void {
  }

  send(values:any){
    console.log(values);
    Swal.fire('Mensaje enviado.', '¡Muchas Gracias!', 'success');
    this.forma.reset();
   }


}
