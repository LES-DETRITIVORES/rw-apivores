/*
  Warnings:

  - You are about to drop the column `usager` on the `Contact` table. All the data in the column will be lost.
  - You are about to drop the column `usager` on the `Site` table. All the data in the column will be lost.
  - Added the required column `ordre` to the `Contact` table without a default value. This is not possible if the table is not empty.
  - Added the required column `usagerId` to the `Contact` table without a default value. This is not possible if the table is not empty.
  - Added the required column `usagerId` to the `Site` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Contact" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "usagerId" INTEGER NOT NULL,
    "ordre" INTEGER NOT NULL,
    "prenom" TEXT NOT NULL,
    "nom" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "motdepasse" TEXT NOT NULL,
    "telephone1" TEXT NOT NULL,
    "telephone2" TEXT NOT NULL,
    "remarque" TEXT NOT NULL,
    "fonction" TEXT NOT NULL,
    "extranet" BOOLEAN NOT NULL,
    "actif" BOOLEAN NOT NULL,
    CONSTRAINT "Contact_usagerId_fkey" FOREIGN KEY ("usagerId") REFERENCES "Usager" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Contact" ("actif", "email", "extranet", "fonction", "id", "motdepasse", "nom", "prenom", "remarque", "telephone1", "telephone2") SELECT "actif", "email", "extranet", "fonction", "id", "motdepasse", "nom", "prenom", "remarque", "telephone1", "telephone2" FROM "Contact";
DROP TABLE "Contact";
ALTER TABLE "new_Contact" RENAME TO "Contact";
CREATE TABLE "new_Site" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "usagerId" INTEGER NOT NULL,
    "ordre" INTEGER NOT NULL,
    "nom" TEXT NOT NULL,
    "adresse" TEXT NOT NULL,
    "adresse2" TEXT NOT NULL,
    "codePostal" TEXT NOT NULL,
    "ville" TEXT NOT NULL,
    "latitude" TEXT NOT NULL,
    "longitude" TEXT NOT NULL,
    "etage" INTEGER NOT NULL,
    "ascenseur" BOOLEAN NOT NULL,
    "note" TEXT NOT NULL,
    "actif" BOOLEAN NOT NULL,
    CONSTRAINT "Site_usagerId_fkey" FOREIGN KEY ("usagerId") REFERENCES "Usager" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Site" ("actif", "adresse", "adresse2", "ascenseur", "codePostal", "etage", "id", "latitude", "longitude", "nom", "note", "ordre", "ville") SELECT "actif", "adresse", "adresse2", "ascenseur", "codePostal", "etage", "id", "latitude", "longitude", "nom", "note", "ordre", "ville" FROM "Site";
DROP TABLE "Site";
ALTER TABLE "new_Site" RENAME TO "Site";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
