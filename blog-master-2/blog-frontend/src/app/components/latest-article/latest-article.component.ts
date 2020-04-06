import { Component, OnInit, Input } from '@angular/core';
import { ArrayType } from '@angular/compiler';
import { ShareService } from '../../services/share.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-latest-article',
  templateUrl: './latest-article.component.html',
  styleUrls: ['./latest-article.component.sass']
})
export class LatestArticleComponent implements OnInit {
  private latest
  constructor(private dataService:ShareService, private router:Router) { }

  async ngOnInit() {
    this.latest=await this.dataService.getLatestArticles()
    console.log(this.latest)
  }
  toArticle(id){
    console.log('callde')
    this.router.navigateByUrl(`article/${id}`)
  }

}
