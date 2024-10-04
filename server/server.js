const express = require('express');
const mongoose = require('mongoose');
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

    app.listen(port, () => {
        console.log(`Server Started at port : ${port}`);
    });

} )
 