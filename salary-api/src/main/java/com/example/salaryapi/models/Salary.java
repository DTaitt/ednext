package com.example.salaryapi.models;

import lombok.*;
import javax.persistence.*;

@Data
@AllArgsConstructor @NoArgsConstructor @Getter @Setter
@Entity @Table(name = "salary")
public class Salary {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "city_id")
    private Long id;

    @Column(name = "city")
    private String city;

    @Column(name = "salary")
    private int salary;

}

//    SELECT skill.* FROM skill INNER JOIN bootcamp_skill ON skill.skill_id = bootcamp_skill.skill_id WHERE bootcamp_skill.bootcamp_id=1;
