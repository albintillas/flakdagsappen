import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react'
// useSwipe.js

const SwipeFunction = (onpage) => {
    const navigate = useNavigate();
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);
    const minSwipeDistance = 100;

    const onTouchStart = (e) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance
        const isRightSwipe = distance < -minSwipeDistance;
        switch (onpage) {
            case 1:
                if (isLeftSwipe) navigate("/lobby")
                break;
            case 2:
                if (isRightSwipe) navigate("/statistics")
                else if (isLeftSwipe) navigate("/feed")
                break;
            case 3:
                if (isRightSwipe) navigate("/lobby");
                break;
        }
    };

    return { onTouchStart, onTouchMove, onTouchEnd };
};

export default SwipeFunction;
