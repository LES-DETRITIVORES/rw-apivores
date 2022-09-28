/*
  Warnings:

  - You are about to drop the column `site` on the `Tarif` table. All the data in the column will be lost.
  - Added the required column `bac` to the `Tarif` table without a default value. This is not possible if the table is not empty.
  - Added the required column `siteId` to the `Tarif` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Tarif" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "date" DATETIME NOT NULL,
    "siteId" INTEGER NOT NULL,
    "prestation" TEXT NOT NULL,
    "prix" REAL NOT NULL,
    "passage" BOOLEAN NOT NULL,
    "bac" BOOLEAN NOT NULL,
    "actif" BOOLEAN NOT NULL,
    CONSTRAINT "Tarif_siteId_fkey" FOREIGN KEY ("siteId") REFERENCES "Site" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Tarif" ("actif", "date", "id", "passage", "prestation", "prix") SELECT "actif", "date", "id", "passage", "prestation", "prix" FROM "Tarif";
DROP TABLE "Tarif";
ALTER TABLE "new_Tarif" RENAME TO "Tarif";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
