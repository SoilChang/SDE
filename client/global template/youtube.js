onYouTubeIframeAPIReady = function () {
    // New Video Player, the first argument is the id of the div.
    // Make sure it's a global variable.
    player = new YT.Player("chillin", {
        height: "400", 
        width: "600", 
        videoId: "XQpTTTdzGjA", 
        events: {
            onReady: function (event) {
                event.target.playVideo();
            }
        }
    });
};

YT.load();