import Input from "@/Components/Input"
import axios from "axios"
import Image from "next/image"
import { useCallback, useState } from "react"

function Auth() {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const [variant, setVariant] = useState('login')

    const toggleVariant = useCallback(() => {
        setVariant(currentVariant => currentVariant === 'login' ? 'register' : 'login')
    }, [])

    const register = useCallback(async () => {
        try {
            await axios.post('/api/register', {
                email,
                name,
                password,
            })
        } catch(error) {
            console.log(error);
        }
    }, [email, name, password])

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
                        <button onClick={register} className="bg-red-600 py-3 text-white rounded-md w-full mt-10 duration-500 hover:bg-red-700 hover:duration-500 ">
                            {variant === 'login' ? 'Login' : 'Sign up'}
                        </button>
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