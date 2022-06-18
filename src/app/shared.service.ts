import { Injectable } from '@angular/core';
import { usuario } from './usuarios';
import { USUARIOS } from './Misusuarios';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private user:usuario[]=USUARIOS;
  constructor() { }
  getuser():usuario[]{
    return this.user;
  }
  settam(tam:number,posicion:number){
    this.user[posicion].tam=tam;
  }
}
