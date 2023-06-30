const nodemailer = require('nodemailer');
const nodemailerSendgrid = require('nodemailer-sendgrid');
require('dotenv').config();
const { API_KEY } = process.env;

const createTrans = () => {  
  const transport = nodemailer.createTransport(
    nodemailerSendgrid({
        apiKey: API_KEY
    }))
  return transport;
}
const sendMail = async (user) => {  
    const transporter = createTrans();
    const info = await transporter.sendMail({
        from: '<petconnectrescue1@gmail.com>',
        to: `${user.email}`,
        subject: `Hello ${user.nombre}✔`,
        html: `<b>Hello ${user.nombre}!</b><br>
        <p>Thank you for signing up!</p>`,
    })
    console.log("Message sent: %s", info.messageId);
    return
}

exports.sendMail = (user) => sendMail(user);