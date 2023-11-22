import Image from "next/image"
import { SearchParamTypes } from "@/types/SearchParamTypes"
import formatPrice from "@/util/PriceFormat"

export default async function Product({searchParams} : SearchParamTypes) {
return(
    <div className="flex justify-between gap-12 p-12 text-gray-800">
        <Image src={searchParams.image} alt={searchParams.image} width={400} height={550}/>

        <div className="font-medium">
            <h1 className="text-2xl">{searchParams.name}</h1>
            <p className="py-2">{searchParams.description}</p>
            <p className="py-2">{searchParams.features}</p>

            <div className="flex gap-2">
            <p className="font-bold text-primary">
                {searchParams.unit_amount && formatPrice(searchParams.unit_amount)}
            </p>
            </div>
            <button className="my-12 text-white py-2 px-6 font-medium rounded-md bg-teal-900">Add to cart</button>
        </div>
    </div>
)
}