$( document ).ready(function() {
  // immediate function to remove from global namespace
  // TODO replace with namespace and pass in line item selector and input selector
  (function () {
    
    var build_dropdowns = function() {
      var qty_input = ".store-order-item-action-quantity input";
      // loop thru each line item in the cart
      $(".store-action-list.store-order-item-group-action-list").each(function( index ) {
        var qty_value = $(this).find(qty_input).val(),
            html_string = '<select id="fs_qty_select_' + index + '">',
            this_qty_input = $(this).find(qty_input),
            this_qty_a = $(".store-order-item-action-quantity a");
        // hide qty input
        this_qty_input.css('display', 'none');        
        // create select and options
        for (var i = 1; i < 21; i++) {        
          if (i == qty_value) {
            html_string = html_string + '<option value="' + i + '" selected >' + i + '</option>';
          } else {
            html_string = html_string + '<option value="' + i + '">' + i + '</option>';
          };
        };
        // insert new select for qty
        html_string = html_string + '</select>';
        $(this).find(qty_input).after(html_string);
        // listen for changes to select and reload cart
        $("#fs_qty_select_" + index).change(function() {
          var qty_now = $(this).val();
          this_qty_input.val(qty_now);
          this_qty_a.trigger("click");
        });
      });
    };

    build_dropdowns();
  }());
}); 