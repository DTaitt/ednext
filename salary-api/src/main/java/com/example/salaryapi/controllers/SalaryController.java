package com.example.salaryapi.controllers;

import com.example.salaryapi.models.Salary;
import com.example.salaryapi.repositories.SalaryRepository;

import java.util.*;
import org.springframework.web.bind.annotation.*;

import org.springframework.beans.factory.annotation.*;

@RestController
public class SalaryController {

    @Autowired
    private SalaryRepository salaryRepo;

    @GetMapping("/all")
    public Iterable<Salary> getAll() {
        return salaryRepo.findAll();
    }

    @GetMapping("/view/{id}")
    public Salary searchById(@PathVariable long id) {
        return salaryRepo.findOne(id);
    }
}