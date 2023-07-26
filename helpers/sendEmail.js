const nodemailer = require("nodemailer");
require("dotenv").config();

const {META_EMAIL, META_PASSWORD} = process.env;

const nodemailerConfig = {
    host: "smtp.meta.ua",
    port: 465,
    secure: true,
    auth: {
        user: META_EMAIL,
        pass: META_PASSWORD,
    }
};

const transport = nodemailer.createTransport(nodemailerConfig);

// const email ={
//     to: "andrey.hanzel@gmail.com",
//     from: "a.hanzel@meta.ua",
//     subject: "Test email",
//     html: "<p><strong>Test email</strong> from localhost:3000</p>"
// };

// transport.sendEmail(email)
//     .then(() => console.log("Email send success"))
//     .catch((error) => console.log(error.message));

const sendEmail = async (data) => {
    const email = { ...data, from: META_EMAIL };
    await transport.sendMail(email);
    return true;
};
      
module.exports = sendEmail;
