const express = require('express');
const mongoose = require('mongoose');
const os = require('os');
const fs = require('fs');
const cors = require('cors');
const Card = require('./card');
const Admin = require('./admin');

const port = 4000;

mongoose.connect('mongodb+srv://priyanshu171561:Ti8qktNzN85cYfIr@priyanshu.tdnpa.mongodb.net/Cards').then( () => {

    console.log('Connected to Database');   

    const app = express();

    app.use(cors());

    app.use(express.json());


    app.get('/cards', async(req, res) => {
        const cards = await Card.find();
        res.send(cards);
    } );

    app.get('/getcard/:id', async(req, res) => {
        const id = req.params.id;
        const card = await Card.find({ _id : id });
        res.send(card);
    })

    app.post('/card/add', async(req, res) => {
        const card = new Card({ 
            ...req.body
        });
        const ans =  await card.save();
        res.send(ans);
    });



    app.get('/adminlist', async(req, res) => {
        const admin = await Admin.findOne({name: 'admin'});
        const cart = await Promise.all(admin.cart.map(async (id) => {
            const card = await Card.findOne({ _id: id });
            if (card) return card;
            return 'Not Found';
        }));
        res.send(cart);
    });


    app.post('/adminlist/add/:id', async(req, res) => {
        const admin = await Admin.findOne({name: 'admin'});
        admin.cart.push(req.params.id);
        const ans = await admin.save();
        res.send(ans);
    });

    app.delete('/adminlist/delete/:index', async (req, res) => {
        const admin = await Admin.findOne({name: 'admin'});
        admin.cart.splice(req.params.index, 1);
        const saved = await admin.save();

        const cart = await Promise.all(saved.cart.map(async (id) => {
            const card = await Card.findOne({ _id: id });
            if (card) return card;
            return 'Not Found';
        }));

        res.send(cart);
    });



    app.listen(port, () => {
        console.log(`Server Started at port : ${port}`);
    });

} )
 




// Get the network interfaces
const networkInterfaces = os.networkInterfaces();

// Loop through network interfaces and find IPv4 addresses
for (const interfaceName in networkInterfaces) {
    const addresses = networkInterfaces[interfaceName];

    for (const addressInfo of addresses) {

        if (addressInfo.family === 'IPv4' && !addressInfo.internal) {

            const string = `export const apiBaseUrl = 'http://${addressInfo.address}:${port}';\n`; 

            fs.writeFile('../ums/src/apiBaseUrl.js', string, 'utf8', (err) => {
                if (err) throw err;
            });

        }
    }
}