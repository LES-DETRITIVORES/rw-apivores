// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <Usager {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import Usager from './Usager'

export const generated = () => {
  return <Usager 
    usager = {
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
      }
    }
  />
}

export default {
  title: 'Components/Usager',
  component: Usager,
}
