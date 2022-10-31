package io.moraead.pizzaapp.model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Document(collection = "Pizza")
public class Pizza {
    @Id
    private String pizzaId;
    private String title;
    private String coverPhotoURL;
    private double price;
    private boolean veg;
}
