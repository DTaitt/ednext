package com.example.developersalaryapi.repositories;

import com.example.developersalaryapi.models.DeveloperSalary;
import org.springframework.data.repository.CrudRepository;

public interface DeveloperSalaryRepository extends CrudRepository<DeveloperSalary, Long> {

}