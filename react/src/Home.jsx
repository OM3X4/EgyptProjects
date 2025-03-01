/* eslint-disable */
import { BiPlay } from "react-icons/bi";
import React, { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css"; // Import AOS styles
import  Counter  from "./Counter";
import { Link } from "react-router"


function Home() {

    useEffect(() => {
        window.scrollTo(0, 0);
    } , [])

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
                    className="absolute top-0 left-0 w-full h-full brightness-50 pointer-events-none"
                    data-aos="zoom-out-up"
                    data-aos-delay="300"
                >
                    <video autoPlay loop muted className="absolute w-full h-full object-cover">
                        <source src={"/Images/0227.webm"} type="video/mp4" />
                    </video>
                </div>
                <div className='flex z-40 text-white py-28 mx-14 flex-col gap-8 text-right'>
                    <h1 className='text-7xl font-bold p-2'>العاصمة الإدارية الجديدة</h1>
                    <h1 className='text-2xl'>مستقبل مصر يبدأ من هنا</h1>
                    <div className="flex items-center justify-end gap-10 ">
                        <Link to="/project?id=1"><button className="bg-white rounded-xl text-black text-2xl px-10 py-3 font-bold hover:text-white hover:bg-black transition-all cursor-pointer">التفاصيل</button></Link>
                        <a href="https://youtu.be/W7QQCKEza8w?si=gd7JkJ46tNVgrfOP" target="blank"><button className="rounded-full bg-white text-black flex items-center justify-center text-3xl p-3 hover:text-white hover:bg-black transition-all cursor-pointer"><BiPlay /></button></a>
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
            <section className=" h-fit relative">
                <img src="/Images/Home/Iconic1.jpg" className=" w-full z-0 brightness-70 blur-[0.6px]" />
                <div className=" absolute top-24 flex items justify-center gap-30 text-right mx-20 flex-row-reverse">
                    <p className="max-w-[40vw] text-2xl text-white " data-aos="fade-up"  data-aos-duration="700">
                        تتميز <span className="font-black">العاصمة الإدارية الجديدة</span> بتصميمها الذكي والمستدام، حيث تعتمد على أحدث تقنيات المدن الذكية لتقليل الانبعاثات الكربونية وتعزيز كفاءة الطاقة. تمتد المدينة على مساحة شاسعة، وتضم أحياء سكنية متطورة، ومنطقة حكومية حديثة، وأكبر حديقة مركزية في الشرق الأوسط، مما يجعلها نموذجًا حضريًا متقدمًا يعكس رؤية مصر المستقبلية.
                    </p>
                    <p className="max-w-[40vw] text-2xl text-white "  data-aos="fade-up" data-aos-delay="700" data-aos-duration="700">
                        ستحتضن العاصمة الإدارية الجديدة <span className="font-black">6.5</span> <span className="font-black">مليون نسمة</span> على مساحة <span className="font-black">714</span> كم²، مع بنية تحتية ذكية ومستدامة. ستوفر وسائل نقل متطورة، كالمونوريل والقطار الكهربائي، لضمان تنقل سريع وسهل، في بيئة حديثة تجمع بين التكنولوجيا والمساحات الخضراء.
                    </p>
                </div>
            </section>
            <section className="h-[calc(100vh-7rem)] flex group relative">
                <div className="flex-1 h-[calc(100vh-7rem)] overflow-hidden hover:flex-[1.4] transition-all delay-10 relative group/sub" >
                    <img src="\Images\Home\Alamain2.jpg"
                    className="object-cover h-full z-0 brightness-45 blur-[0.6px]  hover:brightness-60 transition-all duration-300 delay-200 hover:scale-105" />
                    <div className="absolute top-20 w-full flex items-end flex-col justify-start gap-10  pointer-events-none brightness-70 group-hover:brightness-100">
                        <div className="flex items-center justify-start mr-20 flex-row-reverse gap-5 opacity-100 group-hover:opacity-0 group-hover/sub:opacity-100 transition-opacity duration-600">
                            <div className="w-2 h-20 bg-amber-400 "></div>
                            <h1 className="text-3xl text-white font-bold">العلمين الجديدة</h1>
                        </div>
                        <div className="opacity-0 translate-y-5 text-white max-w-[70%] text-right mr-20 text-2xl
                        group-hover/sub:transition-all group-hover/sub:duration-500 group-hover/sub:delay-500
                        group-hover/sub:opacity-100 group-hover/sub:translate-y-0">
                            تجمع مدينة العلمين الجديدة بين الحداثة والطبيعة، حيث تمتد على ساحل البحر المتوسط بتصميم عالمي يضم أبراجًا سكنية، مناطق سياحية، ومراكز اقتصادية متطورة. توفر بنية تحتية ذكية، ومساحات خضراء واسعة، مما يجعلها وجهة مثالية للحياة العصرية.
                        </div>
                    </div>
                </div>
                <div className="flex-1 h-[calc(100vh-7rem)] overflow-hidden hover:flex-[1.4] transition-all delay-10 relative group/sub" >
                    <img src="\Images\Home\Dab3a2.jpg"
                    className="object-cover h-full z-0 brightness-45 blur-[0.6px]  hover:brightness-60 transition-all duration-300 delay-200 hover:scale-105" />
                    <div className="absolute top-20 w-full flex items-end flex-col justify-start gap-10 pointer-events-none brightness-70 group-hover:brightness-100">
                        <div className="flex items-center justify-start mr-20 flex-row-reverse gap-5 opacity-100 group-hover:opacity-0 group-hover/sub:opacity-100 transition-opacity duration-600  brightness-70 group-hover:brightness-100">
                            <div className="w-2 h-20 bg-amber-400 "></div>
                            <h1 className="text-3xl text-white font-bold">محطة الضبعة النووية</h1>
                        </div>
                        <div className="opacity-0 translate-y-5 text-white max-w-[70%] text-right mr-20 text-2xl
                        group-hover/sub:transition-all group-hover/sub:duration-500 group-hover/sub:delay-500 pointer-events-none
                        group-hover/sub:opacity-100 group-hover/sub:translate-y-0">
                            مفاعل الضبعة النووي يوفر طاقة نظيفة ومستدامة، مما يقلل الاعتماد على الوقود الأحفوري والانبعاثات الكربونية. يضمن استقرار الكهرباء لدعم التنمية الصناعية، كما يساهم في نقل التكنولوجيا النووية وتطوير الكوادر المحلية. إضافةً إلى ذلك، يخلق فرص عمل، يدعم الاقتصاد، ويتمتع بعمر تشغيل طويل وتكاليف منخفضة، مما يعزز مكانة مصر في مجال الطاقة النووية.
                        </div>
                    </div>
                </div>
                <div className="flex-1 h-[calc(100vh-7rem)] overflow-hidden hover:flex-[1.4] transition-all delay-10 relative group/sub" >
                    <img src="\Images\Home\Solar2.jpg"
                    className="object-cover h-full z-0 brightness-45 blur-[0.6px]  hover:brightness-60 transition-all duration-300 delay-200 hover:scale-105" />
                    <div className="absolute top-20 w-full flex items-end flex-col justify-start gap-10 pointer-events-none brightness-70 group-hover:brightness-100">
                        <div className="flex items-center justify-start mr-20 flex-row-reverse gap-5 opacity-100 group-hover:opacity-0 group-hover/sub:opacity-100 transition-opacity duration-600  brightness-70 group-hover:brightness-100">
                            <div className="w-2 h-20 bg-amber-400 "></div>
                            <h1 className="text-3xl text-white font-bold">محطة بنبان للطاقة الشمسية</h1>
                        </div>
                        <div className="opacity-0 translate-y-5 text-white max-w-[70%] text-right mr-20 text-2xl
                        group-hover/sub:transition-all group-hover/sub:duration-500 group-hover/sub:delay-500 pointer-events-none
                        group-hover/sub:opacity-100 group-hover/sub:translate-y-0">
                            محطة بنبان للطاقة الشمسية تعد واحدة من أكبر محطات الطاقة الشمسية في العالم، حيث توفر مصدرًا نظيفًا ومستدامًا للكهرباء، مما يقلل الاعتماد على الوقود الأحفوري ويحد من الانبعاثات الكربونية. تسهم المحطة في تعزيز استقرار شبكة الكهرباء ودعم التنمية الاقتصادية، كما توفر فرص عمل وتدعم الصناعات المحلية المرتبطة بالطاقة المتجددة. بفضل كفاءتها العالية وتكاليف تشغيلها المنخفضة، تمثل خطوة مهمة نحو تحول مصر إلى مركز إقليمي للطاقة النظيفة.
                        </div>
                    </div>
                </div>

                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-8xl font-bold group-hover:opacity-0 group-hover:pointer-events-none transition-all duration-600 delay-200">مشروعات عملاقة</div>
            </section>

            <section className="h-[calc(100vh-7rem)] flex items-center pt-20 flex-col gap-10 bg-amber-50">
                <img src="\Images\Home\KeyLogoPNG.png" className="w-20" />
                <p className="text-3xl max-w-[80%] text-center font-normal">
                    إن «العمل الحثيث والدؤوب في هذه المشروعات في مختلف ربوع الوطن يستهدف تأسيس واقع مصري جديد، يمتاز بارتفاع جودة الحياة، وزيادة فرص العمل  والتنمية للمصريين جميعاً»
                    <p className="font-bold text-4xl mt-5">  الرئيس عبد الفتاح السيسي -</p>
                </p>
            </section>

            <section className="h-fit relative">
                <img src="\Images\Home\Palace1Extended2.png" className=" w-full z-0 brightness-50 blur-[0.7px" />
                <div className="flex absolute top-30 items-center justify-center w-full flex-col gap-20">
                    <div className="w-[70%] flex items-center justify-around gap-30">
                        <div className="text-center">
                            <Counter target={7000} duration={4000} className="text-7xl text-white font-bold font-mono" unit="كم"/>
                            <h1 className="text-2xl mt-7 font-semibold text-amber-300">الطرق الجديدة المنفذة</h1>
                        </div>
                        <div className="text-center">
                            <Counter target={20} duration={4000} className="text-7xl text-white font-bold font-mono"/>
                            <h1 className="text-2xl mt-7 font-semibold text-amber-300">عدد المدن الجديدة</h1>
                        </div>
                    </div>
                </div>
            </section>





        </>
    );
}

export default Home;