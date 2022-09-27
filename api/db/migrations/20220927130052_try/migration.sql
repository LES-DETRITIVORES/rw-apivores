/*
  Warnings:

  - You are about to drop the column `customerId` on the `Mission` table. All the data in the column will be lost.
  - You are about to drop the column `invoceId` on the `Mission` table. All the data in the column will be lost.
  - You are about to drop the column `workerId` on the `Mission` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Mission" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "status" TEXT NOT NULL DEFAULT '',
    "start" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "end" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Mission" ("end", "id", "start", "status") SELECT "end", "id", "start", "status" FROM "Mission";
DROP TABLE "Mission";
ALTER TABLE "new_Mission" RENAME TO "Mission";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
