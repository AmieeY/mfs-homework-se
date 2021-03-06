import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TargetResultPage } from './target-result.page'
import { Routes, RouterModule } from '@angular/router';
import { ShareModuleModule } from '../share-module/share-module.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';


const routes: Routes = [
  {
    path: '',
    component: TargetResultPage
  }
];

@NgModule({
  declarations: [TargetResultPage],
  imports: [
    CommonModule,
    ShareModuleModule,
    FormsModule,
    InfiniteScrollModule,
    RouterModule.forChild(routes)
  ]
})
export class TargetResultModule { }

