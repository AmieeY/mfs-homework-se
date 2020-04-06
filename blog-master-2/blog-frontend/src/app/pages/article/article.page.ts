import { Component, OnInit } from '@angular/core';
import { ShareService } from '../../services/share.service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.page.html',
  styleUrls: ['./article.page.sass']
})
export class ArticlePage implements OnInit {
  private data;
  private latestArticles
  constructor(private dataService: ShareService, private activateRouter: ActivatedRoute, private router: Router ) { }

  async ngOnInit() {
    //console.log(this.activateRouter.params)
    let res = await this.dataService.getOneArticle(this.activateRouter.snapshot.params.id)
    if(res.err==0){
      this.data=res.data
      //this.data.tags =res.data.tags.map(i=>i.name).join(" ")
    }
    else this.router.navigateByUrl('/not-found')
    this.latestArticles=await this.dataService.getLatestArticles()

    
  }

}
