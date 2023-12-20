import React, { useState } from 'react'
import './style.css'
import one from "../components/img/onePiece..webp"
const GuessEmojiGame = () => {
    const [hariult, setHariult] = useState('')
    const [result, setResult] = useState('')
    const asuult = {
        zovHariu: 'One piece',
        zurag: one , 
        emoji: "🏴‍☠️👒🍖🐒⛵️",
        songoltuud: ['One piece', 'Naruto', 'Demon slayer', 'Attack on titan']
    }
    const handleClick = (songolt) => {
        console.log("songolt", songolt);
        setHariult(songolt)
      
    }
    return (
        <div className='guess'>
            <div className='main'>
                <h1 className='title'>Guess the emoji game  {result} </h1>
                <h2 className='emoji'> { hariult ? <img src={asuult.zurag} width={350} height={180}/> : asuult.emoji} </h2>
                <div className='answers'>
                    {asuult.songoltuud.map((songolt, i) =>
                    
                            <button className={hariult === songolt && (asuult.zovHariu === hariult ? 'nogoon' : 'ulaan ') }
                            disabled={hariult}
                            onClick={() => handleClick(songolt)}>{songolt}</button>)}
                </div>
            </div>
        </div>
    )
}

export default GuessEmojiGame