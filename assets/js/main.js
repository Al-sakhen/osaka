
let homeHeight = $('#home').outerHeight();


// console.log(homeHeight);
$(window).scroll( ()=> { 
    let winY = window.scrollY;
    // console.log(winY);
    if(winY>60){
        $(".home-nav").removeClass('bg-transparent','d-none');
        $(".home-nav").addClass('bg-dark');
        $(".home-nav").addClass('bg-opacity-75');
        $('.scroll-to-top').fadeIn(500)
        $(".scroll-to-top").removeClass('d-none');

    }else{
        $(".home-nav").addClass('bg-transparent');
        $('.scroll-to-top').fadeOut(500)
    }  

// sm navbar
    if(winY>60){
        $(".home-nav2").removeClass('bg-transparent');
        $(".home-nav2").addClass('bg-dark');
        $(".home-nav2").addClass('bg-opacity-75');
    }else{
        $(".home-nav2").addClass('bg-transparent');
    }    
});



// options 

let colors = ['#F37121' , '#B8405E', '#2EB086' , '#6998AB' ,'#ff206e']
for(let i =0 ; i<colors.length ; i++){
$('.options li').eq(i).css('backgroundColor' , colors[i]);
}

$('.options i').click(function(e){
    let x =$('.options-slide').outerWidth();
    let y = $('.options').offset().left;

    if(y==0){
        $('.options').animate({left:-`${x}`},1000)
    }else{
        $('.options').animate({left:0},1000)
    }  
})

$('.options li').click(function(e){
    let bg = $(e.target).css('backgroundColor');
    $('html').attr('style' , `--mainColor:${bg}`)
})

$('.options img').click(function(e){
    let bg = $(e.target).attr('src');
    $('.header').css('backgroundImage',`url(${bg})`)
    $('.sm-image').attr('src', bg)
})


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