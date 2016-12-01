// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require bootstrap-sprockets
//= require jquery_ujs
//= require_tree .

$(document).ready(function() {
  // postClick();
  $('body').on('click', 'div.post-links a.like', function(e){
    e.preventDefault();
    var $t = $(this);
    console.log( $t.attr('href') )
    $.ajax({
      url: $t.attr('href'),
      type: 'POST'
    }).done(function(server_response){
      $t.siblings('.like_count').html(server_response)
   })
  })
})
	

// var postClick = function() {
// 	$("body").on("click", ".index-post-div", function(e) {
// 		var u = "/posts/" + $(this).data('id');
// 		window.location = u;
// 	});
// };
