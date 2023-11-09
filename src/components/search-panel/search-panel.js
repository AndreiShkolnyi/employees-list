import React from 'react';
import './search-panel.css';

class SearchPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }

    }

    onUpdateSearch = (e) => {
        const term = e.currentTarget.value;
        this.setState({term})
        this.props.onUpdateTerm(term);
    }

    render() {
        return (
            <input 
            type="text" 
            className="form-control search-input" 
            placeholder='Search an employee'
            onChange={this.onUpdateSearch}
            value={this.state.term}
            />
        )
    }
}

export default SearchPanel;