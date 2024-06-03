$(document).ready(function(){
    
    // --Slider Start-----------------------------------------------------------------
    $('#slider1').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        items:1,
        dots:false,
        navText:['<i class="fa-solid fa-chevron-left"></i>','<i class="fa-solid fa-chevron-right"></i>']
    })

    $('#slider2').owlCarousel({
        loop:true,
        margin:30,
        nav:false,
        dots:true,
        responsive:{
        0:{
            items:1
        },
        600:
        {
            items:2
        },
        1024:{
            items:3
        }
    }
    })

    $('#slider3').owlCarousel({
        loop:true,
        margin:30,
        nav:false,
        dots:false,
        responsive:{
        0:{
            items:1
        },
        600:
        {
            items:2
        },
        1024:{
            items:5
        }
    }
    })

    $('#testimonial_slider').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots:false,
        items:1
    })
    // --Slider End-----------------------------------------------------------------

    // --Preloader Start-----------------------------------------------------------------
    $(document).ready(function(){
        setTimeout (function(){
            $('.preloader').fadeOut();
        },1500)
    })
    // --Preloader End-----------------------------------------------------------------

     // --Upwrw start-----------------------------------------------------------------
     var btn = $('.uparw');
     btn.hide();
     $(window).scroll(function () {
       if($(window).scrollTop()>500)
       {
         btn.fadeIn();
       }
       else
       {
         btn.fadeOut();
       }
     });
     
     btn.on('click',function(e){
       e.preventDefault();
       $('html,body').animate({scrollTop:0},'300');
     });
     // --Upwrw End-----------------------------------------------------------------

     // --Header Fix start-----------------------------------------------------------------
    $(window).scroll(function(){
        var sticky = $('.sticky'),
        scroll = $(window).scrollTop();
        
        if (scroll >= 100) sticky.addClass('fixed');
        else sticky.removeClass('fixed');
    });
    // --Header Fix End-----------------------------------------------------------------
    
    // --Isotop start-----------------------------------------------------------------
    
        $('.filter-button-group > li').click(function(){
            $('.filter-button-group li').removeClass('active');
            $(this).addClass('active');
        });

        // filter items on button click
        $('.filter-button-group').on( 'click', 'li', function() {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });
        });
                
        $('.filter-button-group > li').click(function(){
            $('.filter-button-group li').removeClass('active');
            $(this).addClass('active');
        });

        // init Isotope
        var $grid = $('.grid').isotope({
        // options
        });
        
        // filter items on button click
        $('.choose-button-group').on( 'click', 'li', function() {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });
        });
    // --Isotop end-----------------------------------------------------------------
    
})

// --Form Validation Start-----------------------------------------------------------------
function validation(){
    var name=document.getElementById('name').value;
    var email=document.getElementById('email').value;
    var phone=document.getElementById('phone').value;
    var subject=document.getElementById('subject').value;
    var message=document.getElementById('message').value;


    if(name==""){
        document.getElementById('err1').innerText="THIS FIELD IS REQUIRED.";
        document.getElementById('name').style.borderColor='red';
        return false;
    }
    if(email=="") {
        document.getElementById('err2').innerText="THIS FIELD IS REQUIRED.";
        document.getElementById('email').style.borderColor='red';
        return false;
    }
    if(phone=="") {
        document.getElementById('err3').innerText="THIS FIELD IS REQUIRED.ed...!";
        document.getElementById('phone').style.borderColor='red';
        return false;
    }
    if(subject=="") {
        document.getElementById('err4').innerText="THIS FIELD IS REQUIRED.";
        document.getElementById('subject').style.borderColor='red';
        return false;
    }
    if(message=="") {
        document.getElementById('err5').innerText="THIS FIELD IS REQUIRED.";
        document.getElementById('message').style.borderColor='red';
        return false;
    }
}
// --Form Validation End-----------------------------------------------------------------


