var Rx_1 = require('rxjs/Rx');
var Logger = (function () {
    function Logger(name) {
        this.name = name;
        this.subject = null;
        this.subject = new Rx_1.Subject();
    }
    Logger.prototype.closePublication = function () {
        this.subject.onCompleted();
    };
    Logger.prototype.onServiceNotification = function (notif) {
        console.log('NOTIF FROM SERVICE: ', notif);
    };
    ;
    Logger.prototype.debug = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        var t = ["%s | %cDebug: ", this.name, "color:green"];
        t.push.apply(t, args);
        console.log.apply(console, t);
        this._publishEvent('debug', args);
    };
    Logger.prototype.info = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        var t = ["%s | %cInfo: ", this.name, "color:blue"];
        t.push.apply(t, args);
        console.log.apply(console, t);
        this._publishEvent('info', args);
    };
    Logger.prototype.warning = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        var t = ["%s | %cWarning: ", this.name, "color:orange"];
        t.push.apply(t, args);
        console.log.apply(console, t);
        this._publishEvent('warning', args);
    };
    Logger.prototype.error = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        var t = ["%s | %cError: ", this.name, "color:red"];
        t.push.apply(t, args);
        console.log.apply(console, t);
        this._publishEvent('error', args);
    };
    Logger.prototype._publishEvent = function (level) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        this.subject.next({ name: this.name, level: level, value: args });
    };
    return Logger;
})();
exports.Logger = Logger;
