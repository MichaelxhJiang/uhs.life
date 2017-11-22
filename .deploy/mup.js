module.exports = {
    servers: {
        one: {
            // TODO: set host address, username, and authentication method
            host: 'ec2-52-60-38-226.ca-central-1.compute.amazonaws.com',
            username: 'root',
            pem: '../uhslife-official.pem'
            // password: 'server-password'
            // or neither for authenticate from ssh-agent
        }
    },

    app: {
        // TODO: change app name and path
        name: 'uhslife',
        path: '../',
        servers: {
            one: {},
        },

        volumes: {
            '/images':'/images'
        },

        buildOptions: {
            serverOnly: true,
            debug: true,
            executable: 'meteor'
        },

        env: {
            // TODO: Change to your app's url
            // If you are using ssl, it needs to start with https://
            ROOT_URL: 'https://uhs.life',
            MONGO_URL: 'mongodb://localhost/meteor',
        },

        ssl: { // (optional)
            // Enables let's encrypt (optional)
            autogenerate: {
                email: 'yonglin@uhs.life',
                // comma separated list of domains
                domains: 'uhs.life,www.uhs.life'
            }
        },

        docker: {
            // change to 'abernix/meteord:base' if your app is using Meteor 1.4 - 1.5
            image: 'abernix/meteord:node-8.4.0-base',
        },
        deployCheckPort: 80,
        // Show progress bar while uploading bundle to server
        // You might need to disable it on CI servers
        enableUploadProgressBar: false
    },

    mongo: {
        version: '3.4.1',
        oplog: true,
        port: 27017,
        servers: {
            one: {}
        }
    }
};
