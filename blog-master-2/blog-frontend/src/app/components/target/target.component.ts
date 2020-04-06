import { Component, OnInit, Input } from '@angular/core';
import { ShareService } from '../../services/share.service'
import {Router} from '@angular/router'

interface ArticleNode {
  name: string;
  children?: ArticleNode[];
}

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}


@Component({
  selector: 'app-target',
  templateUrl: './target.component.html',
  styleUrls: ['./target.component.sass']
})
export class TargetComponent implements OnInit {
  private targets

  constructor(private dataService:ShareService, private router:Router) { 

  }

  async ngOnInit() {
    this.targets=await this.dataService.getTargets()
    console.log('target data:',this.targets) 
  }
  toTargetResult(targetName){
    this.router.navigateByUrl(`target/${targetName}`)
  }
}







