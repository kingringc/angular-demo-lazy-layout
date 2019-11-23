import { Injectable } from '@angular/core';
import { noop } from 'rxjs';

import { Logger } from './logger';

@Injectable({
    providedIn: 'root'
})
export class LoggerService implements Logger {
    get error() {
        return console.error.bind(console);
    }
    get info() {
        return console.info.bind(console);
    }
    get warn() {
        return console.warn.bind(console);
    }
    invokeConsoleMethod(type: string, args?: any): void {
        const logFn: Function = (console)[type] || console.log || noop;
        logFn.apply(console, [args]);
    }
}
