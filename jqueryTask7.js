var flowers = ["rose","lotus","lily","marigold"];
$(document).ready(function(){
   
     $("input").keyup(function(){

      var matchItem="";
      for(i=0;i<=flowers.length;i++)
      { 
         var value=$("#inptID").val();
         $match=flowers[i].substring(0,value.length);
         if($match==value)
         {
            matchItem+=" "+flowers[i];
         }
         $("#sugestion").html(matchItem);
      }



     })
  });
