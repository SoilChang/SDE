Router.configure({
	loadingTemplate:"loading",
	notFoundTemplate:"notFound",
	layoutTemplate:'layout'
});

Router.route('/',{
	name:'empty',
	template:'empty',
	data:function(){
		return [$("#slideIn").animate({"height":"0px", "width":"0px"},1000)];
	}
});


Router.route('/yongningward',{
	name:'yongNingWard',
	template:'yongNingWard',
	waitOn:function(){
		return Meteor.subscribe("yongNing");
	},
	data:function(){
		return [Meteor.subscribe("yongNing"),
				$("#slideIn").animate({"height":"710", "width":"670px"},1000)];
	}
});