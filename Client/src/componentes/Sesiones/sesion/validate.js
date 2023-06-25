export const validate = (name, value, input) => {
    let error = "";

    switch (name) {
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