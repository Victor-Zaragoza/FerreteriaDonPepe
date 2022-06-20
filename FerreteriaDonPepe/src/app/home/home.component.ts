import { Component, OnInit } from '@angular/core';
import {Home} from './home.model';
import { SharedService } from '../shared.service';
import { ToastrService } from 'ngx-toastr';
import { map } from '@firebase/util';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  articles:any[]=[];
  productos:any[]=[];
 
  constructor(private _sharedService: SharedService, private toastr: ToastrService) { 
   
  }

  

  ngOnInit(): void {
    this.getArticles();
  }
  getArticles(){
    this._sharedService.getArticles().subscribe(data =>{
      this.articles=[];
      data.forEach((element:any) => {
        this.articles.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
      console.log(this.articles);
    });
  }
  agregarCarrito(nombre:any, precio:any){
    let agregar={
      nombre: nombre,
      precio: precio

    };
    this.productos.push(agregar);
    localStorage.setItem('productos',JSON.stringify(this.productos)); 
    this.toastr.success('Producto añadido al carrito','producto añadido al carrito',{positionClass:'toast-bottom-right'});
  }

}
