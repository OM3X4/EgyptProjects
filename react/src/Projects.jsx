/* eslint-disable */
import React, { useEffect , useState } from 'react';
import Data from "./Data/Projects.json"
import ThreeDScroll from './ZScroll';

export default function Projects() {


    return (
        <div className='flex items-center justify-center h-screen'>
            <ThreeDScroll />
        </div>
    );
}

