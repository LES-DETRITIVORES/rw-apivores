// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <Vehicule {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import Vehicule from './Vehicule'

export const generated = () => {
  return <Vehicule 
    vehicule={{
      id: 1,
      ordre: 1,
      nom: 'Camion vert',
      immatriculation: 'FF-921-CP',
      identifiant: '1',
      couleur: '#27cd55',
      icone: 'truck',     
      actif: true,
    }} 
  />
}

export default {
  title: 'Components/Vehicule',
  component: Vehicule,
}
