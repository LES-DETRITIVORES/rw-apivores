import { MetaTags } from '@redwoodjs/web'
import Contact from 'src/components/Contact/Contact'
import ContactsCell from 'src/components/ContactsCell'
import Navigation from 'src/components/Navigation'

const ContactPage = () => {
  return (
    <>
      <MetaTags title="Contact" description="Contact page" />
      <Navigation />
      <Contact
        contact={{
          id: 1,
          ordre: 1,
          prenom: 'Jean',
          nom: 'Dupont',
          email: 'jean@live.fr',
          motdepasse: 'etetetete',
          telephone1: '1545455454',
          telephone2: '45445454',
          remarque: 'no one btw',
          fonction: 'dev',
          extranet: false,
          actif: false,
        }}
      />
    </>
  )
}

export default ContactPage
