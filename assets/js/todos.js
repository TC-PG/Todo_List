// add click listener for toggling line-through display
$("ul").on("click", "li", function(){    
    $(this).toggleClass("completed");
});

//add click listener for span on deleting todos
$("ul").on("click", "span", function(event){
    //$(this) === <span>
    $(this).parent().fadeOut(500, function(){
        //$(this) === (this).parent(), ie. <li>
        $(this).remove();
    });
    event.stopPropagation();   
});

$("input[type = 'text']").keypress(function(event){
    if(event.which === 13){
       let todoText = $(this).val();
       $(this).val("");
       $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>");
    }
    
});

$(".fa-edit").click(function(){
    $("input[type='text']").fadeToggle();
});



