/* eslint-disable */
import React, { useState, useEffect, useRef } from "react";

const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3); // Cubic ease-out

const Counter = ({ target, duration, className = "", unit }) => {
    const [count, setCount] = useState(0);
    const counterRef = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect(); // Stop observing after visible
                }
            },
            { threshold: 0.0 } // Trigger when ANY part is visible
        );

        if (counterRef.current) {
            observer.observe(counterRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!visible) return;

        let startTime = null;
        const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = (timestamp - startTime) / duration;
            if (progress < 1) {
                setCount(Math.floor(target * easeOutCubic(progress)));
                requestAnimationFrame(step);
            } else {
                setCount(target);
            }
        };

        requestAnimationFrame(step);
    }, [visible, target, duration]);

    return (
        <div ref={counterRef} className={` ${className} text-right`} dir="rtl">
            +{count} {unit}
        </div>
    );
};

export default Counter;