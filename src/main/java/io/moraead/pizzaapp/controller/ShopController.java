package io.moraead.pizzaapp.controller;

import io.moraead.pizzaapp.model.Shop;
import io.moraead.pizzaapp.service.IShopService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/shop")
public class ShopController {

    @Autowired
    private IShopService shopService;

    @GetMapping("/all")
    public List<Shop> getAllShops(){
        return shopService.findAll();
    }

    @GetMapping("/id/{id}")
    public Shop getShopsById(@PathVariable String id){
        return shopService.findById(id);
    }

    @PostMapping("/create")
    public Shop create(@RequestBody Shop shop){
        shop.setShopId(UUID.randomUUID().toString());
        return shopService.create(shop);
    }

    @PutMapping("/update")
    public Shop update(@RequestBody Shop shop){
        return shopService.update(shop);
    }

    @DeleteMapping("/delete/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void deleteById(@PathVariable String id){
        shopService.delete(id);
    }

}