'use client'

import { loadStripe, StripeElementsOptions } from "@stripe/stripe-js"
import { Elements } from '@stripe/react-stripe-js'
import { useCartStore } from "@/store"
import { useState, useEffect, use } from 'react'
import { useRouter } from "next/navigation"


const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)



export default function Checkout(){
    const cartStore = useCartStore()
    const router = useRouter()
    const [clientSecret, setClientSecret ] = useState("")


    useEffect(() => {
        // Create a paymentIntent as soon as page loads up
            fetch('/api/create-payment-intent',{
                method: "POST",
                headers: {'Content-Type' : 'application/json'},
                body: JSON.stringify({
                    items: cartStore.cart,
                    payment_intent_id: cartStore.paymentIntent,
                })
            }).then((res) => {
                if(res.status === 403){
                    return router.push('/api/auth/signin')
                }
                return res.json()
            })
            .then((data) => {
                setClientSecret(data.paymentIntent.client_secret)
                cartStore.setPaymentIntent(data.paymentIntent.id)
            })
    },[])



    const options: StripeElementsOptions = {
        clientSecret,
        appearance:{
            theme:'stripe',
            labels: 'floating'

        }

    }

    return (
        <div>
           {clientSecret && (
            <div>
                <Elements options={options} stripe={stripePromise}>
                    <h1>Form</h1>
                </Elements>
            </div>
           ) }
        </div>
    )


}