import Image from "next/image"
import { ProductType } from "@/types/ProductType"
import formatPrice from "@/util/PriceFormat"
import Link from "next/link"


export default function Product({name, image, unit_amount, id, description, metadata
} : ProductType)
{
    return(
        <Link href={{ pathname:`/product/${id}`, query:{name, image, unit_amount, id}}}>
        <div>
              <Image
          src={image}
          alt={name}
          width={380}
          height={500}
          className="rounded-lg"
          priority={true}
          />

        <div className="font-medium py-2">
            <h1>{name}</h1>
            <h2 className="text-sm text-teal-800">
           {unit_amount!== null ? formatPrice(unit_amount): "N/A"}
          </h2>
          </div>
        </div>
          </Link>
    )
}