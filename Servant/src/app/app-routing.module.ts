import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizationRoutingModule } from './components/authorization/authorization-routing.module';
import { HomeComponent } from './components/global/home/home.component';
import { SketchComponent } from './components/global/sketch/sketch.component';
import { PlanComponent } from './components/plan/plan.component';
import { AuthGuard } from './guards/auth-guard/auth.guard';
import { LoggedUserGuard } from './guards/logged-user-guard/logged-user.guard';

const routes: Routes = [
  {
    path: 'plan',
    loadChildren: () => import('./components/plan/plan.module').then(m => m.PlanModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'sketch',
    component: SketchComponent,
  },
  {
    path: 'auth',
    loadChildren: () => import('./components/authorization/authorization.module').then(m => m.AuthorizationModule),
    canActivate: [LoggedUserGuard]
  },
  {
    path: '', redirectTo: 'plan' , pathMatch: 'full'
  },
  {
    path: '**', redirectTo: 'plan' , pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
