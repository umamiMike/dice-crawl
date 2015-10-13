diceCrawl.controller('TilesCtrl', function TilesCtrl($scope, TilesFactory, GamesFactory){
    $scope.TilesFactory = TilesFactory;
    $scope.players = GamesFactory.players;
   $scope.allTiles = TilesFactory.tiles;
   $scope.tiles = [];
    $scope.getTiles=function(n){
        return new Array(n);
    };

    $scope.randomSelectDelete=function(selectedArray) {
      var randomNumber = Math.floor((Math.random() * selectedArray.length));
      var selectedItem = selectedArray[randomNumber];
      selectedArray.splice(selectedArray.indexOf(selectedItem), 1);

      return selectedItem;
    }

    $scope.initTiles = function (){
            var a=[],b=[],c=[],d=[],e=[];
          for (var i = 0; i < 25; ++i ) {
             var myTile = $scope.randomSelectDelete($scope.allTiles);
             myTile["dice"] = [];
             myTile["doors"] = [];

//what I want to do is have an array of 4 true or false statements like [true,true,false,false]
//starting at the top going in clockwise rotation
                if (myTile.type === 2){myTile.doors = [false,true,false,true]};
                if (myTile.type === 4){myTile.doors = [false,true,true,false]};
                if (myTile.type === 3){myTile.doors = [false,true,true,true]};
                if (myTile.type === 1){myTile.doors = [true,true,true,true]};

//am converting the type to an array
//multidimensional array time...each a b c d e are the rows...
            if (i % 5 == 0){a.push(myTile);}
            if (i % 5 == 1){b.push(myTile);}
            if (i % 5 == 2){c.push(myTile);}
            if (i % 5 == 3){d.push(myTile);}
            if (i % 5 == 4){e.push(myTile);}
        }//end for
        c[2] = TilesFactory.dragon;//putting the dragon where he goes.
            $scope.tiles.push(a,b,c,d,e);//pushing the rows into the tiles array (array of arrays now)
          console.log($scope.tiles);
      }//end init

    $scope.dragon = TilesFactory.dragon;

    $scope.treasure = "<div class='treasure'></div>";

});
