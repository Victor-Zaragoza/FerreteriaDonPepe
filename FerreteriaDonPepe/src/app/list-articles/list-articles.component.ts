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
  stringbarra:any[]=[];
  titulos:any[]=[];
  public date = new Date();
  constructor(private _sharedService: SharedService) { 
   
  }
 
public barChartOptions = {
    scaleShowVerticalLines:false,
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Grafica Barra Dinamica',
      },
    },
  };
public barChartLabels = ['2000', '2001', '2002', '2003', '2004', '2005', '2006'];
public barChartLegend = true;
public barChartData = [
    {data: [0, 0, 0, 0, 0, 0, 0], label: 'Series A'},
    {data: [0, 0, 0, 0, 0, 0, 0], label: 'Series B'}
  ];

  llenargrafica(){
    for(var i=0;i<this.articles.length;i++){
    this.stringbarra[i]=JSON.parse(this.articles[i].total);
    this.titulos[i]=JSON.stringify(this.articles[i].name);
    console.log("entra");
    console.log(this.stringbarra)
   
    }
    this.barChartData = [
      {data: this.stringbarra, label: 'Series A'},
    ]
    this.barChartLabels= this.titulos
      
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
