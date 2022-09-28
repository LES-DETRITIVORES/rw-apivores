// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <Tarif {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import Tarif from './Tarif'

export const generated = () => {
  return <Tarif
    tarif={{
      id: 1,
      date: '2022-09-28T12:34:56Z',
      prestation: 'Collecte biodéchets',
      prix: 30.00,
      passage: true,
      bac: false,
      actif: true,
    }}
  />
}

export default {
  title: 'Components/Tarif',
  component: Tarif,
}
