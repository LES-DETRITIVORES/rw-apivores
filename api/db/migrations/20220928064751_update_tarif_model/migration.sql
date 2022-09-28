/*
  Warnings:

  - Added the required column `actif` to the `Contact` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `Contact` table without a default value. This is not possible if the table is not empty.
  - Added the required column `extranet` to the `Contact` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fonction` to the `Contact` table without a default value. This is not possible if the table is not empty.
  - Added the required column `motdepasse` to the `Contact` table without a default value. This is not possible if the table is not empty.
  - Added the required column `remarque` to the `Contact` table without a default value. This is not possible if the table is not empty.
  - Added the required column `telephone1` to the `Contact` table without a default value. This is not possible if the table is not empty.
  - Added the required column `telephone2` to the `Contact` table without a default value. This is not possible if the table is not empty.
  - Added the required column `usager` to the `Contact` table without a default value. This is not possible if the table is not empty.
  - Added the required column `actif` to the `Tarif` table without a default value. This is not possible if the table is not empty.
  - Added the required column `passage` to the `Tarif` table without a default value. This is not possible if the table is not empty.
  - Added the required column `actif` to the `Matiere` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "Inventaire" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "site" TEXT NOT NULL,
    "materiel" TEXT NOT NULL,
    "matiere" TEXT NOT NULL,
    "quantite" INTEGER NOT NULL,
    "note" TEXT NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Contact" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "usager" TEXT NOT NULL,
    "prenom" TEXT NOT NULL,
    "nom" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "motdepasse" TEXT NOT NULL,
    "telephone1" TEXT NOT NULL,
    "telephone2" TEXT NOT NULL,
    "remarque" TEXT NOT NULL,
    "fonction" TEXT NOT NULL,
    "extranet" BOOLEAN NOT NULL,
    "actif" BOOLEAN NOT NULL
);
INSERT INTO "new_Contact" ("id", "nom", "prenom") SELECT "id", "nom", "prenom" FROM "Contact";
DROP TABLE "Contact";
ALTER TABLE "new_Contact" RENAME TO "Contact";
CREATE TABLE "new_Tarif" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "date" DATETIME NOT NULL,
    "site" TEXT NOT NULL,
    "prestation" TEXT NOT NULL,
    "prix" REAL NOT NULL,
    "passage" BOOLEAN NOT NULL,
    "actif" BOOLEAN NOT NULL
);
INSERT INTO "new_Tarif" ("date", "id", "prestation", "prix", "site") SELECT "date", "id", "prestation", "prix", "site" FROM "Tarif";
DROP TABLE "Tarif";
ALTER TABLE "new_Tarif" RENAME TO "Tarif";
CREATE TABLE "new_Matiere" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nom" TEXT NOT NULL,
    "actif" BOOLEAN NOT NULL
);
INSERT INTO "new_Matiere" ("id", "nom") SELECT "id", "nom" FROM "Matiere";
DROP TABLE "Matiere";
ALTER TABLE "new_Matiere" RENAME TO "Matiere";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
