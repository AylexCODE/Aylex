import { useEffect, useState } from 'react';

export default function Breakpoints(cb) {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });


    const handleResize = () => {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    };


    useEffect(() => {
        window.addEventListener('resize', handleResize);
        handleResize();

        if (windowSize.width >= 1280) {
            cb(1280);
        } else if (windowSize.width >= 992) {
            cb(992);
        } else if (windowSize.width >= 768) {
            cb(768);
        } else {
            cb(640);
        }
        
        return () => window.removeEventListener('resize', handleResize);
        // eslint-disable-next-line
    }, [windowSize.width]);
}