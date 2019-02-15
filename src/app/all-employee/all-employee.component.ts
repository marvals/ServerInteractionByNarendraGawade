import { Component, OnInit } from '@angular/core';
import { AllEmployeeService } from '../Services/AllEmployeeServices/all-employee.service';
import { DeleteEmployeeService } from '../Services/DeleteEmployeeServices/delete-employee.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-all-employee',
  templateUrl: './all-employee.component.html',
  styleUrls: ['./all-employee.component.css']
})
export class AllEmployeeComponent implements OnInit {
  private Gridapi;
  columnDefs = [
    { field: 'EmployeeId' },
    { field: 'EmployeeName' },
    { field: 'Designation' },
    { field: 'Dob'  },
    { field: 'Salary'  }
  ];

  rowData = [];
  constructor(private Employee: AllEmployeeService, private deleteEmployeeService: DeleteEmployeeService, private router: Router) {
  }

  ngOnInit() {
    this.Employee.getallEmployeedata().subscribe((data: any) => {
      this.rowData = data;
      console.log(data);
    },
      err => {
        console.log(err);
      }
    );
  }
  onGridReady(params) {
    this.Gridapi = params.api;
  }
}
