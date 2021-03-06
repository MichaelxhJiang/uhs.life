import Mailchimp from 'mailchimp-api-v3';

//const Mailchimp = require('mailchimp-api-v3')

const mailchimp = new Mailchimp('c63e149751b5b34657fc48286f336650-us16');

Meteor.methods({
   'getSubscribers' : function() {
      mailchimp.get('/lists/b7d23cbf79', function(results) {
         return results;
      })
   },
   'news.addSubscriber' : function(email, fname, lname) {
      mailchimp.post('/lists/b7d23cbf79/members', {email_address : email, status: 'subscribed', merge_fields : {FNAME : fname, LNAME : lname}}, function (err, response) {
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
   'createCampaign' : function(subjectLine, title) {
      mailchimp.post('/campaigns',
      {
         type : 'regular',
         recipients : {
            list_id: 'b7d23cbf79'
         },
         settings : {
            subject_line : subjectLine,
            title: title,
            from_name : 'UHS Life Bulletin',
            reply_to : 'hello@uhs.life',
            template_id : 60467
         }
      }, function (err, response) {
         if (err) {
            console.log(err);
         } else {
            console.log(JSON.stringify(response, null, 2));
            let campaignID = response.id;
            mailchimp.put('/campaigns/'+campaignID+'/content',
            {
               template : {
                  id : 60467,
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
