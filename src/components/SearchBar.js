import React from 'react';

class SearchBar extends React.Component{

    state = {temp:''}

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSearchSubmit(this.state.temp);        
    }

    render(){
        return(
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text" value={this.state.temp} onChange={(e) => {this.setState({temp: e.target.value.toUpperCase()})}}/>
                    </div>                    
                </form>
            </div>
        )
    }
}

export default SearchBar;