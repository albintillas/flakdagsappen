
function header({ onpage }) {
    return (
        <div class="header" style ={{position: "fixed", top: "0", width: "100%"}}>
            <div class="counters"></div>
            <div class="pages" style ={{textAlign: "center", width: "100%"}}>
                <a style={{
                    marginRight: "5vw",
                    ...(onpage == 1
                        ? { textDecoration: "underline" }
                        : {})
                }}>Statistik</a>
                <a>l</a>
                <a style={{
                    margin: "0 5vw 0 5vw",
                    ...(onpage == 2
                        ? { textDecoration: "underline" }
                        : {})
                }}>Lobby</a>
                <a>l</a>
                <a style={{
                    marginLeft: "5vw",
                    ...(onpage == 3
                        ? { textDecoration: "underline" }
                        : {})
                }}>Flöde</a>
            </div>
        </div>
    );
}

export default header;