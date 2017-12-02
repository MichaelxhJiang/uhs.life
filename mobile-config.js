App.setPreference('StatusBarOverlaysWebView', 'false');
App.setPreference('StatusBarBackgroundColor', '#000000');
App.setPreference('Orientation', 'portrait');

App.info({
    id: 'com.life.uhs',
    description: 'UHS LIFE NEWS APP',
    author: 'Linus j',
    email: 'Xxx@xxx.com',
    website: 'http://xxxx.com'
});

App.configurePlugin('cordova-plugin-googleplus', {
    REVERSED_CLIENT_ID: 'com.googleusercontent.apps.152156454960-bbg141hjift2scva84trap25a4d72s6g'
});

App.configurePlugin('cordova-plugin-googleplayservices');

App.accessRule('http://*.algolianet.com', {
    'minimum-tls-version': 'TLSv1.0',
    'requires-forward-secrecy': false,
});
App.accessRule('http://*.algolia.com', {
    'minimum-tls-version': 'TLSv1.0',
    'requires-forward-secrecy': false,
});
App.accessRule('http://*.algolia.net', {
    'minimum-tls-version': 'TLSv1.0',
    'requires-forward-secrecy': false,
});
App.accessRule('https://fonts.googleapis.com');

App.accessRule('https://fonts.gstatic.com');

App.configurePlugin('phonegap-plugin-push', {
    SENDER_ID: 737004764701
});

App.icons({
    'iphone_2x': 'mobile_resources/icons/ios/icon-60@2x.png',
    'iphone_3x': 'mobile_resources/icons/ios/icon-60@3x.png',
    'ipad': 'mobile_resources/icons/ios/icon-76.png',
    'ipad_2x': 'mobile_resources/icons/ios/icon-76@2x.png',
    'android_mdpi': 'mobile_resources/icons/android/drawable-mdpi-icon.png',
    'android_hdpi': 'mobile_resources/icons/android/drawable-hdpi-icon.png',
    'android_xhdpi': 'mobile_resources/icons/android/drawable-xhdpi-icon.png',
    'android_xxhdpi': 'mobile_resources/icons/android/drawable-xhdpi-icon.png'
});

App.launchScreens({
    'iphone_2x': 'mobile_resources/screens/ios/Default@2x~iphone.png',
    'iphone5': 'mobile_resources/screens/ios/Default-568h@2x~iphone.png',
    'iphone6': 'mobile_resources/screens/ios/Default-667h.png',
    'iphone6p_portrait': 'mobile_resources/screens/ios/Default-736h.png',
    'iphone6p_landscape': 'mobile_resources/screens/ios/Default-Landscape-736h.png',
    'ipad_portrait': 'mobile_resources/screens/ios/Default-Portrait~ipad.png',
    'ipad_portrait_2x': 'mobile_resources/screens/ios/Default-Portrait@2x~ipad.png',
    'ipad_landscape': 'mobile_resources/screens/ios/Default-Landscape~ipad.png',
    'ipad_landscape_2x': 'mobile_resources/screens/ios/Default-Landscape@2x~ipad.png',
    'android_mdpi_portrait': 'mobile_resources/screens/android/drawable-port-mdpi-screen.png',
    'android_mdpi_landscape': 'mobile_resources/screens/android/drawable-land-mdpi-screen.png',
    'android_hdpi_portrait': 'mobile_resources/screens/android/drawable-port-hdpi-screen.png',
    'android_hdpi_landscape': 'mobile_resources/screens/android/drawable-land-hdpi-screen.png',
    'android_xhdpi_portrait': 'mobile_resources/screens/android/drawable-port-xhdpi-screen.png',
    'android_xhdpi_landscape': 'mobile_resources/screens/android/drawable-land-xhdpi-screen.png',
});

//App.accessRule('*');
