package com.example.bootcampsapi.models;

import lombok.*;
import javax.persistence.*;

@Data
@AllArgsConstructor @NoArgsConstructor @Getter @Setter
@Entity @Table(name = "bootcamp")
public class Bootcamp {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "bootcamp_id")
    private Long id;

    @Column(name = "bootcamp")
    private String bootcamp;

    @Column(name = "duration")
    private int duration;

    @Column(name = "bootcamp_cost")
    private int bootcamp_cost;

    @Column(name = "has_financing_plan")
    private boolean has_financing_plan;

    @Column(name = "has_career_services")
    private boolean has_career_services;

}

//    SELECT skill.* FROM skill INNER JOIN bootcamp_skill ON skill.skill_id = bootcamp_skill.skill_id WHERE bootcamp_skill.bootcamp_id=1;
