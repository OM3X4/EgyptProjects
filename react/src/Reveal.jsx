/* eslint-disable */
import React , { useEffect , useRef , useState} from 'react';
import { motion , useInView , useAnimation } from 'framer-motion';

function Reveal({children , width = "w-fit"}) {

    const ref = useRef(null);
    const isInView = useInView(ref , { once: true})
    const mainControls = useAnimation();
    const slideControls = useAnimation();

    useEffect(() => {
        if(isInView){
            mainControls.start("visible")
            slideControls.start("visible")
        }
    } , [isInView])

    return (
    <div className='relative w-fit overflow-hidden' ref={ref}>
        <motion.div
        variants={{
            hidden: {opacity: 0 , y: 90},
            visible: {opacity: 1 , y: 0},
        }}
        initial="hidden"
        animate={mainControls}
        transition={{duration:0.5 , delay:0.25}}
        >{children}
        </motion.div>
        <motion.div
            variants={{
                hidden: {left:0},
                visible: {left:"100%"}
            }}
            initial="hidden"
            animate={slideControls}
            transition={{duration: 0.5 , ease: "easeIn"}}
            className='absolute top-0 bottom-0 left-0 right-0 bg-amber-300 z-20'
        >

        </motion.div>
    </div>
    );
}

export default Reveal;