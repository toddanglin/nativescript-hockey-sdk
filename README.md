HockeyApp SDK for NativeScript
=======================================
A NativeScript plugin for the [HockeyApp SDK](https://www.hockeyapp.net) (iOS and Android)

----------
This plugin installs the [HockeyApp SDK](https://www.hockeyapp.net/releases/) in [NativeScript](https://www.nativescript.org/) projects and provides a common API for using in iOS and Android projects.


# How to use

Run the following command in the root of your project:

```
$ tns plugin add nativescript-hockey-sdk
```

The SDK wrapper and init mechanism is shamelessly copied from [the Fabric plugin](https://github.com/hypery2k/nativescript-fabric). Before running an app with this plug-in, you will need an `APP_ID` from the HockeyApp service. Visit the [HockeyApp website](https://www.hockeyapp.net/features) to obtain a key for your app. Enter that key in the `AndroidManifest.xml` or `Info.plist`.

## iOS

Add the HockeyApp `APP_ID` to the `/app/App_Resources/iOS/Info.plist` file:

```
<key>HockeyAppId</key>
<string>${APP_ID}</string>
```

The iOS version of this plugin uses the HockeyApp SDK CocoaPod. See the [HockeyApp SDK CocoaPod docs](https://cocoapods.org/pods/HockeySDK-Source) for additional configuration options.

### Using build.xcconfig
On iOS, you also have the option of putting your HockeySDK `APP_ID` in the `build.xcconfig` file rather than directly embedding in `Info.plst`. This can help if, for example, you want to avoid putting SDK keys in source control.

Using the `Info.plist` syntax above with the `${APP_ID}` key, simply add this line to `build.xcconfig`:

```
APP_ID = YOUR-HOCKYSDK-APP-ID
```

During builds, the value from `build.xcconfig` will replace the `{$APP_ID}` key in `Info.plist`.

## Android

Add the HockeyApp `APP_ID` to the `/app/App_Resources/Android/AndroidManifest.xml` file:
```
<meta-data android:name="net.hockeyapp.android.appIdentifier" android:value="${APP_ID}" />
```


# Usage

After the plug-in has been installed and the `APP_ID` has been configured, simply import and init the plugin.

```
import { HockeyApp } from 'nativescript-hockey-sdk';
...
HockeyApp.init();
HockeyApp.trackEvent("LOG_IN");
```

To init on app launch, import and init in your `app.ts` or `app.js` file in the `launchEvent` handler:

```
app.on(app.launchEvent, function(context) {
    HockeyApp.init();
});
```

If you're using Angular, you could alternatively use the AppModule constructor:

```
export class AppModule {
  constructor() {
    HockeyApp.init();
    HockeyApp.trackEvent("LAUNCH");
  }
}
```
# Breaking Changes

v1.0.0
- APP_ID key now expected in iOS/Android configuration files

# TODOS

- Add TypeScript definitions for CocoaPod types

# License

MIT
