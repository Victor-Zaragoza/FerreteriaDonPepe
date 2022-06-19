
import { Injectable } from '@angular/core';
import { usuario } from './usuarios';
import { USUARIOS } from './Misusuarios';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private user:usuario[]=USUARIOS;
  constructor(private firestore: AngularFirestore,private afauth: AngularFireAuth) { 


  }
  
  getuser():usuario[]{
    return this.user;
  }
  settam(tam:number,posicion:number){
    this.user[posicion].tam=tam;
  }
  addArticle(article: any):Promise<any>{
    return this.firestore.collection('articles').add(article);
  }
  getArticles():Observable<any>{
    return this.firestore.collection('articles', ref => ref.orderBy('name','asc')).snapshotChanges();
  }
  deleteArticle(id:string):Promise<any>{
    return this.firestore.collection('articles').doc(id).delete();
  }
  getArticle(id: string): Observable<any>{
    return this.firestore.collection('articles').doc(id).snapshotChanges();
  }
  updateArticle(id:string, data:any):Promise<any>{
    return this.firestore.collection('articles').doc(id).update(data);
  }
}

