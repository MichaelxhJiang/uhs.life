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

//App.accessRule('*');