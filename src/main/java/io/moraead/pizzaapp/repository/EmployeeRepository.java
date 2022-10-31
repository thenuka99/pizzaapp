package io.moraead.pizzaapp.repository;

import io.moraead.pizzaapp.model.Employee;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EmployeeRepository extends MongoRepository<Employee,String> {
    @Query("{'fName':?0}")
    public List<Employee> findByName(String fName);
}
