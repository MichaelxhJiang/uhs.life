import {Posts} from '../../api/posts/posts.js'

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
        if (!Roles.userIsInRole( this.userId, ['admin'])) {
            throw new Meteor.Error(403, "You do not have permission...Reported");
        }
        Push.send({
            title: title,
            text: text,
            from: "server",
            query: {}
        });
    },
    'postNotification'(postId) {
        if (!Roles.userIsInRole( this.userId, ['admin'])) {
            throw new Meteor.Error(403, "You do not have permission...Reported");
        }
        let post = Posts.find({"_id":postId}).fetch()[0];
        let categories = post.categories;
        let userId = new Set();
        for (let i = 0; i < categories.length; i++) {
            let users = Meteor.users.find({'private.categories' : categories[i]}).fetch();
            for (let j = 0; j < users.length; j++) {
                userId.add(users[j]._id);
            }
        }
        console.log("Push: subscriber count: " + userId.size);
        let array = Array.from(userId);
        Push.send({
            title: "New Post: ",
            text: post.headline,
            from: "uhs.life",
            query: {
                userId: {$in: array}
            }
        });
    },
    'testSubscribeQuery'(category) {
        if (!Roles.userIsInRole( this.userId, ['admin'])) {
            throw new Meteor.Error(403, "You do not have permission...Reported");
        }
        let post = Posts.find();
        let categories = post.categories;
        let userId = new Set();

        let users = Meteor.users.find({'private.categories' : category}).fetch();
        for (let j = 0; j < users.length; j++) {
            userId.add(users[j]._id);
        }

        console.log("Push: subscriber count: " + userId.size);
        let array = Array.from(userId);
        console.log(array);
    }
});