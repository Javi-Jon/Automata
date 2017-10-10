/**
 * Created by Javi y Jon on 3/10/17.
 */
//Ordenes que se ejecutaran al cargar la pagina

$(document).ready(function(){


    $("#bcontrol").click(function(){
        hideAll();
        $("#contenedor-control").show();
    })
    $("#binicio").click(function(){
        hideAll();
        $("#contenedor-inicio").show();
    })
    $("#bregistro").click(function(){
        hideAll();
        $("#contenedor-registro").show();
    })
    $("#bmantenimiento").click(function(){
        hideAll();
        $("#contenedor-mantenimiento").show();
    })

    $("#frmIni").on("submit", function (e){
        e.preventDefault();
        var frmIni = $(this).serialize();
        $.ajax({
            type: 'POST',
            url: '﻿http://10.0.2.100/awp/web/index.html',
            data: frmIni
        })
        return false;
    });

    $("#frmParada").on("submit", function (e){
        e.preventDefault();
        var frmParada = $(this).serialize();
        $.ajax({
            type: 'POST',
            url: '﻿http://10.0.2.100/awp/web/index.html',
            data: frmParada
        })
        return false;
    });
})


function hideAll(){
    $("#contenedor-control").hide();
    $("#contenedor-inicio").hide();
    $("#contenedor-registro").hide();
    $("#contenedor-mantenimiento").hide();
}

function llamarOrigen() {
    destino=0;
    paradamv.innerHTML="Angulema";
    movimiento=destino-posact;
    posact=destino;
    animar(movimiento);
}

function llamarParada() {
        valor = $('select#element_1').val();

        switch (valor) {
            case "1":
                destino=0;
                paradamv.innerHTML="Angulema";
                break;
            case "2":
                destino=200;
                paradamv.innerHTML="Parlamento";
                break;
            case "3":
                destino=400;
                paradamv.innerHTML="Lovaina";
                break;
            case "4":
                destino=600;
                paradamv.innerHTML="Sancho el Sabio";

                break;
            case "5":
                destino=800;
                paradamv.innerHTML="Europa";

                break;
            case "6":
                destino=1000;
                paradamv.innerHTML="Honduras";
                break;

        }

    movimiento=destino-posact;
    posact=destino;
    animar(movimiento);
}

