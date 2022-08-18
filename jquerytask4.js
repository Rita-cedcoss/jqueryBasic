$text="<div id='div'><input type='text'><input type='text'><input type='text'><input type='text'><button class='add'>+</button><button class='divdel'>-</button></div>";
    $("#outer").html($text); 
$(document).ready(function(){


$("#div").on('click','.add',function(){
   $(this).parent().append($text);
})
$("#div").on('click','.divdel',function(){
    $(this).parent().remove();
 })



})