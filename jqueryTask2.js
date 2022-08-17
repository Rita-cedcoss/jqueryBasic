$(document).ready(function()
    {
        
       $("#odd").click(function()
       {
        
        $("tbody tr:odd").css({
            "background-color": "red",
            color: "white",
          });


       })
       $("#even").click(function () {
          $("tbody tr:even").css({
            "background-color": "#00e673",
            color: "white",
          });
        });
     

    }
    
    )
