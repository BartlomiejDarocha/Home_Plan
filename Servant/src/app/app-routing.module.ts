import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/global/home/home.component';
import { SketchComponent } from './components/global/sketch/sketch.component';
import { LoginComponent } from './components/user-handler-components/login/login.component';
import { UserHandlerRoutingModule } from './components/user-handler-components/user-handler-routing.module';

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
    UserHandlerRoutingModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
