import {Component} from '@angular/core';
import {PollItem} from './poll-item.component';

@Component({
  selector: 'poll-row',
  inputs: ['myPollItem'],
  host: {'class': 'segment'},
  template: `
    <div class="ui grid segment">
      <div class="fifteen wide column">
      <h5 class="ui description"> {{ myPollItem.issue }} </h5>
      </div>
      <div class="one wide column">
      <div class="ui statistic inline right ">{{ myPollItem.votes }} </div>
      </div>
    </div>
  `
})

export class PollRow {
  myPollItem: PollItem;
}
