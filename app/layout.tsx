import './globals.css'
import Nav from './components/Nav'
import {getServerSession} from "next-auth/next"
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import Hydrate from './components/Hydrate'
import { Roboto } from '@next/font/google'
import Head from 'next/head'

// Define main font

const roboto = Roboto({weight:['400','500','700'], subsets:['latin']})




export const metadata = {
  title: 'Next-Ecom',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  //Fetch the user

  const session = await getServerSession(authOptions)
  return (


    
    <html lang="en">
      <body className={`mx-4 lg:mx-48 ${roboto.className}`}>
        <Hydrate>
        <Nav user={session?.user} expires={session?.expires as string}/>
        {children}
        </Hydrate>
        </body>
    </html>
  )
}
