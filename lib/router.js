Router.configure({
	loadingTemplate:"loading",
	notFoundTemplate:"notFound",
	layoutTemplate:"layout",
});

Router.route('/',{
	name:"layout",
	template: "layout"
})