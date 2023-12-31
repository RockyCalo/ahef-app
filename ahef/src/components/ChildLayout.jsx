
import { Disclosure, } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { NavLink, Outlet } from 'react-router-dom'

const navigation = [

  { name: 'Part one', to: '/partone'},
  { name: 'General Survey', to: '/generalSurvey'},
  { name: 'Anthtometrics', to: '/anthropometrics'},
  { name: 'Part Two', to: '/parttwo'},
  { name: 'Family History', to: '/familyHistory'},
  { name: 'Environmental History', to: '/environmentalHistory'},
  { name: 'Personal/Social History', to: '/personalSocialHistory'},
  { name: 'Medical And Surgical History', to: '/medicalSurgicalHistory'},
  { name: 'Developmental Milestones', to: '/developmentalMilestone'},
  { name: 'Immunization History', to: '/immunizationHistory'},
  { name: 'Female Menstrual', to: '/femaleMenstrual'},
  { name: 'Part 4 MD only', to: '/partFour'},
    { name: 'Plans', to: '/partFourPlans'},
    { name: 'Annex A.', to: '/annex_A'},
    { name: 'Adolescent Part3.', to: '/adolescentpart3'},
    { name: 'Adolescent Part4.', to: '/adolescentpart4'},






]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ChildLayout() {


    return (
    <>
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-gray-800">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7x1 px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="h-10 w-10"
                        src="/src/assets/images/sarangani.png"
                        alt="Your Company"
                      />
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item) => (
                          <NavLink
                            key={item.name}
                            to={item.to}
                            className={({isActive}) => classNames(
                              isActive
                                ? 'bg-gray-900 text-white'
                                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                              'rounded-md px-3 py-2 text-sm font-medium'
                            )}
                          >
                            {item.name}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">


                      {/* Profile dropdown */}
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                  {navigation.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.to}
                      href={item.href}
                      className={({isActive}) => classNames(
                        isActive ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'block rounded-md px-3 py-2 text-base font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <Outlet />
      </div>



    </>
  )
}
