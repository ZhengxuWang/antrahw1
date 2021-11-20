import { Injectable } from '@angular/core';
import { Content } from './model/content';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  contents: Content[] = [
    {
      'id': '0',
      'title': 'title1',
      'content': 'content1',
      'color': 'blue'
    },
    {
      'id': '1',
      'title': 'title2',
      'content': 'content2',
      'color': 'red'
    },
    {
      'id': '2',
      'title': 'title3',
      'content': 'content3',
      'color': 'black'
    },
    {
      'id': '3',
      'title': 'title4',
      'content': 'content4',
      'color': 'green'
    }
  ]
  constructor() { }
  getAllContents() {
    return this.contents;
  }
}
