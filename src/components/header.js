import {Link} from "react-router-dom";
import React from 'react';

function Header({ onpage }) {
    return (
        <div class="header" style ={{position: "fixed", top: "0", width: "100%"}}>
            <div class="counters"></div>
            <div class="pages" style ={{textAlign: "center", width: "100%"}}>
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