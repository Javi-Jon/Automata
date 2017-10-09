/**
 * Created by Javi y Jon on 4/10/17.
 */


//Script que creara y rellenara la tabla registros (no acabado)
  //  var datos = [[12, "Arriaga"], [13, "Lovaina"], [14, "Arriaga"], [15, "Lovaina"], [16, "Arriaga"], [17, "Lovaina"], [18, "Arriaga"], [13, "Lovaina"], [12, "Arriaga"], [13, "Lovaina"]];
    // Obtener la referencia del elemento span
    var body = document.getElementsByTagName("span")[0];

    // Crea un elemento <table> y un elemento <tbody> y <th>
    var tabla = document.createElement("table");
    var tblBody = document.createElement("tbody");
    var tcabecera = document.createElement("th");


var datos;


/*var peticion;


if(window.XMLHttpRequest ) {
    peticion = new XMLHttpRequest();
}
else
if(window.ActiveXObject )
{
    peticion = new ActiveXObject ("Microsoft.XMLHTTP");
}

peticion.open("GET", "./resources/log.txt", true);

peticion.send(null)

//peticion.onreadystatechange=mostrarcontent();

alert(peticion.responseText);
/*datos=peticion.responseText.split(";");

for(k=0;k<datos.length;k++){
    datos[k].split(":");

}*/

 $.ajax({type: "GET",url: "./log.txt",datatype:"text", success: function(data){
   alert(data);
}});



/*

var request;
sendRequest();
function getRequestObject() {
    if (window.ActiveXObject) {
        return(new ActiveXObject("Microsoft.XMLHTTP"));
    } else if (window.XMLHttpRequest) {
        return(new XMLHttpRequest());
    } else {
        return(null);
    }
}

function sendRequest() {
    request = getRequestObject();
    request.onreadystatechange = handleResponse;
    request.open("GET", "./resources/log.txt", false);
    request.send(null);
}

function handleResponse() {
    if (request.readyState == 4) {
        alert(request.responseText);
    }
}


*/
/*
getFile();
function getFile() {
    var pURL = "../resources/log.txt";
    if (window.XMLHttpRequest) {
        xmlhttp=new XMLHttpRequest();
        xmlhttp.onreadystatechange=postFileReady;
        xmlhttp.open("GET", pURL, true);
        xmlhttp.send(null);
    } else if (window.ActiveXObject) { //IE
        xmlhttp=new ActiveXObject('Microsoft.XMLHTTP');
        if (xmlhttp) {
            xmlhttp.onreadystatechange=postFileReady;
            xmlhttp.open('GET', pURL, false);
            xmlhttp.send();
        }
    }
}

function postFileReady() {
    if (xmlhttp.readyState==4) {
        if (xmlhttp.status==200) {
            document.getElementById('contenido').innerHTML=xmlhttp.responseText;
        }
    }
}

document.getElementById("formulario").onsubmit = function () {getFile(document.getElementById("file").value);};
*/


    /*

     CREAR LA CABECERA DE LA TABLA
     */
    var tfila = document.createElement("tr");
    var textocabecera = document.createTextNode("hora");
    tcabecera.appendChild(textocabecera);
    tfila.appendChild(tcabecera);


    var tcabecera1 = document.createElement("th");
    var textocabecera1 = document.createTextNode("parada");
    tcabecera1.appendChild(textocabecera1);
    tfila.appendChild(tcabecera1);


    /*
     Crear y rellenar las casillas de la tabla
     */
    //cambiar el 5 por length de arguments
    for (var i = 0; i < datos.length; i++) {
        // Crea las hileras de la tabla
        var hilera = document.createElement("tr");

        for (var j = 0; j < 2; j++) {

            var celda = document.createElement("td");
            var textoCelda = document.createTextNode(datos[i][j]);
            celda.appendChild(textoCelda);
            hilera.appendChild(celda);
        }


        tblBody.appendChild(hilera);
    }
    tabla.appendChild(tfila);
    tabla.appendChild(tblBody);



    body.appendChild(tabla);