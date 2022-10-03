import React, { useState, Fragment } from 'react'
import FullCalendar from '@fullcalendar/react'
import interactionPlugin from '@fullcalendar/interaction'
import resourceTimelinePlugin from '@fullcalendar/resource-timeline'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list'
import { useQuery, useMutation } from '@redwoodjs/web'
import { FINDALLQUERY } from '../Prestation/Prestation'
import { toast } from '@redwoodjs/web/toast'
import { routes } from '@redwoodjs/router'
import { navigate } from '@redwoodjs/router'
const Calendar = ({ taches, initialView }) => {
  const { loading, error, data } = useQuery(FINDALLQUERY)
  const vehicule = data.vehicules?.reduce((acc, vehicule) => {
    acc[vehicule.id] = vehicule.nom + ' ' + vehicule.immatriculation
    return acc
  }, {})
  const prestation = data.prestations?.reduce((acc, site) => {
    acc[site.id] = site.site
    return acc
  }, {})
  console.log('prestation', prestation)
  const initialEvents = taches.map((tache) => ({
    id: tache.id,
    title: vehicule[tache.id],
    start: tache.debut,
    resourceId: tache.vehicule,
  }))
  const initialResources = data.vehicules?.map((vehicule) => ({
    id: vehicule.id,
    title: vehicule.nom + ' ' + vehicule.immatriculation,
  }))

  const UPDATE_TACHE_MUTATION = gql`
    mutation UpdateTacheMutation($id: Int!, $input: UpdateTacheInput!) {
      updateTache(id: $id, input: $input) {
        id
        debut
        fin
      }
    }
  `

  const [updateTache] = useMutation(UPDATE_TACHE_MUTATION, {
    onCompleted: () => {},
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const handleEventDrop = (info) => {
    const { event } = info
    const { id, start } = event

    updateTache({
      variables: {
        id: parseInt(id),
        input: {
          debut: start,
        },
      },
    })
  }
  return (
    <>
      <FullCalendar
        plugins={[
          interactionPlugin,
          resourceTimelinePlugin,
          dayGridPlugin,
          timeGridPlugin,
          listPlugin,
        ]}
        locale="fr"
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
          navigate(routes.editTache({ id: info.event.id }))
        }}
        eventDrop={(info) => {
          console.log('eventDrop', info)
        }}
        eventResize={(info) => {
          console.log('eventResize', info)
        }}
        drop={(info) => handleEventDrop(info)}
        dayMaxEvents={true}
        eventAdd={(info) => {
          console.log('eventAdd', info)
        }}
        eventRemove={(info) => {
          console.log('eventRemove', info)
        }}
        eventChange={(info) => handleEventDrop(info)}
      />
    </>
  )
}
export default Calendar
