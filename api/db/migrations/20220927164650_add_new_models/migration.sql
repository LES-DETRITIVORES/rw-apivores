/*
  Warnings:

  - You are about to drop the column `acces` on the `Site` table. All the data in the column will be lost.
  - You are about to drop the column `adresseFacture` on the `Site` table. All the data in the column will be lost.
  - You are about to drop the column `codeFacture` on the `Site` table. All the data in the column will be lost.
  - You are about to drop the column `contactFacture` on the `Site` table. All the data in the column will be lost.
  - You are about to drop the column `designation` on the `Site` table. All the data in the column will be lost.
  - You are about to drop the column `emailFacture` on the `Site` table. All the data in the column will be lost.
  - You are about to drop the column `index` on the `Site` table. All the data in the column will be lost.
  - You are about to drop the column `mentionFacture` on the `Site` table. All the data in the column will be lost.
  - You are about to drop the column `nomFacture` on the `Site` table. All the data in the column will be lost.
  - You are about to drop the column `siret` on the `Site` table. All the data in the column will be lost.
  - You are about to drop the column `telephoneFacture` on the `Site` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `Site` table. All the data in the column will be lost.
  - You are about to drop the column `villeSite` on the `Site` table. All the data in the column will be lost.
  - Added the required column `nom` to the `Site` table without a default value. This is not possible if the table is not empty.
  - Added the required column `note` to the `Site` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ordre` to the `Site` table without a default value. This is not possible if the table is not empty.
  - Added the required column `usager` to the `Site` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ville` to the `Site` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "Usager" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nom" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "siret" TEXT NOT NULL,
    "tiers" TEXT NOT NULL,
    "contact" TEXT NOT NULL,
    "adresse" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telephone" TEXT NOT NULL,
    "reference" TEXT NOT NULL,
    "note" TEXT NOT NULL,
    "actif" BOOLEAN NOT NULL
);

-- CreateTable
CREATE TABLE "Contact" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "prenom" TEXT NOT NULL,
    "nom" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Materiel" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nom" TEXT NOT NULL,
    "poids" INTEGER NOT NULL,
    "actif" BOOLEAN NOT NULL
);

-- CreateTable
CREATE TABLE "Matiere" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nom" TEXT NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Site" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "usager" TEXT NOT NULL,
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
    "actif" BOOLEAN NOT NULL
);
INSERT INTO "new_Site" ("actif", "adresse", "adresse2", "ascenseur", "codePostal", "etage", "id", "latitude", "longitude") SELECT "actif", "adresse", "adresse2", "ascenseur", "codePostal", "etage", "id", "latitude", "longitude" FROM "Site";
DROP TABLE "Site";
ALTER TABLE "new_Site" RENAME TO "Site";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
