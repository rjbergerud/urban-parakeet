import {Component} from '@angular/core';

@Component({
  selector: 'poll-list',
  template: `<div>
      Poll List
    </div>`
})

export class PollList {
  pollList: string[];

  constructor() {
    this.pollList = ['Yes!', 'Yes!', 'Yes!']
  }
}
