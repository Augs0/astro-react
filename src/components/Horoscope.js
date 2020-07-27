import React, { useEffect, useState } from 'react'

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
        </>
    }

}

Horoscope.defaultProps = {
    current: "aries"
}

export default Horoscope
