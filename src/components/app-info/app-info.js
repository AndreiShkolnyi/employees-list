import './app-info.css';

const AppInfo = ({allEmployees, employeesWithRise}) => {
    return (
        <div className="app-info">
            <h1>Employees of N complany</h1>
            <h2>All employess: {allEmployees}</h2>
            <h2>Employess with cash prize: {employeesWithRise}</h2>
        </div>
    )
}

export default AppInfo;