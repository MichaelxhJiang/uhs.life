import { Meteor } from 'meteor/meteor';
import { TestCollection } from '/imports/api/testCollection.js';
import '/imports/startup/server';
import schedule from 'node-schedule';

Meteor.startup(() => {
    //testing node schedule
    /*console.log("initializing scheduler");
    var rule = new schedule.RecurrenceRule();
    rule.second = new schedule.Range(0, 59, 2);
    var k = schedule.scheduleJob(rule, function(err) {
        if (err) {
            console.log(err);
        } else {
            console.log(new Date());
        }
    });*/
    //var j = schedule.scheduleJob('*/1 * * * *', function(err) {
    /*    if (err) {
            console.log(err);
        } else {
            console.log(TestCollection.find());
            k.cancel();
        }
    });*/
    HTTP.call("GET", "https://ta.yrdsb.ca/v4/students/json.php", {
        data: {
            "student_number": "073212482",
            "password": "XXXXX"
        }
    }, function(err, response) {
        if (err) {
            console.log(err)
        } else {
            //console.log(response);
            let json = JSON.parse(response.content);
            let id = json[0].student_id;
            let token = json[0].token;

        HTTP.call("GET", "https://ta.yrdsb.ca/v4/students/json.php", {
            data: {
                "student_id":id,
                "token": token
            }
        }, function(err, response) {
            if (err) {
                console.log(err);
            } else {
                console.log(response);
                //console.log(JSON.stringify(JSON.parse(response.content.data), null, 2));
                let subject_id = JSON.parse(response.content)[0].data[0].subjects[0].subject_id;
                HTTP.call("GET", "https://ta.yrdsb.ca/v4/students/json.php", {
                    data: {
                        "student_id": id,
                        "token": token,
                        "subject_id": subject_id
                    }
                }, function(err, response) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log(response);
                        return response.content;
                    }
                })
            }
        })
        }
    })
})
