// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <Materiel {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import Materiel from './Materiel'

export const generated = () => {
  return <Materiel
    materiel={{
      id: 1,
      nom: 'Bac 120L',
      poids: '8',
      actif: true,
    }}
  />
}

export default {
  title: 'Components/Materiel',
  component: Materiel,
}
