package io.moraead.pizzaapp.service;

import io.moraead.pizzaapp.model.Employee;
import io.moraead.pizzaapp.repository.EmployeeRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
public class EmloyeeService implements IEmployeeService{
    @Autowired
    private EmployeeRepository employeeRepository;

    @Override
    public Employee create(Employee employee) {
        return employeeRepository.save(employee);
    }

    @Override
    public List<Employee> findByName(String fName) {
        log.info("####### FIND BY First Name {} ",fName);
        List<Employee> employeeList = employeeRepository.findByName(fName);
        log.info("####### FIND BY employeeList {} ",employeeList);
        return employeeList;
    }


    @Override
    public List<Employee> findAll() {
        return employeeRepository.findAll();
    }

    @Override
    public void delete(String id) {
        employeeRepository.deleteById(id);
    }

    @Override
    public Employee update(Employee employee) {
        return employeeRepository.save(employee);
    }

    @Override
    public Employee findById(String id) {
        return employeeRepository.findById(id).get();
    }
}
