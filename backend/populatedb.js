const mongoose = require('mongoose');
require('dotenv').config();

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

const Image = mongoose.model("Image", ImageSchema, 'playable-images');

const data = [
    {
        imageName: 'cosmic-thrill-seekers',
        targets: {
            target_1: {
                coordinateX: {
                    minCoordinate: 217,
                    maxCoordinate: 267,
                },
                coordinateY: {
                    minCoordinate: 294,
                    maxCoordinate: 344,
                }
            },
            target_2: {
                coordinateX: {
                    minCoordinate: 545,
                    maxCoordinate: 595,
                },
                coordinateY: {
                    minCoordinate: 644,
                    maxCoordinate: 694,
                }
            },
            target_3: {
                coordinateX: {
                    minCoordinate: 188,
                    maxCoordinate: 238,
                },
                coordinateY: {
                    minCoordinate: 525,
                    maxCoordinate: 575,
                }
            }
        }
    }
]

async function populateDatabase() {
    try {
        await mongoose.connect(process.env.DEV_DB_URL);
        await Image.insertMany(data);
        console.log('Sucess');
    } catch (error) {
        console.error('Error populating DB:', error);
    } finally {
        await mongoose.disconnect();
    }
}

populateDatabase();