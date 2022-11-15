// Joel - In progress
// Denna fil utgör layouten av ett inlägg för 'flödet'

function Post({ imageSrc, postContent, isImg }) {

    var profilePicture = <img src={imageSrc} alt='pfp'
        style={{ maxHeight: "25px", width: "25px", borderRadius: "50%" }} />;

    var contentPreview;
    if (isImg) {
        contentPreview = <img src={postContent} alt='pfp' style={{
            width: "100%",
            maxHeight: "30vh",
            overflow: "hidden",
            objectFit: "cover",
            borderRadius: "5%"
        }} />
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
                padding: "2%",
                textAlign: "left",
                backgroundColor: "yellow",
                minHeight: "50px"
            }}>
            <div className="User" style={{ display: "inline-block", width: "20%" }}>
                <div className="Profilepicture" style={{ display: "inline-block", backgroundColor: "blue"}}>
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