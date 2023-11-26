'use client'

import Image from "next/image"
import { useCartStore } from "@/store"

export default function Cart(){

    const cartStore = useCartStore()

    return(
        <div onClick={() => cartStore.toggleCart()} className="fixed w-full h-screen left-0 top-0 bg-black/25">

            <div onClick={(e) => e.stopPropagation()} className="bg-white absolute right-0 top-0 w-1/4 h-screen p-12 overflow-y-scroll text-gray-800">
                <h1>
                    Here's your shopping list📃
                </h1>
                {cartStore.cart.map((item) => (

                    <div className="flex py-4 gap-4">
                        <Image src={item.image} alt={item.name} width={120} height={120}/>
                    </div>
                ))}
            </div>
            
        </div>
    )
}