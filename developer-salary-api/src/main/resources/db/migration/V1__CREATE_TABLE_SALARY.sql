CREATE TABLE IF NOT EXISTS salary_by_city (
    city_id serial PRIMARY KEY,
    city VARCHAR(100) NOT NULL,
    salary INT NOT NULL
);
