import Image from "next/image"
import { SearchParamTypes } from "@/types/SearchParamTypes"

export default async function Product({searchParams} : SearchParamTypes) {
return(
    <div>
        <Image src={searchParams.image} alt={searchParams.image} width={600} height={600}/>
        <div>
            <h1>{searchParams.name}</h1>
            <p>{searchParams.description}</p>
        </div>
    </div>
)
}