Router.configure({
	loadingTemplate:"loading",
	notFoundTemplate:"notFound",
	layoutTemplate:'layout',
	data:function(){
		return Meteor.subscribe("yongNing");
	},
});

Router.route('/',{
	name:'map',
	yieldRegions:{
		"map":{to: 'firstBoard'}
	},
	onBeforeAction:function(){
		$("#slideIn").animate({"width":"0px","height":"0px"},500);
		this.next();
	}
});

Router.route('/yongningward',{
	name:'yongningward',
	yieldRegions:{
		"map":{to: 'firstBoard'},
		"yongNingWard": {to:'slideIn'}
	},
	waitOn:function(){
		return Meteor.subscribe("yongNing");
	},
	onBeforeAction:function(){
		$("#slideIn").animate({"width":"570px","height":"710px"},500);
		$("#firstBoard").animate({"width":"1270px"},1000);
		$("#leftBoard").animate({"width":"0px","margin-left":"1270px"},1000);

		this.next();
	}
});

Router.route("/yongningward/animation",{
	name: "yongning_animation",
	yieldRegions:{
		"map":{to: 'firstBoard'},
		"yongNingWard": {to:'slideIn'},
		"yongNing_animation":{to: "leftBoard"}
	},
	onBeforeAction:function(){
		$("#firstBoard").animate({"width":"0px"},1000);
		$("#leftBoard").animate({"width":"1270px","margin-left":"0"},1000);
		this.next();
	}
})

