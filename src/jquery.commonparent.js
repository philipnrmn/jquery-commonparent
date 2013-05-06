/*jslint browser: true, white: true */
/*global jQuery */

/**
 * @license jQuery Common Parent v0.1.0
 * http://github.com/philipnrmn/jquery-commonparent
 * 
 * Copyright (c) 2013 Philip Norman
 * Dual licensed under the MIT and GPL licenses.
 */

(function($) {
    'use strict';
    $.fn.commonParent = function() {
        
        var parents = this.first().parents(),
            commonParent = $(parents.get(0));
        
        this.slice(1).each(function(index, element) {
            while ((commonParent.length > 0) && (commonParent.has(element).length < 1)) {
                index+=1;
                commonParent = $(parents.get(index));
            }
        });
        
        return this.pushStack(commonParent);
        
    };
}(jQuery));
