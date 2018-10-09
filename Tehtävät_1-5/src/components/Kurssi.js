import React from 'react'

const Otsikko = ({ nimi }) => {
    return (
        <div>
            <h1>{nimi}</h1>
        </div>
    )
}

const Osa = ({ osa }) => {
    return (
        <p>{osa.nimi} {osa.tehtavia}</p>
    )
}

const Sisalto = ({ osat }) => {
    const rivit = () => osat.map(osa =>
        <div key={osa.id}>
            <Osa osa={osa} />
        </div>
    )

    return (
        <div>
            {rivit()}
        </div>
    )
}

const Yhteensa = ({ osat }) => {
    const tehtavat = osat.map(osa => osa.tehtavia)
    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    return (
        <p>yhteensä {tehtavat.reduce(reducer)} tehtävää</p>

    )
}

const Kurssi = ({ kurssi }) => {
    return (
        <div>
            <Otsikko nimi={kurssi.nimi} />
            <Sisalto osat={kurssi.osat} />
            <Yhteensa osat={kurssi.osat} />
        </div>
    )
}

export default Kurssi