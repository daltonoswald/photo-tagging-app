const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
async function main() {
    const cosmicthrillseekers = await prisma.image.create({
        data: {
            image_name: 'cosmic-thrill-seekers',
            target_1_x_min: 265,
            target_1_x_max: 315,
            target_1_y_min: 365,
            target_1_y_max: 415,
            target_2_x_min: 675,
            target_2_x_max: 725,
            target_2_y_min: 803,
            target_2_y_max: 853,
            target_3_x_min: 230,
            target_3_x_max: 280,
            target_3_y_min: 652,
            target_3_y_max: 702,
        }
    });
    const smashbrosultimate = await prisma.image.create({
        data: {
            image_name: 'smash-bros-ultimate',
            target_1_x_min: 2626,
            target_1_x_max: 2676,
            target_1_y_min: 509,
            target_1_y_max: 559,
            target_2_x_min: 3670,
            target_2_x_max: 3720,
            target_2_y_min: 570,
            target_2_y_max: 620,
            target_3_x_min: 455,
            target_3_x_max: 505,
            target_3_y_min: 258,
            target_3_y_max: 308,
        }
    })
    console.log(cosmicthrillseekers, smashbrosultimate);
}

main()
.then(async () => {
    await prisma.$disconnect()
})
.catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
})