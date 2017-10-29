/**
 * Created by Yonglin Wang on 9/16/2017.
 */
import { Courses } from './courses.js'


Meteor.methods({
    'courses.addSeveral': function (names, codes) {
        let nameList = names.split('\n');
        let codeList = codes.split('\n');
        console.log(nameList.length);
        console.log(codeList.length);
        if(nameList.length !== codeList.length){
            Meteor.Error(400,"List not the same length")
        }
        for(let i = 0; i < nameList.length; i++){
            let json = {
                name: nameList[i],
                code: codeList[i],
                description: "",
                imgLink: null
            };
            Courses.insert(json)
        }
    }
})