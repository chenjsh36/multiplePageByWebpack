import './main.less'

// do something in mobile
(() => {
    var ax,
        ay,
        az,
        [ix, iy, iz] = [0, 0, 0],
        init = true,
        [angleY, angleX] = [4, 1],
        value
        ;


    window.addEventListener('deviceorientation', (e) => {
        // $('#instructions').addClass('on');
        ax = e.beta;
        ay = e.gamma;
        az = e.alpha;
        // init, recup position tel pour 0,0
        if (init) {
            ix = ax;
            iy = ay;
            iz = az;
            // ax = ay = az = 0;
            init = false;
        }
        // ax entre -90 et 90
        // ay entre -180 et 180
        // az entre 0 et 360
        ax -= ix;
        ay -= iy;
        az -= iz;
        ay *= angleY;
        value = 'rotateX(' + (ax) + 'deg) rotateY(' + (ay) + 'deg)';
        $('.msg').text(value);
        // apply
        $('#space-wrapper').css({
            WebkitTransform: value,
            MozTransform: value,
            msTransform: value
        });
    });
})();

// do something in pc


(() => {
    // var tabClass = new Array('north','west','east','south','top','bottom');
    var w = $('#demo2').width(),
        h = $('#demo2').height(),
        hH = 2, // hauteur horizon: centre
        off = $('#demo2').offset(),
        angleX = 180,
        angleY = 45,
        xi,
        yi,
        xf,
        yf,
        [valLR, valTB, value] = [0, 0, 0],
        move = false,
        [axT, ayT] = [0, 0] // angle en cours
        ;
    console.log('init:', w, h);
    $('#demo2').mousedown((e) => {
        // x y du clic init
        xi = e.pageX - off.left;
        yi = e.pageY - off.top;

        // move oui
        move = true;

        // cosmetics
        $(this).addClass('on'); // add cursor
        $('#instructions').addClass('on');
        e.preventDefault();
        console.log('click:', xi, yi);
    })
    .mousemove((e) => {
        var pxi,
            pyi,
            pxf,
            pyf,
            dx,
            dy
            ;
        if (move) {
            // x y du clic mouse
            xf = e.pageX - off.left;
            yf = e.pageY - off.top;

            // px et py entre -1 et 1
            pxi = (xi - (w / 2)) / (w / 2);
            pyi = -((yi - (h / hH)) / (h / hH));
            pxf = (xf - (w / 2)) / (w / 2);
            pyf = -((yf - (h / hH)) / (h / hH));
            // diff
            dx = pxf - pxi;
            dy = pyf - pyi;

            // angle (avec ajout de angle en cours)
            valLR = (angleX * dx) + axT;
            valTB = (angleY * dy) + ayT;

            // angle 0 a -180:180 a 0
            valLR %= 360;
            valTB %= 360;

            // val
            value = 'rotateX(' + (-valTB) + 'deg) rotateY(' + (-valLR) + 'deg)';
            $('.msg').text(value);
            $('#space-wrapper').css({
                WebkitTransform: value,
                MozTransform: value,
                msTransform: value
            });
            e.preventDefault();
            console.log('move:', xf, yf);
        }
    })
    .mouseup(() => {
        move = false;
        axT = valLR;
        ayT = valTB;

        $(this).removeClass('on');
    })
    .mouseleave(() => {
        move = false;
        axT = valLR;
        ayT = valTB;

        $(this).removeClass('on');
    });

    // peel : click marche aussi avec navigation clavier
    // $('#peel button').click(function(){
    //       $('#sousCube').toggleClass('peel');
    //       $(this).toggleClass('on');
    // });

    // menu de selection
    // $('#panoChoose').change(function(){
    //       var name = $(this).val();

    //       $('#sousCube div').empty().removeClass('on');

    //       for(var i=0;i<6;i++){
    //            var img = new Image();
    //            img.src = "images/"+name+"/cube_"+i+".jpg";
    //            img.className = img.alt = tabClass[i];
    //            img.width = 3000;
    //            img.height = 3000;

    //            $('#sousCube div').append(img);
    //       }
    //       $('#sousCube div').addClass('on');
    //       $('#instructions').removeClass('on');
    // });

    // $('#sousCube div').addClass('on');
})();
