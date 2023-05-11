import { signOut } from "next-auth/react";

export default function Home() {
    return (
        <>
            <h1 className=" text-3xl text-white">Netflix Clone</h1>
            <button className="text-white" onClick={() => signOut()}>signout </button>
        </>
    )
}
