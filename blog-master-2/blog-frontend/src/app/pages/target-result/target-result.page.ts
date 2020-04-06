import { Component, OnInit } from '@angular/core';
import { ShareService} from '../../services/share.service'
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-target-result',
  templateUrl: './target-result.page.html',
  styleUrls: ['./target-result.page.sass']
})
export class TargetResultPage implements OnInit {
  private articles
  constructor(private dataService:ShareService, private activeRoute:ActivatedRoute) { 
  }

  async ngOnInit() {
    this.articles=await this.dataService.getOneTarget(this.activeRoute.snapshot.params.name)
    this.articles=this.articles.data

  }
}
