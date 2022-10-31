package io.moraead.pizzaapp.service;


import io.moraead.pizzaapp.model.Employee;
import java.util.List;

public interface IEmployeeService {
    Employee create(Employee employee);

    List<Employee> findByName(String fName);

    List<Employee> findAll();

    void delete(String id);

    Employee update(Employee employee);

    Employee findById(String id);
}
