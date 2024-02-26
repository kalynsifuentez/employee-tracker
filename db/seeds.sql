-- Department
INSERT INTO department (name)
VALUES
    ('Accounting'),
    ('Marketing'),
    ('Sales'),
    ('Information Technology'),
    ('Human Resources');

-- Role
INSERT INTO role (title, salary, department_id)
VALUES
  ('Sales Lead', 75000, 3),
  ('Sales Associate', 50000, 3),
  ('Tech Lead', 160000, 4),
  ('Junior Engineer', 70000, 4),
  ('Account Manager', 70000, 1),
  ('Accountant', 80000, 1),
  ('Payroll Specialist', 60000, 5),
  ('Marketing Strategist', 120000, 2),
  ('Graphic Designer', 60000, 2),
  ('HR Manager', 90000, 5);
    
-- Employee
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
  ('Kyle', 'Smith', 1, NULL),
  ('Christine', 'Royal', 2,1),
  ('Cole', 'Sanders', 4, NULL),
  ('Kyler', 'Park', 2, NULL),
  ('Jerrek', 'Antonios', 3, NULL),
  ('Nicholas', 'Ramirez', 6, NULL),
  ('Heather', 'Golub', 8, NULL),
  ('Mandy', 'Sawers', 7, NULL),
  ('Rebecca', 'Smith', 5, NULL),
  ('Emma', 'Belcher', 4, NULL),
  ('Antonio', 'Halo', 7, NULL),
  ('Samantha', 'Fuller', 4, NULL);