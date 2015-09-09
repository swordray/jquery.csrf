(function($) {
  $(document).ajaxSend(function(e, xhr, options) {
    var token = $('meta[name="csrf-token"]').attr('content');
    if (token) xhr.setRequestHeader('X-CSRF-Token', token);
  });
})(jQuery);
