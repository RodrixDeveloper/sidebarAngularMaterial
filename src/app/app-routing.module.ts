import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'heroes', loadChildren:()=> import('./admin/admin.module').then((m)=> m.AdminModule)
  },
  {
    path: '',
    redirectTo: 'heroes',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
