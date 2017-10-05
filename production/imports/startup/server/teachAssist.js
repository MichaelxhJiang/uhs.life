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

        let cat = [0, 0, 0, 0, 0]; //K T C A O
        let catWeight = [0, 0, 0, 0, 0];
        let catExist = [false, false, false, false, false];
        let timeline = [];

        let preParse = JSON.parse(response.content)[0];
        let postParse = JSON.parse(response.content)[0];

        postParse.data.assessment = [];
        postParse.categoryMarks = [0, 0, 0, 0, 0];

        let categories = preParse.data.assessment.data.categories;

        let cnt = 0;
        _.each(preParse.data.assessment.data, function(k, v) {
            if (v === 'categories') {
                postParse.categories = k;
            } else {
                let assess = k;
                if (assess.K) {
                    catExist[0] = true;
                    cat[0] += parseFloat(assess.K.mark) / parseFloat(assess.K.outOf) * 100 * parseFloat(assess.K.weight);
                    catWeight[0] += parseFloat(assess.K.weight);
                }
                if (assess.T) {
                    catExist[1] = true;
                    cat[1] += parseFloat(assess.T.mark) / parseFloat(assess.T.outOf) * 100  * parseFloat(assess.T.weight);
                    catWeight[1] += parseFloat(assess.T.weight);
                }
                if (assess.C) {
                    catExist[2] = true;
                    cat[2] += parseFloat(assess.C.mark) / parseFloat(assess.C.outOf) * 100  * parseFloat(assess.C.weight);
                    catWeight[2] += parseFloat(assess.C.weight);
                }
                if (assess.A) {
                    catExist[3] = true;
                    cat[3] += parseFloat(assess.A.mark) / parseFloat(assess.A.outOf) * 100  * parseFloat(assess.A.weight);
                    catWeight[3] += parseFloat(assess.A.weight);
                    console.log(cat[3] + " " + catWeight[3]);
                }
                if (assess[""]) {
                    catExist[4] = true;
                    cat[4] += parseFloat(assess[""].mark) / parseFloat(assess[""].outOf) * 100  * parseFloat(assess[""].weight);
                    catWeight[4] += parseFloat(assess[""].weight);
                }
                k.O = k[""];    //transfer to Other
                delete k[""];
                let mark = 0;
                let K, T, C, A, O = 0;
                let catTotalWeight = 0;
                if (catExist[0]) {
                    mark += cat[0] / catWeight[0] * categories.K;
                    K = cat[0] / catWeight[0];
                    catTotalWeight += categories.K;
                }
                if (catExist[1]) {
                    mark += cat[1] / catWeight[1] * categories.T;
                    T = cat[1] / catWeight[1];
                    catTotalWeight += categories.T;
                }
                if (catExist[2]) {
                    mark += cat[2] / catWeight[2] * categories.C;
                    C = cat[2] / catWeight[2];
                    catTotalWeight += categories.C;
                }
                if (catExist[3]) {
                    mark += cat[3] / catWeight[3] * categories.A;
                    A = cat[3] / catWeight[3];
                    catTotalWeight += categories.A;
                }
                if (catExist[4]) {
                    mark += cat[4] / catWeight[4] * categories.O;
                    O = cat[4] / catWeight[4];
                    catTotalWeight += categories.O;
                }
                mark /= catTotalWeight;
                timeline[cnt] = {
                    mark: Math.round(mark * 100) / 100,
                    K: Math.round(K * 100) / 100,
                    T: Math.round(T * 100) / 100,
                    C: Math.round(C * 100) / 100,
                    A: Math.round(A * 100) / 100,
                    O: Math.round(O * 100) / 100
                };
                postParse.data.assessment[cnt++] = k;
            }
        })
        for (var i = 0;i < 5; i++) {
            if (cat[i] !== 0) {
                postParse.categoryMarks[i] = Math.round(cat[i]/catWeight[i] * 100) / 100;
            } else {
                postParse.categoryMarks[i] = 0;
            }
        }
        postParse.timeline = timeline;
        return postParse;
    }
});
