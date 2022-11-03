// Joel - In progress
// Denna fil utgör layouten av ett inlägg för 'flödet'

function Post({ profilePicture, postContent, isImg }) {
    profilePicture = "sugmig";
    isImg = false;
    postContent = "WWWWWWWWWWWWWWWWWWWW WWWWWWWWWWWWWWWWWWWW WWWWWWWWWWWWWWWWWWWW WWWWWWWWWWWWWWWWWWWW";
    var contentPreview;
    if (isImg == true) {

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
                width: "100%",
                padding: "2%",
                textAlign: "left",
                backgroundColor: "yellow"
            }}>
            <div className="User" style={{ display: "inline-block", width: "20%" }}>
                <div className="Profilepicture" style={{ display: "inline-block", backgroundColor: "blue", borderRadius: "50%" }}>
                    {profilePicture}
                </div>
                <a>:</a>
            </div>
            <div className="Content" style={{ display: "inline-block", width: "80%" }}>
                <a>{contentPreview}</a>
            </div>


        </div>
    );
}

export default Post;