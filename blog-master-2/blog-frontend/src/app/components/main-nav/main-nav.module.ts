import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModuleModule } from '../../pages/share-module/share-module.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInput } from '@angular/material/input';
import { MainNavComponent, LoginDialogComponent, LogoutDialogComponent, SigninDialogComponent } from './main-nav.component'


@NgModule({
  declarations: [MainNavComponent,LoginDialogComponent, LogoutDialogComponent, SigninDialogComponent],
  imports: [
    CommonModule,
    ShareModuleModule,
    //FormsModule,
    //ReactiveFormsModule,
    //MatInput
  ],
  entryComponents:[LoginDialogComponent, LogoutDialogComponent, SigninDialogComponent]
})
export class MainNavModule { }
