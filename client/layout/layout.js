Template.layout.onRendered(function(){
	$('.collapsible').collapsible({
      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });

    $(".button-collapse").sideNav();

    

   	$("#yongNingWard").hover(function(){
   		$("#yongNingWard").animate({marginLeft:"-=20px", marginTop:"-=10px", height:"+=20px", width:"+=40px"},100,function(){
   			$("#yongNingWard_text").show();
   			$("#yongNingWard").click(function(){
   				$("#yongNingWard_text").hide();
   				$("#yongNingWard").animate({marginLeft:"270px",marginTop:"670px",height:"455px",width:"905px"},200);
   				$("#yongNingWard_button").show();
   			})
   		});
   		
   	},
   	function(){
   		$("#yongNingWard").animate({marginLeft:"670px", marginTop:"870px", height:"55px",width:"105px"},100);
   		$("#yongNingWard_text").hide();
   		$("#yongNingWard_button").hide();
   	});

   	$("#yongNingWard_button").click(function(){
   		
   	})

});

Template.layout.events({
	"click #yongNingWard_button":function(){
		$("#slideIn").animate({width:"1100px", marginLeft:"90px"},200);
	},

});