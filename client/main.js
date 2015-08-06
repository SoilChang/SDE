onYouTubeIframeAPIReady = function () {
    // New Video Player, the first argument is the id of the div.
    // Make sure it's a global variable.
    player = new YT.Player("yongNing_avi", {
        height: "400", 
        width: "600", 
        videoId: "R_Xiu6b4LKc", 
        events: {
            onReady: function (event) {
                event.target.playVideo();
            }
        }
    });

    player = new YT.Player("i_yongNing_avi", {
        height: "200", 
        width: "300", 
        videoId: "mIOMRiQaB-U", 
        events: {
            onReady: function (event) {
                event.target.playVideo();
            }
        }
    });
};

YT.load();