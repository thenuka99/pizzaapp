package io.moraead.pizzaapp.repository;

import io.moraead.pizzaapp.model.Pizza;
import io.moraead.pizzaapp.model.Shop;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ShopRepository extends MongoRepository<Shop,String> {
    @Query("{'name':?0}")
    public List<Shop> findByName(String name);
}