import React, { useEffect, useState } from 'react';
import './EmployeeListComponent.css';
import { Link } from 'react-router-dom';
import { deleteemployee, loademployees} from '../../services/AuthService';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const EmployeeListComponent = () => {
    //useStates
    const [employees, setEmployees] = useState([]);    

    
    useEffect(() => {
        LoadEmployees();
    }, []);

    const LoadEmployees= async () => {

        try {
            const response = await loademployees();
            console.log(response.data);
            setEmployees(response.data);
        } catch (e) {
            console.log(e);
        }
    };

    const Deleteemployee = async(id) => {
        try {
            
            const response = await deleteemployee(id);
            console.log('item deleted');
            console.log(response);
            LoadEmployees();
        } catch (e) {
            console.log(e);
        }
    };
   

    return (
        <div className='category_container'>
            <button>
            <a href="/addemployee"> Add Employee</a>
            </button>

            <table>
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Address</th>
                        <th scope="col">Contact Number</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map((employee) => (
                            <tr key={employee.employeeId}>
                                <td data-label="Name"><h4> {employee.fname} {employee.lname}</h4></td>
                                <td data-label="Email"><h4>{employee.email} </h4></td>
                                <td data-label="Address"><h4>{employee.address} </h4></td>
                                <td data-label="Contact Number"><h4>{employee.contactNo} </h4></td>
                                <td data-label="Edit" ><Link to={`/updateemployee/${employee.employeeId}`}><EditIcon/></Link> </td>
                                <td data-label="Delete"><DeleteIcon  onClick={() => Deleteemployee(employee.employeeId)}/> </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default EmployeeListComponent;




