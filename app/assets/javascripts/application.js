// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap-sprockets
//= require bootstrap-material-design
//= require jquery.dropdown.js
//= jquery.cycle.all.js
//= require turbolinks
//= welcome.js
//= require_tree .



function dropdown(){
	$.material.init();
	$(".select").dropdown({"optionClass": "withripple"});
	$(".select").dropdown({autoinit: "select"});
	$("button").click(function() {
		
	  $("body").append("<select class=select><option>hey</option><option>hey</option></select>");
	});
}
ready = function() {
	
	var ready;
	var winHeight = $(window).height();
	var footerHeight = $('.footer-gcn').height();
	var finalHeight = winHeight-footerHeight;
	console.log(finalHeight);
	$(".wrapper-two").css('min-height', finalHeight);
	$(".wrapper").height(winHeight);
	var navHeight = $(".main-header").height();
	var sliderHeight = winHeight-navHeight;
	$(".pics").height(sliderHeight);
}

$(document).on('turbolinks:load', ready);
$(document).ready(ready);
$(document).bind('page:change', ready);

$(document).on('turbolinks:load', dropdown);
$(document).ready(dropdown);
$(document).bind('page:change', dropdown);