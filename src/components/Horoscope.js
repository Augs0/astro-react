import React, { useEffect, useState } from 'react'

function Signs() {
    const [info, setSigns] = useState({});
    const { sign, date, horoscope } = info;
    const current = 'pisces'

    //pass in user sign
    const getData = async () => {
        const proxy = 'https://cors-anywhere.herokuapp.com/';
        const target = `http://ohmanda.com/api/horoscope/${current}`
        const response = await fetch(proxy + target);
        const data = await response.json();
        setSigns(data);
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <>
            <h2 className="sign">{sign}</h2>
            <p>{date}</p>
            <p>{horoscope}</p>
        </>
    )
}

export default Signs
