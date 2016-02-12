import {bootstrap}    from 'angular2/platform/browser'
import {Component} from 'angular2/core';
import {LogService} from 'angular2-log/log';

@Component({
    selector: 'demo-app',
    templateUrl: 'src/demo.html'
})
export class DemoComponent {

    constructor(public log: LogService) {

    }
}



bootstrap(DemoComponent, [LogService]);
