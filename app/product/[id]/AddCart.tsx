'use client'

import { useCartStore } from "@/store";
import { AddCartType } from "@/types/AddCartType";


export default function AddCart({name, id, image, unit_amount} : AddCartType){
    return(
        <>
        <button onClick={} className="my-12 text-white py-2 px-6 font-medium rounded-md bg-teal-800">
            Add to cart
            </button>
        </>
    )

}