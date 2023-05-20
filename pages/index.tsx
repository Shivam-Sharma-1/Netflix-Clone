import Billboard from "@/Components/Billboard";
import InfoModal from "@/Components/InfoModal";
import MovieList from "@/Components/MovieList";
import Navbar from "@/Components/Navbar";
import useCurrentUser from "@/hooks/useCurrentUser";
import useFavourites from "@/hooks/useFavourites";
import useInfoModal from "@/hooks/useInfoModal";
import useMovieList from "@/hooks/useMovieList";
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
	const { data: movies = [] } = useMovieList();
	const { data: favourites = [] } = useFavourites();
	const { isOpen, closeModal } = useInfoModal();

	return (
		<>
			<InfoModal visible={isOpen} onClose={closeModal} />
			<Navbar />
			<Billboard />
			<div className="pb-40">
				<MovieList title="Trending Now" data={movies} />
				<MovieList title="My List" data={favourites} />
			</div>
		</>
	);
}
