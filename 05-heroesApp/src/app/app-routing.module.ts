import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPagesComponent } from './shared/error-pages/error-pages.component';
import { AuthGuard } from './auth/guards/auth.guard';

const routes: Routes = [
  {
    path:'heroes',
    loadChildren: () => import('./heroes/heroes.module').then(m=>m.HeroesModule),

  },
  {
    path:'auth',
    loadChildren: () => import('./auth/auth.module').then(m=>m.AuthModule),
    canLoad:[AuthGuard],
    canActivate:[AuthGuard]
  },
  {
    path:'404',
    component:ErrorPagesComponent
  },
  {
    path:'**',
    // component:ErrorPagesComponent
    redirectTo:'404'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
