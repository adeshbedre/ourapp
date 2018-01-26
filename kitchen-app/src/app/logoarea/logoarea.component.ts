import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-logoarea',
  templateUrl: './logoarea.component.html',
  styleUrls: ['./logoarea.component.css']
})
export class LogoareaComponent implements OnInit {
iconUrl: string = environment.iconUrl;
  constructor() { }

  ngOnInit() {
  }

}
