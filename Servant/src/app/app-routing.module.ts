import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizationRoutingModule } from './components/authorization/authorization-routing.module';
import { HomeComponent } from './components/global/home/home.component';
import { SketchComponent } from './components/global/sketch/sketch.component';

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
    path: '', redirectTo: 'home' , pathMatch: 'full'
  },
  {
    path: '**', redirectTo: '/' , pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    AuthorizationRoutingModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
