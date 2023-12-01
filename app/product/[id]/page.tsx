import Image from "next/image"
import { SearchParamTypes } from "@/types/SearchParamTypes"
import formatPrice from "@/util/PriceFormat"
import AddCart from "./AddCart"

export default async function Product({searchParams} : SearchParamTypes) {
return(
    <div className="flex flex-col 2xl:flex-row items-center justify-between gap-12 text-gray-800">
        <Image src={searchParams.image} alt={searchParams.image} width={500} height={550}/>

        <div className="font-medium">
            <h1 className="text-2xl">{searchParams.name}</h1>
            <p className="py-2">{searchParams.description}</p>
            <p className="py-2">{searchParams.features}</p>

            <div className="flex gap-2">
            <p className="font-bold text-primary">
                {searchParams.unit_amount && formatPrice(searchParams.unit_amount)}
            </p>
            </div>
            <AddCart {...searchParams}/>
        </div>
    </div>
)
}