Template.map.onRendered(function(){
	// sidebar javascript
	$('.button-collapse').sideNav({
      menuWidth: 300, // Default is 240
      edge: 'left', // Choose the horizontal origin
      closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
    });

	// initialisatin of scroll spy
    $('.scrollspy').scrollSpy();


    // yongning patch
    $("#yongning_name,#yongning_patch").hover(function(){
    	$('#yongning_name').css({"font-size":"25px"});
    	$("#yongning_patch").css({"opacity":"0.5"});
    },function(){
    	$('#yongning_name').css({"font-size":"20px"});
    	$("#yongning_patch").css({"opacity":"0.0"});
    });

});

Template.map.events({

	// click to trigger route
	"click #yongning_name,#yongning_patch":function(){
		Router.go('/yongningward');
	},
})