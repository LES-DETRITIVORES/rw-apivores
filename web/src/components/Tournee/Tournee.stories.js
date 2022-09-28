// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <Tournee {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import Tournee from './Tournee'

export const generated = () => {
  return <Tournee 
    tournee = {
      {
        id: 1,
        date: '2022-09-28T06:00:00Z',
        heure: '2022-09-28T06:00:00Z',
        vehicule: 'Camion Blanc (GE-810-AM)',
        agent1: 'Zine-Eddine',
        agent2: 'Alien',
        agent3: '',
      }
    }
  />
}

export default {
  title: 'Components/Tournee',
  component: Tournee,
}
