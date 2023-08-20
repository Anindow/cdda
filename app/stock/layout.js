"use client"

import { Fragment, useState } from "react"
import { Menu, Transition } from "@headlessui/react"
import { AiFillSetting, AiOutlineMenu } from "react-icons/ai"
import {
  HiBell,
  HiDuplicate,
  HiLogout,
  HiUser,
  HiViewGrid,
} from "react-icons/hi"

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: HiViewGrid },
  { name: "Stock", href: "/stock", icon: HiDuplicate },
  { name: "Notification", href: "/notification", icon: HiBell },
]

const userNavigation = [
  { name: "Your profile", href: "#" },
  { name: "Sign out", href: "#" },
]

import { Inter } from "next/font/google"
import Link from "next/link"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  return (
    <>
      {/* sidebar for desktop */}
      <div className='fixed inset-y-0 z-50 flex w-72 flex-col border-r-2 border-gray-200 p-4'>
        <div className='flex grow flex-col gap-y-5 overflow-y-auto px-6 pb-4'>
          <div className='flex h-16 shrink-0 items-center gap-2'>
            <img className=' w-[146px] h-[60px]' src='/Logo.svg' alt='Your Company' />
          </div>
          <nav className='flex flex-1 flex-col'>
            <ul role='list' className='flex flex-1 flex-col gap-y-7'>
              <li>
                <ul role='list' className='-mx-2 space-y-1'>
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className='text-gray-700 hover:bg-gray-200 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                      >
                        <item.icon
                          className='text-gray-700 h-6 w-6 shrink-0'
                          aria-hidden='true'
                        />
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li className='mb-auto '>
                <Link
                  href='#'
                  className='group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-200'
                >
                  <HiUser className='h-6 w-6 shrink-0 text-gray-700 ' />
                  Profile
                </Link>
                <Link
                  href='#'
                  className='group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-200'
                >
                  <AiFillSetting className='h-6 w-6 shrink-0 text-gray-700 ' />
                  Settings
                </Link>
                <Link
                  href='#'
                  className='group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-200'
                >
                  <HiLogout className='h-6 w-6 shrink-0 text-gray-700 ' />
                  Log out
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className='lg:pl-72'>
        <div className='sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b-2 border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8'>
          <button
            type='button'
            className='-m-2.5 p-2.5 text-gray-700 lg:hidden'
            onClick={() => setSidebarOpen(true)}
          >
            <span className='sr-only'>Open sidebar</span>
            <AiOutlineMenu className='h-6 w-6' aria-hidden='true' />
          </button>
          <div
            className='h-6 w-px bg-gray-900/10 lg:hidden'
            aria-hidden='true'
          />

          <div className='flex flex-1 gap-x-4 self-stretch lg:gap-x-6'>
            <p className='relative flex flex-1 items-center text-2xl font-semibold'>
                    Stock
            </p>
            <div className='flex items-center gap-x-4 lg:gap-x-6'>
              <Menu as='div' className='relative'>
                <Menu.Button className='-m-1.5 flex justify-center items-center gap-4 px-1 bg-gray-200 rounded-md'>
                  <img
                    className='h-10 w-10 rounded-full bg-gray-50'
                    src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                    alt=''
                  />
                  <div className='flex flex-col text-left'>
                    <p className='text-base font-semibold'>Test user</p>
                    <p className='text-gray-500'>test@gmail.com</p>
                  </div>
                </Menu.Button>
                <Transition
                  as={Fragment}
                  enter='transition ease-out duration-100'
                  enterFrom='transform opacity-0 scale-95'
                  enterTo='transform opacity-100 scale-100'
                  leave='transition ease-in duration-75'
                  leaveFrom='transform opacity-100 scale-100'
                  leaveTo='transform opacity-0 scale-95'
                >
                  <Menu.Items className='absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none'>
                    {userNavigation.map((item) => (
                      <Menu.Item key={item.name}>
                        {({ active }) => (
                          <Link
                            href={item.href}
                            className='block px-3 py-1 text-sm leading-6 text-gray-900'
                          >
                            {item.name}
                          </Link>
                        )}
                      </Menu.Item>
                    ))}
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
        </div>

        <main className='py-4'>{children}</main>
      </div>
    </>
  )
}
