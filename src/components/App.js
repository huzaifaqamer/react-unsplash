import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';


class App extends React.Component {
    state = { 
        term: '',
        images: [],
        current_page: 1,
        total_pages: 0
    };

    onSearchSubmit = async (term) => {
        const response = await unsplash.get('/search/photos', {
            params: { query: term, page: 1 },
        });
        
        this.setState({ 
            term: term,
            images: response.data.results,
            current_page: 1,
            total_pages: response.data.total_pages
        });
    }

    onPageChange = async (page) => {
        const response = await unsplash.get('/search/photos', {
            params: { query: this.state.term, page: page },
        });
        
        this.setState({ 
            images: response.data.results,
            current_page: page,
        });
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onSubmit={this.onSearchSubmit} />
                <ImageList 
                    images={this.state.images}
                    current_page={this.state.current_page}
                    total_pages={this.state.total_pages}
                    onNewPage={this.onPageChange}
                />
            </div>
        );
    }
}

export default App;