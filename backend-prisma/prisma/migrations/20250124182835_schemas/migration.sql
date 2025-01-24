-- CreateTable
CREATE TABLE "Score" (
    "id" TEXT NOT NULL,
    "image_name" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "time" INTEGER NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Score_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Image" (
    "id" TEXT NOT NULL,
    "image_name" TEXT NOT NULL,
    "target_1_x_min" INTEGER NOT NULL,
    "target_1_x_max" INTEGER NOT NULL,
    "target_1_y_min" INTEGER NOT NULL,
    "target_1_y_max" INTEGER NOT NULL,
    "target_2_x_min" INTEGER NOT NULL,
    "target_2_x_max" INTEGER NOT NULL,
    "target_2_y_min" INTEGER NOT NULL,
    "target_2_y_max" INTEGER NOT NULL,
    "target_3_x_min" INTEGER NOT NULL,
    "target_3_x_max" INTEGER NOT NULL,
    "target_3_y_min" INTEGER NOT NULL,
    "target_3_y_max" INTEGER NOT NULL,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("id")
);
