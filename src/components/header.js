import {Link} from "react-router-dom";
import React from 'react';
import { Background } from "victory";

function Header({ onpage }) {
    return (
        <div className="topBar" style={{position: "fixed", top: "0"}}>
            <div className="pages" style ={{textAlign: "center", width: "100%"}}>
                <Link to={"/statistics"} style={{
                    marginRight: "3vw",
                    color: "#EEEEEE",
                    ...(onpage == 1
                        ? { textDecoration: "underline" }
                        : {})
                }}>Statistik</Link>
                <a>l</a>
                <Link to={"/lobby"} style={{
                    margin: "0 3vw 0 3vw",
                    color: "#EEEEEE",
                    ...(onpage == 2
                        ? { textDecoration: "underline" }
                        : {})
                }}>Lobby</Link>
                <a>l</a>
                <Link to={"/feed"} style={{
                    marginLeft: "3vw",
                    marginRight: "6vw",
                    color: "#EEEEEE",
                    ...(onpage == 3
                        ? { textDecoration: "underline" }
                        : {})
                }}>Flöde</Link>
            </div>
        </div>
    );
}

export default Header;