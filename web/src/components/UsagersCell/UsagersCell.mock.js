// Define your own mock data here:
export const standard = () => ({
  usagers: [
    {
      id: 1,
      nom: '081 Mairie de Pessac',
      type: 'Public',
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
      type: 'Privé',
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
  ],
})
