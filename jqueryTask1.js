$(document).ready(function(){
    $('#match').click(function()
    {
      // alert("dcsd");
     var passwd=$('#pswd').val();  
  //    console.log(passwd);
  var cfPswd=$('#cfpaswd').val();
  if(passwd!=cfPswd){
    // alert("password is not match");
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