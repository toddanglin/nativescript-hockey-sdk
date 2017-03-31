HockeyApp SDK for NativeScript (beta)
=======================================
A NativeScript plugin for the [HockeyApp SDK](https://www.hockeyapp.net)(iOS and Android)

----------
This plugin installs the [HockeyApp SDK](https://www.hockeyapp.net/releases/) in [NativeScript](https://www.nativescript.org/) projects.


# How to use
----------
Run the following command in the root of your project:
```
$ tns plugin add nativescript-hockey-sdk
```

The SDK wrapper and init mechanism is shamelessly copied from [the Fabric plugin](https://github.com/hypery2k/nativescript-fabric).

## Usage
To use the HockeyApp SDK, you will need an "APP_ID" from the HockeyApp service. Visit the [HockeyApp website](https://www.hockeyapp.net/features) to obtain a key for your app. Enter that value in the AndroidManifest.xml or Info.plist, then import the plugin and call its init() method.

```
import { HockeyApp } from 'nativescript-hockey-sdk';
...
HockeyApp.init();
HockeyApp.trackEvent("LOG_IN");
```

You could for instance add the following to your `app.ts` or `app.js` file in the `launchEvent` handler:

```
app.on(app.launchEvent, function(context) {
    HockeyApp.init();
});
```

or the Angular AppModule constructor (launch/activity created events were not reliably fired in my case):

```
export class AppModule {
  constructor() {
    HockeyApp.init();
    HockeyApp.trackEvent("LAUNCH");
  }
}
```

### iOS

Add the HockeyApp application ID to the `/app/App_Resources/iOS/Info.plist` file:
```
<key>HockeyAppId</key>
<string>${APP_ID}</string>
```


The iOS version of this plugin uses the HockeyApp SDK CocoaPod. See the [HockeyApp SDK CocoaPod docs](https://cocoapods.org/pods/HockeySDK-Source) for additional configuration options.

### Android

Add the HockeyApp application ID to the `/app/App_Resources/Android/AndroidManifest.xml` file:
```
<meta-data android:name="net.hockeyapp.android.appIdentifier" android:value="${APP_ID}" />
```

then import and init as shown in the usage section.

## Beta ToDos
- Add TypeScript definitions for CocoaPod types

## License
MIT
