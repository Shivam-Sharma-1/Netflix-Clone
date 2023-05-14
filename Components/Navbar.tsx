import Image from "next/image";
import logo from "../public/images/logo.png";
import NavbarItem from "./NavbarItem";
import { BsChevronDown } from "react-icons/bs";
import MobileMenu from "./MobileMenu";
import { useCallback, useState } from "react";

function Navbar() {
	const [showMobileMenu, setShowMobileMenu] = useState(false);

	const toggleMobileMenu = useCallback(() => {
		setShowMobileMenu((current) => !current);
	}, []);

	return (
		<nav className="w-full fixed z-40">
			<div className="px-4 md:px-16 py-6 flex flex-row items-center transition duration-500 bg-zinc-900 bg-opacity-90">
				<Image
					className="lg:h-7"
					src={logo}
					alt="Website-Logo"
					width={120}
					height={120}
				/>
				<div className="flex-row ml-8 gap-7 hidden lg:flex">
					<NavbarItem label="Home" />
					<NavbarItem label="Series" />
					<NavbarItem label="Films" />
					<NavbarItem label="New & Popular" />
					<NavbarItem label="My List" />
					<NavbarItem label="Browse by languages" />
				</div>
				<div
					className="flex flex-row gap-2 items-center ml-8 cursor-pointer relative lg:hidden"
					onClick={toggleMobileMenu}
				>
					<p className="text-white text-sm">Browse</p>
					<BsChevronDown className="text-white transition" />
					<MobileMenu visible={showMobileMenu} />
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
