/*
  Warnings:

  - You are about to drop the column `extension` on the `Uploader` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Uploader` table. All the data in the column will be lost.
  - You are about to drop the column `path` on the `Uploader` table. All the data in the column will be lost.
  - You are about to drop the column `size` on the `Uploader` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `Uploader` table. All the data in the column will be lost.
  - You are about to drop the column `url` on the `Uploader` table. All the data in the column will be lost.
  - Added the required column `createdAt` to the `Uploader` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fileName` to the `Uploader` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fileType` to the `Uploader` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fileUrl` to the `Uploader` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "serviceId";

-- DropIndex
DROP INDEX "materialId";

-- DropIndex
DROP INDEX "containerId";

-- DropIndex
DROP INDEX "siteId";

-- DropIndex
DROP INDEX "customerId";

-- DropIndex
DROP INDEX "workerId";

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Uploader" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "fileName" TEXT NOT NULL,
    "fileUrl" TEXT NOT NULL,
    "fileType" TEXT NOT NULL,
    "createdAt" TEXT NOT NULL
);
INSERT INTO "new_Uploader" ("id") SELECT "id" FROM "Uploader";
DROP TABLE "Uploader";
ALTER TABLE "new_Uploader" RENAME TO "Uploader";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
