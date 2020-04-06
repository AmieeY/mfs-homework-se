import { Component, OnInit, Input, ViewChild, Inject } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import axios from 'axios'
import { ShareService } from '../../services/share.service'
import { EditorComponent } from '../editor/editor.component';
import { Sort } from '@angular/material/sort';
import { Router } from '@angular/router'

export interface DialogData {
  article:any
}
@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: []
})
export class DeleteDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private dataService:ShareService) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  deleteArticle(){
    this.data.article.forEach(item=>this.dataService.deleteOneArticle(item.id))
  }
  ngOnInit(){
    console.log(this.data.article)
  }

}

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.sass','./table-selection.component.sass']
})
export class EditDialogComponent implements OnInit {
  private editorData
  private content
  @ViewChild(EditorComponent,{static:false}) editorContent:EditorComponent
  constructor(
    public dialogRef: MatDialogRef<DeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private dataService:ShareService) {
      this.editorData=this.data.article[0]
      console.log('editor article ',this.editorData)
    }
  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(){
    //this.content=this.editorData.content
  }
  callChildren(){
    this.editorContent.publishTopic()
  }
  async updateContent(newContent){
    this.editorData.content=newContent
    console.log('to post: ',this.editorData.content)
    await axios.put(`http://localhost:3000/api/article/${this.editorData.id}`,
        {data:this.editorData},{headers: {'Content-Type': 'application/json'}})
      .then(res=>{
        if(res.data.err) alert('err')
      })
  }
  
  


}




export interface PeriodicElement {
  title: string;
  id: number;
  target: number;
  clickTimes: string;
  createdAt:Date;
}

@Component({
  selector: 'app-table-selection',
  templateUrl: './table-selection.component.html',
  styleUrls: ['./table-selection.component.sass']
})
export class TableSelectionComponent implements OnInit {
  @Input() articles
  constructor(public dialog: MatDialog, private dataService: ShareService, private router : Router) { }
  @ViewChild (MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  private articleList=[]
  ngOnInit() {
    this.dataSource.sort = this.sort;
    setTimeout(() => {
      this.dataSource.paginator = this.paginator
    });
    console.log(this.selection.selected)
  }
  async afterChange(){ 
    this.articles=await this.dataService.getAllArticles()
    this.dataSource = new MatTableDataSource<PeriodicElement>(this.articles)//(ELEMENT_DATA);
    this.dataSource.paginator = this.paginator
    this.selection = new SelectionModel<PeriodicElement>(true, []);
  }

  displayedColumns: string[] = ['select', 'id', 'title', 'target', 'clickTimes','createdAt','do'];
  selection = new SelectionModel<PeriodicElement>(true, []);
  dataSource = new MatTableDataSource<PeriodicElement>(this.articles)//(ELEMENT_DATA);
  async ngOnChanges() {
    this.afterChange()
  }


  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }
  openDeleteDialog(articleId): void {
    if(articleId!=null)
      this.articles.filter(item=>item.id==articleId).forEach(article => {
        this.articleList.push(article)
      });
    else {
      this.articleList=this.selection.selected
    }

      const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '250px',
      data: {article:this.articleList}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //this.animal = result;
      this.afterChange()
      //console.log(this.paginator.pageIndex)
    });
  }
  openEditDialog(articleId): void {
    this.articles.filter(item=>item.id==articleId).forEach(article => {
      this.articleList.push(article)
    });
    console.log(this.articleList)
    const dialogRef = this.dialog.open(EditDialogComponent, {

      data: {article:this.articleList}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //this.animal = result;
      this.afterChange()

    });

  }
  toEdit(articleId){
    this.router.navigateByUrl(`article/${articleId}/editor`)
  }


  //sortedData: PeriodicElement[]
  sortData(sort: Sort) {
    const data = this.articles.slice();
    if (!sort.active || sort.direction === '') {
      return;
    }

    this.articles = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'id': return compare(a.id, b.id, isAsc);
        case 'title': return compare(a.title, b.title, isAsc);
        case 'target': return compare(a.target, b.target, isAsc);
        case 'clickTimes': return compare(a.clickTimes, b.clickTimes, isAsc);
        case 'createdAt': return compare(a.createdAt, b.createdAt, isAsc);
        default: return 0;
      }
    });
    //this.articles=this.sortedData
    this.afterChange()
  }
  


}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}





