import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
// import { AngularFirestore } from '@angular/fire/compat/firestore';
// import { Observable } from 'rxjs';
@Component({
  selector: 'app-list-articles',
  templateUrl: './list-articles.component.html',
  styleUrls: ['./list-articles.component.css']
})
export class ListArticlesComponent implements OnInit {
  articles:any[]=[];
  constructor(private _sharedService: SharedService) { 
   
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
  deleteArticle(id:string){
    this._sharedService.deleteArticle(id).then(()=>{
      console.log('articulo eliminado con exito');
    })
  }
}
