import axios from "axios";

function fetcher(url: string) {
	axios.get(url).then((res) => res.data);
}

export default fetcher;
