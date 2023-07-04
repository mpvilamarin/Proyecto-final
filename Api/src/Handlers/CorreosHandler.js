
const nodemailer = require('nodemailer');
require('dotenv').config();
const {USER_EMAIL, PASS_EMAIL} = process.env;


async function enviarCorreoBienvenida(email, nombre) {
    
    try {
        
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: USER_EMAIL,
                pass: PASS_EMAIL
            } 
        });

        let correo = {
            from: USER_EMAIL,
            to: email,
            subject: 'Bienvenido a nuestra aplicación',
            text: '¡Hola! Gracias por crear tu perfil en nuestra aplicación. Esperamos que disfrutes de todas las funciones que ofrecemos.',
            html: `
            <table
                border="0"
                cellpadding="0"
                cellspacing="0"
                width="600px"
                style="font-family: Arial, sans-serif; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);"
            >
                <tr height="200px" style="background-color: #2d3436; border-radius: 10px 10px 0 0;">
                    <td width="600px" style="text-align: center; padding-top: 40px;">
                        <h1 style="color: #fff; font-size: 36px; margin: 0;">¡Bienvenido!</h1>
                        <p style="color: #fff; font-size: 18px; margin: 10px 0;">
                            <span style="color: #e84393; font-weight: bold;">${nombre}</span> a la aplicación
                        </p>
                    </td>
                </tr>

                <tr>
                    <td style="text-align: center; padding: 20px;">
                        <p style="color: #000; font-size: 20px; margin: 0;">Adopta a tu mejor compañía con un clic.</p>
                    </td>
                </tr>
            </table>`
                
        };

        let info = await transporter.sendMail(correo);
        console.log('Correo de bienvenida enviado: ' + info.messageId);
    } catch (error) {
        console.error('Error al enviar el correo de bienvenida:', error);
    }
}


module.exports = enviarCorreoBienvenida;