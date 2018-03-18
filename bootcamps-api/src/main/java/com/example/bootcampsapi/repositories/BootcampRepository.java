package com.example.bootcampsapi.repositories;

import com.example.bootcampsapi.models.Bootcamp;
import org.springframework.data.repository.CrudRepository;

public interface BootcampRepository extends CrudRepository<Bootcamp, Long> {

}