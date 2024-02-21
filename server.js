// Declaring Inquirer, mysql, 
const inquirer = require('inquirer')
const mysql = require('mysql2');
const express = require('express');
const app = express();

// Middleware to parse the requests
app.use(express.urlencoded({ extended: false }));
// Middleware to use json
app.use(express.json());
// Creates variable for the database
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'team_db',
  }).promise();
  // logs message when connected
  console.log(`Connected to the team_db database.`)


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
      }
      else if (answers.options === "Add employee") {
         addEmployee();
      } 
      else if (answers.options === "Update employee role") {
         updateRole();
      }
      else if (answers.options === "View all roles") {
       viewRoles();
      }
      else if (answers.options === "Add role") {
         addRole();
      }
      else if (answers.options === "View all departments") {
         viewDepartments();
      }
      else if (answers.options === "Add department") {
         addDepartment();
      } 
    });
}

function showEmployees() {
  db.query('SELECT * FROM students', function (err, results) {
    console.log(results);
  });
}

function addEmployee() {}

function updateRole() {}

function viewRoles() {
  role
    .getAll()
    .then((rows) => {
      console.log(".::All Roles::.");
      console.table(rows);
    })
}

function addRole() {}

function viewDepartments() {
  let department = new Dpt();
  department.getAll().then((rows) => {
    console.log(`Departments`);
    console.table(rows);
  });
}

function addDepartment() {}

init();
