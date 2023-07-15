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
        case "ciudad":
            if (!value.trim()) {
                error = "Ciudad es requerida";
            } else if (!/^[A-Za-z ]+$/.test(value)) {
                error = "La ciudad solo debe tener letras";
            }
            break;
        case "direccion":
            if (!value.match(/^[a-zA-Z0-9\s]+$/)) {
                error = "El domicilio solo puede contener letras y números";
            }
            break;  
        case "teléfono":
            if (!value.match(/^\d+$/) || value.length < 8 || value.length > 10) {
                error = "El teléfono debe contener solo números y tener una longitud de 8 a 10 caracteres";
            }
            break;
        case "email":
            if (!value.match(/^\S+@\S+\.\S+$/)) {
                error = "Ingrese un correo electrónico válido";
            }
            break;
        case "password":
            if (value.length > 8) {
                error = "La password debe tener máximo 8 caracteres";
            }
            break;
        default:
            break;
    }

    return error;
};  