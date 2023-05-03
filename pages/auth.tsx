import Input from "@/Components/Input"
import Image from "next/image"
import { useState } from "react"

function Auth() {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div className=" relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-cover bg-center bg-fixed ">
            <div className=" bg-black w-full h-full bg-opacity-50 ">
                <nav className=" px-12 py-5 ">
                    <Image src="/images/logo.png" alt="Website-Logo" width={120} height={120} />
                </nav>
                <div className="flex justify-center">
                    <div className=" bg-black bg-opacity-70 px-16 py-16 self-center mt-2 rounded-md lg:w-2/5 lg:max-w-md ">
                        <h2 className="text-white text-4xl mb-8 font-semibold">
                            Sign in
                        </h2>
                        <div className="flex flex-col gap-4">
                            <Input
                                label="Username"
                                onChange={(e: any) => setName(e.target.value)}
                                id="name"
                                type="text"
                                value={name}
                            />
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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth 