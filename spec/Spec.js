/*jslint browser: true, white: true, sloppy: true */

describe('jQuery common parent plugin', function() {
    
    var listItems, listItemsParent, orderedList, orderedListItems;
    
    beforeEach(function() {
        loadFixtures('fixture.html');
        listItems = $('#jasmine-fixtures li');
        listItemsParent = $('#jasmine-fixtures .listItemsParent');
        orderedList = $('#jasmine-fixtures ol');
        orderedListItems = $('#jasmine-fixtures ol li');
    });
    
    it('pushes the original jQuery object to the stack for chaining', function() {
        expect(listItems.commonParent().end()).toBe(listItems);
    });
    
    it('returns the common parent of elements at the same DOM level', function() {
        expect(orderedListItems.commonParent()).toBe(orderedList);
    });
    
    it('returns the common parent of elements at a different DOM level', function() {
        expect(listItems.commonParent()).toBe(listItemsParent);
    });
    
    it('handles empty sets gracefully', function() {
        expect($('#jasmine-fixtures q').commonParent()).toHaveLength(0);
    });
    
    it('handles non-DOM selectors gracefully', function() {
        expect($({}).commonParent()).toHaveLength(0);
    });
    
    it('handles mixed DOM and non-DOM selectors gracefully', function() {
        expect($({}).add(listItems).commonParent()).toHaveLength(0);
        expect(listItems.add($({})).commonParent()).toHaveLength(0);
    });
    
});
