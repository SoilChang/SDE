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
		// show first board && widen it
		$("#firstBoard").show();
		$("#firstBoard").animate({"width":"1270px"},1000);
		// shorten right board && hide it
		$("#rightBoard").css({"width":"0px","margin-left":"1300px"});
		$("#rightBoard").hide();

		this.next();
	}
});

Router.route("/yongningward/animation",{
	name: "yongning_animation",
	yieldRegions:{
		"map":{to: 'firstBoard'},
		"yongNingWard": {to:'slideIn'},
		"yongNing_animation":{to: "rightBoard"}
	},
	waitOn:function(){
		return Meteor.subscribe("yongNing");
	},
	onBeforeAction:function(){
		// hide first board and se the width to 0
		$("#firstBoard").hide();
		$("#firstBoard").css({"width":"0px"});
		// show right board and widen it
		$("#rightBoard").show();
	    $("#rightBoard").animate({"width":"1270px","margin-left":"0"},1000);
		this.next();
	},
	onStop:function(){
		var parent = document.getElementById("yongning_video");
        var player1 = document.getElementById("yongNing_avi");
        var player2 = document.getElementById("i_yongNing_avi");
        parent.removeChild(player1);
        parent.removeChild(player2);
	}

});

Router.route("/yongningward/gallery",{
	name:"yongning_gallery",
	yieldRegions:{
		"map":{to: 'firstBoard'},
		"yongNingWard": {to:'slideIn'},
		"yongNing_gallery":{to: "rightBoard"}
	},
	waitOn:function(){
		return Meteor.subscribe("yongNing");
	},
	onBeforeAction:function(){
		// hide first board and se the width to 0
		$("#firstBoard").hide();
		$("#firstBoard").css({"width":"0px"});
		// show right board and widen it
		$("#rightBoard").show();
	    $("#rightBoard").animate({"width":"1270px","margin-left":"0"},1000);
		this.next();
	}
})
