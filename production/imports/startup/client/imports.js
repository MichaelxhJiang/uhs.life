/**
 * Created by Yonglin Wang on 7/28/2017.
 *
 * This file manages the importing of all layouts and pages.
 *
 * A semi-colon is not necessary at the end of an import, please omit it.
 */
//import ui files
import '../../ui/layouts/applicationLayout.js';
import '../../ui/components/navigation.js'
import '../../ui/pages/login.js';
import '../../ui/pages/stream.js';
import '../../ui/pages/firstTime.js';
import '../../ui/pages/details.js';
import '../../ui/components/editor.js';
//This file defines functions to post and setup the facebook API
import './facebook.js';
//This file contains the search function used for Algolia
import './algoliaSearch.js';
//This file contains the search all function used for Algolia
import './algoliaAll.js';

