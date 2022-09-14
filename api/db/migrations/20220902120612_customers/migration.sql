/*
  Warnings:

  - Added the required column `barcode` to the `Container` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Container` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Container" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "barcode" TEXT NOT NULL,
    "type" TEXT NOT NULL
);
INSERT INTO "new_Container" ("id", "name") SELECT "id", "name" FROM "Container";
DROP TABLE "Container";
ALTER TABLE "new_Container" RENAME TO "Container";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
