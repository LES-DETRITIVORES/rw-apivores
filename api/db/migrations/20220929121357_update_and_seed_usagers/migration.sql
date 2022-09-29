/*
  Warnings:

  - You are about to drop the column `telephone` on the `Usager` table. All the data in the column will be lost.
  - Added the required column `adresse2` to the `Usager` table without a default value. This is not possible if the table is not empty.
  - Added the required column `codePostal` to the `Usager` table without a default value. This is not possible if the table is not empty.
  - Added the required column `telephone1` to the `Usager` table without a default value. This is not possible if the table is not empty.
  - Added the required column `telephone2` to the `Usager` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ville` to the `Usager` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Usager" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nom" TEXT NOT NULL,
    "tiers" TEXT NOT NULL,
    "contact" TEXT NOT NULL,
    "adresse" TEXT NOT NULL,
    "adresse2" TEXT NOT NULL,
    "codePostal" TEXT NOT NULL,
    "ville" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telephone1" TEXT NOT NULL,
    "telephone2" TEXT NOT NULL,
    "note" TEXT NOT NULL,
    "actif" BOOLEAN NOT NULL
);
INSERT INTO "new_Usager" ("actif", "adresse", "contact", "email", "id", "nom", "note", "tiers") SELECT "actif", "adresse", "contact", "email", "id", "nom", "note", "tiers" FROM "Usager";
DROP TABLE "Usager";
ALTER TABLE "new_Usager" RENAME TO "Usager";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
