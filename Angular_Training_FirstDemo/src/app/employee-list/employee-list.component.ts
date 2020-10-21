import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  selectedEmployeeCountRadioButton: string = 'All';
  employees: any[];
 

getEmployees(): void {
  this.employees = [
      {
          code: '2134', name: 'Lipsa', gender: 'Female',
          annualSalary: 600001, dateOfBirth: '12/2/1997'
      },
      {
          code: '1234', name: 'Sowmya', gender: 'Female',
          annualSalary: 654001.95, dateOfBirth: '5/7/1994'
      },
      {
          code: '3124', name: 'Mouli', gender: 'Male',
          annualSalary: 730210, dateOfBirth: '29/6/1995'
      },
  ];
}

getTotalEmployeesCount(): number {
  return this.employees.length;
}

getMaleEmployeesCount(): number {
  return this.employees.filter(e => e.gender === 'Male').length;
}

getFemaleEmployeesCount(): number {
  return this.employees.filter(e => e.gender === 'Female').length;
}
trackByEmpCode(index: number, employee: any): string {
  return employee.code;
}
  constructor() { 

    this.employees = [
      {
          code: '2134', name: 'Lipsa', gender: 'Female',
          annualSalary: 600001, dateOfBirth: '12/2/1997'
      },
      {
          code: '1234', name: 'Sowmya', gender: 'Female',
          annualSalary: 654001.95, dateOfBirth: '5/7/1994'
      },
  ];
  

  }

  ngOnInit(): void {
  }

  onEmployeeCountRadioButtonChange(selectedRadioButtonValue: string): void {
    alert("Emmiter Value="+selectedRadioButtonValue)
    this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
}

}
