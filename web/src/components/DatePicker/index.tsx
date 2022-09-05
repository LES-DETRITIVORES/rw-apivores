import React, { useState } from 'react'

import type { Dayjs } from 'dayjs'

import { DatePickerSelector } from 'src/components/DatePicker/Selector'
import { DatePickerCalendar } from 'src/components/DatePicker/UI'

export interface IDatePickerProps {
  selectedDate: Dayjs

  onChange: (newDate: Dayjs) => void
}

export const DatePicker: React.FC<IDatePickerProps> = ({
  selectedDate,
  onChange,
}) => {
  const [shownDate, setShownDate] = useState(selectedDate)

  return (
    <div className={'datePicker'}>
      <DatePickerSelector shownDate={shownDate} setShownDate={setShownDate} />

      <DatePickerCalendar
        selectedDate={selectedDate}
        shownDate={shownDate}
        onChange={onChange}
        setShownDate={setShownDate}
      />
    </div>
  )
}
