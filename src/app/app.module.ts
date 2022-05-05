import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { SubMainJuegosolimpicosComponent } from './components/sub-main-juegosolimpicos/sub-main-juegosolimpicos.component';
import { SubMainDeportesComponent } from './components/sub-main-deportes/sub-main-deportes.component';
import { SubMainAtletasComponent } from './components/sub-main-atletas/sub-main-atletas.component';
import { SubMainNoticiasComponent } from './components/sub-main-noticias/sub-main-noticias.component';
import { AtletaComponent } from './components/info/atleta/atleta.component';
import { DeporteComponent } from './components/info/deporte/deporte.component';
import { NoticiaComponent } from './components/info/noticia/noticia.component';
import { DetalleNoticiaComponent } from './components/detalles/detalle-noticia/detalle-noticia.component';
import { FilterPipe } from './filter.pipe';
import { DetalleDeporteComponent } from './components/detalles/detalle-deporte/detalle-deporte.component';
import { DetalleAtletaComponent } from './components/detalles/detalle-atleta/detalle-atleta.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    SubMainJuegosolimpicosComponent,
    SubMainDeportesComponent,
    SubMainAtletasComponent,
    SubMainNoticiasComponent,
    AtletaComponent,
    DeporteComponent,
    NoticiaComponent,
    DetalleNoticiaComponent,
    FilterPipe,
    DetalleDeporteComponent,
    DetalleAtletaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
