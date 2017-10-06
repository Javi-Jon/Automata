/**
 * Created by 2gdaw02 on 4/10/17.
 */



    var datos = [[12, "Arriaga"], [13, "Lovaina"], [14, "Arriaga"], [15, "Lovaina"], [16, "Arriaga"], [17, "Lovaina"], [18, "Arriaga"], [13, "Lovaina"], [12, "Arriaga"], [13, "Lovaina"]];
    // Obtener la referencia del elemento span
    var body = document.getElementsByTagName("span")[0];

    // Crea un elemento <table> y un elemento <tbody> y <th>
    var tabla = document.createElement("table");
    var tblBody = document.createElement("tbody");
    var tcabecera = document.createElement("th");


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
    for (var i = 0; i < 5; i++) {
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