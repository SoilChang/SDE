Router.configure({
	loadingTemplate:"loading",
	notFoundTemplate:"notFound",
	layoutTemplate:'layout'
});

Router.route('/',{
	name:'layout',
	template:'empty'
});

Router.route('/yongningward',{
	name:'yongNingWard',
	template:'yongNingWard'
});