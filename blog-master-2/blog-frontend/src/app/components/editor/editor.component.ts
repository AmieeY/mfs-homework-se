import { Component, OnInit, ElementRef, Renderer, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import * as wangEditor from '../../../../node_modules/wangEditor/release/wangEditor.js'

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.sass']
})
export class EditorComponent implements OnInit {
  private editor:any
  //private newContent:Text
  @Input() articleData
  @Input() content
  @Output() onPostData = new EventEmitter()
  @Output() contentChange=new EventEmitter<Text>()

  constructor(private el: ElementRef,private renderer: Renderer) { }

  ngAfterViewInit() {  
    let editordom = this.el.nativeElement.querySelector('#editorElem')
    this.editor = new wangEditor(editordom)
    this.editor.customConfig.uploadImgShowBase64 = true
    this.editor.create()
  }
  publishTopic() {
    let topicContent = this.clickHandle()
    console.log(topicContent)
    if(!topicContent){
        alert('请输入内容！')
        return
    }
    this.contentChange.emit(topicContent)
  }
  clickHandle():any {
    let data = this.editor.txt.text()
    return data
  }
  ngOnChanges() {
    setTimeout(() => {
      if(this.content!=undefined)
        this.editor.txt.append('<p>'+this.content+'</p>')
    }, 0);
    console.log(this.editor.txt)
   }
   
  ngOnInit() {
  }

}
