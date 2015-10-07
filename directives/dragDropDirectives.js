diceCrawl.directive('draggable', function() {
    return function(scope, element) {
        // this gives us the native JS object
        var el = element[0];
        console.log(el);
        el.draggable = true;

        el.addEventListener(
            'dragstart',
            function(e) {
                e.dataTransfer.effectAllowed = 'move';
                e.dataTransfer.setData('Text', this.id);
                this.classList.add('drag');
                return false;
console.log(this);
            },
            false
        );

        el.addEventListener(
            'dragend',
            function(e) {
                this.classList.remove('drag');
                return false;
            },
            false
        );
    }
});


diceCrawl.directive('droppable', function() {
  return {
    scope: {
      drop: '&'
    },
    link: function(scope, element) {
      var el = element[0];
  console.log(el);
    el.addEventListener(
      'dragover',
      function(e){
        e.dataTransfer.dropEffect = 'move';
        if (e.preventDefault) e.preventDefault();
        this.classList.add('over');
        return false;
      },
      false
    );

    el.addEventListener(
    'dragenter',
    function(e) {
        this.classList.add('over');
        return false;
    },
    false
);


    el.addEventListener(
      'dragleave',
      function(e){
        this.classList.remove('over');
        return false;
      },
      false
    );

    el.addEventListener(
    'drop',
    function(e) {
        // Stops some browsers from redirecting.
        if (e.stopPropagation) e.stopPropagation();

        this.classList.remove('over');

        // var item = document.getElementById(e.dataTransfer.getData('Text'));
        var item = '<div> I am balls </div>';
    console.log("the item in drop event listener is: " + item);
        this.appendChild(item);

        scope.apply('drop()');

        return false;
    },
    false
);

    }//end link function

  }//end return
});
