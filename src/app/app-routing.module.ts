import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { GenerarQRComponent } from './generarQR/generarQR.component';
import { HomeComponent } from './home/home.component';
import { IniciarsesionComponent } from './iniciarsesion/iniciarsesion.component';
import { ProductosComponent } from './productos/productos.component';
import { RegisterComponent } from './register/register.component';
import { SearchComponent } from './search/search.component';
import { AnswerandquestionComponent } from './answerandquestion/answerandquestion.component';

const routes: Routes = [
  {path:'',redirectTo: 'home',pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'iniciarsesion', component: IniciarsesionComponent},
  {path: 'generarQR', component: GenerarQRComponent},
  {path: 'productos', component: ProductosComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'search', component: SearchComponent},
  {path: 'answerandquestion', component: AnswerandquestionComponent},
  {path: 'productos', component: ProductosComponent},
  {path: '**',pathMatch:'full',redirectTo:'home'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
