
function header({ onpage }) {
    return (
        <div class="header">
            <div class="counters"></div>
            <div class="pages">
                <a style={{
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
                    ...(onpage == 3
                        ? { textDecoration: "underline" }
                        : {})
                }}>Flöde</a>
            </div>
        </div>
    );
}

export default header;