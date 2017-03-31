/// <reference path="node_modules/tns-platform-declarations/ios/ios.d.ts" />

import { isIOS } from 'platform';
import { NativeScriptError } from 'application';
import { IOS, getInstance } from "./hockeyapp.common";
import * as utils from "utils/utils";

declare var BITHockeyManager: any;

const APP_ID_KEY = "HockeyAppId";

class HockeyAppIOSPlugin implements IOS {

    private initDone = false;

    constructor() { }

    init(appId?: string): void {
        if (this.initDone) {
            console.log("HockeyAppIOSPlugin already initialized");
            return;
        }
        if (!isIOS) {
            return;
        }

        try {
            if (!appId) {
                let mainBundle = utils.ios.getter(NSBundle, NSBundle.mainBundle);
                appId = mainBundle.infoDictionary.objectForKey(APP_ID_KEY);
            }

            if (!appId) {
                console.error("No HockeyApp app ID was found. Please set an entry in Info.plist with key " + APP_ID_KEY);
                return;
            }

            BITHockeyManager.sharedHockeyManager().configureWithIdentifier(appId);
            BITHockeyManager.sharedHockeyManager().startManager();
            BITHockeyManager.sharedHockeyManager().authenticator.authenticateInstallation();

            this.initDone = true;
        } catch (e) {
            console.error('Error during init of HockeyApp', e);
        }
    }

}

/**
 * Create new singleton instance
 */
export const HockeyApp: IOS = getInstance(HockeyAppIOSPlugin);