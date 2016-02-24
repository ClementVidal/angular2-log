export interface Notification {
    type: string;
    payload: {
        level?: string;
    };
}
export declare var Level: {
    debug: number;
    info: number;
    warning: number;
    error: number;
};
export declare class Logger {
    name: string;
    subject: any;
    level: number;
    constructor(name: string);
    closePublication(): void;
    onServiceNotification(notif: Notification): void;
    debug(...args: any[]): void;
    info(...args: any[]): void;
    warning(...args: any[]): void;
    error(...args: any[]): void;
    private _publishEvent(level, ...args);
}
