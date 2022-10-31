package io.moraead.pizzaapp.resource.impl;

import io.moraead.pizzaapp.domain.Pizza;
import io.moraead.pizzaapp.resource.Resource;
import io.moraead.pizzaapp.service.PizzaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;

@RestController
@RequestMapping("/pizza")
public class PizzaResourceImpl implements Resource<Pizza> {

    @Autowired
    private PizzaService pizzaService;

    @Override
    public ResponseEntity<Collection<Pizza>> findAll() {
        return new ResponseEntity<>(pizzaService.findAll(), HttpStatus.OK);
    }

    @Override
    public ResponseEntity<Pizza> findById(Long id) {
        return new ResponseEntity<>(pizzaService.findById(id), HttpStatus.OK);
    }

    @Override
    public ResponseEntity<Pizza> save(Pizza pizza) {
        return new ResponseEntity<>(pizzaService.save(pizza), HttpStatus.CREATED);
    }

    @Override
    public ResponseEntity<Pizza> update(Pizza pizza) {
        return new ResponseEntity<>(pizzaService.update(pizza), HttpStatus.OK);
    }

    @Override
    public ResponseEntity<Pizza> deleteById(Long id) {
        return new ResponseEntity<>(pizzaService.deleteById(id), HttpStatus.OK);
    }
}
