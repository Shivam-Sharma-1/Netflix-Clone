import axios from "axios";

function fetcher(url: string) {
	return axios.get(url).then((res) => res.data);
}

export default fetcher;
