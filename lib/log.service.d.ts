import { Logger } from './logger';
export declare class LogService {
    loggers: Map<string, Logger>;
    private _serviceNotification;
    constructor();
    level: string;
    openLogger(loggerName: string): Logger;
    closeLogger(loggerName: string): Logger;
    to(loggerName: string): Logger;
    debug(...args: any[]): void;
    info(...args: any[]): void;
    warning(...args: any[]): void;
    error(...args: any[]): void;
}
