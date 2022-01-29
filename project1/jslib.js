// project 1
$(document).ready(function(){
    let flag=1;
    $('a.register').click(function(){

       $('div.cover').fadeIn(500); 
        if(flag==1){
            flag=0;
        
                $('.modal').css({
                    'animationName':'animate',
                    'animationDuration':'0.8s'
                })
                $('.cover').fadeIn(500);
            

        }
    })

    $('.close').click(function(){

        $('.modal').css({
            'animationName':'animateBack',
            'animationDuration':'0.3s'
        })
        $('.cover').fadeOut(300);
        flag=1;

    })
    
    

    //end document ready
    })
// end  project1