/**
 * Created by Yonglin Wang on 7/28/2017.
 *
 * This file manages the importing of all layouts and pages.
 *
 */

//import ui files
import '../../ui/layouts/applicationLayout.js';
import '../../ui/components/navigation.js';
import '../../ui/pages/login.js';
import '../../ui/pages/stream.js';
import '../../ui/pages/firstTime.js';
import '../../ui/pages/details.js';
import '../../ui/components/editor.js';
import '../../ui/pages/course.js';
import '../../ui/pages/dashboard.js';
import '../../ui/pages/blogs.js';
import '../../ui/pages/bigPicture.js';
import '../../ui/pages/profile.js';
import '../../ui/pages/public.js';
import '../../ui/pages/calendar.js';
import '../../ui/pages/experimental.js';
import '../../ui/pages/bookingAdmin.js';

//This file defines functions to post and setup the facebook API
import './facebook.js';
//This file contains the search function used for Algolia
import './algoliaSearch.js';
//This file contains the search all function used for Algolia
import './algoliaAll.js';
//This file contains push notification setup
import './push.js';

import '../../api/images/images.js';

// The following defines all the mini-mongo local databases on the client
Drafts = new Mongo.Collection('drafts');
Clubs = new Mongo.Collection('clubs');
Posts = new Mongo.Collection('posts');
Courses = new Mongo.Collection('courses');
Categories = new Mongo.Collection('categories');
BlogCategories = new Mongo.Collection('blogcategories');
Suggestions = new Mongo.Collection('suggestions');
Shows = new Mongo.Collection('shows');