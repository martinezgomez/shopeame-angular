import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProdPageComponent } from './pages/prod-page/prod-page.component';
import { GestionPageComponent } from './pages/gestion-page/gestion-page.component';
import { FooterComponent } from './core/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { GalleryComponent } from './pages/prod-page/gallery/gallery.component';
import { ProductComponent } from './shared/components/product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from "@angular/forms";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    ProdPageComponent,
    GestionPageComponent,
    FooterComponent,
    GalleryComponent,
    ProductComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
