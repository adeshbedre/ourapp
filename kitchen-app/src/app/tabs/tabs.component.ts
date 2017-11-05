import { Component} from '@angular/core';
import { NgbTabsetConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
  providers: [NgbTabsetConfig]
})
export class TabsComponent {

  constructor(config: NgbTabsetConfig) {
    // customize default values of carousels used by this component tree
    config.justify = "fill";
    config.orientation = "horizontal";
    config.type = "tabs";
  }

}
