// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <Site {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import Site from './Site'

export const generated = () => {
  return <Site 
    site = {
      {
        id: 1,
        ordre: 1,
        usager: '081 Mairie de Pessac',
        nom: '081-1 Ecole primaire Briand Pessac',
        adresse: '20 avenue Roger Cohé',
        adresse2: 'place gambetta',
        codePostal: '33600',
        ville: 'Pessac',
        note: 'Si besoin 06 28 84 02 95',
        latitude: '44.8073235',
        longitude: '-0.6322060',
        etage: 0,
        ascenseur: false,
        actif: true,
      }
    } 
  />
}

export default {
  title: 'Components/Site',
  component: Site,
}
