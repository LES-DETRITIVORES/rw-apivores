/*
  Warnings:

  - Added the required column `invoceId` to the `Client` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "Invoce" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "invoiceId" TEXT NOT NULL,
    "reference" TEXT NOT NULL,
    "period" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "client" TEXT NOT NULL,
    "site" TEXT NOT NULL,
    "canceled" BOOLEAN NOT NULL DEFAULT false,
    "paid" TEXT NOT NULL,
    "amountHT" REAL NOT NULL,
    "amountTTC" REAL NOT NULL,
    "collectHT" TEXT NOT NULL,
    "treatHT" TEXT NOT NULL,
    "cleanHT" TEXT NOT NULL,
    "otherHT" TEXT NOT NULL,
    "otherLines" TEXT NOT NULL
);

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
INSERT INTO "new_Mission" ("customerId", "end", "id", "start", "status", "workerId") SELECT "customerId", "end", "id", "start", "status", "workerId" FROM "Mission";
DROP TABLE "Mission";
ALTER TABLE "new_Mission" RENAME TO "Mission";
CREATE TABLE "new_Client" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL DEFAULT '',
    "missionId" INTEGER NOT NULL,
    "customerId" INTEGER NOT NULL,
    "invoceId" INTEGER NOT NULL,
    "checked" BOOLEAN NOT NULL DEFAULT false,
    CONSTRAINT "Client_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Client_invoceId_fkey" FOREIGN KEY ("invoceId") REFERENCES "Invoce" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Client_missionId_fkey" FOREIGN KEY ("missionId") REFERENCES "Mission" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Client" ("checked", "customerId", "id", "missionId", "name") SELECT "checked", "customerId", "id", "missionId", "name" FROM "Client";
DROP TABLE "Client";
ALTER TABLE "new_Client" RENAME TO "Client";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
