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
@Document(collection = "Employee")
public class Employee {

    @Id
    private String employeeId;
    private String fName;
    private String lName;
    private String address;
    private String contactNo;
    private String email;
}
