import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit {
  createArticle:FormGroup;
  submitted=false;
  id: string | null;
  title='Agregar Articulo';

 

  constructor(private fb:FormBuilder,private _sharedService: SharedService, private router:Router,private toastr: ToastrService,private aRoute: ActivatedRoute) { 
    this.createArticle=this.fb.group({
      image:['',Validators.required],
      name:['',Validators.required],
      description:['',Validators.required],
      price:['',Validators.required],
      total:['',Validators.required]
    })
    this.id=this.aRoute.snapshot.paramMap.get('id');
    console.log(this.id)
  }

  ngOnInit(): void {
    this.editArticle();
  }
  addEditArticle(){
    this.submitted=true;

    if(this.createArticle.invalid){
      return;
    }
    if(this.id=== null){
      this.addArticle();
    }else{
      this.Edit(this.id);
    }
    
  }
  addArticle(){
    // this.title='Agregar Articulo';
    const article:any = {
      image:this.createArticle.value.image,
      name:this.createArticle.value.name,
      description:this.createArticle.value.description,
      price:this.createArticle.value.price,
      total:this.createArticle.value.total,
      
    }
    this._sharedService.addArticle(article).then(() =>{
      this.toastr.success('Articulo registrado con exito','articulo registrado',{positionClass:'toast-bottom-right'});
      this.router.navigate(['/list'])
    }).catch(error=>{
      console.log(error);
      
    })
  }
  editArticle(){
    
    if(this.id!=null){
      this.title='Editar Articulo';
      this._sharedService.getArticle(this.id).subscribe(data=>{
        console.log(data.payload.data()['name']);
        this.createArticle.setValue({
          image: data.payload.data()['image'],
          name: data.payload.data()['name'],
          description: data.payload.data()['description'],
          price: data.payload.data()['price'],
          total: data.payload.data()['total'],
        })
      })
    }
  }
  Edit(id:string){
    const article:any = {
      image:this.createArticle.value.image,
      name:this.createArticle.value.name,
      description:this.createArticle.value.description,
      price:this.createArticle.value.price,
      total:this.createArticle.value.total,
    }
    this._sharedService.updateArticle(id, article).then(()=>{
      this.toastr.info('El articulo fue modificado', 'Articulo modificado', {positionClass:'toast-bottom-right'})
    })
    this.router.navigate(['/list']);
  }

}
