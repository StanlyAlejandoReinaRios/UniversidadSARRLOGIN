import { AuthGuard } from './guards/auth.guard';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { JwtModule } from "@auth0/angular-jwt";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReadUniversidadsarrComponent } from './universidadsarr/read-universidadsarr/read-universidadsarr.component';
import { CreateEditUniversidadsarrComponent } from './universidadsarr/create-edit-universidadsarr/create-edit-universidadsarr.component';
import { UniversidadsarrComponent } from './universidadsarr/universidadsarr.component';
import { Error404NotFoundComponent } from './error404-not-found/error404-not-found.component';

//Nuevos Componentes

export function tokenGetter() {
  return localStorage.getItem("jwt");
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ReadUniversidadsarrComponent,
    CreateEditUniversidadsarrComponent,
    UniversidadsarrComponent,
    Error404NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["localhost:7196"],
        // allowedDomains: ["localhost:7295"],
        disallowedRoutes: []
      }
    })
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
