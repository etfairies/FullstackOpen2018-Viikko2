import React from 'react';
import Add from './components/Add'
import List from './components/List'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            persons: [
                {
                    name: 'Arto Hellas',
                    number: '123'
                }
            ],
            newName: '',
            newNumber: ''
        }
    }

    handleNameChange = (event) => {
        this.setState({ newName: event.target.value })
    }

    handleNumberChange = (event) => {
        this.setState({ newNumber: event.target.value })
    }

    addPerson = (event) => {
        event.preventDefault()

        if (!this.state.persons.some(person => person.name === this.state.newName)) {
            const person = {
                name: this.state.newName,
                number: this.state.newNumber
            }

            const persons = this.state.persons.concat(person)
            this.setState({ persons })
        }

        this.setState({
            newName: '',
            newNumber: ''
        })
    }

    render() {
        return (
            <div>
                <h2>Puhelinluettelo</h2>

                <Add newName={this.state.newName} newNumber={this.state.newNumber}
                    handleNameChange={this.handleNameChange} handleNumberChange={this.handleNumberChange}
                    addPerson={this.addPerson} />
                <List persons={this.state.persons}/>
            </div>
        )
    }
}

export default App