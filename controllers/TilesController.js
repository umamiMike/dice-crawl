diceCrawl.controller('TilesCtrl', function TilesCtrl($scope, TilesFactory, GamesFactory){
    $scope.TilesFactory = TilesFactory;
    $scope.players = GamesFactory.players;
   $scope.allTiles = TilesFactory.tiles;
   $scope.tiles = [];
    $scope.getTiles=function(n){
        return new Array(n);
    };
//a function to randomly pull from the deck of tile cards
    $scope.randomSelectDelete=function(selectedArray) {
      var randomNumber = Math.floor((Math.random() * selectedArray.length));
      var selectedItem = selectedArray[randomNumber];
      selectedArray.splice(selectedArray.indexOf(selectedItem), 1);

      return selectedItem;
    }

    $scope.initTiles = function (){
          for (var i = 0; i < 25; ++i ) {
            //select a card from the deck
             var myTile = $scope.randomSelectDelete($scope.allTiles);
            //and push it into the board
            $scope.tiles.push(myTile);
            console.log("init tiles function myTile is: "+myTile);

        }//end for
        //add the dragon into the central spot
            $scope.tiles.splice(12,0, TilesFactory.dragon);
      }//end init

    $scope.dragon = TilesFactory.dragon;

    $scope.treasure = "<div class='treasure'></div>";

});
