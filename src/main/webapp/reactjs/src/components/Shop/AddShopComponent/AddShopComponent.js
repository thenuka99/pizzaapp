import React from 'react'
import { useNavigate } from "react-router-dom";
import {addshop} from '../../../services/AuthService';

const AddShopComponent = () => {

  const navigate = useNavigate();

  const handlepostSubmit = async (e) => {
    e.preventDefault();
    console.log(e);
    try {
        const response = await addshop({
            name: e.target.name.value,
            address: e.target.address.value,
            contactNo:e.target.contactNo.value
        });
        console.log(response);
        navigate("/shop");
    } catch (e) {
        console.log(e);
    }
};
  return (
    <div>
            <form onSubmit={handlepostSubmit}>

                <label className='label'>Name</label>
                <div className='currentpass'>
                    <input
                        type='text'
                        id='name'
                        name='name'
                        placeholder='Shop name'
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
                        placeholder='shop contact number'
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
                        placeholder='shopS address'
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

export default AddShopComponent;