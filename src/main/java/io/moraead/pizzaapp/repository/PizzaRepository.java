package io.moraead.pizzaapp.repository;

import io.moraead.pizzaapp.model.Pizza;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface PizzaRepository extends MongoRepository<Pizza,String> {
}
