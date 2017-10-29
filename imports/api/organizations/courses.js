/**
 * Created by Yonglin Wang on 9/16/2017.
 */
export const Courses = new Mongo.Collection('courses');

if (Meteor.isServer){
    Meteor.publish('allCourses', function coursesPublication(limit) {
        return Courses.find({},{
            limit: limit
        });
    });
}