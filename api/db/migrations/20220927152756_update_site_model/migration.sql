/*
  Warnings:

  - Added the required column `codeFacture` to the `Site` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Site" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "type" TEXT NOT NULL,
    "actif" BOOLEAN NOT NULL,
    "siret" TEXT NOT NULL,
    "codeFacture" TEXT NOT NULL,
    "nomFacture" TEXT NOT NULL,
    "contactFacture" TEXT NOT NULL,
    "adresseFacture" TEXT NOT NULL,
    "emailFacture" TEXT NOT NULL,
    "telephoneFacture" TEXT NOT NULL,
    "index" TEXT NOT NULL,
    "designation" TEXT NOT NULL,
    "adresse" TEXT NOT NULL,
    "adresse2" TEXT NOT NULL,
    "codePostal" TEXT NOT NULL,
    "villeSite" TEXT NOT NULL,
    "etage" TEXT NOT NULL,
    "ascenseur" BOOLEAN NOT NULL,
    "acces" TEXT NOT NULL,
    "latitude" TEXT NOT NULL,
    "longitude" TEXT NOT NULL
);
INSERT INTO "new_Site" ("acces", "actif", "adresse", "adresse2", "adresseFacture", "ascenseur", "codePostal", "contactFacture", "designation", "emailFacture", "etage", "id", "index", "latitude", "longitude", "nomFacture", "siret", "telephoneFacture", "type", "villeSite") SELECT "acces", "actif", "adresse", "adresse2", "adresseFacture", "ascenseur", "codePostal", "contactFacture", "designation", "emailFacture", "etage", "id", "index", "latitude", "longitude", "nomFacture", "siret", "telephoneFacture", "type", "villeSite" FROM "Site";
DROP TABLE "Site";
ALTER TABLE "new_Site" RENAME TO "Site";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
