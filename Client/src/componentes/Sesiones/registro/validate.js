export const validate = (name, value, input) => {
    let error = "";

    switch (name) {
        case "nombre":
            if (!value.trim()) {
                error = "Nombre es requerido";
            } else if (!/^[A-Za-z ]+$/.test(value)) {
                error = "El nombre solo debe tener letras";
            }
            break;
        case "apellido":
            if (!value.trim()) {
                error = "Apellido es requerido";
            } else if (!/^[A-Za-z ]+$/.test(value)) {
                error = "El apellido solo debe tener letras";
            }
            break;
        case "edad":
            if (!value.match(/^[0-9]{1,2}$/)) {
                error = "La edad debe ser un número de 1 a 2 dígitos";
            }
            break;
        case "domicilio":
            if (!value.match(/^[a-zA-Z0-9\s]+$/)) {
                error = "El domicilio solo puede contener letras y números";
            }
            break;
        case "teléfono":
            if (!value.match(/^\d+$/) || value.length < 8 || value.length > 10) {
                error = "El teléfono debe contener solo números y tener una longitud de 8 a 10 caracteres";
            }
            break;
        case "correo":
            if (!value.match(/^\S+@\S+\.\S+$/)) {
                error = "Ingrese un correo electrónico válido";
            }
            break;
        case "contraseña":
            if (value.length > 8) {
                error = "La contraseña debe tener máximo 8 caracteres";
            }
            break;
        default:
            break;
    }

    return error;
};  