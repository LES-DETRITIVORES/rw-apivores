-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Customer" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'customer'
);
INSERT INTO "new_Customer" ("id", "name") SELECT "id", "name" FROM "Customer";
DROP TABLE "Customer";
ALTER TABLE "new_Customer" RENAME TO "Customer";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
