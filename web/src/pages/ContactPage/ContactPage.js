import { MetaTags } from '@redwoodjs/web'
import ContactsCell from 'src/components/ContactsCell'
import Navigation from 'src/components/Navigation'

const ContactPage = () => {
  return (
    <>
      <MetaTags title="Contact" description="Contact page" />
      <Navigation />
      <ContactsCell />
    </>
  )
}

export default ContactPage
