/*jslint browser: true, white: true */
/*global jQuery */

/**
 * @license jQuery Common Parent v0.2.0
 * http://github.com/philipnrmn/jquery-commonparent
 * 
 * Copyright (c) 2013 Philip Norman
 * Dual licensed under the MIT and GPL licenses.
 */

(function($) {
    'use strict';
    $.fn.commonParent = function() {
        
        var parents = this.first().parents();
        
        this.slice(1).each(function(index, element) {
            while (parents.length > 0) {
                if (parents.first().has(element).length > 0) {
                    return;
                }
                parents.splice(0, 1);
            }
        });
        
        return this.pushStack(parents.first());
        
    };
}(jQuery));
