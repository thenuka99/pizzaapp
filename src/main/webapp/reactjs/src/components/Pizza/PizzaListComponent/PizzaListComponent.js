import React, { useEffect, useState } from 'react';
import './EmployeeListComponent.css';
import { Link } from 'react-router-dom';
import { deletepizza, loadpizzas} from '../../../services/AuthService';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const PizzaListComponent = () => {
  //useStates
  const [pizzas, setPizzas] = useState([]);    

    
  useEffect(() => {
    LoadPizzas();
  }, []);

  const LoadPizzas = async () => {

      try {
          const response = await loadpizzas();
          console.log(response.data);
          setPizzas(response.data);
      } catch (e) {
          console.log(e);
      }
  };

    const Deletepizza  = (item) => {
        setPizzas((prevState) =>
          prevState.filter((prevItem) => prevItem !== item)
        );
      };
    
 

  return (
      <div className='category_container'>
          <button>
          <a href="/addpizza"> Add Employee</a>
          </button>

          <table>
              <thead>
                  <tr>
                      <th scope="col">Title</th>
                      <th scope="col">price</th>
                      <th scope="col">veg</th>
                      <th scope="col">Edit</th>
                      <th scope="col">Delete</th>
                  </tr>
              </thead>
              <tbody>
                  {
                      pizzas.map((pizza) => (
                          <tr key={pizza.pizzaId}>
                              <td data-label="Title"><h4> {pizza.title}</h4></td>
                              <td data-label="price"><h4>Rs.{pizza.price} </h4></td>
                              <td data-label="vegetarian"><h4>{pizza.veg?"yes":"no"} </h4></td>
                              <td data-label="Edit" ><Link to={`/updatepizza/${pizza.pizzaId}`}><EditIcon/></Link> </td>
                              <td data-label="Delete"><DeleteIcon  onClick={() => Deletepizza(pizza)}/> </td>
                          </tr>
                      ))
                  }
              </tbody>
          </table>
      </div>
  );
};

export default PizzaListComponent