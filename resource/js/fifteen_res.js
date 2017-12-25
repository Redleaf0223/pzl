    function clear_animation(){
        // setTimeout(function(){
        //     $("#0").css({ transition: '1.0s',transform: 'rotateZ( 360deg )' })
        // },1000);
        // setTimeout(function(){
        //     $("#1").css({ transition: '1.0s',transform: 'rotateZ( 360deg )' })
        // },1100);

        // setTimeout(function(){
        //     $("#2").css({ transition: '1.0s',transform: 'rotateZ( 360deg )' })
        // },1200);

        // setTimeout(function(){
        //     $("#3").css({ transition: '1.0s',transform: 'rotateZ( 360deg )' })
        // },1300);

        // setTimeout(function(){
        //     $("#4").css({ transition: '1.0s',transform: 'rotateZ( 360deg )' })
        // },1400);

        // setTimeout(function(){
        //     $("#5").css({ transition: '1.0s',transform: 'rotateZ( 360deg )' })
        // },1500);

        // setTimeout(function(){
        //     $("#6").css({ transition: '1.0s',transform: 'rotateZ( 360deg )' })
        // },1600);

        // setTimeout(function(){
        //     $("#7").css({ transition: '1.0s',transform: 'rotateZ( 360deg )' })
        // },1700);

        // setTimeout(function(){
        //     $("#8").css({ transition: '1.0s',transform: 'rotateZ( 360deg )' })
        // },1800);

        // setTimeout(function(){
        //     $("#9").css({ transition: '1.0s',transform: 'rotateZ( 360deg )' })
        // },1900);

        // setTimeout(function(){
        //     $("#10").css({ transition: '1.0s',transform: 'rotateZ( 360deg )' })
        // },2000);

        // setTimeout(function(){
        //     $("#11").css({ transition: '1.0s',transform: 'rotateZ( 360deg )' })
        // },2100);

        // setTimeout(function(){
        //     $("#12").css({ transition: '1.0s',transform: 'rotateZ( 360deg )' })
        // },2200);

        // setTimeout(function(){
        //     $("#13").css({ transition: '1.0s',transform: 'rotateZ( 360deg )' })
        // },2300);

        // setTimeout(function(){
        //     $("#14").css({ transition: '1.0s',transform: 'rotateZ( 360deg )' })
        // },2400);

        // setTimeout(function(){
        //     $("#15").css({ transition: '1.0s',transform: 'rotateZ( 360deg )' })
        // },2500);
        break_down();
    }

    function break_down(){
        $(".hahen_1").css({ transition: '30s',transform: 'rotateX( 10800deg )' })
        $(".hahen_1").animate({top:"1500px"},10,"easeOutExpo");

        $(".hahen_2").css({ transition: '30s',transform: 'rotateX( 10800deg )' })
        $(".hahen_2").animate({top:"-1500px"},10,"easeOutExpo");

        $(".hahen_3").css({ transition: '30s',transform: 'rotateX( 10800deg )' })
        $(".hahen_3").animate({top:"1500px",left:"1500px"},10,"easeOutExpo");

        $(".hahen_4").css({ transition: '30s',transform: 'rotateX( 10800deg )' })
        $(".hahen_4").animate({top:"1500px",left:"-1500px"},10,"easeOutExpo");

        $(".hahen_5").css({ transition: '30s',transform: 'rotateX( 10800deg )' })
        $(".hahen_5").animate({top:"-1000px",left:"1500px"},10,"easeOutExpo");

        $(".hahen_6").css({ transition: '30s',transform: 'rotateX( 10800deg )' })
        $(".hahen_6").animate({top:"-1000px",left:"-1500px"},10,"easeOutExpo");

        $(".hahen_7").css({ transition: '30s',transform: 'rotateX( 10800deg )' })
        $(".hahen_7").animate({left:"1500px"},10,"easeOutExpo");

        $(".hahen_8").css({ transition: '30s',transform: 'rotateX( 10800deg )' })
        $(".hahen_8").animate({left:"-1500px"},10,"easeOutExpo");

    }
