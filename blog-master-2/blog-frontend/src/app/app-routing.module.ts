import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TargetComponent } from './components/target/target.component'
import { NotFoundComponent } from './components/not-found/not-found.component';

//import { ArticleEditorPage } from './pages/article-editor/article-editor.page'
const routes: Routes = [
  {path:'about',loadChildren:'./pages/about/about.module#AboutModule'},
  {path:'home',loadChildren:'./pages/home/home.module#HomeModule'},
  {path:'article/add',loadChildren:'./pages/article-editor/article-editor.module#ArticleEditorModule'},
  {path:'article/:id',loadChildren:'./pages/article/article.module#ArticleModule'},
  {path:'article/:id/editor',loadChildren:'./pages/article-editor/article-editor.module#ArticleEditorModule'},
  {path:'admin',loadChildren:'./pages/admin/admin.module#AdminModule'},
  {path:'target/:name',loadChildren:'./pages/target-result/target-result.module#TargetResultModule'},
  {path:'archive/:yearMonth',loadChildren:'./pages/achive-result/achive-result.module#AchiveResultModule'},
  {path:'*',component:NotFoundComponent}
  //{path:'aaa',component:ArticleItemComponent},
  //{path:'bbb',component:TargetComponent,}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
