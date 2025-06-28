import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { PacienteListComponent } from './pages/pacientes/paciente-list/paciente-list.component';
import { PacienteFormComponent } from './pages/pacientes/paciente-form/paciente-form.component';
import { PacienteDetailComponent } from './pages/pacientes/paciente-detail/paciente-detail.component';
import { FuncionarioListComponent } from './pages/funcionarios/funcionario-list/funcionario-list.component';
import { FuncionarioFormComponent } from './pages/funcionarios/funcionario-form/funcionario-form.component';
import { FuncionarioDetailComponent } from './pages/funcionarios/funcionario-detail/funcionario-detail.component';
import { ProntuarioFuncionarioComponent } from './pages/funcionarios/prontuario-funcionario/prontuario-funcionario.component';
import { ConvenioListComponent } from './pages/convenios/convenio-list/convenio-list.component';
import { ConvenioFormComponent } from './pages/convenios/convenio-form/convenio-form.component';
import { ConsultaListComponent } from './pages/consultas/consulta-list/consulta-list.component';
import { ConsultaFormComponent } from './pages/consultas/consulta-form/consulta-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PacienteListComponent,
    PacienteFormComponent,
    PacienteDetailComponent,
    FuncionarioListComponent,
    FuncionarioFormComponent,
    FuncionarioDetailComponent,
    ProntuarioFuncionarioComponent,
    ConvenioListComponent,
    ConvenioFormComponent,
    ConsultaListComponent,
    ConsultaFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
