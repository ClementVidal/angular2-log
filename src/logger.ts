import {Subject} from 'rxjs/Rx'

export class Logger {

    subject = null;

    constructor(public name: string) {
        // Create the RxJs subject
        this.subject = new Subject();
    }

    closePublication() {
        this.subject.onCompleted();
    }

    onServiceNotification( notif ) {
            console.log( 'NOTIF FROM SERVICE: ', notif);
    };

    debug(...args) {
        var t = ["%s | %cDebug: ", this.name, "color:green"];
        t.push(...args);
        console.log.apply(console, t);
        // Publish an event
        this._publishEvent('debug', args);
    }

    info(...args) {
        var t = ["%s | %cInfo: ", this.name, "color:blue"];
        t.push(...args);
        console.log.apply(console, t);
        // Publish an event
        this._publishEvent('info', args);
    }
    warning(...args) {
        var t = ["%s | %cWarning: ", this.name, "color:orange"];
        t.push(...args);
        console.log.apply(console, t);
        // Publish an event
        this._publishEvent('warning', args);
    }
    error(...args) {
        var t = ["%s | %cError: ", this.name, "color:red"];
        t.push(...args);
        console.log.apply(console, t);
        // Publish an event
        this._publishEvent('error', args);
    }

    private _publishEvent(level, ...args) {
        this.subject.next({ name: this.name, level, value: args });
    }

}
