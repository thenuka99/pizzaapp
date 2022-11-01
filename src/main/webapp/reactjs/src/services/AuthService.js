import axios from 'axios';
const baseUrl = 'http://localhost:8080/rest';


//employees
export const addemployee = (data) => {
  return axios.post(baseUrl + '/employee/create', data, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
export const deleteemployee= (id) => {
  return axios.delete(baseUrl + '/employee/delete/' + id, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const loademployees = () => {
  return axios.get(baseUrl + '/employee/all', {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const loademployee = (id) => {
  return axios.get(baseUrl + '/employee/id/' + id, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};


export const updateemployee = (data) => {
  return axios.put(baseUrl + '/employee/update', data, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

