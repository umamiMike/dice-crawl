diceCrawl.directive('draggableThing', function(){
  return{
    restrict: 'E',
    link: function(scope,element,attr,ctrl){
      elem.bind('dragstart',function(e){
      console.log(e)
      })

    }
  }
});

diceCrawl.directive('droppableArea', function() {
   return {
       restrict: 'E',
       link: function(scope, elem, attr, ctrl) {
            elem.bind('drop', function(e) {
                /* do something here */
                console.log("Drug sompn in here");
            });
       }
   };
});
