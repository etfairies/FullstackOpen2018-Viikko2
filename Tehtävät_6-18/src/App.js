import React from 'react';
import Add from './components/Add'
import List from './components/List'
import personService from './services/personservice'
import Notification from './components/Notification'
import './index.css'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            persons: [],
            newName: '',
            newNumber: '',
            message: null
        }
    }

    componentDidMount() {
        personService
            .getAll()
            .then(persons => {
                this.setState({ persons })
            })
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

            personService
                .create(person)
                .then(person => {
                    this.setState({
                        persons: this.state.persons.concat(person),
                        message: `Lisättiin ${person.name}`
                    })
                    setTimeout(() => {
                        this.setState({message: null})
                      }, 2000)
                })
        }

        this.setState({
            newName: '',
            newNumber: ''
        })
    }

    deletePerson = (id) => {
        const person = this.state.persons.find(person => person.id === id);

        if (window.confirm(`Poistetaanko ${person.name}?`)) {
            personService
                .remove(id)
                .then(() => {
                    this.setState({
                        persons: this.state.persons.filter(person => person.id !== id),
                        message: `Poistettiin ${person.name}`
                    })
                    setTimeout(() => {
                        this.setState({message: null})
                      }, 2000)
                })
        }
    }

    render() {
        return (
            <div>
                <h2>Puhelinluettelo</h2>
                <Notification message={this.state.message}/>
                <Add
                    newName={this.state.newName}
                    newNumber={this.state.newNumber}
                    handleNameChange={this.handleNameChange}
                    handleNumberChange={this.handleNumberChange}
                    addPerson={this.addPerson} />
                <List
                    persons={this.state.persons}
                    deletePerson={this.deletePerson} />
            </div>
        )
    }
}

export default App