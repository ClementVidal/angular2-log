var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
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
    Logger.level = {
        debug: 1,
        info: 2,
        warning: 3,
        error: 4
    };
    return Logger;
})();
exports.Logger = Logger;
var LogService = (function () {
    function LogService() {
        this.loggers = null;
        this.loggers = new Map();
        this.openLogger('main');
    }
    Object.defineProperty(LogService.prototype, "logLevel", {
        set: function (level) {
        },
        enumerable: true,
        configurable: true
    });
    LogService.prototype.openLogger = function (loggerName) {
        var existingLogger = this.loggers.get(loggerName);
        if (!existingLogger) {
            existingLogger = new Logger(loggerName);
            this.loggers.set(loggerName, existingLogger);
        }
        return existingLogger;
    };
    LogService.prototype.closeLogger = function (loggerName) {
        var existingLogger = this.loggers.get(loggerName);
        if (existingLogger) {
            this.loggers.delete(loggerName);
            existingLogger.closePublication();
        }
        return existingLogger;
    };
    LogService.prototype.to = function (loggerName) {
        if (this.loggers.has(loggerName)) {
            return this.loggers.get(loggerName);
        }
        else {
            return this.openLogger(loggerName);
        }
    };
    LogService.prototype.debug = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        (_a = this.to('main')).debug.apply(_a, args);
        var _a;
    };
    LogService.prototype.info = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        (_a = this.to('main')).info.apply(_a, args);
        var _a;
    };
    LogService.prototype.warning = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        (_a = this.to('main')).warning.apply(_a, args);
        var _a;
    };
    LogService.prototype.error = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        (_a = this.to('main')).error.apply(_a, args);
        var _a;
    };
    LogService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], LogService);
    return LogService;
})();
exports.LogService = LogService;
