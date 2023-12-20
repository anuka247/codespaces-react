import React, { useState } from 'react'
import './style.css'
import one from "../components/img/onePiece..webp"
import naruto from "../components/img/onePiece..webp"
import demon from "../components/img/onePiece..webp"
import titan from "../components/img/onePiece..webp"
import note from "../components/img/onePiece..webp"

const GuessEmojiGame = () => {
    const [hariult, setHariult] = useState('')
    const [result, setResult] = useState('')
    
    const asuult1 = {
        zovHariu: 'One piece',
        zurag: one , 
        emoji: "🏴‍☠️👒🍖🐒⛵️",
        songoltuud: ['One piece', 'Naruto', 'Demon slayer', 'Attack on titan']
    }
    const asuult2= {
        zovHariu: 'Naruto',
        zurag: naruto , 
        emoji: "🦊🍜🍥🌀",
        songoltuud: ['One piece', 'Naruto', 'Demon slayer', 'Attack on titan']
    }
    const asuult3 = {
        zovHariu: 'Demon slayer',
        zurag: demon , 
        emoji: "👺🌊⚔️⚡️👹🌀",
        songoltuud: ['One piece', 'Naruto', 'Demon slayer', 'Attack on titan']
    }
    const asuult4 = {
        zovHariu: 'Attack on titan',
        zurag: titan , 
        emoji: "⚔️🔰🐎🗝🧣",
        songoltuud: ['One piece', 'Naruto', 'Demon slayer', 'Attack on titan']
    }
    const asuult5 = {
        zovHariu: 'Death Note',
        zurag: note , 
        emoji: "📓🍎📝⚰️💀",
        songoltuud: ['One piece', 'Death Note', 'Demon slayer', 'Attack on titan']
    }
    const asuultuud =[ asuult1, asuult2, asuult3 ,asuult4, asuult5]
    const [togloomduslaa, settogloomduslaa] = useState(false)
    const [asuuldiindugaar, setasuuldiindugaar] = useState(0)
    const [onoo, setonoo] = useState(0)
    const asuult =  asuultuud [asuuldiindugaar]
 
    


    const handleClick = (songolt) => {
        audio.play()
        console.log("songolt", songolt);
        setHariult(songolt)
        if (songolt === asuuult.zovHariu) {
            setonoo(omnohonoo => omnohonoo+1 )
        } else {
           
        }
      
    
    setTimeout(() => {
        setasuuldiindugaar((omnohasuuldiindugaar)=>{
            const daraagindugaar = omnohasuuldiindugaar +1 
            if (daraagindugaar >= asuultuud.length) {
                settogloomduslaa(true)
                return 0;
            } else {
                return 0;
            }
        })
        setHariult('')
    },1500);
}
    const dahijtogloh =() =>{
        setasuuldiindugaar(0)
        settogloomduslaa(false)
        setonoo(0)

}


    return (
        <div className='guess'>
            { togloomduslaa && <div className='main'>
            <h1>game over</h1>
            <h1>niit avah onoo: {asuultuud.length}</h1>
            <h1>tani avsn onoo:{onoo}</h1>
            <button onClick={()=> dahijtogloh ()}> start game </button>
            </div>}
            

            { !togloomduslaa &&<div className='main'>
                <h1 className='title'>Guess the emoji game  {result} </h1>
                <h2 className='emoji'> { hariult ? <img src={asuult.zurag} width={350} height={180}/> : asuult.emoji} </h2>
                <div className='answers'>
                    {asuult.songoltuud.map((songolt, i) =>
                    
                            <button className={hariult === songolt && (asuult.zovHariu === hariult ? 'nogoon' : 'ulaan ') }
                            disabled={hariult}
                            onClick={() => handleClick(songolt)}>{songolt}</button>)}
                </div>
            </div>}
        </div>
    )
}

export default GuessEmojiGame