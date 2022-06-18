<<<<<<< HEAD
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './navbar/navbar.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { GenerarQRComponent } from './generarQR/generarQR.component';
import { IniciarsesionComponent } from './iniciarsesion/iniciarsesion.component';
import { RegisterComponent } from './register/register.component';
import { ProductosComponent } from './productos/productos.component';
import { QRCodeModule } from 'angular2-qrcode';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CreateArticleComponent } from './create-article/create-article.component';
import { ListArticlesComponent } from './list-articles/list-articles.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideFunctions,getFunctions } from '@angular/fire/functions';
import { provideRemoteConfig,getRemoteConfig } from '@angular/fire/remote-config';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { NgChartsModule } from 'ng2-charts';
import { AnswerandquestionComponent } from './answerandquestion/answerandquestion.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SearchComponent,
    HomeComponent,
    GenerarQRComponent,
    IniciarsesionComponent,
    RegisterComponent,
    ProductosComponent,
    AnswerandquestionComponent,
    AboutComponent,

    CreateArticleComponent,
    ListArticlesComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    QRCodeModule,
    FormsModule,
    NgChartsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideFunctions(() => getFunctions()),
    provideRemoteConfig(() => getRemoteConfig()),
    provideStorage(() => getStorage()),
    ReactiveFormsModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
=======
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './navbar/navbar.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { GenerarQRComponent } from './generarQR/generarQR.component';
import { IniciarsesionComponent } from './iniciarsesion/iniciarsesion.component';
import { RegisterComponent } from './register/register.component';
import { ProductosComponent } from './productos/productos.component';
import { QRCodeModule } from 'angular2-qrcode';
import { FormsModule } from '@angular/forms';
import { AnswerandquestionComponent } from './answerandquestion/answerandquestion.component';
import { FooterComponent } from './footer/footer.component'

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SearchComponent,
    HomeComponent,
    GenerarQRComponent,
    IniciarsesionComponent,
    RegisterComponent,
    ProductosComponent,
    AnswerandquestionComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    QRCodeModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
>>>>>>> origin/aram
