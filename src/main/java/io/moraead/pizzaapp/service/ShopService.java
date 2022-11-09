package io.moraead.pizzaapp.service;

import io.moraead.pizzaapp.model.Shop;
import io.moraead.pizzaapp.repository.ShopRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
public class ShopService implements IShopService{
    @Autowired
    private ShopRepository shopRepository;

    @Override
    public Shop create(Shop shop) {
        return shopRepository.save(shop);
    }

    @Override
    public List<Shop> findAll() {
        return shopRepository.findAll();
    }

    @Override
    public void delete(String id) {
        shopRepository.deleteById(id);
    }

    @Override
    public Shop update(Shop shop) {
        return shopRepository.save(shop);
    }

    @Override
    public Shop findById(String id) {
        return shopRepository.findById(id).get();
    }
}