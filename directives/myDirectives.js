var i = 0;


diceCrawl.directive("togglePlacePlayer", function(placePlayerButton) {
    return {
            link: function (scope, element, attrs) {
                element.bind("click", function() {
                    placePlayerButton.shared ? placePlayerButton.shared-=1 : placePlayerButton.shared+=1;
                    placePlayerButton.color = attrs.togglePlacePlayer;
                    element.toggleClass("btn-info");
            });
        }
    };
});

diceCrawl.directive("placePlayer", function(placePlayerButton) {
    return {
        link: function (scope, element, attrs) {
            element.bind("click", function() {
                if (placePlayerButton.shared) {
                    if (placePlayerButton.color == "blue"){
                        angular.element('.tile-'+attrs.placePlayer).closest('.playerdefault-blue').toggleClass("hide");
                    } else if (placePlayerButton.color == "green"){
                        angular.element('.tile-'+attrs.placePlayer).closest('.playerdefault-green').toggleClass("hide");
                    } else if (placePlayerButton.color == "red"){
                        angular.element('.tile-'+attrs.placePlayer).closest('.playerdefault-red').toggleClass("hide");
                    } else if (placePlayerButton.color == "yellow"){
                        angular.element('.tile-'+attrs.placePlayer).closest('.playerdefault-yellow').toggleClass("hide");
                    }
                }
            });
        }
    };
});

diceCrawl.directive ("diceToRoll",function(){
    return{
        restrict: "E",
        scope:{
          roll: "&"
    },
        template:'<button action="rollDice()">Roll The Dice</button>'
    };
});

diceCrawl.directive("debug",function($compile){
  return{
    terminal: true,
    priority: 100000,
    link: function (scope, element){
      var clone = element.clone();
      element.attr("style","color:red");
      clone.removeAttr("debug");
      var clonedElement = $compile(clone)(scope);
      element.after(clonedElement);
    }
};
});

diceCrawl.directive('bgImg', function(){
    return function(scope, element, attrs){
        var url = attrs.bgImg;
        element.css({
            'background-image': 'url(' + url +')',
            'background-size' : 'cover'
        });
    };
});

diceCrawl.directive("togglePlaceDie", function(placeDieButton) {
    return {
            link: function (scope, element) {
                element.bind("click", function() {
                  placeDieButton.shared ? placeDieButton.shared-=1 : placeDieButton.shared+=1;
                    element.toggleClass("btn-warning");
            });
        }
    };
});

diceCrawl.directive("dieImage", function(placeDieButton, grabDieImage) {
    return {
        link: function (scope, element, attrs) {
            element.bind("click", function() {
                if (placeDieButton.shared) {
                    grabDieImage.dieimage = attrs.dieImage;
                    console.log(grabDieImage.dieimage);
                }
            });
        }
    };
});

diceCrawl.directive("placeDie", function(placeDieButton, grabDieImage) {
    return {
        link: function (scope, element) {
            element.bind("click", function() {
                if (placeDieButton.shared) {
                    element.remove();
                }
            });
        }
    };
});

diceCrawl.directive("dieTarget", function(placeDieButton, grabDieImage) {
    return {
        link: function (scope, element) {
            element.bind("click", function() {
                if (placeDieButton.shared) {
                    element.append("<img class='dice-rolled' src='"+grabDieImage.dieimage+"'>");
                    scope.$apply(function() {
                        scope.player.diceCount--;
                    });
                }
            });
        }
    };
});
