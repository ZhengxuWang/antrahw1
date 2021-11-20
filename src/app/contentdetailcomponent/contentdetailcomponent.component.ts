import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Content } from '../shared/model/content';

@Component({
  selector: 'app-contentdetailcomponent',
  templateUrl: './contentdetailcomponent.component.html',
  styleUrls: ['./contentdetailcomponent.component.scss']
})
export class ContentdetailcomponentComponent implements OnInit {
  @Input() con?: Content; 
  @Output() changeColorId = new EventEmitter();
  constructor() { }
  ngOnInit(): void {
  }
  changeColor() {
    this.changeColorId.emit(this.con?.id);
  }
}
