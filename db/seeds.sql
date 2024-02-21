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
  ('Robert', 'Locke', 1, NULL),
  ('Kristina', 'Schaberg', 2,1),
  ('Bruce', 'Springer', 4, NULL),
  ('Peter', 'Park', 2, NULL),
  ('Derek', 'Chan', 3, NULL),
  ('Paulina', 'Rios', 6, NULL),
  ('Heather', 'Mealey', 8, NULL),
  ('Sandy', 'Cheeks', 7, NULL),
  ('Emily', 'Smith', 5, NULL),
  ('Sarah', 'Danihel', 4, NULL),
  ('Antonio', 'Sarmadi', 7, NULL),
  ('Samantha', 'Lytle', 4, NULL);