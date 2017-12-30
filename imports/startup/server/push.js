import {Posts} from '../../api/posts/posts.js';

export const pushPostNotification = (postId) => {
    try {
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
    } catch (e) {
        console.log("Push notification error: " + e);
    }
};

Push.debug = true;  //need to remove later

Push.Configure({
    //still need to configure apple developer account
    apn: {
        certData: Assets.getText('meteorApp-cert-prod.pem'),
        keyData: Assets.getText('meteorApp-key-prod.pem'),
        passphrase: 'xXx_l1t_developers_xXx',
        production: true,
        //gateway: 'gateway.push.apple.com',
    },
    /*
    apn: {
        certData: Assets.getText('meteorApp-cert-dev.pem'),
        keyData: Assets.getText('meteorApp-key-dev.pem'),
        passphrase: 'xXx_l1t_developers_xXx',
        production: false,  //resolves error8 in raix push
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
    userNotification(userId, title, text) {
        if (!Roles.userIsInRole( this.userId, ['admin'])) {
            throw new Meteor.Error(403, "You do not have permission...Reported");
        }
        Push.send({
            title: title,
            text: text,
            from: "uhs.life",
            query: {
                userId: userId
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