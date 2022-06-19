const { request, response } = require('express');
const nodeMailer = require('nodemailer');
const { google } = require('googleapis');
const OAuth2 = google.auth.OAuth2;



const envioCorreo = (req = request, resp = response) => {
    let body = req.body;
    let config = nodeMailer.createTransport({
        host: 'smtp.gmail.com',
        port:465,
        secure: true,
        auth:{
            type: "OAuth2",
            user: "sergioeduardosolishernandez@gmail.com",
            clientId:"704766481143-r0o99hii2uu4m15hf2hv3im7aq4ru226.apps.googleusercontent.com",
            clientSecret:"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",
            refreshToken:"1//04Jm_LGBS-OF7CgYIARAAGAQSNwF-L9IrpnGcACytpwXY_ERLp4IuTpB_wyGu3ZneW1bEJD3EHIg_aCIVKTysh1gLuIccDKufpJY",
            accessToken: "ya29.a0ARrdaM9tEE0SRfxDQR2f6K5rgiaTP5nSEXHjFQPwZzm8_qUY8nlfl1aKUSTwQUmW1vCQqCe51F6sjo4Y3sfsAQOdKWGJDglAmabKbuqF37H03LJ1qpl8x_Y6YyEUdig7UdpxciID6utqaIJa4IiVHd54aUTQ"
        }
    });
   
    const opciones = {
        from: 'storeF',
        subject: body.asunto,
        to: "victor.zaragoza111@gmail.com",
        text: body.mensaje
    };
    console.log(req);
    config.sendMail(opciones, function(error,result){
        if(error) return resp.json({ok:false,msg:error});
        return resp.json({
            ok:true,
            msg:result
        });
    })
}


module.exports = {
    envioCorreo
}