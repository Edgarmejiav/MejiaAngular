import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DatosComponent } from './components/datos/datos.component';
import { RightComponent } from './components/right/right.component';
import { PostComponent } from './components/post/post.component';
import { PaisComponent } from './components/pais/pais.component';
import { FooterComponent } from './components/footer/footer.component';
import { JsonService} from './services/json.service';
import { HttpClientModule } from '@angular/common/http';
import { PeruComponent } from './components/peru/peru.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DatosComponent,
    RightComponent,
    PostComponent,
    PaisComponent,
    FooterComponent,
    PeruComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [JsonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
