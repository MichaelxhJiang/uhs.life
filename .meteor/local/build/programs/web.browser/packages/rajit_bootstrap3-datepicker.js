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
var $ = Package.jquery.$;
var jQuery = Package.jquery.jQuery;

(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rajit_bootstrap3-datepicker/lib/js/bootstrap-datepicker.js                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/*!                                                                                                                    // 1
 * Datepicker for Bootstrap v1.7.1 (https://github.com/uxsolutions/bootstrap-datepicker)                               // 2
 *                                                                                                                     // 3
 * Licensed under the Apache License v2.0 (http://www.apache.org/licenses/LICENSE-2.0)                                 // 4
 */                                                                                                                    // 5
                                                                                                                       // 6
(function(factory){                                                                                                    // 7
    if (typeof define === "function" && define.amd) {                                                                  // 8
        define(["jquery"], factory);                                                                                   // 9
    } else if (typeof exports === 'object') {                                                                          // 10
        factory(require('jquery'));                                                                                    // 11
    } else {                                                                                                           // 12
        factory(jQuery);                                                                                               // 13
    }                                                                                                                  // 14
}(function($, undefined){                                                                                              // 15
	function UTCDate(){                                                                                                   // 16
		return new Date(Date.UTC.apply(Date, arguments));                                                                    // 17
	}                                                                                                                     // 18
	function UTCToday(){                                                                                                  // 19
		var today = new Date();                                                                                              // 20
		return UTCDate(today.getFullYear(), today.getMonth(), today.getDate());                                              // 21
	}                                                                                                                     // 22
	function isUTCEquals(date1, date2) {                                                                                  // 23
		return (                                                                                                             // 24
			date1.getUTCFullYear() === date2.getUTCFullYear() &&                                                                // 25
			date1.getUTCMonth() === date2.getUTCMonth() &&                                                                      // 26
			date1.getUTCDate() === date2.getUTCDate()                                                                           // 27
		);                                                                                                                   // 28
	}                                                                                                                     // 29
	function alias(method, deprecationMsg){                                                                               // 30
		return function(){                                                                                                   // 31
			if (deprecationMsg !== undefined) {                                                                                 // 32
				$.fn.datepicker.deprecated(deprecationMsg);                                                                        // 33
			}                                                                                                                   // 34
                                                                                                                       // 35
			return this[method].apply(this, arguments);                                                                         // 36
		};                                                                                                                   // 37
	}                                                                                                                     // 38
	function isValidDate(d) {                                                                                             // 39
		return d && !isNaN(d.getTime());                                                                                     // 40
	}                                                                                                                     // 41
                                                                                                                       // 42
	var DateArray = (function(){                                                                                          // 43
		var extras = {                                                                                                       // 44
			get: function(i){                                                                                                   // 45
				return this.slice(i)[0];                                                                                           // 46
			},                                                                                                                  // 47
			contains: function(d){                                                                                              // 48
				// Array.indexOf is not cross-browser;                                                                             // 49
				// $.inArray doesn't work with Dates                                                                               // 50
				var val = d && d.valueOf();                                                                                        // 51
				for (var i=0, l=this.length; i < l; i++)                                                                           // 52
          // Use date arithmetic to allow dates with different times to match                                          // 53
          if (0 <= this[i].valueOf() - val && this[i].valueOf() - val < 1000*60*60*24)                                 // 54
						return i;                                                                                                        // 55
				return -1;                                                                                                         // 56
			},                                                                                                                  // 57
			remove: function(i){                                                                                                // 58
				this.splice(i,1);                                                                                                  // 59
			},                                                                                                                  // 60
			replace: function(new_array){                                                                                       // 61
				if (!new_array)                                                                                                    // 62
					return;                                                                                                           // 63
				if (!$.isArray(new_array))                                                                                         // 64
					new_array = [new_array];                                                                                          // 65
				this.clear();                                                                                                      // 66
				this.push.apply(this, new_array);                                                                                  // 67
			},                                                                                                                  // 68
			clear: function(){                                                                                                  // 69
				this.length = 0;                                                                                                   // 70
			},                                                                                                                  // 71
			copy: function(){                                                                                                   // 72
				var a = new DateArray();                                                                                           // 73
				a.replace(this);                                                                                                   // 74
				return a;                                                                                                          // 75
			}                                                                                                                   // 76
		};                                                                                                                   // 77
                                                                                                                       // 78
		return function(){                                                                                                   // 79
			var a = [];                                                                                                         // 80
			a.push.apply(a, arguments);                                                                                         // 81
			$.extend(a, extras);                                                                                                // 82
			return a;                                                                                                           // 83
		};                                                                                                                   // 84
	})();                                                                                                                 // 85
                                                                                                                       // 86
                                                                                                                       // 87
	// Picker object                                                                                                      // 88
                                                                                                                       // 89
	var Datepicker = function(element, options){                                                                          // 90
		$.data(element, 'datepicker', this);                                                                                 // 91
		this._process_options(options);                                                                                      // 92
                                                                                                                       // 93
		this.dates = new DateArray();                                                                                        // 94
		this.viewDate = this.o.defaultViewDate;                                                                              // 95
		this.focusDate = null;                                                                                               // 96
                                                                                                                       // 97
		this.element = $(element);                                                                                           // 98
		this.isInput = this.element.is('input');                                                                             // 99
		this.inputField = this.isInput ? this.element : this.element.find('input');                                          // 100
		this.component = this.element.hasClass('date') ? this.element.find('.add-on, .input-group-addon, .btn') : false;     // 101
		if (this.component && this.component.length === 0)                                                                   // 102
			this.component = false;                                                                                             // 103
		this.isInline = !this.component && this.element.is('div');                                                           // 104
                                                                                                                       // 105
		this.picker = $(DPGlobal.template);                                                                                  // 106
                                                                                                                       // 107
		// Checking templates and inserting                                                                                  // 108
		if (this._check_template(this.o.templates.leftArrow)) {                                                              // 109
			this.picker.find('.prev').html(this.o.templates.leftArrow);                                                         // 110
		}                                                                                                                    // 111
                                                                                                                       // 112
		if (this._check_template(this.o.templates.rightArrow)) {                                                             // 113
			this.picker.find('.next').html(this.o.templates.rightArrow);                                                        // 114
		}                                                                                                                    // 115
                                                                                                                       // 116
		this._buildEvents();                                                                                                 // 117
		this._attachEvents();                                                                                                // 118
                                                                                                                       // 119
		if (this.isInline){                                                                                                  // 120
			this.picker.addClass('datepicker-inline').appendTo(this.element);                                                   // 121
		}                                                                                                                    // 122
		else {                                                                                                               // 123
			this.picker.addClass('datepicker-dropdown dropdown-menu');                                                          // 124
		}                                                                                                                    // 125
                                                                                                                       // 126
		if (this.o.rtl){                                                                                                     // 127
			this.picker.addClass('datepicker-rtl');                                                                             // 128
		}                                                                                                                    // 129
                                                                                                                       // 130
		if (this.o.calendarWeeks) {                                                                                          // 131
			this.picker.find('.datepicker-days .datepicker-switch, thead .datepicker-title, tfoot .today, tfoot .clear')        // 132
				.attr('colspan', function(i, val){                                                                                 // 133
					return Number(val) + 1;                                                                                           // 134
				});                                                                                                                // 135
		}                                                                                                                    // 136
                                                                                                                       // 137
		this._process_options({                                                                                              // 138
			startDate: this._o.startDate,                                                                                       // 139
			endDate: this._o.endDate,                                                                                           // 140
			daysOfWeekDisabled: this.o.daysOfWeekDisabled,                                                                      // 141
			daysOfWeekHighlighted: this.o.daysOfWeekHighlighted,                                                                // 142
			datesDisabled: this.o.datesDisabled                                                                                 // 143
		});                                                                                                                  // 144
                                                                                                                       // 145
		this._allow_update = false;                                                                                          // 146
		this.setViewMode(this.o.startView);                                                                                  // 147
		this._allow_update = true;                                                                                           // 148
                                                                                                                       // 149
		this.fillDow();                                                                                                      // 150
		this.fillMonths();                                                                                                   // 151
                                                                                                                       // 152
		this.update();                                                                                                       // 153
                                                                                                                       // 154
		if (this.isInline){                                                                                                  // 155
			this.show();                                                                                                        // 156
		}                                                                                                                    // 157
	};                                                                                                                    // 158
                                                                                                                       // 159
	Datepicker.prototype = {                                                                                              // 160
		constructor: Datepicker,                                                                                             // 161
                                                                                                                       // 162
		_resolveViewName: function(view){                                                                                    // 163
			$.each(DPGlobal.viewModes, function(i, viewMode){                                                                   // 164
				if (view === i || $.inArray(view, viewMode.names) !== -1){                                                         // 165
					view = i;                                                                                                         // 166
					return false;                                                                                                     // 167
				}                                                                                                                  // 168
			});                                                                                                                 // 169
                                                                                                                       // 170
			return view;                                                                                                        // 171
		},                                                                                                                   // 172
                                                                                                                       // 173
		_resolveDaysOfWeek: function(daysOfWeek){                                                                            // 174
			if (!$.isArray(daysOfWeek))                                                                                         // 175
				daysOfWeek = daysOfWeek.split(/[,\s]*/);                                                                           // 176
			return $.map(daysOfWeek, Number);                                                                                   // 177
		},                                                                                                                   // 178
                                                                                                                       // 179
		_check_template: function(tmp){                                                                                      // 180
			try {                                                                                                               // 181
				// If empty                                                                                                        // 182
				if (tmp === undefined || tmp === "") {                                                                             // 183
					return false;                                                                                                     // 184
				}                                                                                                                  // 185
				// If no html, everything ok                                                                                       // 186
				if ((tmp.match(/[<>]/g) || []).length <= 0) {                                                                      // 187
					return true;                                                                                                      // 188
				}                                                                                                                  // 189
				// Checking if html is fine                                                                                        // 190
				var jDom = $(tmp);                                                                                                 // 191
				return jDom.length > 0;                                                                                            // 192
			}                                                                                                                   // 193
			catch (ex) {                                                                                                        // 194
				return false;                                                                                                      // 195
			}                                                                                                                   // 196
		},                                                                                                                   // 197
                                                                                                                       // 198
		_process_options: function(opts){                                                                                    // 199
			// Store raw options for reference                                                                                  // 200
			this._o = $.extend({}, this._o, opts);                                                                              // 201
			// Processed options                                                                                                // 202
			var o = this.o = $.extend({}, this._o);                                                                             // 203
                                                                                                                       // 204
			// Check if "de-DE" style date is available, if not language should                                                 // 205
			// fallback to 2 letter code eg "de"                                                                                // 206
			var lang = o.language;                                                                                              // 207
			if (!dates[lang]){                                                                                                  // 208
				lang = lang.split('-')[0];                                                                                         // 209
				if (!dates[lang])                                                                                                  // 210
					lang = defaults.language;                                                                                         // 211
			}                                                                                                                   // 212
			o.language = lang;                                                                                                  // 213
                                                                                                                       // 214
			// Retrieve view index from any aliases                                                                             // 215
			o.startView = this._resolveViewName(o.startView);                                                                   // 216
			o.minViewMode = this._resolveViewName(o.minViewMode);                                                               // 217
			o.maxViewMode = this._resolveViewName(o.maxViewMode);                                                               // 218
                                                                                                                       // 219
			// Check view is between min and max                                                                                // 220
			o.startView = Math.max(this.o.minViewMode, Math.min(this.o.maxViewMode, o.startView));                              // 221
                                                                                                                       // 222
			// true, false, or Number > 0                                                                                       // 223
			if (o.multidate !== true){                                                                                          // 224
				o.multidate = Number(o.multidate) || false;                                                                        // 225
				if (o.multidate !== false)                                                                                         // 226
					o.multidate = Math.max(0, o.multidate);                                                                           // 227
			}                                                                                                                   // 228
			o.multidateSeparator = String(o.multidateSeparator);                                                                // 229
                                                                                                                       // 230
			o.weekStart %= 7;                                                                                                   // 231
			o.weekEnd = (o.weekStart + 6) % 7;                                                                                  // 232
                                                                                                                       // 233
			var format = DPGlobal.parseFormat(o.format);                                                                        // 234
			if (o.startDate !== -Infinity){                                                                                     // 235
				if (!!o.startDate){                                                                                                // 236
					if (o.startDate instanceof Date)                                                                                  // 237
						o.startDate = this._local_to_utc(this._zero_time(o.startDate));                                                  // 238
					else                                                                                                              // 239
						o.startDate = DPGlobal.parseDate(o.startDate, format, o.language, o.assumeNearbyYear);                           // 240
				}                                                                                                                  // 241
				else {                                                                                                             // 242
					o.startDate = -Infinity;                                                                                          // 243
				}                                                                                                                  // 244
			}                                                                                                                   // 245
			if (o.endDate !== Infinity){                                                                                        // 246
				if (!!o.endDate){                                                                                                  // 247
					if (o.endDate instanceof Date)                                                                                    // 248
						o.endDate = this._local_to_utc(this._zero_time(o.endDate));                                                      // 249
					else                                                                                                              // 250
						o.endDate = DPGlobal.parseDate(o.endDate, format, o.language, o.assumeNearbyYear);                               // 251
				}                                                                                                                  // 252
				else {                                                                                                             // 253
					o.endDate = Infinity;                                                                                             // 254
				}                                                                                                                  // 255
			}                                                                                                                   // 256
                                                                                                                       // 257
			o.daysOfWeekDisabled = this._resolveDaysOfWeek(o.daysOfWeekDisabled||[]);                                           // 258
			o.daysOfWeekHighlighted = this._resolveDaysOfWeek(o.daysOfWeekHighlighted||[]);                                     // 259
                                                                                                                       // 260
			o.datesDisabled = o.datesDisabled||[];                                                                              // 261
			if (!$.isArray(o.datesDisabled)) {                                                                                  // 262
				o.datesDisabled = o.datesDisabled.split(',');                                                                      // 263
			}                                                                                                                   // 264
			o.datesDisabled = $.map(o.datesDisabled, function(d){                                                               // 265
				return DPGlobal.parseDate(d, format, o.language, o.assumeNearbyYear);                                              // 266
			});                                                                                                                 // 267
                                                                                                                       // 268
			var plc = String(o.orientation).toLowerCase().split(/\s+/g),                                                        // 269
				_plc = o.orientation.toLowerCase();                                                                                // 270
			plc = $.grep(plc, function(word){                                                                                   // 271
				return /^auto|left|right|top|bottom$/.test(word);                                                                  // 272
			});                                                                                                                 // 273
			o.orientation = {x: 'auto', y: 'auto'};                                                                             // 274
			if (!_plc || _plc === 'auto')                                                                                       // 275
				; // no action                                                                                                     // 276
			else if (plc.length === 1){                                                                                         // 277
				switch (plc[0]){                                                                                                   // 278
					case 'top':                                                                                                       // 279
					case 'bottom':                                                                                                    // 280
						o.orientation.y = plc[0];                                                                                        // 281
						break;                                                                                                           // 282
					case 'left':                                                                                                      // 283
					case 'right':                                                                                                     // 284
						o.orientation.x = plc[0];                                                                                        // 285
						break;                                                                                                           // 286
				}                                                                                                                  // 287
			}                                                                                                                   // 288
			else {                                                                                                              // 289
				_plc = $.grep(plc, function(word){                                                                                 // 290
					return /^left|right$/.test(word);                                                                                 // 291
				});                                                                                                                // 292
				o.orientation.x = _plc[0] || 'auto';                                                                               // 293
                                                                                                                       // 294
				_plc = $.grep(plc, function(word){                                                                                 // 295
					return /^top|bottom$/.test(word);                                                                                 // 296
				});                                                                                                                // 297
				o.orientation.y = _plc[0] || 'auto';                                                                               // 298
			}                                                                                                                   // 299
			if (o.defaultViewDate instanceof Date || typeof o.defaultViewDate === 'string') {                                   // 300
				o.defaultViewDate = DPGlobal.parseDate(o.defaultViewDate, format, o.language, o.assumeNearbyYear);                 // 301
			} else if (o.defaultViewDate) {                                                                                     // 302
				var year = o.defaultViewDate.year || new Date().getFullYear();                                                     // 303
				var month = o.defaultViewDate.month || 0;                                                                          // 304
				var day = o.defaultViewDate.day || 1;                                                                              // 305
				o.defaultViewDate = UTCDate(year, month, day);                                                                     // 306
			} else {                                                                                                            // 307
				o.defaultViewDate = UTCToday();                                                                                    // 308
			}                                                                                                                   // 309
		},                                                                                                                   // 310
		_events: [],                                                                                                         // 311
		_secondaryEvents: [],                                                                                                // 312
		_applyEvents: function(evs){                                                                                         // 313
			for (var i=0, el, ch, ev; i < evs.length; i++){                                                                     // 314
				el = evs[i][0];                                                                                                    // 315
				if (evs[i].length === 2){                                                                                          // 316
					ch = undefined;                                                                                                   // 317
					ev = evs[i][1];                                                                                                   // 318
				} else if (evs[i].length === 3){                                                                                   // 319
					ch = evs[i][1];                                                                                                   // 320
					ev = evs[i][2];                                                                                                   // 321
				}                                                                                                                  // 322
				el.on(ev, ch);                                                                                                     // 323
			}                                                                                                                   // 324
		},                                                                                                                   // 325
		_unapplyEvents: function(evs){                                                                                       // 326
			for (var i=0, el, ev, ch; i < evs.length; i++){                                                                     // 327
				el = evs[i][0];                                                                                                    // 328
				if (evs[i].length === 2){                                                                                          // 329
					ch = undefined;                                                                                                   // 330
					ev = evs[i][1];                                                                                                   // 331
				} else if (evs[i].length === 3){                                                                                   // 332
					ch = evs[i][1];                                                                                                   // 333
					ev = evs[i][2];                                                                                                   // 334
				}                                                                                                                  // 335
				el.off(ev, ch);                                                                                                    // 336
			}                                                                                                                   // 337
		},                                                                                                                   // 338
		_buildEvents: function(){                                                                                            // 339
            var events = {                                                                                             // 340
                keyup: $.proxy(function(e){                                                                            // 341
                    if ($.inArray(e.keyCode, [27, 37, 39, 38, 40, 32, 13, 9]) === -1)                                  // 342
                        this.update();                                                                                 // 343
                }, this),                                                                                              // 344
                keydown: $.proxy(this.keydown, this),                                                                  // 345
                paste: $.proxy(this.paste, this)                                                                       // 346
            };                                                                                                         // 347
                                                                                                                       // 348
            if (this.o.showOnFocus === true) {                                                                         // 349
                events.focus = $.proxy(this.show, this);                                                               // 350
            }                                                                                                          // 351
                                                                                                                       // 352
            if (this.isInput) { // single input                                                                        // 353
                this._events = [                                                                                       // 354
                    [this.element, events]                                                                             // 355
                ];                                                                                                     // 356
            }                                                                                                          // 357
            // component: input + button                                                                               // 358
            else if (this.component && this.inputField.length) {                                                       // 359
                this._events = [                                                                                       // 360
                    // For components that are not readonly, allow keyboard nav                                        // 361
                    [this.inputField, events],                                                                         // 362
                    [this.component, {                                                                                 // 363
                        click: $.proxy(this.show, this)                                                                // 364
                    }]                                                                                                 // 365
                ];                                                                                                     // 366
            }                                                                                                          // 367
			else {                                                                                                              // 368
				this._events = [                                                                                                   // 369
					[this.element, {                                                                                                  // 370
						click: $.proxy(this.show, this),                                                                                 // 371
						keydown: $.proxy(this.keydown, this)                                                                             // 372
					}]                                                                                                                // 373
				];                                                                                                                 // 374
			}                                                                                                                   // 375
			this._events.push(                                                                                                  // 376
				// Component: listen for blur on element descendants                                                               // 377
				[this.element, '*', {                                                                                              // 378
					blur: $.proxy(function(e){                                                                                        // 379
						this._focused_from = e.target;                                                                                   // 380
					}, this)                                                                                                          // 381
				}],                                                                                                                // 382
				// Input: listen for blur on element                                                                               // 383
				[this.element, {                                                                                                   // 384
					blur: $.proxy(function(e){                                                                                        // 385
						this._focused_from = e.target;                                                                                   // 386
					}, this)                                                                                                          // 387
				}]                                                                                                                 // 388
			);                                                                                                                  // 389
                                                                                                                       // 390
			if (this.o.immediateUpdates) {                                                                                      // 391
				// Trigger input updates immediately on changed year/month                                                         // 392
				this._events.push([this.element, {                                                                                 // 393
					'changeYear changeMonth': $.proxy(function(e){                                                                    // 394
						this.update(e.date);                                                                                             // 395
					}, this)                                                                                                          // 396
				}]);                                                                                                               // 397
			}                                                                                                                   // 398
                                                                                                                       // 399
			this._secondaryEvents = [                                                                                           // 400
				[this.picker, {                                                                                                    // 401
					click: $.proxy(this.click, this)                                                                                  // 402
				}],                                                                                                                // 403
				[this.picker, '.prev, .next', {                                                                                    // 404
					click: $.proxy(this.navArrowsClick, this)                                                                         // 405
				}],                                                                                                                // 406
				[this.picker, '.day:not(.disabled)', {                                                                             // 407
					click: $.proxy(this.dayCellClick, this)                                                                           // 408
				}],                                                                                                                // 409
				[$(window), {                                                                                                      // 410
					resize: $.proxy(this.place, this)                                                                                 // 411
				}],                                                                                                                // 412
				[$(document), {                                                                                                    // 413
					'mousedown touchstart': $.proxy(function(e){                                                                      // 414
						// Clicked outside the datepicker, hide it                                                                       // 415
						if (!(                                                                                                           // 416
							this.element.is(e.target) ||                                                                                    // 417
							this.element.find(e.target).length ||                                                                           // 418
							this.picker.is(e.target) ||                                                                                     // 419
							this.picker.find(e.target).length ||                                                                            // 420
							this.isInline                                                                                                   // 421
						)){                                                                                                              // 422
							this.hide();                                                                                                    // 423
						}                                                                                                                // 424
					}, this)                                                                                                          // 425
				}]                                                                                                                 // 426
			];                                                                                                                  // 427
		},                                                                                                                   // 428
		_attachEvents: function(){                                                                                           // 429
			this._detachEvents();                                                                                               // 430
			this._applyEvents(this._events);                                                                                    // 431
		},                                                                                                                   // 432
		_detachEvents: function(){                                                                                           // 433
			this._unapplyEvents(this._events);                                                                                  // 434
		},                                                                                                                   // 435
		_attachSecondaryEvents: function(){                                                                                  // 436
			this._detachSecondaryEvents();                                                                                      // 437
			this._applyEvents(this._secondaryEvents);                                                                           // 438
		},                                                                                                                   // 439
		_detachSecondaryEvents: function(){                                                                                  // 440
			this._unapplyEvents(this._secondaryEvents);                                                                         // 441
		},                                                                                                                   // 442
		_trigger: function(event, altdate){                                                                                  // 443
			var date = altdate || this.dates.get(-1),                                                                           // 444
				local_date = this._utc_to_local(date);                                                                             // 445
                                                                                                                       // 446
			this.element.trigger({                                                                                              // 447
				type: event,                                                                                                       // 448
				date: local_date,                                                                                                  // 449
				viewMode: this.viewMode,                                                                                           // 450
				dates: $.map(this.dates, this._utc_to_local),                                                                      // 451
				format: $.proxy(function(ix, format){                                                                              // 452
					if (arguments.length === 0){                                                                                      // 453
						ix = this.dates.length - 1;                                                                                      // 454
						format = this.o.format;                                                                                          // 455
					} else if (typeof ix === 'string'){                                                                               // 456
						format = ix;                                                                                                     // 457
						ix = this.dates.length - 1;                                                                                      // 458
					}                                                                                                                 // 459
					format = format || this.o.format;                                                                                 // 460
					var date = this.dates.get(ix);                                                                                    // 461
					return DPGlobal.formatDate(date, format, this.o.language);                                                        // 462
				}, this)                                                                                                           // 463
			});                                                                                                                 // 464
		},                                                                                                                   // 465
                                                                                                                       // 466
		show: function(){                                                                                                    // 467
			if (this.inputField.prop('disabled') || (this.inputField.prop('readonly') && this.o.enableOnReadonly === false))    // 468
				return;                                                                                                            // 469
			if (!this.isInline)                                                                                                 // 470
				this.picker.appendTo(this.o.container);                                                                            // 471
			this.place();                                                                                                       // 472
			this.picker.show();                                                                                                 // 473
			this._attachSecondaryEvents();                                                                                      // 474
			this._trigger('show');                                                                                              // 475
			if ((window.navigator.msMaxTouchPoints || 'ontouchstart' in document) && this.o.disableTouchKeyboard) {             // 476
				$(this.element).blur();                                                                                            // 477
			}                                                                                                                   // 478
			return this;                                                                                                        // 479
		},                                                                                                                   // 480
                                                                                                                       // 481
		hide: function(){                                                                                                    // 482
			if (this.isInline || !this.picker.is(':visible'))                                                                   // 483
				return this;                                                                                                       // 484
			this.focusDate = null;                                                                                              // 485
			this.picker.hide().detach();                                                                                        // 486
			this._detachSecondaryEvents();                                                                                      // 487
			this.setViewMode(this.o.startView);                                                                                 // 488
                                                                                                                       // 489
			if (this.o.forceParse && this.inputField.val())                                                                     // 490
				this.setValue();                                                                                                   // 491
			this._trigger('hide');                                                                                              // 492
			return this;                                                                                                        // 493
		},                                                                                                                   // 494
                                                                                                                       // 495
		destroy: function(){                                                                                                 // 496
			this.hide();                                                                                                        // 497
			this._detachEvents();                                                                                               // 498
			this._detachSecondaryEvents();                                                                                      // 499
			this.picker.remove();                                                                                               // 500
			delete this.element.data().datepicker;                                                                              // 501
			if (!this.isInput){                                                                                                 // 502
				delete this.element.data().date;                                                                                   // 503
			}                                                                                                                   // 504
			return this;                                                                                                        // 505
		},                                                                                                                   // 506
                                                                                                                       // 507
		paste: function(e){                                                                                                  // 508
			var dateString;                                                                                                     // 509
			if (e.originalEvent.clipboardData && e.originalEvent.clipboardData.types                                            // 510
				&& $.inArray('text/plain', e.originalEvent.clipboardData.types) !== -1) {                                          // 511
				dateString = e.originalEvent.clipboardData.getData('text/plain');                                                  // 512
			} else if (window.clipboardData) {                                                                                  // 513
				dateString = window.clipboardData.getData('Text');                                                                 // 514
			} else {                                                                                                            // 515
				return;                                                                                                            // 516
			}                                                                                                                   // 517
			this.setDate(dateString);                                                                                           // 518
			this.update();                                                                                                      // 519
			e.preventDefault();                                                                                                 // 520
		},                                                                                                                   // 521
                                                                                                                       // 522
		_utc_to_local: function(utc){                                                                                        // 523
			if (!utc) {                                                                                                         // 524
				return utc;                                                                                                        // 525
			}                                                                                                                   // 526
                                                                                                                       // 527
			var local = new Date(utc.getTime() + (utc.getTimezoneOffset() * 60000));                                            // 528
                                                                                                                       // 529
			if (local.getTimezoneOffset() !== utc.getTimezoneOffset()) {                                                        // 530
				local = new Date(utc.getTime() + (local.getTimezoneOffset() * 60000));                                             // 531
			}                                                                                                                   // 532
                                                                                                                       // 533
			return local;                                                                                                       // 534
		},                                                                                                                   // 535
		_local_to_utc: function(local){                                                                                      // 536
			return local && new Date(local.getTime() - (local.getTimezoneOffset()*60000));                                      // 537
		},                                                                                                                   // 538
		_zero_time: function(local){                                                                                         // 539
			return local && new Date(local.getFullYear(), local.getMonth(), local.getDate());                                   // 540
		},                                                                                                                   // 541
		_zero_utc_time: function(utc){                                                                                       // 542
			return utc && UTCDate(utc.getUTCFullYear(), utc.getUTCMonth(), utc.getUTCDate());                                   // 543
		},                                                                                                                   // 544
                                                                                                                       // 545
		getDates: function(){                                                                                                // 546
			return $.map(this.dates, this._utc_to_local);                                                                       // 547
		},                                                                                                                   // 548
                                                                                                                       // 549
		getUTCDates: function(){                                                                                             // 550
			return $.map(this.dates, function(d){                                                                               // 551
				return new Date(d);                                                                                                // 552
			});                                                                                                                 // 553
		},                                                                                                                   // 554
                                                                                                                       // 555
		getDate: function(){                                                                                                 // 556
			return this._utc_to_local(this.getUTCDate());                                                                       // 557
		},                                                                                                                   // 558
                                                                                                                       // 559
		getUTCDate: function(){                                                                                              // 560
			var selected_date = this.dates.get(-1);                                                                             // 561
			if (selected_date !== undefined) {                                                                                  // 562
				return new Date(selected_date);                                                                                    // 563
			} else {                                                                                                            // 564
				return null;                                                                                                       // 565
			}                                                                                                                   // 566
		},                                                                                                                   // 567
                                                                                                                       // 568
		clearDates: function(){                                                                                              // 569
			this.inputField.val('');                                                                                            // 570
			this.update();                                                                                                      // 571
			this._trigger('changeDate');                                                                                        // 572
                                                                                                                       // 573
			if (this.o.autoclose) {                                                                                             // 574
				this.hide();                                                                                                       // 575
			}                                                                                                                   // 576
		},                                                                                                                   // 577
                                                                                                                       // 578
		setDates: function(){                                                                                                // 579
			var args = $.isArray(arguments[0]) ? arguments[0] : arguments;                                                      // 580
			this.update.apply(this, args);                                                                                      // 581
			this._trigger('changeDate');                                                                                        // 582
			this.setValue();                                                                                                    // 583
			return this;                                                                                                        // 584
		},                                                                                                                   // 585
                                                                                                                       // 586
		setUTCDates: function(){                                                                                             // 587
			var args = $.isArray(arguments[0]) ? arguments[0] : arguments;                                                      // 588
			this.setDates.apply(this, $.map(args, this._utc_to_local));                                                         // 589
			return this;                                                                                                        // 590
		},                                                                                                                   // 591
                                                                                                                       // 592
		setDate: alias('setDates'),                                                                                          // 593
		setUTCDate: alias('setUTCDates'),                                                                                    // 594
		remove: alias('destroy', 'Method `remove` is deprecated and will be removed in version 2.0. Use `destroy` instead'),
                                                                                                                       // 596
		setValue: function(){                                                                                                // 597
			var formatted = this.getFormattedDate();                                                                            // 598
			this.inputField.val(formatted);                                                                                     // 599
			return this;                                                                                                        // 600
		},                                                                                                                   // 601
                                                                                                                       // 602
		getFormattedDate: function(format){                                                                                  // 603
			if (format === undefined)                                                                                           // 604
				format = this.o.format;                                                                                            // 605
                                                                                                                       // 606
			var lang = this.o.language;                                                                                         // 607
			return $.map(this.dates, function(d){                                                                               // 608
				return DPGlobal.formatDate(d, format, lang);                                                                       // 609
			}).join(this.o.multidateSeparator);                                                                                 // 610
		},                                                                                                                   // 611
                                                                                                                       // 612
		getStartDate: function(){                                                                                            // 613
			return this.o.startDate;                                                                                            // 614
		},                                                                                                                   // 615
                                                                                                                       // 616
		setStartDate: function(startDate){                                                                                   // 617
			this._process_options({startDate: startDate});                                                                      // 618
			this.update();                                                                                                      // 619
			this.updateNavArrows();                                                                                             // 620
			return this;                                                                                                        // 621
		},                                                                                                                   // 622
                                                                                                                       // 623
		getEndDate: function(){                                                                                              // 624
			return this.o.endDate;                                                                                              // 625
		},                                                                                                                   // 626
                                                                                                                       // 627
		setEndDate: function(endDate){                                                                                       // 628
			this._process_options({endDate: endDate});                                                                          // 629
			this.update();                                                                                                      // 630
			this.updateNavArrows();                                                                                             // 631
			return this;                                                                                                        // 632
		},                                                                                                                   // 633
                                                                                                                       // 634
		setDaysOfWeekDisabled: function(daysOfWeekDisabled){                                                                 // 635
			this._process_options({daysOfWeekDisabled: daysOfWeekDisabled});                                                    // 636
			this.update();                                                                                                      // 637
			return this;                                                                                                        // 638
		},                                                                                                                   // 639
                                                                                                                       // 640
		setDaysOfWeekHighlighted: function(daysOfWeekHighlighted){                                                           // 641
			this._process_options({daysOfWeekHighlighted: daysOfWeekHighlighted});                                              // 642
			this.update();                                                                                                      // 643
			return this;                                                                                                        // 644
		},                                                                                                                   // 645
                                                                                                                       // 646
		setDatesDisabled: function(datesDisabled){                                                                           // 647
			this._process_options({datesDisabled: datesDisabled});                                                              // 648
			this.update();                                                                                                      // 649
			return this;                                                                                                        // 650
		},                                                                                                                   // 651
                                                                                                                       // 652
		place: function(){                                                                                                   // 653
			if (this.isInline)                                                                                                  // 654
				return this;                                                                                                       // 655
			var calendarWidth = this.picker.outerWidth(),                                                                       // 656
				calendarHeight = this.picker.outerHeight(),                                                                        // 657
				visualPadding = 10,                                                                                                // 658
				container = $(this.o.container),                                                                                   // 659
				windowWidth = container.width(),                                                                                   // 660
				scrollTop = this.o.container === 'body' ? $(document).scrollTop() : container.scrollTop(),                         // 661
				appendOffset = container.offset();                                                                                 // 662
                                                                                                                       // 663
			var parentsZindex = [0];                                                                                            // 664
			this.element.parents().each(function(){                                                                             // 665
				var itemZIndex = $(this).css('z-index');                                                                           // 666
				if (itemZIndex !== 'auto' && Number(itemZIndex) !== 0) parentsZindex.push(Number(itemZIndex));                     // 667
			});                                                                                                                 // 668
			var zIndex = Math.max.apply(Math, parentsZindex) + this.o.zIndexOffset;                                             // 669
			var offset = this.component ? this.component.parent().offset() : this.element.offset();                             // 670
			var height = this.component ? this.component.outerHeight(true) : this.element.outerHeight(false);                   // 671
			var width = this.component ? this.component.outerWidth(true) : this.element.outerWidth(false);                      // 672
			var left = offset.left - appendOffset.left;                                                                         // 673
			var top = offset.top - appendOffset.top;                                                                            // 674
                                                                                                                       // 675
			if (this.o.container !== 'body') {                                                                                  // 676
				top += scrollTop;                                                                                                  // 677
			}                                                                                                                   // 678
                                                                                                                       // 679
			this.picker.removeClass(                                                                                            // 680
				'datepicker-orient-top datepicker-orient-bottom '+                                                                 // 681
				'datepicker-orient-right datepicker-orient-left'                                                                   // 682
			);                                                                                                                  // 683
                                                                                                                       // 684
			if (this.o.orientation.x !== 'auto'){                                                                               // 685
				this.picker.addClass('datepicker-orient-' + this.o.orientation.x);                                                 // 686
				if (this.o.orientation.x === 'right')                                                                              // 687
					left -= calendarWidth - width;                                                                                    // 688
			}                                                                                                                   // 689
			// auto x orientation is best-placement: if it crosses a window                                                     // 690
			// edge, fudge it sideways                                                                                          // 691
			else {                                                                                                              // 692
				if (offset.left < 0) {                                                                                             // 693
					// component is outside the window on the left side. Move it into visible range                                   // 694
					this.picker.addClass('datepicker-orient-left');                                                                   // 695
					left -= offset.left - visualPadding;                                                                              // 696
				} else if (left + calendarWidth > windowWidth) {                                                                   // 697
					// the calendar passes the widow right edge. Align it to component right side                                     // 698
					this.picker.addClass('datepicker-orient-right');                                                                  // 699
					left += width - calendarWidth;                                                                                    // 700
				} else {                                                                                                           // 701
					if (this.o.rtl) {                                                                                                 // 702
						// Default to right                                                                                              // 703
						this.picker.addClass('datepicker-orient-right');                                                                 // 704
					} else {                                                                                                          // 705
						// Default to left                                                                                               // 706
						this.picker.addClass('datepicker-orient-left');                                                                  // 707
					}                                                                                                                 // 708
				}                                                                                                                  // 709
			}                                                                                                                   // 710
                                                                                                                       // 711
			// auto y orientation is best-situation: top or bottom, no fudging,                                                 // 712
			// decision based on which shows more of the calendar                                                               // 713
			var yorient = this.o.orientation.y,                                                                                 // 714
				top_overflow;                                                                                                      // 715
			if (yorient === 'auto'){                                                                                            // 716
				top_overflow = -scrollTop + top - calendarHeight;                                                                  // 717
				yorient = top_overflow < 0 ? 'bottom' : 'top';                                                                     // 718
			}                                                                                                                   // 719
                                                                                                                       // 720
			this.picker.addClass('datepicker-orient-' + yorient);                                                               // 721
			if (yorient === 'top')                                                                                              // 722
				top -= calendarHeight + parseInt(this.picker.css('padding-top'));                                                  // 723
			else                                                                                                                // 724
				top += height;                                                                                                     // 725
                                                                                                                       // 726
			if (this.o.rtl) {                                                                                                   // 727
				var right = windowWidth - (left + width);                                                                          // 728
				this.picker.css({                                                                                                  // 729
					top: top,                                                                                                         // 730
					right: right,                                                                                                     // 731
					zIndex: zIndex                                                                                                    // 732
				});                                                                                                                // 733
			} else {                                                                                                            // 734
				this.picker.css({                                                                                                  // 735
					top: top,                                                                                                         // 736
					left: left,                                                                                                       // 737
					zIndex: zIndex                                                                                                    // 738
				});                                                                                                                // 739
			}                                                                                                                   // 740
			return this;                                                                                                        // 741
		},                                                                                                                   // 742
                                                                                                                       // 743
		_allow_update: true,                                                                                                 // 744
		update: function(){                                                                                                  // 745
			if (!this._allow_update)                                                                                            // 746
				return this;                                                                                                       // 747
                                                                                                                       // 748
			var oldDates = this.dates.copy(),                                                                                   // 749
				dates = [],                                                                                                        // 750
				fromArgs = false;                                                                                                  // 751
			if (arguments.length){                                                                                              // 752
				$.each(arguments, $.proxy(function(i, date){                                                                       // 753
					if (date instanceof Date)                                                                                         // 754
						date = this._local_to_utc(date);                                                                                 // 755
					dates.push(date);                                                                                                 // 756
				}, this));                                                                                                         // 757
				fromArgs = true;                                                                                                   // 758
			} else {                                                                                                            // 759
				dates = this.isInput                                                                                               // 760
						? this.element.val()                                                                                             // 761
						: this.element.data('date') || this.inputField.val();                                                            // 762
				if (dates && this.o.multidate)                                                                                     // 763
					dates = dates.split(this.o.multidateSeparator);                                                                   // 764
				else                                                                                                               // 765
					dates = [dates];                                                                                                  // 766
				delete this.element.data().date;                                                                                   // 767
			}                                                                                                                   // 768
                                                                                                                       // 769
			dates = $.map(dates, $.proxy(function(date){                                                                        // 770
				return DPGlobal.parseDate(date, this.o.format, this.o.language, this.o.assumeNearbyYear);                          // 771
			}, this));                                                                                                          // 772
			dates = $.grep(dates, $.proxy(function(date){                                                                       // 773
				return (                                                                                                           // 774
					!this.dateWithinRange(date) ||                                                                                    // 775
					!date                                                                                                             // 776
				);                                                                                                                 // 777
			}, this), true);                                                                                                    // 778
			this.dates.replace(dates);                                                                                          // 779
                                                                                                                       // 780
			if (this.o.updateViewDate) {                                                                                        // 781
				if (this.dates.length)                                                                                             // 782
					this.viewDate = new Date(this.dates.get(-1));                                                                     // 783
				else if (this.viewDate < this.o.startDate)                                                                         // 784
					this.viewDate = new Date(this.o.startDate);                                                                       // 785
				else if (this.viewDate > this.o.endDate)                                                                           // 786
					this.viewDate = new Date(this.o.endDate);                                                                         // 787
				else                                                                                                               // 788
					this.viewDate = this.o.defaultViewDate;                                                                           // 789
			}                                                                                                                   // 790
                                                                                                                       // 791
			if (fromArgs){                                                                                                      // 792
				// setting date by clicking                                                                                        // 793
				this.setValue();                                                                                                   // 794
				this.element.change();                                                                                             // 795
			}                                                                                                                   // 796
			else if (this.dates.length){                                                                                        // 797
				// setting date by typing                                                                                          // 798
				if (String(oldDates) !== String(this.dates) && fromArgs) {                                                         // 799
					this._trigger('changeDate');                                                                                      // 800
					this.element.change();                                                                                            // 801
				}                                                                                                                  // 802
			}                                                                                                                   // 803
			if (!this.dates.length && oldDates.length) {                                                                        // 804
				this._trigger('clearDate');                                                                                        // 805
				this.element.change();                                                                                             // 806
			}                                                                                                                   // 807
                                                                                                                       // 808
			this.fill();                                                                                                        // 809
			return this;                                                                                                        // 810
		},                                                                                                                   // 811
                                                                                                                       // 812
		fillDow: function(){                                                                                                 // 813
      if (this.o.showWeekDays) {                                                                                       // 814
			var dowCnt = this.o.weekStart,                                                                                      // 815
				html = '<tr>';                                                                                                     // 816
			if (this.o.calendarWeeks){                                                                                          // 817
				html += '<th class="cw">&#160;</th>';                                                                              // 818
			}                                                                                                                   // 819
			while (dowCnt < this.o.weekStart + 7){                                                                              // 820
				html += '<th class="dow';                                                                                          // 821
        if ($.inArray(dowCnt, this.o.daysOfWeekDisabled) !== -1)                                                       // 822
          html += ' disabled';                                                                                         // 823
        html += '">'+dates[this.o.language].daysMin[(dowCnt++)%7]+'</th>';                                             // 824
			}                                                                                                                   // 825
			html += '</tr>';                                                                                                    // 826
			this.picker.find('.datepicker-days thead').append(html);                                                            // 827
      }                                                                                                                // 828
		},                                                                                                                   // 829
                                                                                                                       // 830
		fillMonths: function(){                                                                                              // 831
      var localDate = this._utc_to_local(this.viewDate);                                                               // 832
			var html = '';                                                                                                      // 833
			var focused;                                                                                                        // 834
			for (var i = 0; i < 12; i++){                                                                                       // 835
				focused = localDate && localDate.getMonth() === i ? ' focused' : '';                                               // 836
				html += '<span class="month' + focused + '">' + dates[this.o.language].monthsShort[i] + '</span>';                 // 837
			}                                                                                                                   // 838
			this.picker.find('.datepicker-months td').html(html);                                                               // 839
		},                                                                                                                   // 840
                                                                                                                       // 841
		setRange: function(range){                                                                                           // 842
			if (!range || !range.length)                                                                                        // 843
				delete this.range;                                                                                                 // 844
			else                                                                                                                // 845
				this.range = $.map(range, function(d){                                                                             // 846
					return d.valueOf();                                                                                               // 847
				});                                                                                                                // 848
			this.fill();                                                                                                        // 849
		},                                                                                                                   // 850
                                                                                                                       // 851
		getClassNames: function(date){                                                                                       // 852
			var cls = [],                                                                                                       // 853
				year = this.viewDate.getUTCFullYear(),                                                                             // 854
				month = this.viewDate.getUTCMonth(),                                                                               // 855
				today = UTCToday();                                                                                                // 856
			if (date.getUTCFullYear() < year || (date.getUTCFullYear() === year && date.getUTCMonth() < month)){                // 857
				cls.push('old');                                                                                                   // 858
			} else if (date.getUTCFullYear() > year || (date.getUTCFullYear() === year && date.getUTCMonth() > month)){         // 859
				cls.push('new');                                                                                                   // 860
			}                                                                                                                   // 861
			if (this.focusDate && date.valueOf() === this.focusDate.valueOf())                                                  // 862
				cls.push('focused');                                                                                               // 863
			// Compare internal UTC date with UTC today, not local today                                                        // 864
			if (this.o.todayHighlight && isUTCEquals(date, today)) {                                                            // 865
				cls.push('today');                                                                                                 // 866
			}                                                                                                                   // 867
			if (this.dates.contains(date) !== -1)                                                                               // 868
				cls.push('active');                                                                                                // 869
			if (!this.dateWithinRange(date)){                                                                                   // 870
				cls.push('disabled');                                                                                              // 871
			}                                                                                                                   // 872
			if (this.dateIsDisabled(date)){                                                                                     // 873
				cls.push('disabled', 'disabled-date');                                                                             // 874
			}                                                                                                                   // 875
			if ($.inArray(date.getUTCDay(), this.o.daysOfWeekHighlighted) !== -1){                                              // 876
				cls.push('highlighted');                                                                                           // 877
			}                                                                                                                   // 878
                                                                                                                       // 879
			if (this.range){                                                                                                    // 880
				if (date > this.range[0] && date < this.range[this.range.length-1]){                                               // 881
					cls.push('range');                                                                                                // 882
				}                                                                                                                  // 883
				if ($.inArray(date.valueOf(), this.range) !== -1){                                                                 // 884
					cls.push('selected');                                                                                             // 885
				}                                                                                                                  // 886
				if (date.valueOf() === this.range[0]){                                                                             // 887
          cls.push('range-start');                                                                                     // 888
        }                                                                                                              // 889
        if (date.valueOf() === this.range[this.range.length-1]){                                                       // 890
          cls.push('range-end');                                                                                       // 891
        }                                                                                                              // 892
			}                                                                                                                   // 893
			return cls;                                                                                                         // 894
		},                                                                                                                   // 895
                                                                                                                       // 896
		_fill_yearsView: function(selector, cssClass, factor, year, startYear, endYear, beforeFn){                           // 897
			var html = '';                                                                                                      // 898
			var step = factor / 10;                                                                                             // 899
			var view = this.picker.find(selector);                                                                              // 900
			var startVal = Math.floor(year / factor) * factor;                                                                  // 901
			var endVal = startVal + step * 9;                                                                                   // 902
			var focusedVal = Math.floor(this.viewDate.getFullYear() / step) * step;                                             // 903
			var selected = $.map(this.dates, function(d){                                                                       // 904
				return Math.floor(d.getUTCFullYear() / step) * step;                                                               // 905
			});                                                                                                                 // 906
                                                                                                                       // 907
			var classes, tooltip, before;                                                                                       // 908
			for (var currVal = startVal - step; currVal <= endVal + step; currVal += step) {                                    // 909
				classes = [cssClass];                                                                                              // 910
				tooltip = null;                                                                                                    // 911
                                                                                                                       // 912
				if (currVal === startVal - step) {                                                                                 // 913
					classes.push('old');                                                                                              // 914
				} else if (currVal === endVal + step) {                                                                            // 915
					classes.push('new');                                                                                              // 916
				}                                                                                                                  // 917
				if ($.inArray(currVal, selected) !== -1) {                                                                         // 918
					classes.push('active');                                                                                           // 919
				}                                                                                                                  // 920
				if (currVal < startYear || currVal > endYear) {                                                                    // 921
					classes.push('disabled');                                                                                         // 922
				}                                                                                                                  // 923
				if (currVal === focusedVal) {                                                                                      // 924
				  classes.push('focused');                                                                                         // 925
        }                                                                                                              // 926
                                                                                                                       // 927
				if (beforeFn !== $.noop) {                                                                                         // 928
					before = beforeFn(new Date(currVal, 0, 1));                                                                       // 929
					if (before === undefined) {                                                                                       // 930
						before = {};                                                                                                     // 931
					} else if (typeof before === 'boolean') {                                                                         // 932
						before = {enabled: before};                                                                                      // 933
					} else if (typeof before === 'string') {                                                                          // 934
						before = {classes: before};                                                                                      // 935
					}                                                                                                                 // 936
					if (before.enabled === false) {                                                                                   // 937
						classes.push('disabled');                                                                                        // 938
					}                                                                                                                 // 939
					if (before.classes) {                                                                                             // 940
						classes = classes.concat(before.classes.split(/\s+/));                                                           // 941
					}                                                                                                                 // 942
					if (before.tooltip) {                                                                                             // 943
						tooltip = before.tooltip;                                                                                        // 944
					}                                                                                                                 // 945
				}                                                                                                                  // 946
                                                                                                                       // 947
				html += '<span class="' + classes.join(' ') + '"' + (tooltip ? ' title="' + tooltip + '"' : '') + '>' + currVal + '</span>';
			}                                                                                                                   // 949
                                                                                                                       // 950
			view.find('.datepicker-switch').text(startVal + '-' + endVal);                                                      // 951
			view.find('td').html(html);                                                                                         // 952
		},                                                                                                                   // 953
                                                                                                                       // 954
		fill: function(){                                                                                                    // 955
			var d = new Date(this.viewDate),                                                                                    // 956
				year = d.getUTCFullYear(),                                                                                         // 957
				month = d.getUTCMonth(),                                                                                           // 958
				startYear = this.o.startDate !== -Infinity ? this.o.startDate.getUTCFullYear() : -Infinity,                        // 959
				startMonth = this.o.startDate !== -Infinity ? this.o.startDate.getUTCMonth() : -Infinity,                          // 960
				endYear = this.o.endDate !== Infinity ? this.o.endDate.getUTCFullYear() : Infinity,                                // 961
				endMonth = this.o.endDate !== Infinity ? this.o.endDate.getUTCMonth() : Infinity,                                  // 962
				todaytxt = dates[this.o.language].today || dates['en'].today || '',                                                // 963
				cleartxt = dates[this.o.language].clear || dates['en'].clear || '',                                                // 964
				titleFormat = dates[this.o.language].titleFormat || dates['en'].titleFormat,                                       // 965
				tooltip,                                                                                                           // 966
				before;                                                                                                            // 967
			if (isNaN(year) || isNaN(month))                                                                                    // 968
				return;                                                                                                            // 969
			this.picker.find('.datepicker-days .datepicker-switch')                                                             // 970
						.text(DPGlobal.formatDate(d, titleFormat, this.o.language));                                                     // 971
			this.picker.find('tfoot .today')                                                                                    // 972
						.text(todaytxt)                                                                                                  // 973
						.css('display', this.o.todayBtn === true || this.o.todayBtn === 'linked' ? 'table-cell' : 'none');               // 974
			this.picker.find('tfoot .clear')                                                                                    // 975
						.text(cleartxt)                                                                                                  // 976
						.css('display', this.o.clearBtn === true ? 'table-cell' : 'none');                                               // 977
			this.picker.find('thead .datepicker-title')                                                                         // 978
						.text(this.o.title)                                                                                              // 979
						.css('display', typeof this.o.title === 'string' && this.o.title !== '' ? 'table-cell' : 'none');                // 980
			this.updateNavArrows();                                                                                             // 981
			this.fillMonths();                                                                                                  // 982
			var prevMonth = UTCDate(year, month, 0),                                                                            // 983
				day = prevMonth.getUTCDate();                                                                                      // 984
			prevMonth.setUTCDate(day - (prevMonth.getUTCDay() - this.o.weekStart + 7)%7);                                       // 985
			var nextMonth = new Date(prevMonth);                                                                                // 986
			if (prevMonth.getUTCFullYear() < 100){                                                                              // 987
        nextMonth.setUTCFullYear(prevMonth.getUTCFullYear());                                                          // 988
      }                                                                                                                // 989
			nextMonth.setUTCDate(nextMonth.getUTCDate() + 42);                                                                  // 990
			nextMonth = nextMonth.valueOf();                                                                                    // 991
			var html = [];                                                                                                      // 992
			var weekDay, clsName;                                                                                               // 993
			while (prevMonth.valueOf() < nextMonth){                                                                            // 994
				weekDay = prevMonth.getUTCDay();                                                                                   // 995
				if (weekDay === this.o.weekStart){                                                                                 // 996
					html.push('<tr>');                                                                                                // 997
					if (this.o.calendarWeeks){                                                                                        // 998
						// ISO 8601: First week contains first thursday.                                                                 // 999
						// ISO also states week starts on Monday, but we can be more abstract here.                                      // 1000
						var                                                                                                              // 1001
							// Start of current week: based on weekstart/current date                                                       // 1002
							ws = new Date(+prevMonth + (this.o.weekStart - weekDay - 7) % 7 * 864e5),                                       // 1003
							// Thursday of this week                                                                                        // 1004
							th = new Date(Number(ws) + (7 + 4 - ws.getUTCDay()) % 7 * 864e5),                                               // 1005
							// First Thursday of year, year from thursday                                                                   // 1006
							yth = new Date(Number(yth = UTCDate(th.getUTCFullYear(), 0, 1)) + (7 + 4 - yth.getUTCDay()) % 7 * 864e5),       // 1007
							// Calendar week: ms between thursdays, div ms per day, div 7 days                                              // 1008
							calWeek = (th - yth) / 864e5 / 7 + 1;                                                                           // 1009
						html.push('<td class="cw">'+ calWeek +'</td>');                                                                  // 1010
					}                                                                                                                 // 1011
				}                                                                                                                  // 1012
				clsName = this.getClassNames(prevMonth);                                                                           // 1013
				clsName.push('day');                                                                                               // 1014
                                                                                                                       // 1015
				var content = prevMonth.getUTCDate();                                                                              // 1016
                                                                                                                       // 1017
				if (this.o.beforeShowDay !== $.noop){                                                                              // 1018
					before = this.o.beforeShowDay(this._utc_to_local(prevMonth));                                                     // 1019
					if (before === undefined)                                                                                         // 1020
						before = {};                                                                                                     // 1021
					else if (typeof before === 'boolean')                                                                             // 1022
						before = {enabled: before};                                                                                      // 1023
					else if (typeof before === 'string')                                                                              // 1024
						before = {classes: before};                                                                                      // 1025
					if (before.enabled === false)                                                                                     // 1026
						clsName.push('disabled');                                                                                        // 1027
					if (before.classes)                                                                                               // 1028
						clsName = clsName.concat(before.classes.split(/\s+/));                                                           // 1029
					if (before.tooltip)                                                                                               // 1030
						tooltip = before.tooltip;                                                                                        // 1031
					if (before.content)                                                                                               // 1032
						content = before.content;                                                                                        // 1033
				}                                                                                                                  // 1034
                                                                                                                       // 1035
				//Check if uniqueSort exists (supported by jquery >=1.12 and >=2.2)                                                // 1036
				//Fallback to unique function for older jquery versions                                                            // 1037
				if ($.isFunction($.uniqueSort)) {                                                                                  // 1038
					clsName = $.uniqueSort(clsName);                                                                                  // 1039
				} else {                                                                                                           // 1040
					clsName = $.unique(clsName);                                                                                      // 1041
				}                                                                                                                  // 1042
                                                                                                                       // 1043
				html.push('<td class="'+clsName.join(' ')+'"' + (tooltip ? ' title="'+tooltip+'"' : '') + ' data-date="' + prevMonth.getTime().toString() + '">' + content + '</td>');
				tooltip = null;                                                                                                    // 1045
				if (weekDay === this.o.weekEnd){                                                                                   // 1046
					html.push('</tr>');                                                                                               // 1047
				}                                                                                                                  // 1048
				prevMonth.setUTCDate(prevMonth.getUTCDate() + 1);                                                                  // 1049
			}                                                                                                                   // 1050
			this.picker.find('.datepicker-days tbody').html(html.join(''));                                                     // 1051
                                                                                                                       // 1052
			var monthsTitle = dates[this.o.language].monthsTitle || dates['en'].monthsTitle || 'Months';                        // 1053
			var months = this.picker.find('.datepicker-months')                                                                 // 1054
						.find('.datepicker-switch')                                                                                      // 1055
							.text(this.o.maxViewMode < 2 ? monthsTitle : year)                                                              // 1056
							.end()                                                                                                          // 1057
						.find('tbody span').removeClass('active');                                                                       // 1058
                                                                                                                       // 1059
			$.each(this.dates, function(i, d){                                                                                  // 1060
				if (d.getUTCFullYear() === year)                                                                                   // 1061
					months.eq(d.getUTCMonth()).addClass('active');                                                                    // 1062
			});                                                                                                                 // 1063
                                                                                                                       // 1064
			if (year < startYear || year > endYear){                                                                            // 1065
				months.addClass('disabled');                                                                                       // 1066
			}                                                                                                                   // 1067
			if (year === startYear){                                                                                            // 1068
				months.slice(0, startMonth).addClass('disabled');                                                                  // 1069
			}                                                                                                                   // 1070
			if (year === endYear){                                                                                              // 1071
				months.slice(endMonth+1).addClass('disabled');                                                                     // 1072
			}                                                                                                                   // 1073
                                                                                                                       // 1074
			if (this.o.beforeShowMonth !== $.noop){                                                                             // 1075
				var that = this;                                                                                                   // 1076
				$.each(months, function(i, month){                                                                                 // 1077
          var moDate = new Date(year, i, 1);                                                                           // 1078
          var before = that.o.beforeShowMonth(moDate);                                                                 // 1079
					if (before === undefined)                                                                                         // 1080
						before = {};                                                                                                     // 1081
					else if (typeof before === 'boolean')                                                                             // 1082
						before = {enabled: before};                                                                                      // 1083
					else if (typeof before === 'string')                                                                              // 1084
						before = {classes: before};                                                                                      // 1085
					if (before.enabled === false && !$(month).hasClass('disabled'))                                                   // 1086
					    $(month).addClass('disabled');                                                                                // 1087
					if (before.classes)                                                                                               // 1088
					    $(month).addClass(before.classes);                                                                            // 1089
					if (before.tooltip)                                                                                               // 1090
					    $(month).prop('title', before.tooltip);                                                                       // 1091
				});                                                                                                                // 1092
			}                                                                                                                   // 1093
                                                                                                                       // 1094
			// Generating decade/years picker                                                                                   // 1095
			this._fill_yearsView(                                                                                               // 1096
				'.datepicker-years',                                                                                               // 1097
				'year',                                                                                                            // 1098
				10,                                                                                                                // 1099
				year,                                                                                                              // 1100
				startYear,                                                                                                         // 1101
				endYear,                                                                                                           // 1102
				this.o.beforeShowYear                                                                                              // 1103
			);                                                                                                                  // 1104
                                                                                                                       // 1105
			// Generating century/decades picker                                                                                // 1106
			this._fill_yearsView(                                                                                               // 1107
				'.datepicker-decades',                                                                                             // 1108
				'decade',                                                                                                          // 1109
				100,                                                                                                               // 1110
				year,                                                                                                              // 1111
				startYear,                                                                                                         // 1112
				endYear,                                                                                                           // 1113
				this.o.beforeShowDecade                                                                                            // 1114
			);                                                                                                                  // 1115
                                                                                                                       // 1116
			// Generating millennium/centuries picker                                                                           // 1117
			this._fill_yearsView(                                                                                               // 1118
				'.datepicker-centuries',                                                                                           // 1119
				'century',                                                                                                         // 1120
				1000,                                                                                                              // 1121
				year,                                                                                                              // 1122
				startYear,                                                                                                         // 1123
				endYear,                                                                                                           // 1124
				this.o.beforeShowCentury                                                                                           // 1125
			);                                                                                                                  // 1126
		},                                                                                                                   // 1127
                                                                                                                       // 1128
		updateNavArrows: function(){                                                                                         // 1129
			if (!this._allow_update)                                                                                            // 1130
				return;                                                                                                            // 1131
                                                                                                                       // 1132
			var d = new Date(this.viewDate),                                                                                    // 1133
				year = d.getUTCFullYear(),                                                                                         // 1134
				month = d.getUTCMonth(),                                                                                           // 1135
				startYear = this.o.startDate !== -Infinity ? this.o.startDate.getUTCFullYear() : -Infinity,                        // 1136
				startMonth = this.o.startDate !== -Infinity ? this.o.startDate.getUTCMonth() : -Infinity,                          // 1137
				endYear = this.o.endDate !== Infinity ? this.o.endDate.getUTCFullYear() : Infinity,                                // 1138
				endMonth = this.o.endDate !== Infinity ? this.o.endDate.getUTCMonth() : Infinity,                                  // 1139
				prevIsDisabled,                                                                                                    // 1140
				nextIsDisabled,                                                                                                    // 1141
				factor = 1;                                                                                                        // 1142
			switch (this.viewMode){                                                                                             // 1143
				case 0:                                                                                                            // 1144
					prevIsDisabled = year <= startYear && month <= startMonth;                                                        // 1145
					nextIsDisabled = year >= endYear && month >= endMonth;                                                            // 1146
					break;                                                                                                            // 1147
				case 4:                                                                                                            // 1148
					factor *= 10;                                                                                                     // 1149
					/* falls through */                                                                                               // 1150
				case 3:                                                                                                            // 1151
					factor *= 10;                                                                                                     // 1152
					/* falls through */                                                                                               // 1153
				case 2:                                                                                                            // 1154
					factor *= 10;                                                                                                     // 1155
					/* falls through */                                                                                               // 1156
				case 1:                                                                                                            // 1157
					prevIsDisabled = Math.floor(year / factor) * factor <= startYear;                                                 // 1158
					nextIsDisabled = Math.floor(year / factor) * factor + factor >= endYear;                                          // 1159
					break;                                                                                                            // 1160
			}                                                                                                                   // 1161
                                                                                                                       // 1162
			this.picker.find('.prev').toggleClass('disabled', prevIsDisabled);                                                  // 1163
			this.picker.find('.next').toggleClass('disabled', nextIsDisabled);                                                  // 1164
		},                                                                                                                   // 1165
                                                                                                                       // 1166
		click: function(e){                                                                                                  // 1167
			e.preventDefault();                                                                                                 // 1168
			e.stopPropagation();                                                                                                // 1169
                                                                                                                       // 1170
			var target, dir, day, year, month;                                                                                  // 1171
			target = $(e.target);                                                                                               // 1172
                                                                                                                       // 1173
			// Clicked on the switch                                                                                            // 1174
			if (target.hasClass('datepicker-switch') && this.viewMode !== this.o.maxViewMode){                                  // 1175
				this.setViewMode(this.viewMode + 1);                                                                               // 1176
			}                                                                                                                   // 1177
                                                                                                                       // 1178
			// Clicked on today button                                                                                          // 1179
			if (target.hasClass('today') && !target.hasClass('day')){                                                           // 1180
				this.setViewMode(0);                                                                                               // 1181
				this._setDate(UTCToday(), this.o.todayBtn === 'linked' ? null : 'view');                                           // 1182
			}                                                                                                                   // 1183
                                                                                                                       // 1184
			// Clicked on clear button                                                                                          // 1185
			if (target.hasClass('clear')){                                                                                      // 1186
				this.clearDates();                                                                                                 // 1187
			}                                                                                                                   // 1188
                                                                                                                       // 1189
			if (!target.hasClass('disabled')){                                                                                  // 1190
				// Clicked on a month, year, decade, century                                                                       // 1191
				if (target.hasClass('month')                                                                                       // 1192
						|| target.hasClass('year')                                                                                       // 1193
						|| target.hasClass('decade')                                                                                     // 1194
						|| target.hasClass('century')) {                                                                                 // 1195
					this.viewDate.setUTCDate(1);                                                                                      // 1196
                                                                                                                       // 1197
					day = 1;                                                                                                          // 1198
					if (this.viewMode === 1){                                                                                         // 1199
						month = target.parent().find('span').index(target);                                                              // 1200
						year = this.viewDate.getUTCFullYear();                                                                           // 1201
						this.viewDate.setUTCMonth(month);                                                                                // 1202
					} else {                                                                                                          // 1203
						month = 0;                                                                                                       // 1204
						year = Number(target.text());                                                                                    // 1205
						this.viewDate.setUTCFullYear(year);                                                                              // 1206
					}                                                                                                                 // 1207
                                                                                                                       // 1208
					this._trigger(DPGlobal.viewModes[this.viewMode - 1].e, this.viewDate);                                            // 1209
                                                                                                                       // 1210
					if (this.viewMode === this.o.minViewMode){                                                                        // 1211
						this._setDate(UTCDate(year, month, day));                                                                        // 1212
					} else {                                                                                                          // 1213
						this.setViewMode(this.viewMode - 1);                                                                             // 1214
						this.fill();                                                                                                     // 1215
					}                                                                                                                 // 1216
				}                                                                                                                  // 1217
			}                                                                                                                   // 1218
                                                                                                                       // 1219
			if (this.picker.is(':visible') && this._focused_from){                                                              // 1220
				this._focused_from.focus();                                                                                        // 1221
			}                                                                                                                   // 1222
			delete this._focused_from;                                                                                          // 1223
		},                                                                                                                   // 1224
                                                                                                                       // 1225
		dayCellClick: function(e){                                                                                           // 1226
			var $target = $(e.currentTarget);                                                                                   // 1227
			var timestamp = $target.data('date');                                                                               // 1228
			var date = new Date(timestamp);                                                                                     // 1229
                                                                                                                       // 1230
			if (this.o.updateViewDate) {                                                                                        // 1231
				if (date.getUTCFullYear() !== this.viewDate.getUTCFullYear()) {                                                    // 1232
					this._trigger('changeYear', this.viewDate);                                                                       // 1233
				}                                                                                                                  // 1234
                                                                                                                       // 1235
				if (date.getUTCMonth() !== this.viewDate.getUTCMonth()) {                                                          // 1236
					this._trigger('changeMonth', this.viewDate);                                                                      // 1237
				}                                                                                                                  // 1238
			}                                                                                                                   // 1239
			this._setDate(date);                                                                                                // 1240
		},                                                                                                                   // 1241
                                                                                                                       // 1242
		// Clicked on prev or next                                                                                           // 1243
		navArrowsClick: function(e){                                                                                         // 1244
			var $target = $(e.currentTarget);                                                                                   // 1245
			var dir = $target.hasClass('prev') ? -1 : 1;                                                                        // 1246
			if (this.viewMode !== 0){                                                                                           // 1247
				dir *= DPGlobal.viewModes[this.viewMode].navStep * 12;                                                             // 1248
			}                                                                                                                   // 1249
			this.viewDate = this.moveMonth(this.viewDate, dir);                                                                 // 1250
			this._trigger(DPGlobal.viewModes[this.viewMode].e, this.viewDate);                                                  // 1251
			this.fill();                                                                                                        // 1252
		},                                                                                                                   // 1253
                                                                                                                       // 1254
		_toggle_multidate: function(date){                                                                                   // 1255
			var ix = this.dates.contains(date);                                                                                 // 1256
			if (!date){                                                                                                         // 1257
				this.dates.clear();                                                                                                // 1258
			}                                                                                                                   // 1259
                                                                                                                       // 1260
			if (ix !== -1){                                                                                                     // 1261
				if (this.o.multidate === true || this.o.multidate > 1 || this.o.toggleActive){                                     // 1262
					this.dates.remove(ix);                                                                                            // 1263
				}                                                                                                                  // 1264
			} else if (this.o.multidate === false) {                                                                            // 1265
				this.dates.clear();                                                                                                // 1266
				this.dates.push(date);                                                                                             // 1267
			}                                                                                                                   // 1268
			else {                                                                                                              // 1269
				this.dates.push(date);                                                                                             // 1270
			}                                                                                                                   // 1271
                                                                                                                       // 1272
			if (typeof this.o.multidate === 'number')                                                                           // 1273
				while (this.dates.length > this.o.multidate)                                                                       // 1274
					this.dates.remove(0);                                                                                             // 1275
		},                                                                                                                   // 1276
                                                                                                                       // 1277
		_setDate: function(date, which){                                                                                     // 1278
			if (!which || which === 'date')                                                                                     // 1279
				this._toggle_multidate(date && new Date(date));                                                                    // 1280
			if ((!which && this.o.updateViewDate) || which === 'view')                                                          // 1281
				this.viewDate = date && new Date(date);                                                                            // 1282
                                                                                                                       // 1283
			this.fill();                                                                                                        // 1284
			this.setValue();                                                                                                    // 1285
			if (!which || which !== 'view') {                                                                                   // 1286
				this._trigger('changeDate');                                                                                       // 1287
			}                                                                                                                   // 1288
			this.inputField.trigger('change');                                                                                  // 1289
			if (this.o.autoclose && (!which || which === 'date')){                                                              // 1290
				this.hide();                                                                                                       // 1291
			}                                                                                                                   // 1292
		},                                                                                                                   // 1293
                                                                                                                       // 1294
		moveDay: function(date, dir){                                                                                        // 1295
			var newDate = new Date(date);                                                                                       // 1296
			newDate.setUTCDate(date.getUTCDate() + dir);                                                                        // 1297
                                                                                                                       // 1298
			return newDate;                                                                                                     // 1299
		},                                                                                                                   // 1300
                                                                                                                       // 1301
		moveWeek: function(date, dir){                                                                                       // 1302
			return this.moveDay(date, dir * 7);                                                                                 // 1303
		},                                                                                                                   // 1304
                                                                                                                       // 1305
		moveMonth: function(date, dir){                                                                                      // 1306
			if (!isValidDate(date))                                                                                             // 1307
				return this.o.defaultViewDate;                                                                                     // 1308
			if (!dir)                                                                                                           // 1309
				return date;                                                                                                       // 1310
			var new_date = new Date(date.valueOf()),                                                                            // 1311
				day = new_date.getUTCDate(),                                                                                       // 1312
				month = new_date.getUTCMonth(),                                                                                    // 1313
				mag = Math.abs(dir),                                                                                               // 1314
				new_month, test;                                                                                                   // 1315
			dir = dir > 0 ? 1 : -1;                                                                                             // 1316
			if (mag === 1){                                                                                                     // 1317
				test = dir === -1                                                                                                  // 1318
					// If going back one month, make sure month is not current month                                                  // 1319
					// (eg, Mar 31 -> Feb 31 == Feb 28, not Mar 02)                                                                   // 1320
					? function(){                                                                                                     // 1321
						return new_date.getUTCMonth() === month;                                                                         // 1322
					}                                                                                                                 // 1323
					// If going forward one month, make sure month is as expected                                                     // 1324
					// (eg, Jan 31 -> Feb 31 == Feb 28, not Mar 02)                                                                   // 1325
					: function(){                                                                                                     // 1326
						return new_date.getUTCMonth() !== new_month;                                                                     // 1327
					};                                                                                                                // 1328
				new_month = month + dir;                                                                                           // 1329
				new_date.setUTCMonth(new_month);                                                                                   // 1330
				// Dec -> Jan (12) or Jan -> Dec (-1) -- limit expected date to 0-11                                               // 1331
				new_month = (new_month + 12) % 12;                                                                                 // 1332
			}                                                                                                                   // 1333
			else {                                                                                                              // 1334
				// For magnitudes >1, move one month at a time...                                                                  // 1335
				for (var i=0; i < mag; i++)                                                                                        // 1336
					// ...which might decrease the day (eg, Jan 31 to Feb 28, etc)...                                                 // 1337
					new_date = this.moveMonth(new_date, dir);                                                                         // 1338
				// ...then reset the day, keeping it in the new month                                                              // 1339
				new_month = new_date.getUTCMonth();                                                                                // 1340
				new_date.setUTCDate(day);                                                                                          // 1341
				test = function(){                                                                                                 // 1342
					return new_month !== new_date.getUTCMonth();                                                                      // 1343
				};                                                                                                                 // 1344
			}                                                                                                                   // 1345
			// Common date-resetting loop -- if date is beyond end of month, make it                                            // 1346
			// end of month                                                                                                     // 1347
			while (test()){                                                                                                     // 1348
				new_date.setUTCDate(--day);                                                                                        // 1349
				new_date.setUTCMonth(new_month);                                                                                   // 1350
			}                                                                                                                   // 1351
			return new_date;                                                                                                    // 1352
		},                                                                                                                   // 1353
                                                                                                                       // 1354
		moveYear: function(date, dir){                                                                                       // 1355
			return this.moveMonth(date, dir*12);                                                                                // 1356
		},                                                                                                                   // 1357
                                                                                                                       // 1358
		moveAvailableDate: function(date, dir, fn){                                                                          // 1359
			do {                                                                                                                // 1360
				date = this[fn](date, dir);                                                                                        // 1361
                                                                                                                       // 1362
				if (!this.dateWithinRange(date))                                                                                   // 1363
					return false;                                                                                                     // 1364
                                                                                                                       // 1365
				fn = 'moveDay';                                                                                                    // 1366
			}                                                                                                                   // 1367
			while (this.dateIsDisabled(date));                                                                                  // 1368
                                                                                                                       // 1369
			return date;                                                                                                        // 1370
		},                                                                                                                   // 1371
                                                                                                                       // 1372
		weekOfDateIsDisabled: function(date){                                                                                // 1373
			return $.inArray(date.getUTCDay(), this.o.daysOfWeekDisabled) !== -1;                                               // 1374
		},                                                                                                                   // 1375
                                                                                                                       // 1376
		dateIsDisabled: function(date){                                                                                      // 1377
			return (                                                                                                            // 1378
				this.weekOfDateIsDisabled(date) ||                                                                                 // 1379
				$.grep(this.o.datesDisabled, function(d){                                                                          // 1380
					return isUTCEquals(date, d);                                                                                      // 1381
				}).length > 0                                                                                                      // 1382
			);                                                                                                                  // 1383
		},                                                                                                                   // 1384
                                                                                                                       // 1385
		dateWithinRange: function(date){                                                                                     // 1386
			return date >= this.o.startDate && date <= this.o.endDate;                                                          // 1387
		},                                                                                                                   // 1388
                                                                                                                       // 1389
		keydown: function(e){                                                                                                // 1390
			if (!this.picker.is(':visible')){                                                                                   // 1391
				if (e.keyCode === 40 || e.keyCode === 27) { // allow down to re-show picker                                        // 1392
					this.show();                                                                                                      // 1393
					e.stopPropagation();                                                                                              // 1394
        }                                                                                                              // 1395
				return;                                                                                                            // 1396
			}                                                                                                                   // 1397
			var dateChanged = false,                                                                                            // 1398
				dir, newViewDate,                                                                                                  // 1399
				focusDate = this.focusDate || this.viewDate;                                                                       // 1400
			switch (e.keyCode){                                                                                                 // 1401
				case 27: // escape                                                                                                 // 1402
					if (this.focusDate){                                                                                              // 1403
						this.focusDate = null;                                                                                           // 1404
						this.viewDate = this.dates.get(-1) || this.viewDate;                                                             // 1405
						this.fill();                                                                                                     // 1406
					}                                                                                                                 // 1407
					else                                                                                                              // 1408
						this.hide();                                                                                                     // 1409
					e.preventDefault();                                                                                               // 1410
					e.stopPropagation();                                                                                              // 1411
					break;                                                                                                            // 1412
				case 37: // left                                                                                                   // 1413
				case 38: // up                                                                                                     // 1414
				case 39: // right                                                                                                  // 1415
				case 40: // down                                                                                                   // 1416
					if (!this.o.keyboardNavigation || this.o.daysOfWeekDisabled.length === 7)                                         // 1417
						break;                                                                                                           // 1418
					dir = e.keyCode === 37 || e.keyCode === 38 ? -1 : 1;                                                              // 1419
          if (this.viewMode === 0) {                                                                                   // 1420
  					if (e.ctrlKey){                                                                                                 // 1421
  						newViewDate = this.moveAvailableDate(focusDate, dir, 'moveYear');                                              // 1422
                                                                                                                       // 1423
  						if (newViewDate)                                                                                               // 1424
  							this._trigger('changeYear', this.viewDate);                                                                   // 1425
  					} else if (e.shiftKey){                                                                                         // 1426
  						newViewDate = this.moveAvailableDate(focusDate, dir, 'moveMonth');                                             // 1427
                                                                                                                       // 1428
  						if (newViewDate)                                                                                               // 1429
  							this._trigger('changeMonth', this.viewDate);                                                                  // 1430
  					} else if (e.keyCode === 37 || e.keyCode === 39){                                                               // 1431
  						newViewDate = this.moveAvailableDate(focusDate, dir, 'moveDay');                                               // 1432
  					} else if (!this.weekOfDateIsDisabled(focusDate)){                                                              // 1433
  						newViewDate = this.moveAvailableDate(focusDate, dir, 'moveWeek');                                              // 1434
  					}                                                                                                               // 1435
          } else if (this.viewMode === 1) {                                                                            // 1436
            if (e.keyCode === 38 || e.keyCode === 40) {                                                                // 1437
              dir = dir * 4;                                                                                           // 1438
            }                                                                                                          // 1439
            newViewDate = this.moveAvailableDate(focusDate, dir, 'moveMonth');                                         // 1440
          } else if (this.viewMode === 2) {                                                                            // 1441
            if (e.keyCode === 38 || e.keyCode === 40) {                                                                // 1442
              dir = dir * 4;                                                                                           // 1443
            }                                                                                                          // 1444
            newViewDate = this.moveAvailableDate(focusDate, dir, 'moveYear');                                          // 1445
          }                                                                                                            // 1446
					if (newViewDate){                                                                                                 // 1447
						this.focusDate = this.viewDate = newViewDate;                                                                    // 1448
						this.setValue();                                                                                                 // 1449
						this.fill();                                                                                                     // 1450
						e.preventDefault();                                                                                              // 1451
					}                                                                                                                 // 1452
					break;                                                                                                            // 1453
				case 13: // enter                                                                                                  // 1454
					if (!this.o.forceParse)                                                                                           // 1455
						break;                                                                                                           // 1456
					focusDate = this.focusDate || this.dates.get(-1) || this.viewDate;                                                // 1457
					if (this.o.keyboardNavigation) {                                                                                  // 1458
						this._toggle_multidate(focusDate);                                                                               // 1459
						dateChanged = true;                                                                                              // 1460
					}                                                                                                                 // 1461
					this.focusDate = null;                                                                                            // 1462
					this.viewDate = this.dates.get(-1) || this.viewDate;                                                              // 1463
					this.setValue();                                                                                                  // 1464
					this.fill();                                                                                                      // 1465
					if (this.picker.is(':visible')){                                                                                  // 1466
						e.preventDefault();                                                                                              // 1467
						e.stopPropagation();                                                                                             // 1468
						if (this.o.autoclose)                                                                                            // 1469
							this.hide();                                                                                                    // 1470
					}                                                                                                                 // 1471
					break;                                                                                                            // 1472
				case 9: // tab                                                                                                     // 1473
					this.focusDate = null;                                                                                            // 1474
					this.viewDate = this.dates.get(-1) || this.viewDate;                                                              // 1475
					this.fill();                                                                                                      // 1476
					this.hide();                                                                                                      // 1477
					break;                                                                                                            // 1478
			}                                                                                                                   // 1479
			if (dateChanged){                                                                                                   // 1480
				if (this.dates.length)                                                                                             // 1481
					this._trigger('changeDate');                                                                                      // 1482
				else                                                                                                               // 1483
					this._trigger('clearDate');                                                                                       // 1484
				this.inputField.trigger('change');                                                                                 // 1485
			}                                                                                                                   // 1486
		},                                                                                                                   // 1487
                                                                                                                       // 1488
		setViewMode: function(viewMode){                                                                                     // 1489
			this.viewMode = viewMode;                                                                                           // 1490
			this.picker                                                                                                         // 1491
				.children('div')                                                                                                   // 1492
				.hide()                                                                                                            // 1493
				.filter('.datepicker-' + DPGlobal.viewModes[this.viewMode].clsName)                                                // 1494
					.show();                                                                                                          // 1495
			this.updateNavArrows();                                                                                             // 1496
      this._trigger('changeViewMode', new Date(this.viewDate));                                                        // 1497
		}                                                                                                                    // 1498
	};                                                                                                                    // 1499
                                                                                                                       // 1500
	var DateRangePicker = function(element, options){                                                                     // 1501
		$.data(element, 'datepicker', this);                                                                                 // 1502
		this.element = $(element);                                                                                           // 1503
		this.inputs = $.map(options.inputs, function(i){                                                                     // 1504
			return i.jquery ? i[0] : i;                                                                                         // 1505
		});                                                                                                                  // 1506
		delete options.inputs;                                                                                               // 1507
                                                                                                                       // 1508
		this.keepEmptyValues = options.keepEmptyValues;                                                                      // 1509
		delete options.keepEmptyValues;                                                                                      // 1510
                                                                                                                       // 1511
		datepickerPlugin.call($(this.inputs), options)                                                                       // 1512
			.on('changeDate', $.proxy(this.dateUpdated, this));                                                                 // 1513
                                                                                                                       // 1514
		this.pickers = $.map(this.inputs, function(i){                                                                       // 1515
			return $.data(i, 'datepicker');                                                                                     // 1516
		});                                                                                                                  // 1517
		this.updateDates();                                                                                                  // 1518
	};                                                                                                                    // 1519
	DateRangePicker.prototype = {                                                                                         // 1520
		updateDates: function(){                                                                                             // 1521
			this.dates = $.map(this.pickers, function(i){                                                                       // 1522
				return i.getUTCDate();                                                                                             // 1523
			});                                                                                                                 // 1524
			this.updateRanges();                                                                                                // 1525
		},                                                                                                                   // 1526
		updateRanges: function(){                                                                                            // 1527
			var range = $.map(this.dates, function(d){                                                                          // 1528
				return d.valueOf();                                                                                                // 1529
			});                                                                                                                 // 1530
			$.each(this.pickers, function(i, p){                                                                                // 1531
				p.setRange(range);                                                                                                 // 1532
			});                                                                                                                 // 1533
		},                                                                                                                   // 1534
		dateUpdated: function(e){                                                                                            // 1535
			// `this.updating` is a workaround for preventing infinite recursion                                                // 1536
			// between `changeDate` triggering and `setUTCDate` calling.  Until                                                 // 1537
			// there is a better mechanism.                                                                                     // 1538
			if (this.updating)                                                                                                  // 1539
				return;                                                                                                            // 1540
			this.updating = true;                                                                                               // 1541
                                                                                                                       // 1542
			var dp = $.data(e.target, 'datepicker');                                                                            // 1543
                                                                                                                       // 1544
			if (dp === undefined) {                                                                                             // 1545
				return;                                                                                                            // 1546
			}                                                                                                                   // 1547
                                                                                                                       // 1548
			var new_date = dp.getUTCDate(),                                                                                     // 1549
				keep_empty_values = this.keepEmptyValues,                                                                          // 1550
				i = $.inArray(e.target, this.inputs),                                                                              // 1551
				j = i - 1,                                                                                                         // 1552
				k = i + 1,                                                                                                         // 1553
				l = this.inputs.length;                                                                                            // 1554
			if (i === -1)                                                                                                       // 1555
				return;                                                                                                            // 1556
                                                                                                                       // 1557
			$.each(this.pickers, function(i, p){                                                                                // 1558
				if (!p.getUTCDate() && (p === dp || !keep_empty_values))                                                           // 1559
					p.setUTCDate(new_date);                                                                                           // 1560
			});                                                                                                                 // 1561
                                                                                                                       // 1562
			if (new_date < this.dates[j]){                                                                                      // 1563
				// Date being moved earlier/left                                                                                   // 1564
				while (j >= 0 && new_date < this.dates[j]){                                                                        // 1565
					this.pickers[j--].setUTCDate(new_date);                                                                           // 1566
				}                                                                                                                  // 1567
			} else if (new_date > this.dates[k]){                                                                               // 1568
				// Date being moved later/right                                                                                    // 1569
				while (k < l && new_date > this.dates[k]){                                                                         // 1570
					this.pickers[k++].setUTCDate(new_date);                                                                           // 1571
				}                                                                                                                  // 1572
			}                                                                                                                   // 1573
			this.updateDates();                                                                                                 // 1574
                                                                                                                       // 1575
			delete this.updating;                                                                                               // 1576
		},                                                                                                                   // 1577
		destroy: function(){                                                                                                 // 1578
			$.map(this.pickers, function(p){ p.destroy(); });                                                                   // 1579
			$(this.inputs).off('changeDate', this.dateUpdated);                                                                 // 1580
			delete this.element.data().datepicker;                                                                              // 1581
		},                                                                                                                   // 1582
		remove: alias('destroy', 'Method `remove` is deprecated and will be removed in version 2.0. Use `destroy` instead')  // 1583
	};                                                                                                                    // 1584
                                                                                                                       // 1585
	function opts_from_el(el, prefix){                                                                                    // 1586
		// Derive options from element data-attrs                                                                            // 1587
		var data = $(el).data(),                                                                                             // 1588
			out = {}, inkey,                                                                                                    // 1589
			replace = new RegExp('^' + prefix.toLowerCase() + '([A-Z])');                                                       // 1590
		prefix = new RegExp('^' + prefix.toLowerCase());                                                                     // 1591
		function re_lower(_,a){                                                                                              // 1592
			return a.toLowerCase();                                                                                             // 1593
		}                                                                                                                    // 1594
		for (var key in data)                                                                                                // 1595
			if (prefix.test(key)){                                                                                              // 1596
				inkey = key.replace(replace, re_lower);                                                                            // 1597
				out[inkey] = data[key];                                                                                            // 1598
			}                                                                                                                   // 1599
		return out;                                                                                                          // 1600
	}                                                                                                                     // 1601
                                                                                                                       // 1602
	function opts_from_locale(lang){                                                                                      // 1603
		// Derive options from locale plugins                                                                                // 1604
		var out = {};                                                                                                        // 1605
		// Check if "de-DE" style date is available, if not language should                                                  // 1606
		// fallback to 2 letter code eg "de"                                                                                 // 1607
		if (!dates[lang]){                                                                                                   // 1608
			lang = lang.split('-')[0];                                                                                          // 1609
			if (!dates[lang])                                                                                                   // 1610
				return;                                                                                                            // 1611
		}                                                                                                                    // 1612
		var d = dates[lang];                                                                                                 // 1613
		$.each(locale_opts, function(i,k){                                                                                   // 1614
			if (k in d)                                                                                                         // 1615
				out[k] = d[k];                                                                                                     // 1616
		});                                                                                                                  // 1617
		return out;                                                                                                          // 1618
	}                                                                                                                     // 1619
                                                                                                                       // 1620
	var old = $.fn.datepicker;                                                                                            // 1621
	var datepickerPlugin = function(option){                                                                              // 1622
		var args = Array.apply(null, arguments);                                                                             // 1623
		args.shift();                                                                                                        // 1624
		var internal_return;                                                                                                 // 1625
		this.each(function(){                                                                                                // 1626
			var $this = $(this),                                                                                                // 1627
				data = $this.data('datepicker'),                                                                                   // 1628
				options = typeof option === 'object' && option;                                                                    // 1629
			if (!data){                                                                                                         // 1630
				var elopts = opts_from_el(this, 'date'),                                                                           // 1631
					// Preliminary otions                                                                                             // 1632
					xopts = $.extend({}, defaults, elopts, options),                                                                  // 1633
					locopts = opts_from_locale(xopts.language),                                                                       // 1634
					// Options priority: js args, data-attrs, locales, defaults                                                       // 1635
					opts = $.extend({}, defaults, locopts, elopts, options);                                                          // 1636
				if ($this.hasClass('input-daterange') || opts.inputs){                                                             // 1637
					$.extend(opts, {                                                                                                  // 1638
						inputs: opts.inputs || $this.find('input').toArray()                                                             // 1639
					});                                                                                                               // 1640
					data = new DateRangePicker(this, opts);                                                                           // 1641
				}                                                                                                                  // 1642
				else {                                                                                                             // 1643
					data = new Datepicker(this, opts);                                                                                // 1644
				}                                                                                                                  // 1645
				$this.data('datepicker', data);                                                                                    // 1646
			}                                                                                                                   // 1647
			if (typeof option === 'string' && typeof data[option] === 'function'){                                              // 1648
				internal_return = data[option].apply(data, args);                                                                  // 1649
			}                                                                                                                   // 1650
		});                                                                                                                  // 1651
                                                                                                                       // 1652
		if (                                                                                                                 // 1653
			internal_return === undefined ||                                                                                    // 1654
			internal_return instanceof Datepicker ||                                                                            // 1655
			internal_return instanceof DateRangePicker                                                                          // 1656
		)                                                                                                                    // 1657
			return this;                                                                                                        // 1658
                                                                                                                       // 1659
		if (this.length > 1)                                                                                                 // 1660
			throw new Error('Using only allowed for the collection of a single element (' + option + ' function)');             // 1661
		else                                                                                                                 // 1662
			return internal_return;                                                                                             // 1663
	};                                                                                                                    // 1664
	$.fn.datepicker = datepickerPlugin;                                                                                   // 1665
                                                                                                                       // 1666
	var defaults = $.fn.datepicker.defaults = {                                                                           // 1667
		assumeNearbyYear: false,                                                                                             // 1668
		autoclose: false,                                                                                                    // 1669
		beforeShowDay: $.noop,                                                                                               // 1670
		beforeShowMonth: $.noop,                                                                                             // 1671
		beforeShowYear: $.noop,                                                                                              // 1672
		beforeShowDecade: $.noop,                                                                                            // 1673
		beforeShowCentury: $.noop,                                                                                           // 1674
		calendarWeeks: false,                                                                                                // 1675
		clearBtn: false,                                                                                                     // 1676
		toggleActive: false,                                                                                                 // 1677
		daysOfWeekDisabled: [],                                                                                              // 1678
		daysOfWeekHighlighted: [],                                                                                           // 1679
		datesDisabled: [],                                                                                                   // 1680
		endDate: Infinity,                                                                                                   // 1681
		forceParse: true,                                                                                                    // 1682
		format: 'mm/dd/yyyy',                                                                                                // 1683
		keepEmptyValues: false,                                                                                              // 1684
		keyboardNavigation: true,                                                                                            // 1685
		language: 'en',                                                                                                      // 1686
		minViewMode: 0,                                                                                                      // 1687
		maxViewMode: 4,                                                                                                      // 1688
		multidate: false,                                                                                                    // 1689
		multidateSeparator: ',',                                                                                             // 1690
		orientation: "auto",                                                                                                 // 1691
		rtl: false,                                                                                                          // 1692
		startDate: -Infinity,                                                                                                // 1693
		startView: 0,                                                                                                        // 1694
		todayBtn: false,                                                                                                     // 1695
		todayHighlight: false,                                                                                               // 1696
		updateViewDate: true,                                                                                                // 1697
		weekStart: 0,                                                                                                        // 1698
		disableTouchKeyboard: false,                                                                                         // 1699
		enableOnReadonly: true,                                                                                              // 1700
		showOnFocus: true,                                                                                                   // 1701
		zIndexOffset: 10,                                                                                                    // 1702
		container: 'body',                                                                                                   // 1703
		immediateUpdates: false,                                                                                             // 1704
		title: '',                                                                                                           // 1705
		templates: {                                                                                                         // 1706
			leftArrow: '&#x00AB;',                                                                                              // 1707
			rightArrow: '&#x00BB;'                                                                                              // 1708
		},                                                                                                                   // 1709
    showWeekDays: true                                                                                                 // 1710
	};                                                                                                                    // 1711
	var locale_opts = $.fn.datepicker.locale_opts = [                                                                     // 1712
		'format',                                                                                                            // 1713
		'rtl',                                                                                                               // 1714
		'weekStart'                                                                                                          // 1715
	];                                                                                                                    // 1716
	$.fn.datepicker.Constructor = Datepicker;                                                                             // 1717
	var dates = $.fn.datepicker.dates = {                                                                                 // 1718
		en: {                                                                                                                // 1719
			days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],                               // 1720
			daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],                                                       // 1721
			daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],                                                                // 1722
			months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
			monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],                  // 1724
			today: "Today",                                                                                                     // 1725
			clear: "Clear",                                                                                                     // 1726
			titleFormat: "MM yyyy"                                                                                              // 1727
		}                                                                                                                    // 1728
	};                                                                                                                    // 1729
                                                                                                                       // 1730
	var DPGlobal = {                                                                                                      // 1731
		viewModes: [                                                                                                         // 1732
			{                                                                                                                   // 1733
				names: ['days', 'month'],                                                                                          // 1734
				clsName: 'days',                                                                                                   // 1735
				e: 'changeMonth'                                                                                                   // 1736
			},                                                                                                                  // 1737
			{                                                                                                                   // 1738
				names: ['months', 'year'],                                                                                         // 1739
				clsName: 'months',                                                                                                 // 1740
				e: 'changeYear',                                                                                                   // 1741
				navStep: 1                                                                                                         // 1742
			},                                                                                                                  // 1743
			{                                                                                                                   // 1744
				names: ['years', 'decade'],                                                                                        // 1745
				clsName: 'years',                                                                                                  // 1746
				e: 'changeDecade',                                                                                                 // 1747
				navStep: 10                                                                                                        // 1748
			},                                                                                                                  // 1749
			{                                                                                                                   // 1750
				names: ['decades', 'century'],                                                                                     // 1751
				clsName: 'decades',                                                                                                // 1752
				e: 'changeCentury',                                                                                                // 1753
				navStep: 100                                                                                                       // 1754
			},                                                                                                                  // 1755
			{                                                                                                                   // 1756
				names: ['centuries', 'millennium'],                                                                                // 1757
				clsName: 'centuries',                                                                                              // 1758
				e: 'changeMillennium',                                                                                             // 1759
				navStep: 1000                                                                                                      // 1760
			}                                                                                                                   // 1761
		],                                                                                                                   // 1762
		validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g,                                                                            // 1763
		nonpunctuation: /[^ -\/:-@\u5e74\u6708\u65e5\[-`{-~\t\n\r]+/g,                                                       // 1764
		parseFormat: function(format){                                                                                       // 1765
			if (typeof format.toValue === 'function' && typeof format.toDisplay === 'function')                                 // 1766
                return format;                                                                                         // 1767
            // IE treats \0 as a string end in inputs (truncating the value),                                          // 1768
			// so it's a bad format delimiter, anyway                                                                           // 1769
			var separators = format.replace(this.validParts, '\0').split('\0'),                                                 // 1770
				parts = format.match(this.validParts);                                                                             // 1771
			if (!separators || !separators.length || !parts || parts.length === 0){                                             // 1772
				throw new Error("Invalid date format.");                                                                           // 1773
			}                                                                                                                   // 1774
			return {separators: separators, parts: parts};                                                                      // 1775
		},                                                                                                                   // 1776
		parseDate: function(date, format, language, assumeNearby){                                                           // 1777
			if (!date)                                                                                                          // 1778
				return undefined;                                                                                                  // 1779
			if (date instanceof Date)                                                                                           // 1780
				return date;                                                                                                       // 1781
			if (typeof format === 'string')                                                                                     // 1782
				format = DPGlobal.parseFormat(format);                                                                             // 1783
			if (format.toValue)                                                                                                 // 1784
				return format.toValue(date, format, language);                                                                     // 1785
			var fn_map = {                                                                                                      // 1786
					d: 'moveDay',                                                                                                     // 1787
					m: 'moveMonth',                                                                                                   // 1788
					w: 'moveWeek',                                                                                                    // 1789
					y: 'moveYear'                                                                                                     // 1790
				},                                                                                                                 // 1791
				dateAliases = {                                                                                                    // 1792
					yesterday: '-1d',                                                                                                 // 1793
					today: '+0d',                                                                                                     // 1794
					tomorrow: '+1d'                                                                                                   // 1795
				},                                                                                                                 // 1796
				parts, part, dir, i, fn;                                                                                           // 1797
			if (date in dateAliases){                                                                                           // 1798
				date = dateAliases[date];                                                                                          // 1799
			}                                                                                                                   // 1800
			if (/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/i.test(date)){                                                         // 1801
				parts = date.match(/([\-+]\d+)([dmwy])/gi);                                                                        // 1802
				date = new Date();                                                                                                 // 1803
				for (i=0; i < parts.length; i++){                                                                                  // 1804
					part = parts[i].match(/([\-+]\d+)([dmwy])/i);                                                                     // 1805
					dir = Number(part[1]);                                                                                            // 1806
					fn = fn_map[part[2].toLowerCase()];                                                                               // 1807
					date = Datepicker.prototype[fn](date, dir);                                                                       // 1808
				}                                                                                                                  // 1809
				return Datepicker.prototype._zero_utc_time(date);                                                                  // 1810
			}                                                                                                                   // 1811
                                                                                                                       // 1812
			parts = date && date.match(this.nonpunctuation) || [];                                                              // 1813
                                                                                                                       // 1814
			function applyNearbyYear(year, threshold){                                                                          // 1815
				if (threshold === true)                                                                                            // 1816
					threshold = 10;                                                                                                   // 1817
                                                                                                                       // 1818
				// if year is 2 digits or less, than the user most likely is trying to get a recent century                        // 1819
				if (year < 100){                                                                                                   // 1820
					year += 2000;                                                                                                     // 1821
					// if the new year is more than threshold years in advance, use last century                                      // 1822
					if (year > ((new Date()).getFullYear()+threshold)){                                                               // 1823
						year -= 100;                                                                                                     // 1824
					}                                                                                                                 // 1825
				}                                                                                                                  // 1826
                                                                                                                       // 1827
				return year;                                                                                                       // 1828
			}                                                                                                                   // 1829
                                                                                                                       // 1830
			var parsed = {},                                                                                                    // 1831
				setters_order = ['yyyy', 'yy', 'M', 'MM', 'm', 'mm', 'd', 'dd'],                                                   // 1832
				setters_map = {                                                                                                    // 1833
					yyyy: function(d,v){                                                                                              // 1834
						return d.setUTCFullYear(assumeNearby ? applyNearbyYear(v, assumeNearby) : v);                                    // 1835
					},                                                                                                                // 1836
					m: function(d,v){                                                                                                 // 1837
						if (isNaN(d))                                                                                                    // 1838
							return d;                                                                                                       // 1839
						v -= 1;                                                                                                          // 1840
						while (v < 0) v += 12;                                                                                           // 1841
						v %= 12;                                                                                                         // 1842
						d.setUTCMonth(v);                                                                                                // 1843
						while (d.getUTCMonth() !== v)                                                                                    // 1844
							d.setUTCDate(d.getUTCDate()-1);                                                                                 // 1845
						return d;                                                                                                        // 1846
					},                                                                                                                // 1847
					d: function(d,v){                                                                                                 // 1848
						return d.setUTCDate(v);                                                                                          // 1849
					}                                                                                                                 // 1850
				},                                                                                                                 // 1851
				val, filtered;                                                                                                     // 1852
			setters_map['yy'] = setters_map['yyyy'];                                                                            // 1853
			setters_map['M'] = setters_map['MM'] = setters_map['mm'] = setters_map['m'];                                        // 1854
			setters_map['dd'] = setters_map['d'];                                                                               // 1855
			date = UTCToday();                                                                                                  // 1856
			var fparts = format.parts.slice();                                                                                  // 1857
			// Remove noop parts                                                                                                // 1858
			if (parts.length !== fparts.length){                                                                                // 1859
				fparts = $(fparts).filter(function(i,p){                                                                           // 1860
					return $.inArray(p, setters_order) !== -1;                                                                        // 1861
				}).toArray();                                                                                                      // 1862
			}                                                                                                                   // 1863
			// Process remainder                                                                                                // 1864
			function match_part(){                                                                                              // 1865
				var m = this.slice(0, parts[i].length),                                                                            // 1866
					p = parts[i].slice(0, m.length);                                                                                  // 1867
				return m.toLowerCase() === p.toLowerCase();                                                                        // 1868
			}                                                                                                                   // 1869
			if (parts.length === fparts.length){                                                                                // 1870
				var cnt;                                                                                                           // 1871
				for (i=0, cnt = fparts.length; i < cnt; i++){                                                                      // 1872
					val = parseInt(parts[i], 10);                                                                                     // 1873
					part = fparts[i];                                                                                                 // 1874
					if (isNaN(val)){                                                                                                  // 1875
						switch (part){                                                                                                   // 1876
							case 'MM':                                                                                                      // 1877
								filtered = $(dates[language].months).filter(match_part);                                                       // 1878
								val = $.inArray(filtered[0], dates[language].months) + 1;                                                      // 1879
								break;                                                                                                         // 1880
							case 'M':                                                                                                       // 1881
								filtered = $(dates[language].monthsShort).filter(match_part);                                                  // 1882
								val = $.inArray(filtered[0], dates[language].monthsShort) + 1;                                                 // 1883
								break;                                                                                                         // 1884
						}                                                                                                                // 1885
					}                                                                                                                 // 1886
					parsed[part] = val;                                                                                               // 1887
				}                                                                                                                  // 1888
				var _date, s;                                                                                                      // 1889
				for (i=0; i < setters_order.length; i++){                                                                          // 1890
					s = setters_order[i];                                                                                             // 1891
					if (s in parsed && !isNaN(parsed[s])){                                                                            // 1892
						_date = new Date(date);                                                                                          // 1893
						setters_map[s](_date, parsed[s]);                                                                                // 1894
						if (!isNaN(_date))                                                                                               // 1895
							date = _date;                                                                                                   // 1896
					}                                                                                                                 // 1897
				}                                                                                                                  // 1898
			}                                                                                                                   // 1899
			return date;                                                                                                        // 1900
		},                                                                                                                   // 1901
		formatDate: function(date, format, language){                                                                        // 1902
			if (!date)                                                                                                          // 1903
				return '';                                                                                                         // 1904
			if (typeof format === 'string')                                                                                     // 1905
				format = DPGlobal.parseFormat(format);                                                                             // 1906
			if (format.toDisplay)                                                                                               // 1907
                return format.toDisplay(date, format, language);                                                       // 1908
            var val = {                                                                                                // 1909
				d: date.getUTCDate(),                                                                                              // 1910
				D: dates[language].daysShort[date.getUTCDay()],                                                                    // 1911
				DD: dates[language].days[date.getUTCDay()],                                                                        // 1912
				m: date.getUTCMonth() + 1,                                                                                         // 1913
				M: dates[language].monthsShort[date.getUTCMonth()],                                                                // 1914
				MM: dates[language].months[date.getUTCMonth()],                                                                    // 1915
				yy: date.getUTCFullYear().toString().substring(2),                                                                 // 1916
				yyyy: date.getUTCFullYear()                                                                                        // 1917
			};                                                                                                                  // 1918
			val.dd = (val.d < 10 ? '0' : '') + val.d;                                                                           // 1919
			val.mm = (val.m < 10 ? '0' : '') + val.m;                                                                           // 1920
			date = [];                                                                                                          // 1921
			var seps = $.extend([], format.separators);                                                                         // 1922
			for (var i=0, cnt = format.parts.length; i <= cnt; i++){                                                            // 1923
				if (seps.length)                                                                                                   // 1924
					date.push(seps.shift());                                                                                          // 1925
				date.push(val[format.parts[i]]);                                                                                   // 1926
			}                                                                                                                   // 1927
			return date.join('');                                                                                               // 1928
		},                                                                                                                   // 1929
		headTemplate: '<thead>'+                                                                                             // 1930
			              '<tr>'+                                                                                               // 1931
			                '<th colspan="7" class="datepicker-title"></th>'+                                                   // 1932
			              '</tr>'+                                                                                              // 1933
							'<tr>'+                                                                                                         // 1934
								'<th class="prev">'+defaults.templates.leftArrow+'</th>'+                                                      // 1935
								'<th colspan="5" class="datepicker-switch"></th>'+                                                             // 1936
								'<th class="next">'+defaults.templates.rightArrow+'</th>'+                                                     // 1937
							'</tr>'+                                                                                                        // 1938
						'</thead>',                                                                                                      // 1939
		contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',                                                       // 1940
		footTemplate: '<tfoot>'+                                                                                             // 1941
							'<tr>'+                                                                                                         // 1942
								'<th colspan="7" class="today"></th>'+                                                                         // 1943
							'</tr>'+                                                                                                        // 1944
							'<tr>'+                                                                                                         // 1945
								'<th colspan="7" class="clear"></th>'+                                                                         // 1946
							'</tr>'+                                                                                                        // 1947
						'</tfoot>'                                                                                                       // 1948
	};                                                                                                                    // 1949
	DPGlobal.template = '<div class="datepicker">'+                                                                       // 1950
							'<div class="datepicker-days">'+                                                                                // 1951
								'<table class="table-condensed">'+                                                                             // 1952
									DPGlobal.headTemplate+                                                                                        // 1953
									'<tbody></tbody>'+                                                                                            // 1954
									DPGlobal.footTemplate+                                                                                        // 1955
								'</table>'+                                                                                                    // 1956
							'</div>'+                                                                                                       // 1957
							'<div class="datepicker-months">'+                                                                              // 1958
								'<table class="table-condensed">'+                                                                             // 1959
									DPGlobal.headTemplate+                                                                                        // 1960
									DPGlobal.contTemplate+                                                                                        // 1961
									DPGlobal.footTemplate+                                                                                        // 1962
								'</table>'+                                                                                                    // 1963
							'</div>'+                                                                                                       // 1964
							'<div class="datepicker-years">'+                                                                               // 1965
								'<table class="table-condensed">'+                                                                             // 1966
									DPGlobal.headTemplate+                                                                                        // 1967
									DPGlobal.contTemplate+                                                                                        // 1968
									DPGlobal.footTemplate+                                                                                        // 1969
								'</table>'+                                                                                                    // 1970
							'</div>'+                                                                                                       // 1971
							'<div class="datepicker-decades">'+                                                                             // 1972
								'<table class="table-condensed">'+                                                                             // 1973
									DPGlobal.headTemplate+                                                                                        // 1974
									DPGlobal.contTemplate+                                                                                        // 1975
									DPGlobal.footTemplate+                                                                                        // 1976
								'</table>'+                                                                                                    // 1977
							'</div>'+                                                                                                       // 1978
							'<div class="datepicker-centuries">'+                                                                           // 1979
								'<table class="table-condensed">'+                                                                             // 1980
									DPGlobal.headTemplate+                                                                                        // 1981
									DPGlobal.contTemplate+                                                                                        // 1982
									DPGlobal.footTemplate+                                                                                        // 1983
								'</table>'+                                                                                                    // 1984
							'</div>'+                                                                                                       // 1985
						'</div>';                                                                                                        // 1986
                                                                                                                       // 1987
	$.fn.datepicker.DPGlobal = DPGlobal;                                                                                  // 1988
                                                                                                                       // 1989
                                                                                                                       // 1990
	/* DATEPICKER NO CONFLICT                                                                                             // 1991
	* =================== */                                                                                              // 1992
                                                                                                                       // 1993
	$.fn.datepicker.noConflict = function(){                                                                              // 1994
		$.fn.datepicker = old;                                                                                               // 1995
		return this;                                                                                                         // 1996
	};                                                                                                                    // 1997
                                                                                                                       // 1998
	/* DATEPICKER VERSION                                                                                                 // 1999
	 * =================== */                                                                                             // 2000
	$.fn.datepicker.version = '1.7.1';                                                                                    // 2001
                                                                                                                       // 2002
	$.fn.datepicker.deprecated = function(msg){                                                                           // 2003
		var console = window.console;                                                                                        // 2004
		if (console && console.warn) {                                                                                       // 2005
			console.warn('DEPRECATED: ' + msg);                                                                                 // 2006
		}                                                                                                                    // 2007
	};                                                                                                                    // 2008
                                                                                                                       // 2009
                                                                                                                       // 2010
	/* DATEPICKER DATA-API                                                                                                // 2011
	* ================== */                                                                                               // 2012
                                                                                                                       // 2013
	$(document).on(                                                                                                       // 2014
		'focus.datepicker.data-api click.datepicker.data-api',                                                               // 2015
		'[data-provide="datepicker"]',                                                                                       // 2016
		function(e){                                                                                                         // 2017
			var $this = $(this);                                                                                                // 2018
			if ($this.data('datepicker'))                                                                                       // 2019
				return;                                                                                                            // 2020
			e.preventDefault();                                                                                                 // 2021
			// component click requires us to explicitly show it                                                                // 2022
			datepickerPlugin.call($this, 'show');                                                                               // 2023
		}                                                                                                                    // 2024
	);                                                                                                                    // 2025
	$(function(){                                                                                                         // 2026
		datepickerPlugin.call($('[data-provide="datepicker-inline"]'));                                                      // 2027
	});                                                                                                                   // 2028
                                                                                                                       // 2029
}));                                                                                                                   // 2030
                                                                                                                       // 2031
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rajit:bootstrap3-datepicker'] = {};

})();
