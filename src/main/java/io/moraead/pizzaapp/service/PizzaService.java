package io.moraead.pizzaapp.service;

import io.moraead.pizzaapp.model.Pizza;
import io.moraead.pizzaapp.repository.PizzaRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
public class PizzaService implements IPizzaService{
    @Autowired
    private PizzaRepository pizzaRepository;
    @Override
    public Pizza create(Pizza pizza) {
        return pizzaRepository.save(pizza);
    }

    @Override
    public List<Pizza> findAll() {
        return pizzaRepository.findAll();
    }

    @Override
    public void delete(String id) {
        pizzaRepository.deleteById(id);
    }

    @Override
    public Pizza update(Pizza pizza) {
        return pizzaRepository.save(pizza);
    }

    @Override
    public Pizza findById(String id) {
        return pizzaRepository.findById(id).get();
    }
}
