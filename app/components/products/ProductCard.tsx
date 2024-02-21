"use client";

import Image from "next/image";
import { truncateText } from '../../../utils/truncateText';
import { formatPrice } from '../../../utils/formatPrice';
import { Rating } from "@mui/material";
import { useRouter } from "next/navigation";

interface ProductCardProps{
    data: any
}

const ProductCard:React.FC<ProductCardProps> = ({data}) => {

    const router = useRouter()

    // Average of reviews
    const productRating = data.reviews.reduce((acc:number, item:any) =>
    item.rating + acc, 0) / data.reviews.length

  return (
    <div onClick={() => router.push(`/product/${data.id}`)} className="col-span-1 
    cursor-pointer 
    border-[1.2px]
    border-slate-200 
    bg-slate-50 
    rounded-sm 
    p-2
    transition
    hover:scale-105
    text-center
    text-sm
    ">
        <div className="flex flex-col items-center w-full gap-1">
            {/* Image of the product */}
            <div className="aspect-square overflow-hidden relative w-full">
                <Image 
                fill 
                src={data.images[0].image} 
                alt={data.name} 
                className="w-full h-full object-contain" />
            </div>
            {/* Name of the product */}
            <div className="mt-4"> 
                {truncateText(data.name)}
            </div>
            <div>
                <Rating value={productRating} readOnly />
            </div>
            {/* Add conditional to render opinion when only 1 review */}
            <div>{data.reviews.length} opiniones</div>
            <div className="font-semibold">{formatPrice(data.price)}</div>
        </div>
    </div>
  )
}

export default ProductCard