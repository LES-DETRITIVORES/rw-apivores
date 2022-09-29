/*
  Warnings:

  - You are about to drop the column `siret` on the `Usager` table. All the data in the column will be lost.
  - You are about to drop the column `matiere` on the `Inventaire` table. All the data in the column will be lost.
  - Added the required column `actif` to the `Inventaire` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "Tournee" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Agent" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "prenom" TEXT NOT NULL,
    "nom" TEXT NOT NULL,
    "actif" BOOLEAN NOT NULL,
    "tourneeId" INTEGER,
    CONSTRAINT "Agent_tourneeId_fkey" FOREIGN KEY ("tourneeId") REFERENCES "Tournee" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Agent" ("actif", "id", "nom", "prenom") SELECT "actif", "id", "nom", "prenom" FROM "Agent";
DROP TABLE "Agent";
ALTER TABLE "new_Agent" RENAME TO "Agent";
CREATE TABLE "new_Usager" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nom" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "tiers" TEXT NOT NULL,
    "contact" TEXT NOT NULL,
    "adresse" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telephone" TEXT NOT NULL,
    "reference" TEXT NOT NULL,
    "note" TEXT NOT NULL,
    "actif" BOOLEAN NOT NULL
);
INSERT INTO "new_Usager" ("actif", "adresse", "contact", "email", "id", "nom", "note", "reference", "telephone", "tiers", "type") SELECT "actif", "adresse", "contact", "email", "id", "nom", "note", "reference", "telephone", "tiers", "type" FROM "Usager";
DROP TABLE "Usager";
ALTER TABLE "new_Usager" RENAME TO "Usager";
CREATE TABLE "new_Inventaire" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "site" TEXT NOT NULL,
    "materiel" TEXT NOT NULL,
    "quantite" INTEGER NOT NULL,
    "note" TEXT NOT NULL,
    "actif" BOOLEAN NOT NULL
);
INSERT INTO "new_Inventaire" ("id", "materiel", "note", "quantite", "site") SELECT "id", "materiel", "note", "quantite", "site" FROM "Inventaire";
DROP TABLE "Inventaire";
ALTER TABLE "new_Inventaire" RENAME TO "Inventaire";
CREATE TABLE "new_Vehicule" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nom" TEXT NOT NULL,
    "immatriculation" TEXT NOT NULL,
    "identifiant" TEXT NOT NULL,
    "couleur" TEXT NOT NULL,
    "icone" TEXT NOT NULL,
    "ordre" INTEGER NOT NULL,
    "actif" BOOLEAN NOT NULL,
    "tourneeId" INTEGER,
    CONSTRAINT "Vehicule_tourneeId_fkey" FOREIGN KEY ("tourneeId") REFERENCES "Tournee" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Vehicule" ("actif", "couleur", "icone", "id", "identifiant", "immatriculation", "nom", "ordre") SELECT "actif", "couleur", "icone", "id", "identifiant", "immatriculation", "nom", "ordre" FROM "Vehicule";
DROP TABLE "Vehicule";
ALTER TABLE "new_Vehicule" RENAME TO "Vehicule";
CREATE UNIQUE INDEX "Vehicule_tourneeId_key" ON "Vehicule"("tourneeId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
