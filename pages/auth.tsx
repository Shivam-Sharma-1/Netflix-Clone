import Input from "@/Components/Input"
import axios from "axios"
import Image from "next/image"
import { useCallback, useState } from "react"
import { signIn } from "next-auth/react"
import { useRouter } from "next/router"
import { FcGoogle } from "react-icons/fc"
import { FaGithub } from "react-icons/fa"
import { sign } from "crypto"

function Auth() {
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const [variant, setVariant] = useState('login')

    const toggleVariant = useCallback(() => {
        setVariant(currentVariant => currentVariant === 'login' ? 'register' : 'login')
    }, [])
    
    const login = useCallback(async () => {
        try {
            await signIn('credentials', {
                email,
                password,
                redirect: false,
                callbackUrl: '/'
            })
            router.push('/') 
        } catch(error) {
            console.log(error);
        }
    }, [email, password, router])

    const register = useCallback(async () => {
        try {
            await axios.post('/api/register', {
                name,
                email,
                password
            })
            login()
        } catch(error) {
            console.log(error);
        }
    }, [email, name, password, login])

    return (
        <div className=" relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-cover bg-center bg-fixed ">
            <div className=" bg-black w-full h-full bg-opacity-50 ">
                <nav className=" px-12 py-5 ">
                    <Image src="/images/logo.png" alt="Website-Logo" width={120} height={120} />
                </nav>
                <div className="flex justify-center">
                    <div className=" bg-black bg-opacity-70 px-16 py-16 self-center mt-2 rounded-md lg:w-2/5 lg:max-w-md ">
                        <h2 className="text-white text-4xl mb-8 font-semibold">
                            {variant === 'login' ? 'Sign in' : 'Register'}
                        </h2>
                        <div className="flex flex-col gap-4">
                            {variant === 'register' && (
                                <Input
                                label="Username"
                                onChange={(e: any) => setName(e.target.value)}
                                id="name"
                                type="text"
                                value={name}
                                />
                            )}
                            <Input
                                label="Email"
                                onChange={(e: any) => setEmail(e.target.value)}
                                id="email"
                                type="email"
                                value={email}
                            />
                            <Input
                                label="Password"
                                onChange={(e: any) => setPassword(e.target.value)}
                                id="password"
                                type="password"
                                value={password}
                            />
                        </div>
                        <button onClick={variant === 'login' ? login : register} className="bg-red-600 py-3 text-white rounded-md w-full mt-10 duration-500 hover:bg-red-700 hover:duration-500 ">
                            {variant === 'login' ? 'Login' : 'Sign up'}
                        </button>
                        <div className="flex gap-4 items-center justify-center mt-8">
                            <div 
                                className="cursor-pointer w-10 h-10 bg-white rounded-full flex items-center justify-center hover:opacity-80 transition"
                                onClick={() => signIn('google', { callbackUrl : '/' })}
                                >
                                <FcGoogle size={30}/>
                            </div>
                            <div 
                                className="cursor-pointer w-10 h-10 bg-white rounded-full flex items-center justify-center hover:opacity-80 transition"
                                onClick={() => signIn('github', { callbackUrl: '/' })}
                                >
                                <FaGithub size={30}/>
                            </div>
                        </div>
                        <p className="text-neutral-500 mt-12">
                            {variant === 'login' ? 'First time using Netflix?' : "Already have an account?"}
                            <span 
                                className="text-white ml-1 hover:underline cursor-pointer"
                                onClick={toggleVariant}
                                >
                                Create an account
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth 