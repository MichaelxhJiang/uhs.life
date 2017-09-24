Meteor.methods({
    'getTeachAssistTokens' : function(json) {
        if (!(json.student_number && json.password)) {
            throw new Meteor.Error(400, "Need a student number and password");
        }
        let response = HTTP.call("GET", "https://ta.yrdsb.ca/v4/students/json.php", {
            data: {
                "student_number": json.student_number,
                "password": json.password
            }
        });
        let res = JSON.parse(response.content);
        if (res[0].ERROR) {
            console.log(res[0].ERROR);
            throw new Meteor.Error(403, "Your password is invalid.");
        }

        let id = res[0].student_id;
        let token = res[0].token;

        return {"student_id": id, "token": token};
    },
    'getTeachAssistCourses' : function(json) {
        if (!(json.student_id && json.token)) {
            throw new Meteor.Error(400, "Need a student id and token");
        }
        console.log("hello courses");
        let response = HTTP.call("GET", "https://ta.yrdsb.ca/v4/students/json.php", {
            data: {
                "student_id": json.student_id,
                "token": json.token
            }
        });

        if (JSON.parse(response.content)[0].ERROR) {
            throw new Meteor.Error(400, JSON.parse(response.content)[0].ERROR);
        }
        return JSON.parse(response.content)[0].data[0].subjects;

    },
    'getTeachAssistCourseDetails' : function(json) {
        if (!(json.student_id && json.token && json.subject_id)) {
            throw new Meteor.Error(400, "Need a student id and token and subject id");
        }
        let response = HTTP.call("GET", "https://ta.yrdsb.ca/v4/students/json.php", {
            data: {
                "student_id": json.student_id,
                "token": json.token,
                "subject_id": json.subject_id
            }
        });
        if (JSON.parse(response.content)[0].ERROR) {
            throw new Meteor.Error(400, JSON.parse(response.content)[0].ERROR);
        }
        console.log(JSON.parse(response.content)[0]);
        return JSON.parse(response.content)[0];
    }
});
