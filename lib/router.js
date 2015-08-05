Router.configure({
	loadingTemplate:"loading",
	notFoundTemplate:"notFound",
	layoutTemplate:'layout'
});

Router.route('/',{
	name:'empty',
	template:'empty'
});


Router.route('/yongningward',{
	name:'yongNingWard',
	template:'yongNingWard',
	waitOn:function(){
		return Meteor.subscribe("yongNing");
	},
	data:function(){
		return Meteor.subscribe("yongNing");
	}
});