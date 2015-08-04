Template.layout.onRendered(function(){
	$('.collapsible').collapsible({
      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });

    $(".button-collapse").sideNav();

    
    // hover and unhover yong ning ward 
   	$("#yongNingWard_small").hover(function(){
   		$("#yongNingWard_small").css({"margin-left":"650px", "margin-top":"860px", "height":"75px", "width":"145px"});  			
   		$("#yongNingWard_text").show();
   	},function(){
   		$("#yongNingWard_small").css({"margin-left":"670px", "margin-top":"870px", "height":"55px","width":"105px"},100);
   		$("#yongNingWard_text").hide();
   	});

   	// when clicking on yong ning ward
   	$("#yongNingWard_small").click(function(){
		$("#yongNingWard_text").hide();
		$(".yongNingWard_showables").show();
		$("#yongNingWard_small").animate({marginLeft:"270px",marginTop:"670px",height:"455px",width:"905px"},100,function(){
			// after it's blown to max size, detect mouse leave
			$("#yongNingWard_small").mouseleave(function(){
				$("#yongNingWard_small").css({"margin-left":"670px", "margin-top":"870px", "height":"55px","width":"105px"},100);
				$(".yongNingWard_showables").hide();
			})
		});
	});


});

Template.layout.events({
	"click #yongNingWard_callSlide":function(){
		$("#slideIn").animate({width:"1050px", marginLeft:"115px"},200);
	},

});