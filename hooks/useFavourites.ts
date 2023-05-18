import fetcher from "@/lib/fetcher";
import useSWR from "swr";

function useFavourites() {
	const { data, error, isLoading, mutate } = useSWR(
		"/api/favourites",
		fetcher,
		{
			revalidateIfStale: false,
			revalidateOnFocus: false,
			revalidateOnReconnect: false,
		}
	);

	return {
		data,
		isLoading,
		error,
		mutate,
	};
}

export default useFavourites;
