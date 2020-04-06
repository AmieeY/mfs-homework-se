import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShareService } from '../../services/share.service'
import axios from 'axios'
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component'
import { EditorComponent } from '../../components/editor/editor.component'
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';



export interface Tag {
  name: string;
}
@Component({
  selector: 'app-article-editor',
  templateUrl: './article-editor.page.html',
  styleUrls: ['./article-editor.page.sass']
}) 
export class ArticleEditorPage implements OnInit {
  constructor(private dataService: ShareService, private activateRouter: ActivatedRoute, public dialog: MatDialog) { }
  private editorData
  private content
  @ViewChild(EditorComponent,{static:false}) editorContent:EditorComponent
  
  async updateContent(newContent:Text){
    this.editorData.content=newContent
    this.editorData.tags=this.tags
    await axios.put(`http://localhost:3000/api/article/${this.activateRouter.snapshot.params.id||0}`,
        {data:this.editorData},{headers: {'Content-Type': 'application/json'}})
      .then(res=>{
        if(res.data.err) alert('err')
      })
  }
  async ngOnInit() {
    this.editorData={
      title:'',
      target:'',
      content:''
    }
    
    let id = this.activateRouter.snapshot.params.id
    if(id) {
      let res = await this.dataService.getOneArticle(this.activateRouter.snapshot.params.id)
      this.editorData=res.data
      this.tags=this.editorData.tags
      //this.editorData.tags.map(item=>this.tags)
      this.content=res.data.content

    }

  }
  openConfirmDialog(): void {
      const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '250px'
    });

  }
  callChildren(){
    this.editorContent.publishTopic()
    this.openConfirmDialog()
  }
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  tags: Tag[] = [];

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.tags.push({name: value.trim()});
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(tag: Tag): void {
    const index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }
  


}



