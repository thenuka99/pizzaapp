package io.moraead.pizzaapp.controller;

import io.moraead.pizzaapp.model.Pizza;
import io.moraead.pizzaapp.service.IPizzaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/pizza")
public class PizzaController {
    
    @Autowired
    private IPizzaService pizzaService;

    @GetMapping("/all")
    public List<Pizza> getAllPizzas(){
        return pizzaService.findAll();
    }

    @GetMapping("/id/{id}")
    public Pizza getPizzasById(@PathVariable String id){
        return pizzaService.findById(id);
    }

    @PostMapping("/create")
    public Pizza create(@RequestBody Pizza pizza){
        pizza.setPizzaId(UUID.randomUUID().toString());
        return pizzaService.create(pizza);
    }

    @PutMapping("/update")
    public Pizza update(@RequestBody Pizza pizza){
        return pizzaService.update(pizza);
    }

    @DeleteMapping("/delete/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void deleteById(@PathVariable String id){
        pizzaService.delete(id);
    }

}