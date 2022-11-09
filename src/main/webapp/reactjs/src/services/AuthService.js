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


//pizza
export const addpizza = (data) => {
  return axios.post(baseUrl + '/employee/create', data, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const deletepizza = (id) => {
  return axios.delete(baseUrl + '/employee/delete/' + id, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const loadpizzas = () => {
  return axios.get(baseUrl + '/employee/all', {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const loadpizza = (id) => {
  return axios.get(baseUrl + '/employee/id/' + id, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const updatepizza = (data) => {
  return axios.put(baseUrl + '/employee/update', data, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

//shops
export const addshop = (data) => {
  return axios.post(baseUrl + '/employee/create', data, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const deleteshop = (id) => {
  return axios.delete(baseUrl + '/employee/delete/' + id, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const loadshops = () => {
  return axios.get(baseUrl + '/employee/all', {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const loadshop = (id) => {
  return axios.get(baseUrl + '/employee/id/' + id, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const updateshop = (data) => {
  return axios.put(baseUrl + '/employee/update', data, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};