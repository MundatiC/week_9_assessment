//JavaScript program with 'Employee' and 'Manager' classes:
class Employee {
    constructor(name, salary) {
      this.name = name;
      this.salary = salary;
    }
  
    calculateAnnualSalary() {
      return this.salary * 12;
    }
  }
  
  class Manager extends Employee {
    constructor(name, salary, department) {
      super(name, salary);
      this.department = department;
    }
  
    calculateAnnualSalary() {
      const baseSalary = super.calculateAnnualSalary();
      const bonus = baseSalary * 0.1; // 10% bonus for managers
      return baseSalary + bonus;
    }
  }
  
  // Example usage
  const employee1 = new Employee("Jane Doe", 5000);
  const manager1 = new Manager("John Doe", 5000, "Marketing");
  const manager2 = new Manager("Jane Smith", 6000, "Sales");
  
 console.log(employee1.calculateAnnualSalary()); // Output: 60000
  console.log(manager1.calculateAnnualSalary()); // Output: 66000
  console.log(manager2.calculateAnnualSalary()); // Output: 79200
  