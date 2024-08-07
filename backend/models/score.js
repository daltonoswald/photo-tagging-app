const mongoose = require('mongoose');

const { Schema } = mongoose;

const ScoresSchema = new Schema({
    imageName: { type: String },
    username: { type: String },
    time: { type: Number },
    timestamp: { type: Date },
})

module.exports = mongoose.model("Scores", ScoresSchema, 'scores')