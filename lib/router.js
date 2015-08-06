Router.configure({
	loadingTemplate:"loading",
	notFoundTemplate:"notFound",
	layoutTemplate:'layout'
});

Router.route('/',{
	name:'empty',
	template:'empty',
	onBeforeAction:function(){
		$("#slideIn").animate({"height":"0px", "width":"0px"},1000);
		$("#blackScreen").fadeOut(1000);
		$("#gallery").fadeOut(1000);
	}
});


Router.route('/yongningward',{
	name:'yongNingWard',
	yieldRegions:{
		"yongNingWard": {to: "rightside"},
		"empty":{to: "animationWrapper"}
	},
	waitOn:function(){
		return Meteor.subscribe("yongNing");
	},
	// load data
	data:function(){
		return [
			Meteor.subscribe("yongNing")
		];
	},
	// animation
	onBeforeAction: function () {
		$("#slideIn").animate({"height":"710", "width":"670px"},1000);
		$("#blackScreen").fadeOut(1000);
		$("#gallery").fadeOut(1000);
		this.next();
	},
	
});


// yong ning animation
Router.route("/yongningward/animation",{
	name:"yongNingWard_animation",
	yieldRegions:{
		"yongNingWard": {to: "rightside"},
		"yongNing_animation":{to: "animationWrapper"}
	},
	// load data
	data:function(){
		return [
			Meteor.subscribe("yongNing")
		];
	},
	onBeforeAction:function(){
		$("#blackScreen").fadeIn(1000);
		$("#gallery").fadeOut(1000);
		// check if the object is already initialised
		this.next();
	},
	onStop:function(){
		player1.stopVideo();
    	player2.stopVideo();
	}
});


//  yong ning gallery
Router.route("/yongningward/gallery",{
	name:"yongNingWard_gallery",
	yieldRegions:{
		"yongNing_gallery":{to: 'gallery'}
	},
	onBeforeAction:function(){
		$("#gallery").fadeIn(1000);
		this.next();
	}
});