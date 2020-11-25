import React from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';

class App extends React.Component {

  state = {
    contactreduced: contacts.slice(0,6),

  }

  addContact = () => {
    let listWithRandomContact = this.state.contactreduced.concat(
      contacts[Math.floor(Math.random() * contacts.length -1 )]
    )

    this.setState ({
      contactreduced: listWithRandomContact
  })

}


sortByPopularity = () => {
    let sortedList = this.state.contactreduced.sort(function (a,b) {
      return b.popularity - a.popularity
    })

    this.setState ({
      contactreduced: sortedList
    })
}

sortByName = () => {
  let sortedListName = this.state.contactreduced.sort(function (a,b) {
    return a.name.localeCompare(b.name)
  })

  this.setState ({
    contactreduced: sortedListName
  })
}

deleteContac = (id) => {
  const listCopy = [...this.state.contactreduced]
  const removeContact = listCopy.findIndex(item => item.id === id);

  listCopy.splice(removeContact, 1);

  this.setState ({
    contactreduced: listCopy
  })

}




  render () {
  return (
    <div className="App">
    <h1>IronContacts</h1>
    <button onClick={this.addContact}>Add Random Contact</button>
    <button onClick={this.sortByPopularity}>Sort by Popularity</button>
    <button onClick={this.sortByName}>Sort by Name</button>
    
     <table>
     <tr>
    <th>Picture</th>
    <th>Name</th>
    <th>Popularity</th>
    <th>Action</th>
  </tr>
     {this.state.contactreduced.map((contact) => (
      <tr>
         <td><img src={contact.pictureUrl} width="50"></img></td>
         <td>{contact.name}</td>
         <td>{contact.popularity.toFixed(2)}</td>
         <td><button onClick={() => this.deleteContac(contact.id)}>Delete</button></td>
      </tr>
     ))}
     </table>
    </div>
  );
}
}

export default App;
