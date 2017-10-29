//////////////////////////////////////////////////////////////////////////
//                                                                      //
// This is a generated file. You can view the original                  //
// source in your browser if your browser supports source maps.         //
// Source maps are supported by all recent versions of Chrome, Safari,  //
// and Firefox, and by Internet Explorer 11.                            //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var Template = Package['templating-runtime'].Template;
var $ = Package.jquery.$;
var jQuery = Package.jquery.jQuery;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var Spacebars = Package.spacebars.Spacebars;
var HTML = Package.htmljs.HTML;

/* Package-scope variables */
var Modal;

(function(){

//////////////////////////////////////////////////////////////////////////////////
//                                                                              //
// packages/peppelg_bootstrap-3-modal/main.js                                   //
//                                                                              //
//////////////////////////////////////////////////////////////////////////////////
                                                                                //
var $soloModal = null // Used when allowMultiple = false.                       // 1
                                                                                // 2
// The public API.                                                              // 3
Modal = {                                                                       // 4
	                                                                               // 5
	allowMultiple: false,                                                          // 6
	                                                                               // 7
	show: function(templateName, data, options){                                   // 8
		                                                                              // 9
		if($soloModal == null || this.allowMultiple){                                 // 10
			                                                                             // 11
			var parentNode = document.body                                               // 12
			                                                                             // 13
			var view = Blaze.renderWithData(Template[templateName], data, parentNode)    // 14
			                                                                             // 15
			var domRange = view._domrange // TODO: Don't violate against the public API.
			                                                                             // 17
			var $modal = domRange.$('.modal')                                            // 18
			                                                                             // 19
			$modal.on('shown.bs.modal', function(event){                                 // 20
				$modal.find('[autofocus]').focus()                                          // 21
			})                                                                           // 22
			                                                                             // 23
			$modal.on('hidden.bs.modal', function(event){                                // 24
				Blaze.remove(view)                                                          // 25
				$soloModal = null                                                           // 26
			})                                                                           // 27
			                                                                             // 28
			$soloModal = $modal                                                          // 29
			                                                                             // 30
			$modal.modal(options ? options : {})                                         // 31
			                                                                             // 32
		}                                                                             // 33
		                                                                              // 34
	},                                                                             // 35
	                                                                               // 36
	hide: function(/* optional */ template){                                       // 37
		                                                                              // 38
		if(template instanceof Blaze.TemplateInstance){                               // 39
			                                                                             // 40
			template.$('.modal').modal('hide')                                           // 41
			                                                                             // 42
		}else if($soloModal != null){                                                 // 43
			                                                                             // 44
			$soloModal.modal('hide')                                                     // 45
			                                                                             // 46
		}                                                                             // 47
		                                                                              // 48
	}                                                                              // 49
	                                                                               // 50
}                                                                               // 51
                                                                                // 52
//////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['peppelg:bootstrap-3-modal'] = {}, {
  Modal: Modal
});

})();
