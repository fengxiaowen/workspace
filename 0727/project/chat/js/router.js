



$(function(){

    // $("#title").load("../page/title/chat-title.html")
    $("#dynamic").load("../page/dynamic/chat-item.html")



    //切换
    $("#record").click(function() {

        // $("#dynamic").load($(this).data("page"))
        $("#dynamic").load("../page/dynamic/chat-item.html")
    })





    $("#address").click(function() {

        // $("#dynamic").load($(this).data("page"))
        $("#dynamic").load("../page/dynamic/chat-address.html")
    })





    $("#find").click(function() {

        // $("#dynamic").load($(this).data("page"))
        $("#dynamic").load("../page/dynamic/chat-find.html")
    })





    $("#me").click(function() {

        // $("#dynamic").load($(this).data("page"))
        $("#dynamic").load("../page/dynamic/chat-me.html")
    })


})