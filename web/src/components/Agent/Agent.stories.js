// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <Agent {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import Agent from './Agent'

export const generated = () => {
  return <Agent 
    agent={{
      id: 1,
      prenom: 'John',
      nom: 'Doe',
      actif: true,
    }} 
  />
}

export default {
  title: 'Components/Agent',
  component: Agent,
}
