import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPage } from './admin.page'
import { Routes, RouterModule } from '@angular/router';
import { ShareModuleModule } from '../share-module/share-module.module'

const routes: Routes = [
  {
    path: '',
    component: AdminPage
  }
];

@NgModule({
  declarations: [AdminPage],
  imports: [
    CommonModule,
    ShareModuleModule,
    RouterModule.forChild(routes)

  ]
})
export class AdminModule { }
