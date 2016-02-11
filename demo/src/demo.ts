import {bootstrap}    from 'angular2/platform/browser'
import {Component} from 'angular2/core';

@Component({
    selector: 'demo-app',
    template: '<h1>My First Angular 2 App</h1>'
})
export class DemoComponent { }

bootstrap(DemoComponent);
