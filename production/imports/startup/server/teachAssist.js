Meteor.methods({
    'getTeachAssistTokens' : function(json) {
        if (!(json.student_number && json.password)) {
            throw new Meteor.Error(400, "Need a student number and password");
        }
        try {
            let response = HTTP.call("GET", "https://ta.yrdsb.ca/v4/students/json.php", {
                data: {
                    "student_number": json.student_number,
                    "password": json.password
                }
            });
            let res = JSON.parse(response.content);
            let id = res[0].student_id;
            let token = res[0].token;

            console.log(token + " " + id);
            let tokens = {"student_id":id, "token":token};
            return tokens;
        } catch (e) {
            console.log(e);
            Meteor.Error(403, "The username or password is incorrect")
        }
    },
    'getTeachAssistCourses' : function(json) {
        if (!(json.student_id && json.token)) {
            throw new Meteor.Error(400, "Need a student id and token");
        }
        console.log("hello courses");
        try {
            let response = HTTP.call("GET", "https://ta.yrdsb.ca/v4/students/json.php", {
                data: {
                    "student_id": json.student_id,
                    "token": json.token
                }
            });

            return JSON.parse(response.content)[0].data[0].subjects;

        } catch (e) {
            console.log(e);
            return -1;
        }
    },
    'getTeachAssistCourseDetails' : function(json) {
        if (!(json.student_id && json.token && json.subject_id)) {
            throw new Meteor.error(500, "Need a student id and token and subject id");
        }
        console.log("hello courses details");
        try {
            let response = HTTP.call("GET", "https://ta.yrdsb.ca/v4/students/json.php", {
                data: {
                    "student_id": json.student_id,
                    "token": json.token,
                    "subject_id": json.subject_id
                }
            });
            return JSON.parse(response.content);
        } catch(e) {
            console.log(e);
            return -1;
        }
    }
})
