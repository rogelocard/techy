"use client"

import ProductImage from "@/app/components/products/ProductImage"
import SetColor from "@/app/components/products/SetColor"
import { Rating } from "@mui/material"
import { useCallback, useState } from "react"

interface ProductDetailsProps{
  product: any
}

export type CartProductType = {
  id: string,
  name: string, 
  description: string,
  category: string, 
  brand: string, 
  selectedImg: SelectedImgType,
  quantity: number,
  price: number
}

export type SelectedImgType = {
  color: string,
  colorCode: string,
  image: string 
} 

const Horizontal = () =>{
  return <hr className="w-[30%] my-2]" />
}

const ProductDetails: React.FC<ProductDetailsProps> = ({product}) => {

  const [cartProduct, setCartProduct] = useState<CartProductType>({
    id: product.id,
    name: product.name, 
    description: product.description,
    category: product.category, 
    brand: product.brand, 
    selectedImg: {...product.images[0]},
    quantity: product.quantity,
    price: product.price
  })

  // Average of reviews
  const productRating = product.reviews.reduce((acc:number, item:any) =>
  item.rating + acc, 0) / product.reviews.length

  // console.log(cartProduct)

  /**
   * Function used to change the product color once a new color is set
   */
  const handleColorSelect = useCallback((value: SelectedImgType) => {
    setCartProduct((prev) => {
      return {...prev, selectedImg:value}
    })
  }, [cartProduct.selectedImg])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* Product's images */}
     <ProductImage 
      cartProduct={cartProduct} 
      product={product} 
      handleColorSelect={handleColorSelect}
      
      />
      {/* Product's Description session */}
      <div className="flex flex-col gap-1 text-slate-500 text-sm">
        <h2 className="text-3xl font-medium text-slate-700">{product.name}</h2>
        <div className="flex items-center gap-2"> 
          <Rating value={productRating} readOnly /> 
          <div>{product.reviews.length} comentarios</div>
        </div>
        <Horizontal />
        {/* Description */}
        <div className="text-justify">{product.description}</div>
        <Horizontal />
        <div>
          <span className="font-semibold">CATEGORIA:</span> {product.category}
        </div>
        <div>
          <span className="font-semibold">MARCA:</span> {product.brand}
        </div>
        <div className={product.inStock ? 'text-teal-400' : 'text-rose-400'}>
           {product.inStock ? 'Disponible' : 'Agotado'}
        </div>
        <Horizontal />
        <SetColor 
          cartProduct={cartProduct}
          images={product.images}
          handleColorSelect={handleColorSelect}
        />
        <Horizontal />
      </div>
    </div>
  )
}

export default ProductDetails