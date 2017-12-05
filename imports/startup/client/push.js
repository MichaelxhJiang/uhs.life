Meteor.startup(() =>
{
    if (Meteor.isCordova) {
        Push.Configure({
            android: {
                senderID: 737004764701,
                alert: true,
                badge: true,
                sound: true,
                vibrate: true,
                clearNotifications: true
                // icon: '',
                // iconColor: ''
            },
            ios: {
                alert: true,
                badge: true,
                sound: true
            }
        });

        Push.addListener('message', function (notification) {
            console.log('notification: ' + JSON.stringify(notification));
        });
        Push.addListener('token', function (token) {
            console.log('token: ' + JSON.stringify(notification));
        });
    }
});