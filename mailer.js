const nodemailer = require("nodemailer");

async function main() {
    console.log('run mailer')

    const smtpConfig = {
        service: 'smtp.gmail.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'oshurektest@gmail.com',
            pass: '5289731460qaz'
        },
        tls:{
            rejectUnAuthorized:true
        }
    };

    
    let transporter = nodemailer.createTransport({ smtpConfig });
    
    transporter.verify((error, success) => {
        if(error) {
            console.log(error)
        } else {
            console.log('Server is redy to take our message')
        }
    })

    mailOptions = {
        from: 'ooshurek@gmail.com', // sender address
        to: "Nodemailer <oshurek666bmx@gmail.com>", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
    }

    let info = await transporter.sendMail(mailOptions, (error, info) => {
        if(error) {
            console.log(error + '-------------------')
        } else {
            console.log('Message sent: ' + info.response)
        }
    })

    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}
  
module.exports = main;

// main().catch(console.error);