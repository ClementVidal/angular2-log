///<reference path="../node_modules/angular2/typings/browser.d.ts"/>

import {Injectable} from 'angular2/core';
import {Logger, Notification} from './logger';

import {Subject} from 'rxjs/Rx'


@Injectable()
export class LogService {

    loggers: Map<string, Logger> = null;

    private _serviceNotification: Subject<any> = null;

    constructor() {
        this.loggers = new Map<string, Logger>();
        this._serviceNotification = new Subject();
        this.openLogger('main');
    }

    set level( level:string ){
        this._serviceNotification.next( { type: 'LEVEL', payload: { level }} );
    }

    openLogger(loggerName: string): Logger {
        var existingLogger = this.loggers.get(loggerName);
        if (!existingLogger) {
            existingLogger = new Logger(loggerName);
            this.loggers.set(loggerName, existingLogger);
            this._serviceNotification.subscribe(
                notif => {
                    existingLogger.onServiceNotification( notif );
                });
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
