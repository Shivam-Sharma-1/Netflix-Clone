import fetcher from "@/lib/fetcher";
import useSWR from "swr";

function useFavorites() {
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

export default useFavorites;
