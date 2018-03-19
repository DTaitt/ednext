package com.example.salaryapi.repositories;

import com.example.salaryapi.models.Salary;
import org.springframework.data.repository.CrudRepository;

public interface SalaryRepository extends CrudRepository<Salary, Long> {

}