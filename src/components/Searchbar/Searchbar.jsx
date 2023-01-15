import { useState } from 'react';

export function Searchbar({onSub}) {

    const [searchName, setSearchName] = useState('');

    const handleChange = (e) => {
        setSearchName(e.currentTarget.value.toLowerCase());
    };

    const handleSearch = (e) => {
        e.preventDefault();

        if (searchName.trim() === '') {
            return;
        };

        onSub(searchName.trim());
        
        setSearchName('');
    }
        return (
            <header className="searchbar">
                <form className="form" onSubmit={handleSearch}>
                    <button type="submit" className="button">
                        <span className="button-label">Search</span>
                    </button>

                    <input
                        className="input"
                        name='name'
                        value={searchName}
                        onChange={handleChange}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                    />
                </form>
            </header>)
    }