import { FC } from "react";
import { BsFillPlayFill } from "react-icons/bs";
import FavouriteButton from "./FavouriteButton";
import { useRouter } from "next/router";
import useInfoModal from "@/hooks/useInfoModal";
import { AiOutlineInfoCircle } from "react-icons/ai";

interface MovieCardProps {
	data: Record<string, any>;
}

const MovieCard: FC<MovieCardProps> = ({ data }) => {
	const router = useRouter();
	const { openModal } = useInfoModal();

	return (
		<div className="group bg-zinc-900 col-span relative h-[12vw]">
			<img
				src={data.thumbnailUrl}
				alt="Movie"
				className="
                    cursor-pointer
                    object-cover
                    transition
                    duration
                    shadow-xl
                    rounded-md
                    group-hover:opacity-90
                    sm:group-hover:opacity-0
                    w-full
                    h-[12vw]
                    "
			/>
			<div
				className="
                    opacity-0
                    absolute
                    top-0
                    transition
                    duration-500
                    z-10
                    invisible
                    sm:visible
                    w-full
                    scale-0
                    group-hover:scale-110
                    group-hover:-translate-y-[6vw]
                    group-hover:translate-x-[2vw]
                    group-hover:opacity-100
                    "
			>
				<img
					src={data.thumbnailUrl}
					alt="Movie"
					className="
                        cursor-pointer
                        object-cover
                        transition
                        duration
                        shadow-xl
                        rounded-t-md
                        w-full
                        h-[12vw]
                    "
				/>
				<div
					className="
                        z-10
                        bg-zinc-800
                        p-2
                        lg:p-4
                        absolute
                        w-full
                        transition
                        shadow-md
                        rounded-b-md
                        "
				>
					<div className="flex gap-2 flex-col items-start mt-1">
						<div className="flex gap-2">
							<div
								className="cursor-pointer w-6 h-6 lg:w-10 lg:h-10 bg-white rounded-full flex justify-center items-center transition hover:bg-neutral-300"
								onClick={() =>
									router.push(`/watch/${data?.id}`)
								}
							>
								<BsFillPlayFill
									className="text-black"
									size={30}
								/>
							</div>
							<div className="flex gap-2">
								<FavouriteButton movieId={data.id} />
								<div
									onClick={() => openModal(data?.id)}
									className="cursor-pointer ml-auto group/item w-6 h-6 lg:w-10 lg:h-10 flex justify-center items-center transition hover:border-neutral-300"
								>
									<AiOutlineInfoCircle
										className="text-white group-hover/item:text-neutral-300 "
										size={130}
									/>
								</div>
							</div>
						</div>

						<p className="text-green-400 font-semibold">
							New <span className="text-white">2023</span>
						</p>
						<div className="flex flex-row gap-2 items-center">
							<p className="text-white text-[10px] lg:text-sm">
								{data.duration}
							</p>
						</div>
						<div className="flex flex-row items-center gap-2 text-[8px] text-white lg:text-sm">
							<p>{data.genre}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MovieCard;
