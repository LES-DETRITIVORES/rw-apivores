/*
  Warnings:

  - You are about to drop the `Chauffeur` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `chauffeur` on the `Exploitation` table. All the data in the column will be lost.
  - Added the required column `agent` to the `Exploitation` table without a default value. This is not possible if the table is not empty.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Chauffeur";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Agent" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nom" TEXT NOT NULL,
    "prenom" TEXT NOT NULL,
    "actif" BOOLEAN NOT NULL
);

-- CreateTable
CREATE TABLE "Vehicule" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nom" TEXT NOT NULL,
    "immatriculation" TEXT NOT NULL,
    "identifiant" TEXT NOT NULL,
    "couleur" TEXT NOT NULL,
    "icone" TEXT NOT NULL,
    "actif" BOOLEAN NOT NULL,
    "ordre" INTEGER NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Exploitation" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "tourneeId" INTEGER NOT NULL,
    "immatriculation" TEXT NOT NULL,
    "agent" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "type" TEXT NOT NULL,
    "clientId" INTEGER NOT NULL,
    "client" TEXT NOT NULL,
    "site" TEXT NOT NULL,
    "nbContenant" INTEGER NOT NULL,
    "typeContenant" TEXT NOT NULL,
    "matiere" TEXT NOT NULL,
    "poids" INTEGER NOT NULL,
    "qualite3" INTEGER NOT NULL,
    "qualite2" INTEGER NOT NULL,
    "qualite1" INTEGER NOT NULL,
    "commentairesRDV" TEXT NOT NULL,
    "commentairesContenu" TEXT NOT NULL,
    "photos" TEXT NOT NULL
);
INSERT INTO "new_Exploitation" ("client", "clientId", "commentairesContenu", "commentairesRDV", "date", "id", "immatriculation", "matiere", "nbContenant", "photos", "poids", "qualite1", "qualite2", "qualite3", "site", "tourneeId", "type", "typeContenant") SELECT "client", "clientId", "commentairesContenu", "commentairesRDV", "date", "id", "immatriculation", "matiere", "nbContenant", "photos", "poids", "qualite1", "qualite2", "qualite3", "site", "tourneeId", "type", "typeContenant" FROM "Exploitation";
DROP TABLE "Exploitation";
ALTER TABLE "new_Exploitation" RENAME TO "Exploitation";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
