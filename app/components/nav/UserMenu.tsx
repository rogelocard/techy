"use client"

import Avatar from "@/app/product/[productId]/Avatar"
import Link from "next/link"
import { useCallback, useState } from "react"
import { AiFillCaretDown } from "react-icons/ai"
import BackDrop from "./BackDrop"
import MenuItem from "./MenuItem"

const UserMenu = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggleOpen = useCallback(() => {
        setIsOpen(prev => !prev);
    }, [])

    return (
        <>
            <div className="relative z-30">
                <div onClick={toggleOpen}
                    className="
            p-2
            border-[1px]
            border-slate-400
            flex
            flex-row
            items-center
            gap-1
            rounded-full
            cursor-pointer
            hover:shadow-md
            transition
            text-slate-700
            ">
                    <Avatar />
                    <AiFillCaretDown />
                </div>
                {isOpen && (
                    <div className="
                    absolute 
                    rounded 
                    shadow-md 
                    w-[170px] 
                    bg-white 
                    overflow-hidden 
                    right-0
                    top-12
                    text-sm
                    flex
                    flex-col
                    cursor-pointer">
                        <div>
                            <Link href='/login'>
                                <MenuItem onClick={toggleOpen}>Iniciar sesion</MenuItem>
                            </Link>
                            <Link href='/register'>
                                <MenuItem onClick={toggleOpen}>Registrarme</MenuItem>
                            </Link>
                        </div>
                        <hr />
                        <div>
                            <Link href='/admin'>
                                <MenuItem onClick={toggleOpen}>Admin Dashboard</MenuItem>
                            </Link>
                            <MenuItem onClick={() => {
                                toggleOpen();
                                // Implement signOut() method to sign out a user and destroy the session.
                            }}>Salir 
                            </MenuItem>
                        </div>
                    </div>
                )}
            </div>
            {isOpen ? <BackDrop onClick={toggleOpen}/> : null}
        </>
    )
}

export default UserMenu