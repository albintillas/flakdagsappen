import Header from '../components/Header.js';
import Post from '../components/Post.js'
import UploadButton from '../components/UploadButton.js'
import img1 from '..//images/pfpTest.png';
import img2 from '..//images/Test.png';
import postImg1 from '..//images/test3.png';
import postImg2 from '..//images/test2.png';
import { useNavigate } from 'react-router-dom';
import React, { useRef, useEffect, useState } from 'react';
import axios from 'axios';
import testimage2 from '../images/Test.png'
import SwipeFunction from '../components/SwipeFunction.js';



// In progress, Joel
function FeedPage() {

    /* ----- Code below implemented for swipe function ----- */
    const swipe = SwipeFunction(3);
    /* ----- Code above implemented for swipe function ----- */


    const [feed, setFeed] = useState([]);

    let token = localStorage.getItem('token');
    //let token = 'da4bc73b-65c6-4cb7-be0e-454bcdfbe694f260ce30-e63f-4ad0-8c94-c46aa4c40ece'; 


    useEffect(() => {
        axios.post("https://flakdag.azurewebsites.net/api/data/getfeed", { token }).then(res => {
            //console.log(res) 
            if (res.data.success) {
                setFeed(res.data.feed.sort(res.data.feed.entryDate).reverse())
                console.log(res.data.feed)
            }
        })
    }, []);

    const WAIT_TIME = 2000;

    useEffect(() => {
        const id = setInterval(() => {
            axios.post("https://flakdag.azurewebsites.net/api/data/getfeed", { token }).then(res => {
                //console.log(res) 
                if (res.data.success) {
                    setFeed(res.data.feed.sort(res.data.feed.entryDate).reverse())
                    console.log(res.data.feed)
                }
            })

        }, WAIT_TIME);
        return () => clearInterval(id);
    }, [feed]);


    return (
        <div onTouchStart={swipe.onTouchStart} onTouchMove={swipe.onTouchMove} onTouchEnd={swipe.onTouchEnd}>
            <Header onpage={3} />

            <div className="main" style={{ height: '94vh', marginTop: "0vh" }}>
                <div className="makingPosts" style={{ width: "90vw", margin: '6vh auto 0' }}>
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
                    {feed.map(f => (
                        <div style={{ borderStyle: 'groove', padding: '2vw' }}>
                            <Post
                                profilePicture={testimage2}
                                postContent={f.text}
                                imageContent={f.imageId} />
                        </div>
                    ))

                    }
                </div>

            </div>
        </div>
    );
}
export default FeedPage;