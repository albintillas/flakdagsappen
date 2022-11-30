// Joel - Funktionellt klar, Fåtal stilpoäng kvar
// Denna fil utgör layouten av ett inlägg för 'flödet'
import React from 'react';
import FullImg from '../overlays/FullImg';
import { Link } from "react-router-dom";

function Post({ profilePicture, postContent, contentIsImg }) {

    var profilePicture = <img src={profilePicture} alt='pfp'
        style={{ height: "12vw", width: "12vw", objectFit: "cover", borderRadius: "50%" }} />;

    var contentPreview;
    if (contentIsImg) {
        contentPreview =
            <Link to={"/fullImg/123"}>
                <img src={postContent} alt='pfp' style={{
                    width: "100%",
                    maxHeight: "30vh",
                    overflow: "hidden",
                    objectFit: "cover",
                    borderRadius: "5%",
                }} />
            </Link>
    }
    else {
        if (postContent.length > 80) {
            contentPreview = <a>{postContent.slice(0, 80) + "..."}</a>;
        }
        else {
            contentPreview = <a>{postContent}</a>;
        }
    }

    return (
        <div className="Post"
            style={{
                marginRight: "20%",
                width: "80%",
                padding: "2%"
            }}>
            <div className="User" style={{ display: "inline-block", width: "20%" }}>
                <div className="Profilepicture" style={{ display: "inline-block" }}>
                    {profilePicture}
                </div>
                <a>:</a>
            </div>
            <div className="Content" style={{ display: "inline-block", width: "80%", wordWrap: "break-word" }}>
                {contentPreview}
            </div>


        </div>
    );
}

export default Post;