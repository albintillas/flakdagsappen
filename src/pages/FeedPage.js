import Header from '../components/Header.js';
import Post from '../components/Post.js'
import UploadButton from '../components/UploadButton.js'
import img1 from '..//images/pfpTest.png';
import img2 from '..//images/Test.png';
import postImg1 from '..//images/test3.png';
import postImg2 from '..//images/test2.png';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react'


// In progress, Joel
function FeedPage() {

    /* ----- Code below implemented for swipe function ----- */
    const navigate = useNavigate();
    const [touchStart, setTouchStart] = useState(null)
    const [touchEnd, setTouchEnd] = useState(null)
    // the required distance between touchStart and touchEnd to be detected as a swipe
    const minSwipeDistance = 100
    const onTouchStart = (e) => {
        setTouchEnd(null) // otherwise the swipe is fired even with usual touch events
        setTouchStart(e.targetTouches[0].clientX)
    }
    const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX)
    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return
        const distance = touchStart - touchEnd
        const isRightSwipe = distance < -minSwipeDistance
        // add your conditional logic here
        if (isRightSwipe) navigate("/lobby")
    }
    /* ----- Code above implemented for swipe function ----- */

    return (
        <div onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
            <Header onpage={3} />
            
            <div className="main" style={{ height:'94vh', marginTop: "0vh" }}>
                <div className="makingPosts" style={{ width: "90vw", margin:'6vh auto 0'}}>
                    <UploadButton
                        text='Ta Foto'
                        buttonColor='#F9F3F3'
                        textDecoration="underline"
                        textColor='#17D930'
                        action='postImg'
                    />
                    <UploadButton
                        text='Skriv Inlägg'
                        buttonColor='#F9F3F3'
                        textDecoration="underline"
                        textColor='#17D930'
                        action='postText'
                    />
                </div>
                <div id='feedScrollDiv'>
                    <Post
                        profilePicture={img1}
                        postContent={"Kud vad kul det är med flakdag!"}
                        contentIsImg={false}
                    />
                    <Post
                        profilePicture={img1}
                        postContent={postImg1}
                        contentIsImg={true}
                    />
                    <Post
                        profilePicture={img2}
                        postContent={'"Nioende för dagen" -Teo Hedelin'}
                        contentIsImg={false}
                    />
                    <Post
                        profilePicture={img1}
                        postContent={postImg2}
                        contentIsImg={true}
                    />
                    <Post
                        profilePicture={img1}
                        postContent={"Lär ju lira lite fotboll och inte skada oss senare"}
                        contentIsImg={false}
                    />
                    <Post
                        profilePicture={img1}
                        postContent={"#minnesluckaefter20"}
                        contentIsImg={false}
                    />
                    <Post
                        profilePicture={img1}
                        postContent={postImg1}
                        contentIsImg={true}
                    />
                    <Post
                        profilePicture={img2}
                        postContent={'Ja hej'}
                        contentIsImg={false}
                    />
                    <Post
                        profilePicture={img1}
                        postContent={postImg2}
                        contentIsImg={true}
                    />
                    <Post
                        profilePicture={img1}
                        postContent={"Hhahahahahahahahahahahhahahaha"}
                        contentIsImg={false}
                    />  
                </div>
                
            </div>
        </div>
    );
}
export default FeedPage;