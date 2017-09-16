Meteor.methods({
    'getTeachAssistTokens' : function(json) {
        if (!(json.student_number && json.password)) {
            throw new Meteor.error(403, "Need a student number and password");
        }
        HTTP.call("GET", "https://ta.yrdsb.ca/v4/students/json.php", {
            data: {
                "student_number":json.student_number,
                "password": json.password
            }
        }, function(err, response) {
            if (err) {
                console.log(err)
            } else {
                console.log(response);
                let res = JSON.parse(response.content);
                let id = res[0].student_id;
                let token = res[0].token;

                return {"student_id":id, "token":token};
            }
        })
    },
    'getTeachAssistCourses' : function(json) {
        if (!(json.student_id && json.token)) {
            throw new Meteor.error(403, "Need a student id and token");
        }

        HTTP.call("GET", "https://ta.yrdsb.ca/v4/students/json.php", {
            data: {
                "student_id": json.student_id,
                "token": json.token
            }
        }, function(err, response) {
            if (err) {
                console.log(err);
            } else {
                return JSON.parse(response.content)[0].data[0].subjects;
            }
        })
    },
    'getTeachAssistCourseDetails' : function(json) {
        if (!(json.student_id && json.token && json.subject_id)) {
            throw new Meteor.error(403, "Need a student id and token and subject id");
        }

        HTTP.call("GET", "https://ta.yrdsb.ca/v4/students/json.php", {
            data: {
                "student_id": json.student_id,
                "token": json.token,
                "subject_id": json.subject_id
            }
        }, function(err, response) {
            if (err) {
                console.log(err);
            } else {
                return JSON.parse(response.content);
            }
        })
    }
})
