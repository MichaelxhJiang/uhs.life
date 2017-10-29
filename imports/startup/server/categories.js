if (Meteor.isServer) {
    Meteor.publish('keywords', function postsPublication() {
        return Posts.find({});
    });
}

const categories = new Map();
//athletics
categories.set('gym', 'athletics');
categories.set('athletic', 'athletics');
categories.set('athletics', 'athletics')
categories.set('sport', 'athletics');
categories.set('sports', 'athletics');
categories.set('volleyball', 'athletics');
categories.set('soccer', 'athletics');
categories.set('frisbee', 'athletics');
categories.set('workout', 'athletics');
categories.set('curling', 'athletics');
categories.set('baseball', 'athletics');
categories.set('basketball', 'athletics');
categories.set('football', 'athletics');
categories.set('volleyball', 'athletics');

//academics
categories.set('math', 'academics');
categories.set('english', 'academics');
categories.set('calculus', 'academics');
categories.set('science', 'academics');
categories.set('physics', 'academics');
categories.set('chemistry', 'academics');
categories.set('biology', 'academics');
categories.set('computing', 'academics');
categories.set('academics', 'academics');
categories.set('academic', 'academics');
categories.set('class', 'academics');
categories.set('tutor', 'academics');
categories.set('marks', 'academics');
categories.set('mark', 'academics');

//competition
categories.set('contest', 'competition');
categories.set('contests', 'competition');
categories.set('competition', 'competition');
categories.set('competitions', 'competition');
categories.set('vs', 'competition');
categories.set('fight', 'competition');
categories.set('battle', 'competition');

Meteor.methods({
   //return all categories found within text
   'keywords.getKeywords': function(text) {
      text = text.toLowerCase();
      var separators = [' , ', ', ', ',', ' ,', ' '];
      //
      var keys = text.split(/[ ,.]+/);
      //console.log(keys);
      var len = keys.length;
      var ans = [];
      for (var i = 0; i < len; ++i) {
         var key = keys[i];
         if (categories.has(key)) {
            if (!ans.includes(categories.get(key))) {
               ans.push(categories.get(key));
            }
         }
      }
      return ans;
   }
})
