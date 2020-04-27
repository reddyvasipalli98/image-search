import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';


class App extends React.Component {

    onSearchSubmit(term){
        console.log(term);
        axios.get('',)
    }

    render(){
    return(
        <div className="ui container" style={{marginTop:'12px'}}>
            <SearchBar onSearchSubmit={this.onSearchSubmit}/>
        </div>
    )}
}

export default App;