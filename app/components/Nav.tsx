"use client"

import { Session } from 'next-auth'
import { signIn } from 'next-auth/react'
import Image from 'next/image'




export default function Nav({user}: Session){
    return(
        <nav className='flex justify-between items-center py-8'>
            <h1 className='text-2xl text-teal-700 font-bold'>Next-Ecom</h1>
            <ul className='flex items-center gap-12'>    
              {/* If the use is not signed in        */}
                {!user && (
                    <li className='bg-teal-700 text-white py-2 px-4 rounded-md'>
                    <button onClick={() => signIn()}>Sign In</button>
                </li>
                    )}
                    {user && (
                        
                        <li>
                            <Image src={user?.image as string} alt={user?.name as string} width={48} height={48} className='rounded-full'/>
                        </li>
                    )}
            </ul>
        </nav>
    )
    
}