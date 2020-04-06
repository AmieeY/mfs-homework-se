import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModuleModule } from '../share-module/share-module.module'
import { ArticleEditorPage } from './article-editor.page'
import { Routes, RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component'

const routes: Routes = [
  {
    path: '',
    component: ArticleEditorPage
  }
];

@NgModule({
  declarations: [ArticleEditorPage],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ShareModuleModule,
    RouterModule.forChild(routes)

  ],
  entryComponents:[ConfirmDialogComponent]
})
export class ArticleEditorModule { }
