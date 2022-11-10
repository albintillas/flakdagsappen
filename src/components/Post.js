// Joel - In progress
// Denna fil utgör layouten av ett inlägg för 'flödet'

function Post({ imageSrc, postContent, isImg }) {
    var profilePicture = <img src={imageSrc} alt='pfp'
        style={{
            height: "25px",
            width: "25px",
            borderRadius: "50%"
        }} />;
    var contentPreview;
    if (isImg == true) {
        contentPreview = <img src={postContent} alt='pfp' style={{ borderRadius: "5%", width: "100%" }} />
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
                backgroundColor: "yellow"
            }}>
            <div className="User" style={{ display: "inline-block", width: "20%" }}>
                <div className="Profilepicture" style={{ display: "inline-block", backgroundColor: "blue", margin: "0, auto" }}>
                    {profilePicture}
                </div>
                <a>:</a>
            </div>
            <div className="Content" style={{
                display: "inline-block", 
                width: "80%", 
                maxHeight: "20px",
                wordWrap: "break-word",
                whiteSpace: "pre-wrap",
                wordBreak: "break-word",
                textOverflow: "hidden"
            }}>
                {contentPreview}
            </div>


        </div>
    );
}

export default Post;