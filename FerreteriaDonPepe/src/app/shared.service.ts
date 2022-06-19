
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
    this.getUid();

  }
  
  getuser():usuario[]{
    return this.user;
  }
  settam(tam:number,posicion:number){
    this.user[posicion].tam=tam;
  }

  //CRUD
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
  //USUARIOS
  addUser(article: any):Promise<any>{
    return this.firestore.collection('users').add(article);
  }
  deleteUser(id:string):Promise<any>{
    return this.firestore.collection('users').doc(id).delete();
  }
  getUser(id: string): Observable<any>{
    return this.firestore.collection('users').doc(id).snapshotChanges();
  }
  updateUser(id:string, data:any):Promise<any>{
    return this.firestore.collection('users').doc(id).update(data);
  }

  async register(email: string, password:string){
    try{
      return await this.afauth.createUserWithEmailAndPassword(email,password);

    }catch(err){
      console.log("error en registro:  ",err);
      return null;
    }
  }
  async login(email: string, password:string){
    try{
      return await this.afauth.signInWithEmailAndPassword(email,password);

    }catch(err){
      console.log("error en login:  ",err);
      return null;
    }
  }
  logout(){
    this.afauth.signOut();
  }
  async getUid(){
    const user = await this.afauth.currentUser;
    if(user === null){
      return null;
    }else{
      return user.uid;
    }
  }
  stateAuth(){
    return this.afauth.authState
  }
  getUserLogged(){
    return this.afauth.authState;
  }
}

