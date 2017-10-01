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
        //console.log(JSON.parse(response.content)[0]);

        let cat = [-1, -1, -1, -1, -1]; //K T C A
        let catWeight = [0, 0, 0, 0, 0];

        let preParse = JSON.parse(response.content)[0];
        let postParse = JSON.parse(response.content)[0];

        postParse.data.assessment = [];
        postParse.categoryMarks = [-1, -1, -1, -1, -1];
        let cnt = 0;
        _.each(preParse.data.assessment.data, function(k, v) {
            if (v === 'categories') {
                postParse.categories = k;
            } else {
                let assess = k;
                if (assess.K) {
                    if (cat[0] === -1) {
                        cat[0] = 0;
                    }
                    cat[0] += parseInt(assess.K.mark) / parseInt(assess.K.outOf) * 100 * parseInt(assess.K.weight);
                    catWeight[0] += parseInt(assess.K.weight);
                    console.log(cat[0] + " " + catWeight[0]);
                }
                if (assess.T) {
                    if (cat[1] === -1) {
                        cat[1] = 0;
                    }
                    cat[1] += parseInt(assess.T.mark) / parseInt(assess.T.outOf) * 100  * parseInt(assess.T.weight);
                    catWeight[1] += parseInt(assess.T.weight);
                }
                if (assess.C) {
                    if (cat[2] === -1) {
                        cat[2] = 0;
                    }
                    cat[2] += parseInt(assess.C.mark) / parseInt(assess.C.outOf) * 100  * parseInt(assess.C.weight);
                    catWeight[2] += parseInt(assess.C.weight);
                }
                if (assess.A) {
                    if (cat[3] === -1) {
                        cat[3] = 0;
                    }
                    cat[3] += parseInt(assess.A.mark) / parseInt(assess.A.outOf) * 100  * parseInt(assess.A.weight);
                    catWeight[3] += parseInt(assess.A.weight);
                }
                if (assess.O) {
                    if (cat[4] === -1) {
                        cat[4] = 0;
                    }
                    cat[4] += parseInt(assess.O.mark) / parseInt(assess.O.outOf) * 100  * parseInt(assess.O.weight);
                    catWeight[4] += parseInt(assess.O.weight);
                }
                postParse.data.assessment[cnt++] = k;

            }
        })
        for (var i = 0;i < 5; i++) {
            if (cat[i] !== -1) {
                postParse.categoryMarks[i] = cat[i]/catWeight[i];
            }
        }

        return postParse;
    }
});
