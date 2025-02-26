import { BiPlay } from "react-icons/bi";
/* eslint-disable */
import React, { useEffect } from 'react';
import myVideo from "../public/Images/edited.mp4"
import Aos from 'aos';
import "aos/dist/aos.css"; // Import AOS styles

function Home() {

    useEffect(() => {
        Aos.init({
            duration: 1000, // Animation duration (in ms)
            easing: "ease-in-out", // Easing effect
            once: false, // Whether animation runs only once
            mirror: false, // Whether elements animate when scrolling back up
        });
    }, []);

    return (
        <>
                <div className="relative h-screen w-screen bg-gray-900 flex items-end justify-end snap-start">
                    {/* Video Wrapper with AOS Animation */}
                    <div
                        className="absolute top-0 left-0 w-full h-full brightness-50"
                        data-aos="zoom-out-up"
                        data-aos-delay="300"
                    >
                        <video autoPlay loop muted className="absolute w-full h-full object-cover">
                            <source src={myVideo} type="video/mp4" />
                        </video>
                    </div>
                    <div className='flex z-40 text-white py-28 mx-14 flex-col gap-8 text-right'>
                        <h1 className='text-7xl font-bold'>العاصمة الإدارية الجديدة</h1>
                        <h1 className='text-2xl'>مستقبل مصر يبدأ من هنا</h1>
                        <div className="flex items-center justify-end gap-10 ">
                            <button className="bg-white rounded-xl text-black text-2xl px-10 py-3 font-bold hover:text-white hover:bg-black transition-all cursor-pointer">التفاصيل</button>
                            <button className="rounded-full bg-white text-black flex items-center justify-center text-3xl p-3 hover:text-white hover:bg-black transition-all cursor-pointer"><BiPlay /></button>
                        </div>
                    </div>

                </div>
                <section className='h-[calc(100vh-7rem)] w-screen relative snap-start'>
                    <img src="/Images/Home/IsoBars White.png" className="absolute w-full h-full object-cover flex items-center justify-center z-0 opacity-50" />
                    <div className="relative flex items-center justify-center flex-col h-full" data-aos="fade-up" data-aos-duration="600">
                        <h1 className="text-6xl font-semibold text-blue-950 z-50">مستقبل المدن الذكية</h1>
                        <p className="text-2xl text-gray-700 text-center mt-10 max-w-[70vw]">العاصمة الإدارية الجديدة هي نموذج لمدينة ذكية متكاملة، تمزج بين الحداثة والاستدامة. توفر بنية تحتية متطورة، مساحات خضراء واسعة، وخدمات رقمية متقدمة، مما يجعلها مركزًا إداريًا واقتصاديًا عالميًا، يعكس رؤية مصر المستقبلية نحو التنمية والتقدم.</p>
                    </div>
                </section>
                <section className="h-screen snap-start">

                </section>
        </>
    );
}

export default Home;