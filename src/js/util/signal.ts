/**
 * Signal-Slot pattern module
 */

type SlotCallback<T> = (data?: T) => void;

interface Slot<T> {
    callback: SlotCallback<T>;
    object?: any;
}

/**
 * Signal slot pattern class with optional accumulator object.
 *
 * <T> signal data type
 */
export class Signal<T> {

    private _slots: Slot<T>[] = [];
    private _emit: boolean = true;

    private _onConnect: (connNo: number) => void;
    private _onDisconnect: (connNo: number) => void;

    constructor() {
    }

    connNo(): number {
        return this._slots.length;
    }

    onConnect(onConnect: (connNo: number) => void): void {
        this._onConnect = onConnect;
    }

    onDisconnect(onDisconnect: (connNo: number) => void): void {
        this._onDisconnect = onDisconnect;
    }

    /**
     * Connects slot
     */
    connect(callback: (data?: T) => void): void;
    connect(callback: (data?: T) => void, object?: Object): void;
    connect(callback: (data?: any) => void, object?: Object): void {
        if (typeof callback !== "function") {
            return;
        }
        if (object) {
            this._slots.push({ callback: callback, object: object });
        } else {
            this._slots.push({ callback: callback });
        }
        if (this._onConnect) {
            this._onConnect(this._slots.length);
        }
    }

    /**
     * Disconnects slot
     */
    disconnect(callback: (data?: T) => void, object?: Object): void {
        if (typeof callback !== "function") {
            return;
        }
        this._slots = this._slots.filter(slot => {
            return (object === undefined) ?
                (slot.callback !== callback) :
                (slot.callback !== callback) || (slot.object !== object);
        });
        if (this._onDisconnect) {
            this._onDisconnect(this._slots.length);
        }
    }

    /**
     * Disconnects all slots
     */
    disconnectAll(): void {
        this._slots = [];
        if (this._onDisconnect) {
            this._onDisconnect(this._slots.length);
        }
    }

    /**
     * Freeze signal propagation
     */
    freeze(): void {
        this._emit = false;
    }

    /**
     * Unfreeze signal propagation
     */
    unfreeze(): void {
        this._emit = true;
    }

    /**
     * Emits signal, you can start it in the way:
     * signal.emit({any number of parameters}),
     * emit returns accumulator.value().
     */
    emit(): any[];
    emit(data?: T): any[];
    emit(data?: any): any[] {
        if (this._emit) {
            return this._slots.map(slot => {
                const object: Object = slot.object;
                if (object) {
                    return slot.callback.call(object, data);
                } else {
                    return slot.callback(data);
                }
            });
        }
        return [];
    }

}