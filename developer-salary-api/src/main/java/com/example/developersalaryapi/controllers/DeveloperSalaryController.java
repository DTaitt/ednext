package com.example.developersalaryapi.controllers;

import com.example.developersalaryapi.models.DeveloperSalary;
import com.example.developersalaryapi.repositories.DeveloperSalaryRepository;

import java.util.*;
import org.springframework.web.bind.annotation.*;

import org.springframework.beans.factory.annotation.*;

@RestController
public class DeveloperSalaryController {

    @Autowired
    private DeveloperSalaryRepository developerSalaryRepo;

    @GetMapping("/all")
    public Iterable<DeveloperSalary> getAll() {
        return developerSalaryRepo.findAll();
    }

    @GetMapping("/view/{id}")
    public DeveloperSalary searchById(@PathVariable long id) {
        return developerSalaryRepo.findOne(id);
    }
}