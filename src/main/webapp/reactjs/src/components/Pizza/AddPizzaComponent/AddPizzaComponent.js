import React from 'react'
import { useNavigate } from "react-router-dom";
import { addpizza } from '../../../services/AuthService';

const AddPizzaComponent = () => {

  const navigate = useNavigate();

  const handlepostSubmit = async (e) => {
    e.preventDefault();
    console.log(e);
    try {
      const response = await addpizza({
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
          />
        </div>

        <label className='label'>price</label>
        <div className='currentpass'>
          <input
            type='number'
            id='price'
            name='price'
            placeholder='Your last name'
            size='60'
            maxLength='100'
          />
        </div>

        <label className='label'>VEG/NONVEG</label>
        <div className='currentpass'>
          <select name="veg" id="veg">
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

export default AddPizzaComponent;