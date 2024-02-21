"use client"
import { useState } from "react"
import Heading from "../components/Heading"
import Input from "../components/inputs/Input"
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import Button from "../components/Button"
import Link from "next/link"
// import { AiOutlineGoogle } from "react-icons/ai"

const LoginForm = () => {
    const [isLoading, setIsLoading] = useState(false)
    const { register, handleSubmit, formState: { errors }} = useForm<FieldValues>({
        defaultValues: {
            email: "",
            password: "",
        }
    })

    const onSubmit: SubmitHandler<FieldValues> = (data) =>{
        setIsLoading(true)
        console.log("Form data submitted:", data);
        //TODO: Send data to a login/authentication API...
    }

    return (
        <>
            <Heading tittle="Ingresa a Hotbed4Technologies" />
            {/* <Button 
                outline
                label="Continua con Google"
                icon={AiOutlineGoogle}
                onClick={() => {}}
            /> */}
            <hr className="bg-slate-300 w-full h-px" />
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
            <Button label = {isLoading ? "Loading" : "Ingresar"} onClick={handleSubmit(onSubmit)}/>
            <p className="text-sm">
                No tienes una cuenta? <Link className="underline" href='/register'>
                    Registrate
                </Link>
            </p>
        </>
    )
}

export default LoginForm