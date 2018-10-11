import React from 'react';

const List = ({ persons, deletePerson }) => {
    return (
        <div>
            <h2>Numerot</h2>
            <table>
                <tbody>
                    {persons.map(person =>
                        <tr key={person.id}>
                            <td>{person.name}</td>
                            <td>{person.number}</td>
                            <td><button onClick={deletePerson.bind(this, person.id)}>poista</button></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default List