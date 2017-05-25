import * as app from 'application';
import { HockeyApp } from 'nativescript-hockey-sdk';

app.on(app.launchEvent, (args) => {
    // Init HockeyApp SDK
    HockeyApp.init();
});

app.start({ moduleName: 'main-page' });

/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/
