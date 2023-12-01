'use client'

import { loadStripe, StripeAddressElementOptions } from "@stripe/stripe-js"
import { Elements } from '@stripe/stripe-js'
import { useCartStore } from "@/store"
import { useState, useEffect, use } from 'react'



const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)



export default function Checkout(){
    const cartStore = useCartStore()
    const [clientSecret, setClientSecret ] = useState("")


    useEffect(() => {
        // Create a paymentIntent as soon as page loads up
            fetch('/api/create-payment-intent',{
                method: "POST",
                headers: {'Content-Type' : 'application/json'},
                body: JSON.stringify({
                    items: cartStore.cart,
                    payment_intent_id: paymentIntent,
                })
            })
    },[])



}
