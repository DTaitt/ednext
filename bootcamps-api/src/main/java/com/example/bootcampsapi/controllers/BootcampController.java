package com.example.bootcampsapi.controllers;

import com.example.bootcampsapi.models.Bootcamp;
import com.example.bootcampsapi.repositories.BootcampRepository;

import java.util.*;
import org.springframework.web.bind.annotation.*;

import org.springframework.beans.factory.annotation.*;

@RestController
public class BootcampController {

    @Autowired
    private BootcampRepository bootcampRepo;

    @GetMapping("/all")
    public Iterable<Bootcamp> getAll() {
        return bootcampRepo.findAll();
    }

    @GetMapping("/view/{id}")
    public Bootcamp searchById(@PathVariable long id) {
        return bootcampRepo.findOne(id);
    }
}