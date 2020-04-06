import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShareModuleModule } from './pages/share-module/share-module.module';
import { MyslicePipe } from './pipe/myslice.pipe';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { DeleteDialogComponent, EditDialogComponent } from './components/table-selection/table-selection.component';
import {LoginDialogComponent, SigninDialogComponent, LogoutDialogComponent} from './components/main-nav/main-nav.component'
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    MyslicePipe,
    MainNavComponent,
    DeleteDialogComponent,
    EditDialogComponent,
    NotFoundComponent,
    LoginDialogComponent, SigninDialogComponent, LogoutDialogComponent
  ],
  imports: [
    AppRoutingModule,
    ShareModuleModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule

  ],
  exports:[
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[DeleteDialogComponent, EditDialogComponent,LoginDialogComponent, SigninDialogComponent, LogoutDialogComponent]
})
export class AppModule { }
