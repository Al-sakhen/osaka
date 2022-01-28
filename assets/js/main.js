// let mainNav = document.querySelector(".home-nav ");
// console.log(mainNav);
// window.addEventListener('scroll' , () =>{
//     let winY =  window.scrollY;    
//     if(winY > 60){
//         mainNav.classList.remove('bg-transparent');
//         mainNav.classList.add('bg-dark');
//         mainNav.classList.add('bg-opacity-75');
//     }else{
//         mainNav.classList.add('bg-transparent');
//     }

// })

$(window).scroll( ()=> { 
    let winY = window.scrollY;
    if(winY>60){
        $(".home-nav").removeClass('bg-transparent');
        $(".home-nav").addClass('bg-dark');
        // mainNav.classList.add('bg-gradiant');
        $(".home-nav").addClass('bg-opacity-75');
    }else{
        $(".home-nav").addClass('bg-transparent');
    }    
});
// sm navbar
$(window).scroll( ()=> { 
    let winY = window.scrollY;
    if(winY>60){
        $(".home-nav2").removeClass('bg-transparent');
        $(".home-nav2").addClass('bg-dark');
        // mainNav.classList.add('bg-gradiant');
        $(".home-nav2").addClass('bg-opacity-75');
    }else{
        $(".home-nav2").addClass('bg-transparent');
    }    
});

// mixitup
var mixer = mixitup($(".mix-container"));

// splider
let screenWidth = screen.width;
if(screenWidth < 720){
    var splide = new Splide( '.splide', {
        type   : 'loop',     
        perPage: 1,    
        perMove: 1,
    } );
    splide.mount();

}else if(screenWidth >= 720 && screenWidth < 960 ){
    var splide = new Splide( '.splide', {
        type   : 'loop',     
        perPage: 2,    
        perMove: 1,
    } );
    splide.mount();
}else if(screenWidth >= 960){
    var splide = new Splide( '.splide', {
        type   : 'loop',     
        perPage: 3,    
        perMove: 1,
    } );
    splide.mount();
}