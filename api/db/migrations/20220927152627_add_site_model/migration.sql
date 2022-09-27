-- CreateTable
CREATE TABLE "Site" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "type" TEXT NOT NULL,
    "actif" BOOLEAN NOT NULL,
    "siret" TEXT NOT NULL,
    "nomFacture" TEXT NOT NULL,
    "contactFacture" TEXT NOT NULL,
    "adresseFacture" TEXT NOT NULL,
    "emailFacture" TEXT NOT NULL,
    "telephoneFacture" TEXT NOT NULL,
    "index" TEXT NOT NULL,
    "designation" TEXT NOT NULL,
    "adresse" TEXT NOT NULL,
    "adresse2" TEXT NOT NULL,
    "codePostal" TEXT NOT NULL,
    "villeSite" TEXT NOT NULL,
    "etage" TEXT NOT NULL,
    "ascenseur" BOOLEAN NOT NULL,
    "acces" TEXT NOT NULL,
    "latitude" TEXT NOT NULL,
    "longitude" TEXT NOT NULL
);
