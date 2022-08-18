$(document).ready(function(){

    var flowers = ["rose","lotus","lily","marigold"]
    
     $( "#input_ID").autocomplete({
        source: flowers
     });
  });
