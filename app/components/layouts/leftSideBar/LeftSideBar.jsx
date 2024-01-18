import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import Menu from '../menu/Menu'
import { SignOutButton, SignedIn, UserButton } from '@clerk/nextjs'
import { Logout } from '@mui/icons-material'
const LeftSidebar = () => {
  return (
    <div className='h-screen left-0 top-0 sticky overflow-auto px-10 py-6 flex flex-col gap-6 max-md:hidden custom-scrollbar'>
      <Link href='/'>
        <Image src="/assets/logo.png" width={200} height={200} alt='logo' />

      </Link>
      <div className='flex flex-col gap-2 '>
        <div className='flex flex-col items-center gap-2'>
          <Link href="/">
            <Image src="/assets/phucmai.png" width={50} height={50} alt='avatar' className='rounded-full' />

          </Link>
          <p className='text-small-bold'>Diem dsada Quynh</p>
        </div>
        <div className='flex flex-row text-light-1 justify-between'>
          <div className='flex flex-col gap-2 items-center'>
            <p className='text-base-bold'>1</p>
            <p className='text-subtle-medium'>Post</p>
          </div>
          <div className='flex flex-col gap-2 items-center'>
            <p className='text-base-bold'>0</p>
            <p className='text-subtle-medium'>Flowers</p>
          </div>
          <div className='flex flex-col gap-2  items-center'>
            <p className='text-base-bold'>0</p>
            <p className='text-subtle-medium'>Following</p>
          </div>
        </div>
      </div>

      <hr/>
        <Menu/>
      <hr/>
      <div className='flex items-center gap-4'>
        <UserButton/>
        <p className='text-light-1 text-body-bold'>Manage Account</p>
      </div>
      <SignedIn>
        <SignOutButton>
          <div className='flex gap-4 items-center cursor-pointer'>
            <Logout sx={{color: 'white', fontSize: '32px'}} />
            <p className='text-body-bold'>Log out</p>
          </div>
        </SignOutButton>
      </SignedIn>
    </div>
  )
}

export default LeftSidebar