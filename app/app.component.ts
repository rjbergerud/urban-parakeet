import {Component} from '@angular/core';

import {PollList} from './poll-list.component'

@Component({
    selector: 'my-app',
    directives: [PollList],
    template: `
    <h1>What Canadians want their government to do</h1>
    <poll-list></poll-list>`
})

export class AppComponent { }
