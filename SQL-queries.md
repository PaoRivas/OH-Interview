## SQL Exercise
Given a database schema with the following tables:
- Employees: employee_id, first_name, last_name, salary, department_id
- Departments: department_id, department_name

Define the following sql queries:

- Find the highest salary in the 'Sales' department.
```sql

Select MAX(salary) from Employees group by department_id having department_id = (Select department_id from Departments where department_name = "Sales")

```
- Findthe average salary of employees in each department.
```sql

Select department_name, AVG(salary) as average_salary from Employees e join Departments d on e.department_id = d.department_id group by d.department_id 

```
- Findthe number of employees in each department.
```sql

Select department_name, COUNT(*) as number_of_employees from Employees e join Departments d on e.department_id = d.department_id group by d.department_id 

```
- Findthe top 5 highest-paid employees
```sql

Select * from Employees ORDER BY salary DESC LIMIT 5;

```