$img=["img2.jpg","img3.jpg","img1.webp"];
var i=0;
$(document).ready(function(){
    $("#image").attr("src", "image/"+$img[i]);

 $('#btnPrev').click(function()
 {

    i--;
    if(i==-1)
    i=$img.length-1;
   $('#image').attr("src","image/"+$img[i]);
 }
 )
 $('#btnNext').click(function()
 {
     
    i++;
    if(i==$img.length)
     i=0;
  $("#image").attr("src", "image/"+$img[i]);
   
 })
})