import Header from '../components/Header.js';
import React,{useState, useEffect, Profiler} from 'react';
import axios from 'axios';
import * as V from 'victory';


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



function AddLine({color, unit}){

    return(
        <V.VictoryLine 
            style={{
                data: { stroke: color },
                parent: { border: "1px solid #ccc"}
            }}
            data={[ // Uppdaterad varje timme. Kanske fixa så det kan läggas in när som, även mellan hela timmar?
                { x: time[0], y: 0 },
                { x: time[1], y: 2 },
                { x: time[2], y: 5 },
                { x: time[3], y: 7 },
                { x: time[4], y: 7 },
                { x: time[5], y: 10 },
                { x: time[6], y: 13 },
                { x: time[7], y: 14 },
                { x: time[8], y: 16 },
                { x: time[9], y: 17 },
                { x: time[10], y: 19 },
                { x: time[11], y: 22 },
                { x: time[12], y: 24 },
            ]}
            interpolation="natural"
            domain= {{ x: [time[0], time[12]], y: [0, 24] }}

        />
    )
    
}

function StatisticsPage() {

    const [players, setPlayers] = useState([]);

    useEffect(()=>{
        let token = localStorage.getItem('token');    //Ej hårdkodad

        //let token = "3a1b3206-0f04-448e-b480-eca9054f141d46185bb3-405e-4dea-92c6-fef5bf6b9ebf"

        if(token) {
        
            axios.post("https://flakdag.azurewebsites.net/api/lobby/getlobby", { token }).then(res => {
                console.log(res) 
                if(res.data.success){
                    setPlayers(res.data.players)
                }
            })
        }
      }, [])

    
    return (
        <div>
            <Header onpage={1} />
            <div className="main" style={{ marginTop: "5vh" }}>
                <div className="chart">
                    <V.VictoryChart
                        theme={V.VictoryTheme.material}
                        >
                        <V.VictoryAxis tickValues={[time[0], time[2], time[4], time[6], time[8], time[10], time[12]]} tickFormat={(t) => `${Math.round(t)}.00`}/>
                        <V.VictoryAxis dependentAxis
                            tickValues={[2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24]}
                        />

                {/* ------------------------------------------------ */}
                        {AddLine({color: "#c43a31", unit: 3})}

                        <V.VictoryLine 
                            style={{
                                data: { stroke: "#5dc437" },
                                parent: { border: "1px solid #ccc"}
                            }}
                            data={[ // Uppdaterad varje timme. Kanske fixa så det kan läggas in när som, även mellan hela timmar?
                                { x: time[0], y: 0 },
                                { x: time[1], y: 1 },
                                { x: time[2], y: 3 },
                                { x: time[3], y: 6 },
                                { x: time[4], y: 8 },
                                { x: time[5], y: 10 },
                                { x: time[6], y: 13 },
                                { x: time[7], y: 15 },
                                { x: time[8], y: 17 },
                                { x: time[9], y: 19 },
                                { x: time[10], y: 22 },
                                { x: time[11], y: 24 },
                                { x: time[12], y: 24 },
                            ]}
                            interpolation="natural"
                            domain= {{ x: [time[0], time[12]], y: [0, 24] }}

                        />
                        <V.VictoryLine 
                            style={{
                                data: { stroke: "#48a0f7" },
                                parent: { border: "1px solid #ccc"}
                            }}
                            data={[ // Uppdaterad varje timme. Kanske fixa så det kan läggas in när som, även mellan hela timmar?
                                { x: time[0], y: 0 },
                                { x: time[1], y: 3 },
                                { x: time[2], y: 7 },
                                { x: time[3], y: 12 },
                                { x: time[4], y: 14 },
                                { x: time[5], y: 9 },
                                { x: time[6], y: 9 },
                                { x: time[7], y: 9 },
                                { x: time[8], y: 9 },
                                { x: time[9], y: 9 },
                                { x: time[10], y: 9 },
                                { x: time[11], y: 9 },
                                { x: time[12], y: 9 },
                            ]}
                            interpolation="natural"
                            domain= {{ x: [time[0], time[12]], y: [0, 24] }}

                        />
                {/* ------------------------------------------------ */}
            
                    </V.VictoryChart>
                </div>
                <div className='chartPeople'>
                    <h1 style={{textAlign:"center"}}>Spelare</h1>

                    {console.log(players)}

                    <div style={{display:"flex", flexWrap:"wrap", flexDirection:'column'}}>
                        {players.map(p => (
                            
                            <div className='individualChart' style={{display: "flex", marginTop: "3vw"}}>
                            <div className='dot' style={{
                                    backgroundColor: "#c43a31",
                                    height: "5vw",
                                    width: "5vw",
                                    marginLeft: "8vw",
                                    borderRadius: '50%'
                            }}/>
                            <h3 style={{margin: "0 0 0 3vw"}}> - </h3>
                            <h3 style={{margin: "0 0 0 3vw"}}>{p.name}</h3>
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