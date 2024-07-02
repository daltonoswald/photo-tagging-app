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
                    minCoordinate: 265,
                    maxCoordinate: 315,
                },
                coordinateY: {
                    minCoordinate: 365,
                    maxCoordinate: 415,
                }
            },
            target_2: {
                coordinateX: {
                    minCoordinate: 675,
                    maxCoordinate: 725,
                },
                coordinateY: {
                    minCoordinate: 803,
                    maxCoordinate: 853,
                }
            },
            target_3: {
                coordinateX: {
                    minCoordinate: 230,
                    maxCoordinate: 280,
                },
                coordinateY: {
                    minCoordinate: 652,
                    maxCoordinate: 702,
                }
            }
        }
    },
    {
        imageName: 'smash-bros-ultimate',
        targets: {
            target_1: {
                coordinateX: {
                    minCoordinate: 2626,
                    maxCoordinate: 2676,
                },
                coordinateY: {
                    minCoordinate: 509,
                    maxCoordinate: 559,
                }
            },
            target_2: {
                coordinateX: {
                    minCoordinate: 3670,
                    maxCoordinate: 3720,
                },
                coordinateY: {
                    minCoordinate: 570,
                    maxCoordinate: 620,
                }
            },
            target_3: {
                coordinateX: {
                    minCoordinate: 455,
                    maxCoordinate: 505,
                },
                coordinateY: {
                    minCoordinate: 258,
                    maxCoordinate: 308,
                }
            }
        }  
    }
]

async function populateDatabase() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        await Image.insertMany(data);
        console.log(data);
        console.log('Success');
    } catch (error) {
        console.error('Error populating DB:', error);
    } finally {
        await mongoose.disconnect();
    }
}

populateDatabase();