import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className = "mx-auto max-w-7xl sm:px-6 lg:px-8" >
      <p className='text-white'>hello world</p>
    </div >
  )
}
