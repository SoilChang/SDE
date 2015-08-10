Router.configure({
	loadingTemplate:"loading",
	notFoundTemplate:"notFound",
	layoutTemplate:'layout',
	
});

Router.route("/",{
	name: 'home',
	yieldRegions:{
		"map":{to: "body"}
	}
});

Router.route("/yongningward",{
	name: 'yongningward',
	yieldRegions:{
		"map":{to: "body"},
		"yongningward": {to: "slideIn"}
	},
	waitOn:function(){
		return Meteor.subscribe("yongning");
	},
	data:function(){
		return Meteor.subscribe("yongning");
	},
	onBeforeAction:function(){
		
		this.next();
	}
});