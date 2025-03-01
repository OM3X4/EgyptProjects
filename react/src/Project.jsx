/* eslint-disable */
import { GiEgyptianUrns } from "react-icons/gi";
import { GiEgyptianProfile } from "react-icons/gi";
import React , {useState , useEffect , useRef} from 'react';
import Data from './Data/Projects.json'
import { useSearchParams } from 'react-router';
import MapComponent from "./map.jsx"

function Project() {

    const [searchParams] = useSearchParams()
    const [data , setData] = useState(1)

    useEffect(() => {
        window.scrollTo(0, 0);
    } , [])

    useEffect(() => {
        const currentPro = searchParams.get("id");
        setData(Data.filter(item => item.ID == currentPro)[0]);

    } , [])


    useEffect(() => {
        console.log(data)
    } , [data])

    return (
    <>
        <div className="relative h-screen w-screen bg-gray-900 flex items-end justify-end snap-start">
            <div
                className="absolute inset-0 w-screen h-screen brightness-50 pointer-events-none"
                data-aos="zoom-out-up"
                data-aos-delay="300"
            >
                <img
                    src={`/Images/${data.ID}.jpg`}
                    className="w-full h-full object-cover object-center"
                    alt="Background"
                />
            </div>

            <div className='flex z-40 text-white py-28 mx-14 flex-col gap-8 text-right'>
                <h1 className='text-7xl font-bold p-2' data-aos="fade-left" data-aos-delay="1200">{data.Name}</h1>
                <div className="flex items-center justify-end gap-10 mt-10">
                    {data.Cate && data.Cate.length ? <button className="bg-white rounded-xl text-black text-2xl px-10 py-3 font-bold hover:text-white hover:bg-black transition-all cursor-pointer">{data.Cate}</button> : ""}
                    {data.StartDate ? <button className="bg-white rounded-xl text-black text-2xl px-10 py-3 font-bold hover:text-white hover:bg-black transition-all cursor-pointer">{data.StartDate}</button> : ""}
                    {data.Location ? <button className="bg-white rounded-xl text-black text-2xl px-10 py-3 font-bold hover:text-white hover:bg-black transition-all cursor-pointer">{data.Location}</button> : ""}
                    {data.Status ? <button className="bg-white rounded-xl text-black text-2xl px-10 py-3 font-bold hover:text-white hover:bg-black transition-all cursor-pointer">{data.Status}</button> : ""}
                    {data.Gov ? <button className="bg-white rounded-xl text-black text-2xl px-10 py-3 font-bold hover:text-white hover:bg-black transition-all cursor-pointer">{data.Gov}</button> : ""}
                </div>
            </div>

        </div>

        <section className="h-[calc(100vh-7rem)] flex items-center pt-20 flex-col gap-10 bg-amber-50">
            {
                ["Tourism" , "Army" ,"Public Service" , "Energy" , "Cities" , "Infrasturcture"].includes(data.Category) ?
                <img src={`/Images/Symbols/${data.Category}.svg`} className="w-40" />:
                <img src="\Images\Symbols\Falcon.svg" className="w-20" />
            }
            <p className="text-3xl max-w-[80%] text-center font-normal">
                {data.overview}
                <p className="font-bold text-7xl mt-20 " >{data.Name}</p>
            </p>
        </section>
        <section className='pointer-events-none'>
            {data.GPS ? <MapComponent position={data.GPS.split(",")}/> : ''}
        </section>

        {
            data.KeyFeatures ?
            <section className='relative h-screen overflow-hidden'>
                {/* 🔹 Background Image */}
                <div
                    className="absolute inset-0 w-screen h-screen brightness-[0.7] pointer-events-none object-cover z-0"
                >
                    <img
                        src={`/Images/Home/IsoBarsBlack.png`}
                        className="w-full h-full object-cover object-center"
                        alt="Background"
                    />
                </div>

                {/* 🔹 Content Wrapper */}
                <div className='relative h-full flex items-end px-40 justify-center flex-col z-40 gap-10' data-aos="fade-up">
                    {
                        data.KeyFeatures.map((item, index) => {
                            return (
                                <div key={index} className="flex items-center gap-4 mb-4">
                                    <h1 className='text-gray-200 text-7xl font-bold'>{item}</h1>
                                    {/* <div className='bg-white rounded-full size-10'></div> */}
                                    <GiEgyptianUrns className="text-white text-5xl"/>
                                </div>
                            );
                        })
                    }
                </div>
            </section>
            : ""
        }

    </>
    );
}

export default Project;