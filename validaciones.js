function validarFormulario() {
    let nombre = document.getElementById("nombre").value.trim();
    let apellido1 = document.getElementById("apellido1").value.trim();
    let apellido2 = document.getElementById("apellido2").value.trim();
    let fecha = document.getElementById("fecha").value;
    let email = document.getElementById("email").value.trim();
    let pass1 = document.getElementById("pass1").value;
    let pass2 = document.getElementById("pass2").value;

    let errores = "";

    // Campos obligatorios
    if (!nombre || !apellido1 || !fecha || !email || !pass1 || !pass2) {
        errores += "Todos los campos obligatorios deben estar completos.<br>";
    }

    // Email válido
    let patronEmail = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    if (!patronEmail.test(email)) {
        errores += "El email no tiene un formato válido.<br>";
    }

    // Mayor de edad
    let hoy = new Date();
    let fechaNac = new Date(fecha);
    let edad = hoy.getFullYear() - fechaNac.getFullYear();
    let mes = hoy.getMonth() - fechaNac.getMonth();

    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNac.getDate())) {
        edad--;
    }

    if (edad < 18) {
        errores += "Debes ser mayor de edad para registrarte.<br>";
    }

    // Fecha futura
    if (fechaNac > hoy) {
        errores += "La fecha de nacimiento no puede ser futura.<br>";
    }

    // Contraseñas iguales
    if (pass1 !== pass2) {
        errores += "Las contraseñas no coinciden.<br>";
    }

    // Longitud contraseña
    if (pass1.length < 8) {
        errores += "La contraseña debe tener al menos 8 caracteres.<br>";
    }

    // Mostrar errores
    document.getElementById("errores").innerHTML = errores;

    // Si no hay errores
    if (errores === "") {
        document.body.style.backgroundColor = "#d4ffd4";
        alert("Se ha creado correctamente la cuenta de " + nombre + " " + apellido1);
    }
}
