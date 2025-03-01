/* eslint-disable */
import React , {useEffect , useState} from 'react';
import mySvg from "/Images/Home/GovLogo.svg";
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
                <Link to="/projects?Cat=Cities"><h1 className='font-medium text-white text-xl hover:text-[#c79801] cursor-pointer transition-all'>المدن</h1></Link>
                <Link to="/projects?Cat=Infrasturcture"><h1 className='font-medium text-white text-xl hover:text-[#c79801] cursor-pointer transition-all'>البنية التحتية</h1></Link>
                <Link to="/projects?Cat=Technology"><h1 className='font-medium text-white text-xl hover:text-[#c79801] cursor-pointer transition-all'>التكنولوجيا</h1></Link>
                <Link to="/projects?Cat=Toursim"><h1 className='font-medium text-white text-xl hover:text-[#c79801] cursor-pointer transition-all'>السياحة</h1></Link>
                <Link to="/projects?Cat=Energy"><h1 className='font-medium text-white text-xl hover:text-[#c79801] cursor-pointer transition-all'>الطاقة</h1></Link>
                <Link to="/projects"><h1 className='font-medium text-white text-xl hover:text-[#c79801] cursor-pointer transition-all'>المشاريع</h1></Link>
            </div>
            <Link to={"/"}><img src={mySvg} className='w-13 cursor-pointer' /></Link>
        </div>
    </>
    );
}

export default Navbar;