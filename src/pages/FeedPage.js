import Header from '../components/header.js';
import Post from '../components/Post.js'
import img1 from '..//images/pfpTest.png';
import img2 from '..//images/Test.png';
import postImg1 from '..//images/test3.png';
import postImg2 from '..//images/test2.png';
import React from 'react';

// In progress, Joel
function FeedPage() {
    return (
        <div>
            <Header onpage={3} />
            <div class="main" style={{ marginTop: "1vw" }}>
                <Post
                    imageSrc={img1}
                    postContent={"WWWWWWWWWWWWWWWWWWWAAAAWWWWWWWWWWWWWWWWWWAAAWWWWWWWWWWWWWWWWWWAAAWWWWWWWWWWWWWWWWWWW"}
                    isImg={false}
                />
                <Post
                    imageSrc={img1}
                    postContent={postImg1}
                    isImg={true}
                />
                <Post
                    imageSrc={img2}
                    postContent={'"Ligma Balls" -Big Dick Teo'}
                    isImg={false}
                />
                <Post
                    imageSrc={img1}
                    postContent={postImg2}
                    isImg={true}
                />
                <Post
                    imageSrc={img1}
                    postContent={"llllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll"}
                    isImg={false}
                />
                <Post
                    imageSrc={img1}
                    postContent={"WWWWWWWWWWWWWWWWWWWAAAAWWWWWWWWWWWWWWWWWWAAAWWWWWWWWWWWWWWWWWWAAAWWWWWWWWWWWWWWWWWWW"}
                    isImg={false}
                />
                <Post
                    imageSrc={img1}
                    postContent={postImg1}
                    isImg={true}
                />
                <Post
                    imageSrc={img2}
                    postContent={'"Ligma Balls" -Big Dick Teo'}
                    isImg={false}
                />
                <Post
                    imageSrc={img1}
                    postContent={postImg2}
                    isImg={true}
                />
                <Post
                    imageSrc={img1}
                    postContent={"llllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll"}
                    isImg={false}
                />
            </div>
        </div>
    );
}
export default FeedPage;