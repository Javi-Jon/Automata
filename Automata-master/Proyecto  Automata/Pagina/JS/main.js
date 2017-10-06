/**
 * Created by 2gdaw04 on 3/10/17.
 */

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
})


function hideAll(){
    $("#contenedor-control").hide();
    $("#contenedor-inicio").hide();
    $("#contenedor-registro").hide();
    $("#contenedor-mantenimiento").hide();
}


/*var valor;
var vel;

$(document).ready(function(){
    $('select#parada').on('change', function(){
        valor = $(this).val()});

    $('select#velocidad').on('change', function(){
        valor = $(this).val()});

    if(valor=="angulema"){
        $('#angulema').attr({'value': 'true'});
        $('#parlamento').attr({'value': 'false'});
        $('#lovaina').attr({'value': 'false'});
        $('#sancho').attr({'value': 'false'});
        $('#europa').attr({'value': 'false'});
        $('#honduras').attr({'value': 'false'});
        parada1();
    }
    if(valor=="parlamento"){
        $('#angulema').attr({'value': 'false'});
        $('#parlamento').attr({'value': 'true'});
        $('#lovaina').attr({'value': 'false'});
        $('#sancho').attr({'value': 'false'});
        $('#europa').attr({'value': 'false'});
        $('#honduras').attr({'value': 'false'});
        parada2();
    }
    if(valor=="lovaina"){
        $('#angulema').attr({'value': 'false'});
        $('#parlamento').attr({'value': 'false'});
        $('#lovaina').attr({'value': 'true'});
        $('#sancho').attr({'value': 'false'});
        $('#europa').attr({'value': 'false'});
        $('#honduras').attr({'value': 'false'});
        parada3();
    }
    if(valor=="sancho"){
        $('#angulema').attr({'value': 'false'});
        $('#parlamento').attr({'value': 'false'});
        $('#lovaina').attr({'value': 'false'});
        $('#sancho').attr({'value': 'true'});
        $('#europa').attr({'value': 'false'});
        $('#honduras').attr({'value': 'false'});
        parada4();
    }
    if(valor=="europa"){
        $('#angulema').attr({'value': 'false'});
        $('#parlamento').attr({'value': 'false'});
        $('#lovaina').attr({'value': 'false'});
        $('#sancho').attr({'value': 'false'});
        $('#europa').attr({'value': 'true'});
        $('#honduras').attr({'value': 'false'});
        parada5();
    }
    if(valor=="honduras"){
        $('#angulema').attr({'value': 'false'});
        $('#parlamento').attr({'value': 'false'});
        $('#lovaina').attr({'value': 'false'});
        $('#sancho').attr({'value': 'false'});
        $('#europa').attr({'value': 'false'});
        $('#honduras').attr({'value': 'true'});
        parada6();
    }*/
/*});*/