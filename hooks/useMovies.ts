import fetcher from "@/lib/fetcher";
import useSWR from "swr";

function useMovie(id?: string) {
    const { data, error, isLoading } = useSWR(id ? `/api/movies/${id}` : null, fetcher, {
        revalidateIfStale: false,
        revalidateOnReconnect: false,
        revalidateOnFocus: false
    })

    return {
        data, error, isLoading
    }
}

export default useMovie