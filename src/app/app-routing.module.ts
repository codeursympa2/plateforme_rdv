import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSpecialiteComponent } from './components/specialite/add-specialite/add-specialite.component';
import { EditSpecialiteComponent } from './components/specialite/edit-specialite/edit-specialite.component';
import { SpecialiteComponent } from './components/specialite/specialite.component';
import { ListSpecialitesComponent } from './components/specialite/list-specialites/list-specialites.component';

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

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
