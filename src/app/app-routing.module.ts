import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeporteComponent } from './components/info/deporte/deporte.component';
import { AtletaComponent } from './components/info/atleta/atleta.component';
import { NoticiaComponent } from './components/info/noticia/noticia.component';
import { SubMainAtletasComponent } from './components/sub-main-atletas/sub-main-atletas.component';
import { SubMainDeportesComponent } from './components/sub-main-deportes/sub-main-deportes.component';
import { SubMainJuegosolimpicosComponent } from './components/sub-main-juegosolimpicos/sub-main-juegosolimpicos.component';
import { SubMainNoticiasComponent } from './components/sub-main-noticias/sub-main-noticias.component';

const routes: Routes = [
  { path: 'list-juegosolimpicos', component: SubMainJuegosolimpicosComponent },
  { path: 'list-deportes', component: SubMainDeportesComponent },
  { path: 'list-atletas', component: SubMainAtletasComponent },
  { path: 'list-noticias', component: SubMainNoticiasComponent },
  { path: '', component: SubMainNoticiasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
