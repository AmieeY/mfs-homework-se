import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutPage } from './about.page';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    component: AboutPage
  }
];
@NgModule({
  declarations: [AboutPage],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  //exports:[AboutComponent]
})
export class AboutModule { }
