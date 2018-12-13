 
 

(function(){
    $('.ng-nav-barh').on('mouseenter','li',function(){
    
      if($(this).index('.ng-nav-barh li')==0)$('.index-sort-detail').css('display','block');
    //    console.log($(this).index('li'))
        $(this).css({'background':'#fff'});
        $(this).children('a').css({'color':'#252221'});
        $(this).on('mouseenter','a',function(){
            $(this).css({'color':'#ff6600' })
        });
        $(this).on('mouseleave','a',function(){
            $(this).css({'color':'#252221' })
        });
        
    })  
    $('.ng-nav-barh').on('mouseleave','li',function(){
        
        $('.index-sort-detail').css('display','none');
        $(this).css({'background':'#252221'});
        $(this).children('a').each(function(){
            $(this).css({'color':'#fff'})
            
        })
    })

}())

