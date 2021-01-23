import { GestionPageComponent } from './pages/gestion-page/gestion-page.component';
import { ProdPageComponent } from './pages/prod-page/prod-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'prods', component: ProdPageComponent},
  {path: 'gestion', component: GestionPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
