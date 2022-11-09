package io.moraead.pizzaapp.service;

import io.moraead.pizzaapp.model.Shop;

import java.util.List;

public interface IShopService {

    Shop create(Shop shop);

    List<Shop> findAll();

    void delete(String id);

    Shop update(Shop shop);

    Shop findById(String id);
}
