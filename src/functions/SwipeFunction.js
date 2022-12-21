import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react'
// useSwipe.js

const SwipeFunction = (rightSwipeLink, leftSwipeLink) => {
    const navigate = useNavigate();
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);
    const [rightSwipeComplete, setRightSwipeComplete] = useState(false);
    const [leftSwipeComplete, setLeftSwipeComplete] = useState(false);
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
        if (rightSwipeLink !== '' && leftSwipeLink !== '') {
            if (isRightSwipe) navigate(rightSwipeLink)
            if (isLeftSwipe) navigate(leftSwipeLink)
        }
        else if (rightSwipeLink !== '' && leftSwipeLink === '') {
            if (isRightSwipe) navigate(rightSwipeLink)
        }
        else if (rightSwipeLink === '' && leftSwipeLink !== '') {
            if (isLeftSwipe) navigate(leftSwipeLink)
        }
        else {
            if (isRightSwipe) setRightSwipeComplete(true)
            if (isLeftSwipe) setLeftSwipeComplete(true)
        }
    };

    return { onTouchStart, onTouchMove, onTouchEnd, rightSwipeComplete, leftSwipeComplete };
};

export default SwipeFunction;
