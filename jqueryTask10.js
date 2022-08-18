$(document).ready(function(){
    // alert();
     $text="<li>New Clothes<button class='btnClothes' >+</button></li>";
     $Etext="<li>New Electronic<button class='electronics' >+</button></li>";
     $subList="<li>New Item<button class='btnT-shirt' >+</button></li>";
     $mobList="<li>New Electronic Component<button class='btn_mobList' >+</button></li>";
    $("#List").on('click','.btnClothes','.electronics',function(){
        $(this).parent().append($text);

    });
    $("#list2").on('click','.electronics',function(){
        $(this).parent().append($Etext);

    });
    $(".cList").on('click','.btnT-shirt',function(){
        $(this).parent().append($subList);

    });
    $(".mobList").on('click','.btn_mobList',function(){
     $(this).parent().append($mobList);

    })
     

})