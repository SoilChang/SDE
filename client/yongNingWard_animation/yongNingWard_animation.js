Template.yongNing_animation.onRendered(function(){
    onYouTubeIframeAPIReady = function () {
        // New Video Player, the first argument is the id of the div.
        // Make sure it's a global variable.
        var player1 = new YT.Player("yongNing_avi", {
            height: "300", 
            width: "450", 
            videoId: "iBX62jH732o", 
            events: {
                onReady: function (event) {
                    // Play video when player ready.
                    event.target.playVideo();
                }
                
            }
        });

        var player2 = new YT.Player("i_yongNing_avi", {
            height: "200", 
            width: "300", 
            videoId: "5It4g_xQSF0", 
            events: {
                onReady: function (event) {
                    // Play video when player ready.
                    event.target.playVideo();
                }
            }
        });
        
    };
    YT.load();
});

Template.yongNing_animation.helpers({
 
});

