import { useState } from "react";
import { RxCaretDown } from "react-icons/rx";
import { IoSearchSharp } from "react-icons/io5";
import { TbRosetteDiscount } from "react-icons/tb";
import { LuBadgeHelp } from "react-icons/lu";
import { LiaSignInAltSolid } from "react-icons/lia";
import { FaCartArrowDown } from "react-icons/fa";
function Header() {
    const [toggle, setToggle] = useState(false);

    const showSideMenu = () => {
        setToggle(!toggle); // Toggle between true and false
    };
    const hideSideMenu = () => {
        setToggle(!toggle); // Toggle between true and false  
    }
    const links = [
        {
            icon: <IoSearchSharp />,
            name: "Search"
        },
        {
            icon: <TbRosetteDiscount />,
            name: "Offer",
            sup: "New"
        },
        {
            icon: <LuBadgeHelp />,
            name: "Help"
        },
        {
            icon: <LiaSignInAltSolid />,
            name: "Sign in"
        },
        {
            icon: <FaCartArrowDown />,
            name: "Cart"
        }
    ]
    return (
        <>
            <div
                className=" black-overlay w-full h-full fixed duration-500"
                style={{
                    opacity: toggle ? 1 : 0,
                    visibility: toggle ? "visible" : "hidden",
                    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Optional: for the dark overlay effect
                    zIndex: 9999999999
                }}
                onClick={hideSideMenu} // Close the menu when clicking the overlay
            >
                <div onClick={(e) => {
                    e.stopPropagation();
                }} className="w-[400px] bg-white h-full absolute duration-[400ms]" style={{ left: toggle ? '0%' : '-100%' }}></div>
            </div>

            <header className=" p-[15px] shadow-xl text-[#686b78] sticky top-0 bg-white z-[9999]">
                <div className="max-w-[1200px] mx-auto  flex items-center">
                    <div className="w-[100px]">
                        <img src="Images/Swiggy-logo.png" alt="logo" className="w-full" />
                    </div>
                    <div className="">
                        <span className="font-bold border-b-[3px] border-[black]">Hindustan Abhikharan </span>
                        Khandwa, Madhya Pradesh, India
                        <RxCaretDown
                            fontSize={25}
                            className="inline text-[#fc8019] cursor-pointer"
                            onClick={showSideMenu}
                        />
                    </div>
                    <nav className="hidden md:flex list-none gap-12 ml-auto font-semibold text-[18px]">
                        {
                            links.map(
                                (link, index) => {
                                    return <li key={index} className="flex hover:text-[#fc8019] items-center gap-2 
                                    cursor-pointer">
                                        {link.icon} {link.name} <sup className="text-[#fc8019]">{link.sup}</sup>
                                    </li>
                                }
                            )
                        }
                        {/* <li className="flex items-center gap-2"><IoSearchSharp /> Search</li>
                        <li className="flex items-center gap-2"><TbRosetteDiscount /> Offer</li>
                        <li className="flex items-center gap-2"><LuBadgeHelp /> Help</li>
                        <li className="flex items-center gap-2"><LiaSignInAltSolid /> Sing In</li>
                        <li className="flex items-center gap-2"> <FaCartArrowDown />Cart</li> */}
                    </nav>
                </div>
            </header>
        </>
    );
}

export default Header;
