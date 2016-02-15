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
var logger_1 = require('./logger');
var Rx_1 = require('rxjs/Rx');
var LogService = (function () {
    function LogService() {
        this.loggers = null;
        this._serviceNotification = null;
        this.loggers = new Map();
        this._serviceNotification = new Rx_1.Subject();
        this.openLogger('main');
    }
    Object.defineProperty(LogService.prototype, "level", {
        set: function (level) {
            this._serviceNotification.next({ type: 'LEVEL', payload: level });
        },
        enumerable: true,
        configurable: true
    });
    LogService.prototype.openLogger = function (loggerName) {
        var existingLogger = this.loggers.get(loggerName);
        if (!existingLogger) {
            existingLogger = new logger_1.Logger(loggerName);
            this.loggers.set(loggerName, existingLogger);
            this._serviceNotification.subscribe(function (notif) {
                existingLogger.onServiceNotification(notif);
            });
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
