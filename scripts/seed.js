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
      })
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
