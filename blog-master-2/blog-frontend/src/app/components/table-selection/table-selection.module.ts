import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ShareModuleModule} from '../../pages/share-module/share-module.module'
import { Routes, RouterModule } from '@angular/router';

import { DeleteDialogComponent, TableSelectionComponent, EditDialogComponent} from './table-selection.component';
import { EditorComponent } from '../editor/editor.component'
const routes: Routes = [
  {
    path: '',
    component: TableSelectionComponent
  },
  {
    path: 'check-dialog',
    component: DeleteDialogComponent
  }
];



@NgModule({
  declarations: [
    TableSelectionComponent,
    DeleteDialogComponent, 
    EditDialogComponent, 
    EditorComponent
  ],
  entryComponents: [
    TableSelectionComponent,
    DeleteDialogComponent, 
    EditDialogComponent, 
    EditorComponent
  ],
  imports: [
    CommonModule,
    ShareModuleModule,
    
    RouterModule.forChild(routes)

  ],
  exports:[]
})
export class TableSelectionModule { }
