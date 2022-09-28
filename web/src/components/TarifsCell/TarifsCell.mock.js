// Define your own mock data here:
export const standard = () => ({
  tarifs: [
    {
      id: 1,
      date: '2022-09-28T12:34:56Z',
      prestation: 'Collecte biodéchets',
      prix: 30.00,
      passage: true,
      bac: false,
      actif: true,
    },
    {
      id: 2,
      date: '2022-08-18T12:34:56Z',
      prestation: 'Collecte coquille',
      prix: 30.00,
      passage: false,
      bac: true,
      actif: true,
    },
    ,
    {
      id: 3,
      date: '2022-10-29T12:34:56Z',
      prestation: 'Collecte couche',
      prix: 30.00,
      passage: false,
      bac: true,
      actif: false,
    }
  ],
})