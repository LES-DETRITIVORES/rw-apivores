import { useState } from 'react'

import dayjs from 'dayjs'

import { MetaTags } from '@redwoodjs/web'

import { DatePicker } from 'src/components/DatePicker'

const HomePage = () => {
  const [date, setDate] = useState(dayjs())
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <img
        src={'https://i.kym-cdn.com/photos/images/newsfeed/001/042/619/4ea.jpg'}
        alt="John Travolta"
        className="my-auto mx-auto rounded-xl mt-20"
      />
      <DatePicker selectedDate={date} onChange={setDate} />
    </>
  )
}

export default HomePage
