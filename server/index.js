
var express = require('express');
var mongoose = require('mongoose');
var recipeModel = require('./models/recipeModel');
var cors = require('cors');
var bodyParser = require('body-parser');
var app = express();

app.use(cors());
app.use(bodyParser.json());

// var MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost/RecipeDB';
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {


    app.post('/addRecipe', (request, res) => {
        //insert one recipe
        var newR = new recipeModel(request.body);
        newR.save().then(doc => {
            res.send(doc);
        });
    });

    app.get('/RecipiesList', (request, res) => {
        recipeModel.find().then(docs => {
            res.send(docs);
        });
    });

});


app.listen(3000, () => {
    console.log('server started on port 3000');
});