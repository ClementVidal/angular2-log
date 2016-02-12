export declare class Logger {
    name: string;
    subject: any;
    constructor(name: string);
    closePublication(): void;
    debug(...args: any[]): void;
    info(...args: any[]): void;
    warning(...args: any[]): void;
    error(...args: any[]): void;
}
export declare class LogService {
    _loggers: Map<string, Logger>;
    constructor();
    openLogger(loggerName: string): Logger;
    closeLogger(loggerName: string): Logger;
    to(loggerName: any): Logger;
    debug(...args: any[]): void;
    info(...args: any[]): void;
    warning(...args: any[]): void;
    error(...args: any[]): void;
}
