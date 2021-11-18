console.log("Adrian's Portfolio")
$("#photo").on("click", function(){
    $("#adrian").fadeToggle("slow") 
});

$("#adrian").on("click", function(){
    $("#photo").slideToggle(2000)
});