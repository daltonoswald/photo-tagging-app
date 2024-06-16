const mongoose = require('mongoose');

const { Schema } = mongoose;

const ImageSchema = new Schema({
    imageName: { type: String },
    targets: {
        target_1: {
            coordinateX: {
                minCoordinate: { type: Number },
                maxCoordinate: { type: Number },
            },
            coordinateY: {
                minCoordinate: { type: Number },
                maxCoordinate: { type: Number },
            }
        },
        target_2: {
            coordinateX: {
                minCoordinate: { type: Number },
                maxCoordinate: { type: Number },
            },
            coordinateY: {
                minCoordinate: { type: Number },
                maxCoordinate: { type: Number },
            }
        },
        target_3: {
            coordinateX: {
                minCoordinate: { type: Number },
                maxCoordinate: { type: Number },
            },
            coordinateY: {
                minCoordinate: { type: Number },
                maxCoordinate: { type: Number },
            }
        }
    }
});

module.exports = mongoose.model('Image', ImageSchema, 'playable-images');