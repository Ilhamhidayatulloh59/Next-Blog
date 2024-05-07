"use client"
import Link from "next/link"
import Wrapper from "./wrapper"
import { useAppDispatch, useAppSelector } from "@/lib/features/hooks"
import { getAuthor } from "@/lib/author"
import { useEffect } from "react"
import { setUser } from "@/lib/features/author/authorSlice"
import { useRouter } from "next/navigation"
import { deleteToken } from "@/app/action"
import Cookies from 'js-cookie'

export const Navbar = () => {
    const author = useAppSelector((state) => state.author.value)
    const dispatch = useAppDispatch()
    const router = useRouter()

    const onLogout = () => {
        dispatch(setUser(null))
        deleteToken('token')
        Cookies.remove('token')
        router.push('/')
    }
    
    const keepLogin = async (token: any) => {
        try {
            const res = await getAuthor(token)
            dispatch(setUser(res.author))
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        const token = Cookies.get("token")
        keepLogin(token)
    }, [])

    return (
        <div className="sticky top-0 h-[80px]">
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <Wrapper>
                    <div className="flex justify-between w-full">
                        <Link href={'/'} className="flex items-center space-x-3 rtl:space-x-reverse">
                            <img src="https://www.blogger.com/img/logo_blogger_40px_2x.png" className="h-8" alt="Blog Logo" />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Blogger</span>
                        </Link>
                        { author && <div className="flex gap-2 items-center">
                                <img src={author.image} onClick={onLogout} className=" w-10 h-10 rounded-full"/>
                                <div className="flex-col">
                                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">{author.name}</p>
                                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">{author.email}</p>
                                </div>
                            </div>
                        }
                        { author == null && 
                            <div className="flex gap-2">
                                <Link href={'/register'}>
                                    <button className="p-1.5 bg-orange-400 rounded-md">Register</button>
                                </Link>
                                <Link href={'/login'}>
                                    <button className="p-1.5 rounded-md border-2 border-orange-400">Login</button>
                                </Link>
                            </div>
                        }
                    </div>
                </Wrapper>
            </nav>
        </div>
    )
}