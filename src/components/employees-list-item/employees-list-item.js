import React from 'react';
import './employees-list-item.css';

const EmployeesListItem = (props) => {
    
        const {name, salary, onDelete, onToogle, increase, rise} = props;
        let className = increase ?
         'list-group-item d-flex justify-content-between increase' :
          'list-group-item d-flex justify-content-between';
        
        return (
            <li className ={rise ? (className + ' like') : className}>
                <span 
                onClick={onToogle}
                className='list-group-item-label' data-toggle="rise">{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
                <div className="d-flex justify-content-center align-items-center">
                    <button 
                    onClick={onToogle}
                     className="btn-cookie btn-sm"
                     data-toggle="increase"
                     >
                        <i className="fas fa-cookie"></i>
                        </button>
                         <button className="btn-trash btn-sm" onClick={onDelete}>
                        <i className="fas fa-trash"></i>
                        </button>
                        <i className="fas fa-star"></i>
                        </div>
    
                        
                </li>
        )
    }

export default EmployeesListItem;