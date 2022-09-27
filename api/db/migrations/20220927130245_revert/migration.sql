/*
  Warnings:

  - Added the required column `customerId` to the `Mission` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Mission" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "status" TEXT NOT NULL DEFAULT '',
    "start" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "end" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "customerId" INTEGER NOT NULL,
    "workerId" INTEGER,
    "invoceId" INTEGER,
    CONSTRAINT "Mission_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Mission_workerId_fkey" FOREIGN KEY ("workerId") REFERENCES "Worker" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Mission_invoceId_fkey" FOREIGN KEY ("invoceId") REFERENCES "Invoce" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Mission" ("end", "id", "start", "status") SELECT "end", "id", "start", "status" FROM "Mission";
DROP TABLE "Mission";
ALTER TABLE "new_Mission" RENAME TO "Mission";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
