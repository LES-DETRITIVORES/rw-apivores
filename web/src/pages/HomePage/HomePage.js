import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import Navigation from 'src/components/Navigation'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <Navigation />
      <img
        src={'https://i.kym-cdn.com/photos/images/newsfeed/001/042/619/4ea.jpg'}
        alt="John Travolta"
        className="my-auto mx-auto mt-20 rounded-xl"
      />
    </>
  )
}

export default HomePage
