import React from 'react';
import AppFilter from '../app-filter/app-filter';
import AppInfo from '../app-info/app-info';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import EmployessList from '../employees-list/employees-list';
import SearchPanel from '../search-panel/search-panel';
import './app.css';

class App extends React.Component{
   constructor(props) {
    super(props)
    this.state = {
        data : [
            {name: 'Andrew', salary: 3000, increase: false, rise: false, id: 1},
            {name: 'Nastya', salary: 1000, increase: false, rise: false, id: 2},
            {name: 'Olga', salary: 2000, increase: false, rise: false, id: 3}
        ],
        term: '',
        filter: 'all'
    }
    this.maxId = this.state.data.length + 1
   }

   deleteItem = (id) => {
    this.setState(({data}) => {
       const newData =  data.filter(item => item.id !== id)
        return {
            data: newData
        }
    })
   }

   addItem = (newItem) => {
    if (newItem.name.length < 3 || newItem.salary.length <= 0) {
        return
    }
    const itemWithId = {...newItem,increase: false, rise: false, id: this.maxId};
    this.setState(({data}) => {
        const newData = [...data, itemWithId];
        return {
            data: newData
        }
    })
    this.maxId++;
   }

   onToogle = (id, value) => {
    this.setState(({data}) => ({
        data: data.map(item => {
            if ( item.id === id) {
                return {...item, [value]: !item[value]}
            }
            return item;
        })
    }))
   }

   searchEmp = (items, term) => {
    if (term.length === 0) {
        return items;
    }

    return items.filter(item => {
        return item.name.indexOf(term) > -1
    })
   }
   
   onUpdateTerm = (term) => {
    this.setState({term});
   }

   filterBy = (items, filter) => {
    switch(filter) {
        case 'salary' :
            return items.filter(item => item.salary > 1000);
         case 'rise' :
            return items.filter(item => item.rise);
         default :
            return items;
    }
   }

   onUpdateTag = (filter) => {
    this.setState({filter});
   }

   render() {
    const {data, term, filter} = this.state;
    const allEmployees = this.state.data.length;
    const employeesWithRise = this.state.data.filter(item => item.increase).length;
    const visibleData = this.filterBy(this.searchEmp(data, term), filter);

    return (
        <div className="app">
            <AppInfo allEmployees={allEmployees} employeesWithRise={employeesWithRise}/>
            <div className="search-panel">
                <SearchPanel onUpdateTerm={this.onUpdateTerm}/>
                <AppFilter onUpdateTag={this.onUpdateTag} filter={filter}/>
            </div>
            <EmployessList
             data={visibleData}
            onDelete={this.deleteItem} 
            onToogle={this.onToogle}
            />
            <EmployeesAddForm onAdd={this.addItem}/>
        </div>
    )
   }
}

export default App;