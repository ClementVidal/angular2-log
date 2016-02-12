export declare class LogService {
    constructor();
    to(loggerName: any): LogService;
    debug(...args: any[]): void;
    info(...args: any[]): void;
    warning(...args: any[]): void;
    error(...args: any[]): void;
}
