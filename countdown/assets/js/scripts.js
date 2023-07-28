$(document).ready(function(){
	  $('#getting-started').countdown('2021/01/01', function(event) {
    $(this).html(event.strftime(''
      +'<div class="count"><h1>%w</h1><h3>weeks</h3></div>'
      +'<div class="count"><h1>%d</h1><h3>days</h3></div>'
      +'<div class="count"><h1>%H</h1><h3>hour</h3></div>'
      +'<div class="count"><h1>%M</h1><h3>min</h3></div>'
      +'<div class="count"><h1>%S</h1><h3>second</h3></div>'


      ));
  });
});