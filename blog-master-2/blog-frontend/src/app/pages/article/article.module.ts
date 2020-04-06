import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlePage } from './article.page';
import { Routes, RouterModule } from '@angular/router';
import { ShareModuleModule } from '../share-module/share-module.module'

const routes: Routes = [
  {
    path: '',
    component: ArticlePage
  }
];
@NgModule({
  declarations: [ArticlePage],
  imports: [
    CommonModule,
    ShareModuleModule,
    RouterModule.forChild(routes)
  ],
})
export class ArticleModule { }
