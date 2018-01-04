function cover(){
    $('html').append('<div id="cover"></div>');

    $('#cover').append('<div id="load_box"></div>');

    $('#load_box').append('<div class="ball" id="ball_1"></div>');
    $('#load_box').append('<div class="ball" id="ball_2"></div>');
    $('#load_box').append('<div class="ball" id="ball_3"></div>');
    $('#load_box').append('<div class="ball" id="ball_4"></div>');
    $('#load_box').append('<div class="ball" id="ball_5"></div>');
    $('#load_box').append('<div class="ball" id="ball_6"></div>');
    
    setTimeout(function(){
        $("#ball_1").animate({height:'15vh',width:'15vh',backgroundColor:'#AAFFAA'},250,"easeOutQuart");
    },500);

    setTimeout(function(){
        $("#ball_1").animate({height:'10vh',width:'10vh',backgroundColor:'#00FF00'},250,"easeOutQuart");
        $("#ball_2").animate({height:'15vh',width:'15vh',backgroundColor:'#AAFFAA'},250,"easeOutQuart");
    },1000);

    setTimeout(function(){
        $("#ball_2").animate({height:'10vh',width:'10vh',backgroundColor:'#00FF00'},250,"easeOutQuart");
        $("#ball_3").animate({height:'15vh',width:'15vh',backgroundColor:'#AAFFAA'},250,"easeOutQuart");
    },1500);

    setTimeout(function(){
        $("#ball_3").animate({height:'10vh',width:'10vh',backgroundColor:'#00FF00'},250,"easeOutQuart");
        $("#ball_4").animate({height:'15vh',width:'15vh',backgroundColor:'#AAFFAA'},250,"easeOutQuart");
    },2000);

    setTimeout(function(){
        $("#ball_4").animate({height:'10vh',width:'10vh',backgroundColor:'#00FF00'},250,"easeOutQuart");
        $("#ball_5").animate({height:'15vh',width:'15vh',backgroundColor:'#AAFFAA'},250,"easeOutQuart");
    },2500);

    setTimeout(function(){
        $("#ball_5").animate({height:'10vh',width:'10vh',backgroundColor:'#00FF00'},250,"easeOutQuart");
        $("#ball_6").animate({height:'15vh',width:'15vh',backgroundColor:'#AAFFAA'},250,"easeOutQuart");
    },3000);

    setTimeout(function(){
        $("#ball_6").animate({height:'10vh',width:'10vh',backgroundColor:'#00FF00'},250,"easeOutQuart");
        $("#ball_1").animate({height:'15vh',width:'15vh',backgroundColor:'#AAFFAA'},250,"easeOutQuart");
    },3500);

}