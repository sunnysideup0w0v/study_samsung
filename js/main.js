var gnb =$("#gnb .list > li");
var header= $("#header"); 
gnb.on("mouseenter", function(){
    header.addClass("open");
});
gnb.on("mouseleave", function(){
    header.removeClass("open");
});
new fullpage('#main', {

})
new Swiper("#mainVisual",{
    speed:1000,
    effect: "fade",
    loop:true,

    autoplay: {
        delay:3000,
    },
    pagination: {
        el: "#mainVisual .pagination",
        type: "bullets",
        clickable : "true",
    },
}); 