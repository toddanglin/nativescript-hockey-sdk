import * as application from 'application';
import { Android, getInstance } from "./hockeyapp.common";

declare var net: any;

class HockeyAppAndroidPlugin implements Android {

    private initDone = false;

    constructor() { }

    init(): void {
        if (this.initDone) {
            console.log("HockeyAppAndroidPlugin already initialized");
            return;
        }

        if (!application.android) {
            return;
        }

        try {
            if (!net.hockeyapp.android.metrics.MetricsManager.getInstance()) {
                net.hockeyapp.android.metrics.MetricsManager.register(application.android.nativeApp);
            }

            application.android.on(application.AndroidApplication.activityResumedEvent, activityEventData => {
                net.hockeyapp.android.CrashManager.register(activityEventData.activity);
            });

            this.initDone = true;
        } catch (e) {
            console.error('Error during init of HockeyApp', e);
        }
    }

}

/**
 * Create new singleton instance
 */
export const HockeyApp: Android = getInstance(HockeyAppAndroidPlugin);