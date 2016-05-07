import {Component} from '@angular/core';
import {PollRow} from './poll-row.component';
import {PollItem} from './poll-item.component';
@Component({
  selector: 'poll-list',
  directives: [PollRow],
  template: `<div class="ui list raised segment">

      <poll-row *ngFor="let poll of pollList" [myPollItem]="poll"></poll-row>
    </div>`
})

export class PollList {
  pollList: PollItem[];

  constructor() {
    this.pollList = [
      new PollItem('Too many barking dogs!', 79),
      new PollItem("Let's replant old-growth forests with banana trees!", 23),
      new PollItem("Cars should be banned from roads", 89),
      new PollItem("Everyone should work at least a 20 hour workweek, but no more than 30 hour work week!", 23)
    ]
  }
}
