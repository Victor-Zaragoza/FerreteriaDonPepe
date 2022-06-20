import { Injectable } from '@angular/core';
import { usuario } from './usuarios';
import { USUARIOS } from './Misusuarios';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';
import firebase from 'firebase/compat/app';

declare global{
  interface Window{
    recaptchaVerifier:firebase.auth.RecaptchaVerifier;
    confirmationResult:any;
    grecaptcha:any;
  }
}
@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private user:usuario[]=USUARIOS;
  constructor(private firestore: AngularFirestore,private afauth: AngularFireAuth) { 

    this.getAuthUid();
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
  createDoc(data:any,path:string,id:any){
    const collection = this.firestore.collection(path);
    return collection.doc(id).set(data);
  }

  getDoc<tipo>(path:string,id:string){
    const collection = this.firestore.collection<tipo>(path);
    return collection.doc(id).valueChanges;
  }

  deleteDoc(path:string,id:string){
    const collection = this.firestore.collection(path);
    return collection.doc(id).delete;
  }

  updateDoc(data:any,path:string,id:string){
    const collection = this.firestore.collection(path);
    return collection.doc(id).update(data);
  }

  getUid(){
    return this.firestore.createId();
  }

  getCollection<tipo>(path:string){
    const collection = this.firestore.collection<tipo>(path);
    return collection.valueChanges;
  }
  
  //AUTENTICACION
  register(email: string, password:string){
      return this.afauth.createUserWithEmailAndPassword(email,password);
  }
//   login(email: string, password:string){
//     return this.afauth.signInWithEmailAndPassword(email,password);
// }
 login(email: string, password:string){
      return this.afauth.signInWithEmailAndPassword(email,password)
 }
  logout(){
    return this.afauth.signOut();
  }

  async getAuthUid(){
    const user = await this.afauth.currentUser;
    
    if(user === null){
      return null;
    }else{
      return user.uid;
    }
  }
  stateAuth(){
    return this.afauth.authState;
  }
  //tele
  mandarCodigo(numero:string, appVerified:any){
    return this.afauth.signInWithPhoneNumber(numero,appVerified).then(confirmation=>{
      window.confirmationResult=confirmation;
      alert("LISTO");
    }).catch(err=>{
      console.log(err);
    });

  }
  verificarCodigo(codigo:string){
    return window.confirmationResult.confirm(codigo).then((result:any)=>{
      let credenciales = firebase.auth.PhoneAuthProvider.credential(window.confirmationResult.verificationId,codigo);
      this.afauth.signInWithCredential(credenciales);
    })
  }

}

