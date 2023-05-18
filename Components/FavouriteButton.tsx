import useCurrentUser from "@/hooks/useCurrentUser";
import useFavourites from "@/hooks/useFavourites";
import axios from "axios";
import { FC, useCallback, useMemo } from "react";
import { AiOutlinePlus, AiOutlineCheck } from "react-icons/ai";

interface FavouriteButtonProps {
	movieId: string;
}

const FavouriteButton: FC<FavouriteButtonProps> = ({ movieId }) => {
	const { mutate: mutateFavourites } = useFavourites();
	const { data: currentUser, mutate } = useCurrentUser();

	const isFavourite = useMemo(() => {
		const list = currentUser?.favouriteIds || [];

		return list.includes(movieId);
	}, [currentUser, movieId]);

	const toggleFavourites = useCallback(async () => {
		let response;
		if (isFavourite) {
            
            response = await axios.post("/api/favouriteDelete", {data: {id: movieId}});
			console.log(movieId);
		} else {
			response = await axios.post("/api/favourite", { movieId: movieId });
		}

		const updatedFavouriteIds = response?.data?.favouriteIds;

		mutate({
			...currentUser,
			favouriteIds: updatedFavouriteIds,
		});

		mutateFavourites();
	}, [movieId, isFavourite, currentUser, mutate, mutateFavourites]);

	const Icon = isFavourite ? AiOutlineCheck : AiOutlinePlus;

	return (
		<div
			onClick={toggleFavourites}
			className="cursor-pointer group/item w-6 h-6 lg:w-10 lg:h-10 border-white border-2 rounded-full flex justify-center items-center transition hover:border-neutral-300"
		>
			<Icon size={25} className="text-white" />
		</div>
	);
};

export default FavouriteButton;
