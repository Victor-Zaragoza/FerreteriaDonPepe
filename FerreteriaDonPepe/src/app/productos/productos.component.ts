import { Component, OnInit } from '@angular/core';
import { Producto } from '../producto.model';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  productos:any[]=[];
  

  constructor( private toastr: ToastrService) {
    this.mostrarProductos();
   }

   mostrarProductos(){
    this.productos= JSON.parse(localStorage.getItem('productos')|| '[]');
    console.log(this.productos);
   }

   deleteProducto(elimina:any){
      this.productos= this.productos.filter(function(producto){
        return producto.nombre != elimina;
      });
      localStorage.setItem('productos',JSON.stringify(this.productos)); 
      this.toastr.error('Producto eliminado','producto eliminado',{positionClass:'toast-bottom-right'});

   }
   comprar(){
      this.productos=[];
      localStorage.setItem('productos', JSON.stringify(this.productos));
      Swal.fire('Compra Exitosa!.', '¡Muchas Gracias!', 'success');

   }

  ngOnInit(): void {
    
  }
  

}
