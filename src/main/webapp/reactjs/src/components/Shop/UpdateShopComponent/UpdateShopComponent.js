import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import {updateshop,loadshop} from '../../../services/AuthService';
import { useParams } from 'react-router-dom';

const UpdateShopComponent = () => {

  const navigate = useNavigate();
  const {id} =useParams();
  const [shop, setShop] = useState([]);    

  
  useEffect(() => {
      LoadShop(id);
      console.log(id);
  }, [id]);

  const LoadShop= async (id) => {

      try {
          const response = await loadshop(id);
          console.log(response.data);
          setShop(response.data);
      } catch (e) {
          console.log(e);
      }
  };

  const handlepostSubmit = async (e) => {
    e.preventDefault();
    console.log(e);
    try {
        const response = await updateshop({
            shopId:id,
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
                defaultValue={shop.name}
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
                defaultValue={shop.contactNo}
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
                defaultValue={shop.address}
            />
        </div>

        <br />
        <input type='submit' value='Submit'></input>

    </form>
</div>
  )
}

export default UpdateShopComponent;