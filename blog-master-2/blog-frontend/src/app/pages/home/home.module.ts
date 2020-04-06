import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePage } from './home.page';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

//import { ShareService } from '../../services/share.service'

import { ShareModuleModule } from '../share-module/share-module.module'
const routes: Routes = [
  {
    path: '',
    component: HomePage
  }
];
@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ShareModuleModule,
    InfiniteScrollModule,
    RouterModule.forChild(routes)
  ],
})
export class HomeModule { }
