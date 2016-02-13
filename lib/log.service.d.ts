export declare class Logger {
    name: string;
    subject: any;
    static level: {
        debug: number;
        info: number;
        warning: number;
        error: number;
    };
    constructor(name: string);
    closePublication(): void;
    debug(...args: any[]): void;
    info(...args: any[]): void;
    warning(...args: any[]): void;
    error(...args: any[]): void;
    private _publishEvent(level, ...args);
}
export declare class LogService {
    loggers: Map<string, Logger>;
    constructor();
    logLevel: string;
    openLogger(loggerName: string): Logger;
    closeLogger(loggerName: string): Logger;
    to(loggerName: string): Logger;
    debug(...args: any[]): void;
    info(...args: any[]): void;
    warning(...args: any[]): void;
    error(...args: any[]): void;
}
