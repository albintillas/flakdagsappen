
function header({ onpage }) {
    return (
        <div class="header">
            <div class="counters"></div>
            <div class="pages" style ={{textAlign: "center"}}>
                <a style={{
                    marginRight: "5vw",
                    ...(onpage == 1
                        ? { textDecoration: "underline" }
                        : {})
                }}>Statistik</a>
                <a style={{
                    ...(onpage == 2
                        ? { textDecoration: "underline" }
                        : {})
                }}>Lobby</a>
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