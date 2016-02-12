import {Injectable} from 'angular2/core';

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

    debug(...args) {
        var t = ["%s | %cDebug: ", this.name, "color:green"];
        t.push(...args);
        console.log.apply(console, t);
        // Publish an event
        this.subject.next({ name: this.name, level: 'debug', value: args });
    }

    info(...args) {
        var t = ["%s | %cInfo: ", this.name, "color:blue"];
        t.push(...args);
        console.log.apply(console, t);
        // Publish an event
        this.subject.next({ name: this.name, level: 'info', value: args });
    }
    warning(...args) {
        var t = ["%s | %cWarning: ", this.name, "color:orange"];
        t.push(...args);
        console.log.apply(console, t);
        // Publish an event
        this.subject.next({ name: this.name, level: 'warning', value: args });
    }
    error(...args) {
        var t = ["%s | %cError: ", this.name, "color:red"];
        t.push(...args);
        console.log.apply(console, t);
        // Publish an event
        this.subject.next({ name: this.name, level: 'error', value: args });
    }
}

@Injectable()
export class LogService {

    _loggers: Map<string,Logger> = null;

    constructor() {
        this._loggers = new Map<string,Logger>();
        this.openLogger( 'main' );
    }

    openLogger(loggerName: string): Logger {
        var existingLogger = this._loggers.get(loggerName);
        if (!existingLogger) {
            existingLogger = new Logger(loggerName);
            this._loggers.set(loggerName, existingLogger);
        }

        return existingLogger;
    }

    closeLogger(loggerName: string) {
        var existingLogger = this._loggers.get(loggerName);
        if (existingLogger) {
            this._loggers.delete(loggerName);
            existingLogger.closePublication();
        }

        return existingLogger;
    }


    to(loggerName): Logger {
        if (this._loggers.has(loggerName)) {
            return this._loggers.get(loggerName);
        } else {
            return this.openLogger( loggerName );
        }
    }

    debug(...args) {
        this.to('main').debug(...args);
    }
    info(...args) {
        this.to('main').info(...args);
    }
    warning(...args) {
        this.to('main').warning(...args);
    }
    error(...args) {
        this.to('main').error(...args);
    }
}
