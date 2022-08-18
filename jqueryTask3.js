$(document).ready(function(){
  $("#name").focus();
$('#btnSubm').click(function()
{
    // alert();
    $a=$("#name").val();
    $b=$("#passwd").val();
    $("#name").css("background-color","");
    $("#passwd").css("background-color","");

 if($a==""||$b=="")
 {
    alert("please fill this field input name"); 

 }   
  

if($a=="")
{
    $("#name").focus();
    $("#name").css("background-color","red");

}
if($b=="")
{
    $("#passwd").focus();
    $("#passwd").css("background-color","red");
}
})

})