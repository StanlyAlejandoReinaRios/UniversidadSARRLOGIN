import { AuthGuard } from './guards/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UniversidadsarrComponent } from './universidadsarr/universidadsarr.component';
import { ReadUniversidadsarrComponent } from './universidadsarr/read-universidadsarr/read-universidadsarr.component';
import { Error404NotFoundComponent } from './error404-not-found/error404-not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  //Nuevo Componente
  { path: 'Universidad', component: ReadUniversidadsarrComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: '**', pathMatch: 'full', component: Error404NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
