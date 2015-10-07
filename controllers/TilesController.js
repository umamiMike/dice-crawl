diceCrawl.controller('TilesCtrl', function TilesCtrl($scope, TilesFactory, GamesFactory){
    $scope.TilesFactory = TilesFactory;
    $scope.getTiles=function(n){
        return new Array(n);
    };
    function shuffle(o){
      for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
      o.splice(12,0, TilesFactory.dragon);
      return o;
    }
    $scope.tiles = shuffle(TilesFactory.tiles);

    $scope.dragon = TilesFactory.dragon;




});
