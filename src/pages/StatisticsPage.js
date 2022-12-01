import Header from '../components/Header.js';
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect, Profiler } from 'react';
import axios from 'axios';
import * as V from 'victory';
import randomColor from 'randomcolor';


// Ha allt av sidans innehåll i main diven

const startTime = 10; // Ska utgå från när spelet startas. Få med minuter på något sätt kanske?

let time = new Array(12);
time[0] = startTime;
time[1] = startTime + 1;
time[2] = startTime + 2;
time[3] = startTime + 3;
time[4] = startTime + 4;
time[5] = startTime + 5;
time[6] = startTime + 6;
time[7] = startTime + 7;
time[8] = startTime + 8;
time[9] = startTime + 9;
time[10] = startTime + 10;
time[11] = startTime + 11;
time[12] = startTime + 12;

//let token = localStorage.getItem('token');    Ej hårdkodad


function StatisticsPage() {

    /* ----- Code below implemented for swipe function ----- */
    const navigate = useNavigate();
    const [touchStart, setTouchStart] = useState(null)
    const [touchEnd, setTouchEnd] = useState(null)
    // the required distance between touchStart and touchEnd to be detected as a swipe
    const minSwipeDistance = 100
    const onTouchStart = (e) => {
        setTouchEnd(null) // otherwise the swipe is fired even with usual touch events
        setTouchStart(e.targetTouches[0].clientX)
    }
    const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX)
    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return
        const distance = touchStart - touchEnd
        const isLeftSwipe = distance > minSwipeDistance
        // add your conditional logic here
        if (isLeftSwipe) navigate("/lobby")
    }
    /* ----- Code above implemented for swipe function ----- */

    const [players, setPlayers] = useState([]);

    useEffect(() => {
        let token = localStorage.getItem('token');    //Ej hårdkodad

        //let token = "4a617950-3811-4367-b986-d94097132ece"

        if (token) {

            axios.post("https://flakdag.azurewebsites.net/api/lobby/getlobby", { token }).then(res => {
                console.log(res)
                if (res.data.success) {
                    setPlayers(res.data.players)
                }
            })
        }
    }, [])


    return (
        <div onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
            <Header onpage={1} />
            <div className="main" style={{ marginTop: "5vh" }}>
                <div className="chart">
                    <V.VictoryChart
                        theme={V.VictoryTheme.material}
                    >
                        <V.VictoryAxis tickValues={[time[0], time[2], time[4], time[6], time[8], time[10], time[12]]} tickFormat={(t) => `${Math.round(t)}.00`} />
                        <V.VictoryAxis dependentAxis
                            tickValues={[2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24]}
                        />

                        {players.map(p => (

                            <V.VictoryLine
                                style={{
                                    data: { stroke: p.color },
                                    parent: { border: "1px solid #ccc" }

                                }}
                                key={p.name}
                                data={[ // Uppdaterad varje timme. Kanske fixa så det kan läggas in när som, även mellan hela timmar?
                                    { x: time[0], y: 0 },
                                    { x: time[1], y: Math.random() * (3 - 1) + 1 },
                                    { x: time[2], y: Math.random() * (5 - 3) + 3 },
                                    { x: time[3], y: Math.random() * (7 - 5) + 5 },
                                    { x: time[4], y: Math.random() * (9 - 7) + 7 },
                                    { x: time[5], y: Math.random() * (11 - 9) + 9 },
                                    { x: time[6], y: Math.random() * (13 - 11) + 11 },
                                    { x: time[7], y: Math.random() * (15 - 13) + 13 },
                                    { x: time[8], y: Math.random() * (16 - 15) + 15 },
                                    { x: time[9], y: Math.random() * (18 - 16) + 16 },
                                    { x: time[10], y: Math.random() * (20 - 18) + 18 },
                                    { x: time[11], y: Math.random() * (22 - 20) + 20 },
                                    { x: time[12], y: Math.random() * (24 - 22) + 22 },

                                ]}
                                interpolation="natural"
                                domain={{ x: [time[0], time[12]], y: [0, 24] }}

                            />


                        ))

                        }

                    </V.VictoryChart>
                </div>
                <div className='chartPeople'>
                    <h1 style={{ textAlign: "center" }}>Spelare</h1>

                    {console.log(players)}

                    <div style={{ display: "flex", flexWrap: "wrap", flexDirection: 'column' }}>
                        {players.map(p => (

                            <div className='individualChart' style={{ display: "flex", marginTop: "3vw" }}>
                                <div className='dot' style={{
                                    backgroundColor: p.color,
                                    height: "5vw",
                                    width: "5vw",
                                    marginLeft: "8vw",
                                    borderRadius: '50%'
                                }} />
                                <h3 style={{ margin: "0 0 0 3vw" }}> - </h3>
                                <h3 style={{ margin: "0 0 0 3vw" }}>{p.name}</h3>
                            </div>
                        ))

                        }

                    </div>

                    {/* <div className='individualChart' style={{display: "flex", marginTop: "3vw"}}>
                            <div className='dot' style={{
                                    backgroundColor: "#c43a31",
                                    height: "5vw",
                                    width: "5vw",
                                    marginLeft: "8vw",
                                    borderRadius: '50%'
                            }}/>
                            <p style={{margin: "0 0 0 3vw"}}> - </p>
                            <p style={{margin: "0 0 0 3vw"}}>Gustaf Kronholm</p>
                        </div>
                    
                    <div className='individualChart' style={{display: "flex", marginTop: "3vw"}}>
                        <div className='dot' style={{
                            backgroundColor: "#5dc437",
                            height: "5vw",
                            width: "5vw",
                            marginLeft: "8vw",
                            borderRadius: '50%'
                        }}/>
                        <p style={{margin: "0 0 0 3vw"}}> - </p>
                        <p style={{margin: "0 0 0 3vw"}}>Daniel Laesker</p>
                    </div>
                    
                    <div className='individualChart' style={{display: "flex", marginTop: "3vw"}}>
                        <div className='dot' style={{
                            backgroundColor: "#48a0f7",
                            height: "5vw",
                            width: "5vw",
                            marginLeft: "8vw",
                            borderRadius: '50%'
                        }}/>
                        <p style={{margin: "0 0 0 3vw"}}> - </p>
                        <p style={{margin: "0 0 0 3vw"}}>Linus Palm</p>
                    </div> */}
                </div>
            </div>
        </div>
    );
}
export default StatisticsPage;