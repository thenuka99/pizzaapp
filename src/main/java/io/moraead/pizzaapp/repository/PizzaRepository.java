package io.moraead.pizzaapp.repository;

import io.moraead.pizzaapp.model.Pizza;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface PizzaRepository extends MongoRepository<Pizza,String> {
    @Query("{'title':?0}")
    public List<Pizza> findByTitle(String title);
}
