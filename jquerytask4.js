$text="<div id='div'><input placeholder='enter class' type='text'><input placeholder='enter board' type='text'><input placeholder='enter marks' type='text'><input placeholder='enter division' type='text'><button class='add'>+</button><button class='divdel'>-</button></div>";
    $("#outer").html($text); 
$(document).ready(function(){


$("#div").on('click','.add',function(){
   $(this).parent().append($text);
})
$("#div").on('click','.divdel',function(){
    $(this).parent().remove();
 })



})