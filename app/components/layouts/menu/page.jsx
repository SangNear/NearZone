"use client"
import { sidebarLinks } from '@constant'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Menu = () => {
    const path = usePathname()
  return (
    <div className='flex flex-col gap-2  '>
        {sidebarLinks.map((links) => {
            const isActive = path === links.route
            return (
            <Link key={links.label} href={links.route} className={`flex gap-4 justify-start rounded-lg py-2 px-4 hover:bg-purple-1 ${isActive && "bg-purple-1 "}`}>
                {links.icon}
                {links.label}
            </Link>
            )
            
        })}
    </div>
  )
}

export default Menu