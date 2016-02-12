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
var LogService = (function () {
    function LogService() {
    }
    LogService.prototype.to = function (loggerName) {
        return this;
    };
    LogService.prototype.debug = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        var t = ["%cDebug: ", "color:green"];
        Array.prototype.push.apply(t, arguments);
        console.log.apply(console, t);
    };
    LogService.prototype.info = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        var t = ["%cInfo: ", "color:blue"];
        Array.prototype.push.apply(t, arguments);
        console.log.apply(console, t);
    };
    LogService.prototype.warning = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        var t = ["%cWarning: ", "color:orange"];
        Array.prototype.push.apply(t, arguments);
        console.log.apply(console, t);
    };
    LogService.prototype.error = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        var t = ["%cError: ", "color:red"];
        Array.prototype.push.apply(t, arguments);
        console.log.apply(console, t);
    };
    LogService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], LogService);
    return LogService;
})();
exports.LogService = LogService;
