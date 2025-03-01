/* eslint-disable */
import React  , { useEffect , useState } from 'react';
import Data from './Data/Projects.json'
import { useSearchParams , Link } from 'react-router';


function ProjectsLinear() {


    useEffect(() => {
        window.scrollTo(0, 0);
    } , [])

    const [searchParams] = useSearchParams();
    const [currentData , setCurrentData] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0);
        if(searchParams.get("Cat")){
            console.log(searchParams.get("Cat"))
            const dt = Data.filter((item) => {
                return item.Category == searchParams.get("Cat");
            })
            console.log(searchParams.get("Cat"))
            setCurrentData(dt);
        }else{
            setCurrentData(Data);
        }
    } , [searchParams])

    useEffect(() => {
        console.log(currentData)
    } , [currentData])



    return (
    <>
        <div className=''>
            <div className='text-7xl bg-stone-900 text-white font-bold text-center py-40 '>
                المشروعات القومية
            </div>
            {
                currentData.map((item) => {

                    return(
                        <Link to={`/project?id=${item.ID}`}>
                            <div className=' group'>
                                <div className="h-[40vh] w-full overflow-hidden transition-all group-hover:h-[50vh] ease-out">
                                    <img
                                        src={`/Images/${item.ID}.jpg`}
                                        className="w-full h-full object-cover object-center"
                                        alt="Image"
                                    />
                                </div>

                                <div className="group mx-20 pt-10 w-fit relative">
                                    <h1 className="mb-20 text-4xl font-bold relative after:content-[''] after:-z-10 after:absolute after:left-0 after:-bottom-1 after:w-full after:h-4  after:bg-amber-300 after:scale-x-0 after:transition-transform after:duration-300 group-hover:after:scale-x-100">{item.Title}</h1>
                                </div>

                            </div>
                        </Link>
                    )
                })
            }
        </div>
    </>
    );
}

export default ProjectsLinear;