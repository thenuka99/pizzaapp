package io.moraead.pizzaapp.controller;

import io.moraead.pizzaapp.model.Employee;
import io.moraead.pizzaapp.service.IEmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/employee")
public class EmployeeController {

    @Autowired
    private IEmployeeService employeeService;

    @GetMapping("/all")
    public List<Employee> getAllEmployees(){
        return employeeService.findAll();
    }

    @GetMapping("/id/{id}")
    public Employee getEmployeesById(@PathVariable String id){
        return employeeService.findById(id);
    }

    @PostMapping("/create")
    public Employee create(@RequestBody Employee employee){
        employee.setEmployeeId(UUID.randomUUID().toString());
        return employeeService.create(employee);
    }

    @PutMapping("/update")
    public Employee update(@RequestBody Employee employee){
        return employeeService.update(employee);
    }

    @DeleteMapping("/delete/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void deleteById(@PathVariable String id){
        employeeService.delete(id);
    }

}