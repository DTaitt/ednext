INSERT INTO bootcamp
    (bootcamp, duration, bootcamp_cost, has_financing_plan, has_career_services)
VALUES
    ('general assembly', 12, 14950, true, true),
    ('new york code and design academy', 12, 10000, true, true),
    ('galvanize', 24, 21000, true, true),
    ('flatiron school', 15, 15000, true, true),
    ('fullstack academy', 13, 17610, true, true);


INSERT INTO skill
    (skill)
VALUES
    ('javascript'),
    ('css'),
    ('html'),
    ('react'),
    ('postgresql'),
    ('node'),
    ('express'),
    ('jquery'),
    ('ruby'),
    ('rails'),
    ('redux'),
    ('angular');

INSERT INTO bootcamp_skill
    (bootcamp_id, skill_id)
VALUES
    (1, 1),
    (1, 2),
    (1, 3),
    (1, 4),
    (1, 5),
    (1, 6),
    (1, 7),
    (1, 8),
    (1, 9),
    (1, 10),
    (2, 1),
    (2, 2),
    (2, 3),
    (2, 8),
    (2, 9),
    (2, 10),
    (3, 1),
    (3, 2),
    (3, 3),
    (3, 4),
    (3, 8),
    (3, 9),
    (3, 10),
    (3, 11),
    (3, 12),
    (4, 1),
    (4, 2),
    (4, 3),
    (4, 4),
    (4, 9),
    (4, 10),
    (4, 11),
    (5, 1),
    (5, 2),
    (5, 3),
    (5, 4),
    (5, 5),
    (5, 6),
    (5, 7),
    (5, 8);

--INSERT INTO bootcamp
--    (bootcamp, duration, bootcamp_cost, has_financing_plan, has_career_services,testing,skills)
--VALUES
--    ('general assembly', 12, 14950, true, true,'test',{1,2,3,4,5,6,7,8,9,10}),
--    ('new york code and design academy', 12, 10000, true, true,'test',{1,2,3,8,9,10}),
--    ('galvanize', 24, 21000, true, true,'test',{1,2,3,4,8,9,10,11,12}),
--    ('flatiron school', 15, 15000, true, true,'test',{1,2,3,4,9,10,11}),
--    ('fullstack academy', 13, 17610, true, true,'test',{1,2,3,4,5,6,7,8});