	
	
$(document).ready(function(){	
    
    var wh=$(window).height();
    $(".wh").height(wh);
    
    
    
    
	$("#bt_close").click(function(){		
        $("#product_pop").fadeOut();		
	})
	$(".list li").click(function(){	
        $("#product_pop").fadeIn();				
	})
    
    
    
 $(".wave01").animate({
        "bottom":"255px",
        "opacity":"1"
    },300,function(){        
        $(".wave02").animate({
            "bottom":"100px",
            "opacity":"1"
        },300,function(){
            $(".wave03").animate({
                "top":"570px",
                "opacity":"1"
            },300,function(){
        
         })        
       })
    })
    
 // index -쥬스애니메이션    
    
    $(".slider01").animate({
        "top":"350px",
        "opacity":"1"
    },"slow",function(){        
        $(".slider02").animate({
            "bottom":"0px",
            "opacity":"1"
        },"slow",function(){
            $(".slider03").animate({
                "bottom":"-30px",
                "opacity":"1"
            },"slow",function(){ 
                
     $(".water01").animate({
        "bottom":"0px",
        "opacity":"1"
    },"slow",function(){        
        $(".water02").animate({
            "top":"270px",
            "opacity":"1"
        },"slow",function(){            
      $(".suffer").animate({
      "left":"620px",
       "opacity":"1"
       },"slow")
            
        })
    })
         })        
       })
    })  
    
  
/*    
$(window).scroll(function(event){ 
     didScroll = $(window).scrollTop();
 });
	
 setInterval(function() { 
     if (didScroll > 300) { 
         hasScrolled(); 
//         didScroll = false;
 } }, 250);
*/
  /*
function hasScrolled() {    
   /*$(".juice").animate({"opacity":"1"},500);
	 $(".fruit01").animate({"opacity":"1"},1000);
	 $(".fruit02").animate({"opacity":"1"},1000);
	 $(".fruit03").animate({"opacity":"1"},1000);
	 $(".water_drop").animate({"opacity":"1"},1000);
	
	 $(".juice").animate({"opacity":"1"},500,function(){
	 $(".fruit01").animate({"opacity":"1"},500);
	 $(".fruit02").animate({"opacity":"1"},500);
	 $(".fruit03").animate({"opacity":"1"},500);
	 $(".water_drop").animate({"opacity":"1"},500);
	
	});
       
}
 
                  */
    
                  
      
    
    
});


  function change(seg){
            var slider = $(".find"+seg);            
            $(slider).css({display : 'block'});
            $(slider).siblings().css({display : 'none'})
            
        }
            
          
