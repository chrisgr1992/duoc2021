function fn_consultarIndicador() {

    $.getJSON('https://mindicador.cl/api', function(data) {

        var respuesta = data;

$('#txt_dolar').val(respuesta.dolar.valor + " Pesos");
$('#txt_euro').val(respuesta.euro.valor + " Pesos");
$('#txt_uf').val(respuesta.uf.valor + " Pesos");

    });
}

function fn_consultarTemperatura() {

    $.getJSON(' https://api.gael.cloud/general/public/clima/SCQN', function(data) {

        var respuesta1 = data;

$('#txt_temperatura').val(respuesta1.temperatura + "°");


    });
}

$('#btn_click').click(function() { 
    fn_consultarIndicador();
    fn_consultarTemperatura();
});