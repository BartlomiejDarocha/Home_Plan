import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizationRoutingModule } from './components/authorization/authorization-routing.module';
import { HomeComponent } from './components/global/home/home.component';
import { SketchComponent } from './components/global/sketch/sketch.component';
import { AuthGuard } from './guards/auth-guard/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'sketch',
    component: SketchComponent,
  },
  {
    path: 'auth',
    loadChildren: () => import('./components/authorization/authorization.module').then(m => m.AuthorizationModule),
    canActivate: [AuthGuard]
  },
  {
    path: '', redirectTo: 'home' , pathMatch: 'full'
  },
  {
    path: '**', redirectTo: '/' , pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
