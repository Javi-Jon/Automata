/**
 * Created by Javi y Jon on 5/10/17.
 */
//document.getElementById('p1').style.animationDuration = 'red'

//creacion de animacion para el siguiente movimiento del tranvia
    //mirar si meter mejor en un metodo(!)

/*
ejecuta una animacion u otra en funcion del movimiento requerido
 */
function animar(movimiento) {
 //  var animacion = CSSAnimations.get("run");
//  animacion.setName("run");


  //  animacion.setKeyframe(100% {transform:"translateX(500 px)"});

    //p1.style.animationName =animacion.name;
    //$("#p1").addClass("position");




    switch (movimiento){
        /*Animaciones a la derecha*/
        case 200: p1.className="r200";
            addEventListener("animationend",function () {

                p1.setAttribute("style","left:"+posact+"px");
                $("#p1").removeClass("r200");
            });
            break;
        case 400: p1.className="r400";
            addEventListener("animationend",function () {

                p1.setAttribute("style","left:"+posact+"px");
                $("#p1").removeClass("r400");
            });
            break;
        case 600: p1.className="r600";
            addEventListener("animationend",function () {

                p1.setAttribute("style","left:"+posact+"px");
                $("#p1").removeClass("r600");
            });
            break;
        case 800: p1.className="r800";
            addEventListener("animationend",function () {

                p1.setAttribute("style","left:"+posact+"px");
                $("#p1").removeClass("r800");
            });
        case 950: p1.className="r1000";
            addEventListener("animationend",function () {

                p1.setAttribute("style","left:"+posact+"px");
                $("#p1").removeClass("r1000");
            });
            break;
/*Animaciones en las que el tranvia se mueve hacia la izquierda*/

        case -200: p1.className="l200";
            addEventListener("animationend",function () {

                p1.setAttribute("style","left:"+posact+"px");
                $("#p1").removeClass("l200");
            });
            break;
        case -400: p1.className="l400";
            addEventListener("animationend",function () {

                p1.setAttribute("style","left:"+posact+"px");
                $("#p1").removeClass("l400");
            });
            break;
        case -600: p1.className="l600";
            addEventListener("animationend",function () {

                p1.setAttribute("style","left:"+posact+"px");
                $("#p1").removeClass("l600");
            });
            break;
        case -800: p1.className="l800";
            addEventListener("animationend",function () {

                p1.setAttribute("style","left:"+posact+"px");
                $("#p1").removeClass("l800");
            });
        case -1000: p1.className="l1000";
            addEventListener("animationend",function () {

                p1.setAttribute("style","left:"+posact+"px");
                $("#p1").removeClass("l1000");
            });
            break;
        default:alert("error seleccione una parada");
            break;
    }
//p1.className="position"
    p1.addEventListener("animationend",function () {
       // p1.className="position1"
     //   $("#p1").removeClass("position");

    })
}
