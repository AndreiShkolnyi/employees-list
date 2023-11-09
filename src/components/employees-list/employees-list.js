import './employees-list.css';
import EmployeesListItem from '../employees-list-item/employees-list-item';

const EmployessList = ({data, onDelete, onToogle}) => {
    return (
        <ul className="app-list list-group">
          {data.map((item) => {
            const {id, ...itemProps} = item;
            return <EmployeesListItem 
            onDelete={() => onDelete(id)}
            onToogle={(e) => onToogle(id, e.currentTarget.getAttribute('data-toggle'))}
            key={id} 
            {...itemProps}/>
          })}
        </ul>
    )
}

export default EmployessList;