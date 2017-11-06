Push.debug = true;  //need to remove later

Push.Configure({
    //still need to configure apple developer account
    /*apn: {
        certData: Assets.getText('apnDevCert.pem'),
        keyData: Assets.getText('apnDevKey.pem'),
        passphrase: 'helloworld',
        production: true,
        //gateway: 'gateway.push.apple.com',
    },*/
    gcm: {
        apiKey: 'AIzaSyD9HJ2HMoQdfGrDMf-OcNSUXCv7IyQwkFM',
        projectNumber: 111111111111
    }
    // production: true,
    // 'sound' true,
    // 'badge' true,
    // 'alert' true,
    // 'vibrate' true,
    // 'sendInterval': 15000, Configurable interval between sending
    // 'sendBatchSize': 1, Configurable number of notifications to send per batch
    // 'keepNotifications': false,
});

Push.allow({
    send: (userId, notification) => {
        // allow all users to send notifications
        return true;
    }
});

Meteor.methods({
    'serverNotification'(title, text) {
        Push.send({
            title: title,
            text: text,
            from: "server",
            query: {}
        });
    }
});