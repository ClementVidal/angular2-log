import {Injectable} from 'angular2/core';

@Injectable()
export class LogService {

    constructor() {

    }

    to(loggerName): LogService {
        return this;
    }

    debug(...args) {
        var t = ["%cDebug: ", "color:green"];
        Array.prototype.push.apply(t, arguments);
        console.log.apply(console, t);
    }

    info(...args) {
        var t = ["%cInfo: ", "color:blue"];
        Array.prototype.push.apply(t, arguments);
        console.log.apply(console, t);
    }
    warning(...args) {
        var t = ["%cWarning: ", "color:orange"];
        Array.prototype.push.apply(t, arguments);
        console.log.apply(console, t);
    }
    error(...args) {
        var t = ["%cError: ", "color:red"];
        Array.prototype.push.apply(t, arguments);
        console.log.apply(console, t);
    }

}
