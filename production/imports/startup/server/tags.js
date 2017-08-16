const tags = new Map();
tags.set('gym', 'athletics');
tags.set('athletic', 'athletics');
tags.set('athletics', 'athletics')
tags.set('sport', 'athletics');
tags.set('sports', 'athletics');
tags.set('volleyball', 'athletics');
tags.set('soccer', 'athletics');
tags.set('frisbee', 'athletics');
tags.set('workout', 'athletics');
tags.set('curling', 'athletics');
tags.set('baseball', 'athletics');
tags.set('basketball', 'athletics');
tags.set('football', 'athletics');
tags.set('volleyball', 'athletics');

tags.set('math', 'academics');
tags.set('english', 'academics');
tags.set('calculus', 'academics');
tags.set('science', 'academics');
tags.set('physics', 'academics');
tags.set('chemistry', 'academics');
tags.set('biology', 'academics');
tags.set('academics', 'academics');
tags.set('academic', 'academics');
tags.set('class', 'academics');
tags.set('marks', 'academics');
tags.set('mark', 'academics');

tags.set('contest', 'competition');
tags.set('contests', 'competition');
tags.set('competition', 'competition');
tags.set('competitions', 'competition');
tags.set('vs', 'competition');
tags.set('fight', 'competition');
tags.set('battle', 'competition');

Meteor.methods({
   'getTags': function(text) {
      var keys = text.split(" ");
      var len = keys.length;
      var ans = [];
      for (var i = 0; i < len; ++i) {
         var key = keys[i];
         if (tags.has(key)) {
            if (!ans.includes(tags.get(key))) {
               ans.push(tags.get(key));
            }
         }
      }
      return ans;
   }
})
