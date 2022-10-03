import { Combobox, Transition } from '@headlessui/react'
import { BadgeCheckIcon, ChevronDownIcon } from '@heroicons/react/solid'
import { Fragment } from 'react'
import { Label } from '@redwoodjs/forms'
const Comboboxes = ({
  setQuery,
  filtered,
  setSelected,
  selected,
  name,
  label,
}) => {
  const nameUppercase = name.charAt(0).toUpperCase() + name.slice(1)
  return (
    <Combobox
      value={selected}
      onChange={setSelected}
      name={name}
      defaultValue={selected}
    >
      <Label
        name={nameUppercase}
        className="mt-7 block text-sm font-medium text-gray-700"
      >
        {label}
      </Label>
      <div className="relative mt-1">
        <div className="relative w-full cursor-default overflow-hidden rounded-lg border border-gray-300 bg-white text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
          <Combobox.Input
            className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
            onChange={(event) => setQuery(event.target.value)}
            displayValue={(data) => data?.nom}
          />
          <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronDownIcon
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </Combobox.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
          afterLeave={() => setQuery('')}
        >
          <Combobox.Options
            style={{
              marginTop: '0.5rem',
            }}
            className="absolute z-10 mt-4 mb-5 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
          >
            {filtered.length === 0 && query !== '' ? (
              <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                Aucune matériel trouvé.
              </div>
            ) : (
              filtered.map((data) => (
                <Combobox.Option
                  key={data.id}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? 'bg-green-800 text-white' : 'text-gray-900'
                    }`
                  }
                  value={data}
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {data.nom}
                      </span>
                      {selected ? (
                        <span
                          className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                            active ? 'text-white' : 'text-green-900'
                          }`}
                        >
                          <BadgeCheckIcon
                            className="h-5 w-5"
                            aria-hidden="true"
                          />
                        </span>
                      ) : null}
                    </>
                  )}
                </Combobox.Option>
              ))
            )}
          </Combobox.Options>
        </Transition>
      </div>
    </Combobox>
  )
}

export default Comboboxes