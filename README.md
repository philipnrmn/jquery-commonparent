jquery-commonparent
===================

jQuery plugin which finds the common parent of a set of elements.

Example
-------
    
HTML:

    <form>
      <label>Type something <input type="text" /></label>
      <input type="button" />
    </form>
    
Javascript:

    // Returns the form
    $('input').commonParent();
    // Returns the label
    $('input[type=text]').commonParent();
    
