import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SketchComponent } from './components/global/sketch/sketch.component';

const routes: Routes = [
  {
    path: 'sketch',
    component: SketchComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
