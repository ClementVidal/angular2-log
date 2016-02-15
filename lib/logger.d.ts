export declare class Logger {
    name: string;
    subject: any;
    constructor(name: string);
    closePublication(): void;
    onServiceNotification(notif: any): void;
    debug(...args: any[]): void;
    info(...args: any[]): void;
    warning(...args: any[]): void;
    error(...args: any[]): void;
    private _publishEvent(level, ...args);
}
