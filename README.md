# Employee Tracker

## Description

A **content management systems (CMS)** to easily view and interact with information stored in databases. This command-line applicationaccepts user input to manage a company's employee database, using Node.js, Inquirer, and MySQL.

This app requires the use of the `Inquirer` package, ensure that you install and use Inquirer version 8.2.4. To do so, use the following command in your project folder: `npm i inquirer@8.2.4`.

## Functionality

User is presented with the following options: 
- View all departments
- View all roles
- View all employees
- Add a department
- Add a role
- Add an employee
- Update an employee role

`View all departments`
User is presented with a formatted table showing department names and department ids

`View all roles`
User is presented with the job title, role id, the department that role belongs to, and the salary for that role

`View all employees`
User is presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to

`Add a department`
User is prompted to enter the name of the department and that department is added to the database

`Add a role`
User is prompted to enter the name, salary, and department for the role and that role is added to the database

`Add an employee`
User is prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database

`Update an employee role`
User is prompted to select an employee to update and their new role and this information is updated in the database 
## Video Link

[App Walkthrough](https://drive.google.com/file/d/1ofsVsT1i_3pLv6Uv2gVOBADORLCOQ_41/view)

## Credits

- Tutor: Jose Lopez
- Student Collaboration: Martin Harvey
- Online: DopeDev, JPD