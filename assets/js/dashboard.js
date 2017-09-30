$(function() {
    $(".cog").mouseover(function() {
        $(".dashboard").addClass("show");
        $(this).addClass("hide");
    });
    
    $(".dashboard").mouseleave(function(){
        $(this).removeClass("show");
        $(".cog").removeClass("hide");
    });
});
