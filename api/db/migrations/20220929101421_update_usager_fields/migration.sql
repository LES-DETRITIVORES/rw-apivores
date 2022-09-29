/*
  Warnings:

  - You are about to drop the column `reference` on the `Usager` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `Usager` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Usager" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nom" TEXT NOT NULL,
    "tiers" TEXT NOT NULL,
    "contact" TEXT NOT NULL,
    "adresse" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telephone" TEXT NOT NULL,
    "note" TEXT NOT NULL,
    "actif" BOOLEAN NOT NULL
);
INSERT INTO "new_Usager" ("actif", "adresse", "contact", "email", "id", "nom", "note", "telephone", "tiers") SELECT "actif", "adresse", "contact", "email", "id", "nom", "note", "telephone", "tiers" FROM "Usager";
DROP TABLE "Usager";
ALTER TABLE "new_Usager" RENAME TO "Usager";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
