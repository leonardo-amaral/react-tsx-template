-- CreateTable
CREATE TABLE "Colors" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Text" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "fontSize" TEXT NOT NULL,
    "fontWeight" TEXT NOT NULL,
    "letterSpace" TEXT NOT NULL,
    "textTransform" TEXT NOT NULL,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Inputs" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "border" TEXT NOT NULL,
    "minWidth" TEXT NOT NULL,
    "minHeight" TEXT NOT NULL,
    "borderRadius" TEXT NOT NULL,
    "backgroundColor" TEXT NOT NULL,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Buttons" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "hover" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "border" TEXT NOT NULL,
    "minWidth" TEXT NOT NULL,
    "minHeight" TEXT NOT NULL,
    "borderRadius" TEXT NOT NULL,
    "backgroundColor" TEXT NOT NULL,
    "updatedAt" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Colors_name_key" ON "Colors"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Text_name_key" ON "Text"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Inputs_name_key" ON "Inputs"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Buttons_name_key" ON "Buttons"("name");
