import React, { useState } from 'react'
import allSigns from '../assets/data/allsigns'

function Signs() {
    const [currentSign, setSign] = useState();

    return (
        <>
            <h2>Zodiac Signs</h2>
            <div className="sign-wrapper">
                {allSigns.map((sign) => {
                    return <div key={sign.id} className="sign-container">
                        <img className="sign-img" src={sign.image} alt="sign" />
                        <button onClick={() => setSign(`${sign.name}`)} className="sign-name" type="button">{sign.name}
                        </button>
                    </div>

                })}</div>
        </>
    )
}


export default Signs