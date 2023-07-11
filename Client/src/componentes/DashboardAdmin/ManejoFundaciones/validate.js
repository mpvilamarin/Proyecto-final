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
        case "numeroIdentificacion":
            if (!value.trim()) {
                error = "numeroIdentificacion es requerida";
            } else if (!/^\d+$/.test(value)) {
                error = "La numeroIdentificacion solo debe contener números";
            }
            break;

        case "email":
            if (!value.match(/^\S+@\S+\.\S+$/)) {
                error = "Ingrese un correo electrónico válido";
            }
            break;
        case "contraseña":
            if (value.length < 12) {
                error = "La contraseña debe tener máximo 11 caracteres";
            }
            break;
        default:
            break;
    }

    return error;
};  