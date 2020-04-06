import { Component, OnInit } from '@angular/core';
import { ShareService } from '../../services/share.service'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.sass']
})
export class AdminPage implements OnInit {
  private articles
  constructor(private dataService:ShareService) { }

  ngOnInit() {
    
    this.dataService.getAllArticles().then(data=>console.log(data))
  }

}
