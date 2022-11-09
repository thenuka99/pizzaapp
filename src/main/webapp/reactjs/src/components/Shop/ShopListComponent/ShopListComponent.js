import React, { useEffect, useState } from 'react';
import './EmployeeListComponent.css';
import { Link } from 'react-router-dom';
import { deleteshop, loadshops} from '../../../services/AuthService';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const ShopListComponent = () => {
  //useStates
  const [shops, setShops] = useState([]);    

    
  useEffect(() => {
      LoadShops();
  }, []);

  const LoadShops = async () => {

      try {
          const response = await loadshops();
          console.log(response.data);
          setShops(response.data);
      } catch (e) {
          console.log(e);
      }
  };

  const Deleteemployee = async(id) => {
      try {
          
          const response = await deleteshop(id);
          console.log('item deleted');
          console.log(response);
          LoadShops();
      } catch (e) {
          console.log(e);
      }
  };
 

  return (
      <div className='category_container'>
          <button className='btnAdd'>
          <a href="/addshop"> Add Shop</a>
          </button>

          <table>
              <thead>
                  <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Address</th>
                      <th scope="col">Contact Number</th>
                      <th scope="col">Edit</th>
                      <th scope="col">Delete</th>
                  </tr>
              </thead>
              <tbody>
                  {
                      shops.map((shop) => (
                          <tr key={shop.shopId}>
                              <td data-label="Name"><h4> {shop.name}</h4></td>
                              <td data-label="Address"><h4>{shop.address} </h4></td>
                              <td data-label="Contact Number"><h4>{shop.contactNo} </h4></td>
                              <td data-label="Edit" ><Link to={`/updateshop/${shop.shopId}`}><EditIcon/></Link> </td>
                              <td data-label="Delete"><DeleteIcon  onClick={() => Deleteemployee(shop.shopId)}/> </td>
                          </tr>
                      ))
                  }
              </tbody>
          </table>
      </div>
  );
};

export default ShopListComponent;