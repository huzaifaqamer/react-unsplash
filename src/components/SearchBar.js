import React from 'react';


class SearchBar extends React.Component {
    state = {term: ''};

    onFormSubmit = event => {
        event.preventDefault();

        this.props.onSubmit(this.state.term);
    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Search Image</label>
                        <div className="fields">
                            <div className="fourteen wide field">
                                <input 
                                    type="text"
                                    onChange={(e) => this.setState({ term: e.target.value })}
                                    value={this.state.term} />
                            </div>
                            <div className="two wide field">
                                <div className="ui google plus button" onClick={this.onFormSubmit} tabIndex="0">
                                    <i className="search icon"></i>Search
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
          
        );
    }
}

export default SearchBar;