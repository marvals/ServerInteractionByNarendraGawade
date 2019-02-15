import { Component, OnInit } from '@angular/core';
import { AllEmployeeService } from '../Services/AllEmployeeServices/all-employee.service';
import { DeleteEmployeeService } from '../Services/DeleteEmployeeServices/delete-employee.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  private Gridapi;
  public rowSelection;
  columnDefs = [
    { field: 'EmployeeId' },
    { field: 'EmployeeName' },
    { field: 'Designation' },
    { field: 'Dob' },
    { field: 'Salary' }
  ];

  rowData = [];
  constructor(private Employee: AllEmployeeService, private deleteEmployeeService: DeleteEmployeeService, private router: Router) {
    this.Employee.getallEmployeedata().subscribe((data: any) => {
      this.rowData = data;
      console.log(data);
    },
      err => {
        console.log(err);
      }
    );
    this.rowSelection = 'multiple';
  }

  ngOnInit() {
  }

  // delete(Id, Name) {
  //   if (confirm('do you want to delete the employee')) {
  //     this.deleteEmployeeService.DeleteEmployee(Id, Name).subscribe((data) => {
  //       console.log(data);
  //     },
  //       err => {
  //         console.log(err);
  //       }
  //     );

  //   }
  // }

  onGridReady(params) {
    this.Gridapi = params.api;
  }

  deleteSelectrow() {
    const selectedRowNodes = this.Gridapi.getSelectedNodes();
    console.log(selectedRowNodes);
    const selectedIds = selectedRowNodes.map(function (rowNode) {
      return rowNode.id;
    });

    if (selectedIds.length <= 0) {
      alert('Please Select the Row To Delete');
      return '';
    }
    if (confirm('do you want to delete the employee')) {
      this.deleteEmployeeService.DeleteEmployee(this.rowData[selectedIds]).subscribe(data => {
        console.log(data);
        alert(data);
        this.router.navigate(['AllEmployee']);
      });
    }
  }
}
