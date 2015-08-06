Router.configure({
	loadingTemplate:"loading",
	notFoundTemplate:"notFound",
	layoutTemplate:'layout'
});

Router.route('/',{
	name:'empty',
	template:'empty',
	onBeforeAction:function(){
		$("#slideIn").fadeOut(1000);
	}
});


Router.route('/yongningward',{
	name:'yongNingWard',
	yieldRegions:{
		"yongNingWard": {to: "rightside"}
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
		$("#slideIn").fadeIn(1000);
		$("#blackScreen").fadeOut(1000);
	},
	
});

Router.route('/yongningward/animation',{
	name:"yongNing_animation",
	// yieldRegions:{
	// 	"yongNing_animation":{to: "animationWrapper"},
	// 	"yongNingWard": {to: "rightside"}
	// },
	// load data
	// data:function(){
	// 	return [
	// 		Meteor.subscribe("yongNing")
	// 	];
	// },
	// animation
	onBeforeAction: function () {
		$("#blackScreen").fadeIn(1000);	
	}
});