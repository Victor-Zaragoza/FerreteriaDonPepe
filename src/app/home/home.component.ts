import { Component, OnInit } from '@angular/core';
import {Home} from './home.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  recipes: Home[] = [
    new Home('./assets/aspiradora8galones.jpg'),
    new Home('./assets/blister-con-4-candados-de-hierro.jpg'),
    new Home('./assets/bomba-periferica.jpg'),
    new Home('./assets/bomba-presurizadora.jpg'),
    new Home('./assets/bomba-sumergible-plastica.jpg'),
    new Home('https://encrypted-tbn0gstaticcom/images?q=tbn%3AANd9GcQ_9l39e7G5y_ENz6hL6l5KhaJuroOrbzqs0Q&usqp=CAU')

  ];

  constructor(){  
  }

  ngOnInit(): void {
  }

}
