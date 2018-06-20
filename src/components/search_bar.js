import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = { term: '' };
    }

    render(){
        return (
        <div className="input-group md-form form-sm form-2 pl-0">
            <input 
                value={this.state.term} 
                onChange={event => this.onInputChange(event.target.value)} className="form-control my-0 py-1 red-border" type="text" placeholder="Search" aria-label="Search" />
            <div className="input-group-append">
                <span className="input-group-text red lighten-3" id="basic-text1"><i className="fa fa-search text-grey" aria-hidden="true"><img width='17px' className="searchButton" src="https://images.vexels.com/media/users/3/132068/isolated/lists/f9bb81e576c1a361c61a8c08945b2c48-search-icon.png" /></i></span>
            </div>
        </div>);
    }

    onInputChange(term){
        this.setState({ term});
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;

/*<div class="input-group md-form form-sm form-2 pl-0">
        <input class="form-control my-0 py-1 red-border" type="text" placeholder="Search" aria-label="Search" />
        <div class="input-group-append">
            <span class="input-group-text red lighten-3" id="basic-text1"><i class="fa fa-search text-grey" aria-hidden="true"></i></span>
        </div>
    </div>*/