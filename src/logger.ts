import {Subject} from 'rxjs/Rx'

export interface Notification {
    type: string;
    payload: {
        level?: string;
    };
}

export var Level = {
    debug: 1,
    info: 2,
    warning: 3,
    error: 4
}


export class Logger {

    subject = null;
    level: number = Level.info;

    constructor(public name: string) {
        // Create the RxJs subject
        this.subject = new Subject();
    }

    closePublication() {
        this.subject.onCompleted();
    }

    onServiceNotification( notif: Notification ) {
        if( notif.type === "LEVEL" ) {
            this.level= Level[notif.payload.level];
            console.log( this.level );
        }
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
