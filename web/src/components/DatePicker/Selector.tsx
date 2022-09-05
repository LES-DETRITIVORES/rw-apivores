import React from 'react'

import { Dayjs } from 'dayjs'

import { changeDateMonth } from './Date'

// eslint-disable-next-line import/order
import clsx from 'clsx'
// eslint-disable-next-line import/order
import { ChevronDownIcon } from '@heroicons/react/solid'

export interface IDatePickerSelectorProps {
  shownDate: Dayjs

  setShownDate: React.Dispatch<React.SetStateAction<Dayjs>>
}

export const DatePickerSelector: React.FC<IDatePickerSelectorProps> = ({
  shownDate,
  setShownDate,
}) => {
  const handleIconClick = (isNextMonth: boolean) => {
    return () => {
      setShownDate(changeDateMonth(shownDate, isNextMonth))
    }
  }

  return (
    <div className={'DatePickerSelector'}>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
      <div
        className={clsx(
          'DatePickerSelector__icon',
          'DatePickerSelector__iconLeft'
        )}
        onClick={handleIconClick(false)}
      >
        <ChevronDownIcon />
      </div>

      <div className={'DatePickerSelector__date'}>
        {shownDate.format('MMMM YYYY')}
      </div>

      <div
        className={clsx(
          'DatePickerSelector__icon',
          'DatePickerSelector__iconRight'
        )}
        onClick={handleIconClick(true)}
      >
        <ChevronDownIcon />
      </div>
    </div>
  )
}
