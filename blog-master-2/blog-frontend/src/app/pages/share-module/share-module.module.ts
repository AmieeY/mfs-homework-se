import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArchiveComponent } from '../../components/archive/archive.component'
import { ArticleItemComponent } from '../../components/article-item/article-item.component'
import { LatestArticleComponent } from '../../components/latest-article/latest-article.component'
import { EditorComponent } from '../../components/editor/editor.component'
import { TargetComponent } from '../../components/target/target.component'
//import { ArticleComponent } from '../../components/article/article.component'
import { TableSelectionComponent } from '../../components/table-selection/table-selection.component';
import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component'
import {LoginDialogComponent, SigninDialogComponent, LogoutDialogComponent} from '../../components/main-nav/main-nav.component'


import {A11yModule} from '@angular/cdk/a11y';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';
//import { MatChipInputEvent } from '@angular/material/chips'
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    ArchiveComponent,
    ArticleItemComponent,
    LatestArticleComponent,
    EditorComponent,
    TargetComponent,
    //ArticleComponent,
    TableSelectionComponent,
    ConfirmDialogComponent,

  ],
  imports: [
    CommonModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatInputModule,
    MatTreeModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatButtonToggleModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatToolbarModule,
    //MatChipInputEvent
    MatChipsModule,
    MatAutocompleteModule,
    FormsModule,ReactiveFormsModule




  ],
  exports:[
    ArchiveComponent,
    ArticleItemComponent,
    LatestArticleComponent,
    EditorComponent,
    TargetComponent,
    //ArticleComponent,
    TableSelectionComponent,

    A11yModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    PortalModule,
    ScrollingModule,




    FormsModule,ReactiveFormsModule


  ]
})
export class ShareModuleModule { }
