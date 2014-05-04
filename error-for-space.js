$( document ).ready(function() {
  // immediate function to remove from global namespace
  // TODO replace with namespace and pass in selector
  (function () {
    // selector on what input you want to check for untrimmed string
    var input_field = ".store-field-contact-company input[id$='company']",
        error_for_spaces = function() {
          var error_message = "Please remove preceding or following spaces from input",
              unclean_str = $(input_field).val();

          if (clear_str == $.trim(unclean_str)) {
            error_message = "";
          } 
          return error_message;
        };

    var display_message = error_for_spaces();
    if (display_message != "") {
      $(input_field).after(display_message);
    }
  }());
}); 

