import {Link} from "react-router-dom";
import React from 'react';

function Header({ onpage }) {
    return (
        <div className="header" style ={{position: "fixed", top: "0", width: "100%", fontSize: "7vw", backgroundColor: "#F7F3F3", opacity: "0.9", zIndex: "100"}}>
            <div className="pages" style ={{textAlign: "center", width: "100%", marginTop: "1vh"}}>
                <Link to={"/statistics"} style={{
                    marginRight: "5vw",
                    color: "black",
                    ...(onpage == 1
                        ? { textDecoration: "underline" }
                        : {})
                }}>Statistik</Link>
                <a>l</a>
                <Link to={"/lobby"} style={{
                    margin: "0 5vw 0 5vw",
                    color: "black",
                    ...(onpage == 2
                        ? { textDecoration: "underline" }
                        : {})
                }}>Lobby</Link>
                <a>l</a>
                <Link to={"/feed"} style={{
                    marginLeft: "5vw",
                    color: "black",
                    ...(onpage == 3
                        ? { textDecoration: "underline" }
                        : {})
                }}>Flöde</Link>
            </div>
        </div>
    );
}

export default Header;