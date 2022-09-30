import { db } from 'api/src/lib/db'

export default async () => {
  try {
    //
    // Manually seed via `yarn rw prisma db seed`
    // Seeds automatically with `yarn rw prisma migrate dev` and `yarn rw prisma migrate reset`
    //
    // Update "const data = []" to match your data model and seeding needs
    //
    const data = [
      // To try this example data with the UserExample model in schema.prisma,
      // uncomment the lines below and run 'yarn rw prisma migrate dev'
      //
      // { name: 'alice', email: 'alice@example.com' },
      // { name: 'mark', email: 'mark@example.com' },
      // { name: 'jackie', email: 'jackie@example.com' },
      // { name: 'bob', email: 'bob@example.com' },
    ]
    console.log(
      "\nUsing the default './scripts/seed.{js,ts}' template\nEdit the file to add seed data\n"
    )

    const usagers = [
      {
        id: 1,
        nom: '081 Mairie de Pessac',
        //type: 'Public',
        tiers: '9ECOP',
        adresse: 'Direction des Finances Pôle territorial sud Bordeaux Métropole',
        adresse2: 'Europe Bis 15 avenue Leonard de Vinci',
        codePostal: '33604',
        ville: 'Pessac',
        contact: 'Sophie ONDINA',
        email: 's.ondina@mairie-pessac.fr',
        telephone1: '06 34 68 21 32',
        telephone2: '05 57 93 64 94',
        note: 'Clés fournies (une dans chaque camion)',
        actif: true,
      },
      {
        id: 2,
        nom: '002 Magasin général',
        //type: 'Privé',
        tiers: '9MG',
        adresse: '87 quai des Queyries',
        adresse2: '',
        codePostal: '33100',
        ville: 'Bordeaux',
        contact: 'Lauren KHAROUNI',
        email: 'lauren.kharouni@darwin.camp',
        telephone1: '06 34 68 21 32',
        telephone2: '05 57 93 64 94',
        note: '3 bacs 240L remplacés par 4x120L en juil22',
        actif: true,
      }
    ]

    const contacts = [
      { 
        id: 1,
        usager: 1,
        ordre: 1,
        prenom: 'John',
        nom: 'Doe',
        email: 'john@doe.co',
        motdepasse: 'azaerazez',
        telephone1: '06 12 12 12 12',
        telephone2: '05 12 12 12 12',
        remarque: 'super contact',
        fonction: 'grand chef décideur',
        extranet: true,
        actif: true,
      }, 
      { 
        id: 2,
        usager: 1,
        ordre: 2,
        prenom: 'Harry',
        nom: 'Doe',
        email: 'harry@doe.co',
        motdepasse: 'azaerazez',
        telephone1: '06 12 12 12 12',
        telephone2: '05 12 12 12 12',
        remarque: 'petit contact',
        fonction: 'petit chef décideur',
        extranet: true,
        actif: false,
      }, 
      { 
        id: 3,
        usager: 2,
        ordre: 1,
        prenom: 'Max',
        nom: 'Doe',
        email: 'max@doe.co',
        motdepasse: 'azaerazez',
        telephone1: '06 12 12 12 12',
        telephone2: '05 12 12 12 12',
        remarque: 'insignifiant contact',
        fonction: 'insignifiant chef décideur',
        extranet: false,
        actif: true,
      }
    ]

    const sites = [
      {
        id: 1,
        usager: 1,
        ordre: 1,
        nom: '081-1 Ecole primaire Briand Pessac',
        adresse: '20 avenue Roger Cohé',
        adresse2: '',
        codePostal: '33600',
        ville: 'Pessac',
        note: 'Si besoin 06 28 84 02 95',
        latitude: '44.8073235',
        longitude: '-0.6322060',
        etage: 0,
        ascenseur: false,
        actif: true,
      },
      {
        id: 2,
        usager: 1,
        ordre: 2,
        nom: '081-2 Ecole élémentaire Magonty Pessac',
        adresse: '12 rue Romainville',
        adresse2: '',
        codePostal: '33600',
        ville: 'Pessac',
        note: 'Si besoin 07 78 39 21 76',
        latitude: '44.7930412',
        longitude: '-0.7050591',
        etage: 0,
        ascenseur: false,
        actif: true,
      },
      {
        id: 3,
        usager: 2,
        ordre: 1,
        nom: '002-1 Magasin général',
        adresse: '87 quai des queyries',
        adresse2: '',
        codePostal: '33100',
        ville: 'Bordeaux',
        note: '3 bacs 240L remplacés par 4x120L en juil22',
        latitude: '44.7930412',
        longitude: '-0.7050591',
        etage: 0,
        ascenseur: false,
        actif: true,
      },
    ]

    const operateurs = [
      {
        id: 1,
        prenom: 'Zine-Eddine',
        nom: '-',
        actif: true,
      },
      {
        id: 2,
        prenom: 'Alien',
        nom: '-',
        actif: false,
      },
      {
        id: 3,
        prenom: 'Izak',
        nom: '-',
        actif: true,
      },
    ]

    const inventaires = [
      {
        id: 1,
        materiel: 1,
        site: 1,
        quantite: 2,
        note: 'Bac tout neuf',
        actif: true,
      },
      {
        id: 2,
        materiel: 2,
        site: 2,
        quantite: 1,
        note: 'Bac vieux',
        actif: true,
      },
      {
        id: 3,
        materiel: 3,
        site: 3,
        quantite: 2,
        note: 'Bac tout vieux',
        actif: false,
      }
    ]

    const materiels = [
      {
        id: 1,
        nom: 'Bac 120L',
        poids: 8,
        actif: true,
      },
      {
        id: 2,
        nom: 'Bac 240L',
        poids: 12,
        actif: false,
      },
      {
        id: 3,
        nom: 'Bioseau 22L',
        poids: 2,
        actif: true,
      },
    ]

    const matieres = [
      {
        id: 1,
        nom: 'Biodéchets',
        actif: true,
      },
      {
        id: 2,
        nom: 'Couches',
        actif: false,
      },
      {
        id: 3,
        nom: 'Coquilles',
        actif: true,
      },
      {
        id: 4,
        nom: 'Sacs compostables',
        actif: true,
      },
      {
        id: 5,
        nom: 'Bac',
        actif: true,
      },
    ]

    const prestations = [
      {
        id: 1,
        site: 1,
        matiere: 1,
        materiel: 1,
        quantite: 1,
        service: 1,
        vehicule: 1,
        prix: 30.00,
        forfait: false,
        note:'Démarrage pour janvier 2023',
        debut: '2023-01-01T12:34:56Z',
        fin: '2023-12-31T12:34:56Z',
        frequence: 'hebdomadaire',
        lundi: true,
        mardi: false,
        mercredi: true,
        jeudi: false,
        vendredi: false,
        samedi: false,
        dimanche: false,
        actif: true,
      },
      {
        id: 2,
        site: 2,
        matiere: 2,
        materiel: 2,
        quantite: 2,
        service: 3,
        vehicule: 2,
        prix: 36.00,
        forfait: true,
        note:'Bac 240L tampon en plus',
        debut: '2023-01-01T12:34:56Z',
        fin: '2023-12-31T12:34:56Z',
        frequence: 'mensuel',
        lundi: false,
        mardi: true,
        mercredi: false,
        jeudi: false,
        vendredi: false,
        samedi: false,
        dimanche: false,
        actif: false,
      },
      {
        id: 3,
        site: 1,
        matiere: 3,
        materiel: 3,
        quantite: 4,
        service: 2,
        vehicule: 3,
        prix: 10.00,
        forfait: true,
        note:'6 bioseaux fournis pour rotation',
        debut: '2023-01-01T12:34:56Z',
        fin: '2023-01-01T12:34:56Z',
        frequence: 'ponctuel',
        lundi: false,
        mardi: false,
        mercredi: false,
        jeudi: false,
        vendredi: false,
        samedi: true,
        dimanche: false,
        actif: false,
      }
    ]

    const services = [
      {
        id: 1,
        nom: 'Collecte',
        actif: true,
      },
      {
        id: 2,
        nom: 'Traitement',
        actif: false,
      },
      {
        id: 3,
        nom: 'Location',
        actif: true,
      },
      {
        id: 4,
        nom: 'Sensibilisation',
        actif: true,
      },
      {
        id: 5,
        nom: 'Fourniture',
        actif: true,
      },
    ]

    const vehicules = [
      {
        id: 1,
        ordre: 1,
        nom: 'Camion vert',
        immatriculation: 'FF-921-CP',
        identifiant: '1',
        couleur: '#27cd55',
        icone: 'truck',     
        actif: true,
      },
      {
        id: 2,
        ordre: 2,
        nom: 'Fourgon',
        immatriculation: 'FK-603-TN',
        identifiant: '3',
        couleur: '#2e86de',
        icone: 'truck',     
        actif: true,
      },
      {
        id: 3,
        ordre: 3,
        nom: 'Cyclo 22L',
        immatriculation: '',
        identifiant: '',
        couleur: '#20ad9c',
        icone: 'biking',     
        actif: false,
      }
    ]

    const taches = [
      {
        id: 1,
        debut: '2022-09-28T12:30:00Z',
        fin: '2022-09-28T13:00:00Z',
        prestation: 1,
        vehicule: 1,
        operateur1: 1,
        operateur2: 0,
        operateur3: 0,
        collecte: '2022-09-28T12:40:00Z',
        quantite: 3,
        noteCollecte: 'RAS',
        pesee: '2022-09-28T13:10:00Z',
        poids: 45,
        qualite: 3,
        notePesee: 'Ca sent hyper bon',
        photos: 'https://photos.les-detritivores.co',
        terminee: true  
      },
      {
        id: 2,
        debut: '2022-09-28T14:30:00Z',
        fin: '2022-09-28T15:30:00Z',
        prestation: 2,
        vehicule: 2,
        operateur1: 2,
        operateur2: 1,
        operateur3: 0,
        collecte: '2022-09-28T14:45:00Z',
        quantite: 2,
        noteCollecte: 'Bof',
        pesee: '2022-09-28T16:00:00Z',
        poids: 25,
        qualite: 2,
        notePesee: 'Mmmh',
        photos: 'https://photos.les-detritivores.co',
        terminee: true  
      },
      {
        id: 3,
        debut: '2022-10-10T06:30:00Z',
        fin: '2022-10-10T07:00:00Z',
        prestation: 3,
        vehicule: 0,
        operateur1: 0,
        operateur2: 0,
        operateur3: 0,
        collecte: '2000-01-01T00:00:00Z',
        quantite: 0,
        noteCollecte: '',
        pesee: '2000-01-01T00:00:00Z',
        poids: 0,
        qualite: 0,
        notePesee: '',
        photos: '',
        terminee: false  
      },
    ]

    // Note: if using PostgreSQL, using `createMany` to insert multiple records is much faster
    // @see: https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#createmany
    Promise.all(
      //
      // Change to match your data model and seeding needs
      //
      /*
      data.map(async (data) => {
        const record = await db.userExample.create({ data })
        console.log(record)
      })
      */
      usagers.map(async (data) => {
        const record = await db.usager.create({ data })
        console.log(record)
      }),

      contacts.map(async (data) => {
        const record = await db.contact.create({ data })
        console.log(record)
      }),

      sites.map(async (data) => {
        const record = await db.site.create({ data })
        console.log(record)
      }),

      operateurs.map(async (data) => {
        const record = await db.operateur.create({ data })
        console.log(record)
      }),

      materiels.map(async (data) => {
        const record = await db.materiel.create({ data })
        console.log(record)
      }),

      matieres.map(async (data) => {
        const record = await db.matiere.create({ data })
        console.log(record)
      }),

      prestations.map(async (data) => {
        const record = await db.prestation.create({ data })
        console.log(record)
      }),

      services.map(async (data) => {
        const record = await db.service.create({ data })
        console.log(record)
      }),

      vehicules.map(async (data) => {
        const record = await db.vehicule.create({ data })
        console.log(record)
      }),

      inventaires.map(async (data) => {
        const record = await db.inventaire.create({ data })
        console.log(record)
      }),

      taches.map(async (data) => {
        const record = await db.tache.create({ data })
        console.log(record)
      }),
    )

    // If using dbAuth and seeding users, you'll need to add a `hashedPassword`
    // and associated `salt` to their record. Here's how to create them using
    // the same algorithm that dbAuth uses internally:
    //
    //   import { hashPassword } from '@redwoodjs/api'
    //
    //   const users = [
    //     { name: 'john', email: 'john@example.com', password: 'secret1' },
    //     { name: 'jane', email: 'jane@example.com', password: 'secret2' }
    //   ]
    //
    //   for (user of users) {
    //     const [hashedPassword, salt] = hashPassword(user.password)
    //     await db.user.create({
    //       data: {
    //         name: user.name,
    //         email: user.email,
    //         hashedPassword,
    //         salt
    //       }
    //     })
    //   }
  } catch (error) {
    console.warn('Please define your seed data.')
    console.error(error)
  }
}
