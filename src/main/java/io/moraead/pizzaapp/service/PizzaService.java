package io.moraead.pizzaapp.service;

import io.moraead.pizzaapp.domain.Pizza;

import java.util.Collection;

public interface PizzaService {
    Collection<Pizza> findAll();

    Pizza findById(Long id);

    Pizza save(Pizza pizza);

    Pizza update(Pizza pizza);

    Pizza deleteById(Long id);

}
