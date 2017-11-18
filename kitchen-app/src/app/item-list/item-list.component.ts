import { Component, OnInit ,Input } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("printing item list ",this.itemList);
  }
@Input('itemList')itemList: String[];
}
