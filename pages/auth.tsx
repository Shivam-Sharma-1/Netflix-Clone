import Image from "next/image"

function Auth() {
    return (
        <div className=" relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-cover bg-center bg-fixed ">
            <div className=" bg-black w-full h-full lg:bg-opacity-50 ">
                <nav className=" px-12 py-5 ">
                    <Image src="/images/logo.png" alt="Website-Logo" width={120} height={120} />
                </nav>
            </div>
        </div>
    )
}

export default Auth 