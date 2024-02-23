"use client"

import Button from "@/app/components/Button"
import Heading from "@/app/components/Heading"
import CategoryInput from "@/app/components/inputs/CategoryInput"
import CustomCheckbox from "@/app/components/inputs/CustomCheckbox"
import Input from "@/app/components/inputs/Input"
import SelectColor from "@/app/components/inputs/SelectColor"
import TextArea from "@/app/components/inputs/TextArea"
import { categories } from "@/utils/Categories"
import { colors } from "@/utils/Colors"
import { stringify } from "querystring"
import { useCallback, useEffect, useState } from "react"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"

export type ImageType = {
    color: string;
    colorCode: string;
    image: File | null
}
export type UploadedImageType = {
    color: string;
    colorCode: string;
    image: string
}

const AddProductForm = () => {
    const [isLoading, setIsLoading] = useState(false) 
    const [images, setImages] = useState<ImageType[] | null>()
    const [isProductCreated, setIsProductCreated] = useState(false)

    // console.log('images', images)

    const {register, handleSubmit, setValue, watch, reset, formState:{errors} } = useForm<FieldValues>({
        defaultValues:{
            name: '',
            description: '',
            brand: '',
            category: '',
            inStock: false,
            images: [],
            price: '',
        }
    })

    useEffect(() => {
        setCustomValue('images', images)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[images]) // Ignoring the Warning when npm run build for missing dependency setCustomValue as giving unexpected behavior

    useEffect(() => {
        if (isProductCreated) {
            reset();
            setImages(null);
            setIsProductCreated(false)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[isProductCreated]) // Ignoring the Warning when npm run build for missing dependency setCustomValue as giving unexpected behavior

    /**
     * Function to send over to API post a new product 
     * @param data receives all the data values from the form to add a new product
     */
    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        console.log("Product Data: ", data)
        // Upload images to Fire base or a server...
        // upload product to MongoDb
        let uploadedImages: UploadedImageType[] =[]

        if (!data.category) {
            setIsLoading(false)
            return alert("No se selecciono categoria")
        }
        if (!data.images || data.images.length === 0) {
            setIsLoading(false)
            return alert("No se selecciono imagen")
        }

        // handleImageUploads function
        // axios function to send a post...
    }

    const category = watch("category")

    const setCustomValue = (id: string, value: any) => {
        setValue(id, value, {
            shouldValidate: true,
            shouldDirty: true, 
            shouldTouch: true
        })
    }

    const addImageToState = useCallback((value: ImageType) => {
        setImages((prev)=> {
            if (!prev) {
                return [value]
            }
            return[...prev, value]
        })
    }, [])
    const removeImageFromState = useCallback(( value: ImageType) => {
        setImages((prev) => {
            if (prev) {
                const filteredImages = prev.filter((item) => item.color !== value.color)
                return filteredImages;
            }
            return prev
        })
    }, [])


  return (
    <>
        <Heading tittle="Añadir un producto" center/>
        <Input 
            id="name"
            label="Nombre"
            disabled={isLoading}
            register={register}
            errors = {errors}
            required
        />
        <Input 
            id="price"
            label="Precio"
            disabled={isLoading}
            register={register}
            errors = {errors}
            type="number"
            required
        />
        <Input 
            id="brand"
            label="Marca"
            disabled={isLoading}
            register={register}
            errors = {errors}
            required
        />
        <TextArea
            id="descriptino"
            label="Descripción"
            disabled={isLoading}
            register={register}
            errors = {errors}
            required
        />
        <CustomCheckbox id="inStock" register={register} label="Este producto esta disponible"/>
        <div className="w-full font-medium">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-h[50vh] overflow-y-auto">
                {categories.map((item)=>{
                    if(item.label === 'Todos'){
                        return null
                    }
                    return <div key={item.label} className="col-span">
                        <CategoryInput 
                            onClick={(category) => setCustomValue('category', category)}
                            selected={category === item.label}
                            label={item.label}
                            icon ={item.icon}
                        />

                    </div>
                })}
            </div>
        </div>
        <div className="w-full flex flex-col flex-wrap gap-4">
            <div className="font-bold">Selecciona los colores del producto con su respectiva imagen</div>
            <div className="text-sm">
                Debes subir una imagen por cada uno de los colores seleccionados de otra forma tu seleccion de color sera ignorada
            </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
            {colors.map((item, index) => {
                return (
                    <SelectColor 
                        key={index} 
                        item={item}
                        addImageToState={addImageToState}
                        removeImageFromState={removeImageFromState}
                        isProductCreated={isProductCreated}
                    />
                )
            })}
        </div>
        <Button label={isLoading ? 'Loading...' : 'Añadir producto'} onClick={handleSubmit(onSubmit)}/>
    </>
  )
}

export default AddProductForm