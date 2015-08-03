Template.layout.onRendered(function(){
	$('.collapsible').collapsible({
      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });

    $("#callSlideIn").click(function(){
    	$("#slideIn").animate({width:"1000px", marginLeft:"200px"},2000);
    });

    $("#slideBack").click(function(){
    	$("#slideIn").animate({width:"0px", marginLeft:"1100px"}, 2000);
    });
});