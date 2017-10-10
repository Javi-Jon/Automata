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
 $.ajax({type: "GET",url: "./log.json",datatype:"text", success: function(data){
     $.getJSON(url = "./log.json",
         function (json) {

         var tfila = document.createElement("tr");
             var textocabecera = document.createTextNode("hora");
             tcabecera.appendChild(textocabecera);
             tfila.appendChild(tcabecera);

             var tcabecera1 = document.createElement("th");
             var textocabecera1 = document.createTextNode("parada");
             tcabecera1.appendChild(textocabecera1);
             tfila.appendChild(tcabecera1);

             for (var i = 0; i < json.length; i++) {
                 var hilera = document.createElement("tr");

                 var celda1 = document.createElement("td");
                 var horaCelda = document.createTextNode(json[i].hora);
                 celda1.appendChild(horaCelda);
                 var celda2 = document.createElement("td");
                 var paradaCelda = document.createTextNode(json[i].parada);
                 celda2.appendChild(paradaCelda);
                 hilera.appendChild(celda1);
                 hilera.appendChild(celda2);

                 tblBody.appendChild(hilera);
             }

             tabla.appendChild(tfila);
             tabla.appendChild(tblBody);
             body.appendChild(tabla);

         });
}});
