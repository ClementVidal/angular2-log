import {Injectable} from 'angular2/core';

import {Subject} from 'rxjs/Rx'


export class Logger {

    subject = null;
    static level = {
        debug: 1,
        info: 2,
        warning: 3,
        error: 4
    };

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

@Injectable()
export class LogService {

    loggers: Map<string, Logger> = null;

    constructor() {
        this.loggers = new Map<string, Logger>();
        this.openLogger('main');
    }

    set logLevel( level:string ){

    }

    openLogger(loggerName: string): Logger {
        var existingLogger = this.loggers.get(loggerName);
        if (!existingLogger) {
            existingLogger = new Logger(loggerName);
            this.loggers.set(loggerName, existingLogger);
        }

        return existingLogger;
    }

    closeLogger(loggerName: string) {
        var existingLogger = this.loggers.get(loggerName);
        if (existingLogger) {
            this.loggers.delete(loggerName);
            existingLogger.closePublication();
        }

        return existingLogger;
    }

    /**
     * Redirect log to a given logger.
     *
     * If the asked logger does not yet exists it will be created
     *
     * @param  {string} loggerName
     * @return {Logger}
     */
    to(loggerName: string): Logger {
        if (this.loggers.has(loggerName)) {
            return this.loggers.get(loggerName);
        } else {
            return this.openLogger(loggerName);
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
