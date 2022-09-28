// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <Contact {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import Contact from './Contact'

export const generated = () => {
  return <Contact 
    contact={{
      id: '1',
      ordre: '1',
      prenom: 'John',
      nom: 'Doe',
      email: 'john@doe.co',
      motdepasse: 'azaerazez',
      telephone1: '06 12 12 12 12',
      telephone2: '05 12 12 12 12',
      remarque: 'super contact',
      fonction: 'grand chef décideur',
      extranet: true,
      actif: true,
    }}
  />
}

export default {
  title: 'Components/Contact',
  component: Contact,
}
