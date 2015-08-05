Template.yongNingWard.events({
	"click #back":function(){
		$("#slideIn").animate({"height":"0px", "width":"0px"},1000);
	}
})

Template.yongNingWard.helpers({
	loadExplanation:function(){
		return YongNing.find({name:"explanation"});
	}
})

