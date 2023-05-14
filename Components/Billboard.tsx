import useBillBoard from "@/hooks/useBillboard";

function Billboard() {
	const { data } = useBillBoard();

	return (
		<div>
			<div className="relative h-[56.25vw]">
				<video
					poster={data?.thumbnailUrl}
					className="w-full h-[56.25vw] object-cover brightness-[60%] transition duration-500"
					autoPlay
					muted
					loop
					src={data?.videoUrl}
				></video>
			</div>
		</div>
	);
}

export default Billboard;
