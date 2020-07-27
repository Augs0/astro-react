import React, { useEffect, useState } from 'react'
import allSigns from '../assets/data/allsigns'

function Horoscope(props) {
    const [info, setSigns] = useState({});
    const { sign, date, horoscope } = info;

    const { current } = props;

    //need error handling
    useEffect(() => {
        const proxy = 'https://cors-anywhere.herokuapp.com/';
        const target = `http://ohmanda.com/api/horoscope/${current}`
        fetch(proxy + target)
            .then(res => res.json())
            .then(data => setSigns(data))
    }, [current])


    if (current === undefined) {
        return <p>Select your sign</p>;
    } else {
        return <>
            <h2 className="sign">{sign}</h2>
            <p>{date}</p>
            <p>{horoscope}</p>
            <div className="comp-wrapper">
                {allSigns.map((sign) => {
                    if (current === sign.name) {
                        return <div key={sign.id} className="comp-container">
                            <p>Best matches: {sign.best}</p>
                            <p>Worst matches: {sign.worst}</p>
                        </div>
                    } else {
                        return null
                    }

                })}</div>
        </>
    }

}

Horoscope.defaultProps = {
    current: "aries"
}

export default Horoscope
