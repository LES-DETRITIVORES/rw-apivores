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
CREATE TABLE "Tache" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "debut" DATETIME NOT NULL,
    "fin" DATETIME NOT NULL,
    "pesee" DATETIME NOT NULL,
    "prestation" INTEGER NOT NULL,
    "vehicule" INTEGER NOT NULL,
    "operateur1" INTEGER NOT NULL,
    "operateur2" INTEGER NOT NULL,
    "operateur3" INTEGER NOT NULL,
    "collecte" DATETIME NOT NULL,
    "quantite" INTEGER NOT NULL,
    "photos" TEXT NOT NULL,
    "noteCollecte" TEXT NOT NULL,
    "poids" INTEGER NOT NULL,
    "qualite" INTEGER NOT NULL,
    "notePesee" TEXT NOT NULL,
    "terminee" BOOLEAN NOT NULL
);

-- CreateTable
CREATE TABLE "Usager" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nom" TEXT NOT NULL,
    "tiers" TEXT NOT NULL,
    "contact" TEXT NOT NULL,
    "adresse" TEXT NOT NULL,
    "adresse2" TEXT NOT NULL,
    "codePostal" TEXT NOT NULL,
    "ville" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telephone1" TEXT NOT NULL,
    "telephone2" TEXT NOT NULL,
    "note" TEXT NOT NULL,
    "actif" BOOLEAN NOT NULL
);

-- CreateTable
CREATE TABLE "Contact" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "usager" INTEGER NOT NULL,
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
    "actif" BOOLEAN NOT NULL
);

-- CreateTable
CREATE TABLE "Site" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "usager" INTEGER NOT NULL,
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
    "actif" BOOLEAN NOT NULL
);

-- CreateTable
CREATE TABLE "Prestation" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "site" INTEGER NOT NULL,
    "matiere" INTEGER NOT NULL,
    "materiel" INTEGER NOT NULL,
    "quantite" INTEGER NOT NULL,
    "service" INTEGER NOT NULL,
    "vehicule" INTEGER NOT NULL,
    "prix" REAL NOT NULL,
    "forfait" BOOLEAN NOT NULL,
    "note" TEXT NOT NULL,
    "debut" DATETIME NOT NULL,
    "fin" DATETIME NOT NULL,
    "frequence" TEXT NOT NULL,
    "lundi" BOOLEAN NOT NULL,
    "mardi" BOOLEAN NOT NULL,
    "mercredi" BOOLEAN NOT NULL,
    "jeudi" BOOLEAN NOT NULL,
    "vendredi" BOOLEAN NOT NULL,
    "samedi" BOOLEAN NOT NULL,
    "dimanche" BOOLEAN NOT NULL,
    "actif" BOOLEAN NOT NULL
);

-- CreateTable
CREATE TABLE "Service" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nom" TEXT NOT NULL,
    "actif" BOOLEAN NOT NULL
);

-- CreateTable
CREATE TABLE "Materiel" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nom" TEXT NOT NULL,
    "poids" INTEGER NOT NULL,
    "actif" BOOLEAN NOT NULL
);

-- CreateTable
CREATE TABLE "Inventaire" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "site" INTEGER NOT NULL,
    "materiel" INTEGER NOT NULL,
    "quantite" INTEGER NOT NULL,
    "note" TEXT NOT NULL,
    "actif" BOOLEAN NOT NULL
);

-- CreateTable
CREATE TABLE "Operateur" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "prenom" TEXT NOT NULL,
    "nom" TEXT NOT NULL,
    "actif" BOOLEAN NOT NULL
);

-- CreateTable
CREATE TABLE "Vehicule" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "ordre" INTEGER NOT NULL,
    "nom" TEXT NOT NULL,
    "immatriculation" TEXT NOT NULL,
    "identifiant" TEXT NOT NULL,
    "couleur" TEXT NOT NULL,
    "icone" TEXT NOT NULL,
    "actif" BOOLEAN NOT NULL
);

-- CreateTable
CREATE TABLE "Matiere" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nom" TEXT NOT NULL,
    "actif" BOOLEAN NOT NULL
);
