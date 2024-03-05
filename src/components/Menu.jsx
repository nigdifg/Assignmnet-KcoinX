import React,{useState} from 'react';
import Performance from './Performance';
import Fundamentals from './Fundamentals';
import Sentiments from './Sentiments';
import Teams from './Teams';
import Tokenomics from './Tokenomics';

function Menu() {
    const [showPerformance, setShowPerformance] = useState(false);
    const [showFundamentals, setShowFundamentals] = useState(false);
    const [showsentiments, setShowsentiments] = useState(false);
    const [showTeams, setShowTeams] = useState(false);
    const [showTokenomics, setShowTokenomics] = useState(false);


    return (
        <>
        <div className="relative flex justify-between items-center">
            <ul className="flex flex-row justify-between gap-10 items-center">
                <button onClick={() => setShowPerformance(true)} className="text-base text-blue font-bold leading-5">Overview</button>
                <button onClick={()=>setShowFundamentals(true) } className="text-base font-medium leading-5">Fundamnetals</button>
                <button  className="text-base font-medium leading-5">News Insight</button>
                <button onClick={()=>setShowsentiments(true) } className="text-base font-medium leading-5">Sentiments</button>
                <button onClick={()=>setShowTeams(true) } className="text-base font-medium leading-5">Teams</button>
                <button className="text-base font-medium leading-5">Technicals</button>
                <button onClick={()=>setShowTokenomics(true) } className="text-base font-medium leading-5">Tokenomics</button>
            </ul>
        </div>
        {
            showPerformance && <Performance />  
        }
        {
        showFundamentals && <Fundamentals />
        }
        {
        showsentiments && <Sentiments />
        }
        {
        showTeams && <Teams />
        }
        {
        showTokenomics && <Tokenomics />
        }

        </>
    )
}

export default Menu;