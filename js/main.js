var gnb = document.querySelectorAll("#gnb .list .depth01");
var header= document.querySelector("#header"); 

// gnb.addEventListenr("mouseenter", function(){
//     header.addClass("open");
// });
// gnb.addEventListenr("mouseleave", function(){
//     header.removeClass("open");
// });
// 수정 전

gnb.addEventListener('mouseover',function(){
    header.classList.add('open');
})
gnb.addEventListener('mouseout',function(){
    header.classList.remove('open');
})
// 수정 후



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