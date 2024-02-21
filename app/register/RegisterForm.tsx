"use client"
import { useState } from "react"
import Heading from "../components/Heading"
import Input from "../components/inputs/Input"
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import Button from "../components/Button"
import Link from "next/link"
// import { AiOutlineGoogle } from "react-icons/ai"

const RegisterForm = () => {
    const [isLoading, setIsLoading] = useState(false)
    const { register, handleSubmit, formState: { errors }} = useForm<FieldValues>({
        defaultValues: {
            name: "",
            email: "",
            password: "",
        }
    })

    const onSubmit: SubmitHandler<FieldValues> = (data) =>{
        setIsLoading(true)
        console.log("Form data submitted:", data);
        //TODO: Send data to register a new user API
    }

    return (
        <>
            <Heading tittle="Registrate en Hotbed4Technologies" />
            {/* <Button 
                outline
                label="Registrarme con Google"
                icon={AiOutlineGoogle}
                onClick={() => {}}
            /> */}
            <hr className="bg-slate-300 w-full h-px" />
            <Input
                id="name"
                label="Nombre"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
            <Input
                id="email"
                label="Correo Electronico"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
            <Input
                id="password"
                label="Contraseña"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
                type="password"
            />
            <Button label = {isLoading ? "Cargando" : "Registrarme"} onClick={handleSubmit(onSubmit)}/>
            <p className="text-sm">
                Ya tienes una cuenta? <Link className="underline" href='/login'>
                    Ingresar
                </Link>
            </p>
        </>
    )
}

export default RegisterForm