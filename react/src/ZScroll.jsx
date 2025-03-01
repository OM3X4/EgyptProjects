/* eslint-disable */
import React, { useState, useEffect, useRef } from 'react';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Link } from 'react-router';
import Data from './Data/Projects.json'

const ThreeDScroll = () => {


    useEffect(() => {
        window.scrollTo(0, 0);
    } , [])

    const [frames, setFrames] = useState([]);
    const [showInstructions, setShowInstructions] = useState(true);
    const [isExiting, setIsExiting] = useState(false);
    const viewportRef = useRef(null);
    const lastPosRef = useRef(0);
    const perspective = 300;
    const zSpacing = -1000;

    useEffect(() => {
        let initialFrames = Data.map((item, index) => ({
            type: "image",
            title: item.Title,
            zVal: zSpacing * (Data.length - index),
            imgSrc: `/Images/${item.ID}.jpg`,
            text: item.overview,
            ID:item.ID
        }));

        setFrames(initialFrames);
        document.body.style.height = `${Data.length * 800}px`;

        return () => {
            document.body.style.height = 'auto';
        };
    }, []);

    // In your scroll handler:
    const handleScroll = () => {
        const top = document.documentElement.scrollTop;
        const delta = lastPosRef.current - top;
        lastPosRef.current = top;

        setFrames(prevFrames =>
            prevFrames.map(frame => ({
                ...frame,
                zVal: frame.zVal + (delta * -1.5)
            }))
        );

        if (showInstructions && frames[0]?.zVal > -perspective) {
            setIsExiting(true);
        }
    };

    useEffect(() => {
        console.log(frames);
    }, [frames])

    useEffect(() => {
        const handleScroll = () => {
            const top = document.documentElement.scrollTop;
            const delta = lastPosRef.current - top;
            lastPosRef.current = top;

            setFrames(prevFrames =>
                prevFrames.map(frame => ({
                    ...frame,
                    zVal: frame.zVal + (delta * -1.5)
                }))
            );

            if (showInstructions && frames[frames.length - 1]?.zVal > 200) {
                setIsExiting(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [frames, showInstructions]);

    useEffect(() => {
        if (isExiting) {
            const timer = setTimeout(() => {
                setShowInstructions(false);
                setIsExiting(false);
            }, 1000); // Match this duration with the CSS transition
            return () => clearTimeout(timer);
        }
    }, [isExiting]);

    return (
        <div className="fixed inset-0 w-full h-full bg-[url(public/Images/Home/Grid2.jpg)]">
            <div
                ref={viewportRef}
                className="w-full h-full"
                style={{
                    perspective: `${perspective}px`,
                    perspectiveOrigin: '50% 50%',
                }}
            >
                {(showInstructions || isExiting) && (
                    <div className={`fixed inset-0 z-10 bg-black text-white flex flex-col items-center justify-center
                                    transition-transform duration-1000 ease-in-out ${isExiting ? '-translate-y-full' : ''}`}>
                        <h1 className="text-5xl font-bold mb-4">المشروعات القومية المصرية</h1>
                        <p className={`text-7xl absolute bottom-10 left-1/2 -translate-x-1/2
                                    ${isExiting ? 'opacity-0' : 'animate-bounce'} transition-opacity duration-300`}>
                            <MdOutlineKeyboardArrowDown />
                        </p>
                    </div>
                )}

                {/* Rest of your frames code remains the same */}
                {frames.map((frame, index) => {
                    const opacity = Math.min(1, Math.max(0, 1 - (frame.zVal - 200) / (perspective - 200)));
                    const display = frame.zVal > perspective ? 'none' : 'block';

                    let contentClass = "flex flex-col items-center justify-center hover:scale-105 transition-all cursor-pointer";
                    if (frame.type === 'box') {
                        contentClass += " bg-white rounded-lg p-8 max-w-2xl";
                    } else if (frame.type === 'text') {
                        contentClass += " text-center p-4";
                    } else if (frame.type === 'image') {
                        contentClass += " text-center max-w-3xl";
                    }

                    return (
                        <div
                            key={index}
                            className="absolute left-1/2 top-1/2"
                            style={{
                                transform: `translate(-50%, -50%) translateZ(${frame.zVal}px)`,
                                opacity,
                                display,
                                transformStyle: 'preserve-3d',
                            }}
                        >
                            <div className={contentClass}>
                                <h1 className={`${frame.type === 'text' ? 'text-white' : 'text-white'} text-5xl font-bold mb-10`}>
                                    {frame.title}
                                </h1>
                                {frame.type === 'image' && (
                                    <>
                                        <Link to={`/project?id=${frame.ID}`}>
                                            <img
                                                src={frame.imgSrc}
                                                alt="Placeholder"
                                                className="max-w-full h-auto mx-auto shadow-lg rounded-xl"
                                            />
                                        </Link>
                                        {/* {frame.text && <p className="mt-4 text-white">{frame.text}</p>} */}
                                    </>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ThreeDScroll;