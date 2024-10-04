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

    app.get('/adminlist', async(req, res) => {
        const admin = await Admin.find();
        const list = admin.map( async(obj) => {
            // let card = await Card.find({
            //     _id : obj.card
            //     } );
            return JSON.text(obj.card);
        } );
        res.send(list);
    });

    app.post('/card/add', async(req, res) => {
        const card = new Card({ 
            ...req.body
        });
        const ans =  await card.save();
        res.send(ans);
    });

    app.post('/adminlist/add/:id', async(req, res) => {
        const card = new Admin({card: req.params.id});
        const ans = await card.save();
        res.send(ans);
    });

    app.listen(port, () => {
        console.log(`Server Started at port : ${port}`);
    });

} )
 