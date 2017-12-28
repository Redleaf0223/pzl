    // 左上から順番に
    function clear_animation_A(){
        var count = 0;
        for(var a = 0;a < 15;a++){
            var time = (a * 200) + 1000;
            setTimeout(function(){
                $("#" + count).css({ transition: 'all 0.8s',transform: 'rotateZ( 360deg )' });
                count++;
            },time);
        }
        for(var h = 1;h < 67;h++){
            $(".item15").append('<div class="hahen hahen_' + h + '"></div>');
        }
        // $(".item15").append('<div id="crack"></div>')
        setTimeout(function(){
            $(".hahen").css("z-index","100");
            break_down();
        },5000);

        setTimeout(function(){
            $(".image15").css("z-index","1");
        },5200);
    }
    
    // 左上から斜めのアレ
    function clear_animation_B(){
        var transitions = '1.0s'
        setTimeout(function(){

            $("#0").css({ transition: transitions,transform: 'rotateZ( 360deg )' });
        },1000);

        setTimeout(function(){
            $("#1").css({ transition: transitions,transform: 'rotateZ( 360deg )' });
            $("#4").css({ transition: transitions,transform: 'rotateZ( 360deg )' });
        },1500);

        setTimeout(function(){
            $("#2").css({ transition: transitions,transform: 'rotateZ( 360deg )' });
            $("#5").css({ transition: transitions,transform: 'rotateZ( 360deg )' });
            $("#8").css({ transition: transitions,transform: 'rotateZ( 360deg )' });
        },2000);

        setTimeout(function(){
            $("#3").css({ transition: transitions,transform: 'rotateZ( 360deg )' });
            $("#6").css({ transition: transitions,transform: 'rotateZ( 360deg )' });
            $("#9").css({ transition: transitions,transform: 'rotateZ( 360deg )' });
            $("#12").css({ transition: transitions,transform: 'rotateZ( 360deg )' });
        },2500);

        setTimeout(function(){
            $("#7").css({ transition: transitions,transform: 'rotateZ( 360deg )' });
            $("#10").css({ transition: transitions,transform: 'rotateZ( 360deg )' });
            $("#13").css({ transition: transitions,transform: 'rotateZ( 360deg )' });
        },3000);

        setTimeout(function(){
            $("#11").css({ transition: transitions,transform: 'rotateZ( 360deg )' });
            $("#14").css({ transition: transitions,transform: 'rotateZ( 360deg )' });
        },3500);

        setTimeout(function(){
            $(".image15").css("z-index","1");
            $("#15").css({ transition: '3.0s',transform: 'rotateZ( 1800deg )' });
        },4500);

    }

    // 上からくるくる
    function clear_animation_C(){
        var transitions = '1.0s'
        setTimeout(function(){
            $("#15").css({ transition: transitions,transform: 'rotateX( 90deg )' });
            $("#0").css({ transition: transitions,transform: 'rotateX( 360deg )' });
            $("#1").css({ transition: transitions,transform: 'rotateX( 360deg )' });
            $("#2").css({ transition: transitions,transform: 'rotateX( 360deg )' });
            $("#3").css({ transition: transitions,transform: 'rotateX( 360deg )' });

        },1000);

        setTimeout(function(){
            $("#4").css({ transition: transitions,transform: 'rotateX( 360deg )' });
            $("#5").css({ transition: transitions,transform: 'rotateX( 360deg )' });
            $("#6").css({ transition: transitions,transform: 'rotateX( 360deg )' });
            $("#7").css({ transition: transitions,transform: 'rotateX( 360deg )' });
        },1500);

        setTimeout(function(){
            $("#8").css({ transition: transitions,transform: 'rotateX( 360deg )' });
            $("#9").css({ transition: transitions,transform: 'rotateX( 360deg )' });
            $("#10").css({ transition: transitions,transform: 'rotateX( 360deg )' });
            $("#11").css({ transition: transitions,transform: 'rotateX( 360deg )' });
        },2000);

        setTimeout(function(){
            $("#12").css({ transition: transitions,transform: 'rotateX( 360deg )' });
            $("#13").css({ transition: transitions,transform: 'rotateX( 360deg )' });
            $("#14").css({ transition: transitions,transform: 'rotateX( 360deg )' });
            $("#15").css({ transition: transitions,transform: 'rotateX( 360deg )' });
        },2500);

        setTimeout(function(){
            $(".image15").css("z-index","1");
        },2650);

        setTimeout(function(){
        },3500);

        setTimeout(function(){
        },4500);

    }

    // へび 右上から
    function clear_animation_E(){
        var arr = [3,2,1,0,4,5,6,7,11,10,9,8,12,13,14];
        var count = 0;
        for(var a = 0;a < 15;a++){
            var time = (a * 200) + 1000
            setTimeout(function(){
                $("#" + arr[count]).css({ transition: 'all 0.8s',transform: 'rotateZ( 360deg )' });
                count++;
            },time);
        }
        // for(var h = 1;h < 33;h++){
        //     $(".item15").append('<div class="hahen hahen_' + h + '"></div>');
        // }
        setTimeout(function(){
            $(".image15").css("z-index","1");
            $(".grays").css({ transition: 'all 4s',transform: 'rotateZ( 3600deg )' });
            $(".image15").css({ transition: 'all 4s',transform: 'rotateZ( 3600deg )' });
            $(".grays").css({ transition: '4s',opacity: '0' });
            count++;
        },4000);

    }

    // ランダムに破裂させる
    function break_down(){
        time = ["10s","15s","20s","25s","30s"];
        rotate = ["rotateX( 10800deg )","rotateY( 7200deg )","rotateZ( 5400deg )"];
        px_t = ["0px","-1500px","-1250px","-1000px","-750px","750px","1000px","1250px","1500px"];
        px_l = ["0px","-1500px","-1250px","-1000px","-750px","750px","1000px","1250px","1500px"];
        for(var i = 1; i < 67; i++){
            var time_rnd = Math.floor( Math.random() * (time.length) );
            var rotate_rnd = Math.floor( Math.random() * (rotate.length) );
            var t_rnd = Math.floor( Math.random() * (px_t.length) );
            var l_rnd = Math.floor( Math.random() * (px_l.length) );
            while(t_rnd == 0 && l_rnd == 0){
                t_rnd = Math.floor( Math.random() * (px_t.length) );
                l_rnd = Math.floor( Math.random() * (px_l.length) );                
            }
            $(".hahen_" + i).css({ transition: time[time_rnd],transform: rotate[rotate_rnd] });
            $(".hahen_" + i).animate({top:px_t[t_rnd],left:px_l[l_rnd]},10,"easeOutQuart");
        }
    }
