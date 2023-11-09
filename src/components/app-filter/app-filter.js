import React from 'react';
import './app-filter.css';

const AppFilter = (props) =>{
            const data = [
                {name: 'all', label: 'All employees'},
                {name: 'rise', label: 'With promotion at work'},
                {name: 'salary', label: 'Salary more than 1000$'},
            ];
        
        const buttons = data.map(({name, label}) => {
            const active = props.filter === name;
            const activeClass = active ? "btn-light" : 'btn-outline-light';
            return (
                <button 
            type='button'
            className={`btn ${activeClass}`} name={name} key={name}
            onClick={() => props.onUpdateTag(name)}
            >
                {label}
            </button>
            )
        })

    return (
        
            <div className="btn-group">
                {buttons}
            </div>
        )
}

export default AppFilter;