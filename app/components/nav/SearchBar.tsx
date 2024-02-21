"use client"

import { useForm, FieldValues, SubmitHandler } from 'react-hook-form';

const SearchBar = () => {

    const {
        register,
        handleSubmit,
        reset, 
        formState: {errors}
    } = useForm<FieldValues>({
        defaultValues: {
            searchTerm: ''
        }
    })

    const onSubmit: SubmitHandler<FieldValues> = async (data) =>{
        alert("Capturamos los datos que se enviaran a la API de filtrar en JSON: ")
        alert(JSON.stringify(data))
    }

  return (
    <div className="flex items-center">
        <input 
        {...register('searchTerm')}
        autoComplete="off"
        type="text"
        placeholder="Explora Techy"
        className="p-2 border border-gray-300 rounded-1-md focus:outline-none
        focus:border-[0.5px] focus:border-slate-500 w-80
        " />
        <button onClick={handleSubmit(onSubmit)} className="bg-slate-700 hover:opacity-80 text-white p-2 rounded-r-md">Buscar</button>
    </div>
  )
}

export default SearchBar