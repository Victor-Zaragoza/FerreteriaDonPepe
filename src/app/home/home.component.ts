import { Component, OnInit } from '@angular/core';
import {Home} from './home.model';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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

}
