import React from 'react'
import FullCalendar from '@fullcalendar/react'
import interactionPlugin from '@fullcalendar/interaction'
import resourceTimelinePlugin from '@fullcalendar/resource-timeline'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list'
const Calendar = ({ initialView }) => {
  const initialEvents = [
    {
      title: 'All Day Event',
      start: new Date(),
      resourceId: 'b',
    },
    {
      title: 'Long Event',
      start: new Date(),
      resourceId: 'c',
    },
  ]
  const initialResources = [
    { id: 'a', title: 'Auditorium A' },
    { id: 'b', title: 'Auditorium B', eventColor: 'green' },
    { id: 'c', title: 'Auditorium C', eventColor: 'orange' },
  ]

  return (
    <FullCalendar
      plugins={[
        interactionPlugin,
        resourceTimelinePlugin,
        dayGridPlugin,
        timeGridPlugin,
        listPlugin,
      ]}
      initialView={initialView}
      nowIndicator={true}
      editable={true}
      initialEvents={initialEvents}
      initialResources={initialResources}
      nowIndicatorContent="Now"
      dragScroll={true}
      eventOverlap={false}
      eventResizableFromStart={true}
      eventClick={(info) => {
        console.log(info)
      }}
      eventDrop={(info) => {
        console.log(info)
      }}
      eventResize={(info) => {
        console.log(info)
      }}
      drop={(info) => {
        console.log(info)
      }}
      dayMaxEvents={true}
      eventAdd={(info) => {
        console.log(info)
      }}
      eventRemove={(info) => {
        console.log(info)
      }}
      eventChange={(info) => {
        console.log(info)
      }}
    />
  )
}
export default Calendar
