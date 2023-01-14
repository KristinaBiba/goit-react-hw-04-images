import { Component } from 'react';

export class Searchbar extends Component {

    state = {
        searchName: '',
    }

    handleChange = (e) => {
        this.setState({ searchName: e.currentTarget.value.toLowerCase() });
    }
    handleSearch = (e) => {
        e.preventDefault();

        if (this.state.searchName.trim() === '') {
            return;
        };

        this.props.onSub(this.state.searchName.trim());
        
        this.setState({searchName: ''})
    }
    render() {
        return (
            <header className="searchbar">
                <form className="form" onSubmit={this.handleSearch}>
                    <button type="submit" className="button">
                        <span className="button-label">Search</span>
                    </button>

                    <input
                        className="input"
                        name='name'
                        value={this.state.searchName}
                        onChange={this.handleChange}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                    />
                </form>
            </header>)
    }
}
