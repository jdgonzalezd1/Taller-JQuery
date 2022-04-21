$(document).ready(function () {
    $("#formT").submit(function (e) {
        e.preventDefault();
        imprimirDatos();
    });

    $("#formT").validate({
        rules: {
            Documento: {
                required: true,
            },
            NumDoc: {
                required: true,
                number: true,
            },
            Nombre: {
                required: true,
                minlength: 3,
                maxlength: 45
            },
            Apellido: {
                required: true,
                minlength: 3,
                maxlength: 45
            },
            Genero: {
                required: true
            },
            Correo: {
                required: true,
                email: true
            },
            Profesion: {
                required: true,
                maxlength: 75
            },
            Perfil: {
                required: true,
                maxlength: 250
            },
            Hobbie: {
                required: true,
                minlength: 1
            }
        },
        messages: {
            Documento: {
                required: "Debe seleccionar una opción"
            },
            NumDoc: {
                required: "Ingrese un número de documento",
                number: "Ingrese un valor numérico",
            },
            Nombre: {
                required: "Ingrese su nombre",
                minlength: "El nombre debe contener más de 3 caracteres",
                maxlength: "El nombre no debe exceder los 45 caracteres"
            },
            Apellido: {
                required: "Ingrese su apellido",
                minlength: "El apellido debe contener más de 3 caracteres",
                maxlength: "El apellido no debe exceder los 45 caracteres"
            },
            Genero: {
                required: "Debe seleccionar una opción"
            },
            Correo: {
                required: "Debe ingresar un correo",
                email: "El correo debe estar en formato ejemplo@ejemplo.com"
            },
            Profesion: {
                required: "Debe ingresar una profesión",
                maxlength: "El valor no debe exceder los 75 caracteres"
            },
            Perfil: {
                required: "Debe ingresar su perfil profesional",
                maxlength: "Su perfil no debe exceder los 250 caracteres"
            },
            Hobbie: {
                required: "Debe seleccionar al menos una opción"
            },
            Experiencia: {
                required: "Debe ingresar su experiencia"
            }
        }
    });

    $("#exp1").change(function () {
        if ($(this).prop("checked")) {
            $("#experiencia").show();
            $('#experiencia').prop('required', true);
        } else {
            $("#experiencia").hide();
            $('#experiencia').prop('required', false);
        }
    });
});

function imprimirDatos() {
    if ($("#formT").valid()) {
        $("#formT").hide();
        $("#imprimirSect").show();
        anadirNodo($("#tipoDoc"));
        anadirNodo($("#numDoc"));
        anadirNodo($("#nombre"));
        anadirNodo($("#apellido"));
        anadirNodo($("#correo"));
        anadirNodoCheck($('input[name="Genero"]:checked').attr("id"), "Genero");
        anadirNodo($("#profesion"));
        anadirNodo($("#perfil"));
        anadirNodoCheck($("input[name=Hobbie]:checked").map(function () {
            return this.id;
        }).get().join(", "), "Hobbie")
        anadirNodo($("#experiencia"));
    }
}


function anadirNodo(x) {
    if (!x.val() == "") {
        $("#imprimirSect").append("<h6>" + x.attr("name") + "</h6>");
        $("#imprimirSect").append("<p>" + x.val() + "</p>");
    }
}

function obtenerValores() {
    $("input[name=]:checked").map(function () {
        return this.value;
    }).get().join(",")
}

function anadirNodoCheck(x, tag) {
    $("#imprimirSect").append("<h6>" + tag + "</h6>");
    $("#imprimirSect").append("<p>" + x + "</p>")
}




