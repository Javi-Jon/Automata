/**
 * Created by Javi y Jon on 4/10/17.
 */


//Script que creara y rellenara la tabla registros (no acabado)
    var datos// = new Array();
    // Obtener la referencia del elemento span
    var body = document.getElementsByTagName("span")[0];

    // Crea un elemento <table> y un elemento <tbody> y <th>
    var tabla = document.createElement("table");
    var tblBody = document.createElement("tbody");
    var tcabecera = document.createElement("th");

var txt="";
//var datos;
 $.ajax({type: "GET",url: "./log.txt",datatype:"text", success: function(data){
   alert(data);
   data.toString();
txt+=data;
}});



datos=txt.split(";");
alert(datos);
for(k=0;k<datos.length;k++){
    datos=datos[k].toString().split(":");

}





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

alert(datos[0][0]);
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