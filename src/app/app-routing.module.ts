import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSpecialiteComponent } from './components/specialite/add-specialite/add-specialite.component';
import { EditSpecialiteComponent } from './components/specialite/edit-specialite/edit-specialite.component';
import { SpecialiteComponent } from './components/specialite/specialite.component';
import { ListSpecialitesComponent } from './components/specialite/list-specialites/list-specialites.component';
import { LocalisationComponent } from './components/localisation/localisation.component';
import { ListLocalisationComponent } from './components/localisation/list-localisation/list-localisation.component';
import { AddLocalisationComponent } from './components/localisation/add-localisation/add-localisation.component';
import { EditLocalisationComponent } from './components/localisation/edit-localisation/edit-localisation.component';

const routes: Routes = [
  {
    path:'specialite',
    component:SpecialiteComponent,
    children:[
        {
          path:'',
          component:ListSpecialitesComponent,
        },
        {
          path:'new',
          component:AddSpecialiteComponent,
        },
        {
          path:'edit/:id',
          component:EditSpecialiteComponent,
        }
      ]
  },
  {
    path:'localisation',
    component:LocalisationComponent,
    children:[
        {
          path:'',
          component:ListLocalisationComponent,
        },
        {
          path:'new',
          component:AddLocalisationComponent,
        },
        {
          path:'edit/:id',
          component:EditLocalisationComponent,
        }
      ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
