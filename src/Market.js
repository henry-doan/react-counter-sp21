import { Component } from 'react';

class Market extends Component {
  state = { coins: [], loading: true }

  componentDidMount() {
    // , data, method: get, post, put,
    fetch('https://pokeapi.co/api/v2/pokemon/ditto' )
      .then( res => res.json() )
      .then( coins => {
        this.setState({ coins, loading: false });
      })
      .catch( err => console.log(err))
  }

  // xml, json, html
  render() {
    const { coins, loading } = this.state;
    if (loading) {
      return <span>...Loading Data</span>
    } else {
      return (
        <ol>
         { coins.abilities.map( c =>
             <li key={c.id}>{c.name}</li>
           )
         }
       </ol>
     )
   }
  }
}

export default Market;