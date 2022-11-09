package io.moraead.pizzaapp.service;

import io.moraead.pizzaapp.model.Pizza;

import java.util.List;

public interface IPizzaService {
    Pizza create(Pizza pizza);

    List<Pizza> findAll();

    void delete(String id);

    Pizza update(Pizza pizza);

    Pizza findById(String id);
}
