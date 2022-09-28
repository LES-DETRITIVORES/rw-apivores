// Define your own mock data here:
export const standard = () => ({
  vehicules: [
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
  ],
})
