import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import {updatepizza,loadpizza} from '../../../services/AuthService';
import { useParams } from 'react-router-dom';

const UpdatePizzaComponent = () => {

  const navigate = useNavigate();
  const {id} =useParams();
  const [pizza, setPizza] = useState([]);    

  
  useEffect(() => {
      LoadPizza(id);
      console.log(id);
  }, [id]);

  const LoadPizza = async (id) => {

      try {
          const response = await loadpizza(id);
          console.log(response.data);
          setPizza(response.data);
      } catch (e) {
          console.log(e);
      }
  };

  const handlepostSubmit = async (e) => {
    e.preventDefault();
    console.log(e);
    try {
      const response = await updatepizza({
        pizzaId: id,
        title: e.target.title.value,
        price: e.target.price.value,
        veg: e.target.veg.value,
      });
      console.log(response);
      navigate("/pizza");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
    <form onSubmit={handlepostSubmit}>

      <label className='label'>Title</label>
      <div className='currentpass'>
        <input
          type='text'
          id='title'
          name='title'
          placeholder='pizza title'
          size='60'
          maxLength='100'
          defaultValue={pizza.title}
        />
      </div>

      <label className='label'>price</label>
      <div className='currentpass'>
        <input
          type='number'
          id='lname'
          name='lname'
          placeholder='Your last name'
          size='60'
          maxLength='100'
          defaultValue={pizza.price}
        />
      </div>

      <label className='label'>VEG/NONVEG</label>
      <div className='currentpass'>
        <select name="veg" id="veg" defaultValue={pizza.veg}>
          <option value="True">Veg</option>
          <option value="False">Non Veg</option>
        </select>
      </div>

      <br />
      <input type='submit' value='Submit'></input>

    </form>
  </div>
  )
}

export default UpdatePizzaComponent