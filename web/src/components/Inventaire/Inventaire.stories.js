// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <Inventaire {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import Inventaire from './Inventaire'

export const generated = () => {
  return <Inventaire 
    inventaire= {
      {
        id: 1,
        date: '2022-09-28T12:34:56Z',
        materiel: 'Bac 120L',
        site: 'Ecole élémentaire Pessac',
        quantite: 3,
        note: 'Bac tout neuf',
        actif: true,
      }
    } 
  />
}

export default {
  title: 'Components/Inventaire',
  component: Inventaire,
}
