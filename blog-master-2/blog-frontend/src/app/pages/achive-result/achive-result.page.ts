import { Component, OnInit } from '@angular/core';
import { ShareService} from '../../services/share.service'
import {Router, ActivatedRoute} from '@angular/router'





@Component({
  selector: 'app-achive-result',
  templateUrl: './achive-result.page.html',
  styleUrls: ['./achive-result.page.sass']
})
export class AchiveResultPage implements OnInit {
  private articles
  constructor(private dataService:ShareService, private activeRoute:ActivatedRoute) { 
  }

  async ngOnInit() {
    this.articles=await this.dataService.getOneArchive(this.activeRoute.snapshot.params.yearMonth)
    this.articles=this.articles.data

  }

}
