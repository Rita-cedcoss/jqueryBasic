$(document).ready(function(){
    $("#price").html("2000");
    $("#price1").html("4000");
    $("#sel1").change(function(){
      var index=$("#sel1 option:selected").index();
      
      if(index==0)
      {
        $("#price").html("2000");
      }
      if(index==1)
      {
        $("#price").html("3000");
      }
      if(index==2)
      {
        $("#price").html("6000");
      }

      });

      $("#sel2").change(function(){
        var index=$("#sel2 option:selected").index();
        
        if(index==0)
        {
          $("#price1").html("4000");
        }
        if(index==1)
        {
          $("#price1").html("6000");
        }
        if(index==2)
        {
          $("#price1").html("3000");
        }
  
        });
})