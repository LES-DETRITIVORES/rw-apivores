-- CreateTable
CREATE TABLE "Exploitation" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "tourneeId" INTEGER NOT NULL,
    "immatriculation" TEXT NOT NULL,
    "operateur" TEXT NOT NULL,
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

-- CreateTable
CREATE TABLE "Tournee" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "note" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Usager" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nom" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "tiers" TEXT NOT NULL,
    "contact" TEXT NOT NULL,
    "adresse" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telephone" TEXT NOT NULL,
    "reference" TEXT NOT NULL,
    "note" TEXT NOT NULL,
    "actif" BOOLEAN NOT NULL
);

-- CreateTable
CREATE TABLE "Site" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "usagerId" INTEGER NOT NULL,
    "ordre" INTEGER NOT NULL,
    "nom" TEXT NOT NULL,
    "adresse" TEXT NOT NULL,
    "adresse2" TEXT NOT NULL,
    "codePostal" TEXT NOT NULL,
    "ville" TEXT NOT NULL,
    "latitude" TEXT NOT NULL,
    "longitude" TEXT NOT NULL,
    "etage" INTEGER NOT NULL,
    "ascenseur" BOOLEAN NOT NULL,
    "note" TEXT NOT NULL,
    "actif" BOOLEAN NOT NULL,
    CONSTRAINT "Site_usagerId_fkey" FOREIGN KEY ("usagerId") REFERENCES "Usager" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Contact" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "usagerId" INTEGER NOT NULL,
    "ordre" INTEGER NOT NULL,
    "prenom" TEXT NOT NULL,
    "nom" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "motdepasse" TEXT NOT NULL,
    "telephone1" TEXT NOT NULL,
    "telephone2" TEXT NOT NULL,
    "remarque" TEXT NOT NULL,
    "fonction" TEXT NOT NULL,
    "extranet" BOOLEAN NOT NULL,
    "actif" BOOLEAN NOT NULL,
    CONSTRAINT "Contact_usagerId_fkey" FOREIGN KEY ("usagerId") REFERENCES "Usager" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Inventaire" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "site" TEXT NOT NULL,
    "materiel" TEXT NOT NULL,
    "quantite" INTEGER NOT NULL,
    "note" TEXT NOT NULL,
    "actif" BOOLEAN NOT NULL
);

-- CreateTable
CREATE TABLE "Tarif" (
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

-- CreateTable
CREATE TABLE "Operateur" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "prenom" TEXT NOT NULL,
    "nom" TEXT NOT NULL,
    "actif" BOOLEAN NOT NULL,
    "tourneeId" INTEGER,
    CONSTRAINT "Operateur_tourneeId_fkey" FOREIGN KEY ("tourneeId") REFERENCES "Tournee" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Vehicule" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nom" TEXT NOT NULL,
    "immatriculation" TEXT NOT NULL,
    "identifiant" TEXT NOT NULL,
    "couleur" TEXT NOT NULL,
    "icone" TEXT NOT NULL,
    "ordre" INTEGER NOT NULL,
    "actif" BOOLEAN NOT NULL,
    "tourneeId" INTEGER,
    CONSTRAINT "Vehicule_tourneeId_fkey" FOREIGN KEY ("tourneeId") REFERENCES "Tournee" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Materiel" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nom" TEXT NOT NULL,
    "poids" INTEGER NOT NULL,
    "actif" BOOLEAN NOT NULL
);

-- CreateTable
CREATE TABLE "Matiere" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nom" TEXT NOT NULL,
    "actif" BOOLEAN NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Vehicule_tourneeId_key" ON "Vehicule"("tourneeId");
