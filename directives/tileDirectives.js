diceCrawl.directive("toggleRotateTile", function(rotateTileButton) {
    return {
            link: function (scope, element) {
                element.bind("click", function() {
                    rotateTileButton.shared ? rotateTileButton.shared-=1 : rotateTileButton.shared+=1;
                    element.toggleClass("btn-warning");
            });
        }
    };
});

diceCrawl.directive("rotateTile", function(rotateTileButton) {
    return {
        link: function (scope, element) {
            element.bind("click", function() {
                if (rotateTileButton.shared) {
                    if (i<4) {
                        i++;
                    } else {
                        i=1;
                    }
                    element.removeClass("rotate0");
                    element.removeClass("rotate1");
                    element.removeClass("rotate2");
                    element.removeClass("rotate3");
                    element.removeClass("rotate4");
                    element.addClass("rotate"+i);
                }
            });
        }
    };
});

diceCrawl.directive("toggleRevealTile", function(revealTileButton) {
    return {
            link: function (scope, element) {
                element.bind("click", function() {
                    revealTileButton.shared ? revealTileButton.shared-=1 : revealTileButton.shared+=1;
                    element.toggleClass("btn-warning");
            });
        }
    };
});

diceCrawl.directive("revealTile", function(revealTileButton) {
    return {
        link: function (scope, element) {
            element.bind("click", function() {
                if (revealTileButton.shared) {
                    element.removeClass("backside");
                    element.addClass("backside-off");
                }
            });
        }
    };
});
