import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import { DirectivaComponent } from './directiva/directiva.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';
import {EstudianteService} from './estudiantes/estudiante.service';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
const routes: Routes =[
  {path: '', redirectTo: './clientes', pathMatch:'full'},
  {path:  'directivas', component:DirectivaComponent},
    {path:  'estudiantes', component:EstudiantesComponent},

]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DirectivaComponent,
    UsuariosComponent,
    EstudiantesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,

  ],
  providers: [EstudianteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
