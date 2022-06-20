import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavBarComponent implements OnInit {
  userLogged=this.out.getUserLogged();
  constructor(private router:Router,private out: SharedService) { }

  ngOnInit(): void {
  }

  // buscarUnHeroe(nombre:String){
  //   this.router.navigate(['/buscador',nombre]);
  // }


  async salir(){
    this.out.logout();
    // const uid = await this.authService.getAuthUid();
    // console.log(uid);
  }
}
