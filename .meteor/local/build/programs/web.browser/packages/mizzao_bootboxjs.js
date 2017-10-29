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
// packages/mizzao_bootboxjs/packages/mizzao_bootboxjs.js                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
(function () {                                                                                                         // 1
                                                                                                                       // 2
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 3
//                                                                                                               //    // 4
// packages/mizzao:bootboxjs/bootbox/bootbox.js                                                                  //    // 5
//                                                                                                               //    // 6
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 7
                                                                                                                 //    // 8
/**                                                                                                              // 1  // 9
 * bootbox.js [v4.4.0]                                                                                           // 2  // 10
 *                                                                                                               // 3  // 11
 * http://bootboxjs.com/license.txt                                                                              // 4  // 12
 */                                                                                                              // 5  // 13
                                                                                                                 // 6  // 14
// @see https://github.com/makeusabrew/bootbox/issues/180                                                        // 7  // 15
// @see https://github.com/makeusabrew/bootbox/issues/186                                                        // 8  // 16
(function (root, factory) {                                                                                      // 9  // 17
                                                                                                                 // 10
  "use strict";                                                                                                  // 11
  if (typeof define === "function" && define.amd) {                                                              // 12
    // AMD. Register as an anonymous module.                                                                     // 13
    define(["jquery"], factory);                                                                                 // 14
  } else if (typeof exports === "object") {                                                                      // 15
    // Node. Does not work with strict CommonJS, but                                                             // 16
    // only CommonJS-like environments that support module.exports,                                              // 17
    // like Node.                                                                                                // 18
    module.exports = factory(require("jquery"));                                                                 // 19
  } else {                                                                                                       // 20
    // Browser globals (root is window)                                                                          // 21
    root.bootbox = factory(root.jQuery);                                                                         // 22
  }                                                                                                              // 23
                                                                                                                 // 24
}(this, function init($, undefined) {                                                                            // 25
                                                                                                                 // 26
  "use strict";                                                                                                  // 27
                                                                                                                 // 28
  // the base DOM structure needed to create a modal                                                             // 29
  var templates = {                                                                                              // 30
    dialog:                                                                                                      // 31
      "<div class='bootbox modal' tabindex='-1' role='dialog'>" +                                                // 32
        "<div class='modal-dialog'>" +                                                                           // 33
          "<div class='modal-content'>" +                                                                        // 34
            "<div class='modal-body'><div class='bootbox-body'></div></div>" +                                   // 35
          "</div>" +                                                                                             // 36
        "</div>" +                                                                                               // 37
      "</div>",                                                                                                  // 38
    header:                                                                                                      // 39
      "<div class='modal-header'>" +                                                                             // 40
        "<h4 class='modal-title'></h4>" +                                                                        // 41
      "</div>",                                                                                                  // 42
    footer:                                                                                                      // 43
      "<div class='modal-footer'></div>",                                                                        // 44
    closeButton:                                                                                                 // 45
      "<button type='button' class='bootbox-close-button close' data-dismiss='modal' aria-hidden='true'>&times;</button>",
    form:                                                                                                        // 47
      "<form class='bootbox-form'></form>",                                                                      // 48
    inputs: {                                                                                                    // 49
      text:                                                                                                      // 50
        "<input class='bootbox-input bootbox-input-text form-control' autocomplete=off type=text />",            // 51
      textarea:                                                                                                  // 52
        "<textarea class='bootbox-input bootbox-input-textarea form-control'></textarea>",                       // 53
      email:                                                                                                     // 54
        "<input class='bootbox-input bootbox-input-email form-control' autocomplete='off' type='email' />",      // 55
      select:                                                                                                    // 56
        "<select class='bootbox-input bootbox-input-select form-control'></select>",                             // 57
      checkbox:                                                                                                  // 58
        "<div class='checkbox'><label><input class='bootbox-input bootbox-input-checkbox' type='checkbox' /></label></div>",
      date:                                                                                                      // 60
        "<input class='bootbox-input bootbox-input-date form-control' autocomplete=off type='date' />",          // 61
      time:                                                                                                      // 62
        "<input class='bootbox-input bootbox-input-time form-control' autocomplete=off type='time' />",          // 63
      number:                                                                                                    // 64
        "<input class='bootbox-input bootbox-input-number form-control' autocomplete=off type='number' />",      // 65
      password:                                                                                                  // 66
        "<input class='bootbox-input bootbox-input-password form-control' autocomplete='off' type='password' />" // 67
    }                                                                                                            // 68
  };                                                                                                             // 69
                                                                                                                 // 70
  var defaults = {                                                                                               // 71
    // default language                                                                                          // 72
    locale: "en",                                                                                                // 73
    // show backdrop or not. Default to static so user has to interact with dialog                               // 74
    backdrop: "static",                                                                                          // 75
    // animate the modal in/out                                                                                  // 76
    animate: true,                                                                                               // 77
    // additional class string applied to the top level dialog                                                   // 78
    className: null,                                                                                             // 79
    // whether or not to include a close button                                                                  // 80
    closeButton: true,                                                                                           // 81
    // show the dialog immediately by default                                                                    // 82
    show: true,                                                                                                  // 83
    // dialog container                                                                                          // 84
    container: "body"                                                                                            // 85
  };                                                                                                             // 86
                                                                                                                 // 87
  // our public object; augmented after our private API                                                          // 88
  var exports = {};                                                                                              // 89
                                                                                                                 // 90
  /**                                                                                                            // 91
   * @private                                                                                                    // 92
   */                                                                                                            // 93
  function _t(key) {                                                                                             // 94
    var locale = locales[defaults.locale];                                                                       // 95
    return locale ? locale[key] : locales.en[key];                                                               // 96
  }                                                                                                              // 97
                                                                                                                 // 98
  function processCallback(e, dialog, callback) {                                                                // 99
    e.stopPropagation();                                                                                         // 100
    e.preventDefault();                                                                                          // 101
                                                                                                                 // 102
    // by default we assume a callback will get rid of the dialog,                                               // 103
    // although it is given the opportunity to override this                                                     // 104
                                                                                                                 // 105
    // so, if the callback can be invoked and it *explicitly returns false*                                      // 106
    // then we'll set a flag to keep the dialog active...                                                        // 107
    var preserveDialog = $.isFunction(callback) && callback.call(dialog, e) === false;                           // 108
                                                                                                                 // 109
    // ... otherwise we'll bin it                                                                                // 110
    if (!preserveDialog) {                                                                                       // 111
      dialog.modal("hide");                                                                                      // 112
    }                                                                                                            // 113
  }                                                                                                              // 114
                                                                                                                 // 115
  function getKeyLength(obj) {                                                                                   // 116
    // @TODO defer to Object.keys(x).length if available?                                                        // 117
    var k, t = 0;                                                                                                // 118
    for (k in obj) {                                                                                             // 119
      t ++;                                                                                                      // 120
    }                                                                                                            // 121
    return t;                                                                                                    // 122
  }                                                                                                              // 123
                                                                                                                 // 124
  function each(collection, iterator) {                                                                          // 125
    var index = 0;                                                                                               // 126
    $.each(collection, function(key, value) {                                                                    // 127
      iterator(key, value, index++);                                                                             // 128
    });                                                                                                          // 129
  }                                                                                                              // 130
                                                                                                                 // 131
  function sanitize(options) {                                                                                   // 132
    var buttons;                                                                                                 // 133
    var total;                                                                                                   // 134
                                                                                                                 // 135
    if (typeof options !== "object") {                                                                           // 136
      throw new Error("Please supply an object of options");                                                     // 137
    }                                                                                                            // 138
                                                                                                                 // 139
    if (!options.message) {                                                                                      // 140
      throw new Error("Please specify a message");                                                               // 141
    }                                                                                                            // 142
                                                                                                                 // 143
    // make sure any supplied options take precedence over defaults                                              // 144
    options = $.extend({}, defaults, options);                                                                   // 145
                                                                                                                 // 146
    if (!options.buttons) {                                                                                      // 147
      options.buttons = {};                                                                                      // 148
    }                                                                                                            // 149
                                                                                                                 // 150
    buttons = options.buttons;                                                                                   // 151
                                                                                                                 // 152
    total = getKeyLength(buttons);                                                                               // 153
                                                                                                                 // 154
    each(buttons, function(key, button, index) {                                                                 // 155
                                                                                                                 // 156
      if ($.isFunction(button)) {                                                                                // 157
        // short form, assume value is our callback. Since button                                                // 158
        // isn't an object it isn't a reference either so re-assign it                                           // 159
        button = buttons[key] = {                                                                                // 160
          callback: button                                                                                       // 161
        };                                                                                                       // 162
      }                                                                                                          // 163
                                                                                                                 // 164
      // before any further checks make sure by now button is the correct type                                   // 165
      if ($.type(button) !== "object") {                                                                         // 166
        throw new Error("button with key " + key + " must be an object");                                        // 167
      }                                                                                                          // 168
                                                                                                                 // 169
      if (!button.label) {                                                                                       // 170
        // the lack of an explicit label means we'll assume the key is good enough                               // 171
        button.label = key;                                                                                      // 172
      }                                                                                                          // 173
                                                                                                                 // 174
      if (!button.className) {                                                                                   // 175
        if (total <= 2 && index === total-1) {                                                                   // 176
          // always add a primary to the main option in a two-button dialog                                      // 177
          button.className = "btn-primary";                                                                      // 178
        } else {                                                                                                 // 179
          button.className = "btn-default";                                                                      // 180
        }                                                                                                        // 181
      }                                                                                                          // 182
    });                                                                                                          // 183
                                                                                                                 // 184
    return options;                                                                                              // 185
  }                                                                                                              // 186
                                                                                                                 // 187
  /**                                                                                                            // 188
   * map a flexible set of arguments into a single returned object                                               // 189
   * if args.length is already one just return it, otherwise                                                     // 190
   * use the properties argument to map the unnamed args to                                                      // 191
   * object properties                                                                                           // 192
   * so in the latter case:                                                                                      // 193
   * mapArguments(["foo", $.noop], ["message", "callback"])                                                      // 194
   * -> { message: "foo", callback: $.noop }                                                                     // 195
   */                                                                                                            // 196
  function mapArguments(args, properties) {                                                                      // 197
    var argn = args.length;                                                                                      // 198
    var options = {};                                                                                            // 199
                                                                                                                 // 200
    if (argn < 1 || argn > 2) {                                                                                  // 201
      throw new Error("Invalid argument length");                                                                // 202
    }                                                                                                            // 203
                                                                                                                 // 204
    if (argn === 2 || typeof args[0] === "string") {                                                             // 205
      options[properties[0]] = args[0];                                                                          // 206
      options[properties[1]] = args[1];                                                                          // 207
    } else {                                                                                                     // 208
      options = args[0];                                                                                         // 209
    }                                                                                                            // 210
                                                                                                                 // 211
    return options;                                                                                              // 212
  }                                                                                                              // 213
                                                                                                                 // 214
  /**                                                                                                            // 215
   * merge a set of default dialog options with user supplied arguments                                          // 216
   */                                                                                                            // 217
  function mergeArguments(defaults, args, properties) {                                                          // 218
    return $.extend(                                                                                             // 219
      // deep merge                                                                                              // 220
      true,                                                                                                      // 221
      // ensure the target is an empty, unreferenced object                                                      // 222
      {},                                                                                                        // 223
      // the base options object for this type of dialog (often just buttons)                                    // 224
      defaults,                                                                                                  // 225
      // args could be an object or array; if it's an array properties will                                      // 226
      // map it to a proper options object                                                                       // 227
      mapArguments(                                                                                              // 228
        args,                                                                                                    // 229
        properties                                                                                               // 230
      )                                                                                                          // 231
    );                                                                                                           // 232
  }                                                                                                              // 233
                                                                                                                 // 234
  /**                                                                                                            // 235
   * this entry-level method makes heavy use of composition to take a simple                                     // 236
   * range of inputs and return valid options suitable for passing to bootbox.dialog                             // 237
   */                                                                                                            // 238
  function mergeDialogOptions(className, labels, properties, args) {                                             // 239
    //  build up a base set of dialog properties                                                                 // 240
    var baseOptions = {                                                                                          // 241
      className: "bootbox-" + className,                                                                         // 242
      buttons: createLabels.apply(null, labels)                                                                  // 243
    };                                                                                                           // 244
                                                                                                                 // 245
    // ensure the buttons properties generated, *after* merging                                                  // 246
    // with user args are still valid against the supplied labels                                                // 247
    return validateButtons(                                                                                      // 248
      // merge the generated base properties with user supplied arguments                                        // 249
      mergeArguments(                                                                                            // 250
        baseOptions,                                                                                             // 251
        args,                                                                                                    // 252
        // if args.length > 1, properties specify how each arg maps to an object key                             // 253
        properties                                                                                               // 254
      ),                                                                                                         // 255
      labels                                                                                                     // 256
    );                                                                                                           // 257
  }                                                                                                              // 258
                                                                                                                 // 259
  /**                                                                                                            // 260
   * from a given list of arguments return a suitable object of button labels                                    // 261
   * all this does is normalise the given labels and translate them where possible                               // 262
   * e.g. "ok", "confirm" -> { ok: "OK, cancel: "Annuleren" }                                                    // 263
   */                                                                                                            // 264
  function createLabels() {                                                                                      // 265
    var buttons = {};                                                                                            // 266
                                                                                                                 // 267
    for (var i = 0, j = arguments.length; i < j; i++) {                                                          // 268
      var argument = arguments[i];                                                                               // 269
      var key = argument.toLowerCase();                                                                          // 270
      var value = argument.toUpperCase();                                                                        // 271
                                                                                                                 // 272
      buttons[key] = {                                                                                           // 273
        label: _t(value)                                                                                         // 274
      };                                                                                                         // 275
    }                                                                                                            // 276
                                                                                                                 // 277
    return buttons;                                                                                              // 278
  }                                                                                                              // 279
                                                                                                                 // 280
  function validateButtons(options, buttons) {                                                                   // 281
    var allowedButtons = {};                                                                                     // 282
    each(buttons, function(key, value) {                                                                         // 283
      allowedButtons[value] = true;                                                                              // 284
    });                                                                                                          // 285
                                                                                                                 // 286
    each(options.buttons, function(key) {                                                                        // 287
      if (allowedButtons[key] === undefined) {                                                                   // 288
        throw new Error("button key " + key + " is not allowed (options are " + buttons.join("\n") + ")");       // 289
      }                                                                                                          // 290
    });                                                                                                          // 291
                                                                                                                 // 292
    return options;                                                                                              // 293
  }                                                                                                              // 294
                                                                                                                 // 295
  exports.alert = function() {                                                                                   // 296
    var options;                                                                                                 // 297
                                                                                                                 // 298
    options = mergeDialogOptions("alert", ["ok"], ["message", "callback"], arguments);                           // 299
                                                                                                                 // 300
    if (options.callback && !$.isFunction(options.callback)) {                                                   // 301
      throw new Error("alert requires callback property to be a function when provided");                        // 302
    }                                                                                                            // 303
                                                                                                                 // 304
    /**                                                                                                          // 305
     * overrides                                                                                                 // 306
     */                                                                                                          // 307
    options.buttons.ok.callback = options.onEscape = function() {                                                // 308
      if ($.isFunction(options.callback)) {                                                                      // 309
        return options.callback.call(this);                                                                      // 310
      }                                                                                                          // 311
      return true;                                                                                               // 312
    };                                                                                                           // 313
                                                                                                                 // 314
    return exports.dialog(options);                                                                              // 315
  };                                                                                                             // 316
                                                                                                                 // 317
  exports.confirm = function() {                                                                                 // 318
    var options;                                                                                                 // 319
                                                                                                                 // 320
    options = mergeDialogOptions("confirm", ["cancel", "confirm"], ["message", "callback"], arguments);          // 321
                                                                                                                 // 322
    /**                                                                                                          // 323
     * overrides; undo anything the user tried to set they shouldn't have                                        // 324
     */                                                                                                          // 325
    options.buttons.cancel.callback = options.onEscape = function() {                                            // 326
      return options.callback.call(this, false);                                                                 // 327
    };                                                                                                           // 328
                                                                                                                 // 329
    options.buttons.confirm.callback = function() {                                                              // 330
      return options.callback.call(this, true);                                                                  // 331
    };                                                                                                           // 332
                                                                                                                 // 333
    // confirm specific validation                                                                               // 334
    if (!$.isFunction(options.callback)) {                                                                       // 335
      throw new Error("confirm requires a callback");                                                            // 336
    }                                                                                                            // 337
                                                                                                                 // 338
    return exports.dialog(options);                                                                              // 339
  };                                                                                                             // 340
                                                                                                                 // 341
  exports.prompt = function() {                                                                                  // 342
    var options;                                                                                                 // 343
    var defaults;                                                                                                // 344
    var dialog;                                                                                                  // 345
    var form;                                                                                                    // 346
    var input;                                                                                                   // 347
    var shouldShow;                                                                                              // 348
    var inputOptions;                                                                                            // 349
                                                                                                                 // 350
    // we have to create our form first otherwise                                                                // 351
    // its value is undefined when gearing up our options                                                        // 352
    // @TODO this could be solved by allowing message to                                                         // 353
    // be a function instead...                                                                                  // 354
    form = $(templates.form);                                                                                    // 355
                                                                                                                 // 356
    // prompt defaults are more complex than others in that                                                      // 357
    // users can override more defaults                                                                          // 358
    // @TODO I don't like that prompt has to do a lot of heavy                                                   // 359
    // lifting which mergeDialogOptions can *almost* support already                                             // 360
    // just because of 'value' and 'inputType' - can we refactor?                                                // 361
    defaults = {                                                                                                 // 362
      className: "bootbox-prompt",                                                                               // 363
      buttons: createLabels("cancel", "confirm"),                                                                // 364
      value: "",                                                                                                 // 365
      inputType: "text"                                                                                          // 366
    };                                                                                                           // 367
                                                                                                                 // 368
    options = validateButtons(                                                                                   // 369
      mergeArguments(defaults, arguments, ["title", "callback"]),                                                // 370
      ["cancel", "confirm"]                                                                                      // 371
    );                                                                                                           // 372
                                                                                                                 // 373
    // capture the user's show value; we always set this to false before                                         // 374
    // spawning the dialog to give us a chance to attach some handlers to                                        // 375
    // it, but we need to make sure we respect a preference not to show it                                       // 376
    shouldShow = (options.show === undefined) ? true : options.show;                                             // 377
                                                                                                                 // 378
    /**                                                                                                          // 379
     * overrides; undo anything the user tried to set they shouldn't have                                        // 380
     */                                                                                                          // 381
    options.message = form;                                                                                      // 382
                                                                                                                 // 383
    options.buttons.cancel.callback = options.onEscape = function() {                                            // 384
      return options.callback.call(this, null);                                                                  // 385
    };                                                                                                           // 386
                                                                                                                 // 387
    options.buttons.confirm.callback = function() {                                                              // 388
      var value;                                                                                                 // 389
                                                                                                                 // 390
      switch (options.inputType) {                                                                               // 391
        case "text":                                                                                             // 392
        case "textarea":                                                                                         // 393
        case "email":                                                                                            // 394
        case "select":                                                                                           // 395
        case "date":                                                                                             // 396
        case "time":                                                                                             // 397
        case "number":                                                                                           // 398
        case "password":                                                                                         // 399
          value = input.val();                                                                                   // 400
          break;                                                                                                 // 401
                                                                                                                 // 402
        case "checkbox":                                                                                         // 403
          var checkedItems = input.find("input:checked");                                                        // 404
                                                                                                                 // 405
          // we assume that checkboxes are always multiple,                                                      // 406
          // hence we default to an empty array                                                                  // 407
          value = [];                                                                                            // 408
                                                                                                                 // 409
          each(checkedItems, function(_, item) {                                                                 // 410
            value.push($(item).val());                                                                           // 411
          });                                                                                                    // 412
          break;                                                                                                 // 413
      }                                                                                                          // 414
                                                                                                                 // 415
      return options.callback.call(this, value);                                                                 // 416
    };                                                                                                           // 417
                                                                                                                 // 418
    options.show = false;                                                                                        // 419
                                                                                                                 // 420
    // prompt specific validation                                                                                // 421
    if (!options.title) {                                                                                        // 422
      throw new Error("prompt requires a title");                                                                // 423
    }                                                                                                            // 424
                                                                                                                 // 425
    if (!$.isFunction(options.callback)) {                                                                       // 426
      throw new Error("prompt requires a callback");                                                             // 427
    }                                                                                                            // 428
                                                                                                                 // 429
    if (!templates.inputs[options.inputType]) {                                                                  // 430
      throw new Error("invalid prompt type");                                                                    // 431
    }                                                                                                            // 432
                                                                                                                 // 433
    // create the input based on the supplied type                                                               // 434
    input = $(templates.inputs[options.inputType]);                                                              // 435
                                                                                                                 // 436
    switch (options.inputType) {                                                                                 // 437
      case "text":                                                                                               // 438
      case "textarea":                                                                                           // 439
      case "email":                                                                                              // 440
      case "date":                                                                                               // 441
      case "time":                                                                                               // 442
      case "number":                                                                                             // 443
      case "password":                                                                                           // 444
        input.val(options.value);                                                                                // 445
        break;                                                                                                   // 446
                                                                                                                 // 447
      case "select":                                                                                             // 448
        var groups = {};                                                                                         // 449
        inputOptions = options.inputOptions || [];                                                               // 450
                                                                                                                 // 451
        if (!$.isArray(inputOptions)) {                                                                          // 452
          throw new Error("Please pass an array of input options");                                              // 453
        }                                                                                                        // 454
                                                                                                                 // 455
        if (!inputOptions.length) {                                                                              // 456
          throw new Error("prompt with select requires options");                                                // 457
        }                                                                                                        // 458
                                                                                                                 // 459
        each(inputOptions, function(_, option) {                                                                 // 460
                                                                                                                 // 461
          // assume the element to attach to is the input...                                                     // 462
          var elem = input;                                                                                      // 463
                                                                                                                 // 464
          if (option.value === undefined || option.text === undefined) {                                         // 465
            throw new Error("given options in wrong format");                                                    // 466
          }                                                                                                      // 467
                                                                                                                 // 468
          // ... but override that element if this option sits in a group                                        // 469
                                                                                                                 // 470
          if (option.group) {                                                                                    // 471
            // initialise group if necessary                                                                     // 472
            if (!groups[option.group]) {                                                                         // 473
              groups[option.group] = $("<optgroup/>").attr("label", option.group);                               // 474
            }                                                                                                    // 475
                                                                                                                 // 476
            elem = groups[option.group];                                                                         // 477
          }                                                                                                      // 478
                                                                                                                 // 479
          elem.append("<option value='" + option.value + "'>" + option.text + "</option>");                      // 480
        });                                                                                                      // 481
                                                                                                                 // 482
        each(groups, function(_, group) {                                                                        // 483
          input.append(group);                                                                                   // 484
        });                                                                                                      // 485
                                                                                                                 // 486
        // safe to set a select's value as per a normal input                                                    // 487
        input.val(options.value);                                                                                // 488
        break;                                                                                                   // 489
                                                                                                                 // 490
      case "checkbox":                                                                                           // 491
        var values   = $.isArray(options.value) ? options.value : [options.value];                               // 492
        inputOptions = options.inputOptions || [];                                                               // 493
                                                                                                                 // 494
        if (!inputOptions.length) {                                                                              // 495
          throw new Error("prompt with checkbox requires options");                                              // 496
        }                                                                                                        // 497
                                                                                                                 // 498
        if (!inputOptions[0].value || !inputOptions[0].text) {                                                   // 499
          throw new Error("given options in wrong format");                                                      // 500
        }                                                                                                        // 501
                                                                                                                 // 502
        // checkboxes have to nest within a containing element, so                                               // 503
        // they break the rules a bit and we end up re-assigning                                                 // 504
        // our 'input' element to this container instead                                                         // 505
        input = $("<div/>");                                                                                     // 506
                                                                                                                 // 507
        each(inputOptions, function(_, option) {                                                                 // 508
          var checkbox = $(templates.inputs[options.inputType]);                                                 // 509
                                                                                                                 // 510
          checkbox.find("input").attr("value", option.value);                                                    // 511
          checkbox.find("label").append(option.text);                                                            // 512
                                                                                                                 // 513
          // we've ensured values is an array so we can always iterate over it                                   // 514
          each(values, function(_, value) {                                                                      // 515
            if (value === option.value) {                                                                        // 516
              checkbox.find("input").prop("checked", true);                                                      // 517
            }                                                                                                    // 518
          });                                                                                                    // 519
                                                                                                                 // 520
          input.append(checkbox);                                                                                // 521
        });                                                                                                      // 522
        break;                                                                                                   // 523
    }                                                                                                            // 524
                                                                                                                 // 525
    // @TODO provide an attributes option instead                                                                // 526
    // and simply map that as keys: vals                                                                         // 527
    if (options.placeholder) {                                                                                   // 528
      input.attr("placeholder", options.placeholder);                                                            // 529
    }                                                                                                            // 530
                                                                                                                 // 531
    if (options.pattern) {                                                                                       // 532
      input.attr("pattern", options.pattern);                                                                    // 533
    }                                                                                                            // 534
                                                                                                                 // 535
    if (options.maxlength) {                                                                                     // 536
      input.attr("maxlength", options.maxlength);                                                                // 537
    }                                                                                                            // 538
                                                                                                                 // 539
    // now place it in our form                                                                                  // 540
    form.append(input);                                                                                          // 541
                                                                                                                 // 542
    form.on("submit", function(e) {                                                                              // 543
      e.preventDefault();                                                                                        // 544
      // Fix for SammyJS (or similar JS routing library) hijacking the form post.                                // 545
      e.stopPropagation();                                                                                       // 546
      // @TODO can we actually click *the* button object instead?                                                // 547
      // e.g. buttons.confirm.click() or similar                                                                 // 548
      dialog.find(".btn-primary").click();                                                                       // 549
    });                                                                                                          // 550
                                                                                                                 // 551
    dialog = exports.dialog(options);                                                                            // 552
                                                                                                                 // 553
    // clear the existing handler focusing the submit button...                                                  // 554
    dialog.off("shown.bs.modal");                                                                                // 555
                                                                                                                 // 556
    // ...and replace it with one focusing our input, if possible                                                // 557
    dialog.on("shown.bs.modal", function() {                                                                     // 558
      // need the closure here since input isn't                                                                 // 559
      // an object otherwise                                                                                     // 560
      input.focus();                                                                                             // 561
    });                                                                                                          // 562
                                                                                                                 // 563
    if (shouldShow === true) {                                                                                   // 564
      dialog.modal("show");                                                                                      // 565
    }                                                                                                            // 566
                                                                                                                 // 567
    return dialog;                                                                                               // 568
  };                                                                                                             // 569
                                                                                                                 // 570
  exports.dialog = function(options) {                                                                           // 571
    options = sanitize(options);                                                                                 // 572
                                                                                                                 // 573
    var dialog = $(templates.dialog);                                                                            // 574
    var innerDialog = dialog.find(".modal-dialog");                                                              // 575
    var body = dialog.find(".modal-body");                                                                       // 576
    var buttons = options.buttons;                                                                               // 577
    var buttonStr = "";                                                                                          // 578
    var callbacks = {                                                                                            // 579
      onEscape: options.onEscape                                                                                 // 580
    };                                                                                                           // 581
                                                                                                                 // 582
    if ($.fn.modal === undefined) {                                                                              // 583
      throw new Error(                                                                                           // 584
        "$.fn.modal is not defined; please double check you have included " +                                    // 585
        "the Bootstrap JavaScript library. See http://getbootstrap.com/javascript/ " +                           // 586
        "for more details."                                                                                      // 587
      );                                                                                                         // 588
    }                                                                                                            // 589
                                                                                                                 // 590
    each(buttons, function(key, button) {                                                                        // 591
                                                                                                                 // 592
      // @TODO I don't like this string appending to itself; bit dirty. Needs reworking                          // 593
      // can we just build up button elements instead? slower but neater. Then button                            // 594
      // can just become a template too                                                                          // 595
      buttonStr += "<button data-bb-handler='" + key + "' type='button' class='btn " + button.className + "'>" + button.label + "</button>";
      callbacks[key] = button.callback;                                                                          // 597
    });                                                                                                          // 598
                                                                                                                 // 599
    body.find(".bootbox-body").html(options.message);                                                            // 600
                                                                                                                 // 601
    if (options.animate === true) {                                                                              // 602
      dialog.addClass("fade");                                                                                   // 603
    }                                                                                                            // 604
                                                                                                                 // 605
    if (options.className) {                                                                                     // 606
      dialog.addClass(options.className);                                                                        // 607
    }                                                                                                            // 608
                                                                                                                 // 609
    if (options.size === "large") {                                                                              // 610
      innerDialog.addClass("modal-lg");                                                                          // 611
    } else if (options.size === "small") {                                                                       // 612
      innerDialog.addClass("modal-sm");                                                                          // 613
    }                                                                                                            // 614
                                                                                                                 // 615
    if (options.title) {                                                                                         // 616
      body.before(templates.header);                                                                             // 617
    }                                                                                                            // 618
                                                                                                                 // 619
    if (options.closeButton) {                                                                                   // 620
      var closeButton = $(templates.closeButton);                                                                // 621
                                                                                                                 // 622
      if (options.title) {                                                                                       // 623
        dialog.find(".modal-header").prepend(closeButton);                                                       // 624
      } else {                                                                                                   // 625
        closeButton.css("margin-top", "-10px").prependTo(body);                                                  // 626
      }                                                                                                          // 627
    }                                                                                                            // 628
                                                                                                                 // 629
    if (options.title) {                                                                                         // 630
      dialog.find(".modal-title").html(options.title);                                                           // 631
    }                                                                                                            // 632
                                                                                                                 // 633
    if (buttonStr.length) {                                                                                      // 634
      body.after(templates.footer);                                                                              // 635
      dialog.find(".modal-footer").html(buttonStr);                                                              // 636
    }                                                                                                            // 637
                                                                                                                 // 638
                                                                                                                 // 639
    /**                                                                                                          // 640
     * Bootstrap event listeners; used handle extra                                                              // 641
     * setup & teardown required after the underlying                                                            // 642
     * modal has performed certain actions                                                                       // 643
     */                                                                                                          // 644
                                                                                                                 // 645
    dialog.on("hidden.bs.modal", function(e) {                                                                   // 646
      // ensure we don't accidentally intercept hidden events triggered                                          // 647
      // by children of the current dialog. We shouldn't anymore now BS                                          // 648
      // namespaces its events; but still worth doing                                                            // 649
      if (e.target === this) {                                                                                   // 650
        dialog.remove();                                                                                         // 651
      }                                                                                                          // 652
    });                                                                                                          // 653
                                                                                                                 // 654
    /*                                                                                                           // 655
    dialog.on("show.bs.modal", function() {                                                                      // 656
      // sadly this doesn't work; show is called *just* before                                                   // 657
      // the backdrop is added so we'd need a setTimeout hack or                                                 // 658
      // otherwise... leaving in as would be nice                                                                // 659
      if (options.backdrop) {                                                                                    // 660
        dialog.next(".modal-backdrop").addClass("bootbox-backdrop");                                             // 661
      }                                                                                                          // 662
    });                                                                                                          // 663
    */                                                                                                           // 664
                                                                                                                 // 665
    dialog.on("shown.bs.modal", function() {                                                                     // 666
      dialog.find(".btn-primary:first").focus();                                                                 // 667
    });                                                                                                          // 668
                                                                                                                 // 669
    /**                                                                                                          // 670
     * Bootbox event listeners; experimental and may not last                                                    // 671
     * just an attempt to decouple some behaviours from their                                                    // 672
     * respective triggers                                                                                       // 673
     */                                                                                                          // 674
                                                                                                                 // 675
    if (options.backdrop !== "static") {                                                                         // 676
      // A boolean true/false according to the Bootstrap docs                                                    // 677
      // should show a dialog the user can dismiss by clicking on                                                // 678
      // the background.                                                                                         // 679
      // We always only ever pass static/false to the actual                                                     // 680
      // $.modal function because with `true` we can't trap                                                      // 681
      // this event (the .modal-backdrop swallows it)                                                            // 682
      // However, we still want to sort of respect true                                                          // 683
      // and invoke the escape mechanism instead                                                                 // 684
      dialog.on("click.dismiss.bs.modal", function(e) {                                                          // 685
        // @NOTE: the target varies in >= 3.3.x releases since the modal backdrop                                // 686
        // moved *inside* the outer dialog rather than *alongside* it                                            // 687
        if (dialog.children(".modal-backdrop").length) {                                                         // 688
          e.currentTarget = dialog.children(".modal-backdrop").get(0);                                           // 689
        }                                                                                                        // 690
                                                                                                                 // 691
        if (e.target !== e.currentTarget) {                                                                      // 692
          return;                                                                                                // 693
        }                                                                                                        // 694
                                                                                                                 // 695
        dialog.trigger("escape.close.bb");                                                                       // 696
      });                                                                                                        // 697
    }                                                                                                            // 698
                                                                                                                 // 699
    dialog.on("escape.close.bb", function(e) {                                                                   // 700
      if (callbacks.onEscape) {                                                                                  // 701
        processCallback(e, dialog, callbacks.onEscape);                                                          // 702
      }                                                                                                          // 703
    });                                                                                                          // 704
                                                                                                                 // 705
    /**                                                                                                          // 706
     * Standard jQuery event listeners; used to handle user                                                      // 707
     * interaction with our dialog                                                                               // 708
     */                                                                                                          // 709
                                                                                                                 // 710
    dialog.on("click", ".modal-footer button", function(e) {                                                     // 711
      var callbackKey = $(this).data("bb-handler");                                                              // 712
                                                                                                                 // 713
      processCallback(e, dialog, callbacks[callbackKey]);                                                        // 714
    });                                                                                                          // 715
                                                                                                                 // 716
    dialog.on("click", ".bootbox-close-button", function(e) {                                                    // 717
      // onEscape might be falsy but that's fine; the fact is                                                    // 718
      // if the user has managed to click the close button we                                                    // 719
      // have to close the dialog, callback or not                                                               // 720
      processCallback(e, dialog, callbacks.onEscape);                                                            // 721
    });                                                                                                          // 722
                                                                                                                 // 723
    dialog.on("keyup", function(e) {                                                                             // 724
      if (e.which === 27) {                                                                                      // 725
        dialog.trigger("escape.close.bb");                                                                       // 726
      }                                                                                                          // 727
    });                                                                                                          // 728
                                                                                                                 // 729
    // the remainder of this method simply deals with adding our                                                 // 730
    // dialogent to the DOM, augmenting it with Bootstrap's modal                                                // 731
    // functionality and then giving the resulting object back                                                   // 732
    // to our caller                                                                                             // 733
                                                                                                                 // 734
    $(options.container).append(dialog);                                                                         // 735
                                                                                                                 // 736
    dialog.modal({                                                                                               // 737
      backdrop: options.backdrop ? "static": false,                                                              // 738
      keyboard: false,                                                                                           // 739
      show: false                                                                                                // 740
    });                                                                                                          // 741
                                                                                                                 // 742
    if (options.show) {                                                                                          // 743
      dialog.modal("show");                                                                                      // 744
    }                                                                                                            // 745
                                                                                                                 // 746
    // @TODO should we return the raw element here or should                                                     // 747
    // we wrap it in an object on which we can expose some neater                                                // 748
    // methods, e.g. var d = bootbox.alert(); d.hide(); instead                                                  // 749
    // of d.modal("hide");                                                                                       // 750
                                                                                                                 // 751
   /*                                                                                                            // 752
    function BBDialog(elem) {                                                                                    // 753
      this.elem = elem;                                                                                          // 754
    }                                                                                                            // 755
                                                                                                                 // 756
    BBDialog.prototype = {                                                                                       // 757
      hide: function() {                                                                                         // 758
        return this.elem.modal("hide");                                                                          // 759
      },                                                                                                         // 760
      show: function() {                                                                                         // 761
        return this.elem.modal("show");                                                                          // 762
      }                                                                                                          // 763
    };                                                                                                           // 764
    */                                                                                                           // 765
                                                                                                                 // 766
    return dialog;                                                                                               // 767
                                                                                                                 // 768
  };                                                                                                             // 769
                                                                                                                 // 770
  exports.setDefaults = function() {                                                                             // 771
    var values = {};                                                                                             // 772
                                                                                                                 // 773
    if (arguments.length === 2) {                                                                                // 774
      // allow passing of single key/value...                                                                    // 775
      values[arguments[0]] = arguments[1];                                                                       // 776
    } else {                                                                                                     // 777
      // ... and as an object too                                                                                // 778
      values = arguments[0];                                                                                     // 779
    }                                                                                                            // 780
                                                                                                                 // 781
    $.extend(defaults, values);                                                                                  // 782
  };                                                                                                             // 783
                                                                                                                 // 784
  exports.hideAll = function() {                                                                                 // 785
    $(".bootbox").modal("hide");                                                                                 // 786
                                                                                                                 // 787
    return exports;                                                                                              // 788
  };                                                                                                             // 789
                                                                                                                 // 790
                                                                                                                 // 791
  /**                                                                                                            // 792
   * standard locales. Please add more according to ISO 639-1 standard. Multiple language variants are           // 793
   * unlikely to be required. If this gets too large it can be split out into separate JS files.                 // 794
   */                                                                                                            // 795
  var locales = {                                                                                                // 796
    bg_BG : {                                                                                                    // 797
      OK      : "Ок",                                                                                            // 798
      CANCEL  : "Отказ",                                                                                         // 799
      CONFIRM : "Потвърждавам"                                                                                   // 800
    },                                                                                                           // 801
    br : {                                                                                                       // 802
      OK      : "OK",                                                                                            // 803
      CANCEL  : "Cancelar",                                                                                      // 804
      CONFIRM : "Sim"                                                                                            // 805
    },                                                                                                           // 806
    cs : {                                                                                                       // 807
      OK      : "OK",                                                                                            // 808
      CANCEL  : "Zrušit",                                                                                        // 809
      CONFIRM : "Potvrdit"                                                                                       // 810
    },                                                                                                           // 811
    da : {                                                                                                       // 812
      OK      : "OK",                                                                                            // 813
      CANCEL  : "Annuller",                                                                                      // 814
      CONFIRM : "Accepter"                                                                                       // 815
    },                                                                                                           // 816
    de : {                                                                                                       // 817
      OK      : "OK",                                                                                            // 818
      CANCEL  : "Abbrechen",                                                                                     // 819
      CONFIRM : "Akzeptieren"                                                                                    // 820
    },                                                                                                           // 821
    el : {                                                                                                       // 822
      OK      : "Εντάξει",                                                                                       // 823
      CANCEL  : "Ακύρωση",                                                                                       // 824
      CONFIRM : "Επιβεβαίωση"                                                                                    // 825
    },                                                                                                           // 826
    en : {                                                                                                       // 827
      OK      : "OK",                                                                                            // 828
      CANCEL  : "Cancel",                                                                                        // 829
      CONFIRM : "OK"                                                                                             // 830
    },                                                                                                           // 831
    es : {                                                                                                       // 832
      OK      : "OK",                                                                                            // 833
      CANCEL  : "Cancelar",                                                                                      // 834
      CONFIRM : "Aceptar"                                                                                        // 835
    },                                                                                                           // 836
    et : {                                                                                                       // 837
      OK      : "OK",                                                                                            // 838
      CANCEL  : "Katkesta",                                                                                      // 839
      CONFIRM : "OK"                                                                                             // 840
    },                                                                                                           // 841
    fa : {                                                                                                       // 842
      OK      : "قبول",                                                                                          // 843
      CANCEL  : "لغو",                                                                                           // 844
      CONFIRM : "تایید"                                                                                          // 845
    },                                                                                                           // 846
    fi : {                                                                                                       // 847
      OK      : "OK",                                                                                            // 848
      CANCEL  : "Peruuta",                                                                                       // 849
      CONFIRM : "OK"                                                                                             // 850
    },                                                                                                           // 851
    fr : {                                                                                                       // 852
      OK      : "OK",                                                                                            // 853
      CANCEL  : "Annuler",                                                                                       // 854
      CONFIRM : "D'accord"                                                                                       // 855
    },                                                                                                           // 856
    he : {                                                                                                       // 857
      OK      : "אישור",                                                                                         // 858
      CANCEL  : "ביטול",                                                                                         // 859
      CONFIRM : "אישור"                                                                                          // 860
    },                                                                                                           // 861
    hu : {                                                                                                       // 862
      OK      : "OK",                                                                                            // 863
      CANCEL  : "Mégsem",                                                                                        // 864
      CONFIRM : "Megerősít"                                                                                      // 865
    },                                                                                                           // 866
    hr : {                                                                                                       // 867
      OK      : "OK",                                                                                            // 868
      CANCEL  : "Odustani",                                                                                      // 869
      CONFIRM : "Potvrdi"                                                                                        // 870
    },                                                                                                           // 871
    id : {                                                                                                       // 872
      OK      : "OK",                                                                                            // 873
      CANCEL  : "Batal",                                                                                         // 874
      CONFIRM : "OK"                                                                                             // 875
    },                                                                                                           // 876
    it : {                                                                                                       // 877
      OK      : "OK",                                                                                            // 878
      CANCEL  : "Annulla",                                                                                       // 879
      CONFIRM : "Conferma"                                                                                       // 880
    },                                                                                                           // 881
    ja : {                                                                                                       // 882
      OK      : "OK",                                                                                            // 883
      CANCEL  : "キャンセル",                                                                                         // 884
      CONFIRM : "確認"                                                                                             // 885
    },                                                                                                           // 886
    lt : {                                                                                                       // 887
      OK      : "Gerai",                                                                                         // 888
      CANCEL  : "Atšaukti",                                                                                      // 889
      CONFIRM : "Patvirtinti"                                                                                    // 890
    },                                                                                                           // 891
    lv : {                                                                                                       // 892
      OK      : "Labi",                                                                                          // 893
      CANCEL  : "Atcelt",                                                                                        // 894
      CONFIRM : "Apstiprināt"                                                                                    // 895
    },                                                                                                           // 896
    nl : {                                                                                                       // 897
      OK      : "OK",                                                                                            // 898
      CANCEL  : "Annuleren",                                                                                     // 899
      CONFIRM : "Accepteren"                                                                                     // 900
    },                                                                                                           // 901
    no : {                                                                                                       // 902
      OK      : "OK",                                                                                            // 903
      CANCEL  : "Avbryt",                                                                                        // 904
      CONFIRM : "OK"                                                                                             // 905
    },                                                                                                           // 906
    pl : {                                                                                                       // 907
      OK      : "OK",                                                                                            // 908
      CANCEL  : "Anuluj",                                                                                        // 909
      CONFIRM : "Potwierdź"                                                                                      // 910
    },                                                                                                           // 911
    pt : {                                                                                                       // 912
      OK      : "OK",                                                                                            // 913
      CANCEL  : "Cancelar",                                                                                      // 914
      CONFIRM : "Confirmar"                                                                                      // 915
    },                                                                                                           // 916
    ru : {                                                                                                       // 917
      OK      : "OK",                                                                                            // 918
      CANCEL  : "Отмена",                                                                                        // 919
      CONFIRM : "Применить"                                                                                      // 920
    },                                                                                                           // 921
    sq : {                                                                                                       // 922
      OK : "OK",                                                                                                 // 923
      CANCEL : "Anulo",                                                                                          // 924
      CONFIRM : "Prano"                                                                                          // 925
    },                                                                                                           // 926
    sv : {                                                                                                       // 927
      OK      : "OK",                                                                                            // 928
      CANCEL  : "Avbryt",                                                                                        // 929
      CONFIRM : "OK"                                                                                             // 930
    },                                                                                                           // 931
    th : {                                                                                                       // 932
      OK      : "ตกลง",                                                                                          // 933
      CANCEL  : "ยกเลิก",                                                                                        // 934
      CONFIRM : "ยืนยัน"                                                                                         // 935
    },                                                                                                           // 936
    tr : {                                                                                                       // 937
      OK      : "Tamam",                                                                                         // 938
      CANCEL  : "İptal",                                                                                         // 939
      CONFIRM : "Onayla"                                                                                         // 940
    },                                                                                                           // 941
    zh_CN : {                                                                                                    // 942
      OK      : "OK",                                                                                            // 943
      CANCEL  : "取消",                                                                                            // 944
      CONFIRM : "确认"                                                                                             // 945
    },                                                                                                           // 946
    zh_TW : {                                                                                                    // 947
      OK      : "OK",                                                                                            // 948
      CANCEL  : "取消",                                                                                            // 949
      CONFIRM : "確認"                                                                                             // 950
    }                                                                                                            // 951
  };                                                                                                             // 952
                                                                                                                 // 953
  exports.addLocale = function(name, values) {                                                                   // 954
    $.each(["OK", "CANCEL", "CONFIRM"], function(_, v) {                                                         // 955
      if (!values[v]) {                                                                                          // 956
        throw new Error("Please supply a translation for '" + v + "'");                                          // 957
      }                                                                                                          // 958
    });                                                                                                          // 959
                                                                                                                 // 960
    locales[name] = {                                                                                            // 961
      OK: values.OK,                                                                                             // 962
      CANCEL: values.CANCEL,                                                                                     // 963
      CONFIRM: values.CONFIRM                                                                                    // 964
    };                                                                                                           // 965
                                                                                                                 // 966
    return exports;                                                                                              // 967
  };                                                                                                             // 968
                                                                                                                 // 969
  exports.removeLocale = function(name) {                                                                        // 970
    delete locales[name];                                                                                        // 971
                                                                                                                 // 972
    return exports;                                                                                              // 973
  };                                                                                                             // 974
                                                                                                                 // 975
  exports.setLocale = function(name) {                                                                           // 976
    return exports.setDefaults("locale", name);                                                                  // 977
  };                                                                                                             // 978
                                                                                                                 // 979
  exports.init = function(_$) {                                                                                  // 980
    return init(_$ || $);                                                                                        // 981
  };                                                                                                             // 982
                                                                                                                 // 983
  return exports;                                                                                                // 984
}));                                                                                                             // 985
                                                                                                                 // 986
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 995
                                                                                                                       // 996
}).call(this);                                                                                                         // 997
                                                                                                                       // 998
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['mizzao:bootboxjs'] = {};

})();
