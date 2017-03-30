var INSTANCE: HockeyAppPlugin;

export interface HockeyAppPlugin {
    init: Function;
}

export interface Android extends HockeyAppPlugin { }

export interface IOS extends HockeyAppPlugin { }

export function getInstance(T: new () => HockeyAppPlugin): HockeyAppPlugin {
    if (!INSTANCE) {
        INSTANCE = new T();
    }
    return INSTANCE;
}