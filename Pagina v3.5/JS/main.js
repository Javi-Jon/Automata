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
})


function hideAll(){
    $("#contenedor-control").hide();
    $("#contenedor-inicio").hide();
    $("#contenedor-registro").hide();
    $("#contenedor-mantenimiento").hide();
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
                paradamv.innerHTML="Sancho";

                break;
            case "5":
                destino=800;
                paradamv.innerHTML="Europa";

                break;
            case 6:
                destino=1000;
                paradamv.innerHTML="Honduras";
                break;
        }

    movimiento=destino-posact;
    alert(movimiento);
    posact=destino;

}
/*
var valor;
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