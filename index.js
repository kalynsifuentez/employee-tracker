// Declaring Inquirer, mysql,
const inquirer = require("inquirer");
const mysql = require("mysql2");
require("console.table");

// Creates variable for the database
const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "",
    database: "team_db",
  },
  // logs message when connected
  console.log(`Connected to the team_db database.`)
);

const questions = [
  {
    type: "list",
    name: "options",
    message: "What would you like to do?",
    choices: [
      "View all employees",
      "Add employee",
      "Update employee role",
      "View all roles",
      "Add role",
      "View all departments",
      "Add department",
    ],
  },
];

//Function provides prompts for questions about the type of logo user wants to create then writes the svg file.
function init() {
  inquirer
    .prompt(questions)
    // json data is accepted as user and logged to the console
    .then((answers) => {
      if (answers.options === "View all employees") {
        showEmployees();
      } else if (answers.options === "Add employee") {
        addEmployee();
      } else if (answers.options === "Update employee role") {
        updateRole();
      } else if (answers.options === "View all roles") {
        viewRoles();
      } else if (answers.options === "Add role") {
        addRole();
      } else if (answers.options === "View all departments") {
        viewDepartments();
      } else if (answers.options === "Add department") {
        addDepartment();
      }
    });
}

function showEmployees() {
  //employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
  db.query(
    `SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name, role.salary, manager.first_name AS managerFirstName, manager.last_name AS managerLastName
  FROM employee
  LEFT JOIN role ON employee.role_id = role.id
  LEFT JOIN department ON role.department_id = department.id
  LEFT JOIN employee AS manager ON  manager.id = employee.manager_id;`,
    function (err, results) {
      console.table(results);
      init();
    }
  );
}

function addEmployee() {
  db.query(`select * from role`, function (err, results) {
    const roleArray = results.map((role) => ({
      name: role.title,
      value: role.id,
    }));

    db.query(`select * from employee`, function (err, results) {
      const managerArray = results.map((employee) => ({
        name: `${employee.first_name} ${employee.last_name}`,
        value: employee.id,
      }));

      managerArray.unshift({
        name: "No Manager",
        value: null,
      });

      inquirer
        .prompt([
          {
            name: "newEmployeefirstName",
            type: "input",
            message: "What is the first name of the new employee?",
          },
          {
            name: "newEmployeelastName",
            type: "input",
            message: "What is the last name of the new emplyee?",
          },
          {
            name: "newEmployeeRole",
            type: "list",
            message: "What is the role of the new employee?",
            choices: roleArray,
          },
          {
            name: "managerID",
            type: "list",
            message: "Who is the manager of the new employee?",
            choices: managerArray,
          },
        ])
        .then((answer) => {
          let sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`;
          db.query(
            sql,
            [
              answer.newEmployeefirstName,
              answer.newEmployeelastName,
              answer.newEmployeeRole,
              answer.managerID,
            ],
            (error, response) => {
              if (error) throw error;
              console.log(`new employee added`);

              init();
            }
          );
        });
    });
  });
}

function viewDepartments() {
  db.query(`select * from department`, function (err, results) {
    console.table(results);
    init();
  });
}

function updateRole() {
  db.query(
    `SELECT employee.id, employee.first_name, employee.last_name, roles.title FROM employee LEFT JOIN roles ON employee.role_id = roles.id`,
    function (err, results) {
      const newEmployeeRoleArray = results.map((employee) => ({
        name: `${employee.first_name} ${employee.last_name}`,
        value: employee.id,
      }));

      db.query(`select * from role`, function (err, results) {
        const roleArray = results.map((role) => ({
          name: role.title,
          value: role.id,
        }));

        inquirer
          .prompt([
            {
              type: "list",
              name: "employee",
              message: "Please Select the Employee You Wish to Update.",
              choices: newEmployeeRoleArray,
            },
            {
              type: "list",
              name: "role",
              message: "Please Select the New Role of the Employee.",
              choices: roleArray,
            },
          ])
          .then((answer) => {
            let sql = "UPDATE employee SET role_id = ? WHERE id = ?";
            db.query(sql, [role.id, employee.id], (error, response) => {
              if (error) throw error;
              console.log(`new employee role added`);

              init();
            });
          });
      });
    }
  );
}

function viewRoles() {
  //job title, role id, the department that role belongs to, and the salary for that role
  db.query(
    `select role.title, role.id, department.name, role.salary from role left join department on role.department_id = department.id`,
    function (err, results) {
      console.table(results);
      init();
    }
  );
}

function addRole() {
  db.query(`select * from department`, function (err, results) {
    const deptArr = results.map((dept) => ({
      name: dept.name,
      value: dept.id,
    }));

    inquirer
      .prompt([
        {
          name: "newRole",
          type: "input",
          message: "What is the name of your new Role?",
        },
        {
          name: "newRoleSalary",
          type: "input",
          message: "What is the salary of your new Role?",
        },
        {
          name: "newRoleDepartmentID",
          type: "list",
          message: "What is the Department ID of your new Role?",
          choices: deptArr,
        },
      ])
      .then((answer) => {
        let sql = `INSERT INTO role (role.title, role.salary, role.department_id) VALUES (?, ?, ?)`;
        db.query(
          sql,
          [answer.newRole, answer.newRoleSalary, answer.newRoleDepartmentID],
          (error, response) => {
            if (error) throw error;
            console.log(`new role added`);

            init();
          }
        );
      });
  });
}

function viewDepartments() {
  db.query(`select * from department`, function (err, results) {
    console.table(results);
    init();
  });
}

function addDepartment() {
  inquirer
    .prompt([
      {
        name: "newDepartment",
        type: "input",
        message: "What is the name of your new Department?",
      },
    ])
    .then((answer) => {
      let sql = `INSERT INTO department (name) VALUES (?)`;
      db.query(sql, answer.newDepartment, (error, response) => {
        if (error) throw error;
        console.log(`new department added`);
        init();
      });
    });
}

init();
