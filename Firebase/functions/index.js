const functions = require("firebase-functions");
const express=require ('express');
//const admin= require ('firebase-admin')
let cors = require('cors');
const bodyparser = require('body-parser');

const app=express();
app.use(cors());
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:false}));

let envio = require ('./correoController');



var serviceAccount = require("./permission.json");



var admin = require("firebase-admin");

var serviceAccount = require("./permission.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});


const bd = admin.firestore();

app.post('/envio',envio.envioCorreo);


app.get('/hello-world',(req,res) => {
    return res.status(200).json({message: 'Hello World'})
})

/*
app.post('/api/products',(req,res)=>{
   await db.collection('articles').doc('/'+req.body.id +'/').create({name:req.body.name})
   return res.status(204).json();
})
*/

app.get ('/api/articles/',async (req,res) => {
    
        try {
            const query = bd.collection("articles");
            const query1 = await query.get();
            const docs = query1.docs;

            const response = docs.map((doc) => ({
                name: doc.data().name,
                description: doc.data().description
            }));

            return res.status(200).json(response);
        } catch (error) {
            return res.status(500).json(error);
        }
    
})


app.get ('/api/users/',async (req,res) => {
    
    try {
        const query = bd.collection("users");
        const query1 = await query.get();
        const docs = query1.docs;

        const response = docs.map((doc) => ({
            logname: doc.data().logname,
            email: doc.data().email
        }));

        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json(error);
    }

})


exports.app=functions.https.onRequest(app);

