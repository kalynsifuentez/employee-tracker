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
    message: "Would you like to do?",
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

function addEmployee() {}

function updateRole() {}

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

function addRole() {}

function viewDepartments() {
  db.query(`select * from department`, function (err, results) {
    console.table(results);
    init();
  });
}

function addDepartment() {
  inquirer
    .prompt({
      type: "input",
      name: "name",
      message: "Enter department name:",
    })
    .then(function (answers) {
      db.query(
        `INSERT INTO  department (name) Values?`,
        "name",
        function (err, answers) {
          viewDepartments();
          init();
        }
      );
    });
}

init();
