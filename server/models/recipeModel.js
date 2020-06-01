let mongoose = require('mongoose');

var recipeSchema = new mongoose.Schema({
    name: String,
    time: String,
    level: String,
});

module.exports = mongoose.model('recipe', recipeSchema);

