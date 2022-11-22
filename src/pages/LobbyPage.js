import Header from '../components/header.js';
import React from 'react';

// Ha allt av sidans innehåll i main diven
function LobbyPage() {
    return (
        <div>
            <Header onpage={2} />
            <div class="main" style={{ marginTop: "2vh" }}>

            </div>
            </div>
    );
}
export default LobbyPage;