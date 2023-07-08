export const validate = (name, value, input) => {
    let error = "";

    switch (name) {
        case "email":
            if (!value.match(/^\S+@\S+\.\S+$/)) {
                error = "Ingrese un correo electrónico válido";
            }
            break;
        case "contraseña":
            if (value.length >= 8) {
                error = "La password debe tener máximo 8 caracteres";
            }
            break;
        default:
            break;
    }

    return error;
};  