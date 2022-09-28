// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <Matiere {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import Matiere from './Matiere'

export const generated = () => {
  return <Matiere
    matiere={{
      id: 1,
      nom: 'Biodéchets',
      actif: true,
    }}
  />
}

export default {
  title: 'Components/Matiere',
  component: Matiere,
}
