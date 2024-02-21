SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name, role.salary, manager.first_name AS managerFirstName, manager.last_name AS managerLastName
FROM employee
LEFT JOIN role ON employee.role_id = role.id
LEFT JOIN department ON role.department_id = department.id
LEFT JOIN employee AS manager ON  manager.id = employee.manager_id;

--   db.query(`INSERT INTO department (name)`, function (err, results) {
--     console.table(answers);
--     init();
--   });