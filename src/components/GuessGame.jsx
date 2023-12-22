import React, { useState } from 'react'
import './style.css'
import zov from "../components/img/mixkit-game-click-1114.wav"
import buruu from "../components/img/mixkit-click-error-1110.wav"
import one from "../components/img/onePiece..webp"
import naruto from "../components/img/naruto-cover.jpg"
import demon from "../components/img/demon.png"
import titan from "../components/img/titan.jpg"
import note from "../components/img/Death-Note.png"
import happy from  "../components/img/mixkit-game-level-completed-2059.wav"
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

const happygame = new Audio(happy);
const zovdarsan = new Audio(zov);
const buruudarsan = new Audio(buruu);

const GuessEmojiGame = () => {
    const [hariult, setHariult] = useState('')
    const { width, height } = useWindowSize()

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
        songoltuud: ['Death Note', 'Naruto', 'Attack on titan', 'Demon slayer']
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
    const asuultuud =[asuult1 , asuult2 , asuult3 , asuult4 , asuult5]
    const [asuuldiindugaar, setasuuldiindugaar] = useState(0)
    const [togloomduslaa, settogloomduslaa] = useState(false)
    const [onoo, setonoo] = useState(0)
    const asuult =  asuultuud [asuuldiindugaar ]

    const handleClick = (songolt) => {
        
        console.log("songolt", songolt);
        setHariult(songolt)
        if (songolt === asuult.zovHariu) {
            zovdarsan.play()
            setonoo(omnohonoo => omnohonoo+1 )
        } else {
           buruudarsan.play()
        }
    
    setTimeout(() => {
        setasuuldiindugaar((omnohasuuldiindugaar)=>{
            const daraagindugaar = omnohasuuldiindugaar + 1 
            console.log("daraagindugaar",daraagindugaar,asuultuud.length);
            if (daraagindugaar >= asuultuud.length) {
                settogloomduslaa(true)
                happygame.play();
                return 0 ;
            } else {
                return daraagindugaar;
            }
        })
        setHariult('')
    },2000);
}
    const dahijtogloh =() => {
        setasuuldiindugaar(0)
        settogloomduslaa(false)
        setonoo(0)
        happygame.pause();
        console.log(dahijtogloh);
}
    return (
        <div className='guess'>
            {togloomduslaa  && <div className='main'>
            <h1>Game Over </h1>
            <h1>niit avah onoo: {asuultuud.length}</h1>
            <h1>tani avsn onoo:{onoo}</h1>
            <button className='start' onClick={()=> dahijtogloh ()}> Start Game </button>
            <Confetti
             width={width}
             height={height}
           />
            
            </div>
            }
            { !togloomduslaa &&<div className='main'>
                <h1 className='title'>Guess the emoji game  </h1>
               { hariult ? 
               <img className='zurag' src={asuult.zurag} width={350} height={180}/> 
               : <h2 className='emoji'>{asuult.emoji}</h2>
               }
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

// react celebration animation