import { Component, OnInit } from '@angular/core';
import { Content } from '../shared/model/content';
import { ServiceService } from '../shared/service.service';

@Component({
  selector: 'app-conntentcomponent',
  templateUrl: './conntentcomponent.component.html',
  styleUrls: ['./conntentcomponent.component.scss']
})
export class ConntentcomponentComponent implements OnInit {
  toggle: boolean[] = [false, false, false, false];
  title: string = 'title'
  content: Content[] = [];
  constructor(private contentService: ServiceService) { }

  ngOnInit(): void {
    this.content = this.contentService.getAllContents();
  }
  changeColor(id: string) {
    if (id === '0') {
      this.toggle = [true, false, false, false];
    } else if(id === '1') {
      this.toggle = [false, true, false, false];
    } else if (id === '2') {
      this.toggle = [false, false, true, false];
    } else {
      this.toggle = [false, false, false, true];
    }
  }

}
