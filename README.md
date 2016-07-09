HockeyApp SDK for NativeScript
=======================================
A NativeScript plugin for the [HockeyApp SDK](https://www.hockeyapp.net))(iOS Only)

----------
This plugin installs the [HockeyApp SDK](https://www.hockeyapp.net/releases/) in [NativeScript](https://www.nativescript.org/) projects. 


# How to use
----------
Run the following command in the root of your project:
```
$ tns plugin add nativescript-hockey-sdk
```

## Usage
To use the HockeyApp SDK, you will need an "APP_API_KEY" from the HockeyApp service. Visit the [HockeyApp website](https://www.hockeyapp.net/features) to obtain a key for your app.

### iOS
For basic usage of the HockeyApp SDK, add the following to your `app.ts` or `app.js` file in the `launchEvent` handler:
```
BITHockeyManager.sharedHockeyManager().configureWithIdentifier("APP_API_KEY");
BITHockeyManager.sharedHockeyManager().startManager();
BITHockeyManager.sharedHockeyManager().authenticator.authenticateInstallation();
```
Where "APP_API_KEY" is the key for your app from HockeyApp.

Example:
```
app.on(app.launchEvent, function(context) {
    BITHockeyManager.sharedHockeyManager().configureWithIdentifier("APP_API_KEY");
    BITHockeyManager.sharedHockeyManager().startManager();
    BITHockeyManager.sharedHockeyManager().authenticator.authenticateInstallation();
});
```
The iOS version of this plugin uses the HockeyApp SDK CocoaPod. See the [HockeyApp SDK CocoaPod docs](https://cocoapods.org/pods/HockeySDK-Source) for additional configuration options.

### Android
While the HockeyApp SDK supports Android, support in this plugin for Android is not yet available. Pull requests welcome. :thumbsup:

## License
MIT