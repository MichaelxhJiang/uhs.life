import Mailchimp from 'mailchimp-api-v3';

//const Mailchimp = require('mailchimp-api-v3')

const mailchimp = new Mailchimp('5e738f7bcecab0f5d65658ce3d59dbe1-us16');

Meteor.methods({
   'getSubscribers' : function() {
      mailchimp.get('/lists/f21d5e31f7', function(results) {
         return results;
      })
   },
   'addSubscriber' : function(email, status) {
      mailchimp.post('/lists/f21d5e31f7/members', {email_address : email, status: status, merge_fields : {FNAME : 'Joe', LNAME : 'Smith'}}, function (err, response) {
         if (err) {
            console.log(err)
         } else {
            console.log(JSON.stringify(response, null, 2));
         }
         return response;
      })
   },
   'getTemplates' : function () {
      mailchimp.get('/templates', function(err, response) {
         if (err) {
            console.log(err);
         } else {
            console.log(JSON.stringify(response, null, 2));
         }
      })
   },
   'createCampaign' : function(subjectLine, title, ) {
      mailchimp.post('/campaigns',
      {
         type : 'regular',
         recipients : {
            list_id: 'f21d5e31f7'
         },
         settings : {
            subject_line : subjectLine,
            title: title,
            from_name : 'uhs.life',
            reply_to : 'michaelxhj@outlook.com',
            template_id : 25931
         }
      }, function (err, response) {
         if (err) {
            console.log(err);
         } else {
            console.log(JSON.stringify(response, null, 2));
            var campaignID = response.id;
            mailchimp.put('/campaigns/'+campaignID+'/content',
            {
               template : {
                  id : 25931,
                  sections : {
                     "image" : "<img src='https://www.sitebuilderreport.com/assets/facebook-stock-up-446fff24fb11820517c520c4a5a4c032.jpg'>",
                     "text" : "<p>Changed text 2</p>"
                  }
               }
            }, function(err, response) {
               if (err) {
                  console.log(err);
               } else {
                  //console.log(JSON.stringify(response, null, 2));
                  mailchimp.post('/campaigns/'+campaignID+'/actions/send', function(err, response) {
                     if (err) {
                        console.log(err);
                     } else {
                        console.log(JSON.stringify(response, null, 2));
                     }
                  })
               }
            })
         }
      })
   }
})
