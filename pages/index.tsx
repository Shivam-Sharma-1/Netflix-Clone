import Navbar from "@/Components/Navbar";
import useCurrentUser from "@/hooks/useCurrentUser";
import { NextPageContext } from "next";
import { getSession, signOut } from "next-auth/react";

export async function getServerSideProps(context: NextPageContext) {
	const session = await getSession(context);

	if (!session) {
		return {
			redirect: {
				destination: "/auth",
				permanent: false,
			},
		};
	}

	return {
		props: {},
	};
}

export default function Home() {
	const { data: user } = useCurrentUser();
	// console.log(useCurrentUser());

	return (
		<>
			<Navbar />
			{/* <p>Logged in as: {user?.name}</p> */}
			{/* <button className="text-white" onClick={() => signOut()}>
				signout
			</button> */}
		</>
	);
}
