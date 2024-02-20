-- Department
INSERT INTO department (name)
VALUES
    ('Accounting'),
    ('Marketing'),
    ('Sales'),
    ('Information Technology'),
    ('Human Resources');

-- Role
INSERT INTO emp_role (title, salary, dpt_id)
VALUES
  ('Sales Lead', '75000', 3),
  ('Sales Associate', '50000', 3),
  ('Tech Lead', '160000', 4),
  ('Junior Engineer', '70000', 4),
  ('Account Manager', '70000', 1),
  ('Accountant', '80000', 1),
  ('Payroll Specialist', '60000', 5),
  ('Marketing Strategist', '120000', 2),
  ('Graphic Designer', '60000', 2),
  ('HR Manager', '90000', 5);
    
-- Employee
INSERT INTO employee (first_name, last_name, role_id,)
VALUES
  ('Robert', 'Locke', 2),
  ('Kristina', 'Schaberg', 1),
  ('Bruce', 'Springer', 4),
  ('Peter', 'Park', 2),
  ('Derek', 'Chan', 3),
  ('Paulina', 'Rios', 6),
  ('Heather', 'Mealey', 8),
  ('Sandy', 'Cheeks', 7),
  ('Emily', 'Smith', 5),
  ('Sarah', 'Danihel', 4),
  ('Antonio', 'Sarmadi', 7),
  ('Samantha', 'Lytle', 4);