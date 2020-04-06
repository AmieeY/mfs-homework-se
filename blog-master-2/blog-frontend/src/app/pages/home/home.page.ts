import { Component, OnInit } from '@angular/core';
import { ShareService } from '../../services/share.service'
//import { setInterval } from 'timers';
import { Observable, Observer, interval } from 'rxjs'

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.sass']
})
export class HomePage implements OnInit {
  private articles=[];
  private archives;
  private latestArticles;
  private targets;
  private currentOffset=0
  private newArticles=[]
  private articleCount
  private intervalId

  constructor(private dataService: ShareService) { }
  async ngOnInit() {
    this.loadNewArticle()
    this.archives = this.dataService.getArchives();
    this.latestArticles = await this.dataService.getLatestArticles();
    this.targets = this.dataService.getTargets();
    let body=document.body
    //this.currentOffset=0
  }
  onScroll(){
    if(this.intervalId!=null || this.currentOffset==null) return
    this.intervalId=setInterval(()=>{
      this.loadNewArticle()
      clearInterval(this.intervalId)
      this.intervalId=null
    },500)
  }
  async loadNewArticle(){
    [this.newArticles,this.currentOffset,this.articleCount] = await this.dataService.getArticles('["createdAt","desc"]',this.currentOffset,5);
    this.newArticles.map(item=>{
      //item.tags=item.tags.map(item=>item.name).join(' ')
      this.articles.push(item)
    })
  }






 
}
