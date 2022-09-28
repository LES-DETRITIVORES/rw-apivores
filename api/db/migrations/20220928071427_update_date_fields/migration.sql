-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Exploitation" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "tourneeId" INTEGER NOT NULL,
    "immatriculation" TEXT NOT NULL,
    "agent" TEXT NOT NULL,
    "date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "type" TEXT NOT NULL,
    "clientId" INTEGER NOT NULL,
    "client" TEXT NOT NULL,
    "site" TEXT NOT NULL,
    "nbContenant" INTEGER NOT NULL,
    "typeContenant" TEXT NOT NULL,
    "matiere" TEXT NOT NULL,
    "poids" INTEGER NOT NULL,
    "qualite3" INTEGER NOT NULL,
    "qualite2" INTEGER NOT NULL,
    "qualite1" INTEGER NOT NULL,
    "commentairesRDV" TEXT NOT NULL,
    "commentairesContenu" TEXT NOT NULL,
    "photos" TEXT NOT NULL
);
INSERT INTO "new_Exploitation" ("agent", "client", "clientId", "commentairesContenu", "commentairesRDV", "date", "id", "immatriculation", "matiere", "nbContenant", "photos", "poids", "qualite1", "qualite2", "qualite3", "site", "tourneeId", "type", "typeContenant") SELECT "agent", "client", "clientId", "commentairesContenu", "commentairesRDV", "date", "id", "immatriculation", "matiere", "nbContenant", "photos", "poids", "qualite1", "qualite2", "qualite3", "site", "tourneeId", "type", "typeContenant" FROM "Exploitation";
DROP TABLE "Exploitation";
ALTER TABLE "new_Exploitation" RENAME TO "Exploitation";
CREATE TABLE "new_Tarif" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "siteId" INTEGER NOT NULL,
    "prestation" TEXT NOT NULL,
    "prix" REAL NOT NULL,
    "passage" BOOLEAN NOT NULL,
    "bac" BOOLEAN NOT NULL,
    "actif" BOOLEAN NOT NULL,
    CONSTRAINT "Tarif_siteId_fkey" FOREIGN KEY ("siteId") REFERENCES "Site" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Tarif" ("actif", "bac", "date", "id", "passage", "prestation", "prix", "siteId") SELECT "actif", "bac", "date", "id", "passage", "prestation", "prix", "siteId" FROM "Tarif";
DROP TABLE "Tarif";
ALTER TABLE "new_Tarif" RENAME TO "Tarif";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
