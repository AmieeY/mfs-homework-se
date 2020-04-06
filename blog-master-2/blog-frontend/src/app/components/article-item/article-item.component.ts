import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ArrayType } from '@angular/compiler';

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.sass']
})
export class ArticleItemComponent implements OnInit {

  constructor(private router: Router) { }
  @Input() data
  @Input() showDetail:Boolean

  ngOnInit() {
    this.data.tags=this.data.tags.map(i=>i.name).join(" ")
  }
  toArticle(){
    this.router.navigateByUrl(`/article/${this.data.id}`)
  }
  toEdit(){
    this.router.navigateByUrl(`/article/${this.data.id}/editor`)
  }
}
