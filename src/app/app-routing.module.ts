import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddrdvComponent } from './addrdv/addrdv.component';
import { ReadrdvComponent } from './readrdv/readrdv.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {path:'',redirectTo:'accueil',pathMatch:'full'},
  {path:'accueil',component:AddrdvComponent},
  {path:'readrdv',component:ReadrdvComponent},
  {path:'details/:id',component:DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
