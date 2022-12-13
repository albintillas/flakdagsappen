import Header from '../components/Header.js';
import Post from '../components/Post.js'
import UploadButton from '../components/UploadButton.js'
import img1 from '..//images/pfpTest.png';
import img2 from '..//images/Test.png';
import postImg1 from '..//images/test3.png';
import postImg2 from '..//images/test2.png';
import { useNavigate } from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import testimage2 from '../images/Test.png'


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

    const [units, setUnits] = useState(0);

    const [pin, setPin] = useState(0);

    const [players, setPlayers] = useState([]);

    const [feed, setFeed] = useState([]);

    //let token = localStorage.getItem('token'); 
    let token = 'da4bc73b-65c6-4cb7-be0e-454bcdfbe694f260ce30-e63f-4ad0-8c94-c46aa4c40ece'; 

    const WAIT_TIME = 3000;

      useEffect(() => {
            axios.post("https://flakdag.azurewebsites.net/api/data/getfeed", { token }).then(res => {
                //console.log(res) 
                if(res.data.success){
                    setFeed(res.data.feed)
                    console.log(res.data.feed)
                }
            })
      }, [feed]); 
 
/* 
      useEffect(() => {
        const id = setInterval(() => {
            axios.post("https://flakdag.azurewebsites.net/api/data/getfeed", { token }).then(res => {
                //console.log(res) 
                if(res.data.success){
                    setFeed(res.data.feed)
                    console.log(res.data.feed)
                }
            })
            
        }, WAIT_TIME);
        return () => clearInterval(id);
      }, [feed]); 
 */

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
                {feed.map(f => (
                    <tr>
                        <td style={{alignItems:"center", display: "flex", textAlign: "left", height: "18vw", width: "60vw", borderBottom: "1vw solid #EEEEEE", borderRight: "1vw solid #EEEEEE"}}>
                            <img src={testimage2} className='lobbyInfoPageImage' style={{marginLeft: "0%", marginRight:"10%", borderRadius:'50%'}}/>{f.text}</td>
                    </tr>      
                        ))

                        }
                </div>
                
            </div>
        </div>
    );
}
export default FeedPage;