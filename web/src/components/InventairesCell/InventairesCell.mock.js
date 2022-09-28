// Define your own mock data here:
export const standard = () => ({
  inventaires: [
    {
      id: 1,
      date: '2022-09-28T12:34:56Z',
      materiel: 'Bac 120L',
      site: 'Ecole élémentaire Pessac',
      quantite: 3,
      note: 'Bac tout neuf',
      actif: true,
    },
    {
      id: 2,
      date: '2020-09-18T12:34:56Z',
      materiel: 'Bac 240L',
      site: 'Ecole élémentaire Blanquefort',
      quantite: 1,
      note: 'Bac vieux',
      actif: true,
    },
    {
      id: 3,
      date: '2019-09-01T12:34:56Z',
      materiel: 'Bac 120L',
      site: 'Ecole élémentaire Bruges',
      quantite: 2,
      note: 'Bac tout vieux',
      actif: false,
    }
  ],
})
