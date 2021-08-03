const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const port = process.env.PORT || 5000
require("dotenv").config()

// config
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));


// connect to mongodb
mongoose
     .connect(process.env.MONGODB_CONNECTION_STRING,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          })
     .then(() => console.log("MongoDB has been connected"))
     .catch((err) => console.log(err));

// data schema
const itemSchema = {
    text: String,
    description: String,
    owner: String,
    reminder: Boolean,

}

// data model
const Item = mongoose.model("Item", itemSchema)

// read route
app.get('/items', (req, res) => {
    Item.find()
    .then(items => res.json(items))
    .catch(err => res.status(400).json('Error: ' + err))
});




// create route
app.post('/newitem', (req, res) => {
    const newItem = new Item (
        {
            text: req.body.text,
            description: req.body.description,
            owner: req.body.owner,
            reminder: req.body.reminder,
        }
    );

    newItem.save()
    .then(item => res.json(item))
    .catch(err => res.status(400).json("Error " + err));

});

// delete route
app.delete('/delete/:id', (req, res) => {
    const id = req.params.id;

    Item.findByIdAndDelete({_id: id}, (req, res, err) => {
        if(!err) {
            console.log("Item deleted!", id);
        } else {
            console.log(err)
        }
    });
    data = res.json();
});

// update route
app.put('/put/:id', (req, res) => {
    console.log('route touched')

    Item.findOneAndUpdate(
        { _id: req.params.id },
        [{ $set: { reminder: {$not: "$reminder" } } }],
        (req, res, err) => {
            if (!err) {
                console.log("Item successfully updated");
            } else {
                console.log(err)
            }
        }
    );
    data = res.json();
});

app.listen(port, () => {
    console.log(`Express is now running on ${port}`);
});