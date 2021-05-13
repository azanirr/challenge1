import { ListService } from '../../services/list.service';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  lists = [];
  certifier = [];


  constructor(private listService: ListService) { }

  text:string = ""
  filtered:string = ""

  ngOnInit(): void {
    this.lists = this.listService.getTitle();
    this.certifier = this.listService.getButtonCertifier();
  }

  onFilter(list, text) {
    console.log(list, text)
    this.filtered = list;
    this.lists = this.listService.onFilter(list, text)
  }
  

}
