import { Component, OnInit ,Input } from '@angular/core';
import { ShareService} from '../../services/share.service'
import {Router} from '@angular/router'
import * as moment from 'moment'
interface FoodNode {
  title: string;
  id:number;
  children?: FoodNode[];
}


/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  title: string;
  id:number;
  level: number;
}

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.sass']
})
export class ArchiveComponent implements OnInit {

  @Input() data;
  private dataList=[]
  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      title: node.title,
      level: level,
    };
  }


  constructor(private dataService:ShareService, private router:Router) {
    //this.dataService.getArchives().then(data=>this.dataList=data.data)
    //this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

  async ngOnInit() {
    let data=await this.dataService.getArchives()
    this.dataList=data.data
    console.log(this.dataList)
  }
  toArchiveQuery(item){
    this.router.navigateByUrl(`archive/${moment(item.createdAt).format('YYYY-MM')}`)
  }
  

}

