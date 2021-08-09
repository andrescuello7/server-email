const Consult = require('../models/consultModels');
const nodemailer = require('nodemailer')

exports.consultaPost = async (req, res) => {
    try {
        const consult = new Consult({
            ...req.body,
            createdAt: Date.now()
        });
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: 'andrescuellotrabajo@gmail.com',
                pass: 'kdzjolhjjbbjvrqj'
            }
        });
        const info = await transporter.sendMail({
            from: "Andres WEb server",
            to: 'andrescuellotrabajo@gmail.com',
            subject: 'Consulta de Website',
            text: `Enviado por ${consult.email}
            Consulta: ${consult.description}`
        });
        console.log('info', info)
        await consult.save();
        res.send(consult);
    } catch (error) {
        console.log(error);
        res.status(400).send('Error en post de consulta');
    }
};
