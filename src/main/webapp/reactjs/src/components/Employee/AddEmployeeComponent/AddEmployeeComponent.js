import React from 'react';
import { useNavigate } from "react-router-dom";
import {addemployee} from '../../../services/AuthService';


const AddEmployeeComponent = () => {

    const navigate = useNavigate();
    
    const handlepostSubmit = async (e) => {
        e.preventDefault();
        console.log(e);
        try {
            const response = await addemployee({
                fname: e.target.fname.value,
                lname: e.target.lname.value,
                address: e.target.address.value,
                contactNo:e.target.contactNo.value,
                email: e.target.email.value
            });
            console.log(response);
            navigate("/employee");
        } catch (e) {
            console.log(e);
        }
    };
    return (
        <div>
            <form onSubmit={handlepostSubmit}>

                <label className='label'>First Name</label>
                <div className='currentpass'>
                    <input
                        type='text'
                        id='fname'
                        name='fname'
                        placeholder='Your first name'
                        size='60'
                        maxLength='100'
                    />
                </div>

                <label className='label'>Last Name</label>
                <div className='currentpass'>
                    <input
                        type='text'
                        id='lname'
                        name='lname'
                        placeholder='Your last name'
                        size='60'
                        maxLength='100'
                    />
                </div>

                <label className='label'>Email</label>
                <div className='currentpass'>
                    <input
                        type='email'
                        id='email'
                        name='email'
                        placeholder='Your email'
                        size='60'
                        maxLength='100'
                    />
                </div>

                <label className='label'>Contact Number</label>
                <div className='currentpass'>
                    <input
                        type='text'
                        id='contactNo'
                        name='contactNo'
                        placeholder='Your contact number'
                        size='60'
                        maxLength='100'
                    />
                </div>

                <label className='label'>Address</label>
                <div className='currentpass'>
                    <input
                        type='text'
                        id='address'
                        name='address'
                        placeholder='Your address'
                        size='60'
                        maxLength='200'
                    />
                </div>

                <br />
                <input type='submit' value='Submit'></input>

            </form>
        </div>
    )
}

export default AddEmployeeComponent