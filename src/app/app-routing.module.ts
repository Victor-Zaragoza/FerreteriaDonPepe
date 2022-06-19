import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { GenerarQRComponent } from './generarQR/generarQR.component';
import { HomeComponent } from './home/home.component';
import { IniciarsesionComponent } from './iniciarsesion/iniciarsesion.component';
import { ProductosComponent } from './productos/productos.component';
import { RegisterComponent } from './register/register.component';
import { SearchComponent } from './search/search.component';

import { ListArticlesComponent } from './list-articles/list-articles.component';
import { CreateArticleComponent } from './create-article/create-article.component';


import { AnswerandquestionComponent } from './answerandquestion/answerandquestion.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TelefonoComponent } from './telefono/telefono.component';


const routes: Routes = [
  {path:'',redirectTo: 'home',pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path: 'list', component: ListArticlesComponent},
  {path: 'create', component: CreateArticleComponent},
  {path: 'update/:id', component: CreateArticleComponent},
  {path: 'telefono', component: TelefonoComponent},
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
  exports: [RouterModule, ReactiveFormsModule]
})
export class AppRoutingModule { }
