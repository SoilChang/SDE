Template.layout.onRendered(function(){
	$('.collapsible').collapsible({
      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });

    $(".button-collapse").sideNav();

    // this is to link text and patch together on hover
    $("#yongNing_name,#yongNing_patch").hover(function(){
    	$('#yongNing_patch').css({"background-color":"rgba(255, 255, 255,0.5)"});
    	$("#yongNing_name").css({"cursor":"pointer","font-size":"25px", "color":"red"});
    },function(){
    	$('#yongNing_patch').css({"background-color":"rgba(255, 255, 255,0)"});
    	$("#yongNing_name").css({"cursor":"auto","font-size":"20px", "color":"black"});
    });

    // if clicked, call the slide in
 	$("#yongNing_name,#yongNing_patch").click(function(){
 		$("#slideIn").animate({"height":"710", "width":"670px"},1000);

 	});

});

Template.layout.events({
	

});