/*
 * html5form
 * http://www.matiasmancini.com.ar/jquery-plugin-ajax-form-validation-html5.html
 *
 * Copyright (c) 2013 Matias Mancini
 * Licensed under the MIT license.
 */

;(function ($, window, document, undefined) {

    var pluginName = "html5form";
    var defaults = {};

    function Plugin(element, options) {
        this.element = element;
        this.options = $.extend({}, defaults, options);
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }

    Plugin.prototype = {
        init: function () {
            // code goes here
        }
    };

    $.fn[pluginName] = function (options) {
        return this.each(function () {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName, new Plugin(this, options));
            }
        });
    };

})(jQuery, window, document);

