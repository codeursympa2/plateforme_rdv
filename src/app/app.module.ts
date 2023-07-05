import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditSpecialiteComponent } from './components/specialite/edit-specialite/edit-specialite.component';
import { AddSpecialiteComponent } from './components/specialite/add-specialite/add-specialite.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SpecialiteComponent } from './components/specialite/specialite.component';
import { ListSpecialitesComponent } from './components/specialite/list-specialites/list-specialites.component';
import { LocalisationComponent } from './components/localisation/localisation.component';
import { AddLocalisationComponent } from './components/localisation/add-localisation/add-localisation.component';
import { EditLocalisationComponent } from './components/localisation/edit-localisation/edit-localisation.component';
import { ListLocalisationComponent } from './components/localisation/list-localisation/list-localisation.component';


@NgModule({
  declarations: [
    AppComponent,
    EditSpecialiteComponent,
    AddSpecialiteComponent,
    SpecialiteComponent,
    ListSpecialitesComponent,
    LocalisationComponent,
    AddLocalisationComponent,
    EditLocalisationComponent,
    ListLocalisationComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
