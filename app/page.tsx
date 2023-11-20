import Stripe from "stripe"

const getProducts = async() => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion:"2023-10-16"
  })

  const products = await stripe.products.list()
  console.log(products)

  const productWuthPrices = await Promise.all(
    products.data.map(async (product) =>{
      const prices = await stripe.prices.list({product: product.id})
      return{
        id: product.id,
        name:product.name,
        price: prices.data[0].unit_amount,
        image: product.images,
        currency: prices.data[0].currency
      }
    })
  )
      return productWuthPrices
}


export default async function Home() {
  const products = await getProducts()
  return (
    <h1 className="text-4xl">Hello Next 14</h1>
  )
}
