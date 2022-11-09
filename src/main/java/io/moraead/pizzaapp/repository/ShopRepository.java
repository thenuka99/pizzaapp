package io.moraead.pizzaapp.repository;

import io.moraead.pizzaapp.model.Shop;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;



@Repository
public interface ShopRepository extends MongoRepository<Shop,String> {

}