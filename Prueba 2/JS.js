$('#btn_registro').click(function() {
    rut = $('#txt_rut').val();
    nombre = $('#txt_nombre').val();
    apellidop = $('#txt_apellidop').val();
    apellidom = $('#txt_apellidom').val();
    correo = $('#txt_correo').val();
    validador= true;

    $("#mensajes").empty();
    $("#mensajes").addClass("text-danger");

    
    if(rut == ""){
        $('#txt_rut').addClass('is-invalid');
        $("#mensajes").append("<li>Debe ingresar un rut</li>");
        validador= false;
    }
    else{
        $('#txt_rut').removeClass('is-invalid');
        $('#txt_rut').addClass('is-valid');   
    }

    if(nombre == ""){
        $('#txt_nombre').addClass('is-invalid');
        $("#mensajes").append("<li>Debe ingresar un nombre</li>");
        validador= false;
    }
    else{
        $('#txt_nombre').removeClass('is-invalid');
        $('#txt_nombre').addClass('is-valid');   
    }
    if(apellidop == ""){
        $('#txt_apellidop').addClass('is-invalid');
        $("#mensajes").append("<li>Debe ingresar un apellido paterno</li>");
        validador= false;
    }
    else{
        $('#txt_apellidop').removeClass('is-invalid');
        $('#txt_apellidop').addClass('is-valid');
    }
    if(apellidom == ""){
        $('#txt_apellidom').addClass('is-invalid');
        $("#mensajes").append("<li>Debe ingresar un apellido materno</li>");
        validador= false;
    }
    else{
        $('#txt_apellidom').removeClass('is-invalid');
        $('#txt_apellidom').addClass('is-valid');
    }
    if(correo == ""){
        $('#txt_correo').addClass('is-invalid');
        $("#mensajes").append("<li>Debe ingresar un correo</li>");
        validador= false;
    }
    else{
        $('#txt_correo').removeClass('is-invalid');
        $('#txt_correo').addClass('is-valid');
    }

    if(validador){
    $("#lbl_registro").text("Usuario registrado correctamente");
    $("#lbl_registro").addClass("text-success");
    $("#lbl_registro").css("visibility","visible")
      } else {
    $("#lbl_registro").css("visibility","hidden")
}
});