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

/* Package-scope variables */
var Isotope;

(function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// packages/isotope_isotope/packages/isotope_isotope.js              //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/isotope:isotope/dist/isotope.pkgd.js                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/*!                                                                                                                    // 1
 * Isotope PACKAGED v2.1.0                                                                                             // 2
 * Filter & sort magical layouts                                                                                       // 3
 * http://isotope.metafizzy.co                                                                                         // 4
 */                                                                                                                    // 5
                                                                                                                       // 6
/**                                                                                                                    // 7
 * Bridget makes jQuery widgets                                                                                        // 8
 * v1.1.0                                                                                                              // 9
 * MIT license                                                                                                         // 10
 */                                                                                                                    // 11
                                                                                                                       // 12
( function( window ) {                                                                                                 // 13
                                                                                                                       // 14
                                                                                                                       // 15
                                                                                                                       // 16
// -------------------------- utils -------------------------- //                                                      // 17
                                                                                                                       // 18
var slice = Array.prototype.slice;                                                                                     // 19
                                                                                                                       // 20
function noop() {}                                                                                                     // 21
                                                                                                                       // 22
// -------------------------- definition -------------------------- //                                                 // 23
                                                                                                                       // 24
function defineBridget( $ ) {                                                                                          // 25
                                                                                                                       // 26
// bail if no jQuery                                                                                                   // 27
if ( !$ ) {                                                                                                            // 28
  return;                                                                                                              // 29
}                                                                                                                      // 30
                                                                                                                       // 31
// -------------------------- addOptionMethod -------------------------- //                                            // 32
                                                                                                                       // 33
/**                                                                                                                    // 34
 * adds option method -> $().plugin('option', {...})                                                                   // 35
 * @param {Function} PluginClass - constructor class                                                                   // 36
 */                                                                                                                    // 37
function addOptionMethod( PluginClass ) {                                                                              // 38
  // don't overwrite original option method                                                                            // 39
  if ( PluginClass.prototype.option ) {                                                                                // 40
    return;                                                                                                            // 41
  }                                                                                                                    // 42
                                                                                                                       // 43
  // option setter                                                                                                     // 44
  PluginClass.prototype.option = function( opts ) {                                                                    // 45
    // bail out if not an object                                                                                       // 46
    if ( !$.isPlainObject( opts ) ){                                                                                   // 47
      return;                                                                                                          // 48
    }                                                                                                                  // 49
    this.options = $.extend( true, this.options, opts );                                                               // 50
  };                                                                                                                   // 51
}                                                                                                                      // 52
                                                                                                                       // 53
// -------------------------- plugin bridge -------------------------- //                                              // 54
                                                                                                                       // 55
// helper function for logging errors                                                                                  // 56
// $.error breaks jQuery chaining                                                                                      // 57
var logError = typeof console === 'undefined' ? noop :                                                                 // 58
  function( message ) {                                                                                                // 59
    console.error( message );                                                                                          // 60
  };                                                                                                                   // 61
                                                                                                                       // 62
/**                                                                                                                    // 63
 * jQuery plugin bridge, access methods like $elem.plugin('method')                                                    // 64
 * @param {String} namespace - plugin name                                                                             // 65
 * @param {Function} PluginClass - constructor class                                                                   // 66
 */                                                                                                                    // 67
function bridge( namespace, PluginClass ) {                                                                            // 68
  // add to jQuery fn namespace                                                                                        // 69
  $.fn[ namespace ] = function( options ) {                                                                            // 70
    if ( typeof options === 'string' ) {                                                                               // 71
      // call plugin method when first argument is a string                                                            // 72
      // get arguments for method                                                                                      // 73
      var args = slice.call( arguments, 1 );                                                                           // 74
                                                                                                                       // 75
      for ( var i=0, len = this.length; i < len; i++ ) {                                                               // 76
        var elem = this[i];                                                                                            // 77
        var instance = $.data( elem, namespace );                                                                      // 78
        if ( !instance ) {                                                                                             // 79
          logError( "cannot call methods on " + namespace + " prior to initialization; " +                             // 80
            "attempted to call '" + options + "'" );                                                                   // 81
          continue;                                                                                                    // 82
        }                                                                                                              // 83
        if ( !$.isFunction( instance[options] ) || options.charAt(0) === '_' ) {                                       // 84
          logError( "no such method '" + options + "' for " + namespace + " instance" );                               // 85
          continue;                                                                                                    // 86
        }                                                                                                              // 87
                                                                                                                       // 88
        // trigger method with arguments                                                                               // 89
        var returnValue = instance[ options ].apply( instance, args );                                                 // 90
                                                                                                                       // 91
        // break look and return first value if provided                                                               // 92
        if ( returnValue !== undefined ) {                                                                             // 93
          return returnValue;                                                                                          // 94
        }                                                                                                              // 95
      }                                                                                                                // 96
      // return this if no return value                                                                                // 97
      return this;                                                                                                     // 98
    } else {                                                                                                           // 99
      return this.each( function() {                                                                                   // 100
        var instance = $.data( this, namespace );                                                                      // 101
        if ( instance ) {                                                                                              // 102
          // apply options & init                                                                                      // 103
          instance.option( options );                                                                                  // 104
          instance._init();                                                                                            // 105
        } else {                                                                                                       // 106
          // initialize new instance                                                                                   // 107
          instance = new PluginClass( this, options );                                                                 // 108
          $.data( this, namespace, instance );                                                                         // 109
        }                                                                                                              // 110
      });                                                                                                              // 111
    }                                                                                                                  // 112
  };                                                                                                                   // 113
                                                                                                                       // 114
}                                                                                                                      // 115
                                                                                                                       // 116
// -------------------------- bridget -------------------------- //                                                    // 117
                                                                                                                       // 118
/**                                                                                                                    // 119
 * converts a Prototypical class into a proper jQuery plugin                                                           // 120
 *   the class must have a ._init method                                                                               // 121
 * @param {String} namespace - plugin name, used in $().pluginName                                                     // 122
 * @param {Function} PluginClass - constructor class                                                                   // 123
 */                                                                                                                    // 124
$.bridget = function( namespace, PluginClass ) {                                                                       // 125
  addOptionMethod( PluginClass );                                                                                      // 126
  bridge( namespace, PluginClass );                                                                                    // 127
};                                                                                                                     // 128
                                                                                                                       // 129
return $.bridget;                                                                                                      // 130
                                                                                                                       // 131
}                                                                                                                      // 132
                                                                                                                       // 133
// transport                                                                                                           // 134
if ( typeof define === 'function' && define.amd ) {                                                                    // 135
  // AMD                                                                                                               // 136
  define( 'jquery-bridget/jquery.bridget',[ 'jquery' ], defineBridget );                                               // 137
} else if ( typeof exports === 'object' ) {                                                                            // 138
  defineBridget( require('jquery') );                                                                                  // 139
} else {                                                                                                               // 140
  // get jquery from browser global                                                                                    // 141
  defineBridget( window.jQuery );                                                                                      // 142
}                                                                                                                      // 143
                                                                                                                       // 144
})( window );                                                                                                          // 145
                                                                                                                       // 146
/*!                                                                                                                    // 147
 * eventie v1.0.5                                                                                                      // 148
 * event binding helper                                                                                                // 149
 *   eventie.bind( elem, 'click', myFn )                                                                               // 150
 *   eventie.unbind( elem, 'click', myFn )                                                                             // 151
 * MIT license                                                                                                         // 152
 */                                                                                                                    // 153
                                                                                                                       // 154
/*jshint browser: true, undef: true, unused: true */                                                                   // 155
/*global define: false, module: false */                                                                               // 156
                                                                                                                       // 157
( function( window ) {                                                                                                 // 158
                                                                                                                       // 159
                                                                                                                       // 160
                                                                                                                       // 161
var docElem = document.documentElement;                                                                                // 162
                                                                                                                       // 163
var bind = function() {};                                                                                              // 164
                                                                                                                       // 165
function getIEEvent( obj ) {                                                                                           // 166
  var event = window.event;                                                                                            // 167
  // add event.target                                                                                                  // 168
  event.target = event.target || event.srcElement || obj;                                                              // 169
  return event;                                                                                                        // 170
}                                                                                                                      // 171
                                                                                                                       // 172
if ( docElem.addEventListener ) {                                                                                      // 173
  bind = function( obj, type, fn ) {                                                                                   // 174
    obj.addEventListener( type, fn, false );                                                                           // 175
  };                                                                                                                   // 176
} else if ( docElem.attachEvent ) {                                                                                    // 177
  bind = function( obj, type, fn ) {                                                                                   // 178
    obj[ type + fn ] = fn.handleEvent ?                                                                                // 179
      function() {                                                                                                     // 180
        var event = getIEEvent( obj );                                                                                 // 181
        fn.handleEvent.call( fn, event );                                                                              // 182
      } :                                                                                                              // 183
      function() {                                                                                                     // 184
        var event = getIEEvent( obj );                                                                                 // 185
        fn.call( obj, event );                                                                                         // 186
      };                                                                                                               // 187
    obj.attachEvent( "on" + type, obj[ type + fn ] );                                                                  // 188
  };                                                                                                                   // 189
}                                                                                                                      // 190
                                                                                                                       // 191
var unbind = function() {};                                                                                            // 192
                                                                                                                       // 193
if ( docElem.removeEventListener ) {                                                                                   // 194
  unbind = function( obj, type, fn ) {                                                                                 // 195
    obj.removeEventListener( type, fn, false );                                                                        // 196
  };                                                                                                                   // 197
} else if ( docElem.detachEvent ) {                                                                                    // 198
  unbind = function( obj, type, fn ) {                                                                                 // 199
    obj.detachEvent( "on" + type, obj[ type + fn ] );                                                                  // 200
    try {                                                                                                              // 201
      delete obj[ type + fn ];                                                                                         // 202
    } catch ( err ) {                                                                                                  // 203
      // can't delete window object properties                                                                         // 204
      obj[ type + fn ] = undefined;                                                                                    // 205
    }                                                                                                                  // 206
  };                                                                                                                   // 207
}                                                                                                                      // 208
                                                                                                                       // 209
var eventie = {                                                                                                        // 210
  bind: bind,                                                                                                          // 211
  unbind: unbind                                                                                                       // 212
};                                                                                                                     // 213
                                                                                                                       // 214
// ----- module definition ----- //                                                                                    // 215
                                                                                                                       // 216
if ( typeof define === 'function' && define.amd ) {                                                                    // 217
  // AMD                                                                                                               // 218
  define( 'eventie/eventie',eventie );                                                                                 // 219
} else if ( typeof exports === 'object' ) {                                                                            // 220
  // CommonJS                                                                                                          // 221
  module.exports = eventie;                                                                                            // 222
} else {                                                                                                               // 223
  // browser global                                                                                                    // 224
  window.eventie = eventie;                                                                                            // 225
}                                                                                                                      // 226
                                                                                                                       // 227
})( this );                                                                                                            // 228
                                                                                                                       // 229
/*!                                                                                                                    // 230
 * docReady v1.0.4                                                                                                     // 231
 * Cross browser DOMContentLoaded event emitter                                                                        // 232
 * MIT license                                                                                                         // 233
 */                                                                                                                    // 234
                                                                                                                       // 235
/*jshint browser: true, strict: true, undef: true, unused: true*/                                                      // 236
/*global define: false, require: false, module: false */                                                               // 237
                                                                                                                       // 238
( function( window ) {                                                                                                 // 239
                                                                                                                       // 240
                                                                                                                       // 241
                                                                                                                       // 242
var document = window.document;                                                                                        // 243
// collection of functions to be triggered on ready                                                                    // 244
var queue = [];                                                                                                        // 245
                                                                                                                       // 246
function docReady( fn ) {                                                                                              // 247
  // throw out non-functions                                                                                           // 248
  if ( typeof fn !== 'function' ) {                                                                                    // 249
    return;                                                                                                            // 250
  }                                                                                                                    // 251
                                                                                                                       // 252
  if ( docReady.isReady ) {                                                                                            // 253
    // ready now, hit it                                                                                               // 254
    fn();                                                                                                              // 255
  } else {                                                                                                             // 256
    // queue function when ready                                                                                       // 257
    queue.push( fn );                                                                                                  // 258
  }                                                                                                                    // 259
}                                                                                                                      // 260
                                                                                                                       // 261
docReady.isReady = false;                                                                                              // 262
                                                                                                                       // 263
// triggered on various doc ready events                                                                               // 264
function onReady( event ) {                                                                                            // 265
  // bail if already triggered or IE8 document is not ready just yet                                                   // 266
  var isIE8NotReady = event.type === 'readystatechange' && document.readyState !== 'complete';                         // 267
  if ( docReady.isReady || isIE8NotReady ) {                                                                           // 268
    return;                                                                                                            // 269
  }                                                                                                                    // 270
                                                                                                                       // 271
  trigger();                                                                                                           // 272
}                                                                                                                      // 273
                                                                                                                       // 274
function trigger() {                                                                                                   // 275
  docReady.isReady = true;                                                                                             // 276
  // process queue                                                                                                     // 277
  for ( var i=0, len = queue.length; i < len; i++ ) {                                                                  // 278
    var fn = queue[i];                                                                                                 // 279
    fn();                                                                                                              // 280
  }                                                                                                                    // 281
}                                                                                                                      // 282
                                                                                                                       // 283
function defineDocReady( eventie ) {                                                                                   // 284
  // trigger ready if page is ready                                                                                    // 285
  if ( document.readyState === 'complete' ) {                                                                          // 286
    trigger();                                                                                                         // 287
  } else {                                                                                                             // 288
    // listen for events                                                                                               // 289
    eventie.bind( document, 'DOMContentLoaded', onReady );                                                             // 290
    eventie.bind( document, 'readystatechange', onReady );                                                             // 291
    eventie.bind( window, 'load', onReady );                                                                           // 292
  }                                                                                                                    // 293
                                                                                                                       // 294
  return docReady;                                                                                                     // 295
}                                                                                                                      // 296
                                                                                                                       // 297
// transport                                                                                                           // 298
if ( typeof define === 'function' && define.amd ) {                                                                    // 299
  // AMD                                                                                                               // 300
  define( 'doc-ready/doc-ready',[ 'eventie/eventie' ], defineDocReady );                                               // 301
} else if ( typeof exports === 'object' ) {                                                                            // 302
  module.exports = defineDocReady( require('eventie') );                                                               // 303
} else {                                                                                                               // 304
  // browser global                                                                                                    // 305
  window.docReady = defineDocReady( window.eventie );                                                                  // 306
}                                                                                                                      // 307
                                                                                                                       // 308
})( window );                                                                                                          // 309
                                                                                                                       // 310
/*!                                                                                                                    // 311
 * EventEmitter v4.2.9 - git.io/ee                                                                                     // 312
 * Oliver Caldwell                                                                                                     // 313
 * MIT license                                                                                                         // 314
 * @preserve                                                                                                           // 315
 */                                                                                                                    // 316
                                                                                                                       // 317
(function () {                                                                                                         // 318
                                                                                                                       // 319
                                                                                                                       // 320
    /**                                                                                                                // 321
     * Class for managing events.                                                                                      // 322
     * Can be extended to provide event functionality in other classes.                                                // 323
     *                                                                                                                 // 324
     * @class EventEmitter Manages event registering and emitting.                                                     // 325
     */                                                                                                                // 326
    function EventEmitter() {}                                                                                         // 327
                                                                                                                       // 328
    // Shortcuts to improve speed and size                                                                             // 329
    var proto = EventEmitter.prototype;                                                                                // 330
    var exports = this;                                                                                                // 331
    var originalGlobalValue = exports.EventEmitter;                                                                    // 332
                                                                                                                       // 333
    /**                                                                                                                // 334
     * Finds the index of the listener for the event in its storage array.                                             // 335
     *                                                                                                                 // 336
     * @param {Function[]} listeners Array of listeners to search through.                                             // 337
     * @param {Function} listener Method to look for.                                                                  // 338
     * @return {Number} Index of the specified listener, -1 if not found                                               // 339
     * @api private                                                                                                    // 340
     */                                                                                                                // 341
    function indexOfListener(listeners, listener) {                                                                    // 342
        var i = listeners.length;                                                                                      // 343
        while (i--) {                                                                                                  // 344
            if (listeners[i].listener === listener) {                                                                  // 345
                return i;                                                                                              // 346
            }                                                                                                          // 347
        }                                                                                                              // 348
                                                                                                                       // 349
        return -1;                                                                                                     // 350
    }                                                                                                                  // 351
                                                                                                                       // 352
    /**                                                                                                                // 353
     * Alias a method while keeping the context correct, to allow for overwriting of target method.                    // 354
     *                                                                                                                 // 355
     * @param {String} name The name of the target method.                                                             // 356
     * @return {Function} The aliased method                                                                           // 357
     * @api private                                                                                                    // 358
     */                                                                                                                // 359
    function alias(name) {                                                                                             // 360
        return function aliasClosure() {                                                                               // 361
            return this[name].apply(this, arguments);                                                                  // 362
        };                                                                                                             // 363
    }                                                                                                                  // 364
                                                                                                                       // 365
    /**                                                                                                                // 366
     * Returns the listener array for the specified event.                                                             // 367
     * Will initialise the event object and listener arrays if required.                                               // 368
     * Will return an object if you use a regex search. The object contains keys for each matched event. So /ba[rz]/ might return an object containing bar and baz. But only if you have either defined them with defineEvent or added some listeners to them.
     * Each property in the object response is an array of listener functions.                                         // 370
     *                                                                                                                 // 371
     * @param {String|RegExp} evt Name of the event to return the listeners from.                                      // 372
     * @return {Function[]|Object} All listener functions for the event.                                               // 373
     */                                                                                                                // 374
    proto.getListeners = function getListeners(evt) {                                                                  // 375
        var events = this._getEvents();                                                                                // 376
        var response;                                                                                                  // 377
        var key;                                                                                                       // 378
                                                                                                                       // 379
        // Return a concatenated array of all matching events if                                                       // 380
        // the selector is a regular expression.                                                                       // 381
        if (evt instanceof RegExp) {                                                                                   // 382
            response = {};                                                                                             // 383
            for (key in events) {                                                                                      // 384
                if (events.hasOwnProperty(key) && evt.test(key)) {                                                     // 385
                    response[key] = events[key];                                                                       // 386
                }                                                                                                      // 387
            }                                                                                                          // 388
        }                                                                                                              // 389
        else {                                                                                                         // 390
            response = events[evt] || (events[evt] = []);                                                              // 391
        }                                                                                                              // 392
                                                                                                                       // 393
        return response;                                                                                               // 394
    };                                                                                                                 // 395
                                                                                                                       // 396
    /**                                                                                                                // 397
     * Takes a list of listener objects and flattens it into a list of listener functions.                             // 398
     *                                                                                                                 // 399
     * @param {Object[]} listeners Raw listener objects.                                                               // 400
     * @return {Function[]} Just the listener functions.                                                               // 401
     */                                                                                                                // 402
    proto.flattenListeners = function flattenListeners(listeners) {                                                    // 403
        var flatListeners = [];                                                                                        // 404
        var i;                                                                                                         // 405
                                                                                                                       // 406
        for (i = 0; i < listeners.length; i += 1) {                                                                    // 407
            flatListeners.push(listeners[i].listener);                                                                 // 408
        }                                                                                                              // 409
                                                                                                                       // 410
        return flatListeners;                                                                                          // 411
    };                                                                                                                 // 412
                                                                                                                       // 413
    /**                                                                                                                // 414
     * Fetches the requested listeners via getListeners but will always return the results inside an object. This is mainly for internal use but others may find it useful.
     *                                                                                                                 // 416
     * @param {String|RegExp} evt Name of the event to return the listeners from.                                      // 417
     * @return {Object} All listener functions for an event in an object.                                              // 418
     */                                                                                                                // 419
    proto.getListenersAsObject = function getListenersAsObject(evt) {                                                  // 420
        var listeners = this.getListeners(evt);                                                                        // 421
        var response;                                                                                                  // 422
                                                                                                                       // 423
        if (listeners instanceof Array) {                                                                              // 424
            response = {};                                                                                             // 425
            response[evt] = listeners;                                                                                 // 426
        }                                                                                                              // 427
                                                                                                                       // 428
        return response || listeners;                                                                                  // 429
    };                                                                                                                 // 430
                                                                                                                       // 431
    /**                                                                                                                // 432
     * Adds a listener function to the specified event.                                                                // 433
     * The listener will not be added if it is a duplicate.                                                            // 434
     * If the listener returns true then it will be removed after it is called.                                        // 435
     * If you pass a regular expression as the event name then the listener will be added to all events that match it. // 436
     *                                                                                                                 // 437
     * @param {String|RegExp} evt Name of the event to attach the listener to.                                         // 438
     * @param {Function} listener Method to be called when the event is emitted. If the function returns true then it will be removed after calling.
     * @return {Object} Current instance of EventEmitter for chaining.                                                 // 440
     */                                                                                                                // 441
    proto.addListener = function addListener(evt, listener) {                                                          // 442
        var listeners = this.getListenersAsObject(evt);                                                                // 443
        var listenerIsWrapped = typeof listener === 'object';                                                          // 444
        var key;                                                                                                       // 445
                                                                                                                       // 446
        for (key in listeners) {                                                                                       // 447
            if (listeners.hasOwnProperty(key) && indexOfListener(listeners[key], listener) === -1) {                   // 448
                listeners[key].push(listenerIsWrapped ? listener : {                                                   // 449
                    listener: listener,                                                                                // 450
                    once: false                                                                                        // 451
                });                                                                                                    // 452
            }                                                                                                          // 453
        }                                                                                                              // 454
                                                                                                                       // 455
        return this;                                                                                                   // 456
    };                                                                                                                 // 457
                                                                                                                       // 458
    /**                                                                                                                // 459
     * Alias of addListener                                                                                            // 460
     */                                                                                                                // 461
    proto.on = alias('addListener');                                                                                   // 462
                                                                                                                       // 463
    /**                                                                                                                // 464
     * Semi-alias of addListener. It will add a listener that will be                                                  // 465
     * automatically removed after its first execution.                                                                // 466
     *                                                                                                                 // 467
     * @param {String|RegExp} evt Name of the event to attach the listener to.                                         // 468
     * @param {Function} listener Method to be called when the event is emitted. If the function returns true then it will be removed after calling.
     * @return {Object} Current instance of EventEmitter for chaining.                                                 // 470
     */                                                                                                                // 471
    proto.addOnceListener = function addOnceListener(evt, listener) {                                                  // 472
        return this.addListener(evt, {                                                                                 // 473
            listener: listener,                                                                                        // 474
            once: true                                                                                                 // 475
        });                                                                                                            // 476
    };                                                                                                                 // 477
                                                                                                                       // 478
    /**                                                                                                                // 479
     * Alias of addOnceListener.                                                                                       // 480
     */                                                                                                                // 481
    proto.once = alias('addOnceListener');                                                                             // 482
                                                                                                                       // 483
    /**                                                                                                                // 484
     * Defines an event name. This is required if you want to use a regex to add a listener to multiple events at once. If you don't do this then how do you expect it to know what event to add to? Should it just add to every possible match for a regex? No. That is scary and bad.
     * You need to tell it what event names should be matched by a regex.                                              // 486
     *                                                                                                                 // 487
     * @param {String} evt Name of the event to create.                                                                // 488
     * @return {Object} Current instance of EventEmitter for chaining.                                                 // 489
     */                                                                                                                // 490
    proto.defineEvent = function defineEvent(evt) {                                                                    // 491
        this.getListeners(evt);                                                                                        // 492
        return this;                                                                                                   // 493
    };                                                                                                                 // 494
                                                                                                                       // 495
    /**                                                                                                                // 496
     * Uses defineEvent to define multiple events.                                                                     // 497
     *                                                                                                                 // 498
     * @param {String[]} evts An array of event names to define.                                                       // 499
     * @return {Object} Current instance of EventEmitter for chaining.                                                 // 500
     */                                                                                                                // 501
    proto.defineEvents = function defineEvents(evts) {                                                                 // 502
        for (var i = 0; i < evts.length; i += 1) {                                                                     // 503
            this.defineEvent(evts[i]);                                                                                 // 504
        }                                                                                                              // 505
        return this;                                                                                                   // 506
    };                                                                                                                 // 507
                                                                                                                       // 508
    /**                                                                                                                // 509
     * Removes a listener function from the specified event.                                                           // 510
     * When passed a regular expression as the event name, it will remove the listener from all events that match it.  // 511
     *                                                                                                                 // 512
     * @param {String|RegExp} evt Name of the event to remove the listener from.                                       // 513
     * @param {Function} listener Method to remove from the event.                                                     // 514
     * @return {Object} Current instance of EventEmitter for chaining.                                                 // 515
     */                                                                                                                // 516
    proto.removeListener = function removeListener(evt, listener) {                                                    // 517
        var listeners = this.getListenersAsObject(evt);                                                                // 518
        var index;                                                                                                     // 519
        var key;                                                                                                       // 520
                                                                                                                       // 521
        for (key in listeners) {                                                                                       // 522
            if (listeners.hasOwnProperty(key)) {                                                                       // 523
                index = indexOfListener(listeners[key], listener);                                                     // 524
                                                                                                                       // 525
                if (index !== -1) {                                                                                    // 526
                    listeners[key].splice(index, 1);                                                                   // 527
                }                                                                                                      // 528
            }                                                                                                          // 529
        }                                                                                                              // 530
                                                                                                                       // 531
        return this;                                                                                                   // 532
    };                                                                                                                 // 533
                                                                                                                       // 534
    /**                                                                                                                // 535
     * Alias of removeListener                                                                                         // 536
     */                                                                                                                // 537
    proto.off = alias('removeListener');                                                                               // 538
                                                                                                                       // 539
    /**                                                                                                                // 540
     * Adds listeners in bulk using the manipulateListeners method.                                                    // 541
     * If you pass an object as the second argument you can add to multiple events at once. The object should contain key value pairs of events and listeners or listener arrays. You can also pass it an event name and an array of listeners to be added.
     * You can also pass it a regular expression to add the array of listeners to all events that match it.            // 543
     * Yeah, this function does quite a bit. That's probably a bad thing.                                              // 544
     *                                                                                                                 // 545
     * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to add to multiple events at once.
     * @param {Function[]} [listeners] An optional array of listener functions to add.                                 // 547
     * @return {Object} Current instance of EventEmitter for chaining.                                                 // 548
     */                                                                                                                // 549
    proto.addListeners = function addListeners(evt, listeners) {                                                       // 550
        // Pass through to manipulateListeners                                                                         // 551
        return this.manipulateListeners(false, evt, listeners);                                                        // 552
    };                                                                                                                 // 553
                                                                                                                       // 554
    /**                                                                                                                // 555
     * Removes listeners in bulk using the manipulateListeners method.                                                 // 556
     * If you pass an object as the second argument you can remove from multiple events at once. The object should contain key value pairs of events and listeners or listener arrays.
     * You can also pass it an event name and an array of listeners to be removed.                                     // 558
     * You can also pass it a regular expression to remove the listeners from all events that match it.                // 559
     *                                                                                                                 // 560
     * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to remove from multiple events at once.
     * @param {Function[]} [listeners] An optional array of listener functions to remove.                              // 562
     * @return {Object} Current instance of EventEmitter for chaining.                                                 // 563
     */                                                                                                                // 564
    proto.removeListeners = function removeListeners(evt, listeners) {                                                 // 565
        // Pass through to manipulateListeners                                                                         // 566
        return this.manipulateListeners(true, evt, listeners);                                                         // 567
    };                                                                                                                 // 568
                                                                                                                       // 569
    /**                                                                                                                // 570
     * Edits listeners in bulk. The addListeners and removeListeners methods both use this to do their job. You should really use those instead, this is a little lower level.
     * The first argument will determine if the listeners are removed (true) or added (false).                         // 572
     * If you pass an object as the second argument you can add/remove from multiple events at once. The object should contain key value pairs of events and listeners or listener arrays.
     * You can also pass it an event name and an array of listeners to be added/removed.                               // 574
     * You can also pass it a regular expression to manipulate the listeners of all events that match it.              // 575
     *                                                                                                                 // 576
     * @param {Boolean} remove True if you want to remove listeners, false if you want to add.                         // 577
     * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to add/remove from multiple events at once.
     * @param {Function[]} [listeners] An optional array of listener functions to add/remove.                          // 579
     * @return {Object} Current instance of EventEmitter for chaining.                                                 // 580
     */                                                                                                                // 581
    proto.manipulateListeners = function manipulateListeners(remove, evt, listeners) {                                 // 582
        var i;                                                                                                         // 583
        var value;                                                                                                     // 584
        var single = remove ? this.removeListener : this.addListener;                                                  // 585
        var multiple = remove ? this.removeListeners : this.addListeners;                                              // 586
                                                                                                                       // 587
        // If evt is an object then pass each of its properties to this method                                         // 588
        if (typeof evt === 'object' && !(evt instanceof RegExp)) {                                                     // 589
            for (i in evt) {                                                                                           // 590
                if (evt.hasOwnProperty(i) && (value = evt[i])) {                                                       // 591
                    // Pass the single listener straight through to the singular method                                // 592
                    if (typeof value === 'function') {                                                                 // 593
                        single.call(this, i, value);                                                                   // 594
                    }                                                                                                  // 595
                    else {                                                                                             // 596
                        // Otherwise pass back to the multiple function                                                // 597
                        multiple.call(this, i, value);                                                                 // 598
                    }                                                                                                  // 599
                }                                                                                                      // 600
            }                                                                                                          // 601
        }                                                                                                              // 602
        else {                                                                                                         // 603
            // So evt must be a string                                                                                 // 604
            // And listeners must be an array of listeners                                                             // 605
            // Loop over it and pass each one to the multiple method                                                   // 606
            i = listeners.length;                                                                                      // 607
            while (i--) {                                                                                              // 608
                single.call(this, evt, listeners[i]);                                                                  // 609
            }                                                                                                          // 610
        }                                                                                                              // 611
                                                                                                                       // 612
        return this;                                                                                                   // 613
    };                                                                                                                 // 614
                                                                                                                       // 615
    /**                                                                                                                // 616
     * Removes all listeners from a specified event.                                                                   // 617
     * If you do not specify an event then all listeners will be removed.                                              // 618
     * That means every event will be emptied.                                                                         // 619
     * You can also pass a regex to remove all events that match it.                                                   // 620
     *                                                                                                                 // 621
     * @param {String|RegExp} [evt] Optional name of the event to remove all listeners for. Will remove from every event if not passed.
     * @return {Object} Current instance of EventEmitter for chaining.                                                 // 623
     */                                                                                                                // 624
    proto.removeEvent = function removeEvent(evt) {                                                                    // 625
        var type = typeof evt;                                                                                         // 626
        var events = this._getEvents();                                                                                // 627
        var key;                                                                                                       // 628
                                                                                                                       // 629
        // Remove different things depending on the state of evt                                                       // 630
        if (type === 'string') {                                                                                       // 631
            // Remove all listeners for the specified event                                                            // 632
            delete events[evt];                                                                                        // 633
        }                                                                                                              // 634
        else if (evt instanceof RegExp) {                                                                              // 635
            // Remove all events matching the regex.                                                                   // 636
            for (key in events) {                                                                                      // 637
                if (events.hasOwnProperty(key) && evt.test(key)) {                                                     // 638
                    delete events[key];                                                                                // 639
                }                                                                                                      // 640
            }                                                                                                          // 641
        }                                                                                                              // 642
        else {                                                                                                         // 643
            // Remove all listeners in all events                                                                      // 644
            delete this._events;                                                                                       // 645
        }                                                                                                              // 646
                                                                                                                       // 647
        return this;                                                                                                   // 648
    };                                                                                                                 // 649
                                                                                                                       // 650
    /**                                                                                                                // 651
     * Alias of removeEvent.                                                                                           // 652
     *                                                                                                                 // 653
     * Added to mirror the node API.                                                                                   // 654
     */                                                                                                                // 655
    proto.removeAllListeners = alias('removeEvent');                                                                   // 656
                                                                                                                       // 657
    /**                                                                                                                // 658
     * Emits an event of your choice.                                                                                  // 659
     * When emitted, every listener attached to that event will be executed.                                           // 660
     * If you pass the optional argument array then those arguments will be passed to every listener upon execution.   // 661
     * Because it uses `apply`, your array of arguments will be passed as if you wrote them out separately.            // 662
     * So they will not arrive within the array on the other side, they will be separate.                              // 663
     * You can also pass a regular expression to emit to all events that match it.                                     // 664
     *                                                                                                                 // 665
     * @param {String|RegExp} evt Name of the event to emit and execute listeners for.                                 // 666
     * @param {Array} [args] Optional array of arguments to be passed to each listener.                                // 667
     * @return {Object} Current instance of EventEmitter for chaining.                                                 // 668
     */                                                                                                                // 669
    proto.emitEvent = function emitEvent(evt, args) {                                                                  // 670
        var listeners = this.getListenersAsObject(evt);                                                                // 671
        var listener;                                                                                                  // 672
        var i;                                                                                                         // 673
        var key;                                                                                                       // 674
        var response;                                                                                                  // 675
                                                                                                                       // 676
        for (key in listeners) {                                                                                       // 677
            if (listeners.hasOwnProperty(key)) {                                                                       // 678
                i = listeners[key].length;                                                                             // 679
                                                                                                                       // 680
                while (i--) {                                                                                          // 681
                    // If the listener returns true then it shall be removed from the event                            // 682
                    // The function is executed either with a basic call or an apply if there is an args array         // 683
                    listener = listeners[key][i];                                                                      // 684
                                                                                                                       // 685
                    if (listener.once === true) {                                                                      // 686
                        this.removeListener(evt, listener.listener);                                                   // 687
                    }                                                                                                  // 688
                                                                                                                       // 689
                    response = listener.listener.apply(this, args || []);                                              // 690
                                                                                                                       // 691
                    if (response === this._getOnceReturnValue()) {                                                     // 692
                        this.removeListener(evt, listener.listener);                                                   // 693
                    }                                                                                                  // 694
                }                                                                                                      // 695
            }                                                                                                          // 696
        }                                                                                                              // 697
                                                                                                                       // 698
        return this;                                                                                                   // 699
    };                                                                                                                 // 700
                                                                                                                       // 701
    /**                                                                                                                // 702
     * Alias of emitEvent                                                                                              // 703
     */                                                                                                                // 704
    proto.trigger = alias('emitEvent');                                                                                // 705
                                                                                                                       // 706
    /**                                                                                                                // 707
     * Subtly different from emitEvent in that it will pass its arguments on to the listeners, as opposed to taking a single array of arguments to pass on.
     * As with emitEvent, you can pass a regex in place of the event name to emit to all events that match it.         // 709
     *                                                                                                                 // 710
     * @param {String|RegExp} evt Name of the event to emit and execute listeners for.                                 // 711
     * @param {...*} Optional additional arguments to be passed to each listener.                                      // 712
     * @return {Object} Current instance of EventEmitter for chaining.                                                 // 713
     */                                                                                                                // 714
    proto.emit = function emit(evt) {                                                                                  // 715
        var args = Array.prototype.slice.call(arguments, 1);                                                           // 716
        return this.emitEvent(evt, args);                                                                              // 717
    };                                                                                                                 // 718
                                                                                                                       // 719
    /**                                                                                                                // 720
     * Sets the current value to check against when executing listeners. If a                                          // 721
     * listeners return value matches the one set here then it will be removed                                         // 722
     * after execution. This value defaults to true.                                                                   // 723
     *                                                                                                                 // 724
     * @param {*} value The new value to check for when executing listeners.                                           // 725
     * @return {Object} Current instance of EventEmitter for chaining.                                                 // 726
     */                                                                                                                // 727
    proto.setOnceReturnValue = function setOnceReturnValue(value) {                                                    // 728
        this._onceReturnValue = value;                                                                                 // 729
        return this;                                                                                                   // 730
    };                                                                                                                 // 731
                                                                                                                       // 732
    /**                                                                                                                // 733
     * Fetches the current value to check against when executing listeners. If                                         // 734
     * the listeners return value matches this one then it should be removed                                           // 735
     * automatically. It will return true by default.                                                                  // 736
     *                                                                                                                 // 737
     * @return {*|Boolean} The current value to check for or the default, true.                                        // 738
     * @api private                                                                                                    // 739
     */                                                                                                                // 740
    proto._getOnceReturnValue = function _getOnceReturnValue() {                                                       // 741
        if (this.hasOwnProperty('_onceReturnValue')) {                                                                 // 742
            return this._onceReturnValue;                                                                              // 743
        }                                                                                                              // 744
        else {                                                                                                         // 745
            return true;                                                                                               // 746
        }                                                                                                              // 747
    };                                                                                                                 // 748
                                                                                                                       // 749
    /**                                                                                                                // 750
     * Fetches the events object and creates one if required.                                                          // 751
     *                                                                                                                 // 752
     * @return {Object} The events storage object.                                                                     // 753
     * @api private                                                                                                    // 754
     */                                                                                                                // 755
    proto._getEvents = function _getEvents() {                                                                         // 756
        return this._events || (this._events = {});                                                                    // 757
    };                                                                                                                 // 758
                                                                                                                       // 759
    /**                                                                                                                // 760
     * Reverts the global {@link EventEmitter} to its previous value and returns a reference to this version.          // 761
     *                                                                                                                 // 762
     * @return {Function} Non conflicting EventEmitter class.                                                          // 763
     */                                                                                                                // 764
    EventEmitter.noConflict = function noConflict() {                                                                  // 765
        exports.EventEmitter = originalGlobalValue;                                                                    // 766
        return EventEmitter;                                                                                           // 767
    };                                                                                                                 // 768
                                                                                                                       // 769
    // Expose the class either via AMD, CommonJS or the global object                                                  // 770
    if (typeof define === 'function' && define.amd) {                                                                  // 771
        define('eventEmitter/EventEmitter',[],function () {                                                            // 772
            return EventEmitter;                                                                                       // 773
        });                                                                                                            // 774
    }                                                                                                                  // 775
    else if (typeof module === 'object' && module.exports){                                                            // 776
        module.exports = EventEmitter;                                                                                 // 777
    }                                                                                                                  // 778
    else {                                                                                                             // 779
        exports.EventEmitter = EventEmitter;                                                                           // 780
    }                                                                                                                  // 781
}.call(this));                                                                                                         // 782
                                                                                                                       // 783
/*!                                                                                                                    // 784
 * getStyleProperty v1.0.4                                                                                             // 785
 * original by kangax                                                                                                  // 786
 * http://perfectionkills.com/feature-testing-css-properties/                                                          // 787
 * MIT license                                                                                                         // 788
 */                                                                                                                    // 789
                                                                                                                       // 790
/*jshint browser: true, strict: true, undef: true */                                                                   // 791
/*global define: false, exports: false, module: false */                                                               // 792
                                                                                                                       // 793
( function( window ) {                                                                                                 // 794
                                                                                                                       // 795
                                                                                                                       // 796
                                                                                                                       // 797
var prefixes = 'Webkit Moz ms Ms O'.split(' ');                                                                        // 798
var docElemStyle = document.documentElement.style;                                                                     // 799
                                                                                                                       // 800
function getStyleProperty( propName ) {                                                                                // 801
  if ( !propName ) {                                                                                                   // 802
    return;                                                                                                            // 803
  }                                                                                                                    // 804
                                                                                                                       // 805
  // test standard property first                                                                                      // 806
  if ( typeof docElemStyle[ propName ] === 'string' ) {                                                                // 807
    return propName;                                                                                                   // 808
  }                                                                                                                    // 809
                                                                                                                       // 810
  // capitalize                                                                                                        // 811
  propName = propName.charAt(0).toUpperCase() + propName.slice(1);                                                     // 812
                                                                                                                       // 813
  // test vendor specific properties                                                                                   // 814
  var prefixed;                                                                                                        // 815
  for ( var i=0, len = prefixes.length; i < len; i++ ) {                                                               // 816
    prefixed = prefixes[i] + propName;                                                                                 // 817
    if ( typeof docElemStyle[ prefixed ] === 'string' ) {                                                              // 818
      return prefixed;                                                                                                 // 819
    }                                                                                                                  // 820
  }                                                                                                                    // 821
}                                                                                                                      // 822
                                                                                                                       // 823
// transport                                                                                                           // 824
if ( typeof define === 'function' && define.amd ) {                                                                    // 825
  // AMD                                                                                                               // 826
  define( 'get-style-property/get-style-property',[],function() {                                                      // 827
    return getStyleProperty;                                                                                           // 828
  });                                                                                                                  // 829
} else if ( typeof exports === 'object' ) {                                                                            // 830
  // CommonJS for Component                                                                                            // 831
  module.exports = getStyleProperty;                                                                                   // 832
} else {                                                                                                               // 833
  // browser global                                                                                                    // 834
  window.getStyleProperty = getStyleProperty;                                                                          // 835
}                                                                                                                      // 836
                                                                                                                       // 837
})( window );                                                                                                          // 838
                                                                                                                       // 839
/*!                                                                                                                    // 840
 * getSize v1.2.2                                                                                                      // 841
 * measure size of elements                                                                                            // 842
 * MIT license                                                                                                         // 843
 */                                                                                                                    // 844
                                                                                                                       // 845
/*jshint browser: true, strict: true, undef: true, unused: true */                                                     // 846
/*global define: false, exports: false, require: false, module: false, console: false */                               // 847
                                                                                                                       // 848
( function( window, undefined ) {                                                                                      // 849
                                                                                                                       // 850
                                                                                                                       // 851
                                                                                                                       // 852
// -------------------------- helpers -------------------------- //                                                    // 853
                                                                                                                       // 854
// get a number from a string, not a percentage                                                                        // 855
function getStyleSize( value ) {                                                                                       // 856
  var num = parseFloat( value );                                                                                       // 857
  // not a percent like '100%', and a number                                                                           // 858
  var isValid = value.indexOf('%') === -1 && !isNaN( num );                                                            // 859
  return isValid && num;                                                                                               // 860
}                                                                                                                      // 861
                                                                                                                       // 862
function noop() {}                                                                                                     // 863
                                                                                                                       // 864
var logError = typeof console === 'undefined' ? noop :                                                                 // 865
  function( message ) {                                                                                                // 866
    console.error( message );                                                                                          // 867
  };                                                                                                                   // 868
                                                                                                                       // 869
// -------------------------- measurements -------------------------- //                                               // 870
                                                                                                                       // 871
var measurements = [                                                                                                   // 872
  'paddingLeft',                                                                                                       // 873
  'paddingRight',                                                                                                      // 874
  'paddingTop',                                                                                                        // 875
  'paddingBottom',                                                                                                     // 876
  'marginLeft',                                                                                                        // 877
  'marginRight',                                                                                                       // 878
  'marginTop',                                                                                                         // 879
  'marginBottom',                                                                                                      // 880
  'borderLeftWidth',                                                                                                   // 881
  'borderRightWidth',                                                                                                  // 882
  'borderTopWidth',                                                                                                    // 883
  'borderBottomWidth'                                                                                                  // 884
];                                                                                                                     // 885
                                                                                                                       // 886
function getZeroSize() {                                                                                               // 887
  var size = {                                                                                                         // 888
    width: 0,                                                                                                          // 889
    height: 0,                                                                                                         // 890
    innerWidth: 0,                                                                                                     // 891
    innerHeight: 0,                                                                                                    // 892
    outerWidth: 0,                                                                                                     // 893
    outerHeight: 0                                                                                                     // 894
  };                                                                                                                   // 895
  for ( var i=0, len = measurements.length; i < len; i++ ) {                                                           // 896
    var measurement = measurements[i];                                                                                 // 897
    size[ measurement ] = 0;                                                                                           // 898
  }                                                                                                                    // 899
  return size;                                                                                                         // 900
}                                                                                                                      // 901
                                                                                                                       // 902
                                                                                                                       // 903
                                                                                                                       // 904
function defineGetSize( getStyleProperty ) {                                                                           // 905
                                                                                                                       // 906
// -------------------------- setup -------------------------- //                                                      // 907
                                                                                                                       // 908
var isSetup = false;                                                                                                   // 909
                                                                                                                       // 910
var getStyle, boxSizingProp, isBoxSizeOuter;                                                                           // 911
                                                                                                                       // 912
/**                                                                                                                    // 913
 * setup vars and functions                                                                                            // 914
 * do it on initial getSize(), rather than on script load                                                              // 915
 * For Firefox bug https://bugzilla.mozilla.org/show_bug.cgi?id=548397                                                 // 916
 */                                                                                                                    // 917
function setup() {                                                                                                     // 918
  // setup once                                                                                                        // 919
  if ( isSetup ) {                                                                                                     // 920
    return;                                                                                                            // 921
  }                                                                                                                    // 922
  isSetup = true;                                                                                                      // 923
                                                                                                                       // 924
  var getComputedStyle = window.getComputedStyle;                                                                      // 925
  getStyle = ( function() {                                                                                            // 926
    var getStyleFn = getComputedStyle ?                                                                                // 927
      function( elem ) {                                                                                               // 928
        return getComputedStyle( elem, null );                                                                         // 929
      } :                                                                                                              // 930
      function( elem ) {                                                                                               // 931
        return elem.currentStyle;                                                                                      // 932
      };                                                                                                               // 933
                                                                                                                       // 934
      return function getStyle( elem ) {                                                                               // 935
        var style = getStyleFn( elem );                                                                                // 936
        if ( !style ) {                                                                                                // 937
          logError( 'Style returned ' + style +                                                                        // 938
            '. Are you running this code in a hidden iframe on Firefox? ' +                                            // 939
            'See http://bit.ly/getsizebug1' );                                                                         // 940
        }                                                                                                              // 941
        return style;                                                                                                  // 942
      };                                                                                                               // 943
  })();                                                                                                                // 944
                                                                                                                       // 945
  // -------------------------- box sizing -------------------------- //                                               // 946
                                                                                                                       // 947
  boxSizingProp = getStyleProperty('boxSizing');                                                                       // 948
                                                                                                                       // 949
  /**                                                                                                                  // 950
   * WebKit measures the outer-width on style.width on border-box elems                                                // 951
   * IE & Firefox measures the inner-width                                                                             // 952
   */                                                                                                                  // 953
  if ( boxSizingProp ) {                                                                                               // 954
    var div = document.createElement('div');                                                                           // 955
    div.style.width = '200px';                                                                                         // 956
    div.style.padding = '1px 2px 3px 4px';                                                                             // 957
    div.style.borderStyle = 'solid';                                                                                   // 958
    div.style.borderWidth = '1px 2px 3px 4px';                                                                         // 959
    div.style[ boxSizingProp ] = 'border-box';                                                                         // 960
                                                                                                                       // 961
    var body = document.body || document.documentElement;                                                              // 962
    body.appendChild( div );                                                                                           // 963
    var style = getStyle( div );                                                                                       // 964
                                                                                                                       // 965
    isBoxSizeOuter = getStyleSize( style.width ) === 200;                                                              // 966
    body.removeChild( div );                                                                                           // 967
  }                                                                                                                    // 968
                                                                                                                       // 969
}                                                                                                                      // 970
                                                                                                                       // 971
// -------------------------- getSize -------------------------- //                                                    // 972
                                                                                                                       // 973
function getSize( elem ) {                                                                                             // 974
  setup();                                                                                                             // 975
                                                                                                                       // 976
  // use querySeletor if elem is string                                                                                // 977
  if ( typeof elem === 'string' ) {                                                                                    // 978
    elem = document.querySelector( elem );                                                                             // 979
  }                                                                                                                    // 980
                                                                                                                       // 981
  // do not proceed on non-objects                                                                                     // 982
  if ( !elem || typeof elem !== 'object' || !elem.nodeType ) {                                                         // 983
    return;                                                                                                            // 984
  }                                                                                                                    // 985
                                                                                                                       // 986
  var style = getStyle( elem );                                                                                        // 987
                                                                                                                       // 988
  // if hidden, everything is 0                                                                                        // 989
  if ( style.display === 'none' ) {                                                                                    // 990
    return getZeroSize();                                                                                              // 991
  }                                                                                                                    // 992
                                                                                                                       // 993
  var size = {};                                                                                                       // 994
  size.width = elem.offsetWidth;                                                                                       // 995
  size.height = elem.offsetHeight;                                                                                     // 996
                                                                                                                       // 997
  var isBorderBox = size.isBorderBox = !!( boxSizingProp &&                                                            // 998
    style[ boxSizingProp ] && style[ boxSizingProp ] === 'border-box' );                                               // 999
                                                                                                                       // 1000
  // get all measurements                                                                                              // 1001
  for ( var i=0, len = measurements.length; i < len; i++ ) {                                                           // 1002
    var measurement = measurements[i];                                                                                 // 1003
    var value = style[ measurement ];                                                                                  // 1004
    value = mungeNonPixel( elem, value );                                                                              // 1005
    var num = parseFloat( value );                                                                                     // 1006
    // any 'auto', 'medium' value will be 0                                                                            // 1007
    size[ measurement ] = !isNaN( num ) ? num : 0;                                                                     // 1008
  }                                                                                                                    // 1009
                                                                                                                       // 1010
  var paddingWidth = size.paddingLeft + size.paddingRight;                                                             // 1011
  var paddingHeight = size.paddingTop + size.paddingBottom;                                                            // 1012
  var marginWidth = size.marginLeft + size.marginRight;                                                                // 1013
  var marginHeight = size.marginTop + size.marginBottom;                                                               // 1014
  var borderWidth = size.borderLeftWidth + size.borderRightWidth;                                                      // 1015
  var borderHeight = size.borderTopWidth + size.borderBottomWidth;                                                     // 1016
                                                                                                                       // 1017
  var isBorderBoxSizeOuter = isBorderBox && isBoxSizeOuter;                                                            // 1018
                                                                                                                       // 1019
  // overwrite width and height if we can get it from style                                                            // 1020
  var styleWidth = getStyleSize( style.width );                                                                        // 1021
  if ( styleWidth !== false ) {                                                                                        // 1022
    size.width = styleWidth +                                                                                          // 1023
      // add padding and border unless it's already including it                                                       // 1024
      ( isBorderBoxSizeOuter ? 0 : paddingWidth + borderWidth );                                                       // 1025
  }                                                                                                                    // 1026
                                                                                                                       // 1027
  var styleHeight = getStyleSize( style.height );                                                                      // 1028
  if ( styleHeight !== false ) {                                                                                       // 1029
    size.height = styleHeight +                                                                                        // 1030
      // add padding and border unless it's already including it                                                       // 1031
      ( isBorderBoxSizeOuter ? 0 : paddingHeight + borderHeight );                                                     // 1032
  }                                                                                                                    // 1033
                                                                                                                       // 1034
  size.innerWidth = size.width - ( paddingWidth + borderWidth );                                                       // 1035
  size.innerHeight = size.height - ( paddingHeight + borderHeight );                                                   // 1036
                                                                                                                       // 1037
  size.outerWidth = size.width + marginWidth;                                                                          // 1038
  size.outerHeight = size.height + marginHeight;                                                                       // 1039
                                                                                                                       // 1040
  return size;                                                                                                         // 1041
}                                                                                                                      // 1042
                                                                                                                       // 1043
// IE8 returns percent values, not pixels                                                                              // 1044
// taken from jQuery's curCSS                                                                                          // 1045
function mungeNonPixel( elem, value ) {                                                                                // 1046
  // IE8 and has percent value                                                                                         // 1047
  if ( window.getComputedStyle || value.indexOf('%') === -1 ) {                                                        // 1048
    return value;                                                                                                      // 1049
  }                                                                                                                    // 1050
  var style = elem.style;                                                                                              // 1051
  // Remember the original values                                                                                      // 1052
  var left = style.left;                                                                                               // 1053
  var rs = elem.runtimeStyle;                                                                                          // 1054
  var rsLeft = rs && rs.left;                                                                                          // 1055
                                                                                                                       // 1056
  // Put in the new values to get a computed value out                                                                 // 1057
  if ( rsLeft ) {                                                                                                      // 1058
    rs.left = elem.currentStyle.left;                                                                                  // 1059
  }                                                                                                                    // 1060
  style.left = value;                                                                                                  // 1061
  value = style.pixelLeft;                                                                                             // 1062
                                                                                                                       // 1063
  // Revert the changed values                                                                                         // 1064
  style.left = left;                                                                                                   // 1065
  if ( rsLeft ) {                                                                                                      // 1066
    rs.left = rsLeft;                                                                                                  // 1067
  }                                                                                                                    // 1068
                                                                                                                       // 1069
  return value;                                                                                                        // 1070
}                                                                                                                      // 1071
                                                                                                                       // 1072
return getSize;                                                                                                        // 1073
                                                                                                                       // 1074
}                                                                                                                      // 1075
                                                                                                                       // 1076
// transport                                                                                                           // 1077
if ( typeof define === 'function' && define.amd ) {                                                                    // 1078
  // AMD for RequireJS                                                                                                 // 1079
  define( 'get-size/get-size',[ 'get-style-property/get-style-property' ], defineGetSize );                            // 1080
} else if ( typeof exports === 'object' ) {                                                                            // 1081
  // CommonJS for Component                                                                                            // 1082
  module.exports = defineGetSize( require('desandro-get-style-property') );                                            // 1083
} else {                                                                                                               // 1084
  // browser global                                                                                                    // 1085
  window.getSize = defineGetSize( window.getStyleProperty );                                                           // 1086
}                                                                                                                      // 1087
                                                                                                                       // 1088
})( window );                                                                                                          // 1089
                                                                                                                       // 1090
/**                                                                                                                    // 1091
 * matchesSelector v1.0.2                                                                                              // 1092
 * matchesSelector( element, '.selector' )                                                                             // 1093
 * MIT license                                                                                                         // 1094
 */                                                                                                                    // 1095
                                                                                                                       // 1096
/*jshint browser: true, strict: true, undef: true, unused: true */                                                     // 1097
/*global define: false, module: false */                                                                               // 1098
                                                                                                                       // 1099
( function( ElemProto ) {                                                                                              // 1100
                                                                                                                       // 1101
                                                                                                                       // 1102
                                                                                                                       // 1103
  var matchesMethod = ( function() {                                                                                   // 1104
    // check un-prefixed                                                                                               // 1105
    if ( ElemProto.matchesSelector ) {                                                                                 // 1106
      return 'matchesSelector';                                                                                        // 1107
    }                                                                                                                  // 1108
    // check vendor prefixes                                                                                           // 1109
    var prefixes = [ 'webkit', 'moz', 'ms', 'o' ];                                                                     // 1110
                                                                                                                       // 1111
    for ( var i=0, len = prefixes.length; i < len; i++ ) {                                                             // 1112
      var prefix = prefixes[i];                                                                                        // 1113
      var method = prefix + 'MatchesSelector';                                                                         // 1114
      if ( ElemProto[ method ] ) {                                                                                     // 1115
        return method;                                                                                                 // 1116
      }                                                                                                                // 1117
    }                                                                                                                  // 1118
  })();                                                                                                                // 1119
                                                                                                                       // 1120
  // ----- match ----- //                                                                                              // 1121
                                                                                                                       // 1122
  function match( elem, selector ) {                                                                                   // 1123
    return elem[ matchesMethod ]( selector );                                                                          // 1124
  }                                                                                                                    // 1125
                                                                                                                       // 1126
  // ----- appendToFragment ----- //                                                                                   // 1127
                                                                                                                       // 1128
  function checkParent( elem ) {                                                                                       // 1129
    // not needed if already has parent                                                                                // 1130
    if ( elem.parentNode ) {                                                                                           // 1131
      return;                                                                                                          // 1132
    }                                                                                                                  // 1133
    var fragment = document.createDocumentFragment();                                                                  // 1134
    fragment.appendChild( elem );                                                                                      // 1135
  }                                                                                                                    // 1136
                                                                                                                       // 1137
  // ----- query ----- //                                                                                              // 1138
                                                                                                                       // 1139
  // fall back to using QSA                                                                                            // 1140
  // thx @jonathantneal https://gist.github.com/3062955                                                                // 1141
  function query( elem, selector ) {                                                                                   // 1142
    // append to fragment if no parent                                                                                 // 1143
    checkParent( elem );                                                                                               // 1144
                                                                                                                       // 1145
    // match elem with all selected elems of parent                                                                    // 1146
    var elems = elem.parentNode.querySelectorAll( selector );                                                          // 1147
    for ( var i=0, len = elems.length; i < len; i++ ) {                                                                // 1148
      // return true if match                                                                                          // 1149
      if ( elems[i] === elem ) {                                                                                       // 1150
        return true;                                                                                                   // 1151
      }                                                                                                                // 1152
    }                                                                                                                  // 1153
    // otherwise return false                                                                                          // 1154
    return false;                                                                                                      // 1155
  }                                                                                                                    // 1156
                                                                                                                       // 1157
  // ----- matchChild ----- //                                                                                         // 1158
                                                                                                                       // 1159
  function matchChild( elem, selector ) {                                                                              // 1160
    checkParent( elem );                                                                                               // 1161
    return match( elem, selector );                                                                                    // 1162
  }                                                                                                                    // 1163
                                                                                                                       // 1164
  // ----- matchesSelector ----- //                                                                                    // 1165
                                                                                                                       // 1166
  var matchesSelector;                                                                                                 // 1167
                                                                                                                       // 1168
  if ( matchesMethod ) {                                                                                               // 1169
    // IE9 supports matchesSelector, but doesn't work on orphaned elems                                                // 1170
    // check for that                                                                                                  // 1171
    var div = document.createElement('div');                                                                           // 1172
    var supportsOrphans = match( div, 'div' );                                                                         // 1173
    matchesSelector = supportsOrphans ? match : matchChild;                                                            // 1174
  } else {                                                                                                             // 1175
    matchesSelector = query;                                                                                           // 1176
  }                                                                                                                    // 1177
                                                                                                                       // 1178
  // transport                                                                                                         // 1179
  if ( typeof define === 'function' && define.amd ) {                                                                  // 1180
    // AMD                                                                                                             // 1181
    define( 'matches-selector/matches-selector',[],function() {                                                        // 1182
      return matchesSelector;                                                                                          // 1183
    });                                                                                                                // 1184
  } else if ( typeof exports === 'object' ) {                                                                          // 1185
    module.exports = matchesSelector;                                                                                  // 1186
  }                                                                                                                    // 1187
  else {                                                                                                               // 1188
    // browser global                                                                                                  // 1189
    window.matchesSelector = matchesSelector;                                                                          // 1190
  }                                                                                                                    // 1191
                                                                                                                       // 1192
})( Element.prototype );                                                                                               // 1193
                                                                                                                       // 1194
/**                                                                                                                    // 1195
 * Outlayer Item                                                                                                       // 1196
 */                                                                                                                    // 1197
                                                                                                                       // 1198
( function( window ) {                                                                                                 // 1199
                                                                                                                       // 1200
                                                                                                                       // 1201
                                                                                                                       // 1202
// ----- get style ----- //                                                                                            // 1203
                                                                                                                       // 1204
var getComputedStyle = window.getComputedStyle;                                                                        // 1205
var getStyle = getComputedStyle ?                                                                                      // 1206
  function( elem ) {                                                                                                   // 1207
    return getComputedStyle( elem, null );                                                                             // 1208
  } :                                                                                                                  // 1209
  function( elem ) {                                                                                                   // 1210
    return elem.currentStyle;                                                                                          // 1211
  };                                                                                                                   // 1212
                                                                                                                       // 1213
                                                                                                                       // 1214
// extend objects                                                                                                      // 1215
function extend( a, b ) {                                                                                              // 1216
  for ( var prop in b ) {                                                                                              // 1217
    a[ prop ] = b[ prop ];                                                                                             // 1218
  }                                                                                                                    // 1219
  return a;                                                                                                            // 1220
}                                                                                                                      // 1221
                                                                                                                       // 1222
function isEmptyObj( obj ) {                                                                                           // 1223
  for ( var prop in obj ) {                                                                                            // 1224
    return false;                                                                                                      // 1225
  }                                                                                                                    // 1226
  prop = null;                                                                                                         // 1227
  return true;                                                                                                         // 1228
}                                                                                                                      // 1229
                                                                                                                       // 1230
// http://jamesroberts.name/blog/2010/02/22/string-functions-for-javascript-trim-to-camel-case-to-dashed-and-to-underscore/
function toDash( str ) {                                                                                               // 1232
  return str.replace( /([A-Z])/g, function( $1 ){                                                                      // 1233
    return '-' + $1.toLowerCase();                                                                                     // 1234
  });                                                                                                                  // 1235
}                                                                                                                      // 1236
                                                                                                                       // 1237
// -------------------------- Outlayer definition -------------------------- //                                        // 1238
                                                                                                                       // 1239
function outlayerItemDefinition( EventEmitter, getSize, getStyleProperty ) {                                           // 1240
                                                                                                                       // 1241
// -------------------------- CSS3 support -------------------------- //                                               // 1242
                                                                                                                       // 1243
var transitionProperty = getStyleProperty('transition');                                                               // 1244
var transformProperty = getStyleProperty('transform');                                                                 // 1245
var supportsCSS3 = transitionProperty && transformProperty;                                                            // 1246
var is3d = !!getStyleProperty('perspective');                                                                          // 1247
                                                                                                                       // 1248
var transitionEndEvent = {                                                                                             // 1249
  WebkitTransition: 'webkitTransitionEnd',                                                                             // 1250
  MozTransition: 'transitionend',                                                                                      // 1251
  OTransition: 'otransitionend',                                                                                       // 1252
  transition: 'transitionend'                                                                                          // 1253
}[ transitionProperty ];                                                                                               // 1254
                                                                                                                       // 1255
// properties that could have vendor prefix                                                                            // 1256
var prefixableProperties = [                                                                                           // 1257
  'transform',                                                                                                         // 1258
  'transition',                                                                                                        // 1259
  'transitionDuration',                                                                                                // 1260
  'transitionProperty'                                                                                                 // 1261
];                                                                                                                     // 1262
                                                                                                                       // 1263
// cache all vendor properties                                                                                         // 1264
var vendorProperties = ( function() {                                                                                  // 1265
  var cache = {};                                                                                                      // 1266
  for ( var i=0, len = prefixableProperties.length; i < len; i++ ) {                                                   // 1267
    var prop = prefixableProperties[i];                                                                                // 1268
    var supportedProp = getStyleProperty( prop );                                                                      // 1269
    if ( supportedProp && supportedProp !== prop ) {                                                                   // 1270
      cache[ prop ] = supportedProp;                                                                                   // 1271
    }                                                                                                                  // 1272
  }                                                                                                                    // 1273
  return cache;                                                                                                        // 1274
})();                                                                                                                  // 1275
                                                                                                                       // 1276
// -------------------------- Item -------------------------- //                                                       // 1277
                                                                                                                       // 1278
function Item( element, layout ) {                                                                                     // 1279
  if ( !element ) {                                                                                                    // 1280
    return;                                                                                                            // 1281
  }                                                                                                                    // 1282
                                                                                                                       // 1283
  this.element = element;                                                                                              // 1284
  // parent layout class, i.e. Masonry, Isotope, or Packery                                                            // 1285
  this.layout = layout;                                                                                                // 1286
  this.position = {                                                                                                    // 1287
    x: 0,                                                                                                              // 1288
    y: 0                                                                                                               // 1289
  };                                                                                                                   // 1290
                                                                                                                       // 1291
  this._create();                                                                                                      // 1292
}                                                                                                                      // 1293
                                                                                                                       // 1294
// inherit EventEmitter                                                                                                // 1295
extend( Item.prototype, EventEmitter.prototype );                                                                      // 1296
                                                                                                                       // 1297
Item.prototype._create = function() {                                                                                  // 1298
  // transition objects                                                                                                // 1299
  this._transn = {                                                                                                     // 1300
    ingProperties: {},                                                                                                 // 1301
    clean: {},                                                                                                         // 1302
    onEnd: {}                                                                                                          // 1303
  };                                                                                                                   // 1304
                                                                                                                       // 1305
  this.css({                                                                                                           // 1306
    position: 'absolute'                                                                                               // 1307
  });                                                                                                                  // 1308
};                                                                                                                     // 1309
                                                                                                                       // 1310
// trigger specified handler for event type                                                                            // 1311
Item.prototype.handleEvent = function( event ) {                                                                       // 1312
  var method = 'on' + event.type;                                                                                      // 1313
  if ( this[ method ] ) {                                                                                              // 1314
    this[ method ]( event );                                                                                           // 1315
  }                                                                                                                    // 1316
};                                                                                                                     // 1317
                                                                                                                       // 1318
Item.prototype.getSize = function() {                                                                                  // 1319
  this.size = getSize( this.element );                                                                                 // 1320
};                                                                                                                     // 1321
                                                                                                                       // 1322
/**                                                                                                                    // 1323
 * apply CSS styles to element                                                                                         // 1324
 * @param {Object} style                                                                                               // 1325
 */                                                                                                                    // 1326
Item.prototype.css = function( style ) {                                                                               // 1327
  var elemStyle = this.element.style;                                                                                  // 1328
                                                                                                                       // 1329
  for ( var prop in style ) {                                                                                          // 1330
    // use vendor property if available                                                                                // 1331
    var supportedProp = vendorProperties[ prop ] || prop;                                                              // 1332
    elemStyle[ supportedProp ] = style[ prop ];                                                                        // 1333
  }                                                                                                                    // 1334
};                                                                                                                     // 1335
                                                                                                                       // 1336
 // measure position, and sets it                                                                                      // 1337
Item.prototype.getPosition = function() {                                                                              // 1338
  var style = getStyle( this.element );                                                                                // 1339
  var layoutOptions = this.layout.options;                                                                             // 1340
  var isOriginLeft = layoutOptions.isOriginLeft;                                                                       // 1341
  var isOriginTop = layoutOptions.isOriginTop;                                                                         // 1342
  var x = parseInt( style[ isOriginLeft ? 'left' : 'right' ], 10 );                                                    // 1343
  var y = parseInt( style[ isOriginTop ? 'top' : 'bottom' ], 10 );                                                     // 1344
                                                                                                                       // 1345
  // clean up 'auto' or other non-integer values                                                                       // 1346
  x = isNaN( x ) ? 0 : x;                                                                                              // 1347
  y = isNaN( y ) ? 0 : y;                                                                                              // 1348
  // remove padding from measurement                                                                                   // 1349
  var layoutSize = this.layout.size;                                                                                   // 1350
  x -= isOriginLeft ? layoutSize.paddingLeft : layoutSize.paddingRight;                                                // 1351
  y -= isOriginTop ? layoutSize.paddingTop : layoutSize.paddingBottom;                                                 // 1352
                                                                                                                       // 1353
  this.position.x = x;                                                                                                 // 1354
  this.position.y = y;                                                                                                 // 1355
};                                                                                                                     // 1356
                                                                                                                       // 1357
// set settled position, apply padding                                                                                 // 1358
Item.prototype.layoutPosition = function() {                                                                           // 1359
  var layoutSize = this.layout.size;                                                                                   // 1360
  var layoutOptions = this.layout.options;                                                                             // 1361
  var style = {};                                                                                                      // 1362
                                                                                                                       // 1363
  if ( layoutOptions.isOriginLeft ) {                                                                                  // 1364
    style.left = ( this.position.x + layoutSize.paddingLeft ) + 'px';                                                  // 1365
    // reset other property                                                                                            // 1366
    style.right = '';                                                                                                  // 1367
  } else {                                                                                                             // 1368
    style.right = ( this.position.x + layoutSize.paddingRight ) + 'px';                                                // 1369
    style.left = '';                                                                                                   // 1370
  }                                                                                                                    // 1371
                                                                                                                       // 1372
  if ( layoutOptions.isOriginTop ) {                                                                                   // 1373
    style.top = ( this.position.y + layoutSize.paddingTop ) + 'px';                                                    // 1374
    style.bottom = '';                                                                                                 // 1375
  } else {                                                                                                             // 1376
    style.bottom = ( this.position.y + layoutSize.paddingBottom ) + 'px';                                              // 1377
    style.top = '';                                                                                                    // 1378
  }                                                                                                                    // 1379
                                                                                                                       // 1380
  this.css( style );                                                                                                   // 1381
  this.emitEvent( 'layout', [ this ] );                                                                                // 1382
};                                                                                                                     // 1383
                                                                                                                       // 1384
                                                                                                                       // 1385
// transform translate function                                                                                        // 1386
var translate = is3d ?                                                                                                 // 1387
  function( x, y ) {                                                                                                   // 1388
    return 'translate3d(' + x + 'px, ' + y + 'px, 0)';                                                                 // 1389
  } :                                                                                                                  // 1390
  function( x, y ) {                                                                                                   // 1391
    return 'translate(' + x + 'px, ' + y + 'px)';                                                                      // 1392
  };                                                                                                                   // 1393
                                                                                                                       // 1394
                                                                                                                       // 1395
Item.prototype._transitionTo = function( x, y ) {                                                                      // 1396
  this.getPosition();                                                                                                  // 1397
  // get current x & y from top/left                                                                                   // 1398
  var curX = this.position.x;                                                                                          // 1399
  var curY = this.position.y;                                                                                          // 1400
                                                                                                                       // 1401
  var compareX = parseInt( x, 10 );                                                                                    // 1402
  var compareY = parseInt( y, 10 );                                                                                    // 1403
  var didNotMove = compareX === this.position.x && compareY === this.position.y;                                       // 1404
                                                                                                                       // 1405
  // save end position                                                                                                 // 1406
  this.setPosition( x, y );                                                                                            // 1407
                                                                                                                       // 1408
  // if did not move and not transitioning, just go to layout                                                          // 1409
  if ( didNotMove && !this.isTransitioning ) {                                                                         // 1410
    this.layoutPosition();                                                                                             // 1411
    return;                                                                                                            // 1412
  }                                                                                                                    // 1413
                                                                                                                       // 1414
  var transX = x - curX;                                                                                               // 1415
  var transY = y - curY;                                                                                               // 1416
  var transitionStyle = {};                                                                                            // 1417
  // flip cooridinates if origin on right or bottom                                                                    // 1418
  var layoutOptions = this.layout.options;                                                                             // 1419
  transX = layoutOptions.isOriginLeft ? transX : -transX;                                                              // 1420
  transY = layoutOptions.isOriginTop ? transY : -transY;                                                               // 1421
  transitionStyle.transform = translate( transX, transY );                                                             // 1422
                                                                                                                       // 1423
  this.transition({                                                                                                    // 1424
    to: transitionStyle,                                                                                               // 1425
    onTransitionEnd: {                                                                                                 // 1426
      transform: this.layoutPosition                                                                                   // 1427
    },                                                                                                                 // 1428
    isCleaning: true                                                                                                   // 1429
  });                                                                                                                  // 1430
};                                                                                                                     // 1431
                                                                                                                       // 1432
// non transition + transform support                                                                                  // 1433
Item.prototype.goTo = function( x, y ) {                                                                               // 1434
  this.setPosition( x, y );                                                                                            // 1435
  this.layoutPosition();                                                                                               // 1436
};                                                                                                                     // 1437
                                                                                                                       // 1438
// use transition and transforms if supported                                                                          // 1439
Item.prototype.moveTo = supportsCSS3 ?                                                                                 // 1440
  Item.prototype._transitionTo : Item.prototype.goTo;                                                                  // 1441
                                                                                                                       // 1442
Item.prototype.setPosition = function( x, y ) {                                                                        // 1443
  this.position.x = parseInt( x, 10 );                                                                                 // 1444
  this.position.y = parseInt( y, 10 );                                                                                 // 1445
};                                                                                                                     // 1446
                                                                                                                       // 1447
// ----- transition ----- //                                                                                           // 1448
                                                                                                                       // 1449
/**                                                                                                                    // 1450
 * @param {Object} style - CSS                                                                                         // 1451
 * @param {Function} onTransitionEnd                                                                                   // 1452
 */                                                                                                                    // 1453
                                                                                                                       // 1454
// non transition, just trigger callback                                                                               // 1455
Item.prototype._nonTransition = function( args ) {                                                                     // 1456
  this.css( args.to );                                                                                                 // 1457
  if ( args.isCleaning ) {                                                                                             // 1458
    this._removeStyles( args.to );                                                                                     // 1459
  }                                                                                                                    // 1460
  for ( var prop in args.onTransitionEnd ) {                                                                           // 1461
    args.onTransitionEnd[ prop ].call( this );                                                                         // 1462
  }                                                                                                                    // 1463
};                                                                                                                     // 1464
                                                                                                                       // 1465
/**                                                                                                                    // 1466
 * proper transition                                                                                                   // 1467
 * @param {Object} args - arguments                                                                                    // 1468
 *   @param {Object} to - style to transition to                                                                       // 1469
 *   @param {Object} from - style to start transition from                                                             // 1470
 *   @param {Boolean} isCleaning - removes transition styles after transition                                          // 1471
 *   @param {Function} onTransitionEnd - callback                                                                      // 1472
 */                                                                                                                    // 1473
Item.prototype._transition = function( args ) {                                                                        // 1474
  // redirect to nonTransition if no transition duration                                                               // 1475
  if ( !parseFloat( this.layout.options.transitionDuration ) ) {                                                       // 1476
    this._nonTransition( args );                                                                                       // 1477
    return;                                                                                                            // 1478
  }                                                                                                                    // 1479
                                                                                                                       // 1480
  var _transition = this._transn;                                                                                      // 1481
  // keep track of onTransitionEnd callback by css property                                                            // 1482
  for ( var prop in args.onTransitionEnd ) {                                                                           // 1483
    _transition.onEnd[ prop ] = args.onTransitionEnd[ prop ];                                                          // 1484
  }                                                                                                                    // 1485
  // keep track of properties that are transitioning                                                                   // 1486
  for ( prop in args.to ) {                                                                                            // 1487
    _transition.ingProperties[ prop ] = true;                                                                          // 1488
    // keep track of properties to clean up when transition is done                                                    // 1489
    if ( args.isCleaning ) {                                                                                           // 1490
      _transition.clean[ prop ] = true;                                                                                // 1491
    }                                                                                                                  // 1492
  }                                                                                                                    // 1493
                                                                                                                       // 1494
  // set from styles                                                                                                   // 1495
  if ( args.from ) {                                                                                                   // 1496
    this.css( args.from );                                                                                             // 1497
    // force redraw. http://blog.alexmaccaw.com/css-transitions                                                        // 1498
    var h = this.element.offsetHeight;                                                                                 // 1499
    // hack for JSHint to hush about unused var                                                                        // 1500
    h = null;                                                                                                          // 1501
  }                                                                                                                    // 1502
  // enable transition                                                                                                 // 1503
  this.enableTransition( args.to );                                                                                    // 1504
  // set styles that are transitioning                                                                                 // 1505
  this.css( args.to );                                                                                                 // 1506
                                                                                                                       // 1507
  this.isTransitioning = true;                                                                                         // 1508
                                                                                                                       // 1509
};                                                                                                                     // 1510
                                                                                                                       // 1511
var itemTransitionProperties = transformProperty && ( toDash( transformProperty ) +                                    // 1512
  ',opacity' );                                                                                                        // 1513
                                                                                                                       // 1514
Item.prototype.enableTransition = function(/* style */) {                                                              // 1515
  // only enable if not already transitioning                                                                          // 1516
  // bug in IE10 were re-setting transition style will prevent                                                         // 1517
  // transitionend event from triggering                                                                               // 1518
  if ( this.isTransitioning ) {                                                                                        // 1519
    return;                                                                                                            // 1520
  }                                                                                                                    // 1521
                                                                                                                       // 1522
  // make transition: foo, bar, baz from style object                                                                  // 1523
  // TODO uncomment this bit when IE10 bug is resolved                                                                 // 1524
  // var transitionValue = [];                                                                                         // 1525
  // for ( var prop in style ) {                                                                                       // 1526
  //   // dash-ify camelCased properties like WebkitTransition                                                         // 1527
  //   transitionValue.push( toDash( prop ) );                                                                         // 1528
  // }                                                                                                                 // 1529
  // enable transition styles                                                                                          // 1530
  // HACK always enable transform,opacity for IE10                                                                     // 1531
  this.css({                                                                                                           // 1532
    transitionProperty: itemTransitionProperties,                                                                      // 1533
    transitionDuration: this.layout.options.transitionDuration                                                         // 1534
  });                                                                                                                  // 1535
  // listen for transition end event                                                                                   // 1536
  this.element.addEventListener( transitionEndEvent, this, false );                                                    // 1537
};                                                                                                                     // 1538
                                                                                                                       // 1539
Item.prototype.transition = Item.prototype[ transitionProperty ? '_transition' : '_nonTransition' ];                   // 1540
                                                                                                                       // 1541
// ----- events ----- //                                                                                               // 1542
                                                                                                                       // 1543
Item.prototype.onwebkitTransitionEnd = function( event ) {                                                             // 1544
  this.ontransitionend( event );                                                                                       // 1545
};                                                                                                                     // 1546
                                                                                                                       // 1547
Item.prototype.onotransitionend = function( event ) {                                                                  // 1548
  this.ontransitionend( event );                                                                                       // 1549
};                                                                                                                     // 1550
                                                                                                                       // 1551
// properties that I munge to make my life easier                                                                      // 1552
var dashedVendorProperties = {                                                                                         // 1553
  '-webkit-transform': 'transform',                                                                                    // 1554
  '-moz-transform': 'transform',                                                                                       // 1555
  '-o-transform': 'transform'                                                                                          // 1556
};                                                                                                                     // 1557
                                                                                                                       // 1558
Item.prototype.ontransitionend = function( event ) {                                                                   // 1559
  // disregard bubbled events from children                                                                            // 1560
  if ( event.target !== this.element ) {                                                                               // 1561
    return;                                                                                                            // 1562
  }                                                                                                                    // 1563
  var _transition = this._transn;                                                                                      // 1564
  // get property name of transitioned property, convert to prefix-free                                                // 1565
  var propertyName = dashedVendorProperties[ event.propertyName ] || event.propertyName;                               // 1566
                                                                                                                       // 1567
  // remove property that has completed transitioning                                                                  // 1568
  delete _transition.ingProperties[ propertyName ];                                                                    // 1569
  // check if any properties are still transitioning                                                                   // 1570
  if ( isEmptyObj( _transition.ingProperties ) ) {                                                                     // 1571
    // all properties have completed transitioning                                                                     // 1572
    this.disableTransition();                                                                                          // 1573
  }                                                                                                                    // 1574
  // clean style                                                                                                       // 1575
  if ( propertyName in _transition.clean ) {                                                                           // 1576
    // clean up style                                                                                                  // 1577
    this.element.style[ event.propertyName ] = '';                                                                     // 1578
    delete _transition.clean[ propertyName ];                                                                          // 1579
  }                                                                                                                    // 1580
  // trigger onTransitionEnd callback                                                                                  // 1581
  if ( propertyName in _transition.onEnd ) {                                                                           // 1582
    var onTransitionEnd = _transition.onEnd[ propertyName ];                                                           // 1583
    onTransitionEnd.call( this );                                                                                      // 1584
    delete _transition.onEnd[ propertyName ];                                                                          // 1585
  }                                                                                                                    // 1586
                                                                                                                       // 1587
  this.emitEvent( 'transitionEnd', [ this ] );                                                                         // 1588
};                                                                                                                     // 1589
                                                                                                                       // 1590
Item.prototype.disableTransition = function() {                                                                        // 1591
  this.removeTransitionStyles();                                                                                       // 1592
  this.element.removeEventListener( transitionEndEvent, this, false );                                                 // 1593
  this.isTransitioning = false;                                                                                        // 1594
};                                                                                                                     // 1595
                                                                                                                       // 1596
/**                                                                                                                    // 1597
 * removes style property from element                                                                                 // 1598
 * @param {Object} style                                                                                               // 1599
**/                                                                                                                    // 1600
Item.prototype._removeStyles = function( style ) {                                                                     // 1601
  // clean up transition styles                                                                                        // 1602
  var cleanStyle = {};                                                                                                 // 1603
  for ( var prop in style ) {                                                                                          // 1604
    cleanStyle[ prop ] = '';                                                                                           // 1605
  }                                                                                                                    // 1606
  this.css( cleanStyle );                                                                                              // 1607
};                                                                                                                     // 1608
                                                                                                                       // 1609
var cleanTransitionStyle = {                                                                                           // 1610
  transitionProperty: '',                                                                                              // 1611
  transitionDuration: ''                                                                                               // 1612
};                                                                                                                     // 1613
                                                                                                                       // 1614
Item.prototype.removeTransitionStyles = function() {                                                                   // 1615
  // remove transition                                                                                                 // 1616
  this.css( cleanTransitionStyle );                                                                                    // 1617
};                                                                                                                     // 1618
                                                                                                                       // 1619
// ----- show/hide/remove ----- //                                                                                     // 1620
                                                                                                                       // 1621
// remove element from DOM                                                                                             // 1622
Item.prototype.removeElem = function() {                                                                               // 1623
  this.element.parentNode.removeChild( this.element );                                                                 // 1624
  this.emitEvent( 'remove', [ this ] );                                                                                // 1625
};                                                                                                                     // 1626
                                                                                                                       // 1627
Item.prototype.remove = function() {                                                                                   // 1628
  // just remove element if no transition support or no transition                                                     // 1629
  if ( !transitionProperty || !parseFloat( this.layout.options.transitionDuration ) ) {                                // 1630
    this.removeElem();                                                                                                 // 1631
    return;                                                                                                            // 1632
  }                                                                                                                    // 1633
                                                                                                                       // 1634
  // start transition                                                                                                  // 1635
  var _this = this;                                                                                                    // 1636
  this.on( 'transitionEnd', function() {                                                                               // 1637
    _this.removeElem();                                                                                                // 1638
    return true; // bind once                                                                                          // 1639
  });                                                                                                                  // 1640
  this.hide();                                                                                                         // 1641
};                                                                                                                     // 1642
                                                                                                                       // 1643
Item.prototype.reveal = function() {                                                                                   // 1644
  delete this.isHidden;                                                                                                // 1645
  // remove display: none                                                                                              // 1646
  this.css({ display: '' });                                                                                           // 1647
                                                                                                                       // 1648
  var options = this.layout.options;                                                                                   // 1649
  this.transition({                                                                                                    // 1650
    from: options.hiddenStyle,                                                                                         // 1651
    to: options.visibleStyle,                                                                                          // 1652
    isCleaning: true                                                                                                   // 1653
  });                                                                                                                  // 1654
};                                                                                                                     // 1655
                                                                                                                       // 1656
Item.prototype.hide = function() {                                                                                     // 1657
  // set flag                                                                                                          // 1658
  this.isHidden = true;                                                                                                // 1659
  // remove display: none                                                                                              // 1660
  this.css({ display: '' });                                                                                           // 1661
                                                                                                                       // 1662
  var options = this.layout.options;                                                                                   // 1663
  this.transition({                                                                                                    // 1664
    from: options.visibleStyle,                                                                                        // 1665
    to: options.hiddenStyle,                                                                                           // 1666
    // keep hidden stuff hidden                                                                                        // 1667
    isCleaning: true,                                                                                                  // 1668
    onTransitionEnd: {                                                                                                 // 1669
      opacity: function() {                                                                                            // 1670
        // check if still hidden                                                                                       // 1671
        // during transition, item may have been un-hidden                                                             // 1672
        if ( this.isHidden ) {                                                                                         // 1673
          this.css({ display: 'none' });                                                                               // 1674
        }                                                                                                              // 1675
      }                                                                                                                // 1676
    }                                                                                                                  // 1677
  });                                                                                                                  // 1678
};                                                                                                                     // 1679
                                                                                                                       // 1680
Item.prototype.destroy = function() {                                                                                  // 1681
  this.css({                                                                                                           // 1682
    position: '',                                                                                                      // 1683
    left: '',                                                                                                          // 1684
    right: '',                                                                                                         // 1685
    top: '',                                                                                                           // 1686
    bottom: '',                                                                                                        // 1687
    transition: '',                                                                                                    // 1688
    transform: ''                                                                                                      // 1689
  });                                                                                                                  // 1690
};                                                                                                                     // 1691
                                                                                                                       // 1692
return Item;                                                                                                           // 1693
                                                                                                                       // 1694
}                                                                                                                      // 1695
                                                                                                                       // 1696
// -------------------------- transport -------------------------- //                                                  // 1697
                                                                                                                       // 1698
if ( typeof define === 'function' && define.amd ) {                                                                    // 1699
  // AMD                                                                                                               // 1700
  define( 'outlayer/item',[                                                                                            // 1701
      'eventEmitter/EventEmitter',                                                                                     // 1702
      'get-size/get-size',                                                                                             // 1703
      'get-style-property/get-style-property'                                                                          // 1704
    ],                                                                                                                 // 1705
    outlayerItemDefinition );                                                                                          // 1706
} else if (typeof exports === 'object') {                                                                              // 1707
  // CommonJS                                                                                                          // 1708
  module.exports = outlayerItemDefinition(                                                                             // 1709
    require('wolfy87-eventemitter'),                                                                                   // 1710
    require('get-size'),                                                                                               // 1711
    require('desandro-get-style-property')                                                                             // 1712
  );                                                                                                                   // 1713
} else {                                                                                                               // 1714
  // browser global                                                                                                    // 1715
  window.Outlayer = {};                                                                                                // 1716
  window.Outlayer.Item = outlayerItemDefinition(                                                                       // 1717
    window.EventEmitter,                                                                                               // 1718
    window.getSize,                                                                                                    // 1719
    window.getStyleProperty                                                                                            // 1720
  );                                                                                                                   // 1721
}                                                                                                                      // 1722
                                                                                                                       // 1723
})( window );                                                                                                          // 1724
                                                                                                                       // 1725
/*!                                                                                                                    // 1726
 * Outlayer v1.3.0                                                                                                     // 1727
 * the brains and guts of a layout library                                                                             // 1728
 * MIT license                                                                                                         // 1729
 */                                                                                                                    // 1730
                                                                                                                       // 1731
( function( window ) {                                                                                                 // 1732
                                                                                                                       // 1733
                                                                                                                       // 1734
                                                                                                                       // 1735
// ----- vars ----- //                                                                                                 // 1736
                                                                                                                       // 1737
var document = window.document;                                                                                        // 1738
var console = window.console;                                                                                          // 1739
var jQuery = window.jQuery;                                                                                            // 1740
var noop = function() {};                                                                                              // 1741
                                                                                                                       // 1742
// -------------------------- helpers -------------------------- //                                                    // 1743
                                                                                                                       // 1744
// extend objects                                                                                                      // 1745
function extend( a, b ) {                                                                                              // 1746
  for ( var prop in b ) {                                                                                              // 1747
    a[ prop ] = b[ prop ];                                                                                             // 1748
  }                                                                                                                    // 1749
  return a;                                                                                                            // 1750
}                                                                                                                      // 1751
                                                                                                                       // 1752
                                                                                                                       // 1753
var objToString = Object.prototype.toString;                                                                           // 1754
function isArray( obj ) {                                                                                              // 1755
  return objToString.call( obj ) === '[object Array]';                                                                 // 1756
}                                                                                                                      // 1757
                                                                                                                       // 1758
// turn element or nodeList into an array                                                                              // 1759
function makeArray( obj ) {                                                                                            // 1760
  var ary = [];                                                                                                        // 1761
  if ( isArray( obj ) ) {                                                                                              // 1762
    // use object if already an array                                                                                  // 1763
    ary = obj;                                                                                                         // 1764
  } else if ( obj && typeof obj.length === 'number' ) {                                                                // 1765
    // convert nodeList to array                                                                                       // 1766
    for ( var i=0, len = obj.length; i < len; i++ ) {                                                                  // 1767
      ary.push( obj[i] );                                                                                              // 1768
    }                                                                                                                  // 1769
  } else {                                                                                                             // 1770
    // array of single index                                                                                           // 1771
    ary.push( obj );                                                                                                   // 1772
  }                                                                                                                    // 1773
  return ary;                                                                                                          // 1774
}                                                                                                                      // 1775
                                                                                                                       // 1776
// http://stackoverflow.com/a/384380/182183                                                                            // 1777
var isElement = ( typeof HTMLElement === 'function' || typeof HTMLElement === 'object' ) ?                             // 1778
  function isElementDOM2( obj ) {                                                                                      // 1779
    return obj instanceof HTMLElement;                                                                                 // 1780
  } :                                                                                                                  // 1781
  function isElementQuirky( obj ) {                                                                                    // 1782
    return obj && typeof obj === 'object' &&                                                                           // 1783
      obj.nodeType === 1 && typeof obj.nodeName === 'string';                                                          // 1784
  };                                                                                                                   // 1785
                                                                                                                       // 1786
// index of helper cause IE8                                                                                           // 1787
var indexOf = Array.prototype.indexOf ? function( ary, obj ) {                                                         // 1788
    return ary.indexOf( obj );                                                                                         // 1789
  } : function( ary, obj ) {                                                                                           // 1790
    for ( var i=0, len = ary.length; i < len; i++ ) {                                                                  // 1791
      if ( ary[i] === obj ) {                                                                                          // 1792
        return i;                                                                                                      // 1793
      }                                                                                                                // 1794
    }                                                                                                                  // 1795
    return -1;                                                                                                         // 1796
  };                                                                                                                   // 1797
                                                                                                                       // 1798
function removeFrom( obj, ary ) {                                                                                      // 1799
  var index = indexOf( ary, obj );                                                                                     // 1800
  if ( index !== -1 ) {                                                                                                // 1801
    ary.splice( index, 1 );                                                                                            // 1802
  }                                                                                                                    // 1803
}                                                                                                                      // 1804
                                                                                                                       // 1805
// http://jamesroberts.name/blog/2010/02/22/string-functions-for-javascript-trim-to-camel-case-to-dashed-and-to-underscore/
function toDashed( str ) {                                                                                             // 1807
  return str.replace( /(.)([A-Z])/g, function( match, $1, $2 ) {                                                       // 1808
    return $1 + '-' + $2;                                                                                              // 1809
  }).toLowerCase();                                                                                                    // 1810
}                                                                                                                      // 1811
                                                                                                                       // 1812
                                                                                                                       // 1813
function outlayerDefinition( eventie, docReady, EventEmitter, getSize, matchesSelector, Item ) {                       // 1814
                                                                                                                       // 1815
// -------------------------- Outlayer -------------------------- //                                                   // 1816
                                                                                                                       // 1817
// globally unique identifiers                                                                                         // 1818
var GUID = 0;                                                                                                          // 1819
// internal store of all Outlayer intances                                                                             // 1820
var instances = {};                                                                                                    // 1821
                                                                                                                       // 1822
                                                                                                                       // 1823
/**                                                                                                                    // 1824
 * @param {Element, String} element                                                                                    // 1825
 * @param {Object} options                                                                                             // 1826
 * @constructor                                                                                                        // 1827
 */                                                                                                                    // 1828
function Outlayer( element, options ) {                                                                                // 1829
  // use element as selector string                                                                                    // 1830
  if ( typeof element === 'string' ) {                                                                                 // 1831
    element = document.querySelector( element );                                                                       // 1832
  }                                                                                                                    // 1833
                                                                                                                       // 1834
  // bail out if not proper element                                                                                    // 1835
  if ( !element || !isElement( element ) ) {                                                                           // 1836
    if ( console ) {                                                                                                   // 1837
      console.error( 'Bad ' + this.constructor.namespace + ' element: ' + element );                                   // 1838
    }                                                                                                                  // 1839
    return;                                                                                                            // 1840
  }                                                                                                                    // 1841
                                                                                                                       // 1842
  this.element = element;                                                                                              // 1843
                                                                                                                       // 1844
  // options                                                                                                           // 1845
  this.options = extend( {}, this.constructor.defaults );                                                              // 1846
  this.option( options );                                                                                              // 1847
                                                                                                                       // 1848
  // add id for Outlayer.getFromElement                                                                                // 1849
  var id = ++GUID;                                                                                                     // 1850
  this.element.outlayerGUID = id; // expando                                                                           // 1851
  instances[ id ] = this; // associate via id                                                                          // 1852
                                                                                                                       // 1853
  // kick it off                                                                                                       // 1854
  this._create();                                                                                                      // 1855
                                                                                                                       // 1856
  if ( this.options.isInitLayout ) {                                                                                   // 1857
    this.layout();                                                                                                     // 1858
  }                                                                                                                    // 1859
}                                                                                                                      // 1860
                                                                                                                       // 1861
// settings are for internal use only                                                                                  // 1862
Outlayer.namespace = 'outlayer';                                                                                       // 1863
Outlayer.Item = Item;                                                                                                  // 1864
                                                                                                                       // 1865
// default options                                                                                                     // 1866
Outlayer.defaults = {                                                                                                  // 1867
  containerStyle: {                                                                                                    // 1868
    position: 'relative'                                                                                               // 1869
  },                                                                                                                   // 1870
  isInitLayout: true,                                                                                                  // 1871
  isOriginLeft: true,                                                                                                  // 1872
  isOriginTop: true,                                                                                                   // 1873
  isResizeBound: true,                                                                                                 // 1874
  isResizingContainer: true,                                                                                           // 1875
  // item options                                                                                                      // 1876
  transitionDuration: '0.4s',                                                                                          // 1877
  hiddenStyle: {                                                                                                       // 1878
    opacity: 0,                                                                                                        // 1879
    transform: 'scale(0.001)'                                                                                          // 1880
  },                                                                                                                   // 1881
  visibleStyle: {                                                                                                      // 1882
    opacity: 1,                                                                                                        // 1883
    transform: 'scale(1)'                                                                                              // 1884
  }                                                                                                                    // 1885
};                                                                                                                     // 1886
                                                                                                                       // 1887
// inherit EventEmitter                                                                                                // 1888
extend( Outlayer.prototype, EventEmitter.prototype );                                                                  // 1889
                                                                                                                       // 1890
/**                                                                                                                    // 1891
 * set options                                                                                                         // 1892
 * @param {Object} opts                                                                                                // 1893
 */                                                                                                                    // 1894
Outlayer.prototype.option = function( opts ) {                                                                         // 1895
  extend( this.options, opts );                                                                                        // 1896
};                                                                                                                     // 1897
                                                                                                                       // 1898
Outlayer.prototype._create = function() {                                                                              // 1899
  // get items from children                                                                                           // 1900
  this.reloadItems();                                                                                                  // 1901
  // elements that affect layout, but are not laid out                                                                 // 1902
  this.stamps = [];                                                                                                    // 1903
  this.stamp( this.options.stamp );                                                                                    // 1904
  // set container style                                                                                               // 1905
  extend( this.element.style, this.options.containerStyle );                                                           // 1906
                                                                                                                       // 1907
  // bind resize method                                                                                                // 1908
  if ( this.options.isResizeBound ) {                                                                                  // 1909
    this.bindResize();                                                                                                 // 1910
  }                                                                                                                    // 1911
};                                                                                                                     // 1912
                                                                                                                       // 1913
// goes through all children again and gets bricks in proper order                                                     // 1914
Outlayer.prototype.reloadItems = function() {                                                                          // 1915
  // collection of item elements                                                                                       // 1916
  this.items = this._itemize( this.element.children );                                                                 // 1917
};                                                                                                                     // 1918
                                                                                                                       // 1919
                                                                                                                       // 1920
/**                                                                                                                    // 1921
 * turn elements into Outlayer.Items to be used in layout                                                              // 1922
 * @param {Array or NodeList or HTMLElement} elems                                                                     // 1923
 * @returns {Array} items - collection of new Outlayer Items                                                           // 1924
 */                                                                                                                    // 1925
Outlayer.prototype._itemize = function( elems ) {                                                                      // 1926
                                                                                                                       // 1927
  var itemElems = this._filterFindItemElements( elems );                                                               // 1928
  var Item = this.constructor.Item;                                                                                    // 1929
                                                                                                                       // 1930
  // create new Outlayer Items for collection                                                                          // 1931
  var items = [];                                                                                                      // 1932
  for ( var i=0, len = itemElems.length; i < len; i++ ) {                                                              // 1933
    var elem = itemElems[i];                                                                                           // 1934
    var item = new Item( elem, this );                                                                                 // 1935
    items.push( item );                                                                                                // 1936
  }                                                                                                                    // 1937
                                                                                                                       // 1938
  return items;                                                                                                        // 1939
};                                                                                                                     // 1940
                                                                                                                       // 1941
/**                                                                                                                    // 1942
 * get item elements to be used in layout                                                                              // 1943
 * @param {Array or NodeList or HTMLElement} elems                                                                     // 1944
 * @returns {Array} items - item elements                                                                              // 1945
 */                                                                                                                    // 1946
Outlayer.prototype._filterFindItemElements = function( elems ) {                                                       // 1947
  // make array of elems                                                                                               // 1948
  elems = makeArray( elems );                                                                                          // 1949
  var itemSelector = this.options.itemSelector;                                                                        // 1950
  var itemElems = [];                                                                                                  // 1951
                                                                                                                       // 1952
  for ( var i=0, len = elems.length; i < len; i++ ) {                                                                  // 1953
    var elem = elems[i];                                                                                               // 1954
    // check that elem is an actual element                                                                            // 1955
    if ( !isElement( elem ) ) {                                                                                        // 1956
      continue;                                                                                                        // 1957
    }                                                                                                                  // 1958
    // filter & find items if we have an item selector                                                                 // 1959
    if ( itemSelector ) {                                                                                              // 1960
      // filter siblings                                                                                               // 1961
      if ( matchesSelector( elem, itemSelector ) ) {                                                                   // 1962
        itemElems.push( elem );                                                                                        // 1963
      }                                                                                                                // 1964
      // find children                                                                                                 // 1965
      var childElems = elem.querySelectorAll( itemSelector );                                                          // 1966
      // concat childElems to filterFound array                                                                        // 1967
      for ( var j=0, jLen = childElems.length; j < jLen; j++ ) {                                                       // 1968
        itemElems.push( childElems[j] );                                                                               // 1969
      }                                                                                                                // 1970
    } else {                                                                                                           // 1971
      itemElems.push( elem );                                                                                          // 1972
    }                                                                                                                  // 1973
  }                                                                                                                    // 1974
                                                                                                                       // 1975
  return itemElems;                                                                                                    // 1976
};                                                                                                                     // 1977
                                                                                                                       // 1978
/**                                                                                                                    // 1979
 * getter method for getting item elements                                                                             // 1980
 * @returns {Array} elems - collection of item elements                                                                // 1981
 */                                                                                                                    // 1982
Outlayer.prototype.getItemElements = function() {                                                                      // 1983
  var elems = [];                                                                                                      // 1984
  for ( var i=0, len = this.items.length; i < len; i++ ) {                                                             // 1985
    elems.push( this.items[i].element );                                                                               // 1986
  }                                                                                                                    // 1987
  return elems;                                                                                                        // 1988
};                                                                                                                     // 1989
                                                                                                                       // 1990
// ----- init & layout ----- //                                                                                        // 1991
                                                                                                                       // 1992
/**                                                                                                                    // 1993
 * lays out all items                                                                                                  // 1994
 */                                                                                                                    // 1995
Outlayer.prototype.layout = function() {                                                                               // 1996
  this._resetLayout();                                                                                                 // 1997
  this._manageStamps();                                                                                                // 1998
                                                                                                                       // 1999
  // don't animate first layout                                                                                        // 2000
  var isInstant = this.options.isLayoutInstant !== undefined ?                                                         // 2001
    this.options.isLayoutInstant : !this._isLayoutInited;                                                              // 2002
  this.layoutItems( this.items, isInstant );                                                                           // 2003
                                                                                                                       // 2004
  // flag for initalized                                                                                               // 2005
  this._isLayoutInited = true;                                                                                         // 2006
};                                                                                                                     // 2007
                                                                                                                       // 2008
// _init is alias for layout                                                                                           // 2009
Outlayer.prototype._init = Outlayer.prototype.layout;                                                                  // 2010
                                                                                                                       // 2011
/**                                                                                                                    // 2012
 * logic before any new layout                                                                                         // 2013
 */                                                                                                                    // 2014
Outlayer.prototype._resetLayout = function() {                                                                         // 2015
  this.getSize();                                                                                                      // 2016
};                                                                                                                     // 2017
                                                                                                                       // 2018
                                                                                                                       // 2019
Outlayer.prototype.getSize = function() {                                                                              // 2020
  this.size = getSize( this.element );                                                                                 // 2021
};                                                                                                                     // 2022
                                                                                                                       // 2023
/**                                                                                                                    // 2024
 * get measurement from option, for columnWidth, rowHeight, gutter                                                     // 2025
 * if option is String -> get element from selector string, & get size of element                                      // 2026
 * if option is Element -> get size of element                                                                         // 2027
 * else use option as a number                                                                                         // 2028
 *                                                                                                                     // 2029
 * @param {String} measurement                                                                                         // 2030
 * @param {String} size - width or height                                                                              // 2031
 * @private                                                                                                            // 2032
 */                                                                                                                    // 2033
Outlayer.prototype._getMeasurement = function( measurement, size ) {                                                   // 2034
  var option = this.options[ measurement ];                                                                            // 2035
  var elem;                                                                                                            // 2036
  if ( !option ) {                                                                                                     // 2037
    // default to 0                                                                                                    // 2038
    this[ measurement ] = 0;                                                                                           // 2039
  } else {                                                                                                             // 2040
    // use option as an element                                                                                        // 2041
    if ( typeof option === 'string' ) {                                                                                // 2042
      elem = this.element.querySelector( option );                                                                     // 2043
    } else if ( isElement( option ) ) {                                                                                // 2044
      elem = option;                                                                                                   // 2045
    }                                                                                                                  // 2046
    // use size of element, if element                                                                                 // 2047
    this[ measurement ] = elem ? getSize( elem )[ size ] : option;                                                     // 2048
  }                                                                                                                    // 2049
};                                                                                                                     // 2050
                                                                                                                       // 2051
/**                                                                                                                    // 2052
 * layout a collection of item elements                                                                                // 2053
 * @api public                                                                                                         // 2054
 */                                                                                                                    // 2055
Outlayer.prototype.layoutItems = function( items, isInstant ) {                                                        // 2056
  items = this._getItemsForLayout( items );                                                                            // 2057
                                                                                                                       // 2058
  this._layoutItems( items, isInstant );                                                                               // 2059
                                                                                                                       // 2060
  this._postLayout();                                                                                                  // 2061
};                                                                                                                     // 2062
                                                                                                                       // 2063
/**                                                                                                                    // 2064
 * get the items to be laid out                                                                                        // 2065
 * you may want to skip over some items                                                                                // 2066
 * @param {Array} items                                                                                                // 2067
 * @returns {Array} items                                                                                              // 2068
 */                                                                                                                    // 2069
Outlayer.prototype._getItemsForLayout = function( items ) {                                                            // 2070
  var layoutItems = [];                                                                                                // 2071
  for ( var i=0, len = items.length; i < len; i++ ) {                                                                  // 2072
    var item = items[i];                                                                                               // 2073
    if ( !item.isIgnored ) {                                                                                           // 2074
      layoutItems.push( item );                                                                                        // 2075
    }                                                                                                                  // 2076
  }                                                                                                                    // 2077
  return layoutItems;                                                                                                  // 2078
};                                                                                                                     // 2079
                                                                                                                       // 2080
/**                                                                                                                    // 2081
 * layout items                                                                                                        // 2082
 * @param {Array} items                                                                                                // 2083
 * @param {Boolean} isInstant                                                                                          // 2084
 */                                                                                                                    // 2085
Outlayer.prototype._layoutItems = function( items, isInstant ) {                                                       // 2086
  var _this = this;                                                                                                    // 2087
  function onItemsLayout() {                                                                                           // 2088
    _this.emitEvent( 'layoutComplete', [ _this, items ] );                                                             // 2089
  }                                                                                                                    // 2090
                                                                                                                       // 2091
  if ( !items || !items.length ) {                                                                                     // 2092
    // no items, emit event with empty array                                                                           // 2093
    onItemsLayout();                                                                                                   // 2094
    return;                                                                                                            // 2095
  }                                                                                                                    // 2096
                                                                                                                       // 2097
  // emit layoutComplete when done                                                                                     // 2098
  this._itemsOn( items, 'layout', onItemsLayout );                                                                     // 2099
                                                                                                                       // 2100
  var queue = [];                                                                                                      // 2101
                                                                                                                       // 2102
  for ( var i=0, len = items.length; i < len; i++ ) {                                                                  // 2103
    var item = items[i];                                                                                               // 2104
    // get x/y object from method                                                                                      // 2105
    var position = this._getItemLayoutPosition( item );                                                                // 2106
    // enqueue                                                                                                         // 2107
    position.item = item;                                                                                              // 2108
    position.isInstant = isInstant || item.isLayoutInstant;                                                            // 2109
    queue.push( position );                                                                                            // 2110
  }                                                                                                                    // 2111
                                                                                                                       // 2112
  this._processLayoutQueue( queue );                                                                                   // 2113
};                                                                                                                     // 2114
                                                                                                                       // 2115
/**                                                                                                                    // 2116
 * get item layout position                                                                                            // 2117
 * @param {Outlayer.Item} item                                                                                         // 2118
 * @returns {Object} x and y position                                                                                  // 2119
 */                                                                                                                    // 2120
Outlayer.prototype._getItemLayoutPosition = function( /* item */ ) {                                                   // 2121
  return {                                                                                                             // 2122
    x: 0,                                                                                                              // 2123
    y: 0                                                                                                               // 2124
  };                                                                                                                   // 2125
};                                                                                                                     // 2126
                                                                                                                       // 2127
/**                                                                                                                    // 2128
 * iterate over array and position each item                                                                           // 2129
 * Reason being - separating this logic prevents 'layout invalidation'                                                 // 2130
 * thx @paul_irish                                                                                                     // 2131
 * @param {Array} queue                                                                                                // 2132
 */                                                                                                                    // 2133
Outlayer.prototype._processLayoutQueue = function( queue ) {                                                           // 2134
  for ( var i=0, len = queue.length; i < len; i++ ) {                                                                  // 2135
    var obj = queue[i];                                                                                                // 2136
    this._positionItem( obj.item, obj.x, obj.y, obj.isInstant );                                                       // 2137
  }                                                                                                                    // 2138
};                                                                                                                     // 2139
                                                                                                                       // 2140
/**                                                                                                                    // 2141
 * Sets position of item in DOM                                                                                        // 2142
 * @param {Outlayer.Item} item                                                                                         // 2143
 * @param {Number} x - horizontal position                                                                             // 2144
 * @param {Number} y - vertical position                                                                               // 2145
 * @param {Boolean} isInstant - disables transitions                                                                   // 2146
 */                                                                                                                    // 2147
Outlayer.prototype._positionItem = function( item, x, y, isInstant ) {                                                 // 2148
  if ( isInstant ) {                                                                                                   // 2149
    // if not transition, just set CSS                                                                                 // 2150
    item.goTo( x, y );                                                                                                 // 2151
  } else {                                                                                                             // 2152
    item.moveTo( x, y );                                                                                               // 2153
  }                                                                                                                    // 2154
};                                                                                                                     // 2155
                                                                                                                       // 2156
/**                                                                                                                    // 2157
 * Any logic you want to do after each layout,                                                                         // 2158
 * i.e. size the container                                                                                             // 2159
 */                                                                                                                    // 2160
Outlayer.prototype._postLayout = function() {                                                                          // 2161
  this.resizeContainer();                                                                                              // 2162
};                                                                                                                     // 2163
                                                                                                                       // 2164
Outlayer.prototype.resizeContainer = function() {                                                                      // 2165
  if ( !this.options.isResizingContainer ) {                                                                           // 2166
    return;                                                                                                            // 2167
  }                                                                                                                    // 2168
  var size = this._getContainerSize();                                                                                 // 2169
  if ( size ) {                                                                                                        // 2170
    this._setContainerMeasure( size.width, true );                                                                     // 2171
    this._setContainerMeasure( size.height, false );                                                                   // 2172
  }                                                                                                                    // 2173
};                                                                                                                     // 2174
                                                                                                                       // 2175
/**                                                                                                                    // 2176
 * Sets width or height of container if returned                                                                       // 2177
 * @returns {Object} size                                                                                              // 2178
 *   @param {Number} width                                                                                             // 2179
 *   @param {Number} height                                                                                            // 2180
 */                                                                                                                    // 2181
Outlayer.prototype._getContainerSize = noop;                                                                           // 2182
                                                                                                                       // 2183
/**                                                                                                                    // 2184
 * @param {Number} measure - size of width or height                                                                   // 2185
 * @param {Boolean} isWidth                                                                                            // 2186
 */                                                                                                                    // 2187
Outlayer.prototype._setContainerMeasure = function( measure, isWidth ) {                                               // 2188
  if ( measure === undefined ) {                                                                                       // 2189
    return;                                                                                                            // 2190
  }                                                                                                                    // 2191
                                                                                                                       // 2192
  var elemSize = this.size;                                                                                            // 2193
  // add padding and border width if border box                                                                        // 2194
  if ( elemSize.isBorderBox ) {                                                                                        // 2195
    measure += isWidth ? elemSize.paddingLeft + elemSize.paddingRight +                                                // 2196
      elemSize.borderLeftWidth + elemSize.borderRightWidth :                                                           // 2197
      elemSize.paddingBottom + elemSize.paddingTop +                                                                   // 2198
      elemSize.borderTopWidth + elemSize.borderBottomWidth;                                                            // 2199
  }                                                                                                                    // 2200
                                                                                                                       // 2201
  measure = Math.max( measure, 0 );                                                                                    // 2202
  this.element.style[ isWidth ? 'width' : 'height' ] = measure + 'px';                                                 // 2203
};                                                                                                                     // 2204
                                                                                                                       // 2205
/**                                                                                                                    // 2206
 * trigger a callback for a collection of items events                                                                 // 2207
 * @param {Array} items - Outlayer.Items                                                                               // 2208
 * @param {String} eventName                                                                                           // 2209
 * @param {Function} callback                                                                                          // 2210
 */                                                                                                                    // 2211
Outlayer.prototype._itemsOn = function( items, eventName, callback ) {                                                 // 2212
  var doneCount = 0;                                                                                                   // 2213
  var count = items.length;                                                                                            // 2214
  // event callback                                                                                                    // 2215
  var _this = this;                                                                                                    // 2216
  function tick() {                                                                                                    // 2217
    doneCount++;                                                                                                       // 2218
    if ( doneCount === count ) {                                                                                       // 2219
      callback.call( _this );                                                                                          // 2220
    }                                                                                                                  // 2221
    return true; // bind once                                                                                          // 2222
  }                                                                                                                    // 2223
  // bind callback                                                                                                     // 2224
  for ( var i=0, len = items.length; i < len; i++ ) {                                                                  // 2225
    var item = items[i];                                                                                               // 2226
    item.on( eventName, tick );                                                                                        // 2227
  }                                                                                                                    // 2228
};                                                                                                                     // 2229
                                                                                                                       // 2230
// -------------------------- ignore & stamps -------------------------- //                                            // 2231
                                                                                                                       // 2232
                                                                                                                       // 2233
/**                                                                                                                    // 2234
 * keep item in collection, but do not lay it out                                                                      // 2235
 * ignored items do not get skipped in layout                                                                          // 2236
 * @param {Element} elem                                                                                               // 2237
 */                                                                                                                    // 2238
Outlayer.prototype.ignore = function( elem ) {                                                                         // 2239
  var item = this.getItem( elem );                                                                                     // 2240
  if ( item ) {                                                                                                        // 2241
    item.isIgnored = true;                                                                                             // 2242
  }                                                                                                                    // 2243
};                                                                                                                     // 2244
                                                                                                                       // 2245
/**                                                                                                                    // 2246
 * return item to layout collection                                                                                    // 2247
 * @param {Element} elem                                                                                               // 2248
 */                                                                                                                    // 2249
Outlayer.prototype.unignore = function( elem ) {                                                                       // 2250
  var item = this.getItem( elem );                                                                                     // 2251
  if ( item ) {                                                                                                        // 2252
    delete item.isIgnored;                                                                                             // 2253
  }                                                                                                                    // 2254
};                                                                                                                     // 2255
                                                                                                                       // 2256
/**                                                                                                                    // 2257
 * adds elements to stamps                                                                                             // 2258
 * @param {NodeList, Array, Element, or String} elems                                                                  // 2259
 */                                                                                                                    // 2260
Outlayer.prototype.stamp = function( elems ) {                                                                         // 2261
  elems = this._find( elems );                                                                                         // 2262
  if ( !elems ) {                                                                                                      // 2263
    return;                                                                                                            // 2264
  }                                                                                                                    // 2265
                                                                                                                       // 2266
  this.stamps = this.stamps.concat( elems );                                                                           // 2267
  // ignore                                                                                                            // 2268
  for ( var i=0, len = elems.length; i < len; i++ ) {                                                                  // 2269
    var elem = elems[i];                                                                                               // 2270
    this.ignore( elem );                                                                                               // 2271
  }                                                                                                                    // 2272
};                                                                                                                     // 2273
                                                                                                                       // 2274
/**                                                                                                                    // 2275
 * removes elements to stamps                                                                                          // 2276
 * @param {NodeList, Array, or Element} elems                                                                          // 2277
 */                                                                                                                    // 2278
Outlayer.prototype.unstamp = function( elems ) {                                                                       // 2279
  elems = this._find( elems );                                                                                         // 2280
  if ( !elems ){                                                                                                       // 2281
    return;                                                                                                            // 2282
  }                                                                                                                    // 2283
                                                                                                                       // 2284
  for ( var i=0, len = elems.length; i < len; i++ ) {                                                                  // 2285
    var elem = elems[i];                                                                                               // 2286
    // filter out removed stamp elements                                                                               // 2287
    removeFrom( elem, this.stamps );                                                                                   // 2288
    this.unignore( elem );                                                                                             // 2289
  }                                                                                                                    // 2290
                                                                                                                       // 2291
};                                                                                                                     // 2292
                                                                                                                       // 2293
/**                                                                                                                    // 2294
 * finds child elements                                                                                                // 2295
 * @param {NodeList, Array, Element, or String} elems                                                                  // 2296
 * @returns {Array} elems                                                                                              // 2297
 */                                                                                                                    // 2298
Outlayer.prototype._find = function( elems ) {                                                                         // 2299
  if ( !elems ) {                                                                                                      // 2300
    return;                                                                                                            // 2301
  }                                                                                                                    // 2302
  // if string, use argument as selector string                                                                        // 2303
  if ( typeof elems === 'string' ) {                                                                                   // 2304
    elems = this.element.querySelectorAll( elems );                                                                    // 2305
  }                                                                                                                    // 2306
  elems = makeArray( elems );                                                                                          // 2307
  return elems;                                                                                                        // 2308
};                                                                                                                     // 2309
                                                                                                                       // 2310
Outlayer.prototype._manageStamps = function() {                                                                        // 2311
  if ( !this.stamps || !this.stamps.length ) {                                                                         // 2312
    return;                                                                                                            // 2313
  }                                                                                                                    // 2314
                                                                                                                       // 2315
  this._getBoundingRect();                                                                                             // 2316
                                                                                                                       // 2317
  for ( var i=0, len = this.stamps.length; i < len; i++ ) {                                                            // 2318
    var stamp = this.stamps[i];                                                                                        // 2319
    this._manageStamp( stamp );                                                                                        // 2320
  }                                                                                                                    // 2321
};                                                                                                                     // 2322
                                                                                                                       // 2323
// update boundingLeft / Top                                                                                           // 2324
Outlayer.prototype._getBoundingRect = function() {                                                                     // 2325
  // get bounding rect for container element                                                                           // 2326
  var boundingRect = this.element.getBoundingClientRect();                                                             // 2327
  var size = this.size;                                                                                                // 2328
  this._boundingRect = {                                                                                               // 2329
    left: boundingRect.left + size.paddingLeft + size.borderLeftWidth,                                                 // 2330
    top: boundingRect.top + size.paddingTop + size.borderTopWidth,                                                     // 2331
    right: boundingRect.right - ( size.paddingRight + size.borderRightWidth ),                                         // 2332
    bottom: boundingRect.bottom - ( size.paddingBottom + size.borderBottomWidth )                                      // 2333
  };                                                                                                                   // 2334
};                                                                                                                     // 2335
                                                                                                                       // 2336
/**                                                                                                                    // 2337
 * @param {Element} stamp                                                                                              // 2338
**/                                                                                                                    // 2339
Outlayer.prototype._manageStamp = noop;                                                                                // 2340
                                                                                                                       // 2341
/**                                                                                                                    // 2342
 * get x/y position of element relative to container element                                                           // 2343
 * @param {Element} elem                                                                                               // 2344
 * @returns {Object} offset - has left, top, right, bottom                                                             // 2345
 */                                                                                                                    // 2346
Outlayer.prototype._getElementOffset = function( elem ) {                                                              // 2347
  var boundingRect = elem.getBoundingClientRect();                                                                     // 2348
  var thisRect = this._boundingRect;                                                                                   // 2349
  var size = getSize( elem );                                                                                          // 2350
  var offset = {                                                                                                       // 2351
    left: boundingRect.left - thisRect.left - size.marginLeft,                                                         // 2352
    top: boundingRect.top - thisRect.top - size.marginTop,                                                             // 2353
    right: thisRect.right - boundingRect.right - size.marginRight,                                                     // 2354
    bottom: thisRect.bottom - boundingRect.bottom - size.marginBottom                                                  // 2355
  };                                                                                                                   // 2356
  return offset;                                                                                                       // 2357
};                                                                                                                     // 2358
                                                                                                                       // 2359
// -------------------------- resize -------------------------- //                                                     // 2360
                                                                                                                       // 2361
// enable event handlers for listeners                                                                                 // 2362
// i.e. resize -> onresize                                                                                             // 2363
Outlayer.prototype.handleEvent = function( event ) {                                                                   // 2364
  var method = 'on' + event.type;                                                                                      // 2365
  if ( this[ method ] ) {                                                                                              // 2366
    this[ method ]( event );                                                                                           // 2367
  }                                                                                                                    // 2368
};                                                                                                                     // 2369
                                                                                                                       // 2370
/**                                                                                                                    // 2371
 * Bind layout to window resizing                                                                                      // 2372
 */                                                                                                                    // 2373
Outlayer.prototype.bindResize = function() {                                                                           // 2374
  // bind just one listener                                                                                            // 2375
  if ( this.isResizeBound ) {                                                                                          // 2376
    return;                                                                                                            // 2377
  }                                                                                                                    // 2378
  eventie.bind( window, 'resize', this );                                                                              // 2379
  this.isResizeBound = true;                                                                                           // 2380
};                                                                                                                     // 2381
                                                                                                                       // 2382
/**                                                                                                                    // 2383
 * Unbind layout to window resizing                                                                                    // 2384
 */                                                                                                                    // 2385
Outlayer.prototype.unbindResize = function() {                                                                         // 2386
  if ( this.isResizeBound ) {                                                                                          // 2387
    eventie.unbind( window, 'resize', this );                                                                          // 2388
  }                                                                                                                    // 2389
  this.isResizeBound = false;                                                                                          // 2390
};                                                                                                                     // 2391
                                                                                                                       // 2392
// original debounce by John Hann                                                                                      // 2393
// http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/                                         // 2394
                                                                                                                       // 2395
// this fires every resize                                                                                             // 2396
Outlayer.prototype.onresize = function() {                                                                             // 2397
  if ( this.resizeTimeout ) {                                                                                          // 2398
    clearTimeout( this.resizeTimeout );                                                                                // 2399
  }                                                                                                                    // 2400
                                                                                                                       // 2401
  var _this = this;                                                                                                    // 2402
  function delayed() {                                                                                                 // 2403
    _this.resize();                                                                                                    // 2404
    delete _this.resizeTimeout;                                                                                        // 2405
  }                                                                                                                    // 2406
                                                                                                                       // 2407
  this.resizeTimeout = setTimeout( delayed, 100 );                                                                     // 2408
};                                                                                                                     // 2409
                                                                                                                       // 2410
// debounced, layout on resize                                                                                         // 2411
Outlayer.prototype.resize = function() {                                                                               // 2412
  // don't trigger if size did not change                                                                              // 2413
  // or if resize was unbound. See #9                                                                                  // 2414
  if ( !this.isResizeBound || !this.needsResizeLayout() ) {                                                            // 2415
    return;                                                                                                            // 2416
  }                                                                                                                    // 2417
                                                                                                                       // 2418
  this.layout();                                                                                                       // 2419
};                                                                                                                     // 2420
                                                                                                                       // 2421
/**                                                                                                                    // 2422
 * check if layout is needed post layout                                                                               // 2423
 * @returns Boolean                                                                                                    // 2424
 */                                                                                                                    // 2425
Outlayer.prototype.needsResizeLayout = function() {                                                                    // 2426
  var size = getSize( this.element );                                                                                  // 2427
  // check that this.size and size are there                                                                           // 2428
  // IE8 triggers resize on body size change, so they might not be                                                     // 2429
  var hasSizes = this.size && size;                                                                                    // 2430
  return hasSizes && size.innerWidth !== this.size.innerWidth;                                                         // 2431
};                                                                                                                     // 2432
                                                                                                                       // 2433
// -------------------------- methods -------------------------- //                                                    // 2434
                                                                                                                       // 2435
/**                                                                                                                    // 2436
 * add items to Outlayer instance                                                                                      // 2437
 * @param {Array or NodeList or Element} elems                                                                         // 2438
 * @returns {Array} items - Outlayer.Items                                                                             // 2439
**/                                                                                                                    // 2440
Outlayer.prototype.addItems = function( elems ) {                                                                      // 2441
  var items = this._itemize( elems );                                                                                  // 2442
  // add items to collection                                                                                           // 2443
  if ( items.length ) {                                                                                                // 2444
    this.items = this.items.concat( items );                                                                           // 2445
  }                                                                                                                    // 2446
  return items;                                                                                                        // 2447
};                                                                                                                     // 2448
                                                                                                                       // 2449
/**                                                                                                                    // 2450
 * Layout newly-appended item elements                                                                                 // 2451
 * @param {Array or NodeList or Element} elems                                                                         // 2452
 */                                                                                                                    // 2453
Outlayer.prototype.appended = function( elems ) {                                                                      // 2454
  var items = this.addItems( elems );                                                                                  // 2455
  if ( !items.length ) {                                                                                               // 2456
    return;                                                                                                            // 2457
  }                                                                                                                    // 2458
  // layout and reveal just the new items                                                                              // 2459
  this.layoutItems( items, true );                                                                                     // 2460
  this.reveal( items );                                                                                                // 2461
};                                                                                                                     // 2462
                                                                                                                       // 2463
/**                                                                                                                    // 2464
 * Layout prepended elements                                                                                           // 2465
 * @param {Array or NodeList or Element} elems                                                                         // 2466
 */                                                                                                                    // 2467
Outlayer.prototype.prepended = function( elems ) {                                                                     // 2468
  var items = this._itemize( elems );                                                                                  // 2469
  if ( !items.length ) {                                                                                               // 2470
    return;                                                                                                            // 2471
  }                                                                                                                    // 2472
  // add items to beginning of collection                                                                              // 2473
  var previousItems = this.items.slice(0);                                                                             // 2474
  this.items = items.concat( previousItems );                                                                          // 2475
  // start new layout                                                                                                  // 2476
  this._resetLayout();                                                                                                 // 2477
  this._manageStamps();                                                                                                // 2478
  // layout new stuff without transition                                                                               // 2479
  this.layoutItems( items, true );                                                                                     // 2480
  this.reveal( items );                                                                                                // 2481
  // layout previous items                                                                                             // 2482
  this.layoutItems( previousItems );                                                                                   // 2483
};                                                                                                                     // 2484
                                                                                                                       // 2485
/**                                                                                                                    // 2486
 * reveal a collection of items                                                                                        // 2487
 * @param {Array of Outlayer.Items} items                                                                              // 2488
 */                                                                                                                    // 2489
Outlayer.prototype.reveal = function( items ) {                                                                        // 2490
  var len = items && items.length;                                                                                     // 2491
  if ( !len ) {                                                                                                        // 2492
    return;                                                                                                            // 2493
  }                                                                                                                    // 2494
  for ( var i=0; i < len; i++ ) {                                                                                      // 2495
    var item = items[i];                                                                                               // 2496
    item.reveal();                                                                                                     // 2497
  }                                                                                                                    // 2498
};                                                                                                                     // 2499
                                                                                                                       // 2500
/**                                                                                                                    // 2501
 * hide a collection of items                                                                                          // 2502
 * @param {Array of Outlayer.Items} items                                                                              // 2503
 */                                                                                                                    // 2504
Outlayer.prototype.hide = function( items ) {                                                                          // 2505
  var len = items && items.length;                                                                                     // 2506
  if ( !len ) {                                                                                                        // 2507
    return;                                                                                                            // 2508
  }                                                                                                                    // 2509
  for ( var i=0; i < len; i++ ) {                                                                                      // 2510
    var item = items[i];                                                                                               // 2511
    item.hide();                                                                                                       // 2512
  }                                                                                                                    // 2513
};                                                                                                                     // 2514
                                                                                                                       // 2515
/**                                                                                                                    // 2516
 * get Outlayer.Item, given an Element                                                                                 // 2517
 * @param {Element} elem                                                                                               // 2518
 * @param {Function} callback                                                                                          // 2519
 * @returns {Outlayer.Item} item                                                                                       // 2520
 */                                                                                                                    // 2521
Outlayer.prototype.getItem = function( elem ) {                                                                        // 2522
  // loop through items to get the one that matches                                                                    // 2523
  for ( var i=0, len = this.items.length; i < len; i++ ) {                                                             // 2524
    var item = this.items[i];                                                                                          // 2525
    if ( item.element === elem ) {                                                                                     // 2526
      // return item                                                                                                   // 2527
      return item;                                                                                                     // 2528
    }                                                                                                                  // 2529
  }                                                                                                                    // 2530
};                                                                                                                     // 2531
                                                                                                                       // 2532
/**                                                                                                                    // 2533
 * get collection of Outlayer.Items, given Elements                                                                    // 2534
 * @param {Array} elems                                                                                                // 2535
 * @returns {Array} items - Outlayer.Items                                                                             // 2536
 */                                                                                                                    // 2537
Outlayer.prototype.getItems = function( elems ) {                                                                      // 2538
  if ( !elems || !elems.length ) {                                                                                     // 2539
    return;                                                                                                            // 2540
  }                                                                                                                    // 2541
  var items = [];                                                                                                      // 2542
  for ( var i=0, len = elems.length; i < len; i++ ) {                                                                  // 2543
    var elem = elems[i];                                                                                               // 2544
    var item = this.getItem( elem );                                                                                   // 2545
    if ( item ) {                                                                                                      // 2546
      items.push( item );                                                                                              // 2547
    }                                                                                                                  // 2548
  }                                                                                                                    // 2549
                                                                                                                       // 2550
  return items;                                                                                                        // 2551
};                                                                                                                     // 2552
                                                                                                                       // 2553
/**                                                                                                                    // 2554
 * remove element(s) from instance and DOM                                                                             // 2555
 * @param {Array or NodeList or Element} elems                                                                         // 2556
 */                                                                                                                    // 2557
Outlayer.prototype.remove = function( elems ) {                                                                        // 2558
  elems = makeArray( elems );                                                                                          // 2559
                                                                                                                       // 2560
  var removeItems = this.getItems( elems );                                                                            // 2561
  // bail if no items to remove                                                                                        // 2562
  if ( !removeItems || !removeItems.length ) {                                                                         // 2563
    return;                                                                                                            // 2564
  }                                                                                                                    // 2565
                                                                                                                       // 2566
  this._itemsOn( removeItems, 'remove', function() {                                                                   // 2567
    this.emitEvent( 'removeComplete', [ this, removeItems ] );                                                         // 2568
  });                                                                                                                  // 2569
                                                                                                                       // 2570
  for ( var i=0, len = removeItems.length; i < len; i++ ) {                                                            // 2571
    var item = removeItems[i];                                                                                         // 2572
    item.remove();                                                                                                     // 2573
    // remove item from collection                                                                                     // 2574
    removeFrom( item, this.items );                                                                                    // 2575
  }                                                                                                                    // 2576
};                                                                                                                     // 2577
                                                                                                                       // 2578
// ----- destroy ----- //                                                                                              // 2579
                                                                                                                       // 2580
// remove and disable Outlayer instance                                                                                // 2581
Outlayer.prototype.destroy = function() {                                                                              // 2582
  // clean up dynamic styles                                                                                           // 2583
  var style = this.element.style;                                                                                      // 2584
  style.height = '';                                                                                                   // 2585
  style.position = '';                                                                                                 // 2586
  style.width = '';                                                                                                    // 2587
  // destroy items                                                                                                     // 2588
  for ( var i=0, len = this.items.length; i < len; i++ ) {                                                             // 2589
    var item = this.items[i];                                                                                          // 2590
    item.destroy();                                                                                                    // 2591
  }                                                                                                                    // 2592
                                                                                                                       // 2593
  this.unbindResize();                                                                                                 // 2594
                                                                                                                       // 2595
  var id = this.element.outlayerGUID;                                                                                  // 2596
  delete instances[ id ]; // remove reference to instance by id                                                        // 2597
  delete this.element.outlayerGUID;                                                                                    // 2598
  // remove data for jQuery                                                                                            // 2599
  if ( jQuery ) {                                                                                                      // 2600
    jQuery.removeData( this.element, this.constructor.namespace );                                                     // 2601
  }                                                                                                                    // 2602
                                                                                                                       // 2603
};                                                                                                                     // 2604
                                                                                                                       // 2605
// -------------------------- data -------------------------- //                                                       // 2606
                                                                                                                       // 2607
/**                                                                                                                    // 2608
 * get Outlayer instance from element                                                                                  // 2609
 * @param {Element} elem                                                                                               // 2610
 * @returns {Outlayer}                                                                                                 // 2611
 */                                                                                                                    // 2612
Outlayer.data = function( elem ) {                                                                                     // 2613
  var id = elem && elem.outlayerGUID;                                                                                  // 2614
  return id && instances[ id ];                                                                                        // 2615
};                                                                                                                     // 2616
                                                                                                                       // 2617
                                                                                                                       // 2618
// -------------------------- create Outlayer class -------------------------- //                                      // 2619
                                                                                                                       // 2620
/**                                                                                                                    // 2621
 * create a layout class                                                                                               // 2622
 * @param {String} namespace                                                                                           // 2623
 */                                                                                                                    // 2624
Outlayer.create = function( namespace, options ) {                                                                     // 2625
  // sub-class Outlayer                                                                                                // 2626
  function Layout() {                                                                                                  // 2627
    Outlayer.apply( this, arguments );                                                                                 // 2628
  }                                                                                                                    // 2629
  // inherit Outlayer prototype, use Object.create if there                                                            // 2630
  if ( Object.create ) {                                                                                               // 2631
    Layout.prototype = Object.create( Outlayer.prototype );                                                            // 2632
  } else {                                                                                                             // 2633
    extend( Layout.prototype, Outlayer.prototype );                                                                    // 2634
  }                                                                                                                    // 2635
  // set contructor, used for namespace and Item                                                                       // 2636
  Layout.prototype.constructor = Layout;                                                                               // 2637
                                                                                                                       // 2638
  Layout.defaults = extend( {}, Outlayer.defaults );                                                                   // 2639
  // apply new options                                                                                                 // 2640
  extend( Layout.defaults, options );                                                                                  // 2641
  // keep prototype.settings for backwards compatibility (Packery v1.2.0)                                              // 2642
  Layout.prototype.settings = {};                                                                                      // 2643
                                                                                                                       // 2644
  Layout.namespace = namespace;                                                                                        // 2645
                                                                                                                       // 2646
  Layout.data = Outlayer.data;                                                                                         // 2647
                                                                                                                       // 2648
  // sub-class Item                                                                                                    // 2649
  Layout.Item = function LayoutItem() {                                                                                // 2650
    Item.apply( this, arguments );                                                                                     // 2651
  };                                                                                                                   // 2652
                                                                                                                       // 2653
  Layout.Item.prototype = new Item();                                                                                  // 2654
                                                                                                                       // 2655
  // -------------------------- declarative -------------------------- //                                              // 2656
                                                                                                                       // 2657
  /**                                                                                                                  // 2658
   * allow user to initialize Outlayer via .js-namespace class                                                         // 2659
   * options are parsed from data-namespace-option attribute                                                           // 2660
   */                                                                                                                  // 2661
  docReady( function() {                                                                                               // 2662
    var dashedNamespace = toDashed( namespace );                                                                       // 2663
    var elems = document.querySelectorAll( '.js-' + dashedNamespace );                                                 // 2664
    var dataAttr = 'data-' + dashedNamespace + '-options';                                                             // 2665
                                                                                                                       // 2666
    for ( var i=0, len = elems.length; i < len; i++ ) {                                                                // 2667
      var elem = elems[i];                                                                                             // 2668
      var attr = elem.getAttribute( dataAttr );                                                                        // 2669
      var options;                                                                                                     // 2670
      try {                                                                                                            // 2671
        options = attr && JSON.parse( attr );                                                                          // 2672
      } catch ( error ) {                                                                                              // 2673
        // log error, do not initialize                                                                                // 2674
        if ( console ) {                                                                                               // 2675
          console.error( 'Error parsing ' + dataAttr + ' on ' +                                                        // 2676
            elem.nodeName.toLowerCase() + ( elem.id ? '#' + elem.id : '' ) + ': ' +                                    // 2677
            error );                                                                                                   // 2678
        }                                                                                                              // 2679
        continue;                                                                                                      // 2680
      }                                                                                                                // 2681
      // initialize                                                                                                    // 2682
      var instance = new Layout( elem, options );                                                                      // 2683
      // make available via $().data('layoutname')                                                                     // 2684
      if ( jQuery ) {                                                                                                  // 2685
        jQuery.data( elem, namespace, instance );                                                                      // 2686
      }                                                                                                                // 2687
    }                                                                                                                  // 2688
  });                                                                                                                  // 2689
                                                                                                                       // 2690
  // -------------------------- jQuery bridge -------------------------- //                                            // 2691
                                                                                                                       // 2692
  // make into jQuery plugin                                                                                           // 2693
  if ( jQuery && jQuery.bridget ) {                                                                                    // 2694
    jQuery.bridget( namespace, Layout );                                                                               // 2695
  }                                                                                                                    // 2696
                                                                                                                       // 2697
  return Layout;                                                                                                       // 2698
};                                                                                                                     // 2699
                                                                                                                       // 2700
// ----- fin ----- //                                                                                                  // 2701
                                                                                                                       // 2702
// back in global                                                                                                      // 2703
Outlayer.Item = Item;                                                                                                  // 2704
                                                                                                                       // 2705
return Outlayer;                                                                                                       // 2706
                                                                                                                       // 2707
}                                                                                                                      // 2708
                                                                                                                       // 2709
// -------------------------- transport -------------------------- //                                                  // 2710
                                                                                                                       // 2711
if ( typeof define === 'function' && define.amd ) {                                                                    // 2712
  // AMD                                                                                                               // 2713
  define( 'outlayer/outlayer',[                                                                                        // 2714
      'eventie/eventie',                                                                                               // 2715
      'doc-ready/doc-ready',                                                                                           // 2716
      'eventEmitter/EventEmitter',                                                                                     // 2717
      'get-size/get-size',                                                                                             // 2718
      'matches-selector/matches-selector',                                                                             // 2719
      './item'                                                                                                         // 2720
    ],                                                                                                                 // 2721
    outlayerDefinition );                                                                                              // 2722
} else if ( typeof exports === 'object' ) {                                                                            // 2723
  // CommonJS                                                                                                          // 2724
  module.exports = outlayerDefinition(                                                                                 // 2725
    require('eventie'),                                                                                                // 2726
    require('doc-ready'),                                                                                              // 2727
    require('wolfy87-eventemitter'),                                                                                   // 2728
    require('get-size'),                                                                                               // 2729
    require('desandro-matches-selector'),                                                                              // 2730
    require('./item')                                                                                                  // 2731
  );                                                                                                                   // 2732
} else {                                                                                                               // 2733
  // browser global                                                                                                    // 2734
  window.Outlayer = outlayerDefinition(                                                                                // 2735
    window.eventie,                                                                                                    // 2736
    window.docReady,                                                                                                   // 2737
    window.EventEmitter,                                                                                               // 2738
    window.getSize,                                                                                                    // 2739
    window.matchesSelector,                                                                                            // 2740
    window.Outlayer.Item                                                                                               // 2741
  );                                                                                                                   // 2742
}                                                                                                                      // 2743
                                                                                                                       // 2744
})( window );                                                                                                          // 2745
                                                                                                                       // 2746
/**                                                                                                                    // 2747
 * Isotope Item                                                                                                        // 2748
**/                                                                                                                    // 2749
                                                                                                                       // 2750
( function( window ) {                                                                                                 // 2751
                                                                                                                       // 2752
                                                                                                                       // 2753
                                                                                                                       // 2754
// -------------------------- Item -------------------------- //                                                       // 2755
                                                                                                                       // 2756
function itemDefinition( Outlayer ) {                                                                                  // 2757
                                                                                                                       // 2758
// sub-class Outlayer Item                                                                                             // 2759
function Item() {                                                                                                      // 2760
  Outlayer.Item.apply( this, arguments );                                                                              // 2761
}                                                                                                                      // 2762
                                                                                                                       // 2763
Item.prototype = new Outlayer.Item();                                                                                  // 2764
                                                                                                                       // 2765
Item.prototype._create = function() {                                                                                  // 2766
  // assign id, used for original-order sorting                                                                        // 2767
  this.id = this.layout.itemGUID++;                                                                                    // 2768
  Outlayer.Item.prototype._create.call( this );                                                                        // 2769
  this.sortData = {};                                                                                                  // 2770
};                                                                                                                     // 2771
                                                                                                                       // 2772
Item.prototype.updateSortData = function() {                                                                           // 2773
  if ( this.isIgnored ) {                                                                                              // 2774
    return;                                                                                                            // 2775
  }                                                                                                                    // 2776
  // default sorters                                                                                                   // 2777
  this.sortData.id = this.id;                                                                                          // 2778
  // for backward compatibility                                                                                        // 2779
  this.sortData['original-order'] = this.id;                                                                           // 2780
  this.sortData.random = Math.random();                                                                                // 2781
  // go thru getSortData obj and apply the sorters                                                                     // 2782
  var getSortData = this.layout.options.getSortData;                                                                   // 2783
  var sorters = this.layout._sorters;                                                                                  // 2784
  for ( var key in getSortData ) {                                                                                     // 2785
    var sorter = sorters[ key ];                                                                                       // 2786
    this.sortData[ key ] = sorter( this.element, this );                                                               // 2787
  }                                                                                                                    // 2788
};                                                                                                                     // 2789
                                                                                                                       // 2790
var _destroy = Item.prototype.destroy;                                                                                 // 2791
Item.prototype.destroy = function() {                                                                                  // 2792
  // call super                                                                                                        // 2793
  _destroy.apply( this, arguments );                                                                                   // 2794
  // reset display, #741                                                                                               // 2795
  this.css({                                                                                                           // 2796
    display: ''                                                                                                        // 2797
  });                                                                                                                  // 2798
};                                                                                                                     // 2799
                                                                                                                       // 2800
return Item;                                                                                                           // 2801
                                                                                                                       // 2802
}                                                                                                                      // 2803
                                                                                                                       // 2804
// -------------------------- transport -------------------------- //                                                  // 2805
                                                                                                                       // 2806
if ( typeof define === 'function' && define.amd ) {                                                                    // 2807
  // AMD                                                                                                               // 2808
  define( 'isotope/js/item',[                                                                                          // 2809
      'outlayer/outlayer'                                                                                              // 2810
    ],                                                                                                                 // 2811
    itemDefinition );                                                                                                  // 2812
} else if ( typeof exports === 'object' ) {                                                                            // 2813
  // CommonJS                                                                                                          // 2814
  module.exports = itemDefinition(                                                                                     // 2815
    require('outlayer')                                                                                                // 2816
  );                                                                                                                   // 2817
} else {                                                                                                               // 2818
  // browser global                                                                                                    // 2819
  window.Isotope = window.Isotope || {};                                                                               // 2820
  window.Isotope.Item = itemDefinition(                                                                                // 2821
    window.Outlayer                                                                                                    // 2822
  );                                                                                                                   // 2823
}                                                                                                                      // 2824
                                                                                                                       // 2825
})( window );                                                                                                          // 2826
                                                                                                                       // 2827
( function( window ) {                                                                                                 // 2828
                                                                                                                       // 2829
                                                                                                                       // 2830
                                                                                                                       // 2831
// --------------------------  -------------------------- //                                                           // 2832
                                                                                                                       // 2833
function layoutModeDefinition( getSize, Outlayer ) {                                                                   // 2834
                                                                                                                       // 2835
  // layout mode class                                                                                                 // 2836
  function LayoutMode( isotope ) {                                                                                     // 2837
    this.isotope = isotope;                                                                                            // 2838
    // link properties                                                                                                 // 2839
    if ( isotope ) {                                                                                                   // 2840
      this.options = isotope.options[ this.namespace ];                                                                // 2841
      this.element = isotope.element;                                                                                  // 2842
      this.items = isotope.filteredItems;                                                                              // 2843
      this.size = isotope.size;                                                                                        // 2844
    }                                                                                                                  // 2845
  }                                                                                                                    // 2846
                                                                                                                       // 2847
  /**                                                                                                                  // 2848
   * some methods should just defer to default Outlayer method                                                         // 2849
   * and reference the Isotope instance as `this`                                                                      // 2850
  **/                                                                                                                  // 2851
  ( function() {                                                                                                       // 2852
    var facadeMethods = [                                                                                              // 2853
      '_resetLayout',                                                                                                  // 2854
      '_getItemLayoutPosition',                                                                                        // 2855
      '_manageStamp',                                                                                                  // 2856
      '_getContainerSize',                                                                                             // 2857
      '_getElementOffset',                                                                                             // 2858
      'needsResizeLayout'                                                                                              // 2859
    ];                                                                                                                 // 2860
                                                                                                                       // 2861
    for ( var i=0, len = facadeMethods.length; i < len; i++ ) {                                                        // 2862
      var methodName = facadeMethods[i];                                                                               // 2863
      LayoutMode.prototype[ methodName ] = getOutlayerMethod( methodName );                                            // 2864
    }                                                                                                                  // 2865
                                                                                                                       // 2866
    function getOutlayerMethod( methodName ) {                                                                         // 2867
      return function() {                                                                                              // 2868
        return Outlayer.prototype[ methodName ].apply( this.isotope, arguments );                                      // 2869
      };                                                                                                               // 2870
    }                                                                                                                  // 2871
  })();                                                                                                                // 2872
                                                                                                                       // 2873
  // -----  ----- //                                                                                                   // 2874
                                                                                                                       // 2875
  // for horizontal layout modes, check vertical size                                                                  // 2876
  LayoutMode.prototype.needsVerticalResizeLayout = function() {                                                        // 2877
    // don't trigger if size did not change                                                                            // 2878
    var size = getSize( this.isotope.element );                                                                        // 2879
    // check that this.size and size are there                                                                         // 2880
    // IE8 triggers resize on body size change, so they might not be                                                   // 2881
    var hasSizes = this.isotope.size && size;                                                                          // 2882
    return hasSizes && size.innerHeight !== this.isotope.size.innerHeight;                                             // 2883
  };                                                                                                                   // 2884
                                                                                                                       // 2885
  // ----- measurements ----- //                                                                                       // 2886
                                                                                                                       // 2887
  LayoutMode.prototype._getMeasurement = function() {                                                                  // 2888
    this.isotope._getMeasurement.apply( this, arguments );                                                             // 2889
  };                                                                                                                   // 2890
                                                                                                                       // 2891
  LayoutMode.prototype.getColumnWidth = function() {                                                                   // 2892
    this.getSegmentSize( 'column', 'Width' );                                                                          // 2893
  };                                                                                                                   // 2894
                                                                                                                       // 2895
  LayoutMode.prototype.getRowHeight = function() {                                                                     // 2896
    this.getSegmentSize( 'row', 'Height' );                                                                            // 2897
  };                                                                                                                   // 2898
                                                                                                                       // 2899
  /**                                                                                                                  // 2900
   * get columnWidth or rowHeight                                                                                      // 2901
   * segment: 'column' or 'row'                                                                                        // 2902
   * size 'Width' or 'Height'                                                                                          // 2903
  **/                                                                                                                  // 2904
  LayoutMode.prototype.getSegmentSize = function( segment, size ) {                                                    // 2905
    var segmentName = segment + size;                                                                                  // 2906
    var outerSize = 'outer' + size;                                                                                    // 2907
    // columnWidth / outerWidth // rowHeight / outerHeight                                                             // 2908
    this._getMeasurement( segmentName, outerSize );                                                                    // 2909
    // got rowHeight or columnWidth, we can chill                                                                      // 2910
    if ( this[ segmentName ] ) {                                                                                       // 2911
      return;                                                                                                          // 2912
    }                                                                                                                  // 2913
    // fall back to item of first element                                                                              // 2914
    var firstItemSize = this.getFirstItemSize();                                                                       // 2915
    this[ segmentName ] = firstItemSize && firstItemSize[ outerSize ] ||                                               // 2916
      // or size of container                                                                                          // 2917
      this.isotope.size[ 'inner' + size ];                                                                             // 2918
  };                                                                                                                   // 2919
                                                                                                                       // 2920
  LayoutMode.prototype.getFirstItemSize = function() {                                                                 // 2921
    var firstItem = this.isotope.filteredItems[0];                                                                     // 2922
    return firstItem && firstItem.element && getSize( firstItem.element );                                             // 2923
  };                                                                                                                   // 2924
                                                                                                                       // 2925
  // ----- methods that should reference isotope ----- //                                                              // 2926
                                                                                                                       // 2927
  LayoutMode.prototype.layout = function() {                                                                           // 2928
    this.isotope.layout.apply( this.isotope, arguments );                                                              // 2929
  };                                                                                                                   // 2930
                                                                                                                       // 2931
  LayoutMode.prototype.getSize = function() {                                                                          // 2932
    this.isotope.getSize();                                                                                            // 2933
    this.size = this.isotope.size;                                                                                     // 2934
  };                                                                                                                   // 2935
                                                                                                                       // 2936
  // -------------------------- create -------------------------- //                                                   // 2937
                                                                                                                       // 2938
  LayoutMode.modes = {};                                                                                               // 2939
                                                                                                                       // 2940
  LayoutMode.create = function( namespace, options ) {                                                                 // 2941
                                                                                                                       // 2942
    function Mode() {                                                                                                  // 2943
      LayoutMode.apply( this, arguments );                                                                             // 2944
    }                                                                                                                  // 2945
                                                                                                                       // 2946
    Mode.prototype = new LayoutMode();                                                                                 // 2947
                                                                                                                       // 2948
    // default options                                                                                                 // 2949
    if ( options ) {                                                                                                   // 2950
      Mode.options = options;                                                                                          // 2951
    }                                                                                                                  // 2952
                                                                                                                       // 2953
    Mode.prototype.namespace = namespace;                                                                              // 2954
    // register in Isotope                                                                                             // 2955
    LayoutMode.modes[ namespace ] = Mode;                                                                              // 2956
                                                                                                                       // 2957
    return Mode;                                                                                                       // 2958
  };                                                                                                                   // 2959
                                                                                                                       // 2960
                                                                                                                       // 2961
  return LayoutMode;                                                                                                   // 2962
                                                                                                                       // 2963
}                                                                                                                      // 2964
                                                                                                                       // 2965
if ( typeof define === 'function' && define.amd ) {                                                                    // 2966
  // AMD                                                                                                               // 2967
  define( 'isotope/js/layout-mode',[                                                                                   // 2968
      'get-size/get-size',                                                                                             // 2969
      'outlayer/outlayer'                                                                                              // 2970
    ],                                                                                                                 // 2971
    layoutModeDefinition );                                                                                            // 2972
} else if ( typeof exports === 'object' ) {                                                                            // 2973
  // CommonJS                                                                                                          // 2974
  module.exports = layoutModeDefinition(                                                                               // 2975
    require('get-size'),                                                                                               // 2976
    require('outlayer')                                                                                                // 2977
  );                                                                                                                   // 2978
} else {                                                                                                               // 2979
  // browser global                                                                                                    // 2980
  window.Isotope = window.Isotope || {};                                                                               // 2981
  window.Isotope.LayoutMode = layoutModeDefinition(                                                                    // 2982
    window.getSize,                                                                                                    // 2983
    window.Outlayer                                                                                                    // 2984
  );                                                                                                                   // 2985
}                                                                                                                      // 2986
                                                                                                                       // 2987
                                                                                                                       // 2988
})( window );                                                                                                          // 2989
                                                                                                                       // 2990
/*!                                                                                                                    // 2991
 * Masonry v3.2.1                                                                                                      // 2992
 * Cascading grid layout library                                                                                       // 2993
 * http://masonry.desandro.com                                                                                         // 2994
 * MIT License                                                                                                         // 2995
 * by David DeSandro                                                                                                   // 2996
 */                                                                                                                    // 2997
                                                                                                                       // 2998
( function( window ) {                                                                                                 // 2999
                                                                                                                       // 3000
                                                                                                                       // 3001
                                                                                                                       // 3002
// -------------------------- helpers -------------------------- //                                                    // 3003
                                                                                                                       // 3004
var indexOf = Array.prototype.indexOf ?                                                                                // 3005
  function( items, value ) {                                                                                           // 3006
    return items.indexOf( value );                                                                                     // 3007
  } :                                                                                                                  // 3008
  function ( items, value ) {                                                                                          // 3009
    for ( var i=0, len = items.length; i < len; i++ ) {                                                                // 3010
      var item = items[i];                                                                                             // 3011
      if ( item === value ) {                                                                                          // 3012
        return i;                                                                                                      // 3013
      }                                                                                                                // 3014
    }                                                                                                                  // 3015
    return -1;                                                                                                         // 3016
  };                                                                                                                   // 3017
                                                                                                                       // 3018
// -------------------------- masonryDefinition -------------------------- //                                          // 3019
                                                                                                                       // 3020
// used for AMD definition and requires                                                                                // 3021
function masonryDefinition( Outlayer, getSize ) {                                                                      // 3022
  // create an Outlayer layout class                                                                                   // 3023
  var Masonry = Outlayer.create('masonry');                                                                            // 3024
                                                                                                                       // 3025
  Masonry.prototype._resetLayout = function() {                                                                        // 3026
    this.getSize();                                                                                                    // 3027
    this._getMeasurement( 'columnWidth', 'outerWidth' );                                                               // 3028
    this._getMeasurement( 'gutter', 'outerWidth' );                                                                    // 3029
    this.measureColumns();                                                                                             // 3030
                                                                                                                       // 3031
    // reset column Y                                                                                                  // 3032
    var i = this.cols;                                                                                                 // 3033
    this.colYs = [];                                                                                                   // 3034
    while (i--) {                                                                                                      // 3035
      this.colYs.push( 0 );                                                                                            // 3036
    }                                                                                                                  // 3037
                                                                                                                       // 3038
    this.maxY = 0;                                                                                                     // 3039
  };                                                                                                                   // 3040
                                                                                                                       // 3041
  Masonry.prototype.measureColumns = function() {                                                                      // 3042
    this.getContainerWidth();                                                                                          // 3043
    // if columnWidth is 0, default to outerWidth of first item                                                        // 3044
    if ( !this.columnWidth ) {                                                                                         // 3045
      var firstItem = this.items[0];                                                                                   // 3046
      var firstItemElem = firstItem && firstItem.element;                                                              // 3047
      // columnWidth fall back to item of first element                                                                // 3048
      this.columnWidth = firstItemElem && getSize( firstItemElem ).outerWidth ||                                       // 3049
        // if first elem has no width, default to size of container                                                    // 3050
        this.containerWidth;                                                                                           // 3051
    }                                                                                                                  // 3052
                                                                                                                       // 3053
    this.columnWidth += this.gutter;                                                                                   // 3054
                                                                                                                       // 3055
    this.cols = Math.floor( ( this.containerWidth + this.gutter ) / this.columnWidth );                                // 3056
    this.cols = Math.max( this.cols, 1 );                                                                              // 3057
  };                                                                                                                   // 3058
                                                                                                                       // 3059
  Masonry.prototype.getContainerWidth = function() {                                                                   // 3060
    // container is parent if fit width                                                                                // 3061
    var container = this.options.isFitWidth ? this.element.parentNode : this.element;                                  // 3062
    // check that this.size and size are there                                                                         // 3063
    // IE8 triggers resize on body size change, so they might not be                                                   // 3064
    var size = getSize( container );                                                                                   // 3065
    this.containerWidth = size && size.innerWidth;                                                                     // 3066
  };                                                                                                                   // 3067
                                                                                                                       // 3068
  Masonry.prototype._getItemLayoutPosition = function( item ) {                                                        // 3069
    item.getSize();                                                                                                    // 3070
    // how many columns does this brick span                                                                           // 3071
    var remainder = item.size.outerWidth % this.columnWidth;                                                           // 3072
    var mathMethod = remainder && remainder < 1 ? 'round' : 'ceil';                                                    // 3073
    // round if off by 1 pixel, otherwise use ceil                                                                     // 3074
    var colSpan = Math[ mathMethod ]( item.size.outerWidth / this.columnWidth );                                       // 3075
    colSpan = Math.min( colSpan, this.cols );                                                                          // 3076
                                                                                                                       // 3077
    var colGroup = this._getColGroup( colSpan );                                                                       // 3078
    // get the minimum Y value from the columns                                                                        // 3079
    var minimumY = Math.min.apply( Math, colGroup );                                                                   // 3080
    var shortColIndex = indexOf( colGroup, minimumY );                                                                 // 3081
                                                                                                                       // 3082
    // position the brick                                                                                              // 3083
    var position = {                                                                                                   // 3084
      x: this.columnWidth * shortColIndex,                                                                             // 3085
      y: minimumY                                                                                                      // 3086
    };                                                                                                                 // 3087
                                                                                                                       // 3088
    // apply setHeight to necessary columns                                                                            // 3089
    var setHeight = minimumY + item.size.outerHeight;                                                                  // 3090
    var setSpan = this.cols + 1 - colGroup.length;                                                                     // 3091
    for ( var i = 0; i < setSpan; i++ ) {                                                                              // 3092
      this.colYs[ shortColIndex + i ] = setHeight;                                                                     // 3093
    }                                                                                                                  // 3094
                                                                                                                       // 3095
    return position;                                                                                                   // 3096
  };                                                                                                                   // 3097
                                                                                                                       // 3098
  /**                                                                                                                  // 3099
   * @param {Number} colSpan - number of columns the element spans                                                     // 3100
   * @returns {Array} colGroup                                                                                         // 3101
   */                                                                                                                  // 3102
  Masonry.prototype._getColGroup = function( colSpan ) {                                                               // 3103
    if ( colSpan < 2 ) {                                                                                               // 3104
      // if brick spans only one column, use all the column Ys                                                         // 3105
      return this.colYs;                                                                                               // 3106
    }                                                                                                                  // 3107
                                                                                                                       // 3108
    var colGroup = [];                                                                                                 // 3109
    // how many different places could this brick fit horizontally                                                     // 3110
    var groupCount = this.cols + 1 - colSpan;                                                                          // 3111
    // for each group potential horizontal position                                                                    // 3112
    for ( var i = 0; i < groupCount; i++ ) {                                                                           // 3113
      // make an array of colY values for that one group                                                               // 3114
      var groupColYs = this.colYs.slice( i, i + colSpan );                                                             // 3115
      // and get the max value of the array                                                                            // 3116
      colGroup[i] = Math.max.apply( Math, groupColYs );                                                                // 3117
    }                                                                                                                  // 3118
    return colGroup;                                                                                                   // 3119
  };                                                                                                                   // 3120
                                                                                                                       // 3121
  Masonry.prototype._manageStamp = function( stamp ) {                                                                 // 3122
    var stampSize = getSize( stamp );                                                                                  // 3123
    var offset = this._getElementOffset( stamp );                                                                      // 3124
    // get the columns that this stamp affects                                                                         // 3125
    var firstX = this.options.isOriginLeft ? offset.left : offset.right;                                               // 3126
    var lastX = firstX + stampSize.outerWidth;                                                                         // 3127
    var firstCol = Math.floor( firstX / this.columnWidth );                                                            // 3128
    firstCol = Math.max( 0, firstCol );                                                                                // 3129
    var lastCol = Math.floor( lastX / this.columnWidth );                                                              // 3130
    // lastCol should not go over if multiple of columnWidth #425                                                      // 3131
    lastCol -= lastX % this.columnWidth ? 0 : 1;                                                                       // 3132
    lastCol = Math.min( this.cols - 1, lastCol );                                                                      // 3133
    // set colYs to bottom of the stamp                                                                                // 3134
    var stampMaxY = ( this.options.isOriginTop ? offset.top : offset.bottom ) +                                        // 3135
      stampSize.outerHeight;                                                                                           // 3136
    for ( var i = firstCol; i <= lastCol; i++ ) {                                                                      // 3137
      this.colYs[i] = Math.max( stampMaxY, this.colYs[i] );                                                            // 3138
    }                                                                                                                  // 3139
  };                                                                                                                   // 3140
                                                                                                                       // 3141
  Masonry.prototype._getContainerSize = function() {                                                                   // 3142
    this.maxY = Math.max.apply( Math, this.colYs );                                                                    // 3143
    var size = {                                                                                                       // 3144
      height: this.maxY                                                                                                // 3145
    };                                                                                                                 // 3146
                                                                                                                       // 3147
    if ( this.options.isFitWidth ) {                                                                                   // 3148
      size.width = this._getContainerFitWidth();                                                                       // 3149
    }                                                                                                                  // 3150
                                                                                                                       // 3151
    return size;                                                                                                       // 3152
  };                                                                                                                   // 3153
                                                                                                                       // 3154
  Masonry.prototype._getContainerFitWidth = function() {                                                               // 3155
    var unusedCols = 0;                                                                                                // 3156
    // count unused columns                                                                                            // 3157
    var i = this.cols;                                                                                                 // 3158
    while ( --i ) {                                                                                                    // 3159
      if ( this.colYs[i] !== 0 ) {                                                                                     // 3160
        break;                                                                                                         // 3161
      }                                                                                                                // 3162
      unusedCols++;                                                                                                    // 3163
    }                                                                                                                  // 3164
    // fit container to columns that have been used                                                                    // 3165
    return ( this.cols - unusedCols ) * this.columnWidth - this.gutter;                                                // 3166
  };                                                                                                                   // 3167
                                                                                                                       // 3168
  Masonry.prototype.needsResizeLayout = function() {                                                                   // 3169
    var previousWidth = this.containerWidth;                                                                           // 3170
    this.getContainerWidth();                                                                                          // 3171
    return previousWidth !== this.containerWidth;                                                                      // 3172
  };                                                                                                                   // 3173
                                                                                                                       // 3174
  return Masonry;                                                                                                      // 3175
}                                                                                                                      // 3176
                                                                                                                       // 3177
// -------------------------- transport -------------------------- //                                                  // 3178
                                                                                                                       // 3179
if ( typeof define === 'function' && define.amd ) {                                                                    // 3180
  // AMD                                                                                                               // 3181
  define( 'masonry/masonry',[                                                                                          // 3182
      'outlayer/outlayer',                                                                                             // 3183
      'get-size/get-size'                                                                                              // 3184
    ],                                                                                                                 // 3185
    masonryDefinition );                                                                                               // 3186
} else if (typeof exports === 'object') {                                                                              // 3187
  module.exports = masonryDefinition(                                                                                  // 3188
    require('outlayer'),                                                                                               // 3189
    require('get-size')                                                                                                // 3190
  );                                                                                                                   // 3191
} else {                                                                                                               // 3192
  // browser global                                                                                                    // 3193
  window.Masonry = masonryDefinition(                                                                                  // 3194
    window.Outlayer,                                                                                                   // 3195
    window.getSize                                                                                                     // 3196
  );                                                                                                                   // 3197
}                                                                                                                      // 3198
                                                                                                                       // 3199
})( window );                                                                                                          // 3200
                                                                                                                       // 3201
/*!                                                                                                                    // 3202
 * Masonry layout mode                                                                                                 // 3203
 * sub-classes Masonry                                                                                                 // 3204
 * http://masonry.desandro.com                                                                                         // 3205
 */                                                                                                                    // 3206
                                                                                                                       // 3207
( function( window ) {                                                                                                 // 3208
                                                                                                                       // 3209
                                                                                                                       // 3210
                                                                                                                       // 3211
// -------------------------- helpers -------------------------- //                                                    // 3212
                                                                                                                       // 3213
// extend objects                                                                                                      // 3214
function extend( a, b ) {                                                                                              // 3215
  for ( var prop in b ) {                                                                                              // 3216
    a[ prop ] = b[ prop ];                                                                                             // 3217
  }                                                                                                                    // 3218
  return a;                                                                                                            // 3219
}                                                                                                                      // 3220
                                                                                                                       // 3221
// -------------------------- masonryDefinition -------------------------- //                                          // 3222
                                                                                                                       // 3223
// used for AMD definition and requires                                                                                // 3224
function masonryDefinition( LayoutMode, Masonry ) {                                                                    // 3225
  // create an Outlayer layout class                                                                                   // 3226
  var MasonryMode = LayoutMode.create('masonry');                                                                      // 3227
                                                                                                                       // 3228
  // save on to these methods                                                                                          // 3229
  var _getElementOffset = MasonryMode.prototype._getElementOffset;                                                     // 3230
  var layout = MasonryMode.prototype.layout;                                                                           // 3231
  var _getMeasurement = MasonryMode.prototype._getMeasurement;                                                         // 3232
                                                                                                                       // 3233
  // sub-class Masonry                                                                                                 // 3234
  extend( MasonryMode.prototype, Masonry.prototype );                                                                  // 3235
                                                                                                                       // 3236
  // set back, as it was overwritten by Masonry                                                                        // 3237
  MasonryMode.prototype._getElementOffset = _getElementOffset;                                                         // 3238
  MasonryMode.prototype.layout = layout;                                                                               // 3239
  MasonryMode.prototype._getMeasurement = _getMeasurement;                                                             // 3240
                                                                                                                       // 3241
  var measureColumns = MasonryMode.prototype.measureColumns;                                                           // 3242
  MasonryMode.prototype.measureColumns = function() {                                                                  // 3243
    // set items, used if measuring first item                                                                         // 3244
    this.items = this.isotope.filteredItems;                                                                           // 3245
    measureColumns.call( this );                                                                                       // 3246
  };                                                                                                                   // 3247
                                                                                                                       // 3248
  // HACK copy over isOriginLeft/Top options                                                                           // 3249
  var _manageStamp = MasonryMode.prototype._manageStamp;                                                               // 3250
  MasonryMode.prototype._manageStamp = function() {                                                                    // 3251
    this.options.isOriginLeft = this.isotope.options.isOriginLeft;                                                     // 3252
    this.options.isOriginTop = this.isotope.options.isOriginTop;                                                       // 3253
    _manageStamp.apply( this, arguments );                                                                             // 3254
  };                                                                                                                   // 3255
                                                                                                                       // 3256
  return MasonryMode;                                                                                                  // 3257
}                                                                                                                      // 3258
                                                                                                                       // 3259
// -------------------------- transport -------------------------- //                                                  // 3260
                                                                                                                       // 3261
if ( typeof define === 'function' && define.amd ) {                                                                    // 3262
  // AMD                                                                                                               // 3263
  define( 'isotope/js/layout-modes/masonry',[                                                                          // 3264
      '../layout-mode',                                                                                                // 3265
      'masonry/masonry'                                                                                                // 3266
    ],                                                                                                                 // 3267
    masonryDefinition );                                                                                               // 3268
} else if ( typeof exports === 'object' ) {                                                                            // 3269
  // CommonJS                                                                                                          // 3270
  module.exports = masonryDefinition(                                                                                  // 3271
    require('../layout-mode'),                                                                                         // 3272
    require('masonry-layout')                                                                                          // 3273
  );                                                                                                                   // 3274
} else {                                                                                                               // 3275
  // browser global                                                                                                    // 3276
  masonryDefinition(                                                                                                   // 3277
    window.Isotope.LayoutMode,                                                                                         // 3278
    window.Masonry                                                                                                     // 3279
  );                                                                                                                   // 3280
}                                                                                                                      // 3281
                                                                                                                       // 3282
})( window );                                                                                                          // 3283
                                                                                                                       // 3284
( function( window ) {                                                                                                 // 3285
                                                                                                                       // 3286
                                                                                                                       // 3287
                                                                                                                       // 3288
function fitRowsDefinition( LayoutMode ) {                                                                             // 3289
                                                                                                                       // 3290
var FitRows = LayoutMode.create('fitRows');                                                                            // 3291
                                                                                                                       // 3292
FitRows.prototype._resetLayout = function() {                                                                          // 3293
  this.x = 0;                                                                                                          // 3294
  this.y = 0;                                                                                                          // 3295
  this.maxY = 0;                                                                                                       // 3296
  this._getMeasurement( 'gutter', 'outerWidth' );                                                                      // 3297
};                                                                                                                     // 3298
                                                                                                                       // 3299
FitRows.prototype._getItemLayoutPosition = function( item ) {                                                          // 3300
  item.getSize();                                                                                                      // 3301
                                                                                                                       // 3302
  var itemWidth = item.size.outerWidth + this.gutter;                                                                  // 3303
  // if this element cannot fit in the current row                                                                     // 3304
  var containerWidth = this.isotope.size.innerWidth + this.gutter;                                                     // 3305
  if ( this.x !== 0 && itemWidth + this.x > containerWidth ) {                                                         // 3306
    this.x = 0;                                                                                                        // 3307
    this.y = this.maxY;                                                                                                // 3308
  }                                                                                                                    // 3309
                                                                                                                       // 3310
  var position = {                                                                                                     // 3311
    x: this.x,                                                                                                         // 3312
    y: this.y                                                                                                          // 3313
  };                                                                                                                   // 3314
                                                                                                                       // 3315
  this.maxY = Math.max( this.maxY, this.y + item.size.outerHeight );                                                   // 3316
  this.x += itemWidth;                                                                                                 // 3317
                                                                                                                       // 3318
  return position;                                                                                                     // 3319
};                                                                                                                     // 3320
                                                                                                                       // 3321
FitRows.prototype._getContainerSize = function() {                                                                     // 3322
  return { height: this.maxY };                                                                                        // 3323
};                                                                                                                     // 3324
                                                                                                                       // 3325
return FitRows;                                                                                                        // 3326
                                                                                                                       // 3327
}                                                                                                                      // 3328
                                                                                                                       // 3329
if ( typeof define === 'function' && define.amd ) {                                                                    // 3330
  // AMD                                                                                                               // 3331
  define( 'isotope/js/layout-modes/fit-rows',[                                                                         // 3332
      '../layout-mode'                                                                                                 // 3333
    ],                                                                                                                 // 3334
    fitRowsDefinition );                                                                                               // 3335
} else if ( typeof exports === 'object' ) {                                                                            // 3336
  // CommonJS                                                                                                          // 3337
  module.exports = fitRowsDefinition(                                                                                  // 3338
    require('../layout-mode')                                                                                          // 3339
  );                                                                                                                   // 3340
} else {                                                                                                               // 3341
  // browser global                                                                                                    // 3342
  fitRowsDefinition(                                                                                                   // 3343
    window.Isotope.LayoutMode                                                                                          // 3344
  );                                                                                                                   // 3345
}                                                                                                                      // 3346
                                                                                                                       // 3347
})( window );                                                                                                          // 3348
                                                                                                                       // 3349
( function( window ) {                                                                                                 // 3350
                                                                                                                       // 3351
                                                                                                                       // 3352
                                                                                                                       // 3353
function verticalDefinition( LayoutMode ) {                                                                            // 3354
                                                                                                                       // 3355
var Vertical = LayoutMode.create( 'vertical', {                                                                        // 3356
  horizontalAlignment: 0                                                                                               // 3357
});                                                                                                                    // 3358
                                                                                                                       // 3359
Vertical.prototype._resetLayout = function() {                                                                         // 3360
  this.y = 0;                                                                                                          // 3361
};                                                                                                                     // 3362
                                                                                                                       // 3363
Vertical.prototype._getItemLayoutPosition = function( item ) {                                                         // 3364
  item.getSize();                                                                                                      // 3365
  var x = ( this.isotope.size.innerWidth - item.size.outerWidth ) *                                                    // 3366
    this.options.horizontalAlignment;                                                                                  // 3367
  var y = this.y;                                                                                                      // 3368
  this.y += item.size.outerHeight;                                                                                     // 3369
  return { x: x, y: y };                                                                                               // 3370
};                                                                                                                     // 3371
                                                                                                                       // 3372
Vertical.prototype._getContainerSize = function() {                                                                    // 3373
  return { height: this.y };                                                                                           // 3374
};                                                                                                                     // 3375
                                                                                                                       // 3376
return Vertical;                                                                                                       // 3377
                                                                                                                       // 3378
}                                                                                                                      // 3379
                                                                                                                       // 3380
if ( typeof define === 'function' && define.amd ) {                                                                    // 3381
  // AMD                                                                                                               // 3382
  define( 'isotope/js/layout-modes/vertical',[                                                                         // 3383
      '../layout-mode'                                                                                                 // 3384
    ],                                                                                                                 // 3385
    verticalDefinition );                                                                                              // 3386
} else if ( typeof exports === 'object' ) {                                                                            // 3387
  // CommonJS                                                                                                          // 3388
  module.exports = verticalDefinition(                                                                                 // 3389
    require('../layout-mode')                                                                                          // 3390
  );                                                                                                                   // 3391
} else {                                                                                                               // 3392
  // browser global                                                                                                    // 3393
  verticalDefinition(                                                                                                  // 3394
    window.Isotope.LayoutMode                                                                                          // 3395
  );                                                                                                                   // 3396
}                                                                                                                      // 3397
                                                                                                                       // 3398
})( window );                                                                                                          // 3399
                                                                                                                       // 3400
/*!                                                                                                                    // 3401
 * Isotope v2.1.0                                                                                                      // 3402
 * Filter & sort magical layouts                                                                                       // 3403
 * http://isotope.metafizzy.co                                                                                         // 3404
 */                                                                                                                    // 3405
                                                                                                                       // 3406
( function( window ) {                                                                                                 // 3407
                                                                                                                       // 3408
                                                                                                                       // 3409
                                                                                                                       // 3410
// -------------------------- vars -------------------------- //                                                       // 3411
                                                                                                                       // 3412
var jQuery = window.jQuery;                                                                                            // 3413
                                                                                                                       // 3414
// -------------------------- helpers -------------------------- //                                                    // 3415
                                                                                                                       // 3416
// extend objects                                                                                                      // 3417
function extend( a, b ) {                                                                                              // 3418
  for ( var prop in b ) {                                                                                              // 3419
    a[ prop ] = b[ prop ];                                                                                             // 3420
  }                                                                                                                    // 3421
  return a;                                                                                                            // 3422
}                                                                                                                      // 3423
                                                                                                                       // 3424
var trim = String.prototype.trim ?                                                                                     // 3425
  function( str ) {                                                                                                    // 3426
    return str.trim();                                                                                                 // 3427
  } :                                                                                                                  // 3428
  function( str ) {                                                                                                    // 3429
    return str.replace( /^\s+|\s+$/g, '' );                                                                            // 3430
  };                                                                                                                   // 3431
                                                                                                                       // 3432
var docElem = document.documentElement;                                                                                // 3433
                                                                                                                       // 3434
var getText = docElem.textContent ?                                                                                    // 3435
  function( elem ) {                                                                                                   // 3436
    return elem.textContent;                                                                                           // 3437
  } :                                                                                                                  // 3438
  function( elem ) {                                                                                                   // 3439
    return elem.innerText;                                                                                             // 3440
  };                                                                                                                   // 3441
                                                                                                                       // 3442
var objToString = Object.prototype.toString;                                                                           // 3443
function isArray( obj ) {                                                                                              // 3444
  return objToString.call( obj ) === '[object Array]';                                                                 // 3445
}                                                                                                                      // 3446
                                                                                                                       // 3447
// index of helper cause IE8                                                                                           // 3448
var indexOf = Array.prototype.indexOf ? function( ary, obj ) {                                                         // 3449
    return ary.indexOf( obj );                                                                                         // 3450
  } : function( ary, obj ) {                                                                                           // 3451
    for ( var i=0, len = ary.length; i < len; i++ ) {                                                                  // 3452
      if ( ary[i] === obj ) {                                                                                          // 3453
        return i;                                                                                                      // 3454
      }                                                                                                                // 3455
    }                                                                                                                  // 3456
    return -1;                                                                                                         // 3457
  };                                                                                                                   // 3458
                                                                                                                       // 3459
// turn element or nodeList into an array                                                                              // 3460
function makeArray( obj ) {                                                                                            // 3461
  var ary = [];                                                                                                        // 3462
  if ( isArray( obj ) ) {                                                                                              // 3463
    // use object if already an array                                                                                  // 3464
    ary = obj;                                                                                                         // 3465
  } else if ( obj && typeof obj.length === 'number' ) {                                                                // 3466
    // convert nodeList to array                                                                                       // 3467
    for ( var i=0, len = obj.length; i < len; i++ ) {                                                                  // 3468
      ary.push( obj[i] );                                                                                              // 3469
    }                                                                                                                  // 3470
  } else {                                                                                                             // 3471
    // array of single index                                                                                           // 3472
    ary.push( obj );                                                                                                   // 3473
  }                                                                                                                    // 3474
  return ary;                                                                                                          // 3475
}                                                                                                                      // 3476
                                                                                                                       // 3477
function removeFrom( obj, ary ) {                                                                                      // 3478
  var index = indexOf( ary, obj );                                                                                     // 3479
  if ( index !== -1 ) {                                                                                                // 3480
    ary.splice( index, 1 );                                                                                            // 3481
  }                                                                                                                    // 3482
}                                                                                                                      // 3483
                                                                                                                       // 3484
// -------------------------- isotopeDefinition -------------------------- //                                          // 3485
                                                                                                                       // 3486
// used for AMD definition and requires                                                                                // 3487
function isotopeDefinition( Outlayer, getSize, matchesSelector, Item, LayoutMode ) {                                   // 3488
  // create an Outlayer layout class                                                                                   // 3489
  var Isotope = Outlayer.create( 'isotope', {                                                                          // 3490
    layoutMode: "masonry",                                                                                             // 3491
    isJQueryFiltering: true,                                                                                           // 3492
    sortAscending: true                                                                                                // 3493
  });                                                                                                                  // 3494
                                                                                                                       // 3495
  Isotope.Item = Item;                                                                                                 // 3496
  Isotope.LayoutMode = LayoutMode;                                                                                     // 3497
                                                                                                                       // 3498
  Isotope.prototype._create = function() {                                                                             // 3499
    this.itemGUID = 0;                                                                                                 // 3500
    // functions that sort items                                                                                       // 3501
    this._sorters = {};                                                                                                // 3502
    this._getSorters();                                                                                                // 3503
    // call super                                                                                                      // 3504
    Outlayer.prototype._create.call( this );                                                                           // 3505
                                                                                                                       // 3506
    // create layout modes                                                                                             // 3507
    this.modes = {};                                                                                                   // 3508
    // start filteredItems with all items                                                                              // 3509
    this.filteredItems = this.items;                                                                                   // 3510
    // keep of track of sortBys                                                                                        // 3511
    this.sortHistory = [ 'original-order' ];                                                                           // 3512
    // create from registered layout modes                                                                             // 3513
    for ( var name in LayoutMode.modes ) {                                                                             // 3514
      this._initLayoutMode( name );                                                                                    // 3515
    }                                                                                                                  // 3516
  };                                                                                                                   // 3517
                                                                                                                       // 3518
  Isotope.prototype.reloadItems = function() {                                                                         // 3519
    // reset item ID counter                                                                                           // 3520
    this.itemGUID = 0;                                                                                                 // 3521
    // call super                                                                                                      // 3522
    Outlayer.prototype.reloadItems.call( this );                                                                       // 3523
  };                                                                                                                   // 3524
                                                                                                                       // 3525
  Isotope.prototype._itemize = function() {                                                                            // 3526
    var items = Outlayer.prototype._itemize.apply( this, arguments );                                                  // 3527
    // assign ID for original-order                                                                                    // 3528
    for ( var i=0, len = items.length; i < len; i++ ) {                                                                // 3529
      var item = items[i];                                                                                             // 3530
      item.id = this.itemGUID++;                                                                                       // 3531
    }                                                                                                                  // 3532
    this._updateItemsSortData( items );                                                                                // 3533
    return items;                                                                                                      // 3534
  };                                                                                                                   // 3535
                                                                                                                       // 3536
                                                                                                                       // 3537
  // -------------------------- layout -------------------------- //                                                   // 3538
                                                                                                                       // 3539
  Isotope.prototype._initLayoutMode = function( name ) {                                                               // 3540
    var Mode = LayoutMode.modes[ name ];                                                                               // 3541
    // set mode options                                                                                                // 3542
    // HACK extend initial options, back-fill in default options                                                       // 3543
    var initialOpts = this.options[ name ] || {};                                                                      // 3544
    this.options[ name ] = Mode.options ?                                                                              // 3545
      extend( Mode.options, initialOpts ) : initialOpts;                                                               // 3546
    // init layout mode instance                                                                                       // 3547
    this.modes[ name ] = new Mode( this );                                                                             // 3548
  };                                                                                                                   // 3549
                                                                                                                       // 3550
                                                                                                                       // 3551
  Isotope.prototype.layout = function() {                                                                              // 3552
    // if first time doing layout, do all magic                                                                        // 3553
    if ( !this._isLayoutInited && this.options.isInitLayout ) {                                                        // 3554
      this.arrange();                                                                                                  // 3555
      return;                                                                                                          // 3556
    }                                                                                                                  // 3557
    this._layout();                                                                                                    // 3558
  };                                                                                                                   // 3559
                                                                                                                       // 3560
  // private method to be used in layout() & magic()                                                                   // 3561
  Isotope.prototype._layout = function() {                                                                             // 3562
    // don't animate first layout                                                                                      // 3563
    var isInstant = this._getIsInstant();                                                                              // 3564
    // layout flow                                                                                                     // 3565
    this._resetLayout();                                                                                               // 3566
    this._manageStamps();                                                                                              // 3567
    this.layoutItems( this.filteredItems, isInstant );                                                                 // 3568
                                                                                                                       // 3569
    // flag for initalized                                                                                             // 3570
    this._isLayoutInited = true;                                                                                       // 3571
  };                                                                                                                   // 3572
                                                                                                                       // 3573
  // filter + sort + layout                                                                                            // 3574
  Isotope.prototype.arrange = function( opts ) {                                                                       // 3575
    // set any options pass                                                                                            // 3576
    this.option( opts );                                                                                               // 3577
    this._getIsInstant();                                                                                              // 3578
    // filter, sort, and layout                                                                                        // 3579
    this.filteredItems = this._filter( this.items );                                                                   // 3580
    this._sort();                                                                                                      // 3581
    this._layout();                                                                                                    // 3582
  };                                                                                                                   // 3583
  // alias to _init for main plugin method                                                                             // 3584
  Isotope.prototype._init = Isotope.prototype.arrange;                                                                 // 3585
                                                                                                                       // 3586
  // HACK                                                                                                              // 3587
  // Don't animate/transition first layout                                                                             // 3588
  // Or don't animate/transition other layouts                                                                         // 3589
  Isotope.prototype._getIsInstant = function() {                                                                       // 3590
    var isInstant = this.options.isLayoutInstant !== undefined ?                                                       // 3591
      this.options.isLayoutInstant : !this._isLayoutInited;                                                            // 3592
    this._isInstant = isInstant;                                                                                       // 3593
    return isInstant;                                                                                                  // 3594
  };                                                                                                                   // 3595
                                                                                                                       // 3596
  // -------------------------- filter -------------------------- //                                                   // 3597
                                                                                                                       // 3598
  Isotope.prototype._filter = function( items ) {                                                                      // 3599
    var filter = this.options.filter;                                                                                  // 3600
    filter = filter || '*';                                                                                            // 3601
    var matches = [];                                                                                                  // 3602
    var hiddenMatched = [];                                                                                            // 3603
    var visibleUnmatched = [];                                                                                         // 3604
                                                                                                                       // 3605
    var test = this._getFilterTest( filter );                                                                          // 3606
                                                                                                                       // 3607
    // test each item                                                                                                  // 3608
    for ( var i=0, len = items.length; i < len; i++ ) {                                                                // 3609
      var item = items[i];                                                                                             // 3610
      if ( item.isIgnored ) {                                                                                          // 3611
        continue;                                                                                                      // 3612
      }                                                                                                                // 3613
      // add item to either matched or unmatched group                                                                 // 3614
      var isMatched = test( item );                                                                                    // 3615
      // item.isFilterMatched = isMatched;                                                                             // 3616
      // add to matches if its a match                                                                                 // 3617
      if ( isMatched ) {                                                                                               // 3618
        matches.push( item );                                                                                          // 3619
      }                                                                                                                // 3620
      // add to additional group if item needs to be hidden or revealed                                                // 3621
      if ( isMatched && item.isHidden ) {                                                                              // 3622
        hiddenMatched.push( item );                                                                                    // 3623
      } else if ( !isMatched && !item.isHidden ) {                                                                     // 3624
        visibleUnmatched.push( item );                                                                                 // 3625
      }                                                                                                                // 3626
    }                                                                                                                  // 3627
                                                                                                                       // 3628
    var _this = this;                                                                                                  // 3629
    function hideReveal() {                                                                                            // 3630
      _this.reveal( hiddenMatched );                                                                                   // 3631
      _this.hide( visibleUnmatched );                                                                                  // 3632
    }                                                                                                                  // 3633
                                                                                                                       // 3634
    if ( this._isInstant ) {                                                                                           // 3635
      this._noTransition( hideReveal );                                                                                // 3636
    } else {                                                                                                           // 3637
      hideReveal();                                                                                                    // 3638
    }                                                                                                                  // 3639
                                                                                                                       // 3640
    return matches;                                                                                                    // 3641
  };                                                                                                                   // 3642
                                                                                                                       // 3643
  // get a jQuery, function, or a matchesSelector test given the filter                                                // 3644
  Isotope.prototype._getFilterTest = function( filter ) {                                                              // 3645
    if ( jQuery && this.options.isJQueryFiltering ) {                                                                  // 3646
      // use jQuery                                                                                                    // 3647
      return function( item ) {                                                                                        // 3648
        return jQuery( item.element ).is( filter );                                                                    // 3649
      };                                                                                                               // 3650
    }                                                                                                                  // 3651
    if ( typeof filter === 'function' ) {                                                                              // 3652
      // use filter as function                                                                                        // 3653
      return function( item ) {                                                                                        // 3654
        return filter( item.element );                                                                                 // 3655
      };                                                                                                               // 3656
    }                                                                                                                  // 3657
    // default, use filter as selector string                                                                          // 3658
    return function( item ) {                                                                                          // 3659
      return matchesSelector( item.element, filter );                                                                  // 3660
    };                                                                                                                 // 3661
  };                                                                                                                   // 3662
                                                                                                                       // 3663
  // -------------------------- sorting -------------------------- //                                                  // 3664
                                                                                                                       // 3665
  /**                                                                                                                  // 3666
   * @params {Array} elems                                                                                             // 3667
   * @public                                                                                                           // 3668
   */                                                                                                                  // 3669
  Isotope.prototype.updateSortData = function( elems ) {                                                               // 3670
    // get items                                                                                                       // 3671
    var items;                                                                                                         // 3672
    if ( elems ) {                                                                                                     // 3673
      elems = makeArray( elems );                                                                                      // 3674
      items = this.getItems( elems );                                                                                  // 3675
    } else {                                                                                                           // 3676
      // update all items if no elems provided                                                                         // 3677
      items = this.items;                                                                                              // 3678
    }                                                                                                                  // 3679
                                                                                                                       // 3680
    this._getSorters();                                                                                                // 3681
    this._updateItemsSortData( items );                                                                                // 3682
  };                                                                                                                   // 3683
                                                                                                                       // 3684
  Isotope.prototype._getSorters = function() {                                                                         // 3685
    var getSortData = this.options.getSortData;                                                                        // 3686
    for ( var key in getSortData ) {                                                                                   // 3687
      var sorter = getSortData[ key ];                                                                                 // 3688
      this._sorters[ key ] = mungeSorter( sorter );                                                                    // 3689
    }                                                                                                                  // 3690
  };                                                                                                                   // 3691
                                                                                                                       // 3692
  /**                                                                                                                  // 3693
   * @params {Array} items - of Isotope.Items                                                                          // 3694
   * @private                                                                                                          // 3695
   */                                                                                                                  // 3696
  Isotope.prototype._updateItemsSortData = function( items ) {                                                         // 3697
    // do not update if no items                                                                                       // 3698
    var len = items && items.length;                                                                                   // 3699
                                                                                                                       // 3700
    for ( var i=0; len && i < len; i++ ) {                                                                             // 3701
      var item = items[i];                                                                                             // 3702
      item.updateSortData();                                                                                           // 3703
    }                                                                                                                  // 3704
  };                                                                                                                   // 3705
                                                                                                                       // 3706
  // ----- munge sorter ----- //                                                                                       // 3707
                                                                                                                       // 3708
  // encapsulate this, as we just need mungeSorter                                                                     // 3709
  // other functions in here are just for munging                                                                      // 3710
  var mungeSorter = ( function() {                                                                                     // 3711
    // add a magic layer to sorters for convienent shorthands                                                          // 3712
    // `.foo-bar` will use the text of .foo-bar querySelector                                                          // 3713
    // `[foo-bar]` will use attribute                                                                                  // 3714
    // you can also add parser                                                                                         // 3715
    // `.foo-bar parseInt` will parse that as a number                                                                 // 3716
    function mungeSorter( sorter ) {                                                                                   // 3717
      // if not a string, return function or whatever it is                                                            // 3718
      if ( typeof sorter !== 'string' ) {                                                                              // 3719
        return sorter;                                                                                                 // 3720
      }                                                                                                                // 3721
      // parse the sorter string                                                                                       // 3722
      var args = trim( sorter ).split(' ');                                                                            // 3723
      var query = args[0];                                                                                             // 3724
      // check if query looks like [an-attribute]                                                                      // 3725
      var attrMatch = query.match( /^\[(.+)\]$/ );                                                                     // 3726
      var attr = attrMatch && attrMatch[1];                                                                            // 3727
      var getValue = getValueGetter( attr, query );                                                                    // 3728
      // use second argument as a parser                                                                               // 3729
      var parser = Isotope.sortDataParsers[ args[1] ];                                                                 // 3730
      // parse the value, if there was a parser                                                                        // 3731
      sorter = parser ? function( elem ) {                                                                             // 3732
        return elem && parser( getValue( elem ) );                                                                     // 3733
      } :                                                                                                              // 3734
      // otherwise just return value                                                                                   // 3735
      function( elem ) {                                                                                               // 3736
        return elem && getValue( elem );                                                                               // 3737
      };                                                                                                               // 3738
                                                                                                                       // 3739
      return sorter;                                                                                                   // 3740
    }                                                                                                                  // 3741
                                                                                                                       // 3742
    // get an attribute getter, or get text of the querySelector                                                       // 3743
    function getValueGetter( attr, query ) {                                                                           // 3744
      var getValue;                                                                                                    // 3745
      // if query looks like [foo-bar], get attribute                                                                  // 3746
      if ( attr ) {                                                                                                    // 3747
        getValue = function( elem ) {                                                                                  // 3748
          return elem.getAttribute( attr );                                                                            // 3749
        };                                                                                                             // 3750
      } else {                                                                                                         // 3751
        // otherwise, assume its a querySelector, and get its text                                                     // 3752
        getValue = function( elem ) {                                                                                  // 3753
          var child = elem.querySelector( query );                                                                     // 3754
          return child && getText( child );                                                                            // 3755
        };                                                                                                             // 3756
      }                                                                                                                // 3757
      return getValue;                                                                                                 // 3758
    }                                                                                                                  // 3759
                                                                                                                       // 3760
    return mungeSorter;                                                                                                // 3761
  })();                                                                                                                // 3762
                                                                                                                       // 3763
  // parsers used in getSortData shortcut strings                                                                      // 3764
  Isotope.sortDataParsers = {                                                                                          // 3765
    'parseInt': function( val ) {                                                                                      // 3766
      return parseInt( val, 10 );                                                                                      // 3767
    },                                                                                                                 // 3768
    'parseFloat': function( val ) {                                                                                    // 3769
      return parseFloat( val );                                                                                        // 3770
    }                                                                                                                  // 3771
  };                                                                                                                   // 3772
                                                                                                                       // 3773
  // ----- sort method ----- //                                                                                        // 3774
                                                                                                                       // 3775
  // sort filteredItem order                                                                                           // 3776
  Isotope.prototype._sort = function() {                                                                               // 3777
    var sortByOpt = this.options.sortBy;                                                                               // 3778
    if ( !sortByOpt ) {                                                                                                // 3779
      return;                                                                                                          // 3780
    }                                                                                                                  // 3781
    // concat all sortBy and sortHistory                                                                               // 3782
    var sortBys = [].concat.apply( sortByOpt, this.sortHistory );                                                      // 3783
    // sort magic                                                                                                      // 3784
    var itemSorter = getItemSorter( sortBys, this.options.sortAscending );                                             // 3785
    this.filteredItems.sort( itemSorter );                                                                             // 3786
    // keep track of sortBy History                                                                                    // 3787
    if ( sortByOpt !== this.sortHistory[0] ) {                                                                         // 3788
      // add to front, oldest goes in last                                                                             // 3789
      this.sortHistory.unshift( sortByOpt );                                                                           // 3790
    }                                                                                                                  // 3791
  };                                                                                                                   // 3792
                                                                                                                       // 3793
  // returns a function used for sorting                                                                               // 3794
  function getItemSorter( sortBys, sortAsc ) {                                                                         // 3795
    return function sorter( itemA, itemB ) {                                                                           // 3796
      // cycle through all sortKeys                                                                                    // 3797
      for ( var i = 0, len = sortBys.length; i < len; i++ ) {                                                          // 3798
        var sortBy = sortBys[i];                                                                                       // 3799
        var a = itemA.sortData[ sortBy ];                                                                              // 3800
        var b = itemB.sortData[ sortBy ];                                                                              // 3801
        if ( a > b || a < b ) {                                                                                        // 3802
          // if sortAsc is an object, use the value given the sortBy key                                               // 3803
          var isAscending = sortAsc[ sortBy ] !== undefined ? sortAsc[ sortBy ] : sortAsc;                             // 3804
          var direction = isAscending ? 1 : -1;                                                                        // 3805
          return ( a > b ? 1 : -1 ) * direction;                                                                       // 3806
        }                                                                                                              // 3807
      }                                                                                                                // 3808
      return 0;                                                                                                        // 3809
    };                                                                                                                 // 3810
  }                                                                                                                    // 3811
                                                                                                                       // 3812
  // -------------------------- methods -------------------------- //                                                  // 3813
                                                                                                                       // 3814
  // get layout mode                                                                                                   // 3815
  Isotope.prototype._mode = function() {                                                                               // 3816
    var layoutMode = this.options.layoutMode;                                                                          // 3817
    var mode = this.modes[ layoutMode ];                                                                               // 3818
    if ( !mode ) {                                                                                                     // 3819
      // TODO console.error                                                                                            // 3820
      throw new Error( 'No layout mode: ' + layoutMode );                                                              // 3821
    }                                                                                                                  // 3822
    // HACK sync mode's options                                                                                        // 3823
    // any options set after init for layout mode need to be synced                                                    // 3824
    mode.options = this.options[ layoutMode ];                                                                         // 3825
    return mode;                                                                                                       // 3826
  };                                                                                                                   // 3827
                                                                                                                       // 3828
  Isotope.prototype._resetLayout = function() {                                                                        // 3829
    // trigger original reset layout                                                                                   // 3830
    Outlayer.prototype._resetLayout.call( this );                                                                      // 3831
    this._mode()._resetLayout();                                                                                       // 3832
  };                                                                                                                   // 3833
                                                                                                                       // 3834
  Isotope.prototype._getItemLayoutPosition = function( item  ) {                                                       // 3835
    return this._mode()._getItemLayoutPosition( item );                                                                // 3836
  };                                                                                                                   // 3837
                                                                                                                       // 3838
  Isotope.prototype._manageStamp = function( stamp ) {                                                                 // 3839
    this._mode()._manageStamp( stamp );                                                                                // 3840
  };                                                                                                                   // 3841
                                                                                                                       // 3842
  Isotope.prototype._getContainerSize = function() {                                                                   // 3843
    return this._mode()._getContainerSize();                                                                           // 3844
  };                                                                                                                   // 3845
                                                                                                                       // 3846
  Isotope.prototype.needsResizeLayout = function() {                                                                   // 3847
    return this._mode().needsResizeLayout();                                                                           // 3848
  };                                                                                                                   // 3849
                                                                                                                       // 3850
  // -------------------------- adding & removing -------------------------- //                                        // 3851
                                                                                                                       // 3852
  // HEADS UP overwrites default Outlayer appended                                                                     // 3853
  Isotope.prototype.appended = function( elems ) {                                                                     // 3854
    var items = this.addItems( elems );                                                                                // 3855
    if ( !items.length ) {                                                                                             // 3856
      return;                                                                                                          // 3857
    }                                                                                                                  // 3858
    var filteredItems = this._filterRevealAdded( items );                                                              // 3859
    // add to filteredItems                                                                                            // 3860
    this.filteredItems = this.filteredItems.concat( filteredItems );                                                   // 3861
  };                                                                                                                   // 3862
                                                                                                                       // 3863
  // HEADS UP overwrites default Outlayer prepended                                                                    // 3864
  Isotope.prototype.prepended = function( elems ) {                                                                    // 3865
    var items = this._itemize( elems );                                                                                // 3866
    if ( !items.length ) {                                                                                             // 3867
      return;                                                                                                          // 3868
    }                                                                                                                  // 3869
    // add items to beginning of collection                                                                            // 3870
    var previousItems = this.items.slice(0);                                                                           // 3871
    this.items = items.concat( previousItems );                                                                        // 3872
    // start new layout                                                                                                // 3873
    this._resetLayout();                                                                                               // 3874
    this._manageStamps();                                                                                              // 3875
    // layout new stuff without transition                                                                             // 3876
    var filteredItems = this._filterRevealAdded( items );                                                              // 3877
    // layout previous items                                                                                           // 3878
    this.layoutItems( previousItems );                                                                                 // 3879
    // add to filteredItems                                                                                            // 3880
    this.filteredItems = filteredItems.concat( this.filteredItems );                                                   // 3881
  };                                                                                                                   // 3882
                                                                                                                       // 3883
  Isotope.prototype._filterRevealAdded = function( items ) {                                                           // 3884
    var filteredItems = this._noTransition( function() {                                                               // 3885
      return this._filter( items );                                                                                    // 3886
    });                                                                                                                // 3887
    // layout and reveal just the new items                                                                            // 3888
    this.layoutItems( filteredItems, true );                                                                           // 3889
    this.reveal( filteredItems );                                                                                      // 3890
    return items;                                                                                                      // 3891
  };                                                                                                                   // 3892
                                                                                                                       // 3893
  /**                                                                                                                  // 3894
   * Filter, sort, and layout newly-appended item elements                                                             // 3895
   * @param {Array or NodeList or Element} elems                                                                       // 3896
   */                                                                                                                  // 3897
  Isotope.prototype.insert = function( elems ) {                                                                       // 3898
    var items = this.addItems( elems );                                                                                // 3899
    if ( !items.length ) {                                                                                             // 3900
      return;                                                                                                          // 3901
    }                                                                                                                  // 3902
    // append item elements                                                                                            // 3903
    var i, item;                                                                                                       // 3904
    var len = items.length;                                                                                            // 3905
    for ( i=0; i < len; i++ ) {                                                                                        // 3906
      item = items[i];                                                                                                 // 3907
      this.element.appendChild( item.element );                                                                        // 3908
    }                                                                                                                  // 3909
    // filter new stuff                                                                                                // 3910
    /*                                                                                                                 // 3911
    // this way adds hides new filtered items with NO transition                                                       // 3912
    // so user can't see if new hidden items have been inserted                                                        // 3913
    var filteredInsertItems;                                                                                           // 3914
    this._noTransition( function() {                                                                                   // 3915
      filteredInsertItems = this._filter( items );                                                                     // 3916
      // hide all new items                                                                                            // 3917
      this.hide( filteredInsertItems );                                                                                // 3918
    });                                                                                                                // 3919
    // */                                                                                                              // 3920
    // this way hides new filtered items with transition                                                               // 3921
    // so user at least sees that something has been added                                                             // 3922
    var filteredInsertItems = this._filter( items );                                                                   // 3923
    // hide all newitems                                                                                               // 3924
    this._noTransition( function() {                                                                                   // 3925
      this.hide( filteredInsertItems );                                                                                // 3926
    });                                                                                                                // 3927
    // */                                                                                                              // 3928
    // set flag                                                                                                        // 3929
    for ( i=0; i < len; i++ ) {                                                                                        // 3930
      items[i].isLayoutInstant = true;                                                                                 // 3931
    }                                                                                                                  // 3932
    this.arrange();                                                                                                    // 3933
    // reset flag                                                                                                      // 3934
    for ( i=0; i < len; i++ ) {                                                                                        // 3935
      delete items[i].isLayoutInstant;                                                                                 // 3936
    }                                                                                                                  // 3937
    this.reveal( filteredInsertItems );                                                                                // 3938
  };                                                                                                                   // 3939
                                                                                                                       // 3940
  var _remove = Isotope.prototype.remove;                                                                              // 3941
  Isotope.prototype.remove = function( elems ) {                                                                       // 3942
    elems = makeArray( elems );                                                                                        // 3943
    var removeItems = this.getItems( elems );                                                                          // 3944
    // do regular thing                                                                                                // 3945
    _remove.call( this, elems );                                                                                       // 3946
    // bail if no items to remove                                                                                      // 3947
    if ( !removeItems || !removeItems.length ) {                                                                       // 3948
      return;                                                                                                          // 3949
    }                                                                                                                  // 3950
    // remove elems from filteredItems                                                                                 // 3951
    for ( var i=0, len = removeItems.length; i < len; i++ ) {                                                          // 3952
      var item = removeItems[i];                                                                                       // 3953
      // remove item from collection                                                                                   // 3954
      removeFrom( item, this.filteredItems );                                                                          // 3955
    }                                                                                                                  // 3956
  };                                                                                                                   // 3957
                                                                                                                       // 3958
  Isotope.prototype.shuffle = function() {                                                                             // 3959
    // update random sortData                                                                                          // 3960
    for ( var i=0, len = this.items.length; i < len; i++ ) {                                                           // 3961
      var item = this.items[i];                                                                                        // 3962
      item.sortData.random = Math.random();                                                                            // 3963
    }                                                                                                                  // 3964
    this.options.sortBy = 'random';                                                                                    // 3965
    this._sort();                                                                                                      // 3966
    this._layout();                                                                                                    // 3967
  };                                                                                                                   // 3968
                                                                                                                       // 3969
  /**                                                                                                                  // 3970
   * trigger fn without transition                                                                                     // 3971
   * kind of hacky to have this in the first place                                                                     // 3972
   * @param {Function} fn                                                                                              // 3973
   * @returns ret                                                                                                      // 3974
   * @private                                                                                                          // 3975
   */                                                                                                                  // 3976
  Isotope.prototype._noTransition = function( fn ) {                                                                   // 3977
    // save transitionDuration before disabling                                                                        // 3978
    var transitionDuration = this.options.transitionDuration;                                                          // 3979
    // disable transition                                                                                              // 3980
    this.options.transitionDuration = 0;                                                                               // 3981
    // do it                                                                                                           // 3982
    var returnValue = fn.call( this );                                                                                 // 3983
    // re-enable transition for reveal                                                                                 // 3984
    this.options.transitionDuration = transitionDuration;                                                              // 3985
    return returnValue;                                                                                                // 3986
  };                                                                                                                   // 3987
                                                                                                                       // 3988
  // ----- helper methods ----- //                                                                                     // 3989
                                                                                                                       // 3990
  /**                                                                                                                  // 3991
   * getter method for getting filtered item elements                                                                  // 3992
   * @returns {Array} elems - collection of item elements                                                              // 3993
   */                                                                                                                  // 3994
  Isotope.prototype.getFilteredItemElements = function() {                                                             // 3995
    var elems = [];                                                                                                    // 3996
    for ( var i=0, len = this.filteredItems.length; i < len; i++ ) {                                                   // 3997
      elems.push( this.filteredItems[i].element );                                                                     // 3998
    }                                                                                                                  // 3999
    return elems;                                                                                                      // 4000
  };                                                                                                                   // 4001
                                                                                                                       // 4002
  // -----  ----- //                                                                                                   // 4003
                                                                                                                       // 4004
  return Isotope;                                                                                                      // 4005
}                                                                                                                      // 4006
                                                                                                                       // 4007
// -------------------------- transport -------------------------- //                                                  // 4008
                                                                                                                       // 4009
if ( typeof define === 'function' && define.amd ) {                                                                    // 4010
  // AMD                                                                                                               // 4011
  define( [                                                                                                            // 4012
      'outlayer/outlayer',                                                                                             // 4013
      'get-size/get-size',                                                                                             // 4014
      'matches-selector/matches-selector',                                                                             // 4015
      'isotope/js/item',                                                                                               // 4016
      'isotope/js/layout-mode',                                                                                        // 4017
      // include default layout modes                                                                                  // 4018
      'isotope/js/layout-modes/masonry',                                                                               // 4019
      'isotope/js/layout-modes/fit-rows',                                                                              // 4020
      'isotope/js/layout-modes/vertical'                                                                               // 4021
    ],                                                                                                                 // 4022
    isotopeDefinition );                                                                                               // 4023
} else if ( typeof exports === 'object' ) {                                                                            // 4024
  // CommonJS                                                                                                          // 4025
  module.exports = isotopeDefinition(                                                                                  // 4026
    require('outlayer'),                                                                                               // 4027
    require('get-size'),                                                                                               // 4028
    require('desandro-matches-selector'),                                                                              // 4029
    require('./item'),                                                                                                 // 4030
    require('./layout-mode'),                                                                                          // 4031
    // include default layout modes                                                                                    // 4032
    require('./layout-modes/masonry'),                                                                                 // 4033
    require('./layout-modes/fit-rows'),                                                                                // 4034
    require('./layout-modes/vertical')                                                                                 // 4035
  );                                                                                                                   // 4036
} else {                                                                                                               // 4037
  // browser global                                                                                                    // 4038
  window.Isotope = isotopeDefinition(                                                                                  // 4039
    window.Outlayer,                                                                                                   // 4040
    window.getSize,                                                                                                    // 4041
    window.matchesSelector,                                                                                            // 4042
    window.Isotope.Item,                                                                                               // 4043
    window.Isotope.LayoutMode                                                                                          // 4044
  );                                                                                                                   // 4045
}                                                                                                                      // 4046
                                                                                                                       // 4047
})( window );                                                                                                          // 4048
                                                                                                                       // 4049
                                                                                                                       // 4050
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/isotope:isotope/meteor/export.js                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/*global Isotope:true*/  // Meteor.js creates a file-scope global for exporting. This comment prevents a potential JSHint warning.
Isotope = window.Isotope;                                                                                              // 2
delete window.Isotope;                                                                                                 // 3
                                                                                                                       // 4
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);

///////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['isotope:isotope'] = {}, {
  Isotope: Isotope
});

})();
