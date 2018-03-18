CREATE TABLE IF NOT EXISTS bootcamp (
    bootcamp_id serial PRIMARY KEY,
    bootcamp VARCHAR(100) NOT NULL,
    duration INT NOT NULL,
    bootcamp_cost INT NOT NULL,
    has_financing_plan BOOLEAN NOT NULL,
    has_career_services BOOLEAN NOT NULL
);

CREATE TABLE skill (
    skill_id serial PRIMARY KEY,
    skill VARCHAR(100) NOT NULL
);


CREATE TABLE bootcamp_skill (
    CONSTRAINT bootcamp_skill_pk PRIMARY KEY (bootcamp_id, skill_id),
    bootcamp_id INT REFERENCES bootcamp (bootcamp_id) ON UPDATE CASCADE,
    skill_id int REFERENCES skill (skill_id) ON UPDATE CASCADE
);