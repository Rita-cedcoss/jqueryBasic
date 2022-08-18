$(document).ready(function(){
    $('#match').click(function()
    {
     
     var passwd=$('#pswd').val();  

      var cfPswd=$('#cfpaswd').val();
    if(passwd!=cfPswd){
    
    $('#display').html('password is not match');

   }
   else
   {
    $('#display').html('data is successfuly submited');
    $('#pswd').val('');
    $('#cfpaswd').val('');
   }
   })


})