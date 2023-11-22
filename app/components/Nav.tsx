"use client"

import { Session } from 'next-auth'
import { signIn } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import Cart from './Cart'
import { useCartStore } from '@/store'




export default function Nav({user}: Session){
    const cartStore = useCartStore()
    return(
        <nav className='flex justify-between items-center py-8'>
            <Link href={"/"}>
            <h1 className='text-2xl text-teal-700 font-bold'>Next-Ecom</h1>
            </Link>
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
            { cartStore.isOpen && <Cart/>}
        </nav>
    )

}