import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/userSlice'
import "./Dashboard.css"

function Dashboard() {
    const user = useSelector(selectUser)
    const data = user?.employeeList?.user

    return (
        <div className="login">
            <h1 className="h1">Employee List</h1>
            <div>
                <table>
                    <thead>
                        <tr>
                        {Object.keys(data[0]).map(item => <th>{item.toUpperCase()}</th>)}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => 
                       { return(
                        <tr>
                            {Object.values(item).map(i => <td>{i}</td>)}
                        </tr>)})
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Dashboard