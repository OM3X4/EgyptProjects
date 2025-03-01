/* eslint-disable */
import React , {useEffect , useState} from 'react';
import mySvg from "../public/Images/Home/GovLogo.svg";
import { Link } from 'react-router';
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles



function Navbar() {

    const [isAtTop ,setIsAtTop] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setIsAtTop(window.scrollY === 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration (in ms)
          easing: "ease-in-out", // Easing effect
          once: false, // Whether animation runs only once
          mirror: false, // Whether elements animate when scrolling back up
        });
    }, []);

    return (
    <>
        <div className={`fixed z-50 w-screen ${!isAtTop ? "bg-gray-900" : ""} transition-all duration-500  h-28 flex items-center justify-end px-32 gap-30`}>
            <div className='flex gap-8 items-center flex-row-reverse'>
                <Link to="/"><h1 className='font-medium text-white text-xl hover:text-[#c79801] cursor-pointer transition-all'>الرئيسية</h1></Link>
                <Link to="/projects?id=Cities"><h1 className='font-medium text-white text-xl hover:text-[#c79801] cursor-pointer transition-all'>المدن</h1></Link>
                <Link to="/projects?id=Infrasturcture"><h1 className='font-medium text-white text-xl hover:text-[#c79801] cursor-pointer transition-all'>البنية التحتية</h1></Link>
                <Link to="/projects?id=Technology"><h1 className='font-medium text-white text-xl hover:text-[#c79801] cursor-pointer transition-all'>التكنولوجيا</h1></Link>
                <Link to="/projects"><h1 className='font-medium text-white text-xl hover:text-[#c79801] cursor-pointer transition-all'>المشاريع</h1></Link>
            </div>
            <img src={mySvg} className='w-13 cursor-pointer' />
        </div>
    </>
    );
}

export default Navbar;